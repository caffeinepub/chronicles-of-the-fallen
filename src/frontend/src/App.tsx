import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CampaignSelect } from "./components/CampaignSelect";
import { ChapterView } from "./components/ChapterView";
import { EndingScreen } from "./components/EndingScreen";
import { TitleScreen } from "./components/TitleScreen";
import { CAMPAIGNS, type CampaignData } from "./data/campaigns";
import {
  usePlayerProgress,
  useReachedEndings,
  useSaveProgress,
} from "./hooks/useQueries";

const queryClient = new QueryClient();

type Screen =
  | { type: "title" }
  | { type: "campaign-select" }
  | {
      type: "chapter";
      campaignId: string;
      chapterIndex: number;
      choices: string[];
    }
  | { type: "ending"; campaignId: string; endingId: string };

function GameApp() {
  const [screen, setScreen] = useState<Screen>({ type: "title" });
  const { data: savedProgress } = usePlayerProgress();
  const { data: reachedEndings = [] } = useReachedEndings();
  const { mutate: saveProgress } = useSaveProgress();
  const [progressRestored, setProgressRestored] = useState(false);

  useEffect(() => {
    if (progressRestored || !savedProgress) return;
    if (savedProgress.currentCampaign && savedProgress.currentChapter) {
      const campaignId = savedProgress.currentCampaign;
      const campaign = CAMPAIGNS.find((c) => c.id === campaignId);
      if (!campaign) return;
      const chapterIndex = campaign.chapters.findIndex(
        (ch) => ch.id === savedProgress.currentChapter,
      );
      if (chapterIndex >= 0) {
        setScreen({
          type: "chapter",
          campaignId,
          chapterIndex,
          choices: savedProgress.choices,
        });
      }
    }
    setProgressRestored(true);
  }, [savedProgress, progressRestored]);

  function handleStartGame() {
    setScreen({ type: "campaign-select" });
  }

  function handleSelectCampaign(campaign: CampaignData) {
    setScreen({
      type: "chapter",
      campaignId: campaign.id,
      chapterIndex: 0,
      choices: [],
    });
  }

  function handleChoice(
    campaignId: string,
    chapterIndex: number,
    prevChoices: string[],
    choiceId: string,
    _tag: "brave" | "cautious",
  ) {
    const campaign = CAMPAIGNS.find((c) => c.id === campaignId);
    if (!campaign) return;

    const newChoices = [...prevChoices, choiceId];
    const nextChapterIndex = chapterIndex + 1;

    if (nextChapterIndex >= campaign.chapters.length) {
      const braveCount = newChoices.filter((cId) => {
        for (const ch of campaign.chapters) {
          const found = ch.choices.find((c) => c.id === cId);
          if (found) return found.tag === "brave";
        }
        return false;
      }).length;
      const endingIndex =
        braveCount >= Math.ceil(campaign.chapters.length / 2) ? 0 : 1;
      const endingId = campaign.endings[endingIndex].id;

      saveProgress({
        currentCampaign: campaignId,
        currentChapter: campaign.chapters[campaign.chapters.length - 1].id,
        choices: newChoices,
        reachedEndings: Array.from(new Set([...reachedEndings, endingId])),
      });

      setScreen({ type: "ending", campaignId, endingId });
    } else {
      saveProgress({
        currentCampaign: campaignId,
        currentChapter: campaign.chapters[nextChapterIndex].id,
        choices: newChoices,
        reachedEndings,
      });

      setScreen({
        type: "chapter",
        campaignId,
        chapterIndex: nextChapterIndex,
        choices: newChoices,
      });
    }
  }

  const campaign =
    screen.type === "chapter" || screen.type === "ending"
      ? CAMPAIGNS.find((c) => c.id === screen.campaignId)
      : null;

  return (
    <AnimatePresence mode="wait">
      {screen.type === "title" && (
        <motion.div
          key="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TitleScreen onStart={handleStartGame} />
        </motion.div>
      )}

      {screen.type === "campaign-select" && (
        <motion.div
          key="campaign-select"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CampaignSelect
            onSelect={handleSelectCampaign}
            completedEndings={reachedEndings}
          />
        </motion.div>
      )}

      {screen.type === "chapter" && campaign && (
        <motion.div
          key={`chapter-${screen.campaignId}-${screen.chapterIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ChapterView
            campaign={campaign}
            chapterIndex={screen.chapterIndex}
            choices={screen.choices}
            onChoice={(choiceId, tag) =>
              handleChoice(
                screen.campaignId,
                screen.chapterIndex,
                screen.choices,
                choiceId,
                tag,
              )
            }
            onBack={() => setScreen({ type: "campaign-select" })}
          />
        </motion.div>
      )}

      {screen.type === "ending" && campaign && (
        <motion.div
          key={`ending-${screen.campaignId}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EndingScreen
            campaign={campaign}
            endingId={screen.endingId}
            onPlayAgain={() =>
              setScreen({
                type: "chapter",
                campaignId: screen.campaignId,
                chapterIndex: 0,
                choices: [],
              })
            }
            onReturnToCampaigns={() => setScreen({ type: "campaign-select" })}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameApp />
      <AppFooter />
    </QueryClientProvider>
  );
}

function AppFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  return (
    <footer
      className="w-full py-4 text-center font-cinzel tracking-widest uppercase"
      style={{
        color: "#E6E8EE",
        background: "oklch(0.09 0.010 255)",
        borderTop: "1px solid oklch(0.20 0.02 255)",
        fontSize: "0.6rem",
        opacity: 0.4,
      }}
    >
      © {year} &nbsp;·&nbsp; Built with ♥ using{" "}
      <a
        href={utmLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
        style={{ color: "#C89A3C" }}
      >
        caffeine.ai
      </a>
    </footer>
  );
}

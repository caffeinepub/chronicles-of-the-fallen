import { ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { CampaignData, Choice } from "../data/campaigns";

interface ChapterViewProps {
  campaign: CampaignData;
  chapterIndex: number;
  choices: string[];
  onChoice: (choiceId: string, tag: "brave" | "cautious") => void;
  onBack: () => void;
}

export function ChapterView({
  campaign,
  chapterIndex,
  choices: _choices,
  onChoice,
  onBack,
}: ChapterViewProps) {
  const [showOutcome, setShowOutcome] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  const chapter = campaign.chapters[chapterIndex];
  const totalChapters = campaign.chapters.length;
  const storyParagraphs = chapter.story.split("\n\n");

  function handleChoiceClick(choice: Choice) {
    setSelectedChoice(choice);
    setShowOutcome(true);
    setTimeout(() => {
      setShowOutcome(false);
      setSelectedChoice(null);
      onChoice(choice.id, choice.tag);
    }, 2800);
  }

  return (
    <div
      className="min-h-screen flex flex-col screen-fade-in"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, oklch(0.17 0.028 255) 0%, oklch(0.09 0.012 255) 70%)",
      }}
    >
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-4 md:px-8 py-3"
        style={{
          background: "oklch(0.10 0.015 255 / 0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid oklch(0.28 0.03 255)",
        }}
      >
        <button
          type="button"
          className="nav-link"
          data-ocid="chapter.back_button"
          onClick={onBack}
        >
          <ChevronLeft size={14} />
          <span>Campaigns</span>
        </button>
        <span
          className="font-cinzel uppercase tracking-widest text-xs hidden sm:block"
          style={{ color: "#C89A3C" }}
        >
          {campaign.characterName} — {campaign.title}
        </span>
        <div className="flex items-center gap-2">
          {campaign.chapters.map((ch, i) => (
            <div
              key={ch.id}
              className={`chapter-progress-dot ${i < chapterIndex ? "completed" : i === chapterIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div
          className="w-12 h-1 mb-6 rounded-full"
          style={{ background: campaign.accentColor }}
        />
        <p
          className="font-cinzel text-xs tracking-[0.25em] uppercase mb-2"
          style={{ color: campaign.accentColor }}
        >
          Chapter {chapterIndex + 1} of {totalChapters}
        </p>
        <h2
          className="font-cinzel font-bold uppercase text-center mb-8"
          style={{
            fontSize: "clamp(1.2rem, 4vw, 2rem)",
            color: "#E6E8EE",
            letterSpacing: "0.1em",
            textShadow: `0 0 30px ${campaign.accentColor}40`,
          }}
        >
          {chapter.title}
        </h2>

        <div className="w-full max-w-3xl flex flex-col md:flex-row gap-6 mb-10">
          <div
            className="hidden md:block flex-shrink-0"
            style={{ width: "140px" }}
          >
            <div
              className="w-full overflow-hidden"
              style={{
                border: `1px solid ${campaign.accentColor}50`,
                borderRadius: "2px",
                boxShadow: `0 0 20px ${campaign.accentColor}20`,
              }}
            >
              <img
                src={campaign.portrait}
                alt={campaign.characterName}
                className="w-full object-cover object-top"
                style={{ height: "180px", filter: "saturate(0.8)" }}
              />
            </div>
            <p
              className="font-cinzel text-center mt-2 uppercase"
              style={{
                color: campaign.accentColor,
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
              }}
            >
              {campaign.characterName}
            </p>
          </div>

          <div
            className="parchment-panel flex-1 p-6 md:p-8"
            style={{ borderRadius: "2px" }}
            data-ocid="chapter.panel"
          >
            {storyParagraphs.map((para, paraIdx) => (
              <p
                key={para.slice(0, 30)}
                className={`font-crimson text-base leading-relaxed ${paraIdx < storyParagraphs.length - 1 ? "mb-4" : ""}`}
                style={{ color: "oklch(0.82 0.01 255)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!showOutcome ? (
            <motion.div
              key="choices"
              className="w-full max-w-xl flex flex-col gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className="font-cinzel text-xs tracking-[0.2em] uppercase text-center mb-2"
                style={{ color: "oklch(0.50 0.008 255)" }}
              >
                — What will you do? —
              </p>
              {chapter.choices.map((choice, choiceIdx) => (
                <button
                  type="button"
                  key={choice.id}
                  className="choice-btn"
                  data-ocid={`chapter.choice_button.${choiceIdx + 1}`}
                  style={{ borderRadius: "2px" }}
                  onClick={() => handleChoiceClick(choice)}
                >
                  <span
                    className="font-cinzel mr-3"
                    style={{
                      color: campaign.accentColor,
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {choiceIdx === 0 ? "I." : "II."}
                  </span>
                  {choice.text}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="outcome"
              className="w-full max-w-xl parchment-panel p-6 text-center"
              style={{ borderRadius: "2px" }}
              data-ocid="chapter.success_state"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className="font-cinzel text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: campaign.accentColor }}
              >
                ✦ Choice Made ✦
              </p>
              <p
                className="font-crimson italic text-lg leading-relaxed"
                style={{ color: "oklch(0.80 0.015 80)" }}
              >
                {selectedChoice?.outcomeText}
              </p>
              <p
                className="font-cinzel text-xs tracking-widest mt-4"
                style={{ color: "#E6E8EE", opacity: 0.4 }}
              >
                Continuing...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

import { motion } from "motion/react";
import type { CampaignData } from "../data/campaigns";

interface EndingScreenProps {
  campaign: CampaignData;
  endingId: string;
  onPlayAgain: () => void;
  onReturnToCampaigns: () => void;
}

export function EndingScreen({
  campaign,
  endingId,
  onPlayAgain,
  onReturnToCampaigns,
}: EndingScreenProps) {
  const ending =
    campaign.endings.find((e) => e.id === endingId) ?? campaign.endings[0];
  const paragraphs = ending.text.split("\n\n");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 screen-fade-in"
      style={{
        background: `radial-gradient(ellipse at 50% 20%, ${campaign.accentColor}18 0%, oklch(0.09 0.012 255) 70%)`,
      }}
    >
      <div
        className="w-px mb-8"
        style={{
          height: "60px",
          background: `linear-gradient(180deg, transparent, ${campaign.accentColor})`,
        }}
      />

      <motion.div
        className="w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="font-cinzel text-xs tracking-[0.35em] uppercase mb-3"
          style={{ color: campaign.accentColor }}
        >
          {campaign.characterName} — {campaign.title}
        </p>
        <p
          className="font-cinzel text-xs tracking-[0.2em] uppercase mb-6"
          style={{ color: "#E6E8EE", opacity: 0.5 }}
        >
          Ending
        </p>

        <h2
          className="font-cinzel font-black uppercase mb-8"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            background: `linear-gradient(180deg, #F0CB6A 0%, ${campaign.accentColor} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.12em",
            filter: `drop-shadow(0 0 20px ${campaign.accentColor}50)`,
          }}
        >
          {ending.title}
        </h2>

        <div className="ornate-divider max-w-xs mx-auto mb-8">
          <span
            className="font-cinzel text-sm"
            style={{ color: campaign.accentColor }}
          >
            ✦
          </span>
        </div>

        <div
          className="parchment-panel p-8 mb-10 text-left"
          data-ocid="ending.panel"
          style={{
            borderRadius: "2px",
            borderColor: `${campaign.accentColor}30`,
          }}
        >
          {paragraphs.map((para, paraIdx) => (
            <p
              key={para.slice(0, 30)}
              className={`font-crimson text-lg leading-relaxed ${paraIdx < paragraphs.length - 1 ? "mb-4" : ""}`}
              style={{ color: "oklch(0.82 0.01 255)" }}
            >
              {para}
            </p>
          ))}
        </div>

        <p
          className="font-cinzel text-xs tracking-[0.4em] uppercase mb-8"
          style={{ color: "#E6E8EE", opacity: 0.4 }}
        >
          — Finis —
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            className="gold-button px-8 py-3"
            data-ocid="ending.primary_button"
            onClick={onReturnToCampaigns}
            style={{ borderRadius: "2px" }}
          >
            ← &nbsp; Return to Chronicles
          </button>
          <button
            type="button"
            className="choice-btn px-8 py-3 text-center font-cinzel text-xs tracking-widest uppercase"
            data-ocid="ending.secondary_button"
            onClick={onPlayAgain}
            style={{ borderRadius: "2px" }}
          >
            Play This Chronicle Again
          </button>
        </div>
      </motion.div>

      <div
        className="w-px mt-8"
        style={{
          height: "60px",
          background: `linear-gradient(180deg, ${campaign.accentColor}, transparent)`,
        }}
      />
    </div>
  );
}

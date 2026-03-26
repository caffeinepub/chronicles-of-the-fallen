import { motion } from "motion/react";
import { CAMPAIGNS, type CampaignData } from "../data/campaigns";

interface CampaignSelectProps {
  onSelect: (campaign: CampaignData) => void;
  completedEndings: string[];
}

export function CampaignSelect({
  onSelect,
  completedEndings,
}: CampaignSelectProps) {
  return (
    <div
      className="min-h-screen screen-fade-in"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.11 0.020 255) 0%, oklch(0.09 0.015 255) 100%)",
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(180px, 35vw, 320px)" }}
      >
        <img
          src="/assets/generated/hero-banner.dim_1400x600.jpg"
          alt="Chronicles of the Fallen"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.45) saturate(0.8)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.10 0.015 255 / 0.7) 100%)",
          }}
        >
          <h1
            className="font-cinzel font-black uppercase text-center leading-tight px-4"
            style={{
              fontSize: "clamp(1.8rem, 6vw, 4rem)",
              background:
                "linear-gradient(180deg, #F0CB6A 0%, #C89A3C 50%, #9B7128 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 20px rgba(200,154,60,0.5))",
              letterSpacing: "0.1em",
            }}
          >
            Chronicles of the Fallen
          </h1>
        </div>
      </div>

      <div className="text-center py-10 px-4">
        <div className="ornate-divider max-w-md mx-auto mb-4">
          <span className="font-cinzel text-xs" style={{ color: "#C89A3C" }}>
            ✦
          </span>
        </div>
        <h2
          className="font-cinzel uppercase tracking-[0.22em] mb-2"
          style={{ fontSize: "clamp(1rem, 3vw, 1.6rem)", color: "#E6E8EE" }}
        >
          Select Your Chronicle
        </h2>
        <p
          className="font-crimson italic text-base"
          style={{ color: "oklch(0.55 0.01 255)" }}
        >
          Each path leads somewhere you cannot predict.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 pb-16">
        {CAMPAIGNS.map((campaign, i) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            index={i}
            isCompleted={completedEndings.some((e) =>
              e.startsWith(campaign.id),
            )}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

function CampaignCard({
  campaign,
  index,
  isCompleted,
  onSelect,
}: {
  campaign: CampaignData;
  index: number;
  isCompleted: boolean;
  onSelect: (c: CampaignData) => void;
}) {
  return (
    <motion.div
      className="gothic-card overflow-hidden cursor-pointer group"
      style={{ borderRadius: "2px" }}
      data-ocid={`campaign.item.${index + 1}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(campaign)}
    >
      <div className="relative overflow-hidden" style={{ height: "220px" }}>
        <img
          src={campaign.portrait}
          alt={campaign.characterName}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "saturate(0.85) brightness(0.8)" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background: `linear-gradient(0deg, ${campaign.accentColor}55 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-12"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.10 0.015 255 / 0.7) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-3 left-3 font-cinzel px-2 py-1 uppercase"
          style={{
            background: "oklch(0.10 0.015 255 / 0.85)",
            border: `1px solid ${campaign.accentColor}80`,
            color: campaign.accentColor,
            borderRadius: "1px",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
          }}
        >
          {campaign.era}
        </div>
        {isCompleted && (
          <div
            className="absolute top-3 right-3 font-cinzel px-2 py-1 uppercase"
            style={{
              background: "oklch(0.72 0.12 80 / 0.2)",
              border: "1px solid #C89A3C80",
              color: "#C89A3C",
              borderRadius: "1px",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
            }}
          >
            ✓ Complete
          </div>
        )}
      </div>

      <div className="p-5">
        <p
          className="font-cinzel text-xs tracking-[0.2em] uppercase mb-1"
          style={{ color: campaign.accentColor }}
        >
          {campaign.characterName}
        </p>
        <h3
          className="font-cinzel font-bold uppercase leading-tight mb-3"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
            color: "#E6E8EE",
            letterSpacing: "0.06em",
          }}
        >
          {campaign.title}
        </h3>
        <div
          className="h-px mb-3"
          style={{
            background: `linear-gradient(90deg, ${campaign.accentColor}60, transparent)`,
          }}
        />
        <p
          className="font-crimson italic text-sm leading-relaxed mb-5"
          style={{ color: "oklch(0.65 0.01 255)" }}
        >
          “{campaign.tagline}”
        </p>
        <button
          type="button"
          className="gold-button w-full py-3"
          data-ocid={`campaign.primary_button.${index + 1}`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(campaign);
          }}
          style={{ borderRadius: "1px" }}
        >
          ✦ &nbsp; Select Campaign
        </button>
      </div>
    </motion.div>
  );
}

import { formatTooltipDate } from "./githubUtils";

function HeatmapTooltip({ tooltip }) {
  if (!tooltip) return null;

  return (
    <div
      className="
        pointer-events-none
        absolute
        z-50
        rounded-2xl
        border
        border-white/10
        bg-[#09090b]/95
        backdrop-blur-xl
        px-4
        py-3
        shadow-[0_18px_45px_rgba(0,0,0,0.45)]
        transition-all
        duration-200
      "
      style={{
        left: tooltip.x,
        top: tooltip.y,
        transform: "translate(-50%, calc(-100% - 14px))",
      }}
    >
      <p className="text-sm font-bold text-white">
        {formatTooltipDate(tooltip.date)}
      </p>

      <div className="mt-2 h-px w-full bg-white/10" />

      <p className="mt-2 text-sm text-white/70">
        <span className="font-semibold text-[#39D353]">
          {tooltip.count}
        </span>{" "}
        Contributions 🚀
      </p>
    </div>
  );
}

export default HeatmapTooltip;
import HeatmapTooltip from "./HeatmapTooltip";

import {
  levelToColor,
  makeTooltip,
} from "./githubUtils";

function GitHubHeatmap({
  data,
  tooltip,
  onTooltip,
}) {
  return (
    <div
      className="
      relative
      overflow-x-auto
      rounded-3xl
      border
      border-[var(--color-border)]
      bg-[var(--color-card-soft)]
      p-8
      shadow-lg
      [scrollbar-width:none]
      [-ms-overflow-style:none]
      [&::-webkit-scrollbar]:hidden
    "
    >
      <div className="min-w-[1150px]">

        {/* Month Labels */}

        <div
          className="mb-4 grid"
          style={{
            gridTemplateColumns: `60px repeat(${data.weeks.length}, 20px)`,
          }}
        >
          <div />

          {data.months.map((month) => (
            <div
              key={`${month.label}-${month.index}`}
              style={{
                gridColumnStart: month.index + 2,
              }}
              className="
                text-sm
                font-semibold
                text-[var(--color-body)]
              "
            >
              {month.label}
            </div>
          ))}
        </div>

        {/* Heatmap */}

        <div
          className="grid gap-y-2"
          style={{
            gridTemplateColumns: `60px repeat(${data.weeks.length},20px)`,
          }}
        >
          {data.weekdayLabels.map(
            (day, rowIndex) => (
              <div
                key={day}
                className="contents"
              >
                <div
                  className="
                  pr-3
                  text-xs
                  font-semibold
                  text-[var(--color-section-muted)]
                "
                  style={{
                    gridColumn: 1,
                    gridRow: rowIndex + 2,
                  }}
                >
                  {day}
                </div>

                {data.weeks.map(
                  (week, weekIndex) => {
                    const cell =
                      week[rowIndex];

                    return (
                      <button
                        key={`${weekIndex}-${rowIndex}`}
                        type="button"
                        aria-label={`${cell.date}: ${cell.count} contributions`}
                        style={{
                          gridColumn:
                            weekIndex + 2,
                          gridRow:
                            rowIndex + 2,
                        }}
                        className={`
                          h-5
                          w-5
                          rounded-md
                          border
                          border-white/5
                          transition-all
                          duration-300
                          hover:scale-125
                          hover:-translate-y-0.5
                          hover:border-green-400
                          hover:shadow-[0_0_15px_rgba(57,211,83,.45)]
                          ${levelToColor(
                            cell.level
                          )}
                        `}
                        onMouseEnter={(e) =>
                          onTooltip(
                            makeTooltip(
                              e.currentTarget,
                              cell
                            )
                          )
                        }
                        onMouseLeave={() =>
                          onTooltip(null)
                        }
                        onFocus={(e) =>
                          onTooltip(
                            makeTooltip(
                              e.currentTarget,
                              cell
                            )
                          )
                        }
                        onBlur={() =>
                          onTooltip(null)
                        }
                      />
                    );
                  }
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* Tooltip */}

      <HeatmapTooltip
        tooltip={tooltip}
      />

      {/* Footer */}

      <div
        className="
        mt-8
        flex
        flex-wrap
        items-center
        justify-between
        gap-4
      "
      >
        <p
          className="
          text-sm
          font-medium
          text-[var(--color-body)]
        "
        >
          {data.total} Contributions
        </p>

        <div className="flex items-center gap-2 text-sm text-[var(--color-body)]">

          <span>Less</span>

          <span className="h-4 w-4 rounded bg-[var(--color-gh-zero)]" />

          <span className="h-4 w-4 rounded bg-[#0E4429]" />

          <span className="h-4 w-4 rounded bg-[#006D32]" />

          <span className="h-4 w-4 rounded bg-[#26A641]" />

          <span className="h-4 w-4 rounded bg-[#39D353]" />

          <span>More</span>

        </div>
      </div>
    </div>
  );
}

export default GitHubHeatmap;
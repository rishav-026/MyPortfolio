import { githubTheme } from "./githubConfig";

/* -------------------- */
/* Contribution Colors  */
/* -------------------- */

export function levelToColor(level) {
  switch (level) {
    case 1:
      return githubTheme.level1;

    case 2:
      return githubTheme.level2;

    case 3:
      return githubTheme.level3;

    case 4:
      return githubTheme.level4;

    default:
      return githubTheme.empty;
  }
}

/* -------------------- */
/* Tooltip */
/* -------------------- */

export function makeTooltip(target, cell) {
  const rect = target.getBoundingClientRect();

  return {
    date: cell.date,
    count: cell.count,
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + window.scrollY,
  };
}

/* -------------------- */
/* Date Formatting */
/* -------------------- */

export function formatTooltipDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/* -------------------- */
/* Fallback Data */
/* -------------------- */

export function generateFallbackGithubContributions() {
  const end = new Date();

  end.setHours(0, 0, 0, 0);

  const start = new Date(end);

  start.setDate(start.getDate() - 364);

  const contributions = [];

  const cursor = new Date(start);

  while (cursor <= end) {
    const date = cursor.toISOString().slice(0, 10);

    const seed = Array.from(date.replace(/-/g, "")).reduce(
      (sum, char) => sum + Number(char),
      0
    );

    const count =
      (seed * 7 + cursor.getDate() + cursor.getMonth()) % 19;

    const level =
      count === 0
        ? 0
        : count < 4
        ? 1
        : count < 8
        ? 2
        : count < 13
        ? 3
        : 4;

    contributions.push({
      date,
      count,
      level,
    });

    cursor.setDate(cursor.getDate() + 1);
  }

  return contributions;
}

/* -------------------- */
/* Heatmap Builder */
/* -------------------- */

export function buildGithubHeatmap(contributions) {
  const byDate = new Map(
    (contributions || []).map((item) => [
      item.date,
      item,
    ])
  );

  const end = new Date();

  end.setHours(0, 0, 0, 0);

  const start = new Date(end);

  start.setDate(start.getDate() - 364);

  start.setDate(start.getDate() - start.getDay());

  const weeks = [];

  const cursor = new Date(start);

  while (cursor <= end) {
    const week = [];

    for (let day = 0; day < 7; day++) {
      const current = new Date(cursor);

      current.setDate(current.getDate() + day);

      current.setHours(0, 0, 0, 0);

      const key = current
        .toISOString()
        .slice(0, 10);

      week.push(
        byDate.get(key) || {
          date: key,
          count: 0,
          level: 0,
        }
      );
    }

    weeks.push(week);

    cursor.setDate(cursor.getDate() + 7);
  }

  const months = [];

  let lastMonth = -1;

  weeks.forEach((week, index) => {
    const month = new Date(
      week[0].date
    ).getMonth();

    if (month !== lastMonth) {
      months.push({
        index,
        label: new Date(
          week[0].date
        ).toLocaleString("en-US", {
          month: "short",
        }),
      });

      lastMonth = month;
    }
  });

  const total = weeks
    .flat()
    .reduce((sum, item) => sum + item.count, 0);

  return {
    total,
    weeks,
    months,
    weekdayLabels: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ],
  };
}
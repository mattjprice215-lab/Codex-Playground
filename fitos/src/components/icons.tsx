type IconProps = { className?: string };

export function DumbbellIcon({ className = "h-4 w-4" }: IconProps) {
  return <span className={className}>⌁</span>;
}

const iconPaths = {
  overview: [
    <path key="roof" d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z" />,
  ],
  training: [
    <path key="bar" d="M4 12h16" />,
    <path key="left" d="M7 8v8M10 9v6M14 9v6M17 8v8" />,
  ],
  metrics: [
    <path key="user" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    <path key="body" d="M5 21a7 7 0 0 1 14 0" />,
  ],
  photos: [
    <path key="frame" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />,
    <path key="sun" d="M8 9h.01" />,
    <path key="mountain" d="m7 16 3-3 2 2 3-4 2 5" />,
  ],
  performance: [
    <path key="trend" d="M4 17h16" />,
    <path key="line" d="m5 15 4-5 4 3 5-7" />,
    <path key="arrow" d="M15 6h3v3" />,
  ],
  records: [
    <path key="cup" d="M8 4h8v4a4 4 0 0 1-8 0z" />,
    <path key="handles" d="M8 6H5a3 3 0 0 0 3 3M16 6h3a3 3 0 0 1-3 3" />,
    <path key="base" d="M12 12v5M9 20h6" />,
  ],
  workouts: [
    <path key="calendar" d="M5 5h14v15H5z" />,
    <path key="rings" d="M8 3v4M16 3v4M5 10h14" />,
  ],
  measurements: [
    <path key="ruler" d="m5 19 14-14" />,
    <path key="case" d="M7 17 5 15l10-10 4 4-10 10z" />,
    <path key="ticks" d="m11 9 2 2M8 12l2 2M14 6l2 2" />,
  ],
  imports: [
    <path key="tray" d="M5 17v3h14v-3" />,
    <path key="arrow" d="M12 4v10m0 0 4-4m-4 4-4-4" />,
  ],
  sources: [
    <path key="nodes" d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
    <path key="links" d="M7.7 7.2 10.6 16M16.3 7.2 13.4 16" />,
  ],
  goals: [
    <path key="target" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />,
    <path key="rings" d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />,
  ],
  calendar: [
    <path key="box" d="M5 5h14v15H5z" />,
    <path key="top" d="M8 3v4M16 3v4M5 10h14" />,
    <path key="dot" d="M9 14h.01M12 14h.01M15 14h.01" />,
  ],
  notes: [
    <path key="page" d="M6 4h9l3 3v13H6z" />,
    <path key="fold" d="M15 4v4h4" />,
    <path key="lines" d="M9 12h6M9 16h6" />,
  ],
} as const;

export type NavIconName = keyof typeof iconPaths;

export function NavIcon({ name = "overview", className = "h-4 w-4" }: IconProps & { name?: NavIconName }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      {iconPaths[name]}
    </svg>
  );
}

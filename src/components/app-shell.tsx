"use client";

import { NavIcon } from "./icons";

const groups = [
  { label: "", items: ["Overview"] },
  { label: "Analytics", items: ["Training", "Body Metrics", "Progress Photos", "Performance", "PRs & Records"] },
  { label: "Data", items: ["All Workouts", "Body Measurements", "Import History", "Data Sources"] },
  { label: "Tools", items: ["Goals", "Calendar", "Notes"] },
];

export function AppShell({
  activePage,
  children,
  onNavigate,
}: {
  activePage: string;
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}) {
  return (
    <div className="min-h-screen bg-white lg:flex">
      <aside className="border-b border-slate-200 bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:w-56 lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center gap-3 px-5">
          <div className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 text-slate-950">≋</div>
          <div className="text-[13px] font-bold uppercase leading-4 tracking-wide">FitOS</div>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-3 pb-3 lg:block lg:space-y-5 lg:overflow-visible">
          {groups.map((group) => (
            <div key={group.label || "top"} className="shrink-0 lg:shrink">
              {group.label ? <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">{group.label}</div> : null}
              <div className="flex gap-1 lg:block lg:space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-medium ${item === activePage ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"}`}
                    onClick={() => onNavigate(item)}
                    type="button"
                  >
                    <NavIcon className="h-4 w-4" />
                    <span className="whitespace-nowrap">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="m-4 hidden rounded-xl border border-slate-200 p-4 text-xs lg:block">
          <div className="flex items-center justify-between font-semibold text-slate-800"><span>Sync Status</span><span className="text-emerald-500">✓</span></div>
          <p className="mt-3 text-slate-600">Connected to Google Drive</p>
          <p className="mt-1 text-slate-400">Last sync: 2 min ago</p>
        </div>
      </aside>
      <main className="w-full lg:pl-56">{children}</main>
    </div>
  );
}

"use client";

import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { bodyTrend, exerciseVolume, goals, measurements, prs, sources, volumeTrend, workouts } from "@/lib/mock-data";
import { Card, CardHeader, Skeleton } from "./ui";

const metrics = [
  ["Workouts", "24", "+20% vs Apr 12 - May 11", "text-emerald-600"],
  ["Total Volume", "21,530 kg", "+18% vs Apr 12 - May 11", "text-emerald-600"],
  ["Total Reps", "1,482", "+15% vs Apr 12 - May 11", "text-emerald-600"],
  ["Avg. Workout Time", "68 min", "+5% vs Apr 12 - May 11", "text-emerald-600"],
  ["Body Weight", "77.1 kg", "-1.3 kg vs Apr 12", "text-slate-500"],
  ["Body Fat %", "14.7 %", "-1.6% vs Apr 12", "text-slate-500"],
];

export function Dashboard() {
  return (
    <div className="mx-auto max-w-[1720px] px-4 py-4 sm:px-6">
      <header className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">Overview</h1>
          <p className="text-sm text-slate-500">Track. Analyze. Improve.</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded-lg border border-slate-200 px-4 py-2 font-semibold shadow-card">May 12 - Jun 8, 2024</button>
          <button className="rounded-lg border border-slate-200 px-4 py-2 font-semibold shadow-card">Filters</button>
          <button className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 font-bold">JD</button>
        </div>
      </header>

      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        {metrics.map(([label, value, delta, color]) => (
          <Card key={label} className="p-4">
            <div className="text-xs font-medium text-slate-500">{label}</div>
            <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
            <div className={`mt-1 text-[11px] ${color}`}>{delta}</div>
            <Skeleton className="mt-4 h-7 mini-line" />
          </Card>
        ))}
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-[2fr_1.35fr_1.25fr]">
        <Card className="min-h-[330px]">
          <CardHeader title="Lifting Progression" action={<button className="text-xs text-slate-500">All Exercises ▾</button>} />
          <div className="h-72 px-3 py-4">
            <ResponsiveContainer>
              <AreaChart data={volumeTrend}>
                <CartesianGrid stroke="#eef2f7" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} tickFormatter={(v) => (v === 1 ? "May 12" : v === 15 ? "May 26" : v === 27 ? "Jun 8" : "")} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${Number(v) / 1000}K`} />
                <Tooltip />
                <Area type="monotone" dataKey="volume" stroke="#2f80ed" fill="#dbeafe" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <CardHeader title="Top Exercises (Volume)" />
          <div className="grid gap-2 p-4 md:grid-cols-[170px_1fr] xl:grid-cols-1 2xl:grid-cols-[180px_1fr]">
            <div className="relative h-44">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={exerciseVolume} dataKey="value" innerRadius={52} outerRadius={78} paddingAngle={2}>
                    {exerciseVolume.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 grid place-items-center text-center text-sm font-bold">21,530<br /><span className="text-xs font-normal">kg</span></div>
            </div>
            <div className="space-y-2 text-xs">
              {exerciseVolume.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full" style={{ background: item.color }} />{item.name}</span>
                  <span className="text-slate-500">{item.value.toLocaleString()} kg</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Recent Workouts" action={<a className="text-xs font-semibold text-blue-600" href="#">View All</a>} />
          <div className="divide-y divide-slate-100">
            {workouts.map((workout) => (
              <div key={workout.id} className="flex items-center justify-between px-4 py-3 text-xs">
                <div><div className="font-semibold">{workout.name}</div><div className="mt-1 text-slate-500">{workout.date}</div></div>
                <div className="text-right"><div className="font-semibold">{workout.totalVolumeKg.toLocaleString()} kg</div><div className="mt-1 text-slate-500">Volume</div></div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-[1.15fr_1.35fr_1.25fr]">
        <Card><CardHeader title="Body Measurements" action={<button className="text-xs text-slate-500">InBody ▾</button>} /><MeasurementTable /></Card>
        <Card><CardHeader title="Body Composition Trend" /><CompositionChart /></Card>
        <Card><CardHeader title="Strength Progression" action={<a className="text-xs font-semibold text-blue-600" href="#">View All</a>} /><StrengthTable /></Card>
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-[1.1fr_1.6fr_1.4fr]">
        <Card><CardHeader title="Data Sources" /><div className="grid gap-2 p-4 sm:grid-cols-2">{sources.map((s) => <div key={s.name} className="rounded-lg border border-slate-200 p-3 text-xs"><div className="flex justify-between font-semibold"><span>{s.name}</span><span className={s.status === "synced" ? "text-emerald-500" : "text-amber-500"}>{s.status}</span></div><div className="mt-1 text-slate-500">Last sync: {s.lastSync}</div></div>)}</div></Card>
        <Card><CardHeader title="PRs This Month" /><div className="grid gap-2 p-4 sm:grid-cols-4">{prs.map((pr) => <div key={pr.exercise} className="rounded-lg border border-slate-200 p-3 text-xs"><div className="font-semibold">{pr.exercise}</div><div className="mt-1 text-lg font-bold">{pr.value}</div><div className="text-slate-500">{pr.date} · <span className="text-emerald-600">{pr.delta}</span></div></div>)}</div></Card>
        <Card><CardHeader title="Goals" action={<a className="text-xs font-semibold text-blue-600" href="#">View All</a>} /><div className="space-y-4 p-4">{goals.map((goal) => <div key={goal.label} className="text-xs"><div className="mb-2 flex justify-between font-semibold"><span>{goal.label} {goal.target}{goal.unit}</span><span>{Math.round((goal.current / goal.target) * 100)}%</span></div><div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-emerald-500" style={{ width: `${Math.min(100, (goal.current / goal.target) * 100)}%` }} /></div></div>)}</div></Card>
      </div>
    </div>
  );
}

function MeasurementTable() {
  return <table className="w-full text-left text-xs"><thead className="text-slate-500"><tr><th className="px-4 py-2">Metric</th><th>May 12</th><th>Jun 8</th><th>Change</th></tr></thead><tbody>{measurements.map((m) => { const d = +(m.current - m.start).toFixed(1); return <tr key={m.metric} className="border-t border-slate-100"><td className="px-4 py-2 font-semibold">{m.metric}</td><td>{m.start} {m.unit}</td><td>{m.current} {m.unit}</td><td className={d >= 0 ? "text-rose-500" : "text-emerald-600"}>{d > 0 ? "+" : ""}{d} {m.unit}</td></tr>; })}</tbody></table>;
}

function CompositionChart() {
  return <div className="h-64 p-4"><ResponsiveContainer><LineChart data={bodyTrend}><CartesianGrid stroke="#eef2f7" vertical={false} /><XAxis dataKey="date" tick={{ fontSize: 11 }} /><YAxis tick={{ fontSize: 11 }} /><Tooltip /><Line dataKey="weightKg" stroke="#2f80ed" strokeWidth={2} dot={false} /><Line dataKey="bodyFatPercent" stroke="#7c3aed" strokeWidth={2} dot={false} /><Line dataKey="skeletalMuscleMassKg" stroke="#22c55e" strokeWidth={2} dot={false} /></LineChart></ResponsiveContainer></div>;
}

function StrengthTable() {
  const rows = ["Bench Press", "Squat", "Deadlift", "Overhead Press", "Pull Up"];
  return <table className="w-full text-left text-xs"><thead className="text-slate-500"><tr><th className="px-4 py-2">Exercise</th><th>1RM Trend</th><th>Current 1RM</th></tr></thead><tbody>{rows.map((row, i) => <tr key={row} className="border-t border-slate-100"><td className="px-4 py-3 font-semibold">{row}</td><td><div className="h-6 w-28 rounded mini-line" /></td><td>{[115,150,180,70,20][i]} kg <span className="text-emerald-600">+{[5,10,15,2.5,2.5][i]} kg</span></td></tr>)}</tbody></table>;
}

import type { BodyCompositionReading, BodyMeasurement, DataSourceRecord, Goal, ImportHistoryRecord, PRRecord, RecoveryMetric, RawMeasurement, WearableMetric, WorkoutSession } from "@/types/fitness";

export const volumeTrend = [
  4200, 6900, 6500, 8200, 7100, 7600, 8900, 12200, 11300, 14000, 13600, 11600, 14400, 15000, 13600, 12800, 17600, 17100, 17900, 15800, 15400, 15100, 18700, 20200, 19900, 21700, 24200,
].map((volume, index) => ({ day: index + 1, volume }));

export const bodyTrend: BodyCompositionReading[] = [
  { date: "May 12", weightKg: 83.2, bodyFatPercent: 16.3, skeletalMuscleMassKg: 36.5, source: "InBody" },
  { date: "May 17", weightKg: 83.1, bodyFatPercent: 16.0, skeletalMuscleMassKg: 36.8, source: "InBody" },
  { date: "May 22", weightKg: 82.5, bodyFatPercent: 15.7, skeletalMuscleMassKg: 36.9, source: "Seca" },
  { date: "May 27", weightKg: 82.1, bodyFatPercent: 15.4, skeletalMuscleMassKg: 37.0, source: "Home Scale" },
  { date: "Jun 1", weightKg: 81.9, bodyFatPercent: 15.1, skeletalMuscleMassKg: 37.4, source: "InBody" },
  { date: "Jun 8", weightKg: 81.9, bodyFatPercent: 14.7, skeletalMuscleMassKg: 37.2, source: "InBody" },
];

export const exerciseVolume = [
  { name: "Bench Press", value: 5470, color: "#2f80ed" },
  { name: "Squat", value: 4760, color: "#7c3aed" },
  { name: "Deadlift", value: 3790, color: "#22c55e" },
  { name: "Overhead Press", value: 2110, color: "#f59e0b" },
  { name: "Pull Up", value: 1870, color: "#ef4444" },
  { name: "Other", value: 3530, color: "#94a3b8" },
];

export const workouts: WorkoutSession[] = [
  { id: "w1", name: "Push Day", date: "Jun 8, 2024", durationMinutes: 71, totalVolumeKg: 6250, source: "Fitbod" },
  { id: "w2", name: "Pull Day", date: "Jun 6, 2024", durationMinutes: 64, totalVolumeKg: 5210, source: "Fitbod" },
  { id: "w3", name: "Leg Day", date: "Jun 4, 2024", durationMinutes: 78, totalVolumeKg: 6100, source: "Fitbod" },
  { id: "w4", name: "Upper Body", date: "Jun 1, 2024", durationMinutes: 59, totalVolumeKg: 4560, source: "CSV" },
  { id: "w5", name: "Lower Body", date: "May 30, 2024", durationMinutes: 69, totalVolumeKg: 5410, source: "Fitbod" },
];

export const measurements: BodyMeasurement[] = [
  { metric: "Weight", start: 78.4, current: 77.1, unit: "kg", source: "InBody" },
  { metric: "Body Fat %", start: 16.3, current: 14.7, unit: "%", source: "InBody" },
  { metric: "Skeletal Muscle Mass", start: 36.5, current: 37.2, unit: "kg", source: "Seca" },
  { metric: "Waist", start: 82.3, current: 80.1, unit: "cm", source: "CSV" },
  { metric: "Chest", start: 101.2, current: 102.4, unit: "cm", source: "CSV" },
  { metric: "Arms", start: 34.1, current: 34.6, unit: "cm", source: "CSV" },
];

export const sources: DataSourceRecord[] = [
  { name: "Fitbod", status: "synced", lastSync: "2 min ago", confidence: 0.94 },
  { name: "InBody", status: "synced", lastSync: "2 min ago", confidence: 0.96 },
  { name: "Apple Health", status: "warning", lastSync: "18 min ago", confidence: 0.82 },
  { name: "CSV", status: "synced", lastSync: "1 hr ago", confidence: 0.78 },
];

export const prs: PRRecord[] = [
  { exercise: "Back Squat", value: "150 kg", date: "Jun 4", delta: "+10 kg" },
  { exercise: "Deadlift", value: "180 kg", date: "Jun 4", delta: "+15 kg" },
  { exercise: "Bench Press", value: "115 kg", date: "Jun 1", delta: "+5 kg" },
  { exercise: "Pull Up", value: "+20 kg", date: "May 28", delta: "+2.5 kg" },
];

export const goals: Goal[] = [
  { label: "Bench Press", current: 115, target: 120, unit: "kg" },
  { label: "Body Fat", current: 14.7, target: 13, unit: "%" },
];

export const imports: ImportHistoryRecord[] = [
  { id: "i1", filename: "fitbod_export_june.csv", source: "CSV", importedAt: "Jun 8, 2024", rows: 428, conflicts: 2 },
  { id: "i2", filename: "inbody_scan.xlsx", source: "Excel", importedAt: "Jun 8, 2024", rows: 18, conflicts: 1 },
];

export const rawMeasurements: RawMeasurement[] = [
  { id: "raw-weight-inbody", metric: "weight", value: 77.1, unit: "kg", measuredAt: "2024-06-08", source: "InBody", confidence: 0.96, rawPayload: { device: "InBody 770" } },
  { id: "raw-weight-scale", metric: "weight", value: 77.6, unit: "kg", measuredAt: "2024-06-08", source: "Home Scale", confidence: 0.74, rawPayload: { device: "consumer scale" } },
];

export const recoveryMetrics: RecoveryMetric[] = [
  { date: "Jun 8", hrvMs: 61, restingHeartRate: 48, sleepHours: 7.4, source: "Apple Health" },
];

export const wearableMetrics: WearableMetric[] = [
  { date: "Jun 8", steps: 9420, activeCalories: 682, vo2Max: 49, source: "Garmin" },
];

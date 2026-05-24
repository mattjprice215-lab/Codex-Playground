export type SourceName = "Fitbod" | "InBody" | "Seca" | "Apple Health" | "Home Scale" | "Cronometer" | "Garmin" | "CSV" | "Excel";

export interface RawMeasurement<T = number> {
  id: string;
  metric: string;
  value: T;
  unit: string;
  measuredAt: string;
  source: SourceName;
  confidence: number;
  rawPayload: Record<string, unknown>;
}

export interface CanonicalMetric {
  metric: string;
  bestEstimate: number;
  unit: string;
  primarySource: SourceName;
  contributingMeasurementIds: string[];
  conflictCount: number;
}

export interface WorkoutSession {
  id: string;
  name: string;
  date: string;
  durationMinutes: number;
  totalVolumeKg: number;
  source: SourceName;
}

export interface ExerciseSet {
  workoutId: string;
  exercise: string;
  reps: number;
  weightKg: number;
  rpe?: number;
}

export interface BodyMeasurement {
  metric: string;
  start: number;
  current: number;
  unit: string;
  source: SourceName;
}

export interface BodyCompositionReading {
  date: string;
  weightKg: number;
  bodyFatPercent: number;
  skeletalMuscleMassKg: number;
  source: SourceName;
}

export interface DataSourceRecord {
  name: SourceName;
  status: "synced" | "warning" | "disconnected";
  lastSync: string;
  confidence: number;
}

export interface ImportHistoryRecord {
  id: string;
  filename: string;
  source: SourceName;
  importedAt: string;
  rows: number;
  conflicts: number;
}

export interface PRRecord {
  exercise: string;
  value: string;
  date: string;
  delta: string;
}

export interface Goal {
  label: string;
  current: number;
  target: number;
  unit: string;
}

export interface RecoveryMetric {
  date: string;
  hrvMs: number;
  restingHeartRate: number;
  sleepHours: number;
  source: SourceName;
}

export interface WearableMetric {
  date: string;
  steps: number;
  activeCalories: number;
  vo2Max?: number;
  source: SourceName;
}

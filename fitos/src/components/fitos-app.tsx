"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Dashboard } from "@/components/dashboard";

export function FitOSApp() {
  const [activePage, setActivePage] = useState("Overview");

  return (
    <AppShell activePage={activePage} onNavigate={setActivePage}>
      <Dashboard activePage={activePage} />
    </AppShell>
  );
}

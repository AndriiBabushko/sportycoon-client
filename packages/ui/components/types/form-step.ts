import type { ReactNode } from "react";

export interface FormStep {
  id: string;
  renderComponent: ReactNode;
  title: string;
  description: string;
}

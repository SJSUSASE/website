export type Tier = {
  id: "bronze" | "silver" | "gold";
  name: string;
  price: number;
  /** One-line pitch shown on the summary card. */
  summary: string;
  benefits: string[];
  /** Gold inherits everything in the Silver column. */
  inheritsFrom?: Tier["id"];
  featured?: boolean;
};

/** A row in the full tier comparison table. */
export type BenefitRow = {
  label: string;
  bronze: string | boolean;
  silver: string | boolean;
  gold: string | boolean;
};

export type NamedDescription = {
  name: string;
  description: string;
};

export type Highlight = {
  title: string;
  body: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Slice = {
  label: string;
  value: number;
};

export type CostLine = {
  label: string;
  amount: number;
};

export type Conference = {
  id: "sc" | "wrc";
  abbreviation: string;
  name: string;
  when: string;
  body: string;
  costs: CostLine[];
  costNote: string;
};

export type TimelineEntry = {
  when: string;
  what: string;
};

export type CalendarEntry = {
  date: string;
  event: string;
  owner: "SJSU" | "SASE";
};

export type CalendarYear = {
  year: number;
  entries: CalendarEntry[];
};

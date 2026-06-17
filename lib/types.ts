export type Locale = "en" | "ar";

export type Localized<T> = Record<Locale, T>;

export type NavItem = {
  href: string;
  labels: Localized<string>;
};

export type Stat = {
  value: string;
  suffix?: string;
  labels: Localized<string>;
  descriptions?: Localized<string>;
};

export type TextCard = {
  key: string;
  eyebrow?: Localized<string>;
  titles: Localized<string>;
  subtitles?: Localized<string>;
  bodies: Localized<string>;
  icon?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  roles: Localized<string>;
  bios: Localized<string>;
  image: string;
  group: "research" | "engineering";
};

export type Download = {
  slug: string;
  filenames: Localized<string>;
  descriptions: Localized<string>;
  filePath: string;
};

export type EngineeringProject = {
  slug: string;
  categories: Localized<string>;
  titles: Localized<string>;
  locations: Localized<string>;
  descriptions: Localized<string>;
  color: string;
  images: string[];
};

export type EngineeringClient = {
  slug: string;
  name: string;
  logoUrl: string;
};

export type ContactChannel = {
  type: "email" | "phone";
  label: string;
  value: string;
  href: string;
};

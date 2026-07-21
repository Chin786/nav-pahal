import { Expert } from "./types";
import { PILLARS_CONTENT, SERVICES_DATA as SITE_SERVICES } from "./content/siteContent";

export const PILLARS_DATA = PILLARS_CONTENT.value;

export const SERVICES_DATA = SITE_SERVICES.map((s) => ({
  id: s.id,
  title: s.title,
  iconName: s.iconName,
  description: s.description,
  colorClass: s.colorClass,
}));

export const EXPERTS_DATA: Expert[] = [];

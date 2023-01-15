import { Locale as TLocale } from "../api/locale/Locale";

export const LOCALE_TITLE_FIELD = "name";

export const LocaleTitle = (record: TLocale): string => {
  return record.name || String(record.id);
};

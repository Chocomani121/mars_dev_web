import countries from 'i18n-iso-countries'
import type { LocaleData } from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'

countries.registerLocale(en as LocaleData)

const names = countries.getNames('en', { select: 'official' })

/** Alpha-2 code + English (official) name, sorted A–Z. */
export const COUNTRY_OPTIONS: { code: string; name: string }[] = Object.entries(
  names
)
  .map(([code, name]) => ({ code, name }))
  .sort((a, b) => a.name.localeCompare(b.name, 'en'))

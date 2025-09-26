let cachedTranslations

const loadTranslations = async () => {
  if (cachedTranslations) {
    return cachedTranslations
  }

  const module = await import('../data/translations.json')
  cachedTranslations = module.default ?? module
  return cachedTranslations
}

/**
 * Fetches the homepage blurb in the requested language.
 * Defaults to Elvish to support the initial parchment view.
 */
export const getBlurb = async (language = 'elvish') => {
  const data = await loadTranslations()
  return data?.blurb?.[language] ?? ''
}

export default {
  getBlurb,
}

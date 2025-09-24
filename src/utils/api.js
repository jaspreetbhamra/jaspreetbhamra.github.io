/**
 * Placeholder API layer for future integrations (e.g., CMS, GitHub).
 * Replace with real endpoints as the site matures.
 */
export const fetchContent = async (resource) => {
  console.info(`fetchContent called for: ${resource}`)
  return []
}

export default {
  fetchContent,
}

export default (slug, slugs) => {
  if (!slugs && slug) {
    return [slug]
  }

  return slugs
}

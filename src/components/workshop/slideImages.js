/**
 * Risolve immagine principale e galleria lightbox da una slide studenti.
 *
 * Formati supportati:
 * - Nuovo: { image, gallery: [] }
 * - Legacy: { image, images: [] } oppure solo { images: [] }
 */
export function resolveSlideImages(slide) {
  const extra = slide.gallery ?? slide.images ?? []
  const primary = slide.image ?? extra[0] ?? null

  const gallery = []
  const seen = new Set()

  const add = (src) => {
    if (src && !seen.has(src)) {
      seen.add(src)
      gallery.push(src)
    }
  }

  add(primary)
  extra.forEach(add)

  return { primary, gallery }
}

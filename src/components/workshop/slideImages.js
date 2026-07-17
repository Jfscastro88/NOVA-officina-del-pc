/**
 * Risolve immagine principale, galleria lightbox e placeholder da una slide.
 *
 * Formati supportati:
 * - Nuovo: { image, gallery: [], placeholder: { id, label, aspectRatio, futureSrc } }
 * - Legacy: { image, images: [] } oppure solo { images: [] }
 * - Placeholder-only: { placeholder } senza image (mostra ImagePlaceholder)
 */
export function normalizePlaceholder(placeholder) {
  if (!placeholder) return null
  if (typeof placeholder === 'string') {
    return {
      id: undefined,
      label: placeholder,
      aspectRatio: '16 / 9',
      futureSrc: undefined,
    }
  }
  return {
    id: placeholder.id,
    label: placeholder.label ?? 'Immagine in arrivo',
    aspectRatio: placeholder.aspectRatio ?? '16 / 9',
    futureSrc: placeholder.futureSrc ?? placeholder.src,
  }
}

export function resolveSlideImages(slide) {
  const placeholder = normalizePlaceholder(slide.placeholder ?? slide.imagePlaceholder)
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

  return { primary, gallery, placeholder }
}

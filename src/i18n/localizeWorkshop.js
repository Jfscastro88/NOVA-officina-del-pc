export function localizeWorkshop(workshop, text) {
  if (!workshop || !text) return workshop

  return {
    ...workshop,
    meta: { ...workshop.meta, ...text.meta },
    slides: workshop.slides.map((slide) => {
      const extra = text.slides[slide.id]
      if (!extra) return slide

      const next = { ...slide, ...extra }
      if (slide.quiz && extra.quiz) next.quiz = { ...slide.quiz, ...extra.quiz }
      if (slide.components && extra.components) {
        next.components = slide.components.map((component, index) => ({
          ...component,
          ...extra.components[index],
        }))
      }
      return next
    }),
  }
}

/**
 * Converte un workshop condiviso in formato presentazione studenti.
 * Mostra solo: titolo, punti, frase importante, curiosità, immagini.
 */
export function toStudentWorkshop(workshop) {
  return {
    meta: workshop.meta,
    slides: workshop.slides.map((slide) => ({
      id: slide.id,
      time: slide.time,
      title: slide.title,
      emoji: slide.emoji,
      points:
        slide.studentPoints ??
        (slide.compatibilityTable
          ? slide.compatibilityTable.map((row) => `${row.component} ↔ ${row.compatible}`)
          : slide.points),
      important: slide.important,
      curiosity: slide.curiosity,
      image: slide.image,
      gallery: slide.gallery,
      images: slide.images,
      compatibilityTable: slide.compatibilityTable,
    })),
  }
}

/**
 * Converte un workshop condiviso in formato presentazione docenti.
 * Include tutti i dettagli didattici per la lezione.
 */
export function toTeacherWorkshop(workshop) {
  return {
    meta: workshop.meta,
    slides: workshop.slides.map((slide) => ({
      id: slide.id,
      time: slide.time,
      duration: slide.duration,
      title: slide.title,
      emoji: slide.emoji,
      objective: slide.objective,
      explanation: slide.explanation,
      points: slide.points,
      examples: slide.examples,
      questions: slide.questions,
      commonErrors: slide.commonErrors,
      curiosity: slide.curiosity,
      material: slide.material,
      quiz: slide.quiz,
      components: slide.components,
      compatibilityTable: slide.compatibilityTable,
      errorCompare: slide.errorCompare,
      quickQuestions: slide.quickQuestions,
    })),
  }
}

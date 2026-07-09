export function buildTeacherSlides(workshop) {
  const { teacher } = workshop

  return [
    {
      id: 'intro',
      type: 'intro',
      title: teacher.intro.title,
      emoji: teacher.intro.emoji,
      time: teacher.intro.duration,
      intro: teacher.intro,
    },
    ...teacher.sections.map((section) => ({
      ...section,
      type: 'section',
    })),
    {
      id: 'checklist',
      type: 'checklist',
      title: 'Materiale docente',
      emoji: '✅',
      time: 'Prima della lezione',
      checklist: teacher.checklist,
      checklistKey: teacher.checklistKey,
    },
  ]
}

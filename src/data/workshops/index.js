import student20260627 from './students/2026-06-27'
import teacher20260627 from './teachers/2026-06-27'

/**
 * Calendario centrale dei workshop.
 * Per aggiungere un nuovo incontro:
 * 1. Aggiungi l'entry in workshopDays
 * 2. Crea src/data/workshops/students/YYYY-MM-DD.js (se disponibile)
 * 3. Crea src/data/workshops/teachers/YYYY-MM-DD.js (se disponibile)
 * 4. Registra i moduli negli oggetti studentWorkshops e teacherWorkshops
 */
export const workshopDays = [
  {
    id: '2026-06-27',
    label: '27 Giugno 2026',
    studentPath: '/workshop/2026-06-27',
    teacherPath: '/docenti/2026-06-27',
  },
  {
    id: '2026-07-04',
    label: '04 Luglio 2026',
    studentPath: '/workshop/2026-07-04',
    teacherPath: '/docenti/2026-07-04',
  },
  {
    id: '2026-07-11',
    label: '11 Luglio 2026',
    studentPath: '/workshop/2026-07-11',
    teacherPath: '/docenti/2026-07-11',
  },
  {
    id: '2026-07-18',
    label: '18 Luglio 2026',
    studentPath: '/workshop/2026-07-18',
    teacherPath: '/docenti/2026-07-18',
  },
]

const studentWorkshops = {
  '2026-06-27': student20260627,
}

const teacherWorkshops = {
  '2026-06-27': teacher20260627,
}

export function getWorkshopDay(id) {
  return workshopDays.find((day) => day.id === id)
}

export function getStudentWorkshop(id) {
  return studentWorkshops[id] ?? null
}

export function getTeacherWorkshop(id) {
  return teacherWorkshops[id] ?? null
}

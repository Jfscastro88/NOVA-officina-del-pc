import student20260627 from './students/2026-06-27'
import teacher20260627 from './teachers/2026-06-27'
import content20260704 from './content/2026-07-04'
import content20260711 from './content/2026-07-11'
import content20260718 from './content/2026-07-18'
import { toStudentWorkshop, toTeacherWorkshop } from './adapters'

/**
 * Calendario centrale dei workshop.
 *
 * Per aggiungere un nuovo incontro:
 * 1. Aggiungi l'entry in workshopDays
 * 2. Crea src/data/workshops/content/YYYY-MM-DD.js (dati condivisi)
 * 3. Registra il modulo in workshopContent
 *
 * I workshop precedenti (es. 2026-06-27) usano file separati
 * students/ e teachers/ per retrocompatibilità.
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

const workshopContent = {
  '2026-07-04': content20260704,
}

const interactiveWorkshops = {
  '2026-07-11': content20260711,
  '2026-07-18': content20260718,
}

const studentWorkshops = {
  '2026-06-27': student20260627,
  ...Object.fromEntries(
    Object.entries(workshopContent).map(([id, content]) => [id, toStudentWorkshop(content)])
  ),
}

const teacherWorkshops = {
  '2026-06-27': teacher20260627,
  ...Object.fromEntries(
    Object.entries(workshopContent).map(([id, content]) => [id, toTeacherWorkshop(content)])
  ),
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

export function getInteractiveWorkshop(id) {
  return interactiveWorkshops[id] ?? null
}

export function isInteractiveWorkshop(id) {
  return id in interactiveWorkshops
}

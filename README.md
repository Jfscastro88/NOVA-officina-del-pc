# NOVA Officina del PC

Sito web interattivo per **NOVA Officina del PC**, un laboratorio per piccoli apprendisti informatici. I partecipanti scoprono come funziona un computer — un componente alla volta — smontando, esplorando e ricostruendo un PC, senza esperienza pregressa richiesta.

## Cosa include

- **Landing page** con presentazione del laboratorio, attività, calendario degli incontri e esplorazione dei componenti hardware
- **Presentazioni per studenti** (`/workshop/:data`) — slide interattive da seguire durante ogni incontro
- **Vista docenti** (`/docenti/:data`) — materiali e note per chi conduce il laboratorio

### Calendario workshop (estate 2026)

| Data | Titolo | Argomento |
|------|--------|-----------|
| 27 giugno | Dentro il PC | Componenti e funzioni |
| 4 luglio | Assemblaggio | Montaggio e manutenzione |
| 11 luglio | Sistema Operativo | Installazione e esplorazione |
| 18 luglio | Tecnico per un giorno | Diagnosi, problemi e curiosità |

## Stack tecnologico

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/) — componenti UI
- [Framer Motion](https://www.framer.com/motion/) — animazioni
- [React Router](https://reactrouter.com/) — routing

## Avvio in locale

```bash
npm install
npm run dev
```

L'app sarà disponibile su `http://localhost:5173`.

## Script disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Build di produzione |
| `npm run preview` | Anteprima della build |
| `npm run lint` | Controllo ESLint |

## Struttura del progetto

```
src/
├── components/          # Componenti UI della landing page
│   └── workshop/        # Slide, quiz e componenti dei workshop
│       └── workshop3/   # Workshop interattivo (es. Sistema Operativo)
├── data/
│   └── workshops/       # Contenuti e calendario degli incontri
│       ├── content/     # Dati condivisi per ogni data (YYYY-MM-DD.js)
│       ├── students/    # Vista studente (formato legacy)
│       └── teachers/    # Vista docente (formato legacy)
└── pages/
    ├── WorkshopDay.jsx  # Pagina presentazione studenti
    └── TeacherDay.jsx   # Pagina presentazione docenti
```

### Aggiungere un nuovo incontro

1. Aggiungere l'entry in `src/data/workshops/index.js` (`workshopDays`)
2. Creare `src/data/workshops/content/YYYY-MM-DD.js` con i contenuti condivisi
3. Registrare il modulo in `workshopContent` (o `interactiveWorkshops` per workshop con UI dedicata)
4. Aggiornare il calendario in `src/components/Program.jsx`

## Licenza

Progetto privato — NOVA Officina del PC.

/**
 * Contenuti della pagina Open Day.
 * Le slide usano immagini originali in public/images/open-day/.
 */
export const OPEN_DAY_TITLE =
  'Officina del PC | Workshop di Hardware, PC e Intelligenza Artificiale'

export const OPEN_DAY_DESCRIPTION =
  'Scopri Officina del PC: un percorso pratico per conoscere l\'hardware, assemblare un computer, capire i sistemi operativi e avvicinarsi all\'intelligenza artificiale.'

export const openDayMeetings = [
  {
    slug: '01-dentro-il-pc',
    number: '01',
    date: '17 OTTOBRE',
    title: 'Dentro il PC',
    subtitle: 'Scopri cosa si nasconde dentro un computer.',
    description:
      'Motherboard, RAM, CPU, GPU, SSD, alimentatore e tutti i componenti che fanno funzionare un computer.',
    alt: 'Processore installato sulla scheda madre',
    image: '/images/open-day/01-dentro-il-pc.jpg',
  },
  {
    slug: '02-assemblaggio',
    number: '02',
    date: '31 OTTOBRE',
    title: 'Assemblaggio',
    subtitle: 'Impara a costruire un PC partendo dai suoi componenti.',
    description:
      'Scopri come scegliere i componenti, capire la compatibilità e assemblare correttamente un computer.',
    alt: 'Assemblaggio di un computer',
    image: '/images/open-day/02-assemblaggio.jpg',
  },
  {
    slug: '03-sistema-operativo',
    number: '03',
    date: '14 NOVEMBRE',
    title: 'Sistema Operativo',
    subtitle: 'Dal primo avvio al sistema che utilizzi ogni giorno.',
    description:
      'Scopri cosa succede quando accendi il PC, il ruolo del BIOS/UEFI, l\'avvio del sistema operativo e le differenze tra Windows e Linux.',
    alt: 'Avvio del sistema operativo',
    image: '/images/open-day/03-sistema-operativo.jpg',
  },
  {
    slug: '04-il-pc-prende-vita',
    number: '04',
    date: '28 NOVEMBRE',
    title: 'Il PC prende vita',
    subtitle: 'Accendere, testare e capire quando qualcosa non funziona.',
    description:
      'Completiamo l\'assemblaggio, avviamo il computer e impariamo a riconoscere e affrontare i problemi più comuni.',
    alt: 'PC assemblato durante l\'avvio',
    image: '/images/open-day/04-il-pc-prende-vita.jpg',
  },
  {
    slug: '05-intelligenza-artificiale',
    number: '05',
    date: '12 DICEMBRE',
    title: 'Intelligenza Artificiale',
    subtitle: 'Come funziona davvero l\'AI che utilizziamo ogni giorno?',
    description:
      'Una introduzione semplice all\'intelligenza artificiale: modelli, dati, GPU, server, data center, AI generativa e strumenti che utilizziamo ogni giorno.',
    alt: 'Server e intelligenza artificiale',
    image: '/images/open-day/05-intelligenza-artificiale.jpg',
  },
]

export const learningOutcomes = [
  {
    title: 'Conoscere i componenti',
    emoji: '🔧',
    gradient: 'from-accent to-violet-400',
    rotate: '-rotate-1',
  },
  {
    title: 'Capire la compatibilità',
    emoji: '🧩',
    gradient: 'from-yellow to-amber-400',
    rotate: 'rotate-1',
  },
  {
    title: 'Assemblare un PC',
    emoji: '🖥️',
    gradient: 'from-fuchsia-500 to-accent',
    rotate: '-rotate-2',
  },
  {
    title: 'Capire come funziona un sistema operativo',
    emoji: '💿',
    gradient: 'from-primary to-accent',
    rotate: 'rotate-1',
  },
  {
    title: 'Risolvere i problemi più comuni',
    emoji: '🛠️',
    gradient: 'from-yellow to-orange-400',
    rotate: '-rotate-1',
  },
  {
    title: 'Scoprire come funziona l\'Intelligenza Artificiale',
    emoji: '🤖',
    gradient: 'from-accent to-fuchsia-400',
    rotate: 'rotate-2',
  },
]

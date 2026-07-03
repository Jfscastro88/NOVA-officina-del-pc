/**
 * Path immagini: file in public/components/ → URL /components/nomefile.jpg
 * Per cambiare un'immagine, modifica il campo `image` qui sotto.
 */
export const hardwareComponents = [
  {
    id: "cpu",
    name: "CPU",
    image: "/components/processor.jpg",
    short: "Il cervello del computer.",
    what: "La CPU è il processore del computer.",
    function: "Esegue calcoli, comandi e istruzioni dei programmi.",
    importance: "Si monta nel socket della scheda madre, sotto il dissipatore o il waterblock.",
    curiosity: "Una CPU moderna può contenere miliardi di transistor.",
  },
  {
    id: "ram",
    name: "RAM",
    image: "/components/ram.jpg",
    short: "Il tavolo da lavoro del PC.",
    what: "La RAM è la memoria temporanea del computer.",
    function: "Tiene aperti programmi, giochi e file mentre li usi.",
    importance: "Si inserisce negli slot RAM della scheda madre, vicino alla CPU.",
    curiosity: "Quando spegni il computer, la RAM si svuota.",
  },
  {
    id: "ssd",
    name: "SSD M.2 NVMe",
    image: "/components/ssd-nvme.jpg",
    short: "La memoria veloce dove salvi i file.",
    what: "L'SSD è un dispositivo di archiviazione.",
    function: "Salva sistema operativo, programmi, giochi, foto e documenti.",
    importance:
      "Gli SSD NVMe vanno nello slot M.2 sulla scheda madre; quelli SATA si fissano nel case.",
    curiosity: "Un SSD non ha parti meccaniche in movimento.",
  },
  {
    id: "hdd",
    name: "HDD",
    image: "/components/ssdsata.jpg",
    short: "Il vecchio archivio del computer.",
    what: "L'HDD è un disco rigido tradizionale.",
    function: "Salva dati usando dischi magnetici che girano.",
    importance: 'Si fissa nel vano da 3,5" del case e si collega alla scheda madre con cavi SATA.',
    curiosity: "Dentro ha piccoli dischi che girano molto velocemente.",
  },
  {
    id: "motherboard",
    name: "Scheda Madre",
    image: "/components/motherboard.jpg",
    short: "La base dove tutto si collega.",
    what: "La scheda madre è la piattaforma principale del PC.",
    function: "Collega CPU, RAM, SSD, GPU, alimentatore e porte.",
    importance: "Si fissa al case con viti, appoggiata sugli standoff metallici.",
    curiosity: "È come una città piena di strade e collegamenti.",
  },
  {
    id: "psu",
    name: "Alimentatore",
    image: "/components/powersupply1.jpg",
    short: "Porta energia a tutto il PC.",
    what: "L'alimentatore trasforma la corrente della presa in energia usabile dal computer.",
    function: "Fornisce energia a scheda madre, CPU, GPU, dischi e ventole.",
    importance: "Si installa in basso (o in alto) nel case e si fissa con viti posteriori.",
    curiosity: "Ha tanti cavi diversi perché ogni componente ha bisogno della sua energia.",
  },
  {
    id: "gpu",
    name: "GPU (Scheda Video)",
    image: "/components/gpu.jpg",
    short: "Elabora la grafica, i videogiochi, i video e i programmi 3D.",
    what: "La GPU è la scheda video del computer.",
    function: "Elabora la grafica, i videogiochi, i video e i programmi 3D.",
    importance: "Si inserisce nello slot PCIe della scheda madre e si fissa al case con una vite.",
    curiosity:
      "Le GPU da gaming possono avere più di 10 miliardi di transistor, quasi quanto una piccola città di interruttori!",
  },
  {
    id: "wifi",
    name: "Scheda Wi-Fi",
    image: "/images/hardware/wifi.jpg",
    short: "Permette al computer di collegarsi a Internet senza usare il cavo Ethernet.",
    what: "La scheda Wi-Fi aggiunge la connessione wireless al PC.",
    function: "Permette al computer di collegarsi a Internet senza usare il cavo Ethernet.",
    importance:
      "Si monta nello slot PCIe o M.2 della scheda madre, oppure è già integrata sulla scheda stessa.",
    curiosity:
      "Il Wi-Fi usa onde radio invisibili, come una piccola stazione radio dentro il tuo PC.",
  },
  {
    id: "audio",
    name: "Scheda Audio",
    image: "/images/hardware/audio.jpg",
    short: "Gestisce l'audio del computer e migliora la qualità di ingresso e uscita del suono.",
    what: "La scheda audio gestisce microfono, cuffie e altoparlanti.",
    function: "Gestisce l'audio del computer e migliora la qualità di ingresso e uscita del suono.",
    importance: "Può essere integrata sulla scheda madre oppure montata in uno slot PCIe dedicato.",
    curiosity:
      "I gamer e i musicisti spesso usano schede audio esterne per sentire ogni dettaglio del suono.",
  },
  {
    id: "ethernet",
    name: "Scheda di Rete Ethernet (NIC)",
    image: "/images/hardware/ethernet.jpg",
    short: "Consente la connessione alla rete tramite cavo Ethernet.",
    what: "La scheda di rete Ethernet (NIC) collega il PC alla rete con un cavo.",
    function: "Consente la connessione alla rete tramite cavo Ethernet.",
    importance:
      "Di solito è integrata sulla scheda madre; in alternativa si monta in uno slot PCIe.",
    curiosity:
      "Con il cavo Ethernet la connessione è spesso più stabile e veloce del Wi-Fi, perfetta per il gaming online.",
  },
  {
    id: "waterblock-cpu",
    name: "Waterblock CPU",
    image: "/images/hardware/cpuwaterblock.jpg",
    short: "Raffredda la CPU utilizzando un impianto a liquido.",
    what: "Il waterblock CPU è la parte del raffreddamento a liquido che tocca il processore.",
    function: "Raffredda la CPU utilizzando un impianto a liquido.",
    importance:
      "Si monta sopra la CPU al posto del dissipatore ad aria, fissato con viti al socket.",
    curiosity:
      "Il liquido non bagna i componenti: circola in un circuito chiuso e trasporta via il calore.",
  },
  {
    id: "waterblock-gpu",
    name: "Waterblock GPU",
    image: "/images/hardware/blockgpu.jpg",
    short: "Raffredda la scheda video nei sistemi a liquido.",
    what: "Il waterblock GPU sostitisce il dissipatore originale della scheda video.",
    function: "Raffredda la scheda video nei sistemi a liquido.",
    importance:
      "Si installa al posto del dissipatore stock sulla GPU, spesso con un backplate e viti dedicate.",
    curiosity:
      "Con il raffreddamento a liquido la GPU resta più fredda e può lavorare più velocemente senza surriscaldarsi.",
  },
  {
    id: "fans",
    name: "Ventole",
    image: "/components/fan1.jpg",
    short: "Muovono l'aria all'interno del case per mantenere basse le temperature.",
    what: "Le ventole fanno circolare l'aria dentro il case del PC.",
    function: "Muovono l'aria all'interno del case per mantenere basse le temperature.",
    importance:
      "Si fissano sul case (fronte, retro, tetto o fondo) e si collegano alla scheda madre o all'hub ventole.",
    curiosity:
      "Alcune ventole RGB cambiano colore mentre girano: raffreddare il PC può essere anche esteticamente figo!",
  },
  {
    id: "power-cables",
    name: "Cavi di Alimentazione",
    image: "/images/hardware/cavo.jpg",
    short: "Trasportano l'energia dall'alimentatore ai vari componenti.",
    what: "I cavi di alimentazione portano elettricità dall'alimentatore ai componenti.",
    function: "Trasportano l'energia dall'alimentatore ai vari componenti.",
    importance: "Partono dall'alimentatore e arrivano a scheda madre, CPU, GPU, dischi e ventole.",
    curiosity:
      "Ogni connettore ha una forma diversa: così non puoi collegarli al posto sbagliato per sbaglio.",
  },
  {
    id: "sata-cables",
    name: "Cavi Dati (SATA)",
    image: "/images/hardware/sata.jpg",
    short: "Collegano SSD e HDD alla scheda madre.",
    what: "I cavi SATA trasportano dati tra dischi e scheda madre.",
    function: "Collegano SSD e HDD alla scheda madre.",
    importance:
      "Un'estremità va alla scheda madre, l'altra al connettore SATA del disco fissato nel case.",
    curiosity:
      "Il connettore SATA ha una forma a L che ti aiuta a capire subito come inserirlo correttamente.",
  },
  {
    id: "thermal-paste",
    name: "Pasta Termica",
    image: "/images/hardware/termalpaste.jpg",
    short: "Migliora il trasferimento del calore tra CPU e dissipatore.",
    what: "La pasta termica è un composto che colma i microspazi tra CPU e dissipatore.",
    function: "Migliora il trasferimento del calore tra CPU e dissipatore.",
    importance:
      "Si applica sulla superficie superiore della CPU, prima di montare il dissipatore o il waterblock.",
    curiosity:
      "Ne basta pochissima: una quantità grande quanto un chicco di riso è spesso sufficiente!",
  },
  {
    id: "cmos-battery",
    name: "Batteria CMOS",
    image: "/images/hardware/cmos.jpg",
    short: "Mantiene salvate le impostazioni del BIOS anche quando il PC è spento.",
    what: "La batteria CMOS è una piccola pila sul circuito della scheda madre.",
    function: "Mantiene salvate le impostazioni del BIOS anche quando il PC è spento.",
    importance: "Si trova sulla scheda madre, spesso vicino allo slot PCIe o al socket CPU.",
    curiosity:
      "Sembra una batteria da orologio ed è così piccola che a volte la noti solo quando il PC perde data e ora.",
  },
];

const studentMeta = {
  en: { subtitle: 'First session — Basic hardware' },
  ar: { subtitle: 'اللقاء الأول — الهاردوير الأساسي' },
}

export const day1Student = {
  en: {
    meta: studentMeta.en,
    slides: {
      rompighiaccio: {
        title: 'Icebreaker',
        explanation: 'Let’s meet each other and see what you already know about computers.',
        points: ['Introductions', 'Favorite video game', 'Have you ever opened a PC?'],
        curiosity: 'A computer is not a magic box. It is made of parts that work together.',
      },
      'cos-e-un-computer': {
        title: 'What is a computer?',
        explanation: 'A computer is a team of parts that work together.',
        points: ['Each part has a job', 'They all talk to each other', 'Hardware and software work together'],
        curiosity: 'Each part has a precise job, like players on a team.',
      },
      motherboard: {
        title: 'Motherboard',
        explanation: 'The motherboard connects every part of the computer.',
        points: ['It holds the CPU', 'It holds the RAM', 'It connects the SSD, the ports, and the graphics card'],
        curiosity: 'Without a motherboard the parts cannot talk to each other.',
      },
      cpu: {
        title: 'CPU',
        explanation: 'The CPU is the brain of the computer.',
        points: ['It runs calculations', 'It handles instructions', 'It works very fast'],
        curiosity: 'The CPU can run billions of operations every second.',
      },
      ram: {
        title: 'RAM',
        explanation: 'RAM is the fast memory used while the PC is on.',
        points: ['It is temporary', 'It helps with games and programs', 'DDR3, DDR4, and DDR5 are different generations'],
        curiosity: 'When you turn the PC off, everything that was in the RAM is erased.',
      },
      storage: {
        title: 'Storage: HDD, SSD, NVMe M.2',
        explanation: 'HDD, SSD, and NVMe are used to save data and programs.',
        points: ['An HDD is mechanical', 'An SSD is faster', 'NVMe M.2 is very fast and small'],
        curiosity: 'An NVMe M.2 is as small as a stick of gum, but extremely fast.',
      },
      psu: {
        title: 'Power supply / PSU',
        explanation: 'The power supply gives energy to every part.',
        points: ['It converts the current', 'It has different cables', 'It needs to be good quality'],
        curiosity: 'A weak power supply can damage the whole computer.',
      },
      raffreddamento: {
        title: 'Cooling',
        explanation: 'The PC has to stay cool to work well.',
        points: ['Fans', 'Air cooler', 'Water cooler / AIO'],
        curiosity: 'Thermal paste helps move heat from the CPU to the cooler.',
      },
      porte: {
        title: 'Ports and connections',
        explanation: 'Ports are used to connect a monitor, mouse, keyboard, and network.',
        points: ['HDMI and DisplayPort', 'USB-A and USB-C', 'VGA, the old blue port'],
        curiosity: 'HDMI and DisplayPort carry video and audio. VGA carries video only.',
      },
      lettori: {
        title: 'CD, DVD, and Blu-ray drives',
        explanation: 'They used to be very common. Today they are much less common.',
        points: ['CD', 'DVD', 'Blu-ray'],
        curiosity: 'Many modern PCs no longer have a built-in DVD drive.',
      },
      'mini-gioco': {
        title: 'Mini game: guess the part',
        explanation: 'Look at the part and try to guess what it is.',
        points: ['Name of the part', 'What it does', 'Where it goes'],
        curiosity: 'Learning by recognizing the parts is easier than only reading.',
      },
      conclusione: {
        title: 'Questions and wrap-up',
        explanation: 'Let’s review what we saw and get ready for the next session.',
        points: ['What did you learn?', 'Which part did you like most?', 'Next time: hands-on assembly'],
        curiosity: 'The best way to learn hardware is to see and touch the real parts.',
      },
    },
  },
  ar: {
    meta: studentMeta.ar,
    slides: {
      rompighiaccio: {
        title: 'تعارف',
        explanation: 'نتعارف ونرى ماذا تعرفون أصلاً عن الكمبيوتر.',
        points: ['تعارف', 'لعبة الفيديو المفضلة', 'هل فتحت كمبيوتراً من قبل؟'],
        curiosity: 'الكمبيوتر ليس صندوقاً سحرياً. هو مصنوع من قطع تعمل معاً.',
      },
      'cos-e-un-computer': {
        title: 'ما هو الكمبيوتر؟',
        explanation: 'الكمبيوتر فريق من القطع التي تعمل معاً.',
        points: ['كل قطعة لها مهمة', 'كلها تتكلم مع بعضها', 'الهاردوير والبرامج يعملان معاً'],
        curiosity: 'كل قطعة لها شغل محدد، مثل اللاعبين في فريق.',
      },
      motherboard: {
        title: 'اللوحة الأم',
        explanation: 'اللوحة الأم تربط كل قطع الكمبيوتر.',
        points: ['تُبقي المعالج موصولاً', 'تُبقي الرام موصولة', 'تربط قرص SSD والمنافذ وكرت الشاشة'],
        curiosity: 'من دون اللوحة الأم لا تستطيع القطع أن تتكلم مع بعضها.',
      },
      cpu: {
        title: 'المعالج CPU',
        explanation: 'المعالج هو دماغ الكمبيوتر.',
        points: ['ينفّذ الحسابات', 'يدير التعليمات', 'يعمل بسرعة كبيرة جداً'],
        curiosity: 'المعالج يستطيع تنفيذ مليارات العمليات في الثانية.',
      },
      ram: {
        title: 'الرام RAM',
        explanation: 'الرام ذاكرة سريعة تُستخدم والكمبيوتر شغّال.',
        points: ['هي مؤقتة', 'تساعد في الألعاب والبرامج', 'DDR3 وDDR4 وDDR5 أجيال مختلفة'],
        curiosity: 'عندما تطفئ الكمبيوتر، يُمسح كل ما كان في الرام.',
      },
      storage: {
        title: 'التخزين: HDD وSSD وNVMe M.2',
        explanation: 'HDD وSSD وNVMe تُستخدم لحفظ البيانات والبرامج.',
        points: ['HDD ميكانيكي', 'SSD أسرع', 'NVMe M.2 سريع جداً وصغير'],
        curiosity: 'قرص NVMe M.2 صغير مثل علكة، لكنه سريع جداً.',
      },
      psu: {
        title: 'مزوّد الطاقة / PSU',
        explanation: 'مزوّد الطاقة يعطي الطاقة لكل القطع.',
        points: ['يحوّل التيار', 'له كابلات مختلفة', 'يجب أن يكون بجودة جيدة'],
        curiosity: 'مزوّد طاقة ضعيف يمكن أن يضر الكمبيوتر كله.',
      },
      raffreddamento: {
        title: 'التبريد',
        explanation: 'الكمبيوتر يجب أن يبقى بارداً حتى يعمل جيداً.',
        points: ['المراوح', 'مبرّد هوائي', 'مبرّد مائي / AIO'],
        curiosity: 'المعجون الحراري يساعد على نقل الحرارة من المعالج إلى المبرّد.',
      },
      porte: {
        title: 'المنافذ والتوصيلات',
        explanation: 'المنافذ تُستخدم لتوصيل الشاشة والماوس ولوحة المفاتيح والشبكة.',
        points: ['HDMI وDisplayPort', 'USB-A وUSB-C', 'VGA، المنفذ الأزرق القديم'],
        curiosity: 'HDMI وDisplayPort ينقلان الصورة والصوت. VGA ينقل الصورة فقط.',
      },
      lettori: {
        title: 'قارئات CD وDVD وBlu-ray',
        explanation: 'كانت تُستخدم كثيراً، واليوم أقل بكثير.',
        points: ['CD', 'DVD', 'Blu-ray'],
        curiosity: 'كثير من الكمبيوترات الحديثة لم يعد فيها قارئ DVD.',
      },
      'mini-gioco': {
        title: 'لعبة صغيرة: خمّن القطعة',
        explanation: 'انظر إلى القطعة وحاول أن تخمّن ما هي.',
        points: ['اسم القطعة', 'ماذا تفعل', 'أين تُركَّب'],
        curiosity: 'التعلّم بمعرفة القطع أسهل من القراءة فقط.',
      },
      conclusione: {
        title: 'أسئلة وخاتمة',
        explanation: 'نراجع ما رأيناه ونجهّز اللقاء القادم.',
        points: ['ماذا تعلّمت؟', 'أي قطعة أعجبتك أكثر؟', 'المرة القادمة: تجميع عملي'],
        curiosity: 'أفضل طريقة لتعلّم الهاردوير هي أن ترى القطع الحقيقية وتلمسها.',
      },
    },
  },
}

export const day1Teacher = {
  en: {
    meta: studentMeta.en,
    slides: {
      rompighiaccio: {
        title: 'Icebreaker',
        explanation: 'We start by meeting each other and breaking the ice.',
        points: [
          'Introductions',
          'Favorite video game',
          'Have you ever opened a PC?',
          'What do you want to learn today?',
        ],
        curiosity: 'A computer is not a magic box. It is made of parts that work together.',
      },
      'cos-e-un-computer': {
        title: 'What is a computer?',
        explanation: 'A computer is a team of parts.',
        points: [
          'CPU = brain',
          'RAM = fast temporary memory',
          'SSD/HDD = long-term memory',
          'Motherboard = connects everything',
          'PSU = power',
        ],
        curiosity: 'Each part has a precise job.',
      },
      motherboard: {
        title: 'Motherboard',
        explanation: 'It is the base where every part connects.',
        points: [
          'CPU socket: holds the processor. AMD and Intel use different sockets, and they are not compatible with each other.',
          'RAM slots: hold the memory modules. Desktop PCs use DIMM DDR4 or DDR5 modules. Notebooks use smaller SO-DIMM modules.',
          'M.2 slot: lets you install very fast NVMe SSDs without cables.',
          'SATA ports: connect SSDs and traditional hard drives with data cables.',
          'PCI Express (PCIe) slots: used for the graphics card, network cards, Wi-Fi, video capture, and other add-ons.',
          'Power connectors: receive power through the power cables to feed the motherboard and the CPU.',
        ],
        curiosity: 'Without a motherboard the parts cannot talk to each other.',
      },
      cpu: {
        title: 'CPU',
        explanation: 'It is the processor, the brain of the computer.',
        points: [
          'It is the brain of the computer and it reads every instruction.',
          'It runs billions of operations every second.',
          'Cores let it do more than one job at the same time.',
          'Threads improve multitasking and performance.',
          'While it works it makes heat, so it needs a cooler.',
        ],
        curiosity: 'The CPU works billions of times every second.',
        quiz: {
          question: 'What is the brain of the computer?',
          answers: ['RAM', 'CPU', 'SSD'],
          correct: 'CPU',
        },
      },
      ram: {
        title: 'RAM',
        explanation: 'It is the fast memory the PC uses while it works.',
        points: [
          'It is temporary memory used while the computer is on.',
          'When the PC is turned off, what was in the RAM is erased.',
          'More RAM lets you use more programs at the same time.',
          'DDR3, DDR4, and DDR5 are different generations and they are not compatible with each other.',
          'Desktop: DIMM modules. Notebook: SO-DIMM modules.',
        ],
        curiosity: 'DDR5 is more modern, but it has to match the motherboard and the CPU.',
      },
      storage: {
        title: 'Storage: HDD, SSD, NVMe M.2',
        explanation: 'This is where the operating system, games, photos, and programs are saved.',
        points: [
          'HDD: a mechanical disk with spinning platters. Cheaper, but slower.',
          'SATA SSD: uses flash memory. Much faster and quiet.',
          'NVMe M.2 SSD: plugs straight into the motherboard and is the fastest.',
          'Windows, programs, games, documents, and photos are saved here.',
        ],
        curiosity: 'An NVMe M.2 can look like a small stick of gum.',
      },
      psu: {
        title: 'Power supply / PSU',
        explanation: 'It brings power to every part.',
        points: [
          'It turns wall power into energy the computer can use.',
          'It sends power to the CPU, motherboard, graphics card, SSD, and fans.',
          'Power is measured in watts (W).',
          'A good power supply protects every part of the computer.',
        ],
        curiosity: 'A weak power supply can cause problems for the whole PC.',
      },
      raffreddamento: {
        title: 'Cooling',
        explanation: 'The parts get hot and they have to be cooled.',
        points: [
          'Fans move air inside the case.',
          'An air cooler uses a metal heatsink and a fan.',
          'A water cooler (AIO) uses liquid to cool the CPU.',
          'Thermal paste helps heat move from the CPU to the cooler.',
          'A good flow of air keeps the computer stable and reliable.',
        ],
        curiosity: 'Cooler does not always mean faster, but it helps stability and how long the parts last.',
      },
      porte: {
        title: 'Ports and connections',
        explanation: 'Ports are used to connect a monitor, mouse, keyboard, network, and other devices.',
        points: [
          'HDMI: carries video and audio to a monitor or TV.',
          'DisplayPort: similar to HDMI, and very common on high-performance monitors.',
          'USB-A: connects a mouse, keyboard, USB sticks, and other devices.',
          'USB-C: a modern connector. You can plug it in either way, and it is very fast.',
          'VGA: an old blue port that carries video only.',
          'Ethernet (RJ45): connects the computer to a network with a cable.',
          '3.5 mm audio jack: connects headphones, speakers, and a microphone.',
        ],
        curiosity: 'HDMI and DisplayPort can carry video and audio. VGA carries video only.',
      },
      lettori: {
        title: 'CD, DVD, and Blu-ray drives',
        explanation: 'They used to be essential. Today they are used much less.',
        points: [
          'CD: used for music and small data archives.',
          'DVD: more space, used for films and programs.',
          'Blu-ray: a lot of space, used for high-definition video.',
          'Today almost all software is downloaded from the internet or installed from a USB stick.',
        ],
        curiosity: 'Many modern PCs no longer have a DVD drive.',
      },
      'mini-gioco': {
        title: 'Mini game: guess the part',
        explanation: 'Show pictures of parts and have them guess the name and the job.',
        components: [
          {
            name: 'GPU / graphics card',
            funzione:
              'It handles graphics, games, video, and 3D images. In modern computers it can also be used for artificial intelligence, rendering, and heavy calculations.',
            posizione: 'It goes in the PCI Express x16 slot on the motherboard.',
          },
          {
            name: 'Wi-Fi card',
            funzione:
              'It lets the computer join a Wi-Fi network. On many models it also adds Bluetooth.',
            posizione: 'It goes in a PCI Express x1 slot or an M.2 slot, depending on the model.',
          },
          {
            name: 'GPU waterblock',
            funzione:
              'It is a liquid cooler that replaces the original cooler on the graphics card, so the GPU stays cooler during heavy use.',
            posizione:
              'It is mounted directly on the graphics chip (GPU) and connected to a liquid-cooling loop.',
          },
          {
            name: 'Server motherboard',
            funzione:
              'It is a motherboard made for servers and workstations. It supports a lot of RAM, more add-in cards, and on some models two processors at once.',
            posizione:
              'It is the main part of the server. It is screwed inside the case, where it connects every other part.',
          },
        ],
        curiosity: 'Learning by recognizing the parts is easier than only reading.',
      },
      conclusione: {
        title: 'Questions and wrap-up',
        explanation: 'We sum up what we saw and get ready for the next session.',
        points: [
          'What did you like most?',
          'Which part seems most important?',
          'What do you want to see next time?',
          'Next time: hands-on assembly',
        ],
        curiosity: 'The best way to learn hardware is to see and touch the real parts.',
      },
    },
  },
  ar: {
    meta: studentMeta.ar,
    slides: {
      rompighiaccio: {
        title: 'تعارف',
        explanation: 'نبدأ بالتعارف وكسر الحاجز.',
        points: [
          'تعارف',
          'لعبة الفيديو المفضلة',
          'هل فتحت كمبيوتراً من قبل؟',
          'ماذا تريد أن تتعلّم اليوم؟',
        ],
        curiosity: 'الكمبيوتر ليس صندوقاً سحرياً. هو مصنوع من قطع تعمل معاً.',
      },
      'cos-e-un-computer': {
        title: 'ما هو الكمبيوتر؟',
        explanation: 'الكمبيوتر فريق من القطع.',
        points: [
          'المعالج = الدماغ',
          'الرام = ذاكرة سريعة مؤقتة',
          'SSD/HDD = ذاكرة طويلة الأمد',
          'اللوحة الأم = تربط كل شيء',
          'مزوّد الطاقة = الكهرباء',
        ],
        curiosity: 'كل قطعة لها شغل محدد.',
      },
      motherboard: {
        title: 'اللوحة الأم',
        explanation: 'هي القاعدة التي تتصل بها كل القطع.',
        points: [
          'مكان المعالج: يستقبل المعالج. AMD وإنتل يستخدمان أماكن مختلفة، وهما غير متوافقين.',
          'فتحات الرام: تستقبل قطع الذاكرة. في الكمبيوتر المكتبي نستخدم DIMM من نوع DDR4 أو DDR5. في اللابتوب نستخدم SO-DIMM الأصغر.',
          'فتحة M.2: تسمح بتركيب أقراص SSD NVMe سريعة جداً من دون كابلات.',
          'منافذ SATA: تربط أقراص SSD والأقراص الصلبة التقليدية بكابلات البيانات.',
          'فتحات PCI Express (PCIe): تُستخدم لكرت الشاشة وكرت الشبكة والواي فاي وتسجيل الفيديو وإضافات أخرى.',
          'وصلات الطاقة: تستقبل الكهرباء عبر كابلات الطاقة لتغذية اللوحة الأم والمعالج.',
        ],
        curiosity: 'من دون اللوحة الأم لا تستطيع القطع أن تتكلم مع بعضها.',
      },
      cpu: {
        title: 'المعالج CPU',
        explanation: 'هو المعالج، أي دماغ الكمبيوتر.',
        points: [
          'هو دماغ الكمبيوتر ويقرأ كل التعليمات.',
          'ينفّذ مليارات العمليات في كل ثانية.',
          'الأنوية تسمح له بعمل أكثر من مهمة في الوقت نفسه.',
          'الخيوط (Threads) تحسّن تعدّد المهام والأداء.',
          'أثناء العمل يُنتج حرارة، لذلك يحتاج إلى مبرّد.',
        ],
        curiosity: 'المعالج يعمل مليارات المرات في الثانية.',
        quiz: {
          question: 'ما هو دماغ الكمبيوتر؟',
          answers: ['الرام', 'المعالج', 'SSD'],
          correct: 'المعالج',
        },
      },
      ram: {
        title: 'الرام RAM',
        explanation: 'هي الذاكرة السريعة التي يستخدمها الكمبيوتر وهو يعمل.',
        points: [
          'ذاكرة مؤقتة تُستخدم والكمبيوتر شغّال.',
          'عندما يُطفأ الكمبيوتر يُمسح ما كان في الرام.',
          'رام أكثر تسمح باستخدام برامج أكثر في الوقت نفسه.',
          'DDR3 وDDR4 وDDR5 أجيال مختلفة وغير متوافقة مع بعضها.',
          'الكمبيوتر المكتبي: قطع DIMM. اللابتوب: قطع SO-DIMM.',
        ],
        curiosity: 'DDR5 أحدث، لكن يجب أن يتوافق مع اللوحة الأم والمعالج.',
      },
      storage: {
        title: 'التخزين: HDD وSSD وNVMe M.2',
        explanation: 'هنا يُحفظ نظام التشغيل والألعاب والصور والبرامج.',
        points: [
          'HDD: قرص ميكانيكي فيه أطباق تدور. أرخص، لكنه أبطأ.',
          'SSD SATA: يستخدم ذاكرة فلاش. أسرع بكثير وهادئ.',
          'SSD NVMe M.2: يتصل مباشرة باللوحة الأم وهو الأسرع.',
          'هنا يُحفظ ويندوز والبرامج والألعاب والمستندات والصور.',
        ],
        curiosity: 'قرص NVMe M.2 يمكن أن يشبه علكة صغيرة.',
      },
      psu: {
        title: 'مزوّد الطاقة / PSU',
        explanation: 'يوصل الطاقة إلى كل القطع.',
        points: [
          'يحوّل كهرباء المقبس إلى طاقة يستطيع الكمبيوتر استخدامها.',
          'يوزّع الطاقة على المعالج واللوحة الأم وكرت الشاشة وقرص SSD والمراوح.',
          'القدرة تُقاس بالواط (W).',
          'مزوّد طاقة جيد يحمي كل قطع الكمبيوتر.',
        ],
        curiosity: 'مزوّد طاقة ضعيف يمكن أن يسبب مشاكل للكمبيوتر كله.',
      },
      raffreddamento: {
        title: 'التبريد',
        explanation: 'القطع تسخن ويجب تبريدها.',
        points: [
          'المراوح تحرّك الهواء داخل الصندوق.',
          'المبرّد الهوائي يستخدم قطعة معدنية ومروحة.',
          'المبرّد المائي (AIO) يستخدم سائلاً لتبريد المعالج.',
          'المعجون الحراري يحسّن انتقال الحرارة بين المعالج والمبرّد.',
          'تدفق هواء جيد يُبقي الكمبيوتر مستقراً وموثوقاً.',
        ],
        curiosity: 'الأبرد لا يعني دائماً الأسرع، لكنه يساعد على الاستقرار وعمر القطع.',
      },
      porte: {
        title: 'المنافذ والتوصيلات',
        explanation: 'المنافذ تُستخدم لتوصيل الشاشة والماوس ولوحة المفاتيح والشبكة والأجهزة الأخرى.',
        points: [
          'HDMI: ينقل الصورة والصوت إلى الشاشة أو التلفاز.',
          'DisplayPort: يشبه HDMI، ويُستخدم كثيراً في شاشات الأداء العالي.',
          'USB-A: يوصل الماوس ولوحة المفاتيح وفلاشات USB وأجهزة أخرى.',
          'USB-C: وصلة حديثة، تدخل من الجهتين، وسريعة جداً.',
          'VGA: منفذ أزرق قديم ينقل الصورة فقط.',
          'إيثرنت (RJ45): يوصل الكمبيوتر بالشبكة عبر كابل.',
          'مدخل صوت 3.5 مم: يوصل السماعات وسماعات الرأس والميكروفون.',
        ],
        curiosity: 'HDMI وDisplayPort يمكن أن ينقلا الصورة والصوت. VGA ينقل الصورة فقط.',
      },
      lettori: {
        title: 'قارئات CD وDVD وBlu-ray',
        explanation: 'كانت أساسية في الماضي. اليوم تُستخدم أقل بكثير.',
        points: [
          'CD: للموسيقى والأرشيف الصغير.',
          'DVD: سعة أكبر، للأفلام والبرامج.',
          'Blu-ray: سعة عالية لفيديو عالي الدقة.',
          'اليوم أغلب البرامج تُنزَّل من الإنترنت أو تُثبَّت من فلاشة USB.',
        ],
        curiosity: 'كثير من الكمبيوترات الحديثة لم يعد فيها قارئ DVD.',
      },
      'mini-gioco': {
        title: 'لعبة صغيرة: خمّن القطعة',
        explanation: 'اعرض صور القطع واجعلهم يخمنون الاسم والوظيفة.',
        components: [
          {
            name: 'كرت الشاشة GPU',
            funzione:
              'يعالج الرسوم والألعاب والفيديو والصور ثلاثية الأبعاد. في الكمبيوترات الحديثة يمكن استخدامه أيضاً للذكاء الاصطناعي والرندر والحسابات الثقيلة.',
            posizione: 'يُركَّب في فتحة PCI Express x16 على اللوحة الأم.',
          },
          {
            name: 'كرت الواي فاي',
            funzione: 'يسمح للكمبيوتر بالاتصال بشبكة واي فاي. في كثير من الموديلات يضيف أيضاً البلوتوث.',
            posizione: 'يُركَّب في فتحة PCI Express x1 أو فتحة M.2، حسب الموديل.',
          },
          {
            name: 'مبرّد كرت الشاشة المائي',
            funzione:
              'مبرّد بالسائل يستبدل المبرّد الأصلي لكرت الشاشة، فيُبقي الكرت أبرد أثناء الاستخدام الثقيل.',
            posizione: 'يُركَّب مباشرة فوق شريحة الرسوم (GPU) ويتصل بدائرة تبريد بالسائل.',
          },
          {
            name: 'لوحة أم للسيرفر',
            funzione:
              'لوحة أم مصممة للسيرفرات وأجهزة العمل. تدعم رام كثيرة وبطاقات إضافية أكثر، وفي بعض الموديلات معالجين في الوقت نفسه.',
            posizione: 'هي القطعة الأساسية في السيرفر. تُثبَّت داخل الصندوق، حيث تربط كل القطع الأخرى.',
          },
        ],
        curiosity: 'التعلّم بمعرفة القطع أسهل من القراءة فقط.',
      },
      conclusione: {
        title: 'أسئلة وخاتمة',
        explanation: 'نلخّص ما رأيناه ونجهّز اللقاء القادم.',
        points: [
          'ماذا أعجبك أكثر؟',
          'أي قطعة تبدو الأهم؟',
          'ماذا تريد أن ترى في اللقاء القادم؟',
          'المرة القادمة: تجميع عملي',
        ],
        curiosity: 'أفضل طريقة لتعلّم الهاردوير هي أن ترى القطع الحقيقية وتلمسها.',
      },
    },
  },
}

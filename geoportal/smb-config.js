// Настройки портала SMB: список курсов и адрес Google-скрипта.
//
// API_URL — адрес веб-приложения из Apps Script (вида https://script.google.com/macros/s/…/exec).
//   Пока он пустой, вход в курсы не работает (сайт покажет предупреждение).
// Добавить курс: скопируйте блок из COURSES, поменяйте id/slug, и папка курса должна существовать.
window.SMB_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycby5cLDzx2Nu3ahPPJgg3_6mLxLYJbhGDTgr5iOAQjnVvbSuioOI-XD2wkBIOJDMbyU/exec',
  SESSION_HOURS: 168,        // сколько часов ученик остаётся в курсе без повторного ввода кода (168 = 7 дней)
  COURSES: [
    {
      id: 'geotanu',
      icon: '🌍',
      label: 'GeoTany',
      start: 'geotanu/geotanu.html',
      title_kz: 'GeoTany: География ҰБТ/ЕНТ курсы',
      title_ru: 'GeoTany: Курс географии ЕНТ',
      desc_kz: 'Blooket жинақтары, 44 сабақ теориясы, ҰБТ нұсқалары және интерактивті карталар',
      desc_ru: 'Наборы Blooket, теория 44 уроков, варианты ЕНТ и интерактивные карты',
      level_kz: 'ҰБТ / 11 сынып',
      level_ru: 'ЕНТ / 11 класс'
    },
    {
      id: 'geonish',
      icon: '🌟',
      label: 'GeoNISH',
      start: 'geonish/geonish.html',
      title_kz: 'ГеоНИШ 6-сынып: Жаратылыстану & География (НЗМ)',
      title_ru: 'ГеоНИШ 6 класс: Естествознание и география (НИШ)',
      desc_kz: '14 ғылыми блок, 42 сабақ, конспектілер мен онлайн тесттер',
      desc_ru: '14 научных блоков, 42 урока, конспекты и онлайн-тесты',
      level_kz: 'НЗМ / 6 сынып',
      level_ru: 'НИШ / 6 класс'
    },
    {
      id: 'ielts',
      icon: '🎓',
      label: 'IELTS',
      start: 'ielts/ielts.html',
      title_kz: 'IELTS-ке қалай дайындалу керек',
      title_ru: 'Как готовиться к IELTS',
      desc_kz: '20 толық сынақ: Reading, Listening, Writing, Speaking және ЖИ-емтихан алушы',
      desc_ru: '20 полных пробников: Reading, Listening, Writing, Speaking и ИИ-экзаменатор',
      level_kz: 'IELTS Academic',
      level_ru: 'IELTS Academic'
    },
    {
      id: 'english',
      icon: '🇬🇧',
      label: 'English',
      start: 'english/hub.html',
      title_kz: 'English Hub: ағылшын тілі курсы (A1–C2) және IELTS дайындығы',
      title_ru: 'English Hub: курс английского языка (A1–C2) и подготовка к IELTS',
      desc_kz: 'Reading, Writing, Listening, Speaking, Vocabulary және Grammar бойынша 62 тапсырмадан, 7500 сөз және IELTS карточкалары',
      desc_ru: 'Reading, Writing, Listening, Speaking, Vocabulary и Grammar: по 62 задания, 7500 слов и карточки для подготовки к IELTS',
      level_kz: 'A1–C2 / барлық жас',
      level_ru: 'A1–C2 / для всех'
    },
    {
      id: 'pravo',
      icon: '⚖️',
      label: 'Pravo',
      start: 'pravo/pravo.html',
      title_kz: 'Құқық негіздері: ҰБТ-ға толық курс',
      title_ru: 'Основы права: полный курс подготовки к ЕНТ',
      desc_kz: '13 тақырып конспектісі, 290 сұрақ, ҰБТ форматындағы 4 нұсқа, терминдер және қателермен жұмыс',
      desc_ru: '13 тем с конспектами, 290 вопросов, 4 варианта в формате ЕНТ, термины и работа над ошибками',
      level_kz: 'ҰБТ / 11 сынып',
      level_ru: 'ЕНТ / 11 класс'
    },
    {
      id: 'ent',
      icon: '🎯',
      label: 'ENT',
      start: 'ent/ent.html',
      title_kz: 'ҰБТ тренажері: бағыттар бойынша толық нұсқалар',
      title_ru: 'ЕНТ-тренажёр: полные варианты по направлениям',
      desc_kz: 'Бағыттар бойынша ҰБТ нұсқалары (120 сұрақ, 140 балл, 4 сағат), пән тесттері, қателермен жұмыс және нәтиже мұғалімге жіберіледі',
      desc_ru: 'Полные варианты ЕНТ по направлениям (120 вопросов, 140 баллов, 4 часа), тесты по предметам, работа над ошибками; результаты уходят учителю',
      level_kz: 'ҰБТ / 11 сынып',
      level_ru: 'ЕНТ / 11 класс'
    },
    {
      id: 'biotanu',
      icon: '🧬',
      label: 'BioTany',
      start: 'biotanu/biotanu.html',
      title_kz: 'BioTany: Биология ҰБТ/ЕНТ курсы',
      title_ru: 'BioTany: Курс биологии ЕНТ',
      desc_kz: '16 тарау конспектісі, ҰБТ форматындағы 3 нұсқа, карточкалар, жаттау кестелері, схемалар және есептер',
      desc_ru: '16 глав с конспектами, 3 варианта в формате ЕНТ, карточки, таблицы для запоминания, схемы и задачи',
      level_kz: 'ҰБТ / 11 сынып',
      level_ru: 'ЕНТ / 11 класс'
    }
  ]
};

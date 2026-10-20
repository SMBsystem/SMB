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
    }
  ]
};

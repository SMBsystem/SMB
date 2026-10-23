// Каталог курса «ЕНТ-тренажёр»: предметы, направления и наборы тестов.
// Как добавить набор: положите файл data/sets/<id>.js (формат — data/README.md) и допишите строку в SETS ниже.
window.ENT = window.ENT || { tests: {}, sets: {} };
(function (E) {
  E.TARGET = 50;   // сколько тестов планируется на каждое направление (показывается на карточке направления)

  // Предметы ЕНТ: три обязательных и профильные
  E.SUBJ = {
    hist:  { kz: 'Қазақстан тарихы',          ru: 'История Казахстана' },
    read:  { kz: 'Оқу сауаттылығы',           ru: 'Грамотность чтения' },
    mlit:  { kz: 'Математикалық сауаттылық',  ru: 'Математическая грамотность' },
    math:  { kz: 'Математика',                ru: 'Математика' },
    phys:  { kz: 'Физика',                    ru: 'Физика' },
    chem:  { kz: 'Химия',                     ru: 'Химия' },
    bio:   { kz: 'Биология',                  ru: 'Биология' },
    geo:   { kz: 'География',                 ru: 'География' },
    info:  { kz: 'Информатика',               ru: 'Информатика' },
    eng:   { kz: 'Ағылшын тілі',              ru: 'Английский язык' },
    whist: { kz: 'Дүниежүзі тарихы',          ru: 'Всемирная история' },
    law:   { kz: 'Құқық негіздері',           ru: 'Основы права' }
  };

  // Направления = пара профильных предметов. Структура полного ЕНТ одинакова:
  // История Казахстана 20 + Грамотность чтения 10 + Математическая грамотность 10 + два профильных по 40 = 120 вопросов, 140 баллов.
  E.DIRS = [
    { id: 'phys-math',  icon: '⚛️', subj: ['phys', 'math'] },
    { id: 'math-info',  icon: '💻', subj: ['math', 'info'] },
    { id: 'math-eng',   icon: '🔢', subj: ['math', 'eng'] },
    { id: 'math-geo',   icon: '📐', subj: ['math', 'geo'] },
    { id: 'phys-chem',  icon: '🔬', subj: ['phys', 'chem'] },
    { id: 'bio-chem',   icon: '🧪', subj: ['bio', 'chem'] },
    { id: 'bio-geo',    icon: '🧬', subj: ['bio', 'geo'] },
    { id: 'geo-eng',    icon: '🌍', subj: ['geo', 'eng'] },
    { id: 'geo-whist',  icon: '🗺️', subj: ['geo', 'whist'] },
    { id: 'eng-whist',  icon: '🏛️', subj: ['eng', 'whist'] },
    { id: 'whist-law',  icon: '⚖️', subj: ['whist', 'law'] }
  ];

  // Наборы: один набор = один месяц/формат/язык. Внутри все блоки предметов (data/sets/<id>.js);
  // вариант по направлению собирается из блоков: история + чтение + мат. грамотность + два профильных предмета.
  // order — порядок по времени (определяет номер варианта у направления), dirs — какие направления есть в наборе.
  var ALL = ['phys-math', 'math-info', 'math-eng', 'math-geo', 'phys-chem', 'bio-chem', 'bio-geo', 'geo-eng', 'geo-whist', 'eng-whist', 'whist-law'];
  E.SETS = [
    { id: 'aug1-ru', lang: 'ru', order: 40, label: { ru: 'Август · набор 1', kz: 'Тамыз · 1-жинақ' }, dirs: ALL },
    { id: 'aug1-kz', lang: 'kz', order: 40, label: { ru: 'Август · набор 1', kz: 'Тамыз · 1-жинақ' }, dirs: ALL },
    { id: 'sep-off-ru', lang: 'ru', order: 70, label: { ru: 'Сентябрь · оффлайн', kz: 'Қыркүйек · оффлайн' }, dirs: ALL },
    { id: 'sep-off-kz', lang: 'kz', order: 70, label: { ru: 'Сентябрь · оффлайн', kz: 'Қыркүйек · оффлайн' }, dirs: ALL }
  ];

  // Тесты по направлениям строятся автоматически из наборов
  E.REG = [];
  var cnt = {};
  E.SETS.slice().sort(function (a, b) { return a.order - b.order; }).forEach(function (s) {
    s.dirs.forEach(function (d) {
      var k = d + '|' + s.lang;
      cnt[k] = (cnt[k] || 0) + 1;
      E.REG.push({ id: d + '-' + s.id, dir: d, lang: s.lang, set: s.id, n: cnt[k], label: s.label });
    });
  });
})(window.ENT);

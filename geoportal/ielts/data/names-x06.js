// Имена 51–60: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
// Данные в графиках условные (учебные) и так и названы в заданиях. Требуют проверки преподавателем.
(function () {
  var NM = window.IELTS.NDATA;
  var T1 = 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.';
  function X(id, o) {
    var n = NM[id]; if (!n) return;
    if (o.task1 && n.writing) { n.writing.task1 = o.task1; n.writing.spec = 'Writing · Task 1 + Task 2 · 60 минут · 150 + 250 слов'; }
    if (o.heads && n.reading) n.reading.heads = o.heads;
    if (o.ynng && n.reading) n.reading.ynng = o.ynng;
    if (o.matching && n.listening) n.listening.matching = o.matching;
    if (o.short && n.listening) n.listening.short = o.short;
  }

  /* 51 · Al-Haqq */
  X(51, {
    task1: {
      prompt: 'The bar chart below shows how fact-checkers rated claims about health and food and claims about politics, in five categories. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Rating of checked claims (% of claims), illustrative data', unit: '% of claims', ymax: 50, cats: ['True', 'Mostly true', 'Partly true', 'Misleading', 'False'], series: [{ name: 'Health and food claims', v: [8, 12, 20, 25, 35] }, { name: 'Political claims', v: [10, 22, 30, 26, 12] }] },
      keywords: ['claims', 'fact-checkers', 'health', 'political', 'true', 'false', 'misleading', 'rating', 'percentage', 'categories'],
      model: `The bar chart shows how fact-checkers rated two groups of claims, claims about health and food and claims about politics, in five categories. The data are illustrative.

Overall, claims about health and food were rated much more negatively than political claims, which were mostly in the middle categories.

Among the health and food claims, the false category was the largest, at 35%, followed by misleading at 25%. Together, these two categories accounted for 60% of all the claims. Only 8% of these claims were rated true, and 12% mostly true.

The pattern for political claims was different. The largest category was partly true, at 30%, followed by mostly true at 22%, and misleading at 26%. Only 12% of political claims were rated false, which is only about a third of the figure for health and food claims, and 10% were rated true.

The biggest difference between the two groups was in the false category, at 23 percentage points, while the proportions rated true were similar, at 8% and 10%.`,
      analysis: ['Task Achievement: две серии по пяти категориям; обзор — здоровье/еда оцениваются хуже, политика — в средних категориях.', 'Вычисления: 35 + 25 = 60; 12 < трети от 35; разрыв 23 пункта.', 'Cohesion: Overall / Among / The pattern ... was different / while.', 'Lexical Resource: accounted for, fact-checkers, rated, middle categories.']
    },
    heads: {
      list: ['A history of printing', 'Habits that express the name', 'One word with several meanings', 'How courts decide cases', 'Verses that name the Truth', 'Truth, rights and honesty'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: одно слово haqq — истина, реальность, право.' }, { p: 'B', a: 'v', e: 'Абзац B: 22:6, 20:114, 24:25.' }, { p: 'C', a: 'vi', e: 'Абзац C: истина, права и честность.' }, { p: 'D', a: 'ii', e: 'Абзац D: привычки, выражающие имя.' }]
    },
    ynng: [
      { q: 'The writer suggests that speaking falsely violates another person\'s right to know.', a: 'YES', e: 'Абзац C: ложь — нарушение права другого человека знать.' },
      { q: 'The writer believes that giving someone what is due is unrelated to truthfulness.', a: 'NO', e: 'Абзац C: воздать должное — акт правдивости.' },
      { q: 'The writer says that most people check facts before speaking.', a: 'NOT GIVEN', e: 'Привычки большинства людей в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What do the speakers say about each of the following? Choose the correct letter, A–D.', options: ['Claims about health and food', 'Political claims such as unemployment statistics', 'True, mostly true, partly true, misleading and false', 'Ten minutes for each pair'], items: [{ q: 'Askar\'s topic', a: 'A', e: 'Аскар проверяет утверждения о здоровье и еде.' }, { q: 'Moldir\'s topic', a: 'B', e: 'Молдир выбрала политические утверждения, например статистику безработицы.' }, { q: 'The rating scale', a: 'C', e: 'Пять категорий: от «верно» до «ложно».' }, { q: 'The presentations', a: 'D', e: 'На презентацию каждой паре — десять минут.' }] },
    short: [{ q: 'At least how many independent confirmations should be found?', a: ['2', 'two'], e: 'Нужно не менее двух независимых подтверждений.' }, { q: 'On what date are the presentations?', a: ['26', '26th', 'the twenty-sixth', 'twenty-sixth', 'the 26th'], e: 'Презентации — двадцать шестого.' }]
  });

  /* 52 · Al-Wakil */
  X(52, {
    task1: {
      prompt: 'The table below shows four types of authority that clients gave to an agent through a power of attorney, with the share of clients who chose each type, the average duration and the cost. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Types of power of attorney, illustrative data', head: ['Type of authority', 'Clients (%)', 'Average duration (months)', 'Cost (£)'], rows: [['Pay bills and sign documents', '46', '12', '50'], ['Manage a bank account', '22', '18', '80'], ['Sell or buy property', '14', '6', '150'], ['Full authority', '18', '24', '200']] },
      keywords: ['power of attorney', 'authority', 'clients', 'bills', 'bank account', 'property', 'full authority', 'duration', 'cost', 'months'],
      model: `The table shows four types of authority that clients gave to an agent through a power of attorney, together with the percentage of clients who chose each type, the average duration and the cost. The data are illustrative.

Overall, the most limited type of authority was by far the most popular and one of the cheapest, whereas the broadest type was the most expensive and was chosen by fewer clients.

Paying bills and signing documents was chosen by 46% of the clients, which is more than twice the share of the next most popular type, managing a bank account, at 22%. These two types cost £50 and £80 and lasted 12 and 18 months on average.

Full authority was chosen by 18% of clients. It was the most expensive option, at £200, and it lasted the longest, 24 months on average. Selling or buying property was the least popular, with only 14% of clients, and the shortest in duration, at 6 months, which is not surprising since a single transaction is usually completed quickly.

It is noticeable that the cost rose with the breadth of the authority, from £50 for the narrowest to £200 for the broadest.`,
      analysis: ['Task Achievement: четыре вида, три показателя; обзор — самое узкое самое популярное и дешёвое.', 'Вычисления: 46 более чем вдвое больше 22; 50 → 200.', 'Cohesion: Overall / whereas / which is not surprising / It is noticeable that.', 'Lexical Resource: authority, transaction, the broadest, the narrowest, respectively-style comparisons.']
    },
    heads: {
      list: ['A history of legal professions', 'Less anxiety in practice', 'A representative and a trusted agent', 'How to choose a university', 'Effort and trust together', 'Verses and a famous reply'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: wakil — представитель, доверенный агент.' }, { p: 'B', a: 'vi', e: 'Абзац B: 39:62, 73:9 и известный ответ в 3:173.' }, { p: 'C', a: 'v', e: 'Абзац C: усилие и доверие вместе.' }, { p: 'D', a: 'ii', e: 'Абзац D: меньше тревоги на практике.' }]
    },
    ynng: [
      { q: 'The writer suggests that effort and trust are two parts of one attitude.', a: 'YES', e: 'Абзац C: усилие и доверие — две части одного отношения.' },
      { q: 'The writer believes that tawakkul means waiting without taking any action.', a: 'NO', e: 'Абзац C: тавакуль не означает бездействия.' },
      { q: 'The writer says that most people delegate too little.', a: 'NOT GIVEN', e: 'Привычки людей в делегировании не обсуждаются.' }
    ],
    matching: { instruction: 'What does the assistant say about each of the following? Choose the correct letter, A–D.', options: ['It lasts forty minutes', 'It costs fifty pounds', 'It is on the third floor, Room thirty-one', 'It covers bills and some documents'], items: [{ q: 'The consultation', a: 'A', e: 'Консультация длится сорок минут.' }, { q: 'The price', a: 'B', e: 'Стоимость — пятьдесят фунтов.' }, { q: 'The solicitor\'s office', a: 'C', e: 'Офис на третьем этаже, комната тридцать один.' }, { q: 'The authority that Nurbol wants to give', a: 'D', e: 'Нурбол хочет передать только счета и некоторые документы.' }] },
    short: [{ q: 'Who will Nurbol appoint?', a: ['his brother', 'brother', 'my brother'], e: 'Он назначит своего брата.' }, { q: 'What must Nurbol bring to the appointment?', a: ['his passport', 'passport', 'a passport'], e: 'Нужно принести паспорт.' }]
  });

  /* 53 · Al-Qawiyy */
  X(53, {
    task1: {
      prompt: 'The line graph below shows the average weight that three groups of adults could lift over twelve weeks, depending on how often they trained. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average weight lifted (kg), illustrative data', unit: 'kg', ymax: 80, x: ['Week 0', 'Week 4', 'Week 8', 'Week 12'], series: [{ name: 'Three sessions a week', y: [40, 52, 63, 72] }, { name: 'One session a week', y: [40, 44, 48, 51] }, { name: 'No training', y: [40, 40, 41, 40] }] },
      keywords: ['weight', 'lifted', 'kilograms', 'training', 'sessions', 'weeks', 'groups', 'increased', 'strength', 'no training'],
      model: `The line graph shows the average weight that three groups of adults could lift over twelve weeks, depending on how often they trained. The data are illustrative.

Overall, the weight that participants could lift rose in the two groups that trained, and it rose far more among those who trained three times a week, while the group without training showed no improvement.

All three groups started at the same level, 40 kg. The group that trained three times a week improved fastest, to 52 kg at Week 4 and 63 kg at Week 8, and it finished at 72 kg, a gain of 32 kg. The group that trained once a week also became stronger, but more slowly. Its figure reached 44 kg, 48 kg and finally 51 kg, a gain of only 11 kg.

By contrast, the group that did not train stayed almost exactly where it began. The figure varied between 40 kg and 41 kg and was 40 kg again at Week 12.

As a result, the difference between the group that trained three times a week and the group that did not train grew from nothing to 32 kg.`,
      analysis: ['Task Achievement: одинаковый старт, три траектории; обзор по частоте тренировок.', 'Вычисления: +32 кг и +11 кг; контрольная группа 40–41 кг; разрыв 32 кг.', 'Cohesion: Overall / By contrast / As a result.', 'Lexical Resource: stronger, gain, varied between, almost exactly.']
    },
    heads: {
      list: ['The history of athletics', 'Developing strength responsibly', 'Strength in body and will', 'Rules of fair competition', 'A pair of names and a rescue', 'Why human strength tires'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: сила тела и воли.' }, { p: 'B', a: 'v', e: 'Абзац B: пара имён и спасение пророка Салиха.' }, { p: 'C', a: 'vi', e: 'Абзац C: человеческая сила устаёт.' }, { p: 'D', a: 'ii', e: 'Абзац D: ответственное развитие силы.' }]
    },
    ynng: [
      { q: 'The writer suggests that strength is useful to the extent that it protects others.', a: 'YES', e: 'Абзац D: сила полезна настолько, насколько защищает других.' },
      { q: 'The writer believes that human strength never declines.', a: 'NO', e: 'Абзац C: человеческая сила устаёт и ослабевает.' },
      { q: 'The writer says that leaders weaken faster than athletes.', a: 'NOT GIVEN', e: 'Скорость ослабления разных людей не сравнивается.' }
    ],
    matching: { instruction: 'What does the coach say about each area of the gym? Choose the correct letter, A–D.', options: ['Twenty treadmills and bikes', 'The free weights', 'A quiet area', 'A coin that is returned'], items: [{ q: 'The cardio zone', a: 'A', e: 'В кардио-зоне двадцать дорожек и велотренажёров.' }, { q: 'The middle of the gym', a: 'B', e: 'В центре — свободные веса.' }, { q: 'The stretching area', a: 'C', e: 'Зона растяжки — тихая, в углу.' }, { q: 'The lockers', a: 'D', e: 'Для шкафчиков нужна монета, которую потом возвращают.' }] },
    short: [{ q: 'How many sessions a week does the coach recommend for beginners?', a: ['3', 'three'], e: 'Для начинающих — три занятия в неделю.' }, { q: 'How much is the monthly fee?', a: ['35', '£35', 'thirty-five', 'thirty-five pounds', '35 pounds'], e: 'Месячный взнос — тридцать пять фунтов.' }]
  });

  /* 54 · Al-Matin */
  X(54, {
    task1: {
      prompt: 'The line graph below shows the percentage of people who were still practising a new habit over sixteen weeks, according to how they planned it. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'People still practising the habit (%), illustrative data', unit: '% of people', ymax: 100, x: ['Week 1', 'Week 4', 'Week 8', 'Week 12', 'Week 16'], series: [{ name: 'Five minutes every day', y: [100, 88, 79, 72, 68] }, { name: 'One long session a week', y: [100, 60, 38, 25, 17] }] },
      keywords: ['habit', 'practising', 'percentage', 'weeks', 'five minutes', 'daily', 'long session', 'declined', 'steady', 'plan'],
      model: `The line graph shows the percentage of people who were still practising a new habit over sixteen weeks, according to whether they planned five minutes every day or one long session a week. The data are illustrative.

Overall, the proportion of people who continued the habit fell in both groups, but it fell much faster among those who planned a single long session a week.

Both groups began with 100% in Week 1. In the group that practised for five minutes every day, the figure declined gradually, to 88% in Week 4, 79% in Week 8 and 72% in Week 12, and it was still 68% in Week 16. This is a fall of 32 percentage points over the whole period.

By contrast, the figure for the group with one long session a week dropped sharply at the start, to only 60% in Week 4, and then continued to fall to 38% in Week 8, 25% in Week 12 and 17% in Week 16, a fall of 83 points.

As a result, the gap between the two groups widened from 28 points in Week 4 to 51 points by the end.`,
      analysis: ['Task Achievement: две линии, общий старт 100%, разная скорость падения.', 'Вычисления: −32 и −83; разрыв 28 → 51.', 'Cohesion: Overall / By contrast / As a result.', 'Lexical Resource: declined gradually, dropped sharply, widened, practised.']
    },
    heads: {
      list: ['A history of rope making', 'Meanings of a root', 'Heroic effort in sport', 'Two verses about firm plans', 'Strength versus constancy', 'Building skills step by step'],
      items: [{ p: 'A', a: 'ii', e: 'Абзац A: значения корня m-t-n.' }, { p: 'B', a: 'iv', e: 'Абзац B: 51:58 и 7:183 — о прочных замыслах.' }, { p: 'C', a: 'v', e: 'Абзац C: сила и постоянство.' }, { p: 'D', a: 'vi', e: 'Абзац D: навыки шаг за шагом.' }]
    },
    ynng: [
      { q: 'The writer suggests that regular short practice is better than rare long sessions.', a: 'YES', e: 'Абзац D: тридцать минут каждый день лучше шести часов раз в месяц.' },
      { q: 'The writer recommends studying intensively for a single night.', a: 'NO', e: 'Абзац C: одна ночь интенсивной учёбы ненадёжна.' },
      { q: 'The writer says that habits take exactly two months to form.', a: 'NOT GIVEN', e: 'Срок формирования привычки в тексте не называется.' }
    ],
    matching: { instruction: 'Which principle of habit-building does each example illustrate? Choose the correct letter, A–D.', options: ['Make it small', 'Link it to an existing routine', 'Make it visible', 'Track it'], items: [{ q: 'Five minutes of reading', a: 'A', e: 'Пять минут чтения — «сделай это малым».' }, { q: 'Reading after breakfast', a: 'B', e: 'Чтение после завтрака — привязка к привычному распорядку.' }, { q: 'Leaving the book on the table', a: 'C', e: 'Книга на столе — «сделай это видимым».' }, { q: 'Marking a calendar', a: 'D', e: 'Отметки в календаре — «отслеживай».' }] },
    short: [{ q: 'On average, how long did participants take to make a simple behaviour automatic?', a: ['about two months', 'two months', '2 months', 'about 2 months'], e: 'В среднем около двух месяцев.' }, { q: 'On which day will the results be discussed?', a: ['Thursday'], e: 'Результаты обсудят в четверг.' }]
  });

  /* 55 · Al-Waliyy */
  X(55, {
    task1: {
      prompt: 'The table below shows the number of students, the average school attendance and the percentage planning to continue to college in three groups: students with a mentor, students on a waiting list and students with no programme. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Mentoring programme results, illustrative data', head: ['Group', 'Students', 'Average attendance (%)', 'Plan to continue to college (%)'], rows: [['With a mentor', '120', '94', '78'], ['Waiting list', '100', '89', '61'], ['No programme', '150', '88', '58']] },
      keywords: ['mentor', 'students', 'attendance', 'college', 'waiting list', 'programme', 'group', 'percentage', 'highest', 'lowest'],
      model: `The table compares three groups of students, those with a mentor, those on a waiting list and those with no programme, in terms of group size, average school attendance and the percentage who plan to continue to college. The data are illustrative.

Overall, the students with a mentor had the best results on both measures, and the other two groups were similar to each other.

The group with a mentor consisted of 120 students. Their average attendance was 94%, the highest in the table, and 78% of them planned to continue to college. Students on the waiting list, a group of 100, had an attendance of 89%, and 61% of them wanted to go to college.

The largest group, the 150 students with no programme, had the lowest results: their attendance was 88% and only 58% planned to continue their education.

The difference in attendance between the mentored students and the other two groups was small, at 5 and 6 percentage points, but the difference in college plans was much greater, at 17 points compared with the waiting list and 20 points compared with the group with no programme.`,
      analysis: ['Task Achievement: три группы, три показателя; обзор — лучшие результаты у наставляемых.', 'Вычисления: разница по посещаемости 5 и 6; по планам на колледж 17 и 20.', 'Cohesion: Overall / The largest group / compared with.', 'Lexical Resource: consisted of, continue their education, mentored students, waiting list.']
    },
    heads: {
      list: ['The history of schools', 'Being a reliable friend', 'Nearness, friends and guardians', 'The law of guardianship', 'The choice of friends', 'Light and darkness in a verse'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: близость, друзья и опекуны.' }, { p: 'B', a: 'vi', e: 'Абзац B: свет и тьма в аяте 2:257.' }, { p: 'C', a: 'v', e: 'Абзац C: выбор друзей.' }, { p: 'D', a: 'ii', e: 'Абзац D: быть надёжным другом.' }]
    },
    ynng: [
      { q: 'The writer suggests that the choice of friends and guides is one of the most important decisions in life.', a: 'YES', e: 'Абзац C: выбор друзей и проводников — одно из важнейших решений.' },
      { q: 'The writer recommends choosing friends who encourage laziness or deception.', a: 'NO', e: 'Абзац D: следует избегать тех, кто поощряет лень или обман.' },
      { q: 'The writer says that friends influence adults less than children.', a: 'NOT GIVEN', e: 'Сравнение влияния на детей и взрослых не приводится.' }
    ],
    matching: { instruction: 'What does the coordinator say about each of the following? Choose the correct letter, A–D.', options: ['Six months', 'At the school library', 'Up to ten pounds a month', 'About two weeks'], items: [{ q: 'The length of each match', a: 'A', e: 'Каждая пара наставник-ученик — на шесть месяцев.' }, { q: 'The place for the meetings', a: 'B', e: 'Встречи — в школьной библиотеке.' }, { q: 'The reimbursement of travel costs', a: 'C', e: 'Проезд возмещают до десяти фунтов в месяц.' }, { q: 'The background check', a: 'D', e: 'Проверка занимает около двух недель.' }] },
    short: [{ q: 'What is the minimum age for mentors?', a: ['21', 'twenty-one', 'twenty one'], e: 'Наставникам должно быть не менее двадцати одного года.' }, { q: 'On which dates is the training?', a: ['11 and 12 October', 'the eleventh and twelfth of October', '11th and 12th October', 'eleventh and twelfth of October', '11-12 October', 'the 11th and 12th of October'], e: 'Обучение — одиннадцатого и двенадцатого октября.' }]
  });

  /* 56 · Al-Hamid */
  X(56, {
    task1: {
      prompt: 'The bar chart below shows the percentage of children who chose a harder task and the percentage who kept trying after a failure, according to the kind of praise they had received. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Children by type of praise received (%), illustrative data', unit: '% of children', ymax: 100, cats: ['Praise for effort', 'Praise for talent', 'No praise'], series: [{ name: 'Chose a harder task', v: [66, 34, 45] }, { name: 'Kept trying after failure', v: [71, 38, 50] }] },
      keywords: ['children', 'praise', 'effort', 'talent', 'harder task', 'failure', 'percentage', 'chose', 'trying', 'highest'],
      model: `The bar chart compares the percentage of children who chose a harder task and the percentage who kept trying after a failure, according to the kind of praise that they had received. The data are illustrative.

Overall, children who were praised for effort performed best on both measures, whereas children who were praised for talent performed worst, even worse than children who received no praise at all.

Among the children praised for effort, 66% chose a harder task and 71% kept trying after a failure. These were the highest figures in the chart. For the children praised for talent, the figures were much lower, at 34% and 38% respectively.

The group that received no praise came in between, with 45% choosing a harder task and 50% persisting after failure.

The difference between praise for effort and praise for talent was 32 percentage points for choosing a harder task and 33 points for persisting. In all three groups, the percentage who kept trying was slightly higher than the percentage who chose a harder task, by between 4 and 5 points.`,
      analysis: ['Task Achievement: три группы, две серии; обзор — хвала за усилие лучше, хвала за талант хуже отсутствия хвалы.', 'Вычисления: разрыв 32 и 33; «keep trying» выше на 5, 4 и 5 пунктов.', 'Cohesion: Overall / whereas / respectively / In all three groups.', 'Lexical Resource: persisting, came in between, praise for effort, harder task.']
    },
    heads: {
      list: ['A history of public speeches', 'Sincere and specific praise', 'Praise built into a word', 'How to write a thank-you card', 'Gratitude benefits the grateful', 'The pairing with the Free of Need'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: хвала, заложенная в слове (корень h-m-d).' }, { p: 'B', a: 'vi', e: 'Абзац B: пара с Аль-Гани (Не нуждающийся).' }, { p: 'C', a: 'v', e: 'Абзац C: благодарность приносит пользу благодарному.' }, { p: 'D', a: 'ii', e: 'Абзац D: искренняя и конкретная хвала.' }]
    },
    ynng: [
      { q: 'The writer recommends that praise for other people should be specific and sincere and not empty flattery.', a: 'YES', e: 'Абзац D: конкретная и искренняя похвала вместо лести.' },
      { q: 'The writer claims that praise adds something to the One who is praised.', a: 'NO', e: 'Абзац C: быть Не нуждающимся — хвала ничего не добавляет.' },
      { q: 'The writer says that children need more praise than adults.', a: 'NOT GIVEN', e: 'Потребность в похвале у разных возрастов не сравнивается.' }
    ],
    matching: { instruction: 'Which rule of effective praise does each example illustrate? Choose the correct letter, A–D.', options: ['Be specific', 'Be sincere', 'Be timely', 'Praise in public only if the person likes it'], items: [{ q: '"Your introduction had a clear structure"', a: 'A', e: 'Конкретная похвала лучше, чем «Молодец».' }, { q: 'People notice flattery', a: 'B', e: 'Хвалить нужно искренне.' }, { q: 'Praise close to the action', a: 'C', e: 'Хвалить нужно вовремя, ближе к действию.' }, { q: 'Some people prefer private words', a: 'D', e: 'Публично хвалить — только если человек этого хочет.' }] },
    short: [{ q: 'According to the lecturer, praise for effort is more helpful than praise for what?', a: ['innate talent', 'talent', 'praise for talent', 'praise for innate talent'], e: 'Похвала за усилие полезнее похвалы за врождённый талант.' }, { q: 'At what time is the seminar on Friday?', a: ['10', 'ten', '10:00', '10 am', '10am'], e: 'Семинар в пятницу в десять часов.' }]
  });

  /* 57 · Al-Muhsi */
  X(57, {
    task1: {
      prompt: 'The diagram below shows the main steps of a national census. The process is illustrative. ' + T1,
      chart: { type: 'process', caption: 'How a national census is carried out', steps: ['Staff are recruited and trained.', 'Staff visit homes from October to the end of November.', 'Households answer questions about age, gender, education, occupation and housing.', 'The answers are kept confidential.', 'Individual answers are combined into overall results.', 'A sample of two per cent of households is visited again to check the answers.', 'The combined results are published and used in planning.'] },
      keywords: ['census', 'staff', 'households', 'questions', 'confidential', 'combined', 'sample', 'check', 'published', 'planning'],
      model: `The diagram illustrates the main steps of a national census, a process which consists of seven stages. It is an illustrative example.

Overall, the process has three parts: collecting the information, processing and checking it, and using the results, and the confidentiality of the answers is protected throughout.

First, staff are recruited and trained. Then they visit homes from October to the end of November, which is the only step with a fixed period. During the visits, households answer questions about age, gender, education, occupation and housing, and the answers are kept confidential.

In the next stage, the individual answers are combined into overall results, so that no individual household can be identified. After that, a sample of two per cent of households is visited again to check the answers.

Finally, the combined results are published, and they are used in planning, for example for schools, hospitals and pensions. In this way, the process moves from individual answers to information that benefits the whole country.`,
      analysis: ['Task Achievement: три части и защита конфиденциальности отмечены в обзоре.', 'Process language: First / Then / In the next stage / After that / Finally; пассив.', 'Выбор деталей: период визитов, 2% выборка для проверки, использование результатов.', 'Cohesion: so that / In this way; вывод о пути от личных ответов к общей информации.']
    },
    heads: {
      list: ['How censuses are organised', 'Precision and counting blessings', 'A history of mathematics', 'Counting and forgetting', 'A verb meaning to count exactly', 'Three verses about enumeration'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: глагол ahsa — считать точно.' }, { p: 'B', a: 'vi', e: 'Абзац B: 36:12, 72:28, 58:6 об исчислении.' }, { p: 'C', a: 'iv', e: 'Абзац C: счёт и забывание.' }, { p: 'D', a: 'ii', e: 'Абзац D: точность и счёт благ.' }]
    },
    ynng: [
      { q: 'The writer suggests that deeds that nobody noticed are not lost.', a: 'YES', e: 'Абзац C: дела, которых никто не заметил, не теряются.' },
      { q: 'The writer recommends counting only one\'s difficulties.', a: 'NO', e: 'Абзац D: считать блага, а не только трудности.' },
      { q: 'The writer says that keeping accurate financial records is required by law.', a: 'NOT GIVEN', e: 'Юридические требования к учёту в тексте не упоминаются.' }
    ],
    matching: { instruction: 'What does the officer say about each of the following? Choose the correct letter, A–D.', options: ['It takes place every ten years', 'About forty thousand staff took part', 'Two per cent of households are visited again', 'At least twenty people must answer'], items: [{ q: 'The census', a: 'A', e: 'Перепись проводится раз в десять лет.' }, { q: 'The home visits in the last census', a: 'B', e: 'В визитах участвовало около сорока тысяч сотрудников.' }, { q: 'The checks after the census', a: 'C', e: 'После переписи повторно навещают два процента домохозяйств.' }, { q: 'The students\' class survey', a: 'D', e: 'В опросе должно ответить не менее двадцати человек.' }] },
    short: [{ q: 'How long did the work of the last census take?', a: ['two months', '2 months', 'about two months', 'about 2 months'], e: 'Работа заняла два месяца.' }, { q: 'On which day is the assignment due?', a: ['Tuesday', 'next Tuesday'], e: 'Задание сдаётся во вторник.' }]
  });

  /* 58 · Al-Mubdi' */
  X(58, {
    task1: {
      prompt: 'The line graph below shows the number of applications to a start-up programme and the number of teams that were accepted each year between 2019 and 2023. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Start-up programme: applications and accepted teams, illustrative data', unit: 'number', ymax: 150, x: ['2019', '2020', '2021', '2022', '2023'], series: [{ name: 'Applications', y: [40, 55, 78, 102, 130] }, { name: 'Teams accepted', y: [10, 12, 15, 18, 20] }] },
      keywords: ['applications', 'teams', 'accepted', 'start-up', 'programme', 'years', 'increase', 'rate', 'number', 'tripled'],
      model: `The line graph shows how many applications a start-up programme received and how many teams it accepted in each year from 2019 to 2023. The data are illustrative.

Overall, both numbers rose throughout the period, but the number of applications grew much faster than the number of accepted teams.

The number of applications increased in every year, from 40 in 2019 to 130 in 2023, which is more than three times as many. The increase was steady, at between 15 and 28 applications a year, and it was largest in the final year, when 28 more applications were received.

By contrast, the number of teams accepted rose slowly and evenly, from 10 in 2019 to 20 in 2023, so that it only doubled. The increase was only 2 or 3 teams in each year.

As a result, the share of applicants who were accepted fell. In 2019, one in four applicants, 25%, was accepted, but by 2023 the proportion had dropped to about 15%, which means that the competition for places became much stronger.`,
      analysis: ['Task Achievement: две линии, разный темп роста; вывод о снижении доли принятых.', 'Вычисления: 40 → 130 (более чем втрое), 10 → 20 (вдвое); 25% → ≈15%.', 'Cohesion: Overall / By contrast / As a result.', 'Lexical Resource: applicants, share, competition for places, evenly.']
    },
    heads: {
      list: ['A history of start-ups', 'The habit of starting', 'Starting without a previous model', 'Why prototypes fail', 'Direct verses on beginning and repeating', 'Why beginnings matter'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: начинать без прежнего образца.' }, { p: 'B', a: 'v', e: 'Абзац B: прямые аяты о начале и повторении.' }, { p: 'C', a: 'vi', e: 'Абзац C: почему важны начала.' }, { p: 'D', a: 'ii', e: 'Абзац D: привычка начинать.' }]
    },
    ynng: [
      { q: 'The writer suggests that many people fail because they never begin.', a: 'YES', e: 'Абзац C: многие не терпят неудачу из-за отсутствия способностей, а просто не начинают.' },
      { q: 'The writer believes that a beginning needs perfect conditions.', a: 'NO', e: 'Абзац C: ожидание лучших условий — причина, по которой не начинают.' },
      { q: 'The writer says that small businesses are more creative than large ones.', a: 'NOT GIVEN', e: 'Сравнение компаний по творчеству не приводится.' }
    ],
    matching: { instruction: 'What does the officer say about each of the following? Choose the correct letter, A–D.', options: ['It lasts twelve weeks', 'Two per cent of the future company', 'A grant of five thousand pounds', 'A video of three minutes'], items: [{ q: 'The length of the programme', a: 'A', e: 'Программа длится двенадцать недель.' }, { q: 'What the programme asks in return', a: 'B', e: 'Взамен — два процента будущей компании.' }, { q: 'The grant for selected teams', a: 'C', e: 'Грант — пять тысяч фунтов.' }, { q: 'Part of the application', a: 'D', e: 'В заявку входит трёхминутное видео.' }] },
    short: [{ q: 'How many students tested the prototype?', a: ['30', 'thirty', 'about thirty'], e: 'Прототип проверили около тридцати студентов.' }, { q: 'What is the application deadline?', a: ['14 February', 'the fourteenth of February', '14th February', 'February 14', 'fourteenth of February', 'the 14th of February'], e: 'Срок — четырнадцатое февраля.' }]
  });

  /* 59 · Al-Mu'id */
  X(59, {
    task1: {
      prompt: 'The line graph below shows the percentage of new material remembered over thirty days by three groups of students, according to how they revised. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Material remembered (%), illustrative data', unit: '% remembered', ymax: 100, x: ['Day 1', 'Day 3', 'Day 7', 'Day 14', 'Day 30'], series: [{ name: 'Spaced reviews', y: [100, 92, 88, 85, 82] }, { name: 'Re-reading notes', y: [100, 70, 52, 41, 33] }, { name: 'One study session', y: [100, 58, 38, 28, 21] }] },
      keywords: ['remembered', 'material', 'spaced reviews', 're-reading', 'study session', 'days', 'percentage', 'declined', 'memory', 'revision'],
      model: `The line graph shows the percentage of new material that three groups of students remembered over thirty days, depending on how they revised. The data are illustrative.

Overall, the memory of all three groups declined over time, but the decline was far smaller for the students who used spaced reviews than for the other two groups.

All three groups remembered everything on the first day. After that, the students who used spaced reviews lost very little, with figures of 92% on Day 3 and 88% on Day 7, and they still remembered 82% of the material on Day 30, a fall of only 18 percentage points.

The students who re-read their notes showed a much sharper decline, to 70% on Day 3 and 52% on Day 7, and they finished at 33%. The group that had only one study session performed worst. It dropped to 58% on Day 3, to 38% on Day 7, and to just 21% on Day 30.

As a result, the gap between the group with spaced reviews and the group with one session grew to 61 points by the end of the month.`,
      analysis: ['Task Achievement: три линии, общий старт, самая пологая у интервальных повторений.', 'Вычисления: −18, −67 (100 → 33), −79 (100 → 21); разрыв 61.', 'Cohesion: Overall / After that / As a result.', 'Lexical Resource: spaced reviews, decline, sharper, performed worst.']
    },
    heads: {
      list: ['The history of examinations', 'Spaced repetition in practice', 'A cycle of beginning and returning', 'Why people forget names', 'Verses on repeating creation', 'Observation and a principle of nature'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: цикл — начало и возвращение.' }, { p: 'B', a: 'v', e: 'Абзац B: 85:13, 21:104, 29:19 о повторении творения.' }, { p: 'C', a: 'vi', e: 'Абзац C: наблюдение и принцип повторения в природе.' }, { p: 'D', a: 'ii', e: 'Абзац D: интервальное повторение на практике.' }]
    },
    ynng: [
      { q: 'The writer suggests that returning to good habits after a failure is not pointless.', a: 'YES', e: 'Абзац D: предыдущая неудача не делает возвращение бессмысленным.' },
      { q: 'The writer claims that repetition is useless for learning.', a: 'NO', e: 'Абзац C: знания и навыки закрепляются возвращением к ним.' },
      { q: 'The writer says that spaced repetition works better for languages than for sciences.', a: 'NOT GIVEN', e: 'Сравнение предметов в тексте отсутствует.' }
    ],
    matching: { instruction: 'What does the advisor say about each of the following? Choose the correct letter, A–D.', options: ['Close the notes and write down what you remember', 'Review after one day, three days, a week and a month', 'It takes only ten or fifteen minutes', 'Explaining a topic to others shows what you know'], items: [{ q: 'Self-testing', a: 'A', e: 'Самопроверка: закрыть конспекты и записать, что помнишь.' }, { q: 'Spaced repetition', a: 'B', e: 'Повторять через день, три дня, неделю и месяц.' }, { q: 'Each review', a: 'C', e: 'Каждое повторение занимает десять-пятнадцать минут.' }, { q: 'Studying in a small group', a: 'D', e: 'Объяснение темы другим показывает, что вы на самом деле знаете.' }] },
    short: [{ q: 'How many topics are there in the course?', a: ['24', 'twenty-four', 'twenty four'], e: 'В курсе двадцать четыре темы.' }, { q: 'On which date is the examination?', a: ['18 June', 'the eighteenth of June', '18th June', 'June 18', 'eighteenth of June', 'the 18th of June'], e: 'Экзамен — восемнадцатого июня.' }]
  });

  /* 60 · Al-Muhyi */
  X(60, {
    task1: {
      prompt: 'The bar chart below shows the percentage of saplings of three kinds that survived for two years, comparing trees whose planters were given a personal tree with weekly reminders and trees with no follow-up. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Saplings surviving after two years (%), illustrative data', unit: '% of saplings', ymax: 100, cats: ['Poplar', 'Elm', 'Apple'], series: [{ name: 'Assigned carer with weekly reminders', v: [88, 84, 91] }, { name: 'No follow-up', v: [54, 49, 62] }] },
      keywords: ['saplings', 'survived', 'two years', 'poplar', 'elm', 'apple', 'carer', 'reminders', 'follow-up', 'percentage'],
      model: `The bar chart compares the percentage of saplings of three kinds, poplar, elm and apple, that survived for two years, depending on whether each tree had an assigned carer who received weekly reminders or whether there was no follow-up. The data are illustrative.

Overall, the survival rate was much higher for every kind of tree when there was a carer with reminders, and apple trees did best in both conditions.

In the group with an assigned carer, the survival rate was 91% for apple trees, 88% for poplars and 84% for elms. In the group with no follow-up, the corresponding figures were far lower, at 62% for apple trees, 54% for poplars and 49% for elms, which means that fewer than half of the elms survived.

The advantage of having a carer was similar for all three kinds. It was 35 percentage points for elms, 34 points for poplars and 29 points for apple trees.

It is noticeable that the ranking of the three kinds was different only in one respect: poplars did better than elms in both conditions, but the difference between them was slightly smaller when the trees were cared for, at 4 points, than in the group without follow-up, at 5 points.`,
      analysis: ['Task Achievement: три вида, два режима; обзор — уход с напоминаниями повышает выживаемость, яблони лучше всех.', 'Вычисления: разрыв 35, 34 и 29; тополь и вяз 88/84 и 54/49.', 'Cohesion: Overall / In the group ... / corresponding figures / It is noticeable that.', 'Lexical Resource: survival rate, assigned carer, follow-up, ranking.']
    },
    heads: {
      list: ['The history of gardens', 'Protecting and renewing life', 'The root of life', 'Rain in desert climates', 'Verses on lifeless land', 'A visible sign of renewal'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень жизни h-y-y.' }, { p: 'B', a: 'v', e: 'Абзац B: 30:50, 41:39, 30:19 — мёртвая земля оживает.' }, { p: 'C', a: 'vi', e: 'Абзац C: наблюдаемый знак обновления.' }, { p: 'D', a: 'ii', e: 'Абзац D: защищать и обновлять жизнь.' }]
    },
    ynng: [
      { q: 'The writer suggests that learning first aid helps to preserve human life in emergencies.', a: 'YES', e: 'Абзац D: основы первой помощи сохраняют жизнь в экстренных ситуациях.' },
      { q: 'The writer says that it is unreasonable to expect renewal in places other than nature.', a: 'NO', e: 'Абзац C: если обновление происходит в природе, разумно ожидать его и в других местах.' },
      { q: 'The writer states that living near trees reduces illness.', a: 'NOT GIVEN', e: 'Связь деревьев со здоровьем не обсуждается.' }
    ],
    matching: { instruction: 'What does the organiser say about each of the following? Choose the correct letter, A–D.', options: ['Apple trees go along the edge by the playground', 'Poplar and elm trees go in rows near the road', 'The hole should be about sixty centimetres deep', 'Each tree is watered with ten litres'], items: [{ q: 'Where the apple trees will go', a: 'A', e: 'Яблони — вдоль края, у детской площадки.' }, { q: 'Where the other trees will go', a: 'B', e: 'Остальные — рядами у дороги.' }, { q: 'The first step in planting', a: 'C', e: 'Сначала копают яму глубиной около шестидесяти сантиметров.' }, { q: 'The last step in planting', a: 'D', e: 'В конце дерево поливают десятью литрами воды.' }] },
    short: [{ q: 'How many saplings will be planted today?', a: ['300', 'three hundred'], e: 'Сегодня посадят триста саженцев.' }, { q: 'At what time does the first group start?', a: ['9', 'nine', '9:00', '9 am', '9am'], e: 'Первая группа начинает в девять.' }]
  });
})();

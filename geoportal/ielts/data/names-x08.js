// Имена 71–80: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 71 · Al-Muqaddim */
  X(71, {
    task1: {
      prompt: 'The diagram below shows the steps of a daily routine that helps a student to put first things first. The routine is illustrative. ' + T1,
      chart: { type: 'process', caption: 'A "first things first" daily routine', steps: ['The student lists all the tasks of the day.', 'He marks the three most important tasks.', 'He does the most difficult of the three in the morning.', 'He completes the other two important tasks.', 'He deals with the less important tasks.', 'He says no to new requests that are not important.', 'In the evening, he reviews what was done and plans the next day.'] },
      keywords: ['student', 'tasks', 'important', 'difficult', 'morning', 'requests', 'review', 'plans', 'routine', 'finally'],
      model: `The diagram illustrates a daily routine of seven steps that helps a student to put first things first. It is an illustrative example.

Overall, the routine has three parts: choosing the priorities, working on them in order of importance and reviewing the day, and it is designed to ensure that the most important work is done before anything else.

First, the student lists all the tasks of the day, and then he marks the three most important ones. After that, the main work begins. He does the most difficult of the three in the morning, which is the only step linked to a particular time of day, and then he completes the other two important tasks.

Only when the important tasks have been done does he deal with the less important ones. During this stage, he says no to new requests that are not important, so that his priorities are not disturbed.

Finally, in the evening, he reviews what was done and plans the next day. In this way, the end of each day becomes the starting point of the next one.`,
      analysis: ['Task Achievement: три части и принцип «важное — раньше» выделены в обзоре.', 'Process language: First / Then / After that / Only when / Finally; пассив.', 'Выбор деталей: единственный шаг, привязанный ко времени суток; шаг «сказать нет».', 'Cohesion: so that / In this way; вывод о цикле.']
    },
    heads: {
      list: ['The history of prefaces', 'Three ways to apply the idea', 'Being in front: a root and its relatives', 'How queues work', 'Verses about timing', 'Actions sent ahead'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень q-d-m и родственные слова.' }, { p: 'B', a: 'v', e: 'Абзац B: аяты о времени — 75:13, 16:61.' }, { p: 'C', a: 'vi', e: 'Абзац C: действия, «отправленные вперёд».' }, { p: 'D', a: 'ii', e: 'Абзац D: три способа применить идею.' }]
    },
    ynng: [
      { q: 'The writer suggests that actions are like goods sent in advance to a destination.', a: 'YES', e: 'Абзац C: действия подобны товарам, отправленным заранее.' },
      { q: 'The writer believes that the timing of events is in human hands.', a: 'NO', e: 'Абзац B: время событий — не в человеческих руках.' },
      { q: 'The writer says that most people never name their priorities.', a: 'NOT GIVEN', e: 'Привычки большинства людей в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What does the coordinator say about each of the following? Choose the correct letter, A–D.', options: ['Fifty minutes', 'Twelve pounds', 'The three most important tasks', 'Room twenty-two'], items: [{ q: 'The length of each session', a: 'A', e: 'Каждая сессия длится пятьдесят минут.' }, { q: 'The price of later sessions', a: 'B', e: 'После первой — по двенадцать фунтов.' }, { q: 'What the student marks in the method', a: 'C', e: 'Отмечают три самые важные задачи.' }, { q: 'The location of the centre', a: 'D', e: 'Комната двадцать два в здании библиотеки.' }] },
    short: [{ q: 'On which day is Bekzat\'s appointment?', a: ['Tuesday'], e: 'Приём — во вторник в десять.' }, { q: 'What should Bekzat bring besides his timetable and a list of deadlines?', a: ['weekly schedule', 'his weekly schedule', 'usual weekly schedule', 'his usual weekly schedule', 'his usual schedule'], e: 'Ещё нужно принести привычный недельный график.' }]
  });

  /* 72 · Al-Mu'akhkhir */
  X(72, {
    task1: {
      prompt: 'The bar chart below shows the percentage of tasks that students started on time and the percentage that they finished by their own deadline, depending on the technique they used against procrastination. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Tasks started and finished on time (%), illustrative data', unit: '% of tasks', ymax: 100, cats: ['Very small first step', '25-minute timer', 'Removing distractions', 'Reward after the session', 'No technique'], series: [{ name: 'Started on time', v: [72, 68, 64, 55, 31] }, { name: 'Finished by own deadline', v: [70, 66, 63, 57, 35] }] },
      keywords: ['tasks', 'started', 'finished', 'procrastination', 'techniques', 'timer', 'distractions', 'reward', 'deadline', 'percentage'],
      model: `The bar chart compares the percentage of tasks that students started on time and the percentage that they finished by their own deadline, according to the technique that they used against procrastination. The data are illustrative.

Overall, every technique was more effective than using no technique, and the techniques that make the start easier gave the best results.

A very small first step was the most effective technique, with 72% of tasks started on time and 70% finished by the deadline. The 25-minute timer came next, with 68% and 66%, followed by removing distractions with 64% and 63%. A reward after the session was the least effective of the four techniques, at 55% and 57%.

Students who used no technique performed far worse. Only 31% of their tasks were started on time, and 35% were finished by the deadline. The difference between the best technique and no technique was therefore 41 percentage points for starting on time and 35 points for finishing.

It is noticeable that, for the reward technique and for no technique, the percentage of tasks finished was slightly higher than the percentage started on time.`,
      analysis: ['Task Achievement: пять вариантов, две серии; обзор — любая техника лучше отсутствия техники.', 'Вычисления: 72 − 31 = 41; 70 − 35 = 35; два случая, где «завершено» выше «начато» (57 > 55; 35 > 31).', 'Cohesion: Overall / came next / followed by / It is noticeable that.', 'Lexical Resource: procrastination, effective, performed far worse, technique.']
    },
    heads: {
      list: ['A history of calendars', 'Wise delay and procrastination', 'Behind and later: a root and its partner', 'Techniques of public speaking', 'Verses on mercy and time', 'Delay as patience, with a limit'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень a-kh-r и парное имя.' }, { p: 'B', a: 'v', e: 'Абзац B: 14:42, 71:4, 16:61 о милости и времени.' }, { p: 'C', a: 'vi', e: 'Абзац C: отсрочка как терпение, но с пределом.' }, { p: 'D', a: 'ii', e: 'Абзац D: мудрая отсрочка и откладывание.' }]
    },
    ynng: [
      { q: 'The writer suggests that one should not delay doing good, apologising or paying a debt.', a: 'YES', e: 'Абзац D: добро, извинение и долг откладывать не следует.' },
      { q: 'The writer believes that a delayed matter is forgotten.', a: 'NO', e: 'Абзац A: отложенное не забыто.' },
      { q: 'The writer says that procrastination is more common among men than among women.', a: 'NOT GIVEN', e: 'Различия по полу в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'Which technique does each example illustrate? Choose the correct letter, A–D.', options: ['Writing one sentence', 'Setting a timer for twenty-five minutes', 'Switching off notifications', 'Rewarding yourself after the session'], items: [{ q: 'Technique one', a: 'A', e: 'Первая — сделать первый шаг очень маленьким, например написать одно предложение.' }, { q: 'Technique two', a: 'B', e: 'Вторая — таймер на двадцать пять минут.' }, { q: 'Technique three', a: 'C', e: 'Третья — убрать отвлекающие факторы.' }, { q: 'Technique four', a: 'D', e: 'Четвёртая — награда после занятия.' }] },
    short: [{ q: 'How long should the timer be set for?', a: ['25 minutes', 'twenty-five minutes', '25', 'twenty-five'], e: 'Таймер на двадцать пять минут.' }, { q: 'How many days before the real deadline should a student set his own?', a: ['2', 'two', 'two days', '2 days'], e: 'За два дня до настоящего срока.' }]
  });

  /* 73 · Al-Awwal */
  X(73, {
    task1: {
      prompt: 'The table below shows the number of visitors per day and the average time that visitors spent in each of four rooms of a map exhibition. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Rooms of a map exhibition, illustrative data', head: ['Room', 'Theme', 'Visitors per day', 'Average time (minutes)'], rows: [['Room 1', 'The oldest maps', '310', '18'], ['Room 2', 'Greek and Roman scholars', '260', '14'], ['Room 3', 'The age of exploration', '340', '22'], ['Room 4', 'Interactive area', '420', '30']] },
      keywords: ['exhibition', 'rooms', 'visitors', 'average time', 'minutes', 'oldest maps', 'exploration', 'interactive', 'highest', 'lowest'],
      model: `The table shows the number of visitors per day and the average time that visitors spent in each of four rooms of a map exhibition. The data are illustrative.

Overall, the interactive area was the most popular room and the one in which visitors stayed the longest, whereas the room about Greek and Roman scholars attracted the fewest visitors and the shortest visits.

The interactive area, Room 4, received 420 visitors a day, which was the highest figure, and visitors spent an average of 30 minutes there, almost twice as long as in the room about the oldest maps, 18 minutes. The age of exploration, in Room 3, was the second most popular room, with 340 visitors, and the average time was 22 minutes, the second longest.

Room 1, with the oldest maps, had 310 visitors a day and an average visit of 18 minutes. The least successful room was Room 2, which dealt with the Greek and Roman scholars. It had only 260 visitors, and visitors spent just 14 minutes there.

The difference between the most and the least visited room was therefore 160 visitors a day, and the difference in average time was 16 minutes.`,
      analysis: ['Task Achievement: четыре зала, два показателя; обзор — интерактивная зона лидирует, зал греков и римлян отстаёт.', 'Вычисления: 420 − 260 = 160; 30 − 14 = 16; 30 почти вдвое больше 18 (≈1.7).', 'Cohesion: Overall / whereas / The least successful / therefore.', 'Lexical Resource: attracted, average visit, the second longest, dealt with.']
    },
    heads: {
      list: ['The history of clay tablets', 'Remembering origins and pioneers', 'Beginnings and returns to the origin', 'The rules of cartography', 'A key verse about time', 'The chain of causes'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: начало и возвращение к истоку (ta\'wil).' }, { p: 'B', a: 'v', e: 'Абзац B: ключевой аят о времени, 57:3.' }, { p: 'C', a: 'vi', e: 'Абзац C: цепь причин.' }, { p: 'D', a: 'ii', e: 'Абзац D: помнить истоки и первооткрывателей.' }]
    },
    ynng: [
      { q: 'The writer suggests that the stories of pioneers teach the courage of taking a first step.', a: 'YES', e: 'Абзац D: истории первопроходцев учат смелости первого шага.' },
      { q: 'The writer says that the chain of causes continues backward without an end.', a: 'NO', e: 'Абзац C: цепь имеет начальную точку.' },
      { q: 'The writer states that the verse 57:3 is recited every day by most Muslims.', a: 'NOT GIVEN', e: 'Частота чтения аята не обсуждается.' }
    ],
    matching: { instruction: 'What can visitors see in each part of the exhibition? Choose the correct letter, A–D.', options: ['Clay tablets showing fields and the layout of a town', 'A list of the coordinates of thousands of places', 'A map drawn by an Ottoman admiral', 'A projection that is still the basis of many wall maps'], items: [{ q: 'The first room', a: 'A', e: 'Первая комната: глиняные таблички с полями и планировкой города.' }, { q: 'The second room, about Greek and Roman scholars', a: 'B', e: 'Вторая комната: труд Птолемея с координатами тысяч мест.' }, { q: 'A map from fifteen thirteen', a: 'C', e: 'Карта 1513 года составлена османским адмиралом.' }, { q: 'A map from fifteen sixty-nine', a: 'D', e: 'Проекция Меркатора 1569 года до сих пор лежит в основе многих настенных карт.' }] },
    short: [{ q: 'How much does a ticket cost?', a: ['7', '£7', 'seven', 'seven pounds', '7 pounds'], e: 'Билет стоит семь фунтов.' }, { q: 'On what date does the drawing competition close?', a: ['20 June', 'the twentieth of June', '20th June', 'June 20', 'twentieth of June', 'the 20th of June'], e: 'Конкурс закрывается двадцатого июня.' }]
  });

  /* 74 · Al-Akhir */
  X(74, {
    task1: {
      prompt: 'The bar chart below shows the average satisfaction scores, out of 10, that team members gave to four stages of a project, comparing teams that held a closing ritual with teams that did not. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Average satisfaction score (out of 10), illustrative data', unit: 'score out of 10', ymax: 10, cats: ['Planning', 'Middle phase', 'Final delivery', 'Overall memory'], series: [{ name: 'With a closing ritual', v: [7.1, 6.8, 8.0, 8.2] }, { name: 'Without a closing ritual', v: [7.0, 6.7, 6.9, 6.2] }] },
      keywords: ['satisfaction', 'score', 'project', 'closing ritual', 'planning', 'middle phase', 'final delivery', 'memory', 'teams', 'difference'],
      model: `The bar chart compares the average satisfaction scores, out of 10, that team members gave to four stages of a project, depending on whether their team held a closing ritual at the end. The data are illustrative.

Overall, the two groups of teams gave almost identical scores to the first two stages, but the teams with a closing ritual were much more satisfied with the end of the project and with their overall memory of it.

For planning, the scores were 7.1 and 7.0, and for the middle phase 6.8 and 6.7, so the difference was only 0.1 points in each case. The middle phase received the lowest scores of all in both groups.

A clear difference appears in the final delivery. Teams with a closing ritual gave it 8.0, which was 1.1 points higher than the 6.9 given by teams without a ritual. The difference was the largest for the overall memory of the project: 8.2 compared with 6.2, a gap of 2.0 points.

It is also noticeable that in the teams with a closing ritual satisfaction rose from the middle phase to the end, while in the teams without it the overall memory was the lowest score on the chart.`,
      analysis: ['Task Achievement: четыре этапа, два типа команд; обзор — различие появляется ближе к концу.', 'Вычисления: разница 0.1, 0.1, 1.1 и 2.0 балла.', 'Cohesion: Overall / A clear difference appears / It is also noticeable that.', 'Lexical Resource: almost identical, delivery, the lowest scores, compared with.']
    },
    heads: {
      list: ['The structure of a concert', 'A dignified ending', 'The last and the Hereafter', 'A history of farewell customs', 'A verse and a promise', 'How experiences are judged'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: последний и Последняя жизнь.' }, { p: 'B', a: 'v', e: 'Абзац B: аят 57:3 и обещание.' }, { p: 'C', a: 'vi', e: 'Абзац C: как оценивают переживания (пик и конец).' }, { p: 'D', a: 'ii', e: 'Абзац D: достойное завершение.' }]
    },
    ynng: [
      { q: 'The writer suggests that a dignified ending can be a sincere thank you at the end of a project.', a: 'YES', e: 'Абзац D: искренняя благодарность в конце проекта.' },
      { q: 'The writer says that the name means that God comes to an end.', a: 'NO', e: 'Абзац A: смысл в том, что всё остальное заканчивается, а Он остаётся.' },
      { q: 'The writer says that most people remember the beginning of a trip better than the end.', a: 'NOT GIVEN', e: 'Такого сравнения в тексте нет.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['Many tasks are left almost finished', 'People who contributed are not acknowledged', 'There is no discussion of what worked and what did not', 'It takes about twenty minutes'], items: [{ q: 'The first common mistake', a: 'A', e: 'Первая ошибка — остановиться на девяносто процентах.' }, { q: 'The second common mistake', a: 'B', e: 'Вторая — закончить без благодарности.' }, { q: 'The third common mistake', a: 'C', e: 'Третья — закончить без размышления над итогами.' }, { q: 'The closing ritual', a: 'D', e: 'Ритуал завершения занимает около двадцати минут.' }] },
    short: [{ q: 'How long does the suggested closing ritual take?', a: ['20 minutes', 'twenty minutes', 'about twenty minutes', 'about 20 minutes', '20', 'twenty'], e: 'Около двадцати минут.' }, { q: 'On which date is the report due?', a: ['22', '22nd', 'the twenty-second', 'Monday the twenty-second', 'Monday 22nd', 'the 22nd', 'Monday the 22nd'], e: 'Отчёт — до понедельника, двадцать второго.' }]
  });

  /* 75 · Az-Zahir */
  X(75, {
    task1: {
      prompt: 'The line graph below shows the average number of details that two groups of participants noticed in a five-minute observation task over five weeks, comparing a group that practised daily observation with a group that did not. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average number of details noticed in five minutes, illustrative data', unit: 'details noticed', ymax: 20, x: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], series: [{ name: 'Daily observation practice', y: [6, 9, 12, 15, 18] }, { name: 'No practice', y: [6, 6, 7, 6, 7] }] },
      keywords: ['details', 'noticed', 'observation', 'practice', 'participants', 'weeks', 'average', 'increased', 'group', 'five minutes'],
      model: `The line graph shows the average number of details that two groups of participants noticed in a five-minute observation task over five weeks. One group practised observation every day, and the other group did not practise. The data are illustrative.

Overall, the number of details noticed rose steadily in the group that practised, whereas it hardly changed in the group that did not.

Both groups started at the same level, noticing an average of 6 details in Week 1. In the group that practised, the figure increased by exactly 3 details every week, to 9 in Week 2, 12 in Week 3, 15 in Week 4 and 18 in Week 5, which is three times the starting figure.

By contrast, the group without practice stayed almost exactly where it began. Its average was 6 in Weeks 2 and 4, and 7 in Weeks 3 and 5, so the total change over the five weeks was only one detail.

As a result, the difference between the two groups grew from nothing in the first week to 11 details in the last week.`,
      analysis: ['Task Achievement: две линии, общий старт, разные траектории; точные цифры.', 'Вычисления: +3 каждую неделю; 18 = 3 × 6; +1 у контрольной; разрыв 11.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: steadily, exactly, almost exactly where it began, total change.']
    },
    heads: {
      list: ['The history of photography', 'Noticing and being transparent', 'Two meanings: visible and above', 'Light on water', 'The third of four names', 'Overlooked favours'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два значения — видимый и превосходящий.' }, { p: 'B', a: 'v', e: 'Абзац B: третье из четырёх имён в 57:3.' }, { p: 'C', a: 'vi', e: 'Абзац C: незамечаемые блага.' }, { p: 'D', a: 'ii', e: 'Абзац D: замечать и быть прозрачным.' }]
    },
    ynng: [
      { q: 'The writer suggests that people notice a blessing most when it is absent.', a: 'YES', e: 'Абзац C: люди замечают благо больше всего, когда его нет.' },
      { q: 'The writer encourages ambiguity in agreements.', a: 'NO', e: 'Абзац D: следует избегать двусмысленности в договорённостях.' },
      { q: 'The writer says that nature photography improves mental health.', a: 'NOT GIVEN', e: 'Влияние фотографии на психику не обсуждается.' }
    ],
    matching: { instruction: 'What does the organiser say about each of the following? Choose the correct letter, A–D.', options: ['The main gate of the park', 'Eight kilometres', 'A phone with a good camera', 'Fifteen pounds including a printed guide'], items: [{ q: 'The meeting place', a: 'A', e: 'Встреча у главных ворот парка.' }, { q: 'The length of the route', a: 'B', e: 'Маршрут — восемь километров.' }, { q: 'The minimum equipment', a: 'C', e: 'Достаточно телефона с хорошей камерой.' }, { q: 'The price', a: 'D', e: 'Пятнадцать фунтов, включая печатный путеводитель.' }] },
    short: [{ q: 'At what time do the participants meet?', a: ['6', 'six', '6 am', '6am', '6:00', 'six o\'clock', '6 o\'clock'], e: 'Встреча в шесть утра, а не в семь.' }, { q: 'What is the name of the leader of the walk?', a: ['Ainur'], e: 'Руководителя зовут Айнур.' }]
  });

  /* 76 · Al-Batin */
  X(76, {
    task1: {
      prompt: 'The bar chart below shows the percentage of working time that people in five occupations spent out of public view and the percentage who said that they were publicly thanked for their work. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Occupations: time out of public view and public thanks (%), illustrative data', unit: '%', ymax: 100, cats: ['Sound engineer', 'Night cleaner', 'Laboratory technician', 'Stage manager', 'Librarian'], series: [{ name: 'Working time out of public view', v: [85, 95, 90, 70, 55] }, { name: 'Say they are publicly thanked', v: [12, 6, 9, 25, 40] }] },
      keywords: ['occupations', 'public view', 'thanked', 'sound engineer', 'night cleaner', 'laboratory technician', 'stage manager', 'librarian', 'percentage', 'work'],
      model: `The bar chart compares five occupations in terms of the percentage of working time that is spent out of public view and the percentage of workers who said that they were publicly thanked for their work. The data are illustrative.

Overall, the occupations in which most of the work was hidden were the ones whose workers were least often thanked.

Night cleaners spent the largest proportion of their time out of public view, 95%, and they were the least likely to be thanked, at only 6%. Laboratory technicians were in a similar position, with 90% of their time out of view and public thanks reported by 9%. For sound engineers, the figures were 85% and 12%.

The two remaining occupations were more visible. Stage managers spent 70% of their time out of view, and 25% of them were thanked in public. Librarians were the most visible group, with 55% of their time out of view and 40% reporting public thanks.

The difference between the most hidden and the most visible occupation was 40 percentage points for time out of view and 34 points for public thanks.`,
      analysis: ['Task Achievement: пять профессий, две серии; обзор — чем «скрытнее» работа, тем реже благодарят.', 'Вычисления: 95 − 55 = 40; 40 − 6 = 34.', 'Cohesion: Overall / were in a similar position / The two remaining occupations.', 'Lexical Resource: out of public view, publicly thanked, the most visible, in a similar position.']
    },
    heads: {
      list: ['The history of hospitals', 'The inner life and privacy', 'The inside of things', 'Stage design', 'The closing phrase about knowledge', 'Protections that nobody notices'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: внутренность вещей — корень b-t-n.' }, { p: 'B', a: 'v', e: 'Абзац B: завершающая фраза о знании в 57:3.' }, { p: 'C', a: 'vi', e: 'Абзац C: защиты, которых никто не замечает.' }, { p: 'D', a: 'ii', e: 'Абзац D: внутренняя жизнь и приватность.' }]
    },
    ynng: [
      { q: 'The writer suggests that hidden protections are rarely thanked.', a: 'YES', e: 'Абзац C: такие защиты редко благодарят — их не замечают.' },
      { q: 'The writer believes that people should judge others quickly from outside appearances.', a: 'NO', e: 'Абзац D: внутренний мир не следует судить поспешно.' },
      { q: 'The writer says that most hidden protections are connected with health.', a: 'NOT GIVEN', e: 'Доля «скрытых защит» по областям не приводится.' }
    ],
    matching: { instruction: 'What do the students and the tutor say about each of the following? Choose the correct letter, A–D.', options: ['Night cleaners at the university hospital', 'Sound engineers in theatres', 'Permission must be asked at least two weeks in advance', 'At least four photographs'], items: [{ q: 'Ilyas\'s subject', a: 'A', e: 'Ильяс пишет о ночных уборщиках университетской больницы.' }, { q: 'Gaukhar\'s subject', a: 'B', e: 'Гаухар — о звукорежиссёрах театров.' }, { q: 'Spending a night shift with the cleaners', a: 'C', e: 'Разрешение нужно просить не менее чем за две недели.' }, { q: 'The final project', a: 'D', e: 'В работе — не менее четырёх фотографий, если люди согласятся.' }] },
    short: [{ q: 'How many words should the project be?', a: ['2000', '2,000', 'two thousand', '2000 words', 'two thousand words'], e: 'Две тысячи слов.' }, { q: 'What is the new deadline?', a: ['14 April', 'the fourteenth of April', '14th April', 'April 14', 'fourteenth of April', 'the 14th of April'], e: 'Срок перенесён на четырнадцатое апреля.' }]
  });

  /* 77 · Al-Wali */
  X(77, {
    task1: {
      prompt: 'The line graph below shows the percentage of residents of a district who attended local meetings and the percentage who were satisfied with local services over five years. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Residents of a district (%), illustrative data', unit: '% of residents', ymax: 100, x: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'], series: [{ name: 'Attend local meetings', y: [8, 11, 15, 19, 24] }, { name: 'Satisfied with local services', y: [41, 45, 52, 58, 64] }] },
      keywords: ['residents', 'district', 'meetings', 'satisfied', 'local services', 'percentage', 'years', 'increased', 'participation', 'rise'],
      model: `The line graph shows the percentage of residents of a district who attended local meetings and the percentage who were satisfied with local services over five years. The data are illustrative.

Overall, both percentages rose in every year, and satisfaction with local services remained much higher than attendance at meetings throughout the period.

The proportion of residents who attended local meetings grew from 8% in Year 1 to 24% in Year 5, which is three times the original figure. The increase became larger in the later years: it was 3 percentage points between Years 1 and 2, but 5 points between Years 4 and 5.

Satisfaction with local services started at a much higher level, 41%, and it rose to 64% by Year 5, an increase of 23 points. The most rapid rise was between Years 2 and 3, at 7 points, and this was followed by rises of 6 points in each of the last two years.

As a result, the gap between the two lines widened slightly, from 33 percentage points in Year 1 to 40 points in Year 5, because the satisfaction line rose by more points than the attendance line did. Even so, attendance at meetings, though still much lower, grew faster in proportion.`,
      analysis: ['Task Achievement: две линии, обе растут; разрыв сохраняется.', 'Вычисления: 8 → 24 (втрое), 41 → 64 (+23).', 'Cohesion: Overall / As a result.', 'Lexical Resource: attendance, satisfaction, narrowed, widened.']
    },
    heads: {
      list: ['A history of district names', 'Management at every level', 'Two close names compared', 'Roads and traffic', 'A verse about change', 'Responsibility for reform'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два близких имени — Аль-Вали и Аль-Валий.' }, { p: 'B', a: 'v', e: 'Абзац B: аят 13:11 об изменении.' }, { p: 'C', a: 'vi', e: 'Абзац C: ответственность за перемены.' }, { p: 'D', a: 'ii', e: 'Абзац D: управление на всех уровнях.' }]
    },
    ynng: [
      { q: 'The writer suggests that reform begins with attitudes, habits and choices.', a: 'YES', e: 'Абзац C: реформа начинается с установок, привычек и выбора.' },
      { q: 'The writer believes that reform can come from outside alone.', a: 'NO', e: 'Абзац C: реформа не может прийти только извне.' },
      { q: 'The writer says that turnout in local elections is low.', a: 'NOT GIVEN', e: 'Явка на местных выборах не обсуждается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['Roads and public spaces are maintained', 'Libraries and parks are run', 'Attending a meeting, voting or volunteering', 'Local governments can lack money or expertise'], items: [{ q: 'The first function of local government', a: 'A', e: 'Первое — содержание дорог и общественных пространств.' }, { q: 'Local services', a: 'B', e: 'Местные службы: библиотеки и парки.' }, { q: 'How citizens can take part', a: 'C', e: 'Участие: собрания, голосование, волонтёрство.' }, { q: 'A risk of local government', a: 'D', e: 'Риск — нехватка денег или опыта.' }] },
    short: [{ q: 'How many pages should the report be?', a: ['2', 'two', 'two pages', '2 pages'], e: 'Отчёт — две страницы.' }, { q: 'By which date must the report be submitted?', a: ['19', '19th', 'the nineteenth', 'Friday the nineteenth', 'Friday 19th', 'the 19th', 'Friday the 19th'], e: 'Срок — пятница, девятнадцатое.' }]
  });

  /* 78 · Al-Muta'ali */
  X(78, {
    task1: {
      prompt: 'The table below shows the number of observation platforms, the average number of visitors per year and the average ticket price for four height bands. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Observation platforms by height, illustrative data', head: ['Height band', 'Platforms', 'Average visitors per year (thousands)', 'Average ticket price (£)'], rows: [['Under 100 m', '14', '320', '7'], ['100–200 m', '9', '540', '12'], ['200–300 m', '5', '760', '18'], ['Over 300 m', '3', '1200', '28']] },
      keywords: ['observation platforms', 'height', 'visitors', 'ticket price', 'average', 'thousands', 'metres', 'highest', 'lowest', 'platforms'],
      model: `The table compares four height bands of observation platforms in terms of the number of platforms, the average number of visitors per year and the average ticket price. The data are illustrative.

Overall, the higher the platform, the fewer the platforms but the more visitors and the higher the ticket price.

Platforms under 100 metres were the most numerous, with 14 of them, but they attracted the smallest average number of visitors, 320 thousand a year, and they had the lowest ticket price, £7. There were 9 platforms between 100 and 200 metres. They received an average of 540 thousand visitors and charged £12.

Platforms of 200 to 300 metres numbered only 5, but each of them attracted an average of 760 thousand visitors a year, and the average ticket price was £18.

The highest platforms, over 300 metres, were also the rarest, with only 3 of them. They received the most visitors on average, 1200 thousand a year, which is almost four times the figure for the lowest platforms, and they charged the highest price, £28, which is four times the price for the lowest band.`,
      analysis: ['Task Achievement: четыре диапазона высоты, три показателя; обзор — чем выше, тем меньше платформ, но больше посетителей и цена.', 'Вычисления: 1200/320 = 3.75 ≈ почти вчетверо; 28/7 = 4.', 'Cohesion: Overall / but / were also the rarest.', 'Lexical Resource: height band, numbered, attracted, charged.']
    },
    heads: {
      list: ['A history of towers', 'High standards with humility', 'A reflexive form and height', 'Wind and engineering', 'A verse joining knowledge to greatness', 'Exaltedness without pride'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: возвратная форма и высота.' }, { p: 'B', a: 'v', e: 'Абзац B: аят, соединяющий знание с величием, 13:9.' }, { p: 'C', a: 'vi', e: 'Абзац C: возвышенность без гордыни.' }, { p: 'D', a: 'ii', e: 'Абзац D: высокие стандарты со смирением.' }]
    },
    ynng: [
      { q: 'The writer suggests that real elevation is calm.', a: 'YES', e: 'Абзац C: настоящее возвышение спокойно.' },
      { q: 'The writer says that exaltedness in this name is a sign of pride.', a: 'NO', e: 'Абзац C: это признак совершенства, а не гордыни.' },
      { q: 'The writer says that humble people are more successful than proud people.', a: 'NOT GIVEN', e: 'Связь смирения и успеха в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the guide say about each of the following? Choose the correct letter, A–D.', options: ['Ninety-seven metres', 'About three hundred and thirty metres', 'Eight hundred and twenty-eight metres', 'Forty seconds'], items: [{ q: 'The observation tower', a: 'A', e: 'Башня высотой девяносто семь метров.' }, { q: 'The Eiffel Tower, including its antenna', a: 'B', e: 'Эйфелева башня — около трёхсот тридцати метров.' }, { q: 'The tallest building in the world', a: 'C', e: 'Самое высокое здание — восемьсот двадцать восемь метров.' }, { q: 'The journey in the lift', a: 'D', e: 'Подъём в лифте занимает сорок секунд.' }] },
    short: [{ q: 'In which year did the capital move to this city?', a: ['1997', 'nineteen ninety-seven', 'nineteen ninety seven'], e: 'Столица переехала в 1997 году.' }, { q: 'Until what time is the viewing platform open?', a: ['9', 'nine', '9 pm', '9pm', 'nine in the evening', '9 in the evening', '21:00'], e: 'Площадка открыта до девяти вечера.' }]
  });

  /* 79 · Al-Barr */
  X(79, {
    task1: {
      prompt: 'The bar chart below shows the percentage of adults who do four things for their parents at least once a week and the percentage of parents who rate each of them as very important. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Care for parents: what adults do and what parents value (%), illustrative data', unit: '%', ymax: 100, cats: ['Phone call', 'Visit', 'Help with practical tasks', 'Gift'], series: [{ name: 'Adults who do it at least weekly', v: [74, 38, 29, 12] }, { name: 'Parents who rate it as very important', v: [66, 71, 64, 19] }] },
      keywords: ['adults', 'parents', 'phone call', 'visit', 'practical tasks', 'gift', 'weekly', 'important', 'percentage', 'gap'],
      model: `The bar chart compares the percentage of adults who do four things for their parents at least once a week with the percentage of parents who rate each of these things as very important. The data are illustrative.

Overall, adults most often make phone calls, but parents attach the highest importance to visits, and the gap between practice and importance was widest for visits and practical help.

Phone calls were by far the most frequent activity, with 74% of adults making them weekly, and 66% of parents considered them very important. This was the only category in which the percentage of adults doing something was higher than the percentage of parents rating it as very important.

By contrast, only 38% of adults visited their parents weekly, although 71% of parents thought that visits were very important, a gap of 33 percentage points. Practical help showed a similar picture: 29% of adults provided it weekly, while 64% of parents valued it highly, a gap of 35 points.

Gifts were the least common, at 12%, and the least valued, at 19%, with the smallest gap, only 7 points.`,
      analysis: ['Task Achievement: четыре действия, две серии; обзор — звонки чаще всего, но родители больше ценят визиты и помощь.', 'Вычисления: разрывы 33, 35 и 7 пунктов; звонки — единственный случай, где практика выше значимости (74 > 66).', 'Cohesion: Overall / By contrast / while / a similar picture.', 'Lexical Resource: attach importance, practical help, the gap between practice and importance.']
    },
    heads: {
      list: ['The history of the family', 'Everyday kindness', 'Kindness, land and a phrase about parents', 'Gifts and customs', 'Verses defining goodness', 'Goodness through behaviour and cost'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: доброта, «земля» и выражение о родителях.' }, { p: 'B', a: 'v', e: 'Абзац B: аяты 52:28, 3:92, 2:177, определяющие добро.' }, { p: 'C', a: 'vi', e: 'Абзац C: добро через поведение и цену.' }, { p: 'D', a: 'ii', e: 'Абзац D: доброта в повседневности.' }]
    },
    ynng: [
      { q: 'The writer suggests that real generosity involves a cost.', a: 'YES', e: 'Абзац C: настоящая щедрость связана с затратой.' },
      { q: 'The writer believes that goodness is only a feeling and not a pattern of action.', a: 'NO', e: 'Абзац C: добро — не только чувство, но и образ действий.' },
      { q: 'The writer says that children today visit their parents less than in the past.', a: 'NOT GIVEN', e: 'Динамика визитов в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What do the students and the tutor say about each of the following? Choose the correct letter, A–D.', options: ['A survey of eighty adults', 'Interviews with six families', 'Surah seventeen, verse twenty-three', 'It is on the ninth'], items: [{ q: 'The first method', a: 'A', e: 'Опрос восьмидесяти взрослых.' }, { q: 'The second method', a: 'B', e: 'Интервью с шестью семьями.' }, { q: 'The Qur\'anic reference about speaking to parents gently', a: 'C', e: 'Сура семнадцатая, аят двадцать третий.' }, { q: 'The presentations', a: 'D', e: 'Презентации — девятого.' }] },
    short: [{ q: 'How many adults will be surveyed?', a: ['80', 'eighty'], e: 'Будет опрошено восемьдесят взрослых.' }, { q: 'What is the deadline for the project?', a: ['2 May', 'the second of May', '2nd May', 'May 2', 'second of May', 'the 2nd of May'], e: 'Срок — второе мая.' }]
  });

  /* 80 · At-Tawwab */
  X(80, {
    task1: {
      prompt: 'The bar chart below shows the percentage of apologies that were accepted when each of five elements was included and when it was missing. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Apologies that were accepted (%), illustrative data', unit: '% accepted', ymax: 100, cats: ['Acknowledges what happened', 'Expresses regret', 'Accepts responsibility', 'Offers to make amends', 'Promises to change'], series: [{ name: 'Element included', v: [64, 70, 78, 85, 81] }, { name: 'Element missing', v: [40, 45, 32, 38, 41] }] },
      keywords: ['apologies', 'accepted', 'elements', 'responsibility', 'amends', 'regret', 'promise', 'included', 'missing', 'percentage'],
      model: `The bar chart shows the percentage of apologies that were accepted when each of five elements was included in the apology and when it was missing. The data are illustrative.

Overall, apologies that contained an element were accepted much more often than apologies without it, and this was true for all five elements.

The highest acceptance rate, 85%, was found for apologies that offered to make amends, followed by promising to change at 81% and accepting responsibility at 78%. Expressing regret produced an acceptance rate of 70%, and acknowledging what happened produced the lowest rate among the included elements, at 64%.

When the elements were missing, acceptance fell to between 32% and 45%. The lowest figure, 32%, was recorded for apologies without an acceptance of responsibility.

The biggest difference was found for the offer of amends, at 47 percentage points, closely followed by accepting responsibility, at 46 points. The smallest difference was for acknowledging what happened, at 24 points, which suggests that this element alone is not enough.`,
      analysis: ['Task Achievement: пять элементов, две серии; обзор — любой элемент повышает принятие извинения.', 'Вычисления: разрывы 24, 25, 46, 47 и 40 пунктов; максимум 85%, минимум 32%.', 'Cohesion: Overall / followed by / The biggest difference / closely followed by; осторожное «suggests».', 'Lexical Resource: acceptance rate, make amends, included, alone is not enough.']
    },
    heads: {
      list: ['The history of Adam in art', 'Hope and discipline', 'Return as the meaning of the root', 'Rules of public apology', 'Three verses about acceptance', 'Four conditions of repentance'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: возвращение как смысл корня.' }, { p: 'B', a: 'v', e: 'Абзац B: 2:37, 110:3, 66:8 о принятии покаяния.' }, { p: 'C', a: 'vi', e: 'Абзац C: четыре условия искреннего покаяния.' }, { p: 'D', a: 'ii', e: 'Абзац D: надежда и дисциплина.' }]
    },
    ynng: [
      { q: 'The writer suggests that the classical sequence of repentance turns a feeling of guilt into constructive change.', a: 'YES', e: 'Абзац C: последовательность превращает чувство вины в конструктивные перемены.' },
      { q: 'The writer says that a mistake can close the door permanently.', a: 'NO', e: 'Абзац D: ни одна ошибка не закрывает дверь навсегда.' },
      { q: 'The writer says that repentance must always be made in public.', a: 'NOT GIVEN', e: 'О публичности покаяния ничего не сказано.' }
    ],
    matching: { instruction: 'What does each of the four conditions of sincere repentance involve? Choose the correct letter, A–D.', options: ['Stopping the wrong action', 'Feeling real regret', 'Resolving firmly not to repeat it', 'Putting it right if another person was harmed'], items: [{ q: 'The first condition', a: 'A', e: 'Первое — прекратить дурной поступок.' }, { q: 'The second condition', a: 'B', e: 'Второе — искреннее сожаление.' }, { q: 'The third condition', a: 'C', e: 'Третье — твёрдо решить не повторять.' }, { q: 'The fourth condition', a: 'D', e: 'Четвёртое — исправить, если пострадал другой человек.' }] },
    short: [{ q: 'What must the students write for their homework?', a: ['a model apology letter', 'model apology letter', 'an apology letter', 'apology letter'], e: 'Образец письма-извинения.' }, { q: 'By what date is the homework due?', a: ['6 November', 'the sixth of November', '6th November', 'November 6', 'sixth of November', 'Wednesday the sixth of November', 'the 6th of November'], e: 'Домашнее задание — до шестого ноября.' }]
  });
})();

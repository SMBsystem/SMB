// Имена 1–10: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 1 · Ar-Rahman */
  X(1, {
    task1: {
      prompt: 'The bar chart below shows the percentage of students who reported four kinds of kind behaviour in a typical week, before and after a school kindness challenge. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Students reporting each act of kindness in a typical week (%), illustrative data', unit: '% of students', ymax: 100, cats: ['Helping a neighbour', 'Forgiving someone', 'Caring for animals', 'Helping a classmate'], series: [{ name: 'Before the challenge', v: [18, 25, 30, 42] }, { name: 'After the challenge', v: [46, 52, 48, 67] }] },
      keywords: ['kindness', 'students', 'challenge', 'neighbour', 'forgiving', 'animals', 'classmate', 'percentage', 'increase', 'before', 'after'],
      model: `The bar chart compares the percentage of students who reported four kinds of kind behaviour in a typical week, before and after a school kindness challenge. The figures are illustrative.

Overall, every behaviour became more common after the challenge, and the largest increases were recorded for the acts that were least frequent at the start.

Helping a neighbour showed the greatest rise, climbing from 18% to 46%, an increase of 28 percentage points. Forgiving someone also grew substantially, from 25% to 52%. Caring for animals started at 30% and reached 48%, which was the smallest change, at 18 points. Helping a classmate was already the most common behaviour before the challenge, at 42%, and it remained the most common afterwards, at 67%.

It is noticeable that before the challenge only helping a classmate exceeded 40%, whereas afterwards all four behaviours were reported by 46% of students or more. As a result, the gap between the most and the least common behaviour narrowed from 24 points to 21 points.`,
      analysis: ['Task Achievement: есть обзор (Overall), выбраны главные изменения, цифры точны.', 'Сравнение: наибольший рост у «Helping a neighbour» (+28), наименьший у «Caring for animals» (+18).', 'Cohesion: Overall / whereas / As a result; структура «обзор → детали → вывод».', 'Lexical Resource: climb, rise, substantially, narrowed, percentage points.']
    },
    heads: {
      list: ['A name placed at the start of scripture', 'The history of early Arabic grammar', 'Mercy for everyone and mercy for believers', 'Putting mercy into daily habits', 'The root and its image of protective care', 'Why the name is rare in everyday speech'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: корень r-h-m и образ утробы — защищающая забота.' }, { p: 'B', a: 'i', e: 'Абзац B: имя в начале первой суры и название суры 55.' }, { p: 'C', a: 'iii', e: 'Абзац C: различие Ar-Rahman и Ar-Rahim — милость для всех и для верующих.' }, { p: 'D', a: 'iv', e: 'Абзац D: практическое применение в повседневных поступках.' }]
    },
    ynng: [
      { q: 'The writer suggests that a simple habit can help a person to remember the meaning of the name.', a: 'YES', e: 'Абзац D: простая привычка — начинать дела с первых слов Корана и помнить их смысл.' },
      { q: 'The writer believes that mercy should be shown only to other people.', a: 'NO', e: 'Абзац D: упомянуто бережное отношение к животным.' },
      { q: 'The writer states that Surah 55 is the most important chapter of the Qur\'an.', a: 'NOT GIVEN', e: 'Важность суры 55 по сравнению с другими не обсуждается.' }
    ],
    matching: { instruction: 'What does Amina plan to include in each part of her presentation? Choose the correct letter, A–D.', options: ['The word for the womb', 'A chapter named after the name', 'Acts of mercy classmates could do', 'A comparison with Ar-Rahim'], items: [{ q: 'First slide', a: 'A', e: 'Первый слайд — корень r-h-m и слово «утроба».' }, { q: 'Second slide', a: 'B', e: 'Второй слайд — сура 55, названная этим именем.' }, { q: 'Practical part', a: 'C', e: 'Практическая часть — три акта милости на неделю.' }] },
    short: [{ q: 'On which day was the presentation moved to?', a: ['Friday'], e: 'Презентацию перенесли на пятницу.' }, { q: 'How many minutes does the presentation last?', a: ['7', 'seven'], e: 'Время — семь минут.' }]
  });

  /* 2 · Ar-Rahim */
  X(2, {
    task1: {
      prompt: 'The table below shows how many mercies in four categories were recorded in the gratitude diaries of a group of students over four weeks. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Mercies recorded in gratitude diaries, by week (number of entries), illustrative data', head: ['Type of mercy', 'Week 1', 'Week 2', 'Week 3', 'Week 4'], rows: [['Timely help', '14', '18', '21', '26'], ['A lesson from a mistake', '9', '12', '15', '17'], ['A second chance', '6', '8', '11', '14'], ['Passing a mercy on', '2', '5', '9', '16']] },
      keywords: ['mercies', 'diaries', 'students', 'weeks', 'timely help', 'lesson', 'second chance', 'passing', 'increase', 'entries'],
      model: `The table shows how many mercies, in four categories, were recorded in the gratitude diaries of a group of students over four weeks. The data are illustrative.

Overall, all four categories rose steadily from week to week, and the most dramatic growth occurred in the category of passing a mercy on.

Timely help was the most frequently noted type throughout the period, increasing from 14 entries in Week 1 to 26 in Week 4. A lesson from a mistake rose from 9 to 17, while a second chance grew from 6 to 14. The most striking change concerns passing a mercy on, which began as the rarest category with only 2 entries but increased eightfold to 16 by the final week, when it surpassed a second chance.

Taken together, the total number of entries more than doubled, from 31 in the first week to 73 in the fourth. The ranking of the first two categories never changed, whereas the lower two categories were closer to each other by the end of the month.`,
      analysis: ['Task Achievement: обзор в начале, сравнение категорий, суммарный рост (31 → 73).', 'Выбор данных: не перечислены все ячейки, акцент на самом заметном изменении (в 8 раз).', 'Cohesion: Overall / while / whereas / Taken together.', 'Lexical Resource: steadily, eightfold, surpassed, ranking.']
    },
    heads: {
      list: ['Mercy and the believers', 'The spread of the name across other languages', 'Two names, one root, two patterns', 'Why mercy is difficult to measure', 'Noticing mercy and passing it on', 'Where the pair appears in scripture'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: общий корень, разные модели слова.' }, { p: 'B', a: 'vi', e: 'Абзац B: 1:1, 1:3 и 2:163 — где два имени стоят рядом.' }, { p: 'C', a: 'i', e: 'Абзац C: связь Ar-Rahim с верующими, 33:43.' }, { p: 'D', a: 'v', e: 'Абзац D: замечать милости и передавать их другим.' }]
    },
    ynng: [
      { q: 'The writer implies that belief in one God is closely tied to hope in mercy.', a: 'YES', e: 'Абзац B: «The pairing suggests that belief in one God is closely tied to hope in His mercy».' },
      { q: 'The writer claims that scholars agree completely on the distinction between the two names.', a: 'NO', e: 'Абзац C: учёные расходятся в точном различии.' },
      { q: 'The writer recommends that the evening note should be shown to a teacher for marking.', a: 'NOT GIVEN', e: 'Проверка записи учителем в тексте не упоминается.' }
    ],
    matching: { instruction: 'What does the librarian say about each of the following? Choose the correct letter, A–D.', options: ['It can be borrowed for three weeks', 'It must stay in the reading room', 'It is free for students', 'It is located on the first floor'], items: [{ q: 'The books on the names of Allah', a: 'A', e: 'Книги выдаются на три недели.' }, { q: 'The translation of the Qur\'an', a: 'B', e: 'Перевод Корана нельзя выносить из читального зала.' }, { q: 'Membership', a: 'C', e: 'Для студентов членство бесплатное.' }] },
    short: [{ q: 'On which floor is the Religion section?', a: ['second', '2', '2nd', 'second floor', 'the second floor'], e: 'Раздел религии — на втором этаже.' }, { q: 'At what time does the library close on weekdays?', a: ['6', 'six', '6 pm', '6pm', '18:00'], e: 'В будни закрывается в шесть.' }]
  });

  /* 3 · Al-Malik */
  X(3, {
    task1: {
      prompt: 'The line graph below shows the percentage of residents who trusted their local officials over five years, in three towns with different reporting practices. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Residents who trust local officials (%), illustrative data', unit: '% of residents', ymax: 100, x: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'], series: [{ name: 'Publishes all decisions', y: [48, 52, 59, 64, 70] }, { name: 'Partial reporting', y: [47, 48, 50, 51, 52] }, { name: 'No reporting', y: [46, 43, 40, 37, 33] }] },
      keywords: ['trust', 'officials', 'residents', 'decisions', 'reporting', 'towns', 'percentage', 'rose', 'fell', 'years'],
      model: `The line graph compares the percentage of residents who trusted their local officials over a five-year period in three towns that followed different reporting practices. The data are illustrative.

Overall, trust rose in the town that published all its decisions, increased slightly where reporting was partial, and fell where nothing was reported.

In the first year, the three towns were very similar, with trust between 46% and 48%. After that, they diverged. In the town that published all decisions, trust grew every year and reached 70% by Year 5, an increase of 22 percentage points. The town with partial reporting showed only a modest improvement, from 47% to 52%.

By contrast, the town that did not report its decisions experienced a steady decline from 46% to 33%, the lowest figure on the graph.

As a result, the gap between the most and the least open town widened from just 2 percentage points in Year 1 to 37 points in Year 5. In other words, the towns that were open about their decisions gained the confidence of their residents, while the silent town steadily lost it.`,
      analysis: ['Task Achievement: чёткий обзор тренда для каждой линии, ключевые цифры.', 'Сравнение: старт почти равный (46–48%), затем расхождение; итоговый разрыв 37 пунктов.', 'Cohesion: After that / By contrast / As a result.', 'Lexical Resource: diverged, modest, steady decline, widened.']
    },
    heads: {
      list: ['The decline of ancient monarchies', 'Ownership and the authority to command', 'The name in scripture', 'Advice on writing formal letters', 'Absolute authority compared with human rule', 'Reducing both fear and arrogance'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: человеческие цари ограничены, Al-Malik — абсолютная власть.' }, { p: 'B', a: 'iii', e: 'Абзац B: 20:114 и сура 114.' }, { p: 'C', a: 'ii', e: 'Абзац C: два аспекта — владение и право приказывать.' }, { p: 'D', a: 'vi', e: 'Абзац D: меньше страха перед сильными и меньше высокомерия.' }]
    },
    ynng: [
      { q: 'The writer suggests that people in authority should think of their position as a trust.', a: 'YES', e: 'Абзац C: человеческая должность — «a trust and not a possession».' },
      { q: 'The writer believes that human kings rule without any time limit.', a: 'NO', e: 'Абзац A: человеческие цари правят ограниченное время.' },
      { q: 'The writer says that Surah 114 is recited in every prayer.', a: 'NOT GIVEN', e: 'О чтении суры 114 в молитве не сказано.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['It lasts only for a limited time', 'It means that everything belongs to God', 'It means that no one can overrule', 'It has only six verses'], items: [{ q: 'Human rule', a: 'A', e: 'Человеческая власть длится ограниченное время.' }, { q: 'Ownership', a: 'B', e: 'Владение: всё принадлежит Ему.' }, { q: 'Command', a: 'C', e: 'Приказ: Он решает, и никто не может отменить.' }, { q: 'Surah 114', a: 'D', e: 'В суре 114 шесть аятов.' }] },
    short: [{ q: 'How many verses does Surah 114 have?', a: ['6', 'six'], e: 'Шесть аятов.' }, { q: 'Which chapter of the textbook should the students read?', a: ['4', 'four', 'chapter four', 'chapter 4'], e: 'Четвёртая глава.' }]
  });

  /* 4 · Al-Quddus */
  X(4, {
    task1: {
      prompt: 'The diagram below shows the steps of a "clean start" routine that some students follow before an important task. The routine is illustrative. ' + T1,
      chart: { type: 'process', caption: 'A "clean start" routine before an important task', steps: ['The student stops work for one minute.', 'He asks himself whether his intention is sincere.', 'He clears the desk of unnecessary items.', 'He puts his phone away.', 'He begins with a short phrase of glorification.', 'He works for 25 minutes without interruption.', 'He tidies the desk again.', 'He reviews whether the work was done honestly.'] },
      keywords: ['routine', 'student', 'intention', 'desk', 'phone', 'task', 'minutes', 'honestly', 'begins', 'finally'],
      model: `The diagram illustrates a routine of eight steps that a student can follow before and after an important task. It is an illustrative example.

Overall, the process has three clear stages: preparation, work and review, and it begins and ends with a moment of reflection.

First, the student stops work for one minute. Then he asks himself whether his intention is sincere. After that, he prepares the workplace by clearing the desk of unnecessary items, and he puts his phone away. The preparation stage is completed when he begins the task with a short phrase of glorification.

The central stage is the work itself. The student works for 25 minutes without interruption, which is the only step with a fixed duration.

Finally, the routine moves to the review stage. He tidies the desk again, and the last step is to review whether the work was done honestly. In this way, the routine starts and finishes with a question about sincerity, and the physical tidying of the desk comes before and after the main activity.`,
      analysis: ['Task Achievement: три стадии (подготовка, работа, проверка) выделены в обзоре.', 'Process language: first / then / after that / finally; пассив и последовательность.', 'Выбор деталей: единственный шаг с длительностью (25 минут) отмечен отдельно.', 'Cohesion: In this way / which; структура «обзор → этапы → вывод».']
    },
    heads: {
      list: ['The origin of calligraphy styles', 'Meaning built into the form of the word', 'Small habits of purity', 'A dispute about the Friday sermon', 'References in the Qur\'an', 'Declaring God above every imperfection'],
      items: [{ p: 'A', a: 'ii', e: 'Абзац A: форма слова усиливает значение.' }, { p: 'B', a: 'v', e: 'Абзац B: 59:23 и 62:1.' }, { p: 'C', a: 'vi', e: 'Абзац C: танзих — признание Бога выше любого несовершенства.' }, { p: 'D', a: 'iii', e: 'Абзац D: чистые намерения, речь, порядок.' }]
    },
    ynng: [
      { q: 'The writer links a phrase used in daily speech with the idea of declaring God above imperfection.', a: 'YES', e: 'Абзац C: «Subhan Allah» выражает ту же идею в повседневной речи.' },
      { q: 'The writer suggests that keeping a tidy workspace is unimportant.', a: 'NO', e: 'Абзац D: порядок на рабочем месте — «small act of care».' },
      { q: 'The writer states that the phrase Subhan Allah should be repeated thirty-three times.', a: 'NOT GIVEN', e: 'Число повторений в тексте не упоминается.' }
    ],
    matching: { instruction: 'What will each participant receive or do? Match each item with its description, A–D.', options: ['It is cream-coloured and A4', 'It is made of reed', 'It is black', 'It will be displayed in the hall'], items: [{ q: 'The paper', a: 'A', e: 'Бумага кремового цвета, формат A4.' }, { q: 'The pen', a: 'B', e: 'Ручка из тростника (reed pen).' }, { q: 'The ink', a: 'C', e: 'Чернила чёрные.' }] },
    short: [{ q: 'At what time is the break?', a: ['11.15', '11:15', 'quarter past eleven', 'a quarter past eleven'], e: 'Перерыв в 11:15.' }, { q: 'On which day will the finished pages be displayed?', a: ['Saturday'], e: 'Работы выставят в субботу.' }]
  });

  /* 5 · As-Salam */
  X(5, {
    task1: {
      prompt: 'The line graph below shows the number of neighbour disputes reported and the number settled by mediation in one district during the year. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Neighbour disputes in one district (cases per period), illustrative data', unit: 'cases', ymax: 50, x: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'], series: [{ name: 'Disputes reported', y: [42, 44, 41, 35, 27, 21] }, { name: 'Settled by mediation', y: [8, 10, 14, 19, 20, 19] }] },
      keywords: ['disputes', 'reported', 'mediation', 'settled', 'district', 'cases', 'fell', 'rose', 'neighbour', 'year'],
      model: `The line graph shows how many neighbour disputes were reported in one district and how many of them were settled by mediation during the year. The data are illustrative.

Overall, the number of reported disputes fell steadily in the second half of the year, whereas the number settled by mediation rose and then levelled off.

Reported disputes began at 42 in January and peaked at 44 in March. After a slight dip to 41 in May, they declined sharply, reaching 21 in November, which was half of the January figure.

By contrast, settlements by mediation started at only 8 in January and climbed every period until July, when they reached 19. They continued to rise to 20 in September, and then dipped marginally to 19 in November.

The most striking feature is that the two lines moved closer together. In January, the number of settlements was less than a fifth of the number of reported disputes, but by November it had become about 90% of it.`,
      analysis: ['Task Achievement: разнонаправленные тренды описаны и сравнены.', 'Данные: пик (44 в марте), падение вдвое, выход на плато.', 'Cohesion: whereas / By contrast / The most striking feature.', 'Lexical Resource: peaked, dip, levelled off, marginally.']
    },
    heads: {
      list: ['A comparison between two Arabic dialects', 'The greeting as a promise', 'What the root means', 'Making the first move', 'A prayer after worship', 'Rules for pronouncing Arabic letters'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: значения корня s-l-m.' }, { p: 'B', a: 'v', e: 'Абзац B: 59:23 и молитва после обязательных молитв.' }, { p: 'C', a: 'ii', e: 'Абзац C: приветствие как обещание безопасности.' }, { p: 'D', a: 'iv', e: 'Абзац D: приветствовать искренне и первым идти на примирение.' }]
    },
    ynng: [
      { q: 'The writer sees the Muslim greeting as more than a polite formula.', a: 'YES', e: 'Абзац C: приветствие — «a small contract of trust».' },
      { q: 'The writer believes that apologising first is a sign of weakness.', a: 'NO', e: 'Абзац D: извиниться первым рекомендовано.' },
      { q: 'The writer states that the prayer reported in Sahih Muslim is said only on Fridays.', a: 'NOT GIVEN', e: 'Ограничение пятницей не упоминается; сказано «after the obligatory prayers».' }
    ],
    matching: { instruction: 'What will Bakhyt do or receive? Choose the correct letter, A–D.', options: ['A notebook', 'Lunch', 'A certificate', 'A phone'], items: [{ q: 'What must he bring to the training?', a: 'A', e: 'Нужно принести только блокнот.' }, { q: 'What is provided during the training?', a: 'B', e: 'Обед предоставляется.' }, { q: 'What does he receive at the end?', a: 'C', e: 'В конце выдают сертификат.' }] },
    short: [{ q: 'On which street is the Community Hall?', a: ['Green Street', 'Green'], e: 'Улица Green Street.' }, { q: 'How many days does the training last?', a: ['2', 'two'], e: 'Обучение длится два дня.' }]
  });

  /* 6 · Al-Mu'min */
  X(6, {
    task1: {
      prompt: 'The bar chart below shows the percentage of employees who reported high trust in their manager and the percentage who planned to stay in their job, according to how reliably the manager kept promises. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Employees by manager reliability (%), illustrative data', unit: '% of employees', ymax: 100, cats: ['Keeps small promises', 'Keeps big promises only', 'Often breaks promises'], series: [{ name: 'Report high trust', v: [78, 52, 14] }, { name: 'Plan to stay in the job', v: [71, 49, 22] }] },
      keywords: ['employees', 'trust', 'manager', 'promises', 'stay', 'job', 'percentage', 'keeps', 'breaks', 'highest'],
      model: `The bar chart compares the percentage of employees who reported high trust in their manager with the percentage who planned to stay in their job, according to how reliably the manager kept promises. The data are illustrative.

Overall, the more reliably a manager kept promises, the higher both trust and the intention to stay.

Employees whose managers kept even small promises recorded the highest figures: 78% reported high trust and 71% planned to stay. Where managers kept only big promises, the figures were noticeably lower, at 52% and 49% respectively.

The lowest figures were found among employees whose managers often broke promises. Only 14% of them reported high trust, and 22% planned to stay. This was the only group in which the intention to stay (22%) was higher than the level of trust (14%).

In the other two groups, trust was slightly higher than the intention to stay, by 7 and 3 points. The difference in trust between the first and the last group was therefore 64 percentage points, which is the largest gap on the chart.`,
      analysis: ['Task Achievement: связь «надёжность → доверие и намерение остаться» в обзоре.', 'Выбор данных: единственная группа, где «остаться» выше доверия (22 > 14), отмечена отдельно.', 'Cohesion: Overall / respectively / In the other two groups.', 'Lexical Resource: noticeably lower, respectively, intention to stay.']
    },
    heads: {
      list: ['The history of early translations in Europe', 'Becoming a source of security', 'Words that share a root', 'Why rumours spread faster online', 'Two readings of the name', 'A name that translators render in different ways'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: iman и amana — слова с тем же корнем.' }, { p: 'B', a: 'vi', e: 'Абзац B: имя переводят по-разному.' }, { p: 'C', a: 'v', e: 'Абзац C: два прочтения имени.' }, { p: 'D', a: 'ii', e: 'Абзац D: быть источником безопасности для других.' }]
    },
    ynng: [
      { q: 'The writer implies that the variety of translations shows how many layers the root carries.', a: 'YES', e: 'Абзац B: «The difference shows how many layers the root carries».' },
      { q: 'The writer believes it is acceptable to pass on news without checking whether it is true.', a: 'NO', e: 'Абзац D: сначала спросить, правда ли это.' },
      { q: 'The writer claims that "the Giver of Security" is the best English translation.', a: 'NOT GIVEN', e: 'Лучший перевод в тексте не назван.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['Faith', 'Something entrusted to you', 'The One who grants security', 'A secret that should be shared'], items: [{ q: 'iman', a: 'A', e: 'Iman — вера.' }, { q: 'amana', a: 'B', e: 'Amana — то, что доверено.' }, { q: 'Al-Mu\'min', a: 'C', e: 'Al-Mu\'min — Тот, кто дарует безопасность.' }] },
    short: [{ q: 'How many entries should the log have at least?', a: ['10', 'ten'], e: 'Не менее десяти записей.' }, { q: 'On which day is the assignment due?', a: ['Wednesday'], e: 'Срок — в среду.' }]
  });

  /* 7 · Al-Muhaymin */
  X(7, {
    task1: {
      prompt: 'The bar chart below shows the number of rule-breaking incidents per 100 students in three kinds of examination behaviour, under three monitoring arrangements. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Incidents per 100 students by monitoring arrangement, illustrative data', unit: 'incidents per 100 students', ymax: 20, cats: ['Phones in the hall', 'Copying from notes', 'Talking during the exam'], series: [{ name: 'No monitoring', v: [9, 12, 15] }, { name: 'Invigilators only', v: [5, 6, 8] }, { name: 'Invigilators and cameras', v: [2, 2, 3] }] },
      keywords: ['incidents', 'monitoring', 'invigilators', 'cameras', 'phones', 'copying', 'talking', 'students', 'lowest', 'highest'],
      model: `The bar chart compares the number of rule-breaking incidents per 100 students in three types of examination behaviour under three monitoring arrangements. The data are illustrative.

Overall, the more monitoring there was, the fewer incidents occurred, and this pattern was the same for all three types of behaviour.

Without any monitoring, the incidents were the most frequent. Talking during the exam was the most common, at 15 per 100 students, followed by copying from notes at 12 and phones in the hall at 9.

When invigilators were present, the figures dropped by roughly half, to 8, 6 and 5 respectively. The introduction of cameras in addition to invigilators produced the lowest numbers, with just 3 cases of talking and only 2 each for copying and phones.

It is noticeable that the greatest reduction in absolute terms was in talking, which fell by 12 incidents, from 15 to 3. By contrast, phones had the smallest absolute fall, of 7 incidents. Even so, with both invigilators and cameras in place, none of the three behaviours exceeded 3 incidents per 100 students, which was the lowest level shown anywhere on the chart.`,
      analysis: ['Task Achievement: общая закономерность «больше контроля — меньше нарушений».', 'Данные: сопоставлены три режима и три типа нарушений; абсолютное снижение (−12 против −7).', 'Cohesion: Overall / followed by / respectively / By contrast.', 'Lexical Resource: monitoring arrangement, absolute terms, dropped by roughly half.']
    },
    heads: {
      list: ['Disputes about exam fees', 'Integrity in private', 'The same root in another context', 'A name that follows another', 'The founding of the first school', 'A rare word and its verb'],
      items: [{ p: 'A', a: 'vi', e: 'Абзац A: редкое слово и глагол haymana.' }, { p: 'B', a: 'iv', e: 'Абзац B: имя стоит сразу после Al-Mu\'min.' }, { p: 'C', a: 'iii', e: 'Абзац C: тот же корень в 5:48 — о Коране.' }, { p: 'D', a: 'ii', e: 'Абзац D: честность наедине.' }]
    },
    ynng: [
      { q: 'The writer implies that integrity means behaving consistently whether or not anyone is watching.', a: 'YES', e: 'Абзац D: одинаково наедине и на людях.' },
      { q: 'The writer states that Al-Muhaymin appears as a divine name in many different verses.', a: 'NO', e: 'Абзац B: как имя встречается один раз, в 59:23.' },
      { q: 'The writer claims that students who behave honestly achieve higher marks.', a: 'NOT GIVEN', e: 'Связь честности с оценками не обсуждается.' }
    ],
    matching: { instruction: 'Where must the students place each item? Choose the correct letter, A–D.', options: ['At the front of the room', 'On the desk', 'In the top right-hand corner of the desk', 'In a bag under the chair'], items: [{ q: 'Phones and smart watches', a: 'A', e: 'Телефоны и часы оставляют перед входом, в передней части зала.' }, { q: 'A transparent water bottle', a: 'B', e: 'Прозрачную бутылку можно держать на парте.' }, { q: 'The student card', a: 'C', e: 'Студенческий билет — в правом верхнем углу парты.' }] },
    short: [{ q: 'How long is the exam?', a: ['90 minutes', 'ninety minutes', '90', 'ninety'], e: 'Экзамен длится девяносто минут.' }, { q: 'In which hall will the exam take place?', a: ['Hall B', 'B'], e: 'Экзамен пройдёт в зале B.' }]
  });

  /* 8 · Al-Aziz */
  X(8, {
    task1: {
      prompt: 'The bar chart below shows what happened to employees who politely refused an improper request, depending on whether the workplace had an open or a closed culture. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Outcomes after politely refusing an improper request (%), illustrative data', unit: '% of employees', ymax: 100, cats: ['Respected afterwards', 'No change', 'Treated worse'], series: [{ name: 'Open culture', v: [68, 27, 5] }, { name: 'Closed culture', v: [22, 41, 37] }] },
      keywords: ['employees', 'refused', 'request', 'open', 'closed', 'culture', 'respected', 'treated', 'percentage', 'outcome'],
      model: `The bar chart compares three outcomes for employees who politely refused an improper request, in workplaces with an open culture and in workplaces with a closed culture. The data are illustrative.

Overall, refusing was far safer in an open culture, where most employees were respected afterwards, while in a closed culture the results were much more negative.

In the open culture, 68% of employees were respected afterwards, 27% experienced no change, and only 5% were treated worse. By contrast, in the closed culture only 22% gained respect, whereas 41% noticed no change and 37% were treated worse.

The biggest contrast concerns the first and the last outcome. The proportion who were respected was more than three times higher in the open culture than in the closed one, while the proportion who were treated worse was more than seven times lower.

It is also worth noting that "no change" was the most common outcome in the closed culture, at 41%, but it was the second most common in the open culture, at 27%.`,
      analysis: ['Task Achievement: два типа культуры и три исхода сопоставлены; обзор в начале.', 'Вычисления: «more than three times» (68 против 22), «more than seven times lower» (5 против 37).', 'Cohesion: Overall / By contrast / whereas / It is also worth noting.', 'Lexical Resource: improper request, respected, closed culture, the biggest contrast.']
    },
    heads: {
      list: ['The origins of Arabic poetry', 'Practising dignity under pressure', 'Three layers of meaning in the root', 'Rules of etiquette at royal courts', 'A name that stands beside wisdom', 'Might and humility compared with human power'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: три связанных значения корня.' }, { p: 'B', a: 'v', e: 'Абзац B: Al-Aziz рядом с Al-Hakim.' }, { p: 'C', a: 'vi', e: 'Абзац C: сравнение человеческой и Божественной силы.' }, { p: 'D', a: 'ii', e: 'Абзац D: достоинство под давлением.' }]
    },
    ynng: [
      { q: 'The writer suggests that power joined with wisdom is not arbitrary.', a: 'YES', e: 'Абзац B: «power joined with wisdom is never arbitrary».' },
      { q: 'The writer encourages people to flatter the powerful in order to avoid trouble.', a: 'NO', e: 'Абзац D: «avoid flattering the powerful».' },
      { q: 'The writer states that refusing a bribe always leads to promotion.', a: 'NOT GIVEN', e: 'Последствия отказа от взятки в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What is each speaker\'s point? Choose the correct letter, A–D.', options: ['Dignity comes from refusing to be humiliated', 'Dignity includes respect for other people', 'Might should be joined with wisdom', 'Dignity requires wealth'], items: [{ q: 'Ruslan\'s main argument', a: 'A', e: 'Руслан: достоинство — отказ быть униженным.' }, { q: 'Zhanna\'s view', a: 'B', e: 'Жанна: достоинство включает уважение к другим.' }, { q: 'The section Ruslan will add', a: 'C', e: 'Руслан добавит раздел о силе и мудрости.' }] },
    short: [{ q: 'How many words should the essay be?', a: ['1500', '1,500', 'fifteen hundred', '1500 words'], e: 'Полторы тысячи слов.' }, { q: 'How should the essay be submitted?', a: ['online portal', 'the online portal', 'through the portal', 'through the online portal', 'portal'], e: 'Через онлайн-портал, не по почте.' }]
  });

  /* 9 · Al-Jabbar */
  X(9, {
    task1: {
      prompt: 'The line graph below shows the average shoulder mobility score of patients over eight weeks, according to how often they did their exercises. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average shoulder mobility score (% of normal), illustrative data', unit: '% of normal mobility', ymax: 100, x: ['Week 0', 'Week 2', 'Week 4', 'Week 6', 'Week 8'], series: [{ name: 'Exercises daily', y: [40, 55, 68, 80, 90] }, { name: 'Three times a week', y: [40, 50, 60, 69, 76] }, { name: 'Rarely', y: [40, 44, 47, 50, 52] }] },
      keywords: ['mobility', 'patients', 'exercises', 'weeks', 'daily', 'rarely', 'improved', 'score', 'recovery', 'highest'],
      model: `The line graph shows the average shoulder mobility score of three groups of patients over eight weeks, depending on how often they did their exercises. The data are illustrative.

Overall, all three groups improved, but the more regularly the patients exercised, the greater their recovery.

All groups began at the same level, 40% of normal mobility. The patients who exercised daily improved fastest and most consistently, reaching 55% after two weeks and 90% by Week 8, an overall gain of 50 percentage points.

The group that exercised three times a week also recovered well, though more slowly, and ended at 76%. By contrast, the patients who rarely exercised made only limited progress, rising from 40% to just 52%.

The gap between the groups widened steadily. After two weeks, the difference between the daily group and the rare group was only 11 points, whereas by Week 8 it had grown to 38 points. This suggests that regularity was the key factor in recovery, although the figures alone cannot show the reasons for the differences.`,
      analysis: ['Task Achievement: одинаковая стартовая точка, три траектории, расходящийся разрыв.', 'Данные: +50 пунктов; разрыв 11 → 38.', 'Cohesion: Overall / By contrast / whereas.', 'Lexical Resource: consistently, limited progress, widened; осторожный вывод («suggests»).']
    },
    heads: {
      list: ['How bones are treated in modern hospitals', 'Helping others to recover', 'The root and the setting of a broken bone', 'The history of the Arabic alphabet', 'Three meanings given by scholars', 'A word with a negative sense for people'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: исправление, принуждение, высота.' }, { p: 'B', a: 'vi', e: 'Абзац B: у людей слово чаще отрицательное (11:59).' }, { p: 'C', a: 'v', e: 'Абзац C: три значения у учёных.' }, { p: 'D', a: 'ii', e: 'Абзац D: помогать оправляться от горя и неудач.' }]
    },
    ynng: [
      { q: 'The writer suggests that the name need not be understood only as severity.', a: 'YES', e: 'Абзац C: первое значение — самое мягкое, имя не обязательно понимать только как строгость.' },
      { q: 'The writer states that human rulers can bear the name without fault.', a: 'NO', e: 'Абзац B: без недостатка имя может носить только Тот, чья власть совершенна и справедлива.' },
      { q: 'The writer says that visiting a sick relative must be done every week.', a: 'NOT GIVEN', e: 'Периодичность визитов в тексте не названа.' }
    ],
    matching: { instruction: 'What does the receptionist say about each of the following? Choose the correct letter, A–D.', options: ['It lasts forty-five minutes', 'It is in Room fourteen', 'It usually includes six sessions', 'It takes about eight weeks'], items: [{ q: 'The first assessment', a: 'A', e: 'Первая оценка длится сорок пять минут.' }, { q: 'The location of the assessment', a: 'B', e: 'Приём — в комнате четырнадцать.' }, { q: 'The usual physiotherapy plan', a: 'C', e: 'План обычно включает шесть сеансов.' }] },
    short: [{ q: 'What does Timur need to wear?', a: ['a loose T-shirt', 'loose T-shirt', 'T-shirt', 'a T-shirt'], e: 'Нужна свободная футболка.' }, { q: 'How much does the assessment cost?', a: ['60', 'sixty', 'sixty pounds', '60 pounds'], e: 'Оценка стоит шестьдесят фунтов.' }]
  });

  /* 10 · Al-Mutakabbir */
  X(10, {
    task1: {
      prompt: 'The bar chart below compares teams that admit mistakes openly with teams that hide them, in three areas of team performance. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Team performance by attitude to mistakes (%), illustrative data', unit: '% of teams', ymax: 100, cats: ['Errors reported within a day', 'Problems detected early', 'Mistakes repeated'], series: [{ name: 'Teams that admit mistakes', v: [74, 69, 18] }, { name: 'Teams that hide mistakes', v: [31, 34, 57] }] },
      keywords: ['teams', 'mistakes', 'admit', 'hide', 'errors', 'reported', 'problems', 'detected', 'repeated', 'percentage'],
      model: `The bar chart compares teams that admit their mistakes openly with teams that hide them, in three areas of performance. The data are illustrative.

Overall, teams that admitted mistakes performed better in all three areas: they reported errors more quickly, detected problems earlier and repeated fewer mistakes.

The first two categories show similar patterns. Of the teams that admitted mistakes, 74% reported errors within a day and 69% detected problems early. Among the teams that hid mistakes, the figures were much lower, at 31% and 34% respectively, which is less than half of the first group in each case.

The third category, mistakes that were repeated, shows the opposite direction, which is expected because a lower figure is better. Only 18% of the teams that admitted mistakes repeated them, compared with 57% of the teams that hid them.

In summary, the largest difference was in the reporting of errors within a day, at 43 percentage points, while the smallest, at 35 points, concerned the early detection of problems.`,
      analysis: ['Task Achievement: три показателя, обзор с учётом того, что в третьей категории «меньше — лучше».', 'Вычисления: разрыв 43, 39 и 35 пунктов; «less than half».', 'Cohesion: Overall / respectively / compared with / In summary.', 'Lexical Resource: detected, repeated, admit openly, in each case.']
    },
    heads: {
      list: ['The decline of ancient trade routes', 'Training in humility', 'A word with two opposite meanings', 'Why humans cannot claim greatness', 'Fashion and clothing in history', 'A saying that defines pride'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: слово — порок у людей, величие у Бога.' }, { p: 'B', a: 'vi', e: 'Абзац B: хадис, определяющий гордыню.' }, { p: 'C', a: 'iv', e: 'Абзац C: люди зависят от пищи, воздуха и помощи.' }, { p: 'D', a: 'ii', e: 'Абзац D: упражнения в смирении.' }]
    },
    ynng: [
      { q: 'The writer implies that liking good clothes is not necessarily pride.', a: 'YES', e: 'Абзац B: гордыня — отвержение истины и презрение к людям, а не одежда.' },
      { q: 'The writer believes that any claim to superiority by human beings is justified.', a: 'NO', e: 'Абзац C: любое притязание людей на превосходство — ложное.' },
      { q: 'The writer claims that arrogance is more common in large companies than in small ones.', a: 'NOT GIVEN', e: 'Сравнение компаний по этому признаку не приводится.' }
    ],
    matching: { instruction: 'What does each of the lecturer\'s rules advise? Choose the correct letter, A–D.', options: ['Say thank you before anything else', 'Admit one mistake each week', 'Do an ordinary task you might feel is beneath you', 'Avoid all criticism'], items: [{ q: 'Rule one', a: 'A', e: 'Правило первое: сначала поблагодарить за критику.' }, { q: 'Rule two', a: 'B', e: 'Правило второе: раз в неделю признать ошибку.' }, { q: 'Rule three', a: 'C', e: 'Правило третье: выполнить простую работу.' }] },
    short: [{ q: 'On which page is the form for the next session?', a: ['12', 'twelve', 'page twelve', 'page 12'], e: 'Форма — на странице двенадцать.' }, { q: 'How often should you admit a mistake to a colleague or friend?', a: ['once a week', 'once per week', 'weekly', 'every week'], e: 'Раз в неделю.' }]
  });
})();

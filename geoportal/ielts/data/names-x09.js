// Имена 81–90: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 81 · Al-Muntaqim */
  X(81, {
    task1: {
      prompt: 'The bar chart below shows three outcomes of neighbour disputes handled by mediation and by court. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Outcomes of neighbour disputes (%), illustrative data', unit: '% of disputes', ymax: 100, cats: ['Resolved within 3 months', 'Parties satisfied', 'Dispute returned within a year'], series: [{ name: 'Mediation', v: [78, 81, 12] }, { name: 'Court', v: [52, 49, 26] }] },
      keywords: ['disputes', 'mediation', 'court', 'resolved', 'satisfied', 'returned', 'neighbour', 'percentage', 'months', 'outcome'],
      model: `The bar chart compares three outcomes of neighbour disputes that were handled by mediation and by court. The data are illustrative.

Overall, mediation produced better results than court in all three respects: more disputes were resolved quickly, more people were satisfied and fewer disputes came back.

Within three months, 78% of the disputes handled by mediation were resolved, compared with 52% of those that went to court, a difference of 26 percentage points. The gap was even larger for satisfaction. In the case of mediation, 81% of the parties were satisfied, whereas in the case of court the figure was only 49%, which is less than half, a difference of 32 points.

The third category is different, because a lower figure is better. Only 12% of the disputes that were settled by mediation returned within a year, while 26% of the disputes decided by court did, which is more than twice as many.

It is noticeable that mediation was the only method for which satisfaction was higher than the proportion of disputes resolved within three months.`,
      analysis: ['Task Achievement: два метода, три исхода; обзор — медиация лучше по всем трём, при этом для третьего показателя «меньше — лучше».', 'Вычисления: разрывы 26, 32 и 14 пунктов; 26 более чем вдвое больше 12.', 'Cohesion: Overall / compared with / whereas / It is noticeable that.', 'Lexical Resource: handled by, parties, returned, a lower figure is better.']
    },
    heads: {
      list: ['A history of prisons', 'Leaving justice to institutions', 'A name that is easily misunderstood', 'The art of debating', 'Verses about retribution', 'Pardon is better than proportionate response'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: имя, которое легко понять неверно («Avenger»).' }, { p: 'B', a: 'v', e: 'Абзац B: 32:22, 3:4, 44:16 о воздаянии.' }, { p: 'C', a: 'vi', e: 'Абзац C: прощение лучше соразмерного ответа (42:40).' }, { p: 'D', a: 'ii', e: 'Абзац D: оставить правосудие институтам.' }]
    },
    ynng: [
      { q: 'The writer suggests that personal revenge is replaced by courts because people who judge their own cases are rarely fair.', a: 'YES', e: 'Абзац C: судящие собственные дела редко бывают справедливы.' },
      { q: 'The writer believes that pardon is worse than a proportionate response.', a: 'NO', e: 'Абзац C: прощение лучше.' },
      { q: 'The writer says that courts in all countries work equally well.', a: 'NOT GIVEN', e: 'Сравнение судов разных стран не приводится.' }
    ],
    matching: { instruction: 'What does the officer say about each of the following? Choose the correct letter, A–D.', options: ['He helps both sides to find a solution', 'It lasts ninety minutes', 'It costs fifteen pounds each', 'Photographs of the fence and letters'], items: [{ q: 'The role of the mediator', a: 'A', e: 'Медиатор не решает, кто прав, а помогает сторонам найти решение.' }, { q: 'The first meeting', a: 'B', e: 'Первая встреча — девяносто минут.' }, { q: 'The cost for each person', a: 'C', e: 'Услуга стоит пятнадцать фунтов с человека.' }, { q: 'What Dana should bring', a: 'D', e: 'Фотографии ограды и письма.' }] },
    short: [{ q: 'What is the dispute about?', a: ['a fence', 'fence', 'the fence'], e: 'Спор об ограде.' }, { q: 'On which street is the office?', a: ['Mill Street', 'Mill'], e: 'Офис на Mill Street, дом сорок.' }]
  });

  /* 82 · Al-'Afuww */
  X(82, {
    task1: {
      prompt: 'The line graph below shows the average relationship score, out of 10, of two groups of people over eight weeks after a quarrel, comparing those who apologised and were forgiven with those who simply avoided each other. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average relationship score (out of 10) after a quarrel, illustrative data', unit: 'score out of 10', ymax: 10, x: ['Week 0', 'Week 1', 'Week 2', 'Week 4', 'Week 8'], series: [{ name: 'Apologised and forgiven', y: [3.0, 5.0, 6.2, 7.0, 7.6] }, { name: 'Avoided each other', y: [3.0, 3.2, 3.5, 3.4, 3.6] }] },
      keywords: ['relationship', 'score', 'quarrel', 'apologised', 'forgiven', 'avoided', 'weeks', 'improved', 'group', 'recovery'],
      model: `The line graph shows the average relationship score, out of 10, of two groups of people over eight weeks after a quarrel. One group apologised and forgave each other, and the other group avoided each other. The data are illustrative.

Overall, the relationships of the people who apologised and forgave each other recovered strongly, whereas those of the people who avoided each other improved very little.

Both groups began with a score of 3.0 immediately after the quarrel. In the first group, the score rose sharply to 5.0 after one week and to 6.2 after two weeks, and then the improvement slowed, with 7.0 in Week 4 and 7.6 in Week 8, a total gain of 4.6 points. Most of this gain, 3.2 points, happened in the first two weeks.

By contrast, the score of the second group moved only slightly. It reached 3.5 in Week 2, dipped to 3.4 in Week 4 and finished at 3.6, a gain of just 0.6.

As a result, the gap between the two groups widened from nothing at the start to 4.0 points at the end of the period.`,
      analysis: ['Task Achievement: одинаковый старт, разные траектории; отмечено замедление роста в первой группе.', 'Вычисления: +4.6 и +0.6; 3.2 из 4.6 за первые две недели; разрыв 4.0.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: recovered strongly, dipped, slowed, total gain.']
    },
    heads: {
      list: ['A history of law codes', 'Letting go in daily life', 'Two kinds of forgiveness', 'Wind and footprints in the sand', 'Verses linking pardon and ability', 'Pardon as strength, and a short prayer'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два вида прощения — maghfira и \'afw.' }, { p: 'B', a: 'v', e: 'Абзац B: 4:149, 4:99, 22:60 — прощение и способность.' }, { p: 'C', a: 'vi', e: 'Абзац C: прощение как сила и мольба для Ночи могущества.' }, { p: 'D', a: 'ii', e: 'Абзац D: отпускать обиды в повседневной жизни.' }]
    },
    ynng: [
      { q: 'The writer suggests that pardon is an act of strength and not of weakness.', a: 'YES', e: 'Абзац C: слово «competent» подчёркивает, что прощение — акт силы.' },
      { q: 'The writer believes that a person should keep a mental list of grievances.', a: 'NO', e: 'Абзац D: прощать нужно без «счёта обид».' },
      { q: 'The writer says that the Night of Power falls on the twenty-seventh night of Ramadan.', a: 'NOT GIVEN', e: 'Дата Ночи могущества в тексте не называется.' }
    ],
    matching: { instruction: 'What do Marat and the clerk say about each of the following? Choose the correct letter, A–D.', options: ['A green backpack with a white label', 'Bus number forty-six', 'Between nine and five on weekdays', 'The first floor of the station'], items: [{ q: 'The lost bag', a: 'A', e: 'Зелёный рюкзак с белым ярлыком.' }, { q: 'The bus', a: 'B', e: 'Автобус номер сорок шесть.' }, { q: 'The time for collecting the bag', a: 'C', e: 'В будни с девяти до пяти.' }, { q: 'The location of the office', a: 'D', e: 'Бюро — на первом этаже вокзала.' }] },
    short: [{ q: 'What does Marat want to do about the driver?', a: ['apologise', 'apologize', 'to apologise', 'say sorry'], e: 'Он хочет извиниться.' }, { q: 'What identification must Marat bring?', a: ['passport', 'a passport', 'his passport'], e: 'Нужно принести паспорт.' }]
  });

  /* 83 · Ar-Ra'uf */
  X(83, {
    task1: {
      prompt: 'The table below shows four neighbourhood visiting schemes for elderly residents, with the number of volunteers, the number of residents visited and the percentage of residents who felt lonely before and after the scheme. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Four visiting schemes, illustrative data', head: ['Scheme', 'Volunteers', 'Residents visited', 'Felt lonely before (%)', 'Felt lonely after (%)'], rows: [['Neighbourhood A', '24', '60', '54', '31'], ['Neighbourhood B', '15', '38', '61', '47'], ['Neighbourhood C', '31', '90', '49', '22'], ['Neighbourhood D', '9', '20', '58', '51']] },
      keywords: ['visiting schemes', 'volunteers', 'residents', 'lonely', 'before', 'after', 'neighbourhood', 'percentage', 'decrease', 'elderly'],
      model: `The table compares four visiting schemes for elderly residents in terms of the number of volunteers, the number of residents visited and the percentage of residents who felt lonely before and after the scheme. The data are illustrative.

Overall, loneliness fell in all four neighbourhoods, and the largest schemes achieved the biggest reductions.

Neighbourhood C had the largest scheme, with 31 volunteers who visited 90 residents. The proportion of residents who felt lonely there fell from 49% to 22%, a decrease of 27 percentage points, which was the biggest fall in the table. Neighbourhood A came second, with 24 volunteers and 60 residents, and loneliness fell from 54% to 31%, a decrease of 23 points.

The smaller schemes were less successful. In Neighbourhood B, 15 volunteers visited 38 residents, and the figure dropped from 61% to 47%, a fall of 14 points. The smallest scheme, in Neighbourhood D, with only 9 volunteers and 20 residents, achieved a fall of just 7 points, from 58% to 51%.

In total, 79 volunteers visited 208 residents, so on average each volunteer visited between two and three people.`,
      analysis: ['Task Achievement: четыре схемы, четыре показателя; обзор — крупнейшие схемы дали наибольшее снижение одиночества.', 'Вычисления: −23, −14, −27, −7; 24 + 15 + 31 + 9 = 79; 60 + 38 + 90 + 20 = 208.', 'Cohesion: Overall / The smaller schemes / In total.', 'Lexical Resource: scheme, decrease, the biggest fall, on average.']
    },
    heads: {
      list: ['The history of medicine', 'Tenderness in relationships', 'Tenderness and the root', 'Rules of strict schooling', 'The name beside Ar-Rahim', 'A warning as an act of kindness'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: нежность и корень r-\'-f.' }, { p: 'B', a: 'v', e: 'Абзац B: имя рядом с Ar-Rahim — 2:143, 3:30, 9:128.' }, { p: 'C', a: 'vi', e: 'Абзац C: предупреждение как акт доброты.' }, { p: 'D', a: 'ii', e: 'Абзац D: нежность в отношениях.' }]
    },
    ynng: [
      { q: 'The writer suggests that a firm statement of limits and gentle concern can go together.', a: 'YES', e: 'Абзац C: строгое указание границ и нежная забота могут сочетаться.' },
      { q: 'The writer says that a doctor who explains the danger of a habit is unkind.', a: 'NO', e: 'Абзац C: врач, объясняющий опасность, заботлив, а не недобр.' },
      { q: 'The writer says that gentle teachers get better examination results.', a: 'NOT GIVEN', e: 'Связь мягкости учителей с экзаменами не обсуждается.' }
    ],
    matching: { instruction: 'What does the coordinator say about each of the following? Choose the correct letter, A–D.', options: ['Once a week for one hour', 'It lasts three hours', 'Listening well, noticing signs and when to call for help', 'It is a police check'], items: [{ q: 'Each visit', a: 'A', e: 'Один раз в неделю по одному часу.' }, { q: 'The training session', a: 'B', e: 'Обучение длится три часа.' }, { q: 'What the training includes', a: 'C', e: 'Умение слушать, замечать признаки нездоровья, знать, когда звать на помощь.' }, { q: 'What is arranged free of charge', a: 'D', e: 'Проверка полицией организуется бесплатно.' }] },
    short: [{ q: 'On which day does Amina prefer to visit?', a: ['Saturday', 'Saturday morning'], e: 'Она предпочитает субботнее утро.' }, { q: 'On which date is the training session?', a: ['4 March', 'the fourth of March', '4th March', 'March 4', 'fourth of March', 'the 4th of March', 'the fourth'], e: 'Обучение — четвёртого марта.' }]
  });

  /* 84 · Malik-ul-Mulk */
  X(84, {
    task1: {
      prompt: 'The bar chart below shows the percentage of the ten largest companies and the ten largest government coalitions that were still in the top ten after different numbers of years. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Still among the top ten after N years (%), illustrative data', unit: '% remaining', ymax: 100, cats: ['After 10 years', 'After 20 years', 'After 30 years', 'After 50 years'], series: [{ name: 'Largest companies', v: [60, 35, 18, 6] }, { name: 'Largest government coalitions', v: [45, 20, 8, 2] }] },
      keywords: ['companies', 'coalitions', 'top ten', 'years', 'remaining', 'percentage', 'decreased', 'power', 'after', 'largest'],
      model: `The bar chart shows the percentage of the ten largest companies and the ten largest government coalitions that were still among the top ten after 10, 20, 30 and 50 years. The data are illustrative.

Overall, the proportion of those that remained in the top ten fell steadily over time, and it fell faster for the government coalitions than for the companies.

After ten years, 60% of the largest companies were still in the top ten, compared with 45% of the coalitions. The figures then declined in both cases. After 20 years, they were 35% and 20%, and after 30 years only 18% of the companies and 8% of the coalitions remained.

After 50 years, hardly any of them were left in the top ten: only 6% of the companies and just 2% of the coalitions. This means that for the companies the figure fell by 54 percentage points over the whole period, and for the coalitions by 43 points.

It is noticeable that in every period the companies did better than the coalitions, although the absolute gap narrowed over time, from 15 points after 10 years to only 4 points after 50 years.`,
      analysis: ['Task Achievement: две серии по четырём периодам; обзор — спад у обеих, быстрее у коалиций.', 'Вычисления: −54 и −43; разрыв 15 → 4 пункта.', 'Cohesion: Overall / compared with / This means that / It is noticeable that.', 'Lexical Resource: remained, declined, hardly any, absolute gap, narrowed.']
    },
    heads: {
      list: ['How elections work', 'Stewardship', 'A compound name', 'Rules of property law', 'A prayer about sovereignty', 'A perspective on power'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: составное имя — malik и mulk.' }, { p: 'B', a: 'v', e: 'Абзац B: молитва в 3:26.' }, { p: 'C', a: 'vi', e: 'Абзац C: взгляд на власть.' }, { p: 'D', a: 'ii', e: 'Абзац D: управление как доверие.' }]
    },
    ynng: [
      { q: 'The writer suggests that the prayer in 3:26 gives rulers a reason for humility and the powerless a reason for hope.', a: 'YES', e: 'Абзац C: для правителей — смирение, для бессильных — надежда.' },
      { q: 'The writer says that rank is a permanent possession of those who hold it.', a: 'NO', e: 'Абзац C: ранг не является постоянным владением.' },
      { q: 'The writer states that empires usually last about two hundred years.', a: 'NOT GIVEN', e: 'Средняя продолжительность империй не называется.' }
    ],
    matching: { instruction: 'What does the guide say about each of the following? Choose the correct letter, A–D.', options: ['Around the year one hundred and seventeen', 'In the year four hundred and seventy-six', 'Within about eighty years', 'More than six hundred years'], items: [{ q: 'The Roman Empire at its largest', a: 'A', e: 'Римская империя достигла наибольших размеров около 117 года.' }, { q: 'The end of the western half of the Roman Empire', a: 'B', e: 'Западная половина закончилась в 476 году.' }, { q: 'The division of the Mongol empire', a: 'C', e: 'Империя монголов распалась примерно за восемьдесят лет.' }, { q: 'The duration of the Ottoman state', a: 'D', e: 'Османское государство просуществовало более шестисот лет.' }] },
    short: [{ q: 'How much is the audio guide?', a: ['3', '£3', 'three', 'three pounds', '3 pounds'], e: 'Аудиогид стоит три фунта.' }, { q: 'At what time does the gallery close?', a: ['5.30', '5:30', 'half past five', '5.30 pm', '17:30'], e: 'Галерея закрывается в половине шестого.' }]
  });

  /* 85 · Dhul-Jalali wal-Ikram */
  X(85, {
    task1: {
      prompt: 'The diagram below shows the steps in organising a formal dinner to honour guests. The process is illustrative. ' + T1,
      chart: { type: 'process', caption: 'Organising a formal dinner to honour guests', steps: ['The organiser books a hall and chooses the date.', 'The guests are invited and the number is confirmed.', 'A three-course menu with a local main course is chosen.', 'A deposit of ten per cent is paid.', 'The organiser arrives one hour before the guests to check the room.', 'A welcome speech is given with a microphone.', 'The dinner is served and the guests are thanked.'] },
      keywords: ['dinner', 'hall', 'guests', 'menu', 'deposit', 'welcome speech', 'microphone', 'organiser', 'served', 'thanked'],
      model: `The diagram illustrates seven steps in organising a formal dinner to honour guests. It is an illustrative example.

Overall, the process has three parts: preparation, the arrival of the guests and the dinner itself, and it ends with an expression of thanks to the guests.

First, the organiser books a hall and chooses the date. Then the guests are invited, and the number of guests is confirmed. After that, a three-course menu with a local main course is chosen, and a deposit of ten per cent is paid. These four steps all take place before the day of the event.

On the day itself, the organiser arrives one hour before the guests to check the room. When the guests arrive, a welcome speech is given with a microphone, which is the first moment at which the guests are formally greeted.

Finally, the dinner is served, and the guests are thanked. In this way, the process begins and ends with attention to the guests, and respect is shown by careful preparation as well as by words.`,
      analysis: ['Task Achievement: три части (подготовка, приход гостей, ужин) выделены в обзоре.', 'Process language: First / Then / After that / On the day itself / Finally; пассив.', 'Выбор деталей: депозит десять процентов, приход за час, приветственная речь.', 'Cohesion: In this way; вывод о внимании к гостям в начале и конце.']
    },
    heads: {
      list: ['How dinner tables are laid', 'A balance in daily life', 'Meanings of two Arabic terms', 'The history of calligraphy', 'Two verses in Surah 55', 'A report about words after prayer'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: значения терминов jalal и ikram.' }, { p: 'B', a: 'v', e: 'Абзац B: два аята суры 55 — 55:27 и 55:78.' }, { p: 'C', a: 'vi', e: 'Абзац C: сообщение о словах после молитвы (Сахих Муслим).' }, { p: 'D', a: 'ii', e: 'Абзац D: баланс в повседневной жизни.' }]
    },
    ynng: [
      { q: 'The writer suggests that a leader is most effective when he combines standards with warmth.', a: 'YES', e: 'Абзац D: руководитель эффективнее, когда сочетает требовательность с теплотой.' },
      { q: 'The writer believes that majesty and generosity usually go together in human experience.', a: 'NO', e: 'Абзац A: в человеческом опыте они «rarely go together».' },
      { q: 'The writer says that most Muslims recite the phrase after every prayer.', a: 'NOT GIVEN', e: 'Сказано лишь, что многие мусульмане используют фразу в молитвах.' }
    ],
    matching: { instruction: 'What do Ruslan and the manager say about each of the following? Choose the correct letter, A–D.', options: ['Forty-five', 'The Garden Room', 'Sixty pounds per person', 'Ten per cent'], items: [{ q: 'The number of guests', a: 'A', e: 'Гостей будет сорок пять.' }, { q: 'The room', a: 'B', e: 'Зал Garden Room вмещает пятьдесят человек.' }, { q: 'The price of the three-course menu', a: 'C', e: 'Шестьдесят фунтов с человека.' }, { q: 'The deposit', a: 'D', e: 'Депозит — десять процентов.' }] },
    short: [{ q: 'What is the main course?', a: ['lamb with rice', 'lamb', 'lamb and rice'], e: 'Основное блюдо — баранина с рисом.' }, { q: 'How long before the guests should Ruslan arrive?', a: ['one hour', '1 hour', 'an hour', 'one hour before'], e: 'Прийти нужно за час до гостей.' }]
  });

  /* 86 · Al-Muqsit */
  X(86, {
    task1: {
      prompt: 'The table below shows the number of pupils, the funding that each of four schools would receive with equal shares per pupil and with needs-based funding, and the percentage of pupils who are eligible for free meals. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'School funding, illustrative data', head: ['School', 'Pupils', 'Equal share (£ thousands)', 'Needs-based (£ thousands)', 'Free meals (%)'], rows: [['Remote village school', '120', '240', '330', '62'], ['Large city school', '900', '1800', '1570', '18'], ['Suburban school', '450', '900', '880', '25'], ['Inner-city school', '300', '600', '760', '55']] },
      keywords: ['schools', 'funding', 'pupils', 'equal share', 'needs-based', 'free meals', 'thousands', 'village', 'city', 'increase'],
      model: `The table shows the number of pupils at four schools, the funding that each would receive under equal shares per pupil and under needs-based funding, and the percentage of pupils who are eligible for free meals. The data are illustrative.

Overall, needs-based funding would give more money to the schools with the highest proportion of pupils eligible for free meals and less to the schools with the lowest proportion, while the total budget would stay the same.

The remote village school has 120 pupils and the highest percentage of free meals, 62%. Its funding would rise from £240 thousand to £330 thousand, an increase of £90 thousand. The inner-city school, where 55% of pupils receive free meals, would gain £160 thousand, from £600 thousand to £760 thousand.

By contrast, the large city school, which has 900 pupils and the lowest share of free meals, 18%, would lose £230 thousand, from £1800 thousand to £1570 thousand. The suburban school, with 450 pupils and 25% free meals, would lose only £20 thousand.

In both systems, the total funding is £3540 thousand.`,
      analysis: ['Task Achievement: четыре школы, два сценария финансирования; обзор — деньги перераспределяются в пользу школ с большим числом нуждающихся.', 'Вычисления: +90, +160, −230, −20 (сумма изменений = 0); итог 3540 в обеих системах.', 'Cohesion: Overall / By contrast / In both systems.', 'Lexical Resource: needs-based, eligible for free meals, would gain, would lose.']
    },
    heads: {
      list: ['The history of scales', 'Fairness in practice', 'Equity and the root', 'A comparison of tax systems', 'Three verses on justice', 'A demanding verse'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: справедливое распределение и корень q-s-t.' }, { p: 'B', a: 'v', e: 'Абзац B: 3:18, 4:135, 5:42 о справедливости.' }, { p: 'C', a: 'vi', e: 'Абзац C: аят 4:135 предъявляет высокие требования.' }, { p: 'D', a: 'ii', e: 'Абзац D: справедливость на практике.' }]
    },
    ynng: [
      { q: 'The writer suggests that fairness is a discipline that overcomes bias.', a: 'YES', e: 'Абзац C: справедливость — дисциплина, преодолевающая предвзятость.' },
      { q: 'The writer says that being fair to strangers is the hardest test of fairness.', a: 'NO', e: 'Абзац C: справедливость к посторонним относительно проста; трудна та, что дорого стоит.' },
      { q: 'The writer says that most teachers grade unfairly.', a: 'NOT GIVEN', e: 'Практика оценивания у большинства учителей не обсуждается.' }
    ],
    matching: { instruction: 'What do the speakers say about each of the following? Choose the correct letter, A–D.', options: ['Twelve hours a week', 'Two hours a week', 'A minimum of three hours a week', 'Two thousand words'], items: [{ q: 'The time of the football team in the gym', a: 'A', e: 'Футбольная команда — двенадцать часов в неделю.' }, { q: 'The time of the dance group', a: 'B', e: 'Танцевальная группа — два часа.' }, { q: 'The minimum for each group in the proposal', a: 'C', e: 'Минимум три часа в неделю для каждой группы.' }, { q: 'The length of the final report', a: 'D', e: 'Итоговый отчёт — две тысячи слов.' }] },
    short: [{ q: 'How many students did the project team interview?', a: ['40', 'forty'], e: 'Опросили сорок студентов.' }, { q: 'What is the deadline for the final report?', a: ['20 November', 'the twentieth of November', '20th November', 'November 20', 'twentieth of November', 'the 20th of November'], e: 'Срок — двадцатое ноября.' }]
  });

  /* 87 · Al-Jami' */
  X(87, {
    task1: {
      prompt: 'The bar chart below shows the number of people from five age groups who attended a city festival in 2022 and in 2023. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Festival attendance by age group (number of people), illustrative data', unit: 'number of people', ymax: 600, cats: ['Under 18', '18–30', '31–50', '51–65', 'Over 65'], series: [{ name: '2022', v: [220, 310, 410, 260, 150] }, { name: '2023', v: [340, 420, 520, 330, 240] }] },
      keywords: ['festival', 'attendance', 'age groups', '2022', '2023', 'increase', 'under 18', 'over 65', 'people', 'total'],
      model: `The bar chart compares the number of people from five age groups who attended a city festival in 2022 and in 2023. The data are illustrative.

Overall, attendance rose in every age group, and the total number of visitors increased from 1350 in 2022 to 1850 in 2023, which is a rise of about 37%.

In both years, the 31–50 age group was the largest, with 410 people in 2022 and 520 in 2023, an increase of 110. The 18–30 group came second in both years, rising from 310 to 420. The two older groups, those aged 51–65 and over 65, also increased, from 260 to 330 and from 150 to 240 respectively.

The biggest rise in absolute terms was among the under-18s, whose number increased by 120, from 220 to 340. However, in percentage terms, the largest growth was among the people over 65, whose attendance grew by 60%, compared with 55% for the youngest group.

It is noticeable that the two groups at the ends of the age range showed the fastest growth, which suggests that the festival became more attractive for families and older residents.`,
      analysis: ['Task Achievement: пять возрастных групп, два года; обзор — рост везде и общий рост ≈ 37%.', 'Вычисления: 1350 → 1850 (+37%); +120 у младших (+55%), +90 у старших (+60%).', 'Cohesion: Overall / respectively / However / It is noticeable that; осторожное «suggests».', 'Lexical Resource: in absolute terms, in percentage terms, the fastest growth.']
    },
    heads: {
      list: ['A history of Friday markets', 'Bringing people and knowledge together', 'Collecting and uniting: a root and its words', 'Rules of assembly', 'Verses about gathering', 'Dispersal and gathering'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: собирать и объединять — корень и слова.' }, { p: 'B', a: 'v', e: 'Абзац B: 3:9, 3:25, 42:29 о собирании.' }, { p: 'C', a: 'vi', e: 'Абзац C: рассеянность и собирание.' }, { p: 'D', a: 'ii', e: 'Абзац D: объединять людей и знания.' }]
    },
    ynng: [
      { q: 'The writer suggests that a person can act as a peacemaker who brings two sides to the same table.', a: 'YES', e: 'Абзац D: миротворец, сводящий стороны за один стол.' },
      { q: 'The writer says that the power which scattered creatures cannot gather them.', a: 'NO', e: 'Абзац C: та же сила, что рассеяла, может собрать.' },
      { q: 'The writer states that families gather more often in rural areas than in cities.', a: 'NOT GIVEN', e: 'Сравнение села и города не приводится.' }
    ],
    matching: { instruction: 'What does the organiser say about each of the following? Choose the correct letter, A–D.', options: ['A tour of the building', 'A photograph of the whole group', 'A dinner with short speeches', 'About ninety addresses'], items: [{ q: 'The first item of the programme', a: 'A', e: 'Сначала — экскурсия по зданию.' }, { q: 'The second item', a: 'B', e: 'Затем — общая фотография группы.' }, { q: 'The third item', a: 'C', e: 'Затем — ужин с короткими речами.' }, { q: 'What has been gathered so far', a: 'D', e: 'Уже собраны адреса около девяноста человек.' }] },
    short: [{ q: 'At what time does registration open?', a: ['4', 'four', '4:00', '4 pm', '4pm', '16:00', 'four o\'clock', '4 o\'clock'], e: 'Регистрация открывается в четыре часа.' }, { q: 'Where is the reunion held?', a: ['the old school building', 'old school building', 'at the old school building', 'the old school'], e: 'Встреча — в здании старой школы.' }]
  });

  /* 88 · Al-Ghani */
  X(88, {
    task1: {
      prompt: 'The line graph below shows the average size of the emergency fund, measured in months of expenses, of two groups over twelve months, comparing people who used the 50/30/20 budgeting rule with people who had no budget. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average emergency fund (months of expenses), illustrative data', unit: 'months of expenses', ymax: 4, x: ['Start', 'Month 3', 'Month 6', 'Month 9', 'Month 12'], series: [{ name: 'Used the 50/30/20 rule', y: [0.5, 1.0, 1.6, 2.2, 2.9] }, { name: 'No budget', y: [0.5, 0.5, 0.6, 0.5, 0.4] }] },
      keywords: ['emergency fund', 'months', 'expenses', 'budget', '50/30/20', 'savings', 'increased', 'average', 'group', 'twelve months'],
      model: `The line graph shows the average size of the emergency fund, measured in months of expenses, of two groups over twelve months. One group used the 50/30/20 budgeting rule, and the other had no budget. The data are illustrative.

Overall, the emergency fund of the group that used the rule grew steadily and almost reached the recommended minimum of three months, whereas the fund of the group with no budget did not grow at all.

Both groups started with an average of 0.5 months of expenses. In the group that used the rule, the fund doubled to 1.0 month after three months and then continued to rise, to 1.6 months at Month 6, 2.2 months at Month 9 and 2.9 months at Month 12. This is a total increase of 2.4 months, with an average gain of around 0.6 months every quarter.

By contrast, the group with no budget remained at about the same level. Its figure varied between 0.4 and 0.6 months, and it finished at 0.4, which was slightly lower than at the start.

As a result, the gap between the two groups widened from nothing to 2.5 months by the end of the year.`,
      analysis: ['Task Achievement: две линии, общий старт, одна растёт, другая стоит; ориентир трёх месяцев отмечен.', 'Вычисления: +2.4 месяца; ≈ 0.6 за квартал; разрыв 2.9 − 0.4 = 2.5.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: emergency fund, budgeting rule, recommended minimum, varied between.']
    },
    heads: {
      list: ['A history of money', 'Attitudes that follow', 'Richness as sufficiency', 'Poverty statistics', 'A well-known verse', 'Worship and charity benefit the person'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: богатство как достаточность.' }, { p: 'B', a: 'v', e: 'Абзац B: известный аят 35:15 и 47:38.' }, { p: 'C', a: 'vi', e: 'Абзац C: богослужение и милостыня приносят пользу самому человеку.' }, { p: 'D', a: 'ii', e: 'Абзац D: какие отношения из этого следуют.' }]
    },
    ynng: [
      { q: 'The writer suggests that giving is an opportunity offered to the giver.', a: 'YES', e: 'Абзац C: даяние — возможность для дающего.' },
      { q: 'The writer claims that worship and charity benefit God.', a: 'NO', e: 'Абзац C: они приносят пользу человеку, а не Богу.' },
      { q: 'The writer says that wealthy people give less than poor people.', a: 'NOT GIVEN', e: 'Сравнение щедрости богатых и бедных не приводится.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['Fifty per cent of income', 'Thirty per cent of income', 'Twenty per cent of income', 'Three to six months of expenses'], items: [{ q: 'Needs, such as rent and food', a: 'A', e: 'На нужды — пятьдесят процентов.' }, { q: 'Wants', a: 'B', e: 'На желания — тридцать процентов.' }, { q: 'Savings', a: 'C', e: 'На сбережения — двадцать процентов.' }, { q: 'An emergency fund', a: 'D', e: 'Резервный фонд — расходы за три-шесть месяцев.' }] },
    short: [{ q: 'For how many weeks must students record their spending?', a: ['4', 'four', 'four weeks', '4 weeks'], e: 'Записи нужно вести четыре недели.' }, { q: 'By which date is the record due?', a: ['15 December', 'the fifteenth of December', '15th December', 'December 15', 'fifteenth of December', 'the 15th of December'], e: 'Срок — пятнадцатое декабря.' }]
  });

  /* 89 · Al-Mughni */
  X(89, {
    task1: {
      prompt: 'The bar chart below shows the number of microloans granted to five kinds of business and the number of those businesses that were still trading after three years. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Microloans granted and businesses still trading after three years, illustrative data', unit: 'number of businesses', ymax: 60, cats: ['Bakery', 'Workshop', 'Repair service', 'Tailoring', 'Food stall'], series: [{ name: 'Loans granted', v: [42, 31, 25, 37, 56] }, { name: 'Still trading after three years', v: [30, 22, 19, 28, 35] }] },
      keywords: ['microloans', 'businesses', 'bakery', 'workshop', 'repair service', 'tailoring', 'food stall', 'trading', 'three years', 'granted'],
      model: `The bar chart compares the number of microloans that were granted to five kinds of small business with the number of those businesses that were still trading three years later. The data are illustrative.

Overall, food stalls received the most loans, but they had the lowest survival rate, while the other four kinds of business had survival rates of between 71% and 76%.

Food stalls were the largest category, with 56 loans, followed by bakeries with 42, tailoring businesses with 37, workshops with 31 and repair services with 25. After three years, 35 of the food stalls were still trading, which is 63% of the total, the lowest proportion in the chart.

The highest survival rates were recorded for repair services and tailoring businesses, at 76% in both cases, since 19 of 25 and 28 of 37 were still operating. Bakeries and workshops each had a rate of about 71%, with 30 of 42 and 22 of 31 businesses still trading.

In total, 191 loans were granted, and 134 of the businesses, or about 70%, were still trading after three years.`,
      analysis: ['Task Achievement: пять видов бизнеса, две серии; обзор — больше всего займов у ларьков с едой, но ниже всего их выживаемость.', 'Вычисления: 35/56 ≈ 63%; 19/25 = 76%; 28/37 ≈ 76%; 30/42 ≈ 71%; 22/31 ≈ 71%; 191 и 134 (≈ 70%).', 'Cohesion: Overall / followed by / In total.', 'Lexical Resource: survival rate, still trading, operating, granted.']
    },
    heads: {
      list: ['The history of banking', 'Helping people to become self-reliant', 'A causative form and its counterpart', 'Marriage customs', 'Verses on enriching', 'Enrichment is not only about money'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: причинная форма и дополняющее имя.' }, { p: 'B', a: 'v', e: 'Абзац B: 53:48 и 24:32 об обогащении.' }, { p: 'C', a: 'vi', e: 'Абзац C: обогащение не сводится к деньгам.' }, { p: 'D', a: 'ii', e: 'Абзац D: помогать людям становиться самостоятельными.' }]
    },
    ynng: [
      { q: 'The writer suggests that charity which restores independence has a lasting effect.', a: 'YES', e: 'Абзац D: помощь, возвращающая независимость, имеет долговременный эффект.' },
      { q: 'The writer says that enrichment is limited to money.', a: 'NO', e: 'Абзац C: обогащение не ограничивается деньгами.' },
      { q: 'The writer says that most poor people prefer loans to gifts.', a: 'NOT GIVEN', e: 'Предпочтения бедных не обсуждаются.' }
    ],
    matching: { instruction: 'What does the speaker say about each of the following? Choose the correct letter, A–D.', options: ['Between five hundred and five thousand pounds', 'It lasts two weeks', 'It starts three months after the loan is received', 'It is three per cent a year'], items: [{ q: 'The amount of a loan', a: 'A', e: 'Займы — от пятисот до пяти тысяч фунтов.' }, { q: 'The training course', a: 'B', e: 'Курс обучения длится две недели.' }, { q: 'The start of repayment', a: 'C', e: 'Погашение начинается через три месяца после получения денег.' }, { q: 'The interest rate', a: 'D', e: 'Ставка — три процента годовых.' }] },
    short: [{ q: 'At what address is the Fund\'s office?', a: ['12 Station Road', 'number twelve, Station Road', 'twelve Station Road', 'number 12 Station Road'], e: 'Офис — Station Road, дом двенадцать.' }, { q: 'What is the deadline for the next round?', a: ['30 September', 'the thirtieth of September', '30th September', 'September 30', 'thirtieth of September', 'the 30th of September'], e: 'Срок — тридцатое сентября.' }]
  });

  /* 90 · Al-Mani' */
  X(90, {
    task1: {
      prompt: 'The bar chart below shows the number of incidents per 100 walkers on mountain walks, comparing groups that followed four safety rules with groups that did not. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Incidents per 100 walkers, illustrative data', unit: 'incidents per 100 walkers', ymax: 15, cats: ['Stayed on the path', 'Wore proper boots', 'Carried two litres of water', 'Carried a radio and first-aid kit'], series: [{ name: 'Groups that followed the rule', v: [2, 3, 4, 1] }, { name: 'Groups that did not follow the rule', v: [11, 9, 12, 8] }] },
      keywords: ['incidents', 'walkers', 'safety rules', 'path', 'boots', 'water', 'radio', 'first-aid', 'followed', 'groups'],
      model: `The bar chart compares the number of incidents per 100 walkers on mountain walks for groups that followed four safety rules and groups that did not. The data are illustrative.

Overall, the groups that followed the rules had far fewer incidents than the groups that did not, and this was true for all four rules.

The largest difference concerned carrying a radio and a first-aid kit. Groups that did so had only 1 incident per 100 walkers, while groups without these items had 8, which is eight times as many. Staying on the path showed a similar pattern, with 2 incidents compared with 11, which is more than five times as many.

The differences for boots and water were smaller. The groups that wore proper boots had 3 incidents per 100 walkers, compared with 9 for those who did not, and the groups that carried two litres of water had 4 incidents, compared with 12.

It is noticeable that the highest figure on the chart, 12 incidents, was recorded for groups that did not carry enough water, even though carrying water was not the rule with the biggest difference in proportion.`,
      analysis: ['Task Achievement: четыре правила, две серии; обзор — соблюдение правил резко снижает число происшествий.', 'Вычисления: 1 против 8 — в восемь раз; 2 против 11 — более чем в пять раз; 3 против 9 и 4 против 12 — втрое.', 'Cohesion: Overall / while / It is noticeable that / even though.', 'Lexical Resource: incidents per 100 walkers, the largest difference, in proportion.']
    },
    heads: {
      list: ['A history of fortresses', 'Responsible limits', 'Preventing and protecting', 'Rules of supplication', 'Verses on withholding', 'Refusal as protection'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: предотвращать и защищать.' }, { p: 'B', a: 'v', e: 'Абзац B: 35:2, 67:21, 6:17 об удержании.' }, { p: 'C', a: 'vi', e: 'Абзац C: отказ как защита.' }, { p: 'D', a: 'ii', e: 'Абзац D: разумные границы.' }]
    },
    ynng: [
      { q: 'The writer suggests that some refusals may protect a person from consequences that he cannot foresee.', a: 'YES', e: 'Абзац C: некоторые отказы защищают от непредвиденных последствий.' },
      { q: 'The writer says that the name Al-Mani\' appears as a noun in 35:2.', a: 'NO', e: 'Абзац B: идея выражена без самого имени.' },
      { q: 'The writer says that a closed door always leads to a better path.', a: 'NOT GIVEN', e: 'В тексте сказано только, что человек «may discover» это спустя годы.' }
    ],
    matching: { instruction: 'What does the instructor say about each of the following? Choose the correct letter, A–D.', options: ['The walk starts at eight o\'clock', 'The group returns before four', 'Walking boots are required', 'A radio is carried because phones will not work in some areas'], items: [{ q: 'The start time', a: 'A', e: 'Начало — в восемь часов.' }, { q: 'The time of return', a: 'B', e: 'Возвращение — до четырёх.' }, { q: 'The footwear', a: 'C', e: 'Нужны ходовые ботинки; кроссовки не допускаются.' }, { q: 'The reason for the instructor\'s radio', a: 'D', e: 'В некоторых местах телефоны не работают, поэтому у инструктора рация.' }] },
    short: [{ q: 'How long is the walk?', a: ['11 kilometres', 'eleven kilometres', '11', 'eleven', '11 km', 'eleven km'], e: 'Маршрут — одиннадцать километров.' }, { q: 'What will the group leader carry?', a: ['a first-aid kit', 'first-aid kit', 'first aid kit', 'a first aid kit'], e: 'Руководитель группы несёт аптечку.' }]
  });
})();

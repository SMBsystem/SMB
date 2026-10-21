// Имена 91–99: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 91 · Ad-Darr */
  X(91, {
    task1: {
      prompt: 'The bar chart below shows the percentage of injuries that had complications, comparing cases in which first aid was given within five minutes with cases in which it was not. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Injuries with complications (%), illustrative data', unit: '% of injuries', ymax: 40, cats: ['Cuts', 'Burns', 'Sprains', 'Falls'], series: [{ name: 'First aid within 5 minutes', v: [4, 6, 9, 12] }, { name: 'No first aid within 5 minutes', v: [15, 24, 22, 31] }] },
      keywords: ['injuries', 'complications', 'first aid', 'cuts', 'burns', 'sprains', 'falls', 'percentage', 'minutes', 'difference'],
      model: `The bar chart compares the percentage of four kinds of injury that had complications when first aid was given within five minutes and when it was not. The data are illustrative.

Overall, complications were much less common when first aid was given quickly, and this was true for all four kinds of injury.

For cuts, only 4% of the injuries that received first aid within five minutes had complications, compared with 15% of those that did not, which is almost four times as many. The difference was even larger for burns: 6% against 24%, a gap of 18 percentage points, and the figure for burns without quick first aid was the second highest in the chart.

Sprains and falls showed a similar pattern at a higher level. With quick first aid, 9% of sprains and 12% of falls had complications, whereas the figures without it were 22% and 31%.

Falls were the most serious category in both conditions, and the largest gap in absolute terms, 19 points, was found for them. The smallest gap, 11 points, was found for cuts, which were the least serious injury.`,
      analysis: ['Task Achievement: четыре вида травм, две серии; обзор — быстрая первая помощь снижает осложнения во всех случаях.', 'Вычисления: разрывы 11, 18, 13 и 19 пунктов; 15 почти вчетверо больше 4.', 'Cohesion: Overall / compared with / whereas / The smallest gap.', 'Lexical Resource: complications, first aid, in absolute terms, the second highest.']
    },
    heads: {
      list: ['The history of medicine', 'Practical attitudes', 'A name used only with its partner', 'Why accidents are rare', 'Verses on removing harm', 'What the teaching does not say'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: имя, которое употребляют только в паре с Ан-Нафи\'.' }, { p: 'B', a: 'v', e: 'Абзац B: 6:17, 10:107, 39:38 о снятии вреда.' }, { p: 'C', a: 'vi', e: 'Абзац C: чего это учение не говорит.' }, { p: 'D', a: 'ii', e: 'Абзац D: практические отношения к вреду и бедам.' }]
    },
    ynng: [
      { q: 'The writer suggests that seeking treatment and taking precautions are encouraged.', a: 'YES', e: 'Абзац C: лечение и предосторожности поощряются.' },
      { q: 'The writer says that people should accept every misfortune without trying to change it.', a: 'NO', e: 'Абзац C: учение не призывает мириться со всякой бедой.' },
      { q: 'The writer says that disasters are more common in the modern world than in the past.', a: 'NOT GIVEN', e: 'Частота бедствий в разные эпохи не обсуждается.' }
    ],
    matching: { instruction: 'What does the receptionist say about each of the following? Choose the correct letter, A–D.', options: ['It lasts six hours', 'It costs forty-five pounds', 'It is valid for three years', 'It has a maximum of twelve people'], items: [{ q: 'The basic course', a: 'A', e: 'Курс длится шесть часов за один день.' }, { q: 'The fee', a: 'B', e: 'Стоимость — сорок пять фунтов.' }, { q: 'The certificate', a: 'C', e: 'Сертификат действителен три года.' }, { q: 'Each group', a: 'D', e: 'В группе максимум двенадцать человек.' }] },
    short: [{ q: 'What happened to Daniyar\'s brother?', a: ['he cut his hand', 'cut his hand', 'he cut his hand badly', 'cut his hand badly', 'he cut himself'], e: 'Брат сильно порезал руку на кухне.' }, { q: 'On which street is the Red Cross building?', a: ['Park Avenue', 'Park'], e: 'Здание — на Park Avenue.' }]
  });

  /* 92 · An-Nafi' */
  X(92, {
    task1: {
      prompt: 'The line graph below shows the amount of vegetables harvested in a community garden each month from April to September and the amount that was donated to families in need. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Community garden: harvest and donations (kg per month), illustrative data', unit: 'kg', ymax: 700, x: ['April', 'May', 'June', 'July', 'August', 'September'], series: [{ name: 'Harvest', y: [0, 40, 180, 420, 610, 350] }, { name: 'Donated to families in need', y: [0, 10, 45, 105, 150, 95] }] },
      keywords: ['garden', 'harvest', 'vegetables', 'donated', 'families', 'kilograms', 'months', 'peak', 'August', 'increase'],
      model: `The line graph shows how many kilograms of vegetables a community garden harvested each month from April to September and how many of them were donated to families in need. The data are illustrative.

Overall, both figures rose sharply until August and then fell in September, and the donations followed the same pattern as the harvest.

There was no harvest in April. The amount then grew rapidly, from 40 kg in May to 180 kg in June and 420 kg in July, and it reached a peak of 610 kg in August. In September, it dropped to 350 kg.

The donated amount was always much smaller but changed in the same way. It rose from 10 kg in May to 45 kg in June, 105 kg in July and a maximum of 150 kg in August, and then fell to 95 kg in September.

It is noticeable that the donations were consistently about a quarter of the harvest. Over the whole period, 1600 kg of vegetables were harvested, and 405 kg of them, roughly 25%, were given to families in need.`,
      analysis: ['Task Achievement: две линии с общим пиком в августе; доля пожертвований стабильна.', 'Вычисления: 40 → 610 → 350; 10 → 150 → 95; 1600 кг и 405 кг (≈ 25%).', 'Cohesion: Overall / The donated amount / It is noticeable that.', 'Lexical Resource: harvested, peak, consistently, roughly a quarter.']
    },
    heads: {
      list: ['The history of agriculture', 'Aiming to be beneficial', 'A name paired with its counterpart', 'How rain forms', 'Three verses on benefit', 'An image from nature'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: имя в паре со своей противоположностью.' }, { p: 'B', a: 'v', e: 'Абзац B: 10:49, 48:11, 13:17 о пользе.' }, { p: 'C', a: 'vi', e: 'Абзац C: образ из природы — пена и вода.' }, { p: 'D', a: 'ii', e: 'Абзац D: стремиться приносить пользу.' }]
    },
    ynng: [
      { q: 'The writer suggests that knowledge that is used is more valuable than knowledge that is stored.', a: 'YES', e: 'Абзац D: применяемое знание ценнее хранимого.' },
      { q: 'The writer says that showy things last longer than useful ones.', a: 'NO', e: 'Абзац C: пена исчезает, полезное остаётся.' },
      { q: 'The writer says that the name An-Nafi\' appears as a noun in the Qur\'an.', a: 'NOT GIVEN', e: 'Форма имени в Коране не обсуждается.' }
    ],
    matching: { instruction: 'What does the coordinator say about each of the following? Choose the correct letter, A–D.', options: ['The city council will provide it', 'A local shop has donated them', 'They are kept for vegetables for families in need', 'It takes place on the second Saturday of each month'], items: [{ q: 'The water', a: 'A', e: 'Воду обеспечит городской совет.' }, { q: 'The tools', a: 'B', e: 'Инструменты подарил местный магазин.' }, { q: 'The three special beds', a: 'C', e: 'Три грядки отведены под овощи для нуждающихся семей.' }, { q: 'The workshop for beginners', a: 'D', e: 'Семинар для новичков — во вторую субботу каждого месяца.' }] },
    short: [{ q: 'How much does a bed cost per year?', a: ['10', '£10', 'ten', 'ten pounds', '10 pounds'], e: 'Грядка стоит десять фунтов в год.' }, { q: 'On what date is the first planting day?', a: ['12 April', 'the twelfth of April', '12th April', 'April 12', 'twelfth of April', 'the 12th of April'], e: 'Первая посадка — двенадцатого апреля.' }]
  });

  /* 93 · An-Nur */
  X(93, {
    task1: {
      prompt: 'The table below shows four groups of adults, defined by their exposure to morning daylight and their use of screens before bed, with the average time that they took to fall asleep, the average hours of sleep and the percentage who felt alert the next day. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Light, screens and sleep, illustrative data', head: ['Group', 'Minutes to fall asleep', 'Hours of sleep', 'Alert next day (%)'], rows: [['Morning light, screens off an hour before bed', '14', '7.8', '82'], ['Morning light, screens on until bedtime', '26', '7.0', '61'], ['Little light, screens off an hour before bed', '22', '7.2', '64'], ['Little light, screens on until bedtime', '38', '6.1', '39']] },
      keywords: ['morning light', 'screens', 'sleep', 'minutes', 'hours', 'alert', 'bed', 'groups', 'highest', 'lowest'],
      model: `The table compares four groups of adults, according to whether they had morning daylight and whether they switched off screens an hour before bed, in terms of the time taken to fall asleep, the hours of sleep and the percentage who felt alert the next day. The data are illustrative.

Overall, the group with morning light and no screens before bed had the best results on all three measures, and the group with little light and screens until bedtime had the worst.

The first group took only 14 minutes to fall asleep, slept for 7.8 hours on average and 82% of them felt alert the next day. At the other extreme, the fourth group needed 38 minutes to fall asleep, slept for only 6.1 hours, and just 39% felt alert.

The two middle groups were similar to each other. Those with morning light but with screens on needed 26 minutes, slept for 7.0 hours and 61% were alert. Those with little light but with screens off took 22 minutes, slept for 7.2 hours and 64% were alert.

The difference in alertness between the best and the worst group was 43 percentage points.`,
      analysis: ['Task Achievement: четыре группы, три показателя; обзор — лучшая и худшая группа.', 'Вычисление: 82 − 39 = 43 пункта.', 'Cohesion: Overall / At the other extreme / The two middle groups.', 'Lexical Resource: morning daylight, took, needed, alert, the other extreme.']
    },
    heads: {
      list: ['The history of electric lighting', 'Seeking and spreading light', 'A universal image', 'The geography of olive groves', 'A verse with a lamp and a glass', 'A treatise and interpretations'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: универсальный образ света.' }, { p: 'B', a: 'v', e: 'Абзац B: аят 24:35 с лампой и стеклом.' }, { p: 'C', a: 'vi', e: 'Абзац C: трактат и толкования.' }, { p: 'D', a: 'ii', e: 'Абзац D: искать и нести свет.' }]
    },
    ynng: [
      { q: 'The writer suggests that confusion is not always permanent.', a: 'YES', e: 'Абзац D: можно просить ясности, доверяя, что замешательство не всегда постоянно.' },
      { q: 'The writer says that all scholars agree that nur is a name of God in the strictest sense.', a: 'NO', e: 'Абзац A: учёные обсуждают этот вопрос.' },
      { q: 'The writer says that reading in bright light improves memory.', a: 'NOT GIVEN', e: 'Влияние яркого света на память в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['It is the main signal that sets the body rhythm', 'About thirty minutes in the morning is recommended', 'Many specialists advise doing it an hour before bed', 'It gives an even light and avoids reflection on the screen'], items: [{ q: 'Light', a: 'A', e: 'Свет — главный сигнал суточного ритма.' }, { q: 'Morning daylight', a: 'B', e: 'Рекомендуют около тридцати минут утром.' }, { q: 'Switching off bright screens', a: 'C', e: 'Многие специалисты советуют выключать экраны за час до сна.' }, { q: 'A good desk lamp', a: 'D', e: 'Хорошая лампа даёт ровный свет без бликов на экране.' }] },
    short: [{ q: 'For how many days must students record their sleeping times?', a: ['10', 'ten', 'ten days', '10 days'], e: 'Записи нужно вести десять дней.' }, { q: 'On which date are the notes due?', a: ['7 November', 'the seventh of November', '7th November', 'November 7', 'seventh of November', 'the 7th of November'], e: 'Записи — до седьмого ноября.' }]
  });

  /* 94 · Al-Hadi */
  X(94, {
    task1: {
      prompt: 'The bar chart below shows the percentage of students who gave four answers about their choice of university course, comparing students who had a career guidance session with those who did not. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Students\' answers about their choice of course (%), illustrative data', unit: '% of students', ymax: 100, cats: ['Know which field to study', 'Know which subjects are needed', 'Feel confident in the decision', 'Changed course in the first year'], series: [{ name: 'Had a guidance session', v: [74, 70, 68, 8] }, { name: 'No guidance session', v: [41, 38, 35, 22] }] },
      keywords: ['students', 'guidance', 'career', 'course', 'field', 'subjects', 'confident', 'changed', 'percentage', 'session'],
      model: `The bar chart compares the percentage of students who gave four answers about their choice of university course, depending on whether they had a career guidance session before choosing. The data are illustrative.

Overall, the students who had a guidance session were much clearer and more confident about their choice, and they were far less likely to change their course in the first year.

In the first three categories, the guided students scored much higher. 74% of them knew which field to study, compared with 41% of the unguided students, and 70% knew which subjects were needed, against 38%. Confidence in the decision was reported by 68% of the guided group, which is almost twice the figure of 35% for the other group.

The differences in these three categories were very similar, at 33, 32 and 33 percentage points respectively.

The fourth category is different, because a lower figure is better. Only 8% of the students who had guidance changed their course in the first year, whereas 22% of the other students did, which is nearly three times as many.`,
      analysis: ['Task Achievement: четыре показателя, две группы; обзор — консультация повышает ясность и уверенность, снижает смену курса.', 'Вычисления: разрывы 33, 32, 33; 22 почти втрое больше 8.', 'Cohesion: Overall / compared with / against / The fourth category is different.', 'Lexical Resource: career guidance, confident, unguided, respectively.']
    },
    heads: {
      list: ['The history of pilgrim routes', 'Humility in learning and gentle guiding', 'A root and a gift', 'Choosing a map', 'Verses asking for the straight path', 'Levels of guidance'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень h-d-y и слово hadiya (подарок).' }, { p: 'B', a: 'v', e: 'Абзац B: 1:6, 22:54, 25:31 о прямом пути.' }, { p: 'C', a: 'vi', e: 'Абзац C: уровни наставления.' }, { p: 'D', a: 'ii', e: 'Абзац D: скромность в учёбе и мягкое наставление.' }]
    },
    ynng: [
      { q: 'The writer suggests that asking for guidance in prayer is natural and not a sign of weakness.', a: 'YES', e: 'Абзац C: постоянная просьба о наставлении считается естественной, а не слабостью.' },
      { q: 'The writer recommends forcing guidance on other people.', a: 'NO', e: 'Абзац D: наставлять нужно, «without forcing it».' },
      { q: 'The writer says that most people never ask for advice.', a: 'NOT GIVEN', e: 'Привычки людей просить совета не обсуждаются.' }
    ],
    matching: { instruction: 'What does the adviser say about each of the following? Choose the correct letter, A–D.', options: ['Wednesday at half past three', 'About an hour', 'Eight pounds each', 'Room three-fifteen'], items: [{ q: 'Aigerim\'s appointment', a: 'A', e: 'Приём — в среду в половине четвёртого.' }, { q: 'The length of the consultation', a: 'B', e: 'Консультация длится около часа.' }, { q: 'The price of later sessions', a: 'C', e: 'Последующие сессии — по восемь фунтов.' }, { q: 'The location of the centre', a: 'D', e: 'Комната триста пятнадцать на третьем этаже.' }] },
    short: [{ q: 'What will Aigerim complete first at the centre?', a: ['a questionnaire', 'questionnaire', 'a questionnaire about her interests and strengths'], e: 'Сначала она заполнит анкету об интересах и сильных сторонах.' }, { q: 'Who makes the final decision about what to study?', a: ['Aigerim', 'she does', 'she', 'the student'], e: 'Окончательное решение принимает сама Айгерим.' }]
  });

  /* 95 · Al-Badi' */
  X(95, {
    task1: {
      prompt: 'The table below shows the number of exhibits, the number of visitors per week and the average time that visitors spent in each of the three rooms of an art exhibition. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Three rooms of an art exhibition, illustrative data', head: ['Room', 'Exhibits', 'Visitors per week', 'Average time (minutes)'], rows: [['Paintings by young artists', '24', '1150', '12'], ['Sculptures from recycled materials', '18', '980', '15'], ['Interactive wall', '1', '1420', '25']] },
      keywords: ['exhibition', 'rooms', 'exhibits', 'visitors', 'average time', 'paintings', 'sculptures', 'interactive wall', 'minutes', 'week'],
      model: `The table shows the number of exhibits, the number of visitors per week and the average time that visitors spent in each of the three rooms of an art exhibition. The data are illustrative.

Overall, the interactive wall was the most popular part of the exhibition and the one where visitors stayed the longest, even though it consisted of a single exhibit.

The room with the interactive wall attracted 1420 visitors a week, which is the highest figure, and they spent an average of 25 minutes there, which is more than twice as long as in the room with the paintings, 12 minutes. By contrast, the room of paintings by young artists contained the largest number of exhibits, 24, and it received 1150 visitors a week.

The room with sculptures from recycled materials had 18 exhibits and was the least visited, with 980 visitors a week. However, visitors spent 15 minutes on average in this room, which was longer than in the room of paintings.

In total, the three rooms received 3550 visits a week, and the interactive wall accounted for about 40% of them.`,
      analysis: ['Task Achievement: три зала, три показателя; обзор — интерактивная стена лидирует при одном экспонате.', 'Вычисления: 1150 + 980 + 1420 = 3550; 1420/3550 = 40%; 25 больше чем вдвое больше 12.', 'Cohesion: Overall / By contrast / However / In total.', 'Lexical Resource: attracted, consisted of, accounted for, exhibits.']
    },
    heads: {
      list: ['A history of museums', 'Creativity within human limits', 'Starting without a model', 'Snowflake research', 'Two verses with the same phrase', 'Reflection on nature'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: начинать без прежнего образца.' }, { p: 'B', a: 'v', e: 'Абзац B: два аята с одним выражением — 2:117 и 6:101.' }, { p: 'C', a: 'vi', e: 'Абзац C: размышление о природе.' }, { p: 'D', a: 'ii', e: 'Абзац D: творчество в человеческих пределах.' }]
    },
    ynng: [
      { q: 'The writer suggests that reflection on nature is considered a form of worship.', a: 'YES', e: 'Абзац C: размышление над природой считается формой поклонения.' },
      { q: 'The writer says that people can originate things from nothing.', a: 'NO', e: 'Абзац D: из ничего творит только Бог; люди создают из существующих материалов.' },
      { q: 'The writer says that artists are more thankful than scientists.', a: 'NOT GIVEN', e: 'Сравнение благодарности художников и учёных не приводится.' }
    ],
    matching: { instruction: 'What does the guide say about each of the following? Choose the correct letter, A–D.', options: ['Paintings by young artists from the region', 'Sculptures made of recycled materials', 'An interactive space where visitors add drawings', 'Free entrance after six o\'clock'], items: [{ q: 'The first room', a: 'A', e: 'Первая комната: картины молодых художников региона.' }, { q: 'The second room', a: 'B', e: 'Вторая: скульптуры из вторичных материалов.' }, { q: 'The third room', a: 'C', e: 'Третья: интерактивное пространство, где посетители добавляют рисунки.' }, { q: 'Thursday evenings', a: 'D', e: 'По четвергам после шести вход бесплатный.' }] },
    short: [{ q: 'On what date did the exhibition open?', a: ['3 May', 'the third of May', '3rd May', 'May 3', 'third of May', 'the 3rd of May'], e: 'Выставка открылась третьего мая.' }, { q: 'How much does an adult ticket cost?', a: ['9', '£9', 'nine', 'nine pounds', '9 pounds'], e: 'Взрослый билет — девять фунтов.' }]
  });

  /* 96 · Al-Baqi */
  X(96, {
    task1: {
      prompt: 'The line graph below shows the number of local and foreign visitors, in thousands, to a restored caravan house between 2017 and 2022. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Visitors to a restored caravan house (thousands), illustrative data', unit: 'thousands of visitors', ymax: 20, x: ['2017', '2018', '2019', '2020', '2021', '2022'], series: [{ name: 'Local visitors', y: [8, 12, 15, 5, 11, 17] }, { name: 'Foreign visitors', y: [6, 9, 11, 3, 8, 13] }] },
      keywords: ['visitors', 'local', 'foreign', 'thousands', 'caravan house', 'restored', 'years', 'fell', 'recovered', 'increase'],
      model: `The line graph shows the number of local and foreign visitors, in thousands, to a restored caravan house between 2017 and 2022. The data are illustrative.

Overall, the number of visitors of both kinds grew until 2019, fell sharply in 2020 and then recovered, and local visitors outnumbered foreign visitors in every year.

The number of local visitors rose from 8 thousand in 2017 to 15 thousand in 2019. It then dropped to only 5 thousand in 2020, before climbing again, to 11 thousand in 2021 and 17 thousand in 2022, which was the highest figure in the period.

The foreign visitors followed a very similar pattern. Their number increased from 6 thousand in 2017 to 11 thousand in 2019, fell to a low of 3 thousand in 2020 and then recovered to 8 thousand and finally 13 thousand.

In total, the number of visitors fell from 26 thousand in 2019 to 8 thousand in 2020, a decrease of about 70%, but by 2022 it had reached 30 thousand, which is higher than before the fall. This suggests that the interest in the restored building was only interrupted for a time, and that it came back as soon as visiting became possible again, with both groups of visitors showing the same pattern.`,
      analysis: ['Task Achievement: две линии с одинаковой формой: рост, падение в 2020 году, восстановление.', 'Вычисления: суммарно 26 тысяч в 2019 году → 8 в 2020 (падение ≈ 69%) → 30 в 2022 году.', 'Cohesion: Overall / It then / before climbing / In total.', 'Lexical Resource: outnumbered, recovered, a low of, the highest figure.']
    },
    heads: {
      list: ['The history of caravan routes', 'Investing in what remains', 'Staying, not passing away', 'Techniques of brick making', 'Verses on perishing and remaining', 'A theme in literature'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: оставаться, а не проходить.' }, { p: 'B', a: 'v', e: 'Абзац B: 55:26–27, 28:88, 20:73 — всё исчезает, остаётся Лик.' }, { p: 'C', a: 'vi', e: 'Абзац C: тема в литературе.' }, { p: 'D', a: 'ii', e: 'Абзац D: вкладываться в то, что остаётся.' }]
    },
    ynng: [
      { q: 'The writer suggests that some things continue to benefit people long after their founder has gone.', a: 'YES', e: 'Абзац D: знание, колодец, воспитанный ребёнок продолжают приносить пользу.' },
      { q: 'The writer says that the Qur\'an teaches that worldly life has no value at all.', a: 'NO', e: 'Абзац C: Коран не учит, что у земной жизни нет ценности.' },
      { q: 'The writer states that the magicians who believed in Moses were punished with death.', a: 'NOT GIVEN', e: 'Наказание магов в тексте не описывается.' }
    ],
    matching: { instruction: 'What does the historian say about each of the following? Choose the correct letter, A–D.', options: ['It was built in the fourteenth century', 'It began in two thousand and eight', 'Traditional bricks and lime mortar were used', 'It receives about thirty thousand visitors a year'], items: [{ q: 'The caravan house', a: 'A', e: 'Караван-сарай построен в четырнадцатом веке.' }, { q: 'The restoration', a: 'B', e: 'Реставрация началась в 2008 году.' }, { q: 'The materials used by the workers', a: 'C', e: 'Использовали традиционный кирпич и известковый раствор.' }, { q: 'The museum today', a: 'D', e: 'Сегодня музей принимает около тридцати тысяч посетителей в год.' }] },
    short: [{ q: 'How long did the restoration take?', a: ['9 years', 'nine years', '9', 'nine'], e: 'Реставрация заняла девять лет.' }, { q: 'How long does the guided tour in English last?', a: ['40 minutes', 'forty minutes', '40', 'forty'], e: 'Экскурсия на английском — сорок минут.' }]
  });

  /* 97 · Al-Warith */
  X(97, {
    task1: {
      prompt: 'The bar chart below shows three outcomes for families that had a clear written will and for families that did not. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Outcomes after an inheritance (%), illustrative data', unit: '% of families', ymax: 100, cats: ['Inheritance dispute within 5 years', 'Heirs satisfied with the arrangement', 'Heirs kept the family home'], series: [{ name: 'Clear written will', v: [8, 86, 71] }, { name: 'No will', v: [34, 47, 45] }] },
      keywords: ['will', 'families', 'inheritance', 'dispute', 'heirs', 'satisfied', 'family home', 'percentage', 'written', 'outcomes'],
      model: `The bar chart compares three outcomes for families that had a clear written will and for families that had no will. The data are illustrative.

Overall, families with a written will had fewer disputes, more satisfied heirs and were more likely to keep the family home.

The most striking difference concerns disputes. Only 8% of the families with a written will had an inheritance dispute within five years, compared with 34% of the families without a will, which is more than four times as many.

Satisfaction was much higher among the heirs in the first group. 86% of them were satisfied with the arrangement, whereas fewer than half of the heirs in the second group, 47%, were satisfied, a difference of 39 percentage points, which was the largest gap in the chart.

The proportion of families that kept the family home was 71% when there was a will and 45% when there was not, a difference of 26 points.

It is noticeable that the differences for disputes and for the family home were identical, at 26 points, although a lower figure is better in the first category and a higher figure in the second.`,
      analysis: ['Task Achievement: три исхода, две группы; обзор — завещание уменьшает споры и повышает удовлетворённость.', 'Вычисления: 34 более чем вчетверо больше 8; разрывы 26, 39 и 26 пунктов.', 'Cohesion: Overall / compared with / whereas / It is noticeable that.', 'Lexical Resource: heirs, inheritance dispute, family home, identical.']
    },
    heads: {
      list: ['A history of wills', 'Thinking about legacy', 'Inheriting and remaining', 'Property taxes', 'Verses on inheritance', 'A prayer of hope and humility'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: наследовать и оставаться.' }, { p: 'B', a: 'v', e: 'Абзац B: 15:23, 28:58, 21:89 о наследовании.' }, { p: 'C', a: 'vi', e: 'Абзац C: мольба с надеждой и смирением.' }, { p: 'D', a: 'ii', e: 'Абзац D: размышление о наследии.' }]
    },
    ynng: [
      { q: 'The writer suggests that a clear will helps families to avoid disputes.', a: 'YES', e: 'Абзац D: ясное завещание помогает избежать споров.' },
      { q: 'The writer says that Zakariyya asked for a successor without accepting that the final inheritance belongs to God.', a: 'NO', e: 'Абзац C: он просил наследника, но признавал, что окончательное наследование — у Бога.' },
      { q: 'The writer states that inheritance laws are identical in all countries.', a: 'NOT GIVEN', e: 'Законы о наследовании разных стран не обсуждаются.' }
    ],
    matching: { instruction: 'What does the librarian say about each of the following? Choose the correct letter, A–D.', options: ['How to interview older relatives', 'How to search official records and draw a family tree', 'Old documents or photographs', 'Twenty pounds for both days'], items: [{ q: 'The first Saturday', a: 'A', e: 'В первую субботу учат опрашивать пожилых родственников.' }, { q: 'The second Saturday', a: 'B', e: 'Во вторую — искать в официальных записях и составлять родословное древо.' }, { q: 'What to bring', a: 'C', e: 'Нужно принести старые документы или фотографии.' }, { q: 'The price', a: 'D', e: 'Двадцать фунтов за оба дня.' }] },
    short: [{ q: 'How many places are still left?', a: ['10', 'ten'], e: 'Осталось десять мест.' }, { q: 'Where should Nurzhan pay?', a: ['at the desk on the first floor', 'the desk on the first floor', 'first floor desk', 'at the desk', 'the desk', 'at the first-floor desk'], e: 'Оплата — на стойке на первом этаже библиотеки.' }]
  });

  /* 98 · Ar-Rashid */
  X(98, {
    task1: {
      prompt: 'The bar chart below shows the percentage of students who were satisfied with an important decision and the percentage who asked at least two people for advice, according to the time they spent thinking about it. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Students by time spent deciding (%), illustrative data', unit: '% of students', ymax: 100, cats: ['Less than 1 day', '1–7 days', 'More than 1 week to 1 month', 'More than 1 month'], series: [{ name: 'Satisfied with the result', v: [48, 61, 72, 85] }, { name: 'Asked at least two people for advice', v: [30, 50, 66, 81] }] },
      keywords: ['students', 'decision', 'satisfied', 'advice', 'time', 'days', 'month', 'percentage', 'increase', 'result'],
      model: `The bar chart shows the percentage of students who were satisfied with an important decision and the percentage who asked at least two people for advice, in four groups defined by the time they spent thinking about the decision. The data are illustrative.

Overall, the longer the students thought about the decision, the more likely they were to be satisfied with the result and to have asked for advice, and both figures rose in every group.

Among the students who decided in less than a day, only 48% were satisfied, and 30% had asked at least two people for advice. For those who took between one and seven days, the figures rose to 61% and 50%. In the group that took more than a week but not more than a month, 72% were satisfied, and 66% had asked for advice.

The highest figures were recorded by the students who spent more than a month on the decision: 85% of them were satisfied with the result, and 81% had asked at least two people for advice.

The gap in satisfaction between the quickest and the slowest group was therefore 37 percentage points, and the gap in asking for advice was 51 points.`,
      analysis: ['Task Achievement: четыре группы по времени, две серии; обзор — чем дольше думали, тем довольнее и чаще советовались.', 'Вычисления: 85 − 48 = 37; 81 − 30 = 51.', 'Cohesion: Overall / Among / For those who / The highest figures / therefore.', 'Lexical Resource: satisfied with the result, asked for advice, in every group, the quickest and the slowest group.']
    },
    heads: {
      list: ['The history of caves', 'Better decisions in practice', 'Maturity and the root', 'Testing intelligence', 'A prayer in a cave and other verses', 'A model of prayer under uncertainty'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: зрелость и корень r-sh-d.' }, { p: 'B', a: 'v', e: 'Абзац B: мольба в пещере и другие аяты — 18:10, 2:186, 49:7.' }, { p: 'C', a: 'vi', e: 'Абзац C: образец мольбы в неопределённости.' }, { p: 'D', a: 'ii', e: 'Абзац D: лучшие решения на практике.' }]
    },
    ynng: [
      { q: 'The writer suggests that young people can be helped to mature by being given manageable responsibilities.', a: 'YES', e: 'Абзац D: родители и учителя дают посильные обязанности.' },
      { q: 'The writer says that maturity stops developing in adulthood.', a: 'NO', e: 'Абзац D: зрелость — процесс, продолжающийся всю жизнь.' },
      { q: 'The writer says that young men decide faster than young women.', a: 'NOT GIVEN', e: 'Различия по полу в скорости решений не обсуждаются.' }
    ],
    matching: { instruction: 'What does each step of the students\' method involve? Choose the correct letter, A–D.', options: ['Collect information', 'List the advantages and disadvantages', 'Consult trusted people', 'Sleep on it for a day or two'], items: [{ q: 'The first step', a: 'A', e: 'Первый шаг — собрать информацию.' }, { q: 'The second step', a: 'B', e: 'Второй — составить список плюсов и минусов.' }, { q: 'The third step', a: 'C', e: 'Третий — посоветоваться с доверенными людьми.' }, { q: 'The fourth step', a: 'D', e: 'Четвёртый — «переспать» с решением день-два.' }] },
    short: [{ q: 'How many students did Timur and Alina survey?', a: ['120', 'one hundred and twenty', 'a hundred and twenty'], e: 'Опросили сто двадцать студентов.' }, { q: 'By what date must the final version be sent to the tutor?', a: ['21 May', 'the twenty-first of May', '21st May', 'May 21', 'twenty-first of May', 'the 21st of May'], e: 'Итоговый вариант — до двадцать первого мая.' }]
  });

  /* 99 · As-Sabur */
  X(99, {
    task1: {
      prompt: 'The line graph below shows the planned length of the longest run and the planned total weekly distance during a sixteen-week half-marathon training programme. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Half-marathon training plan (km), illustrative data', unit: 'km', ymax: 40, x: ['Week 1', 'Week 4', 'Week 5', 'Week 8', 'Week 10', 'Week 14', 'Week 16'], series: [{ name: 'Longest run', y: [4, 5, 5, 9, 12, 18, 10] }, { name: 'Total weekly distance', y: [9, 12, 14, 22, 30, 38, 20] }] },
      keywords: ['training', 'plan', 'longest run', 'weekly distance', 'kilometres', 'weeks', 'half-marathon', 'increase', 'peak', 'reduced'],
      model: `The line graph shows the planned length of the longest run and the planned total weekly distance during a sixteen-week half-marathon training programme. The data are illustrative.

Overall, both figures increase gradually for most of the programme, reach a peak in Week 14 and are then reduced in the final weeks before the race.

At the beginning, in Week 1, the longest run is 4 km and the total weekly distance is 9 km. By Week 4, they have risen to 5 km and 12 km. From Week 5 to Week 10, the long run grows steadily, from 5 km to 12 km, and the total distance rises much faster, from 14 km to 30 km.

The peak is reached in Week 14, when the longest run is 18 km and the total weekly distance is 38 km, which is more than four times the figure for Week 1.

In the last stage, the load is reduced. By Week 16, the longest run falls to 10 km, a reduction of 8 km, and the weekly distance falls to 20 km, which is almost half of the peak figure, so that the runners can rest before the race.`,
      analysis: ['Task Achievement: две линии, пик в 14-й неделе и снижение нагрузки перед стартом.', 'Вычисления: 38 более чем вчетверо больше 9; 18 → 10 (−8); 38 → 20 (почти вдвое).', 'Cohesion: Overall / At the beginning / From ... to ... / In the last stage.', 'Lexical Resource: training programme, gradually, peak, reduced, load.']
    },
    heads: {
      list: ['The history of long-distance running', 'Small steps and pauses', 'Holding firm', 'Doctors and the speed of recovery', 'Verses on patience', 'Three kinds of patience'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: терпение как стойкость.' }, { p: 'B', a: 'v', e: 'Абзац B: 2:153, 39:10, 103:3 о терпении.' }, { p: 'C', a: 'vi', e: 'Абзац C: три вида терпения.' }, { p: 'D', a: 'ii', e: 'Абзац D: малые шаги и паузы.' }]
    },
    ynng: [
      { q: 'The writer suggests that a pause of a few seconds may prevent a decision that would be regretted.', a: 'YES', e: 'Абзац D: пауза в несколько секунд может предотвратить решение, о котором пожалеешь.' },
      { q: 'The writer says that patience is only a feeling and not a skill.', a: 'NO', e: 'Абзац C: терпение — навык, который тренируют со временем.' },
      { q: 'The writer says that patience is more important than intelligence.', a: 'NOT GIVEN', e: 'Сравнение терпения и ума не приводится.' }
    ],
    matching: { instruction: 'What does the coach say about each stage of the plan? Choose the correct letter, A–D.', options: ['Three sessions a week of thirty minutes each', 'The long run grows from five to twelve kilometres on Sundays', 'The longest run reaches eighteen kilometres', 'The distance of the race is twenty-one kilometres'], items: [{ q: 'The first four weeks', a: 'A', e: 'Первые четыре недели — три занятия по тридцать минут.' }, { q: 'Weeks five to ten', a: 'B', e: 'С пятой по десятую недели длинный бег растёт с пяти до двенадцати километров по воскресеньям.' }, { q: 'Weeks eleven to fourteen', a: 'C', e: 'С одиннадцатой по четырнадцатую — длинный бег до восемнадцати километров.' }, { q: 'The race', a: 'D', e: 'Забег — двадцать один километр.' }] },
    short: [{ q: 'On what date is the race?', a: ['20 September', 'the twentieth of September', '20th September', 'September 20', 'twentieth of September', 'the 20th of September'], e: 'Забег — двадцатого сентября.' }, { q: 'At what time does the group meet at the park gate?', a: ['6.30', '6:30', 'half past six', '6.30 am', '6:30 am', '6.30 in the morning'], e: 'Группа собирается в половине седьмого утра.' }]
  });
})();

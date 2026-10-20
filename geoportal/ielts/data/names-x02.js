// Имена 11–20: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 11 · Al-Khaliq */
  X(11, {
    task1: {
      prompt: 'The line graph below shows the average self-reported calm score of three groups of adults over eight weeks, according to how much time they spent outdoors each day. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average calm score (out of 10), illustrative data', unit: 'score out of 10', ymax: 10, x: ['Week 1', 'Week 2', 'Week 4', 'Week 6', 'Week 8'], series: [{ name: 'No outdoor time', y: [5.0, 5.1, 5.0, 5.2, 5.1] }, { name: '15 minutes daily', y: [5.0, 5.6, 6.2, 6.7, 7.0] }, { name: '30 minutes daily', y: [5.0, 5.9, 6.8, 7.4, 7.8] }] },
      keywords: ['calm', 'score', 'outdoors', 'adults', 'weeks', 'minutes', 'daily', 'improved', 'group', 'gain'],
      model: `The line graph shows the average self-reported calm score, out of 10, of three groups of adults over eight weeks, depending on how much time they spent outdoors each day. The data are illustrative.

Overall, calm improved in both groups that spent time outdoors, and the improvement was greater for the group that spent more time there, whereas the group with no outdoor time showed no real change.

All three groups began with the same score of 5.0. The group that went outdoors for 30 minutes a day rose fastest, reaching 5.9 after two weeks and 7.8 by Week 8, a gain of 2.8 points. The group that spent 15 minutes outdoors also improved steadily, but more slowly, and ended at 7.0.

By contrast, the score of the group with no outdoor time hardly moved, fluctuating between 5.0 and 5.2 and finishing at 5.1.

As a result, the difference between the 30-minute group and the group with no outdoor time grew from nothing at the start to 2.7 points at the end of the period.`,
      analysis: ['Task Achievement: единая стартовая точка, три траектории, обзор в начале.', 'Данные: +2.8 у группы 30 минут; колебания 5.0–5.2 у контрольной группы; итоговый разрыв 2.7.', 'Cohesion: Overall / By contrast / As a result.', 'Lexical Resource: self-reported, fluctuating, steadily, gain.']
    },
    heads: {
      list: ['A history of tailoring', 'Attention and responsible habits', 'Measuring and proportion in the root', 'Verses that name the Creator', 'Debates about city planning', 'Creating and making: an important distinction'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень — измерять и придавать пропорцию.' }, { p: 'B', a: 'iv', e: 'Абзац B: 59:24, 13:16, 6:102.' }, { p: 'C', a: 'vi', e: 'Абзац C: создание из ничего и человеческое созидание.' }, { p: 'D', a: 'ii', e: 'Абзац D: внимание, экономия воды, развитие способностей.' }]
    },
    ynng: [
      { q: 'The writer suggests that making something useful and beautiful gives human work a certain dignity.', a: 'YES', e: 'Абзац C: человеческий труд «dignifies», подражая в малой мере планированию и заботе.' },
      { q: 'The writer believes that human beings create the materials they work with.', a: 'NO', e: 'Абзац C: плотник не создаёт дерево; материалы и способности людьми не созданы.' },
      { q: 'The writer states that spending time in nature improves examination results.', a: 'NOT GIVEN', e: 'Связь природы с результатами экзаменов не обсуждается.' }
    ],
    matching: { instruction: 'What can visitors do or see at each stop? Choose the correct letter, A–D.', options: ['Herons and sometimes otters', 'A tree more than a hundred and twenty years old', 'A place to sit for fifteen minutes and observe', 'A section that is closed for repairs'], items: [{ q: 'The lake', a: 'A', e: 'У озера можно увидеть цапель и иногда выдр.' }, { q: 'The old pine forest', a: 'B', e: 'В сосновом лесу — дерево старше ста двадцати лет.' }, { q: 'The bird hide', a: 'C', e: 'В укрытии для наблюдения — пятнадцать минут наблюдения.' }] },
    short: [{ q: 'How long is the walk in kilometres?', a: ['5', 'five', '5 km', 'five kilometres'], e: 'Маршрут — пять километров, а не семь.' }, { q: 'At what time does the tour start?', a: ['9', 'nine', '9:00', '9 am', '9am'], e: 'Экскурсия начинается в девять.' }]
  });

  /* 12 · Al-Bari' */
  X(12, {
    task1: {
      prompt: 'The diagram below shows the stages that learners follow to complete a project in a six-week woodworking course. The process is illustrative. ' + T1,
      chart: { type: 'process', caption: 'Completing a bookshelf in a six-week woodworking course', steps: ['In the first week, the learner plans the project and draws it.', 'The pieces of wood are cut.', 'The pieces are joined together.', 'The surface is finished.', 'Most learners complete the bookshelf by the end of the fifth week.', 'The last week is used for varnishing.', 'The learner takes the finished bookshelf home.'] },
      keywords: ['woodworking', 'learner', 'plans', 'cut', 'joined', 'surface', 'bookshelf', 'varnishing', 'week', 'finally'],
      model: `The diagram illustrates the seven stages of a six-week woodworking course, in which each learner makes a bookshelf. It is an illustrative example.

Overall, the process moves from planning to making and finally to finishing, and the longest part of the course is devoted to the making stage.

At the beginning, in the first week, the learner plans the project and draws it. After that, the making stage starts. First, the pieces of wood are cut, then they are joined together, and the surface is finished. Most learners complete the bookshelf by the end of the fifth week, so these three steps take up the largest part of the course.

The last week is used for varnishing, which is the only step that is reserved for a whole week on its own. Finally, the learner takes the finished bookshelf home.

In summary, the course has a clear logic: one week of design, four weeks of construction and one week of finishing, and each stage depends on the completion of the previous one.`,
      analysis: ['Task Achievement: три стадии (планирование, изготовление, отделка) выделены в обзоре.', 'Process language: first / then / after that / finally; пассив (are cut, are joined).', 'Выбор деталей: временные рамки (неделя 1, к концу недели 5, последняя неделя).', 'Cohesion: In summary; вывод о зависимости этапов.']
    },
    heads: {
      list: ['The history of furniture design', 'From idea to action', 'Three names read as stages of one process', 'A lesson for human projects', 'Why some projects fail for lack of money', 'Freedom from defects'],
      items: [{ p: 'A', a: 'vi', e: 'Абзац A: bara\'a — быть свободным от недостатка.' }, { p: 'B', a: 'iii', e: 'Абзац B: три имени как стадии одного процесса.' }, { p: 'C', a: 'iv', e: 'Абзац C: планирование, выполнение, завершение в любом проекте.' }, { p: 'D', a: 'ii', e: 'Абзац D: от замысла к действию.' }]
    },
    ynng: [
      { q: 'The writer suggests that knowing the three-stage model helps people to see which step needs the most attention.', a: 'YES', e: 'Абзац C: «helps to identify which step needs the most attention».' },
      { q: 'The writer believes that a perfect plan is more valuable than a first step.', a: 'NO', e: 'Абзац D: первый шаг ценнее идеального плана, который откладывается.' },
      { q: 'The writer claims that most people prefer planning to execution.', a: 'NOT GIVEN', e: 'Предпочтения большинства людей не обсуждаются: сказано лишь, что одни сильны в одном этапе, другие в другом.' }
    ],
    matching: { instruction: 'What does the clerk say about each part of the course? Choose the correct letter, A–D.', options: ['Plan and draw the project', 'Cut, join and finish the pieces', 'Varnish the bookshelf', 'Bring protective glasses'], items: [{ q: 'The first week', a: 'A', e: 'В первую неделю — планирование и чертёж.' }, { q: 'The weeks between planning and the last week', a: 'B', e: 'Затем — резка, соединение и отделка поверхности.' }, { q: 'The last week', a: 'C', e: 'Последняя неделя отведена для покрытия лаком.' }] },
    short: [{ q: 'How much does the course cost?', a: ['180', 'one hundred and eighty', '£180', '180 pounds'], e: 'Курс стоит 180 фунтов, включая дерево.' }, { q: 'What must students bring with them?', a: ['protective glasses', 'glasses', 'safety glasses'], e: 'Нужно принести защитные очки.' }]
  });

  /* 13 · Al-Musawwir */
  X(13, {
    task1: {
      prompt: 'The table below shows the number of portraits, the average time spent on each portrait and the number of participants for four portrait media in a school project. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Portrait project by medium, illustrative data', head: ['Medium', 'Portraits', 'Average hours per portrait', 'Participants'], rows: [['Charcoal drawing', '8', '5.5', '12'], ['Photography', '14', '2.0', '18'], ['Oil painting', '5', '11.0', '6'], ['Digital art', '9', '4.0', '10']] },
      keywords: ['portraits', 'medium', 'photography', 'oil painting', 'charcoal', 'digital', 'hours', 'participants', 'average', 'project'],
      model: `The table compares four media used in a school portrait project in terms of the number of portraits, the average time spent on each one and the number of participants. The data are illustrative.

Overall, photography was the most popular medium and the quickest, whereas oil painting attracted the fewest people and demanded by far the most time.

Photography accounted for the largest number of portraits, 14, and the largest number of participants, 18, while each portrait took an average of only 2.0 hours. By contrast, oil painting produced just 5 portraits, with only 6 participants, but each one needed 11.0 hours, which is more than five times as long as a photograph.

The other two media occupied a middle position. Charcoal drawing resulted in 8 portraits by 12 participants, at 5.5 hours each, and digital art in 9 portraits by 10 participants, at 4.0 hours each.

In general, the more time a medium required, the fewer portraits were completed, although digital art produced slightly more portraits than charcoal in less time.`,
      analysis: ['Task Achievement: четыре категории сопоставлены по трём показателям, обзор в начале.', 'Вычисление: 11.0 против 2.0 — «more than five times as long».', 'Cohesion: whereas / By contrast / In general; группировка «крайние» и «средние» значения.', 'Lexical Resource: accounted for, demanded, occupied a middle position.']
    },
    heads: {
      list: ['The history of photography', 'Respect in conduct and in detail', 'The root and a related word', 'Why differences deserve respect', 'How to choose a camera', 'The stage at which a kind becomes an individual'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень s-w-r и слово surah.' }, { p: 'B', a: 'vi', e: 'Абзац B: Мусаввир — переход от вида к индивидуальности.' }, { p: 'C', a: 'iv', e: 'Абзац C: различия — черты замысла, а не повод для насмешек.' }, { p: 'D', a: 'ii', e: 'Абзац D: уважение в поведении и внимание к деталям.' }]
    },
    ynng: [
      { q: 'The writer implies that mocking someone\'s appearance or accent is disrespectful.', a: 'YES', e: 'Абзац C: насмешка над внешностью или акцентом — «not only unkind but also disrespectful».' },
      { q: 'The writer believes that differences between faces are accidents to be ridiculed.', a: 'NO', e: 'Абзац C: различия — «not accidents to be ridiculed but features of a design».' },
      { q: 'The writer says that identical twins have identical fingerprints.', a: 'NOT GIVEN', e: 'Близнецы в тексте не упоминаются.' }
    ],
    matching: { instruction: 'What does each student plan to do? Choose the correct letter, A–D.', options: ['Photograph family members of different generations', 'Make charcoal portraits of neighbours', 'Write about respect when portraying people', 'Write a reflection of about two hundred words'], items: [{ q: 'Aigul\'s project', a: 'A', e: 'Айгуль будет фотографировать родных разных поколений.' }, { q: 'Marat\'s project', a: 'B', e: 'Марат делает угольные портреты соседей.' }, { q: 'The idea Aigul wants to discuss', a: 'C', e: 'Айгуль хочет говорить об уважении к тем, кого рисуют или фотографируют.' }] },
    short: [{ q: 'What size should each portrait be?', a: ['A3'], e: 'Формат A3, а не A2.' }, { q: 'How many words should the reflection have?', a: ['200', 'two hundred', 'about 200', 'about two hundred'], e: 'Размышление — около двухсот слов.' }]
  });

  /* 14 · Al-Ghaffar */
  X(14, {
    task1: {
      prompt: 'The bar chart below shows the average stress score of three groups of adults at the start of a study, after four weeks and after eight weeks, depending on their approach to a past conflict. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Average stress score (out of 10), illustrative data', unit: 'score out of 10', ymax: 10, cats: ['Start', 'After 4 weeks', 'After 8 weeks'], series: [{ name: 'Forgiveness exercises', v: [6.8, 5.2, 4.1] }, { name: 'Discussion only', v: [6.7, 6.1, 5.6] }, { name: 'No activity', v: [6.9, 6.8, 6.7] }] },
      keywords: ['stress', 'score', 'forgiveness', 'exercises', 'discussion', 'activity', 'weeks', 'decreased', 'group', 'conflict'],
      model: `The bar chart compares the average stress scores, out of 10, of three groups of adults at three points in a study. The data are illustrative.

Overall, stress fell in the two groups that did something about the conflict, and it fell most in the group that practised forgiveness exercises, while it hardly changed in the group that did nothing.

At the start, the three groups had very similar scores, between 6.7 and 6.9. By the end of the eighth week, the group using forgiveness exercises had dropped from 6.8 to 4.1, a decrease of 2.7 points. The group that only discussed the conflict showed a smaller fall, from 6.7 to 5.6, which is a decrease of 1.1.

By contrast, the group with no activity remained almost unchanged, moving from 6.9 to 6.7, a decline of just 0.2.

It is also noticeable that the improvement in the forgiveness group was steady: it fell by 1.6 points in the first four weeks and by a further 1.1 in the next four.`,
      analysis: ['Task Achievement: три группы, три момента времени; обзор показывает порядок эффективности.', 'Вычисления: −2.7, −1.1, −0.2; промежуточный шаг (−1.6 и −1.1).', 'Cohesion: Overall / By contrast / It is also noticeable that.', 'Lexical Resource: a decrease of, remained almost unchanged, steady.']
    },
    heads: {
      list: ['Rules for choosing a helmet', 'Habits of apology and letting go', 'A word for a helmet and the idea of covering', 'A history of the people of Nuh', 'Contexts in which the name appears', 'Why strength and forgiveness belong together'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: mighfar — шлем, прощение как покров.' }, { p: 'B', a: 'v', e: 'Абзац B: 20:82, 71:10, 38:66.' }, { p: 'C', a: 'vi', e: 'Абзац C: сила и прощение связаны.' }, { p: 'D', a: 'ii', e: 'Абзац D: привычки извинения и отпускания обиды.' }]
    },
    ynng: [
      { q: 'The writer suggests that forgiveness does not mean pretending that nothing happened.', a: 'YES', e: 'Абзац C: «which is not the same as pretending that nothing happened».' },
      { q: 'The writer believes that weak people forgive because they choose to.', a: 'NO', e: 'Абзац C: слабые часто прощают, потому что ничего другого сделать не могут; сильные — выбирают.' },
      { q: 'The writer recommends that apologies should always be written and not spoken.', a: 'NOT GIVEN', e: 'Форма извинения (письменная или устная) не обсуждается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['It is a decision to let go of resentment', 'It names the mistake, takes responsibility and explains how it will be corrected', 'It is usually best made within about a day', 'It means forgetting what happened'], items: [{ q: 'Forgiveness', a: 'A', e: 'Прощение — решение отпустить обиду; это не забывание.' }, { q: 'An effective apology', a: 'B', e: 'Эффективное извинение называет ошибку, берёт ответственность и объясняет исправление.' }, { q: 'The best timing for an apology', a: 'C', e: 'Лучшее время — обычно в течение суток.' }] },
    short: [{ q: 'How long should the nightly review take?', a: ['2 minutes', 'two minutes', '2', 'two'], e: 'Вечерний обзор занимает две минуты.' }, { q: 'On which day is the homework due?', a: ['Friday'], e: 'Домашнее задание — до пятницы.' }]
  });

  /* 15 · Al-Qahhar */
  X(15, {
    task1: {
      prompt: 'The bar chart below shows the percentage of households that were prepared for natural disasters in three ways, in a region with a training campaign and in a region without one. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Households prepared for natural disasters (%), illustrative data', unit: '% of households', ymax: 100, cats: ['Emergency kit', 'Family evacuation plan', 'Insurance'], series: [{ name: 'Region with a training campaign', v: [64, 58, 71] }, { name: 'Region without a campaign', v: [23, 19, 52] }] },
      keywords: ['households', 'prepared', 'disasters', 'emergency kit', 'evacuation plan', 'insurance', 'campaign', 'region', 'percentage', 'training'],
      model: `The bar chart compares the percentage of households in two regions that were prepared for natural disasters in three ways: an emergency kit, a family evacuation plan and insurance. The data are illustrative.

Overall, households were much better prepared in the region with a training campaign, and the difference was greatest for the two practical measures, the kit and the plan.

In the region with the campaign, 64% of households had an emergency kit and 58% had an evacuation plan, while 71% had insurance. In the region without the campaign, the corresponding figures were only 23%, 19% and 52%.

The gap was the widest for the emergency kit, at 41 percentage points, followed by the evacuation plan, at 39 points. Insurance showed the smallest difference, just 19 points, probably because it is arranged through companies and not through training.

It is noticeable that, in both regions, insurance was the most common form of preparation, whereas the evacuation plan was the least common, at 58% and 19% respectively.`,
      analysis: ['Task Achievement: две группы и три показателя, обзор указывает на наибольшее различие.', 'Вычисления: разрыв 41, 39 и 19 пунктов.', 'Cohesion: Overall / while / whereas / respectively.', 'Lexical Resource: corresponding figures, the widest gap, evacuation plan; осторожное «probably» при объяснении.']
    },
    heads: {
      list: ['The architecture of ancient prisons', 'Reducing fear and mastering impulses', 'A comparison of the salaries of rulers', 'Comfort for those who feel powerless', 'A question asked in prison', 'Meaning of the root and intensity of the form'],
      items: [{ p: 'A', a: 'vi', e: 'Абзац A: корень q-h-r, форма выражает высшую интенсивность.' }, { p: 'B', a: 'v', e: 'Абзац B: вопрос Юсуфа в тюрьме.' }, { p: 'C', a: 'iv', e: 'Абзац C: утешение для беспомощных.' }, { p: 'D', a: 'ii', e: 'Абзац D: меньше страха, власть над порывами.' }]
    },
    ynng: [
      { q: 'The writer implies that the name can console people who feel helpless in front of powerful institutions.', a: 'YES', e: 'Абзац C: имя утешает тех, кто чувствует себя беспомощным.' },
      { q: 'The writer encourages people to try to dominate others.', a: 'NO', e: 'Абзац D: вместо этого человек может управлять собственными порывами.' },
      { q: 'The writer states that Yusuf was imprisoned unjustly.', a: 'NOT GIVEN', e: 'Справедливость заключения Юсуфа в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does each area of the museum show? Choose the correct letter, A–D.', options: ['A model of moving plates in the Earth\'s crust', 'A small eruption every half hour', 'The formation of a tornado', 'A film about how communities protect themselves'], items: [{ q: 'The Earthquake Hall', a: 'A', e: 'Зал землетрясений: модель движения плит.' }, { q: 'The Volcano Room', a: 'B', e: 'Зал вулкана: небольшое извержение каждые полчаса.' }, { q: 'The Storm Chamber', a: 'C', e: 'Штормовая камера: формирование торнадо.' }] },
    short: [{ q: 'How long is the film?', a: ['12 minutes', 'twelve minutes', '12', 'twelve'], e: 'Фильм длится двенадцать минут.' }, { q: 'On which floor is the cafe?', a: ['first', '1st', 'first floor', 'the first floor'], e: 'Кафе на первом этаже.' }]
  });

  /* 16 · Al-Wahhab */
  X(16, {
    task1: {
      prompt: 'The table below shows the donations received by a charity in each quarter of one year, in three categories. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Donations received by a charity, by quarter, illustrative data', head: ['Category', 'Q1', 'Q2', 'Q3', 'Q4'], rows: [['Books (items)', '320', '410', '380', '590'], ['Online gifts (£)', '1200', '1450', '1300', '2100'], ['Bank transfers (£)', '800', '750', '900', '1150']] },
      keywords: ['donations', 'charity', 'quarter', 'books', 'online gifts', 'bank transfers', 'highest', 'rose', 'fell', 'fourth quarter'],
      model: `The table shows the donations that a charity received in three categories in each quarter of one year. The data are illustrative.

Overall, the fourth quarter was the strongest for all three categories, and the final figures were clearly higher than the starting ones.

Books began the year at 320 items, rose to 410 in the second quarter, fell slightly to 380 in the third, and then jumped to 590 in the last quarter, an increase of 270 items over the year. Online gifts followed a very similar pattern: they went up from £1200 to £1450, dipped to £1300 and then reached a peak of £2100.

Bank transfers showed a different course. They fell from £800 to £750 in the second quarter, which was the only decline of this kind, and then recovered to £900 and £1150.

In total, online gifts were the largest category in every quarter, and by the fourth quarter they were nearly twice as large as bank transfers, at £2100 compared with £1150. It is also worth noting that the growth in the last quarter was sharp in every category, which suggests that donations are strongly seasonal.`,
      analysis: ['Task Achievement: три категории, общий обзор (сильнейший Q4), особенность банковских переводов.', 'Данные: +270 книг; Q4 — пик во всех категориях; почти в два раза (2100 / 1150).', 'Cohesion: Overall / followed a very similar pattern / showed a different course / In total.', 'Lexical Resource: dipped, peak, recovered, jumped; единицы измерения (items, £).']
    },
    heads: {
      list: ['The economics of charity auctions', 'Giving, receiving and a short prayer', 'A pure gift compared with a sale', 'Wills and inheritance law', 'Gift and trade in relationships', 'Two well-known supplications'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: hiba — чистый дар, в отличие от продажи.' }, { p: 'B', a: 'vi', e: 'Абзац B: две мольбы — 3:8 и 38:35.' }, { p: 'C', a: 'v', e: 'Абзац C: дар и обмен в человеческих отношениях.' }, { p: 'D', a: 'ii', e: 'Абзац D: давать, принимать и короткая молитва.' }]
    },
    ynng: [
      { q: 'The writer suggests that being a gracious receiver is as important as being a giver.', a: 'YES', e: 'Абзац D: «equally important to be a gracious receiver».' },
      { q: 'The writer believes that a pure gift creates a debt that must be repaid.', a: 'NO', e: 'Абзац C: чистый дар разрывает схему обмена — никто ничего не должен.' },
      { q: 'The writer claims that Sulayman\'s kingdom was the largest in history.', a: 'NOT GIVEN', e: 'Размер царства Сулеймана не обсуждается; упомянута лишь его мольба.' }
    ],
    matching: { instruction: 'What does the operator say about each of the following? Choose the correct letter, A–D.', options: ['New or lightly used children\'s books are accepted', 'The office is open from nine until one', 'The minimum for the school programme is ten pounds', 'Donors\' names are always published'], items: [{ q: 'Books', a: 'A', e: 'Принимают новые или слегка использованные детские книги.' }, { q: 'Saturday opening', a: 'B', e: 'По субботам офис открыт с девяти до часу.' }, { q: 'Donations for the school programme', a: 'C', e: 'Минимум для школьной программы — десять фунтов.' }] },
    short: [{ q: 'How much money will Sanzhar give?', a: ['50', 'fifty', '£50', 'fifty pounds', '50 pounds'], e: 'Он отдаст пятьдесят фунтов, а не двадцать.' }, { q: 'In which languages are the books accepted?', a: ['Kazakh and Russian', 'Russian and Kazakh'], e: 'Принимают книги на казахском и русском.' }]
  });

  /* 17 · Ar-Razzaq */
  X(17, {
    task1: {
      prompt: 'The table below shows the percentage of students in each work-hours group, together with their average grade and reported stress. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Students by weekly hours of part-time work, illustrative data', head: ['Weekly work hours', 'Students (%)', 'Average grade (out of 100)', 'Stress (out of 10)'], rows: [['0', '28', '74', '4.1'], ['1–10', '31', '76', '4.4'], ['11–15', '22', '75', '5.0'], ['16–25', '13', '69', '6.2'], ['26 or more', '6', '63', '7.5']] },
      keywords: ['students', 'work hours', 'part-time', 'average grade', 'stress', 'percentage', 'weekly', 'highest', 'lowest', 'increased'],
      model: `The table shows the proportion of students in five work-hours groups, together with their average grade and their reported stress level. The data are illustrative.

Overall, light work was not associated with lower grades, but heavy work was linked to lower grades and much higher stress.

The largest group, 31% of students, worked between one and ten hours a week, and this group also had the highest average grade, 76 out of 100. Students who did not work at all made up 28% of the total and averaged 74, while the group working 11 to 15 hours, with 22%, averaged 75.

By contrast, the grades of the students who worked more than 15 hours fell noticeably. Those working 16 to 25 hours scored 69, and the smallest group, only 6% of students, who worked 26 hours or more, had the lowest average grade, 63.

Stress followed the opposite trend. It rose steadily from 4.1 among non-working students to 7.5 in the heaviest group, an increase of 3.4 points. In other words, each step up in working hours brought a higher level of stress, and the stress score rose by 1.2 points between the groups working 11 to 15 hours and 16 to 25 hours, which is also where the average grade began to fall.`,
      analysis: ['Task Achievement: таблица с тремя показателями, обзор о связи нагрузки с оценками и стрессом.', 'Выбор данных: крайние значения (76 и 63; 4.1 и 7.5), доли групп.', 'Cohesion: By contrast / Stress followed the opposite trend.', 'Lexical Resource: associated with, linked to, noticeably, made up.']
    },
    heads: {
      list: ['The history of banking', 'A verse that joins provision to strength', 'Why salaries differ between countries', 'The meaning of provision', 'Provision that is wider than money', 'Balancing effort and trust'],
      items: [{ p: 'A', a: 'iv', e: 'Абзац A: значение rizq и постоянство формы.' }, { p: 'B', a: 'ii', e: 'Абзац B: 51:58 — удел и сила.' }, { p: 'C', a: 'v', e: 'Абзац C: удел шире денег.' }, { p: 'D', a: 'vi', e: 'Абзац D: усилие и доверие.' }]
    },
    ynng: [
      { q: 'The writer suggests that gratitude becomes realistic when a person counts forms of provision other than income.', a: 'YES', e: 'Абзац C: при широком взгляде благодарность становится реалистичной, а не вымученной.' },
      { q: 'The writer recommends that a person should stop looking for work and wait for provision.', a: 'NO', e: 'Абзац D: имя не призывает к пассивности.' },
      { q: 'The writer states that most people underestimate their savings.', a: 'NOT GIVEN', e: 'Сбережения людей в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What does each speaker say? Choose the correct letter, A–D.', options: ['Spends about £350 a month, including transport', 'Earns about £150 in a bookshop', 'Worries that a job might affect studies', 'Values the feeling of independence'], items: [{ q: 'Nurzhan\'s monthly spending', a: 'A', e: 'Нуржан тратит 350 фунтов, включая транспорт.' }, { q: 'Nurzhan\'s income from work', a: 'B', e: 'Он зарабатывает около 150 фунтов в книжном магазине.' }, { q: 'Alina\'s concern', a: 'C', e: 'Алина опасается, что работа повлияет на учёбу.' }, { q: 'What Nurzhan likes best about working', a: 'D', e: 'Нуржану нравится ощущение самостоятельности.' }] },
    short: [{ q: 'How many hours a week does Nurzhan work?', a: ['10', 'ten', '10 hours', 'ten hours'], e: 'Десять часов в неделю.' }, { q: 'For how long should they record their spending?', a: ['one month', 'a month', '1 month'], e: 'В течение одного месяца.' }]
  });

  /* 18 · Al-Fattah */
  X(18, {
    task1: {
      prompt: 'The line graph below shows the percentage of young people who completed secondary school between 2018 and 2023 in three groups of districts with different kinds of support. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Young people completing secondary school (%), illustrative data', unit: '% completing', ymax: 100, x: ['2018', '2019', '2020', '2021', '2022', '2023'], series: [{ name: 'Mentoring and online access', y: [61, 64, 69, 74, 79, 83] }, { name: 'Online access only', y: [60, 62, 65, 68, 70, 72] }, { name: 'Neither', y: [61, 61, 62, 62, 63, 63] }] },
      keywords: ['secondary school', 'completion', 'mentoring', 'online access', 'districts', 'percentage', 'rose', 'years', 'gap', 'support'],
      model: `The line graph shows the percentage of young people who completed secondary school between 2018 and 2023 in three groups of districts. The data are illustrative.

Overall, completion rose in all three groups, but the increase was far larger in the districts that offered both mentoring and online access.

In 2018, the figures were almost identical, at between 60% and 61%. In the districts with mentoring and online access, completion climbed every year and reached 83% in 2023, a rise of 22 percentage points. The districts with online access only also improved steadily, but to a lesser extent, ending at 72%.

By contrast, in the districts with neither form of support, the figure barely changed, rising by only 2 points, from 61% to 63%.

As a result, the gap between the best-supported and the unsupported districts widened from nothing in 2018 to 20 percentage points by the end of the period. It is worth noting that the districts with both kinds of support were the only ones in which completion improved by more than 20 points, and that their completion rate rose by exactly 5 points in each of three consecutive years, from 2019 to 2022.`,
      analysis: ['Task Achievement: три группы, одинаковая точка старта, расходящиеся траектории.', 'Данные: +22 пункта; разрыв 20 пунктов к 2023 году.', 'Cohesion: By contrast / As a result; «to a lesser extent».', 'Lexical Resource: almost identical, barely changed, widened, climbed.']
    },
    heads: {
      list: ['The architecture of doors', 'Opening doors for others', 'Two meanings: to open and to judge', 'A name paired with knowledge', 'Rules of court procedure', 'Opportunity and personal effort'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два значения — открывать и судить.' }, { p: 'B', a: 'iv', e: 'Абзац B: 34:26, Аль-Фаттах в паре с Аль-Алим.' }, { p: 'C', a: 'vi', e: 'Абзац C: возможности и личная инициатива.' }, { p: 'D', a: 'ii', e: 'Абзац D: открывать двери другим.' }]
    },
    ynng: [
      { q: 'The writer suggests that a good decision requires full knowledge.', a: 'YES', e: 'Абзац B: судья, не знающий фактов, не может справедливо открыть дело.' },
      { q: 'The writer believes that people should wait passively for opportunities to arrive.', a: 'NO', e: 'Абзац C: дверь нужно подойти и толкнуть, инициатива необходима.' },
      { q: 'The writer states that a scholarship is the most reliable kind of open door.', a: 'NOT GIVEN', e: 'Надёжность разных «дверей» не сравнивается.' }
    ],
    matching: { instruction: 'What can each group do to open doors? Choose the correct letter, A–D.', options: ['Fund scholarships and build schools in remote areas', 'Open their lectures online, free of charge', 'Act as mentors for younger students', 'Wait for opportunities to appear'], items: [{ q: 'Governments', a: 'A', e: 'Правительства финансируют стипендии и строят школы в отдалённых районах.' }, { q: 'Universities', a: 'B', e: 'Университеты открывают лекции онлайн бесплатно.' }, { q: 'Individuals', a: 'C', e: 'Отдельные люди могут быть наставниками.' }] },
    short: [{ q: 'How far must a child in some regions walk to the nearest secondary school?', a: ['more than five kilometres', 'more than 5 kilometres', 'five kilometres', '5 kilometres', '5 km'], e: 'Больше пяти километров.' }, { q: 'On which page is the article for next time?', a: ['24', 'twenty-four', 'page 24', 'page twenty-four'], e: 'Статья на странице двадцать четыре.' }]
  });

  /* 19 · Al-Alim */
  X(19, {
    task1: {
      prompt: 'The diagram below shows a daily study routine that includes sharing what has been learned. The routine is illustrative. ' + T1,
      chart: { type: 'process', caption: 'A twenty-minute daily study routine', steps: ['The learner checks his intention before starting.', 'He studies for twenty minutes.', 'He writes down the main points.', 'He explains what he has learned to another person.', 'He notes the points he could not explain.', 'He admits "I do not know" and looks the answers up.', 'He reviews the notes the next day.'] },
      keywords: ['routine', 'learner', 'intention', 'studies', 'twenty minutes', 'explains', 'notes', 'review', 'finally', 'next day'],
      model: `The diagram illustrates a daily study routine that consists of seven steps and combines learning with sharing what has been learned. It is an illustrative example.

Overall, the routine has three parts: a short preparation, a period of study and explanation, and a stage of correction and review.

First, the learner checks his intention before he starts. Then he studies for twenty minutes, which is the only stage with a fixed duration, and writes down the main points. After that, the central part of the routine begins: he explains what he has learned to another person.

The next steps are designed to correct gaps in understanding. The learner notes the points that he could not explain, and he admits that he does not know them and looks up the answers.

Finally, on the following day he reviews his notes. In this way, the routine starts with a question about motive, and it ends with a repetition that fixes the knowledge in the memory.`,
      analysis: ['Task Achievement: три части (подготовка, учёба и объяснение, исправление и повторение).', 'Process language: first / then / after that / the next steps / finally.', 'Выбор деталей: единственный шаг с фиксированной длительностью и шаг «на следующий день».', 'Cohesion: In this way; вывод о начале и конце цикла.']
    },
    heads: {
      list: ['How encyclopaedias are published', 'Study with modesty and teaching', 'A flag, a sign and completeness', 'The history of flags in Arabia', 'Names joined in moments of humility', 'Knowing the intention behind actions'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: alam — флаг и знак; полнота формы.' }, { p: 'B', a: 'v', e: 'Абзац B: 2:32 и 2:127 — имя в моменты смирения.' }, { p: 'C', a: 'vi', e: 'Абзац C: знание намерений и искренность.' }, { p: 'D', a: 'ii', e: 'Абзац D: скромность и обучение других.' }]
    },
    ynng: [
      { q: 'The writer recommends that people should check their intention before important tasks.', a: 'YES', e: 'Абзац C: многие авторы рекомендуют регулярно проверять намерение.' },
      { q: 'The writer suggests that outward appearances matter more than inner motives.', a: 'NO', e: 'Абзац C: внешнее значит меньше, чем внутренние мотивы.' },
      { q: 'The writer claims that Ibrahim built the foundations of the Kaaba without help.', a: 'NOT GIVEN', e: 'В тексте сказано, что работали Ибрахим и Исмаил вместе; вопрос о «без помощи» не обсуждается.' }
    ],
    matching: { instruction: 'What can visitors see in each room? Choose the correct letter, A–D.', options: ['Clay tablets more than four thousand years old', 'Manuscripts copied by hand', 'Objects showing the invention of printing', 'A digital library and a question game'], items: [{ q: 'The first room', a: 'A', e: 'Первая комната: глиняные таблички старше четырёх тысяч лет.' }, { q: 'The second room', a: 'B', e: 'Вторая комната: рукописи, переписанные вручную.' }, { q: 'The third room', a: 'C', e: 'Третья комната: изобретение книгопечатания.' }, { q: 'The last room', a: 'D', e: 'Последняя комната: цифровая библиотека и игра.' }] },
    short: [{ q: 'How much does the guidebook cost?', a: ['3', 'three', '£3', 'three pounds', '3 pounds'], e: 'Путеводитель стоит три фунта.' }, { q: 'How many questions are there in the game?', a: ['10', 'ten'], e: 'В игре десять вопросов.' }]
  });

  /* 20 · Al-Qabid */
  X(20, {
    task1: {
      prompt: 'The bar chart below shows how a typical household divided its spending between five categories in a normal month and in a tight month. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Household spending by category (% of income), illustrative data', unit: '% of income', ymax: 60, cats: ['Rent and bills', 'Food', 'Transport', 'Leisure', 'Savings'], series: [{ name: 'Normal month', v: [38, 25, 10, 17, 10] }, { name: 'Tight month', v: [46, 29, 11, 8, 6] }] },
      keywords: ['household', 'spending', 'categories', 'rent', 'food', 'transport', 'leisure', 'savings', 'tight month', 'percentage'],
      model: `The bar chart compares how a typical household divided its spending between five categories in a normal month and in a tight month. The data are illustrative.

Overall, in the tight month the household spent a larger share on essentials and a smaller share on leisure and savings, which suggests that these two categories were cut first.

Rent and bills were the largest category in both months, rising from 38% in the normal month to 46% in the tight month. Food also increased, from 25% to 29%, while the share spent on transport stayed almost the same, at 10% and 11%.

By contrast, leisure showed the sharpest fall, from 17% to 8%, which means that it was reduced by more than half. Savings declined as well, from 10% to 6%.

In total, the three essential categories made up 73% of spending in the normal month, but this figure grew to 86% in the tight month, leaving very little for anything else. Leisure and savings together fell from 27% to 14% of spending, so the household roughly halved the money that it could spend on non-essential things.`,
      analysis: ['Task Achievement: пять категорий в двух режимах, обзор «сначала сокращаются досуг и сбережения».', 'Вычисления: 38+25+10 = 73%; 46+29+11 = 86%; досуг сократился более чем вдвое.', 'Cohesion: Overall / By contrast / In total; осторожное «suggests».', 'Lexical Resource: essentials, share, the sharpest fall, made up.']
    },
    heads: {
      list: ['The history of banks', 'Acting wisely in tight periods', 'A verse about a goodly loan', 'Why interest rates change', 'Restriction is not necessarily a punishment', 'A verb behind the name and its partner'],
      items: [{ p: 'A', a: 'vi', e: 'Абзац A: имя выводится из глагола, рядом — Аль-Басит.' }, { p: 'B', a: 'iii', e: 'Абзац B: 2:245 — аят о хорошем займе.' }, { p: 'C', a: 'v', e: 'Абзац C: ограничение необязательно наказание.' }, { p: 'D', a: 'ii', e: 'Абзац D: разумные действия в трудные периоды.' }]
    },
    ynng: [
      { q: 'The writer suggests that difficulty and ease alternate in human life.', a: 'YES', e: 'Абзац C: пара Аль-Кабид и Аль-Басит предполагает чередование трудного и лёгкого.' },
      { q: 'The writer claims that restriction is always a punishment.', a: 'NO', e: 'Абзац C: ограничение — «not necessarily a punishment».' },
      { q: 'The writer recommends taking a bank loan in order to cope with a tight period.', a: 'NOT GIVEN', e: 'Банковские займы в тексте не упоминаются.' }
    ],
    matching: { instruction: 'What does the adviser say about each of the following? Choose the correct letter, A–D.', options: ['It lasts forty minutes', 'It takes place in Room six', 'It is a simple written plan with a saving goal', 'It costs twenty pounds'], items: [{ q: 'The length of the session', a: 'A', e: 'Сессия длится сорок минут.' }, { q: 'The location of the session', a: 'B', e: 'Кабинет номер шесть на первом этаже.' }, { q: 'What Yerlan will receive afterwards', a: 'C', e: 'Он получит простой письменный план с ежемесячной целью накоплений.' }] },
    short: [{ q: 'On which date is the appointment?', a: ['22', '22nd', 'twenty-second', 'the twenty-second', 'the 22nd'], e: 'Приём назначен на двадцать второе, в десять часов.' }, { q: 'How many bank statements should Yerlan bring?', a: ['3', 'three'], e: 'Нужно принести три последние выписки.' }]
  });
})();

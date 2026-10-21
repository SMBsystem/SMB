// Имена 31–40: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 31 · Al-Khabir */
  X(31, {
    task1: {
      prompt: 'The bar chart below shows the percentage of statements that were verified as accurate and the percentage that included a source and evidence, for five kinds of information source used by students. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Statements by type of source (%), illustrative data', unit: '% of statements', ymax: 100, cats: ['Expert interview', 'Peer-reviewed article', 'Official website', 'Social media post', 'Unsigned web page'], series: [{ name: 'Verified as accurate', v: [94, 91, 82, 38, 45] }, { name: 'Included source and evidence', v: [88, 93, 70, 12, 20] }] },
      keywords: ['statements', 'sources', 'accurate', 'verified', 'evidence', 'expert', 'peer-reviewed', 'social media', 'percentage', 'reliable'],
      model: `The bar chart compares five kinds of information source in terms of the percentage of statements that were verified as accurate and the percentage that included a source and evidence. The data are illustrative.

Overall, the three sources associated with expertise or official responsibility were far more reliable than social media and unsigned web pages, which scored poorly on both measures.

Expert interviews produced the highest accuracy, at 94%, followed closely by peer-reviewed articles at 91% and official websites at 82%. In contrast, only 38% of social media statements and 45% of those on unsigned web pages were accurate, a gap of 56 percentage points between the best and the worst source.

The pattern for sources and evidence was similar. Peer-reviewed articles scored highest, at 93%, and this was the only category in which evidence was more common than verified accuracy. Expert interviews followed with 88%, and official websites with 70%.

By contrast, just 12% of social media statements and 20% of unsigned web pages gave any source, which suggests that missing evidence was a major reason for their low accuracy.`,
      analysis: ['Task Achievement: пять источников, две серии; обзор делит источники на надёжные и ненадёжные.', 'Вычисление: 94 − 38 = 56; единственный случай, где доказательства встречаются чаще точности (93 > 91).', 'Cohesion: Overall / In contrast / By contrast; осторожный вывод («suggests»).', 'Lexical Resource: verified, peer-reviewed, followed closely, evidence.']
    },
    heads: {
      list: ['A history of journalism', 'Humility, expertise and sincerity', 'Two names and their different emphases', 'How rain is formed', 'Roots and a neighbouring name', 'A verse about peoples and tribes'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: корень kh-b-r и соседнее имя Al-Latif.' }, { p: 'B', a: 'iii', e: 'Абзац B: Аль-Алим — полнота, Аль-Хабир — глубина.' }, { p: 'C', a: 'vi', e: 'Абзац C: 49:13 — народы и племена.' }, { p: 'D', a: 'ii', e: 'Абзац D: смирение, консультация эксперта, искренность.' }]
    },
    ynng: [
      { q: 'The writer suggests that it is wise to consult a qualified expert when making important decisions about health, money or law.', a: 'YES', e: 'Абзац D: при важных решениях разумно обратиться к специалисту.' },
      { q: 'The writer encourages people to form conclusions about others on the basis of clothes or accent.', a: 'NO', e: 'Абзац D: человек может избегать суждений по одежде, акценту, происхождению.' },
      { q: 'The writer claims that experts are never wrong.', a: 'NOT GIVEN', e: 'Непогрешимость экспертов не обсуждается; говорится лишь о проверке источников.' }
    ],
    matching: { instruction: 'What does the supervisor or a student say about each of the following? Choose the correct letter, A–D.', options: ['A hydrologist with twenty years of experience', 'A farmer with practical experience', 'Ten open questions prepared in advance', 'A report of about two thousand words'], items: [{ q: 'Kamila\'s interviewee', a: 'A', e: 'Камила будет интервьюировать гидролога с двадцатилетним опытом.' }, { q: 'Dias\'s interviewee', a: 'B', e: 'Диас хочет поговорить с фермером.' }, { q: 'The preparation for each interview', a: 'C', e: 'Нужно подготовить десять открытых вопросов заранее.' }, { q: 'The final report', a: 'D', e: 'Отчёт — примерно две тысячи слов.' }] },
    short: [{ q: 'How long will Kamila\'s interview take?', a: ['45 minutes', 'forty-five minutes', 'forty five minutes', '45', 'forty-five'], e: 'Сорок пять минут.' }, { q: 'Within how many days should the key points be transcribed?', a: ['2', 'two', 'two days', '2 days'], e: 'В течение двух дней.' }]
  });

  /* 32 · Al-Halim */
  X(32, {
    task1: {
      prompt: 'The line graph below shows the average number of angry outbursts per week reported by two groups of parents over eight weeks: one group learned a pause technique and the other had no training. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Angry outbursts per week (average), illustrative data', unit: 'outbursts per week', ymax: 10, x: ['Week 0', 'Week 2', 'Week 4', 'Week 6', 'Week 8'], series: [{ name: 'Parents using the pause technique', y: [9, 7, 5, 4, 3] }, { name: 'Parents without training', y: [9, 9, 8, 9, 8] }] },
      keywords: ['outbursts', 'parents', 'pause', 'technique', 'training', 'weeks', 'decreased', 'average', 'week', 'reduction'],
      model: `The line graph shows the average number of angry outbursts per week reported by two groups of parents over eight weeks. One group learned a pause technique, and the other group received no training. The data are illustrative.

Overall, the number of outbursts fell sharply among the parents who used the technique, whereas it remained almost unchanged among the parents without training.

Both groups started with an average of 9 outbursts a week. In the group using the pause technique, the figure fell every two weeks, to 7 in Week 2, 5 in Week 4 and 4 in Week 6, and it reached 3 by Week 8. This is a reduction of 6 outbursts, which means that the figure fell to one third of its initial level.

By contrast, the parents without training showed hardly any change. Their average fluctuated between 8 and 9, remaining at 9 in Weeks 2 and 6, and it finished at 8, a fall of only one outburst.

As a result, the difference between the two groups, which was nothing at the start, grew to 5 outbursts a week by the end of the study.`,
      analysis: ['Task Achievement: одинаковый старт, расходящиеся линии, итоговая разница.', 'Данные: 9 → 3 (в три раза), 9 → 8; разрыв 5.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: fluctuated, reduction, initial level, remained.']
    },
    heads: {
      list: ['Rules for oaths in trade', 'Praise of creation and patient allowance', 'Names linked with forgiveness', 'Child psychology in the twentieth century', 'Self-control, mildness and a related word', 'The habit of the pause'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: самообладание, мягкость, слово hulm.' }, { p: 'B', a: 'iii', e: 'Абзац B: имя в связке с прощением (2:225, 64:17, 17:44).' }, { p: 'C', a: 'ii', e: 'Абзац C: хвала всего творения и терпеливое предоставление времени.' }, { p: 'D', a: 'vi', e: 'Абзац D: привычка делать паузу.' }]
    },
    ynng: [
      { q: 'The writer treats forbearance as the control of power and not as weakness.', a: 'YES', e: 'Абзац A: «not weakness but the control of power».' },
      { q: 'The writer recommends that people should demand instant results from others.', a: 'NO', e: 'Абзац D: нужно избегать требования мгновенных результатов.' },
      { q: 'The writer says that teachers are generally more patient than parents.', a: 'NOT GIVEN', e: 'Сравнение терпения учителей и родителей не приводится.' }
    ],
    matching: { instruction: 'What does the receptionist say about each of the following? Choose the correct letter, A–D.', options: ['It is in Room nine on the ground floor', 'It costs twenty-five pounds and includes a workbook', 'It means taking one deep breath and counting to five', 'She has fifteen years of experience with families'], items: [{ q: 'The location of the workshop', a: 'A', e: 'Комната девять на первом этаже.' }, { q: 'The price', a: 'B', e: 'Двадцать пять фунтов, включая рабочую тетрадь.' }, { q: 'The technique called the pause', a: 'C', e: 'Один глубокий вдох и счёт до пяти.' }, { q: 'The trainer, Ms Arman', a: 'D', e: 'Тренер работает с семьями пятнадцать лет.' }] },
    short: [{ q: 'At what time does the workshop finish?', a: ['12.30', '12:30', 'half past twelve', '12.30 pm', '12:30 pm'], e: 'Занятие заканчивается в половине первого.' }, { q: 'What should Gulnar bring?', a: ['a notebook', 'notebook'], e: 'Нужно принести только блокнот.' }]
  });

  /* 33 · Al-'Azim */
  X(33, {
    task1: {
      prompt: 'The table below shows the length, the weekly number of visitors and the average rating of four shows in a planetarium. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Planetarium shows, illustrative data', head: ['Show', 'Length (minutes)', 'Visitors per week', 'Rating (out of 5)'], rows: [['Our Solar System', '40', '420', '4.6'], ['Journey to the Galaxy', '55', '310', '4.8'], ['Life of a Star', '35', '260', '4.3'], ['Children\'s Sky', '25', '380', '4.5']] },
      keywords: ['planetarium', 'shows', 'length', 'visitors', 'rating', 'galaxy', 'solar system', 'minutes', 'week', 'highest'],
      model: `The table compares four planetarium shows in terms of their length, the number of visitors per week and the average rating out of 5. The data are illustrative.

Overall, the longest show received the highest rating but did not attract the most visitors, whereas the most popular show was of medium length.

Our Solar System was the most popular show, with 420 visitors a week, and it lasted 40 minutes. It was rated 4.6. Children's Sky, the shortest show at 25 minutes, came second in popularity with 380 visitors, and its rating was 4.5.

Journey to the Galaxy was the longest show, at 55 minutes, and it had the highest rating, 4.8. However, it attracted only 310 visitors a week, which was fewer than the two shows mentioned above.

Life of a Star was the least successful in two respects: it had the fewest visitors, 260, and the lowest rating, 4.3. In total, the four shows were seen by 1370 visitors a week, and Our Solar System accounted for roughly 31% of them.`,
      analysis: ['Task Achievement: четыре показа по трём показателям, обзор отмечает «самый длинный — лучший рейтинг, но не самый популярный».', 'Вычисления: 420 + 310 + 260 + 380 = 1370; 420/1370 ≈ 31%.', 'Cohesion: Overall / whereas / However / In total.', 'Lexical Resource: attracted, accounted for, the least successful, respects.']
    },
    heads: {
      list: ['The history of telescopes', 'A sense of scale from astronomy', 'How stars are named', 'Greatness beyond the mind', 'A famous verse and its ending', 'Seeing problems in perspective'],
      items: [{ p: 'A', a: 'iv', e: 'Абзац A: величие, которое нельзя полностью постичь умом.' }, { p: 'B', a: 'v', e: 'Абзац B: аят аль-Курси (2:255) и его завершение.' }, { p: 'C', a: 'ii', e: 'Абзац C: ощущение масштаба из астрономии.' }, { p: 'D', a: 'vi', e: 'Абзац D: проблемы в перспективе.' }]
    },
    ynng: [
      { q: 'The writer suggests that the name can help a person to see problems in perspective.', a: 'YES', e: 'Абзац D: имя помогает видеть проблемы в перспективе.' },
      { q: 'The writer believes that the name discourages seriousness about important responsibilities.', a: 'NO', e: 'Абзац D: имя поощряет серьёзное отношение к важным обязанностям.' },
      { q: 'The writer says that most astronomers are religious people.', a: 'NOT GIVEN', e: 'Религиозность астрономов не обсуждается.' }
    ],
    matching: { instruction: 'What does the guide say about each of the following? Choose the correct letter, A–D.', options: ['Sunlight takes about eight minutes to reach it', 'It contains hundreds of billions of stars', 'More than a million Earths could fit inside it', 'It is about twelve thousand kilometres across'], items: [{ q: 'The Earth', a: 'D', e: 'Диаметр Земли — около двенадцати тысяч километров.' }, { q: 'The Sun', a: 'C', e: 'В Солнце поместилось бы больше миллиона Земель.' }, { q: 'The Milky Way', a: 'B', e: 'В Млечном Пути сотни миллиардов звёзд.' }, { q: 'Sunlight on its way to us', a: 'A', e: 'Свету Солнца нужно около восьми минут, чтобы достичь нас.' }] },
    short: [{ q: 'At what time does the show begin?', a: ['7.30', '7:30', 'seven thirty', 'half past seven', '19:30'], e: 'Показ начинается в семь тридцать.' }, { q: 'How much does the audio guide cost?', a: ['2', 'two', '£2', 'two pounds', '2 pounds'], e: 'Аудиогид стоит два фунта дополнительно.' }]
  });

  /* 34 · Al-Ghafur */
  X(34, {
    task1: {
      prompt: 'The bar chart below shows the cumulative percentage of students who had passed an exam after each of three attempts, depending on whether they attended revision classes. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Students who had passed the exam by attempt (cumulative %), illustrative data', unit: '% of students', ymax: 100, cats: ['First attempt', 'Second attempt', 'Third attempt'], series: [{ name: 'Attended revision classes', v: [48, 74, 85] }, { name: 'Did not attend', v: [48, 57, 61] }] },
      keywords: ['students', 'passed', 'exam', 'attempt', 'revision classes', 'cumulative', 'percentage', 'increase', 'gap', 'retake'],
      model: `The bar chart shows the cumulative percentage of students who had passed an exam after each of three attempts, comparing those who attended revision classes with those who did not. The data are illustrative.

Overall, the proportion of students who passed rose with every attempt in both groups, but the rise was much greater among the students who attended revision classes.

After the first attempt, the two groups were identical, with 48% of students having passed. By the second attempt, the figure for the students with revision classes had risen to 74%, an increase of 26 percentage points, while the figure for the other group had risen to only 57%.

The difference became larger at the third attempt. In the group that attended revision classes, 85% had passed, compared with 61% in the group that did not, a gap of 24 percentage points.

It is noticeable that the biggest gain for both groups occurred between the first and the second attempts, and that the rises at the third attempt were smaller, at 11 points and 4 points respectively.`,
      analysis: ['Task Achievement: две группы, три попытки; одинаковый старт и расходящиеся результаты.', 'Вычисления: +26 и +9; разрыв 17 → 24; прирост на третьей попытке 11 и 4.', 'Cohesion: Overall / while / compared with / It is noticeable that.', 'Lexical Resource: cumulative, gain, respectively, identical.']
    },
    heads: {
      list: ['The legal rules of necessity', 'A balanced attitude to mistakes', 'Two names from one root', 'Why people give up', 'A frequent name in two verses', 'The power of direct address'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два имени от одного корня.' }, { p: 'B', a: 'v', e: 'Абзац B: частое имя в аятах 2:173 и 39:53.' }, { p: 'C', a: 'vi', e: 'Абзац C: сила прямого обращения «О рабы Мои».' }, { p: 'D', a: 'ii', e: 'Абзац D: сбалансированное отношение к ошибкам.' }]
    },
    ynng: [
      { q: 'The writer suggests that the belief that a fresh start is possible helps people to change.', a: 'YES', e: 'Абзац C: вера в возможность нового начала — важный фактор готовности меняться.' },
      { q: 'The writer recommends that a person should minimise a wrong that he has done.', a: 'NO', e: 'Абзац D: проступок не следует преуменьшать.' },
      { q: 'The writer says that most people never forgive themselves.', a: 'NOT GIVEN', e: 'Самопрощение людей в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What do Rustem and the advisor say about each of the following? Choose the correct letter, A–D.', options: ['Fifty-two', 'Sixty', 'Forty pounds', 'Thursdays at four'], items: [{ q: 'Rustem\'s score', a: 'A', e: 'Результат Рустема — пятьдесят два.' }, { q: 'The pass mark', a: 'B', e: 'Проходной балл — шестьдесят.' }, { q: 'The fee for a retake', a: 'C', e: 'Пересдача стоит сорок фунтов.' }, { q: 'The revision class', a: 'D', e: 'Занятие по повторению — по четвергам в четыре.' }] },
    short: [{ q: 'On what date is the next exam session?', a: ['12 June', 'the twelfth of June', '12th June', 'June 12', 'twelfth of June', 'the 12th of June'], e: 'Следующая сессия — двенадцатого июня.' }, { q: 'How many times can a student retake the exam?', a: ['twice', '2', 'two', 'two times', '2 times'], e: 'Пересдать можно дважды.' }]
  });

  /* 35 · Ash-Shakur */
  X(35, {
    task1: {
      prompt: 'The line graph below shows the average life satisfaction score, out of 10, of three groups over ten weeks, according to what they wrote down each week. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average life satisfaction score (out of 10), illustrative data', unit: 'score out of 10', ymax: 10, x: ['Week 0', 'Week 2', 'Week 4', 'Week 6', 'Week 8', 'Week 10'], series: [{ name: 'Wrote three grateful items', y: [6.0, 6.2, 6.4, 6.5, 6.6, 6.7] }, { name: 'Recorded neutral events', y: [6.0, 6.0, 6.1, 6.0, 6.1, 6.1] }, { name: 'Recorded complaints', y: [6.0, 5.9, 5.9, 5.8, 5.8, 5.7] }] },
      keywords: ['satisfaction', 'score', 'grateful', 'neutral', 'complaints', 'weeks', 'group', 'increased', 'decreased', 'difference'],
      model: `The line graph shows how the average life satisfaction score, out of 10, of three groups changed over ten weeks, depending on what the participants wrote down each week. The data are illustrative.

Overall, the group that wrote down grateful items improved steadily, the group that recorded neutral events stayed almost the same, and the group that recorded complaints declined slightly.

All three groups began with the same score of 6.0. The score of the grateful group increased in every period and reached 6.7 by Week 10, a rise of 0.7 points. The changes in the other two groups were much smaller. The group that recorded neutral events fluctuated between 6.0 and 6.1, and finished at 6.1.

By contrast, the score of the group that recorded complaints fell gradually from 6.0 to 5.7, a decline of 0.3 points.

As a result, the gap between the grateful group and the group that recorded complaints grew from nothing to 1.0 point by the end of the study, although all of the differences were modest.`,
      analysis: ['Task Achievement: три линии, общий старт, расходящиеся траектории; оговорка о скромных различиях.', 'Данные: +0.7, +0.1, −0.3; разрыв 1.0.', 'Cohesion: Overall / By contrast / As a result / although.', 'Lexical Resource: fluctuated, declined slightly, modest, gradually.']
    },
    heads: {
      list: ['A history of festivals', 'Three ways to practise gratitude', 'Thanks to people and thanks to God', 'Rules for writing letters', 'What research suggests', 'Verses with Forgiving and Appreciative'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: благодарность людям и благодарность Богу.' }, { p: 'B', a: 'vi', e: 'Абзац B: 35:30, 35:34, 64:17.' }, { p: 'C', a: 'v', e: 'Абзац C: что показывают исследования.' }, { p: 'D', a: 'ii', e: 'Абзац D: три способа практиковать благодарность.' }]
    },
    ynng: [
      { q: 'The writer suggests that gratitude can be seen as a way of seeing and not only as a polite reply.', a: 'YES', e: 'Абзац C: благодарность — «a way of seeing, not just a polite reply».' },
      { q: 'The writer claims that the effects of gratitude shown by research are very large.', a: 'NO', e: 'Абзац C: исследователи предупреждают, что эффекты скромные.' },
      { q: 'The writer states that keeping a gratitude journal works better than meditation.', a: 'NOT GIVEN', e: 'Сравнение с медитацией в тексте отсутствует.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['It directs attention to positive aspects of life', 'It strengthens social bonds', 'It reduces comparison with others', 'It means noticing the work of many people behind food'], items: [{ q: 'The first explanation of why gratitude may help', a: 'A', e: 'Первое объяснение — внимание направляется на хорошее.' }, { q: 'The second explanation', a: 'B', e: 'Второе — укрепляются социальные связи.' }, { q: 'The third explanation', a: 'C', e: 'Третье — меньше сравнения с другими.' }, { q: 'The pause before a meal', a: 'D', e: 'Пауза перед едой — заметить труд многих людей.' }] },
    short: [{ q: 'For how many weeks did participants write things down in the experiment?', a: ['10', 'ten', 'ten weeks', '10 weeks'], e: 'Десять недель.' }, { q: 'What is the deadline for the letter of thanks?', a: ['28 October', 'the twenty-eighth of October', '28th October', 'October 28', 'twenty-eighth of October'], e: 'Срок — двадцать восьмое октября.' }]
  });

  /* 36 · Al-'Aliyy */
  X(36, {
    task1: {
      prompt: 'The diagram below shows the steps that a person follows to work towards an ambitious goal for the year. The process is illustrative. ' + T1,
      chart: { type: 'process', caption: 'Working towards an ambitious yearly goal', steps: ['The person writes down one ambitious goal for the year.', 'The goal is divided into four quarterly targets.', 'The person chooses the first small step for this week.', 'He takes this step.', 'Each month he reviews his progress.', 'He adjusts the plan if it is needed.', 'At the end of the year he thanks the people who helped him.'] },
      keywords: ['goal', 'ambitious', 'quarterly', 'targets', 'step', 'review', 'progress', 'adjusts', 'plan', 'finally'],
      model: `The diagram illustrates a process of seven steps that a person follows to work towards an ambitious goal for the year. It is an illustrative example.

Overall, the process has three clear parts: planning, action and regular review, and it ends with a stage of thanks.

First, the person writes down one ambitious goal for the year. Then the goal is divided into four quarterly targets, which makes it easier to manage. After that, he chooses the first small step for the current week and takes it, which is the point at which planning turns into action.

The third part of the process is a cycle. Each month, he reviews his progress, and if it is necessary, he adjusts the plan. In this way, the plan can change without losing sight of the original goal.

Finally, at the end of the year, he thanks the people who helped him, so the process finishes with an acknowledgement of other people and not only with the achievement itself.`,
      analysis: ['Task Achievement: три части (планирование, действие, пересмотр) и завершающий этап отмечены в обзоре.', 'Process language: First / Then / After that / Each month / Finally.', 'Выбор деталей: деление на четыре цели, ежемесячный цикл, благодарность в конце.', 'Cohesion: which / In this way / so; вывод о цикличности.']
    },
    heads: {
      list: ['The geography of mountains', 'Ambition with humility', 'Highness in rank and not in place', 'A history of the pilgrimage', 'The order of words and relative heights', 'Verses that end with the name'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: высота по рангу, а не по месту.' }, { p: 'B', a: 'vi', e: 'Абзац B: аяты, заканчивающиеся этим именем.' }, { p: 'C', a: 'v', e: 'Абзац C: порядок слов и относительность земных высот.' }, { p: 'D', a: 'ii', e: 'Абзац D: амбиции вместе со смирением.' }]
    },
    ynng: [
      { q: 'The writer suggests that every earthly height is relative.', a: 'YES', e: 'Абзац C: «every earthly height is relative».' },
      { q: 'The writer believes that people in high positions should be above criticism.', a: 'NO', e: 'Абзац C: искушение считать себя выше критики — то, что имя оспаривает.' },
      { q: 'The writer says that most people find goal-setting easy.', a: 'NOT GIVEN', e: 'Лёгкость постановки целей в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the secretary say about each of the following? Choose the correct letter, A–D.', options: ['It is one thousand eight hundred metres high', 'It costs sixty pounds a year', 'It costs ten pounds and covers transport', 'It is a three-thousand-metre peak'], items: [{ q: 'The hill for the first trip', a: 'A', e: 'Холм высотой тысяча восемьсот метров.' }, { q: 'The membership', a: 'B', e: 'Членство — шестьдесят фунтов в год.' }, { q: 'Each trip', a: 'C', e: 'Каждая поездка — десять фунтов, включая транспорт.' }, { q: 'The aim by the end of the year', a: 'D', e: 'К концу года — вершина высотой три тысячи метров.' }] },
    short: [{ q: 'At what time do members meet for the first trip?', a: ['7', 'seven', '7:00', '7 am', '7am', '7 o\'clock', 'seven o\'clock'], e: 'Встреча в семь часов, а не в восемь.' }, { q: 'How much water should members carry?', a: ['1.5 litres', 'a litre and a half', 'one and a half litres', 'at least a litre and a half', 'at least 1.5 litres'], e: 'Не менее полутора литров воды.' }]
  });

  /* 37 · Al-Kabir */
  X(37, {
    task1: {
      prompt: 'The bar chart below shows the percentage of people who rated four kinds of worry as very important at the time and the percentage who still rated them as important one year later. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Worries rated as important (%), illustrative data', unit: '% of people', ymax: 100, cats: ['Exam result', 'Argument with a friend', 'Minor mistake at work', 'Health concern'], series: [{ name: 'Very important at the time', v: [92, 78, 71, 95] }, { name: 'Still important after one year', v: [41, 12, 9, 66] }] },
      keywords: ['worries', 'important', 'exam', 'argument', 'mistake', 'health', 'one year', 'percentage', 'fell', 'time'],
      model: `The bar chart compares the percentage of people who rated four kinds of worry as very important at the time with the percentage who still considered them important one year later. The data are illustrative.

Overall, all four worries seemed less important after a year, but the fall was much greater for the everyday problems than for the health concern.

At the time, health concerns were rated as very important by the highest percentage, 95%, followed by an exam result, at 92%. Arguments with a friend and minor mistakes at work scored lower, at 78% and 71%.

After a year, the picture was very different. Only 12% of people still considered an argument with a friend important, and a mere 9% said so about a minor mistake at work, which were falls of 66 and 62 percentage points respectively. The importance of an exam result fell by 51 points, to 41%.

By contrast, health remained the only worry that most people still rated as important, at 66%, which was a fall of just 29 points.`,
      analysis: ['Task Achievement: две серии по четырём тревогам; обзор отмечает, что здоровье остаётся важным.', 'Вычисления: падение 66, 62, 51 и 29 пунктов.', 'Cohesion: Overall / At the time / After a year / By contrast / respectively.', 'Lexical Resource: considered important, a mere, falls of, the only worry.']
    },
    heads: {
      list: ['The history of Arabic letters', 'Simple tests of proportion', 'Two similar names compared', 'Counting the number of prayers', 'Verses with a double idea', 'The function of a phrase'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два похожих имени — Аль-Азым и Аль-Кабир.' }, { p: 'B', a: 'v', e: 'Абзац B: аяты с парой имён — «высокий и великий».' }, { p: 'C', a: 'vi', e: 'Абзац C: функция фразы «Аллаху акбар» — возвращать перспективу.' }, { p: 'D', a: 'ii', e: 'Абзац D: простые проверки масштаба.' }]
    },
    ynng: [
      { q: 'The writer suggests that the phrase Allahu akbar changes the relative size of a difficulty without removing it.', a: 'YES', e: 'Абзац C: фраза не устраняет трудность, но меняет её относительный размер.' },
      { q: 'The writer recommends repeating the phrase unconsciously, as a habit.', a: 'NO', e: 'Абзац D: повторять осознанно, а не как привычку.' },
      { q: 'The writer states that most people worry mainly about money.', a: 'NOT GIVEN', e: 'Источники тревог людей в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What does each of the lecturer\'s techniques involve? Choose the correct letter, A–D.', options: ['Asking how you will feel in ten minutes, ten days and ten years', 'Writing the problem on paper', 'Talking to a trusted person for five minutes', 'Looking at a distant landscape or the sky for one minute'], items: [{ q: 'Technique one', a: 'A', e: 'Первая — правило «десять-десять-десять».' }, { q: 'Technique two', a: 'B', e: 'Вторая — записать проблему на бумаге.' }, { q: 'Technique three', a: 'C', e: 'Третья — пять минут поговорить с доверенным человеком.' }, { q: 'Technique four', a: 'D', e: 'Четвёртая — минуту смотреть на небо или даль.' }] },
    short: [{ q: 'On which day should students bring their record to class?', a: ['Tuesday'], e: 'Записи нужно принести во вторник.' }, { q: 'How many worries should students record?', a: ['3', 'three'], e: 'Нужно записать три тревоги.' }]
  });

  /* 38 · Al-Hafiz */
  X(38, {
    task1: {
      prompt: 'The table below shows four collections held by a national archive: the number of documents, the storage temperature and the number of visitors per year. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Four archive collections, illustrative data', head: ['Collection', 'Documents (thousands)', 'Storage temperature (°C)', 'Visitors per year'], rows: [['Family records', '240', '18', '5200'], ['Maps', '65', '16', '2100'], ['Photographs', '180', '14', '3900'], ['Letters', '120', '18', '4300']] },
      keywords: ['archive', 'collections', 'documents', 'temperature', 'visitors', 'maps', 'photographs', 'letters', 'family records', 'highest'],
      model: `The table shows the number of documents, the storage temperature and the number of visitors per year for four collections held by a national archive. The data are illustrative.

Overall, the largest collection was also the most visited, whereas the smallest collection had the fewest visitors, and the storage temperature varied between 14 and 18 degrees.

Family records were the largest collection, with 240 thousand documents, and they attracted the highest number of visitors, 5200 a year. They were kept at 18 degrees, as were the letters, the collection of 120 thousand documents, which had 4300 visitors a year, the second highest figure.

Photographs were the third largest collection, at 180 thousand items, and they were stored at the lowest temperature, 14 degrees. They had 3900 visitors a year.

The maps were the smallest collection, at only 65 thousand documents, and they were visited by only 2100 people a year, less than half of the number of visitors to the family records. They were kept at 16 degrees.

In total, the archive held 605 thousand documents in these four collections.`,
      analysis: ['Task Achievement: четыре коллекции, три показателя; обзор — крупнейшая коллекция самая посещаемая.', 'Вычисления: 240 + 65 + 180 + 120 = 605 тысяч; 2100 < половины 5200.', 'Cohesion: Overall / whereas / as were / In total.', 'Lexical Resource: attracted, stored at, the second highest figure, held.']
    },
    heads: {
      list: ['The history of printing', 'Protecting what is entrusted', 'Three levels of preservation', 'The life of the Prophet Hud', 'Three verses about guardianship', 'Guarding and remembering'],
      items: [{ p: 'A', a: 'vi', e: 'Абзац A: охранять и помнить — два значения корня.' }, { p: 'B', a: 'v', e: 'Абзац B: 11:57, 12:64, 15:9.' }, { p: 'C', a: 'iii', e: 'Абзац C: три уровня сохранения.' }, { p: 'D', a: 'ii', e: 'Абзац D: защита доверенного.' }]
    },
    ynng: [
      { q: 'The writer suggests that memorising valuable texts and reviewing them regularly keeps knowledge alive.', a: 'YES', e: 'Абзац D: заучивание и регулярное повторение сохраняют знание живым.' },
      { q: 'The writer believes that personal data does not need special protection.', a: 'NO', e: 'Абзац D: нужно защищать личные данные паролями и резервными копиями.' },
      { q: 'The writer says that most people use weak passwords.', a: 'NOT GIVEN', e: 'Статистика по паролям в тексте не приводится.' }
    ],
    matching: { instruction: 'What does the clerk say about each of the following? Choose the correct letter, A–D.', options: ['Only pencils may be used', 'They must be left in the lockers', 'Cotton gloves must be worn', 'A day permit costs five pounds'], items: [{ q: 'Writing in the reading room', a: 'A', e: 'Писать можно только карандашами: чернила могут повредить бумагу.' }, { q: 'Bags and coats', a: 'B', e: 'Сумки и пальто оставляют в шкафчиках.' }, { q: 'Handling fragile documents', a: 'C', e: 'С хрупкими документами работают в хлопковых перчатках.' }, { q: 'Taking photographs', a: 'D', e: 'Съёмка без вспышки по дневному разрешению за пять фунтов.' }] },
    short: [{ q: 'On what date will Samat visit the archive?', a: ['13', '13th', 'thirteenth', 'the thirteenth', 'the 13th'], e: 'Он придёт тринадцатого, а не шестого.' }, { q: 'At what temperature are the documents kept?', a: ['18 degrees', 'eighteen degrees', '18', 'eighteen'], e: 'Документы хранят при восемнадцати градусах.' }]
  });

  /* 39 · Al-Muqit */
  X(39, {
    task1: {
      prompt: 'The bar chart below shows the percentage of pupils who reported good concentration and the percentage who reported feeling tired in morning lessons, according to how often they ate breakfast. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Pupils by breakfast habit (%), illustrative data', unit: '% of pupils', ymax: 100, cats: ['Every day', '3–4 days a week', '1–2 days a week', 'Never'], series: [{ name: 'Good concentration', v: [74, 63, 49, 31] }, { name: 'Tired in morning lessons', v: [18, 27, 41, 58] }] },
      keywords: ['pupils', 'breakfast', 'concentration', 'tired', 'morning lessons', 'percentage', 'every day', 'never', 'opposite', 'trend'],
      model: `The bar chart compares the percentage of pupils who reported good concentration and the percentage who reported feeling tired in morning lessons, according to how often they ate breakfast. The data are illustrative.

Overall, the more often pupils ate breakfast, the better their concentration and the less tired they felt, and the two measures showed opposite trends.

Among the pupils who ate breakfast every day, 74% reported good concentration and only 18% felt tired. As the frequency of breakfast decreased, concentration fell steadily, to 63% for those who ate breakfast three or four days a week and 49% for those who ate it one or two days a week.

The lowest figure, 31%, was recorded by pupils who never ate breakfast. The proportion who felt tired rose in the opposite direction, from 18% to 27%, 41% and finally 58%.

It is noticeable that the pupils who never had breakfast were the only group in which tiredness, at 58%, was more common than good concentration, at 31%. The difference in concentration between the two extreme groups was 43 percentage points.`,
      analysis: ['Task Achievement: две противоположные тенденции по четырём группам.', 'Вычисления: 74 − 31 = 43; единственная группа, где усталость чаще концентрации (58 > 31).', 'Cohesion: Overall / As ... decreased / in the opposite direction / It is noticeable that.', 'Lexical Resource: frequency, steadily, extreme groups, opposite trends.']
    },
    heads: {
      list: ['A history of school canteens', 'Care that supplies and watches', 'Nourishment in a wide sense', 'Rules of intercession in courts', 'Two readings of a rare name', 'A verse about supporting causes'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: два толкования редкого имени.' }, { p: 'B', a: 'vi', e: 'Абзац B: 4:85 — аят о поддержке дел.' }, { p: 'C', a: 'ii', e: 'Абзац C: забота, которая и снабжает, и наблюдает.' }, { p: 'D', a: 'iii', e: 'Абзац D: питание в широком смысле.' }]
    },
    ynng: [
      { q: 'The writer suggests that small regular habits can nourish better than occasional bursts of effort.', a: 'YES', e: 'Абзац D: небольшие регулярные привычки питают лучше разовых порывов.' },
      { q: 'The writer claims that scholars accept only one reading of the name.', a: 'NO', e: 'Абзац A: оба толкования поддерживают уважаемые учёные.' },
      { q: 'The writer says that gardeners are better caretakers than parents.', a: 'NOT GIVEN', e: 'Сравнение садовников и родителей в тексте не приводится.' }
    ],
    matching: { instruction: 'What does the nutritionist say about each of the following? Choose the correct letter, A–D.', options: ['Every lunch includes vegetables, protein and grain', 'Water, milk or unsweetened tea are offered', 'It is free for children from low-income families', 'It is available twice a week'], items: [{ q: 'Every lunch', a: 'A', e: 'Каждый обед включает овощи, белок и злаки.' }, { q: 'The drinks', a: 'B', e: 'Предлагают воду, молоко или несладкий чай.' }, { q: 'Lunch for children from low-income families', a: 'C', e: 'Для детей из малообеспеченных семей обед бесплатный.' }, { q: 'The choice of eggs at breakfast', a: 'D', e: 'Яйца в завтрак — дважды в неделю.' }] },
    short: [{ q: 'How much does a full lunch cost?', a: ['2.50', '£2.50', 'two pounds fifty', '2 pounds 50', '2.5'], e: 'Полный обед стоит два фунта пятьдесят, а не три.' }, { q: 'By what date should parents inform the school about allergies?', a: ['20 August', 'the twentieth of August', '20th August', 'August 20', 'twentieth of August'], e: 'Об аллергиях нужно сообщить до двадцатого августа.' }]
  });

  /* 40 · Al-Hasib */
  X(40, {
    task1: {
      prompt: 'The line graph below shows how a student spent time each week over four weeks while keeping a time diary. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Weekly hours by category, illustrative data', unit: 'hours per week', ymax: 40, x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], series: [{ name: 'Study', y: [22, 24, 26, 28] }, { name: 'Rest', y: [30, 30, 29, 29] }, { name: 'Wasted time', y: [7, 6, 4, 3] }] },
      keywords: ['hours', 'study', 'rest', 'wasted time', 'weeks', 'diary', 'increased', 'decreased', 'category', 'student'],
      model: `The line graph shows how a student spent time in three categories each week over four weeks while keeping a time diary. The data are illustrative.

Overall, the time spent on study increased steadily, the time that was wasted fell, and the time spent on rest hardly changed.

Study was the second largest category in the first week, at 22 hours, and it rose every week to reach 28 hours in Week 4, an increase of 6 hours. In the same period, the time that was wasted fell from 7 hours to just 3 hours, which means that it was reduced by more than half.

Rest remained the largest category throughout, but it changed very little. It stayed at 30 hours in the first two weeks and dropped slightly to 29 hours in the last two.

It is noticeable that the fall in wasted time, of 4 hours, was close to the rise in study time, which suggests that most of the time that was saved was used for studying. By Week 4, the study time was almost equal to the time spent on rest.`,
      analysis: ['Task Achievement: три категории, три тенденции (рост, падение, стабильность).', 'Вычисления: +6 часов учёбы, −4 часа потерянного времени (более чем вдвое); 28 ≈ 29.', 'Cohesion: Overall / In the same period / It is noticeable that; осторожное «suggests».', 'Lexical Resource: steadily, reduced by more than half, throughout, dropped slightly.']
    },
    heads: {
      list: ['The history of accounting', 'Self-accountability in practice', 'Why people dislike examinations', 'Counting and sufficiency', 'Verses about everyday behaviour', 'A warning and a comfort'],
      items: [{ p: 'A', a: 'iv', e: 'Абзац A: считать и быть достаточным.' }, { p: 'B', a: 'v', e: 'Абзац B: аяты 4:6, 4:86, 33:39 о повседневном поведении.' }, { p: 'C', a: 'vi', e: 'Абзац C: предупреждение и утешение.' }, { p: 'D', a: 'ii', e: 'Абзац D: самоотчёт на практике.' }]
    },
    ynng: [
      { q: 'The writer suggests that the idea of an exact account is both a warning and a comfort.', a: 'YES', e: 'Абзац C: идея — «both a warning and a comfort».' },
      { q: 'The writer believes that people should avoid checking their own conduct before examinations.', a: 'NO', e: 'Абзац D: регулярная проверка своего поведения снижает страх перед экзаменами.' },
      { q: 'The writer says that most students keep no record of their time.', a: 'NOT GIVEN', e: 'Привычки студентов в этом отношении не приводятся.' }
    ],
    matching: { instruction: 'What do the speakers say about each of the following? Choose the correct letter, A–D.', options: ['Twenty-two hours', 'Nearly seven hours lost to the phone', 'Forty-five-minute sessions with a timer', 'Four weeks'], items: [{ q: 'Dana\'s actual study time last week', a: 'A', e: 'Дана реально занималась двадцать два часа.' }, { q: 'Yerzhan\'s time lost to the phone', a: 'B', e: 'Ержан потерял почти семь часов из-за телефона.' }, { q: 'Yerzhan\'s planned study sessions', a: 'C', e: 'Он планирует сессии по сорок пять минут с таймером.' }, { q: 'The recommended length of the diary', a: 'D', e: 'Дневник рекомендуют вести четыре недели.' }] },
    short: [{ q: 'On which day is the next meeting?', a: ['Wednesday'], e: 'Следующая встреча — в среду, девятого.' }, { q: 'How long should the weekly review take?', a: ['5 minutes', 'five minutes', '5', 'five'], e: 'Еженедельный обзор занимает пять минут.' }]
  });
})();

// Имена 61–70: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 61 · Al-Mumit */
  X(61, {
    task1: {
      prompt: 'The bar chart below shows the percentage of bereaved families who needed five kinds of help and the percentage who actually received it. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Bereaved families: help needed and help received (%), illustrative data', unit: '% of families', ymax: 100, cats: ['Meals', 'Paperwork', 'Transport', 'Childcare', 'Someone to listen'], series: [{ name: 'Needed this help', v: [62, 48, 35, 28, 81] }, { name: 'Received this help', v: [41, 22, 30, 19, 55] }] },
      keywords: ['bereaved', 'families', 'help', 'needed', 'received', 'meals', 'paperwork', 'transport', 'childcare', 'listen'],
      model: `The bar chart compares the percentage of bereaved families who needed five kinds of help with the percentage who actually received each kind. The data are illustrative.

Overall, in every category fewer families received help than needed it, and the need for someone to listen was the highest.

Someone to listen was the most needed form of help, at 81%, followed by meals at 62% and paperwork at 48%. Transport and childcare were needed less often, by 35% and 28% of families respectively.

However, the amount of help received was lower than the need in every case. The gap was the largest, at 26 percentage points, for paperwork, where only 22% received help, and for someone to listen, where 55% did. For meals, the gap was 21 points, and for childcare, 9 points.

By contrast, transport had the smallest gap, only 5 points, since 30% of families received help and 35% needed it. This suggests that transport was the best-supported need, while paperwork was the least well supported in relation to the demand.`,
      analysis: ['Task Achievement: пять видов помощи, две серии; обзор — получено везде меньше, чем нужно.', 'Вычисления: разрывы 21, 26, 5, 9 и 26 пунктов.', 'Cohesion: Overall / However / By contrast; осторожный вывод («suggests»).', 'Lexical Resource: bereaved, in every case, the gap was the largest, well supported.']
    },
    heads: {
      list: ['The history of funeral customs', 'Clarity, not fear', 'A pair of names and a sensitive subject', 'How hospitals are organised', 'Three clear verses', 'Why death is mentioned first'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: имя в паре с Аль-Мухьи, деликатная тема.' }, { p: 'B', a: 'v', e: 'Абзац B: три ясных аята — 57:2, 53:44, 67:2.' }, { p: 'C', a: 'vi', e: 'Абзац C: почему смерть названа раньше жизни.' }, { p: 'D', a: 'ii', e: 'Абзац D: ясность, а не страх.' }]
    },
    ynng: [
      { q: 'The writer suggests that remembering mortality is meant to bring clarity and not fear.', a: 'YES', e: 'Абзац D: напоминание о смертности должно приносить ясность, а не страх.' },
      { q: 'The writer believes that the aim of life is to have as many deeds as possible.', a: 'NO', e: 'Абзац C: цель — не количество, а качество.' },
      { q: 'The writer says that grief lasts longer for younger people.', a: 'NOT GIVEN', e: 'Длительность горя у разных возрастов не обсуждается.' }
    ],
    matching: { instruction: 'What does the coordinator say about each of the following? Choose the correct letter, A–D.', options: ['Presence matters more than words', 'Meals, paperwork, transport or childcare', 'Listening skills', 'Looking after yourself'], items: [{ q: 'The first rule', a: 'A', e: 'Первое правило — присутствие важнее слов.' }, { q: 'Practical help', a: 'B', e: 'Практическая помощь: еда, документы, транспорт, дети.' }, { q: 'The second training session', a: 'C', e: 'Второе занятие — навыки слушания.' }, { q: 'The third training session', a: 'D', e: 'Третье — забота о себе.' }] },
    short: [{ q: 'In which room is the first session?', a: ['Room twelve', 'twelve', '12', 'Room 12'], e: 'Первое занятие — в комнате двенадцать.' }, { q: 'At what time does the first session start?', a: ['6', 'six', '6 pm', '6pm', '6:00', '18:00', 'six o\'clock'], e: 'Начало в шесть вечера, а не в семь.' }]
  });

  /* 62 · Al-Hayy */
  X(62, {
    task1: {
      prompt: 'The line graph below shows the percentage of adults who reported good health from the age of 65 to the age of 85, comparing those who took at least 150 minutes of exercise a week with those who took less. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Adults reporting good health (%), illustrative data', unit: '% reporting good health', ymax: 100, x: ['Age 65', 'Age 70', 'Age 75', 'Age 80', 'Age 85'], series: [{ name: '150 minutes or more a week', y: [82, 78, 73, 66, 58] }, { name: 'Under 150 minutes a week', y: [70, 60, 50, 38, 27] }] },
      keywords: ['adults', 'good health', 'exercise', 'minutes', 'age', 'percentage', 'declined', 'gap', 'week', 'older'],
      model: `The line graph shows the percentage of adults who reported good health at five ages, from 65 to 85. It compares those who took at least 150 minutes of exercise a week with those who took less. The data are illustrative.

Overall, the proportion of adults in good health fell with age in both groups, but it fell much more slowly among the adults who exercised regularly.

At the age of 65, 82% of the active group reported good health, compared with 70% of the less active group. In the active group, the figure decreased gradually, to 78% at 70, 73% at 75 and 66% at 80, and it was still 58% at 85, a fall of 24 percentage points.

The decline was much steeper in the less active group. Their figure dropped to 60% at 70 and 50% at 75, and then to 38% at 80 and just 27% at 85, a fall of 43 points.

As a result, the gap between the two groups more than doubled, from 12 percentage points at the age of 65 to 31 points at the age of 85.`,
      analysis: ['Task Achievement: две линии по пяти возрастам; обзор — у активных спад медленнее.', 'Вычисления: −24 и −43; разрыв 12 → 31.', 'Cohesion: Overall / compared with / As a result.', 'Lexical Resource: active group, declined gradually, steeper, more than doubled.']
    },
    heads: {
      list: ['The history of medicine', 'Investing in what lasts', 'How human life differs from permanent life', 'Modern retirement systems', 'Verses about reliance', 'The logic of relying on what lasts'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: чем человеческая жизнь отличается от вечной.' }, { p: 'B', a: 'v', e: 'Абзац B: 2:255, 40:65, 25:58 — об опоре.' }, { p: 'C', a: 'vi', e: 'Абзац C: логика опоры на постоянное.' }, { p: 'D', a: 'ii', e: 'Абзац D: вложения в то, что остаётся.' }]
    },
    ynng: [
      { q: 'The writer suggests that it is wise to invest in knowledge, good deeds and relationships.', a: 'YES', e: 'Абзац D: разумно вкладываться в знание, добрые дела и отношения.' },
      { q: 'The writer believes that position, money and popularity are permanent.', a: 'NO', e: 'Абзац D: должность, деньги и популярность могут исчезнуть.' },
      { q: 'The writer says that the Verse of the Throne is the best-known verse of the Qur\'an.', a: 'NOT GIVEN', e: 'Известность аята аль-Курси не сравнивается с другими.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['At least a hundred and fifty minutes of moderate exercise a week', 'Reading, learning a language or playing games', 'Regular contact, volunteering and joining clubs', 'Caring for grandchildren or mentoring young people'], items: [{ q: 'Exercise', a: 'A', e: 'Не менее ста пятидесяти минут умеренной нагрузки в неделю.' }, { q: 'Keeping the mind active', a: 'B', e: 'Чтение, изучение языка, игры.' }, { q: 'Social connection', a: 'C', e: 'Регулярные контакты, волонтёрство, клубы.' }, { q: 'A sense of purpose', a: 'D', e: 'Забота о внуках или наставничество.' }] },
    short: [{ q: 'How many minutes of moderate exercise a week do health organisations recommend for adults?', a: ['150', 'one hundred and fifty', 'at least 150', 'at least one hundred and fifty'], e: 'Рекомендуется не менее ста пятидесяти минут в неделю.' }, { q: 'By which date is the report due?', a: ['12', '12th', 'the twelfth', 'Tuesday the twelfth', 'Tuesday 12th', 'the 12th', 'Tuesday the 12th'], e: 'Доклад — до вторника, двенадцатого.' }]
  });

  /* 63 · Al-Qayyum */
  X(63, {
    task1: {
      prompt: 'The table below shows the time taken by four stages of water treatment at a city plant and the percentage of particles that had been removed by the end of each stage. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Four stages of water treatment, illustrative data', head: ['Stage', 'Time taken (hours)', 'Particles removed so far (%)'], rows: [['Screening', '0.5', '15'], ['Settling', '4', '70'], ['Sand filtration', '3', '95'], ['Disinfection', '2', '99']] },
      keywords: ['water treatment', 'stages', 'screening', 'settling', 'sand filtration', 'disinfection', 'hours', 'particles', 'removed', 'cumulative'],
      model: `The table shows how long each of four stages of water treatment takes at a city plant and the percentage of particles that had been removed by the end of each stage. The data are illustrative.

Overall, most of the particles are removed during the first three stages, while the final stage takes less time and removes only a small additional amount.

Screening is the shortest stage, at half an hour, and by the end of it 15% of the particles have been removed. Settling is the longest stage, at 4 hours, and it is also the most effective: the proportion of particles removed rises from 15% to 70%, an increase of 55 percentage points.

Sand filtration takes 3 hours and removes a further 25 points, bringing the total to 95%. The last stage, disinfection, lasts 2 hours, and it raises the total to 99%, which is an increase of only 4 points.

The whole process takes 9.5 hours. The two stages that take the longest, settling and sand filtration, together account for 7 hours, or about three quarters of the total time, and for 80 of the 99 percentage points of removal.`,
      analysis: ['Task Achievement: четыре стадии, два показателя; обзор — основная очистка в первых трёх.', 'Вычисления: +55, +25, +4; сумма времени 9.5 часа; 4 + 3 = 7 часов ≈ три четверти; 55 + 25 = 80 пунктов.', 'Cohesion: Overall / while / a further / together account for.', 'Lexical Resource: removed, effective, additional amount, raises the total.']
    },
    heads: {
      list: ['The architecture of mosques', 'Becoming a source of support', 'Standing, steadiness and a double meaning', 'The history of city planning', 'A name that follows another', 'The analogy of the columns'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: стояние, стойкость и двойной смысл.' }, { p: 'B', a: 'v', e: 'Абзац B: имя, почти всегда следующее за Аль-Хайй.' }, { p: 'C', a: 'vi', e: 'Абзац C: аналогия с колоннами.' }, { p: 'D', a: 'ii', e: 'Абзац D: стать источником опоры.' }]
    },
    ynng: [
      { q: 'The writer suggests that valuable things need continuous care in order to remain healthy.', a: 'YES', e: 'Абзац D: дружба, растение или навык не останутся здоровыми, если их оставить.' },
      { q: 'The writer says that the universe depends on God only at the moment of its origin.', a: 'NO', e: 'Абзац C: зависимость — в каждый момент.' },
      { q: 'The writer states that Al-Qayyum is the greatest of all the names.', a: 'NOT GIVEN', e: 'Иерархия имён в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What happens at each stage of the treatment process? Choose the correct letter, A–D.', options: ['Screens remove branches and rubbish', 'Chemicals make small particles stick together and sink', 'The water goes through sand filters', 'The water is disinfected and tested every two hours'], items: [{ q: 'The first stage', a: 'A', e: 'Сначала решётки убирают ветки и мусор.' }, { q: 'The second stage', a: 'B', e: 'Затем химикаты склеивают частицы, и они оседают.' }, { q: 'The third stage', a: 'C', e: 'Затем вода проходит песчаные фильтры.' }, { q: 'The final stage', a: 'D', e: 'В конце — обеззараживание, проверка каждые два часа.' }] },
    short: [{ q: 'How many people does the plant employ?', a: ['120', 'one hundred and twenty', 'a hundred and twenty'], e: 'На станции работает сто двадцать человек.' }, { q: 'Approximately how many residents receive water from the plant?', a: ['300000', '300,000', 'three hundred thousand', '300 000'], e: 'Станция снабжает около трёхсот тысяч жителей.' }]
  });

  /* 64 · Al-Wajid */
  X(64, {
    task1: {
      prompt: 'The bar chart below shows the number of five kinds of item handed in to a lost property office in a week and the number that were claimed by their owners. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Lost property: items handed in and claimed in one week, illustrative data', unit: 'number of items', ymax: 150, cats: ['Bags', 'Phones', 'Umbrellas', 'Books', 'Keys'], series: [{ name: 'Handed in', v: [140, 95, 120, 60, 75] }, { name: 'Claimed by owners', v: [98, 82, 30, 28, 66] }] },
      keywords: ['lost property', 'items', 'handed in', 'claimed', 'bags', 'phones', 'umbrellas', 'books', 'keys', 'owners'],
      model: `The bar chart compares the number of five kinds of item that were handed in to a lost property office in a week with the number that were claimed by their owners. The data are illustrative.

Overall, bags were the most frequently handed in, but umbrellas and books were the least likely to be claimed, whereas phones and keys were claimed very often.

Bags were handed in most often, at 140 items, followed by umbrellas at 120, phones at 95, keys at 75 and books at 60. Of the 140 bags, 98 were claimed, which is 70%.

The proportions claimed differed greatly. Phones and keys had the highest rates: 82 of the 95 phones, or about 86%, and 66 of the 75 keys, or 88%, were returned to their owners. By contrast, only 30 of the 120 umbrellas were claimed, which is 25%, and 28 of the 60 books, which is about 47%.

In total, 490 items were handed in during the week, and 304 of them, roughly 62%, were claimed. It follows that small personal items of value were the most likely to be collected, while cheaper and more replaceable items were often left unclaimed.`,
      analysis: ['Task Achievement: пять категорий, две серии; обзор — различие в доле возвращённых вещей.', 'Вычисления: 70%, 86%, 88%, 25%, 47%; 140 + 95 + 120 + 60 + 75 = 490; 98 + 82 + 30 + 28 + 66 = 304 (≈ 62%).', 'Cohesion: Overall / whereas / By contrast / In total.', 'Lexical Resource: handed in, claimed, rates, returned to their owners.']
    },
    heads: {
      list: ['The history of orphanages', 'Gratitude begins with memory', 'Finding and possessing', 'A comparison of legal systems', 'Three questions in Surah 93', 'Supporting those in need'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: находить и обладать.' }, { p: 'B', a: 'v', e: 'Абзац B: три вопроса в суре 93.' }, { p: 'C', a: 'ii', e: 'Абзац C: благодарность начинается с памяти.' }, { p: 'D', a: 'vi', e: 'Абзац D: поддержка нуждающихся.' }]
    },
    ynng: [
      { q: 'The writer suggests that people who recall times when help reached them are better prepared to be generous.', a: 'YES', e: 'Абзац C: помнящие о помощи лучше готовы быть щедрыми.' },
      { q: 'The writer says that the name Al-Wajid itself appears in Surah 93.', a: 'NO', e: 'Абзац B: само имя не упоминается — используется глагол.' },
      { q: 'The writer says that orphans receive too little help today.', a: 'NOT GIVEN', e: 'Современная ситуация с помощью сиротам не обсуждается.' }
    ],
    matching: { instruction: 'What does the clerk or Madi say about each of the following? Choose the correct letter, A–D.', options: ['Coach C', 'A small red label on the zip', 'Open until six', 'A charge of five pounds'], items: [{ q: 'Where Madi was sitting', a: 'A', e: 'Мади сидел в вагоне C.' }, { q: 'What marks the bag', a: 'B', e: 'На молнии маленький красный ярлык.' }, { q: 'The office hours today', a: 'C', e: 'Бюро открыто до шести.' }, { q: 'An item kept for more than thirty days', a: 'D', e: 'За хранение дольше тридцати дней — пять фунтов.' }] },
    short: [{ q: 'At what time was Madi\'s train?', a: ['8.14', '8:14', 'eight fourteen', '8.14 am', '8:14 am'], e: 'Поезд в 8:14, а не в 8:40.' }, { q: 'What must Madi bring to collect the bag?', a: ['passport and ticket', 'his passport and ticket', 'a passport and a ticket', 'passport and a ticket', 'his passport and a ticket'], e: 'Нужны паспорт и билет.' }]
  });

  /* 65 · Al-Majid */
  X(65, {
    task1: {
      prompt: 'The line graph below shows an average trust score, out of 100, given to three people over five years, depending on how they behaved. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average trust score (out of 100), illustrative data', unit: 'trust score', ymax: 100, x: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'], series: [{ name: 'Keeps promises consistently', y: [50, 58, 66, 73, 80] }, { name: 'Occasionally breaks promises', y: [50, 52, 47, 45, 41] }, { name: 'One serious betrayal in Year 3', y: [50, 58, 66, 30, 36] }] },
      keywords: ['trust', 'score', 'promises', 'betrayal', 'years', 'reputation', 'increased', 'fell', 'consistently', 'recovered'],
      model: `The line graph shows how an average trust score, out of 100, changed over five years for three people who behaved in different ways. The data are illustrative.

Overall, trust grew steadily for the person who kept promises consistently, declined slowly for the person who occasionally broke them and collapsed after a single serious betrayal.

All three people started with a score of 50. The person who kept promises consistently gained trust every year, reaching 80 in Year 5, an increase of 30 points. The score of the person who occasionally broke promises rose slightly to 52 in Year 2, but then fell in each of the following years, to 41 by the end.

The most dramatic change concerns the third person. Until Year 3, this person's score followed the same path as that of the first person and reached 66. After the serious betrayal, however, it dropped by 36 points to 30 in Year 4, and it recovered only slightly, to 36 in Year 5, which was lower than the starting figure.

As a result, the gap between the most and the least trusted person was 44 points in Year 5.`,
      analysis: ['Task Achievement: три линии, особенность — резкий обвал после предательства в 3-м году.', 'Вычисления: +30; −9; −36 (66 → 30), итог 36; разрыв 80 − 36 = 44.', 'Cohesion: Overall / Until Year 3 / After ... however / As a result.', 'Lexical Resource: consistently, collapsed, dramatic, recovered only slightly.']
    },
    heads: {
      list: ['The history of titles', 'Testing nobility in private', 'Two forms of one root', 'Songs of praise', 'The root in two verses', 'Nobility shown by conduct'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: две формы одного корня.' }, { p: 'B', a: 'v', e: 'Абзац B: корень в двух аятах — 11:73 и 85:15.' }, { p: 'C', a: 'vi', e: 'Абзац C: благородство проявляется в поведении.' }, { p: 'D', a: 'ii', e: 'Абзац D: проверка благородства наедине.' }]
    },
    ynng: [
      { q: 'The writer suggests that a good name is built slowly and can be lost through a single act of betrayal.', a: 'YES', e: 'Абзац C: доброе имя строится медленно, теряется одним предательством.' },
      { q: 'The writer believes that nobility depends only on family or position.', a: 'NO', e: 'Абзац C: благородство проявляется поведением.' },
      { q: 'The writer says that the second form was invented by later scholars.', a: 'NOT GIVEN', e: 'Происхождение второй формы не обсуждается.' }
    ],
    matching: { instruction: 'What do the speakers say about each of the following? Choose the correct letter, A–D.', options: ['Reputation is built by repeated actions', 'A single mistake can spread to thousands in an hour', 'Fame is how many people know you', 'A survey of one hundred students'], items: [{ q: 'Yeldos\'s central idea', a: 'A', e: 'Репутация строится повторяющимися поступками.' }, { q: 'Karina\'s focus', a: 'B', e: 'Сегодня одна ошибка быстро распространяется на тысячи людей.' }, { q: 'Fame, according to the tutor', a: 'C', e: 'Слава — это сколько людей вас знает.' }, { q: 'The method of data collection', a: 'D', e: 'Опрос ста студентов и пять интервью.' }] },
    short: [{ q: 'In which room is the final presentation?', a: ['Room nine', 'nine', '9', 'Room 9'], e: 'Итоговая презентация — в комнате девять.' }, { q: 'What is the deadline for the draft?', a: ['6 April', 'the sixth of April', '6th April', 'April 6', 'sixth of April', 'the 6th of April'], e: 'Черновик — до шестого апреля.' }]
  });

  /* 66 · Al-Wahid */
  X(66, {
    task1: {
      prompt: 'The table below shows the time taken to finish a task, the number of errors per page and the satisfaction of participants for three working methods. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Three working methods, illustrative data', head: ['Working method', 'Time to finish (minutes)', 'Errors per page', 'Satisfaction (out of 10)'], rows: [['Doing one task at a time', '40', '2', '7.8'], ['Switching every 10 minutes', '52', '4', '6.1'], ['Switching every 2 minutes', '68', '7', '4.2']] },
      keywords: ['working methods', 'time', 'errors', 'satisfaction', 'switching', 'one task', 'minutes', 'page', 'highest', 'lowest'],
      model: `The table compares three working methods in terms of the time taken to finish a task, the number of errors per page and the satisfaction of the participants. The data are illustrative.

Overall, working on one task at a time gave the best results on all three measures, and the more often participants switched between tasks, the worse their results were.

The participants who did one task at a time finished the task in 40 minutes, made only 2 errors per page and gave the highest satisfaction score, 7.8 out of 10.

Those who switched every 10 minutes needed 52 minutes, which is 12 minutes longer, and they made twice as many errors, 4 per page. Their satisfaction fell to 6.1.

The worst results were recorded for the participants who switched every 2 minutes. They took 68 minutes, which is 28 minutes more than the first group, and made 7 errors per page, three and a half times as many as the first group. Their satisfaction was the lowest, at only 4.2.

In other words, each step towards more frequent switching increased the time and the errors and reduced satisfaction.`,
      analysis: ['Task Achievement: три метода, три показателя; обзор — лучший метод по всем показателям.', 'Вычисления: 52 − 40 = 12; 68 − 40 = 28; 7/2 = 3.5.', 'Cohesion: Overall / Those who / The worst results / In other words.', 'Lexical Resource: switching, participants, three and a half times as many, satisfaction score.']
    },
    heads: {
      list: ['The history of numbers', 'Focus and integrity in daily life', 'The root of unity', 'Debates among philosophers', 'Verses on oneness', 'A unified self'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень w-h-d и единство.' }, { p: 'B', a: 'v', e: 'Абзац B: 2:163, 13:16, 39:4 о единстве.' }, { p: 'C', a: 'vi', e: 'Абзац C: целостное «я».' }, { p: 'D', a: 'ii', e: 'Абзац D: сосредоточенность и цельность в быту.' }]
    },
    ynng: [
      { q: 'The writer suggests that tawhid can be seen as a way of uniting the self around a single centre.', a: 'YES', e: 'Абзац C: многие авторы описывают тавхид как объединение «я» вокруг одного центра.' },
      { q: 'The writer believes that divided loyalties produce inner peace.', a: 'NO', e: 'Абзац C: разделённые привязанности порождают внутренний конфликт.' },
      { q: 'The writer says that the name Al-Wahid appears more often than the name Al-Ahad.', a: 'NOT GIVEN', e: 'Сравнение частоты имён не приводится.' }
    ],
    matching: { instruction: 'Which technique does each example illustrate? Choose the correct letter, A–D.', options: ['Set a single priority for the day', 'Work in blocks of about forty-five minutes', 'Put the phone in another room', 'Schedule a fixed time to read messages'], items: [{ q: 'Technique one', a: 'A', e: 'Первая — одна главная задача на день.' }, { q: 'Technique two', a: 'B', e: 'Вторая — блоки по сорок пять минут.' }, { q: 'Technique three', a: 'C', e: 'Третья — телефон в другой комнате.' }, { q: 'Technique five', a: 'D', e: 'Пятая — назначить время для чтения сообщений.' }] },
    short: [{ q: 'How long should each block of work be?', a: ['45 minutes', 'forty-five minutes', 'about forty-five minutes', 'about 45 minutes', '45'], e: 'Блоки по сорок пять минут.' }, { q: 'On which day will the results be discussed?', a: ['Wednesday'], e: 'Результаты обсудят в среду.' }]
  });

  /* 67 · Al-Ahad */
  X(67, {
    task1: {
      prompt: 'The bar chart below shows the percentage of students who felt worse after using social media and the percentage who were satisfied with their own lives, according to the time they spent on social media each day. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Students by daily social media use (%), illustrative data', unit: '% of students', ymax: 100, cats: ['Under 1 hour', '1–2 hours', '3–4 hours', '5 hours or more'], series: [{ name: 'Feel worse after using social media', v: [12, 25, 47, 68] }, { name: 'Satisfied with their own lives', v: [78, 70, 52, 38] }] },
      keywords: ['students', 'social media', 'hours', 'feel worse', 'satisfied', 'lives', 'percentage', 'daily', 'increase', 'decrease'],
      model: `The bar chart compares the percentage of students who felt worse after using social media with the percentage who were satisfied with their own lives, in four groups defined by the time spent on social media each day. The data are illustrative.

Overall, the more time students spent on social media, the more likely they were to feel worse and the less likely they were to be satisfied with their lives, so the two lines of data moved in opposite directions.

Among the students who used social media for less than an hour a day, only 12% felt worse, and 78% were satisfied with their lives. The proportion who felt worse then rose steadily, to 25% for the group using it for one to two hours and 47% for the group using it for three to four hours, and it reached 68% for those who spent five hours or more.

Satisfaction fell in the opposite direction, from 78% to 70%, 52% and finally 38%.

It is noticeable that the two measures crossed between the third and the fourth groups. In the group with three to four hours, satisfaction was still slightly higher, 52% against 47%, but for the group with five hours or more, the proportion feeling worse, 68%, was almost double the proportion who were satisfied, 38%.`,
      analysis: ['Task Achievement: две противоположные тенденции по четырём группам; пересечение показателей отмечено.', 'Вычисления: 12 → 68 и 78 → 38; 68 почти вдвое больше 38.', 'Cohesion: Overall / then / It is noticeable that / against.', 'Lexical Resource: opposite directions, steadily, crossed, almost double.']
    },
    heads: {
      list: ['A history of social networks', 'Individuality and sincerity', 'Counting and a oneness that cannot be paired', 'How surahs are named', 'The surah that defines the name', 'Uniqueness and social comparison'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: счёт и единство, которое нельзя разделить.' }, { p: 'B', a: 'v', e: 'Абзац B: сура 112, определяющая имя.' }, { p: 'C', a: 'vi', e: 'Абзац C: уникальность и социальное сравнение.' }, { p: 'D', a: 'ii', e: 'Абзац D: индивидуальность и искренность.' }]
    },
    ynng: [
      { q: 'The writer suggests that much dissatisfaction in modern life arises from comparing oneself with others.', a: 'YES', e: 'Абзац C: много неудовлетворённости рождается от сравнения себя с другими.' },
      { q: 'The writer believes that every person is unique in exactly the same absolute sense as God.', a: 'NO', e: 'Абзац C: человек уникален в ограниченном, относительном смысле.' },
      { q: 'The writer says that social media use is increasing every year.', a: 'NOT GIVEN', e: 'Динамика использования соцсетей в тексте не приводится.' }
    ],
    matching: { instruction: 'What do the students plan to do or discuss? Choose the correct letter, A–D.', options: ['A questionnaire for sixty students', 'A group discussion with eight students', 'A question about avoiding negative comparison', 'Ten minutes per group'], items: [{ q: 'The first method', a: 'A', e: 'Анкета для шестидесяти студентов.' }, { q: 'The second method', a: 'B', e: 'Групповое обсуждение с восемью студентами.' }, { q: 'The extra question suggested by the tutor', a: 'C', e: 'Вопрос о том, как избегать негативного сравнения.' }, { q: 'The final presentation', a: 'D', e: 'Итоговое выступление — десять минут на группу.' }] },
    short: [{ q: 'How many students will complete the questionnaire?', a: ['60', 'sixty'], e: 'Анкету заполнят шестьдесят студентов.' }, { q: 'What is the deadline?', a: ['9 December', 'the ninth of December', '9th December', 'December 9', 'ninth of December', 'the 9th of December'], e: 'Срок — девятое декабря.' }]
  });

  /* 68 · As-Samad */
  X(68, {
    task1: {
      prompt: 'The line graph below shows the number of calls received by a student helpline each month and the number of calls that led to a counsellor appointment, from January to June. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Helpline calls and counsellor appointments per month, illustrative data', unit: 'number', ymax: 400, x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], series: [{ name: 'Calls received', y: [120, 135, 180, 260, 340, 210] }, { name: 'Calls leading to an appointment', y: [18, 22, 40, 70, 98, 50] }] },
      keywords: ['helpline', 'calls', 'appointment', 'counsellor', 'month', 'peak', 'May', 'increased', 'fell', 'exams'],
      model: `The line graph shows the number of calls that a student helpline received each month from January to June, together with the number of calls that led to an appointment with a counsellor. The data are illustrative.

Overall, both figures rose sharply until May and then fell in June, and the number of appointments followed the same pattern as the number of calls.

The number of calls started at 120 in January and increased in every month until May, when it reached a peak of 340, which is almost three times the January figure. It then dropped to 210 in June. The biggest rises, of 80 calls each, were between March and April and between April and May.

The number of appointments followed a similar course. It was 18 in January, rose to 98 in May, and then fell to 50 in June.

It is noticeable that the proportion of calls that led to an appointment also increased. In January, 15% of calls resulted in an appointment, but in May the figure was about 29%, which suggests that the calls became more serious during the busy period, which probably coincided with the exams.`,
      analysis: ['Task Achievement: две линии с общим пиком в мае; доля звонков, ведущих к приёму, выросла.', 'Вычисления: 340 ≈ ×2.8 от 120; +80 между апрелем и маем; 18/120 = 15%; 98/340 ≈ 29%.', 'Cohesion: Overall / It then / It is noticeable that; осторожные «suggests», «probably».', 'Lexical Resource: peak, followed a similar course, resulted in, coincided with.']
    },
    heads: {
      list: ['The history of helplines', 'A refuge that never fails', 'Several early explanations', 'Rules for the recitation of the surah', 'Turning to God and becoming dependable', 'The name between two statements'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: несколько ранних объяснений.' }, { p: 'B', a: 'vi', e: 'Абзац B: имя между двумя утверждениями в суре 112.' }, { p: 'C', a: 'ii', e: 'Абзац C: опора, которая не подводит.' }, { p: 'D', a: 'v', e: 'Абзац D: обращаться к Богу и быть надёжным для других.' }]
    },
    ynng: [
      { q: 'The writer suggests that it is unrealistic to expect perfection from friends or leaders.', a: 'YES', e: 'Абзац C: нереалистично ждать совершенства от друзей и лидеров.' },
      { q: 'The writer says that asking other people for help is shameful.', a: 'NO', e: 'Абзац D: просить помощи у людей — часть человеческой жизни, без стыда.' },
      { q: 'The writer says that As-Samad is the best-known of all the names.', a: 'NOT GIVEN', e: 'Известность имени не сравнивается.' }
    ],
    matching: { instruction: 'What do Ernar and the volunteer say about each of the following? Choose the correct letter, A–D.', options: ['Three weeks', 'The chemistry exam', 'Thursday at four', 'Room fifteen'], items: [{ q: 'How long Ernar has felt stressed', a: 'A', e: 'Эрнар в напряжении около трёх недель.' }, { q: 'What worries Ernar most', a: 'B', e: 'Больше всего его беспокоит экзамен по химии.' }, { q: 'The counsellor appointment', a: 'C', e: 'Приём у консультанта — в четверг в четыре.' }, { q: 'The location of the appointment', a: 'D', e: 'Кабинет пятнадцать в студенческом центре.' }] },
    short: [{ q: 'On what date is the chemistry exam?', a: ['24 May', 'the twenty-fourth of May', '24th May', 'May 24', 'twenty-fourth of May', 'the 24th of May'], e: 'Экзамен по химии — двадцать четвёртого мая.' }, { q: 'Until what time is the line open each evening?', a: ['11', 'eleven', '11 pm', '11pm', '23:00', '11:00'], e: 'Линия открыта до одиннадцати вечера.' }]
  });

  /* 69 · Al-Qadir */
  X(69, {
    task1: {
      prompt: 'The bar chart below shows the number of members of an adaptive sports club in five sports, divided into members aged under 18 and members aged 18 or over. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Club members by sport and age group (number), illustrative data', unit: 'number of members', ymax: 40, cats: ['Swimming', 'Table tennis', 'Basketball', 'Athletics', 'Archery'], series: [{ name: 'Aged under 18', v: [20, 8, 14, 9, 3] }, { name: 'Aged 18 or over', v: [14, 14, 11, 9, 8] }] },
      keywords: ['members', 'sports', 'swimming', 'table tennis', 'basketball', 'athletics', 'archery', 'under 18', 'adults', 'club'],
      model: `The bar chart shows the number of members of an adaptive sports club in five sports, divided into members aged under 18 and members aged 18 or over. The data are illustrative.

Overall, swimming was the most popular sport, and young people outnumbered adults in swimming and basketball, while adults were in the majority in table tennis and archery.

Swimming attracted the largest number of members, 34 in total, of whom 20 were under 18 and 14 were adults. Basketball came second, with 25 members, 14 of them young people and 11 adults. Table tennis had 22 members, and athletics 18.

In table tennis, the adults outnumbered the young members, 14 to 8, and in archery, the least popular sport with only 11 members, the adults were also the majority, with 8 members against 3 young ones. In athletics, the two age groups were exactly equal, with 9 members each.

In total, the club had 110 members, of whom 54 were under 18 and 56 were adults, so the two age groups were almost equal in size.`,
      analysis: ['Task Achievement: пять видов спорта, две возрастные группы; обзор — плавание лидирует, различия по видам.', 'Вычисления: 20 + 14 = 34; 14 + 11 = 25; 54 + 56 = 110; в лёгкой атлетике 9 и 9.', 'Cohesion: Overall / of whom / while / against.', 'Lexical Resource: outnumbered, in the majority, age groups, attracted.']
    },
    heads: {
      list: ['The rules of archery', 'Planning according to one\'s measure', 'Ability and measure', 'The history of the Paralympic movement', 'The word in questions and warnings', 'An argument from the greater to the lesser'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: способность и мера.' }, { p: 'B', a: 'v', e: 'Абзац B: слово в вопросах и предупреждениях (6:65, 46:33, 75:40).' }, { p: 'C', a: 'vi', e: 'Абзац C: довод от большего к меньшему.' }, { p: 'D', a: 'ii', e: 'Абзац D: планировать по своей мере.' }]
    },
    ynng: [
      { q: 'The writer suggests that the limits of human ability are not the limits of reality.', a: 'YES', e: 'Абзац C: пределы человеческих способностей — не пределы реальности.' },
      { q: 'The writer claims that the human mind can fully grasp divine power.', a: 'NO', e: 'Абзац C: довод не утверждает, что человеческий разум способен полностью постичь Божью власть.' },
      { q: 'The writer says that most people overestimate their own abilities.', a: 'NOT GIVEN', e: 'Самооценка способностей людей в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the coach say about each of the following? Choose the correct letter, A–D.', options: ['Swimming, table tennis, basketball, athletics and archery', 'A free assessment', 'It is adjusted every three months', 'It costs twenty pounds a month'], items: [{ q: 'The sports offered by the club', a: 'A', e: 'Плавание, настольный теннис, баскетбол, лёгкая атлетика и стрельба из лука.' }, { q: 'What every new member receives', a: 'B', e: 'Каждый новый член получает бесплатную оценку.' }, { q: 'The training programme', a: 'C', e: 'Программа корректируется каждые три месяца.' }, { q: 'The membership fee', a: 'D', e: 'Членство — двадцать фунтов в месяц.' }] },
    short: [{ q: 'How many members does the club have?', a: ['110', 'one hundred and ten', 'a hundred and ten'], e: 'В клубе сто десять человек.' }, { q: 'At what time do the Saturday sessions begin?', a: ['10', 'ten', '10:00', '10 am', '10am'], e: 'По субботам занятия начинаются в десять.' }]
  });

  /* 70 · Al-Muqtadir */
  X(70, {
    task1: {
      prompt: 'The diagram below shows the steps of a decision-making process in an organisation that applies safeguards against the abuse of power. The process is illustrative. ' + T1,
      chart: { type: 'process', caption: 'A decision process with safeguards on power', steps: ['The leader proposes a decision.', 'The leader explains the reasons to all members.', 'Opinions are collected, including those of members who disagree.', 'The proposal is revised in the light of the opinions.', 'The final decision is taken and published.', 'An independent audit reviews the decision.', 'At the end of the term, a successor is chosen.'] },
      keywords: ['leader', 'decision', 'reasons', 'opinions', 'disagree', 'revised', 'audit', 'term', 'successor', 'finally'],
      model: `The diagram illustrates a decision-making process of seven steps in an organisation which has safeguards against the abuse of power. It is an illustrative example.

Overall, the process is designed so that the leader does not decide alone: the decision is explained, discussed and later checked, and the leader's power ends at the end of a fixed term.

First, the leader proposes a decision and explains the reasons to all members. Then opinions are collected, and members who disagree are explicitly included in this stage. After that, the proposal is revised in the light of what has been said.

Only when the proposal has been revised is the final decision taken and published. The process does not end at this point. An independent audit reviews the decision, which gives a check from outside the organisation.

Finally, at the end of the term, a successor is chosen. In this way, the process includes safeguards at three points: before the decision, after it and at the end of the leader's period in office.`,
      analysis: ['Task Achievement: защитные механизмы выделены в обзоре; процесс описан последовательно.', 'Process language: First / Then / After that / Only when / Finally; пассив.', 'Выбор деталей: включение несогласных, независимый аудит, срок полномочий.', 'Cohesion: In this way; вывод о трёх точках защиты.']
    },
    heads: {
      list: ['A history of weather forecasting', 'Calm and responsible attitudes to power', 'Two names from one root', 'The battle of two armies', 'Three places in the Qur\'an', 'A parable of rain and plants'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: два имени от одного корня.' }, { p: 'B', a: 'v', e: 'Абзац B: три места в Коране — 54:42, 18:45, 54:55.' }, { p: 'C', a: 'vi', e: 'Абзац C: притча о дожде и растениях.' }, { p: 'D', a: 'ii', e: 'Абзац D: спокойное и ответственное отношение к власти.' }]
    },
    ynng: [
      { q: 'The writer suggests that no human authority is absolute.', a: 'YES', e: 'Абзац D: никакая человеческая власть не абсолютна.' },
      { q: 'The writer recommends being afraid of those who seem all-powerful.', a: 'NO', e: 'Абзац D: бояться тех, кто кажется всесильным, не нужно.' },
      { q: 'The writer says that power always corrupts those who hold it.', a: 'NOT GIVEN', e: 'Влияние власти на людей в тексте так не обобщается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['Explain decisions and accept review', 'Seek opinions from those who disagree', 'Remember that the position is temporary', 'Limited terms of office'], items: [{ q: 'Accountability', a: 'A', e: 'Подотчётность: объяснять решения и принимать проверку.' }, { q: 'Listening', a: 'B', e: 'Слушание: спрашивать мнение несогласных.' }, { q: 'Humility', a: 'C', e: 'Смирение: помнить, что должность временна.' }, { q: 'A safeguard in organisations', a: 'D', e: 'В организациях: ограничение сроков полномочий.' }] },
    short: [{ q: 'On which day is the case study due?', a: ['Thursday'], e: 'Работа сдаётся в четверг, а не в среду.' }, { q: 'How long should the case study be?', a: ['one page', '1 page', 'a page'], e: 'Анализ — на одну страницу.' }]
  });
})();

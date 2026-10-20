// Имена 21–30: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 21 · Al-Basit */
  X(21, {
    task1: {
      prompt: 'The line graph below shows the number of plots available in a community garden and the number of applications for plots over six years. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Community garden: plots and applications, illustrative data', unit: 'number', ymax: 50, x: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'], series: [{ name: 'Plots available', y: [12, 12, 18, 18, 24, 24] }, { name: 'Applications received', y: [20, 26, 31, 38, 44, 47] }] },
      keywords: ['garden', 'plots', 'applications', 'available', 'years', 'increased', 'doubled', 'demand', 'gap', 'number'],
      model: `The line graph shows how many plots were available in a community garden and how many applications for plots were received over six years. The data are illustrative.

Overall, both figures rose throughout the period, but the number of applications grew much faster than the number of plots, so demand always exceeded supply.

The number of plots stayed at 12 for the first two years, increased to 18 in Year 3 and remained there in Year 4, before reaching 24 in Year 5 and staying at that level. In other words, the garden doubled in size over the period, but only in three steps.

By contrast, applications climbed in every year, from 20 in Year 1 to 47 in Year 6, which is more than double. The largest annual increase, of seven applications, came between Year 3 and Year 4, while the smallest, of only three, came in the final year.

As a result, the gap between applications and plots widened, from 8 in the first year to 23 in the last, despite the expansion of the garden.`,
      analysis: ['Task Achievement: две линии, обзор «спрос всегда выше предложения».', 'Данные: ступенчатый рост участков (12 → 18 → 24), удвоение; заявки 20 → 47; разрыв 8 → 23.', 'Cohesion: Overall / In other words / By contrast / As a result.', 'Lexical Resource: exceeded, supply and demand, stayed at, widened.']
    },
    heads: {
      list: ['A history of carpet weaving', 'Provision extended with knowledge', 'A root meaning to spread, and its partner name', 'How land is distributed in cities', 'Expansion beyond money', 'Generosity, lack of envy and wider learning'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: корень b-s-t и парное имя Al-Qabid.' }, { p: 'B', a: 'ii', e: 'Абзац B: 13:26 и 17:30 — расширение с знанием положения каждого.' }, { p: 'C', a: 'v', e: 'Абзац C: расширение шире денег.' }, { p: 'D', a: 'vi', e: 'Абзац D: щедрость, отсутствие зависти, расширение знаний.' }]
    },
    ynng: [
      { q: 'The writer suggests that expansion also means the opening up of the self.', a: 'YES', e: 'Абзац C: «expansion also means the opening up of the self».' },
      { q: 'The writer implies that the extension of provision is random.', a: 'NO', e: 'Абзац B: расширение «is not random».' },
      { q: 'The writer says that envy is more common among colleagues than among relatives.', a: 'NOT GIVEN', e: 'Сравнение зависти среди коллег и родственников не приводится.' }
    ],
    matching: { instruction: 'What does the coordinator say about each of the following? Choose the correct letter, A–D.', options: ['There will be twenty-four plots', 'The tools are kept in the blue shed', 'It costs fifteen pounds for the season', 'There will be a shared lunch'], items: [{ q: 'From the first of April', a: 'A', e: 'С 1 апреля будет двадцать четыре участка.' }, { q: 'Gloves and tools', a: 'B', e: 'Инструменты хранятся в голубом сарае.' }, { q: 'The cost of a plot', a: 'C', e: 'Участок стоит пятнадцать фунтов за сезон.' }, { q: 'The first Sunday of every month', a: 'D', e: 'В первое воскресенье месяца — общий обед.' }] },
    short: [{ q: 'How many plots were there until now?', a: ['12', 'twelve'], e: 'До сих пор было двенадцать участков.' }, { q: 'On which day will the new section open?', a: ['Saturday'], e: 'Новая часть откроется в субботу, пятого.' }]
  });

  /* 22 · Al-Khafid */
  X(22, {
    task1: {
      prompt: 'The bar chart below shows the percentage of teenagers who said that they respect their older relatives and the percentage who said that they feel respected by them, according to the time they spend talking with older relatives each week. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Teenagers by weekly conversation time with older relatives (%), illustrative data', unit: '% of teenagers', ymax: 100, cats: ['Under 1 hour', '1–3 hours', '4–6 hours', '7 hours or more'], series: [{ name: 'Say they respect older relatives', v: [35, 52, 70, 81] }, { name: 'Say they feel respected by them', v: [30, 45, 64, 75] }] },
      keywords: ['teenagers', 'respect', 'older relatives', 'hours', 'conversation', 'percentage', 'weekly', 'highest', 'lowest', 'increase'],
      model: `The bar chart compares the percentage of teenagers who said that they respect their older relatives with the percentage who said that they feel respected by them, in four groups according to the time they spend talking with older relatives each week. The data are illustrative.

Overall, both figures rose steadily as the weekly conversation time increased, and in every group more teenagers said that they respect their relatives than said that they feel respected.

Among teenagers who talked for less than an hour a week, only 35% reported respect for older relatives and 30% felt respected. In the 1–3 hour group, the figures were 52% and 45%, and in the 4–6 hour group they reached 70% and 64%.

The highest figures were recorded by teenagers who talked for seven hours or more: 81% respected their relatives and 75% felt respected, which is more than double the figures for the lowest group.

The difference between the two measures remained fairly small and stable, at between 5 and 7 percentage points in all four groups.`,
      analysis: ['Task Achievement: две серии по четырём группам; общий вывод о росте и о постоянном небольшом разрыве.', 'Данные: 35 → 81 и 30 → 75; разрыв 5–7 пунктов.', 'Cohesion: Overall / Among / which is more than double.', 'Lexical Resource: steadily, remained fairly stable, recorded, respectively-style comparisons.']
    },
    heads: {
      list: ['The history of oral traditions', 'A day when status is reversed', 'How to win an argument', 'Lowering and the paired name', 'Quiet ways to practise humility', 'Lowering oneself as a virtue'],
      items: [{ p: 'A', a: 'iv', e: 'Абзац A: глагол khafada и парное имя Ar-Rafi\'.' }, { p: 'B', a: 'ii', e: 'Абзац B: 56:3 — день, когда статус меняется.' }, { p: 'C', a: 'vi', e: 'Абзац C: понижение себя как добродетель (17:24, 31:19).' }, { p: 'D', a: 'v', e: 'Абзац D: тихие способы практиковать смирение.' }]
    },
    ynng: [
      { q: 'The writer suggests that lowering one\'s voice in an argument usually calms both sides.', a: 'YES', e: 'Абзац D: понижение голоса «usually calms both sides».' },
      { q: 'The writer believes that lowering oneself voluntarily is a sign of weakness.', a: 'NO', e: 'Абзац C: добровольное смирение — признак силы.' },
      { q: 'The writer claims that young people rarely argue with their parents.', a: 'NOT GIVEN', e: 'Частота споров молодёжи с родителями не обсуждается.' }
    ],
    matching: { instruction: 'What will Madina ask her great-uncle about? Choose the correct letter, A–D.', options: ['His childhood', 'His work as a railway engineer', 'Advice for young people', 'The date of the presentation'], items: [{ q: 'The first topic', a: 'A', e: 'Сначала — о детстве.' }, { q: 'The second topic', a: 'B', e: 'Затем — о работе железнодорожным инженером.' }, { q: 'The final question', a: 'C', e: 'В конце — совет молодым людям.' }] },
    short: [{ q: 'How old is Madina\'s great-uncle?', a: ['84', 'eighty-four', 'eighty four'], e: 'Двоюродному деду восемьдесят четыре года.' }, { q: 'How long is the presentation?', a: ['10 minutes', 'ten minutes', '10', 'ten'], e: 'Презентация длится десять минут.' }]
  });

  /* 23 · Ar-Rafi' */
  X(23, {
    task1: {
      prompt: 'The table below shows the results of a survey of respect for five occupations, together with the years of training they require. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Respect for five occupations, illustrative survey data', head: ['Occupation', 'Respect score (out of 100)', 'Years of training', 'Ranked in top three (%)'], rows: [['Doctor', '91', '11', '58'], ['Teacher', '84', '5', '41'], ['Engineer', '80', '5', '29'], ['Journalist', '62', '4', '9'], ['Shop assistant', '55', '1', '3']] },
      keywords: ['respect', 'occupations', 'doctor', 'teacher', 'engineer', 'journalist', 'training', 'score', 'survey', 'highest'],
      model: `The table shows the results of a survey of respect for five occupations, together with the number of years of training that each occupation requires. The data are illustrative.

Overall, the occupations with longer training generally received higher respect scores, although the relationship was not perfect.

Doctors were the most respected, with a score of 91 out of 100, and they also required the longest training, 11 years. They were also ranked in the top three by 58% of respondents, far more than any other occupation. Teachers came second, with a score of 84, and they were ranked in the top three by 41% of the respondents.

Teachers and engineers both needed five years of training, but teachers scored 4 points higher, at 84 compared with 80, and a larger share of respondents placed them in the top three, 41% against 29%.

At the lower end, journalists scored 62 after four years of training, and shop assistants had the lowest score, 55, with only one year of training. Only 9% and 3% of respondents respectively ranked these two occupations in the top three.`,
      analysis: ['Task Achievement: три показателя, обзор о связи обучения и уважения («не идеальной»).', 'Выбор данных: врачи (максимум), учителя и инженеры (одинаковое обучение, разный балл), нижняя граница.', 'Cohesion: Overall / At the lower end / respectively; сравнения «compared with», «against».', 'Lexical Resource: required, ranked, relationship, respondents.']
    },
    heads: {
      list: ['A list of famous universities', 'Why "by degrees" matters', 'Lifting and the paired name', 'Investing in knowledge and lifting others', 'The decline of old guilds', 'Two verses on raising by degrees'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: поднимать и парное имя Al-Khafid.' }, { p: 'B', a: 'vi', e: 'Абзац B: 6:83 и 58:11.' }, { p: 'C', a: 'ii', e: 'Абзац C: почему важно «по степеням».' }, { p: 'D', a: 'iv', e: 'Абзац D: вложения в знание и возвышение других.' }]
    },
    ynng: [
      { q: 'The writer suggests that respect for others is presented as part of the path upwards.', a: 'YES', e: 'Абзац C: вежливость и уважение к другим — часть пути вверх.' },
      { q: 'The writer implies that elevation is sudden and has no levels.', a: 'NO', e: 'Абзац C: возвышение постепенное и имеет уровни.' },
      { q: 'The writer says that scholars are paid more than other professionals.', a: 'NOT GIVEN', e: 'Оплата учёных в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['It is gradual and has levels', 'It is often linked to education', 'It should be done at the right moment', 'It makes a person more valuable, not less'], items: [{ q: 'Elevation', a: 'A', e: 'Возвышение постепенное, есть степени.' }, { q: 'Prestige', a: 'B', e: 'Престиж часто связан с образованием.' }, { q: 'Praising effort', a: 'C', e: 'Хвалить усилие нужно вовремя.' }, { q: 'Sharing knowledge', a: 'D', e: 'Тот, кто учит других, становится ценнее.' }] },
    short: [{ q: 'By which date must the assignment be handed in?', a: ['3 March', '3rd March', 'the third of March', 'March 3', '3rd of March', 'third of March'], e: 'Задание сдаётся до третьего марта.' }, { q: 'How long should the analysis be?', a: ['one page', '1 page', 'a page'], e: 'Анализ — на одну страницу.' }]
  });

  /* 24 · Al-Mu'izz */
  X(24, {
    task1: {
      prompt: 'The bar chart below shows the percentage of employees who reported high motivation and the percentage who planned to stay at least two years, according to the kind of recognition they received. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Employees by type of recognition received (%), illustrative data', unit: '% of employees', ymax: 100, cats: ['Public thanks', 'Personal note', 'Bonus only', 'No recognition'], series: [{ name: 'Report high motivation', v: [62, 70, 48, 19] }, { name: 'Plan to stay two years or more', v: [58, 66, 44, 25] }] },
      keywords: ['employees', 'recognition', 'motivation', 'public thanks', 'personal note', 'bonus', 'stay', 'percentage', 'highest', 'lowest'],
      model: `The bar chart compares the percentage of employees who reported high motivation with the percentage who planned to stay at least two years, according to the kind of recognition they received. The data are illustrative.

Overall, employees who received some form of personal recognition were the most motivated and the most likely to stay, while those who received no recognition scored lowest on both measures.

A personal note produced the highest figures, with 70% reporting high motivation and 66% planning to stay. Public thanks came second, at 62% and 58%. Employees who received only a bonus were noticeably less motivated, at 48%, and 44% of them planned to stay.

The lowest results were found among employees with no recognition at all: just 19% were highly motivated and 25% planned to stay. This was the only category in which the intention to stay was higher than motivation.

The gap in motivation between the best and the worst categories was therefore 51 percentage points, and a personal note outperformed a bonus by 22 points.`,
      analysis: ['Task Achievement: четыре категории, две серии; обзор отмечает лидера и аутсайдера.', 'Вычисления: 70 − 19 = 51; 70 − 48 = 22.', 'Cohesion: Overall / while / This was the only category / therefore.', 'Lexical Resource: recognition, outperformed, noticeably, planned to stay.']
    },
    heads: {
      list: ['A history of royal titles', 'Honour that does not depend on rank', 'A causative form from a shared root', 'How prizes are funded', 'Verses on sovereignty and honour', 'Honouring others in daily life'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: каузативная форма от корня \'-z-z.' }, { p: 'B', a: 'v', e: 'Абзац B: 3:26, 35:10, 63:8.' }, { p: 'C', a: 'ii', e: 'Абзац C: почёт, не зависящий от должности.' }, { p: 'D', a: 'vi', e: 'Абзац D: почитание других в повседневности.' }]
    },
    ynng: [
      { q: 'The writer suggests that respect based on integrity lasts longer than respect based on rank.', a: 'YES', e: 'Абзац C: уважение, основанное на честности, живёт дольше.' },
      { q: 'The writer believes that honour comes mainly from a person\'s position.', a: 'NO', e: 'Абзац C: общее мнение, что почёт — от власти, богатства или должности, оспаривается.' },
      { q: 'The writer says that teachers should be paid more than they are now.', a: 'NOT GIVEN', e: 'Оплата учителей в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the organiser say about each of the following? Choose the correct letter, A–D.', options: ['Smart clothes are recommended', 'The seats are not numbered', 'Refreshments are served in the foyer', 'Each student may bring three guests'], items: [{ q: 'The dress code', a: 'A', e: 'Рекомендуется нарядная одежда, форма не нужна.' }, { q: 'The seating', a: 'B', e: 'Места не пронумерованы, поэтому приходить нужно к шести.' }, { q: 'After the ceremony', a: 'C', e: 'После церемонии — угощение в фойе.' }, { q: 'The number of tickets for each student', a: 'D', e: 'Каждый ученик может привести трёх гостей.' }] },
    short: [{ q: 'On which street is the entrance to the theatre?', a: ['Mir Street', 'Mir'], e: 'Вход — со стороны улицы Мир.' }, { q: 'How long will the programme last?', a: ['two hours', 'about two hours', '2 hours', 'about 2 hours'], e: 'Программа продлится около двух часов.' }]
  });

  /* 25 · Al-Mudhill */
  X(25, {
    task1: {
      prompt: 'The line graph below shows the number of reports of online and in-person bullying received by a school each month after it launched an anti-bullying programme. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Bullying reports per month, illustrative data', unit: 'reports', ymax: 30, x: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'], series: [{ name: 'Online bullying', y: [14, 16, 13, 10, 7, 5] }, { name: 'In-person bullying', y: [20, 17, 14, 11, 9, 7] }] },
      keywords: ['bullying', 'reports', 'online', 'in-person', 'school', 'programme', 'month', 'decreased', 'peak', 'February'],
      model: `The line graph shows the number of reports of online and in-person bullying that a school received each month from September to February, after it launched an anti-bullying programme. The data are illustrative.

Overall, the number of reports fell for both types of bullying by the end of the period, and in-person bullying was reported more often than online bullying in every month.

In-person reports declined steadily, from 20 in September to 7 in February, a fall of 13 reports. The pattern for online bullying was different. Reports rose slightly from 14 in September to a peak of 16 in October, and only then began to decline, reaching 5 in February.

The gap between the two lines was largest at the beginning, at 6 reports in September. In October it narrowed to just 1, when the two types were almost equal, and it remained small throughout the following months, at between 1 and 2 reports.

By February, the number of online reports was 5 and the number of in-person reports was 7, and both of these were far below the in-person figure of 20 reports at the start of the period.`,
      analysis: ['Task Achievement: две линии, особенность онлайн-кривой (пик в октябре), общий спад.', 'Данные: −13 у очных случаев; разрыв 6 → 1; итог 5 и 7.', 'Cohesion: Overall / The pattern ... was different / By February.', 'Lexical Resource: peak, declined steadily, narrowed, throughout.']
    },
    heads: {
      list: ['The history of schoolyard games', 'Key verses and their context', 'Online safety software', 'What belongs to God and what is allowed to people', 'A name that is often misunderstood', 'Three lessons for daily life'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: имя, которое часто понимают неверно.' }, { p: 'B', a: 'ii', e: 'Абзац B: 3:26 и 22:18 в контексте.' }, { p: 'C', a: 'iv', e: 'Абзац C: что принадлежит Богу, а что позволено людям.' }, { p: 'D', a: 'vi', e: 'Абзац D: три практических урока.' }]
    },
    ynng: [
      { q: 'The writer believes that humbling is presented as a consequence of persistent pride or oppression, not as an arbitrary act.', a: 'YES', e: 'Абзац B: унижение объясняется как следствие упорной гордыни или угнетения.' },
      { q: 'The writer believes that people may humiliate those who are arrogant.', a: 'NO', e: 'Абзац C: людям не дано права унижать друг друга.' },
      { q: 'The writer says that bullying is more common in large schools than in small ones.', a: 'NOT GIVEN', e: 'Сравнение школ по размеру не приводится.' }
    ],
    matching: { instruction: 'What does the principal say about each of the following? Choose the correct letter, A–D.', options: ['It is recorded within one day', 'It can lead to a three-day suspension', 'It is held on the second Tuesday of the month', 'It is taught in the ninth grade'], items: [{ q: 'A report from a student', a: 'A', e: 'Классный руководитель фиксирует сообщение в течение суток.' }, { q: 'Bullying that continues', a: 'B', e: 'Последствия — вплоть до отстранения на три дня.' }, { q: 'The workshop on respect', a: 'C', e: 'Семинар проходит во второй вторник месяца.' }, { q: 'Digital citizenship', a: 'D', e: 'Цифровую грамотность преподают в девятом классе.' }] },
    short: [{ q: 'What should students save as evidence of online bullying?', a: ['screenshots', 'screen shots'], e: 'Нужно сохранять скриншоты.' }, { q: 'How often is the workshop on respect held?', a: ['once a month', 'monthly', 'every month'], e: 'Семинар проходит раз в месяц.' }]
  });

  /* 26 · As-Sami' */
  X(26, {
    task1: {
      prompt: 'The diagram below shows the steps of a pair exercise used in an active listening workshop. The exercise is illustrative. ' + T1,
      chart: { type: 'process', caption: 'A pair exercise in active listening', steps: ['The group forms pairs.', 'One person speaks for four minutes about a challenge at work.', 'The other person only listens and does not interrupt.', 'The listener summarises what was heard.', 'The speaker says whether the summary was accurate.', 'The pair discusses what was missed.', 'The partners swap roles and repeat the exercise.'] },
      keywords: ['pairs', 'speaks', 'listens', 'summarises', 'accurate', 'roles', 'minutes', 'challenge', 'exercise', 'finally'],
      model: `The diagram illustrates a pair exercise used in an active listening workshop, which consists of seven steps. It is an illustrative example.

Overall, the exercise is cyclical: one person speaks and the other listens, they check how well the message was understood, and then they exchange roles.

First, the group forms pairs. Then one person speaks for four minutes about a challenge at work, which is the only step with a fixed length. During this stage, the other person only listens and does not interrupt.

After the speaker has finished, the listener summarises what was heard. The speaker then says whether the summary was accurate, and the pair discusses what was missed. This part of the exercise is the key stage, because it shows how much of the message has actually been understood.

Finally, the partners swap roles and repeat the whole sequence, so that each participant has the experience of both speaking and listening.`,
      analysis: ['Task Achievement: цикличность процесса отмечена в обзоре.', 'Process language: First / Then / After / Finally; активный залог людей-участников.', 'Выбор деталей: единственный шаг с фиксированной длительностью (4 минуты); ключевой этап проверки.', 'Cohesion: which / so that; вывод о смене ролей.']
    },
    heads: {
      list: ['A history of hearing aids', 'Reassurance in other verses', 'Noise in modern cities', 'Becoming a better listener', 'Hearing that is joined with awareness', 'A famous complaint that was heard'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: слух, соединённый с осведомлённостью.' }, { p: 'B', a: 'vi', e: 'Абзац B: известная жалоба, которая была услышана (сура 58).' }, { p: 'C', a: 'ii', e: 'Абзац C: утешение в 17:1 и 2:137.' }, { p: 'D', a: 'iv', e: 'Абзац D: как стать лучшим слушателем.' }]
    },
    ynng: [
      { q: 'The writer suggests that taking the complaints of relatives seriously can prevent misunderstandings from growing.', a: 'YES', e: 'Абзац D: серьёзное отношение к жалобам родных предотвращает рост недоразумений.' },
      { q: 'The writer implies that some complaints are too small to be heard.', a: 'NO', e: 'Абзац B: «no complaint is too small to be heard».' },
      { q: 'The writer states that women complained to the Prophet more often than men.', a: 'NOT GIVEN', e: 'Сравнение частоты жалоб мужчин и женщин не приводится.' }
    ],
    matching: { instruction: 'What happens in each part of the workshop? Choose the correct letter, A–D.', options: ['Participants listen for three minutes without speaking', 'One person speaks for four minutes while the other listens', 'Techniques such as open questions are discussed', 'A certificate and a handout are given'], items: [{ q: 'The first part', a: 'A', e: 'В первой части — три минуты слушания без слов.' }, { q: 'The second part', a: 'B', e: 'Во второй — один говорит четыре минуты, другой слушает.' }, { q: 'The third part', a: 'C', e: 'В третьей — обсуждение техник, например открытых вопросов.' }, { q: 'At the end of the day', a: 'D', e: 'В конце дня — сертификат и памятка.' }] },
    short: [{ q: 'How many participants are in the group?', a: ['24', 'twenty-four', 'twenty four'], e: 'В группе двадцать четыре участника.' }, { q: 'At what time does the workshop finish?', a: ['4', 'four', '4:00', '4 pm', '4pm', '16:00'], e: 'Занятие заканчивается в четыре часа.' }]
  });

  /* 27 · Al-Basir */
  X(27, {
    task1: {
      prompt: 'The bar chart below shows the percentage of office workers who reported eye strain, according to their daily screen time and whether they took regular breaks. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Office workers reporting eye strain (%), illustrative data', unit: '% of workers', ymax: 100, cats: ['Under 4 hours', '4–6 hours', '7–9 hours', '10 hours or more'], series: [{ name: 'No breaks', v: [18, 34, 57, 76] }, { name: 'Short break every hour', v: [9, 16, 28, 41] }] },
      keywords: ['eye strain', 'workers', 'screen time', 'hours', 'breaks', 'percentage', 'increased', 'highest', 'lowest', 'daily'],
      model: `The bar chart compares the percentage of office workers who reported eye strain, according to their daily screen time and to whether they took a short break every hour. The data are illustrative.

Overall, eye strain became more common as screen time increased, but it was consistently less common among workers who took regular breaks.

Among workers who took no breaks, the proportion rose sharply from 18% for those using screens for under four hours to 76% for those who used them for ten hours or more. The figures for the two middle groups were 34% and 57%.

The pattern was similar for workers who took a short break every hour, but at a much lower level. Their figures increased from 9% to 41%, and in each of the four groups they were roughly half of the corresponding figures for workers without breaks.

It is noticeable that the difference between the two types of worker widened as screen time grew, from 9 percentage points in the lowest group to 35 points in the highest.`,
      analysis: ['Task Achievement: две серии по четырём группам; обзор — рост с экранным временем, ниже у делающих перерывы.', 'Вычисления: разрыв 9 → 35 пунктов; примерно вдвое ниже.', 'Cohesion: Overall / The pattern was similar ... but / It is noticeable that.', 'Lexical Resource: consistently, corresponding figures, widened, roughly half.']
    },
    heads: {
      list: ['How lenses are made', 'Noticing details and integrity', 'Sight and insight', 'A history of lighthouses', 'Protecting the name from comparison', 'Complete awareness and its limits in humans'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: зрение и проницательность (basira).' }, { p: 'B', a: 'v', e: 'Абзац B: 42:11 защищает от сравнения.' }, { p: 'C', a: 'vi', e: 'Абзац C: полное знание и пределы людей, «inattentional blindness».' }, { p: 'D', a: 'ii', e: 'Абзац D: внимание к деталям и честность.' }]
    },
    ynng: [
      { q: 'The writer suggests that a person who is aware of being seen behaves in the same way in public and in private.', a: 'YES', e: 'Абзац D: «behaves in the same way whether or not other people are watching».' },
      { q: 'The writer claims that human sight has no limits.', a: 'NO', e: 'Абзац B: у человеческого зрения есть пределы расстояния, света и внимания.' },
      { q: 'The writer says that inattentional blindness mostly affects drivers.', a: 'NOT GIVEN', e: 'Группа людей, которых это касается, в тексте не названа.' }
    ],
    matching: { instruction: 'What does the receptionist say about each of the following? Choose the correct letter, A–D.', options: ['It takes about thirty minutes', 'It is deducted from the price of the frames if glasses are needed', 'It is on the second floor of the Central Mall', 'It is recommended every two years for most adults'], items: [{ q: 'The eye test', a: 'A', e: 'Проверка занимает около тридцати минут.' }, { q: 'The £35 fee', a: 'B', e: 'Если нужны очки, плата вычитается из цены оправы.' }, { q: 'The opticians\' location', a: 'C', e: 'Оптика — на втором этаже Central Mall.' }, { q: 'The frequency of eye tests', a: 'D', e: 'Для большинства взрослых — раз в два года.' }] },
    short: [{ q: 'What problem does Askar have when he reads?', a: ['headaches', 'headache'], e: 'У него возникают головные боли при чтении.' }, { q: 'What should Askar bring if he already has glasses?', a: ['his glasses', 'glasses', 'his current glasses'], e: 'Нужно принести имеющиеся очки.' }]
  });

  /* 28 · Al-Hakam */
  X(28, {
    task1: {
      prompt: 'The table below shows the typical duration, the decision-maker, the relative cost and the percentage of agreements respected for three methods of resolving disputes. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Three ways of resolving a dispute, illustrative data', head: ['Method', 'Typical duration (months)', 'Who decides', 'Cost', 'Agreements respected (%)'], rows: [['Court', '12–18', 'A judge', 'High', '68'], ['Arbitration', '3–6', 'An arbitrator', 'Medium', '79'], ['Mediation', '1–2', 'The parties themselves', 'Low', '88']] },
      keywords: ['court', 'arbitration', 'mediation', 'duration', 'months', 'cost', 'decides', 'agreements', 'respected', 'dispute'],
      model: `The table compares three methods of resolving disputes in terms of their typical duration, the person who makes the decision, the relative cost and the percentage of agreements that are respected. The data are illustrative.

Overall, mediation was the fastest, the cheapest and the most successful method, whereas court was the slowest and the most expensive.

A court case typically took 12 to 18 months, was decided by a judge and had a high cost. Only 68% of its decisions were respected, the lowest figure in the table. Arbitration was considerably quicker, at 3 to 6 months, and its cost was medium. The decision was made by an arbitrator, and 79% of the outcomes were respected.

Mediation was the quickest option, taking only 1 to 2 months, and it was also the only method in which the parties themselves decided. Its cost was low, and 88% of the agreements were respected, which was 20 percentage points higher than for court.

In other words, the more control the parties had over the result, the more often the result was respected.`,
      analysis: ['Task Achievement: три метода по четырём признакам; обзор называет лидера и аутсайдера.', 'Вычисление: 88 − 68 = 20; вывод о связи контроля сторон и соблюдения соглашений.', 'Cohesion: Overall / whereas / In other words.', 'Lexical Resource: typically, considerably quicker, respected, outcomes; диапазоны (12 to 18 months).']
    },
    heads: {
      list: ['The structure of modern courts', 'Habits for fair judgement', 'Two connected meanings of a root', 'A history of legal codes', 'Comfort and a warning about haste', 'Questions about the best of judges'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: судить и сдерживать — два значения корня.' }, { p: 'B', a: 'vi', e: 'Абзац B: 6:114, 95:8 — вопросы о лучшем из судей.' }, { p: 'C', a: 'v', e: 'Абзац C: утешение и предупреждение о поспешности.' }, { p: 'D', a: 'ii', e: 'Абзац D: привычки справедливого суждения.' }]
    },
    ynng: [
      { q: 'The writer suggests that haste in judging is a common cause of injustice.', a: 'YES', e: 'Абзац C: «Haste in judging is a common cause of injustice».' },
      { q: 'The writer encourages people to take the role of judge by condemning others quickly.', a: 'NO', e: 'Абзац C: учёные предостерегают от поспешного осуждения.' },
      { q: 'The writer says that arbitration is a better method than going to court.', a: 'NOT GIVEN', e: 'Арбитраж в тексте не упоминается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each way of resolving a dispute? Choose the correct letter, A–D.', options: ['A judge applies the law and gives a binding decision', 'It is private and the decision is usually final', 'The parties find their own solution with help', 'It takes about a week'], items: [{ q: 'Court', a: 'A', e: 'В суде судья применяет закон и выносит обязательное решение.' }, { q: 'Arbitration', a: 'B', e: 'Арбитраж частный, решение обычно окончательное.' }, { q: 'Mediation', a: 'C', e: 'Медиатор не решает — помогает сторонам найти собственное решение.' }] },
    short: [{ q: 'How long can a civil case take on average in some countries?', a: ['eighteen months', '18 months', 'about eighteen months', 'about 18 months'], e: 'В среднем около восемнадцати месяцев.' }, { q: 'What is the word limit for next week\'s analysis?', a: ['500', 'five hundred', '500 words', 'five hundred words'], e: 'Предел — пятьсот слов.' }]
  });

  /* 29 · Al-'Adl */
  X(29, {
    task1: {
      prompt: 'The bar chart below shows the percentage of students who rated grading as fair in courses that use four fairness practices and in courses that do not. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Students rating grading as fair (%), illustrative data', unit: '% of students', ymax: 100, cats: ['Criteria published', 'Anonymous marking', 'Right to appeal', 'Feedback on effort'], series: [{ name: 'Courses that use the practice', v: [81, 76, 84, 72] }, { name: 'Courses that do not', v: [43, 48, 39, 51] }] },
      keywords: ['students', 'grading', 'fair', 'criteria', 'anonymous', 'appeal', 'feedback', 'courses', 'percentage', 'practice'],
      model: `The bar chart compares the percentage of students who rated grading as fair in courses that use four fairness practices and in courses that do not. The data are illustrative.

Overall, students were much more likely to consider grading fair in courses that used the practices, and this was true for all four of them.

The right to appeal showed the highest figure for courses that used the practice, at 84%, followed by published criteria at 81% and anonymous marking at 76%. Feedback on effort had the lowest figure, 72%. In courses that did not use the practices, the percentages were between 39% and 51%.

The biggest difference was found for the right to appeal, at 45 percentage points, since only 39% of students in courses without it rated grading as fair. The published criteria followed with a difference of 38 points, and anonymous marking with 28 points.

By contrast, feedback on effort made the smallest difference, only 21 points, 72% compared with 51%.`,
      analysis: ['Task Achievement: две серии по четырём практикам; обзор общий.', 'Вычисления: разрывы 45, 38, 28 и 21 пункт.', 'Cohesion: Overall / followed by / By contrast; сравнения «compared with».', 'Lexical Resource: fairness practices, rated, difference of, the smallest difference.']
    },
    heads: {
      list: ['The invention of scales', 'Practical tools for fairness', 'A history of ancient courts', 'Balance as the heart of the root', 'Fairness to people one dislikes', 'Three verses and what they demand'],
      items: [{ p: 'A', a: 'iv', e: 'Абзац A: баланс как суть корня.' }, { p: 'B', a: 'vi', e: 'Абзац B: 16:90, 4:58, 5:8 и их требования.' }, { p: 'C', a: 'v', e: 'Абзац C: справедливость к тем, кого не любишь.' }, { p: 'D', a: 'ii', e: 'Абзац D: практические инструменты справедливости.' }]
    },
    ynng: [
      { q: 'The writer suggests that personal feelings can distort a person\'s judgement.', a: 'YES', e: 'Абзац C: личные чувства склонны искажать суждение.' },
      { q: 'The writer believes that being fair to friends is the real test of justice.', a: 'NO', e: 'Абзац C: настоящая проверка — справедливость к тому, кого не любишь.' },
      { q: 'The writer says that justice is mentioned in the Qur\'an more often than any other virtue.', a: 'NOT GIVEN', e: 'Частота упоминаний добродетелей не сравнивается.' }
    ],
    matching: { instruction: 'What does the professor say about each of the following? Choose the correct letter, A–D.', options: ['They are published on the first day', 'Each is worth twenty-five per cent', 'It is ten per cent of the final grade', 'They are marked by number, not by name'], items: [{ q: 'The grading criteria', a: 'A', e: 'Критерии публикуются в первый день.' }, { q: 'Each of the four criteria', a: 'B', e: 'Каждый из четырёх критериев — двадцать пять процентов.' }, { q: 'The participation mark', a: 'C', e: 'Оценка за участие — десять процентов итоговой.' }, { q: 'Written exams', a: 'D', e: 'Письменные работы проверяются по номеру, а не по имени.' }] },
    short: [{ q: 'How long do students have to appeal a grade?', a: ['two weeks', '2 weeks'], e: 'На апелляцию даются две недели.' }, { q: 'What is the deadline for the next essay?', a: ['25 April', 'the twenty-fifth of April', '25th April', 'April 25', 'twenty-fifth of April', 'the 25th of April'], e: 'Срок — двадцать пятое апреля.' }]
  });

  /* 30 · Al-Latif */
  X(30, {
    task1: {
      prompt: 'The line graph below shows the average well-being score, out of 10, of two groups over six weeks: one group performed five small kind acts a week and the other did not. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Average well-being score (out of 10), illustrative data', unit: 'score out of 10', ymax: 10, x: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'], series: [{ name: 'Five kind acts a week', y: [5.1, 5.5, 5.9, 6.2, 6.4, 6.6] }, { name: 'Comparison group', y: [5.1, 5.2, 5.1, 5.3, 5.2, 5.3] }] },
      keywords: ['well-being', 'score', 'kind acts', 'comparison group', 'weeks', 'increased', 'gain', 'steady', 'six weeks', 'difference'],
      model: `The line graph shows the average well-being score, out of 10, of two groups over six weeks. One group performed five small kind acts a week, and the other did not. The data are illustrative.

Overall, the well-being of the group that performed kind acts increased steadily, whereas the score of the comparison group hardly changed.

Both groups started at 5.1. The score of the kindness group rose in every week and reached 6.6 by Week 6, a gain of 1.5 points. The increase was fastest at the beginning, with a rise of 0.4 points in each of the first two weeks, and then slowed to 0.2 points in each of the last two weeks.

By contrast, the comparison group fluctuated within a narrow range between 5.1 and 5.3, finishing at 5.3, only 0.2 points higher than at the start.

As a result, the difference between the two groups grew from nothing in Week 1 to 1.3 points in Week 6, and it became larger in every week.`,
      analysis: ['Task Achievement: одинаковый старт, две траектории, темп роста группы доброты замедляется.', 'Данные: +1.5 и +0.2; разрыв 1.3 к шестой неделе.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: fluctuated within a narrow range, gain, slowed.']
    },
    heads: {
      list: ['Techniques for painting miniatures', 'Gentleness without publicity', 'An example from the story of Yusuf', 'The importance of public donations', 'Two linked meanings: fineness and gentleness', 'Two verses with the same pair of names'],
      items: [{ p: 'A', a: 'v', e: 'Абзац A: два связанных значения — тонкость и мягкость.' }, { p: 'B', a: 'vi', e: 'Абзац B: 6:103 и 31:16 с парой Al-Latif — Al-Khabir.' }, { p: 'C', a: 'iii', e: 'Абзац C: пример из истории Юсуфа.' }, { p: 'D', a: 'ii', e: 'Абзац D: мягкость без публичности.' }]
    },
    ynng: [
      { q: 'The writer suggests that the effect of a difficult period can become visible only years later.', a: 'YES', e: 'Абзац C: следствия трудного периода иногда видны лишь спустя годы.' },
      { q: 'The writer claims that kindness is valuable only when it is made public.', a: 'NO', e: 'Абзац D: доброта без публичности имеет особую ценность.' },
      { q: 'The writer states that Yusuf was happiest during his time in prison.', a: 'NOT GIVEN', e: 'Эмоциональное состояние Юсуфа в тюрьме не описывается.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the three reasons why small acts matter? Choose the correct letter, A–D.', options: ['They are easy, so people actually do them', 'They show attention', 'They build habits', 'They cost nothing but time'], items: [{ q: 'The first reason', a: 'A', e: 'Они просты, поэтому люди действительно их делают.' }, { q: 'The second reason', a: 'B', e: 'Они показывают внимание.' }, { q: 'The third reason', a: 'C', e: 'Они формируют привычки.' }] },
    short: [{ q: 'For how many weeks did the study last?', a: ['6', 'six', 'six weeks', '6 weeks'], e: 'Исследование длилось шесть недель.' }, { q: 'On which day is the kindness diary due?', a: ['Thursday'], e: 'Дневник нужно сдать в четверг.' }]
  });
})();

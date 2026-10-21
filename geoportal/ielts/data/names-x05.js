// Имена 41–50: дополнения — Writing Task 1, Reading (Matching Headings, Yes/No/Not Given), Listening (Matching, Short answer).
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

  /* 41 · Al-Jalil */
  X(41, {
    task1: {
      prompt: 'The table below shows the capacity, the hire price and the number of ceremonies per year for four halls in a city. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Four ceremony halls, illustrative data', head: ['Hall', 'Capacity (seats)', 'Hire price (£)', 'Ceremonies per year'], rows: [['Main Hall', '450', '800', '52'], ['Garden Room', '120', '350', '38'], ['Theatre', '300', '600', '24'], ['Library Hall', '80', '200', '41']] },
      keywords: ['hall', 'capacity', 'seats', 'hire price', 'ceremonies', 'main hall', 'garden room', 'theatre', 'library hall', 'highest'],
      model: `The table compares four halls in a city in terms of their capacity, the price of hiring them and the number of ceremonies that they hosted in a year. The data are illustrative.

Overall, the largest hall was also the most expensive and the most frequently used, while the smallest hall was the cheapest but still hosted more ceremonies than the theatre.

The Main Hall had the highest capacity, 450 seats, and the highest hire price, £800. It hosted 52 ceremonies, which is about a third of the 155 ceremonies held in all four halls together. The Theatre was the second largest, with 300 seats, and it cost £600 to hire, but it hosted only 24 ceremonies, the lowest number in the table.

At the other end of the scale, the Library Hall had only 80 seats and was the cheapest option, at £200. Even so, it hosted 41 ceremonies a year. The Garden Room, with 120 seats and a price of £350, took 38 ceremonies.

It is noticeable that the two smaller halls were used much more often than the Theatre, which suggests that price and size were more important than prestige.`,
      analysis: ['Task Achievement: четыре зала, три показателя; обзор отмечает связь размера, цены и загрузки.', 'Вычисления: 52 + 38 + 24 + 41 = 155; 52/155 ≈ треть.', 'Cohesion: Overall / while / At the other end of the scale / It is noticeable that.', 'Lexical Resource: capacity, hire price, hosted, took; осторожный вывод («suggests»).']
    },
    heads: {
      list: ['The history of royal ceremonies', 'Dignified behaviour at serious events', 'Awe and love: two groups of attributes', 'How halls are built', 'The expression found in two verses', 'Why majesty and generosity are paired'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: jalal и jamal — вызывающие трепет и любовь атрибуты.' }, { p: 'B', a: 'v', e: 'Абзац B: выражение в 55:27 и 55:78.' }, { p: 'C', a: 'vi', e: 'Абзац C: почему величие и щедрость соединены.' }, { p: 'D', a: 'ii', e: 'Абзац D: достойное поведение на серьёзных событиях.' }]
    },
    ynng: [
      { q: 'The writer suggests that firmness should be combined with kindness.', a: 'YES', e: 'Абзац D: твёрдость сочетается с добротой.' },
      { q: 'The writer believes that majesty without generosity would inspire love.', a: 'NO', e: 'Абзац C: величие без щедрости вызвало бы только страх.' },
      { q: 'The writer says that graduation ceremonies are too expensive.', a: 'NOT GIVEN', e: 'Стоимость церемоний в тексте не обсуждается.' }
    ],
    matching: { instruction: 'What does the manager say about each of the following? Choose the correct letter, A–D.', options: ['Four hundred and fifty', 'Twelve', 'Nine hundred and twenty pounds', 'Fifty pounds'], items: [{ q: 'The capacity of the hall', a: 'A', e: 'Зал вмещает четыреста пятьдесят человек.' }, { q: 'The number of seats on the stage', a: 'B', e: 'Сцена вмещает двенадцать человек.' }, { q: 'The total price', a: 'C', e: 'Итого девятьсот двадцать фунтов.' }, { q: 'The cost of a red carpet', a: 'D', e: 'Красная дорожка — ещё пятьдесят фунтов.' }] },
    short: [{ q: 'On which date will the ceremony take place?', a: ['29 June', 'the twenty-ninth of June', '29th June', 'June 29', 'twenty-ninth of June', 'the 29th of June', 'the twenty-ninth', '29'], e: 'Церемония — двадцать девятого июня.' }, { q: 'How many graduates does Berik expect?', a: ['30', 'thirty'], e: 'Ожидается тридцать выпускников.' }]
  });

  /* 42 · Al-Karim */
  X(42, {
    task1: {
      prompt: 'The bar chart below shows the percentage of people in three generations who hosted guests at home at least once a month, ten years ago and now. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'People hosting guests at home at least monthly (%), illustrative data', unit: '% of people', ymax: 100, cats: ['Grandparents', 'Parents', 'Young adults'], series: [{ name: 'Ten years ago', v: [78, 64, 52] }, { name: 'Now', v: [71, 49, 27] }] },
      keywords: ['hosting', 'guests', 'generations', 'grandparents', 'parents', 'young adults', 'percentage', 'monthly', 'decline', 'ten years'],
      model: `The bar chart compares the percentage of people in three generations who hosted guests at home at least once a month ten years ago and now. The data are illustrative.

Overall, the proportion of people who hosted guests regularly fell in all three generations, and the fall was greater among the younger generations.

Ten years ago, grandparents were the most hospitable, at 78%, followed by parents at 64% and young adults at 52%. Today, grandparents are still the most likely to host guests, but their figure has declined only slightly, to 71%, a fall of 7 percentage points.

The decline was much larger for the middle generation. The figure for parents dropped by 15 points, from 64% to 49%. The most dramatic change was among young adults, for whom the proportion almost halved, from 52% to 27%, a fall of 25 points.

As a result, the gap between the oldest and the youngest generation widened considerably, from 26 percentage points ten years ago to 44 points now.`,
      analysis: ['Task Achievement: три поколения, два периода; обзор — спад и чем моложе, тем сильнее.', 'Вычисления: −7, −15, −25; разрыв 26 → 44.', 'Cohesion: Overall / Today / As a result.', 'Lexical Resource: hospitable, almost halved, dramatic, widened considerably.']
    },
    heads: {
      list: ['A history of royal feasts', 'Hospitality and dignity in giving', 'Two meanings joined in one root', 'How tea is prepared', 'Three verses, three contexts', 'Knowledge as the highest gift'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: щедрость и благородство в одном корне.' }, { p: 'B', a: 'v', e: 'Абзац B: 27:40, 82:6, 96:3.' }, { p: 'C', a: 'vi', e: 'Абзац C: дар знания как высшая щедрость.' }, { p: 'D', a: 'ii', e: 'Абзац D: гостеприимство и достоинство получающего.' }]
    },
    ynng: [
      { q: 'The writer suggests that sharing knowledge is a high form of generosity.', a: 'YES', e: 'Абзац C: дар знания — высшая форма щедрости.' },
      { q: 'The writer recommends pointing out the cost of a gift to the guest.', a: 'NO', e: 'Абзац D: следует избегать упоминания стоимости.' },
      { q: 'The writer says that generosity is more common in villages than in cities.', a: 'NOT GIVEN', e: 'Сравнение села и города не приводится.' }
    ],
    matching: { instruction: 'What do the students say about each stage of a visit in their research? Choose the correct letter, A–D.', options: ['A guest is received with tea and bread', 'The host eats last', 'A guest should not leave without food', 'Families meet in cafes because hosting is expensive'], items: [{ q: 'At the door', a: 'A', e: 'У порога гостя встречают чаем и хлебом.' }, { q: 'At the meal', a: 'B', e: 'Хозяин ест последним.' }, { q: 'When the guest leaves', a: 'C', e: 'Гость не должен уходить без угощения в дорогу.' }, { q: 'Today, according to Assel', a: 'D', e: 'Сегодня семьи встречаются в кафе: принимать гостей дорого.' }] },
    short: [{ q: 'How many interviews have the students recorded?', a: ['8', 'eight'], e: 'Записано восемь интервью.' }, { q: 'What is the deadline for the report?', a: ['17 March', 'the seventeenth of March', '17th March', 'March 17', 'seventeenth of March', 'the 17th of March'], e: 'Срок — семнадцатое марта.' }]
  });

  /* 43 · Ar-Raqib */
  X(43, {
    task1: {
      prompt: 'The line graph below shows the percentage of simulated swimmers in difficulty that were noticed by lifeguards during a one-hour shift, with and without rotation of positions. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Swimmers in difficulty noticed (%), illustrative data', unit: '% noticed', ymax: 100, x: ['10 min', '20 min', '30 min', '40 min', '50 min', '60 min'], series: [{ name: 'Rotating every 20 minutes', y: [96, 95, 95, 94, 94, 93] }, { name: 'No rotation', y: [96, 93, 85, 76, 70, 64] }] },
      keywords: ['lifeguards', 'swimmers', 'noticed', 'rotation', 'shift', 'minutes', 'attention', 'percentage', 'fell', 'difference'],
      model: `The line graph shows the percentage of simulated swimmers in difficulty that were noticed by lifeguards during a one-hour shift, depending on whether the lifeguards rotated their positions. The data are illustrative.

Overall, the lifeguards who rotated kept a high level of attention throughout the shift, whereas the performance of those who did not rotate declined sharply.

Both groups began with the same figure of 96% at the ten-minute point. The percentage for the lifeguards who rotated every 20 minutes decreased only slightly, to 95% after 20 minutes and 93% at the end of the hour, a fall of just 3 percentage points.

By contrast, the figure for the lifeguards who did not rotate dropped steadily. It fell to 93% after 20 minutes, and then more rapidly, to 85% at 30 minutes and 76% at 40 minutes. By the end of the shift it had reached 64%, which is a fall of 32 points.

As a result, the gap between the two groups grew from nothing at the beginning to 29 percentage points at the 60-minute mark.`,
      analysis: ['Task Achievement: две линии, одинаковый старт, расходящиеся траектории.', 'Данные: −3 против −32; разрыв 29 пунктов.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: simulated, rotated, declined sharply, mark.']
    },
    heads: {
      list: ['The history of the lunar calendar', 'The limits of human watching', 'Watching and vigilance', 'Security cameras in cities', 'Self-observation and attentive care', 'Three places in the Qur\'an'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: наблюдение и непрерывная бдительность.' }, { p: 'B', a: 'vi', e: 'Абзац B: 4:1, 33:52, 5:117.' }, { p: 'C', a: 'ii', e: 'Абзац C: человеческое наблюдение ограничено присутствием.' }, { p: 'D', a: 'v', e: 'Абзац D: muraqaba и внимательная забота.' }]
    },
    ynng: [
      { q: 'The writer suggests that responsible people should do what they can and then rely on a vigilance that is never interrupted.', a: 'YES', e: 'Абзац C: ответственные люди делают, что могут, и полагаются на непрерывную бдительность.' },
      { q: 'The writer recommends strict control over those for whom one is responsible.', a: 'NO', e: 'Абзац D: внимательная забота, а не контроль.' },
      { q: 'The writer says that parents supervise daughters more closely than sons.', a: 'NOT GIVEN', e: 'Различия в надзоре за детьми в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What does the trainer say about each of the following? Choose the correct letter, A–D.', options: ['Positions are rotated every twenty minutes', 'The person stays upright with the head back and arms pressing down', 'Any point of the pool must be reached within twenty seconds', 'The rules are explained in a friendly way'], items: [{ q: 'Keeping attention high', a: 'A', e: 'Для сохранения внимания позиции меняют каждые двадцать минут.' }, { q: 'A person in difficulty', a: 'B', e: 'Человек в беде держится вертикально, запрокинув голову, руки прижаты вниз.' }, { q: 'The reaction target', a: 'C', e: 'Добраться до любой точки бассейна за двадцать секунд.' }, { q: 'Children who run on the wet floor', a: 'D', e: 'Детям правила объясняют дружелюбно.' }] },
    short: [{ q: 'How many days does the course last?', a: ['5', 'five', 'five days', '5 days'], e: 'Курс длится пять дней.' }, { q: 'What is the course fee?', a: ['240', '£240', 'two hundred and forty', '240 pounds', 'two hundred and forty pounds'], e: 'Стоимость — двести сорок фунтов.' }]
  });

  /* 44 · Al-Mujib */
  X(44, {
    task1: {
      prompt: 'The bar chart below shows the percentage of customers who were satisfied with the answer and the percentage who said that they would order again, according to how quickly the company responded to their complaint. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Customers by response time (%), illustrative data', unit: '% of customers', ymax: 100, cats: ['Under 1 hour', '1–4 hours', '5–24 hours', 'Over 24 hours'], series: [{ name: 'Satisfied with the answer', v: [91, 78, 52, 24] }, { name: 'Would order again', v: [88, 70, 41, 15] }] },
      keywords: ['customers', 'response time', 'satisfied', 'order again', 'complaint', 'hours', 'percentage', 'fell', 'quickly', 'highest'],
      model: `The bar chart compares the percentage of customers who were satisfied with the answer to their complaint and the percentage who would order again, according to the time that the company took to respond. The data are illustrative.

Overall, the faster the company responded, the more satisfied the customers were and the more likely they were to order again, and both figures fell sharply as the waiting time grew.

When the answer arrived in less than an hour, 91% of customers were satisfied and 88% would order again. For a response within one to four hours, the figures were lower, at 78% and 70%. When customers waited between five and 24 hours, satisfaction dropped to 52% and the intention to order again to 41%.

The lowest figures were recorded for responses that took more than 24 hours: only 24% of customers were satisfied and just 15% would order again. This is a fall of 67 points in satisfaction compared with the fastest group.

In every group, the proportion who would order again was lower than the proportion who were satisfied, and the difference between the two was greatest, at 11 points, for the 5–24 hour group.`,
      analysis: ['Task Achievement: четыре интервала ответа, две серии; обзор показывает зависимость от скорости.', 'Вычисления: 91 − 24 = 67; разница между сериями 3, 8, 11, 9.', 'Cohesion: Overall / When ... / The lowest figures / In every group.', 'Lexical Resource: response, satisfaction, intention to order again, dropped.']
    },
    heads: {
      list: ['A history of telephones', 'Asking and answering well', 'Everyday uses of the root', 'Rules for formal letters', 'Two verses about nearness', 'Response in different forms'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: повседневные употребления корня.' }, { p: 'B', a: 'v', e: 'Абзац B: 11:61 и 2:186 — близость и ответ.' }, { p: 'C', a: 'vi', e: 'Абзац C: ответ в разных формах.' }, { p: 'D', a: 'ii', e: 'Абзац D: как просить и как отвечать.' }]
    },
    ynng: [
      { q: 'The writer suggests that accepting a refusal calmly is part of trust.', a: 'YES', e: 'Абзац D: спокойное принятие отказа — часть доверия.' },
      { q: 'The writer claims that a response always gives exactly what was requested.', a: 'NO', e: 'Абзац C: ответ может быть иной вещью, отсрочкой или защитой.' },
      { q: 'The writer says that people answer emails faster than telephone calls.', a: 'NOT GIVEN', e: 'Сравнение скорости ответов по каналам не приводится.' }
    ],
    matching: { instruction: 'What does the agent say about each of the following? Choose the correct letter, A–D.', options: ['It was delayed at the regional depot', 'The courier will call an hour before arrival', 'It will be taken to the nearest pick-up point', 'It is a discount of ten per cent'], items: [{ q: 'The laptop', a: 'A', e: 'Посылка задержалась на региональном складе.' }, { q: 'Before the delivery', a: 'B', e: 'Курьер позвонит за час до прибытия.' }, { q: 'If nobody answers', a: 'C', e: 'Если никто не ответит, посылку отвезут в ближайший пункт выдачи.' }, { q: 'The compensation Timur chooses', a: 'D', e: 'Тимур выбирает скидку десять процентов.' }] },
    short: [{ q: 'What is the new delivery date?', a: ['12', '12th', 'the twelfth', 'Thursday the twelfth', 'Thursday 12th', 'Thursday the 12th', 'Thursday 12'], e: 'Новая дата — четверг, двенадцатое.' }, { q: 'What is the name of the agent?', a: ['Aliya'], e: 'Агента зовут Алия.' }]
  });

  /* 45 · Al-Wasi' */
  X(45, {
    task1: {
      prompt: 'The table below shows the floor area, the number of seats and the share of the total area for five parts of a planned community library. The data are illustrative. ' + T1,
      chart: { type: 'table', caption: 'Plan of a community library, illustrative data', head: ['Area', 'Floor area (sq m)', 'Seats', 'Share of total area (%)'], rows: [['Reading hall', '400', '200', '40'], ['Children\'s corner', '120', '40', '12'], ['Study rooms', '150', '36', '15'], ['Event space', '200', '120', '20'], ['Cafe and entrance', '130', '30', '13']] },
      keywords: ['library', 'floor area', 'seats', 'reading hall', 'children', 'study rooms', 'event space', 'cafe', 'share', 'total'],
      model: `The table shows the floor area, the number of seats and the share of the total area for five parts of a planned community library. The data are illustrative.

Overall, the reading hall dominates the plan, while the remaining area is divided between four much smaller spaces.

The reading hall is the largest part of the building, with 400 square metres, which is 40% of the total area of 1000 square metres. It also has the largest number of seats, 200. The second largest area is the event space, with 200 square metres, or 20% of the total, and it provides 120 seats.

The other three areas are noticeably smaller. The study rooms occupy 150 square metres, or 15%, but they have only 36 seats, which is the second smallest number of seats. The cafe and entrance cover 130 square metres, or 13%, with 30 seats, the lowest number. The children's corner is the smallest area, with 120 square metres, 12% of the total, and it has 40 seats.

In total, the library offers 426 seats.`,
      analysis: ['Task Achievement: пять зон, три показателя; обзор — главная зона и четыре малых.', 'Вычисления: 400 + 120 + 150 + 200 + 130 = 1000; 200 + 40 + 36 + 120 + 30 = 426.', 'Cohesion: Overall / while / The other three areas / In total.', 'Lexical Resource: dominates, floor area, occupy, noticeably smaller.']
    },
    heads: {
      list: ['The history of public libraries', 'Making room in daily life', 'Space, capacity and a broad mind', 'How buildings are heated', 'Vastness that is informed', 'Verses pairing the name with knowledge'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: простор, вместимость и широкий ум.' }, { p: 'B', a: 'vi', e: 'Абзац B: 2:115, 2:261, 2:268 — имя в паре со знанием.' }, { p: 'C', a: 'v', e: 'Абзац C: простор, который не небрежен, а осведомлён.' }, { p: 'D', a: 'ii', e: 'Абзац D: создавать место для других.' }]
    },
    ynng: [
      { q: 'The writer suggests that a spacious mind does not need to agree with everything in order to listen.', a: 'YES', e: 'Абзац D: просторный ум слушает, не соглашаясь со всем.' },
      { q: 'The writer describes the vastness in the name as careless.', a: 'NO', e: 'Абзац C: «vastness is not careless».' },
      { q: 'The writer states that 2:261 was revealed in Makkah.', a: 'NOT GIVEN', e: 'Место ниспослания не обсуждается.' }
    ],
    matching: { instruction: 'What do the students say about each feature of the library? Choose the correct letter, A–D.', options: ['It is six metres wide', 'The shelves have wheels', 'They are two metres wide', 'There are six small rooms with glass walls'], items: [{ q: 'The main entrance', a: 'A', e: 'Вход шириной шесть метров.' }, { q: 'The flexibility of the hall', a: 'B', e: 'Стеллажи на колёсах — зал можно освободить для мероприятий.' }, { q: 'The corridors', a: 'C', e: 'Коридоры шириной два метра — для колясок.' }, { q: 'The quiet areas', a: 'D', e: 'Шесть небольших комнат со стеклянной стеной.' }] },
    short: [{ q: 'How many seats are planned for the main hall?', a: ['200', 'two hundred'], e: 'В главном зале запланировано двести мест.' }, { q: 'What is the deadline for the final models?', a: ['4 December', 'the fourth of December', '4th December', 'December 4', 'fourth of December', 'the 4th of December'], e: 'Макеты сдаются до четвёртого декабря.' }]
  });

  /* 46 · Al-Hakim */
  X(46, {
    task1: {
      prompt: 'The bar chart below shows the percentage of decisions that were judged to be good after five years in four areas of life, comparing people who asked about purpose and consequences before deciding with people who decided quickly. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Decisions judged good after five years (%), illustrative data', unit: '% of decisions', ymax: 100, cats: ['Career', 'Money', 'Health', 'Relationships'], series: [{ name: 'Asked about purpose and consequences', v: [78, 74, 81, 69] }, { name: 'Decided quickly', v: [52, 41, 58, 47] }] },
      keywords: ['decisions', 'good', 'five years', 'career', 'money', 'health', 'relationships', 'purpose', 'consequences', 'percentage'],
      model: `The bar chart compares the percentage of decisions that were judged to be good after five years in four areas of life. It distinguishes between people who asked about purpose and consequences before deciding and people who decided quickly. The data are illustrative.

Overall, thoughtful decisions were judged to be good much more often than quick ones, and this was true in all four areas.

Among the people who reflected, health decisions had the highest success rate, at 81%, followed by career decisions at 78% and money decisions at 74%. Decisions about relationships were the least successful in this group, at 69%.

The quick deciders had much lower figures. Their best result was again in health, at 58%, and their worst result was in money, at only 41%, followed by relationships at 47% and career at 52%.

The largest difference between the two groups concerned money decisions, at 33 percentage points. The differences for career, health and relationships were smaller, at 26, 23 and 22 points respectively.`,
      analysis: ['Task Achievement: две группы по четырём областям; обзор — размышляющие решения чаще удачны.', 'Вычисления: разрывы 26, 33, 23 и 22 пункта.', 'Cohesion: Overall / followed by / The largest difference / respectively.', 'Lexical Resource: reflected, success rate, quick deciders, judged to be good.']
    },
    heads: {
      list: ['A history of kings', 'Reflective habits', 'Judgement, restraint and a definition', 'Intelligence tests', 'A name paired with might', 'Why power needs wisdom'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: суждение, сдержанность и определение мудрости.' }, { p: 'B', a: 'v', e: 'Абзац B: имя в паре с Аль-Азиз.' }, { p: 'C', a: 'vi', e: 'Абзац C: почему власти нужна мудрость.' }, { p: 'D', a: 'ii', e: 'Абзац D: привычки размышления.' }]
    },
    ynng: [
      { q: 'The writer suggests that listening to older and more experienced people is encouraged.', a: 'YES', e: 'Абзац D: слушать более старших и опытных поощряется.' },
      { q: 'The writer believes that wisdom is the same as cleverness.', a: 'NO', e: 'Абзац A: мудрость — больше, чем информация или сообразительность.' },
      { q: 'The writer says that the Qur\'an mentions wisdom more often than power.', a: 'NOT GIVEN', e: 'Сравнение частоты упоминаний не приводится.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['The ability to learn and solve problems', 'Good judgement about what matters', 'The ability to see a situation from several perspectives', 'A concern for the common good'], items: [{ q: 'Intelligence', a: 'A', e: 'Интеллект — способность учиться и решать задачи.' }, { q: 'Wisdom, in general', a: 'B', e: 'Мудрость включает суждение о том, что важно.' }, { q: 'The third component of wisdom', a: 'C', e: 'Третий компонент — видеть ситуацию с разных сторон.' }, { q: 'The fourth component of wisdom', a: 'D', e: 'Четвёртый — забота об общем благе.' }] },
    short: [{ q: 'How long should the summary be?', a: ['half a page', 'a half page', 'half-page', 'half page', '0.5 page'], e: 'Резюме — полстраницы.' }, { q: 'On which day is the assignment due?', a: ['Monday'], e: 'Задание сдаётся в понедельник, а не в пятницу.' }]
  });

  /* 47 · Al-Wadud */
  X(47, {
    task1: {
      prompt: 'The line graph below shows the percentage of adults who felt supported by close friends between 2019 and 2023, according to whether they had monthly calls or meetings or only exchanged messages. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Adults who feel supported by close friends (%), illustrative data', unit: '% of adults', ymax: 100, x: ['2019', '2020', '2021', '2022', '2023'], series: [{ name: 'Monthly calls or meetings', y: [64, 58, 66, 71, 74] }, { name: 'Messages only', y: [48, 46, 45, 44, 43] }] },
      keywords: ['adults', 'supported', 'friends', 'calls', 'meetings', 'messages', 'percentage', 'years', 'rose', 'gap'],
      model: `The line graph shows the percentage of adults who felt supported by close friends between 2019 and 2023, depending on whether they had monthly calls or meetings with their friends or only exchanged messages. The data are illustrative.

Overall, the proportion of adults who felt supported rose among those with regular personal contact, whereas it declined slowly among those who relied on messages alone.

In 2019, 64% of the adults with monthly calls or meetings felt supported. This figure fell to 58% in 2020, but then recovered strongly, reaching 66% in 2021, 71% in 2022 and 74% in 2023, an overall increase of 10 percentage points.

By contrast, the line for the adults who only exchanged messages declined steadily throughout the period. It started at 48% and fell by one or two points a year, to 43% in 2023, a decrease of 5 points.

As a result, the gap between the two groups widened considerably, from 16 percentage points in 2019 to 31 points in 2023. The only year in which the first group declined was 2020.`,
      analysis: ['Task Achievement: две линии, особенность 2020 года (падение), общий вывод.', 'Вычисления: +10 и −5; разрыв 16 → 31.', 'Cohesion: Overall / whereas / By contrast / As a result.', 'Lexical Resource: recovered strongly, declined steadily, regular personal contact, widened considerably.']
    },
    heads: {
      list: ['A history of weddings', 'Expressing affection clearly', 'Love shown in action', 'Differences between dialects', 'Two verses and forgiveness', 'Affection restored after mistakes'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: любовь, проявляющаяся в действии.' }, { p: 'B', a: 'v', e: 'Абзац B: 11:90 и 85:14 — любовь и прощение.' }, { p: 'C', a: 'vi', e: 'Абзац C: привязанность, восстановленная после ошибок.' }, { p: 'D', a: 'ii', e: 'Абзац D: ясно выражать привязанность.' }]
    },
    ynng: [
      { q: 'The writer suggests that a spoken sentence or a short message of appreciation has a real effect.', a: 'YES', e: 'Абзац D: сказанное предложение или короткое сообщение оказывает реальный эффект.' },
      { q: 'The writer believes that it is unnecessary to maintain friendships.', a: 'NO', e: 'Абзац D: дружбе нужна поддержка: звонки, помощь.' },
      { q: 'The writer says that friendships are stronger in small towns than in big cities.', a: 'NOT GIVEN', e: 'Сравнение городов не приводится.' }
    ],
    matching: { instruction: 'What does Marat or the caterer say about each of the following? Choose the correct letter, A–D.', options: ['Sixty-five', 'Fifteen', 'Twelve pounds per person', 'Seven hundred and two pounds'], items: [{ q: 'The total number of guests', a: 'A', e: 'Всего приглашено шестьдесят пять человек.' }, { q: 'The number of children', a: 'B', e: 'Детей около пятнадцати.' }, { q: 'The basic price', a: 'C', e: 'Базовая цена — двенадцать фунтов с человека.' }, { q: 'The price after the discount', a: 'D', e: 'С учётом скидки — семьсот два фунта.' }] },
    short: [{ q: 'What is the main dish of the mixed menu?', a: ['beshbarmak'], e: 'Основное блюдо — бешбармак.' }, { q: 'What occasion is the reunion for?', a: ['fiftieth wedding anniversary', '50th wedding anniversary', 'their fiftieth wedding anniversary', 'wedding anniversary'], e: 'Встреча приурочена к пятидесятилетию свадьбы дедушки и бабушки.' }]
  });

  /* 48 · Al-Majid */
  X(48, {
    task1: {
      prompt: 'The diagram below shows the steps by which a person is selected for a Hall of Fame exhibition. The process is illustrative. ' + T1,
      chart: { type: 'process', caption: 'Selecting a person for a Hall of Fame exhibition', steps: ['Members of the public nominate a person.', 'A committee collects evidence of the nominee\'s service to others.', 'Historians verify the facts.', 'A panel votes on the verified nominations.', 'A portrait of each selected person is commissioned.', 'The story of the person is written for a touch screen.', 'The exhibition is opened to the public.'] },
      keywords: ['nominate', 'committee', 'evidence', 'historians', 'verify', 'panel', 'votes', 'portrait', 'exhibition', 'finally'],
      model: `The diagram illustrates a process of seven steps by which a person is selected for a Hall of Fame exhibition. It is an illustrative example.

Overall, the process has three main parts: nomination and checking, selection, and preparation for the exhibition, and it is open to the public at the beginning and at the end.

First, members of the public nominate a person. Then a committee collects evidence of the nominee's service to others, and historians verify the facts. This careful checking is carried out before any decision is taken.

After that, the selection stage begins: a panel votes on the verified nominations. Only after this vote does the preparation of the exhibition start. A portrait of each selected person is commissioned, and the story of the person is written for a touch screen.

Finally, the exhibition is opened to the public. In this way, ordinary people take part in the process both at the start, by nominating, and at the end, as visitors.`,
      analysis: ['Task Achievement: три части и «открытость» для публики отмечены в обзоре.', 'Process language: First / Then / After that / Only after this / Finally; пассив.', 'Выбор деталей: проверка фактов до голосования; подготовка только после голосования.', 'Cohesion: In this way; вывод о роли публики в начале и конце.']
    },
    heads: {
      list: ['A history of medieval astronomy', 'What real glory is', 'Glory joined with generosity', 'How portraits are painted', 'Honour in ordinary homes', 'The name in two verses'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: слава, соединённая с щедростью.' }, { p: 'B', a: 'vi', e: 'Абзац B: имя в двух аятах — 11:73 и 85:15.' }, { p: 'C', a: 'v', e: 'Абзац C: почёт в обычных домах.' }, { p: 'D', a: 'ii', e: 'Абзац D: в чём настоящая слава.' }]
    },
    ynng: [
      { q: 'The writer suggests that noble conduct has more lasting value than fame.', a: 'YES', e: 'Абзац D: слава зависит от мнения других, благородные поступки сохраняют ценность.' },
      { q: 'The writer claims that honour belongs only to kings.', a: 'NO', e: 'Абзац C: слава не только для королей — и для обычных домов.' },
      { q: 'The writer says that most people prefer fame to honour.', a: 'NOT GIVEN', e: 'Предпочтения людей в тексте не обсуждаются.' }
    ],
    matching: { instruction: 'What can visitors see or do in each part of the exhibition? Choose the correct letter, A–D.', options: ['Manuscripts and a star map', 'Recordings of poems read by their authors', 'A touch screen with the stories of seventeen people', 'A catalogue that costs twelve pounds'], items: [{ q: 'The first room', a: 'A', e: 'Первая комната: рукописи и звёздная карта.' }, { q: 'The second room', a: 'B', e: 'Вторая комната: записи стихов в исполнении авторов.' }, { q: 'The third room', a: 'C', e: 'Третья комната: сенсорный экран с историями семнадцати людей.' }, { q: 'Something to buy after the visit', a: 'D', e: 'Каталог стоит двенадцать фунтов.' }] },
    short: [{ q: 'How many portraits does the exhibition include?', a: ['70', 'seventy'], e: 'В экспозиции семьдесят портретов.' }, { q: 'How long does the guided tour last?', a: ['50 minutes', 'fifty minutes', '50', 'fifty'], e: 'Экскурсия длится пятьдесят минут.' }]
  });

  /* 49 · Al-Ba'ith */
  X(49, {
    task1: {
      prompt: 'The bar chart below shows the planned and the actual number of months spent on three phases of a building restoration project. The data are illustrative. ' + T1,
      chart: { type: 'bar', caption: 'Restoration phases: planned and actual duration (months), illustrative data', unit: 'months', ymax: 12, cats: ['Structural repair', 'Interior work', 'Landscaping'], series: [{ name: 'Planned', v: [6, 10, 2] }, { name: 'Actual', v: [7, 11, 3] }] },
      keywords: ['restoration', 'phases', 'planned', 'actual', 'months', 'structural repair', 'interior work', 'landscaping', 'longer', 'total'],
      model: `The bar chart compares the planned and the actual duration, in months, of three phases of a building restoration project. The data are illustrative.

Overall, every phase took longer than planned, but the delays were small in absolute terms, at one month for each phase.

Interior work was the longest phase, both in the plan and in reality. It was planned to take 10 months, but it actually took 11. Structural repair was planned for 6 months and took 7, while landscaping, the shortest phase, was planned for only 2 months and actually lasted 3.

Although each phase was delayed by the same amount, the effect was not the same in proportion. The delay represented 50% of the planned time for landscaping, compared with about 17% for structural repair and just 10% for interior work.

In total, the project was planned to last 18 months, but it actually took 21 months, which means that it overran by three months, or about one sixth of the original schedule.`,
      analysis: ['Task Achievement: три фазы, план и факт; обзор — каждая фаза дольше плана на месяц.', 'Вычисления: 18 → 21 месяц; задержка 50%, ≈17%, 10%; три месяца ≈ 1/6.', 'Cohesion: Overall / Although / In total.', 'Lexical Resource: overran, planned, in proportion, schedule.']
    },
    heads: {
      list: ['The history of railways', 'Sending, rousing and stirring', 'Reviving what has lost energy', 'How plants are grown', 'Awakening in messengers and in nature', 'Two uses in the Qur\'an'],
      items: [{ p: 'A', a: 'ii', e: 'Абзац A: посылать, пробуждать, приводить в движение.' }, { p: 'B', a: 'vi', e: 'Абзац B: два употребления — посланники (62:2) и воскрешение (22:7).' }, { p: 'C', a: 'v', e: 'Абзац C: пробуждение через посланников и в природе.' }, { p: 'D', a: 'iii', e: 'Абзац D: возрождать то, что потеряло энергию.' }]
    },
    ynng: [
      { q: 'The writer suggests that a small action is enough to begin again.', a: 'YES', e: 'Абзац D: «a small action is enough».' },
      { q: 'The writer says that beginning again requires a complete transformation.', a: 'NO', e: 'Абзац D: полного преобразования не требуется.' },
      { q: 'The writer states that dry winters are becoming more common.', a: 'NOT GIVEN', e: 'Частота сухих зим не обсуждается.' }
    ],
    matching: { instruction: 'What do the students say about each of the following? Choose the correct letter, A–D.', options: ['The brick walls, the clock tower and the large windows will be kept', 'It will cost about two hundred thousand pounds', 'It will take six months', 'There will be two meetings in the spring'], items: [{ q: 'What will be kept', a: 'A', e: 'Сохранят кирпичные стены, часовую башню и большие окна.' }, { q: 'The estimated cost', a: 'B', e: 'Оценка — около двухсот тысяч фунтов.' }, { q: 'The structural repair', a: 'C', e: 'Конструктивный ремонт займёт шесть месяцев.' }, { q: 'Consulting the residents', a: 'D', e: 'Две встречи с жителями весной.' }] },
    short: [{ q: 'In which year was the station built?', a: ['1912', 'nineteen twelve'], e: 'Вокзал построен в 1912 году.' }, { q: 'What is the deadline for the report?', a: ['30 April', 'the thirtieth of April', '30th April', 'April 30', 'thirtieth of April', 'the 30th of April'], e: 'Срок — тридцатое апреля.' }]
  });

  /* 50 · Ash-Shahid */
  X(50, {
    task1: {
      prompt: 'The line graph below shows the percentage of details of an event that witnesses recalled correctly at five points in time, comparing a calm event with a stressful event. The data are illustrative. ' + T1,
      chart: { type: 'line', caption: 'Details recalled correctly (%), illustrative data', unit: '% of details', ymax: 100, x: ['Immediately', '1 day', '1 week', '1 month', '3 months'], series: [{ name: 'Calm event', y: [92, 85, 74, 63, 55] }, { name: 'Stressful event', y: [78, 66, 52, 41, 33] }] },
      keywords: ['witnesses', 'details', 'recalled', 'correctly', 'calm event', 'stressful event', 'percentage', 'time', 'declined', 'memory'],
      model: `The line graph shows the percentage of details of an event that witnesses recalled correctly at five points in time, and it compares a calm event with a stressful event. The data are illustrative.

Overall, the accuracy of memory declined over time for both types of event, but witnesses recalled the stressful event less accurately at every point.

Immediately after the event, witnesses recalled 92% of the details of the calm event and 78% of the details of the stressful event. After one day, the figures fell to 85% and 66%, and after one week, to 74% and 52%.

The decline continued over the longer periods. After one month, 63% of the calm event and only 41% of the stressful event were recalled correctly, and after three months the figures were 55% and 33%.

In total, accuracy fell by 37 percentage points for the calm event and by 45 points for the stressful event. The gap between the two lines grew from 14 points at the beginning to 22 points from the one-week mark onwards, where it then remained constant.`,
      analysis: ['Task Achievement: две линии, пять временных точек; обзор — спад и более низкая точность стрессового события.', 'Вычисления: −37 и −45; разрыв 14 → 22 и стабильно 22 с одной недели.', 'Cohesion: Overall / Immediately ... After ... / In total.', 'Lexical Resource: recalled, accuracy, decline, remained constant.']
    },
    heads: {
      list: ['The history of law courts', 'Honesty in speech', 'Presence and testimony', 'How certificates are issued', 'Verses naming the witness', 'Modern research on memory'],
      items: [{ p: 'A', a: 'iii', e: 'Абзац A: присутствие и свидетельство.' }, { p: 'B', a: 'v', e: 'Абзац B: 22:17, 4:79, 5:117.' }, { p: 'C', a: 'vi', e: 'Абзац C: современные исследования памяти.' }, { p: 'D', a: 'ii', e: 'Абзац D: честность в словах.' }]
    },
    ynng: [
      { q: 'The writer suggests that a Witness whose knowledge is complete and unchanging offers a contrast to the limits of human memory.', a: 'YES', e: 'Абзац C: полное и неизменное знание Свидетеля контрастирует с пределами человеческой памяти.' },
      { q: 'The writer believes that legal systems should rely entirely on eyewitness accounts.', a: 'NO', e: 'Абзац C: современные системы относятся к показаниям с осторожностью.' },
      { q: 'The writer states that written testimony is more reliable than spoken testimony.', a: 'NOT GIVEN', e: 'Сравнение письменных и устных показаний не приводится.' }
    ],
    matching: { instruction: 'What does the lecturer say about each of the following? Choose the correct letter, A–D.', options: ['Attention focuses on a threat and other details are lost', 'The longer it is, the more details fade', 'The way a question is asked can change the answer', 'Write down what you saw as soon as possible'], items: [{ q: 'Stress', a: 'A', e: 'При стрессе внимание сосредоточено на угрозе, остальные детали теряются.' }, { q: 'The delay between event and testimony', a: 'B', e: 'Чем дольше задержка, тем больше деталей стирается.' }, { q: 'Suggestion', a: 'C', e: 'Формулировка вопроса может изменить ответ.' }, { q: 'The first practice of a good witness', a: 'D', e: 'Первое правило — записать увиденное как можно скорее.' }] },
    short: [{ q: 'How many practices does the lecturer recommend for a good witness?', a: ['4', 'four'], e: 'Лектор рекомендует четыре правила.' }, { q: 'By which date should the assignment be submitted?', a: ['16', '16th', 'the sixteenth', 'Wednesday the sixteenth', 'Wednesday 16th', 'the 16th', 'Wednesday the 16th'], e: 'Срок — в среду, шестнадцатого.' }]
  });
})();

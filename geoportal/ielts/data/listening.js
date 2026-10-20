// Listening: 5 вариантов (скрипт для озвучки + 5 Note Completion + 3 Multiple Choice).
window.IELTS.DATA.listening = [
  /* ===== Variant 1 · Part 1 ===== */
  {
    title: 'Enrolment at the Intensive Academic IELTS & Cognitive Lab',
    spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~4 минуты',
    takeaway: 'Тренирует главный навык Part 1: не записывать первое услышанное — самокоррекции дат, цен, номеров аудиторий.',
    context: 'Part 1. Кандидат звонит в школу подготовки и записывается на вечерний курс. Слушайте внимательно: говорящие часто поправляют себя.',
    genders: { Hannah: 'f', Aidar: 'm' },
    script: `Hannah: Good morning, Intensive Academic IELTS and Cognitive Lab, Hannah speaking. How can I help?
Aidar: Good morning. My name's Aidar. I'd like to enrol on your evening IELTS course, please.
Hannah: Of course. Let me take some details. Could I have your surname?
Aidar: It's Serikov. That's S-E-R-I-K-O-V.
Hannah: Serikov, with a K, not a C. Thank you. Now, we run two groups. The intensive morning group starts on the third of March, and the evening group begins a week later.
Aidar: So the evening one starts on the tenth of March?
Hannah: That's right, the tenth. Classes run on Monday, Wednesday and Thursday from half past six until nine.
Aidar: Perfect. I work during the day, so the evening is the only option for me.
Hannah: May I ask what you're preparing for?
Aidar: I'm applying for a master's in sustainable engineering in Manchester. I need an overall seven, with no less than six and a half in any part. My Reading and Listening are fine, around seven and a half, but my Writing is stuck at six.
Hannah: I see. That's very common. Our course focuses on exactly what blocks people at Band six. In the first Cognitive Lab session, we ask students to record a two-minute monologue, which you'll transcribe yourself later in the week.
Aidar: Sounds interesting. Is it a test?
Hannah: No, it's only a baseline. Nobody grades it. Now, the fee. The evening course is four hundred and eighty pounds. The Cognitive Lab module is an extra sixty pounds, so the total is five hundred and forty.
Aidar: Hmm, I thought the lab was included. Well, five hundred and forty is fine.
Hannah: Let me double-check. Course, four-eighty. Lab, sixty. Yes, five hundred and forty pounds in total.
Aidar: How do I pay?
Hannah: You could pay in cash on the first evening, but we'd prefer a card payment on our website within forty-eight hours, because that holds your place. The bank transfer option closed last year.
Aidar: Card is fine. Where do the classes take place?
Hannah: In the main building, Room two-oh-four on the second floor. Actually, hold on, that room is being repainted. They've moved the evening group to Room two-one-four, just along the corridor.
Aidar: Two-one-four. Got it.
Hannah: Your student reference is seven-seven-three-one. No, sorry, that belongs to the previous applicant. Yours is seven-seven-one-three.
Aidar: Seven, seven, one, three. Thank you.
Hannah: One more thing. People always ask what to bring. A laptop is optional, but we do ask everyone to buy a notebook for vocabulary. An A4 notebook is too bulky, so we recommend a pocket-size one, because you'll be writing phrases rather than single words and reviewing them on the bus.
Aidar: A pocket-size notebook, all right. Is there much homework?
Hannah: About forty minutes a day, mostly retrieval practice from your notebook, plus one timed writing task each week that you upload before midnight on Sunday.
Aidar: That sounds manageable.
Hannah: Wonderful. I'll email you a confirmation and a short questionnaire about your study habits. Is there anything else you'd like to ask?
Aidar: No, that's everything. Thank you very much for your help.
Hannah: You're welcome, Aidar. See you on the tenth!`,
    notesTitle: 'Enrolment notes: evening IELTS course',
    notes: [
      { pre: 'Surname:', post: '', a: ['Serikov'], e: 'Фамилия продиктована по буквам: S-E-R-I-K-O-V. Ловушка: «with a K, not a C».' },
      { pre: 'Evening group starts on:', post: '', a: ['10 March', '10th March', '10th of March', 'the 10th of March', 'March 10', 'March 10th', 'tenth of March', 'the tenth of March', '10/3', '10.03'], e: 'Утренняя группа стартует 3 марта (дистрактор), вечерняя — на неделю позже, «the tenth of March».' },
      { pre: 'Total fee: £', post: '', a: ['540', 'five hundred and forty', '540 pounds'], e: 'Дистрактор 480 — стоимость без лабораторного модуля. С лабораторией +60 = 540.' },
      { pre: 'Room number:', post: '', a: ['214', 'two one four', 'room 214'], e: 'Сначала названа 204, затем самокоррекция: аудиторию перенесли в 214.' },
      { pre: 'Buy a notebook that is', post: 'for vocabulary.', a: ['pocket-size', 'pocket size', 'pocket', 'pocket-sized', 'pocket sized'], e: 'A4 слишком громоздкий — рекомендуют «pocket-size».' }
    ],
    mc: [
      { q: 'Why does Aidar want to take the course?', opts: ['to improve his Speaking before an interview', 'to raise his Writing score for a master\'s application', 'to prepare for a job in tourism'], a: 'B', e: 'Ему нужен общий балл 7.0 для магистратуры, а Writing «stuck at six».' },
      { q: 'What will students do in the first Cognitive Lab session?', opts: ['sit a graded Listening test', 'attend a lecture on memory', 'record a two-minute monologue'], a: 'C', e: 'Hannah: «we ask students to record a two-minute monologue»; это базовая запись без оценки.' },
      { q: 'How does the school prefer students to pay?', opts: ['by card on the website within 48 hours', 'in cash on the first evening', 'by bank transfer before the course'], a: 'A', e: 'Наличные возможны, но предпочтительна оплата картой на сайте в течение 48 часов; банковский перевод отменён.' }
    ]
  },

  /* ===== Variant 2 · Part 2 ===== */
  {
    title: 'Orientation Tour of the Self-Access Language & Neuro-Learning Hub',
    spec: 'Listening · Part 2 format · монолог-экскурсия, 8 вопросов · ~4 минуты',
    takeaway: 'Учит следить за маршрутом монолога и различать числа-дистракторы (36 и 63, 40 минут и час).',
    context: 'Part 2. Сотрудница проводит экскурсию по центру самостоятельной практики для новых студентов.',
    genders: { Guide: 'f' },
    script: `Guide: Good afternoon, everyone, and welcome to the Self-Access Language and Neuro-Learning Hub. My name is Dr Hart, and I'll take you around the three main areas where you will practise independently. The tour takes about twenty minutes, and at the end there will be time for your questions.
Guide: First, a few general points. We are on the ground floor, where you can see the reception desk and the café. The Hub is open from eight in the morning until ten at night on weekdays, although the booths close earlier, as I'll explain in a moment.
Guide: Our first stop is the Acoustic Shadowing Studio. Many visitors assume it is on the top floor with the library, but in fact it is on the second floor, directly above the café, because it needs the quietest rooms in the building. There are twelve soundproof booths, each with a microphone and headphones.
Guide: Shadowing means repeating a recording aloud with a delay of about one second, so that your ear learns to follow the stream of sound rather than separate words. The booth saves your attempt automatically so that you can compare it with the original. You can book a booth for up to forty minutes at a time. Some students ask for a full hour, but we found that after forty minutes concentration drops and the practice becomes mechanical.
Guide: One point that surprises people: our staff do not correct you while you are speaking. The idea is that you notice the differences yourself, because the errors you discover are the ones you remember.
Guide: Now, if you'll follow me along the corridor, we come to the Timed Simulation Arena. This is a large hall designed to feel like a real examination room, with individual desks, wall clocks and a raised podium for the invigilator. It holds thirty-six candidates. People sometimes confuse that with the sixty-three seats in the main lecture theatre, but that is a different building.
Guide: Full mock tests run every Saturday morning, and each result is analysed and uploaded to your online profile within two days. The aim is not only to practise the tasks but to rehearse the physical experience of three hours of concentration, including the sound of other people turning pages. The most important rule in the Arena is what we call no rewind: nothing can be paused or repeated, exactly as in the real examination.
Guide: Finally, please take the lift to the third floor, where you will find the Conceptual ESP Library. ESP stands for English for Specific Purposes. The books and articles here are not arranged by language level, as in most libraries, but by topic, such as environment, economics, health and technology.
Guide: The reasoning behind this is simple. If you read several texts on one subject, the same vocabulary keeps returning, and repetition in a meaningful context is what makes words permanent. We recommend choosing one topic and staying with it for two weeks, reading at least three texts about it before moving on. Please resist the temptation to change topic every day.
Guide: Before we finish, a practical note. You will each receive a membership card at reception. It opens the booths and the Arena, and it records your hours, which your teacher can see. Now, are there any questions?`,
    notesTitle: 'Hub facilities',
    notes: [
      { pre: 'Acoustic Shadowing Studio is on the', post: 'floor.', a: ['second', '2nd', '2', 'two'], e: 'Не третий этаж (там библиотека): студия «on the second floor, directly above the café».' },
      { pre: 'Maximum booking for one booth:', post: 'minutes.', a: ['40', 'forty'], e: 'Час просят студенты (дистрактор), но максимум — сорок минут.' },
      { pre: 'Full mock tests take place every', post: 'morning.', a: ['Saturday', 'saturday'], e: '«Full mock tests run every Saturday morning».' },
      { pre: 'Number of candidates the Arena holds:', post: '', a: ['36', 'thirty-six', 'thirty six'], e: '63 — места в другой аудитории (дистрактор); в Arena — тридцать шесть.' },
      { pre: 'Library texts are organised by', post: ', not by level.', a: ['topic', 'topics', 'subject', 'subjects'], e: '«not arranged by language level… but by topic».' }
    ],
    mc: [
      { q: 'What happens in the Acoustic Shadowing Studio?', opts: ['Staff correct pronunciation during the session.', 'Students discover the differences themselves.', 'Students send their recordings to a teacher.'], a: 'B', e: '«Our staff do not correct you while you are speaking… you notice the differences yourself».' },
      { q: 'What is the key rule in the Timed Simulation Arena?', opts: ['Tests may be paused once.', 'Nothing can be paused or repeated.', 'Only registered teachers may enter.'], a: 'B', e: 'Правило «no rewind»: ничего нельзя ставить на паузу или повторять.' },
      { q: 'What advice does the guide give about the library?', opts: ['Change the topic every day.', 'Stay with one topic for two weeks.', 'Start with the easiest level.'], a: 'B', e: 'Рекомендуют выбрать одну тему на две недели и прочитать минимум три текста.' }
    ]
  },

  /* ===== Variant 3 · Part 3 ===== */
  {
    title: 'Why Candidates Stall in Speaking: the Self-Transcription Audit',
    spec: 'Listening · Part 3 format · семинар на три голоса, 8 вопросов · ~5 минут',
    takeaway: 'Показывает, почему речь «обрывается» на второй минуте Part 2 и как исправить это за 20 минут самоанализа.',
    context: 'Part 3. Профессор и две студентки-исследователи, Liam и Sofia, обсуждают результаты исследования.',
    genders: { Adams: 'f', Liam: 'm', Sofia: 'f' },
    script: `Adams: Welcome back, everyone. Today's seminar is about a question many of you will have asked yourselves: why do some candidates speak confidently for one minute in the Part 2 monologue and then simply stop? Liam, Sofia, you have both collected data on this. Liam, would you start?
Liam: Thanks, Professor. We recorded forty-two candidates giving the two-minute talk. In the first minute almost everyone was fluent. But in the second minute the number of silent pauses roughly doubled, and many people began repeating what they had already said.
Sofia: Which is why we don't think it is mainly about nerves, which was the usual explanation. When we interviewed the candidates, most of them said they had planned only an opening. They had prepared about sixty seconds of content, and after that they had nothing left.
Liam: I'd put it slightly differently. I think nerves play a part, but they're an amplifier rather than the cause.
Adams: That's fair, Liam. So what did you do about it?
Sofia: We developed what we call the Self-Transcription Audit. It's a routine with five steps. First, the candidate records a monologue lasting two minutes. Not one minute and not three, because the second minute is exactly where the problem appears.
Liam: Second, and this is the unexpected part, they transcribe only the second minute. Writing it out takes about twenty minutes, but it makes visible what you cannot hear while you are speaking.
Sofia: Third, they mark every filler in red. Um, er, you know, sort of. It gives a simple number, and most people are surprised by it.
Adams: What counts as a lot?
Sofia: More than ten in a minute usually damages fluency. Fewer than five is typical for candidates at Band seven.
Liam: Fourth, they circle in blue any repeated linkers, for instance five sentences in a row that begin with "and" or "so". That shows the speaker is using the linker to buy time, not to connect ideas.
Sofia: And fifth, they choose the single weakest sentence and rewrite it using a lexical chunk, a ready-made phrase such as "what struck me most was".
Adams: Why only one sentence?
Liam: Because trying to fix everything is exactly why people do not repeat the exercise. One sentence takes two minutes, and it is enough to start changing the habit.
Adams: Excellent. And what did the results show?
Sofia: After three weeks, the average number of fillers in the second minute fell from eleven to six, and the candidates produced about thirty more words.
Liam: Although I should add that our sample was small, and we didn't have a control group. Some of the improvement might simply be practice.
Adams: That is an important limitation, and I would like you to state it clearly in your report. I'd also like you to think about whether a teacher listening to the recordings would reach the same conclusions as the candidates did themselves.
Sofia: We could ask three teachers to rate the first and last recordings without knowing which is which.
Adams: Exactly. A blind rating would strengthen your case far more than additional candidates would. Let's take a short break, and then we'll look at the transcripts together.`,
    notesTitle: 'Self-Transcription Audit',
    notes: [
      { pre: 'Record a monologue lasting', post: 'minutes.', a: ['2', 'two'], e: 'Ровно две минуты — «not one minute and not three».' },
      { pre: 'Transcribe only the', post: 'minute.', a: ['second', '2nd'], e: 'Транскрибируется только вторая минута — там возникает проблема.' },
      { pre: 'Mark every', post: 'in red.', a: ['filler', 'fillers'], e: 'Красным отмечают слова-паразиты: um, er, you know, sort of.' },
      { pre: 'Circle repeated', post: 'in blue.', a: ['linkers', 'linker', 'connectors', 'linking words', 'connectives'], e: 'Синим отмечают повторяющиеся связки (and, so), которыми «покупают время».' },
      { pre: 'Rewrite the weakest sentence using a lexical', post: '.', a: ['chunk', 'chunks'], e: 'Слабейшее предложение переписывают с готовой фразой — лексическим «chunk».' }
    ],
    mc: [
      { q: 'What reason did most candidates give for stopping after the first minute?', opts: ['They had prepared content for only about a minute.', 'They felt too nervous to continue.', 'They were interrupted by the examiner.'], a: 'A', e: 'Sofia: большинство «had planned only an opening» — примерно на 60 секунд.' },
      { q: 'What reservation does Liam express about the study?', opts: ['The recordings were of poor quality.', 'There was no control group.', 'The candidates were not motivated.'], a: 'B', e: 'Liam: «we didn\'t have a control group».' },
      { q: 'What does the professor suggest as the next step?', opts: ['Recruiting more candidates', 'Rating recordings blindly by teachers', 'Shortening the audit to three steps'], a: 'B', e: 'Профессор: слепая оценка записей преподавателями усилит выводы сильнее, чем новые кандидаты.' }
    ]
  },

  /* ===== Variant 4 · Part 4 ===== */
  {
    title: 'University Lecture: The Architecture of Academic Writing',
    spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~5 минут',
    takeaway: 'Объясняет, почему перечисление цифр в Task 1 ограничивает балл 5.0, зачем нужен Overview и как работают Тулмин и номинализация.',
    context: 'Part 4. Лекция в университете об устройстве академического письма.',
    genders: { Lecturer: 'm' },
    script: `Lecturer: Good morning. Today I want to look at the architecture of academic writing, and in particular at why so many capable candidates remain at Band six in both Task 1 and Task 2. The short answer is that they have vocabulary and grammar, but not architecture.
Lecturer: Let's begin with Task 1. Many candidates believe the task is to report every number on the chart. They are afraid of leaving something out, so they write a long list: in 2010 the figure was twelve, in 2015 it was fifteen, in 2020 it was eighteen. Each sentence is accurate, yet the response as a whole is only a list.
Lecturer: The descriptors for Task Achievement are quite clear on this point. A response that presents details mechanically, without a clear overview, is limited to Band five. It does not matter how accurate the numbers are. So the missing element is the overview: two sentences, usually placed straight after the introduction, which name the main trend or the main contrast without quoting figures.
Lecturer: The second skill is selection. Instead of reporting everything, the candidate groups data: the two categories that rose, the one that fell, the exception. Grouping shows that the writer has understood the picture, and understanding is what the examiner is trying to measure.
Lecturer: Now let's turn to Task 2. Here the architecture is argument. I have mentioned the philosopher Stephen Toulmin before. His model has four parts. The writer makes a claim. The writer gives grounds, which means evidence or examples. Then comes the warrant, the explanation of why the evidence supports the claim. And finally, the writer deals with a rebuttal.
Lecturer: In my experience, almost every candidate manages the first two steps. The warrant is the one that is missing. Compare these two paragraphs. In the first, a candidate writes that cities have invested in cycle lanes, and that cycling has increased. In the second, the candidate adds: this suggests that people respond to safe infrastructure, so government spending can change habits. That added sentence is the warrant, and it is where the thinking becomes visible.
Lecturer: A brief word about introductions. They should paraphrase the question in your own words and state your position clearly. They should not contain a quotation or a general statement about the modern world, and they should certainly not be the longest paragraph in the essay.
Lecturer: Now let me introduce a technique that raises both lexical and grammatical scores at the same time. It is called nominalisation. It means turning a verb or an adjective into a noun, so that a whole process becomes a single idea you can comment on. Take the sentence: cities grew rapidly, so transport became difficult. With nominalisation, this becomes: the rapid growth of cities made transport difficult. Notice that the verb grew has become the noun growth, and the adverb rapidly has become the adjective rapid.
Lecturer: Nominalisation is the language of academic writing. It makes sentences denser and more objective, and it lets the writer use the result of one sentence as the subject of the next, which is a very effective way to create cohesion.
Lecturer: How do you practise? Not by memorising lists of nouns. The best method is to finish a paragraph, then go back and rewrite two or three of your own sentences with nominalisation. After a few weeks, you will begin to write in this way automatically.
Lecturer: Next week we will look at the rebuttal and at hedging. Please bring one Task 2 essay that you have already written, because we will work on revising it.`,
    notesTitle: 'Architecture of Academic Writing',
    notes: [
      { pre: 'Task 1 responses that list details mechanically are limited to Band', post: '.', a: ['5', 'five', '5.0'], e: 'Без чёткого overview и при механическом перечислении — не выше Band 5.' },
      { pre: 'The missing element in such responses is the', post: '.', a: ['overview', 'an overview', 'the overview'], e: 'Не хватает overview — двух предложений об общей тенденции без цифр.' },
      { pre: 'The third part of Toulmin\'s model is the', post: '.', a: ['warrant', 'the warrant'], e: 'Порядок: claim, grounds, warrant, rebuttal. Warrant — третий; именно его чаще всего пропускают.' },
      { pre: 'Turning a verb into a noun is called', post: '.', a: ['nominalisation', 'nominalization'], e: 'Term: nominalisation.' },
      { pre: 'Cities grew rapidly becomes: the rapid', post: 'of cities.', a: ['growth'], e: 'Глагол grew превращается в существительное growth.' }
    ],
    mc: [
      { q: 'According to the lecturer, why do candidates list every figure in Task 1?', opts: ['They think accuracy is the only criterion.', 'They are afraid of leaving something out.', 'Examiners ask them to do so.'], a: 'B', e: '«They are afraid of leaving something out».' },
      { q: 'What does the lecturer say about an introduction?', opts: ['It should paraphrase the question and state the position.', 'It should begin with a quotation.', 'It should be the longest paragraph.'], a: 'A', e: 'Введение — перефраз вопроса и позиция; без цитаты и общих фраз о современном мире.' },
      { q: 'How does the lecturer recommend practising nominalisation?', opts: ['translating sentences from the first language', 'rewriting own sentences after finishing a paragraph', 'memorising lists of nouns'], a: 'B', e: '«Finish a paragraph, then go back and rewrite two or three of your own sentences».' }
    ]
  },

  /* ===== Variant 5 · Part 4 ===== */
  {
    title: 'University Lecture: The Neurophysiology of a Three-Hour Examination',
    spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~5 минут',
    takeaway: 'Научит управлять стрессом на экзамене: закон Йеркса — Додсона, кортизол, протокол 5–28–7 и «физиологический вздох».',
    context: 'Part 4. Лекция о том, как организм реагирует на длинный экзамен и как управлять собственным состоянием.',
    genders: { Lecturer: 'f' },
    script: `Lecturer: Good afternoon. In this lecture I want to look at what happens inside the body during a long examination, and what a candidate can do about it. Most advice on this topic is about motivation. I would like to focus on physiology.
Lecturer: Let's start with a law that is more than a hundred years old. In 1908, the psychologists Robert Yerkes and John Dodson showed that performance improves as arousal increases, but only up to a point. After that point, performance falls. If you draw this on a graph, you get an upside-down U. The highest performance occurs at moderate arousal, not at the lowest and not at the highest.
Lecturer: This matters, because many candidates believe that any stress is harmful. It is not. A little tension sharpens attention and speeds up memory retrieval. The danger begins when arousal passes the top of the curve.
Lecturer: What happens then? The body releases cortisol, the main stress hormone. In short bursts, cortisol is useful. But when its level stays high, it interferes with the prefrontal cortex, the region behind the forehead that is responsible for planning, working memory and self-control. A candidate in this state feels that their mind has gone blank. They know the answer, but they cannot reach it.
Lecturer: Of course, a three-hour examination makes this worse, because attention is a limited resource and it declines. The question is how to manage it, and I will offer two practical tools.
Lecturer: The first is a time protocol for the Task 2 essay, which you have forty minutes to write. I call it five, twenty-eight, seven. In the first five minutes, you plan. Many candidates feel that this is wasted time, because other people are already writing. But a plan protects the prefrontal cortex. If your argument is decided in advance, you do not have to hold it in working memory while you also search for words.
Lecturer: Then you write for twenty-eight minutes, without stopping to reread every sentence. And in the last seven minutes, you check. Not five, because that is not enough time to find the errors, and not ten, because then you will not have finished the writing.
Lecturer: The second tool is a breathing technique known as the physiological sigh. It consists of two inhalations through the nose, one deep and one short, followed by a long, slow exhalation through the mouth. The long exhalation is the important part, because it slows the heart rate. In 2023, researchers at Stanford reported that a few minutes of this kind of breathing each day improved mood more than a comparable amount of mindfulness meditation. Evidence for its effect during a real examination is still limited, so you should treat it as a low-cost experiment, not a guarantee.
Lecturer: When should you use it? Not continuously, and not only before you enter the room. The best moment is between sections, or whenever you notice your hands tightening or your thoughts speeding up. One or two sighs are enough.
Lecturer: To summarise, performance is not a matter of removing stress but of keeping arousal near the top of the curve. Plan your time, protect your prefrontal cortex and use your breath. In the next lecture, we will look at sleep before the exam, and why a late night of revision may do more harm than good.`,
    notesTitle: 'Managing a long examination',
    notes: [
      { pre: 'Performance is highest at', post: 'arousal.', a: ['moderate', 'medium', 'mid', 'middle', 'intermediate'], e: 'Закон Йеркса — Додсона: инвертированная U-кривая, пик при умеренном возбуждении.' },
      { pre: 'High cortisol interferes with the', post: 'cortex.', a: ['prefrontal', 'pre-frontal', 'pre frontal'], e: 'Высокий кортизол нарушает работу префронтальной коры (планирование, рабочая память).' },
      { pre: 'In the 5–28–7 protocol, the number of minutes spent planning is', post: '.', a: ['5', 'five'], e: 'Первые пять минут — планирование.' },
      { pre: 'The number of minutes spent checking is', post: '.', a: ['7', 'seven'], e: 'Последние семь минут — проверка (28 — это время письма, дистрактор).' },
      { pre: 'In the physiological sigh, two inhalations are followed by a long slow', post: '.', a: ['exhalation', 'exhale', 'breath out', 'out-breath', 'outbreath'], e: 'Ключевая часть — долгий медленный выдох (exhalation).' }
    ],
    mc: [
      { q: 'What does the lecturer say about stress during an examination?', opts: ['It is always harmful.', 'A moderate level can improve performance.', 'It only affects Speaking.'], a: 'B', e: '«A little tension sharpens attention and speeds up memory retrieval».' },
      { q: 'Why does the lecturer recommend spending five minutes planning?', opts: ['Examiners give marks for plans.', 'It reduces the load on working memory while writing.', 'It lets the candidate see what others write.'], a: 'B', e: 'План заранее разгружает рабочую память: аргументы не нужно удерживать, пока подбираются слова.' },
      { q: 'When does the lecturer suggest using the physiological sigh?', opts: ['continuously while writing', 'only before entering the examination room', 'between sections or when tension rises'], a: 'C', e: '«Between sections, or whenever you notice your hands tightening… one or two sighs are enough».' }
    ]
  }
];

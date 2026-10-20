// Имена 1–10: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 1 · Ar-Rahman ===== */
  put(1, {
    listening: {
      title: 'Ar-Rahman — a school project', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за изменениями дат и номеров комнат и услышать ключевые идеи имени Ар-Рахман.',
      context: 'Part 3. Учитель и ученица обсуждают презентацию об имени Ар-Рахман.', genders: { Karim: 'm', Amina: 'f' },
      script: `Karim: Hello Amina. Have you decided how to present your project on the names of Allah?
Amina: Yes, Dr Karim. I would like to begin with Ar-Rahman.
Karim: A good choice. When is your presentation again? Thursday?
Amina: Actually, it was moved to Friday, in the second period.
Karim: Right. And the room?
Amina: Room twelve. No, sorry, twelve is the laboratory. It is Room twenty-one.
Karim: Correct. What will your first slide be about?
Amina: The root. The letters r, h, m are connected with the word for the womb, so the name carries the idea of care that surrounds and protects.
Karim: And the second slide?
Amina: The chapter that is named after this name, Surah fifty-five, which begins with the single word Ar-Rahman. I will also show the first chapter, where the name appears in the opening words.
Karim: Good. And the practical part?
Amina: I would like to ask my classmates to write three acts of mercy they could do this week. Kindness to neighbours, and also to animals.
Karim: How many slides altogether?
Amina: Eight. At first I planned ten, but the time is only seven minutes.
Karim: Excellent. Remember to compare it with Ar-Rahim, which is described as especially merciful.
Amina: I will, and I will bring a one-page handout.
Karim: Then you are ready.`,
      notesTitle: 'Presentation: Ar-Rahman',
      notes: [
        { pre: 'Day of the presentation:', post: '', a: ['Friday'], e: 'Сначала названа среда, затем — «moved to Friday».' },
        { pre: 'Room number:', post: '', a: ['21', 'twenty-one', 'twenty one'], e: '12 — лаборатория (самокоррекция), аудитория — 21.' },
        { pre: 'First slide: the', post: 'of the name', a: ['root'], e: 'Первый слайд — корень r-h-m.' },
        { pre: 'Total number of slides:', post: '', a: ['8', 'eight'], e: 'Сначала планировалось 10, но на семь минут — восемь слайдов.' },
        { pre: 'Length of the presentation:', post: 'minutes', a: ['7', 'seven'], e: '«the time is only seven minutes».' }
      ],
      mc: [
        { q: 'What will Amina ask her classmates to do?', opts: ['write three acts of mercy', 'memorise a chapter', 'draw a poster'], a: 'A', e: 'Она попросит записать три милосердных поступка на неделю.' },
        { q: 'Which chapter is named after the name?', opts: ['Surah 55', 'Surah 1', 'Surah 114'], a: 'A', e: 'Сура 55 названа этим именем и начинается с него.' },
        { q: 'What does Dr Karim suggest comparing the name with?', opts: ['Ar-Rahim', 'Al-Malik', 'As-Salam'], a: 'A', e: 'Совет: сравнить с Ар-Рахимом.' }
      ]
    },
    writing: {
      title: 'Ar-Rahman — mercy and strength', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация в эссе: как опровергнуть мнение «милосердие — слабость».',
      task2: {
        prompt: 'Some people believe that showing mercy is a sign of weakness in modern competitive societies. To what extent do you agree or disagree?',
        keywords: ['mercy', 'weakness', 'competitive', 'society', 'kindness', 'forgiveness', 'strength', 'leaders', 'cooperation', 'compassion', 'trust', 'conflict'],
        model: `The claim that mercy is a sign of weakness in competitive societies is widely heard, but I strongly disagree with it. In my view, mercy is a form of strength, and societies that undervalue it pay a considerable price.

Those who regard mercy as weakness usually have a narrow picture of competition in mind. In a ruthless market, they argue, a manager who forgives mistakes or a company that helps a rival will quickly be overtaken. This view contains a grain of truth, because unlimited leniency can encourage carelessness. However, it confuses mercy with the absence of standards.

In fact, genuine mercy requires more self-control than revenge does. Responding to a hostile colleague with patience, or giving a struggling employee a second chance, demands that people master anger and pride, which most find difficult. Such behaviour also produces tangible results. Research on workplaces has repeatedly associated forgiving, supportive environments with greater loyalty and lower turnover, since people who are not afraid of every error are more willing to report problems early.

Furthermore, mercy sustains the trust on which competition itself depends. Markets, schools and sports leagues function only when participants believe that rules will be applied fairly and that failure is not catastrophic. A society that rewards cruelty would soon discover that cooperation collapses, and with it the benefits of competition.

Admittedly, mercy should be combined with justice. A leader who never enforces consequences is not merciful but negligent. The most effective approach is therefore firm standards applied with compassion.

In conclusion, mercy is not weakness but a disciplined strength that makes competitive societies more stable and humane.`,
        analysis: [
          'Task Response: позиция заявлена сразу («strongly disagree») и сохраняется; противоположное мнение признано и объяснено, а не проигнорировано.',
          'Модель Тулмина: claim (милосердие — сила) → grounds (самоконтроль, исследования о коллективах) → warrant (доверие нужно самой конкуренции) → rebuttal с оговоркой (милосердие + справедливость).',
          'Coherence & Cohesion: смысловое связывание («this view… it confuses», «such behaviour…»), без механических Firstly/Secondly.',
          'Lexical Resource & Grammar: ruthless, leniency, turnover, sustain; хеджирование (usually, may), сложные и пассивные конструкции.'
        ]
      }
    },
    speaking: {
      title: 'Ar-Rahman — kindness in daily life', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о добром поступке и обсуждение роли милосердия в обществе.',
      keywords: ['kind', 'kindness', 'help', 'mercy', 'forgive', 'compassion', 'neighbour', 'support', 'patient', 'animals'],
      part1: [
        { q: 'Do you consider yourself a patient person?', a: 'Generally, yes, although it depends on the situation. With students I have a lot of patience, because I remember how it felt to be confused. In traffic, however, I am working on it.' },
        { q: 'How do you usually react when someone makes a mistake?', a: 'I try to find out why it happened before reacting. Most mistakes come from misunderstanding rather than carelessness, so a calm explanation is usually more effective than criticism.' },
        { q: 'Do you help your neighbours?', a: 'Whenever I can. Sometimes it is something small, like carrying shopping for an elderly neighbour. These little gestures make the building feel like a community.' },
        { q: 'Do you like animals?', a: 'Very much. I think the way people treat animals says a lot about their character, so I always try to be gentle with them.' }
      ],
      part2: {
        topic: 'Describe a time when you showed kindness to someone.', bullets: ['who the person was', 'what you did', 'why you decided to help', 'and explain how you felt afterwards.'],
        plan: [{ h: '1. Who', t: 'An elderly neighbour, Mrs Gulnara, living alone.' }, { h: '2. What', t: 'Brought groceries and medicine during a snowstorm.' }, { h: '3. Why', t: 'Nobody else was around; I remembered my grandmother.' }, { h: '4. Feelings', t: 'Warm, humble; she cooked for me later.' }],
        model: `I would like to describe a time when I helped an elderly neighbour during a heavy snowstorm last winter. Her name is Mrs Gulnara, and she lives alone on the third floor of my building.

One evening the temperature dropped to minus thirty, and the wind was so strong that buses stopped running. I was coming home when I noticed that the light in her window was off, which is unusual, because she is normally awake until late. I knocked on her door and discovered that she had been without electricity for hours and had run out of her heart medicine.

I did not hesitate. I went to the nearest pharmacy, which was about twenty minutes away on foot, bought the medicine and some groceries and brought them back. Then I called the building manager, who arranged for an electrician to come the next morning. In the meantime, I lent her a small heater and a blanket.

The reason I decided to help was simple. I had thought about my own grandmother, who lived alone in a village, and I hoped that somebody would do the same for her. There was also a practical side: nobody else seemed to have noticed.

Afterwards I felt humble and grateful. It was not a dramatic act, yet the relief on her face was something I will remember for a long time. A few days later she invited me for dinner and cooked an enormous meal, and she still greets me every morning. The experience taught me that small acts of mercy can build a surprisingly strong bond between people.`
      },
      part3: [
        { q: 'Why do some people find it hard to forgive others?', a: 'Often because forgiveness feels like admitting that the offence did not matter. In reality it is a decision not to be controlled by resentment. People who cannot forgive tend to carry the anger around with them, and it harms them more than the other person.' },
        { q: 'Should schools teach children to be compassionate?', a: 'Yes, I think so, although it should be through example rather than lectures. When teachers treat students with respect and students are encouraged to help each other, compassion becomes a habit rather than a slogan.' },
        { q: 'Is it possible to be too kind?', a: 'It is possible if kindness means avoiding difficult truths. A parent who never says no or a manager who never corrects mistakes is not helping anyone. The best kindness is combined with honesty and clear boundaries.' }
      ]
    }
  });

  /* ===== 2 · Ar-Rahim ===== */
  put(2, {
    listening: {
      title: 'Ar-Rahim — a library visit', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Тренирует запись дат, номеров и названий в диалоге с самокоррекциями.',
      context: 'Part 1. Студент записывается в библиотеку, чтобы взять книги об имени Ар-Рахим.', genders: { Librarian: 'f', Daniyar: 'm' },
      script: `Librarian: Good morning. City Library, how can I help?
Daniyar: Good morning. I would like to borrow some books about the names of Allah, especially Ar-Rahim.
Librarian: Of course. Could I take your name?
Daniyar: Daniyar Omarov. That is D-A-N-I-Y-A-R.
Librarian: And your membership number?
Daniyar: It is four-six-eight-two. Sorry, four-six-two-eight.
Librarian: Thank you. The books on that subject are in the Religion section, on the second floor.
Daniyar: Is it open on Saturdays?
Librarian: Yes, from nine until three. On weekdays it closes at six. Not seven, that was last year.
Daniyar: Good. And how long can I keep the books?
Librarian: Three weeks, and you may renew them once for another two weeks.
Daniyar: Perfect. I am also interested in how the name appears in the Qur'an. The opening chapter and the verse about the one God, I think.
Librarian: There is a reading room with an excellent translation of the Qur'an. You may use it, but you cannot take it out.
Daniyar: Understood. Is there a fee?
Librarian: Membership is free for students. Please bring your student card on your first visit.
Daniyar: Thank you very much.
Librarian: You are welcome. Good luck with your project.`,
      notesTitle: 'Library enquiry',
      notes: [
        { pre: 'Surname:', post: '', a: ['Omarov'], e: 'Фамилия — Omarov.' },
        { pre: 'Membership number:', post: '', a: ['4628', 'four six two eight'], e: 'Сначала 4682, затем поправка — 4628.' },
        { pre: 'Books about the names are on the', post: 'floor.', a: ['second', '2nd', '2'], e: 'Раздел Religion на втором этаже.' },
        { pre: 'Weekday closing time:', post: 'p.m.', a: ['6', 'six', '18:00', '6:00'], e: 'Закрывается в шесть; семь — было в прошлом году.' },
        { pre: 'Loan period:', post: 'weeks', a: ['3', 'three'], e: 'Книги выдаются на три недели.' }
      ],
      mc: [
        { q: 'What can the reader do with the Qur\'an translation?', opts: ['borrow it for a week', 'read it in the reading room only', 'buy a copy at the desk'], a: 'B', e: 'Перевод можно использовать в читальном зале, но не выносить.' },
        { q: 'What must Daniyar bring on his first visit?', opts: ['his passport', 'a student card', 'a reference letter'], a: 'B', e: 'Просят принести студенческий билет.' },
        { q: 'How much is the membership?', opts: ['free for students', 'ten pounds a year', 'five pounds a month'], a: 'A', e: 'Членство бесплатно для студентов.' }
      ]
    },
    writing: {
      title: 'Ar-Rahim — mercy for whom?', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сбалансированное эссе о том, кому в первую очередь адресуется милосердие.',
      task2: {
        prompt: 'Some people think that compassion should be shown equally to everyone, while others believe that we have a greater duty toward people who are close to us. Discuss both views and give your own opinion.',
        keywords: ['compassion', 'equally', 'duty', 'family', 'friends', 'strangers', 'community', 'charity', 'responsibility', 'close', 'moral', 'obligation'],
        model: `People disagree about whether compassion should be directed equally toward everyone or first toward those who are close to us. Although both positions have merit, I believe that the most defensible view combines a special duty to our own circle with a general concern for all.

Supporters of equal compassion argue that human suffering matters regardless of who experiences it. A hungry child in a distant country is not less deserving of help than one in our street, and a moral outlook that ignores this risks becoming selfish. Global problems such as famine and refugee crises also demonstrate that ignoring distant strangers eventually affects everyone.

On the other hand, those who prioritise the people around them can point to the practical and emotional logic of relationships. Parents, friends and neighbours depend on us in ways that no one else can replace. We know their needs, we are able to help effectively, and they are likely to be harmed if we fail. Moreover, societies are built from networks of close responsibilities: if each family cared for its own members, a great deal of hardship would disappear without any institution intervening.

In my opinion, these views are not contradictory. A person who neglects relatives while donating to distant causes is not truly compassionate, because mercy that does not begin in everyday life tends to be shallow. Conversely, a community that cares only for its own members becomes narrow and, over time, hostile to outsiders. The healthiest pattern is concentric: first the family, then the neighbourhood, and then wider humanity.

In conclusion, special obligations to those close to us are legitimate, but they should be the starting point of compassion, not its limit.`,
        analysis: [
          'Task Response: оба мнения раскрыты в своих абзацах, позиция («concentric» модель) заявлена во введении и в заключении.',
          'Аргументация: у каждой стороны есть тезис, основание и объяснение связи (warrant), а не простое перечисление.',
          'Cohesion: переходы по смыслу (On the other hand, Conversely), повторение ключевых понятий (compassion, obligations).',
          'Lexical Resource: merit, defensible, concentric, legitimate; хеджирование (tends to, may, likely).'
        ]
      }
    },
    speaking: {
      title: 'Ar-Rahim — a person who helped me', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о человеке, который помог в трудную минуту, и обсуждение благодарности.',
      keywords: ['help', 'person', 'support', 'grateful', 'difficult', 'kind', 'advice', 'mercy', 'second chance'],
      part1: [
        { q: 'Who do you ask for help when you have a problem?', a: 'Usually my older sister, because she is practical and never judges me. If it is a work problem, I talk to a colleague I trust.' },
        { q: 'Do you like helping other people?', a: 'Yes, it gives me a sense of purpose. Even something small, like explaining a lesson to a classmate, makes my day better.' },
        { q: 'Have you ever received a second chance?', a: 'Yes, I once failed an important exam, and my teacher allowed me to retake it. I was extremely grateful, and I worked twice as hard.' },
        { q: 'How do you thank people who help you?', a: 'I try to do it specifically rather than just saying thanks. I tell them exactly what their help meant, and sometimes I write a short note.' }
      ],
      part2: {
        topic: 'Describe a person who helped you when you were in difficulty.', bullets: ['who the person is', 'what the problem was', 'how this person helped you', 'and explain how you felt about their help.'],
        plan: [{ h: '1. Who', t: 'My university professor, Dr Aliya.' }, { h: '2. Problem', t: 'Failed first exam; thought of leaving.' }, { h: '3. Help', t: 'Extra sessions, study plan, believed in me.' }, { h: '4. Feelings', t: 'Relief, gratitude, now I help others.' }],
        model: `The person I would like to talk about is my former university professor, Dr Aliya, who helped me at a moment when I was close to giving up.

In my first year I failed an important exam. I had studied hard, or so I thought, but I had been using the wrong methods, and I was ashamed. I even considered leaving the programme, because I felt that everyone else understood things I could not.

Dr Aliya noticed that I had stopped asking questions in class. She invited me to her office and, instead of criticising the result, she asked me to describe how I studied. After listening for ten minutes, she said calmly that the problem was not my ability but my method. She offered to meet me every Thursday for an hour and helped me build a study plan with self-testing and regular review.

She did this for nothing. She was not required to, and she had many other students. What impressed me most was that she never made me feel pitied; she treated me as someone who was capable of improvement.

I felt enormous relief and gratitude. Within a semester, my grades had improved, and by the end of the year I was among the top students. Today I am a teacher myself, and whenever a student looks discouraged, I remember her office, her patience and her quiet confidence. In a sense, helping others is the best way I know to thank her.`
      },
      part3: [
        { q: 'Why do people sometimes refuse help?', a: 'Pride is a common reason, and also fear of being a burden. In some cultures, asking for help is seen as a weakness, so people suffer silently. Ironically, accepting help often strengthens relationships.' },
        { q: 'Should governments help people who have made serious mistakes?', a: 'To a degree, yes. A society that offers second chances, such as education for former prisoners, usually benefits in the long run because people are less likely to repeat their mistakes. But help should come with responsibility.' },
        { q: 'How can communities support people in need?', a: 'Through a mixture of formal and informal support: charities and public services on the one hand, and neighbours who check on each other on the other. Community centres that bring people together are particularly valuable.' }
      ]
    }
  });

  /* ===== 3 · Al-Malik ===== */
  put(3, {
    listening: {
      title: 'Al-Malik — authority and trust', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Учит удерживать структуру лекции и различать числа-дистракторы.',
      context: 'Part 4. Лекция о природе власти и идее суверенитета.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good morning. Today we look at the idea of sovereignty and what it means to hold authority. The Arabic word for king, malik, comes from a root connected with ownership and control. When this name is used for God, as in the name Al-Malik, it means complete ownership and complete authority.
Lecturer: There are two aspects. The first is ownership: everything that exists belongs to Him. The second is command: He decides, and no one can overrule. By contrast, human rulers hold power for a limited time. Take an imaginary ruler who stays in office for twenty years, which is already a very long period, and yet it comes to an end.
Lecturer: In the Qur'an, the name appears in Surah twenty, verse one hundred fourteen, which says that Allah is high above all, the Sovereign, the Truth. It is also in Surah one hundred fourteen, where Allah is called the Sovereign of mankind. That is one of the shortest chapters, with only six verses.
Lecturer: Why does this matter for modern leaders? Because authority is a trust. A manager is responsible to the people they manage, not owner of them. I recommend a simple exercise. When you feel anxious about an outcome, write two lists. In the first, write what depends on you. In the second, what does not. Act on the first, and let go of the second.
Lecturer: For next week, please read chapter four of your textbook and prepare a one-page reflection. Not chapter five. That is for the week after.`,
      notesTitle: 'Lecture: sovereignty',
      notes: [
        { pre: 'The root of malik is connected with', post: 'and control.', a: ['ownership'], e: 'Корень связан с владением и контролем.' },
        { pre: 'Length of the ruler\'s term in the example:', post: 'years', a: ['20', 'twenty'], e: 'Пример: правитель у власти двадцать лет — это долго, но срок всё равно заканчивается.' },
        { pre: 'The name appears in Surah', post: ', verse 114.', a: ['20', 'twenty'], e: 'Сура 20, аят 114.' },
        { pre: 'The chapter of mankind has only', post: 'verses.', a: ['6', 'six'], e: 'Сура 114 состоит из шести аятов.' },
        { pre: 'Reading for next week: chapter', post: '', a: ['4', 'four'], e: 'Глава 4; пятая — на следующую неделю после.' }
      ],
      mc: [
        { q: 'What are the two aspects of sovereignty?', opts: ['ownership and command', 'wealth and fame', 'knowledge and strength'], a: 'A', e: 'Владение и право приказывать.' },
        { q: 'How does the lecturer describe human authority?', opts: ['a permanent possession', 'a trust', 'a prize'], a: 'B', e: '«authority is a trust».' },
        { q: 'What does the lecturer recommend when anxious?', opts: ['write two lists', 'delay a decision', 'ask a colleague'], a: 'A', e: 'Два списка: что зависит от вас, а что нет.' }
      ]
    },
    writing: {
      title: 'Al-Malik — authority of leaders', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение подходов к власти и обоснованный вывод.',
      task2: {
        prompt: 'Some people say that leaders should have complete authority so that they can make quick decisions. Others believe that the power of leaders should always be limited. Discuss both views and give your own opinion.',
        keywords: ['leaders', 'authority', 'power', 'decisions', 'limited', 'accountability', 'democracy', 'checks', 'responsibility', 'crisis', 'government', 'abuse'],
        model: `Opinions differ on whether leaders should possess complete authority or whether their power should be restricted. While unrestricted authority has some practical appeal, I believe that limited and accountable power is the safer and, ultimately, more effective arrangement.

Advocates of complete authority emphasise speed and clarity. In a crisis such as a natural disaster or a financial collapse, lengthy consultation can cost lives or money, and a leader who can act immediately may prevent greater harm. A single, unified command also avoids the confusion that results from competing instructions.

However, history suggests that unchecked power tends to be abused. Even leaders with good intentions are fallible, and without mechanisms of review, errors may go unnoticed until the damage is severe. Moreover, those around such a leader often prefer to flatter rather than to warn, so the person at the top becomes progressively less informed. Limits on authority, including independent courts, free media and regular elections, therefore function as a form of error correction.

Importantly, limits do not necessarily prevent decisive action. Many democracies grant leaders emergency powers for a defined period, subject to later review. This combines the benefits of speed with the protection of accountability. Similar principles apply in organisations: a manager who is expected to explain decisions to a board generally decides more carefully.

In my view, authority should be understood as a trust rather than a possession. It is lent to leaders for the benefit of others, and those who hold it must remain answerable for how it is used.

In conclusion, although complete authority may seem efficient, limited power paired with swift emergency procedures offers the best balance between effectiveness and safety.`,
        analysis: [
          'Task Response: обе стороны раскрыты, собственная позиция выражена и подтверждена выводом.',
          'Аргументы: скорость в кризисе vs злоупотребление властью; решение примирения (emergency powers) — пример rebuttal с оговоркой.',
          'Cohesion: движение от «за» к «против» через However / Importantly; повторение ключевого слова authority как смысловая связка.',
          'Lexical Resource: fallible, accountability, flatter, error correction; грамматика: пассив, придаточные уступки (Although).'
        ]
      }
    },
    speaking: {
      title: 'Al-Malik — a leader I respect', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание человека у власти и обсуждение ответственности лидеров.',
      keywords: ['leader', 'authority', 'respect', 'responsible', 'decision', 'team', 'power', 'fair', 'listen'],
      part1: [
        { q: 'Do you like being in charge of a group?', a: 'I do not mind it, as long as the group knows why we are doing something. Being in charge is mostly about listening, and I enjoy that part.' },
        { q: 'What qualities make someone a good leader?', a: 'I think honesty and clarity come first. A good leader also admits mistakes and gives credit to the team.' },
        { q: 'Were you a leader at school?', a: 'Yes, I was the class representative in my last year. It taught me how difficult it is to please everyone.' },
        { q: 'Do you prefer to give instructions or follow them?', a: 'It depends on my knowledge. If I know the subject well, I am happy to guide; otherwise I would rather learn from someone more experienced.' }
      ],
      part2: {
        topic: 'Describe a leader you respect.', bullets: ['who the person is', 'what position they hold', 'what they have done', 'and explain why you respect them.'],
        plan: [{ h: '1. Who', t: 'The head of my school, Mr Serik.' }, { h: '2. Position', t: 'Director for ten years.' }, { h: '3. Actions', t: 'Open-door policy, fair, took responsibility.' }, { h: '4. Why respect', t: 'Power as responsibility, not privilege.' }],
        model: `The leader I would like to describe is Mr Serik, the director of the school where I worked as a young teacher. He held that position for about ten years, and he is the best example I know of authority used responsibly.

What made him unusual was that he never behaved as though the school belonged to him. His door was open, literally, from eight to five, and any teacher or student could come in and explain a problem. He listened without interrupting, and he usually said that he would think about it and give an answer by the end of the week. Remarkably, he always did.

One incident stays in my memory. A mistake in the examination schedule meant that dozens of students arrived to find the wrong room. Instead of blaming the administrative staff, he stood in front of parents the next morning and said that the responsibility was his, and that he would make sure it did not happen again. Within a month he had introduced a double-checking system.

I respect him for several reasons. First, he used his power to protect others rather than to impress them. Second, he was fair: he applied the same rules to his friends and his critics. And finally, he understood that his position was a trust. He once told me that a leader is someone who has been lent authority and must return it in better condition than he found it.

I still try to follow his example in my own classroom.`
      },
      part3: [
        { q: 'Should leaders be held responsible for their mistakes?', a: 'Definitely. Accountability is what separates legitimate authority from arbitrary power. If leaders face no consequences, they have little reason to be careful, and ordinary people pay the price.' },
        { q: 'Are leaders born or made?', a: 'I believe they are mostly made. Some people may be naturally confident, but listening, planning and honesty are skills that can be practised. Many outstanding leaders began as ordinary people who were given responsibility early.' },
        { q: 'How has leadership changed in recent decades?', a: 'It has become more collaborative. Younger employees expect to be consulted, and information spreads so quickly that leaders cannot hide mistakes. As a result, authority is based increasingly on trust rather than on rank.' }
      ]
    }
  });

  /* ===== 4 · Al-Quddus ===== */
  put(4, {
    listening: {
      title: 'Al-Quddus — a workshop on purity', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за порядком объявлений и числами в монологе-инструкции.',
      context: 'Part 2. Организатор рассказывает о мастерской по каллиграфии на тему «Чистота».', genders: { Organiser: 'f' },
      script: `Organiser: Welcome, everyone, to our calligraphy workshop on the name Al-Quddus, the Most Pure. My name is Madina, and I will explain how the morning will work.
Organiser: We begin at ten o'clock. Some of you were told half past nine, but that was the earlier schedule. Please sit at the tables near the windows, because the light is better there.
Organiser: Each participant will receive a sheet of cream-coloured paper, a reed pen and a small bottle of black ink. The sheets are A4, not A3, so please plan the size of your letters accordingly.
Organiser: The name Al-Quddus comes from a root which means purity and holiness. We will write it first as a single line, and then as part of a verse from the end of Surah fifty-nine, where it appears in a list of divine attributes. Please do not worry about perfection. Calligraphy needs patience, and patience needs practice.
Organiser: We will take a break at eleven fifteen. There will be tea and dates in the corridor. After the break, there will be a short talk about keeping a tidy workspace as a habit of care.
Organiser: Finally, the finished pages will be displayed in the hall on Saturday. If you wish to take your page home, please tell me today. The workshop fee is twelve pounds, which you can pay at the end.
Organiser: Are there any questions? No? Then let us begin.`,
      notesTitle: 'Calligraphy workshop',
      notes: [
        { pre: 'Start time:', post: '', a: ['10', '10:00', 'ten', 'ten o\'clock', '10 o\'clock'], e: 'Начало в десять; девять тридцать — старое расписание.' },
        { pre: 'Paper size:', post: '', a: ['A4'], e: 'Листы А4, а не А3.' },
        { pre: 'The name appears in Surah', post: '', a: ['59', 'fifty-nine', 'fifty nine'], e: 'Конец суры 59.' },
        { pre: 'Break at', post: '', a: ['11:15', '11.15', 'eleven fifteen', 'quarter past eleven'], e: 'Перерыв в 11:15.' },
        { pre: 'Workshop fee: £', post: '', a: ['12', 'twelve'], e: 'Взнос — двенадцать фунтов.' }
      ],
      mc: [
        { q: 'Where should participants sit?', opts: ['near the windows', 'at the back', 'in the corridor'], a: 'A', e: 'Там лучше свет.' },
        { q: 'What is the topic of the talk after the break?', opts: ['the history of paper', 'a tidy workspace', 'the choice of ink'], a: 'B', e: 'Речь о привычке содержать рабочее место в порядке.' },
        { q: 'When will the pages be displayed?', opts: ['today', 'on Saturday', 'next month'], a: 'B', e: 'В субботу в зале.' }
      ]
    },
    writing: {
      title: 'Al-Quddus — the value of purity', spec: 'Writing · Task 2 Two-part question · 40 минут · минимум 250 слов',
      takeaway: 'Ответ на двухчастный вопрос: почему важна ценность и как её развивать.',
      task2: {
        prompt: 'Honesty and purity of intention are considered basic values in many cultures. Why are these values important, and how can schools help young people to develop them?',
        keywords: ['honesty', 'values', 'intention', 'schools', 'young', 'trust', 'character', 'integrity', 'example', 'teachers', 'cheating', 'society'],
        model: `Honesty and sincerity of intention are regarded as fundamental values in almost every culture. They matter because they underpin trust, and schools can nurture them through example, structure and reflection.

The importance of these values begins with social trust. When people believe that others speak truthfully and act without hidden motives, they cooperate readily, and the costs of contracts, inspections and legal disputes fall. Conversely, a society in which cheating is common must spend enormous resources on policing it. At the individual level, honesty also protects mental well-being: a person who maintains a gap between private motives and public behaviour must constantly manage the contradiction, which is tiring and stressful. Sincere intention, meanwhile, gives work and relationships a durable foundation, because actions performed for genuine reasons are more likely to be consistent.

Schools can contribute in several ways. First, teachers should model the behaviour they expect. Children are quick to notice hypocrisy, and a teacher who admits a mistake in front of the class teaches more about honesty than any lecture. Second, institutions can design assessment so that honest behaviour is rewarded: for instance, by making clear that effort and improvement will be valued, so that students feel less need to copy. Third, regular discussions of real dilemmas, such as whether to report a friend's cheating, help students practise moral reasoning in a safe environment.

Finally, parents and schools should cooperate. Values taught at school but contradicted at home rarely last.

In conclusion, honesty and purity of intention are essential because they sustain trust and inner stability, and schools can strengthen them by combining example, fair systems and open discussion.`,
        analysis: [
          'Task Response: оба вопроса («why» и «how») раскрыты в отдельных абзацах; нет дисбаланса.',
          'Логика: причина → механизм (доверие, снижение издержек) → решения с обоснованием, почему они работают.',
          'Cohesion: перечисление Firstly/Second/Third заменено на смысловые переходы и конкретные примеры.',
          'Lexical Resource: underpin, hypocrisy, dilemmas, moral reasoning; грамматика: условные, пассив, сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Quddus — a clean and peaceful place', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание места и привычек порядка; обсуждение чистоты и дисциплины.',
      keywords: ['clean', 'tidy', 'place', 'peaceful', 'quiet', 'order', 'habit', 'neat', 'calm', 'organised'],
      part1: [
        { q: 'Do you keep your home tidy?', a: 'Yes, quite. I clean a little every day instead of leaving everything until the weekend. It keeps my mind clearer as well.' },
        { q: 'Do you prefer a very clean place or a cosy, untidy place?', a: 'Clean and simple, definitely. Too many objects distract me, and I find it easier to relax in a clear space.' },
        { q: 'Who cleans your home?', a: 'We all share the work. I take care of the kitchen, my husband does the laundry, and the children tidy their rooms.' },
        { q: 'Is it important to keep public places clean?', a: 'Very important. A clean street or park shows respect for the community, and in my experience, people litter less where the place looks cared for.' }
      ],
      part2: {
        topic: 'Describe a clean and peaceful place you like to visit.', bullets: ['where it is', 'what it looks like', 'what you do there', 'and explain why it is special to you.'],
        plan: [{ h: '1. Where', t: 'Botanical garden in the city.' }, { h: '2. Look', t: 'Paths swept, flowers, fountain, quiet.' }, { h: '3. Activities', t: 'Walk, read, think; weekend mornings.' }, { h: '4. Why special', t: 'Order and calm help me reset.' }],
        model: `The place I would like to describe is the botanical garden in my city, which I visit almost every weekend.

It is a large park of around fifteen hectares, divided into sections by carefully swept paths. In spring, there are tulips and cherry trees, while in summer the central fountain is surrounded by roses. What strikes visitors first is how clean the place is. The grass is trimmed, the benches are freshly painted, and the staff collect every leaf and piece of litter. There is also very little noise, since cars are not allowed inside.

I usually go early on Saturday mornings, when the gates have just opened and few people are around. I walk a full circuit, which takes about an hour, and then sit on a bench by the pond and read for a while. Sometimes I simply think. It is an excellent place to review the week and plan the next one.

It is special to me for several reasons. Firstly, order has a calming effect on me. When the surroundings are tidy, my thoughts seem tidier too. Secondly, I admire the care that goes into maintaining the garden. Somebody gets up before dawn to sweep these paths, and that quiet dedication is inspiring.

Finally, the garden is connected to a personal memory: my father took me there when I was a child, and he taught me the names of the trees. For all these reasons, it is the place where I feel most at peace.`
      },
      part3: [
        { q: 'Why do some people keep their surroundings tidy while others do not?', a: 'Habit and upbringing play a big part. People who grew up with routines of cleaning often find disorder uncomfortable. Others may simply not notice it, or have less time.' },
        { q: 'Should people be fined for dropping litter?', a: 'I think fines are useful as a deterrent, but they work best together with education. If children understand why clean places matter, they will not litter even when nobody is watching.' },
        { q: 'Does a clean environment affect how people behave?', a: 'Yes, there is evidence for this. People tend to behave more considerately in places that look cared for, whereas graffiti and rubbish seem to give permission for further neglect.' }
      ]
    }
  });

  /* ===== 5 · As-Salam ===== */
  put(5, {
    listening: {
      title: 'As-Salam — a community peace project', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись адресов, дат и телефонов; следить за поправками.',
      context: 'Part 1. Волонтёр звонит в центр, чтобы записаться на проект «Мир в районе».', genders: { Clerk: 'f', Bakhyt: 'm' },
      script: `Clerk: Neighbourhood Peace Centre, good afternoon.
Bakhyt: Good afternoon. I would like to join your volunteer project on resolving disputes between neighbours.
Clerk: Wonderful. May I have your name?
Bakhyt: Bakhyt Nurlanov. That is B-A-K-H-Y-T.
Clerk: And a contact number?
Bakhyt: Zero-seven-seven, three-nine-one, five-two-eight. Sorry, five-eight-two.
Clerk: Thank you. The training takes place on the fifteenth of October.
Bakhyt: The fifteenth? I thought it was the fifth.
Clerk: No, the fifth was the previous course. It is the fifteenth, at the Community Hall on Green Street.
Bakhyt: How long does the training last?
Clerk: Two days, from ten until four. You will learn how to listen without interrupting and how to find solutions that both sides can accept.
Bakhyt: That sounds practical. Do I need to bring anything?
Clerk: Just a notebook. Lunch is provided, so please tell us if you have any special dietary needs.
Bakhyt: I am vegetarian.
Clerk: Noted. At the end, you will receive a certificate, and you can start as a volunteer the following month.
Bakhyt: Thank you very much.`,
      notesTitle: 'Volunteer registration',
      notes: [
        { pre: 'Surname:', post: '', a: ['Nurlanov'], e: 'Фамилия — Nurlanov.' },
        { pre: 'Telephone: 077 391', post: '', a: ['582', 'five eight two'], e: 'Сначала 528, затем поправка — 582.' },
        { pre: 'Training date: October', post: '', a: ['15', '15th', 'fifteenth', 'the 15th'], e: '5 октября — прошлый курс; обучение 15-го.' },
        { pre: 'Location: Community Hall on', post: 'Street', a: ['Green'], e: 'Улица Green Street.' },
        { pre: 'Special dietary need:', post: '', a: ['vegetarian'], e: 'Он вегетарианец.' }
      ],
      mc: [
        { q: 'How long does the training last?', opts: ['one day', 'two days', 'one week'], a: 'B', e: 'Два дня, с десяти до четырёх.' },
        { q: 'What will participants learn?', opts: ['to listen without interrupting', 'to write legal documents', 'to organise sports events'], a: 'A', e: 'Умение слушать не перебивая и находить решения для обеих сторон.' },
        { q: 'What do participants receive at the end?', opts: ['a certificate', 'a book', 'a small payment'], a: 'A', e: 'По окончании выдаётся сертификат.' }
      ]
    },
    writing: {
      title: 'As-Salam — building peace in society', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение роли законов и личных установок в мире общества.',
      task2: {
        prompt: 'Some people believe that peace in society can be achieved only through strict laws and punishment. Others think it depends mainly on the attitudes of individuals. Discuss both views and give your own opinion.',
        keywords: ['peace', 'laws', 'punishment', 'attitudes', 'society', 'individuals', 'education', 'conflict', 'crime', 'respect', 'dialogue', 'enforcement'],
        model: `Whether social peace is secured mainly by strict laws or by the attitudes of individuals is a long-standing question. In my opinion, laws are necessary but insufficient, and lasting peace depends on a culture of respect that formal rules can support but never replace.

Those who emphasise strict laws make a persuasive case. Clear rules and credible punishment deter crime, protect the weak from the strong and give citizens predictable expectations. Societies without effective law enforcement often descend into violence, since people who fear for their safety are quicker to take revenge. In this sense, legal order provides the minimum conditions for peace.

Nevertheless, laws alone cannot create harmony. A police officer cannot be present in every home, workplace or online discussion, and many harmful behaviours, such as humiliating a colleague or spreading rumours, are not criminal offences. Moreover, harsh penalties can generate resentment, which sometimes produces further conflict. Societies that rely almost entirely on punishment tend to be tense rather than peaceful.

By contrast, attitudes such as respect, patience and willingness to forgive reduce conflict at its source. People who have learned to listen and to compromise resolve disagreements before they escalate. These attitudes are formed in families and schools through example and practice, for instance through mediation programmes in which students learn to settle quarrels themselves.

Therefore, the two factors should be seen as complementary. Law sets the boundary of what is permitted, whereas individual character determines how people behave within that boundary.

In conclusion, strict laws are an essential foundation, but real peace is built by individuals who choose dialogue over revenge.`,
        analysis: [
          'Task Response: обе точки зрения представлены справедливо, позиция («необходимы, но недостаточны») ясна с самого начала.',
          'Аргументация: у каждой стороны есть утверждение, основание и пояснение, почему оно работает (warrant).',
          'Cohesion: Nevertheless / By contrast / Therefore — ясная логика противопоставления и синтеза.',
          'Lexical Resource: deter, predictable, resentment, escalate, mediation; грамматика: параллелизм, сравнительные конструкции.'
        ]
      }
    },
    speaking: {
      title: 'As-Salam — resolving a conflict', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о примирении и обсуждение конфликтов и их решений.',
      keywords: ['conflict', 'argument', 'peace', 'resolve', 'apologise', 'friend', 'calm', 'listen', 'compromise', 'misunderstanding'],
      part1: [
        { q: 'Do you often argue with people?', a: 'Not often. I prefer to discuss differences calmly, and if I feel angry, I wait until I cool down before saying anything.' },
        { q: 'Who is the calmest person you know?', a: 'My grandfather. Nothing seems to upset him, and when there is a family quarrel, he speaks softly and everyone naturally lowers their voice.' },
        { q: 'How do you usually greet people?', a: 'With a smile and a traditional greeting. I think a sincere greeting sets the tone for the entire conversation.' },
        { q: 'Do you like quiet places?', a: 'Yes, very much. After a noisy day, a quiet place is the best way to restore my energy.' }
      ],
      part2: {
        topic: 'Describe a time when you helped to solve a disagreement between people.', bullets: ['who the people were', 'what the disagreement was about', 'how you helped to solve it', 'and explain how you felt about the result.'],
        plan: [{ h: '1. Who', t: 'Two close friends in my study group.' }, { h: '2. About', t: 'A misunderstanding over a group project.' }, { h: '3. Solution', t: 'Spoke to each separately, then together.' }, { h: '4. Result', t: 'They reconciled; I learned to listen.' }],
        model: `I would like to describe a time when I helped two friends resolve a disagreement during a university project.

The friends, Aibek and Dana, were both members of my study group, and until then they had worked together very well. One week before the deadline, Dana submitted part of the presentation without consulting Aibek, who had been responsible for that section. He felt disrespected, she felt that he had been too slow, and soon they were barely speaking to each other. The tension affected the whole group.

I decided to intervene because the project was important to all of us, and because I valued both of them. First, I spoke to each of them separately, and I tried to listen without taking sides. It quickly became clear that the real problem was a simple misunderstanding: Aibek had planned to finish his part the next day, but he had not told anyone, and Dana had assumed that nothing was happening.

Then I invited them to coffee. I asked each to explain what they had meant, without interruptions. Within fifteen minutes, they were laughing about it, and Dana apologised for acting without asking. We also agreed on a simple rule: every Friday, each person would send a brief update to the group.

I felt very relieved and, to be honest, proud. The experience showed me that most conflicts come from poor communication rather than bad intentions, and that listening is more effective than advising.`
      },
      part3: [
        { q: 'Why do conflicts arise between people?', a: 'Mostly from misunderstandings and unmet expectations. People assume that others think the way they do, and when they are wrong, they take offence. Stress and tiredness make it worse.' },
        { q: 'Is it always better to avoid conflict?', a: 'Not necessarily. Avoiding a problem often lets it grow. A respectful disagreement can actually clarify expectations and strengthen a relationship, provided that both sides stay calm.' },
        { q: 'What role can education play in building peace?', a: 'A significant one. Schools can teach children to listen, to see other perspectives and to settle disputes without violence. Mediation programmes where students help each other have produced excellent results.' }
      ]
    }
  });

  /* ===== 6 · Al-Mu'min ===== */
  put(6, {
    listening: {
      title: "Al-Mu'min — trust in society", spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Учит различать группы слов одного корня и следить за структурой лекции о доверии.',
      context: 'Part 4. Лекция о доверии и безопасности в обществе.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good afternoon. Today's topic is trust. Let us begin with language. The Arabic root a-m-n carries the meanings of safety, security and trust. From this root come the word iman, which means faith, and the word amana, which means something entrusted to you. The name Al-Mu'min comes from the same root, and it is usually understood as the One who grants security.
Lecturer: Scholars give two readings of the name. In the first, God grants safety to those who seek it, from injustice and from fear. In the second, He confirms the truth of His messengers through clear signs. Notice that both readings involve the idea of certainty replacing doubt.
Lecturer: How does this idea apply to our daily lives? Think of an amana, something entrusted to you. It might be money, a secret, or simply a promise. Keeping it creates security for another person, and breaking it destroys trust, often permanently. Research on workplaces suggests that trust takes months to build and a moment to lose.
Lecturer: I suggest three habits. First, keep your promises, even small ones. If you say you will call at six, call at six, not at seven. Second, protect secrets that have been entrusted to you. And third, before passing on any news, ask two questions: is it true, and is it useful? If the answer to either is no, it is better to stay silent.
Lecturer: Your assignment for next week is to keep a log of promises you made and kept. The log should have at least ten entries, and it is due on Wednesday, not Tuesday.`,
      notesTitle: 'Lecture: security and trust',
      notes: [
        { pre: 'The root a-m-n means safety, security and', post: '.', a: ['trust'], e: 'Корень а-м-н: безопасность, защищённость и доверие.' },
        { pre: 'The word amana means something', post: 'to you.', a: ['entrusted'], e: 'Amana — то, что доверено.' },
        { pre: 'Before sharing news, ask: is it true, and is it', post: '?', a: ['useful'], e: 'Два вопроса: правда ли это и полезно ли.' },
        { pre: 'Minimum number of entries in the log:', post: '', a: ['10', 'ten'], e: 'Не менее десяти записей.' },
        { pre: 'Log is due on', post: '', a: ['Wednesday'], e: 'Срок — среда, а не вторник.' }
      ],
      mc: [
        { q: 'How many readings of the name does the lecturer mention?', opts: ['one', 'two', 'three'], a: 'B', e: 'Названо два прочтения.' },
        { q: 'According to research mentioned, trust', opts: ['takes months to build and a moment to lose', 'is built in a single meeting', 'cannot be lost'], a: 'A', e: 'Доверие строится месяцами, а теряется мгновенно.' },
        { q: 'What does the lecturer say about a promise?', opts: ['small promises do not matter', 'even small promises should be kept', 'promises should be written down by others'], a: 'B', e: 'Нужно держать даже мелкие обещания.' }
      ]
    },
    writing: {
      title: "Al-Mu'min — trust between people", spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины и решения: как писать о социальных проблемах без общих фраз.',
      task2: {
        prompt: 'In many societies, people say that trust between individuals is declining. What are the main causes of this, and what can be done to rebuild trust?',
        keywords: ['trust', 'decline', 'causes', 'society', 'honesty', 'media', 'strangers', 'institutions', 'promises', 'transparency', 'community', 'rebuild'],
        model: `Declining trust is a concern in many societies, and it has both social and informational causes. Rebuilding it requires consistent behaviour from institutions and individuals alike.

One major cause is the way people now encounter one another. In large, mobile societies, individuals often live among strangers and change jobs and cities frequently, so they have fewer opportunities to build long relationships in which reliability is proven. A second cause is information. Online platforms reward sensational stories, and exposure to scandals and deception can make people believe that dishonesty is the norm even when it is not. Finally, repeated failures by public institutions, such as corruption cases or broken promises by officials, teach citizens to expect disappointment.

Several measures could help. First, institutions should become more transparent. When organisations publish their decisions and accept independent scrutiny, they demonstrate that they have nothing to hide, and trust grows with evidence. Second, schools and media could teach critical thinking so that people can distinguish reliable information from rumours, and avoid concluding that everyone lies. Third, communities can create settings for repeated cooperation, such as neighbourhood associations or volunteer projects, because trust emerges most naturally from shared tasks.

At the personal level, trust is rebuilt by small, consistent actions. Keeping promises, admitting mistakes and protecting confidences may seem modest, yet they accumulate. A person who is reliable in minor matters becomes a source of security for others.

In conclusion, falling trust results from social fragmentation, misleading information and institutional failures, and it can be restored through transparency, education and everyday reliability.`,
        analysis: [
          'Task Response: сначала причины (три), затем решения (три + личный уровень); структура зеркальна вопросу.',
          'Аргументация: у причин и решений есть механизм («fewer opportunities to build long relationships», «trust grows with evidence»).',
          'Cohesion: One major cause / A second cause / Finally и затем First/Second/Third в решениях — допустимо, т.к. сопровождается пояснениями; основная связь — по смыслу.',
          'Lexical Resource: fragmentation, scrutiny, confidences, sensational; хеджирование (may, often).'
        ]
      }
    },
    speaking: {
      title: "Al-Mu'min — someone I trust", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание доверенного человека и обсуждение доверия, обещаний и секретов.',
      keywords: ['trust', 'trustworthy', 'promise', 'secret', 'reliable', 'friend', 'honest', 'safe', 'confidence'],
      part1: [
        { q: 'Do you find it easy to trust people?', a: 'I trust people gradually. I do not assume the worst, but I like to see how a person behaves over time before sharing anything important.' },
        { q: 'Do you keep your promises?', a: 'I try to, and I am careful about what I promise. It is better to say no than to promise something and fail.' },
        { q: 'Can you keep a secret?', a: 'Yes, absolutely. People often tell me things because they know I do not repeat them, and I take that responsibility seriously.' },
        { q: 'Do you lock your door when you are at home?', a: 'Yes, always. It is a habit that gives me peace of mind, even though my neighbourhood is very safe.' }
      ],
      part2: {
        topic: 'Describe a person you trust completely.', bullets: ['who the person is', 'how long you have known them', 'what makes you trust them', 'and explain how this trust has affected your relationship.'],
        plan: [{ h: '1. Who', t: 'My best friend Aigerim.' }, { h: '2. How long', t: 'Fifteen years, since school.' }, { h: '3. Why trust', t: 'Keeps secrets, tells truth kindly, reliable.' }, { h: '4. Effect', t: 'Deep honesty; we can disagree without fear.' }],
        model: `The person I trust completely is my best friend, Aigerim, whom I have known for about fifteen years. We met in the first year of secondary school, when we were assigned to sit next to each other, and we have been friends ever since.

What makes me trust her is a combination of qualities. The first is reliability. If she says she will be somewhere at a particular time, she is there, and if she cannot come, she tells me in advance. The second is discretion. Over the years I have told her things that I have not told anyone else, and not once has any of it reached a third person. The third, and perhaps the most important, is honesty. She tells me the truth even when it is uncomfortable, but she does so kindly, so that I feel supported instead of attacked.

I remember one occasion that tested the friendship. I was planning to leave a job impulsively after an argument with my manager. Aigerim did not simply agree with me. She asked me to wait for a week and then to explain my reasons calmly. By the end of that week, I had decided to stay, and I am grateful, because the situation improved.

This trust has made our relationship unusually open. We can disagree strongly without fearing that the friendship will end, and I can ask for advice without worrying about being judged. In my experience, a friend like this is one of the greatest gifts a person can have.`
      },
      part3: [
        { q: 'How can trust be built between colleagues?', a: 'Mainly through consistent behaviour. Meeting deadlines, admitting mistakes and sharing credit gradually show people that you are dependable. Transparency also helps, because secrecy makes others suspicious.' },
        { q: 'Why is it difficult to rebuild trust once it has been broken?', a: 'Because a betrayal changes how people interpret everything that follows. Even honest actions may be seen as manipulation. Rebuilding requires time, consistent behaviour and, usually, a sincere apology.' },
        { q: 'Do you think people trust the media less than in the past?', a: 'It seems so, partly because there are so many sources, and some of them are unreliable. People are more aware of bias, which is healthy, but it can turn into general cynicism, which is not.' }
      ]
    }
  });

  /* ===== 7 · Al-Muhaymin ===== */
  put(7, {
    listening: {
      title: 'Al-Muhaymin — exam briefing', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за инструкциями и изменениями времени; идея честности «под наблюдением».',
      context: 'Part 2. Организатор инструктирует учеников перед экзаменом.', genders: { Invigilator: 'f' },
      script: `Invigilator: Good morning, everyone. Please take your seats quietly. I will explain how the examination will run.
Invigilator: The examination begins at half past nine. It was originally scheduled for nine, but the start has been moved because of a delay with the papers. You will take the exam in Hall B, not Hall A, which is being repaired.
Invigilator: You have ninety minutes. The paper has three sections. Please spend about thirty minutes on each, and keep five minutes at the end to check your answers.
Invigilator: Phones, smart watches and notes must be left at the front of the room before you sit down. You may keep a water bottle on the desk, but it must be transparent. Please bring your student card and place it in the top right-hand corner of your desk.
Invigilator: Two invigilators will be walking around the hall, and the whole room is covered by a camera. This is not because anybody expects dishonesty. It is because fairness depends on everyone knowing that the rules apply to all. The aim is that you behave the same way whether or not someone is watching.
Invigilator: If you need the toilet or feel unwell, raise your hand. If you have a question about the wording of a question, raise your hand too. Results will be published on the school website within two weeks.
Invigilator: You may now turn over the papers. Good luck.`,
      notesTitle: 'Examination rules',
      notes: [
        { pre: 'Start time:', post: '', a: ['9:30', '9.30', 'half past nine', '09:30'], e: 'Начало в 9:30 (девять — прежнее время).' },
        { pre: 'Examination hall:', post: '', a: ['B', 'Hall B'], e: 'Экзамен в зале B — зал A на ремонте.' },
        { pre: 'Duration:', post: 'minutes', a: ['90', 'ninety'], e: 'Девяносто минут.' },
        { pre: 'Time left for checking:', post: 'minutes', a: ['5', 'five'], e: 'Пять минут на проверку.' },
        { pre: 'Water bottles must be', post: '', a: ['transparent', 'clear'], e: 'Бутылка должна быть прозрачной.' }
      ],
      mc: [
        { q: 'Why is the start delayed?', opts: ['a delay with the papers', 'a fire drill', 'the invigilators are late'], a: 'A', e: 'Задержка с экзаменационными материалами.' },
        { q: 'What is the purpose of the camera, according to the speaker?', opts: ['to find cheating students', 'to ensure that rules apply fairly to all', 'to record the lesson'], a: 'B', e: 'Справедливость зависит от того, что правила знают все.' },
        { q: 'When will results be published?', opts: ['the same day', 'within two weeks', 'after one month'], a: 'B', e: 'В течение двух недель на сайте школы.' }
      ]
    },
    writing: {
      title: 'Al-Muhaymin — surveillance and integrity', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка спорной практики: сбалансированные аргументы и вывод.',
      task2: {
        prompt: 'Surveillance cameras are increasingly used in schools and workplaces. Do the advantages of this development outweigh the disadvantages?',
        keywords: ['surveillance', 'cameras', 'schools', 'workplaces', 'privacy', 'security', 'trust', 'behaviour', 'safety', 'monitoring', 'honesty', 'stress'],
        model: `The spread of surveillance cameras in schools and workplaces has prompted vigorous debate. While monitoring offers genuine benefits, I believe that the disadvantages are at least as significant, and the balance depends on how the cameras are used.

The most obvious advantage is safety. Cameras can deter theft and bullying, and recorded evidence helps administrators to resolve disputes fairly rather than relying on conflicting accounts. In a school, for example, a recording can quickly show whether an incident was an accident or an assault. Cameras also reassure parents and employees that serious problems will not go unnoticed.

Nevertheless, constant observation carries costs. First, it affects privacy: people who know that every movement is recorded may feel unable to relax or to speak freely, and this can increase stress and reduce creativity. Second, extensive monitoring communicates distrust. Employees who feel treated as potential offenders are less likely to show initiative or loyalty. Third, there is the risk that recordings are misused or inadequately protected.

Moreover, good behaviour that is produced only by the fear of being watched is fragile. When the camera is absent, the behaviour often disappears. Integrity means acting well in private as well as in public, and this is better encouraged by clear values, fair rules and trusting relationships than by technology.

For these reasons, cameras should be limited to areas where safety is a genuine concern, such as entrances and corridors, and accompanied by strict rules on how data is stored and who may see it.

In conclusion, although surveillance has real benefits, they outweigh the disadvantages only when its use is modest, transparent and carefully regulated.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итоговой оценки — она есть во введении и подтверждена выводом, с условием.',
          'Баланс: плюсы объяснены на примере, минусы — с механизмом (недоверие снижает инициативу).',
          'Cohesion: Nevertheless / Moreover / For these reasons; смысловое развитие «integrity» через контраст private/public.',
          'Lexical Resource: deter, safeguard, fragile, regulated; грамматика: пассив, придаточные причины и уступки.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muhaymin — doing the right thing unobserved', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о соблюдении правил без контроля и обсуждение честности.',
      keywords: ['rule', 'honest', 'watching', 'follow', 'responsible', 'cheating', 'integrity', 'camera', 'conscience'],
      part1: [
        { q: 'Do you usually follow rules?', a: 'Yes, in general. Rules exist for a reason, and I think society works better when people follow them even when it is inconvenient.' },
        { q: 'Have you ever been in a situation where nobody was watching but you still did the right thing?', a: 'Yes, once I found a wallet in a taxi, and I took it to the police station. It would have been easy to ignore it, but it felt wrong.' },
        { q: 'Are there cameras in your street?', a: 'Yes, a few near the shops. They make me feel a little safer, although I do not think about them much.' },
        { q: 'Do you think people behave differently when they are watched?', a: 'Certainly. Most people are more careful, and some are more polite. The real test of character is what people do when they are alone.' }
      ],
      part2: {
        topic: 'Describe a rule that you always follow, even when nobody is watching.', bullets: ['what the rule is', 'where you learned it', 'a time you followed it when it was difficult', 'and explain why you think it is important.'],
        plan: [{ h: '1. Rule', t: 'Never copy others\' work; always give credit.' }, { h: '2. Learned', t: 'From my father and a school teacher.' }, { h: '3. Example', t: 'Exam where I could easily have copied.' }, { h: '4. Why', t: 'Self-respect, trust, real learning.' }],
        model: `The rule I would like to talk about is never to copy other people's work and always to give credit where it is due. It sounds simple, but I have found it surprisingly demanding.

I learned this principle from two sources. My father used to say that anything you take without earning it will be taken from you later, and a school teacher reinforced the idea by making us write the sources of every essay, even when we thought nobody would check.

The most difficult moment came during a university examination. I had prepared well, but there was one question that I had completely forgotten. The student next to me had her paper positioned in such a way that I could see her answer clearly, and the invigilator was talking to someone at the back of the room. I remember the temptation vividly: it would have taken five seconds. Instead, I wrote down what little I remembered, and I left the rest incomplete. I got a lower mark on that question, but I walked out feeling light.

I believe this rule is important for several reasons. First, it protects my self-respect. If I copy, I know it, and that knowledge would quietly damage my confidence. Second, it keeps trust intact, because people rely on grades and statements being honest. And third, it makes learning real: marks I have earned reflect what I actually know, which is the only basis for improvement.

Today I teach students, and I often tell them the same thing: integrity means behaving well when no one is watching.`
      },
      part3: [
        { q: 'Why do some people cheat even when they know it is wrong?', a: 'Usually under pressure. When the consequences of failure feel very serious, shortcuts become tempting. Cheating is also easier to justify if people believe that everybody else does it.' },
        { q: 'Does technology make it easier or harder to behave dishonestly?', a: 'Both. It makes copying and deception easier, but it also makes detection easier. In the end, the most reliable protection is not software but a culture that values honesty.' },
        { q: 'Should employers monitor their employees?', a: 'To a limited degree, perhaps, for security reasons. But excessive monitoring communicates distrust and reduces motivation. Employees who are trusted generally feel more responsible.' }
      ]
    }
  });

  /* ===== 8 · Al-Aziz ===== */
  put(8, {
    listening: {
      title: 'Al-Aziz — dignity and saying no', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за деталями задания и спором мнений в диалоге с преподавателем.',
      context: 'Part 3. Студенты и преподаватель обсуждают эссе о достоинстве.', genders: { Tutor: 'f', Ruslan: 'm', Zhanna: 'f' },
      script: `Tutor: Let us talk about your essay on dignity. Ruslan, what is your main argument?
Ruslan: That dignity comes from refusing to be humiliated, even by powerful people. I think the word azeez in Arabic expresses this, because it means might and honour at the same time.
Tutor: Zhanna, do you agree?
Zhanna: Partly. I think dignity also means treating others with respect, not only protecting yourself. A person who is proud but rude does not have real dignity.
Tutor: A good point. Ruslan, how will you answer that?
Ruslan: I would add a section on the connection between might and wisdom. In the Qur'an, the name Al-Aziz is often paired with Al-Hakim, the Wise. So power should be joined with wisdom.
Tutor: Good. Now some practical points. The essay should be fifteen hundred words. Not twelve hundred, as in the first instructions.
Zhanna: And the deadline?
Tutor: The twentieth of November. It was the eighteenth, but I have extended it by two days.
Ruslan: Where should we submit it?
Tutor: Through the online portal. Do not email it to me, please. Use a clear title, and include at least four references.
Zhanna: Four, not five?
Tutor: Four is enough, but they should be good ones.
Ruslan: Thank you. We will start today.`,
      notesTitle: 'Essay requirements',
      notes: [
        { pre: 'Word limit:', post: 'words', a: ['1500', '1,500', 'fifteen hundred'], e: '1500 слов, а не 1200.' },
        { pre: 'Deadline: November', post: '', a: ['20', '20th', 'twentieth', 'the 20th'], e: 'Срок продлён с 18-го на 20-е.' },
        { pre: 'Submit through the online', post: '', a: ['portal'], e: 'Сдача через онлайн-портал, не по почте.' },
        { pre: 'Minimum number of references:', post: '', a: ['4', 'four'], e: 'Достаточно четырёх.' },
        { pre: 'Al-Aziz is often paired with Al-', post: '', a: ['Hakim', 'Hakeem'], e: 'Аль-Азиз часто стоит рядом с Аль-Хаким.' }
      ],
      mc: [
        { q: 'What is Ruslan\'s main argument?', opts: ['dignity comes from refusing humiliation', 'dignity depends on wealth', 'dignity is an illusion'], a: 'A', e: 'Достоинство — отказ от унижения даже перед сильными.' },
        { q: 'What does Zhanna add?', opts: ['dignity also requires respecting others', 'dignity is about winning', 'dignity cannot be learned'], a: 'A', e: 'Достоинство включает и уважение к другим.' },
        { q: 'What does Ruslan plan to add to his essay?', opts: ['a section on might and wisdom', 'a long historical survey', 'a table of statistics'], a: 'A', e: 'Раздел о связи силы и мудрости.' }
      ]
    },
    writing: {
      title: 'Al-Aziz — dignity and success', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о роли самоуважения и таланта в успехе.',
      task2: {
        prompt: 'Some people think that self-respect and dignity are more important for success in life than talent. To what extent do you agree or disagree?',
        keywords: ['dignity', 'self-respect', 'talent', 'success', 'confidence', 'principles', 'resilience', 'careers', 'effort', 'integrity', 'reputation', 'respect'],
        model: `Talent is often credited for success, but I largely agree that self-respect and dignity are at least as important, and in the long run perhaps more so.

Talent is clearly valuable. A gifted musician or mathematician starts with an advantage, and some achievements are impossible without exceptional ability. However, talent is uneven, and it rarely produces success on its own. History offers many examples of talented individuals who wasted their gifts because of poor discipline or a willingness to compromise their principles.

Self-respect, by contrast, supports the qualities that turn ability into results. A person who values themselves is more likely to set high standards, to practise despite difficulties and to recover from failure without concluding that they are worthless. Dignity also shapes how others treat us. Someone who refuses to cheat, flatter or accept humiliation gradually acquires a reputation for reliability, and reputations open doors that talent alone cannot. Employers prefer a competent colleague they can trust to a brilliant one who must be supervised.

Furthermore, dignity makes it possible to say no. Many promising careers have been derailed by compromises with corrupt superiors or unethical shortcuts. A person with firm principles may lose a short-term opportunity but protects the long-term foundation of success.

Admittedly, dignity without competence is not enough. Respectable people who lack skills will not succeed in demanding professions. The most promising combination is therefore moderate or high ability supported by strong character.

In conclusion, self-respect and dignity are more important than talent in most situations, because they determine how consistently and honourably abilities are used.`,
        analysis: [
          'Task Response: позиция выражена с градацией («largely agree»), признаны ограничения (dignity without competence).',
          'Тулмин: claim → grounds (репутация, устойчивость) → warrant (репутация открывает двери) → qualifier/rebuttal (нужна и компетентность).',
          'Cohesion: Furthermore / Admittedly / by contrast; ключевое понятие reputation работает как смысловая связка.',
          'Lexical Resource: derailed, reputation, compromise, principles; хеджирование (rarely, more likely, perhaps).'
        ]
      }
    },
    speaking: {
      title: 'Al-Aziz — keeping dignity under pressure', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о сохранении достоинства в трудной ситуации и обсуждение самоуважения.',
      keywords: ['dignity', 'pressure', 'calm', 'respect', 'confident', 'refuse', 'principles', 'strong', 'self-respect'],
      part1: [
        { q: 'Do you consider yourself a confident person?', a: 'Reasonably so. I am more confident with things I know well, and I try to be honest about what I do not know. That honesty is a kind of confidence in itself.' },
        { q: 'How do you react when someone criticises you?', a: 'I listen first and defend myself later, if at all. Often the criticism contains something useful, even when it is expressed badly.' },
        { q: 'Is it easy for you to say no?', a: 'It used to be difficult, but with practice it has become easier. I now explain my reasons politely, and most people respect that.' },
        { q: 'What do you do to feel strong when things are difficult?', a: 'I go for a long walk and make a list of the things I can control. It reminds me that I am not helpless.' }
      ],
      part2: {
        topic: 'Describe a time when you remained calm and dignified under pressure.', bullets: ['what the situation was', 'who was involved', 'how you behaved', 'and explain what you learned from it.'],
        plan: [{ h: '1. Situation', t: 'A meeting where I was unfairly blamed.' }, { h: '2. People', t: 'My manager, colleagues.' }, { h: '3. Behaviour', t: 'Stayed calm, presented facts, no insults.' }, { h: '4. Lesson', t: 'Calm strength works better than anger.' }],
        model: `I would like to describe a meeting at my previous workplace, during which I was blamed in front of the whole team for a mistake that was not mine.

The situation arose when a report went to a client with incorrect figures. My manager, who was under pressure himself, opened the meeting by saying that the error was in my section. Eight colleagues were present, and I could feel everyone looking at me. My first impulse was to raise my voice and defend myself, and I confess that my heart was beating quickly.

Instead, I took a breath and said that I understood the seriousness of the problem and that I would like to check the facts together. I opened my laptop and showed the original data file, which had the correct numbers, and then the version that had been edited later by another department. I did not accuse anyone. I simply said that the figures differed and asked how they could have changed.

There was a long silence, and then my manager admitted that he had been mistaken. He thanked me after the meeting and made a point of correcting the record with the client.

What I learned is that dignity is not the same as being loud. Calm, factual behaviour was far more powerful than anger would have been, and it preserved my relationships with colleagues. I also learned how useful it is to keep clear records. Since then, whenever I feel pressured, I try to remember that I can respect myself and others at the same time.`
      },
      part3: [
        { q: 'Why is it important for people to respect themselves?', a: 'Because it affects the choices they make. People who respect themselves are less likely to accept unfair treatment or to engage in harmful behaviour. It also gives them the resilience to recover from setbacks.' },
        { q: 'Is it possible to be too proud?', a: 'Yes, when pride prevents someone from admitting mistakes or accepting help. Healthy self-respect is quiet and flexible, whereas excessive pride is defensive and rigid.' },
        { q: 'How can parents help children to develop self-respect?', a: 'By showing respect to the children themselves, praising effort rather than only results and allowing them to make age-appropriate decisions. Children who are heard usually grow into adults who feel worthy of being heard.' }
      ]
    }
  });

  /* ===== 9 · Al-Jabbar ===== */
  put(9, {
    listening: {
      title: 'Al-Jabbar — a recovery clinic', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных по телефону: имя, время приёма, кабинет, стоимость.',
      context: 'Part 1. Пациент записывается в центр восстановления.', genders: { Receptionist: 'f', Timur: 'm' },
      script: `Receptionist: Good morning, Riverside Recovery Centre.
Timur: Good morning. I would like to book an appointment. I injured my shoulder playing football.
Receptionist: I am sorry to hear that. May I take your name?
Timur: Timur Askarov. T-I-M-U-R.
Receptionist: And your date of birth?
Timur: The twelfth of March, nineteen ninety-eight. Sorry, ninety-nine.
Receptionist: Thank you. The first assessment is with Dr Bekova, on Tuesday at two thirty.
Timur: Could I come on Wednesday instead?
Receptionist: Unfortunately, Dr Bekova is not available on Wednesday. How about Tuesday at two thirty, or Thursday at ten?
Timur: Tuesday is fine.
Receptionist: Room fourteen, on the first floor. The assessment lasts forty-five minutes, and it costs sixty pounds.
Timur: Do I need to bring anything?
Receptionist: Please bring any scans or reports you have, and wear a loose T-shirt. After the assessment, Dr Bekova will make a plan, which usually includes six sessions of physiotherapy.
Timur: How long does recovery usually take?
Receptionist: It depends on the injury, but most shoulder problems improve in about eight weeks if the exercises are done regularly.
Timur: I will do my best. Thank you.
Receptionist: Thank you. See you on Tuesday.`,
      notesTitle: 'Appointment details',
      notes: [
        { pre: 'Surname:', post: '', a: ['Askarov'], e: 'Фамилия — Askarov.' },
        { pre: 'Date of birth: 12 March', post: '', a: ['1999', 'nineteen ninety-nine'], e: 'Год рождения уточнён: 1999.' },
        { pre: 'Appointment: Tuesday at', post: '', a: ['2:30', '2.30', 'half past two', '14:30', 'two thirty'], e: 'Вторник в 14:30.' },
        { pre: 'Room number:', post: '', a: ['14', 'fourteen'], e: 'Кабинет 14 на первом этаже.' },
        { pre: 'Cost of the assessment: £', post: '', a: ['60', 'sixty'], e: 'Оценка стоит шестьдесят фунтов.' }
      ],
      mc: [
        { q: 'How long does the assessment last?', opts: ['30 minutes', '45 minutes', '60 minutes'], a: 'B', e: 'Сорок пять минут.' },
        { q: 'What should Timur bring?', opts: ['previous scans or reports', 'a medical certificate', 'sports shoes'], a: 'A', e: 'Снимки и заключения, а также свободная футболка.' },
        { q: 'How long does a typical shoulder recovery take?', opts: ['about two weeks', 'about eight weeks', 'about six months'], a: 'B', e: 'Около восьми недель при регулярных упражнениях.' }
      ]
    },
    writing: {
      title: 'Al-Jabbar — recovery after failure', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины эмоциональных трудностей и роль сообщества в поддержке.',
      task2: {
        prompt: 'Many people find it hard to recover emotionally after a failure or a loss. What are the main reasons for this, and how can communities help?',
        keywords: ['failure', 'loss', 'recover', 'emotional', 'support', 'community', 'resilience', 'grief', 'isolation', 'counselling', 'friends', 'stigma'],
        model: `Recovering from failure or loss is often more difficult than people expect. The main reasons are psychological and social, and communities can play a decisive part in helping individuals to heal.

One central reason is that setbacks threaten a person's sense of identity. Someone who loses a job or fails an important examination may conclude that they are a failure rather than a person who has failed once. Grief adds another dimension: after bereavement, the routines that gave life structure disappear, and the future seems empty. In addition, many people feel pressure to hide their pain. In cultures that prize success and strength, admitting distress can seem shameful, so individuals withdraw, and isolation deepens the suffering.

Communities can help in several practical ways. Firstly, they can offer regular contact. Neighbours who visit, colleagues who send a message and friends who simply sit in silence show that the person has not been abandoned, which is often more valuable than advice. Secondly, organised support, such as counselling services or peer groups, gives people a safe place to speak, as well as guidance from those who have experienced similar difficulties. Thirdly, communities can reduce stigma by talking openly about failure and loss, which makes it easier for individuals to ask for assistance early.

Finally, community life can provide new purpose. Volunteering or joining a project restores a sense of usefulness and helps people to rebuild confidence gradually.

In conclusion, recovery is difficult because setbacks damage identity and encourage isolation, and communities can assist through contact, structured support and a culture that treats vulnerability as normal.`,
        analysis: [
          'Task Response: причины и решения раскрыты, каждая часть подкреплена объяснением механизма.',
          'Cohesion: смысловые переходы (adds another dimension, Secondly, Finally); повторение ключевых слов (isolation, support).',
          'Lexical Resource: bereavement, stigma, vulnerability, withdraw; нюансы эмоционального лексикона.',
          'Grammar: сложные придаточные, относительные придаточные (who have experienced), пассивные и причастные конструкции.'
        ]
      }
    },
    speaking: {
      title: 'Al-Jabbar — helping someone to recover', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о помощи человеку в трудный период и обсуждение поддержки.',
      keywords: ['recover', 'support', 'illness', 'difficult', 'comfort', 'help', 'visit', 'encourage', 'patient', 'hospital'],
      part1: [
        { q: 'Do you often visit friends or relatives when they are ill?', a: 'Yes, I think it matters. Even a short visit shows that you care, and I try not to stay too long so that the person can rest.' },
        { q: 'What do you do when you feel discouraged?', a: 'I talk to someone I trust, and I go out for a walk. Describing a problem aloud often makes it feel smaller.' },
        { q: 'Do you think you are good at comforting others?', a: 'I hope so. I have learned that listening is more helpful than giving advice, so I try to let the other person speak.' },
        { q: 'Have you ever been in hospital?', a: 'Only as a child, for a minor operation. I remember the nurses being very kind, which made it much less frightening.' }
      ],
      part2: {
        topic: 'Describe a time when you helped someone to recover from a difficult period.', bullets: ['who the person was', 'what the difficulty was', 'how you helped', 'and explain how the person changed afterwards.'],
        plan: [{ h: '1. Who', t: 'My cousin Marat after a serious injury.' }, { h: '2. Difficulty', t: 'Broken leg, depression, left the football team.' }, { h: '3. Help', t: 'Daily visits, exercises, a new goal.' }, { h: '4. Change', t: 'Returned stronger, coaches juniors.' }],
        model: `I would like to describe how I helped my cousin Marat to recover after a serious injury a few years ago.

Marat was a passionate footballer who played for a regional youth team, and he hoped to turn professional. During a match he fell badly and broke his leg in two places. The operation was successful, but the doctors said that it would take at least six months before he could play again. For Marat, who had built his life around the sport, this news was devastating. He stopped answering his phone, lost his appetite and talked about giving up football.

I decided that I could not leave him alone. I started visiting him every day after work. At first we hardly talked; I simply sat with him and watched films. Gradually, I began to help with his rehabilitation exercises, counting the repetitions and reminding him to stay patient. I also suggested that he should set a new goal, and we agreed that he would learn to analyse matches and write about them while he recovered.

Over the following months, I saw him change. He became more cheerful, and he even started a small blog on tactics. When he finally returned to the pitch, he played with greater intelligence than before.

Today Marat coaches a group of young players, and he often tells them how a difficult period can reshape a person. I feel proud that I could support him, and the experience taught me that sometimes the best help is simple presence.`
      },
      part3: [
        { q: 'Why do some people recover from setbacks faster than others?', a: 'Support is a big factor: those with close friends or family generally recover more quickly. Mindset also matters, as people who see failure as temporary tend to act sooner to improve things.' },
        { q: 'What role should the government play in helping people in difficulty?', a: 'It should provide a safety net, such as healthcare and unemployment support, as well as mental health services. Without these, individuals depend entirely on their own resources, which is unfair.' },
        { q: 'Do you think people are more open about mental health today?', a: 'Yes, in many countries it is discussed far more freely than before, particularly among younger people. However, stigma still exists in some communities, and many people hesitate to seek help.' }
      ]
    }
  });

  /* ===== 10 · Al-Mutakabbir ===== */
  put(10, {
    listening: {
      title: 'Al-Mutakabbir — humility and feedback', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о смирении: учит выделять определения и практические правила.',
      context: 'Part 4. Лекция о гордыне и смирении на рабочем месте.', genders: { Lecturer: 'f' },
      script: `Lecturer: Welcome to today's lecture on humility. The name Al-Mutakabbir comes from the root k-b-r, which means greatness. In Arabic, the form of the word expresses a claim to greatness. When it is said about people, it has a negative meaning, which is arrogance. When it is said about God, it means that all true greatness belongs to Him alone.
Lecturer: There is a well-known saying, reported in a collection called Sahih Muslim, that pride is rejecting the truth and looking down on people. Notice that this definition has two parts: a refusal to accept what is correct, and contempt for others.
Lecturer: Why does this matter in an office or a classroom? Because arrogance blocks learning. A person who cannot hear feedback cannot improve. Studies of teams suggest that groups where members admit mistakes openly tend to detect problems earlier, because errors are reported instead of hidden.
Lecturer: I suggest three rules. Rule one: when you receive criticism, say thank you before you say anything else. Rule two: once a week, admit one mistake to a colleague or a friend. And rule three: do at least one ordinary task that you might feel is beneath you, such as washing the cups in the office kitchen.
Lecturer: Please remember that humility is not low self-esteem. A humble person may be highly skilled and confident, but he or she does not need to prove it constantly.
Lecturer: For our next session, bring an example of feedback that you found difficult to accept. Please use the form on page twelve, not page fourteen.`,
      notesTitle: 'Lecture: humility',
      notes: [
        { pre: 'The root k-b-r means', post: '.', a: ['greatness'], e: 'Корень k-b-r — «величие».' },
        { pre: 'Pride is rejecting the', post: 'and looking down on people.', a: ['truth'], e: 'Гордыня — отвергать истину и презирать людей.' },
        { pre: 'Rule one: say', post: 'before anything else.', a: ['thank you', 'thanks'], e: 'Правило 1: сначала «спасибо».' },
        { pre: 'Rule two: admit one', post: 'a week.', a: ['mistake'], e: 'Правило 2: признавать одну ошибку в неделю.' },
        { pre: 'Use the form on page', post: '', a: ['12', 'twelve'], e: 'Форма на странице 12, а не 14.' }
      ],
      mc: [
        { q: 'According to the lecture, why is arrogance a problem in teams?', opts: ['it blocks learning and feedback', 'it makes meetings longer', 'it reduces salaries'], a: 'A', e: 'Гордыня мешает слышать обратную связь и учиться.' },
        { q: 'What does the lecturer say about humility?', opts: ['it means low self-esteem', 'it can coexist with confidence', 'it is necessary only for leaders'], a: 'B', e: 'Смиренный человек может быть уверенным и умелым.' },
        { q: 'What should students bring to the next session?', opts: ['a book review', 'an example of difficult feedback', 'a research article'], a: 'B', e: 'Пример трудной для принятия обратной связи.' }
      ]
    },
    writing: {
      title: 'Al-Mutakabbir — arrogance and humility', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины высокомерия и способы его уменьшить; нюансированная лексика.',
      task2: {
        prompt: 'Some people say that successful people often become arrogant. What are the causes of arrogance, and what can be done to reduce it?',
        keywords: ['arrogance', 'success', 'humility', 'causes', 'praise', 'feedback', 'pride', 'power', 'reduce', 'respect', 'leaders', 'mistakes'],
        model: `Success often seems to be accompanied by arrogance, and although the connection is not inevitable, it is common enough to deserve analysis. The causes are largely psychological and social, and they can be reduced through habits and institutions.

One cause is the way success changes the information a person receives. Achievers are surrounded by praise, while criticism becomes rare because others fear damaging a relationship with someone powerful. As a result, successful people may gradually lose an accurate picture of their own limits. A second cause is the human tendency to attribute achievements to personal talent and to underestimate luck, support and circumstances. Someone who believes that everything has been earned alone is more likely to look down on those who have not succeeded. A third factor is insecurity: ironically, arrogance is sometimes a defence against the fear of being exposed as inadequate.

There are several ways to address the problem. Individuals can cultivate humility by deliberately seeking honest feedback, perhaps from people who are not dependent on them, and by acknowledging the contribution of others. Regularly performing ordinary tasks or meeting people from different backgrounds can also restore perspective. Organisations, for their part, can build cultures in which mistakes are discussed openly and criticism is rewarded, rather than punished, so that leaders hear unwelcome truths.

Education has a role too. Schools that teach students to see learning as lifelong, and success as the product of many contributors, prepare them to remain open-minded when they achieve a lot.

In conclusion, arrogance among successful people arises from flattery, a distorted view of merit and insecurity, and it can be reduced through honest feedback, gratitude and supportive organisational cultures.`,
        analysis: [
          'Task Response: три причины и три группы решений (личные, организационные, образовательные) — полный ответ на оба вопроса.',
          'Аргументация: у каждой причины есть механизм (мало критики → искажённая картина), у решений — объяснение, почему они работают.',
          'Cohesion: переходы по смыслу (As a result, ironically, for their part); ключевые понятия feedback/humility повторяются осознанно.',
          'Lexical Resource: attribute, distorted, merit, insecurity, cultivate; хеджирование (often, may, is sometimes).'
        ]
      }
    },
    speaking: {
      title: 'Al-Mutakabbir — admitting a mistake', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о признании ошибки и обсуждение скромности и обратной связи.',
      keywords: ['mistake', 'admit', 'humble', 'apologise', 'proud', 'feedback', 'learn', 'honest', 'embarrassed'],
      part1: [
        { q: 'Do you find it easy to admit when you are wrong?', a: 'It is easier now than when I was younger. I used to feel that admitting an error made me look weak, but now I see that it builds respect.' },
        { q: 'Do you like receiving feedback?', a: 'I value it, even when it stings a little. Feedback is the fastest way to improve, and I prefer it to polite silence.' },
        { q: 'How do you feel when other people praise you?', a: 'Pleased, but also a little uncomfortable. I usually mention the people who helped me, because success is rarely a solo achievement.' },
        { q: 'Do you know any very modest people?', a: 'Yes, my grandfather. He was an excellent engineer, yet he never talked about his achievements. People discovered them from others.' }
      ],
      part2: {
        topic: 'Describe a time when you admitted that you had made a mistake.', bullets: ['what the mistake was', 'who you told', 'how they reacted', 'and explain what you learned from the experience.'],
        plan: [{ h: '1. Mistake', t: 'Gave a student the wrong deadline.' }, { h: '2. Who', t: 'The class and my head of department.' }, { h: '3. Reaction', t: 'Understanding; thanked me for honesty.' }, { h: '4. Lesson', t: 'Quick honesty reduces damage and earns trust.' }],
        model: `I would like to describe a time when I admitted a mistake at work, which was not easy but turned out to be valuable.

Last year, I was responsible for giving my students the deadline for an important project. I wrote the date on the board, but later I discovered that I had mixed up two calendars, and the date I gave was a week too late. Several students had already planned their work according to my mistake, and the official deadline was only three days away.

My first reaction was embarrassment. I imagined that the students and my head of department would think I was careless, and for a moment I considered quietly hoping that nobody would notice. But I knew that a delay would hurt the students, so the next morning I explained the situation to the class directly. I apologised, told them the correct date and offered extra consultation hours to help them catch up. I also informed my head of department before anyone else could.

The reaction was much better than I had feared. The students were disappointed but understanding, and one of them even said that she appreciated my honesty. The head of department thanked me for acting quickly.

I learned two things. First, admitting a mistake early limits the damage, whereas hiding it makes it grow. Second, honesty actually increases people's trust, because they see that your word can be relied on even when it is inconvenient. Since then, I have found it easier to say, "I was wrong", and I encourage my students to do the same.`
      },
      part3: [
        { q: 'Why do some people find it difficult to apologise?', a: 'Because they associate an apology with loss of status. They are afraid that it will make them look weak or give others power over them. In fact, a sincere apology is usually seen as a sign of confidence.' },
        { q: 'Do you think successful people are usually humble?', a: 'The most admired ones often are. Success is easier to sustain if you keep learning, and learning requires admitting what you do not know. However, there are certainly successful people who are arrogant.' },
        { q: 'How can schools teach students to accept criticism?', a: 'By making feedback regular and constructive, and by showing that mistakes are part of learning. If students see teachers admitting their own errors, they feel safer doing the same.' }
      ]
    }
  });

})();

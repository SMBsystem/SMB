// Имена 61–70: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 61 · Al-Mumit ===== */
  put(61, {
    listening: {
      title: 'Al-Mumit — volunteer training for a care centre', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за правилами и расписанием обучения волонтёров.',
      context: 'Part 3. Координатор и волонтёры обсуждают обучение помощи семьям, переживающим утрату.', genders: { Coordinator: 'f', Aibek: 'm', Sabina: 'f' },
      script: `Coordinator: Thank you for volunteering. Let us talk about the training. Aibek, what are you most concerned about?
Aibek: I am afraid of saying the wrong thing to someone who has lost a family member.
Coordinator: That is a very common worry. The first rule is that you do not have to say much. Presence matters more than words.
Sabina: What should we avoid?
Coordinator: Phrases such as "I know how you feel", because every loss is different. It is better to say, "I am so sorry", and to listen.
Aibek: And practical help?
Coordinator: It is often the most useful. Families may need help with meals, paperwork, transport or care of children. Sabina, you offered to help with documents?
Sabina: Yes, I used to work in an administrative office.
Coordinator: Excellent. The training is three sessions, each lasting two hours. The first is on the fifth of November, at six o\'clock in the evening, in Room twelve.
Aibek: Not seven?
Coordinator: Six. The second session is about listening skills, and the third about looking after yourself, because this work can be emotionally demanding.
Sabina: Will there be support for volunteers?
Coordinator: Yes. After each visit you can talk to me or to the counsellor, and we meet once a month as a group.
Aibek: That is reassuring. Thank you.`,
      notesTitle: 'Volunteer training',
      notes: [
        { pre: 'Number of training sessions:', post: '', a: ['3', 'three'], e: 'Три занятия.' },
        { pre: 'Length of each session:', post: 'hours', a: ['2', 'two'], e: 'Два часа каждое.' },
        { pre: 'First session: 5 November at', post: 'o\'clock', a: ['6', 'six', '6:00', '18:00'], e: 'В шесть, а не в семь.' },
        { pre: 'Room number:', post: '', a: ['12', 'twelve'], e: 'Кабинет 12.' },
        { pre: 'Group meetings once a', post: '', a: ['month'], e: 'Группа встречается раз в месяц.' }
      ],
      mc: [
        { q: 'What should volunteers avoid saying?', opts: ['"I know how you feel"', '"I am so sorry"', '"Can I help?"'], a: 'A', e: 'Фразу «я знаю, что вы чувствуете».' },
        { q: 'What is often the most useful kind of help?', opts: ['practical help', 'advice', 'gifts'], a: 'A', e: 'Практическая помощь: еда, документы, транспорт.' },
        { q: 'What is the topic of the third session?', opts: ['looking after yourself', 'legal procedures', 'first aid'], a: 'A', e: 'Забота о себе.' }
      ]
    },
    writing: {
      title: 'Al-Mumit — who should care for the elderly', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение ответственности семьи и государства за пожилых людей.',
      task2: {
        prompt: 'Some people believe that families should be mainly responsible for caring for elderly relatives. Others think that the state should take the main responsibility. Discuss both views and give your own opinion.',
        keywords: ['elderly', 'families', 'state', 'care', 'responsibility', 'pensions', 'nursing homes', 'relatives', 'support', 'costs', 'dignity', 'community'],
        model: `As populations age, societies must decide who should care for older people. In my opinion, families should provide emotional care and daily companionship, but the state must guarantee the basic services that families cannot supply alone.

Those who favour family responsibility emphasise affection and tradition. Older people usually prefer to stay with their relatives in familiar surroundings, and care that is given by children and grandchildren is likely to be warmer and more personal than that of an institution. In many cultures, looking after parents is considered a moral duty, a way of returning the care received in childhood. This arrangement can also strengthen the bond between generations and reduce the loneliness that many elderly people suffer.

However, families cannot always cope. Medical conditions such as dementia or serious illness require professional skills and equipment, and relatives who work full time or live far away may be unable to provide constant attention. The burden may fall on one person, often a woman, who can become exhausted and may be forced to give up her career. State-funded services, including pensions, home visits and nursing facilities, ensure that no elderly person is left without help and that the cost is shared across society.

The most practical approach is therefore a partnership. The state can fund healthcare, provide trained carers and offer financial support to families who care for relatives at home, while family members contribute time, attention and love. Communities and volunteers can add visits and activities.

In conclusion, elderly care should not be left to families or the state alone; a combination of family affection and public support best protects the dignity of older people.`,
        analysis: [
          'Task Response: обе стороны раскрыты, позиция («партнёрство семьи и государства») ясна с начала.',
          'Аргументация: эмоциональная близость и традиция vs профессиональные потребности и нагрузка на одного человека.',
          'Cohesion: However / therefore; ключевое слово care связывает абзацы.',
          'Lexical Resource: dementia, dignity, burden, state-funded; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Mumit — supporting someone who was grieving', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о поддержке человека в трудный период и обсуждение сочувствия.',
      keywords: ['support', 'sad', 'loss', 'comfort', 'listen', 'visit', 'sympathy', 'grief', 'help', 'kind'],
      part1: [
        { q: 'How do you usually comfort a friend who is sad?', a: 'I listen first and try not to give advice too quickly. Sometimes just sitting with a person and having tea is enough.' },
        { q: 'Do you visit sick or elderly people?', a: 'Yes, I visit my grandmother weekly and neighbours who are ill. A short visit can mean a lot to someone who is lonely.' },
        { q: 'Is it difficult for you to talk about sad subjects?', a: 'It can be, but I think it is important not to avoid people who need to talk. I try to be calm and patient.' },
        { q: 'Do you think about the future often?', a: 'Sometimes. I try to plan, but I also try to enjoy the present, since time is limited.' }
      ],
      part2: {
        topic: 'Describe a time when you supported someone who was going through a very sad period.', bullets: ['who the person was', 'what had happened', 'how you supported them', 'and explain how you felt about it.'],
        plan: [{ h: '1. Who', t: 'My colleague Nazira.' }, { h: '2. What', t: 'Her father passed away.' }, { h: '3. Support', t: 'Visited, helped with food and paperwork, listened.' }, { h: '4. Feelings', t: 'Humble; learned presence is enough.' }],
        model: `I would like to describe a time when I supported my colleague Nazira after her father passed away.

Nazira and I had worked together for five years, and I knew her father had been ill for some time, but his death was still a shock for the whole family. She came to school the day after the funeral, looking pale and very tired, and she tried to continue as if nothing had happened. I could see that she was struggling.

I was not sure what to say, so I decided to keep it simple. I told her that I was very sorry and asked if she would like to talk. She started to cry, and I just listened. In the following weeks, I tried to offer practical help. I took over some of her classes for a few days, brought food to her house with other colleagues and helped her with some documents that she had to fill in. I also called her every evening for a couple of minutes, not to say anything important, only to show that she was not alone.

I felt humble and also rather moved. I realised that I did not need beautiful words; presence and small acts mattered far more. A few months later, Nazira thanked me and said that those calls had helped her through the hardest days.

The experience taught me not to be afraid of other people\'s sorrow. Sometimes the best thing we can do is to stay close and to listen.`
      },
      part3: [
        { q: 'Why do some people find it hard to support those who are grieving?', a: 'They are afraid of saying the wrong thing or of their own feelings. Knowing that presence and listening are enough can make it easier.' },
        { q: 'How can communities help people after a loss?', a: 'Through practical support, such as meals and help with arrangements, and through regular visits for weeks afterwards, when most attention has faded. Community traditions often help.' },
        { q: 'Should schools teach children about loss and death?', a: 'In an age-appropriate and gentle way, yes. Children encounter loss, and honest explanations help them to cope and to feel compassion for others.' }
      ]
    }
  });

  /* ===== 62 · Al-Hayy ===== */
  put(62, {
    listening: {
      title: 'Al-Hayy — active ageing', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция об активном образе жизни: структура и числа.',
      context: 'Part 4. Лекция о том, как оставаться активным с возрастом.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good morning. Today's topic is staying active throughout life. The Arabic root h-y-y, in the name Al-Hayy, means life, and we can say that to live well is more than just to exist; it is to remain active, curious and connected.
Lecturer: Let us begin with exercise. Health organisations recommend that adults take at least one hundred and fifty minutes of moderate exercise a week. That is about thirty minutes on five days. It does not have to be intense: brisk walking is enough.
Lecturer: Second, the mind. Keeping the brain active through reading, learning a language or playing games is associated with better cognitive health in older age, although researchers are careful to say that the evidence is not yet complete.
Lecturer: Third, social connection. Studies have repeatedly found that loneliness is associated with poorer health. Regular contact with friends and family, volunteering and joining clubs all help.
Lecturer: Fourth, purpose. People who feel that they have something to contribute, such as caring for grandchildren or mentoring young people, tend to report higher satisfaction.
Lecturer: What can younger people do? Include older relatives in activities, ask for their advice and learn from their experience. Remember that an older person is not a problem to be solved, but a person with a full life story.
Lecturer: For next week, interview an older person about what keeps them active, and write a half-page report. It is due on Tuesday the twelfth.`,
      notesTitle: 'Active ageing',
      notes: [
        { pre: 'The root h-y-y means', post: '', a: ['life'], e: 'Корень h-y-y — «жизнь».' },
        { pre: 'Recommended exercise: at least', post: 'minutes a week', a: ['150', 'one hundred and fifty'], e: 'Не менее 150 минут в неделю.' },
        { pre: 'Number of factors discussed:', post: '', a: ['4', 'four'], e: 'Четыре фактора.' },
        { pre: 'Loneliness is associated with poorer', post: '', a: ['health'], e: 'Одиночество связано с ухудшением здоровья.' },
        { pre: 'Report due on Tuesday the', post: '', a: ['12', '12th', 'twelfth', 'the 12th'], e: 'Срок — вторник, 12-е.' }
      ],
      mc: [
        { q: 'What kind of exercise is enough?', opts: ['brisk walking', 'only intense training', 'swimming only'], a: 'A', e: 'Достаточно быстрой ходьбы.' },
        { q: 'What does the lecturer say about the evidence on brain activity?', opts: ['it is not yet complete', 'it is conclusive', 'it is false'], a: 'A', e: 'Исследователи осторожны: данные неполные.' },
        { q: 'How should younger people regard older relatives?', opts: ['as people with a full life story', 'as a problem to be solved', 'as people who need no advice'], a: 'A', e: 'Как людей с полной историей жизни.' }
      ]
    },
    writing: {
      title: 'Al-Hayy — people living longer', spec: 'Writing · Task 2 Problems & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Проблемы старения населения и решения.',
      task2: {
        prompt: 'In many countries, people are living longer than in the past. What problems does this create, and what can governments and individuals do to deal with them?',
        keywords: ['ageing', 'population', 'pensions', 'healthcare', 'older people', 'retirement', 'workforce', 'costs', 'health', 'loneliness', 'savings', 'active'],
        model: `Longer life expectancy is a great achievement, but it also creates challenges for societies. Governments can reduce them through reforms and investment, while individuals can prepare for a longer and healthier old age.

The first problem is financial. When the proportion of older people grows, there are fewer workers to support each retired person, which puts pressure on pensions and healthcare budgets. A second problem is health: older people are more likely to suffer from chronic diseases and need long-term care, which is expensive and requires a large number of trained workers. A third problem is social. Many elderly people live alone and experience loneliness, and some are excluded from work and community life because of negative stereotypes.

Several measures could help. Governments can adjust retirement ages gradually and encourage flexible work, so that older people who wish to work can do so. They can invest in preventive healthcare and in community services such as home visits and day centres, which are often cheaper than hospital care. Training programmes for carers and support for families that look after relatives are also important. For their part, individuals can save earlier, stay physically active and keep learning, since an active life is associated with better health later on. Maintaining friendships and joining groups reduces isolation.

In addition, society as a whole can benefit from the experience of older citizens, for example by involving them in mentoring and volunteering.

In conclusion, population ageing creates financial, health and social pressures, but it can be managed through reform, prevention and an active, connected old age.`,
        analysis: [
          'Task Response: три проблемы и две группы решений (государство, люди) плюс роль общества; структура зеркальна вопросу.',
          'Аргументация: механизм (меньше работников на одного пенсионера), профилактика дешевле лечения.',
          'Cohesion: The first problem / A second problem / A third problem; затем Several measures could help.',
          'Lexical Resource: chronic, preventive, isolation, stereotypes; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hayy — a lively older person', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание энергичного пожилого человека и обсуждение активной жизни.',
      keywords: ['active', 'energetic', 'older', 'lively', 'cheerful', 'hobbies', 'healthy', 'positive', 'inspire', 'age'],
      part1: [
        { q: 'Do you know any elderly people who are very active?', a: 'Yes, my neighbour, who is seventy-five and walks five kilometres every morning. She puts many younger people to shame.' },
        { q: 'What do you do to stay energetic?', a: 'I walk daily, sleep regularly and try to learn something new. Feeling curious keeps me alive in a way.' },
        { q: 'Would you like to live to a very old age?', a: 'Yes, if I can stay healthy and independent. Quality of life is more important to me than the number of years.' },
        { q: 'What is the best age to be?', a: 'I think every age has its advantages. Perhaps the thirties and forties, when you have experience and energy together.' }
      ],
      part2: {
        topic: 'Describe an older person who is full of life.', bullets: ['who the person is', 'how old they are', 'what they do', 'and explain why they inspire you.'],
        plan: [{ h: '1. Who', t: 'Mr Zhumabay, retired engineer.' }, { h: '2. Age', t: 'Seventy-eight.' }, { h: '3. Does', t: 'Cycles, learns English, grows vegetables, teaches chess.' }, { h: '4. Inspires', t: 'Curiosity, humour, helps others.' }],
        model: `The older person I would like to describe is Mr Zhumabay, a retired engineer who lives in the same building as my parents and who is seventy-eight years old.

If you met him, you would not believe his age. He wakes up at six every morning, does a few stretching exercises and goes for a ride on his old bicycle around the park. After breakfast, he works on his small garden on the balcony and in the yard, where he grows tomatoes and herbs. In the afternoon, he studies English with an app, because he wants to talk to his grandchildren who live abroad. And twice a week, he teaches chess to children in the courtyard.

What impresses me most is his attitude. He has a sense of humour, and he laughs easily, even at himself. He always asks questions about my work, and he really listens to the answers. When I once said that I was tired and had no time to learn anything, he smiled and said that he was still learning because it is what keeps the mind young.

He inspires me for three reasons. First, he shows that age is not a barrier to new beginnings. Second, he uses his energy for the benefit of others, and the children who learn chess from him adore him. And third, he accepts life\'s difficulties with calm. He lost his wife six years ago, but he has not withdrawn from the world.

I hope that, when I am his age, I will be as curious and as kind as he is.`
      },
      part3: [
        { q: 'How do attitudes to older people differ between cultures?', a: 'In some cultures, elders are respected as sources of wisdom and often live with the family, while in others, they are more independent and sometimes isolated. Each system has strengths.' },
        { q: 'What can older people contribute to society?', a: 'Experience, patience and time. They can mentor young people, volunteer and pass on traditions. Society loses a great deal when it ignores them.' },
        { q: 'Should people be able to work after the retirement age?', a: 'Those who wish to and are able to should be allowed, as work gives purpose and income. Flexible arrangements, such as part-time work, are ideal.' }
      ]
    }
  });

  /* ===== 63 · Al-Qayyum ===== */
  put(63, {
    listening: {
      title: 'Al-Qayyum — a water treatment plant', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за этапами процесса и числами в экскурсии.',
      context: 'Part 2. Инженер рассказывает школьникам об очистке воды для города.', genders: { Engineer: 'f' },
      script: `Engineer: Welcome to the city water treatment plant. I am Aizhan, and I will show you how this plant works.
Engineer: Every day, we supply clean water to around three hundred thousand residents. The plant operates twenty-four hours a day, seven days a week, and has done so for more than fifty years. Most people never think about it, but life in a city depends on this quiet service.
Engineer: Let me describe the process in four stages. First, water is taken from the river and passes through large screens that remove branches and rubbish. Second, chemicals are added so that small particles stick together and sink. Third, the water goes through sand filters. Finally, it is disinfected, and tested every two hours.
Engineer: We employ one hundred and twenty people, and the work is organised in three shifts. If a pump fails, there are always spare units, because a city cannot afford even a few hours without water.
Engineer: What do I want you to remember? That the things that sustain our daily life, such as water, electricity and sewage, are maintained by people who work constantly and mostly unnoticed. Reliable systems require regular maintenance and investment.
Engineer: We can now start the tour. Please wear helmets. Photography is allowed, but not in the laboratory. The tour lasts about an hour.`,
      notesTitle: 'Water treatment',
      notes: [
        { pre: 'Number of residents served: about', post: '', a: ['300000', '300,000', 'three hundred thousand'], e: 'Около 300 тысяч жителей.' },
        { pre: 'The plant has operated for more than', post: 'years.', a: ['50', 'fifty'], e: 'Более пятидесяти лет.' },
        { pre: 'Number of stages:', post: '', a: ['4', 'four'], e: 'Четыре этапа.' },
        { pre: 'Water is tested every', post: 'hours.', a: ['2', 'two'], e: 'Каждые два часа.' },
        { pre: 'Number of employees:', post: '', a: ['120', 'one hundred and twenty'], e: 'Сто двадцать сотрудников.' }
      ],
      mc: [
        { q: 'What happens in the second stage?', opts: ['chemicals make particles stick together', 'sand filtering', 'disinfection'], a: 'A', e: 'Добавляются реагенты, частицы слипаются и оседают.' },
        { q: 'Why are there spare pumps?', opts: ['a city cannot be without water even for a few hours', 'they are cheaper', 'they are for the laboratory'], a: 'A', e: 'Город не может обойтись без воды даже несколько часов.' },
        { q: 'Where is photography not allowed?', opts: ['in the laboratory', 'at the entrance', 'by the river'], a: 'A', e: 'В лаборатории.' }
      ]
    },
    writing: {
      title: 'Al-Qayyum — public utilities', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение государственного и частного управления коммунальными услугами.',
      task2: {
        prompt: 'Some people believe that essential services such as water and electricity should be run by the government. Others think that private companies can manage them more effectively. Discuss both views and give your own opinion.',
        keywords: ['essential services', 'water', 'electricity', 'government', 'private companies', 'efficiency', 'prices', 'investment', 'regulation', 'public', 'profit', 'quality'],
        model: `Water, electricity and other essential services are vital for everyday life, and there is a long-standing debate about who should run them. I believe that governments should retain ultimate responsibility, but private companies can contribute under strict regulation.

Supporters of state control stress that these services are basic needs, not ordinary commodities. A government that owns the system can ensure universal access, including in remote or poor areas where private companies may see no profit, and it can keep prices affordable. Public ownership also allows long-term planning, free from the pressure of quarterly profits. In an emergency, the state can coordinate repairs and supplies without commercial disputes.

On the other hand, advocates of private management argue that companies are generally more efficient. Competition and the profit motive encourage cost control and innovation, and private investors can supply funds for modernisation when public budgets are limited. Government-run services are sometimes criticised for waste, slow decisions and political interference.

In practice, the outcome depends less on ownership than on regulation and accountability. Private companies can operate effectively if independent regulators set quality standards, cap prices and impose penalties for failure, while state-run services can improve when they are transparent and measured by clear targets. A mixed model, in which the government owns infrastructure and private firms provide specific services under contract, may combine the advantages of both.

In conclusion, essential services should remain under public responsibility because they sustain life and must be available to everyone, though competent private partners can improve efficiency when properly supervised.`,
        analysis: [
          'Task Response: обе позиции раскрыты в отдельных абзацах; собственная позиция («государственная ответственность + регулируемое участие частных компаний») ясна.',
          'Аргументация: универсальный доступ и долгосрочное планирование vs эффективность и инвестиции; ключевой вывод — важны регулирование и подотчётность.',
          'Cohesion: On the other hand / In practice / In conclusion.',
          'Lexical Resource: commodities, universal access, accountability, cap prices; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Qayyum — a service that sustains my daily life', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание службы или человека, который «держит» повседневную жизнь, и обсуждение инфраструктуры.',
      keywords: ['service', 'depend', 'daily', 'reliable', 'water', 'electricity', 'workers', 'maintain', 'important', 'grateful'],
      part1: [
        { q: 'What public services do you use every day?', a: 'Public transport, water and electricity, and the internet. I usually notice them only when they stop working.' },
        { q: 'Do you ever think about people who work behind the scenes?', a: 'More often now. Cleaners, drivers and technicians keep the city running, and they deserve more recognition.' },
        { q: 'Are the services in your area reliable?', a: 'Mostly. There are occasional power cuts in winter, but they are short, and the water supply is stable.' },
        { q: 'Do you prefer stability or change?', a: 'I like stable routines at the base of my life and variety on top. Stability makes change less stressful.' }
      ],
      part2: {
        topic: 'Describe a service or a person that keeps your daily life running smoothly.', bullets: ['what or who it is', 'what they do', 'how often you depend on it', 'and explain why you appreciate it.'],
        plan: [{ h: '1. Who', t: 'The bus driver on my route.' }, { h: '2. What', t: 'Drives early, on time, even in snow.' }, { h: '3. Depend', t: 'Daily, to school.' }, { h: '4. Appreciate', t: 'Reliability; cares about passengers.' }],
        model: `The person I would like to describe is the bus driver on my route to work, whose name, I found out, is Mr Kairat.

Every weekday morning I take the same bus at ten past seven, and in the two years that I have been using it, he has driven it most of the time. His job seems simple: he drives the bus along a route through the city, stops at each stop, opens and closes the doors and answers questions from passengers. But in reality, it requires a great deal of patience, attention and responsibility.

I depend on him every day. If the bus is late or does not arrive, my morning is disrupted, and I arrive late for my first lesson. In winter, when the roads are icy and covered with snow, he is still on time, and he drives very carefully. Once during a heavy snowstorm, other buses were cancelled, but his arrived only five minutes late, and he apologised to everyone.

I appreciate him for several reasons. First, his reliability: he is the kind of person who makes things work without drawing attention to himself. Second, his kindness. He greets regular passengers, waits for elderly people to sit down before starting and once helped a mother with a pram. And third, he reminds me that society runs on many ordinary jobs which are rarely noticed.

I now make a point of saying thank you when I get off, and I often see that it makes him smile.`
      },
      part3: [
        { q: 'Why are some jobs that keep society running poorly paid?', a: 'Often because they are considered low-skilled, and because their work is visible only when it fails. Many people argue that wages should better reflect the importance of these jobs.' },
        { q: 'What would happen if essential services stopped for a week?', a: 'There would be serious problems: no clean water, no heating, difficulties with food and health care. It shows how dependent cities are on infrastructure.' },
        { q: 'How can ordinary people show appreciation for such workers?', a: 'By saying thank you, by treating them with respect and by supporting fair working conditions. Small expressions of gratitude make a real difference.' }
      ]
    }
  });

  /* ===== 64 · Al-Wajid ===== */
  put(64, {
    listening: {
      title: 'Al-Wajid — the lost property office', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных о потерянной вещи: описание, дата, место.',
      context: 'Part 1. Пассажир звонит в бюро находок.', genders: { Clerk: 'f', Madi: 'm' },
      script: `Clerk: Central Station, lost property office.
Madi: Good morning. I think I left my bag on the train yesterday.
Clerk: I am sorry to hear that. Could I have your name, please?
Madi: Madi Syzdykov. S-Y-Z-D-Y-K-O-V.
Clerk: Thank you. What time was your journey?
Madi: I took the eight forty train from the airport. No, sorry, eight fourteen.
Clerk: And where were you sitting?
Madi: In coach C, near the window.
Clerk: Can you describe the bag?
Madi: It is a black leather backpack, with a small red label on the zip. Inside there is a laptop, a blue folder and a book about geography.
Clerk: One moment, please. I am checking the list. Yes, a black backpack was handed in by a cleaner last night. I will need you to describe the contents in detail when you collect it.
Madi: Can I collect it today?
Clerk: Yes, the office is open until six. You will need your passport and a ticket, if you still have it.
Madi: I do. How much does it cost?
Clerk: Nothing. But there is a charge of five pounds if an item is kept for more than thirty days.
Madi: Thank you so much. I was extremely worried.
Clerk: You are lucky. We find many items, but not all are claimed.`,
      notesTitle: 'Lost property',
      notes: [
        { pre: 'Surname:', post: '', a: ['Syzdykov'], e: 'Фамилия — Syzdykov.' },
        { pre: 'Train time: 8:', post: '', a: ['14', 'fourteen'], e: 'Сначала 8:40, затем 8:14.' },
        { pre: 'Seat: coach', post: '', a: ['C'], e: 'Вагон C.' },
        { pre: 'Colour of the bag:', post: '', a: ['black'], e: 'Чёрный кожаный рюкзак.' },
        { pre: 'Office open until', post: '', a: ['6', 'six', '18:00', '6 pm', '6pm'], e: 'Бюро открыто до шести.' }
      ],
      mc: [
        { q: 'Who handed in the bag?', opts: ['a cleaner', 'a passenger', 'a guard'], a: 'A', e: 'Уборщик.' },
        { q: 'What does Madi need to bring?', opts: ['his passport and ticket', 'a letter from his employer', 'a photograph of the bag'], a: 'A', e: 'Паспорт и билет.' },
        { q: 'When is there a charge?', opts: ['if an item is kept for more than 30 days', 'always', 'for electronic items only'], a: 'A', e: 'Пять фунтов, если вещь хранится более 30 дней.' }
      ]
    },
    writing: {
      title: 'Al-Wajid — caring for vulnerable children', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение семейной и институциональной заботы о детях-сиротах.',
      task2: {
        prompt: 'Some people believe that orphaned and vulnerable children are best cared for in families. Others think that institutions such as children\'s homes can provide better care. Discuss both views and give your own opinion.',
        keywords: ['orphans', 'vulnerable children', 'families', 'foster care', 'institutions', 'children\'s homes', 'care', 'love', 'education', 'stability', 'support', 'adoption'],
        model: `Children who lose their parents or cannot live with them need protection and care. Opinions differ about whether a family or an institution can provide this better. I believe that family-based care is preferable in most cases, although well-run institutions have a role.

Those who support children\'s homes point to resources and professionalism. A well-run institution can offer trained staff, medical care, education and a structured daily routine, and it can keep siblings together. For children with special needs, or in emergencies when no family is immediately available, such settings can provide safe temporary shelter. Large organisations can also monitor standards and check on the children\'s welfare regularly.

However, evidence from psychology suggests that children develop best when they have a stable, loving relationship with a small number of consistent caregivers. In an institution, staff change shifts, and the attention that each child receives is limited, which can affect emotional and social development. A foster or adoptive family, by contrast, can offer individual attention, a sense of belonging and a model of family life. Children raised in families are also more likely to build lasting relationships as adults.

For these reasons, governments should give priority to family solutions, such as adoption, kinship care and foster care, supported by financial help, training and counselling for the carers. Institutions should be small, home-like and used as a short-term measure while a suitable family is found, with children\'s views taken seriously.

In conclusion, a family environment is generally best for vulnerable children, but high-quality institutional care should remain available as a temporary and supportive option.`,
        analysis: [
          'Task Response: обе позиции раскрыты; собственная позиция («семейная форма предпочтительнее, учреждения — временная мера») ясна.',
          'Аргументация: ресурсы и профессионализм vs стабильная привязанность; практические выводы (малые дома, поддержка приёмных семей).',
          'Cohesion: However / by contrast / For these reasons; ключевое слово care.',
          'Lexical Resource: kinship care, foster, caregivers, home-like; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Wajid — finding something precious', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о находке или о том, как вы обрели нечто ценное, и обсуждение честности и благодарности.',
      keywords: ['found', 'lost', 'discover', 'valuable', 'return', 'honest', 'luck', 'surprise', 'owner', 'grateful'],
      part1: [
        { q: 'Have you ever lost something important?', a: 'Yes, my phone once, in a taxi. I was extremely anxious, but the driver found it and returned it the same evening.' },
        { q: 'Do you often find things that people have lost?', a: 'Occasionally, such as keys or gloves. I try to leave them at a visible place or hand them in.' },
        { q: 'Are you good at keeping track of your belongings?', a: 'Fairly good. I have a habit of checking my pockets before leaving a place.' },
        { q: 'What would you do if you found a wallet in the street?', a: 'I would look for identification and contact the owner, or hand it to the police. It is the only honest thing to do.' }
      ],
      part2: {
        topic: 'Describe a time when you found something valuable that belonged to someone else.', bullets: ['what you found', 'where you found it', 'what you did', 'and explain how the owner reacted.'],
        plan: [{ h: '1. What', t: 'A bag with documents and a laptop.' }, { h: '2. Where', t: 'On a bench at the station.' }, { h: '3. Action', t: 'Found contact, called, returned.' }, { h: '4. Reaction', t: 'Owner relieved and grateful.' }],
        model: `I would like to describe a time when I found a bag that belonged to a stranger and tried to return it.

It happened two winters ago at the bus station. I was waiting for my bus, and I noticed a grey bag on a bench, which had been there for more than twenty minutes. Nobody came for it. I was hesitant, as I did not want to touch something that might not be safe, but then I saw a luggage tag with a name and a telephone number.

I looked inside carefully. There was a laptop, a folder of documents and a notebook, so it was clear that the bag was important. I immediately called the number on the tag, and a man answered after the first ring. He sounded panicked and explained that he had left the bag by accident when he was running to catch a taxi. He was only ten minutes away, and I told him to come to the station.

When he arrived, he was almost out of breath. He checked the contents and then thanked me several times. He told me that the laptop contained the only copy of a project that he had to present the next morning. He tried to give me some money, but I refused, and he said that I had saved his career.

I felt happy and slightly embarrassed. The incident reminded me that a small act of honesty can have an enormous effect on a stranger, and I hoped that somebody would do the same for me.`
      },
      part3: [
        { q: 'Why do most people return lost items?', a: 'Because most people are honest and can imagine how the owner feels. Social norms also play a role, as does the fear of guilt. Simple methods, such as contact details on items, make returning easier.' },
        { q: 'Should finders of lost property be rewarded?', a: 'A small reward is a nice gesture, but honesty should not depend on it. Returning a lost item is a duty, though thanking the finder is appropriate.' },
        { q: 'How can people remember what they have been given in life?', a: 'By keeping a gratitude journal, thanking those who helped and passing on kindness. Remembering past help makes people more generous to others.' }
      ]
    }
  });

  /* ===== 65 · Al-Majid (second form) ===== */
  put(65, {
    listening: {
      title: 'Al-Majid — building a good reputation', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за позициями студентов и деталями проекта о репутации.',
      context: 'Part 3. Студенты и преподаватель обсуждают проект о том, из чего складывается репутация.', genders: { Tutor: 'f', Yeldos: 'm', Karina: 'f' },
      script: `Tutor: Your project is about reputation. Yeldos, what is your central idea?
Yeldos: That reputation is built by repeated actions, not by words. A person who keeps small promises for years develops trust.
Tutor: Karina?
Karina: I want to look at how reputation changes in the digital age. Now a single mistake can spread to thousands of people in an hour.
Tutor: Interesting. How will you collect data?
Yeldos: A survey of one hundred students and five interviews with local business owners.
Tutor: A hundred is fine, but make sure the questions are neutral. What will you ask?
Karina: What qualities make a person trusted: honesty, reliability, generosity, skill.
Tutor: Good. Perhaps also ask which qualities matter most to employers.
Yeldos: We could discuss examples of people with a noble reputation in our region.
Tutor: Yes, but be careful to use reliable sources. Remember that reputation is not the same as fame. Fame is how many people know you; reputation is what they think of you.
Karina: That is a useful distinction.
Tutor: The draft is due on the sixth of April. The final presentation is on the twentieth, in Room nine.
Yeldos: Thank you, we will start immediately.`,
      notesTitle: 'Reputation project',
      notes: [
        { pre: 'Reputation is built by repeated', post: '', a: ['actions'], e: 'Повторяющимися поступками, а не словами.' },
        { pre: 'Survey: one hundred', post: '', a: ['students'], e: 'Опрос ста студентов.' },
        { pre: 'Number of interviews:', post: '', a: ['5', 'five'], e: 'Пять интервью.' },
        { pre: 'Draft due: April', post: '', a: ['6', '6th', 'sixth', 'the 6th'], e: 'Черновик — 6 апреля.' },
        { pre: 'Presentation in Room', post: '', a: ['9', 'nine'], e: 'Кабинет 9.' }
      ],
      mc: [
        { q: 'What does Karina want to study?', opts: ['reputation in the digital age', 'famous politicians', 'advertising'], a: 'A', e: 'Репутацию в цифровую эпоху.' },
        { q: 'What does the tutor say about reliable sources?', opts: ['they should be used for examples', 'they are not needed', 'they should be anonymous'], a: 'A', e: 'Для примеров нужны надёжные источники.' },
        { q: 'How does the tutor distinguish fame and reputation?', opts: ['fame is how many people know you; reputation is what they think', 'they are the same', 'reputation is more public'], a: 'A', e: 'Слава — сколько людей вас знает, репутация — что они о вас думают.' }
      ]
    },
    writing: {
      title: 'Al-Majid — reputation or wealth', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о ценности хорошей репутации.',
      task2: {
        prompt: 'Some people say that a good reputation is more valuable than wealth. To what extent do you agree or disagree?',
        keywords: ['reputation', 'wealth', 'trust', 'honesty', 'career', 'business', 'money', 'respect', 'integrity', 'success', 'relationships', 'long-term'],
        model: `A good reputation and wealth are both valued in society, but I agree that reputation is more valuable, since it is more difficult to recover and brings benefits that money cannot buy.

The first reason is trust. People prefer to do business, to work and to form friendships with those whom they trust, and reputation is the record of that trust. A reliable doctor, teacher or craftsman receives clients and recommendations without advertising, and a person of known honesty is offered opportunities that others do not get. In this way, reputation often creates wealth, whereas wealth cannot always create reputation: a rich person who is known to be dishonest may find few people willing to deal with him.

Furthermore, reputation is more durable and more difficult to rebuild. Money can be lost and regained, sometimes within a few years, but trust that is damaged by betrayal may take decades to restore, if it returns at all. In the age of the internet, a single scandal can spread quickly and remain visible for a long time, which makes a good name even more precious.

Nevertheless, wealth should not be dismissed. Money provides security, education and healthcare, and it allows people to help others. A person who is honest but desperately poor may find it hard to use his good name. Reputation and wealth therefore support each other, although if forced to choose, most thoughtful people would prefer to keep their integrity.

In conclusion, a good reputation is more valuable than wealth because it creates trust and lasting respect, while wealth without character is fragile.`,
        analysis: [
          'Task Response: градуированная позиция и оговорка о ценности богатства.',
          'Тулмин: claim → grounds (доверие, медленное восстановление) → warrant (репутация создаёт возможности) → rebuttal (деньги нужны для безопасности) → qualifier.',
          'Cohesion: Furthermore / Nevertheless / therefore; ключевое слово reputation.',
          'Lexical Resource: durable, betrayal, integrity, fragile; грамматика: сложные предложения, сравнения.'
        ]
      }
    },
    speaking: {
      title: 'Al-Majid — a person with an excellent reputation', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание человека с безупречной репутацией и обсуждение доброго имени.',
      keywords: ['reputation', 'respected', 'trusted', 'known', 'honest', 'name', 'community', 'generous', 'example', 'quality'],
      part1: [
        { q: 'Is your reputation important to you?', a: 'Yes, it takes years to build and can be lost quickly. I try to act in a way that I would be happy to see described in a few words.' },
        { q: 'What qualities do you respect in other people?', a: 'Honesty, generosity and consistency. A person who behaves the same way to everyone earns respect.' },
        { q: 'Do you care what other people think of you?', a: 'To some extent. I care about the opinion of people I respect, but not about the opinion of everyone.' },
        { q: 'Do people in your community know each other well?', a: 'In my parents\' area, yes. Everyone knows who is reliable, which encourages good behaviour.' }
      ],
      part2: {
        topic: 'Describe a person in your community who is widely respected.', bullets: ['who the person is', 'what they do', 'why people respect them', 'and explain what you have learned from them.'],
        plan: [{ h: '1. Who', t: 'Doctor Askar, local physician.' }, { h: '2. Does', t: 'Treats poor patients free, visits home.' }, { h: '3. Respect', t: 'Honest, generous, humble.' }, { h: '4. Learned', t: 'Character shown in small actions.' }],
        model: `The person I would like to describe is Dr Askar, a physician in the district where my parents live, who has an excellent reputation.

He has worked as a family doctor for more than thirty years, and almost everyone in the neighbourhood has been his patient at some time. His clinic is small and modest, and he does not advertise it. He treats everyone patiently, and he is known for visiting elderly patients at home when they cannot come to him. It is also well known that he quietly treats people who cannot pay and sometimes buys their medicine himself.

People respect him for several reasons. First, he is completely honest: if he does not know something, he says so and refers the patient to a specialist. Second, he is generous, but he never mentions it. I only learned of it from other people. Third, he is humble. Despite the fame that he has in the district, he treats a child with the same courtesy as an official.

I have learned an important lesson from observing him. A good name is not built by speeches or publicity but by small actions repeated day after day, often when nobody is watching. He once told me that a doctor\'s reputation is made in the quiet moments, such as returning a call late at night.

When I think of a noble person, I think of him, and I try, in my own way, to build a reputation of the same kind.`
      },
      part3: [
        { q: 'How does a person build a good reputation?', a: 'By being consistent, keeping promises and treating everyone fairly. It is the sum of many small decisions, and it takes years.' },
        { q: 'Is reputation more important in small communities?', a: 'Often yes, because everyone knows each other and word travels fast. But in the digital age, reputation matters everywhere, since information spreads quickly.' },
        { q: 'Can a damaged reputation be repaired?', a: 'Sometimes, but it requires sincere apology, changed behaviour and time. Trust returns slowly, if at all.' }
      ]
    }
  });

  /* ===== 66 · Al-Wahid ===== */
  put(66, {
    listening: {
      title: 'Al-Wahid — the science of focus', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о концентрации: структура и числа.',
      context: 'Part 4. Лекция о том, почему мультизадачность снижает эффективность.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good morning. Today's topic is focus. The Arabic root w-h-d, found in the name Al-Wahid, means one, and it leads to the idea of unity. In everyday life, we can apply this idea to attention: doing one thing at a time.
Lecturer: Many people believe that they are good at multitasking. Research, however, suggests that the brain does not really do two demanding tasks at once; it switches between them. Each switch carries a cost, in time and in errors. Some studies estimate that frequent switching can reduce productivity significantly, although the exact figures vary.
Lecturer: Consider what happens when you receive a message while writing an essay. It may take several minutes to return to the same level of concentration.
Lecturer: So how can we protect our focus? I will suggest five techniques. One: set a single priority for the day. Two: work in blocks of about forty-five minutes, followed by a short break. Three: put your phone in another room. Four: close unnecessary tabs. Five: schedule a fixed time to read messages.
Lecturer: Focus is not only about efficiency. When people concentrate fully, they often report a state of deep satisfaction. Psychologists call it flow.
Lecturer: One more point. Unity of purpose also applies to values: when a person\'s actions are consistent with what he says he believes, he feels less inner conflict.
Lecturer: Your task this week is to try one technique for five days and record the results. We will discuss them on Wednesday.`,
      notesTitle: 'Focus',
      notes: [
        { pre: 'The root w-h-d means', post: '', a: ['one'], e: 'Корень w-h-d — «один».' },
        { pre: 'The brain does not do two demanding tasks at once; it', post: 'between them.', a: ['switches'], e: 'Мозг переключается между задачами.' },
        { pre: 'Number of techniques:', post: '', a: ['5', 'five'], e: 'Пять приёмов.' },
        { pre: 'Work in blocks of about', post: 'minutes', a: ['45', 'forty-five', 'forty five'], e: 'Блоки по ~45 минут.' },
        { pre: 'Discuss results on', post: '', a: ['Wednesday'], e: 'В среду.' }
      ],
      mc: [
        { q: 'What carries a cost, according to the lecturer?', opts: ['switching between tasks', 'taking a break', 'working in blocks'], a: 'A', e: 'Каждое переключение имеет цену.' },
        { q: 'What do psychologists call the state of deep concentration?', opts: ['flow', 'calm', 'sleep'], a: 'A', e: 'Состояние потока (flow).' },
        { q: 'What does unity of purpose in values reduce?', opts: ['inner conflict', 'income', 'friendships'], a: 'A', e: 'Внутренний конфликт.' }
      ]
    },
    writing: {
      title: 'Al-Wahid — focus or multitasking', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка привычки делать несколько дел одновременно.',
      task2: {
        prompt: 'Many people try to do several things at the same time, such as studying while checking messages. Do the advantages of multitasking outweigh the disadvantages?',
        keywords: ['multitasking', 'focus', 'productivity', 'attention', 'efficiency', 'tasks', 'mistakes', 'time', 'stress', 'concentration', 'switching', 'quality'],
        model: `In a busy world, many people try to complete several activities at once, from studying while checking messages to replying to emails during meetings. I believe that for demanding tasks the disadvantages of multitasking outweigh the advantages, although it can be useful for simple, routine activities.

The apparent advantage is saving time. A person who combines tasks seems to achieve more in a shorter period, and in some situations this is possible: listening to a podcast while cooking or walking does not interfere with either activity. Multitasking can also make routine work less boring, and employees who handle many responsibilities may be seen as flexible.

However, when tasks require thought, research indicates that the brain does not truly perform them simultaneously but switches rapidly between them. Each switch takes time and attention, so the person often takes longer, makes more mistakes and understands less. For students, studying while receiving notifications leads to shallow learning, since memory depends on sustained concentration. Constant switching also increases mental fatigue and stress, because the mind never fully rests.

These problems suggest a more careful approach. People can reserve multitasking for light, automatic activities and give full attention to important work. Practical measures include silencing notifications, working in focused blocks of forty to fifty minutes and checking messages at fixed times. Employers can support this by reducing unnecessary interruptions.

In conclusion, doing several things at once is acceptable for simple activities, but for tasks that matter, focusing on one thing at a time produces better quality, fewer errors and less stress.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итоговой оценки — она дана с оговоркой о простых задачах.',
          'Баланс: кажущаяся экономия времени vs цена переключения; конкретные меры.',
          'Cohesion: However / These problems suggest; ключевое слово task.',
          'Lexical Resource: simultaneously, shallow learning, sustained concentration, fatigue; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Wahid — full concentration on one task', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о моменте полной сосредоточенности и обсуждение внимания.',
      keywords: ['focus', 'concentrate', 'attention', 'task', 'absorbed', 'distractions', 'quiet', 'time flew', 'deeply', 'engaged'],
      part1: [
        { q: 'Is it easy for you to concentrate?', a: 'In a quiet place, yes. With my phone nearby, much less. So I keep it away when I work.' },
        { q: 'Where do you work or study best?', a: 'In the library or in my living room early in the morning. Silence and a clear table help me.' },
        { q: 'Do you often do several things at the same time?', a: 'Too often, I admit. I am trying to work in focused blocks instead, which is more effective.' },
        { q: 'What distracts you most?', a: 'Notifications and my own thoughts. Writing down what I need to do afterwards helps me to let them go.' }
      ],
      part2: {
        topic: 'Describe a time when you were completely absorbed in one activity.', bullets: ['what the activity was', 'where you were', 'why you were so absorbed', 'and explain how you felt afterwards.'],
        plan: [{ h: '1. Activity', t: 'Painting a map for school.' }, { h: '2. Where', t: 'Classroom, empty Saturday.' }, { h: '3. Why absorbed', t: 'Challenge, quiet, music, no phone.' }, { h: '4. Felt', t: 'Satisfied, calm, energetic.' }],
        model: `I would like to describe an afternoon when I was completely absorbed in painting a large map for my classroom.

It was a Saturday last autumn, and the school was almost empty. I had decided to make a large physical map of Kazakhstan on the wall, with rivers, mountains and steppe regions in different colours. I arrived at about ten o\'clock, put my phone in my bag, turned on some quiet music and began.

At first, it was just a task, but after about half an hour, I realised that I had stopped noticing anything else. I was thinking only about the next line, the next colour and how the mountain ridges should look. I did not feel hungry or tired, and when I looked at the clock, it was already three in the afternoon. Five hours had passed, and it felt like one.

I was so absorbed for several reasons. The task was challenging but achievable, there was nothing to interrupt me and I could see progress with every stroke. Having a single clear aim made everything simple.

Afterwards, I felt deeply satisfied, calm and strangely energetic, rather than exhausted. The map stayed on the wall for the whole year, and students often stood in front of it before lessons.

The experience showed me what concentration can feel like, and I now try to create similar conditions for important work: one task, no phone and a clear goal.`
      },
      part3: [
        { q: 'Why is it harder to concentrate nowadays?', a: 'Because of constant notifications and the habit of switching between apps. Our attention is trained to expect new information every few seconds.' },
        { q: 'Can children be taught to concentrate?', a: 'Yes, through activities such as reading, puzzles and projects, with limited screen time. Short, regular practice gradually extends their ability.' },
        { q: 'Do workplaces encourage or discourage focus?', a: 'Open offices with constant interruptions often discourage it. Some companies now provide quiet zones and uninterrupted work periods, which help productivity.' }
      ]
    }
  });

  /* ===== 67 · Al-Ahad ===== */
  put(67, {
    listening: {
      title: 'Al-Ahad — comparison and social media', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за позициями и числами в обсуждении исследования.',
      context: 'Part 3. Студентки и преподаватель обсуждают проект о сравнении себя с другими в соцсетях.', genders: { Tutor: 'm', Amina: 'f', Lyazzat: 'f' },
      script: `Tutor: Let us review your project on social comparison. Amina, what is your focus?
Amina: The effect of comparing ourselves with others online. People show only their best moments, so others feel that their own lives are less successful.
Tutor: Lyazzat?
Lyazzat: I am interested in how individuals can resist it. For example, by remembering that each person has a different path.
Tutor: Good. What method will you use?
Amina: A questionnaire for sixty students and a group discussion with eight of them.
Tutor: Not eighty?
Amina: Sixty, because the access to the students is limited.
Tutor: Fine. What questions will you ask?
Lyazzat: How many hours a day they use social media, and how they feel after using it: better, worse or the same.
Tutor: Excellent. You might also add a question about what they do to avoid negative comparison.
Amina: Like limiting time or following fewer accounts?
Tutor: Exactly. Remember that your conclusions should be careful: a survey shows a relationship, not necessarily a cause.
Lyazzat: Understood. When is the deadline?
Tutor: The ninth of December. The final presentation is on the sixteenth, ten minutes per group.
Amina: Thank you. We will begin tomorrow.`,
      notesTitle: 'Social comparison project',
      notes: [
        { pre: 'Questionnaire for', post: 'students', a: ['60', 'sixty'], e: 'Шестьдесят студентов.' },
        { pre: 'Group discussion with', post: 'students', a: ['8', 'eight'], e: 'Восемь студентов.' },
        { pre: 'Deadline: December', post: '', a: ['9', '9th', 'ninth', 'the 9th'], e: 'Срок — 9 декабря.' },
        { pre: 'Presentation on the', post: 'of December', a: ['16', '16th', 'sixteenth', 'the 16th'], e: 'Презентация — 16-го.' },
        { pre: 'Presentation length:', post: 'minutes', a: ['10', 'ten'], e: 'Десять минут на группу.' }
      ],
      mc: [
        { q: 'Why do people feel their lives are less successful?', opts: ['others show only their best moments', 'others lie about their age', 'they use social media less'], a: 'A', e: 'Другие показывают только лучшие моменты.' },
        { q: 'What does the tutor say about conclusions?', opts: ['a survey shows a relationship, not necessarily a cause', 'a survey proves causes', 'conclusions are not needed'], a: 'A', e: 'Опрос показывает связь, не обязательно причину.' },
        { q: 'What does Lyazzat want to explore?', opts: ['how individuals can resist comparison', 'how to make money online', 'how to increase followers'], a: 'A', e: 'Как человек может противостоять сравнению.' }
      ]
    },
    writing: {
      title: 'Al-Ahad — comparison online', spec: 'Writing · Task 2 Problems & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Проблемы социального сравнения в сети и способы их решения.',
      task2: {
        prompt: 'Many young people compare themselves with others on social media and feel dissatisfied with their own lives. What problems does this cause, and what can be done to reduce it?',
        keywords: ['social media', 'comparison', 'young people', 'self-esteem', 'dissatisfaction', 'anxiety', 'images', 'followers', 'schools', 'limits', 'reality', 'confidence'],
        model: `Social media offers young people a constant view of other people\'s lives, and many feel that their own does not measure up. This comparison causes several problems, but it can be reduced through awareness, limits and education.

The most obvious problem is lower self-esteem. Posts usually show achievements, holidays and attractive images, not difficulties, so users may conclude that everyone else is happier and more successful. This can lead to anxiety, envy and even depression, particularly among teenagers, who are still forming their identity. Comparison also changes behaviour: some young people spend large amounts of money or take risks to create a more impressive image, and others spend so much time online that they neglect studies and real friendships.

Several solutions are possible. Individuals can limit the time they spend on social media, follow accounts that inspire or inform rather than those that cause envy and remind themselves that what they see is a selection, often edited. Replacing some online time with activities that produce real satisfaction, such as sport, hobbies or meeting friends, is also helpful. Schools can teach media literacy, showing how images are chosen and altered, and encourage discussions about well-being. Parents can set an example by balancing their own use, and platforms might reduce the emphasis on counting followers and likes.

Finally, young people can be encouraged to value their individual path, since each person has different talents and circumstances.

In conclusion, online comparison harms self-esteem and behaviour, and its effects can be reduced by limiting use, developing critical awareness and focusing on one\'s own growth.`,
        analysis: [
          'Task Response: проблемы (самооценка, тревожность, поведение) и решения (личные, школы, родители, платформы).',
          'Аргументация: механизм — выборочная картинка → ощущение неполноценности; практические меры.',
          'Cohesion: Several solutions are possible / Finally; смысловые переходы.',
          'Lexical Resource: self-esteem, media literacy, edited, individual path; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Ahad — what makes me unique', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о собственной уникальной черте или таланте и обсуждение индивидуальности.',
      keywords: ['unique', 'different', 'talent', 'personality', 'special', 'individual', 'quality', 'strength', 'own way', 'proud'],
      part1: [
        { q: 'What makes you different from other people?', a: 'Perhaps my mix of interests: geography, languages and cooking. Most people see them as unrelated, but for me they are connected by curiosity.' },
        { q: 'Do you like standing out from the crowd?', a: 'Not really. I like to be myself, but I do not need to be noticed.' },
        { q: 'Do you often compare yourself with others?', a: 'Sometimes, but I try to stop. Everyone has a different starting point, so comparison is rarely fair.' },
        { q: 'Are you similar to anyone in your family?', a: 'I look like my father and think like my mother. It is a combination that has produced some interesting arguments.' }
      ],
      part2: {
        topic: 'Describe a quality or talent that makes you different from others.', bullets: ['what the quality is', 'how you discovered it', 'how you use it', 'and explain how you feel about it.'],
        plan: [{ h: '1. Quality', t: 'Making complex ideas simple with stories.' }, { h: '2. Discovered', t: 'Explaining homework to friends.' }, { h: '3. Use', t: 'Teaching; drawing quick sketches.' }, { h: '4. Feelings', t: 'Pleased; keep developing it.' }],
        model: `The quality that I think makes me somewhat different from others is the ability to explain complicated ideas in a simple way, often with stories or quick drawings.

I discovered it quite early. When I was a student, friends often asked me to explain difficult topics before exams. I noticed that I was able to find an example or a short story that made the idea clear, and sometimes I drew a quick sketch on a napkin. I remember explaining the water cycle with a picture of a kettle, and a friend said that it was the first time he had understood it.

Today, I use this talent in teaching. When I introduce a new topic, I usually start with a short story or a question that connects it to students\' lives. I draw maps and diagrams on the board, and I try to use comparisons from everyday life. Students often say that my lessons are easy to follow, and sometimes parents tell me that their children repeat my stories at home.

I feel pleased about this ability, but I try not to be proud. It is not that I am cleverer than others; it is simply a way of thinking that suits me. At the same time, I know that each person has something of this kind, a special quality that develops when we notice it and practise it.

I am continuing to improve it by reading and by watching skilful teachers. For me, the most valuable thing is to use my own way of doing things rather than to copy someone else.`
      },
      part3: [
        { q: 'Is it good to be different from other people?', a: 'In many situations, yes, because differences bring new ideas. But people also need a sense of belonging, so the best situation is to be both individual and part of a community.' },
        { q: 'Why do people compare themselves with others?', a: 'It is a natural way of understanding one\'s own position. The problem arises when comparison becomes constant and unfair, especially on social media.' },
        { q: 'How can schools help students to discover their strengths?', a: 'By offering a range of activities, giving specific feedback and valuing different kinds of talent, not only academic grades.' }
      ]
    }
  });

  /* ===== 68 · As-Samad ===== */
  put(68, {
    listening: {
      title: 'As-Samad — a student helpline', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных обращения: имя, время, номер телефона, график работы.',
      context: 'Part 1. Студент звонит на линию поддержки.', genders: { Volunteer: 'f', Ernar: 'm' },
      script: `Volunteer: Student Support Line, good evening. My name is Dana.
Ernar: Good evening. I am not sure if I should be calling. I have been very stressed about my exams.
Volunteer: You are welcome to call. Everything you say is confidential. May I have your first name?
Ernar: Ernar.
Volunteer: Thank you, Ernar. How long have you been feeling like this?
Ernar: About three weeks. I cannot sleep well, and I am afraid I will fail.
Volunteer: That sounds exhausting. Would it help to talk about what is worrying you most?
Ernar: Mostly the chemistry exam. It is on the twenty-fourth of May.
Volunteer: Let us think about that. We also offer free sessions with a counsellor. The next free appointment is on Thursday at four.
Ernar: Could it be Friday?
Volunteer: Friday is fully booked. Thursday at four, or the following Monday at ten.
Ernar: Thursday, please.
Volunteer: Room fifteen, in the Student Centre. Could you give me a phone number in case of changes?
Ernar: Zero-seven-seven, nine-one-four, six-five-two. Sorry, six-two-five.
Volunteer: Thank you. The line is open every evening from six until eleven. You can call again at any time.
Ernar: Thank you. I feel a little better already.
Volunteer: That is good. Asking for help is a sign of strength.`,
      notesTitle: 'Student support line',
      notes: [
        { pre: 'Feeling stressed for about', post: 'weeks', a: ['3', 'three'], e: 'Около трёх недель.' },
        { pre: 'Exam subject:', post: '', a: ['chemistry'], e: 'Экзамен по химии.' },
        { pre: 'Exam date: May', post: '', a: ['24', '24th', 'twenty-fourth', 'the 24th'], e: '24 мая.' },
        { pre: 'Counsellor appointment: Thursday at', post: '', a: ['4', 'four', '4:00', '16:00', '4 pm', '4pm'], e: 'Четверг в четыре.' },
        { pre: 'Room number:', post: '', a: ['15', 'fifteen'], e: 'Кабинет 15.' }
      ],
      mc: [
        { q: 'What does the volunteer say about what Ernar says?', opts: ['it is confidential', 'it will be shared with teachers', 'it will be recorded'], a: 'A', e: 'Всё конфиденциально.' },
        { q: 'When is the line open?', opts: ['every evening from six until eleven', 'weekdays only', 'only at night'], a: 'A', e: 'Каждый вечер с шести до одиннадцати.' },
        { q: 'How does the volunteer describe asking for help?', opts: ['a sign of strength', 'a weakness', 'unnecessary'], a: 'A', e: 'Признак силы.' }
      ]
    },
    writing: {
      title: 'As-Samad — asking for help', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение самостоятельности и обращения за помощью.',
      task2: {
        prompt: 'Some people think that individuals should solve their problems on their own. Others believe that it is better to ask for help from other people. Discuss both views and give your own opinion.',
        keywords: ['problems', 'independence', 'help', 'advice', 'self-reliance', 'support', 'experts', 'pride', 'mistakes', 'friends', 'mental health', 'solutions'],
        model: `When people face difficulties, they can try to deal with them alone or turn to others. In my view, self-reliance is a valuable quality, but the willingness to ask for help is equally important, and the wise person knows when each is appropriate.

Supporters of solving problems independently emphasise personal development. A person who overcomes obstacles by himself gains confidence, skills and resilience, and learns from his mistakes. Relying on others constantly may create dependence and prevent growth. In addition, some matters, such as personal decisions, are better thought through privately before they are discussed.

However, there are strong reasons for asking for help. Other people may have knowledge or experience that shortens the solution, and a different perspective can reveal options that one has not considered. Many serious problems, such as illness, debt or emotional distress, become worse if they are hidden, partly because of pride or fear of judgement. Seeking support from a friend, a teacher or a professional can prevent small difficulties from turning into crises. Moreover, a person who asks for help also gives others the opportunity to be useful, which strengthens relationships.

The most sensible approach is to try to understand and solve the problem first, to set a limit of time or effort, and then to consult someone if it remains unresolved. In matters affecting health or safety, help should be sought immediately. Societies can encourage this by reducing the stigma around asking for assistance and by making services easy to reach.

In conclusion, independence and seeking help are not opposites; they are complementary skills, and using both wisely leads to better solutions.`,
        analysis: [
          'Task Response: обе позиции раскрыты, позиция («оба навыка дополняют друг друга») сформулирована.',
          'Аргументация: развитие и устойчивость vs знания других и риск скрытых проблем; практическое правило «сначала попробуй, затем спроси».',
          'Cohesion: However / Moreover / In conclusion; ключевая оппозиция independence / help.',
          'Lexical Resource: resilience, stigma, unresolved, complementary; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'As-Samad — someone people turn to', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание человека, к которому обращаются за помощью, и обсуждение поддержки.',
      keywords: ['turn to', 'help', 'advice', 'reliable', 'support', 'trust', 'listen', 'problem', 'calm', 'approach'],
      part1: [
        { q: 'Who do you turn to when you have a problem?', a: 'First my sister, because she listens without judging. For practical matters, I also ask a colleague who has experience.' },
        { q: 'Do people often ask you for help?', a: 'Fairly often, mainly students and friends. I try to listen first, and then, if they want, to suggest options.' },
        { q: 'Is it easy for you to ask for help?', a: 'It used to be difficult because of pride, but I learned that it saves time and often strengthens relationships.' },
        { q: 'What do you do when you feel overwhelmed?', a: 'I write down everything on my mind, choose the most urgent item and ask someone for help with one thing.' }
      ],
      part2: {
        topic: 'Describe a person to whom many people go for help.', bullets: ['who the person is', 'what kind of help people ask for', 'how this person helps', 'and explain why people trust them.'],
        plan: [{ h: '1. Who', t: 'Mrs Bakhyt, the head of our department.' }, { h: '2. Help', t: 'Lessons, personal problems, paperwork.' }, { h: '3. How', t: 'Listens, no judgement, concrete steps.' }, { h: '4. Trust', t: 'Keeps confidence; calm; fair.' }],
        model: `The person I would like to describe is Mrs Bakhyt, the head of the department where I work, to whom almost everyone in the school turns for help.

People ask her for different kinds of assistance. Young teachers come to her for advice on lesson planning and on handling difficult classes. Colleagues ask for help with paperwork and official rules, and sometimes a person simply wants to talk about a personal worry, such as a family illness or a shortage of money. Even students, when they have a problem, often look for her in the corridor.

Her way of helping is quite remarkable. First of all, she listens without interrupting. She waits until the person finishes and sometimes asks only one question. Then, instead of a long speech, she suggests some concrete steps and offers to help with the first one. She also never says that she is too busy, although she certainly is, and if she really cannot talk at that moment, she names a precise time when she will be free.

People trust her for three reasons. She keeps confidences completely; nobody has ever heard her repeat something told in private. She is fair, because she treats everyone with the same respect. And she is calm, so that in her presence, problems seem to become smaller.

I try to learn from her. When someone comes to me with a problem now, I try to put away my phone, listen carefully and offer one practical step, just as she does.`
      },
      part3: [
        { q: 'Why do some people hesitate to ask for help?', a: 'Pride, fear of being a burden or fear of judgement. Cultural attitudes to independence also matter. Creating a supportive climate makes asking easier.' },
        { q: 'What qualities make a person easy to approach?', a: 'Patience, openness and the absence of judgement. People approach those who they feel will listen and keep things confidential.' },
        { q: 'Should schools have counsellors?', a: 'Yes, definitely. Students face many pressures, and a trained counsellor can help early, before problems become serious.' }
      ]
    }
  });

  /* ===== 69 · Al-Qadir ===== */
  put(69, {
    listening: {
      title: 'Al-Qadir — an adaptive sports club', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за информацией о клубе: числа, дни, правила.',
      context: 'Part 2. Тренер рассказывает о клубе адаптивного спорта.', genders: { Coach: 'm' },
      script: `Coach: Welcome to the Adaptive Sports Club. I am Marat, the head coach. Here we focus on what people can do, not on what they cannot.
Coach: The club was founded twelve years ago, and it now has one hundred and ten members, aged from eight to seventy. We offer five sports: swimming, table tennis, basketball, athletics and archery.
Coach: Training takes place on Tuesday, Thursday and Saturday. On Tuesday and Thursday, sessions begin at six o\'clock in the evening. On Saturday, they begin earlier, at ten, not nine as in the old schedule.
Coach: Every new member has a free assessment. We talk about goals and abilities, and then design a programme. The programme is adjusted every three months.
Coach: Equipment is adapted. For example, we have lightweight wheelchairs for basketball and special supports for archery. The pool has a lift, and all the rooms are accessible.
Coach: A word about the philosophy. Every person has a measure of ability, and the aim is to extend it step by step. Progress is measured against yourself, not against others.
Coach: The membership fee is twenty pounds a month, and there are discounts for families. Volunteers are always welcome, and no experience is required.
Coach: The next competition will be on the third of October. Would anyone like to try a session today?`,
      notesTitle: 'Adaptive sports club',
      notes: [
        { pre: 'Founded', post: 'years ago.', a: ['12', 'twelve'], e: 'Двенадцать лет назад.' },
        { pre: 'Number of members:', post: '', a: ['110', 'one hundred and ten'], e: 'Сто десять членов.' },
        { pre: 'Number of sports:', post: '', a: ['5', 'five'], e: 'Пять видов спорта.' },
        { pre: 'Saturday session begins at', post: '', a: ['10', 'ten', '10:00'], e: 'По субботам в десять.' },
        { pre: 'Membership: £', post: 'a month', a: ['20', 'twenty'], e: 'Двадцать фунтов в месяц.' }
      ],
      mc: [
        { q: 'How often is each programme adjusted?', opts: ['every three months', 'every month', 'every year'], a: 'A', e: 'Каждые три месяца.' },
        { q: 'Against whom is progress measured?', opts: ['yourself', 'other members', 'national records'], a: 'A', e: 'Против самого себя.' },
        { q: 'What experience do volunteers need?', opts: ['none', 'coaching qualifications', 'medical training'], a: 'A', e: 'Опыт не требуется.' }
      ]
    },
    writing: {
      title: 'Al-Qadir — employment and ability', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о трудоустройстве людей с инвалидностью.',
      task2: {
        prompt: 'Some people believe that employers should be required by law to hire a certain number of people with disabilities. To what extent do you agree or disagree?',
        keywords: ['employers', 'disabilities', 'law', 'hire', 'quota', 'employment', 'equality', 'abilities', 'workplace', 'support', 'discrimination', 'skills'],
        model: `People with disabilities often face difficulties in finding work, even when they are well qualified. I agree to a considerable extent that the law should encourage or require employers to hire them, but I believe that rules must be accompanied by support and by a focus on ability.

The argument for legal requirements rests on fairness and on evidence of discrimination. Many employers, consciously or not, assume that a disabled applicant will be less productive or more expensive, and so qualified candidates are rejected before they have a chance to show their skills. A quota system, or similar legal measures, can break this pattern by obliging employers to consider these candidates seriously. Once they are employed, such workers can often change the expectations of their colleagues. Employment also gives financial independence and a sense of purpose, which benefits individuals and reduces the burden on welfare systems.

However, compulsion alone can be ineffective. If employers feel forced, they may give formal jobs without real responsibility or may resent the requirement, and a person hired only to fill a quota is unlikely to be treated with respect. Small businesses may also lack the resources to adapt the workplace.

For these reasons, the law should be combined with practical support: grants for adapting the workplace, training for managers, help with recruitment and flexible working conditions. The emphasis should be on matching abilities with tasks, so that employees contribute meaningfully.

In conclusion, legal requirements are justified to counter discrimination, but they will work best when they are accompanied by incentives, support and a genuine focus on what people can do.`,
        analysis: [
          'Task Response: градуированная позиция и оговорка о том, что принуждение неэффективно без поддержки.',
          'Аргументация: дискриминация → квоты → риск формального найма → меры поддержки.',
          'Cohesion: However / For these reasons; ключевое слово ability.',
          'Lexical Resource: quota, compulsion, adapt the workplace, incentives; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Qadir — achieving something despite difficulty', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о человеке, достигшем цели вопреки трудностям, и обсуждение возможностей.',
      keywords: ['overcome', 'difficult', 'achievement', 'determination', 'ability', 'obstacle', 'inspiring', 'courage', 'goal', 'possible'],
      part1: [
        { q: 'Do you like challenges?', a: 'In moderation. I enjoy goals that are slightly beyond my current ability, because they push me to improve.' },
        { q: 'Have you achieved something you thought was impossible?', a: 'Finishing a long-distance walk of thirty kilometres. At the beginning I thought I could not do it.' },
        { q: 'Who is the most determined person you know?', a: 'My friend Gulzhan, who learned to speak three languages while working two jobs.' },
        { q: 'Do you give up easily?', a: 'No. I may change the method, but I rarely abandon a goal that matters to me.' }
      ],
      part2: {
        topic: 'Describe a person who achieved something important despite difficulties.', bullets: ['who the person is', 'what difficulties they faced', 'what they achieved', 'and explain why you find them inspiring.'],
        plan: [{ h: '1. Who', t: 'My cousin Dias, who uses a wheelchair.' }, { h: '2. Difficulties', t: 'Accident at 17; access problems.' }, { h: '3. Achieved', t: 'Degree in computer science; works as developer.' }, { h: '4. Inspiring', t: 'Focus on ability; calm determination.' }],
        model: `The person I would like to describe is my cousin Dias, who achieved a great deal despite using a wheelchair since the age of seventeen.

When he was seventeen, Dias had a serious accident that injured his spine, and he lost the ability to walk. At that time he had just finished school and had planned to study sport. The first year was extremely difficult, both physically and emotionally. There were long hospital stays, and when he returned to normal life, he met many practical obstacles: buildings without ramps, buses that he could not use and some people who treated him as if he were helpless.

However, he decided to look for another direction. He had always been good at mathematics, so he began to study programming at home, using online courses. After two years, he entered university, where he had to fight to have some classrooms made accessible. He graduated with distinction, and today he works as a software developer for a company that he joined after a competitive interview. He also volunteers as a mentor for young people with disabilities.

I find him inspiring for several reasons. He never complains, but he asks for the changes he needs, calmly and persistently. He focuses on what he can do, and he has developed those abilities to a high level. And he has a sense of humour, which makes other people feel at ease.

He has taught me that limits are often less fixed than we think and that the right question is not "what can I not do?" but "what can I do next?"`
      },
      part3: [
        { q: 'How can society make life easier for people with disabilities?', a: 'By making buildings and transport accessible, ensuring equal opportunities in education and work and changing attitudes. Small changes, like ramps, make a big difference.' },
        { q: 'Why do some people achieve a lot despite difficulties?', a: 'Often because of determination, support from others and a clear goal. Difficulties can also develop skills such as creativity and patience.' },
        { q: 'Do you think the media portray people with disabilities fairly?', a: 'Improving, but not always. Stories sometimes present them as either victims or heroes, whereas they are simply people with different circumstances.' }
      ]
    }
  });

  /* ===== 70 · Al-Muqtadir ===== */
  put(70, {
    listening: {
      title: 'Al-Muqtadir — power and responsibility', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о власти и ответственности: структура и числа.',
      context: 'Part 4. Лекция о том, как власть влияет на поведение людей.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good afternoon. Today we discuss power. The Arabic root q-d-r, from which we have the names Al-Qadir and Al-Muqtadir, refers to ability and measure. In the Qur'an, perfect power belongs to God alone; human power is always limited and temporary.
Lecturer: What does power do to people? Some studies suggest that people who feel powerful tend to pay less attention to others and to take more risks. Researchers describe this as a reduction of empathy. I should add that results vary, and that much depends on the person and the situation.
Lecturer: Let me present three principles for responsible power. One: accountability. People with authority should explain their decisions and accept review. Two: listening. Seek opinions from those who disagree. Three: humility. Remember that your position is temporary and that your success depended on many others.
Lecturer: There are also practical safeguards. In organisations, limited terms of office, independent audits and open decision-making reduce abuse. In families, the same principle applies: parents hold power over children, and the wise parent explains the reasons for rules.
Lecturer: A final point. Power can be used to create, not only to control. A manager who develops the skills of his team uses his authority to increase the power of others.
Lecturer: For next week, prepare a one-page case study of a leader who used power responsibly. It is due on Thursday, not Wednesday.`,
      notesTitle: 'Power and responsibility',
      notes: [
        { pre: 'The root q-d-r refers to ability and', post: '', a: ['measure'], e: 'Корень q-d-r — способность и мера.' },
        { pre: 'Powerful people may show reduced', post: '', a: ['empathy'], e: 'Снижение эмпатии.' },
        { pre: 'Number of principles for responsible power:', post: '', a: ['3', 'three'], e: 'Три принципа.' },
        { pre: 'Safeguards: limited terms, independent audits and open', post: '', a: ['decision-making', 'decision making'], e: 'Ограничение сроков, аудит, открытость решений.' },
        { pre: 'Case study due on', post: '', a: ['Thursday'], e: 'К четвергу.' }
      ],
      mc: [
        { q: 'What does the lecturer say about the research results?', opts: ['they vary', 'they are identical', 'they are certain'], a: 'A', e: 'Результаты различаются.' },
        { q: 'What is the first principle of responsible power?', opts: ['accountability', 'speed', 'secrecy'], a: 'A', e: 'Подотчётность.' },
        { q: 'How can power be used creatively?', opts: ['by developing the skills of a team', 'by controlling every detail', 'by avoiding responsibility'], a: 'A', e: 'Развивая навыки команды.' }
      ]
    },
    writing: {
      title: 'Al-Muqtadir — accountability of leaders', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о подотчётности руководителей крупных компаний.',
      task2: {
        prompt: 'Some people believe that leaders of large companies should be held personally responsible for the harm that their organisations cause. To what extent do you agree or disagree?',
        keywords: ['leaders', 'companies', 'responsibility', 'accountability', 'harm', 'law', 'decisions', 'executives', 'penalties', 'safety', 'environment', 'profit'],
        model: `Large companies can affect millions of people through their products, employment practices and environmental impact. I agree to a large extent that their leaders should be held personally responsible when serious harm occurs, as this creates the right incentives and fairness, but responsibility should be assigned carefully.

The central argument is that those who make decisions and benefit from them should bear the consequences. Senior executives often receive high salaries and bonuses because of their authority, and it is reasonable that this authority should come with accountability. When a company ignores safety warnings or pollutes a river to save costs, fines paid by the company are sometimes treated as a business expense, whereas the possibility of personal penalties would encourage leaders to think more carefully. Personal responsibility also reassures the public that the law applies equally to powerful people.

However, there are difficulties. In large organisations, decisions are often shared, and information may be hidden from top management by those below. Punishing a leader for something that he could not reasonably have known would be unjust and might discourage capable people from taking senior positions. Responsibility must therefore be based on evidence of negligence, deliberate wrongdoing or failure to act on known risks.

The best system would combine clear legal standards, independent investigation and proportionate penalties, together with internal measures such as transparent reporting and protection for employees who report problems. Leaders should be expected to create a culture in which risks are raised early.

In conclusion, leaders should be personally accountable for serious harm caused by their organisations when they knew of, or ignored, the risks, because power should be matched by responsibility.`,
        analysis: [
          'Task Response: градуированная позиция («to a large extent») и оговорка о необходимости доказательств вины.',
          'Аргументация: принцип «кто решает и получает выгоду, тот отвечает»; возражения о коллективных решениях и сокрытии информации; решение.',
          'Cohesion: However / therefore; ключевое слово accountability.',
          'Lexical Resource: negligence, proportionate, incentives, risk reporting; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muqtadir — using responsibility well', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о ситуации, когда вы обладали полномочиями и использовали их ответственно, и обсуждение власти.',
      keywords: ['responsibility', 'in charge', 'decision', 'authority', 'fair', 'listen', 'team', 'power', 'trust', 'consequences'],
      part1: [
        { q: 'Have you ever been in charge of a group?', a: 'Yes, I led a school project team and, later, a department meeting. It showed me that leading is mostly listening.' },
        { q: 'Do you like making decisions for other people?', a: 'Not particularly. I accept it when needed, but I prefer to decide together, because it increases agreement.' },
        { q: 'What do you think of people who abuse their position?', a: 'It disappoints me. A position should be used to serve others, and abusing it destroys trust.' },
        { q: 'Who has authority in your family?', a: 'My parents, though they consult us. The oldest member, my grandfather, is respected for his experience.' }
      ],
      part2: {
        topic: 'Describe a time when you had authority and used it responsibly.', bullets: ['what the situation was', 'what authority you had', 'what decision you made', 'and explain what you learned.'],
        plan: [{ h: '1. Situation', t: 'Organising a school trip as team leader.' }, { h: '2. Authority', t: 'Decided budget and route.' }, { h: '3. Decision', t: 'Cancelled a risky stop; explained.' }, { h: '4. Learned', t: 'Safety first; explain decisions.' }],
        model: `I would like to describe a time when I was responsible for organising a school trip to a national park and had to make an important decision.

I was the team leader, so I had the authority to choose the route, to manage the budget and to decide on the final programme. There were forty students and four other teachers. I was glad to have this trust, but I also felt the weight of the responsibility, because I knew that the safety of the students depended on my choices.

One day before the trip, I received a weather forecast that predicted heavy rain. The programme included a walk along a river canyon, which would be dangerous if the path were wet. Many students were looking forward to it, and some colleagues argued that we should keep the plan, because the park staff had said that it was probably fine. I talked to the park rangers myself and then consulted two experienced colleagues. In the end, I decided to cancel the canyon walk and replace it with a visit to the museum and a gentle forest trail.

I explained my reasons to the students and to the other teachers. Some were disappointed, but nobody argued after hearing the explanation. During the trip, it rained all afternoon, and I was relieved by my decision.

I learned several things: that authority means being willing to make unpopular decisions for good reasons, that consultation improves decisions and that explaining the reasons clearly builds trust.`
      },
      part3: [
        { q: 'What are the dangers of having too much power?', a: 'People may become careless about others\' needs and avoid criticism. Without checks, power can be abused, which is why accountability is important.' },
        { q: 'How can leaders be encouraged to behave responsibly?', a: 'By clear rules, transparency, and the possibility of removal if they fail. A culture that values honesty also helps.' },
        { q: 'Is it better to have strong leaders or strong institutions?', a: 'Strong institutions, in my view, because they continue after individuals leave and protect against abuse. Good leaders are valuable, but they should operate within clear limits.' }
      ]
    }
  });
})();

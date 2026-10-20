// Имена 31–40: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 31 · Al-Khabir ===== */
  put(31, {
    listening: {
      title: 'Al-Khabir — interviewing an expert', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за планом интервью с экспертом и поправками дат.',
      context: 'Part 3. Двое студентов и руководитель обсуждают интервью с экспертом.', genders: { Supervisor: 'f', Kamila: 'f', Dias: 'm' },
      script: `Supervisor: Let us discuss your project on water management. Kamila, who will you interview?
Kamila: Dr Ermekov, a hydrologist with twenty years of experience. He has worked on river projects in three countries.
Supervisor: Excellent. Dias?
Dias: I want to talk to a farmer, because experts need to be tested against practical experience.
Supervisor: A wise choice. An expert knows the details, but a practitioner knows how those details work in real conditions. Now, how long will each interview take?
Kamila: Forty-five minutes. At first I thought an hour, but Dr Ermekov is busy.
Supervisor: That is fine. Please prepare ten questions in advance.
Dias: Should they be open questions?
Supervisor: Yes. Instead of "Is the river polluted?", ask "What factors affect the quality of the river water?" That way, you learn the reasons, not only the facts.
Kamila: And the recording?
Supervisor: Always ask permission. Then transcribe the key points within two days, while you still remember the context.
Dias: When is the project report due?
Supervisor: The eighth of December. It was the fifth, but I have extended it by three days.
Kamila: How long should it be?
Supervisor: About two thousand words. And please check every source. Do not accept a statement just because it comes from an expert; ask for evidence.`,
      notesTitle: 'Expert interview project',
      notes: [
        { pre: 'Dr Ermekov\'s profession:', post: '', a: ['hydrologist'], e: 'Д-р Ермеков — гидролог.' },
        { pre: 'Years of experience:', post: '', a: ['20', 'twenty'], e: 'Двадцать лет опыта.' },
        { pre: 'Interview length:', post: 'minutes', a: ['45', 'forty-five', 'forty five'], e: 'Сорок пять минут (час — первоначальный план).' },
        { pre: 'Number of prepared questions:', post: '', a: ['10', 'ten'], e: 'Десять вопросов.' },
        { pre: 'Report due: December', post: '', a: ['8', '8th', 'eighth', 'the 8th'], e: 'Срок продлён с 5-го на 8-е.' }
      ],
      mc: [
        { q: 'Why does Dias want to talk to a farmer?', opts: ['to test expert ideas against practical experience', 'because farmers are cheaper', 'because the expert is unavailable'], a: 'A', e: 'Эксперта нужно проверять практическим опытом.' },
        { q: 'What kind of questions does the supervisor recommend?', opts: ['open questions', 'yes/no questions', 'only factual questions'], a: 'A', e: 'Открытые вопросы выявляют причины, а не только факты.' },
        { q: 'What does the supervisor say about sources?', opts: ['ask for evidence even from experts', 'trust experts completely', 'avoid interviews'], a: 'A', e: 'Просить подтверждения даже у экспертов.' }
      ]
    },
    writing: {
      title: 'Al-Khabir — governments and experts', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о роли экспертов в принятии решений.',
      task2: {
        prompt: 'Some people believe that governments should always follow the advice of experts when making important decisions. To what extent do you agree or disagree?',
        keywords: ['experts', 'governments', 'advice', 'decisions', 'evidence', 'public', 'democracy', 'science', 'policy', 'values', 'risk', 'accountability'],
        model: `Governments regularly face complex decisions on health, the economy and the environment. I agree that they should rely heavily on expert advice, but I do not believe that experts should be followed without question in every case.

The main reason for listening to experts is that modern problems require specialised knowledge. A government deciding how to respond to an epidemic or an economic crisis cannot judge the evidence without scientists and economists, and ignoring their analysis risks serious and avoidable harm. Experts also help to protect decisions from short-term political pressure, since their conclusions are based on data and professional standards rather than on popularity.

Nevertheless, experts have limits. Their knowledge is usually narrow, and they may overlook factors outside their field: a medical expert may recommend a measure without considering its effect on employment, while an economist may undervalue social consequences. Experts can also disagree with one another, or be mistaken, as the history of science shows. Moreover, many decisions involve values, such as how much risk society should accept, and these are not purely technical questions. In a democracy, elected leaders are accountable to the public, and they must weigh expert advice against other priorities.

The best approach is therefore a structured one. Governments should consult a range of experts, publish the evidence and reasoning, and explain publicly when they decide to depart from the advice. This keeps decisions informed and accountable at the same time.

In conclusion, governments should give great weight to expert advice, but they must remain responsible for the final decision and be open about how it was reached.`,
        analysis: [
          'Task Response: градуированная позиция («rely heavily, but not without question») и обоснование.',
          'Тулмин: claim → grounds (эпидемии, кризисы) → warrant (сложные проблемы требуют знаний) → rebuttal (узость экспертов, ценности) → qualifier (прозрачность и ответственность).',
          'Cohesion: Nevertheless / Moreover / therefore; ключевое слово experts повторяется осмысленно.',
          'Lexical Resource: specialised knowledge, undervalue, accountable, structured; хеджирование (may, usually).'
        ]
      }
    },
    speaking: {
      title: 'Al-Khabir — an expert who helped me', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ об эксперте, чья консультация помогла, и обсуждение доверия специалистам.',
      keywords: ['expert', 'advice', 'experience', 'knowledge', 'professional', 'consult', 'specialist', 'trust', 'problem', 'solution'],
      part1: [
        { q: 'Who do you ask when you need advice about a subject you do not know?', a: 'I usually ask someone with direct experience and then check a second source. One opinion is rarely enough for an important decision.' },
        { q: 'Do you trust information that you find online?', a: 'Only after checking who wrote it and whether other sources agree. The internet is a great tool, but it needs a critical reader.' },
        { q: 'Are you an expert in anything?', a: 'Modestly, in teaching geography. I know my subject well, but I am constantly aware of how much I still do not know.' },
        { q: 'Do you like asking for help?', a: 'Yes, now. I used to hesitate, but I realised that asking saves a lot of time and often leads to better solutions.' }
      ],
      part2: {
        topic: 'Describe an expert whose advice helped you.', bullets: ['who the expert was', 'what problem you had', 'what advice they gave', 'and explain how it helped you.'],
        plan: [{ h: '1. Who', t: 'A physiotherapist, Dr Madina.' }, { h: '2. Problem', t: 'Back pain from desk work.' }, { h: '3. Advice', t: 'Exercises, posture, breaks.' }, { h: '4. Result', t: 'Pain gone; new habits.' }],
        model: `The expert whose advice helped me most is a physiotherapist named Dr Madina, whom I consulted two years ago because of constant back pain.

At that time I was spending long hours at a desk, preparing lessons and marking papers. The pain had started as a small discomfort, but gradually it became so strong that I could hardly sit for an hour. I had tried to solve the problem myself by reading articles and buying a special cushion, but nothing worked.

Dr Madina began by asking many questions: how I sit, how I sleep, how often I move. After examining me, she explained that the pain came not only from the back but also from weak muscles and from stress. Her advice was surprisingly simple. She gave me five short exercises to do every morning, suggested that I raise my laptop to eye level, and told me to stand up for two minutes every forty minutes. She also warned me not to expect instant results.

It helped me in two ways. Physically, within six weeks the pain had almost disappeared. And mentally, I understood that an expert is valuable not because they have a magic solution but because they see the whole picture and give a plan that fits your situation.

Since then, I follow her routine, and I recommend consulting specialists to my friends instead of guessing. It is one of the best investments I have made in my health.`
      },
      part3: [
        { q: 'Why do some people distrust experts?', a: 'Experts sometimes disagree or change their advice as new evidence appears, which can look like inconsistency. Poor communication and bad experiences also contribute. In fact, revision of advice is a sign of honest science.' },
        { q: 'How can people judge whether someone is a real expert?', a: 'By checking qualifications, track record and whether they explain their reasoning and admit uncertainty. A reliable expert rarely claims to be certain about everything.' },
        { q: 'Should schools teach students to evaluate information?', a: 'Definitely. In a world full of claims, the ability to check sources, spot bias and ask for evidence is as important as any subject.' }
      ]
    }
  });

  /* ===== 32 · Al-Halim ===== */
  put(32, {
    listening: {
      title: 'Al-Halim — a patience workshop', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных о семинаре: дата, время, стоимость.',
      context: 'Part 1. Мама звонит, чтобы записаться на семинар по терпению в воспитании.', genders: { Receptionist: 'f', Gulnar: 'f' },
      script: `Receptionist: Good morning, Family Learning Centre.
Gulnar: Good morning. I would like to register for the workshop on patience in parenting.
Receptionist: Certainly. May I have your name?
Gulnar: Gulnar Sagyndykova. S-A-G-Y-N-D-Y-K-O-V-A.
Receptionist: Thank you. The workshop is on Saturday the fourteenth, from ten until one. Or is it half past twelve? Let me check. Yes, it finishes at half past twelve.
Gulnar: And where is it?
Receptionist: Room nine, on the ground floor.
Gulnar: How much does it cost?
Receptionist: Twenty-five pounds, which includes a workbook. If you bring a partner, the second ticket is half price.
Gulnar: That is very reasonable. What will be covered?
Receptionist: The course explains why children test limits, how to stay calm when you are tired, and a technique called the pause. You take one deep breath and count to five before replying.
Gulnar: That sounds useful. My son is four, and he often tries my patience.
Receptionist: That is very common at that age. Our trainer, Ms Arman, has worked with families for fifteen years.
Gulnar: Do I need to bring anything?
Receptionist: Just a notebook. Tea and biscuits are provided. We will send a confirmation email today.
Gulnar: Thank you very much.`,
      notesTitle: 'Parenting workshop',
      notes: [
        { pre: 'Surname:', post: '', a: ['Sagyndykova'], e: 'Фамилия — Sagyndykova.' },
        { pre: 'Date: Saturday the', post: '', a: ['14', '14th', 'fourteenth', 'the 14th'], e: 'Суббота, 14-е.' },
        { pre: 'Finishing time:', post: '', a: ['12:30', '12.30', 'half past twelve', 'twelve thirty'], e: 'Заканчивается в 12:30.' },
        { pre: 'Room number:', post: '', a: ['9', 'nine'], e: 'Кабинет 9.' },
        { pre: 'Cost: £', post: '', a: ['25', 'twenty-five', 'twenty five'], e: 'Двадцать пять фунтов, включая рабочую тетрадь.' }
      ],
      mc: [
        { q: 'What is the technique called "the pause"?', opts: ['one deep breath and counting to five', 'leaving the room for an hour', 'writing a list of rules'], a: 'A', e: 'Один глубокий вдох и счёт до пяти.' },
        { q: 'What discount is offered?', opts: ['half price for a second ticket', 'free tea', 'a free book'], a: 'A', e: 'Второй билет за полцены.' },
        { q: 'How long has the trainer worked with families?', opts: ['15 years', '5 years', '25 years'], a: 'A', e: 'Пятнадцать лет.' }
      ]
    },
    writing: {
      title: 'Al-Halim — losing patience in modern life', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины и решения: нехватка терпения в современном обществе.',
      task2: {
        prompt: 'Many people say that modern society has become less patient than in the past. What are the causes of this, and what can be done to encourage patience?',
        keywords: ['patience', 'impatient', 'technology', 'speed', 'instant', 'attention', 'stress', 'habits', 'education', 'delay', 'calm', 'waiting'],
        model: `It is widely believed that modern people are less patient than their grandparents were. The causes are connected with technology and lifestyle, and patience can be strengthened through education and habits.

The first cause is the speed of modern services. Messages are delivered instantly, answers can be found in seconds, and films and goods are available on demand. People who are used to immediate results find even short delays irritating, because the experience of waiting has become rare. A second cause is the pace of working life, in which tight deadlines and constant notifications create stress and make it hard to be calm. Finally, the culture of comparison on social media encourages people to expect quick success, which makes slow, steady progress seem like failure.

Several measures could help. Schools can teach children that valuable skills, from reading to playing an instrument, require long practice, and projects that last several weeks give pupils experience of delayed reward. Parents can model patience by controlling their own reactions and by limiting immediate gratification, for example by asking a child to wait a few minutes before a treat. For adults, simple habits such as taking a deep breath before responding, turning off non-essential notifications and spending time on activities with slow results, such as gardening or learning a language, can restore the capacity to wait.

Employers also have a role: realistic deadlines and breaks reduce the pressure that erodes patience.

In conclusion, impatience stems from instant technology, work pressure and unrealistic comparisons, and it can be reduced by long-term projects, good examples and deliberate habits.`,
        analysis: [
          'Task Response: три причины и три группы решений с примерами; структура соответствует вопросу.',
          'Аргументация: механизм (привычка к мгновенности → раздражение), опыт отложенной награды.',
          'Cohesion: The first cause / A second cause / Finally; затем Several measures; последовательные смысловые связи.',
          'Lexical Resource: gratification, erodes, notifications, on demand; грамматика: пассив, герундии, сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Halim — staying patient', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о ситуации, где вы сохранили терпение, и обсуждение нетерпения.',
      keywords: ['patient', 'wait', 'calm', 'frustrating', 'slow', 'stay', 'control', 'delay', 'angry', 'learn'],
      part1: [
        { q: 'Are you a patient person?', a: 'I would say moderately. I am patient with people but less patient with delays and bureaucracy. I am working on it.' },
        { q: 'What do you do while you are waiting?', a: 'I usually read or listen to a podcast. Making waiting time useful makes it much less annoying.' },
        { q: 'Do you get annoyed in traffic?', a: 'A little, though I have learned to leave earlier, which removes most of the stress.' },
        { q: 'Which is more difficult for you, waiting for a person or waiting in a queue?', a: 'Waiting in a queue, especially when nothing seems to move. With a person, at least I can talk or do something else.' }
      ],
      part2: {
        topic: 'Describe a time when you had to be patient.', bullets: ['when it was', 'why you needed patience', 'how you stayed patient', 'and explain how it ended.'],
        plan: [{ h: '1. When', t: 'Teaching an older relative to use a phone.' }, { h: '2. Why', t: 'He forgot steps; I felt frustrated.' }, { h: '3. How', t: 'Breathing, small steps, notes with pictures.' }, { h: '4. End', t: 'He sent his first message; proud.' }],
        model: `I would like to describe a time when I had to be very patient while teaching my grandfather to use a smartphone.

He is seventy-eight, and his old phone had stopped working, so my family bought him a new one. He was excited but also nervous, because he had never used a touch screen. I volunteered to teach him during a weekend visit.

It was much harder than I expected. He would learn one step, such as opening the messaging app, and five minutes later he would forget it. He often pressed the wrong buttons and became upset when the screen changed. I could feel my frustration rising, and at one point I almost said, "It is simple, just do what I showed you." But I stopped myself, because I remembered how he had patiently taught me to ride a bicycle when I was a child.

So I changed my approach. I took a deep breath and divided the task into small steps. I wrote a set of notes with large letters and drawings of the buttons, and we practised for twenty minutes at a time, with tea breaks in between. I also let him make mistakes without correcting him immediately.

It ended well. After three days, he managed to send his first message to my mother, and he was so proud that he showed it to everyone. I learned that patience is a form of respect and that it often brings better results than urgency.`
      },
      part3: [
        { q: 'Why are some people more patient than others?', a: 'Temperament plays a part, but upbringing and habits matter as well. People who have practised waiting and who have realistic expectations tend to be calmer.' },
        { q: 'Do you think technology has made people less patient?', a: 'In many ways, yes, because we are used to quick answers and instant delivery. Still, technology can also support patience, for example through apps for learning that reward steady progress.' },
        { q: 'Is patience always a good quality?', a: 'Usually, but not when it means tolerating injustice or wasting years in an unsuitable situation. Wise patience includes knowing when to act.' }
      ]
    }
  });

  /* ===== 33 · Al-'Azim ===== */
  put(33, {
    listening: {
      title: "Al-'Azim — a planetarium tour", spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за числами и порядком экспонатов в монологе гида.',
      context: 'Part 2. Гид планетария рассказывает о масштабах Вселенной.', genders: { Guide: 'm' },
      script: `Guide: Good evening, and welcome to the city planetarium. I am Bolat, and tonight I will take you on a journey through scale.
Guide: The show begins at seven thirty, not seven, because of a delay with the equipment. It lasts forty minutes, and afterwards there is a short talk in the observation room.
Guide: Let us begin with the Earth. It is about twelve thousand kilometres across. Now look at the Sun: its diameter is more than a hundred times larger, and over a million Earths could fit inside it.
Guide: Light travels at about three hundred thousand kilometres a second, which is the fastest speed we know. Even so, sunlight takes about eight minutes to reach us.
Guide: Our galaxy, the Milky Way, contains hundreds of billions of stars. If you could travel across it at the speed of light, the journey would take about one hundred thousand years.
Guide: When we look at the night sky, we are seeing light that left some stars thousands of years ago. Some of the objects that we see may no longer exist in the same form.
Guide: What can we take from this? For many people, a sense of scale brings humility. Our problems are real, but they are small when seen from a distance. This is why I invite you, when you leave, to look up for one minute without your phone.
Guide: Tickets cost nine pounds, and the audio guide is an extra two. Please keep your seat belts fastened during the dome show. The shop is on the right.`,
      notesTitle: 'Planetarium tour',
      notes: [
        { pre: 'Show begins at', post: '', a: ['7:30', '7.30', 'half past seven', 'seven thirty', '19:30'], e: 'Начало в 19:30 из-за задержки оборудования.' },
        { pre: 'Length of the show:', post: 'minutes', a: ['40', 'forty'], e: 'Сорок минут.' },
        { pre: 'Speed of light: about', post: 'km per second', a: ['300000', '300,000', 'three hundred thousand'], e: 'Около 300 000 км/с.' },
        { pre: 'Sunlight takes about', post: 'minutes to reach us.', a: ['8', 'eight'], e: 'Около восьми минут.' },
        { pre: 'Ticket price: £', post: '', a: ['9', 'nine'], e: 'Билет — девять фунтов.' }
      ],
      mc: [
        { q: 'How long would it take to cross the Milky Way at the speed of light?', opts: ['about 100,000 years', 'about 1,000 years', 'about 8 minutes'], a: 'A', e: 'Около ста тысяч лет.' },
        { q: 'What does a sense of scale bring, according to the guide?', opts: ['humility', 'fear', 'competition'], a: 'A', e: 'Для многих людей — смирение.' },
        { q: 'What does the guide invite visitors to do after leaving?', opts: ['look up for one minute without a phone', 'buy a guidebook', 'return next week'], a: 'A', e: 'Минуту смотреть на небо без телефона.' }
      ]
    },
    writing: {
      title: "Al-'Azim — space exploration", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение затрат на космос и земные проблемы; аргументированный вывод.',
      task2: {
        prompt: 'Some people think that governments should spend money on space exploration. Others believe that this money should be used to solve problems on Earth. Discuss both views and give your own opinion.',
        keywords: ['space', 'exploration', 'governments', 'money', 'Earth', 'poverty', 'technology', 'research', 'satellites', 'benefits', 'priorities', 'budget'],
        model: `Space exploration is expensive, and some people argue that its budget would be better spent on problems on Earth, such as poverty, disease and climate change. While I understand this concern, I believe that a modest investment in space is justified because of its practical and intellectual benefits.

Critics of space programmes make a reasonable moral argument. Millions of people lack clean water, healthcare and education, and it can seem wrong to launch rockets while such needs remain. Space budgets, they argue, could finance hospitals and schools which would have an immediate effect on human lives. Moreover, the benefits of missions to other planets are often distant and uncertain.

On the other hand, supporters point out that space activity has produced significant benefits on Earth. Satellites provide weather forecasts, navigation, and communications, and they monitor climate change, deforestation and disasters. Research for space missions has also led to advances in materials, medicine and computing which have been adopted in everyday life. In addition, exploration inspires young people to study science and engineering, and it satisfies the human desire to understand our place in the universe. Space budgets are also small compared with other government spending, so their reduction would free little money for social needs.

In my view, the two goals are not opposites. Governments should treat basic needs as the first priority, but a balanced budget can finance both. Space research should be justified by clear benefits and, wherever possible, carried out through international cooperation to share costs.

In conclusion, solving Earth\'s problems must remain the main priority, yet moderate spending on space exploration brings valuable technology, knowledge and inspiration.`,
        analysis: [
          'Task Response: обе позиции изложены, собственная позиция («умеренные инвестиции оправданны») ясна.',
          'Аргументация: мораль vs практическая польза; конкретные примеры (спутники, погода, климат).',
          'Cohesion: On the other hand / In addition / In my view; повтор ключевых слов priority и benefits.',
          'Lexical Resource: justified, deforestation, inspire, international cooperation; грамматика: пассив, придаточные уступки.'
        ]
      }
    },
    speaking: {
      title: "Al-'Azim — a place that made me feel small", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание места, внушающего чувство масштаба, и обсуждение перспективы.',
      keywords: ['huge', 'enormous', 'mountains', 'sky', 'stars', 'small', 'amazing', 'view', 'scale', 'awe'],
      part1: [
        { q: 'Do you like looking at the stars?', a: 'Very much. Whenever I am away from the city, I look at the night sky for a while. It puts my everyday worries in perspective.' },
        { q: 'Have you ever been to a very tall building or mountain?', a: 'I have climbed a mountain near Almaty. The view from the top was breathtaking.' },
        { q: 'Do you like big cities or small towns?', a: 'Big cities for opportunities, small towns for peace. I enjoy both, but my heart prefers quiet places.' },
        { q: 'What is the biggest thing you have ever seen?', a: 'A huge waterfall during a trip, which was so loud that we could hardly talk. It was a truly powerful sight.' }
      ],
      part2: {
        topic: 'Describe a place that made you feel how small humans are.', bullets: ['where it was', 'what you saw', 'what you did there', 'and explain why it made you feel small.'],
        plan: [{ h: '1. Where', t: 'Charyn Canyon.' }, { h: '2. What', t: 'Red rock walls, enormous canyon.' }, { h: '3. Activities', t: 'Walked to the river, photographs.' }, { h: '4. Feelings', t: 'Awe; time and nature are vast.' }],
        model: `The place I would like to describe is the Charyn Canyon in the south-east of Kazakhstan, which I visited with my family two summers ago.

It is a long canyon with red and orange rock walls, which have been shaped by water and wind over millions of years. We arrived at the viewing point in the late afternoon, and the first thing that struck me was the size. The walls rise to about two hundred metres, and the canyon stretches as far as one can see. The light of the setting sun made the rocks look as if they were glowing.

We spent about three hours there. We walked down a narrow path to the bottom of the canyon, where a small river runs between the rocks, and I took many photographs. Standing at the bottom and looking up, I felt tiny. The only sounds were the wind and the water, and the temperature was noticeably cooler than above.

The reason it made me feel small was not only its size but also its age. The layers of rock record periods of time that are far beyond my imagination, and I realised that my whole life is a very short moment in comparison. At the same time, I did not feel sad. I felt calm, and a little grateful to be able to see such a place.

Since then, whenever I am stressed, I remember that scene, and it helps me to treat my problems with more proportion.`
      },
      part3: [
        { q: 'Why do people enjoy visiting spectacular natural places?', a: 'They offer beauty, silence and a break from daily routines. Large landscapes also create a sense of wonder that is rare in city life.' },
        { q: 'Does tourism damage natural wonders?', a: 'It can, through litter, erosion and overcrowding. Visitor limits, good paths and education can protect sites while still allowing people to enjoy them.' },
        { q: 'Why is a sense of perspective important?', a: 'It helps people to stay calm and to focus on what matters. When we see our problems against a larger background, we are less likely to react with panic.' }
      ]
    }
  });

  /* ===== 34 · Al-Ghafur ===== */
  put(34, {
    listening: {
      title: 'Al-Ghafur — a second chance', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Различать позиции и детали правил пересдачи.',
      context: 'Part 3. Студент и куратор обсуждают пересдачу экзамена.', genders: { Advisor: 'f', Rustem: 'm' },
      script: `Advisor: Rustem, I understand that you were not satisfied with your result.
Rustem: No, I scored fifty-two, and the pass mark is sixty. I think I panicked in the second section.
Advisor: Many students do. The good news is that you can retake the exam. The next session is on the twelfth of June. It was the tenth, but there is a holiday.
Rustem: How many times can I retake it?
Advisor: Twice. After that, you would need to repeat the course.
Rustem: And does the new score replace the old one?
Advisor: Yes, but only if it is higher. The fee for a retake is forty pounds, though it is waived if you have a medical certificate.
Rustem: I do not have one. I was not ill, just nervous.
Advisor: That is quite understandable. May I suggest a plan? First, analyse your mistakes. Which questions did you lose marks on?
Rustem: Mostly the long-answer questions.
Advisor: Then practise those under timed conditions. Second, attend the revision class on Thursdays at four. Third, try a short breathing exercise before the exam.
Rustem: Do you think I can improve in three weeks?
Advisor: Absolutely. Failure is not a verdict; it is information. Many students who retake perform better because they know exactly what to focus on.
Rustem: Thank you. I will register today.`,
      notesTitle: 'Exam retake',
      notes: [
        { pre: 'Rustem\'s score:', post: '', a: ['52', 'fifty-two', 'fifty two'], e: 'Пятьдесят два балла.' },
        { pre: 'Pass mark:', post: '', a: ['60', 'sixty'], e: 'Проходной балл — шестьдесят.' },
        { pre: 'Next exam date: June', post: '', a: ['12', '12th', 'twelfth', 'the 12th'], e: 'Десятого — праздник, поэтому 12-е.' },
        { pre: 'Retake fee: £', post: '', a: ['40', 'forty'], e: 'Сорок фунтов.' },
        { pre: 'Revision class on', post: 'at four', a: ['Thursdays', 'Thursday'], e: 'Занятия по четвергам в четыре.' }
      ],
      mc: [
        { q: 'How many retakes are allowed?', opts: ['two', 'one', 'unlimited'], a: 'A', e: 'Дважды, затем нужно повторить курс.' },
        { q: 'When does the new score replace the old one?', opts: ['only if it is higher', 'always', 'never'], a: 'A', e: 'Только если он выше.' },
        { q: 'How does the advisor describe failure?', opts: ['as information', 'as a verdict', 'as a punishment'], a: 'A', e: 'Неудача — информация, а не приговор.' }
      ]
    },
    writing: {
      title: 'Al-Ghafur — second chances in education', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение подходов к пересдачам и вторым шансам.',
      task2: {
        prompt: 'Some people think that students who fail an important exam should be given a second chance. Others believe that students should accept the result and move on. Discuss both views and give your own opinion.',
        keywords: ['exam', 'fail', 'second chance', 'retake', 'students', 'standards', 'motivation', 'effort', 'fairness', 'learning', 'pressure', 'result'],
        model: `Opinions differ on whether students who fail an important exam should be allowed to retake it. In my view, a limited number of second chances is the best policy, as it combines high standards with fairness and encourages learning.

Those who oppose retakes emphasise standards and fairness. If students can repeat an exam repeatedly, the pass mark may lose its meaning, and those who passed the first time may feel that their achievement has been devalued. A single, final exam also teaches preparation and responsibility, since students know that they cannot count on another opportunity. In addition, frequent retakes impose administrative costs on schools.

However, there are strong reasons for allowing a second attempt. A single performance may be affected by illness, anxiety or an unlucky selection of questions, and it does not necessarily reflect real ability. Failure also provides precise information about weaknesses: students who analyse their mistakes and prepare again often learn more than those who succeed immediately. Moreover, the prospect of permanent failure may discourage students from continuing, which wastes talent and increases dropout rates.

I therefore support a middle course. Students should be allowed one or two retakes, perhaps with a small fee or an obligation to attend extra classes, so that the second chance is earned and not automatic. The grade could also be limited or marked so that the standard is maintained.

In conclusion, a restricted system of retakes preserves the credibility of examinations while recognising that a single result is not always final proof of ability.`,
        analysis: [
          'Task Response: обе стороны раскрыты, позиция («ограниченное число попыток») сформулирована и обоснована.',
          'Аргументация: стандарты и справедливость vs диагностическая роль неудачи; компромисс через условия пересдачи.',
          'Cohesion: However / Moreover / I therefore support; повтор ключевых слов exam и standards.',
          'Lexical Resource: devalued, credibility, dropout rates, administrative; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Ghafur — starting again after a failure', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о том, как вы начали заново после неудачи; обсуждение вторых шансов.',
      keywords: ['failure', 'mistake', 'start again', 'second chance', 'learn', 'disappointed', 'try', 'support', 'recover', 'determined'],
      part1: [
        { q: 'How do you feel when you fail at something?', a: 'Disappointed at first, of course. After a day or two, I try to analyse what happened, because failure usually contains useful information.' },
        { q: 'Do you give up easily?', a: 'I do not think so. If something matters to me, I look for another way instead of quitting.' },
        { q: 'Do you think people deserve a second chance?', a: 'Generally yes, particularly for mistakes made through inexperience. Second chances often bring out the best in people.' },
        { q: 'Who supports you when you are discouraged?', a: 'My family and a few close friends. A short conversation with them usually restores my confidence.' }
      ],
      part2: {
        topic: 'Describe a time when you failed at something but tried again.', bullets: ['what you tried to do', 'why you failed', 'what you did next', 'and explain what happened the second time.'],
        plan: [{ h: '1. What', t: 'Driving test.' }, { h: '2. Why failed', t: 'Nervous, mistake at the roundabout.' }, { h: '3. Next', t: 'Extra lessons, calm routine.' }, { h: '4. Second time', t: 'Passed; learned patience.' }],
        model: `I would like to describe a time when I failed my driving test and decided to try again.

I took the test about four years ago, after several months of lessons. I had been driving well in practice, and I felt reasonably confident. But on the day of the test, I was extremely nervous. My hands were cold, and my mind seemed to be moving more slowly than usual. At a large roundabout, I hesitated at the wrong moment and failed to check my mirror, and the examiner immediately wrote something on his paper. I knew then that I had failed.

I was disappointed and slightly embarrassed, especially because a few friends had passed on their first attempt. For a couple of days I considered postponing the second attempt for several months. But then I decided to look at the failure more calmly. I asked the examiner for feedback, and he explained that the problem was not my driving skill but my attention under pressure.

So I booked five additional lessons that focused on roundabouts and on dealing with stress. I also created a calm routine for the morning of the test: a light breakfast, a short walk and a few deep breaths.

The second time, I passed. I was still a little nervous, but I felt prepared, and the examiner was friendly. The experience taught me that failure is not the opposite of success but a part of it, and that the second attempt is usually better because it is informed by the first.`
      },
      part3: [
        { q: 'Why do some people fear failure so much?', a: 'Often because they link failure to their self-worth or fear what others will think. In cultures where mistakes are criticised harshly, this fear is stronger.' },
        { q: 'What can schools do to help students cope with failure?', a: 'Treat mistakes as a normal part of learning, give constructive feedback and show examples of successful people who failed first. A safe atmosphere makes students more willing to try.' },
        { q: 'Is it right to give people a second chance after a serious mistake?', a: 'In most cases, yes, provided there is an honest acknowledgement and an effort to repair the harm. Second chances also benefit society, since they help people to become productive again.' }
      ]
    }
  });

  /* ===== 35 · Ash-Shakur ===== */
  put(35, {
    listening: {
      title: 'Ash-Shakur — the psychology of gratitude', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за структурой лекции о благодарности и числами.',
      context: 'Part 4. Лекция о роли благодарности в благополучии.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good morning. Today we look at gratitude. The Arabic root sh-k-r means recognising a favour. When it is used about people, it means thanks. When it is used about God, as in the name Ash-Shakur, it means that He accepts even a small good deed and rewards it generously.
Lecturer: Psychologists have studied gratitude for more than twenty years. In a well-known type of experiment, participants wrote down a few things they were thankful for each week. After ten weeks, they reported higher satisfaction with life than those who recorded neutral events or complaints. However, the effects were modest, and results are not the same for everyone.
Lecturer: Why might gratitude help? There are three explanations. First, it directs attention to positive aspects of life that are easily missed. Second, it strengthens social bonds, because thanking others encourages them to help again. Third, it reduces comparison with others, since a grateful person focuses on what he or she has.
Lecturer: How can you practise it? I recommend three methods. One: a journal, writing three items every evening. Two: a letter of thanks to someone who helped you, in which you describe exactly what they did and how it affected you. Three: the "pause before a meal", taking a minute to notice the work of many people behind your food.
Lecturer: A note of caution: gratitude should not be used to silence people who face real problems. Being thankful does not mean accepting injustice.
Lecturer: For the next session, write one letter of thanks and bring a short reflection. The deadline is the twenty-eighth of October.`,
      notesTitle: 'Gratitude',
      notes: [
        { pre: 'The root sh-k-r means recognising a', post: '', a: ['favour', 'favor'], e: 'Признание оказанной милости.' },
        { pre: 'The experiment lasted', post: 'weeks.', a: ['10', 'ten'], e: 'Десять недель.' },
        { pre: 'Journal: write', post: 'items every evening.', a: ['3', 'three'], e: 'Три пункта каждый вечер.' },
        { pre: 'Letter of thanks: describe exactly what the person', post: '', a: ['did'], e: 'Описать, что именно человек сделал.' },
        { pre: 'Deadline: 28th of', post: '', a: ['October'], e: '28 октября.' }
      ],
      mc: [
        { q: 'What does the lecturer say about the effects of gratitude?', opts: ['they were modest', 'they were huge', 'they were nonexistent'], a: 'A', e: 'Эффекты были скромными.' },
        { q: 'Which is NOT one of the three explanations?', opts: ['it makes people richer', 'it directs attention to positive aspects', 'it strengthens social bonds'], a: 'A', e: 'Богатство в объяснениях не упомянуто.' },
        { q: 'What caution does the lecturer give?', opts: ['gratitude should not silence people facing real problems', 'gratitude is dangerous', 'gratitude should be private only'], a: 'A', e: 'Благодарность не должна заглушать реальные проблемы.' }
      ]
    },
    writing: {
      title: 'Ash-Shakur — teaching gratitude', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: нужно ли учить благодарности в школах.',
      task2: {
        prompt: 'Some people believe that schools should teach children to be grateful and to express thanks. To what extent do you agree or disagree?',
        keywords: ['gratitude', 'thanks', 'schools', 'children', 'values', 'parents', 'well-being', 'respect', 'teachers', 'habit', 'character', 'appreciate'],
        model: `Whether schools should teach gratitude is a question that touches on the aims of education. I agree to a large extent, since gratitude contributes to well-being and social harmony, but I believe that it should be taught through example and practice rather than through lectures.

The main argument in favour is that gratitude has real benefits. Children who learn to notice and appreciate what others do for them tend to have better relationships, because acknowledgement encourages cooperation. Some studies also suggest that grateful people report greater satisfaction with life, although the effects are modest. In an age when advertising stimulates constant desire for new things, a school that encourages children to value what they already have offers a useful balance.

Furthermore, schools are places where many people contribute to a child\'s progress: teachers, cleaners, canteen staff and fellow students. Simple practices, such as thanking staff, writing thank-you notes or beginning a class by naming something positive, help children to see these contributions and to feel part of a community.

Nevertheless, there are risks. Forced expressions of thanks may produce empty politeness, and gratitude must not become a way of discouraging children from criticising unfair conditions. Parents too have an important role, as the family is where such habits begin. For these reasons, school programmes should be voluntary in tone and based on genuine experience, such as service projects and reflection.

In conclusion, schools should teach gratitude as part of character education, as long as it is encouraged through example, practice and genuine understanding, not through compulsion.`,
        analysis: [
          'Task Response: градуированная позиция («to a large extent») и оговорка о форме обучения.',
          'Аргументация: польза для отношений и благополучия (с осторожным «some studies suggest»), роль школьной общины; риски формального подхода.',
          'Cohesion: Furthermore / Nevertheless / For these reasons; ключевое слово gratitude повторяется смыслово.',
          'Lexical Resource: stimulates, compulsion, acknowledgement, character education; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Ash-Shakur — something I am grateful for', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о том, за что вы благодарны, и обсуждение выражения благодарности.',
      keywords: ['grateful', 'thank', 'appreciate', 'thankful', 'blessing', 'kind', 'help', 'family', 'health', 'opportunity'],
      part1: [
        { q: 'How often do you say thank you?', a: 'Many times a day. It costs nothing, and it makes the other person feel noticed.' },
        { q: 'What are you grateful for?', a: 'Mostly health, family and a job I enjoy. They are easy to forget until something goes wrong.' },
        { q: 'Do you write thank-you notes?', a: 'Sometimes, especially after receiving a special favour. A handwritten note feels more personal than a message.' },
        { q: 'Did your parents teach you to be grateful?', a: 'Yes. We always had to thank the person who cooked, and my mother insisted that I write thank-you letters after birthdays.' }
      ],
      part2: {
        topic: 'Describe something you are very grateful for.', bullets: ['what it is', 'when you received it', 'why it is important to you', 'and explain how it has affected your life.'],
        plan: [{ h: '1. What', t: 'The education my parents provided.' }, { h: '2. When', t: 'Over many years; sacrifices.' }, { h: '3. Importance', t: 'Opened doors; character.' }, { h: '4. Effect', t: 'Career; I try to give back.' }],
        model: `The thing I am most grateful for is the education that my parents gave me, which they provided at some personal sacrifice.

I grew up in a modest family. My father worked as a driver and my mother as a nurse, and money was never abundant. However, from my earliest years they made it clear that learning was a priority. They bought books when they could barely afford them, and they paid for extra English lessons when I was twelve. I remember that my father worked extra shifts in the evening to cover the cost, although I only realised this much later.

This education matters to me for several reasons. First, it opened doors: it gave me the skills and the confidence to enter university and to build a career as a teacher. Second, it shaped my character. My parents taught me by example that effort and honesty are valuable, and that one should respect everyone, whatever their job. And third, it gave me a way to see the world as full of interesting questions.

It has affected my life profoundly. Everything that I have achieved is based on that foundation. I try to express my gratitude in two ways: by taking care of my parents, and by passing on the opportunity to my students, particularly those who face difficulties.

I do not think I will ever be able to thank them enough, but I try to tell them regularly, because appreciation is worth little if it remains unspoken.`
      },
      part3: [
        { q: 'Why do some people find it hard to express gratitude?', a: 'Some feel embarrassed or think that the other person already knows. Others see thanking as a loss of independence. In fact, saying thank you strengthens relationships.' },
        { q: 'Are young people today less grateful than in the past?', a: 'I would not say so generally. They may express it differently, for example through messages and social media. However, a culture of constant consumption can make it harder to appreciate what one has.' },
        { q: 'How can employers show appreciation to employees?', a: 'Through sincere, specific thanks, fair pay and opportunities to develop. Public recognition can help, but personal appreciation from a manager is often the most meaningful.' }
      ]
    }
  });

  /* ===== 36 · Al-'Aliyy ===== */
  put(36, {
    listening: {
      title: "Al-'Aliyy — a mountaineering club", spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных клуба: фамилия, дата, цена, высота.',
      context: 'Part 1. Кандидат записывается в альпинистский клуб для начинающих.', genders: { Secretary: 'f', Alibek: 'm' },
      script: `Secretary: Good afternoon, Summit Mountaineering Club.
Alibek: Good afternoon. I would like to join the beginners\' programme.
Secretary: Of course. Could I have your surname?
Alibek: Zhumabekov. Z-H-U-M-A-B-E-K-O-V.
Secretary: Thank you. The first trip is on the twenty-third of May. We meet at seven o\'clock, not eight, because the walk starts early.
Alibek: Where do we go?
Secretary: To a hill that is one thousand eight hundred metres high. It is not difficult, but you will need good boots.
Alibek: How much is the membership?
Secretary: Sixty pounds a year. The trips cost an additional ten pounds each, which covers transport.
Alibek: Do I need to bring food?
Secretary: Yes, a packed lunch and at least a litre and a half of water. We also recommend a hat and sunscreen, even in cool weather, because the sun is stronger at altitude.
Alibek: Is there a medical check?
Secretary: Not required, but we ask all members to fill in a health form.
Alibek: And what is the aim of the programme?
Secretary: By the end of the year, you should be able to complete a three-thousand-metre peak. We set goals that are ambitious but achievable.
Alibek: That sounds wonderful. Thank you very much.`,
      notesTitle: 'Mountaineering club',
      notes: [
        { pre: 'Surname:', post: '', a: ['Zhumabekov'], e: 'Фамилия — Zhumabekov.' },
        { pre: 'First trip: May', post: '', a: ['23', '23rd', 'twenty-third', 'the 23rd'], e: 'Первая поездка 23 мая.' },
        { pre: 'Meeting time:', post: 'o\'clock', a: ['7', 'seven', '7:00'], e: 'Встреча в семь, а не в восемь.' },
        { pre: 'Height of the hill:', post: 'metres', a: ['1800', '1,800', 'one thousand eight hundred'], e: 'Высота 1800 метров.' },
        { pre: 'Annual membership: £', post: '', a: ['60', 'sixty'], e: 'Шестьдесят фунтов в год.' }
      ],
      mc: [
        { q: 'What is the aim of the programme?', opts: ['to climb a 3,000-metre peak by the end of the year', 'to climb Everest', 'to learn first aid only'], a: 'A', e: 'Взойти на вершину в три тысячи метров.' },
        { q: 'Why is sunscreen recommended?', opts: ['the sun is stronger at altitude', 'it is a club rule', 'the weather is hot'], a: 'A', e: 'На высоте солнце сильнее.' },
        { q: 'What is required from all members?', opts: ['a health form', 'a medical check', 'a climbing certificate'], a: 'A', e: 'Заполнить форму о здоровье.' }
      ]
    },
    writing: {
      title: "Al-'Aliyy — ambitious goals", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение амбициозных и реалистичных целей.',
      task2: {
        prompt: 'Some people believe that young people should set very ambitious goals. Others think it is wiser to set realistic goals. Discuss both views and give your own opinion.',
        keywords: ['goals', 'ambitious', 'realistic', 'young people', 'success', 'motivation', 'failure', 'achievement', 'steps', 'confidence', 'planning', 'dreams'],
        model: `Young people are often advised either to aim high or to be realistic. I believe that the best approach is to combine an ambitious long-term vision with realistic short-term steps.

Supporters of ambitious goals argue that they motivate people to develop skills and take risks. A person who aims for a difficult target, such as becoming a doctor or starting a company, is likely to work harder and to learn more along the way, even if the final goal is not fully achieved. Ambition also gives direction and meaning to daily effort. Many of the achievements that have improved human life began as goals which seemed impossible.

On the other hand, those who recommend realism point to the risks of disappointment. A goal that is too distant or unclear may discourage a person after early difficulties, and repeated failure can damage confidence. Realistic goals, by contrast, offer a sense of progress and success, and they allow people to adjust their plans according to their abilities and circumstances. Moreover, setting extremely high goals without a plan can lead to stress or to poor decisions made under pressure.

In my opinion, the two approaches complement each other. A person can keep a bold long-term aim and divide it into specific milestones that are achievable in months rather than years. Each milestone provides evidence of progress and a chance to correct the plan. This method maintains inspiration while protecting against discouragement.

In conclusion, young people should dream big, but they should also plan carefully, since ambition without realistic steps rarely leads to results.`,
        analysis: [
          'Task Response: обе позиции раскрыты в отдельных абзацах; собственная позиция («сочетать») выражена в начале и подтверждена в конце.',
          'Аргументация: мотивация и смысл vs риск разочарования; решение через «вехи».',
          'Cohesion: On the other hand / Moreover / In my opinion; повтор ключевых слов goals и steps.',
          'Lexical Resource: milestones, discouragement, inspiration, bold; грамматика: сложные придаточные, сравнения.'
        ]
      }
    },
    speaking: {
      title: "Al-'Aliyy — an ambitious goal", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ об амбициозной цели и обсуждение мотивации и целеполагания.',
      keywords: ['goal', 'ambition', 'dream', 'achieve', 'plan', 'step', 'difficult', 'motivated', 'future', 'determined'],
      part1: [
        { q: 'Do you have any goals for the future?', a: 'Yes, both professional and personal. I want to publish a collection of lessons for geography teachers, and I also want to learn a new language.' },
        { q: 'Do you think it is important to have a dream?', a: 'Very. A dream gives direction, especially on days when motivation is low. It reminds me why I am working.' },
        { q: 'How do you motivate yourself?', a: 'I break the goal into small tasks and tick them off. Seeing progress is the best motivation.' },
        { q: 'Who has been your role model?', a: 'My former geography teacher. She showed me what is possible when you combine knowledge with kindness.' }
      ],
      part2: {
        topic: 'Describe an ambitious goal that you would like to achieve.', bullets: ['what the goal is', 'why you want to achieve it', 'what steps you need to take', 'and explain what difficulties you might face.'],
        plan: [{ h: '1. Goal', t: 'Write and publish a geography textbook.' }, { h: '2. Why', t: 'Help students; make lessons interesting.' }, { h: '3. Steps', t: 'Outline, chapters, tests, publisher.' }, { h: '4. Difficulties', t: 'Time, cost, finding a publisher.' }],
        model: `The ambitious goal I would like to describe is to write and publish a geography textbook for secondary schools.

I want to achieve this for several reasons. Firstly, as a teacher I often feel that the existing books are too dry, and that students find them difficult to remember. I would like to create a book with clear maps, real stories and practical tasks, which could make geography more attractive. Secondly, it is a personal challenge: I have always enjoyed writing, and I would like to leave something lasting. Thirdly, I believe it could help many students, especially in rural schools.

To reach the goal, I need to take a number of steps. First, I have started to write a detailed outline of each chapter, and I am collecting materials. Second, I plan to write one chapter every month and to test the material in my own classes, collecting feedback from students. Third, I must find colleagues who can review the text, and finally I have to contact publishers or look for funding.

I expect to face several difficulties. The main one is time, since teaching leaves little room for writing. Another is finding a publisher willing to take a risk with a new author, and the costs of printing maps and illustrations are high. There may also be moments when I doubt whether the work is good enough.

Nevertheless, I am determined. I know that big goals are achieved through small, regular steps, and I try to write for at least thirty minutes every day.`
      },
      part3: [
        { q: 'Why do some people give up on their goals?', a: 'Usually because progress is slower than expected or because they lack support. Setting realistic milestones and finding a mentor can help.' },
        { q: 'Is it better to have one big goal or several small goals?', a: 'A combination is best: one major goal for direction, and several small goals for progress. Small goals keep motivation alive.' },
        { q: 'Do ambitious people make better leaders?', a: 'Not necessarily. Ambition can drive achievement, but leadership also needs empathy and humility. The best leaders pursue goals that benefit others, not only themselves.' }
      ]
    }
  });

  /* ===== 37 · Al-Kabir ===== */
  put(37, {
    listening: {
      title: 'Al-Kabir — keeping problems in perspective', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о перспективе и стрессе; практика на числа и перечисления.',
      context: 'Part 4. Лекция о том, как не раздувать мелкие проблемы.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good morning. Our topic today is perspective. The Arabic word kabir, as in the name Al-Kabir, means large or great, and the phrase Allahu akbar, which means that God is greater than anything we can name, comes from the same root. Many people use this phrase as a reminder that their worries are small by comparison.
Lecturer: Why do small problems feel so large? Psychologists point to three reasons. First, attention: what we focus on appears bigger. Second, stress: when we are tired, our mind exaggerates risks. Third, isolation: when we keep a problem to ourselves, it grows.
Lecturer: There are simple techniques to restore proportion. I will describe four. One: the ten-ten-ten rule. Ask yourself how you will feel about this in ten minutes, ten days and ten years. Two: write the problem on paper. This makes it concrete and finite. Three: talk to a trusted person for five minutes. Four: look at the sky or at a distant landscape for one minute.
Lecturer: Of course, perspective does not mean pretending that problems do not exist. A real difficulty, such as illness or financial trouble, needs practical action. But even then, proportion helps us to respond without panic.
Lecturer: One more point. Perspective also applies to success. Praise can inflate our sense of importance just as criticism can reduce it. Both need to be measured against what is actually true.
Lecturer: For next week, please keep a record of three worries that seemed huge and note what happened. Bring it to class on Tuesday.`,
      notesTitle: 'Perspective',
      notes: [
        { pre: 'The root k-b-r means large or', post: '', a: ['great'], e: 'Корень k-b-r — «большой, великий».' },
        { pre: 'Three reasons: attention, stress and', post: '', a: ['isolation'], e: 'Внимание, стресс и изоляция.' },
        { pre: 'Number of techniques described:', post: '', a: ['4', 'four'], e: 'Четыре приёма.' },
        { pre: 'Talk to a trusted person for', post: 'minutes', a: ['5', 'five'], e: 'Пять минут.' },
        { pre: 'Bring the record on', post: '', a: ['Tuesday'], e: 'Принести во вторник.' }
      ],
      mc: [
        { q: 'What does the ten-ten-ten rule ask?', opts: ['how you will feel in ten minutes, days and years', 'how many people agree with you', 'how much it costs'], a: 'A', e: 'Как вы будете относиться к этому через 10 минут, 10 дней и 10 лет.' },
        { q: 'What does perspective NOT mean?', opts: ['pretending problems do not exist', 'responding without panic', 'seeing proportion'], a: 'A', e: 'Перспектива — не отрицание проблем.' },
        { q: 'What can inflate our sense of importance?', opts: ['praise', 'silence', 'travel'], a: 'A', e: 'Похвала может раздувать чувство собственной важности.' }
      ]
    },
    writing: {
      title: 'Al-Kabir — worries over small problems', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины чрезмерных тревог из-за мелочей и способы сохранить перспективу.',
      task2: {
        prompt: 'Many people become very worried about small problems in daily life. What are the main causes of this, and what can be done to help people keep problems in perspective?',
        keywords: ['worry', 'small problems', 'perspective', 'stress', 'causes', 'social media', 'perfectionism', 'support', 'mindfulness', 'sleep', 'exercise', 'priorities'],
        model: `Many people find that minor difficulties, such as a critical comment or a small delay, can cause disproportionate anxiety. The causes are connected with the pressures of modern life and the way in which our minds work, and the solutions lie in both personal habits and social support.

One cause is stress and tiredness. When people sleep poorly or carry heavy workloads, their minds tend to focus on threats and to exaggerate risks, so small matters seem more serious. A second cause is constant comparison: social media shows only the successes of others, which can make ordinary setbacks feel like personal failure. Perfectionism contributes as well, because those who demand flawless results from themselves treat every error as a disaster. Finally, isolation allows worries to circulate unchecked, whereas talking about a problem often shows that it is smaller than it seemed.

There are several ways to restore perspective. Individuals can adopt simple techniques, such as asking whether a problem will matter in a year, writing it down to give it a clear shape, or taking a short walk to change the point of view. Regular sleep, exercise and quiet time, for example through mindfulness practice, reduce the background stress that magnifies worries. In addition, friends and family can help by listening and by offering a calmer view, while schools and workplaces can teach stress management and discourage perfectionism by treating mistakes as part of learning.

In conclusion, small problems feel large because of stress, comparison, perfectionism and isolation, and they can be reduced by healthy routines, practical techniques and supportive relationships.`,
        analysis: [
          'Task Response: четыре причины и три группы решений; структура зеркальна вопросу.',
          'Аргументация: механизм (усталость → преувеличение угроз), конкретные приёмы.',
          'Cohesion: One cause / A second cause / Finally; затем There are several ways; последовательные смысловые переходы.',
          'Lexical Resource: disproportionate, magnifies, perfectionism, unchecked; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Kabir — putting a problem in perspective', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о том, как вы увидели проблему в перспективе, и обсуждение стресса.',
      keywords: ['problem', 'worry', 'stress', 'perspective', 'calm', 'small', 'realise', 'matter', 'relax', 'advice'],
      part1: [
        { q: 'Do you worry about small things?', a: 'Sometimes, yes. I tend to replay conversations in my head, but I have learned to ask whether the matter will be important next week.' },
        { q: 'What do you do to relax?', a: 'I go for a walk, especially in the evening, and I try to leave my phone at home. It clears my head quickly.' },
        { q: 'Do you talk to others about your worries?', a: 'Yes, with a couple of close friends. Saying it aloud makes the problem look smaller and more manageable.' },
        { q: 'Are you good at planning?', a: 'Fairly good. Planning reduces my anxiety, because I know what I need to do and when.' }
      ],
      part2: {
        topic: 'Describe a time when you were worried about something that turned out to be a small problem.', bullets: ['what the problem was', 'why you were worried', 'what happened', 'and explain what you learned from it.'],
        plan: [{ h: '1. Problem', t: 'A presentation for a conference.' }, { h: '2. Worry', t: 'Afraid of forgetting words, judgement.' }, { h: '3. What happened', t: 'Small mistake; nobody noticed.' }, { h: '4. Lesson', t: 'Audience is kinder; keep perspective.' }],
        model: `I would like to describe a time when I was extremely worried about a presentation at a teachers\' conference, which turned out to be much less frightening than I had imagined.

I had been invited to speak for fifteen minutes about using maps in lessons. It was my first time at such a large event, and about a hundred people were expected. For two weeks, I could think of little else. I imagined that I would forget my words, that the technology would fail and that the experienced teachers would find my ideas too simple. I slept badly and rewrote the slides many times.

On the day, I felt my heart racing as I walked onto the stage. I started well, but in the middle, I lost my place and paused for several seconds. For a moment, I thought it was a disaster. I took a breath, looked at my notes, and continued. Afterwards, several teachers came to say that they had enjoyed the talk and asked for my materials. Nobody mentioned the pause; in fact, one person said that it gave them time to think.

I learned important lessons. First, audiences are usually friendlier than we think, and they care more about useful content than about perfection. Second, my worry had been out of proportion to the real risk. And third, when I feel anxious before an event now, I ask myself what the worst realistic outcome would be, and I usually find that I could handle it.`
      },
      part3: [
        { q: 'Why do people worry more about the future than the present?', a: 'Because the future is uncertain, and the mind tends to fill the gaps with negative possibilities. Concentrating on what can be done now reduces this anxiety.' },
        { q: 'Is a certain amount of worry useful?', a: 'Yes, it can alert us to real risks and motivate preparation. The problem is excessive worry, which paralyses rather than helps.' },
        { q: 'How can older people help younger people to keep things in perspective?', a: 'By sharing their experience and showing that many difficulties pass. Hearing how others survived similar problems is very reassuring.' }
      ]
    }
  });

  /* ===== 38 · Al-Hafiz ===== */
  put(38, {
    listening: {
      title: 'Al-Hafiz — a visit to the national archive', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных о посещении архива: имя, дата, часы, правила.',
      context: 'Part 1. Исследователь записывается в читальный зал государственного архива.', genders: { Clerk: 'f', Samat: 'm' },
      script: `Clerk: National Archive, good morning.
Samat: Good morning. I would like to arrange a visit to the reading room. I am researching old family documents.
Clerk: Certainly. May I have your name?
Samat: Samat Dosmailov. D-O-S-M-A-I-L-O-V.
Clerk: And your reader ticket number?
Samat: I do not have one yet.
Clerk: Then you will need to register. Please bring your passport. The registration takes about ten minutes.
Samat: What are the opening hours?
Clerk: Monday to Friday, from nine until five. On Saturday, the reading room is open until one.
Samat: I would like to come on Saturday the sixth.
Clerk: The sixth is fine. Let me check. Oh, sorry, the archive is closed on the sixth for inventory. Could you come on the thirteenth?
Samat: The thirteenth is fine.
Clerk: Please note the rules. No pens in the reading room, only pencils, because ink can damage old paper. Bags and coats must be left in the lockers, and you will wear cotton gloves when handling fragile documents.
Samat: Can I take photographs?
Clerk: Yes, without flash, and there is a fee of five pounds for a day permit.
Samat: Thank you. I understand that the documents are very carefully preserved.
Clerk: Yes, they are kept at a constant temperature of eighteen degrees.`,
      notesTitle: 'Archive visit',
      notes: [
        { pre: 'Surname:', post: '', a: ['Dosmailov'], e: 'Фамилия — Dosmailov.' },
        { pre: 'Required document for registration:', post: '', a: ['passport'], e: 'Нужен паспорт.' },
        { pre: 'Saturday closing time:', post: '', a: ['1', 'one', '13:00', '1 pm', '1pm'], e: 'В субботу до часа.' },
        { pre: 'Visit date: Saturday the', post: '', a: ['13', '13th', 'thirteenth', 'the 13th'], e: '6-е закрыто на инвентаризацию.' },
        { pre: 'Only', post: 'may be used in the reading room.', a: ['pencils', 'pencil'], e: 'Только карандаши, чернила портят бумагу.' }
      ],
      mc: [
        { q: 'What are readers asked to wear when handling fragile documents?', opts: ['cotton gloves', 'masks', 'aprons'], a: 'A', e: 'Хлопковые перчатки.' },
        { q: 'How much is the day permit for photography?', opts: ['£5', '£15', '£50'], a: 'A', e: 'Пять фунтов.' },
        { q: 'At what temperature are the documents kept?', opts: ['18 degrees', '8 degrees', '28 degrees'], a: 'A', e: 'Восемнадцать градусов.' }
      ]
    },
    writing: {
      title: 'Al-Hafiz — preserving heritage', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о сохранении культурного наследия и языков.',
      task2: {
        prompt: 'Some people believe that it is the government\'s responsibility to preserve traditional culture and languages. Others think that individuals and communities should take the main responsibility. To what extent do you agree or disagree?',
        keywords: ['culture', 'traditional', 'languages', 'heritage', 'preserve', 'government', 'communities', 'museums', 'education', 'identity', 'funding', 'young people'],
        model: `The preservation of traditional culture and languages is vital for identity and diversity, and there is a debate about who should be responsible. In my opinion, governments should provide the framework and resources, but communities and individuals have to carry out the daily work of keeping traditions alive.

The case for government responsibility rests on resources and authority. Museums, archives and the restoration of historic buildings require funding that private individuals rarely possess. Governments can also protect heritage through law, by safeguarding historic sites and by supporting minority languages in schools and public media. Without such measures, economic pressure often leads to the disappearance of crafts and languages.

However, tradition cannot survive solely through official programmes. A language lives only if people speak it at home, and a craft lasts only if someone is willing to learn it. Communities pass on stories, music and customs in ways that no institution can replicate, and heritage that is imposed from above may feel artificial to young people. In addition, individuals can use technology to record and share traditions, for example by creating online archives of songs and recordings of elders.

I therefore believe in a partnership. Governments should fund education, protect sites and provide platforms, while families and communities should practise and teach their traditions, and young people should be encouraged to see them as living rather than old-fashioned. When people take pride in their heritage, official support becomes more effective.

In conclusion, preserving culture is a shared responsibility in which governments supply support and structure, and communities and individuals supply the living practice that gives heritage its meaning.`,
        analysis: [
          'Task Response: градуированная позиция («shared responsibility») и объяснение ролей каждой стороны.',
          'Аргументация: ресурсы и закон vs живая практика; пример с цифровыми архивами.',
          'Cohesion: However / In addition / I therefore believe; ключевое слово heritage повторяется смыслово.',
          'Lexical Resource: safeguard, replicate, imposed from above, living practice; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hafiz — something I carefully protect', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание предмета, который вы бережёте, и обсуждение сохранения памяти и наследия.',
      keywords: ['keep', 'protect', 'precious', 'old', 'family', 'memory', 'careful', 'valuable', 'preserve', 'heirloom'],
      part1: [
        { q: 'Do you keep old things?', a: 'Yes, I keep letters, photographs and a few books. They are small, but they carry memories that I do not want to lose.' },
        { q: 'Are you good at keeping things in order?', a: 'Reasonably. I tidy my documents every month and make backups of important files, which has saved me more than once.' },
        { q: 'Do you take photographs to remember events?', a: 'Often, but I try not to spend the whole event behind the camera. A few photographs are enough.' },
        { q: 'Do you have a good memory?', a: 'Average, I think. I remember faces and places better than names and dates, so I use notes and reminders.' }
      ],
      part2: {
        topic: 'Describe an object that you have kept for a long time and take care of.', bullets: ['what it is', 'how you got it', 'why you keep it', 'and explain how you look after it.'],
        plan: [{ h: '1. What', t: 'My grandfather\'s old pocket watch.' }, { h: '2. How got', t: 'Given to me when I graduated.' }, { h: '3. Why', t: 'Memory, symbol of time and care.' }, { h: '4. How look after', t: 'Wrapped, case, serviced yearly.' }],
        model: `The object I would like to describe is an old pocket watch that belonged to my grandfather, which I have kept for about ten years.

It is a silver watch with a white face and thin black numbers, and it is slightly scratched on the back. My grandfather received it as a gift from his own father when he completed his studies, and he wore it every day for more than forty years. He gave it to me when I graduated from university. I remember that he put it into my hand and said that it did not need to keep perfect time, but that I should remember to use my time well.

I keep it for several reasons. Firstly, it is a link with a person I loved and admired. Whenever I hold it, I recall his calm voice and the way he used to check the time with a small, careful gesture. Secondly, it has a symbolic meaning for me: it reminds me that time is limited, and that I should not waste it. Finally, it is simply a beautiful object.

I look after it very carefully. It is kept in a small wooden case lined with soft cloth, and I do not carry it daily, only on special occasions. Once a year, I take it to a watchmaker who cleans the mechanism, and I wind it gently every few days so that it continues to work.

I hope to pass it to my own children one day, together with the same advice.`
      },
      part3: [
        { q: 'Why do people keep objects from the past?', a: 'Because objects hold memories and connect us with other people and eras. They make the past tangible, which stories alone cannot do.' },
        { q: 'Is digital storage a good way to preserve memories?', a: 'It is convenient and can last long if properly backed up. However, formats and devices change, so files need to be copied regularly. Printing a few key photographs is still a wise precaution.' },
        { q: 'Should museums be free?', a: 'I think free access is ideal because it allows everyone to learn about their heritage. If this is not possible, low prices or free days for students can help.' }
      ]
    }
  });

  /* ===== 39 · Al-Muqit ===== */
  put(39, {
    listening: {
      title: 'Al-Muqit — healthy eating at school', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за порядком объявлений о школьном питании.',
      context: 'Part 2. Диетолог рассказывает родителям о меню школьной столовой.', genders: { Nutritionist: 'f' },
      script: `Nutritionist: Good evening, parents, and thank you for coming. I am Aigul, the school nutritionist, and I would like to explain our new canteen menu.
Nutritionist: From the first of September, every lunch will include a portion of vegetables, a source of protein and a portion of grain. Sugary drinks are no longer sold. Instead, we offer water, milk or unsweetened tea.
Nutritionist: The price of a full lunch is two pounds fifty, not three, as was announced earlier. Children from low-income families receive lunch for free, and no one will know who they are, as everyone uses the same card.
Nutritionist: Breakfast is also available from half past seven. The most popular option is porridge with fruit, and we are introducing a choice of eggs twice a week.
Nutritionist: Why do we pay so much attention to this? Because children need regular, balanced food to concentrate and to grow. Studies suggest that pupils who eat breakfast tend to perform better in the morning lessons, although other factors, of course, also matter.
Nutritionist: A few tips for home. Eat together as a family whenever possible. Let children help with cooking, since they are more willing to try food they have prepared. Keep fruit visible on the table. And avoid using sweets as a reward.
Nutritionist: One last point. Please inform us in writing about allergies by the twentieth of August. We take this very seriously, and we mark every dish with a clear label.
Nutritionist: Are there any questions?`,
      notesTitle: 'School canteen',
      notes: [
        { pre: 'New menu starts on', post: 'September', a: ['1', '1st', 'first', 'the 1st'], e: 'С первого сентября.' },
        { pre: 'Price of a full lunch: £', post: '', a: ['2.50', '2.5', 'two fifty', 'two pounds fifty'], e: 'Два фунта пятьдесят, а не три.' },
        { pre: 'Breakfast from', post: '', a: ['7:30', '7.30', 'half past seven', 'seven thirty'], e: 'Завтрак с 7:30.' },
        { pre: 'Eggs offered', post: 'a week.', a: ['twice', '2 times', 'two times'], e: 'Яйца два раза в неделю.' },
        { pre: 'Allergy information by August', post: '', a: ['20', '20th', 'twentieth', 'the 20th'], e: 'Сообщить об аллергиях до 20 августа.' }
      ],
      mc: [
        { q: 'What is no longer sold in the canteen?', opts: ['sugary drinks', 'milk', 'tea'], a: 'A', e: 'Сладкие напитки больше не продаются.' },
        { q: 'How do children from low-income families receive lunch?', opts: ['for free, with the same card as everyone', 'with a special voucher', 'at half price'], a: 'A', e: 'Бесплатно, по общей карте — никто не узнает.' },
        { q: 'What tip does the speaker give?', opts: ['avoid using sweets as a reward', 'give children money for snacks', 'skip breakfast'], a: 'A', e: 'Не использовать сладкое как награду.' }
      ]
    },
    writing: {
      title: 'Al-Muqit — healthy eating policy', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: роль государства в вопросах питания.',
      task2: {
        prompt: 'Some people believe that governments should impose higher taxes on unhealthy food in order to improve public health. To what extent do you agree or disagree?',
        keywords: ['taxes', 'unhealthy food', 'public health', 'obesity', 'governments', 'prices', 'education', 'diet', 'sugar', 'choice', 'income', 'healthcare'],
        model: `Rising levels of obesity and diet-related disease have led some people to propose higher taxes on unhealthy food. I agree to a limited extent: taxes can help, but they are effective only as part of a broader strategy that includes education and access to affordable healthy food.

The argument in favour is based on prices. People respond to the cost of what they buy, and higher prices for sugary drinks or highly processed snacks can reduce consumption. Evidence from several countries suggests that taxes on sugary drinks have decreased sales and encouraged manufacturers to reduce the sugar content of their products. The revenue can also be used to finance healthcare, school meals and campaigns, which benefits the whole population. Since unhealthy diets impose large costs on public health systems, it can be argued that those who profit from them should contribute.

However, there are valid objections. Such taxes affect poorer households most strongly, since they spend a larger share of income on food, and healthy products are often more expensive. If no alternative is available, people simply pay more for the same food. Taxes may also seem to restrict personal choice and may not change habits that are rooted in culture and convenience.

Therefore, taxation should be accompanied by other measures: subsidies for fruit and vegetables, clear labelling, nutrition education in schools and restrictions on advertising to children. A package of this kind addresses both price and knowledge.

In conclusion, higher taxes on unhealthy food can contribute to better public health, but they will work fairly and effectively only when combined with access to healthy alternatives and education.`,
        analysis: [
          'Task Response: градуированная позиция («to a limited extent») и обоснование ограничений.',
          'Аргументация: цена как рычаг, доходы на здравоохранение; возражения о неравенстве и свободе выбора; пакет мер.',
          'Cohesion: However / Therefore; ключевые слова taxes, healthy, education связывают текст.',
          'Lexical Resource: processed, revenue, subsidies, labelling; хеджирование (can, may, suggests).'
        ]
      }
    },
    speaking: {
      title: 'Al-Muqit — a healthy meal for others', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о приготовлении еды для других и обсуждение питания.',
      keywords: ['food', 'cook', 'meal', 'healthy', 'delicious', 'ingredients', 'family', 'eat', 'prepare', 'share'],
      part1: [
        { q: 'Do you like cooking?', a: 'Yes, especially on weekends when I have time. Cooking is relaxing, and it is a way of caring for my family.' },
        { q: 'What is your favourite food?', a: 'Traditional dishes like beshbarmak, but also fresh salads. I think a varied diet is the key.' },
        { q: 'Do you eat breakfast every day?', a: 'Almost always. Porridge or eggs and tea keep me going until lunchtime.' },
        { q: 'Do you think people eat healthily today?', a: 'Many do not, mainly because of fast food and busy schedules. Cooking at home is the simplest solution.' }
      ],
      part2: {
        topic: 'Describe a meal that you cooked for other people.', bullets: ['who you cooked for', 'what you prepared', 'how you prepared it', 'and explain how the people reacted.'],
        plan: [{ h: '1. Who', t: 'Friends, birthday dinner.' }, { h: '2. What', t: 'Soup, baked fish, salad, apple pie.' }, { h: '3. How', t: 'Planned menu, shopping, prepared in advance.' }, { h: '4. Reaction', t: 'Enjoyed it; asked for recipes.' }],
        model: `I would like to describe a dinner that I cooked for four close friends, to celebrate my birthday last year.

I wanted to prepare something special and healthy, so I planned the menu a week in advance. We started with a light vegetable soup, followed by baked fish with potatoes and herbs, and a large fresh salad with olive oil and lemon. For dessert, I made a simple apple pie, using less sugar than the traditional recipe.

The preparation took most of the day. In the morning, I went to the market and chose fresh ingredients, including fish that the seller recommended. In the afternoon, I made the soup and the pie, which allowed me to spend the evening with my friends rather than in the kitchen. I admit that I was a little nervous, because I had never cooked fish for guests, and I checked the recipe three times.

The reaction was very positive. My friends said that the fish was perfectly cooked, and two of them asked for the recipe of the soup. We sat at the table for almost three hours, talking and laughing, and I felt a deep satisfaction. There is something special about feeding people you care about: it is a practical way to show affection.

I also learned that healthy food does not need to be complicated. Fresh ingredients and a little planning are enough to make a meal that is both nourishing and enjoyable. I now try to cook for friends and family at least once a month.`
      },
      part3: [
        { q: 'Why do many people choose fast food?', a: 'It is quick, cheap and widely available, and busy people have little time to cook. Advertising and habit also play a role. Preparing simple meals in advance can reduce the dependence.' },
        { q: 'Should schools teach children to cook?', a: 'Yes, it is a practical life skill. Children who learn to cook are more likely to eat healthily and to value food. It can also be a pleasant group activity.' },
        { q: 'How important is it to eat together as a family?', a: 'Quite important. Shared meals encourage conversation, and children generally eat better in such settings. It is also a chance to pass on family traditions.' }
      ]
    }
  });

  /* ===== 40 · Al-Hasib ===== */
  put(40, {
    listening: {
      title: 'Al-Hasib — tracking study time', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за результатами самоучёта времени и числами.',
      context: 'Part 3. Консультант и студенты обсуждают учёт учебного времени.', genders: { Advisor: 'f', Dana: 'f', Yerzhan: 'm' },
      script: `Advisor: Let us look at the results of your time diaries. Dana, how many hours did you study last week?
Dana: I thought about thirty, but when I added them up, it was only twenty-two.
Advisor: That is common. People usually overestimate. Yerzhan?
Yerzhan: Twenty-six hours. But I discovered that I lost nearly seven hours to my phone.
Advisor: Seven? That is a valuable discovery. What do you plan to do?
Yerzhan: I will put the phone in another room while I study, and use a timer for forty-five-minute sessions.
Advisor: Good. Dana?
Dana: I realised that I study best in the morning, but I have been planning the hardest subjects for the evening. I will change my schedule.
Advisor: Excellent. Keeping an honest record is not about blame; it is about information. Each week, I recommend a five-minute review: what worked, what did not, and what to change.
Yerzhan: Should we record everything?
Advisor: Not necessarily. Choose three categories: study, rest and wasted time. Anything more complicated will not be sustained.
Dana: How long should we keep the diary?
Advisor: For four weeks. After that, most people know their patterns.
Yerzhan: When is our next meeting?
Advisor: On Wednesday the ninth, at two o\'clock. It was Tuesday, but the room changed.
Dana: Thank you. This was very helpful.`,
      notesTitle: 'Time diaries',
      notes: [
        { pre: 'Dana\'s actual study hours:', post: '', a: ['22', 'twenty-two', 'twenty two'], e: 'Ожидала 30, оказалось 22.' },
        { pre: 'Yerzhan\'s study hours:', post: '', a: ['26', 'twenty-six', 'twenty six'], e: 'Двадцать шесть часов.' },
        { pre: 'Hours lost to the phone:', post: '', a: ['7', 'seven'], e: 'Почти семь часов потеряно на телефон.' },
        { pre: 'Diary should be kept for', post: 'weeks.', a: ['4', 'four'], e: 'Четыре недели.' },
        { pre: 'Next meeting: Wednesday the', post: '', a: ['9', '9th', 'ninth', 'the 9th'], e: 'Среда, 9-е, в два часа.' }
      ],
      mc: [
        { q: 'What does Dana realise?', opts: ['she studies best in the morning', 'she studies best at night', 'she studies too much'], a: 'A', e: 'Лучше всего учится утром.' },
        { q: 'How many categories does the advisor recommend?', opts: ['three', 'five', 'ten'], a: 'A', e: 'Три категории: учёба, отдых, потерянное время.' },
        { q: 'What is the purpose of the diary, according to the advisor?', opts: ['information, not blame', 'punishment', 'comparison with others'], a: 'A', e: 'Информация, а не обвинение.' }
      ]
    },
    writing: {
      title: 'Al-Hasib — keeping track of time', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка привычки вести учёт времени: плюсы, минусы и вывод.',
      task2: {
        prompt: 'Some people keep a detailed record of how they spend their time every day. Do the advantages of this habit outweigh the disadvantages?',
        keywords: ['time', 'record', 'track', 'habit', 'productivity', 'awareness', 'stress', 'goals', 'planning', 'efficiency', 'balance', 'review'],
        model: `Keeping a detailed record of how time is spent has become popular among students and professionals. On balance, I believe that the advantages outweigh the disadvantages, provided that the record is kept simple and used as a tool, not as a source of pressure.

The principal benefit is awareness. Most people have a distorted idea of where their hours go: they overestimate the time spent on productive work and underestimate the time lost to distractions. A written record exposes these gaps, and it allows people to make changes based on evidence rather than guesses. Tracking also helps with planning, because a person who knows how long tasks really take can set realistic schedules and avoid the stress of constant delays. In addition, the regular review of one\'s own conduct encourages responsibility and a sense of progress.

However, there are drawbacks. Detailed tracking can be time-consuming, and the effort of recording every activity may itself reduce productivity. Some people become obsessed with efficiency and feel guilty about rest, which can lead to anxiety and spoil activities that should be enjoyed. Moreover, a record only shows what happened; it does not decide what is important, and people who focus on numbers may neglect relationships and creativity.

These problems can be avoided by keeping the system simple: for example, three categories such as work, rest and wasted time, recorded for a limited period such as a month, followed by a brief weekly review. This provides insight without turning life into a spreadsheet.

In conclusion, tracking time is a valuable habit when it is simple and temporary, as it provides awareness and control without excessive pressure.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итоговой оценки — она дана и подкреплена условием («simple and temporary»).',
          'Баланс: плюсы объяснены механизмом (искажённое восприятие времени), минусы — конкретными рисками.',
          'Cohesion: However / Moreover / These problems can be avoided; ключевые слова record и review.',
          'Lexical Resource: distorted, obsessed, insight, time-consuming; грамматика: пассив, придаточные уступки.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hasib — reviewing my progress', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о подведении итогов и обсуждение самоанализа и ответственности.',
      keywords: ['review', 'progress', 'record', 'reflect', 'honest', 'improve', 'goals', 'plan', 'results', 'responsible'],
      part1: [
        { q: 'Do you keep a diary or planner?', a: 'I keep a planner, mostly to organise my week. I write down three priorities each morning and look at them in the evening.' },
        { q: 'Do you often think about how you spend your time?', a: 'Yes, especially on Sundays. A short review helps me to correct my plans for the coming week.' },
        { q: 'Are you good at managing money?', a: 'Quite good. I write down my main expenses, and I check them at the end of each month.' },
        { q: 'Do you check your work before you hand it in?', a: 'Always. Even a five-minute check often finds mistakes that I would otherwise miss.' }
      ],
      part2: {
        topic: 'Describe a time when you reviewed your progress and made changes.', bullets: ['what you reviewed', 'what you discovered', 'what changes you made', 'and explain what the result was.'],
        plan: [{ h: '1. What', t: 'My study of English over six months.' }, { h: '2. Discovered', t: 'Lots of reading, little speaking.' }, { h: '3. Changes', t: 'Daily recorded talks; speaking partner.' }, { h: '4. Result', t: 'Fluency improved; confidence.' }],
        model: `I would like to describe a time when I reviewed my progress in learning English and then changed my method.

At the beginning of last year, I decided to improve my speaking, and I studied regularly for six months. In June, I realised that I had no clear idea whether I had improved, so I decided to look at the record of my study. I had been keeping a simple table with the number of minutes I studied each day and the activities I did.

What I discovered surprised me. In total, I had studied for more than ninety hours, which was a reasonable amount, but about eighty per cent of that time had been spent on reading and vocabulary. I had practised speaking for less than ten hours. In other words, I had been doing what was comfortable rather than what I needed.

I made several changes. I started to record a two-minute talk every evening and to listen to it the next morning. I found a speaking partner online and we met twice a week. And I reduced reading time, using the saved hours for speaking practice. Every Sunday, I reviewed the week for ten minutes.

The result was clear. After two months, my speech became noticeably smoother, I paused less and I began to feel more confident in conversation. A colleague even commented on my progress.

The experience taught me that honest reviewing is essential. Effort alone is not enough; one has to check whether the effort is going in the right direction.`
      },
      part3: [
        { q: 'Why is it useful to reflect on your own performance?', a: 'Reflection helps people to see patterns that they do not notice in the moment. It turns experience into learning and prevents the repetition of mistakes.' },
        { q: 'Should schools teach students to evaluate their own work?', a: 'Yes. Self-assessment develops independence and responsibility, and students who can judge their own work depend less on others.' },
        { q: 'Do you think people are honest when they evaluate themselves?', a: 'Not always. Some are too critical and others too lenient. Using clear criteria and asking for feedback from others improves accuracy.' }
      ]
    }
  });
})();

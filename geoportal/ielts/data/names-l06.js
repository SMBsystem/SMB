// Имена 51–60: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 51 · Al-Haqq ===== */
  put(51, {
    listening: {
      title: 'Al-Haqq — a fact-checking project', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Различать позиции и детали проекта по проверке фактов.',
      context: 'Part 3. Студенты и преподаватель обсуждают проект по проверке фактов в новостях.', genders: { Tutor: 'f', Askar: 'm', Moldir: 'f' },
      script: `Tutor: Let us discuss your fact-checking project. Askar, what claims are you investigating?
Askar: Six claims from social media about health and food. For example, one post says that drinking hot water cures colds.
Tutor: Moldir?
Moldir: I chose political claims, such as statistics about unemployment. I think they are harder to check, because the numbers are often taken out of context.
Tutor: A good observation. How will you decide whether a claim is true?
Askar: First, find the original source. Second, look for at least two independent confirmations. Third, ask an expert.
Tutor: And what ratings will you use?
Moldir: Five categories: true, mostly true, partly true, misleading and false.
Tutor: Good. Remember that the aim is not to embarrass anyone; it is to give people the truth in a clear way, with evidence.
Askar: How long should each entry be?
Tutor: About three hundred words, with links to the sources.
Moldir: When is the deadline?
Tutor: The twenty-second of May. It was the twentieth, but there is a public holiday.
Askar: And presentations?
Tutor: Each pair has ten minutes, on the twenty-sixth. Thank you both.`,
      notesTitle: 'Fact-checking',
      notes: [
        { pre: 'Askar\'s number of claims:', post: '', a: ['6', 'six'], e: 'Шесть утверждений.' },
        { pre: 'Moldir\'s claims are about', post: '', a: ['political', 'politics'], e: 'Политические утверждения.' },
        { pre: 'Number of rating categories:', post: '', a: ['5', 'five'], e: 'Пять категорий оценки.' },
        { pre: 'Length of each entry:', post: 'words', a: ['300', 'three hundred'], e: 'Около 300 слов.' },
        { pre: 'Deadline: May', post: '', a: ['22', '22nd', 'twenty-second', 'the 22nd'], e: 'Срок сдвинут с 20-го на 22-е.' }
      ],
      mc: [
        { q: 'What is the first step in checking a claim?', opts: ['find the original source', 'ask friends', 'search for photographs'], a: 'A', e: 'Сначала найти первоисточник.' },
        { q: 'What does the tutor say is the aim of the project?', opts: ['to give people the truth with evidence', 'to embarrass authors', 'to collect many claims'], a: 'A', e: 'Дать людям правду с доказательствами.' },
        { q: 'How long is each presentation?', opts: ['ten minutes', 'five minutes', 'twenty minutes'], a: 'A', e: 'Десять минут на пару.' }
      ]
    },
    writing: {
      title: 'Al-Haqq — truth in advertising', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о честности рекламы и роли государства.',
      task2: {
        prompt: 'Some people think that governments should ban advertisements that mislead consumers. To what extent do you agree or disagree?',
        keywords: ['advertising', 'misleading', 'consumers', 'governments', 'ban', 'truth', 'regulation', 'products', 'trust', 'companies', 'children', 'claims'],
        model: `Advertising influences what people buy and how they see the world, and misleading advertisements can cause real harm. I agree that governments should prohibit them, but I believe that effective regulation needs clear definitions and sensible enforcement.

The main argument for prohibition is protection of consumers. When an advertisement makes false claims about a product, such as exaggerating the health benefits of a food or hiding the real cost of a loan, people may spend money, damage their health or suffer financial loss because of information that they could not easily check. Ordinary consumers cannot test every claim, so they must be able to rely on a minimum standard of honesty. Misleading advertising also harms honest companies, since firms that tell the truth are at a disadvantage when competitors exaggerate.

Moreover, trust is an important public asset. If people begin to believe that all advertisements are lies, they will ignore even accurate information, and markets work less efficiently. Special care is needed for groups who are especially vulnerable, such as children and elderly people.

However, regulation must be carefully designed. The line between persuasion and deception is not always clear, since advertisements are expected to be attractive and use emotion and humour. Governments should therefore focus on factual claims that can be verified, require evidence from companies and impose penalties such as fines and corrective statements for violations. Independent bodies with expertise can handle complaints more quickly than courts.

In conclusion, governments should ban advertisements that are genuinely misleading, since honesty protects consumers and fair competition, as long as the rules are precise and enforced by competent authorities.`,
        analysis: [
          'Task Response: позиция («agree, but with clear definitions») выражена; обосновано, зачем и как регулировать.',
          'Аргументация: защита потребителей, доверие как общественное благо; оговорка о границе убеждения и обмана.',
          'Cohesion: Moreover / However / In conclusion; ключевое понятие trust связывает абзацы.',
          'Lexical Resource: prohibit, deception, verified, corrective statements; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Haqq — telling the truth when it was difficult', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о ситуации, где было трудно сказать правду, и обсуждение честности.',
      keywords: ['truth', 'honest', 'lie', 'difficult', 'tell', 'admit', 'brave', 'consequences', 'trust', 'sincere'],
      part1: [
        { q: 'Is honesty important to you?', a: 'Very. I think trust is impossible without it. I prefer an uncomfortable truth to a comfortable lie.' },
        { q: 'Do you think it is ever acceptable to tell a white lie?', a: 'In very small matters, such as praising a gift, perhaps. But I try to find something true to say instead.' },
        { q: 'How do you react when someone is not honest with you?', a: 'I feel disappointed but try to ask why. Sometimes people are afraid, and understanding the reason helps.' },
        { q: 'Were you taught to tell the truth as a child?', a: 'Yes. My parents said that a mistake could be forgiven but a lie would make it worse.' }
      ],
      part2: {
        topic: 'Describe a time when you told the truth even though it was difficult.', bullets: ['what the situation was', 'what you said', 'why it was difficult', 'and explain what happened afterwards.'],
        plan: [{ h: '1. Situation', t: 'Broke a colleague\'s laptop screen.' }, { h: '2. Said', t: 'Told her directly, offered to pay.' }, { h: '3. Difficult', t: 'Fear of anger and cost.' }, { h: '4. Afterwards', t: 'She accepted; trust grew.' }],
        model: `I would like to describe a time when I told the truth about a mistake, although it was difficult.

A couple of years ago, I borrowed a colleague\'s laptop to show a presentation to the class. She had kindly lent it to me, and I promised to take good care of it. While I was packing up, I placed a heavy folder on top of it, and later, when I took it out of my bag, I saw a crack across the screen. I felt a cold shock, because I realised the laptop was new and expensive.

At first, I considered saying nothing and hoping that she would think it had happened elsewhere. I knew that nobody had seen me. But I also knew that it would be dishonest, and that she might blame someone else. So the next morning, I went to her and said directly that I had cracked the screen by placing a folder on it, that I was very sorry and that I wanted to pay for the repair.

It was difficult for several reasons. I was afraid that she would be angry, I was worried about the cost and I was embarrassed. My voice was not steady when I spoke.

Fortunately, she responded with calm. She thanked me for telling her at once, and she said that most people would have hidden it. We took the laptop to a repair shop, and I paid for the screen. Since then she has trusted me even more, and I learned that honesty is difficult at the moment but easier than living with the lie.`
      },
      part3: [
        { q: 'Why do people lie?', a: 'Often out of fear of punishment or embarrassment, and sometimes to gain an advantage. Small lies can become a habit, so it is useful to deal with the fear behind them.' },
        { q: 'Should children be punished for lying?', a: 'I think they should be guided, not just punished. If they are scared of consequences, they will lie more. A calm response to a confession teaches that honesty is safe.' },
        { q: 'Is it important for politicians to tell the truth?', a: 'Extremely. Citizens depend on accurate information to make decisions. When politicians lie, trust in institutions declines, which has serious long-term effects.' }
      ]
    }
  });

  /* ===== 52 · Al-Wakil ===== */
  put(52, {
    listening: {
      title: 'Al-Wakil — an appointment with a solicitor', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных консультации: фамилия, время, документы.',
      context: 'Part 1. Клиент записывается на консультацию к юристу по доверенности.', genders: { Assistant: 'f', Nurbol: 'm' },
      script: `Assistant: Good morning, Bright Law Office.
Nurbol: Good morning. I would like to make an appointment. I need advice about giving someone authority to act for me while I am abroad.
Assistant: That is called a power of attorney. May I have your name?
Nurbol: Nurbol Seitkali. S-E-I-T-K-A-L-I.
Assistant: Thank you. And a contact number?
Nurbol: Zero-seven-seven, six-one-eight, three-four-nine. No, three-nine-four.
Assistant: Thank you. The solicitor is free on Monday at eleven or on Wednesday at two.
Nurbol: Wednesday is better, please.
Assistant: Wednesday at two, then. The consultation lasts forty minutes and costs fifty pounds. Please bring your passport and the name and address of the person you wish to appoint.
Nurbol: It will be my brother. He lives in the same city.
Assistant: Good. The solicitor will explain the limits of the authority, for example, whether he can sell property or only pay bills.
Nurbol: I would like him to handle only bills and some documents.
Assistant: That is sensible. A limited authority is safer. The office is on the third floor, Room thirty-one.
Nurbol: Thank you very much.
Assistant: You are welcome. We will send a reminder the day before.`,
      notesTitle: 'Legal consultation',
      notes: [
        { pre: 'Surname:', post: '', a: ['Seitkali'], e: 'Фамилия — Seitkali.' },
        { pre: 'Telephone: 077 618 3', post: '', a: ['94', 'nine four'], e: 'Сначала 349, затем поправка — 394.' },
        { pre: 'Appointment: Wednesday at', post: '', a: ['2', 'two', '2:00', '14:00', '2 pm', '2pm'], e: 'Среда в два часа.' },
        { pre: 'Fee: £', post: '', a: ['50', 'fifty'], e: 'Пятьдесят фунтов.' },
        { pre: 'Room number:', post: '', a: ['31', 'thirty-one', 'thirty one'], e: 'Кабинет 31, третий этаж.' }
      ],
      mc: [
        { q: 'Who will Nurbol appoint?', opts: ['his brother', 'his friend', 'his employer'], a: 'A', e: 'Брата.' },
        { q: 'What will the authority cover?', opts: ['bills and some documents', 'selling a house', 'everything he owns'], a: 'A', e: 'Только счета и некоторые документы.' },
        { q: 'What should Nurbol bring?', opts: ['his passport and details of the person', 'a bank statement only', 'a letter from his brother'], a: 'A', e: 'Паспорт, имя и адрес доверенного лица.' }
      ]
    },
    writing: {
      title: 'Al-Wakil — delegation at work', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка делегирования полномочий в управлении.',
      task2: {
        prompt: 'In many organisations, managers give important responsibilities to junior employees instead of doing them personally. Do the advantages of this approach outweigh the disadvantages?',
        keywords: ['managers', 'delegate', 'responsibility', 'employees', 'trust', 'skills', 'workload', 'mistakes', 'motivation', 'supervision', 'training', 'organisation'],
        model: `Delegation, the practice of assigning important tasks to junior staff, is widely discussed in management. I believe that its advantages outweigh its disadvantages, provided that it is accompanied by adequate support and clear expectations.

The principal benefit is development. Employees who are given significant responsibilities learn faster than those who only perform routine duties, and the experience prepares them for future leadership. Delegation also increases motivation, since being trusted raises confidence and commitment. For the organisation, it frees managers from routine work, so that they can concentrate on strategy and complex decisions, and it speeds up processes by reducing the number of tasks that depend on a single person.

Nevertheless, there are risks. Inexperienced employees may make mistakes with costly consequences, particularly if the task is critical. Some managers find it hard to accept results that differ from their own methods, which can lead to frustration, and some employees may feel overwhelmed if the task is too large. In addition, unclear delegation can cause confusion about who is accountable.

These disadvantages can be reduced. Managers should choose tasks that match the employee\'s ability, explain the goals and limits, offer training and remain available for advice, without taking over the work. Regular reviews allow errors to be corrected early, and failures are treated as opportunities to learn. Responsibility for the final result remains with the manager, who should avoid blaming the employee.

In conclusion, delegation develops skills, motivates staff and improves efficiency, and its risks can be managed with clear instructions, training and supportive supervision.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итоговой оценки — она дана с условием (поддержка и ясные ожидания).',
          'Баланс: развитие, мотивация, эффективность vs риск ошибок, перегрузка; меры по снижению риска.',
          'Cohesion: Nevertheless / In addition / These disadvantages can be reduced; ключевое слово delegation.',
          'Lexical Resource: accountability, overwhelmed, commitment, supportive supervision; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Wakil — trusting someone with a task', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о доверии важной задачи другому и обсуждение делегирования.',
      keywords: ['trust', 'task', 'responsible', 'rely', 'delegate', 'depend', 'important', 'reliable', 'result', 'worry'],
      part1: [
        { q: 'Do you find it easy to ask others for help with tasks?', a: 'I do now. I used to want to do everything myself, but I learned that sharing work improves the result and reduces stress.' },
        { q: 'Do you prefer to work alone or in a team?', a: 'It depends. For thinking and writing, alone; for planning and projects, in a team, because different views make plans stronger.' },
        { q: 'Who do you rely on most?', a: 'My family, and a couple of close colleagues. I know they are reliable, so I do not worry when I give them something important.' },
        { q: 'Are you good at keeping promises?', a: 'I try to be. I only agree to what I know I can do, and I tell people early if something changes.' }
      ],
      part2: {
        topic: 'Describe a time when you trusted someone to do something important for you.', bullets: ['who the person was', 'what you asked them to do', 'why you trusted them', 'and explain how it turned out.'],
        plan: [{ h: '1. Who', t: 'My cousin, Alibek.' }, { h: '2. Task', t: 'Organise my parents\' anniversary while I was abroad.' }, { h: '3. Why trust', t: 'Reliable record, listens.' }, { h: '4. Outcome', t: 'Perfect event; I learned to let go.' }],
        model: `I would like to describe a time when I trusted my cousin Alibek to organise a very important family event while I was abroad.

It was my parents\' thirtieth wedding anniversary. I wanted to arrange a surprise dinner, but I was away on a work trip for three weeks and could not do the planning myself. I felt anxious, because the event meant so much to me and there were many details: a restaurant, a menu, the guests and a gift.

I asked Alibek, who is a few years younger than me, to take charge. I trusted him for several reasons. He has a reliable record: whenever he says he will do something, he does it. He also knows my parents well and listens carefully to what people want. I explained my ideas in a long message, gave him a modest budget and said that I would not interfere.

I will admit that it was hard not to check on him every day. Instead, we agreed to have a short call every Sunday. Each time, he reported clearly and calmly, and I could see that he had thought about every detail.

It turned out wonderfully. The restaurant was warm and elegant, the food was excellent, and my parents were moved to tears. When I arrived a day early, I saw that he had even arranged a small slideshow of old photographs.

I learned two things: that trust often brings out the best in people, and that letting go is sometimes the most effective form of help.`
      },
      part3: [
        { q: 'Why do some people find it hard to delegate?', a: 'They fear that others will do it worse or that they will lose control. Perfectionism also plays a role. Clear instructions and gradual trust-building make delegation easier.' },
        { q: 'Is it wise to trust people you have only just met?', a: 'Partly. It is sensible to trust gradually and to start with small matters. Trust grows through experience.' },
        { q: 'How do you think technology has changed the way people trust each other?', a: 'People rely on reviews and ratings from strangers, which is convenient but not always reliable. Personal trust still comes from direct experience and consistent behaviour.' }
      ]
    }
  });

  /* ===== 53 · Al-Qawiyy ===== */
  put(53, {
    listening: {
      title: 'Al-Qawiyy — a gym orientation', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за инструкциями тренера и числами.',
      context: 'Part 2. Тренер знакомит новичков с правилами зала.', genders: { Coach: 'm' },
      script: `Coach: Welcome to Strong Life Gym. I am Ruslan, and I will give you a quick tour.
Coach: The gym is open from six in the morning until ten at night on weekdays. At the weekend it closes at eight. The first thing I want to say is that strength is built slowly, and it is built in the right order.
Coach: Let me explain the main areas. On the left is the cardio zone, with twenty treadmills and bikes. In the middle are the free weights. In the corner is the stretching area, which is quiet.
Coach: For beginners, I recommend three sessions a week, with a day of rest between them. Each session should last about fifty minutes. Do not try to lift very heavy weights in the first month. Technique comes first.
Coach: Always start with a warm-up of ten minutes and finish with stretching. Drink water, and listen to your body. If something hurts, as opposed to feeling tired, stop.
Coach: I should also mention that strength is not only physical. Regular training improves sleep, mood and self-discipline. Many members tell me that the discipline of coming three times a week affects the rest of their lives.
Coach: The monthly fee is thirty-five pounds, and a personal training session costs twenty. Lockers need a coin, which you get back. Please wipe the equipment after use.
Coach: Now, who would like to start with a free assessment?`,
      notesTitle: 'Gym orientation',
      notes: [
        { pre: 'Weekend closing time:', post: 'p.m.', a: ['8', 'eight'], e: 'По выходным закрывается в восемь.' },
        { pre: 'Number of cardio machines:', post: '', a: ['20', 'twenty'], e: 'Двадцать тренажёров.' },
        { pre: 'Recommended sessions per week:', post: '', a: ['3', 'three'], e: 'Три занятия в неделю.' },
        { pre: 'Warm-up:', post: 'minutes', a: ['10', 'ten'], e: 'Разминка — десять минут.' },
        { pre: 'Monthly fee: £', post: '', a: ['35', 'thirty-five', 'thirty five'], e: 'Тридцать пять фунтов в месяц.' }
      ],
      mc: [
        { q: 'What should beginners focus on in the first month?', opts: ['technique', 'heavy weights', 'speed'], a: 'A', e: 'Техника на первом месте.' },
        { q: 'When should a person stop exercising?', opts: ['if something hurts', 'if they feel tired', 'after 20 minutes'], a: 'A', e: 'Остановиться при боли, а не при усталости.' },
        { q: 'What benefit besides physical strength does the coach mention?', opts: ['self-discipline', 'higher salary', 'new friends only'], a: 'A', e: 'Сон, настроение и самодисциплина.' }
      ]
    },
    writing: {
      title: 'Al-Qawiyy — compulsory physical education', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация об обязательной физкультуре.',
      task2: {
        prompt: 'Some people believe that physical education should be a compulsory subject at all levels of schooling. To what extent do you agree or disagree?',
        keywords: ['physical education', 'compulsory', 'schools', 'health', 'exercise', 'students', 'obesity', 'teamwork', 'discipline', 'sport', 'curriculum', 'academic'],
        model: `Physical education is part of the curriculum in many countries, but there is discussion about whether it should be compulsory at every level. I strongly agree that it should, because regular exercise is essential for health and development, and schools are the most effective place to ensure that children receive it.

The first reason is health. Modern children spend long hours sitting at desks and in front of screens, and rates of obesity and related conditions are rising in many countries. Regular physical lessons build the habit of activity during the years when lifelong behaviour is formed. Exercise also strengthens bones and the heart, and it can improve sleep and mood, which in turn help students to concentrate in other lessons.

Furthermore, physical education teaches skills that are not taught elsewhere. Team sports develop cooperation, communication and fair play, while individual activities teach perseverance and self-discipline. For many students, success in sport also builds confidence, which affects their attitude to school as a whole. Without compulsory lessons, children who are less interested in sport, and who might benefit most, would probably avoid it.

Admittedly, some students feel embarrassed or are not talented. For this reason, physical education should be varied and inclusive, with a choice of activities such as swimming, dance or hiking, and the emphasis should be on participation and improvement rather than on competition alone. Pupils with medical conditions should be given appropriate adaptations.

In conclusion, physical education deserves a permanent place in the curriculum, since it supports health, teaches valuable social skills and builds character, provided that it is inclusive and enjoyable.`,
        analysis: [
          'Task Response: сильная позиция («strongly agree») и учёт возражения (неспортивные ученики).',
          'Аргументация: здоровье → социальные навыки → решение проблемы смущения (разнообразие и инклюзивность).',
          'Cohesion: Furthermore / Admittedly / For this reason; ключевое слово physical education.',
          'Lexical Resource: perseverance, inclusive, adaptations, curriculum; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Qawiyy — getting stronger', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о занятиях спортом и обсуждение силы, здоровья и дисциплины.',
      keywords: ['sport', 'exercise', 'strong', 'training', 'fitness', 'health', 'discipline', 'progress', 'coach', 'energy'],
      part1: [
        { q: 'Do you do any sport?', a: 'Yes, I swim twice a week and walk daily. Swimming is excellent for the whole body, and it clears my mind.' },
        { q: 'Did you do sport at school?', a: 'Yes, we had physical education twice a week. I enjoyed athletics, and I was good at the long jump.' },
        { q: 'Do you prefer exercising alone or with others?', a: 'With a friend, because we motivate each other. It is easier to keep to a plan when someone is waiting for you.' },
        { q: 'What do you do to stay healthy?', a: 'I sleep seven hours, eat regular meals and avoid sitting too long. These are simple habits, but they make a big difference.' }
      ],
      part2: {
        topic: 'Describe a time when you became physically stronger through training.', bullets: ['what you trained for', 'how you trained', 'what difficulties you had', 'and explain how you felt about the result.'],
        plan: [{ h: '1. What', t: 'A 10-km charity run.' }, { h: '2. How', t: 'Plan: 3 runs a week, increasing distance.' }, { h: '3. Difficulties', t: 'Tiredness, a knee ache, winter.' }, { h: '4. Result', t: 'Finished; proud, new habit.' }],
        model: `I would like to describe a time when I trained for a ten-kilometre charity run and became much stronger as a result.

Two years ago, a colleague invited me to join a charity run in our city. I was not an athlete; at that time I could barely run for ten minutes without stopping. But I liked the cause, and I decided to try. I had twelve weeks to prepare.

I followed a simple plan: three runs a week, with gradually longer distances, and a short strength session at home. In the first week, I ran for twenty minutes alternating with walking. I kept a notebook and recorded each session, which helped me to see progress. A friend ran with me at the weekend, and her company made the long runs more enjoyable.

There were difficulties, of course. After about six weeks I felt a pain in my knee and had to rest for several days; I also found it hard to get up in the cold dark mornings. I consulted a physiotherapist, who advised me to improve my shoes and my technique, and I learned to be patient with my body.

On the day of the run, I finished in just over an hour, which was not fast, but I was delighted. I felt proud and surprised by what a few months of regular effort could do. Even more importantly, running became a habit, and it has improved my energy and confidence. I realised that strength grows through steady work, not sudden effort.`
      },
      part3: [
        { q: 'Why is it hard for many people to exercise regularly?', a: 'Lack of time and motivation are the main reasons, together with sedentary jobs. Starting with small, enjoyable activities and doing them with others helps to build the habit.' },
        { q: 'Should governments encourage sport?', a: 'Yes, by building facilities and supporting school sport. A more active population is healthier, which reduces the pressure on health services.' },
        { q: 'Is mental strength as important as physical strength?', a: 'I believe so. Many challenges, in sport and in life, are overcome by determination and calm. The two kinds of strength also support each other.' }
      ]
    }
  });

  /* ===== 54 · Al-Matin ===== */
  put(54, {
    listening: {
      title: 'Al-Matin — the science of habits', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за структурой лекции о формировании привычек.',
      context: 'Part 4. Лекция о том, как закрепляются привычки.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good morning. Today's topic is consistency. The Arabic word matin, from the root m-t-n, the root of the name Al-Matin, means firm and solid. It is the quality of something that does not shake under pressure. In personal development, we can say that consistency is firmness over time.
Lecturer: Many people think that big results require heroic effort. But research on habits suggests that regular small actions are more important. In one commonly cited study, participants took on average about two months to make a simple new behaviour automatic, though the range was wide, from about three weeks to nearly nine months.
Lecturer: What helps a habit to stick? There are four principles. One: make it small. Five minutes of reading is better than a plan to read for two hours. Two: link it to an existing routine, such as reading after breakfast. Three: make it visible, for example by leaving the book on the table. Four: track it, for instance by marking a calendar.
Lecturer: What about failure? Missing one day does not break a habit. The important rule is never to miss twice in a row.
Lecturer: Finally, a word about foundations. In learning any subject, solid basics matter more than advanced techniques. A student who has a firm grasp of the basics learns the rest more easily.
Lecturer: For next week, choose one small habit, practise it for seven days and record the results. We will discuss them on Thursday.`,
      notesTitle: 'Consistency',
      notes: [
        { pre: 'Matin means firm and', post: '', a: ['solid'], e: 'Matin — твёрдый и прочный.' },
        { pre: 'Average time to make a behaviour automatic: about', post: 'months', a: ['2', 'two'], e: 'В среднем около двух месяцев.' },
        { pre: 'Number of principles:', post: '', a: ['4', 'four'], e: 'Четыре принципа.' },
        { pre: 'Never miss', post: 'in a row.', a: ['twice', '2 times', 'two days'], e: 'Не пропускать дважды подряд.' },
        { pre: 'Discuss results on', post: '', a: ['Thursday'], e: 'Обсуждение в четверг.' }
      ],
      mc: [
        { q: 'What is better, according to the lecturer?', opts: ['five minutes of reading daily', 'a two-hour plan once a week', 'reading only before exams'], a: 'A', e: 'Пять минут ежедневно лучше большого плана.' },
        { q: 'What does the lecturer say about missing one day?', opts: ['it does not break a habit', 'it ends the habit', 'it must be repaired by doubling the next day'], a: 'A', e: 'Один пропуск привычку не ломает.' },
        { q: 'What matters more in learning?', opts: ['solid basics', 'advanced techniques', 'speed'], a: 'A', e: 'Прочные основы.' }
      ]
    },
    writing: {
      title: 'Al-Matin — steady study or last-minute effort', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о постоянстве в учёбе.',
      task2: {
        prompt: 'Some people believe that steady daily study is more effective than intensive study just before an examination. To what extent do you agree or disagree?',
        keywords: ['study', 'daily', 'steady', 'intensive', 'examination', 'memory', 'revision', 'stress', 'habits', 'cramming', 'understanding', 'time'],
        model: `Students often debate whether they should study a little every day or concentrate their effort in the weeks before an examination. I strongly agree that steady study is more effective, although short intensive revision has a role in the final stage.

The main advantage of regular study is better memory. Information that is reviewed at intervals is stored more durably than information that is learned in a single long session, because each return to the material strengthens it. Students who study every day also have time to ask questions, to discover gaps in their understanding and to connect new topics with those they have already learned. By contrast, cramming tends to produce knowledge that is superficial and easily forgotten after the examination.

Moreover, steady study reduces stress. A student who has covered the material gradually enters the examination with confidence, while one who has postponed everything faces an enormous workload, fatigue and anxiety. Lack of sleep, which often accompanies last-minute work, further damages concentration and memory. In addition, regular work builds habits of discipline which are useful beyond education.

Nevertheless, intensive revision is not without value. In the last days before an examination, concentrated review of key points, practice questions and past papers helps to organise knowledge and improve speed. This method works best, however, when it builds on a foundation of earlier study.

In conclusion, daily steady study is generally more effective than cramming because it produces deeper learning and lower stress, while a short period of intensive revision can complete the preparation.`,
        analysis: [
          'Task Response: сильная позиция («strongly agree») и уступка («intensive revision has a role»).',
          'Аргументация: память (интервалы), понимание, стресс; ограничение — финальный интенсивный повтор.',
          'Cohesion: Moreover / Nevertheless / In addition; ключевая оппозиция steady/intensive.',
          'Lexical Resource: cramming, durably, superficial, fatigue; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Matin — a habit I have kept', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о привычке, которую вы поддерживаете, и обсуждение постоянства.',
      keywords: ['habit', 'daily', 'routine', 'regular', 'keep', 'discipline', 'every day', 'benefit', 'consistent', 'motivation'],
      part1: [
        { q: 'Do you have a daily routine?', a: 'Yes, quite a stable one. I wake up at the same time and plan my day in the morning. A routine saves me from small decisions.' },
        { q: 'Is it easy for you to keep new habits?', a: 'Not always, but I have learned to start small. A tiny habit that I can do on a bad day is more likely to last.' },
        { q: 'What good habits do you have?', a: 'Reading before sleep, walking daily and writing three lines in a journal. They are simple but valuable.' },
        { q: 'Do you plan your week in advance?', a: 'On Sunday evening I write the main tasks for each day. It makes the week feel manageable.' }
      ],
      part2: {
        topic: 'Describe a good habit that you have kept for a long time.', bullets: ['what the habit is', 'when you started it', 'how you keep it up', 'and explain how it has benefited you.'],
        plan: [{ h: '1. Habit', t: 'Reading for twenty minutes every night.' }, { h: '2. Started', t: 'Five years ago, after an exam.' }, { h: '3. How', t: 'Book on pillow, fixed time, tracked.' }, { h: '4. Benefit', t: 'Knowledge, sleep, vocabulary.' }],
        model: `The good habit I would like to describe is reading for at least twenty minutes every night before I go to sleep, which I have kept for about five years.

I started it after a period of exhaustion, following a demanding examination. I noticed that I spent my evenings looking at my phone and then slept badly. A friend suggested replacing screen time with a book, and I decided to try it for a month.

Over time, I developed a few methods to keep it up. First, I made the habit small: even if I was very tired, I promised myself only a few pages. Often, once I started, I continued for longer. Second, I connected it with a regular routine: I read after brushing my teeth, at about the same time each night. Third, I left a book on my pillow in the morning, so that I would see it in the evening. And finally, I marked each day on a calendar. I have missed some days, for example when travelling, but I make a rule never to miss twice in a row.

The habit has benefited me in several ways. I have read around eighty books, which has increased my knowledge and vocabulary. I fall asleep more easily, and I wake up calmer. Reading has also made me a better teacher, as I find new examples and ideas for my lessons.

Above all, it has shown me the power of small, regular actions: twenty minutes a day does not look like much, but over five years, it has changed my life.`
      },
      part3: [
        { q: 'Why is it difficult to change habits?', a: 'Habits are automatic, so they require little effort, whereas new behaviour needs attention and willpower. Environment and routines have a strong influence.' },
        { q: 'Are young people today less consistent than older generations?', a: 'It is hard to generalise. Distractions are greater now, which makes consistency harder, but young people also have more tools, such as apps, to support habits.' },
        { q: 'How can schools help students to build good study habits?', a: 'By teaching planning and time management, giving regular small assignments and showing how to review material. Teachers can also model organisation.' }
      ]
    }
  });

  /* ===== 55 · Al-Waliyy ===== */
  put(55, {
    listening: {
      title: 'Al-Waliyy — a mentoring scheme', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных волонтёра: фамилия, график, обучение.',
      context: 'Part 1. Волонтёр записывается в программу наставничества для школьников.', genders: { Coordinator: 'f', Yelnur: 'm' },
      script: `Coordinator: Youth Mentoring Programme, good afternoon.
Yelnur: Good afternoon. I would like to become a mentor for school students.
Coordinator: Wonderful. May I take your name?
Yelnur: Yelnur Abdykadyrov. A-B-D-Y-K-A-D-Y-R-O-V.
Coordinator: And your age?
Yelnur: Twenty-four. I am a graduate student.
Coordinator: Excellent. Mentors must be at least twenty-one. Our programme matches each mentor with one student for six months. You meet once a week for an hour, usually on Wednesday afternoons.
Yelnur: Where do the meetings happen?
Coordinator: At the school library, so that other adults are nearby. Not at private homes.
Yelnur: How does the training work?
Coordinator: A two-day training on the eleventh and twelfth of October, from ten to four. It covers listening, safety and how to support a young person without judging.
Yelnur: Is it paid?
Coordinator: It is voluntary, but we reimburse travel costs up to ten pounds a month.
Yelnur: And what will be required?
Coordinator: A background check, which takes about two weeks, and two references. The form is on our website.
Yelnur: Thank you. I had a mentor at school, and I would like to pass it on.
Coordinator: That is the best reason to join.`,
      notesTitle: 'Mentoring programme',
      notes: [
        { pre: 'Surname:', post: '', a: ['Abdykadyrov'], e: 'Фамилия — Abdykadyrov.' },
        { pre: 'Minimum age for mentors:', post: '', a: ['21', 'twenty-one', 'twenty one'], e: 'Не младше 21 года.' },
        { pre: 'Mentoring lasts', post: 'months', a: ['6', 'six'], e: 'Шесть месяцев.' },
        { pre: 'Training dates: October 11 and', post: '', a: ['12', '12th', 'twelfth', 'the 12th'], e: 'Обучение 11–12 октября.' },
        { pre: 'Travel costs reimbursed up to £', post: 'a month', a: ['10', 'ten'], e: 'До десяти фунтов в месяц.' }
      ],
      mc: [
        { q: 'Where do mentoring meetings take place?', opts: ['at the school library', 'at private homes', 'in a cafe'], a: 'A', e: 'В школьной библиотеке.' },
        { q: 'What does the checking process take?', opts: ['about two weeks', 'about two days', 'about two months'], a: 'A', e: 'Около двух недель.' },
        { q: 'Why does Yelnur want to be a mentor?', opts: ['he had a mentor and wants to pass it on', 'he needs money', 'it is required by his course'], a: 'A', e: 'У него самого был наставник.' }
      ]
    },
    writing: {
      title: 'Al-Waliyy — peers and parents', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о влиянии сверстников на подростков.',
      task2: {
        prompt: 'Some people believe that friends have a greater influence on teenagers than their parents do. To what extent do you agree or disagree?',
        keywords: ['friends', 'teenagers', 'parents', 'influence', 'peers', 'values', 'independence', 'pressure', 'communication', 'choices', 'identity', 'relationships'],
        model: `During adolescence, young people spend more time with friends and less with their families, which has led many to claim that friends influence them more than parents do. I agree with this to a limited extent: friends have strong influence on everyday behaviour, but parents remain more important in shaping deeper values.

The influence of friends is easy to see. Teenagers are developing their identities, and acceptance by peers becomes extremely important. They often copy friends\' clothes, music, language and, sometimes, risky behaviour, because they want to belong. Friends are also the people with whom teenagers share private concerns, since they face similar experiences, and this closeness gives their opinions great weight in daily choices.

Nevertheless, research and common experience suggest that parents have a lasting influence on fundamental values, such as attitudes to education, honesty and work. Teenagers generally choose friends who share the values they have learned at home, so parental influence works indirectly through the selection of a peer group. When a crisis arises, most young people turn to their parents for serious advice. Furthermore, parents provide the stability and resources that make independence possible.

The relationship between the two influences is therefore complex. Parents can strengthen their position by keeping communication open, listening without judging and encouraging their children\'s friendships with positive peers. Schools and communities can add to this by offering activities in which teenagers can form healthy friendships.

In conclusion, friends are more influential in day-to-day behaviour, but parents have a deeper and longer-lasting effect on values, and wise parents work with the influence of friends instead of against it.`,
        analysis: [
          'Task Response: градуированная позиция («to a limited extent») и разделение влияний на поведенческое и ценностное.',
          'Аргументация: потребность в принадлежности, но выбор друзей по семейным ценностям; роль родителей в кризисе.',
          'Cohesion: Nevertheless / Furthermore / therefore; ключевое слово influence.',
          'Lexical Resource: adolescence, peer group, indirectly, stability; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Waliyy — a friend who influenced me', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о друге, оказавшем положительное влияние, и обсуждение дружбы и среды.',
      keywords: ['friend', 'influence', 'support', 'encourage', 'positive', 'example', 'together', 'trust', 'help', 'change'],
      part1: [
        { q: 'Do your friends have similar interests to yours?', a: 'Partly. We share a love of reading and travel, but we also differ in many ways, which makes conversations interesting.' },
        { q: 'Do you prefer to have many friends or a few close friends?', a: 'A few close friends. I think real friendship requires time and trust, which are limited.' },
        { q: 'Who is more important to you, friends or family?', a: 'Both, in different ways. Family is a constant foundation, while friends are the people we choose, and they widen our world.' },
        { q: 'Have you ever changed your mind because of a friend?', a: 'Yes, several times. A good friend can show a different side of a problem without forcing an opinion.' }
      ],
      part2: {
        topic: 'Describe a friend who had a positive influence on you.', bullets: ['who the friend is', 'how you met', 'how this person influenced you', 'and explain how your life changed.'],
        plan: [{ h: '1. Who', t: 'Beibit, a classmate at university.' }, { h: '2. Met', t: 'Study group, first year.' }, { h: '3. Influence', t: 'Discipline, reading, volunteering.' }, { h: '4. Change', t: 'More organised; I volunteer weekly.' }],
        model: `The friend I would like to describe is Beibit, whom I met in the first year of university, when we were put in the same study group.

At that time, I was rather disorganised. I used to study late at night and often missed deadlines. Beibit was different: he planned his week carefully, went to the library every morning and still had time for hobbies. At first, I thought he was too serious, but when we started to work on a project together, I discovered that he was also very funny and generous with his time.

He influenced me in several ways. First, he showed me the value of discipline. He never lectured me, but when I saw how calm he was before exams, I wanted to understand his method, and he taught me to plan in small steps. Second, he introduced me to reading. He lent me books, and we discussed them over tea. And third, he invited me to join a volunteer group that teaches children on Saturdays, and I have been part of it ever since.

My life has changed in a number of ways. I am more organised, I feel less stressed, and I have a sense of purpose that I did not have before. Perhaps most importantly, I now try to influence others in the same way, by setting a good example without preaching.

I am very grateful that I met him. A friend who encourages you to grow is one of the most valuable things in life.`
      },
      part3: [
        { q: 'How do friends influence each other?', a: 'Mostly through example and shared habits. People adopt the attitudes of those around them, often without noticing. Choosing friends carefully is therefore important.' },
        { q: 'Is peer pressure always negative?', a: 'No. It can also encourage positive behaviour, such as studying or exercising. The effect depends on the values of the group.' },
        { q: 'What can parents do if they disapprove of their children\'s friends?', a: 'Rather than forbidding the friendship, they can talk calmly about their concerns and get to know the friends. Open communication is usually more effective than prohibition.' }
      ]
    }
  });

  /* ===== 56 · Al-Hamid ===== */
  put(56, {
    listening: {
      title: 'Al-Hamid — the power of praise', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о том, как правильно хвалить: структура и числа.',
      context: 'Part 4. Лекция об эффективной похвале в обучении и на работе.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good afternoon. Today we look at praise. The Arabic root h-m-d means praise, and it gives us the phrase alhamdulillah. The name Al-Hamid describes One who is worthy of praise in Himself. For us, a useful question is how to praise people in a way that really helps.
Lecturer: Educational psychologists have studied this for decades. One of the best-known findings is that praise for effort and strategy is generally more helpful than praise for innate talent. If you tell a child, "You are so clever", he may avoid hard tasks in order to protect that image. If you say, "You worked hard and found a good method", he is more likely to keep trying.
Lecturer: Let me give you four rules for effective praise. One: be specific. "Your introduction had a clear structure" is better than "Good job". Two: be sincere; people notice flattery. Three: be timely, close to the action. Four: praise in public only if the person would like it, as some prefer private words.
Lecturer: What about too much praise? Constant praise can become meaningless, and it may make people dependent on approval. Aim for a balance with honest, constructive feedback.
Lecturer: Finally, remember to thank. Gratitude is a form of praise that recognises the contribution of others. A short note takes two minutes.
Lecturer: For next week, give three examples of specific praise, either given or received, and bring them to the seminar on Friday at ten.`,
      notesTitle: 'Effective praise',
      notes: [
        { pre: 'The root h-m-d means', post: '', a: ['praise'], e: 'Корень h-m-d — «хвала».' },
        { pre: 'Praise for effort is better than praise for', post: '', a: ['talent', 'innate talent'], e: 'Лучше хвалить за усилие, чем за врождённый талант.' },
        { pre: 'Number of rules:', post: '', a: ['4', 'four'], e: 'Четыре правила.' },
        { pre: 'A thank-you note takes', post: 'minutes.', a: ['2', 'two'], e: 'Две минуты.' },
        { pre: 'Seminar on Friday at', post: '', a: ['10', 'ten', '10:00'], e: 'В пятницу в десять.' }
      ],
      mc: [
        { q: 'Why might a child avoid hard tasks after being told "You are so clever"?', opts: ['to protect that image', 'because he is tired', 'because the task is boring'], a: 'A', e: 'Чтобы сохранить образ «умного».' },
        { q: 'Which is an example of specific praise?', opts: ['Your introduction had a clear structure', 'Good job', 'You are the best'], a: 'A', e: 'Конкретная похвала указывает, что именно хорошо.' },
        { q: 'What is a risk of constant praise?', opts: ['it becomes meaningless', 'it makes people angry', 'it reduces sleep'], a: 'A', e: 'Постоянная похвала обесценивается.' }
      ]
    },
    writing: {
      title: 'Al-Hamid — how much praise is good', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение подходов к похвале детей и выбор позиции.',
      task2: {
        prompt: 'Some people think that children should be praised frequently in order to build their confidence. Others believe that too much praise is harmful. Discuss both views and give your own opinion.',
        keywords: ['praise', 'children', 'confidence', 'effort', 'feedback', 'motivation', 'honest', 'self-esteem', 'parents', 'teachers', 'achievement', 'criticism'],
        model: `Parents and teachers often wonder how much praise children should receive. In my view, praise is valuable and necessary, but its quality matters more than its quantity.

Supporters of frequent praise argue that it builds confidence. Children who are encouraged feel that their efforts are noticed, and this motivates them to continue and to take on new challenges. A young child who is regularly criticised may conclude that he is incapable and stop trying. Praise also strengthens relationships, because it shows that adults are paying attention and appreciate the child\'s attempts.

On the other hand, critics point out that excessive or unspecific praise can have negative effects. If children hear "excellent" for everything, the word loses its meaning, and they may become dependent on approval, doing things only to be applauded. Praise for talent, such as "you are so clever", may also make children afraid of failure, as they worry that a mistake will reveal that they are not clever after all. In addition, unrealistic praise can leave a child unprepared for honest feedback in the future.

The best approach, therefore, is to praise sincerely and specifically, focusing on effort, strategies and progress. For example, an adult might say, "You kept trying different methods until you found one that worked." Praise should be combined with constructive suggestions for improvement, given in a supportive tone. This builds confidence which is based on real achievement and not on empty compliments.

In conclusion, children benefit from praise, but it should be honest, specific and focused on effort rather than on fixed ability.`,
        analysis: [
          'Task Response: обе позиции раскрыты; собственная позиция («качество важнее количества») ясна.',
          'Аргументация: уверенность и мотивация vs обесценивание и зависимость от одобрения; пример корректной формулировки.',
          'Cohesion: On the other hand / In addition / therefore; ключевое слово praise.',
          'Lexical Resource: dependent on approval, constructive, unspecific, compliments; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hamid — a time I was praised', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о похвале, которая запомнилась, и обсуждение признания.',
      keywords: ['praise', 'compliment', 'proud', 'encourage', 'recognised', 'effort', 'kind words', 'motivated', 'confidence', 'appreciate'],
      part1: [
        { q: 'Do you like being complimented?', a: 'Yes, as long as it is sincere. A compliment about something I worked on is much more meaningful than a general remark.' },
        { q: 'How do you react when someone praises you?', a: 'I feel pleased but a little shy. I usually say thank you and mention anyone who helped me.' },
        { q: 'Do you often praise other people?', a: 'I try to, particularly my students. I think it is important to notice what people do well.' },
        { q: 'Who praised you most when you were a child?', a: 'My grandmother, who thought everything I drew was beautiful. Her kindness gave me confidence.' }
      ],
      part2: {
        topic: 'Describe a time when you were praised for something you did.', bullets: ['what you did', 'who praised you', 'what they said', 'and explain how you felt.'],
        plan: [{ h: '1. What', t: 'A difficult lesson for visitors.' }, { h: '2. Who', t: 'The inspector.' }, { h: '3. Said', t: 'Specific: clear questions, engaged students.' }, { h: '4. Felt', t: 'Proud; more confident.' }],
        model: `I would like to describe a time when I was praised by a school inspector after teaching a lesson that I had prepared with great care.

It happened last spring. I was told that an inspector would observe one of my geography lessons, and I wanted it to go well. I spent a week preparing a lesson on rivers, with a short experiment, group discussion and a map activity. I was nervous, because I knew that my work would be judged.

During the lesson, I concentrated on the students, and they were more active than I expected. They asked questions, they worked well in groups, and one of them even corrected a detail on my map. When the bell rang, I felt exhausted.

Afterwards, the inspector came to me and said that she wished to give me feedback. She did not just say "well done". She told me that my questions had been clear and had made the students think, that I had given every group time to explain their answer and that the transition between activities had been smooth. She added that the classroom had a respectful atmosphere. Because she was so specific, I knew that she had really observed me.

I felt very proud and encouraged. I had often worried that my efforts were not noticed, and this showed me that they were. It also made me more confident about trying new methods. Since then, I try to give my students specific feedback in the same way.`
      },
      part3: [
        { q: 'Why is recognition important in the workplace?', a: 'It makes people feel valued, which increases motivation and loyalty. Employees who are never recognised tend to disengage or leave.' },
        { q: 'Is it better to praise in public or in private?', a: 'It depends on the person. Some like public recognition, while others find it embarrassing. A good manager knows the difference.' },
        { q: 'Can too much praise be a problem?', a: 'Yes, especially if it is unspecific or insincere. People may stop believing it, or become dependent on approval. Honest feedback is also necessary.' }
      ]
    }
  });

  /* ===== 57 · Al-Muhsi ===== */
  put(57, {
    listening: {
      title: 'Al-Muhsi — a visit to the statistics office', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за числами и порядком в рассказе о переписи и статистике.',
      context: 'Part 2. Сотрудник статистической службы рассказывает школьникам о сборе данных.', genders: { Officer: 'm' },
      script: `Officer: Good morning, students. I am Yerzhan, and I work in the national statistics office. Today I will explain how a country counts itself.
Officer: Every ten years, we carry out a census. It is an attempt to count every person who lives in the country. In the last census, about forty thousand staff visited homes. The work took two months, from October to the end of November.
Officer: We ask basic questions: age, gender, education, occupation and housing. We do not ask for passwords or bank details. All the information is confidential, and individual answers are never published, only combined results.
Officer: Why is this counting important? Because decisions depend on numbers. Where to build schools, how many hospitals are needed, how large pensions should be: all of these depend on accurate data. If a group is not counted, it can be overlooked in planning.
Officer: Counting is also not as simple as it seems. People move, some do not answer, and definitions change. So we use checks. After the census, a sample of two per cent of households is visited again to compare the answers.
Officer: Your assignment is to make a small survey in your class. Choose one question, such as how many hours students sleep, collect answers from at least twenty people and present the results in a chart. It is due next Tuesday.
Officer: Now, are there any questions?`,
      notesTitle: 'National statistics',
      notes: [
        { pre: 'A census is carried out every', post: 'years.', a: ['10', 'ten'], e: 'Раз в десять лет.' },
        { pre: 'Staff who visited homes: about', post: '', a: ['40000', '40,000', 'forty thousand'], e: 'Около сорока тысяч сотрудников.' },
        { pre: 'The work took', post: 'months.', a: ['2', 'two'], e: 'Два месяца.' },
        { pre: 'Re-visited sample:', post: 'per cent of households', a: ['2', 'two'], e: 'Два процента домохозяйств.' },
        { pre: 'Survey: at least', post: 'people', a: ['20', 'twenty'], e: 'Не менее двадцати человек.' }
      ],
      mc: [
        { q: 'What is never published?', opts: ['individual answers', 'combined results', 'the number of staff'], a: 'A', e: 'Индивидуальные ответы не публикуются.' },
        { q: 'Why is accurate counting important?', opts: ['decisions about services depend on numbers', 'it is required by tradition', 'it is cheap'], a: 'A', e: 'От чисел зависят решения о школах и больницах.' },
        { q: 'What should the survey results be presented as?', opts: ['a chart', 'an essay', 'a poem'], a: 'A', e: 'Диаграммой.' }
      ]
    },
    writing: {
      title: 'Al-Muhsi — data collection', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка массового сбора данных о гражданах.',
      task2: {
        prompt: 'Governments and companies now collect large amounts of data about individuals. Do the advantages of this development outweigh the disadvantages?',
        keywords: ['data', 'collection', 'privacy', 'governments', 'companies', 'services', 'security', 'personal information', 'planning', 'misuse', 'consent', 'transparency'],
        model: `Today, governments and companies gather vast quantities of information about people, from health records to shopping habits. On balance, I believe that the advantages of data collection are significant, but they outweigh the disadvantages only if strong protections for privacy are in place.

The main benefit is better decision-making and services. Governments use statistics to plan schools, hospitals and transport according to real needs, and data about disease can help to detect outbreaks early. Companies use information to improve products and to offer services that are personalised, such as navigation or recommendations. In research, large datasets have led to progress in medicine, climate science and many other fields. These benefits are difficult to achieve without information.

However, there are serious risks. Personal data can be stolen or misused, exposing individuals to fraud and loss of reputation. When companies collect extensive information, they may use it to influence people\'s choices or to discriminate, for instance in insurance or hiring. Citizens often have little knowledge of what is collected or who has access, and constant monitoring may produce a feeling of being watched, which can limit freedom of expression.

These dangers can be reduced by clear rules. Organisations should collect only the data that they need, explain the purpose and obtain informed consent. Strong security, independent supervision and penalties for misuse are essential, and individuals should have the right to see and correct their data.

In conclusion, data collection brings important benefits to society, and its risks can be controlled if privacy, transparency and accountability are firmly protected.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итоговой оценки — она дана с условием (защита приватности).',
          'Баланс: польза (планирование, медицина) vs риски (утечки, дискриминация, ощущение слежки); меры регулирования.',
          'Cohesion: However / These dangers can be reduced; ключевое слово data.',
          'Lexical Resource: datasets, discriminate, informed consent, accountability; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muhsi — something I collected and counted', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о коллекции или подсчёте и обсуждение точности и статистики.',
      keywords: ['collect', 'count', 'collection', 'numbers', 'keep track', 'record', 'hobby', 'organise', 'accurate', 'list'],
      part1: [
        { q: 'Do you collect anything?', a: 'Yes, postcards from different places. I like that each one is small but tells a story about a place.' },
        { q: 'Are you good with numbers?', a: 'Reasonably. I enjoy simple statistics, and I am careful about calculations, though I use a calculator for large ones.' },
        { q: 'Do you keep track of your spending?', a: 'Yes, in a simple table. At the end of the month, I check where the money went.' },
        { q: 'Do you like making lists?', a: 'Very much. Lists clear my mind and help me not to forget small things.' }
      ],
      part2: {
        topic: 'Describe something you have collected or counted over a period of time.', bullets: ['what you collected or counted', 'how long you did it', 'how you recorded it', 'and explain what you learned.'],
        plan: [{ h: '1. What', t: 'Books I read in a year.' }, { h: '2. How long', t: 'One year.' }, { h: '3. Recorded', t: 'Notebook: title, date, rating, notes.' }, { h: '4. Learned', t: 'Patterns, small steps add up.' }],
        model: `The thing I would like to describe is the list of books that I read over one year, which I counted and recorded carefully.

I started in January with a simple aim: to read more than I had in the previous year. To keep track, I bought a small notebook and wrote down, for every book, the title, the author, the date I finished it, a rating out of five and one sentence about what I learned. I also noted how many pages I read in a month.

At the end of the year, I looked at the numbers, and I found some interesting things. I had finished forty-two books, which was almost twice as many as the year before. I read most in the winter months, when evenings were long, and least in the summer, when I travelled. I also noticed that about half of the books were non-fiction, and the highest ratings were for biographies, which I had not expected.

I learned several lessons from this. First, counting makes progress visible, and that was very motivating: I did not want to break the chain. Second, small amounts add up. Reading twenty minutes a day does not seem impressive, but over a year it produces a library. And third, recording helped me to understand my own preferences better than guessing.

This year, I am doing the same with another habit: walking. I believe that what is counted tends to be improved.`
      },
      part3: [
        { q: 'Why do people like keeping records and statistics?', a: 'Numbers give a clear picture and show progress. They also help in making decisions, because they reduce guesswork.' },
        { q: 'Can statistics be misleading?', a: 'Yes, if they are collected badly or presented selectively. It is important to ask how the data was gathered and what is not shown.' },
        { q: 'Should schools teach students to read statistics?', a: 'Definitely. In a world full of numbers, the ability to interpret charts and percentages protects people from misleading claims.' }
      ]
    }
  });

  /* ===== 58 · Al-Mubdi' ===== */
  put(58, {
    listening: {
      title: "Al-Mubdi' — applying to a start-up programme", spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных заявки: имя, идея, сроки, финансирование.',
      context: 'Part 1. Молодой предприниматель звонит в программу поддержки стартапов.', genders: { Officer: 'f', Daulet: 'm' },
      script: `Officer: Young Business Hub, good morning.
Daulet: Good morning. I would like to apply to your start-up programme.
Officer: Of course. May I have your name?
Daulet: Daulet Kassymov. K-A-S-S-Y-M-O-V.
Officer: And what is your idea?
Daulet: A mobile application that helps students to find tutors in their neighbourhood.
Officer: Interesting. Is it already working?
Daulet: Not yet. I have a prototype and about thirty students who tested it.
Officer: Good. The programme lasts twelve weeks and begins on the third of March. You will have mentors, workshops and a workspace.
Daulet: What does it cost?
Officer: The programme is free. In return, we ask for two per cent of the future company, but only if it succeeds.
Daulet: And can we receive funding?
Officer: Selected teams receive a grant of five thousand pounds at the end. Not ten, as the old leaflet says.
Daulet: When is the application deadline?
Officer: The fourteenth of February. You need a two-page plan and a short video of three minutes.
Daulet: I will send it this week.
Officer: Good luck. The best advice we give is simple: start small, test quickly, and improve.`,
      notesTitle: 'Start-up programme',
      notes: [
        { pre: 'Surname:', post: '', a: ['Kassymov'], e: 'Фамилия — Kassymov.' },
        { pre: 'Number of students who tested the prototype: about', post: '', a: ['30', 'thirty'], e: 'Около тридцати студентов.' },
        { pre: 'Programme begins on', post: 'March', a: ['3', '3rd', 'third', 'the 3rd'], e: 'Начало 3 марта.' },
        { pre: 'Grant: £', post: '', a: ['5000', '5,000', 'five thousand'], e: 'Пять тысяч (старая брошюра — десять).' },
        { pre: 'Application deadline: February', post: '', a: ['14', '14th', 'fourteenth', 'the 14th'], e: 'Срок — 14 февраля.' }
      ],
      mc: [
        { q: 'What is the idea of the application?', opts: ['to help students find tutors', 'to sell books', 'to plan journeys'], a: 'A', e: 'Приложение для поиска репетиторов.' },
        { q: 'What does the programme take in return?', opts: ['two per cent of the future company', 'a fixed fee', 'nothing'], a: 'A', e: 'Два процента будущей компании при успехе.' },
        { q: 'What is the officer\'s advice?', opts: ['start small, test quickly, improve', 'wait for perfect conditions', 'copy competitors'], a: 'A', e: 'Начинать с малого, быстро проверять, улучшать.' }
      ]
    },
    writing: {
      title: "Al-Mubdi' — supporting young entrepreneurs", spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о поддержке молодых предпринимателей государством.',
      task2: {
        prompt: 'Some people believe that governments should provide financial support to young people who want to start their own businesses. To what extent do you agree or disagree?',
        keywords: ['entrepreneurs', 'start businesses', 'young people', 'governments', 'support', 'funding', 'jobs', 'risk', 'innovation', 'economy', 'training', 'failure'],
        model: `Young entrepreneurs often have innovative ideas but lack money. I agree that governments should support them, because new businesses create jobs and innovation, although support should be carefully targeted and combined with training.

The first reason is economic. Small and new companies are a major source of employment and often introduce products and services that established firms do not. A young person with a promising idea but no savings or collateral may find it hard to obtain a bank loan, so potentially valuable businesses never start. Government grants, low-interest loans or tax exemptions in the first years can help to overcome this barrier. The cost is likely to be repaid through future taxes and employment.

Furthermore, supporting entrepreneurship encourages a positive attitude to initiative and responsibility. Young people who see that society values creative risk-taking are more likely to try, and even those whose businesses fail gain skills and experience that they can use later.

Nevertheless, financial aid alone can be wasteful. Some businesses will inevitably fail, and without proper selection, money may be given to weak ideas or lost through poor management. For this reason, support should be linked with practical assistance: mentoring, training in finance and marketing, and access to networks. Funding could also be given in stages, depending on progress, which encourages discipline. Entrepreneurs who receive such guidance are also more likely to survive the difficult first years.

In conclusion, governments should support young entrepreneurs, since they create jobs and innovation, but the support should be selective, staged and accompanied by training in order to use public money effectively.`,
        analysis: [
          'Task Response: позиция («согласен, но целевая поддержка») ясна; обоснованы формы помощи.',
          'Аргументация: экономика (рабочие места, барьер залога), психологический эффект; риск — потери средств.',
          'Cohesion: Furthermore / Nevertheless / For this reason; ключевое слово support.',
          'Lexical Resource: collateral, tax exemptions, selective, staged; грамматика: сложные придаточные и условные.'
        ]
      }
    },
    speaking: {
      title: "Al-Mubdi' — a new project I started", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о начале нового дела и обсуждение инициативы и предпринимательства.',
      keywords: ['start', 'begin', 'new', 'project', 'idea', 'first step', 'initiative', 'launch', 'challenge', 'create'],
      part1: [
        { q: 'Do you like starting new things?', a: 'Yes, I enjoy the beginning of a project, when everything is possible. I have to be careful, however, to finish what I start.' },
        { q: 'Do you have any ideas for a business?', a: 'A few, mostly connected with education, such as interactive map materials for schools. I have not started yet, but I make notes.' },
        { q: 'Are you creative?', a: 'I think so, in a practical way. I like finding new ways to explain old topics.' },
        { q: 'What was the last new skill you tried to learn?', a: 'Basic video editing. I wanted to make short lessons, and it was a fun challenge.' }
      ],
      part2: {
        topic: 'Describe a new project or activity that you started.', bullets: ['what it was', 'why you started it', 'what you did first', 'and explain how it has developed.'],
        plan: [{ h: '1. What', t: 'Geography club for students.' }, { h: '2. Why', t: 'Students wanted to explore beyond lessons.' }, { h: '3. First', t: 'Poster, 5 students, first meeting.' }, { h: '4. Development', t: '25 members, trips, projects.' }],
        model: `The new project I would like to describe is a geography club that I started in my school two years ago.

The idea came to me when I noticed that some students asked questions about places and phenomena that were far beyond the curriculum: why deserts are cold at night, or how maps are made. I felt that lessons did not give enough space for this curiosity, and I wanted to create a place where students could explore freely.

The first step was very small. I made a simple poster, wrote the time and place of the first meeting and put it on the notice board. I also asked three students personally. On the first day, five students came, and we had a conversation about interesting places they wanted to visit. I brought a large map and a few photographs, and we agreed to meet every Friday after school.

Since then, the club has grown steadily. We now have twenty-five members, and we run small projects: creating a map of our town, interviewing a local meteorologist and going on field trips to a nearby river and a salt lake. Last spring, students presented their work to the whole school.

What I enjoy most is seeing students take initiative. They suggest topics, prepare presentations and even invite guests. The experience has taught me that new things need not be big at the beginning; a poster and a few chairs were enough. The important thing is to begin.`
      },
      part3: [
        { q: 'Why do some people find it difficult to start a new project?', a: 'Often because of fear of failure or because the task seems too large. Breaking it into small steps and starting without waiting for perfect conditions helps.' },
        { q: 'Is it a good idea for young people to start businesses?', a: 'It can be, as they have energy and fresh ideas. But they need guidance and some financial knowledge to reduce risks.' },
        { q: 'Which is more important for success: a good idea or good execution?', a: 'Execution, I think. Many people have good ideas, but fewer have the discipline to turn them into reality.' }
      ]
    }
  });

  /* ===== 59 · Al-Mu'id ===== */
  put(59, {
    listening: {
      title: "Al-Mu'id — planning revision", spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за расписанием повторения и числами.',
      context: 'Part 3. Студенты и консультант составляют график повторения материала.', genders: { Advisor: 'f', Sanzhar: 'm', Diana: 'f' },
      script: `Advisor: Let us plan your revision for the final examination. Sanzhar, how do you usually revise?
Sanzhar: I read the notes several times, and I highlight the key points.
Advisor: Diana?
Diana: I mostly rewrite the notes, but it takes a lot of time.
Advisor: Both methods feel productive, but research suggests that testing yourself works better. Close the notes and try to write down what you remember. Then check.
Sanzhar: How often should we review?
Advisor: A common schedule is to review new material after one day, then after three days, then after a week, and again after a month. This is called spaced repetition.
Diana: It sounds like a lot of work.
Advisor: Each review should take only ten or fifteen minutes. The effort is in the retrieval, not in the time.
Sanzhar: How many topics do we have?
Advisor: There are twenty-four topics. If you cover three topics a week, you will finish in eight weeks, which leaves two weeks for practice papers.
Diana: When is the examination?
Advisor: On the eighteenth of June. Originally it was the fifteenth, but it has been moved.
Sanzhar: Should we study together?
Advisor: Yes, in a small group. Explaining a topic to others is one of the best ways to find out what you really know.
Diana: Thank you. We will start tomorrow.`,
      notesTitle: 'Revision plan',
      notes: [
        { pre: 'Better method than re-reading:', post: 'yourself', a: ['testing', 'test'], e: 'Тестирование себя эффективнее перечитывания.' },
        { pre: 'First review after', post: 'day(s).', a: ['1', 'one', 'a day'], e: 'Первое повторение — через день.' },
        { pre: 'Each review takes', post: 'minutes.', a: ['10', 'ten', '10-15', 'ten or fifteen'], e: 'Десять–пятнадцать минут.' },
        { pre: 'Number of topics:', post: '', a: ['24', 'twenty-four', 'twenty four'], e: 'Двадцать четыре темы.' },
        { pre: 'Examination: June', post: '', a: ['18', '18th', 'eighteenth', 'the 18th'], e: 'Перенесён с 15-го на 18-е.' }
      ],
      mc: [
        { q: 'Why does Diana hesitate?', opts: ['the method sounds like a lot of work', 'she dislikes group work', 'she has no notes'], a: 'A', e: 'Метод кажется трудоёмким.' },
        { q: 'How many topics per week will they cover?', opts: ['three', 'six', 'one'], a: 'A', e: 'Три темы в неделю, восемь недель.' },
        { q: 'What does the advisor recommend for studying with others?', opts: ['explain topics to each other', 'compare grades', 'read in silence'], a: 'A', e: 'Объяснять друг другу темы.' }
      ]
    },
    writing: {
      title: "Al-Mu'id — repetition in learning", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение повторения и изучения нового материала; личная позиция.',
      task2: {
        prompt: 'Some people think that repeating the same material many times is the most effective way to learn. Others believe that students learn better when they are constantly given new material. Discuss both views and give your own opinion.',
        keywords: ['repetition', 'learning', 'new material', 'memory', 'revision', 'curiosity', 'understanding', 'practice', 'students', 'interest', 'review', 'skills'],
        model: `Educators disagree about whether students learn better by repeating material or by continually meeting new content. In my opinion, a balance is necessary, but repetition deserves more attention than it often receives.

The case for repetition rests on how memory works. Information that is encountered once is usually forgotten quickly, whereas material that is reviewed several times, especially at increasing intervals, becomes stable and easier to retrieve. In skills such as languages, mathematics or music, practice makes actions automatic, which frees attention for more complex tasks. Students who repeat key material also notice details and connections that they missed the first time.

By contrast, supporters of new material emphasise motivation and breadth. Constant repetition can be boring, and students may lose interest if they do not feel that they are progressing. New topics stimulate curiosity, extend knowledge and show how ideas fit into a larger picture. Moreover, meeting different examples can deepen understanding, because a concept is easier to grasp when seen in several contexts.

I believe the most effective approach is to combine the two. Teachers can introduce new content steadily but build in regular, short reviews of earlier topics, and they can make repetition active by using quizzes, discussion and applications instead of re-reading. This keeps interest high while giving knowledge the stability that it needs. Students themselves can follow a simple rule: learn something new each day, and revisit something old.

In conclusion, new material is needed to maintain interest and widen knowledge, but systematic repetition is what secures learning, so both should be part of good teaching.`,
        analysis: [
          'Task Response: обе позиции раскрыты в отдельных абзацах; собственная позиция («баланс, повторение недооценено») выражена.',
          'Аргументация: память и автоматизация vs мотивация и широта; решение — активное повторение.',
          'Cohesion: By contrast / Moreover / I believe; ключевые слова repetition и new material.',
          'Lexical Resource: retrieve, stable, automatic, stimulate curiosity; грамматика: сложные придаточные и сравнения.'
        ]
      }
    },
    speaking: {
      title: "Al-Mu'id — improving through repetition", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о навыке, улучшенном повторением, и обсуждение практики.',
      keywords: ['practice', 'repeat', 'again', 'improve', 'skill', 'perfect', 'routine', 'learn', 'train', 'progress'],
      part1: [
        { q: 'Do you like repeating things until you do them well?', a: 'Yes, I am patient with practice. I believe that most skills are the result of many small repetitions.' },
        { q: 'Have you ever learned something by heart?', a: 'Yes, poems at school and some verses as an adult. I still remember them because I reviewed them regularly.' },
        { q: 'Do you reread books?', a: 'My favourite ones, yes. Each time, I notice new details that I missed.' },
        { q: 'What do you do to remember new words?', a: 'I write them in a notebook with a sentence and review them after a day, a week and a month.' }
      ],
      part2: {
        topic: 'Describe a skill that you improved through regular practice.', bullets: ['what the skill is', 'how you practised', 'how long it took', 'and explain how you feel about your progress.'],
        plan: [{ h: '1. Skill', t: 'Public speaking.' }, { h: '2. Practice', t: 'Record talks, repeat, feedback.' }, { h: '3. Time', t: 'One year, three times a week.' }, { h: '4. Feelings', t: 'Confident; progress visible.' }],
        model: `The skill I would like to describe is public speaking, which I improved significantly through regular practice over about a year.

I used to be very nervous when I had to speak in front of a group. My voice shook, I spoke too fast and I forgot my words. Because my work required me to give presentations, I decided to work on it systematically.

My method was simple repetition. Three times a week, I chose a short topic and gave a three-minute talk to my phone, recording it. Then I listened to the recording the next day and wrote down two things to improve, such as speaking more slowly or avoiding filler words. The following session, I repeated the same talk with those changes. I also asked a colleague to listen to me once a week and to give honest feedback. In addition, I joined a small speaking club, where I gave a short speech each month.

It took about a year before I felt a real difference. In the first months, progress was slow and sometimes I felt discouraged. But when I compared a recording from January with one from December, the improvement was obvious: my speech was calmer, clearer and better organised.

I feel proud and more confident. What I learned is that skills are not just talent; they grow through repeated, focused effort. And as a teacher, I now encourage students to practise in short, regular sessions rather than waiting for inspiration.`
      },
      part3: [
        { q: 'Why is practice more important than talent in some skills?', a: 'Talent can give a head start, but most skills depend on thousands of repetitions that build accuracy and automatic responses. People who practise intelligently often overtake the talented.' },
        { q: 'How can teachers make repetition less boring?', a: 'By varying the format: games, quizzes, group tasks and real-life applications. Students stay interested if they can see progress.' },
        { q: 'Is it better to practise a little every day or for a long time once a week?', a: 'A little every day, because regular exposure strengthens memory and builds a habit. Long sessions are tiring and less effective.' }
      ]
    }
  });

  /* ===== 60 · Al-Muhyi ===== */
  put(60, {
    listening: {
      title: 'Al-Muhyi — a tree-planting day', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за инструкциями организатора акции и числами.',
      context: 'Part 2. Организатор объясняет волонтёрам, как пройдёт посадка деревьев.', genders: { Organiser: 'f' },
      script: `Organiser: Good morning, volunteers, and thank you for coming to our tree-planting day. I am Gulmira, the organiser.
Organiser: We plan to plant three hundred saplings today. The first group starts at nine, not ten, because the soil is easier to work in the cool morning. Lunch is at half past twelve, and we finish at three.
Organiser: The trees are a mixture of poplar, elm and apple. Apple trees go along the edge, where the children\'s playground is, and the others go in rows near the road to reduce noise and dust.
Organiser: Let me explain how to plant a tree properly. First, dig a hole about sixty centimetres deep. Second, loosen the roots gently. Third, place the tree upright and fill the hole with soil. Fourth, water it with ten litres.
Organiser: Why do we do this? Trees absorb carbon dioxide, give shade, reduce temperature in summer and provide homes for birds. A mature tree also catches dust and gives cool shade, which is especially valuable in a city.
Organiser: But planting is only the beginning. Young trees must be watered for two years. For this reason, each of you will be assigned a tree, and we will send you a reminder every week. We hope that you will see it grow.
Organiser: Gloves and spades are available. Please wear boots, bring a hat and drink plenty of water. Now, let us begin.`,
      notesTitle: 'Tree planting',
      notes: [
        { pre: 'Number of saplings:', post: '', a: ['300', 'three hundred'], e: 'Триста саженцев.' },
        { pre: 'First group starts at', post: '', a: ['9', 'nine', '9:00'], e: 'Начало в девять (не в десять).' },
        { pre: 'Hole depth:', post: 'centimetres', a: ['60', 'sixty'], e: 'Шестьдесят сантиметров.' },
        { pre: 'Water per tree:', post: 'litres', a: ['10', 'ten'], e: 'Десять литров.' },
        { pre: 'Young trees must be watered for', post: 'years.', a: ['2', 'two'], e: 'Два года.' }
      ],
      mc: [
        { q: 'Where will the apple trees be planted?', opts: ['along the edge near the playground', 'near the road', 'in the centre of the park'], a: 'A', e: 'Вдоль края у детской площадки.' },
        { q: 'Why are some trees planted near the road?', opts: ['to reduce noise and dust', 'to mark the border', 'to provide fruit'], a: 'A', e: 'Для снижения шума и пыли.' },
        { q: 'What will each volunteer receive?', opts: ['an assigned tree and weekly reminders', 'a certificate only', 'a free sapling to take home'], a: 'A', e: 'Закреплённое дерево и еженедельные напоминания.' }
      ]
    },
    writing: {
      title: 'Al-Muhyi — greening cities', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Проблемы нехватки зелени в городах и меры по озеленению.',
      task2: {
        prompt: 'Many cities lack green spaces such as parks and trees. What problems does this cause, and what can be done to increase greenery in urban areas?',
        keywords: ['cities', 'green spaces', 'parks', 'trees', 'pollution', 'heat', 'health', 'urban', 'planning', 'residents', 'buildings', 'biodiversity'],
        model: `In many rapidly growing cities, concrete and asphalt replace parks and trees. The lack of greenery has serious consequences, but it can be addressed through planning, public investment and community participation.

Several problems result from the absence of green spaces. Urban areas without trees become much hotter in summer, a phenomenon known as the heat island effect, which increases energy use for cooling and can be dangerous for the elderly. Trees and plants also filter air pollution and absorb noise, so streets without them tend to be dustier and louder. In addition, residents lose places for exercise and relaxation, which affects physical and mental health, and children have fewer opportunities to play outdoors. Finally, wildlife, from birds to insects, loses its habitat.

Several measures could increase greenery. City planners can require developers to include parks and tree planting in new projects and protect existing green areas from construction. Cities can also make use of limited space by planting trees along streets, creating green roofs and walls, and turning vacant lots into small gardens. Funding is needed, but the long-term benefits in health, lower cooling costs and higher property values can justify it.

Residents themselves can contribute. Community gardens, tree-planting days and volunteer care for young trees engage people and create a sense of ownership. Schools can involve children in such projects, so that the habit starts early.

In conclusion, a lack of green space causes heat, pollution and health problems, and it can be reduced by planning requirements, creative use of space and active participation by the community.`,
        analysis: [
          'Task Response: проблемы (жара, загрязнение, здоровье, среда обитания) и решения (планирование, использование пространства, участие жителей).',
          'Аргументация: эффект «теплового острова», окупаемость затрат; роль сообщества.',
          'Cohesion: Several problems result / Several measures could; In addition / Finally; смысловые переходы.',
          'Lexical Resource: heat island effect, habitat, green roofs, sense of ownership; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muhyi — a plant or garden I care for', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание растения или сада и обсуждение природы, ухода и жизни.',
      keywords: ['plant', 'garden', 'grow', 'water', 'care', 'flowers', 'tree', 'green', 'alive', 'nature'],
      part1: [
        { q: 'Do you have any plants at home?', a: 'Yes, about a dozen, mostly on the windowsill and the balcony. They make the flat feel alive.' },
        { q: 'Do you like gardening?', a: 'I like it very much, though I only have a small balcony garden. It is relaxing to watch things grow.' },
        { q: 'Is there much greenery in your area?', a: 'Reasonably. There are streets lined with trees and a park nearby, which is rare in busy parts of the city.' },
        { q: 'Did you grow anything as a child?', a: 'Yes, tomatoes with my grandfather. I remember my excitement when the first one turned red.' }
      ],
      part2: {
        topic: 'Describe a plant, tree or garden that you take care of.', bullets: ['what it is', 'how you got it', 'how you take care of it', 'and explain why it is important to you.'],
        plan: [{ h: '1. What', t: 'A lemon tree in a pot.' }, { h: '2. How got', t: 'A gift from my grandmother, grown from a seed.' }, { h: '3. Care', t: 'Light, water, winter indoors, feed monthly.' }, { h: '4. Importance', t: 'Memory, patience, joy.' }],
        model: `The plant I would like to describe is a small lemon tree that I keep in a large pot on my balcony and in my living room during the winter.

I got it from my grandmother seven years ago. She had grown it from a seed, and she gave it to me when I moved into my first apartment, saying that every home should have something alive. At that time it was only about twenty centimetres tall, with a few leaves, and I was not sure that I would be able to keep it alive.

Taking care of it requires attention to several things. In the summer, it stands in a sunny place and I water it twice a week. In autumn, I bring it indoors before the cold arrives, and in winter I place it near the window and reduce the watering. Once a month I give it special fertiliser, and in spring I move it to a larger pot. At one point, it lost most of its leaves after a very cold night, and I was very worried, but with patience and careful watering, it recovered.

It is important to me for several reasons. First, it reminds me of my grandmother. Second, it has taught me patience, because growth is slow and cannot be rushed. And third, it brings me real joy: last year, it produced its first lemons, small but fragrant, and I used them for tea for the whole family.

Looking after something alive gives me a quiet sense of purpose, and I would recommend it to everyone.`
      },
      part3: [
        { q: 'Why are parks and trees important in cities?', a: 'They cool the air, reduce pollution and noise, and give people a place to relax. Studies suggest that contact with green spaces improves mental health.' },
        { q: 'Should children learn about gardening at school?', a: 'Yes. It teaches patience, responsibility and where food comes from. Many children are delighted when they see something they planted grow.' },
        { q: 'What can individuals do to protect nature?', a: 'Small habits such as saving water, planting trees, avoiding waste and supporting local projects add up. Raising awareness among friends also helps.' }
      ]
    }
  });
})();

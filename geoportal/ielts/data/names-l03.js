// Имена 21–30: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 21 · Al-Basit ===== */
  put(21, {
    listening: {
      title: 'Al-Basit — a growing community garden', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за объявлением организатора: даты, числа, цены и поправки.',
      context: 'Part 2. Координатор рассказывает волонтёрам о расширении общественного сада.', genders: { Coordinator: 'f' },
      script: `Coordinator: Welcome, everyone, to the Riverside Community Garden. I am Saule, the coordinator, and today I will explain how our garden is growing.
Coordinator: Until now we had twelve plots. From the first of April, we will have twenty-four, because the city has given us the empty land beside the old school. Some of you may have heard that it would be thirty, but that was a rumour.
Coordinator: The new section will open on Saturday the fifth. Please arrive at nine in the morning, not ten, as we need to prepare the soil before the afternoon heat. The tools are kept in the blue shed. Gloves are available, but please bring your own water bottle.
Coordinator: Each plot costs fifteen pounds for the season. If you cannot afford this, you can apply for a free plot, and no one will ask you for reasons. The idea of the garden is that there should be room for everyone.
Coordinator: We also plan to expand our activities. On Wednesday evenings, there will be a free workshop on composting, and on the first Sunday of every month, we will have a shared lunch, where members bring dishes from their own cuisine.
Coordinator: A final request. Our garden grows because many people give a little: an hour, a seed, a spare tool. If you have spare seedlings, please bring them to the blue shed. And if you have a neighbour who would like to join, do tell them.
Coordinator: Thank you, and let us start planting.`,
      notesTitle: 'Community garden',
      notes: [
        { pre: 'Number of plots from April:', post: '', a: ['24', 'twenty-four', 'twenty four'], e: 'Двенадцать станут двадцатью четырьмя (тридцать — слух).' },
        { pre: 'New section opens on Saturday the', post: '', a: ['5', '5th', 'fifth', 'the 5th'], e: 'Открытие в субботу, 5-го.' },
        { pre: 'Arrive at', post: 'a.m.', a: ['9', 'nine', '9:00'], e: 'В девять утра, а не в десять.' },
        { pre: 'Cost of one plot: £', post: '', a: ['15', 'fifteen'], e: 'Пятнадцать фунтов за сезон.' },
        { pre: 'Workshop on Wednesday evenings: on', post: '', a: ['composting', 'compost'], e: 'Бесплатный мастер-класс по компостированию.' }
      ],
      mc: [
        { q: 'Where are the tools kept?', opts: ['in the blue shed', 'in the old school', 'in the coordinator\'s office'], a: 'A', e: 'В синем сарае.' },
        { q: 'What can people do if they cannot afford a plot?', opts: ['apply for a free plot', 'pay in instalments', 'share with a friend only'], a: 'A', e: 'Подать заявку на бесплатный участок без объяснений причин.' },
        { q: 'What happens on the first Sunday of every month?', opts: ['a shared lunch', 'a market', 'a planting competition'], a: 'A', e: 'Общий обед с блюдами разных кухонь.' }
      ]
    },
    writing: {
      title: 'Al-Basit — sharing wealth in society', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация по теме распределения богатства и ответственности государства.',
      task2: {
        prompt: 'Some people believe that the wealth of a country should be shared more equally among its citizens. To what extent do you agree or disagree?',
        keywords: ['wealth', 'equally', 'income', 'taxes', 'poverty', 'inequality', 'incentives', 'services', 'education', 'government', 'opportunity', 'fairness'],
        model: `The idea that a country\'s wealth should be shared more equally has wide appeal. I agree to a considerable extent, since extreme inequality harms society, but I do not believe that complete equality is either achievable or desirable.

The argument for greater equality begins with fairness and opportunity. When a small group controls a large share of resources, children from poorer families often receive weaker education and healthcare, and their talents are wasted. Evidence from many societies suggests that high inequality is also associated with lower trust, more crime and political tension. Redistribution through progressive taxes and public services, such as free schooling and affordable housing, can reduce these problems and allow more people to contribute to the economy.

However, absolute equality would create difficulties of its own. People differ in effort, skill and risk-taking, and if all incomes were identical, there would be little incentive to work harder, to innovate or to start businesses. Such systems have historically led to stagnation. Moreover, excessively high taxes may encourage skilled workers and investors to move elsewhere, reducing the wealth available for everyone.

A balanced approach would therefore guarantee a decent minimum standard of living and equal access to education and healthcare, while still allowing rewards for effort and enterprise. In addition, individuals who have become prosperous can share generously through charity and mentoring, because a society that values generosity is healthier than one that relies on law alone.

In conclusion, wealth should be shared more fairly through taxation and public services, but moderate differences in income are acceptable provided that everyone has a genuine opportunity to succeed.`,
        analysis: [
          'Task Response: градуированная позиция («to a considerable extent») и обоснование, почему полное равенство нежелательно.',
          'Тулмин: claim → grounds (неравенство → низкое доверие, преступность) → warrant (перераспределение расширяет возможности) → rebuttal (стимулы, отъезд специалистов) → qualifier (минимум для всех).',
          'Cohesion: However / Moreover / In addition; повтор ключевого слова opportunity.',
          'Lexical Resource: redistribution, progressive taxes, incentive, stagnation, enterprise; хеджирование (often, may, suggests).'
        ]
      }
    },
    speaking: {
      title: 'Al-Basit — generosity with time and resources', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о щедрости и обсуждение того, как делиться.',
      keywords: ['generous', 'share', 'give', 'time', 'help', 'money', 'charity', 'volunteer', 'community', 'plenty'],
      part1: [
        { q: 'Do you often share things with other people?', a: 'Yes, whether it is food, books or notes. I think sharing is one of the easiest ways to strengthen relationships.' },
        { q: 'Do you give money to charity?', a: 'Yes, a small amount every month. I prefer regular small donations to a single large one, because it becomes a habit.' },
        { q: 'Do you like having a large group of friends?', a: 'A moderate one. I value a wide circle of acquaintances, but the closest friendships are the ones that matter most.' },
        { q: 'Do you do any volunteer work?', a: 'Occasionally, I help to organise book drives for rural schools. It does not take much time, but it feels worthwhile.' }
      ],
      part2: {
        topic: 'Describe a time when you were generous with your time or money.', bullets: ['what you gave', 'who you gave it to', 'why you decided to give', 'and explain how you felt afterwards.'],
        plan: [{ h: '1. What', t: 'Time: tutoring a student for free.' }, { h: '2. To whom', t: 'A pupil whose family could not pay.' }, { h: '3. Why', t: 'Saw his potential; remembered my own teacher.' }, { h: '4. Feelings', t: 'Joy, humility; he passed the exam.' }],
        model: `I would like to describe a time when I gave my time to a student whose family could not afford extra lessons.

Two years ago, a boy named Aslan joined my class. He was bright and curious but had missed a lot of school because of illness, and he was far behind in geography. His mother told me that she wanted to hire a tutor, but they could not afford it. I could see how anxious both of them were, because he was preparing for an important national examination.

I decided to help for free. I offered to meet him twice a week after school for an hour, and we continued for about six months. I prepared simple worksheets, and we used maps and short quizzes. At first he was shy and quiet, but gradually he started to ask questions and even to argue with me, which was a wonderful sign.

I made this decision for two reasons. Firstly, I recognised his potential, and I did not want it to be wasted for financial reasons. Secondly, I remembered my own teacher, who had once given me extra lessons without any payment, and I felt that I should pass on what I had received.

When the results came, Aslan had passed with a good score, and his mother cried when she thanked me. I felt both joy and humility, because I had given only a few hours a week. The experience taught me that generosity does not require a fortune; sometimes the most valuable gift is attention.`
      },
      part3: [
        { q: 'Why are some people more generous than others?', a: 'Upbringing is a major factor: children who see generosity at home usually become generous adults. Personal experience of hardship can also make people more sensitive to the needs of others.' },
        { q: 'Should rich people be expected to give more to society?', a: 'Morally, I think so, because those who have more can give more without damaging their own lives. However, giving should be a free choice supported by incentives, not only a duty enforced by law.' },
        { q: 'Is it better to give time or money?', a: 'Both are valuable, but time often has a more personal effect. Money solves practical problems, while time shows that you care. The ideal charity combines the two.' }
      ]
    }
  });

  /* ===== 22 · Al-Khafid ===== */
  put(22, {
    listening: {
      title: 'Al-Khafid — respect for elders', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за деталями проекта об уважении к старшим.',
      context: 'Part 3. Студентка и преподаватель планируют проект об интервью со старшим поколением.', genders: { Teacher: 'm', Madina: 'f' },
      script: `Teacher: Madina, tell me about your plan for the oral history project.
Madina: I would like to interview my great-uncle, who is eighty-four. He lived through many changes in our city, and I think young people rarely ask older people about their lives.
Teacher: A good idea. How long should the interview be?
Madina: About forty minutes. Initially I planned an hour, but I think he might get tired.
Teacher: Sensible. What will you ask?
Madina: First about his childhood, then his work as a railway engineer, and finally what advice he would give to young people.
Teacher: Remember, the way you listen matters as much as the questions. Speak slowly, lower your voice if the room is noisy, and do not interrupt.
Madina: I will bring tea, and I will visit him at his home, because he feels more relaxed there.
Teacher: Excellent. You will need his permission to record. Please prepare a short consent form.
Madina: Of course. When is the presentation?
Teacher: On the fourteenth of May. It was the twelfth, but the hall is booked.
Madina: And how long is the presentation?
Teacher: Ten minutes. You may include two photographs or one short audio clip.
Madina: I would like to use a clip with his permission.
Teacher: Very good. Send me your outline by next Friday.`,
      notesTitle: 'Oral history project',
      notes: [
        { pre: 'Great-uncle\'s age:', post: '', a: ['84', 'eighty-four', 'eighty four'], e: 'Ему восемьдесят четыре года.' },
        { pre: 'Interview length:', post: 'minutes', a: ['40', 'forty'], e: 'Сначала час, потом сорок минут.' },
        { pre: 'His profession: railway', post: '', a: ['engineer'], e: 'Железнодорожный инженер.' },
        { pre: 'Presentation date: May', post: '', a: ['14', '14th', 'fourteenth', 'the 14th'], e: 'Перенесено с 12-го на 14-е.' },
        { pre: 'Presentation length:', post: 'minutes', a: ['10', 'ten'], e: 'Десять минут.' }
      ],
      mc: [
        { q: 'Where will the interview take place?', opts: ['at his home', 'at the university', 'in a cafe'], a: 'A', e: 'Дома у дедушки, где ему спокойнее.' },
        { q: 'What does the teacher advise about listening?', opts: ['speak slowly and do not interrupt', 'take notes constantly', 'ask only short questions'], a: 'A', e: 'Говорить медленно, понижать голос и не перебивать.' },
        { q: 'What must Madina prepare?', opts: ['a consent form', 'a questionnaire for ten people', 'a map'], a: 'A', e: 'Краткую форму согласия на запись.' }
      ]
    },
    writing: {
      title: 'Al-Khafid — respect in the family', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины и решения: уважение к старшему поколению.',
      task2: {
        prompt: 'In many societies, young people show less respect for older people than in the past. What are the causes of this, and what can be done to encourage respect?',
        keywords: ['respect', 'elders', 'young', 'older', 'family', 'generations', 'technology', 'values', 'communication', 'wisdom', 'school', 'example'],
        model: `In many countries, observers report that young people are less respectful toward their elders than previous generations were. The causes are social and technological, and they can be addressed through family life, education and public attitudes.

One cause is the reduction of daily contact between generations. In the past, grandparents often lived with their families, and children learned respect by watching how adults treated them. Today, smaller households and urban migration mean that many young people see older relatives only occasionally. A second cause is the speed of technological change: young people may feel that older adults have little to teach them in a world of smartphones, and this impression easily becomes dismissive. In addition, popular entertainment often portrays older people as comic or out of touch, which shapes attitudes subtly but persistently.

Several measures could improve the situation. First, families can restore regular contact, for example through weekly meals, shared tasks, or phone calls, so that children interact with grandparents as individuals rather than stereotypes. Second, schools can include programmes in which students interview older people about their lives, as in oral history projects, which often surprise young people with the knowledge and experience they discover. Third, the media can present older people in more varied and respectful ways.

Finally, adults must set an example. Children learn respect less from lectures than from seeing parents speak politely to their own parents, listening without interruption and lowering their voice in disagreement.

In conclusion, declining respect results from limited contact, technological change and negative portrayals, and it can be reversed through shared activities, educational projects and good examples at home.`,
        analysis: [
          'Task Response: сначала три причины, затем три группы решений и роль примера; структура зеркальна вопросу.',
          'Аргументация: у каждой причины и меры есть механизм, а не только перечисление.',
          'Cohesion: One cause / A second cause / In addition → First/Second/Third с пояснениями; финальный абзац обобщает.',
          'Lexical Resource: dismissive, out of touch, stereotypes, oral history; грамматика: пассив, сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Khafid — an older person I respect', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание пожилого человека, которого вы уважаете, и обсуждение отношений поколений.',
      keywords: ['elderly', 'older', 'respect', 'grandfather', 'wisdom', 'advice', 'experience', 'gentle', 'listen', 'family'],
      part1: [
        { q: 'Do you spend time with older people?', a: 'Yes, I visit my grandmother every week. She lives alone, and I enjoy her stories and her cooking.' },
        { q: 'What can young people learn from older people?', a: 'Patience, perspective and practical skills. Older people have often seen difficult times and can show how to cope calmly.' },
        { q: 'How do you usually speak to older people?', a: 'Politely and slowly, using respectful forms of address. I also try to listen more than I talk.' },
        { q: 'Do older people live with their families in your country?', a: 'Often, yes. Many families have three generations under one roof, although in big cities this is becoming less common.' }
      ],
      part2: {
        topic: 'Describe an older person that you respect.', bullets: ['who the person is', 'how you know them', 'what they are like', 'and explain why you respect them.'],
        plan: [{ h: '1. Who', t: 'My grandfather, a retired teacher.' }, { h: '2. How known', t: 'Grew up near him; summers in village.' }, { h: '3. Personality', t: 'Calm, humble, soft voice, curious.' }, { h: '4. Why', t: 'Kindness, never boasts, teaches by example.' }],
        model: `The older person I respect most is my grandfather, a retired history teacher who lives in a village not far from our city.

I have known him all my life, of course, but I really got to know him during the summers I spent in his house as a child. He would wake me up early, and we would feed the chickens and walk along the river. He always had a story, and the stories were usually about people he had known.

His character is quite remarkable. He is calm, almost never raises his voice and has a gentle sense of humour. When he talks to children, he squats down so that he is at their level, which I always found touching. Although he is eighty, he still reads every day and often asks me about my work, as if I were the expert.

I respect him for several reasons. Firstly, his kindness is consistent: he treats a stranger at the door in the same way as a guest of honour. Secondly, he is humble; he has helped dozens of people over the years but never mentions it, and I usually learn about his generosity from others. And thirdly, he teaches by example rather than by instruction. He rarely gives advice unless asked, but the way he lives makes you want to be a better person.

I often think of him when I am impatient with students, and it helps me to lower my voice and listen, just as he does.`
      },
      part3: [
        { q: 'Why do some young people not respect older people?', a: 'Often because they see little of them and rely on stereotypes. Fast change in technology also leads some to believe that older people have little to offer, which is a misunderstanding.' },
        { q: 'How can society support older people?', a: 'By ensuring good healthcare, adequate pensions and opportunities to stay active, such as volunteering. Social contact is just as important as material support, since loneliness is a serious problem.' },
        { q: 'Are traditional values of respect changing?', a: 'Yes, to some extent. The forms of respect are changing, becoming less formal, but the underlying value is still strong in many families. Respect can be expressed through time and attention.' }
      ]
    }
  });

  /* ===== 23 · Ar-Rafi' ===== */
  put(23, {
    listening: {
      title: "Ar-Rafi' — learning and status", spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о знании и статусе: следить за числами и перечислениями.',
      context: 'Part 4. Лекция о том, что делает человека уважаемым в обществе.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good morning. Today we ask what raises a person's standing in society. The Arabic root r-f-', found in the name Ar-Rafi', means to lift or raise. In the Qur'an, in the fifty-eighth chapter, verse eleven, it is said that Allah will raise by degrees those who believe and those who have been given knowledge.
Lecturer: Notice the phrase "by degrees". Elevation is gradual, and there are levels. Knowledge is one source of status, but it works quietly. Wealth and position are visible; knowledge shows itself in the way a person speaks and decides.
Lecturer: Sociologists usually name three sources of standing: wealth, power and prestige. Prestige is often linked to education. In surveys across many countries, occupations such as doctor and teacher consistently receive high respect, although the exact order differs.
Lecturer: But how can one raise others? I will give three suggestions. First, give credit. If a colleague has contributed an idea, say so in the meeting. Second, praise effort at the right moment, not weeks later. Third, share your knowledge. A person who teaches others becomes more valuable, not less.
Lecturer: There is also the question of standards. Raising your own standard means doing the work slightly better than is required. For example, if the deadline is Friday, finish by Thursday and check the work.
Lecturer: Your assignment is a one-page analysis of someone who has risen in their field through knowledge. It must be handed in by the third of March.`,
      notesTitle: 'Lecture: standing in society',
      notes: [
        { pre: 'Surah and verse: 58,', post: '', a: ['11', 'eleven', 'verse 11'], e: 'Сура 58, аят 11.' },
        { pre: 'The phrase "by degrees" shows that elevation is', post: '', a: ['gradual'], e: 'Возвышение постепенное.' },
        { pre: 'Three sources of standing: wealth, power and', post: '', a: ['prestige'], e: 'Богатство, власть и престиж.' },
        { pre: 'Raising others: first, give', post: '', a: ['credit'], e: 'Первый совет — признавать заслугу.' },
        { pre: 'Assignment due on', post: 'March', a: ['3', '3rd', 'third', 'the 3rd'], e: 'Срок — 3 марта.' }
      ],
      mc: [
        { q: 'What does the lecturer say about knowledge?', opts: ['it works quietly', 'it is less important than wealth', 'it is visible immediately'], a: 'A', e: 'Знание действует незаметно.' },
        { q: 'When should effort be praised?', opts: ['at the right moment', 'after a few weeks', 'only at the end of a project'], a: 'A', e: 'Нужно хвалить вовремя, а не через недели.' },
        { q: 'What is "raising your own standard"?', opts: ['doing work slightly better than required', 'working longer hours', 'choosing easier tasks'], a: 'A', e: 'Делать работу чуть лучше, чем требуется.' }
      ]
    },
    writing: {
      title: "Ar-Rafi' — knowledge and social status", spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: что должно определять статус человека в обществе.',
      task2: {
        prompt: 'Some people think that social status should be based on knowledge and achievement rather than on wealth. To what extent do you agree or disagree?',
        keywords: ['status', 'knowledge', 'achievement', 'wealth', 'respect', 'society', 'education', 'merit', 'influence', 'values', 'role models', 'success'],
        model: `The belief that social status should rest on knowledge and achievement, not on wealth, expresses an attractive ideal. I largely agree with it, although in practice the three factors are interconnected and cannot always be separated.

The principal argument for basing status on knowledge is that it rewards qualities that benefit society. Doctors, scientists and teachers acquire their standing through years of study and service, and their contribution improves the lives of others. By contrast, wealth alone may result from inheritance or luck and says little about a person\'s character or abilities. If a society treats rich people as automatically superior, young people may conclude that money is the only goal, and this can undermine education and honest work.

Moreover, a culture that honours achievement encourages effort. When students see that respect is gained by learning, they have a reason to study, whereas a system that values wealth above all may promote shortcuts. The respect given to knowledge also tends to be more durable: people recall the scientist whose discovery helped them long after fortunes have disappeared.

Nevertheless, it would be unrealistic to ignore wealth entirely. Money often reflects real achievement, such as building a successful business, and it can fund important projects. Furthermore, a society cannot honour only intellectual achievement, since skilled craftspeople and caregivers contribute greatly to the community too.

Therefore, the healthiest approach is to honour people for what they contribute, whether through knowledge, skill or service, and to treat wealth as a result rather than a measure of worth.

In conclusion, status should rest primarily on knowledge and achievement, but it should also recognise the many forms of useful work.`,
        analysis: [
          'Task Response: градуированная позиция («largely agree») и оговорка о пересечении факторов.',
          'Тулмин: claim → grounds (врачи, учёные; богатство от наследства) → warrant (уважение к знанию стимулирует учёбу) → rebuttal (богатство нередко отражает достижение) → qualifier.',
          'Cohesion: Moreover / Nevertheless / Therefore; повтор ключевых слов status и achievement.',
          'Lexical Resource: undermine, durable, caregivers, merit; хеджирование (may, often, tends to).'
        ]
      }
    },
    speaking: {
      title: "Ar-Rafi' — a teacher who inspired me", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ об учителе, который вдохновил, и обсуждение роли образования.',
      keywords: ['teacher', 'inspire', 'encourage', 'learn', 'confidence', 'school', 'subject', 'praise', 'support', 'mentor'],
      part1: [
        { q: 'Did you enjoy school?', a: 'Mostly yes. I liked the subjects that involved discovery, such as geography and history, and I made some lifelong friends.' },
        { q: 'Who encouraged you most when you were young?', a: 'My mother, who always asked what I had learned instead of what grade I had received. That question changed how I saw school.' },
        { q: 'Do you think praise is important?', a: 'Yes, if it is specific. Vague praise does not help much, but telling someone exactly what they did well gives confidence and direction.' },
        { q: 'Would you like to be a teacher?', a: 'I already am one, and I would not change it. Seeing a student understand something for the first time is a wonderful reward.' }
      ],
      part2: {
        topic: 'Describe a teacher who encouraged you.', bullets: ['who the teacher was', 'what subject they taught', 'how they encouraged you', 'and explain what effect this had on you.'],
        plan: [{ h: '1. Who', t: 'Mrs Zhanar, my geography teacher.' }, { h: '2. Subject', t: 'Geography, secondary school.' }, { h: '3. Encouragement', t: 'Praised my questions; lent me books.' }, { h: '4. Effect', t: 'Confidence; I became a geography teacher.' }],
        model: `The teacher I would like to describe is Mrs Zhanar, who taught me geography in secondary school and who changed the direction of my life.

I was a quiet student, and I was not sure that my opinions mattered. In her lessons, she always asked us to explain why something happened, not just what happened. One day I asked a question about why some rivers form deltas and others do not, and instead of answering immediately, she smiled and said that it was an excellent question, and that real scientists ask such questions. I will never forget those words.

She encouraged me in several ways. After the lesson she lent me a book about natural landscapes and said that she would like to hear my thoughts on it. She also invited me to prepare a short presentation for the class, and she helped me to practise. Even when I made mistakes, she corrected them gently and always noted what I had done well.

The effect was profound. I gained confidence, not only in geography but in speaking in public. I started to read more, and I became curious about the world. When it was time to choose a university course, the decision was easy: I wanted to study geography and become a teacher like her.

Today, when a student asks an unexpected question, I try to give the same reaction. In a sense, I am passing her encouragement on to the next generation.`
      },
      part3: [
        { q: 'What makes a teacher inspiring?', a: 'Passion for the subject, patience and genuine interest in students. An inspiring teacher makes learners feel capable, even when the material is difficult.' },
        { q: 'Does a person\'s education determine their social status?', a: 'To some extent, since education opens doors to careers. However, status also depends on character and effort, and many people achieve respect without formal qualifications.' },
        { q: 'Should teachers be paid more?', a: 'I think so. Teaching shapes the future, so the profession should attract talented people. Better pay would also reduce the shortage of teachers in some regions.' }
      ]
    }
  });

  /* ===== 24 · Al-Mu'izz ===== */
  put(24, {
    listening: {
      title: "Al-Mu'izz — an awards evening", spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных о церемонии награждения: дата, время, зал, дресс-код.',
      context: 'Part 1. Организатор школы отвечает на вопросы о церемонии награждения.', genders: { Organiser: 'f', Gulmira: 'f' },
      script: `Organiser: Good afternoon, Excellence Awards office.
Gulmira: Hello. I would like to ask about the school awards evening. My son has been nominated for the Science Prize.
Organiser: Congratulations. May I have his name?
Gulmira: Yerbol Mukhamedov. M-U-K-H-A-M-E-D-O-V.
Organiser: Thank you. The ceremony will be on Friday the nineteenth of June. Earlier we said the twentieth, but the hall is not available on Saturday.
Gulmira: What time does it start?
Organiser: At six thirty. Guests should arrive by six, because the seats are not numbered.
Gulmira: Where is it?
Organiser: In the Grand Hall of the town theatre. The entrance is on Mir Street.
Gulmira: How many guests can each student bring?
Organiser: Three. If you need more tickets, please let us know by the first of June.
Gulmira: And is there a dress code?
Organiser: Smart clothes are recommended. No uniform is necessary.
Gulmira: Will there be refreshments?
Organiser: Yes, after the ceremony, in the foyer. The programme will last about two hours.
Gulmira: Thank you very much. He will be delighted.
Organiser: We are proud of all our students. Please remind him to bring his own certificate of nomination.`,
      notesTitle: 'Awards evening',
      notes: [
        { pre: 'Student\'s surname:', post: '', a: ['Mukhamedov'], e: 'Фамилия — Mukhamedov.' },
        { pre: 'Date: June', post: '', a: ['19', '19th', 'nineteenth', 'the 19th'], e: '20-е было прежней датой, церемония — 19-го.' },
        { pre: 'Start time:', post: '', a: ['6:30', '6.30', 'half past six', '18:30', 'six thirty'], e: 'Начало в 18:30.' },
        { pre: 'Entrance on', post: 'Street', a: ['Mir'], e: 'Вход с улицы Мир.' },
        { pre: 'Number of guests per student:', post: '', a: ['3', 'three'], e: 'Каждый ученик может привести трёх гостей.' }
      ],
      mc: [
        { q: 'What prize has Yerbol been nominated for?', opts: ['the Science Prize', 'the Sports Prize', 'the Arts Prize'], a: 'A', e: 'Научная премия.' },
        { q: 'What is recommended for clothing?', opts: ['smart clothes', 'school uniform', 'casual clothes'], a: 'A', e: 'Нарядная одежда; форма не нужна.' },
        { q: 'What should Yerbol bring?', opts: ['his certificate of nomination', 'a speech', 'a photograph'], a: 'A', e: 'Свидетельство о номинации.' }
      ]
    },
    writing: {
      title: "Al-Mu'izz — awards and motivation", spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о роли наград и публичного признания.',
      task2: {
        prompt: 'Some people believe that public awards and prizes are the best way to motivate people to achieve more. To what extent do you agree or disagree?',
        keywords: ['awards', 'prizes', 'motivation', 'recognition', 'achievement', 'competition', 'rewards', 'intrinsic', 'effort', 'teamwork', 'pride', 'workplace'],
        model: `Public awards are common in schools, workplaces and the arts, and many people consider them an effective motivator. I agree that recognition can inspire achievement, but I do not believe that prizes are the best or the only way to motivate people.

The case for awards rests on the human desire for recognition. A prize signals that effort has been noticed, and this can encourage the winner and inspire others to try harder. In schools, a ceremony that honours students for science or sport communicates the values of the community. In organisations, public recognition often improves morale, as employees feel that their contribution matters.

However, awards have limitations. Since only a few can win, many capable people may feel excluded and discouraged. In addition, a strong emphasis on prizes can shift the focus from the work itself to the reward. Some psychologists suggest that when people are motivated mainly by external rewards, their interest in the activity may decline, whereas those motivated by curiosity or meaning tend to persist longer. Competition for awards may also damage cooperation, as colleagues begin to see each other as rivals.

More effective motivation, in my view, combines several elements: clear goals, regular constructive feedback, a sense of progress and genuine appreciation. Awards can be part of this mixture if they are fair and transparent and if they recognise teams and improvement as well as outstanding results.

In conclusion, public recognition can motivate people and should not be abandoned, but it works best when it supplements, rather than replaces, deeper sources of motivation such as interest, purpose and supportive relationships.`,
        analysis: [
          'Task Response: градуированная позиция, оба аспекта (польза и ограничения) раскрыты.',
          'Аргументация: внешняя vs внутренняя мотивация, влияние на сотрудничество; итог — сочетание факторов.',
          'Cohesion: However / In addition / More effective motivation, in my view…; повтор ключевых слов recognition и motivation.',
          'Lexical Resource: morale, transparent, constructive, supplements; хеджирование (suggest, may, tend to).'
        ]
      }
    },
    speaking: {
      title: "Al-Mu'izz — recognition and an award", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о награде или признании и обсуждение мотивации.',
      keywords: ['award', 'prize', 'recognition', 'proud', 'ceremony', 'achievement', 'certificate', 'effort', 'congratulate', 'success'],
      part1: [
        { q: 'Have you ever won a prize?', a: 'A few small ones: a school competition in geography and a prize for an essay. They were not important in themselves, but I remember the feeling of being recognised.' },
        { q: 'Do you like competing with others?', a: 'In friendly contexts, yes. I find that competition makes me more focused, but I do not like it when it turns into rivalry.' },
        { q: 'How do you celebrate your achievements?', a: 'Quietly, with my family. A good dinner and a conversation are enough for me.' },
        { q: 'Do you think people should be rewarded for good work?', a: 'Yes, rewards show appreciation. They do not have to be expensive; a sincere thank-you can be as meaningful as a prize.' }
      ],
      part2: {
        topic: 'Describe an occasion when someone was publicly recognised for an achievement.', bullets: ['who the person was', 'what they achieved', 'how they were recognised', 'and explain how you felt about it.'],
        plan: [{ h: '1. Who', t: 'My colleague, Mr Daulet, retiring teacher.' }, { h: '2. Achievement', t: 'Thirty years of teaching, many students.' }, { h: '3. Recognition', t: 'Ceremony, medal, speeches by former students.' }, { h: '4. Feelings', t: 'Proud, moved; inspiring.' }],
        model: `I would like to describe an occasion when my colleague, Mr Daulet, was publicly honoured for thirty years of teaching, shortly before his retirement.

Mr Daulet taught physics at our school for three decades. He was not a flamboyant person, but he was extremely dedicated: he stayed after lessons to help weaker students, he built simple laboratory equipment from scrap, and several of his students later became engineers and scientists. He never asked for recognition.

The school decided to organise a ceremony in the assembly hall. Parents, teachers and students attended, and I was among the audience. The director spoke first and presented him with a medal and a certificate. Then, to everyone\'s surprise, former students came onto the stage, one after another, and told short stories about how he had influenced their lives. One of them, now a doctor, said that he had decided to study medicine because of an experiment in Mr Daulet\'s class.

I felt proud and deeply moved. It was wonderful to see a person recognised not for being famous or rich, but for years of quiet, steady work. Mr Daulet himself looked slightly embarrassed, but I could see that his eyes were wet.

The event made me think about what real success is. It is not a single moment of glory, but the long-term effect that one has on others. Since then, I have tried to say thank you to my own teachers while I still have the chance.`
      },
      part3: [
        { q: 'Why is recognition important for people?', a: 'Because it confirms that their effort has value. People who feel appreciated are generally more engaged and more willing to help others. Lack of recognition can lead to frustration.' },
        { q: 'Should all students receive prizes, or only the best?', a: 'It is better to recognise different strengths. If prizes go only to the highest scorers, many students feel invisible. Awards for improvement, kindness or teamwork can motivate everyone.' },
        { q: 'Do you think that celebrities receive too much attention?', a: 'In some cases, yes, because their fame can overshadow people with greater social contributions, such as nurses or teachers. The media could do more to highlight ordinary achievers.' }
      ]
    }
  });

  /* ===== 25 · Al-Mudhill ===== */
  put(25, {
    listening: {
      title: 'Al-Mudhill — a school anti-bullying meeting', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Различать позиции собеседников и следить за пунктами политики школы.',
      context: 'Part 3. Директор и родитель обсуждают меры против травли в школе.', genders: { Principal: 'f', Parent: 'm' },
      script: `Principal: Thank you for coming, Mr Karimov. You asked about our policy on bullying.
Parent: Yes. My daughter says that some students make fun of others online, and I would like to know what the school does.
Principal: We take it very seriously. First, the school has a clear definition: bullying is repeated behaviour that humiliates or harms someone. A single argument is not bullying, but a pattern of mockery is.
Parent: What happens when a student reports it?
Principal: The class teacher records the report within one day. Then the school counsellor speaks with all students involved. We do not punish immediately; we try to understand what happened.
Parent: Is that effective?
Principal: In most cases it is, but when behaviour continues, there are consequences, such as a meeting with parents and, if necessary, a suspension of three days.
Parent: Not a week?
Principal: A week is only for very serious cases. We also run a workshop on respect once a month, on the second Tuesday.
Parent: What about online bullying?
Principal: This is more difficult, because it happens outside school. We ask students to save screenshots, and the counsellor works with parents. We also teach digital citizenship in the ninth grade.
Parent: I appreciate that. How can I help?
Principal: Talk to your daughter regularly, listen without judging, and tell us immediately. Silence is the biggest problem.
Parent: Thank you, I will.`,
      notesTitle: 'School policy on bullying',
      notes: [
        { pre: 'Bullying is', post: 'behaviour that humiliates or harms.', a: ['repeated'], e: 'Травля — повторяющееся поведение.' },
        { pre: 'The teacher records a report within', post: 'day(s).', a: ['1', 'one', 'a day'], e: 'В течение одного дня.' },
        { pre: 'Usual suspension:', post: 'days', a: ['3', 'three'], e: 'Три дня (неделя — только для серьёзных случаев).' },
        { pre: 'Monthly respect workshop: second', post: '', a: ['Tuesday'], e: 'Второй вторник месяца.' },
        { pre: 'Digital citizenship is taught in grade', post: '', a: ['9', 'nine', 'ninth'], e: 'В девятом классе.' }
      ],
      mc: [
        { q: 'What does the principal say about a single argument?', opts: ['it is not bullying', 'it is serious bullying', 'it must be punished'], a: 'A', e: 'Единичная ссора травлей не является.' },
        { q: 'What should students save in cases of online bullying?', opts: ['screenshots', 'passwords', 'emails from teachers'], a: 'A', e: 'Скриншоты.' },
        { q: 'What does the principal call the biggest problem?', opts: ['silence', 'lack of rules', 'parents\' behaviour'], a: 'A', e: 'Молчание.' }
      ]
    },
    writing: {
      title: 'Al-Mudhill — bullying in schools', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины травли и меры школ и родителей.',
      task2: {
        prompt: 'Bullying is a serious problem in many schools. What are the main causes of bullying, and what can schools and parents do to reduce it?',
        keywords: ['bullying', 'schools', 'parents', 'causes', 'victims', 'respect', 'empathy', 'online', 'teachers', 'prevention', 'power', 'support'],
        model: `Bullying causes lasting harm to children, and understanding its causes is the first step toward reducing it. The roots lie in social dynamics and in family and media influences, while effective responses require cooperation between schools and parents.

One major cause is the desire for power and status. Children who feel insecure may try to gain a position in the group by humiliating others, and bystanders often support them to avoid becoming targets. Another cause is experience at home or in the media: a child who sees aggression rewarded, or who is treated harshly at home, may regard cruelty as normal. Online platforms add a further dimension, since anonymity and distance reduce empathy and make mockery easy to repeat.

Schools can take several steps. They should have a clear definition of bullying and a simple, safe process for reporting it, so that victims are not afraid of consequences. Teachers need training to recognise early signs, such as exclusion from groups or sudden changes in a child\'s behaviour. Programmes that teach empathy and conflict resolution, including peer mediation, can change the culture of a class and encourage bystanders to support victims rather than join the aggressors. Persistent bullies need firm but constructive responses that explain why their behaviour is harmful and help them to change.

Parents have an equally important role. They can talk to their children regularly, listen without judging, and monitor online activity sensibly. By modelling respectful behaviour and treating others with dignity, they teach more than any rule.

In conclusion, bullying arises from insecurity, harmful examples and the nature of online communication, and it can be reduced by clear school policies, empathy education and active support at home.`,
        analysis: [
          'Task Response: причины (власть, пример, интернет) и меры (школа, родители) раскрыты по порядку вопроса.',
          'Аргументация: механизм поведения (свидетели поддерживают), роль безопасных механизмов сообщения.',
          'Cohesion: One major cause / Another cause / A further dimension; переходы Schools / Parents.',
          'Lexical Resource: bystanders, peer mediation, exclusion, constructive; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Mudhill — standing up for someone', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о защите другого человека и обсуждение уважения и травли.',
      keywords: ['stand up', 'unfair', 'respect', 'bully', 'courage', 'defend', 'kind', 'speak', 'brave', 'protect'],
      part1: [
        { q: 'Do you think children can be cruel to each other?', a: 'Unfortunately, yes. Children can be careless with words, often without realising the effect. Guidance from adults is important.' },
        { q: 'How should people react when they see someone being teased?', a: 'Ideally, they should speak calmly or inform an adult. Staying silent often encourages the person who is teasing.' },
        { q: 'Are you good at defending your opinions?', a: 'I try to be, as long as it is done politely. I prefer to give reasons and listen to the other side.' },
        { q: 'Who taught you to respect others?', a: 'My parents. They told me that a person\'s dignity is more important than winning an argument.' }
      ],
      part2: {
        topic: 'Describe a time when you stood up for someone who was treated unfairly.', bullets: ['who the person was', 'what happened', 'what you did', 'and explain how you felt afterwards.'],
        plan: [{ h: '1. Who', t: 'A new classmate, Ilyas.' }, { h: '2. What', t: 'Some students mocked his accent.' }, { h: '3. Action', t: 'Said it was unacceptable; sat with him.' }, { h: '4. Feelings', t: 'Nervous, then proud; we became friends.' }],
        model: `I would like to describe a time at school when I stood up for a new classmate named Ilyas, who was being mocked.

Ilyas had moved to our city from a small village and spoke with a strong regional accent. In the first weeks, a few students started imitating the way he talked, and the others laughed. At first it seemed like a joke, but I noticed that he sat alone at lunch and looked down whenever he spoke.

One day during the break, the imitation became louder than usual, and I saw Ilyas\'s face turning red. I felt a mixture of anger and fear, because I did not want to become a target myself. But I realised that if nobody said anything, it would continue. So I stood up and said, calmly, that it was not funny and that everyone has an accent. Then I sat down next to Ilyas and asked him about the village where he grew up.

There was an uncomfortable silence, and then a couple of other students came to sit with us. The mocking stopped. In the following days, we started to talk, and I discovered that he was an excellent chess player and a very good friend.

I felt nervous at the time and proud afterwards. What I learned is that standing up for someone does not require a speech; a simple act, such as sitting beside a person, can change the atmosphere. Ilyas and I are still friends today.`
      },
      part3: [
        { q: 'Why do some people stay silent when they see unfair treatment?', a: 'Fear of becoming a target, or the belief that someone else will react. Social pressure also plays a role. Knowing that others will support you makes it easier to speak.' },
        { q: 'What are the effects of bullying on young people?', a: 'It can cause anxiety, low confidence and problems with studies, and sometimes the effects last into adulthood. Early support is therefore crucial.' },
        { q: 'How can online bullying be reduced?', a: 'Through education about respectful behaviour, clear reporting systems on platforms and stronger consequences for harmful content. Parents and teachers should also stay informed about what young people do online.' }
      ]
    }
  });

  /* ===== 26 · As-Sami' ===== */
  put(26, {
    listening: {
      title: "As-Sami' — an active listening workshop", spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за последовательностью объявлений и числами.',
      context: 'Part 2. Тренер объясняет программу мастер-класса по активному слушанию.', genders: { Trainer: 'm' },
      script: `Trainer: Good morning and welcome to the workshop on active listening. My name is Nurlan, and I will lead the sessions.
Trainer: The workshop lasts one day. We begin at nine thirty. If you were told ten, that was an earlier plan. We finish at four. Lunch is provided in the next room.
Trainer: There are three parts. In the first part, we explore why listening is difficult. Studies suggest that we think faster than people speak, so our minds wander. We will try an exercise where you listen for three minutes without saying a word.
Trainer: The second part is practice in pairs. One person speaks for four minutes about a challenge at work, and the other only listens. Then the listener summarises what was heard, and the speaker says whether it was accurate. You will be surprised how often the summary is not quite right.
Trainer: In the third part, we discuss techniques. Look at the speaker. Do not interrupt. Ask open questions, such as "What was that like for you?" Notice feelings as well as facts. And do not prepare your answer while the other person is still talking.
Trainer: The group has twenty-four participants, so we will form twelve pairs. Please wear comfortable clothes, as we will sometimes sit on the floor.
Trainer: Finally, there will be a certificate at the end, and a short handout with the techniques. Are there any questions before we begin?`,
      notesTitle: 'Active listening workshop',
      notes: [
        { pre: 'Start time:', post: '', a: ['9:30', '9.30', 'half past nine', 'nine thirty', '09:30'], e: 'Начало в 9:30 (десять — прежний план).' },
        { pre: 'Silent listening exercise:', post: 'minutes', a: ['3', 'three'], e: 'Три минуты молчаливого слушания.' },
        { pre: 'Each person speaks for', post: 'minutes', a: ['4', 'four'], e: 'Четыре минуты на каждого говорящего.' },
        { pre: 'Number of participants:', post: '', a: ['24', 'twenty-four', 'twenty four'], e: 'Двадцать четыре участника, двенадцать пар.' },
        { pre: 'Finish time:', post: '', a: ['4', '4:00', 'four', '16:00', '4 pm', '4pm'], e: 'Окончание в четыре.' }
      ],
      mc: [
        { q: 'What does the listener do after the speaker finishes?', opts: ['summarises what was heard', 'gives advice', 'repeats the story word for word'], a: 'A', e: 'Пересказывает услышанное, а говорящий оценивает точность.' },
        { q: 'Which question is an example of an open question?', opts: ['What was that like for you?', 'Was it difficult?', 'Did you tell your manager?'], a: 'A', e: 'Открытый вопрос — «Каково это было для вас?».' },
        { q: 'What does the trainer recommend NOT doing?', opts: ['preparing an answer while the other is speaking', 'looking at the speaker', 'asking follow-up questions'], a: 'A', e: 'Не готовить ответ, пока собеседник ещё говорит.' }
      ]
    },
    writing: {
      title: "As-Sami' — listening and communication", spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о навыке слушания в общении.',
      task2: {
        prompt: 'Some people believe that listening is a more important communication skill than speaking. To what extent do you agree or disagree?',
        keywords: ['listening', 'speaking', 'communication', 'skill', 'understand', 'interrupt', 'relationships', 'workplace', 'conflict', 'empathy', 'attention', 'feedback'],
        model: `Communication involves both expressing and receiving messages, yet many people believe that listening is the more important skill. I agree to a considerable extent, since without careful listening, even excellent speaking fails to achieve its purpose.

The main reason is that listening is the foundation of understanding. A person who does not grasp what others need or feel cannot respond appropriately, however eloquently he or she speaks. In the workplace, managers who listen to employees are more likely to detect problems early, while teachers who listen to students can identify why a concept is confusing. In personal relationships, being listened to is often experienced as respect, and many conflicts continue simply because each side feels unheard.

Moreover, listening is more difficult than it seems. Because people think faster than they speak, attention easily drifts, and many listeners prepare their reply instead of absorbing the message. This is why training in active listening, such as summarising what has been heard and asking open questions, produces noticeable improvements in cooperation.

Nevertheless, speaking cannot be dismissed. Ideas must be expressed clearly if they are to influence others, and those who communicate poorly may be misunderstood. Leaders, teachers and negotiators all need to explain their ideas persuasively. Indeed, good speaking often depends on good listening, because a speaker who understands the audience can choose suitable words and examples.

In conclusion, listening is generally more important than speaking, as it provides the understanding on which meaningful speech depends, although the best communicators are those who master both.`,
        analysis: [
          'Task Response: градуированная позиция («to a considerable extent») и уступка («speaking cannot be dismissed»).',
          'Аргументация: слушание как основа понимания → примеры (менеджер, учитель) → механизм (внимание уходит) → вывод об их взаимосвязи.',
          'Cohesion: Moreover / Nevertheless / Indeed; повтор ключевого слова listening.',
          'Lexical Resource: eloquently, grasp, active listening, persuasively; грамматика: придаточные причины, условные структуры.'
        ]
      }
    },
    speaking: {
      title: "As-Sami' — a person who listens well", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание человека, который хорошо слушает, и обсуждение общения.',
      keywords: ['listen', 'attention', 'conversation', 'advice', 'friend', 'patient', 'understand', 'speak', 'quiet', 'care'],
      part1: [
        { q: 'Are you a good listener?', a: 'I try to be. I have learned not to interrupt, and to ask questions that show I am interested.' },
        { q: 'Do you prefer to talk or to listen?', a: 'Probably to listen, especially in a new group. You learn more when you listen, and people appreciate being heard.' },
        { q: 'Do you like listening to music when you work?', a: 'Instrumental music, yes. Songs with lyrics distract me when I am writing or reading.' },
        { q: 'What sounds do you find relaxing?', a: 'Rain and running water. They calm me after a busy day.' }
      ],
      part2: {
        topic: 'Describe a person who listens to you carefully.', bullets: ['who the person is', 'how you know them', 'how they listen', 'and explain how you feel when talking to them.'],
        plan: [{ h: '1. Who', t: 'My friend Aizhan.' }, { h: '2. How known', t: 'Since university.' }, { h: '3. How listens', t: 'Eye contact, no phone, questions.' }, { h: '4. Feelings', t: 'Relaxed, understood, clearer thinking.' }],
        model: `The person I would like to describe is my friend Aizhan, who is the best listener I know.

We met at university in our first year, and we have been friends for over ten years. She works as a psychologist now, which fits her character perfectly, although she was a good listener long before she studied it.

What distinguishes her is the way she pays attention. When you speak to her, she looks at you, puts her phone away and does not interrupt. She nods occasionally, but she never rushes to give advice. Instead, she asks questions such as "What did you feel at that moment?" or "What would you like to happen?", which helps you to examine your own thoughts. Sometimes she simply repeats a sentence of yours, and you suddenly hear what you really mean.

I remember one evening when I was very worried about changing my job. I talked for almost an hour, and she hardly said anything. At the end, I realised that I had already made the decision, and she had only listened. I thanked her, and she smiled and said that I had known the answer all along.

Talking to her makes me feel relaxed and understood. I leave our conversations with a clearer mind and a sense of being cared for. Her example has changed the way I behave: I now try to put my phone down when someone speaks to me, because attention is one of the greatest gifts we can give.`
      },
      part3: [
        { q: 'Why do many people find it hard to listen?', a: 'Because attention is easily divided, especially with phones. Many also want to speak or to prove their point. Listening requires patience and a willingness to set aside one\'s own concerns for a while.' },
        { q: 'How does technology affect face-to-face communication?', a: 'It can distract people from each other: a phone on the table signals divided attention. On the other hand, technology helps people to stay in touch across long distances. The key is to use it consciously.' },
        { q: 'Should schools teach listening skills?', a: 'Yes, because they are rarely taught directly. Exercises in summarising and asking questions can improve both learning and relationships, and are useful in any career.' }
      ]
    }
  });

  /* ===== 27 · Al-Basir ===== */
  put(27, {
    listening: {
      title: 'Al-Basir — an eye test appointment', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных пациента: фамилия, дата, время, стоимость.',
      context: 'Part 1. Клиент записывается на проверку зрения.', genders: { Receptionist: 'f', Askar: 'm' },
      script: `Receptionist: Good morning, Clear View Opticians.
Askar: Good morning. I would like to book an eye test. I have had headaches when I read.
Receptionist: Of course. May I have your name?
Askar: Askar Tleuov. T-L-E-U-O-V.
Receptionist: And your date of birth?
Askar: The third of September, nineteen ninety-two.
Receptionist: Thank you. When would you like to come? We have Monday at ten or Wednesday at three.
Askar: Could I come on Tuesday?
Receptionist: Tuesday is fully booked, I am afraid. Wednesday at three is available.
Askar: Wednesday is fine.
Receptionist: The test takes about thirty minutes. The price is thirty-five pounds, but if you need glasses, it is deducted from the price of the frames.
Askar: That is good. Is there anything I should bring?
Receptionist: If you already have glasses, please bring them. And if you use a computer a lot, the optician will ask about your habits. We are on the second floor of the Central Mall, next to the pharmacy.
Askar: I will find it. By the way, how often should people have their eyes tested?
Receptionist: Every two years for most adults, or more often if you notice changes.
Askar: Thank you very much.`,
      notesTitle: 'Eye test booking',
      notes: [
        { pre: 'Surname:', post: '', a: ['Tleuov'], e: 'Фамилия — Tleuov.' },
        { pre: 'Date of birth: 3 September', post: '', a: ['1992', 'nineteen ninety-two'], e: 'Год рождения — 1992.' },
        { pre: 'Appointment: Wednesday at', post: '', a: ['3', '3:00', 'three', '15:00', '3 pm', '3pm'], e: 'Вторник занят; среда в три.' },
        { pre: 'Price of the test: £', post: '', a: ['35', 'thirty-five', 'thirty five'], e: 'Тридцать пять фунтов.' },
        { pre: 'Location: next to the', post: '', a: ['pharmacy'], e: 'Рядом с аптекой.' }
      ],
      mc: [
        { q: 'Why does Askar want an eye test?', opts: ['he has headaches when he reads', 'his glasses are broken', 'he is applying for a driving licence'], a: 'A', e: 'У него головные боли при чтении.' },
        { q: 'What happens to the price if he needs glasses?', opts: ['it is deducted from the frames', 'it is doubled', 'it is refunded in cash'], a: 'A', e: 'Стоимость вычитается из цены оправы.' },
        { q: 'How often should most adults have an eye test?', opts: ['every two years', 'every year', 'every five years'], a: 'A', e: 'Раз в два года.' }
      ]
    },
    writing: {
      title: 'Al-Basir — screens and children', spec: 'Writing · Task 2 Problems & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Проблемы и решения: влияние экранов на детей.',
      task2: {
        prompt: 'Many children now spend several hours a day looking at screens. What problems can this cause, and what can parents and schools do to deal with them?',
        keywords: ['children', 'screens', 'screen time', 'eyesight', 'sleep', 'attention', 'parents', 'schools', 'limits', 'activity', 'social', 'habits'],
        model: `Screens are a normal part of modern childhood, but long hours in front of them can create several problems. These can be reduced if parents and schools cooperate to promote balanced habits.

Physical effects are the most obvious. Prolonged close viewing may cause eye strain and headaches, and sitting for hours reduces physical activity, which is linked to weight gain and weaker muscles. Many children also use devices late in the evening, and the stimulating content, together with bright light, can disturb sleep. Beyond health, excessive screen use may affect attention and learning: switching rapidly between videos and messages trains children to expect constant novelty, which can make longer tasks such as reading seem boring. Finally, time online may replace face-to-face play, so that social skills develop less naturally.

Parents can respond in practical ways. They can set clear and consistent limits, for example no devices during meals or an hour before bed, and explain the reasons rather than simply forbidding. It is also helpful to offer attractive alternatives, such as sport, board games or outings, because children are more willing to put down a device if something interesting is available. Parents who regulate their own use set a powerful example.

Schools can teach digital literacy, including how to recognise advertising and misinformation, and balance technology with hands-on activities, outdoor breaks and group projects. Regular eye checks and information for families about healthy use would also be valuable.

In conclusion, excessive screen time may harm health, sleep, attention and social development, yet sensible limits, interesting alternatives and good examples can restore balance.`,
        analysis: [
          'Task Response: проблемы (физические, внимание, социальные) и решения (родители, школы) раскрыты в нужном порядке.',
          'Аргументация: каждое утверждение сопровождено механизмом; лексика осторожная («may cause», «is linked to»).',
          'Cohesion: Beyond health / Finally; переход от проблем к решениям через Parents can respond.',
          'Lexical Resource: eye strain, novelty, digital literacy, misinformation; грамматика: сложные предложения, параллелизм.'
        ]
      }
    },
    speaking: {
      title: 'Al-Basir — noticing what others miss', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о случае, когда вы заметили важную деталь, и обсуждение внимания.',
      keywords: ['notice', 'observe', 'detail', 'attention', 'see', 'realise', 'careful', 'problem', 'help', 'aware'],
      part1: [
        { q: 'Are you good at noticing details?', a: 'Reasonably. As a teacher, I try to notice changes in students\' mood or behaviour, because they often reveal problems before anyone says anything.' },
        { q: 'Do you enjoy looking at the view from a window?', a: 'Very much. In the morning I often look at the street from my balcony before leaving. It is a quiet way to start the day.' },
        { q: 'Do you wear glasses?', a: 'Only for reading and for the computer. They make a noticeable difference to my headaches.' },
        { q: 'What do you notice first when you meet someone?', a: 'Their eyes and voice. I find that they say a lot about the person\'s mood.' }
      ],
      part2: {
        topic: 'Describe a time when you noticed something important that others had not noticed.', bullets: ['what you noticed', 'where you were', 'why others did not notice it', 'and explain what you did about it.'],
        plan: [{ h: '1. What', t: 'A student sat alone, looked tired.' }, { h: '2. Where', t: 'In my classroom.' }, { h: '3. Why missed', t: 'He was quiet; no disruption.' }, { h: '4. Action', t: 'Spoke privately; found family problem; support.' }],
        model: `The occasion I would like to describe happened in my classroom last winter, when I noticed that one of my students was in trouble.

His name is Timur, and he is normally an active and cheerful boy. In January, I began to see small changes. He stopped raising his hand, he sat at the back and several times I found him with his head on the desk. He did not misbehave, and his grades were still acceptable, so the other teachers did not see anything unusual. In a class of thirty students, a quiet child is easy to miss.

I decided not to ignore my impression. After the lesson, I asked Timur whether he would like to stay for a few minutes, and I said simply that I had noticed he seemed tired. At first he said that everything was fine, but I waited and did not push. After a pause, he told me that his father had lost his job and that he was working in the evenings to help the family.

I did several things. I spoke to the school counsellor, who contacted the family with information about financial support. I also adjusted deadlines for his homework and gave him a few responsibilities in class, so that he felt valued. Over the next weeks, he gradually returned to his usual self.

I was glad that I paid attention. This experience taught me that people rarely say that they need help, but they often show it in small ways, and the task of those around them is to notice.`
      },
      part3: [
        { q: 'Why do people often overlook things around them?', a: 'Attention is limited, and we focus on what is familiar or urgent. Phones and constant notifications make it worse. Slowing down is the simplest way to notice more.' },
        { q: 'Can attention be trained?', a: 'Yes, through practices such as mindfulness, observation exercises or keeping a journal. Even a few minutes of deliberate observation every day can make a difference.' },
        { q: 'Is it the responsibility of schools to notice students\' problems?', a: 'Partly. Teachers see children daily and are often the first to spot changes. However, they need training and support from counsellors, and parents should also share responsibility.' }
      ]
    }
  });

  /* ===== 28 · Al-Hakam ===== */
  put(28, {
    listening: {
      title: 'Al-Hakam — mediation versus court', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о способах разрешения споров: структура и числа.',
      context: 'Part 4. Лекция о медиации, арбитраже и суде.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good morning. Today we compare three ways of resolving a dispute: going to court, arbitration and mediation. The Arabic root h-k-m, which gives us the name Al-Hakam, the Judge, means to decide, and also to restrain. A good decision restrains conflict.
Lecturer: Let us start with court. A judge applies the law and issues a binding decision. Courts are formal and public. Their strength is authority, but a case can take a long time. In some countries, a civil case takes on average eighteen months, though this varies widely.
Lecturer: Arbitration is private. The parties choose an arbitrator, who listens to both sides and makes a decision, which is usually final. It is faster than court, often three to six months, but it can be expensive.
Lecturer: Mediation is different. The mediator does not decide. Instead, he or she helps the parties to find their own solution. This works best when people have a continuing relationship, such as neighbours or business partners. Studies suggest that agreements reached through mediation are more likely to be respected, because the parties made them voluntarily.
Lecturer: What skills does a mediator need? Three: listening without taking sides, staying calm, and asking questions that help each side to understand the other.
Lecturer: And what lesson can we apply in daily life? Before judging, hear both sides. Many disputes are created or worsened by haste.
Lecturer: For next week, prepare a short analysis of a dispute, either real or imagined, that could be solved by mediation. The limit is five hundred words.`,
      notesTitle: 'Resolving disputes',
      notes: [
        { pre: 'The root h-k-m means to decide and to', post: '', a: ['restrain'], e: 'Корень h-k-m: решать и сдерживать.' },
        { pre: 'Court: authority, but cases can take a long', post: '', a: ['time'], e: 'Суд авторитетен, но может быть долгим.' },
        { pre: 'Arbitration is faster, often', post: 'to six months.', a: ['3', 'three'], e: 'Арбитраж — от трёх до шести месяцев.' },
        { pre: 'Mediation works best with a continuing', post: '', a: ['relationship'], e: 'Медиация лучше всего подходит для продолжающихся отношений.' },
        { pre: 'Assignment limit:', post: 'words', a: ['500', 'five hundred'], e: 'Пятьсот слов.' }
      ],
      mc: [
        { q: 'What does a mediator do?', opts: ['helps the parties find their own solution', 'issues a binding decision', 'represents one party'], a: 'A', e: 'Помогает сторонам самим найти решение.' },
        { q: 'Why are mediated agreements often respected?', opts: ['they are made voluntarily', 'they are enforced by police', 'they are published'], a: 'A', e: 'Стороны согласились добровольно.' },
        { q: 'What daily-life lesson does the lecturer give?', opts: ['hear both sides before judging', 'always avoid disputes', 'rely on a lawyer'], a: 'A', e: 'Выслушать обе стороны до осуждения.' }
      ]
    },
    writing: {
      title: 'Al-Hakam — mediation or court', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение способов разрешения споров и выбор позиции.',
      task2: {
        prompt: 'Some people believe that disputes between individuals are best settled in court. Others think that independent mediators are a better solution. Discuss both views and give your own opinion.',
        keywords: ['disputes', 'court', 'mediation', 'mediators', 'judge', 'agreement', 'cost', 'relationship', 'binding', 'neighbours', 'law', 'solution'],
        model: `When two people cannot resolve a disagreement, they can ask a court to decide, or they can turn to an independent mediator. In my opinion, mediation is preferable for most everyday disputes, while courts remain essential when the law must be applied authoritatively.

Supporters of courts emphasise authority and fairness. A judge applies established law, the decision is binding, and the losing party can be compelled to comply. This is particularly important when one side is stronger than the other or when serious rights are at stake, since a mediator cannot force an agreement. Public judgements also create precedents, which make the legal system predictable.

On the other hand, litigation has disadvantages. It can be slow, costly and stressful, and the adversarial format, in which each side tries to defeat the other, often damages relationships permanently. By contrast, mediation allows both parties to explain their interests in a private and flexible setting, and the mediator helps them to design a solution that suits them. Because the settlement is voluntary, it is more likely to be observed. This approach is particularly valuable for neighbours, family members and business partners who will continue to deal with one another.

I therefore believe that courts and mediation should work together. Many legal systems already encourage parties to attempt mediation first, reserving court for cases in which no agreement can be reached or in which an authoritative ruling is necessary. This saves resources and reduces the burden on judges.

In conclusion, mediation is the better first step for ordinary disputes because it is faster and preserves relationships, but courts remain indispensable as the final guarantee of justice.`,
        analysis: [
          'Task Response: обе стороны раскрыты в отдельных абзацах; позиция («медиация сначала, суд как гарантия») ясна и подтверждена выводом.',
          'Аргументация: авторитет и прецеденты vs скорость и отношения; предложение их сочетать.',
          'Cohesion: On the other hand / By contrast / I therefore believe; ключевое слово disputes связывает абзацы.',
          'Lexical Resource: litigation, adversarial, binding, precedents, indispensable; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hakam — making a fair decision', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о справедливом решении и обсуждение суждений и споров.',
      keywords: ['decision', 'fair', 'judge', 'both sides', 'listen', 'choose', 'responsibility', 'difficult', 'dispute', 'compromise'],
      part1: [
        { q: 'Do you find it easy to make decisions?', a: 'For small matters, yes. For important ones, I like to gather information and sleep on it. I rarely regret a decision made calmly.' },
        { q: 'Who do you ask for advice?', a: 'My mother for personal matters and a colleague for work. Different people see different aspects.' },
        { q: 'Have you ever had to settle an argument between friends?', a: 'A few times. I let each side speak without interruption, and usually the problem turns out to be smaller than they thought.' },
        { q: 'Do you think rules are fair?', a: 'Most are, if they are applied equally. What I dislike is when rules are enforced selectively.' }
      ],
      part2: {
        topic: 'Describe a time when you had to make a fair decision between two people.', bullets: ['who the people were', 'what the problem was', 'how you decided', 'and explain how the people reacted.'],
        plan: [{ h: '1. Who', t: 'Two students, group project dispute.' }, { h: '2. Problem', t: 'Who deserved the higher mark.' }, { h: '3. Decision', t: 'Listened to both, checked evidence, clear criteria.' }, { h: '4. Reaction', t: 'Accepted; understood reasons.' }],
        model: `I would like to describe a decision I had to make as a teacher, when two students had a disagreement about a group project.

The students, Dana and Ruslan, had worked together on a presentation about climate zones. At the end, both claimed that they had done most of the work, and each asked me to give the other a lower mark. They were quite upset, and I felt that whatever I decided, one of them would be unhappy.

I did not decide immediately. First, I spoke to each of them separately, and I asked them to describe exactly what they had done, without commenting on the other. Then I looked at the evidence: the drafts of the slides, the dates on which they were edited and the notes they had submitted. I also asked the other two members of their group what they had observed.

It became clear that the contributions were different but both substantial. Dana had written most of the content, while Ruslan had designed the visual part and organised the practice. I explained to them the criteria for the mark, which included research, presentation and teamwork, and I showed how each had performed according to those criteria. I gave them different marks that were very close to each other.

They were not delighted, but they accepted the explanation, and what mattered most was that they felt heard. The experience taught me that fairness needs both a careful process and a clear explanation of the reasons.`
      },
      part3: [
        { q: 'What makes a decision fair?', a: 'Listening to everyone affected, using clear and consistent criteria, and explaining the reasons. A fair decision may not please everybody, but people can see that it was reached honestly.' },
        { q: 'Should young people be involved in decisions that affect them?', a: 'Yes, within reason. When young people have a say, they feel more responsible for the result and learn how to discuss and compromise.' },
        { q: 'Do you think judges should be allowed to show mercy?', a: 'In some cases, yes. Rules cannot predict every situation, and judges should have discretion to consider circumstances, provided that they act transparently and consistently.' }
      ]
    }
  });

  /* ===== 29 · Al-'Adl ===== */
  put(29, {
    listening: {
      title: "Al-'Adl — a discussion on fair grading", spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за позициями студентов и деталями оценивания.',
      context: 'Part 3. Два студента и преподаватель обсуждают справедливую систему оценивания.', genders: { Professor: 'f', Emil: 'm', Saltanat: 'f' },
      script: `Professor: Let us talk about assessment. Emil, what do you think makes grading fair?
Emil: I think everyone should be judged by the same standards, regardless of whether the teacher likes them.
Professor: Saltanat?
Saltanat: I agree, but I would add that students should know the criteria in advance. If I do not know what is expected, the grade feels arbitrary.
Professor: A very important point. In our course, the criteria are published on the first day. There are four: content, structure, language and sources, each worth twenty-five per cent.
Emil: What about students who work harder but get lower marks?
Professor: A good question. Effort matters, but the grade measures achievement. We try to recognise effort in feedback and in a separate participation mark, which is ten per cent of the final grade.
Saltanat: Are papers marked anonymously?
Professor: Yes, written exams are marked by number, not by name. This reduces bias.
Emil: Can we appeal a grade?
Professor: Of course. You have two weeks to submit a written request, and a second teacher will re-mark the paper.
Saltanat: That sounds fair. What is the deadline for the next essay?
Professor: The twenty-fifth of April. It was the twenty-second, but I have given you three more days.
Emil: Thank you.`,
      notesTitle: 'Fair assessment',
      notes: [
        { pre: 'Number of grading criteria:', post: '', a: ['4', 'four'], e: 'Четыре критерия.' },
        { pre: 'Each criterion is worth', post: 'per cent.', a: ['25', 'twenty-five', 'twenty five'], e: 'По двадцать пять процентов.' },
        { pre: 'Participation mark:', post: 'per cent of the final grade', a: ['10', 'ten'], e: 'Десять процентов итоговой оценки.' },
        { pre: 'Time to appeal a grade:', post: 'weeks', a: ['2', 'two'], e: 'Две недели.' },
        { pre: 'Next essay deadline: April', post: '', a: ['25', '25th', 'twenty-fifth', 'the 25th'], e: 'Срок продлён с 22-го на 25-е.' }
      ],
      mc: [
        { q: 'What does Saltanat think is important?', opts: ['knowing the criteria in advance', 'having more exams', 'smaller classes'], a: 'A', e: 'Знать критерии заранее.' },
        { q: 'How are written exams marked?', opts: ['by number, not by name', 'by the student\'s own teacher only', 'by a computer'], a: 'A', e: 'Анонимно, по номерам.' },
        { q: 'What happens after an appeal?', opts: ['a second teacher re-marks the paper', 'the grade is automatically raised', 'the exam is repeated'], a: 'A', e: 'Работу перепроверяет второй преподаватель.' }
      ]
    },
    writing: {
      title: "Al-'Adl — equality or need", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение двух понятий справедливости и обоснованный вывод.',
      task2: {
        prompt: 'Some people think that fairness means treating everyone in exactly the same way. Others believe that fairness means treating people according to their individual needs. Discuss both views and give your own opinion.',
        keywords: ['fairness', 'equality', 'needs', 'treat', 'justice', 'opportunity', 'rules', 'disability', 'support', 'merit', 'society', 'individual'],
        model: `The meaning of fairness is debated: some people say it requires identical treatment for everyone, while others believe it requires treatment that reflects individual needs. In my view, fairness combines both principles, and each applies in different situations.

The case for equal treatment is based on impartiality. Rules that apply to all in the same way protect people from favouritism and discrimination. A judge who gave lighter sentences to friends or a teacher who marked students according to personal feelings would be acting unfairly. Equal treatment also gives everyone clear expectations and makes it easier to trust institutions.

However, identical treatment does not always lead to equal results. A child who has a visual impairment cannot take the same examination in the same format as other children without support, and a student whose first language is different may need additional time. Providing these adjustments does not give unfair advantage; it removes obstacles so that people can compete on the basis of ability. Similarly, a tax system that asks richer citizens to contribute a larger share recognises that the same amount of money has a different burden for different people.

I believe that the key is to distinguish between standards and support. The standard by which achievement is judged should be the same for all, but the support needed to reach it may differ. For example, all students should be assessed on the same criteria, while those with learning difficulties receive extra help.

In conclusion, fairness requires equal standards and impartial rules, combined with attention to individual circumstances that prevent people from meeting them.`,
        analysis: [
          'Task Response: обе концепции объяснены, позиция («стандарты одинаковые, поддержка разная») сформулирована ясно.',
          'Аргументация: примеры (суд, экзамен с нарушением зрения, налоги), различение понятий standards и support.',
          'Cohesion: However / Similarly / I believe that the key is…; повторение ключевого слова fairness.',
          'Lexical Resource: impartiality, favouritism, impairment, discrimination; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: "Al-'Adl — fairness in my life", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о справедливости (или несправедливости) в вашей жизни и обсуждение равенства.',
      keywords: ['fair', 'unfair', 'treated', 'equal', 'rules', 'justice', 'honest', 'same', 'favourite', 'right'],
      part1: [
        { q: 'Is fairness important to you?', a: 'Very. I think trust between people depends on it. I notice quickly when something is unfair, even if it does not concern me.' },
        { q: 'Did your parents treat you and your siblings equally?', a: 'As far as I can tell, yes. They tried to give us the same attention, although each of us also had different needs.' },
        { q: 'Do you think the world is fair?', a: 'Not entirely, but I believe it can become fairer through laws, education and individual choices.' },
        { q: 'Have you ever felt that you were treated unfairly?', a: 'Once at school, when I was blamed for something that I had not done. It taught me to listen to both sides before drawing conclusions.' }
      ],
      part2: {
        topic: 'Describe a time when you were treated fairly or unfairly.', bullets: ['what happened', 'who was involved', 'how you felt', 'and explain what you learned from it.'],
        plan: [{ h: '1. What', t: 'Blamed for a classroom incident.' }, { h: '2. Who', t: 'Teacher, classmates, me.' }, { h: '3. Feelings', t: 'Angry, hurt; then relief.' }, { h: '4. Lesson', t: 'Listen to both sides; admit mistakes.' }],
        model: `The time I would like to describe is an incident at school, when I felt that I was treated unfairly, and which later turned out better than I expected.

I was about fourteen. One day, someone drew a funny picture of our teacher on the blackboard before the lesson. When the teacher came in and saw it, she asked who had done it. Nobody answered, but two students pointed at me, perhaps because I often drew in my notebooks. I was completely innocent, but the teacher believed them and told me to stay after school and clean all the boards.

I felt angry and hurt, mainly because nobody had asked for my version. I stayed, but I said clearly that I had not drawn it. Surprisingly, the teacher listened. She asked me a few questions and, to my relief, she noticed that the drawing had a style that was different from mine. The next day she apologised to me in front of the class, which was a very brave thing to do, and she asked the real author to come to speak with her.

Looking back, I learned several lessons. First, fairness needs a process: listening to the person concerned before deciding. Second, an apology from someone in authority is powerful, because it restores trust. And third, as a teacher myself now, I try never to punish a student without hearing his or her side.

That small incident has influenced how I treat my own students more than any course.`
      },
      part3: [
        { q: 'Is it always possible to treat everyone equally?', a: 'Not always, because people have different circumstances. Equal treatment is a good starting point, but sometimes people need different kinds of support to have the same chance.' },
        { q: 'Why do some people accept unfair situations?', a: 'Because they feel powerless, fear consequences or believe that nothing will change. Strong institutions and supportive communities make it easier to challenge injustice.' },
        { q: 'How can schools teach children about fairness?', a: 'By being fair themselves: clear rules, consistent consequences and a chance for children to explain. Class discussions about real dilemmas can also develop moral reasoning.' }
      ]
    }
  });

  /* ===== 30 · Al-Latif ===== */
  put(30, {
    listening: {
      title: 'Al-Latif — the power of small kindness', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о маленьких добрых поступках: структура, числа и примеры.',
      context: 'Part 4. Лекция психолога о роли небольших добрых поступков.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good afternoon. Today we examine the effect of small acts of kindness. The Arabic word latif, as in the name Al-Latif, has two linked meanings: subtle, or fine, and gentle. The name refers to attention to the smallest detail and to a kindness that works quietly.
Lecturer: Let us begin with a simple observation. Most people remember a large donation less than a personal gesture at the right moment. A short message when you are ill, a held door, a remembered birthday: these are small, but they are noticed.
Lecturer: Researchers who studied acts of kindness asked participants to perform five small kind acts in one day each week for six weeks. Participants reported higher well-being than a comparison group. I should add that studies of this kind are not all equally strong, and results vary.
Lecturer: Why do small acts matter? There are three reasons. First, they are easy, so people actually do them. Second, they show attention, and attention is what people often lack. And third, they build habits: someone who regularly notices the needs of others becomes more sensitive.
Lecturer: Here are some examples. Learn the name of the person who cleans your building. Send a message to a friend you have not contacted for months. Offer your seat. And when someone is struggling, simply ask, "How can I help?"
Lecturer: Your task for next week is to keep a kindness diary. Record one small act each day for seven days, and note how you felt. The diary is due on Thursday.`,
      notesTitle: 'Small kindness',
      notes: [
        { pre: 'Latif means subtle and', post: '', a: ['gentle'], e: 'Два значения: тонкий и мягкий.' },
        { pre: 'Participants performed', post: 'kind acts in one day each week.', a: ['5', 'five'], e: 'Пять добрых поступков в день в неделю.' },
        { pre: 'The study lasted', post: 'weeks.', a: ['6', 'six'], e: 'Шесть недель.' },
        { pre: 'Diary: one small act each day for', post: 'days', a: ['7', 'seven'], e: 'Семь дней.' },
        { pre: 'Diary due on', post: '', a: ['Thursday'], e: 'Дневник — к четвергу.' }
      ],
      mc: [
        { q: 'What do people remember more, according to the lecturer?', opts: ['personal gestures at the right moment', 'large donations', 'official awards'], a: 'A', e: 'Личные жесты в нужный момент.' },
        { q: 'What does the lecturer say about the study?', opts: ['results vary and not all studies are equally strong', 'it proved kindness cures illness', 'it was a very large study'], a: 'A', e: 'Результаты разнятся, исследования не все одинаково надёжны.' },
        { q: 'Which suggestion is given for someone who is struggling?', opts: ['ask "How can I help?"', 'give advice immediately', 'wait until they ask'], a: 'A', e: 'Спросить: «Чем могу помочь?».' }
      ]
    },
    writing: {
      title: 'Al-Latif — small kindness or large donations', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о ценности маленьких добрых поступков.',
      task2: {
        prompt: 'Some people say that small acts of kindness in everyday life make a bigger difference to society than large donations to charities. To what extent do you agree or disagree?',
        keywords: ['kindness', 'small acts', 'donations', 'charity', 'society', 'community', 'difference', 'everyday', 'habits', 'trust', 'poverty', 'resources'],
        model: `It is sometimes claimed that small acts of kindness do more for society than large donations. I partly agree: everyday kindness shapes the character of a community, but major donations address needs that no individual gesture can meet.

The strength of small acts lies in their frequency and their personal nature. Helping a neighbour with shopping, encouraging a nervous colleague or greeting a stranger costs almost nothing, yet these gestures create trust and a sense of belonging. Since they are available to everyone, regardless of income, they can be repeated daily by millions of people. They also have a multiplying effect: a person who has been treated kindly is more likely to behave kindly toward others, so a single gesture may spread through a community.

Nevertheless, large donations make a difference in ways that individual kindness cannot. Building a hospital, funding medical research or providing clean water for a region requires resources and organisation beyond the capacity of private gestures. Charities can also direct funds to people who have no neighbours able to help them, such as victims of disasters in distant countries. In this sense, dismissing donations would be unrealistic.

I believe, therefore, that the two are complementary. Large-scale giving solves structural problems, while personal kindness makes communities humane and supports people between the moments when institutions can reach them. A society needs both generous institutions and considerate individuals.

In conclusion, small acts of kindness are indispensable for the quality of social life, but they cannot replace large-scale charity, which meets material needs on a scale that individuals alone cannot match.`,
        analysis: [
          'Task Response: градуированная позиция (partly agree) и взвешенный вывод о дополнении.',
          'Аргументация: частота, доступность и «эффект умножения» малых дел vs масштабные проекты (больница, вода).',
          'Cohesion: Nevertheless / I believe, therefore / In this sense; ключевое слово kindness повторяется смыслово.',
          'Lexical Resource: multiplying effect, structural problems, indispensable, considerate; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Latif — a small act of kindness', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о небольшом добром поступке по отношению к вам и обсуждение доброты.',
      keywords: ['kind', 'small', 'gesture', 'unexpected', 'stranger', 'help', 'grateful', 'thoughtful', 'surprise', 'remember'],
      part1: [
        { q: 'Do you think small things can make a big difference?', a: 'Yes, often. A kind word at the right moment can change someone\'s whole day. I have experienced it myself.' },
        { q: 'Do you often do small favours for people?', a: 'I try to. Holding a door, lending a pen, helping to carry bags: these are simple things, but they make daily life warmer.' },
        { q: 'How do you feel when a stranger is kind to you?', a: 'Pleasantly surprised, and also encouraged. It reminds me that people are generally good.' },
        { q: 'Do you remember kind things people did for you as a child?', a: 'Yes, many. My neighbour often gave me fruit from her garden and a kind word, which I still remember.' }
      ],
      part2: {
        topic: 'Describe a small act of kindness that someone did for you.', bullets: ['what the person did', 'when and where it happened', 'why it was unexpected', 'and explain why you still remember it.'],
        plan: [{ h: '1. What', t: 'A stranger paid my bus fare / helped.' }, { h: '2. When', t: 'Rainy evening, I forgot my wallet.' }, { h: '3. Unexpected', t: 'No relation; just smiled.' }, { h: '4. Why remember', t: 'Showed generosity; I now pass it on.' }],
        model: `The small act of kindness I would like to describe happened a few years ago on a rainy evening in the city.

I had been working late and was very tired. I got on a bus to go home, and when the driver asked for the fare, I realised that I had left my wallet on my desk. I searched my pockets, but I only had a few coins, which were not enough. I felt embarrassed, especially since there was a line of people behind me, and I was about to get off and walk home in the rain.

At that moment, a woman, who was perhaps sixty, said quietly to the driver that she would pay for me. She did not make a comment or a speech; she simply gave the driver the money and smiled. When I tried to thank her and to ask for her details so that I could repay her, she said that it was nothing, and that I should pass it on when I had the chance.

What made the gesture unexpected was that she did not know me and had nothing to gain. The amount was very small, but the way she did it, without any fuss, was what mattered most.

I still remember it because it changed my mood completely. I arrived home feeling warm instead of exhausted. Since then, I have tried to follow her advice: I pay for coffee for people who forget their cards, and I try to notice who needs a little help. It is a reminder that kindness, even in its quietest form, spreads.`
      },
      part3: [
        { q: 'Why do small acts of kindness matter in society?', a: 'They build trust and make people feel they belong. A community where people notice each other is more resilient, because help comes quickly in difficult times.' },
        { q: 'Is it easier to be kind in a small town than in a big city?', a: 'Generally yes, because people know each other and notice problems. In cities, anonymity can reduce kindness, but it can also be overcome through neighbourhood groups and volunteering.' },
        { q: 'Should schools encourage children to do kind acts?', a: 'Yes, through projects such as helping younger students or visiting elderly neighbours. When children experience the satisfaction of helping, kindness becomes a habit.' }
      ]
    }
  });
})();

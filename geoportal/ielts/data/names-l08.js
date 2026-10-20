// Имена 71–80: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 71 · Al-Muqaddim ===== */
  put(71, {
    listening: {
      title: 'Al-Muqaddim — a time-management coaching session', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных консультации: фамилия, время, цена, формат.',
      context: 'Part 1. Студент записывается на консультацию по расстановке приоритетов.', genders: { Coordinator: 'f', Bekzat: 'm' },
      script: `Coordinator: Good morning, Study Skills Centre.
Bekzat: Good morning. I would like to book a coaching session on managing my time. I am overwhelmed with deadlines.
Coordinator: Certainly. May I have your name?
Bekzat: Bekzat Orazov. O-R-A-Z-O-V.
Coordinator: Thank you. Which year are you in?
Bekzat: The third year of a law degree.
Coordinator: A session lasts fifty minutes. The coach has an opening on Tuesday at ten or Thursday at one.
Bekzat: Could I come on Wednesday?
Coordinator: I am afraid not; Wednesday is for group workshops. Tuesday at ten, then?
Bekzat: Yes, please.
Coordinator: The first session is free. After that, each one costs twelve pounds. We will ask you to bring your timetable, a list of your deadlines and your usual weekly schedule.
Bekzat: Will the coach teach a particular method?
Coordinator: Yes. The main idea is to put first things first. You list your tasks, mark the three most important ones and do the most difficult one in the morning.
Bekzat: That sounds simple.
Coordinator: It is simple, but it is not easy. Most students find that the hardest part is saying no to less important things.
Bekzat: I am sure that is true.
Coordinator: We are in Room twenty-two, on the second floor of the Library building.`,
      notesTitle: 'Time-management coaching',
      notes: [
        { pre: 'Surname:', post: '', a: ['Orazov'], e: 'Фамилия — Orazov.' },
        { pre: 'Studying: year', post: 'of law', a: ['3', 'three', 'third', 'the third'], e: 'Третий курс юриспруденции.' },
        { pre: 'Session length:', post: 'minutes', a: ['50', 'fifty'], e: 'Пятьдесят минут.' },
        { pre: 'Appointment: Tuesday at', post: '', a: ['10', 'ten', '10:00', '10 am', '10am'], e: 'Вторник в десять.' },
        { pre: 'Price after the first session: £', post: '', a: ['12', 'twelve'], e: 'Двенадцать фунтов.' }
      ],
      mc: [
        { q: 'What is the main idea of the method?', opts: ['put first things first', 'work all night', 'avoid planning'], a: 'A', e: 'Ставить главное на первое место.' },
        { q: 'What do most students find hardest?', opts: ['saying no to less important things', 'making a list', 'waking up early'], a: 'A', e: 'Говорить «нет» менее важному.' },
        { q: 'What day is for group workshops?', opts: ['Wednesday', 'Tuesday', 'Thursday'], a: 'A', e: 'Среда.' }
      ]
    },
    writing: {
      title: 'Al-Muqaddim — priorities in the school curriculum', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о приоритетах в школьной программе.',
      task2: {
        prompt: 'Some people believe that schools should give priority to academic subjects such as mathematics and science over subjects such as art, music and sport. To what extent do you agree or disagree?',
        keywords: ['schools', 'academic subjects', 'mathematics', 'science', 'art', 'music', 'sport', 'curriculum', 'priority', 'skills', 'careers', 'creativity'],
        model: `Time in the school day is limited, so priorities must be set. I agree that core academic subjects deserve a central place, but I do not believe that art, music and sport should be treated as secondary.

The case for academic priority is clear. Mathematics, science and language provide the basic knowledge and thinking skills on which most careers and further studies depend. A student who does not master reading or numeracy will face difficulties in almost every field, and in a competitive economy, these subjects are used to determine access to university and employment. It is therefore reasonable for schools to ensure that these subjects receive the most hours and the best teaching.

Nevertheless, other subjects contribute in ways that academic lessons cannot. Sport promotes health and teaches teamwork and discipline; music and art develop creativity, concentration and emotional expression. Research suggests that such activities can improve motivation and well-being, and many students find in them their reason for liking school. Moreover, the modern economy values creativity and cooperation as much as technical knowledge, and these are developed by activities that go beyond textbooks.

Therefore, the best approach is a balanced curriculum with a strong academic core and a guaranteed place for the arts and physical education. Schools can integrate them: for example, using music to teach mathematics concepts such as rhythm and fractions, or sport to teach statistics. Cutting these subjects to give more time to examinations often produces tired and less motivated students.

In conclusion, academic subjects should come first in terms of time and standards, but art, music and sport are essential parts of a good education and should not be sacrificed.`,
        analysis: [
          'Task Response: градуированная позиция («академические — центр, но не за счёт искусств и спорта»).',
          'Аргументация: базовые навыки и доступ к карьере vs креативность, здоровье, мотивация; идея интеграции предметов.',
          'Cohesion: Nevertheless / Moreover / Therefore; ключевое слово priority.',
          'Lexical Resource: numeracy, core, guaranteed, integrate; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muqaddim — putting something first', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о выборе приоритета и обсуждение расстановки важного.',
      keywords: ['priority', 'first', 'important', 'choose', 'decision', 'sacrifice', 'family', 'time', 'balance', 'urgent'],
      part1: [
        { q: 'How do you decide what to do first each day?', a: 'I write down three tasks in the evening and choose the most difficult for the morning. This simple routine prevents me from wasting time on small things.' },
        { q: 'Do you often have too many things to do?', a: 'At certain times of the year, yes, especially around exams. I handle it by listing and by saying no to non-essential requests.' },
        { q: 'Is it easy for you to say no?', a: 'It used to be hard, but I have learned that saying no to one thing means saying yes to something more important.' },
        { q: 'What is most important in your life right now?', a: 'My family and my work, in that order. Everything else has to fit around them.' }
      ],
      part2: {
        topic: 'Describe a time when you had to choose between two important things.', bullets: ['what the two things were', 'why it was difficult to choose', 'what you chose', 'and explain how you felt about your decision.'],
        plan: [{ h: '1. Two things', t: 'Work conference vs my sister\'s wedding rehearsal.' }, { h: '2. Difficult', t: 'Both mattered; same day.' }, { h: '3. Chose', t: 'Family; sent colleague with notes.' }, { h: '4. Felt', t: 'Relieved, no regret.' }],
        model: `I would like to describe a time when I had to choose between an important professional event and a family occasion.

Last autumn I was invited to speak at a regional teachers\' conference. It was a good opportunity to present my work and to meet people in my field, and I had been preparing for several weeks. Unfortunately, the date was the same as the family gathering before my sister\'s wedding, which was to be held the next day. My sister had asked me, a month before, to be present because I was to say a few words at the dinner.

It was difficult for several reasons. Both events were important and could not be repeated. If I missed the conference, I might not have another chance for a year. If I missed the family dinner, I would disappoint my sister on a day that meant a great deal to her. I spent two nights thinking about it and asked my mother and a colleague for advice.

In the end, I chose to be with my family. I realised that the conference would offer other opportunities, whereas this evening was unique. I wrote to the organisers, explained the situation and arranged for a colleague to present the paper with my notes. They were very understanding.

I felt relieved when I made the decision and have never regretted it. My sister was moved, and the dinner was one of the warmest evenings I remember. The experience taught me that when two good things compete, it helps to ask which one cannot be postponed.`
      },
      part3: [
        { q: 'Why is it difficult to set priorities?', a: 'Because everything often seems important or urgent, and emotions are involved. Having clear values makes choices easier.' },
        { q: 'Should young people prioritise career or family?', a: 'It depends on personal circumstances, but ideally neither should be completely sacrificed. Many people discover that a stable personal life supports professional success.' },
        { q: 'How can schools teach students to manage their time?', a: 'By teaching planning skills, giving long-term assignments with milestones and discussing examples. Practising with real schedules is the most effective way.' }
      ]
    }
  });

  /* ===== 72 · Al-Mu'akhkhir ===== */
  put(72, {
    listening: {
      title: "Al-Mu'akhkhir — beating procrastination", spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за позициями студентов и приёмами против откладывания.',
      context: 'Part 3. Студенты и консультант обсуждают проблему откладывания дел.', genders: { Advisor: 'f', Nurlan: 'm', Zhadyra: 'f' },
      script: `Advisor: Let us talk about procrastination. Nurlan, when do you put things off?
Nurlan: Usually with essays. I tell myself that I work better under pressure, so I start the night before.
Advisor: Zhadyra?
Zhadyra: For me it is the opposite. I am afraid that my work will not be good enough, so I avoid beginning.
Advisor: Both are common. Research suggests that procrastination is less about laziness and more about managing unpleasant feelings. We delay a task because it makes us anxious, bored or uncertain.
Nurlan: So what can we do?
Advisor: Four techniques. One: make the first step very small, such as writing one sentence. Two: set a timer for twenty-five minutes and work until it rings. Three: remove distractions, for example by switching off notifications. Four: reward yourself after the session.
Zhadyra: What if I still cannot start?
Advisor: Then break the task into smaller parts and begin with the easiest. Momentum is more important than perfection.
Nurlan: And what about deadlines?
Advisor: Set your own earlier deadline, two days before the real one.
Zhadyra: Is some delay ever useful?
Advisor: Yes. Waiting before replying to an angry message, or giving an idea time to develop, can be wise. The problem is delay that comes from avoidance.
Nurlan: That is a helpful difference. Thank you.`,
      notesTitle: 'Procrastination',
      notes: [
        { pre: 'Nurlan starts essays the', post: 'before.', a: ['night'], e: 'За ночь до срока.' },
        { pre: 'Zhadyra is afraid her work will not be good', post: '', a: ['enough'], e: 'Боится, что работа недостаточно хороша.' },
        { pre: 'Number of techniques:', post: '', a: ['4', 'four'], e: 'Четыре приёма.' },
        { pre: 'Timer: work for', post: 'minutes', a: ['25', 'twenty-five', 'twenty five'], e: 'Двадцать пять минут.' },
        { pre: 'Own deadline set', post: 'days before the real one.', a: ['2', 'two'], e: 'За два дня.' }
      ],
      mc: [
        { q: 'What is procrastination about, according to the research mentioned?', opts: ['managing unpleasant feelings', 'laziness', 'lack of intelligence'], a: 'A', e: 'Прежде всего управление неприятными чувствами.' },
        { q: 'What is more important than perfection?', opts: ['momentum', 'speed', 'length'], a: 'A', e: 'Движение вперёд.' },
        { q: 'When is delay useful?', opts: ['before replying to an angry message', 'before an exam', 'when avoiding a task'], a: 'A', e: 'Перед ответом на злое сообщение.' }
      ]
    },
    writing: {
      title: "Al-Mu'akhkhir — why people put things off", spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины откладывания дел и способы с ним бороться.',
      task2: {
        prompt: 'Many people often delay tasks until the last moment. What are the main causes of this habit, and what can be done to overcome it?',
        keywords: ['procrastination', 'delay', 'tasks', 'deadlines', 'motivation', 'fear', 'distraction', 'planning', 'habits', 'stress', 'productivity', 'goals'],
        model: `Procrastination, the habit of postponing tasks until the last moment, is very common among students and employees. Its causes are mostly psychological, and it can be overcome through planning and changes of habit.

One cause is the desire to avoid unpleasant emotions. A task that seems boring, difficult or uncertain creates discomfort, and putting it off brings immediate relief, even though it increases stress later. Fear of failure is another reason: people who worry that their work will not be good enough sometimes prefer not to begin, since an unfinished task cannot be judged. In addition, modern distractions, such as social media and entertainment, offer easy alternatives that are more attractive than demanding work. Finally, tasks with distant deadlines feel less urgent, and humans naturally give more weight to immediate rewards than to future benefits.

There are practical ways to reduce procrastination. Large tasks should be divided into small steps, so that the first step is easy to take. Setting personal deadlines earlier than the real ones, and using short, timed work sessions, can provide structure and momentum. Removing distractions, for instance by switching off notifications, makes it easier to concentrate. It also helps to reward oneself after finishing a step and to be kind to oneself after a failure, since harsh self-criticism tends to increase avoidance.

Schools and employers can contribute by setting intermediate deadlines and by giving constructive feedback on drafts.

In conclusion, people put things off to avoid discomfort, fear and boredom, and they can improve by breaking tasks down, limiting distractions and rewarding progress.`,
        analysis: [
          'Task Response: четыре причины и несколько групп решений, структура зеркальна вопросу.',
          'Аргументация: механизм «краткосрочное облегчение → долгосрочный стресс»; конкретные приёмы.',
          'Cohesion: One cause / Another reason / Finally; затем There are practical ways.',
          'Lexical Resource: momentum, avoidance, intermediate deadlines, distractions; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: "Al-Mu'akhkhir — waiting and delay", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о ситуации, где отсрочка оказалась полезной или вредной, и обсуждение терпения.',
      keywords: ['delay', 'postpone', 'wait', 'later', 'deadline', 'decision', 'patience', 'result', 'lesson', 'regret'],
      part1: [
        { q: 'Do you often put things off?', a: 'Less than before. I used to postpone difficult tasks, but now I do them early, and I enjoy the rest of the day more.' },
        { q: 'Are you good at meeting deadlines?', a: 'Generally, yes. I set my own deadline two days earlier, which gives me some space for mistakes.' },
        { q: 'Do you mind waiting for things?', a: 'It depends. I can wait patiently for something important, but waiting in queues annoys me.' },
        { q: 'Have you ever regretted delaying something?', a: 'Yes, a visit to my grandmother, which I postponed several times. I am glad I went in the end, but I wish I had gone earlier.' }
      ],
      part2: {
        topic: 'Describe a time when you postponed something and later realised that it was a mistake (or a good decision).', bullets: ['what you postponed', 'why you postponed it', 'what happened', 'and explain what you learned.'],
        plan: [{ h: '1. What', t: 'Replying to an important message.' }, { h: '2. Why', t: 'Was angry; wanted to calm down.' }, { h: '3. Happened', t: 'Replied next day, politely; problem solved.' }, { h: '4. Learned', t: 'Wise delay vs avoidance.' }],
        model: `I would like to describe a time when I postponed replying to an important message, and it turned out to be a wise decision.

Last spring, a colleague sent me a long message in which she criticised the way I had organised a school event. I read it in the evening, and I felt angry because I thought it was unfair. My first impulse was to reply immediately and explain exactly what was wrong with her opinion. I even wrote half a paragraph.

However, something stopped me. I remembered an advice from my father: never answer a difficult message when you are upset. So I saved the draft, closed the computer and went for a walk. Later I went to bed without sending anything.

The next morning I read the message again, and it looked different. The tone was not as harsh as I had thought, and she had made two reasonable points. I wrote a short and polite reply, thanked her for the comments and asked if we could meet. When we spoke, we discovered that the problem was a misunderstanding about the time schedule, and we solved it in ten minutes.

I learned that there is a difference between wise delay and avoidance. Waiting a few hours to calm down saved our working relationship. But I also learned that this kind of delay needs a limit, so I replied within a day. Since then, I use the same rule when I am upset: pause, think and respond tomorrow.`
      },
      part3: [
        { q: 'Why do people postpone difficult tasks?', a: 'Because the task makes them uncomfortable, and postponing gives immediate relief. Breaking the task into small steps reduces this discomfort.' },
        { q: 'Is patience a skill that can be learned?', a: 'Yes, through practice, such as waiting before reacting or working toward long-term goals. Children can learn it from adults who model patience.' },
        { q: 'Does modern technology make people less patient?', a: 'In many ways it does, since answers and entertainment are instant. People can compensate by deliberately choosing slow activities such as reading or gardening.' }
      ]
    }
  });

  /* ===== 73 · Al-Awwal ===== */
  put(73, {
    listening: {
      title: 'Al-Awwal — an exhibition of early maps', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за хронологией и числами в монологе куратора.',
      context: 'Part 2. Куратор рассказывает об экспозиции древних карт.', genders: { Curator: 'f' },
      script: `Curator: Welcome to the exhibition on early maps. I am Saltanat, the curator, and today we will look at how people first tried to draw the world.
Curator: The exhibition is open from nine thirty until five, Tuesday to Sunday. Tickets cost seven pounds. The audio guide is free with a ticket.
Curator: In the first room, you can see copies of the oldest maps known. Some clay tablets from Mesopotamia are almost four thousand years old, and they show fields and the layout of a town.
Curator: The second room is dedicated to the Greek and Roman scholars. Around the year one hundred and fifty, Ptolemy wrote a work on geography that listed the coordinates of thousands of places. His idea of using latitude and longitude was extremely influential.
Curator: In the third room, there are maps from the age of exploration. One famous example is a map drawn by an Ottoman admiral in fifteen thirteen. Another is the projection created by Mercator in fifteen sixty-nine, which is still the basis of many wall maps.
Curator: What does this show us? That every map is a first step. The first mapmakers did not have satellites. They had observation, courage and curiosity, and each generation improved the work of the previous one.
Curator: The last room is interactive. Children can draw a map of their own street, and there is a prize for the most detailed. The competition closes on the twentieth of June.
Curator: The cafe is on the ground floor. Please do not touch the exhibits.`,
      notesTitle: 'Early maps',
      notes: [
        { pre: 'Opening time:', post: '', a: ['9:30', '9.30', 'half past nine', 'nine thirty', '09:30'], e: 'Открыто с 9:30.' },
        { pre: 'Ticket price: £', post: '', a: ['7', 'seven'], e: 'Семь фунтов.' },
        { pre: 'Mesopotamian tablets are almost', post: 'years old.', a: ['4000', '4,000', 'four thousand'], e: 'Почти четыре тысячи лет.' },
        { pre: 'Ptolemy wrote around the year', post: '', a: ['150', 'one hundred and fifty'], e: 'Около 150 года.' },
        { pre: 'Mercator projection created in', post: '', a: ['1569', 'fifteen sixty-nine'], e: '1569 год.' }
      ],
      mc: [
        { q: 'What idea of Ptolemy was influential?', opts: ['latitude and longitude', 'satellite photography', 'colour coding'], a: 'A', e: 'Широта и долгота.' },
        { q: 'What does the curator say about every map?', opts: ['it is a first step', 'it is final', 'it is exact'], a: 'A', e: 'Каждая карта — первый шаг.' },
        { q: 'What can children do in the last room?', opts: ['draw a map of their own street', 'build a globe', 'watch a film'], a: 'A', e: 'Нарисовать карту своей улицы.' }
      ]
    },
    writing: {
      title: 'Al-Awwal — pioneers and recognition', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение роли первопроходцев и тех, кто совершенствует открытия.',
      task2: {
        prompt: 'Some people think that the first person to discover or invent something deserves more recognition than those who later improve it. Others believe that those who improve an idea contribute more. Discuss both views and give your own opinion.',
        keywords: ['pioneers', 'inventors', 'discovery', 'recognition', 'improve', 'innovation', 'science', 'contribution', 'first', 'progress', 'development', 'credit'],
        model: `In the history of science and technology, attention often goes to the people who made the first discovery. Others, however, argue that the improvers who made the idea useful deserve at least as much credit. In my view, both contributions are essential, and recognition should be shared fairly.

Those who honour the first discoverers emphasise courage and originality. A pioneer works without a map: he has no earlier example, faces uncertainty and often meets scepticism. Without the first step, later progress would not be possible. The early geographers who drew the first maps, for instance, started with very limited knowledge, and their work gave later explorers a basis for navigation. It is natural that society should honour those who open a new field.

On the other hand, many first ideas are rough, impractical or limited. It is frequently the improvers who correct errors, develop reliable methods and make the discovery useful to millions. The first aeroplane flew a few metres, but decades of engineering were needed to create safe air travel. Improvement requires patience, skill and often more resources than the initial idea, and without it, many inventions would remain curiosities.

I therefore believe that progress is a chain. Pioneers deserve recognition for the courage to begin, while improvers deserve credit for making ideas work. Education should teach students about both, showing that science is a collective effort across generations. Prizes and museums can also acknowledge teams, not only individuals.

In conclusion, discoverers and improvers each play an indispensable part in progress, and a fair society acknowledges both.`,
        analysis: [
          'Task Response: обе позиции раскрыты в отдельных абзацах; позиция («прогресс — цепь, оба вклада необходимы») ясна.',
          'Аргументация: смелость и оригинальность vs доработка и практичность; пример с авиацией.',
          'Cohesion: On the other hand / I therefore believe; ключевое слово recognition.',
          'Lexical Resource: scepticism, impractical, indispensable, collective effort; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Awwal — a memorable first time', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о важном «первом разе» и обсуждение начала новых дел.',
      keywords: ['first time', 'nervous', 'new', 'experience', 'remember', 'beginning', 'excited', 'learn', 'unfamiliar', 'step'],
      part1: [
        { q: 'Do you enjoy trying things for the first time?', a: 'Generally yes. The feeling of doing something new is a mixture of fear and excitement that I find stimulating.' },
        { q: 'Do you remember your first day at school?', a: 'Very clearly. I wore a white shirt, carried a heavy bag and held my mother\'s hand until the last moment.' },
        { q: 'What was the first thing you learned to cook?', a: 'Fried eggs, and I burned them. But I was proud that I had made breakfast for the family.' },
        { q: 'Are first impressions important?', a: 'They matter, but they can be wrong. I try to give people a second chance before making a final judgement.' }
      ],
      part2: {
        topic: 'Describe an important thing that you did for the first time.', bullets: ['what you did', 'when and where it was', 'how you felt before and during it', 'and explain why it was important.'],
        plan: [{ h: '1. What', t: 'My first lesson as a teacher.' }, { h: '2. When', t: 'September, age 23.' }, { h: '3. Feelings', t: 'Fear, excitement, shaking hands.' }, { h: '4. Important', t: 'Confirmed my choice; start of a career.' }],
        model: `The important thing I did for the first time was to teach a lesson on my own as a young teacher, in September, at the age of twenty-three.

I had finished university in the summer, and I had been hired at a secondary school to teach geography. I had practised teaching during my studies, but those lessons were under the supervision of an experienced teacher. This was different: thirty students aged thirteen, a locked classroom door and no one to help.

Before the lesson, I felt extremely nervous. My hands were shaking, and I checked my notes five times. I had prepared the lesson on continents and oceans, and I had brought a map and a small globe. When I walked into the room, the noise stopped, and thirty faces looked at me. For a moment, I forgot what I wanted to say, but then I noticed one boy who was looking at the globe with real curiosity, and I started by asking him what he knew about it. That question broke the tension, and I found my voice.

During the lesson, I felt a mixture of fear and joy. At the end, a girl asked me an interesting question about why the Pacific Ocean is so large, and I felt that I was truly a teacher.

It was important because it confirmed that I had chosen the right profession, and it was the beginning of a career that I still love. I am still nervous before the first lesson of every year, but I recognise that feeling as a sign that it matters.`
      },
      part3: [
        { q: 'Why is the first step often the hardest?', a: 'Because there is uncertainty and no experience to rely on, and the fear of failure is strongest. After the first step, momentum builds.' },
        { q: 'Do pioneers deserve special recognition?', a: 'I think so, because they take risks without guarantee of success. But those who improve their work also deserve credit.' },
        { q: 'How can parents help children to try new things?', a: 'By offering encouragement and a safe environment where mistakes are allowed. Praising effort rather than only success also helps.' }
      ]
    }
  });

  /* ===== 74 · Al-Akhir ===== */
  put(74, {
    listening: {
      title: 'Al-Akhir — finishing well', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о завершении дел и правиле «пик-конец».',
      context: 'Part 4. Лекция о том, как завершать проекты и события.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good morning. Today we speak about endings. The Arabic root a-kh-r, which gives the name Al-Akhir, the Last, also gives the word for the Hereafter. In a practical sense, it reminds us to think about how things end.
Lecturer: Psychologists describe the peak-end rule. People evaluate an experience largely by its most intense moment and by its ending, rather than by an average of every minute. A concert may be long, but if the last song is wonderful, the audience remembers it as a great night.
Lecturer: What does this mean for projects? A good start is important, but a strong finish gives the project its final shape in people\'s minds. In my experience, there are three common mistakes. One: stopping at ninety per cent. Many tasks are left almost finished. Two: ending without thanks. People who contributed should be acknowledged. Three: ending without reflection. Ask what worked, what did not and what you would change.
Lecturer: I suggest a simple closing ritual: a short list of what was achieved, a thank-you to each contributor and one lesson for the future. It takes about twenty minutes.
Lecturer: Endings are also important in relationships. A respectful farewell when someone leaves a job or a school keeps the door open for the future.
Lecturer: Finally, there is the idea of legacy: what remains when we have gone. It may be knowledge, a useful habit or the memory of kindness.
Lecturer: For next week, choose a project that you have finished and apply the closing ritual. Your report is due on Monday the twenty-second.`,
      notesTitle: 'Endings',
      notes: [
        { pre: 'The root a-kh-r also gives the word for the', post: '', a: ['Hereafter'], e: 'Слово «Ахира» — загробная жизнь.' },
        { pre: 'People evaluate an experience by its peak and its', post: '', a: ['ending', 'end'], e: 'Правило «пик-конец».' },
        { pre: 'Number of common mistakes:', post: '', a: ['3', 'three'], e: 'Три типичные ошибки.' },
        { pre: 'Common mistake: stopping at', post: 'per cent', a: ['90', 'ninety'], e: 'Остановиться на 90%.' },
        { pre: 'Report due on Monday the', post: '', a: ['22', '22nd', 'twenty-second', 'the 22nd'], e: 'Срок — понедельник, 22-е.' }
      ],
      mc: [
        { q: 'How long does the closing ritual take?', opts: ['about twenty minutes', 'about two hours', 'about five minutes'], a: 'A', e: 'Около двадцати минут.' },
        { q: 'What is the benefit of a respectful farewell?', opts: ['it keeps the door open for the future', 'it saves money', 'it shortens the project'], a: 'A', e: 'Оставляет дверь открытой.' },
        { q: 'What can remain as a legacy?', opts: ['knowledge or the memory of kindness', 'only money', 'only buildings'], a: 'A', e: 'Знание, привычка или память о доброте.' }
      ]
    },
    writing: {
      title: 'Al-Akhir — the end of a project', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о значении завершающего этапа работы и обучения.',
      task2: {
        prompt: 'Some people believe that the final stage of any project or course is as important as the beginning. To what extent do you agree or disagree?',
        keywords: ['final stage', 'beginning', 'project', 'course', 'completion', 'review', 'results', 'reflection', 'quality', 'motivation', 'feedback', 'learning'],
        model: `The start of a project attracts energy and enthusiasm, but the final stage is often neglected. I agree that the end is at least as important as the beginning, since it is where the quality of the result is decided and where learning is consolidated.

The first reason is quality. Many projects fail not because of a poor start but because of a weak finish: unchecked details, unfinished tasks or hurried presentations spoil good work. A report that is carefully reviewed at the end is clearer and more accurate, and a building that is completed with attention to finishing details is safer and more attractive. People also remember endings strongly, so a project that closes well leaves a positive impression of the whole experience.

Furthermore, the final stage is when people learn from what has happened. A review of what succeeded and what failed turns experience into knowledge, which can be used in future projects. In education, a final revision or a reflection on a course helps students to connect separate topics and to recognise how much they have progressed. Without this stage, lessons are often forgotten.

Nevertheless, the beginning also deserves attention. A weak start with unclear aims or poor planning can make a good finish impossible, and it is the beginning that sets the direction. It would therefore be wrong to ignore it in favour of the end.

In conclusion, the beginning and the end are both crucial, and the final stage deserves much more care than it normally receives, because it determines quality, reflection and the lasting impression of a project.`,
        analysis: [
          'Task Response: градуированная позиция («at least as important») и признание значимости начала.',
          'Аргументация: качество, память об окончании, обучение через рефлексию.',
          'Cohesion: Furthermore / Nevertheless / In conclusion; ключевая пара beginning / end.',
          'Lexical Resource: consolidated, finishing details, hurried, reflection; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Akhir — how I finished something important', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о завершении важного дела и обсуждение прощаний и итогов.',
      keywords: ['finish', 'end', 'last day', 'complete', 'farewell', 'result', 'proud', 'goodbye', 'memories', 'final'],
      part1: [
        { q: 'Do you usually finish what you start?', a: 'Most of the time. If something is not finished, it stays in my mind, so I prefer to complete things, even in a simple form.' },
        { q: 'How do you feel when something comes to an end?', a: 'A mixture of satisfaction and sadness. Endings are a chance to look back and be thankful.' },
        { q: 'Do you like long goodbyes?', a: 'No, I prefer a warm and short farewell. A sincere sentence says more than a long speech.' },
        { q: 'What was your last day at school like?', a: 'Emotional. We wrote notes to each other and took photographs, and the teachers gave us advice for life.' }
      ],
      part2: {
        topic: 'Describe a project or a period of your life that you finished.', bullets: ['what it was', 'how long it lasted', 'how it ended', 'and explain how you felt at the end.'],
        plan: [{ h: '1. What', t: 'My university degree.' }, { h: '2. How long', t: 'Four years.' }, { h: '3. Ended', t: 'Thesis defence, graduation, thanks to teachers.' }, { h: '4. Felt', t: 'Proud, grateful, a little sad.' }],
        model: `The period of my life that I would like to describe is my university degree, which lasted four years and ended in the summer after a thesis defence.

I began with a mixture of excitement and fear, and the years went by faster than I expected. There were difficult exams, long nights in the library and wonderful friendships. In the last semester, I concentrated on my final thesis, a study of river systems in the north of the country. I worked on it for almost seven months, and I rewrote the conclusion three times.

The ending was memorable. On the day of the defence, I presented my work for fifteen minutes to a committee of five professors and answered their questions. It was tense, but when they announced the result, I felt relief and pride. A few weeks later, there was a graduation ceremony, where I received my diploma in a gown, with my parents in the audience. Before that, I made a point of thanking the teachers who had helped me, and I wrote a short card to each of them.

At the end, I felt proud, grateful and a little sad. I realised that I was leaving a place that had formed me and a group of friends who would never again be together in the same way. But I also felt ready for the next stage.

The experience taught me the importance of finishing well: a proper ending turns years of work into a complete memory, which I still value.`
      },
      part3: [
        { q: 'Why is it important to end things properly?', a: 'A good ending gives a sense of completion and preserves relationships. It also allows us to learn from the experience.' },
        { q: 'Do you think people think enough about the consequences of their actions?', a: 'Not always. Many act on impulse. Asking what the result will be in a year is a simple habit that improves decisions.' },
        { q: 'What do you hope to leave behind in life?', a: 'Knowledge that helps others, former students who remember me with warmth and a family built on kindness. Material things matter much less.' }
      ]
    }
  });

  /* ===== 75 · Az-Zahir ===== */
  put(75, {
    listening: {
      title: 'Az-Zahir — a nature photography walk', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных прогулки: время, место, цена, снаряжение.',
      context: 'Part 1. Участник записывается на фотопрогулку по заповеднику.', genders: { Organiser: 'f', Rauan: 'm' },
      script: `Organiser: Wild Eye Photography Club, good afternoon.
Rauan: Good afternoon. I would like to join your nature photography walk.
Organiser: Certainly. May I have your name?
Rauan: Rauan Tursynov. T-U-R-S-Y-N-O-V.
Organiser: Thank you. The walk is on Sunday the eighth of June. We meet at six o\'clock in the morning, because the light is best at sunrise.
Rauan: Six? I thought it was seven.
Organiser: Six. We meet at the main gate of the park.
Rauan: How long is the walk?
Organiser: About four hours. The route is eight kilometres, along a lake and through a forest. It is easy, but you will need comfortable shoes.
Rauan: Do I need a special camera?
Organiser: No. A phone with a good camera is enough, though many participants bring a camera with a zoom lens. We also recommend a hat and a bottle of water.
Rauan: What will we be photographing?
Organiser: Everything that is visible, but often overlooked: patterns on tree bark, light on water, insects. The leader, Ainur, will show how to notice details.
Rauan: And the price?
Organiser: Fifteen pounds, including a printed guide. You can pay on the morning.
Rauan: Perfect. Thank you.`,
      notesTitle: 'Photography walk',
      notes: [
        { pre: 'Surname:', post: '', a: ['Tursynov'], e: 'Фамилия — Tursynov.' },
        { pre: 'Date: Sunday the', post: 'of June', a: ['8', '8th', 'eighth', 'the 8th'], e: '8 июня.' },
        { pre: 'Meeting time:', post: 'o\'clock', a: ['6', 'six', '6:00'], e: 'В шесть утра, а не в семь.' },
        { pre: 'Route length:', post: 'km', a: ['8', 'eight'], e: 'Восемь километров.' },
        { pre: 'Price: £', post: '', a: ['15', 'fifteen'], e: 'Пятнадцать фунтов.' }
      ],
      mc: [
        { q: 'Why does the group meet so early?', opts: ['the light is best at sunrise', 'the park closes early', 'it is cheaper'], a: 'A', e: 'Лучший свет на рассвете.' },
        { q: 'Which equipment is enough?', opts: ['a phone with a good camera', 'a professional studio set', 'a tripod only'], a: 'A', e: 'Телефона с хорошей камерой достаточно.' },
        { q: 'What will the leader show?', opts: ['how to notice details', 'how to edit videos', 'how to sell photographs'], a: 'A', e: 'Как замечать детали.' }
      ]
    },
    writing: {
      title: 'Az-Zahir — transparency of government', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация об открытости государственной информации.',
      task2: {
        prompt: 'Some people believe that governments should make all information about their decisions and spending available to the public. To what extent do you agree or disagree?',
        keywords: ['transparency', 'governments', 'information', 'public', 'spending', 'decisions', 'corruption', 'trust', 'security', 'privacy', 'accountability', 'citizens'],
        model: `Openness in government is widely regarded as a sign of a healthy democracy. I agree to a large extent that governments should publish information about their decisions and spending, though a small number of exceptions are justified.

The main argument for transparency is accountability. When citizens can see how public money is spent and why decisions are made, officials are more careful, and corruption is harder to hide. Published budgets and contracts allow journalists, researchers and ordinary people to check for waste or misuse, and this scrutiny encourages better management. Openness also builds trust: people are more likely to accept difficult decisions, such as tax increases, if they understand the reasons.

Furthermore, public information is valuable in itself. Open data on health, transport or the environment can be used by researchers and businesses to find solutions and create services, and citizens can participate more effectively in public debates when they are well informed.

Nevertheless, complete transparency is neither possible nor desirable. Some information, such as details of national security operations, must remain confidential to protect lives, and personal data about individuals, such as medical records, needs privacy. In addition, there is a risk that very early publication of proposals may disrupt negotiations. These exceptions, however, should be narrow, clearly defined in law and subject to independent review, so that secrecy is not used to hide mistakes.

In conclusion, governments should be open by default, publishing as much as possible about decisions and spending, with limited, well-defined exceptions for security and privacy.`,
        analysis: [
          'Task Response: градуированная позиция («to a large extent») и обоснованные исключения.',
          'Аргументация: подотчётность, доверие, полезность данных; исключения — безопасность, приватность, переговоры.',
          'Cohesion: Furthermore / Nevertheless / In addition; ключевое слово transparency.',
          'Lexical Resource: scrutiny, confidential, by default, independent review; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Az-Zahir — a place with a clear view', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание места с открытым видом и обсуждение наблюдения и открытости.',
      keywords: ['view', 'clear', 'see', 'open', 'scenery', 'horizon', 'visible', 'landscape', 'beautiful', 'notice'],
      part1: [
        { q: 'Do you like places with a good view?', a: 'Yes, very much. A wide view makes me feel calm and gives me a sense of space.' },
        { q: 'Do you notice small details around you?', a: 'More than before. As a teacher, I try to notice details about people and places, and it makes life more interesting.' },
        { q: 'Do you take photographs of scenery?', a: 'Often, but I try to look carefully with my own eyes first. A photograph should not replace seeing.' },
        { q: 'Do you prefer open spaces or enclosed rooms?', a: 'Open spaces, particularly in the morning. I like to see the sky.' }
      ],
      part2: {
        topic: 'Describe a place where you can see a beautiful, clear view.', bullets: ['where it is', 'what you can see', 'when you go there', 'and explain why you like it.'],
        plan: [{ h: '1. Where', t: 'A hill above the city.' }, { h: '2. See', t: 'City, river, mountains on clear days.' }, { h: '3. When', t: 'Early morning in spring.' }, { h: '4. Why', t: 'Calm, perspective, renewal.' }],
        model: `The place I would like to describe is a hill above my city, which has one of the clearest views that I know.

It is about twenty minutes by bus from the centre and then a ten-minute walk up a path. At the top, there is a flat area with a few benches and a low stone wall. From there, you can see the whole city spread out below you, the river winding through it and, on very clear days, a line of snowy mountains far to the south. In the morning, the air is fresh, and the view is sharp; later in the day, haze often softens it.

I go there mostly in spring, early in the morning, before work. I take a flask of tea, sit on a bench for about half an hour and simply look. Sometimes I identify buildings that I know, and at other times I watch the light change over the roofs. It is also a good place to think.

I like it for several reasons. First, the view gives a sense of perspective: from above, the daily rush seems small and orderly. Second, it is quiet, and few people go there, so I can have my own thoughts. And third, it makes me notice things that I usually overlook, such as how many parks the city has, or how the river changes colour.

Every time I come down, I feel lighter, and the day seems clearer.`
      },
      part3: [
        { q: 'Why do people enjoy panoramic views?', a: 'They create a sense of freedom and perspective. Seeing a large area at once is relaxing and gives a feeling of order.' },
        { q: 'Should governments be completely open about their work?', a: 'As far as possible, yes, because openness builds trust and reduces corruption. A few matters, such as security, can remain confidential.' },
        { q: 'Are people today better observers than in the past?', a: 'In some ways they see more images, but they often notice less in real life because their attention is on screens. Slowing down helps to restore attention.' }
      ]
    }
  });

  /* ===== 76 · Al-Batin ===== */
  put(76, {
    listening: {
      title: 'Al-Batin — unsung heroes behind the scenes', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за проектом о людях «за кадром» и числами.',
      context: 'Part 3. Студенты и преподаватель обсуждают проект о людях, чей труд остаётся незаметным.', genders: { Tutor: 'f', Ilyas: 'm', Gaukhar: 'f' },
      script: `Tutor: Let us review your project on unseen work. Ilyas, who have you chosen?
Ilyas: I want to write about the night cleaners at the university hospital. They keep the building safe and clean while everyone sleeps, but most people never see them.
Tutor: Gaukhar?
Gaukhar: I am interested in sound engineers in theatres. The audience hears a perfect performance, but nobody notices the people who control the sound.
Tutor: Good choices. How will you collect information?
Ilyas: Interviews, and I would like to spend one night shift with the cleaners.
Tutor: That requires permission. Ask the hospital administration at least two weeks in advance.
Gaukhar: I plan to interview three engineers and attend one rehearsal.
Tutor: Excellent. Remember to protect people\'s privacy. Ask permission before using names.
Ilyas: Of course. How long should the project be?
Tutor: Two thousand words, with at least four photographs, if people agree.
Gaukhar: And the deadline?
Tutor: The fourteenth of April. It was the eleventh, but I have moved it to give you more time for interviews.
Ilyas: Thank you. The idea of hidden work is fascinating, because without it nothing would function.
Tutor: Exactly. That is the main message to convey.`,
      notesTitle: 'Hidden work project',
      notes: [
        { pre: 'Ilyas writes about night', post: 'at the hospital.', a: ['cleaners'], e: 'Ночные уборщики университетской больницы.' },
        { pre: 'Gaukhar writes about', post: 'engineers in theatres.', a: ['sound'], e: 'Звукорежиссёры.' },
        { pre: 'Permission must be requested', post: 'weeks in advance.', a: ['2', 'two'], e: 'За две недели.' },
        { pre: 'Length of the project:', post: 'words', a: ['2000', '2,000', 'two thousand'], e: 'Две тысячи слов.' },
        { pre: 'Deadline: April', post: '', a: ['14', '14th', 'fourteenth', 'the 14th'], e: 'Перенесён с 11-го на 14-е.' }
      ],
      mc: [
        { q: 'What must students do before using names?', opts: ['ask permission', 'change the names', 'publish them'], a: 'A', e: 'Спросить разрешения.' },
        { q: 'How many engineers will Gaukhar interview?', opts: ['three', 'five', 'one'], a: 'A', e: 'Трёх.' },
        { q: 'What is the main message to convey?', opts: ['without hidden work nothing would function', 'hospitals need more staff', 'theatre is expensive'], a: 'A', e: 'Без скрытого труда ничего бы не работало.' }
      ]
    },
    writing: {
      title: 'Al-Batin — private life of public figures', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о границе между публичным и личным.',
      task2: {
        prompt: 'Some people believe that the private lives of public figures, such as politicians and celebrities, should remain private. To what extent do you agree or disagree?',
        keywords: ['privacy', 'private life', 'public figures', 'politicians', 'celebrities', 'media', 'public interest', 'family', 'scandal', 'trust', 'responsibility', 'rights'],
        model: `Public figures live under constant attention, and there is a debate about how much of their personal lives should be open to scrutiny. I agree to a considerable extent that private life should be protected, but I accept that some aspects may become a legitimate public concern.

The strongest argument for privacy is that every person has a right to a protected sphere. A politician or singer is still a human being, with a family, health concerns and feelings. Constant media intrusion can harm not only the individual but also relatives, including children who never chose a public life. Moreover, if every private detail is liable to exposure, capable people may avoid public service, which would impoverish society. A culture of curiosity about scandals also distracts attention from important matters, such as the policies that a politician proposes.

Nevertheless, there are cases in which private conduct is relevant to public roles. If a minister uses public funds for personal benefit, or if a leader\'s health seriously affects his ability to govern, citizens have a legitimate interest in knowing. Similarly, behaviour that contradicts the values a figure publicly promotes may reveal dishonesty. In such cases, the test should be whether the information bears directly on the person\'s public duties.

A sensible standard would therefore protect family life, health and relationships unless there is a clear public interest. Responsible media should apply this test and avoid sensationalism, while laws should protect individuals from harassment.

In conclusion, public figures deserve privacy in their personal lives, except where private conduct directly affects their public responsibilities.`,
        analysis: [
          'Task Response: градуированная позиция («to a considerable extent») и чёткий критерий исключений (public interest).',
          'Аргументация: право на частную сферу, защита семьи, риск отпугнуть талантливых людей; исключения — злоупотребление средствами, здоровье лидера.',
          'Cohesion: Nevertheless / Similarly / therefore; ключевое слово private.',
          'Lexical Resource: intrusion, sensationalism, legitimate interest, impoverish; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Batin — a hidden talent', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о скрытом таланте и обсуждение приватности и внутреннего мира.',
      keywords: ['hidden', 'talent', 'private', 'secret', 'skill', 'surprise', 'inner', 'few people know', 'hobby', 'quiet'],
      part1: [
        { q: 'Are you a private person?', a: 'Fairly. I am open with close friends, but I do not share much with people I have just met. I value my quiet time.' },
        { q: 'Do you keep a diary?', a: 'Yes, a short one. Writing down thoughts helps me to understand what I feel.' },
        { q: 'Do you share a lot on social media?', a: 'Not much, mostly photographs of places. I prefer to keep personal matters off the internet.' },
        { q: 'Do you enjoy surprises?', a: 'Pleasant ones, yes. I particularly like discovering that someone I know has an unexpected talent.' }
      ],
      part2: {
        topic: 'Describe a talent or skill that you have, but which few people know about.', bullets: ['what the skill is', 'how you learned it', 'why few people know about it', 'and explain how you feel when you use it.'],
        plan: [{ h: '1. Skill', t: 'Playing the dombra.' }, { h: '2. Learned', t: 'From grandfather as a child.' }, { h: '3. Few know', t: 'I play only at home; shy.' }, { h: '4. Feel', t: 'Calm, connected to roots.' }],
        model: `The skill I would like to describe is playing the dombra, a traditional Kazakh string instrument, which only my close family knows about.

I learned it from my grandfather when I was about nine. He was a skilful player, and during the summers in the village, he used to sit with me in the evenings and show me simple songs. At first, my fingers hurt and the sounds were not pleasant, but he was patient. By the end of the third summer, I could play several traditional kuis, the instrumental pieces.

Few people know about it because I only play at home or with the family. I am slightly shy, and I never thought that my playing was good enough for an audience. Colleagues and friends know that I teach geography and that I like reading, but this part of me has remained private. Once, a student saw the instrument in my classroom cupboard and asked about it, and I only said that it belonged to my grandfather.

When I play, I feel calm and deeply connected with my roots. The music takes me back to those evenings in the village, and I feel as if my grandfather is sitting next to me. It is a way of keeping a living link with him.

I am thinking of playing at a school event this year, to show students that every person has hidden talents. Perhaps it is time to let this inner side be heard.`
      },
      part3: [
        { q: 'Why do people keep some things private?', a: 'Because personal matters feel vulnerable, and sharing them may lead to judgement. Privacy gives a sense of safety and control.' },
        { q: 'Is it harder to protect privacy now than in the past?', a: 'Yes, because so much information is stored and shared online, often without clear control. People should be careful and demand better protection.' },
        { q: 'Should employers know about employees\' private lives?', a: 'Generally no, unless it affects their work. Respecting boundaries creates trust and a healthier workplace.' }
      ]
    }
  });

  /* ===== 77 · Al-Wali ===== */
  put(77, {
    listening: {
      title: 'Al-Wali — local government', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о местном самоуправлении: структура и числа.',
      context: 'Part 4. Лекция о роли местной власти и участии жителей.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good afternoon. Today we look at local government. The Arabic word wali comes from a root meaning nearness, and it is used for someone who takes charge of affairs. In politics, the level of government that is nearest to people is the local one: the city council or the district administration.
Lecturer: What does local government do? Four main things: it maintains roads and public spaces, manages waste and water in many places, runs local services such as libraries and parks, and often takes part in planning schools and housing.
Lecturer: Why does it matter? Because many decisions affect daily life most directly at the local level. A council that understands its district can respond faster to local problems than a distant ministry. Studies in several countries suggest that people trust local institutions more than national ones, though this varies.
Lecturer: Now, what is the role of the citizens? The Qur'anic verse often quoted in this connection says that a people\'s condition changes when they change what is in themselves. In civic terms, we can say that improvement starts with participation. Attending a meeting, voting in local elections, volunteering for a clean-up or signing a petition are all examples.
Lecturer: There are also risks. Local governments can lack money or expertise, and local interests can sometimes conflict with the wider good. So the best systems combine local decision-making with national standards.
Lecturer: Your assignment is a two-page report on one local problem in your district and a proposed solution. It must be submitted by Friday the nineteenth.`,
      notesTitle: 'Local government',
      notes: [
        { pre: 'The root of wali means', post: '', a: ['nearness'], e: 'Корень связан с близостью.' },
        { pre: 'Number of main functions listed:', post: '', a: ['4', 'four'], e: 'Четыре основные функции.' },
        { pre: 'People often trust', post: 'institutions more than national ones.', a: ['local'], e: 'Местные институты вызывают больше доверия.' },
        { pre: 'Improvement starts with', post: '', a: ['participation'], e: 'Улучшение начинается с участия.' },
        { pre: 'Report due on Friday the', post: '', a: ['19', '19th', 'nineteenth', 'the 19th'], e: 'Срок — пятница, 19-е.' }
      ],
      mc: [
        { q: 'Why can a local council respond faster?', opts: ['it understands its district', 'it has more money', 'it has fewer rules'], a: 'A', e: 'Лучше знает свой район.' },
        { q: 'What is one risk of local governments?', opts: ['lack of money or expertise', 'too many elections', 'too much national control'], a: 'A', e: 'Нехватка денег или опыта.' },
        { q: 'What do the best systems combine?', opts: ['local decisions with national standards', 'only national decisions', 'only local decisions'], a: 'A', e: 'Местные решения и национальные стандарты.' }
      ]
    },
    writing: {
      title: 'Al-Wali — local or national decisions', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение местного и национального уровня принятия решений.',
      task2: {
        prompt: 'Some people think that decisions on issues such as education and transport should be made by local communities. Others believe that the national government should make these decisions. Discuss both views and give your own opinion.',
        keywords: ['local', 'national', 'government', 'decisions', 'education', 'transport', 'communities', 'standards', 'equality', 'funding', 'participation', 'needs'],
        model: `Governments must decide how to divide responsibility between local and national levels. In my opinion, a combination is best: national authorities should set basic standards and provide funding, while local communities should make decisions about how services are delivered.

Supporters of local control point to knowledge and participation. Local officials and residents understand their own needs, such as which roads are dangerous or which schools need a new building, better than ministers in a distant capital. Decisions can be made faster, and citizens can influence them directly by attending meetings and voting in local elections. This involvement strengthens democracy and gives people a stronger sense of responsibility for their district.

On the other hand, national decision-making has advantages in fairness and efficiency. Without national standards, the quality of education or health care could depend on the wealth of the area, so that poorer regions would be disadvantaged. A central government can distribute resources more equally, coordinate large projects such as highways and buy services at lower prices because of its size. Some issues, such as safety regulations, require uniform rules.

For these reasons, the most practical arrangement is a division of roles. The national government can guarantee minimum standards and redistribute funds, while local authorities adapt the details to local conditions, for example by choosing school programmes or planning bus routes. Transparency and public consultation help to ensure that local decisions reflect real needs and not the interests of a small group.

In conclusion, neither level should decide everything; national standards combined with local flexibility offer the best balance of equality and responsiveness.`,
        analysis: [
          'Task Response: обе позиции раскрыты в отдельных абзацах; позиция («разделение ролей») ясна.',
          'Аргументация: знание потребностей и участие vs равенство и экономия масштаба; конкретные примеры (школы, автобусные маршруты).',
          'Cohesion: On the other hand / For these reasons; ключевая оппозиция local / national.',
          'Lexical Resource: minimum standards, redistribute, responsiveness, consultation; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Wali — taking part in my community', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ об участии в жизни района и обсуждение ответственности граждан.',
      keywords: ['community', 'neighbourhood', 'district', 'local', 'volunteer', 'responsibility', 'meeting', 'residents', 'improve', 'together'],
      part1: [
        { q: 'Do you know your neighbours well?', a: 'Several of them, yes. We help each other with small things, such as watering plants during holidays.' },
        { q: 'Is there a good community spirit in your area?', a: 'Reasonably. People organise clean-up days and celebrate holidays together in the courtyard.' },
        { q: 'What would you improve in your neighbourhood?', a: 'I would add more benches and a children\'s playground, and improve the street lighting at night.' },
        { q: 'Have you ever taken part in a local meeting?', a: 'Yes, a residents\' meeting about parking. It was lively, but we reached a sensible compromise.' }
      ],
      part2: {
        topic: 'Describe something that you did to improve your local community.', bullets: ['what you did', 'who you did it with', 'why you did it', 'and explain what the result was.'],
        plan: [{ h: '1. What', t: 'Courtyard clean-up and flower beds.' }, { h: '2. With', t: 'Neighbours and children.' }, { h: '3. Why', t: 'Courtyard was neglected.' }, { h: '4. Result', t: 'Cleaner, friendlier; yearly event.' }],
        model: `I would like to describe a project that I took part in to improve the courtyard of my apartment building.

The courtyard had been neglected for years. There was litter in the corners, the flower beds were overgrown with weeds and the benches were broken. People walked through quickly and did not stay there. One evening in spring, I mentioned to a neighbour that it would be nice to do something about it, and she answered that she had been thinking the same.

We decided to organise a clean-up day. We put a notice in the entrance hall and spoke to other neighbours. On a Saturday in April, about twenty people came, including several children. We collected rubbish, repaired two benches, painted the fence and planted flowers and small trees that we had bought with a small collection of money. A man from the second floor brought tools, and an elderly woman made tea for everyone.

I took part because I believed that it was our responsibility, and no one else was going to do it. It also seemed a good way to meet my neighbours properly.

The result was better than I expected. The courtyard looks much cleaner, and children play there in the evening. More importantly, we now know each other, and people greet each other and help when someone needs it. The following year, we repeated the event, and it has become a tradition. The experience taught me that communities improve when people take small initiatives together.`
      },
      part3: [
        { q: 'Why is it important for citizens to take part in local affairs?', a: 'Because local decisions affect daily life directly, and residents know best what is needed. Participation also builds trust and a sense of belonging.' },
        { q: 'What prevents people from getting involved in their community?', a: 'Lack of time, the feeling that nothing will change and weak local traditions of cooperation. Simple, visible projects can overcome these barriers.' },
        { q: 'Should local governments ask residents for their opinion more often?', a: 'Yes, through meetings and online surveys. People accept decisions more easily when they have been consulted.' }
      ]
    }
  });

  /* ===== 78 · Al-Muta'ali ===== */
  put(78, {
    listening: {
      title: "Al-Muta'ali — a tour of tall landmarks", spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за числами и сравнениями в монологе гида.',
      context: 'Part 2. Гид рассказывает о высоких зданиях мира.', genders: { Guide: 'm' },
      script: `Guide: Good morning, everyone, and welcome to our observation tower. My name is Askar. Before we go up, I would like to say a few words about height and why humans like to build high.
Guide: This tower is ninety-seven metres tall. The number is no accident: it commemorates the year nineteen ninety-seven, when the capital moved to this city. Visitors on the viewing platform near the top can see the whole city.
Guide: How does this compare with other famous structures? The Eiffel Tower in Paris is about three hundred and thirty metres tall, including its antenna. The tallest building in the world, in Dubai, is eight hundred and twenty-eight metres, and it has more than one hundred and sixty floors.
Guide: Why do people build so high? There are practical reasons: in crowded cities, there is little land. But there are also symbolic reasons. A tall structure is a statement of ambition and aspiration.
Guide: However, height has its costs. Tall buildings need strong foundations, and they use a great deal of energy. The wind at the top is much stronger than on the ground, so engineers must design the buildings to sway slightly.
Guide: As you go up, remember that real height is not only in metres. A person can also raise standards in his character and work.
Guide: The lift takes forty seconds. The platform is open until nine in the evening. Photography is permitted, and the cafe at the top is open from ten.`,
      notesTitle: 'Observation tower',
      notes: [
        { pre: 'Height of the tower:', post: 'metres', a: ['97', 'ninety-seven', 'ninety seven'], e: 'Девяносто семь метров.' },
        { pre: 'Tallest building in the world:', post: 'metres', a: ['828', 'eight hundred and twenty-eight'], e: '828 метров.' },
        { pre: 'Eiffel Tower: about', post: 'metres', a: ['330', 'three hundred and thirty'], e: 'Около 330 метров.' },
        { pre: 'The tallest building has more than', post: 'floors', a: ['160', 'one hundred and sixty'], e: 'Более 160 этажей.' },
        { pre: 'Lift takes', post: 'seconds', a: ['40', 'forty'], e: 'Сорок секунд.' }
      ],
      mc: [
        { q: 'What does the number 97 commemorate?', opts: ['the year when the capital moved', 'the number of floors', 'the architect\'s age'], a: 'A', e: 'Год 1997 — перенос столицы.' },
        { q: 'Why must tall buildings be designed to sway slightly?', opts: ['the wind at the top is stronger', 'to save materials', 'to look attractive'], a: 'A', e: 'На высоте ветер сильнее.' },
        { q: 'What does the guide say about real height?', opts: ['it is not only in metres', 'it is only in metres', 'it is not important'], a: 'A', e: 'Настоящая высота — не только в метрах.' }
      ]
    },
    writing: {
      title: "Al-Muta'ali — skyscrapers and housing", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение небоскрёбов и малоэтажной застройки.',
      task2: {
        prompt: 'Some people believe that cities should build more skyscrapers to solve the problem of housing. Others think that low-rise buildings are a better solution. Discuss both views and give your own opinion.',
        keywords: ['skyscrapers', 'housing', 'cities', 'low-rise', 'land', 'density', 'cost', 'environment', 'community', 'transport', 'green space', 'planning'],
        model: `Rapidly growing cities need homes for new residents. Some argue that skyscrapers are the answer, while others prefer low-rise buildings. In my opinion, a balanced approach that mainly uses medium-height buildings, with tall towers in selected areas, is the most sensible.

Supporters of skyscrapers argue that they save land. Tall buildings can house thousands of people on a small plot, leaving space for parks, and they allow a city to grow upward instead of outward, which reduces the need for long commutes and protects surrounding farmland. High density near public transport can also reduce car use and make services such as shops and schools more efficient.

On the other hand, critics point out that skyscrapers have disadvantages. They are expensive to build and maintain, and they use more energy per square metre than lower buildings, because of lifts and materials. Residents may feel isolated, with fewer chances to know their neighbours, and children have limited access to outdoor play. Tall buildings can also block sunlight and change wind patterns in the streets below. Low-rise neighbourhoods, in contrast, tend to create a more human scale and a stronger sense of community.

Therefore, I believe the most effective strategy is to combine them. Medium-rise buildings of four to eight floors, arranged around courtyards, can offer high density without the drawbacks of very tall towers, and a limited number of skyscrapers can be placed near major transport hubs. Planning should require green spaces, shops and schools within walking distance.

In conclusion, skyscrapers can help, but careful planning with a mixture of building heights offers better homes and communities.`,
        analysis: [
          'Task Response: обе позиции раскрыты; позиция («смешанная застройка средней этажности») ясна.',
          'Аргументация: экономия земли и плотность vs стоимость, энергия, изоляция; конкретное решение.',
          'Cohesion: On the other hand / Therefore; ключевая оппозиция tall / low-rise.',
          'Lexical Resource: density, commutes, human scale, hubs; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: "Al-Muta'ali — a high viewpoint I visited", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание высокого места и обсуждение высоты, амбиций и высоких зданий.',
      keywords: ['high', 'tall', 'tower', 'top', 'climb', 'view', 'height', 'ambitious', 'above', 'summit'],
      part1: [
        { q: 'Do you like going to high places?', a: 'Yes, I enjoy the views, although I get a little dizzy near the edge. I just keep a safe distance.' },
        { q: 'Are there any tall buildings in your city?', a: 'Many, especially in the new district. They have changed the skyline of the city a lot in the last twenty years.' },
        { q: 'Would you like to live on a high floor?', a: 'Perhaps on the eighth or tenth floor. Higher than that I think I would feel cut off from the street.' },
        { q: 'What do you do to set high standards for yourself?', a: 'I write a clear goal for each month and review my results. I try to improve a little more than the last time.' }
      ],
      part2: {
        topic: 'Describe a high place that you visited (a tower, a hill or a tall building).', bullets: ['where it was', 'how you got to the top', 'what you could see', 'and explain how you felt there.'],
        plan: [{ h: '1. Where', t: 'Baiterek tower, Astana.' }, { h: '2. How', t: 'Lift to the platform.' }, { h: '3. Saw', t: 'City, wide steppe horizon.' }, { h: '4. Felt', t: 'Awe, pride, perspective.' }],
        model: `The high place I would like to describe is the Baiterek tower in Astana, which I visited with my family two years ago.

Baiterek is a tall structure, ninety-seven metres high, with a large golden sphere at the top. It was designed to symbolise a tree of life with a bird\'s egg in its branches, based on a folk legend. We went in the late afternoon, when the light was soft. There was a queue at the entrance, but it moved quickly, and a lift took us up to the viewing platform in less than a minute.

From the top, we could see the whole city. The wide avenues and new buildings stretched in front of us, the river curved through them, and beyond the last houses, the steppe continued to the horizon. In the sphere, there is also a place where visitors can put a hand on a golden imprint and make a wish, and my daughter was delighted to try.

I felt a mixture of awe and pride. The city I knew from below looked organised and small, and the empty horizon reminded me how large the country is. It also gave me a feeling of perspective: from that height, daily worries seemed less important.

When we came down, I thought about the idea of height. A tower is impressive because of its metres, but what really lifts a person is his aims and his character. Since the visit, I try to set my goals a little higher, while staying modest.`
      },
      part3: [
        { q: 'Why do countries build very tall structures?', a: 'For prestige and to express ambition, as well as for practical needs such as saving land. A landmark can also attract tourists.' },
        { q: 'What are the disadvantages of living in tall buildings?', a: 'Dependence on lifts, less contact with neighbours and the street, and a greater risk in emergencies. Some people also find the height uncomfortable.' },
        { q: 'Is it good for young people to have high ambitions?', a: 'Yes, as long as they are supported by effort and patience. Ambition gives direction, but it should come with realistic planning.' }
      ]
    }
  });

  /* ===== 79 · Al-Barr ===== */
  put(79, {
    listening: {
      title: 'Al-Barr — kindness to parents', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за позициями и деталями проекта о заботе о родителях.',
      context: 'Part 3. Студенты и преподаватель обсуждают проект о почтении к родителям.', genders: { Tutor: 'f', Eldar: 'm', Botagoz: 'f' },
      script: `Tutor: Let us discuss your project on respect for parents. Eldar, what is your angle?
Eldar: I want to compare how different generations express care for parents. For example, in the past, many children lived with their parents, and now they often live in another city.
Tutor: Botagoz?
Botagoz: I am looking at small daily acts, such as phone calls, visits and listening. I think these are more important than expensive gifts.
Tutor: A good point. What is your method?
Eldar: A survey of eighty adults and interviews with six families.
Tutor: Eighty is a good sample. And what will you ask?
Botagoz: How often they speak to their parents, what they usually do together and what they find difficult.
Tutor: Good. Also ask about the gap between generations, because misunderstandings are common.
Eldar: We could include an example from the Qur\'an, from the verse about speaking to parents gently.
Tutor: Yes, as long as you quote it accurately and give the reference. It is Surah seventeen, verse twenty-three.
Botagoz: Thank you. When is the project due?
Tutor: On the second of May. The presentations will be on the ninth.
Eldar: Understood. We will start with the survey.`,
      notesTitle: 'Respect for parents',
      notes: [
        { pre: 'Survey of', post: 'adults', a: ['80', 'eighty'], e: 'Восемьдесят взрослых.' },
        { pre: 'Interviews with', post: 'families', a: ['6', 'six'], e: 'Шесть семей.' },
        { pre: 'Verse reference: Surah 17, verse', post: '', a: ['23', 'twenty-three', 'twenty three'], e: 'Сура 17, аят 23.' },
        { pre: 'Project due: May', post: '', a: ['2', '2nd', 'second', 'the 2nd'], e: 'Срок — 2 мая.' },
        { pre: 'Presentations on May', post: '', a: ['9', '9th', 'ninth', 'the 9th'], e: 'Презентации — 9 мая.' }
      ],
      mc: [
        { q: 'What does Botagoz think is more important than expensive gifts?', opts: ['small daily acts', 'rare visits', 'written letters'], a: 'A', e: 'Небольшие ежедневные поступки.' },
        { q: 'What does the tutor advise about the Qur\'anic example?', opts: ['quote it accurately and give the reference', 'paraphrase it freely', 'omit the reference'], a: 'A', e: 'Цитировать точно и указать ссылку.' },
        { q: 'What does Eldar want to compare?', opts: ['how generations express care', 'incomes of families', 'sizes of houses'], a: 'A', e: 'Как разные поколения выражают заботу.' }
      ]
    },
    writing: {
      title: 'Al-Barr — obedience to parents', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение послушания родителям и самостоятельных решений детей.',
      task2: {
        prompt: 'Some people believe that children should always follow their parents\' advice, even as adults. Others think that adult children should make their own decisions. Discuss both views and give your own opinion.',
        keywords: ['parents', 'children', 'advice', 'respect', 'decisions', 'independence', 'adults', 'experience', 'family', 'obedience', 'generations', 'communication'],
        model: `Relationships between parents and adult children are changing in many societies. Some insist that children should follow their parents\' advice, while others emphasise independence. In my view, adult children should respect and consult their parents, but the final decision on their own lives must be theirs.

Those who favour following parental advice stress experience and care. Parents have lived longer, have seen the consequences of various choices and usually want what is best for their children. In many cultures, respect for parents is a central value, and honouring their wishes is seen as a way of repaying the love and sacrifice of earlier years. Family unity may also be stronger when members consult each other on important matters, such as marriage, education and work.

However, there are limits. Circumstances change, and what was suitable twenty years ago may not be right today, especially in fields such as technology and careers. An adult has to take responsibility for his own life, and decisions made only to please others may lead to resentment or failure. Moreover, learning to decide independently is part of maturity.

The healthiest relationship is based on respect in both directions. Children should listen carefully to their parents, ask for their opinions and explain their reasons, remaining kind and patient even when they disagree. Parents, for their part, should offer advice without pressure, accepting that their children may choose differently. Regular, open conversation prevents conflict.

In conclusion, adult children should honour their parents and take their advice seriously, but they should be free to make their own final decisions.`,
        analysis: [
          'Task Response: обе позиции раскрыты; позиция («уважать и советоваться, но решать самим») ясна.',
          'Аргументация: опыт и забота vs изменившиеся обстоятельства и зрелость; взаимное уважение.',
          'Cohesion: However / Moreover / for their part; ключевое слово advice.',
          'Lexical Resource: resentment, sacrifice, maturity, pressure; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Barr — something kind I did for my parents', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о заботе о родителях и обсуждение уважения между поколениями.',
      keywords: ['parents', 'mother', 'father', 'kind', 'surprise', 'grateful', 'care', 'family', 'respect', 'gift'],
      part1: [
        { q: 'How often do you speak to your parents?', a: 'Every day, even if only for a few minutes. I think regular contact matters more than long, rare conversations.' },
        { q: 'What do you usually do together with your parents?', a: 'We have dinner on Sundays and sometimes go for walks. They also like to hear about my work.' },
        { q: 'What did your parents teach you?', a: 'To be honest, to work hard and to respect people. They taught more by example than by words.' },
        { q: 'Do you think children today respect their parents enough?', a: 'Most do, though in different ways. Respect can be shown through attention and consideration.' }
      ],
      part2: {
        topic: 'Describe something kind that you did for your parents.', bullets: ['what you did', 'when you did it', 'why you did it', 'and explain how your parents reacted.'],
        plan: [{ h: '1. What', t: 'Took them on a trip to the mountains.' }, { h: '2. When', t: 'Last summer, their 35th anniversary.' }, { h: '3. Why', t: 'To thank them; they never travelled.' }, { h: '4. Reaction', t: 'Moved, happy, my mother cried.' }],
        model: `I would like to describe something kind that I did for my parents: a trip to the mountains last summer, on the occasion of their thirty-fifth wedding anniversary.

My parents have worked hard all their lives, and they rarely went on holiday because they always put the family\'s needs first. My mother once said that she had never seen high mountains with snow, and I remembered it. For several months I saved a part of my salary, and I booked a small guesthouse in a mountain valley for four days. I told them only a week before, so that it would be a surprise.

I did it for several reasons. Firstly, I wanted to thank them for everything they had done for me, from paying for my education to supporting me through difficult times. Secondly, I realised that time with them is limited, and that I should not postpone such things. And thirdly, it was simply a joy to give them an experience that they had never had.

During the journey, my father was quiet and kept looking out of the window, and my mother held my hand for most of the way. When we arrived at the valley and saw the snowy peaks, she cried and said that it was more beautiful than she had imagined. We walked slowly along a river, ate dinner at a simple wooden table and listened to my father\'s stories about his youth.

Their reaction made me happier than any gift I have received. It taught me that the best way to honour parents is to give them time and attention.`
      },
      part3: [
        { q: 'How can young people show respect to their parents?', a: 'By listening, staying in touch, helping with practical matters and speaking kindly, even when they disagree. Small acts of attention are very meaningful.' },
        { q: 'Do you think the relationship between parents and children has changed?', a: 'Yes. It is generally more open and less formal than before. Children discuss more with parents, though some traditional respect remains.' },
        { q: 'What problems do elderly parents face?', a: 'Loneliness, health problems and sometimes financial difficulties. Regular contact from children and community support make a significant difference.' }
      ]
    }
  });

  /* ===== 80 · At-Tawwab ===== */
  put(80, {
    listening: {
      title: 'At-Tawwab — the psychology of apology', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о том, как исправить ошибку и вернуть доверие.',
      context: 'Part 4. Лекция о раскаянии, извинении и восстановлении доверия.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good morning. Today we study how people repair the damage after a mistake. The Arabic root t-w-b, from which comes the name At-Tawwab, means to return. Tawba, repentance, is therefore a return from an error to what is right.
Lecturer: Classical scholars describe four conditions of sincere repentance. One: stop the wrong action. Two: feel real regret. Three: resolve firmly not to repeat it. And four: if another person was harmed, put it right. Return what was taken, or ask for forgiveness. Notice how closely this matches modern advice on apologies.
Lecturer: Psychologists who study apologies have found that the most effective ones contain several elements: acknowledgement of what happened, an expression of regret, an acceptance of responsibility, an offer to make amends and a promise to change. A weak apology, by contrast, says "I am sorry if you were offended", which shifts the blame.
Lecturer: Timing matters. A prompt apology usually has more effect than a delayed one, although in some cases the other person needs time. Do not demand forgiveness. The offended person has the right to decide.
Lecturer: What about self-forgiveness? Many people punish themselves for years. A healthier approach is to take responsibility, learn the lesson and continue, without minimising the mistake.
Lecturer: Finally, trust is rebuilt through consistent behaviour over time, not only words.
Lecturer: Your homework is to write a model apology letter for a fictional situation. It is due on Wednesday the sixth of November.`,
      notesTitle: 'Repentance and apology',
      notes: [
        { pre: 'The root t-w-b means to', post: '', a: ['return'], e: 'Корень t-w-b — «возвращаться».' },
        { pre: 'Number of conditions of sincere repentance:', post: '', a: ['4', 'four'], e: 'Четыре условия.' },
        { pre: 'A weak apology says "I am sorry if you were', post: '".', a: ['offended'], e: 'Слабое извинение перекладывает вину.' },
        { pre: 'The offended person has the right to', post: '', a: ['decide'], e: 'Пострадавший вправе решать.' },
        { pre: 'Homework due: Wednesday the', post: 'of November', a: ['6', '6th', 'sixth', 'the 6th'], e: 'Среда, 6 ноября.' }
      ],
      mc: [
        { q: 'What is the third condition of sincere repentance?', opts: ['resolving not to repeat the wrong', 'stopping the wrong action', 'feeling regret'], a: 'A', e: 'Твёрдо решить не повторять.' },
        { q: 'What is usually more effective?', opts: ['a prompt apology', 'a delayed apology', 'no apology'], a: 'A', e: 'Своевременное извинение.' },
        { q: 'How is trust rebuilt?', opts: ['through consistent behaviour over time', 'through gifts', 'through one long letter'], a: 'A', e: 'Последовательным поведением с течением времени.' }
      ]
    },
    writing: {
      title: 'At-Tawwab — learning from mistakes', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о роли ошибок в обучении.',
      task2: {
        prompt: 'Some people believe that making mistakes is an essential part of learning and that students should not be punished for them. To what extent do you agree or disagree?',
        keywords: ['mistakes', 'learning', 'students', 'punishment', 'feedback', 'failure', 'confidence', 'improve', 'teachers', 'risk', 'classroom', 'experience'],
        model: `Mistakes are often regarded as failures to be avoided, but many educators argue that they are an essential part of learning. I strongly agree that students should not be punished for honest errors, although persistent carelessness should still be addressed.

The first reason is that mistakes provide information. When a student makes an error, it reveals precisely what he has not yet understood, and correcting it leads to deeper learning than simply being told the right answer. Research on memory suggests that attempting to recall or solve something, even incorrectly, and then receiving feedback often results in better retention. A classroom that treats errors as useful clues therefore helps students to progress faster.

Second, punishing mistakes creates fear. Students who are afraid of penalties tend to avoid challenging tasks, copy from others or hide their confusion, and they lose the willingness to ask questions. In contrast, a supportive atmosphere encourages them to take intellectual risks, which is necessary for creative and critical thinking. Many scientific discoveries have come from experiments that failed in unexpected ways.

However, this does not mean that all errors should be ignored. Teachers should distinguish between honest mistakes made while trying, and repeated carelessness or dishonesty, which require guidance and consequences. Feedback should be specific and constructive, showing students how to improve, and they should have opportunities to try again.

In conclusion, mistakes are a natural and valuable part of education, and students should be supported, not punished, for honest errors, provided that they take responsibility for learning from them.`,
        analysis: [
          'Task Response: сильная позиция («strongly agree») и оговорка о небрежности и нечестности.',
          'Аргументация: ошибка как информация, страх наказания блокирует вопросы; решение — конструктивная обратная связь.',
          'Cohesion: The first reason / Second / However / In conclusion.',
          'Lexical Resource: retention, intellectual risks, constructive, carelessness; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'At-Tawwab — correcting a mistake', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о том, как вы признали и исправили ошибку, и обсуждение извинений.',
      keywords: ['apologise', 'mistake', 'sorry', 'fix', 'responsible', 'forgive', 'trust', 'learn', 'honest', 'put right'],
      part1: [
        { q: 'How do you feel after making a mistake?', a: 'Embarrassed at first, then determined to fix it. I try to think about the lesson rather than about blaming myself.' },
        { q: 'Do you find it easy to say sorry?', a: 'Much easier than before. I have learned that a short, sincere apology is better than a long explanation.' },
        { q: 'Do you give people a second chance?', a: 'Usually yes, especially if they take responsibility. Everyone makes mistakes, and trust can be rebuilt.' },
        { q: 'What did you learn from your biggest mistake?', a: 'To check details twice and to ask for help early. A small question can prevent a big problem.' }
      ],
      part2: {
        topic: 'Describe a time when you made a mistake and put it right.', bullets: ['what the mistake was', 'how you realised it', 'what you did to correct it', 'and explain what you learned.'],
        plan: [{ h: '1. Mistake', t: 'Wrong grades sent to students.' }, { h: '2. Realised', t: 'A student asked; I checked.' }, { h: '3. Corrected', t: 'Apologised, corrected, double-checked.' }, { h: '4. Learned', t: 'Check twice; honesty builds trust.' }],
        model: `I would like to describe a mistake that I made at work, which I managed to correct.

Last year, I was responsible for sending students their final grades for a unit. I prepared a table with all the scores and sent it to the class. Two days later, a student came to me and politely asked why her mark was lower than she had expected. I checked the table and discovered that I had entered the scores of two students in the wrong rows. Her result was wrong, and so was that of another student, whose grade was higher than it should be.

My first feeling was a cold shock. I was embarrassed, and I knew that I had to act quickly. First, I checked all the other entries carefully to ensure there were no more errors. Then I corrected the table, and I wrote to the whole class explaining honestly what had happened and apologising for the confusion. I spoke personally to the two students affected. The student whose mark had been higher was understanding, and the one whose mark was lower was relieved. I also informed my head of department, and I introduced a new procedure: before sending any results, a colleague checks the table.

I learned several lessons. First, a mistake admitted quickly is much easier to repair than one that is hidden. Second, a clear apology, together with action, restores trust. And third, systems for checking are not a sign of distrust but a way of helping each other. Since then I have never made the same mistake.`
      },
      part3: [
        { q: 'Why is it difficult for some people to admit mistakes?', a: 'Pride, fear of consequences or the belief that mistakes show weakness. In reality, admitting a mistake usually increases respect.' },
        { q: 'Should companies and governments apologise publicly?', a: 'When they have caused harm, yes. A sincere public apology, with concrete steps to repair the damage, helps to restore trust.' },
        { q: 'Is it possible to forgive and forget?', a: 'Forgiving is possible, but forgetting is usually not, and probably not wise. Remembering the lesson helps to prevent similar mistakes.' }
      ]
    }
  });
})();

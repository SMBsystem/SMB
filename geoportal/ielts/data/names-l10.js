// Имена 91–99: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 91 · Ad-Darr ===== */
  put(91, {
    listening: {
      title: 'Ad-Darr — a first-aid course enquiry', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись на курс первой помощи: имя, дата, длительность, цена.',
      context: 'Part 1. Мужчина записывается на курс первой помощи после несчастного случая.', genders: { Receptionist: 'f', Daniyar: 'm' },
      script: `Receptionist: Good morning, City First Aid Training.
Daniyar: Good morning. Last week my brother cut his hand badly while cooking, and I did not know what to do. I would like to learn first aid.
Receptionist: I am sorry to hear that. I hope he is better now.
Daniyar: Yes, he is fine, thank you.
Receptionist: May I take your surname?
Daniyar: It is Tulegenov. T-U-L-E-G-E-N-O-V.
Receptionist: Thank you. Our basic course lasts six hours, in one day. The next one is on Sunday the fourteenth of April.
Daniyar: How much does it cost?
Receptionist: It costs forty-five pounds, and this includes a certificate that is valid for three years.
Daniyar: What will we learn?
Receptionist: How to stop bleeding, how to help someone who is choking and how to give chest compressions. We also practise calling the emergency number calmly.
Daniyar: That sounds useful. Can I bring my brother?
Receptionist: Of course, but he must pay the same fee. The course is at the Red Cross building, on Park Avenue, and the groups have a maximum of twelve people.`,
      notesTitle: 'First aid course',
      notes: [
        { pre: 'Surname:', post: '', a: ['Tulegenov'], e: 'Фамилия — Tulegenov.' },
        { pre: 'Course lasts', post: 'hours', a: ['6', 'six'], e: 'Шесть часов.' },
        { pre: 'Date: Sunday', post: 'April', a: ['14', '14th', 'fourteenth', 'the fourteenth', 'the 14th'], e: 'Четырнадцатое апреля.' },
        { pre: 'Cost: £', post: '', a: ['45', 'forty-five', 'forty five'], e: 'Сорок пять фунтов.' },
        { pre: 'Certificate valid for', post: 'years', a: ['3', 'three'], e: 'Три года.' }
      ],
      mc: [
        { q: 'Why does Daniyar want to take the course?', opts: ['his brother was injured', 'he has to for work', 'it is a gift'], a: 'A', e: 'Брат порезал руку.' },
        { q: 'What is the maximum group size?', opts: ['12', '20', '6'], a: 'A', e: 'Максимум двенадцать человек.' },
        { q: 'Where is the course held?', opts: ['Red Cross building, Park Avenue', 'City Hospital', 'Town Hall'], a: 'A', e: 'Здание Красного Креста на Park Avenue.' }
      ]
    },
    writing: {
      title: 'Ad-Darr — responsibility for harm', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение: кто отвечает за вред — человек или обстоятельства.',
      task2: {
        prompt: 'Some people believe that individuals are responsible for most of the problems and harm they experience. Others think that circumstances outside their control are the main cause. Discuss both views and give your own opinion.',
        keywords: ['responsibility', 'harm', 'circumstances', 'choices', 'accident', 'health', 'poverty', 'prevention', 'support', 'society'],
        model: `The extent to which people are responsible for the problems they face is a matter of long debate. Some stress personal choices, while others point to circumstances. In my opinion, both play a role, and society should respond accordingly.

Those who emphasise individual responsibility argue that many difficulties come from habits and decisions. A person who ignores medical advice, spends beyond his means or drives carelessly increases the probability of harm. This view is empowering, because it suggests that people can reduce risk by acting wisely, for example by exercising, saving money and following safety rules. It also encourages people to learn from mistakes instead of blaming others.

On the other hand, many harms cannot be prevented by any amount of caution. Natural disasters, serious illness, accidents and economic crises often strike people who have done nothing wrong. A child born into poverty, for example, faces obstacles that he did not choose. If society treats every misfortune as the fault of the victim, it may become unkind and fail to provide help to those who need it most.

I therefore believe that a balanced attitude is the most realistic. Individuals should take reasonable precautions and accept responsibility for their own choices. At the same time, communities should provide protection, such as health care, emergency services and education, so that setbacks do not become permanent disasters. Compassion and responsibility are not opposed.

In conclusion, personal decisions influence many outcomes, but circumstances beyond control are equally important. The best approach combines individual effort with collective support.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты, позиция — «и выбор, и обстоятельства».',
          'Аргументация: профилактика и ответственность vs непредсказуемость, бедность; роль общества.',
          'Cohesion: On the other hand / therefore / At the same time / In conclusion.',
          'Lexical Resource: precautions, setbacks, empowering, collective support.'
        ]
      }
    },
    speaking: {
      title: 'Ad-Darr — a difficult time', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о трудном периоде и разговор о том, как справляться с бедой.',
      keywords: ['difficult', 'problem', 'support', 'cope', 'recover', 'lesson', 'stress', 'illness', 'family', 'stronger'],
      part1: [
        { q: 'How do you deal with stress?', a: 'I go for a walk or talk to a family member. Physical activity and conversation help me to see the situation more calmly.' },
        { q: 'Do you worry about the future?', a: 'Sometimes, but I try to concentrate on what I can control, such as preparing well and keeping a routine.' },
        { q: 'Who do you turn to when you have a problem?', a: 'Usually to my parents or a close friend. It helps to hear a different point of view.' },
        { q: 'Are you good at staying calm in difficult situations?', a: 'I am getting better at it. I breathe slowly and try to think about the next small step.' }
      ],
      part2: {
        topic: 'Describe a difficult time in your life that you overcame.', bullets: ['when it happened', 'what the difficulty was', 'how you dealt with it', 'and explain what you learned.'],
        plan: [{ h: '1. When', t: 'Three years ago.' }, { h: '2. Difficulty', t: 'Father ill; money problems.' }, { h: '3. Dealt', t: 'Family plan, help from relatives.' }, { h: '4. Learned', t: 'Stronger; value of support.' }],
        model: `I would like to describe a difficult period three years ago, when my father fell seriously ill.

It started suddenly. He was working as a driver and one day he collapsed and had to be taken to hospital. The doctors said he needed an operation and several months of rest. At the same time, our family had to manage without his income, and I was in my final year of university, so I was under pressure to study and also to find a way of helping.

At first, I felt helpless and afraid. I could not concentrate, and I slept badly. Then my mother suggested that we should sit down together and make a plan. We divided the tasks: she stayed with my father at the hospital, I took a part-time job as a tutor in the evenings, and my younger sister took over the housework. Relatives and neighbours also helped us with food and with a small loan.

It took almost half a year, but my father recovered and was able to return to light work. I graduated with good results and found a job.

I learned several lessons from that time. First, I discovered that I was stronger than I thought. Second, I understood how important it is to have people who support you. And finally, I realised that difficulty can bring a family closer. I try to remember this whenever I have a problem.`
      },
      part3: [
        { q: 'Why do some people cope with difficulties better than others?', a: 'Support from family and friends is a major factor, together with personality and previous experience. Having a sense of purpose also helps.' },
        { q: 'Should schools teach students how to deal with hardship?', a: 'Yes. Skills like managing stress and asking for help are valuable, and they are best learned before serious problems appear.' },
        { q: 'How can communities help people in trouble?', a: 'By offering practical help such as food and transport, and by showing that people are not alone. Support groups and volunteers are important.' }
      ]
    }
  });

  /* ===== 92 · An-Nafi' ===== */
  put(92, {
    listening: {
      title: 'An-Nafi\' — a community garden project', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Информация о проекте общественного огорода: время, площадь, взносы.',
      context: 'Part 2. Координатор рассказывает жителям о новом общественном огороде.', genders: { Coordinator: 'f' },
      script: `Coordinator: Thank you all for coming to the meeting about our new community garden.
Coordinator: The garden will be on the empty plot behind the library, which measures about four hundred square metres.
Coordinator: We have divided it into thirty small beds, and each household may rent one for ten pounds a year.
Coordinator: The garden will open every day from seven in the morning until eight in the evening.
Coordinator: The city council has agreed to provide water, and a local shop has donated tools.
Coordinator: Everything grown in the garden belongs to the person who looks after the bed, but we also plan to keep three beds for vegetables that will be given to families in need.
Coordinator: We will also teach a short workshop for beginners on the second Saturday of each month.
Coordinator: Studies of similar projects in other cities suggest that residents often value the opportunity to meet neighbours, as well as the fresh food.
Coordinator: If you would like a bed, please complete the form at the table by the door before the end of March.
Coordinator: The first planting day will be on the twelfth of April, and we need volunteers to help clear the stones from the ground.`,
      notesTitle: 'Community garden',
      notes: [
        { pre: 'Area of the plot: about', post: 'square metres', a: ['400', 'four hundred'], e: 'Около четырёхсот квадратных метров.' },
        { pre: 'Number of beds:', post: '', a: ['30', 'thirty'], e: 'Тридцать грядок.' },
        { pre: 'Rent for a bed: £', post: 'a year', a: ['10', 'ten'], e: 'Десять фунтов в год.' },
        { pre: 'Opening time:', post: 'a.m.', a: ['7', 'seven', '7:00', '7 am'], e: 'С семи утра.' },
        { pre: 'First planting day:', post: 'April', a: ['12', '12th', 'twelfth', 'the twelfth', 'the 12th'], e: 'Двенадцатого апреля.' }
      ],
      mc: [
        { q: 'Who will provide the water?', opts: ['the city council', 'a local shop', 'the residents'], a: 'A', e: 'Городской совет.' },
        { q: 'What will the three special beds be used for?', opts: ['vegetables for families in need', 'a children\'s playground', 'flowers for the library'], a: 'A', e: 'Овощи для нуждающихся семей.' },
        { q: 'When is the workshop for beginners?', opts: ['second Saturday of each month', 'every Sunday', 'first Monday of each month'], a: 'A', e: 'Во вторую субботу каждого месяца.' }
      ]
    },
    writing: {
      title: 'An-Nafi\' — usefulness of education', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: должна ли учёба быть практически полезной.',
      task2: {
        prompt: 'Some people think that schools should teach only subjects that will be useful in the future career of students. Others believe that students should also study subjects such as history and philosophy. To what extent do you agree or disagree with the first view?',
        keywords: ['school', 'useful', 'career', 'practical', 'history', 'philosophy', 'critical thinking', 'curriculum', 'skills', 'employers'],
        model: `It is sometimes argued that education should be limited to subjects that are directly useful for work. I disagree with this view, although I accept that practical skills deserve an important place in the curriculum.

The argument for usefulness is understandable. Time at school is limited, and families want their children to find a good job. Subjects like mathematics, languages and computing are used in many careers, and students who graduate without them may have difficulties in the labour market. Programmes that include practical training, such as workshops and internships, are valued by employers.

However, a narrow approach has serious weaknesses. First, it is hard to predict which skills will be needed in twenty years, because technology and occupations change rapidly. Students who have learned how to think, to analyse evidence and to communicate are better prepared for changes than those who learned only a specific procedure. Subjects like history and philosophy develop exactly these abilities. Second, education has a purpose beyond employment: it helps people to understand their society, to take part in public life and to make moral decisions. A citizen who knows history is less likely to be misled by false claims.

Therefore, I believe that schools should combine both elements. They can ensure that every student learns essential practical skills, while retaining humanities that develop judgement and understanding. Teachers can also show how these subjects are useful, for instance by linking history lessons to current events.

In conclusion, usefulness should not be understood too narrowly. A broad education serves both the individual and society better than a purely vocational one.`,
        analysis: [
          'Task Response: ясное несогласие с оговоркой о практических навыках.',
          'Аргументация: непредсказуемость профессий, критическое мышление, гражданская роль образования.',
          'Cohesion: First / Second / Therefore / In conclusion.',
          'Lexical Resource: vocational, humanities, labour market, judgement.'
        ]
      }
    },
    speaking: {
      title: 'An-Nafi\' — something useful you learned', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о полезном навыке и разговор о пользе знаний.',
      keywords: ['useful', 'skill', 'learn', 'practical', 'benefit', 'helpful', 'daily life', 'knowledge', 'teach', 'share'],
      part1: [
        { q: 'What skills are useful in daily life?', a: 'Cooking, basic first aid and managing money. They help every day and are not taught enough at school.' },
        { q: 'Do you like learning practical things?', a: 'Very much. I enjoy repairing small things at home, and it saves money.' },
        { q: 'Is it useful to learn a foreign language?', a: 'Definitely. It opens new opportunities for work, travel and friendships.' },
        { q: 'What useful thing did you learn recently?', a: 'I learned how to make a simple budget in a spreadsheet, and now I can see where my money goes.' }
      ],
      part2: {
        topic: 'Describe a skill that you learned that has been useful to you.', bullets: ['what the skill is', 'how you learned it', 'how you use it', 'and explain why it has been useful.'],
        plan: [{ h: '1. Skill', t: 'Touch typing.' }, { h: '2. Learned', t: 'Online course, 20 minutes daily.' }, { h: '3. Use', t: 'Writing, notes, work.' }, { h: '4. Useful', t: 'Time saved; less tiredness.' }],
        model: `I would like to talk about a skill that I learned several years ago and use every day: touch typing.

Before that, I typed with two fingers and had to look at the keyboard. As a student, I wrote many essays and notes, and I noticed that I was spending much more time on typing than on thinking. A teacher suggested that I should take a short online course.

I followed it for about two months, practising for twenty minutes every day. At first it was frustrating, because I was slower than before and kept making mistakes. My teacher advised me not to look at the keys, even when I was uncertain. After three weeks the speed began to increase, and eventually I was typing without looking at the screen or at my hands.

Today I use this skill constantly. I write reports, answer emails and prepare lesson plans much faster. I can also take notes in meetings while keeping eye contact with people, which makes conversations more natural.

It has been useful for several reasons. First, I save a considerable amount of time each week. Second, my hands and eyes get less tired. And third, the skill has given me confidence in situations when I need to write quickly. It was a small investment, but it continues to bring benefits, and I often recommend it to my friends.`
      },
      part3: [
        { q: 'Should schools focus more on practical skills?', a: 'They should give them more attention, but without losing the basics of general knowledge. Both are useful for different purposes.' },
        { q: 'Why do some people prefer theoretical knowledge?', a: 'Theory explains why things work, and it helps in solving unfamiliar problems. Some people simply enjoy ideas for their own sake.' },
        { q: 'How can people share useful knowledge with others?', a: 'By teaching, writing, volunteering or making short videos. Sharing knowledge also helps the person who shares it to understand it better.' }
      ]
    }
  });

  /* ===== 93 · An-Nur ===== */
  put(93, {
    listening: {
      title: 'An-Nur — a lecture on lighting and wellbeing', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о влиянии света на сон и настроение: числа, рекомендации.',
      context: 'Part 4. Лектор объясняет, как свет влияет на самочувствие.', genders: { Lecturer: 'm' },
      script: `Lecturer: Today I will talk about the effect of light on our wellbeing, a topic that is relevant to everyone.
Lecturer: Our bodies follow a daily rhythm of about twenty-four hours, and the main signal that sets this rhythm is light.
Lecturer: Exposure to bright light in the morning, preferably outdoors, helps most people feel more alert during the day and sleep better at night.
Lecturer: Researchers recommend about thirty minutes of daylight in the morning, although the exact amount depends on the person and the season.
Lecturer: In contrast, bright screens in the evening can delay the sense of sleepiness. Many sleep specialists advise switching them off an hour before bed.
Lecturer: In the northern countries, in winter, the lack of daylight is linked by some studies to low mood, and special lamps are sometimes used under medical advice.
Lecturer: Poor lighting at work or in study places can cause tired eyes and headaches. A good desk lamp should give an even light and avoid reflection on the screen.
Lecturer: Finally, light also has an effect on how we feel about spaces. Many people say that a room with a large window feels more pleasant.
Lecturer: Your assignment is to record your sleeping times for ten days and bring your notes on the seventh of November.`,
      notesTitle: 'Light and wellbeing',
      notes: [
        { pre: 'Daily body rhythm:', post: 'hours', a: ['24', 'twenty-four', 'twenty four'], e: 'Двадцать четыре часа.' },
        { pre: 'Recommended morning daylight:', post: 'minutes', a: ['30', 'thirty'], e: 'Тридцать минут.' },
        { pre: 'Switch off screens', post: 'hour before bed', a: ['1', 'one', 'an'], e: 'За час до сна.' },
        { pre: 'Record sleeping times for', post: 'days', a: ['10', 'ten'], e: 'Десять дней.' },
        { pre: 'Notes due on', post: 'November', a: ['7', '7th', 'seventh', 'the seventh', 'the 7th'], e: 'Седьмого ноября.' }
      ],
      mc: [
        { q: 'What is the main signal that sets the body rhythm?', opts: ['light', 'food', 'temperature'], a: 'A', e: 'Свет.' },
        { q: 'What can poor lighting at work cause?', opts: ['tired eyes and headaches', 'loss of hearing', 'back pain'], a: 'A', e: 'Усталость глаз и головные боли.' },
        { q: 'What should a good desk lamp avoid?', opts: ['reflection on the screen', 'an even light', 'bright colours'], a: 'A', e: 'Отражения на экране.' }
      ]
    },
    writing: {
      title: 'An-Nur — knowledge as a light', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: роль образования и чтения в жизни общества.',
      task2: {
        prompt: 'Some people say that reading books is becoming less important because information is available online. To what extent do you agree or disagree?',
        keywords: ['books', 'reading', 'internet', 'information', 'knowledge', 'attention', 'depth', 'concentration', 'libraries', 'understanding'],
        model: `The internet gives instant access to enormous amounts of information, and some people believe that books are no longer necessary. I disagree with this view, since reading books offers benefits that online browsing rarely provides.

It is true that digital sources have clear advantages. A person can find a fact in seconds, compare different opinions and access material that would have been unavailable in a small town. Online courses and articles have also made learning more affordable. For quick reference, the internet is often more efficient than a book.

Nevertheless, books remain important for several reasons. First, a book usually presents a subject in a systematic and sustained way. The author develops an argument over many pages, which helps the reader to understand connections between ideas, not just isolated facts. Second, reading a long text trains concentration. Online, attention is frequently interrupted by notifications and links, and some researchers have expressed concern that heavy use of short content may make sustained reading harder, although the evidence is still being debated. Third, books are often checked by editors and publishers, which can make them more reliable than anonymous online posts.

Moreover, fiction develops imagination and empathy, because readers experience events from the viewpoint of other people. This is difficult to replace with brief summaries.

In my view, the best approach is to use both resources: the internet for quick information and books for depth and reflection. Libraries and schools can encourage this by promoting regular reading.

In conclusion, online information has not made books unnecessary. Reading remains a valuable source of understanding and concentration.`,
        analysis: [
          'Task Response: ясное несогласие с признанием преимуществ интернета.',
          'Аргументация: систематичность, концентрация, надёжность, воображение.',
          'Cohesion: First / Second / Third / Moreover / In conclusion.',
          'Lexical Resource: sustained, systematic, reliable, empathy; осторожное упоминание исследований.'
        ]
      }
    },
    speaking: {
      title: 'An-Nur — a book or teacher that opened your eyes', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о книге, прояснившей взгляды, и разговор о знании.',
      keywords: ['book', 'knowledge', 'understand', 'clear', 'inspire', 'light', 'reading', 'author', 'idea', 'change'],
      part1: [
        { q: 'Do you enjoy reading?', a: 'Yes, I read almost every evening. It helps me relax and learn something new.' },
        { q: 'What kind of books do you prefer?', a: 'I like non-fiction, especially history and geography, but I also enjoy a good novel.' },
        { q: 'Do you prefer paper books or electronic ones?', a: 'I prefer paper books because they are easier on my eyes, but e-books are convenient for travelling.' },
        { q: 'Did you read a lot as a child?', a: 'Yes, my mother read to me every night, and I think that created the habit.' }
      ],
      part2: {
        topic: 'Describe a book that changed the way you think.', bullets: ['what the book was', 'when you read it', 'what it was about', 'and explain how it changed your thinking.'],
        plan: [{ h: '1. Book', t: 'A biography of a scientist.' }, { h: '2. When', t: 'At sixteen.' }, { h: '3. About', t: 'Curiosity, failure, persistence.' }, { h: '4. Changed', t: 'Stopped fearing mistakes.' }],
        model: `I would like to talk about a biography of a famous scientist, which I read when I was sixteen and which changed the way I think about learning.

I found it in the school library almost by accident. At that time I was not a confident student. I was afraid of making mistakes and often stayed silent in class. The book described the life of a researcher who was curious from childhood and who spent years on experiments that did not work.

What impressed me was how honestly the author described the failures. The scientist did not become successful quickly; he repeated the same experiment hundreds of times, changed a small detail and tried again. In one chapter he said that every mistake told him something that he had not known before.

The book changed my thinking in several ways. First, I began to see mistakes as part of the process, not as proof that I was not clever. Second, I became more interested in questions than in quick answers. And third, I understood that patience is a form of intelligence.

After that, I started to ask questions in class and to try difficult tasks. My marks gradually improved, but more importantly, I felt that a kind of light had been turned on. I still return to that book when I feel discouraged, and I often recommend it to my students.`
      },
      part3: [
        { q: 'Why is knowledge important for society?', a: 'It helps people to make informed decisions and to solve problems. Societies with widespread education are also generally more stable.' },
        { q: 'Do you think people read less than in the past?', a: 'Possibly they read different things, such as short online texts. But many people still read books, and audiobooks have become popular.' },
        { q: 'How can teachers encourage students to read?', a: 'By offering interesting choices, discussing books in class and being readers themselves. Forcing students to read often has the opposite effect.' }
      ]
    }
  });

  /* ===== 94 · Al-Hadi ===== */
  put(94, {
    listening: {
      title: 'Al-Hadi — a career guidance appointment', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись на консультацию по выбору профессии: имя, время, цена, документы.',
      context: 'Part 1. Выпускница записывается на профориентационную консультацию.', genders: { Adviser: 'm', Aigerim: 'f' },
      script: `Adviser: Good afternoon, Career Guidance Centre.
Aigerim: Hello. I am finishing school this year and I do not know what to study. I would like some advice.
Adviser: That is very common. May I have your name?
Aigerim: Aigerim Bekova. B-E-K-O-V-A.
Adviser: Thank you, Aigerim. We have an appointment on Wednesday at half past three.
Aigerim: Yes, that is possible. How long does it take?
Adviser: About an hour. First, you will complete a questionnaire about your interests and strengths, and then you will talk with a counsellor.
Aigerim: Does it cost anything?
Adviser: For school students, the first consultation is free. Later sessions are eight pounds each.
Aigerim: Should I bring anything?
Adviser: Please bring your school marks and a list of the subjects that you enjoy. It also helps if you have spoken to your parents about what they think.
Aigerim: I will do that.
Adviser: Remember that the counsellor will not choose for you. He will help you to see your options more clearly, and the final decision is yours.
Aigerim: I understand. Where is the centre?
Adviser: On the third floor of the Youth Building, room three-fifteen.`,
      notesTitle: 'Career guidance',
      notes: [
        { pre: 'Surname:', post: '', a: ['Bekova'], e: 'Фамилия — Bekova.' },
        { pre: 'Appointment: Wednesday at', post: '', a: ['3.30', '3:30', 'half past three', '15:30', '3.30 pm'], e: 'В среду в половине четвёртого.' },
        { pre: 'Duration: about', post: 'hour(s)', a: ['1', 'one', 'an', 'an hour', 'one hour'], e: 'Около часа.' },
        { pre: 'Later sessions: £', post: 'each', a: ['8', 'eight'], e: 'Восемь фунтов.' },
        { pre: 'Room:', post: '', a: ['315', 'three fifteen', 'three-fifteen'], e: 'Комната 315.' }
      ],
      mc: [
        { q: 'What will Aigerim do first?', opts: ['complete a questionnaire', 'talk to a counsellor', 'pay a fee'], a: 'A', e: 'Сначала заполнит анкету.' },
        { q: 'Who makes the final decision?', opts: ['Aigerim', 'the counsellor', 'her parents'], a: 'A', e: 'Окончательное решение принимает Айгерим.' },
        { q: 'What should she bring?', opts: ['school marks and a list of favourite subjects', 'a passport', 'a CV'], a: 'A', e: 'Оценки и список любимых предметов.' }
      ]
    },
    writing: {
      title: 'Al-Hadi — role models and guidance', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение: кто должен направлять молодёжь — семья или школа.',
      task2: {
        prompt: 'Some people think that parents are the main source of guidance for young people when they choose a career. Others believe that teachers and professional counsellors are more important. Discuss both views and give your own opinion.',
        keywords: ['parents', 'teachers', 'counsellors', 'career', 'guidance', 'advice', 'young people', 'experience', 'interests', 'decision'],
        model: `Young people must make career choices at a time when they have little experience, so guidance is valuable. Opinions differ on who should provide it. In my view, parents, teachers and counsellors all have a role, and the final decision should belong to the young person.

Those who favour parents argue that families know their children best. Parents are aware of their abilities, character and values, and they usually care sincerely about their future. They can also offer practical support, such as financial help or contacts in a certain field. For many young people, a parent is the first example of a working life, and this influence is strong.

On the other hand, teachers and professional counsellors bring knowledge that parents may not have. Counsellors are trained to use tests and interviews to identify strengths, and they know about modern occupations, some of which did not exist when the parents were young. Teachers see students in different situations, and they can notice talents that do not appear at home. These people are also more neutral, as they have no personal wish for a child to follow the family business or fulfil an unrealised dream.

I believe that the best guidance combines these sources. A student can discuss his plans with his family, take advice from a counsellor and ask teachers about his strengths. Then he should compare the opinions and decide for himself, since a person who chooses his path is more likely to be motivated.

In conclusion, guidance from both family and professionals is useful, but young people should be encouraged to take responsibility for their decisions.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты, позиция — сочетание источников, решение за молодым человеком.',
          'Аргументация: знание ребёнка и поддержка vs профессиональная осведомлённость и нейтральность.',
          'Cohesion: On the other hand / Then / In conclusion.',
          'Lexical Resource: guidance, neutral, strengths, take responsibility.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hadi — a person who guided you', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о наставнике и разговор о советах и выборе пути.',
      keywords: ['guide', 'advice', 'mentor', 'direction', 'decision', 'path', 'support', 'choose', 'experience', 'grateful'],
      part1: [
        { q: 'Do you often ask other people for advice?', a: 'Yes, especially when the decision is important. Other people see things I may have missed.' },
        { q: 'Who gives you the best advice?', a: 'My older sister. She is honest and knows me well.' },
        { q: 'Do you prefer to make decisions alone or with others?', a: 'I prefer to listen to others first and then decide alone.' },
        { q: 'Have you ever followed advice that you later regretted?', a: 'Once, I followed a friend\'s suggestion about a course that did not suit me. Now I check several opinions.' }
      ],
      part2: {
        topic: 'Describe a person who gave you good advice.', bullets: ['who the person is', 'when they gave you the advice', 'what the advice was', 'and explain how it helped you.'],
        plan: [{ h: '1. Who', t: 'My university supervisor.' }, { h: '2. When', t: 'Before final year project.' }, { h: '3. Advice', t: 'Choose a topic you love, not an easy one.' }, { h: '4. Helped', t: 'Motivation; good result.' }],
        model: `I would like to talk about my university supervisor, Dr Serik, who gave me advice that I still remember.

It happened in the autumn of my final year, when I had to choose a topic for my diploma project. At that time I was inclined to select a simple subject, which I could finish quickly and which was similar to the work of previous students. I explained this to Dr Serik at our first meeting, expecting him to agree.

Instead, he asked me a question: "What do you actually want to know?" I said that I was interested in how climate affects settlements in the mountains, but I thought that it was too difficult. He listened carefully and then told me that a project is a year of your life, so it is better to choose a question that you can think about even in your free time. He promised to help with the method and the sources.

I followed his advice, and it was the right decision. The topic motivated me to read more than required, to travel to a village for observations and to ask questions to the local people. When the difficult moments came, I did not want to give up, because I really wanted to find the answer.

The project received the highest mark, and, more importantly, it showed me the direction for my career. I am very grateful to him, and I try to give the same kind of advice to my own students.`
      },
      part3: [
        { q: 'Why do people need guidance when making big decisions?', a: 'Because they have limited information and may be influenced by emotions. An experienced person can show options that they have not considered.' },
        { q: 'Is it always wise to follow the advice of older people?', a: 'Not always. Their experience is valuable, but circumstances change. It is best to consider their reasons and then decide.' },
        { q: 'How can schools help students to find the right path?', a: 'By offering career talks, work experience and honest feedback about strengths. Visits to workplaces are particularly helpful.' }
      ]
    }
  });

  /* ===== 95 · Al-Badi' ===== */
  put(95, {
    listening: {
      title: 'Al-Badi\' — an art museum tour', spec: 'Listening · Part 3 format · экскурсия, 8 вопросов · ~3 минуты',
      takeaway: 'Экскурсия по выставке: даты, размеры, цены, правила.',
      context: 'Part 2. Гид знакомит посетителей с выставкой современного искусства.', genders: { Guide: 'f' },
      script: `Guide: Welcome to the Gallery of Modern Art. I will tell you about the main exhibition today, which is called Something New.
Guide: It opened on the third of May and will continue until the end of August.
Guide: The first room shows paintings by young artists from the region, and the largest of them measures four metres by three.
Guide: In the second room, you will see sculptures made of recycled materials, such as glass and old metal.
Guide: The third room is an interactive space, where visitors can add their own drawings to a large wall.
Guide: Please do not touch the sculptures, but photography is allowed everywhere without flash.
Guide: The entrance fee is nine pounds for adults, and students pay half price.
Guide: On Thursdays, the gallery stays open until nine in the evening, and the entrance is free after six o'clock.
Guide: There is a workshop for children every Saturday morning, and you can register at the information desk.
Guide: The café is on the top floor, and it has a view over the park.`,
      notesTitle: 'Something New exhibition',
      notes: [
        { pre: 'Opened on', post: 'May', a: ['3', '3rd', 'third', 'the third', 'the 3rd'], e: 'Третьего мая.' },
        { pre: 'Largest painting:', post: 'metres wide', a: ['4', 'four'], e: 'Четыре метра.' },
        { pre: 'Sculptures made of recycled', post: 'and metal', a: ['glass'], e: 'Из стекла и металла.' },
        { pre: 'Adult ticket: £', post: '', a: ['9', 'nine'], e: 'Девять фунтов.' },
        { pre: 'Thursday opening until', post: 'p.m.', a: ['9', 'nine', '9:00', '9 pm'], e: 'Открыто до девяти.' }
      ],
      mc: [
        { q: 'What can visitors do in the third room?', opts: ['add drawings to a wall', 'touch the sculptures', 'buy paintings'], a: 'A', e: 'Добавлять рисунки на стену.' },
        { q: 'What is the student ticket price?', opts: ['half price', 'free', 'full price'], a: 'A', e: 'Половина цены.' },
        { q: 'Where is the café?', opts: ['top floor', 'ground floor', 'basement'], a: 'A', e: 'На верхнем этаже.' }
      ]
    },
    writing: {
      title: 'Al-Badi\' — creativity and innovation', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: можно ли научить творчеству.',
      task2: {
        prompt: 'Some people believe that creativity is a natural talent that cannot be taught. Others think that creative skills can be developed through education and practice. To what extent do you agree or disagree that creativity can be taught?',
        keywords: ['creativity', 'talent', 'teach', 'practice', 'innovation', 'education', 'imagination', 'skills', 'problem solving', 'environment'],
        model: `Whether creativity is an inborn gift or a skill is a long-standing question. I largely agree that creativity can be developed, although natural differences between people certainly exist.

It is true that some individuals show originality from an early age. A child may draw, invent stories or build things without any lessons, and this suggests that natural inclination matters. Few would deny that exceptional talent in art or music has an inherited element.

However, there is considerable evidence that creative abilities can be improved. First, creativity involves practical techniques, such as brainstorming, looking at a problem from a different angle and combining ideas from various fields. These methods can be learned, just like those for writing or mathematics. Second, knowledge is the raw material of creativity: a person who has studied a subject in depth has more ideas to combine. Third, the environment is important. Children who are encouraged to ask questions and are not punished for mistakes tend to experiment more. Schools that offer open-ended projects, instead of only exercises with a single correct answer, allow students to practise original thinking.

For these reasons, education should deliberately include creative activities. Teachers can set tasks that have no fixed solution, allow time for experiment and praise effort and not only correct results. Employers also gain from this, since modern workplaces value people who can solve new problems.

In conclusion, innate ability may give some people a head start, but creativity is largely a skill that grows with knowledge, practice and encouragement.`,
        analysis: [
          'Task Response: градуированная позиция («в основном согласен, оговорка о врождённых различиях»).',
          'Аргументация: техники, знания как материал, среда; роль школы.',
          'Cohesion: First / Second / Third / For these reasons / In conclusion.',
          'Lexical Resource: inborn, open-ended, inclination, head start.'
        ]
      }
    },
    speaking: {
      title: 'Al-Badi\' — something original you created', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о творческом проекте и разговор о новом и оригинальном.',
      keywords: ['create', 'original', 'idea', 'design', 'imagine', 'new', 'inspire', 'project', 'creative', 'unique'],
      part1: [
        { q: 'Are you a creative person?', a: 'I think so, in practical ways. I enjoy finding new ways to explain things to my students.' },
        { q: 'Did you like art classes at school?', a: 'Yes, I enjoyed drawing maps, which combined art with my love of geography.' },
        { q: 'Do you prefer new things or familiar ones?', a: 'A mixture. I like familiar routines, but I enjoy trying new places and ideas.' },
        { q: 'Where do you find inspiration?', a: 'In nature, books and conversations. A walk outside often gives me new ideas.' }
      ],
      part2: {
        topic: 'Describe something creative that you made.', bullets: ['what you made', 'why you made it', 'how you made it', 'and explain how you felt about the result.'],
        plan: [{ h: '1. What', t: 'A board game about geography.' }, { h: '2. Why', t: 'Students were bored by lessons.' }, { h: '3. How', t: 'Cards, map, rules, tests with students.' }, { h: '4. Felt', t: 'Proud; students enjoyed.' }],
        model: `I would like to describe a board game about geography that I created for my students a couple of years ago.

The idea came from a problem. Some of my students found geography lessons rather dry, and they forgot the facts soon after the test. I wondered whether a game might help them to remember, and I could not find a suitable one in the shops, so I decided to make my own.

I started by drawing a large map on a piece of cardboard, with routes between cities and mountains. Then I prepared about two hundred cards with questions, from simple ones about capitals to more difficult ones about climate. I also invented rules: players travel across the map, collect resources and answer questions to move forward. I tested the first version with a few students, who told me that the rules were too complicated, so I simplified them and added a few surprises.

When we finally played it in class, the atmosphere was wonderful. Students argued about the best route, laughed at wrong answers and asked to play again. In the next test, their results were noticeably better.

I felt proud, not because the game was perfect, but because it was entirely mine and it worked. It taught me that creativity often starts with a small practical problem, and that other people\'s reactions help to improve an idea.`
      },
      part3: [
        { q: 'Can everyone be creative?', a: 'I believe so. People express creativity differently, for example in cooking, design or problem-solving, but everyone can develop it.' },
        { q: 'Why is creativity important in the workplace?', a: 'Because organisations face new problems and need fresh ideas. Creative employees can also improve processes.' },
        { q: 'Do schools encourage creativity enough?', a: 'In many places, not enough, because the focus is on exams. Projects and open questions could give more space for original thinking.' }
      ]
    }
  });

  /* ===== 96 · Al-Baqi ===== */
  put(96, {
    listening: {
      title: 'Al-Baqi — a heritage preservation talk', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о сохранении наследия: даты, числа, методы.',
      context: 'Part 4. Историк рассказывает о реставрации древнего караван-сарая.', genders: { Historian: 'm' },
      script: `Historian: Today I will describe the project to preserve the old caravan house in the town of Sarai, which has stood for almost seven hundred years.
Historian: It was built in the fourteenth century as a resting place for traders travelling along the trade route.
Historian: By the year nineteen-fifty, much of the roof had fallen, and the walls were seriously damaged by water.
Historian: The restoration began in two thousand and eight and took nine years.
Historian: Workers used traditional bricks, made from local clay, and lime mortar, instead of modern cement, which could harm the old walls.
Historian: The project cost about two million pounds, of which half came from international funds and the remainder from the local government and donations.
Historian: One of the biggest challenges was the lack of drawings, so the team had to study old travellers' descriptions and compare them with similar buildings.
Historian: Today the building is a museum and receives around thirty thousand visitors a year.
Historian: It is open from Tuesday to Sunday, and the guided tour in English takes forty minutes.
Historian: The main lesson is that heritage lasts only if people decide to care for it.`,
      notesTitle: 'Caravan house restoration',
      notes: [
        { pre: 'Built in the', post: 'century', a: ['14th', 'fourteenth', '14'], e: 'Четырнадцатый век.' },
        { pre: 'Restoration began in', post: '', a: ['2008', 'two thousand and eight', 'two thousand eight'], e: 'С 2008 года.' },
        { pre: 'Restoration took', post: 'years', a: ['9', 'nine'], e: 'Девять лет.' },
        { pre: 'Visitors per year: about', post: '', a: ['30000', '30,000', 'thirty thousand'], e: 'Около тридцати тысяч.' },
        { pre: 'English tour lasts', post: 'minutes', a: ['40', 'forty'], e: 'Сорок минут.' }
      ],
      mc: [
        { q: 'Why did workers avoid modern cement?', opts: ['it could harm the old walls', 'it was too expensive', 'it was not available'], a: 'A', e: 'Мог повредить старые стены.' },
        { q: 'What was one of the biggest challenges?', opts: ['lack of drawings', 'lack of workers', 'bad weather'], a: 'A', e: 'Отсутствие чертежей.' },
        { q: 'What is the main lesson, according to the historian?', opts: ['heritage lasts only if people care for it', 'old buildings should be replaced', 'museums are unnecessary'], a: 'A', e: 'Наследие сохраняется, только если о нём заботятся.' }
      ]
    },
    writing: {
      title: 'Al-Baqi — preserving heritage', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение: сохранять старые здания или строить новые.',
      task2: {
        prompt: 'Some people think that old buildings should be preserved because they are part of a country\'s history. Others believe that it is better to demolish them and build modern ones. Discuss both views and give your own opinion.',
        keywords: ['heritage', 'old buildings', 'demolish', 'preserve', 'history', 'cost', 'tourism', 'modern', 'housing', 'identity'],
        model: `As cities grow, there is often a conflict between preserving old buildings and constructing new ones. Both sides have valid arguments, but I believe that historic buildings of real value should be protected, while ordinary old structures can be replaced when necessary.

Supporters of demolition point to practical reasons. Old buildings may be unsafe, expensive to heat and impossible to adapt to modern needs, and the land they occupy might provide housing, hospitals or schools for many people. In a city with a housing shortage, keeping an empty historic building can seem a luxury. Restoration is also costly, and public money has many competing uses.

On the other hand, historic buildings are a link between generations. They give a place its identity and help people to understand how earlier generations lived, in a way that books cannot fully convey. Once demolished, they cannot be rebuilt in an authentic form. Preservation can also have economic benefits, since well-kept historic areas attract tourists and create jobs in guiding, crafts and hospitality. Moreover, old buildings can often be given new uses, for instance as museums, libraries or apartments, which combine the past and the present.

For these reasons, I believe that a selective policy is best. Experts should assess which buildings have special historical or architectural importance, and these should be protected by law and restored with care. Other buildings should be judged on their condition and usefulness, and new developments should respect the character of their surroundings.

In conclusion, preserving heritage is a responsibility to future generations, but it should be balanced with the genuine needs of a living city.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты, позиция — избирательная политика.',
          'Аргументация: безопасность, жильё, затраты vs идентичность, туризм, повторное использование.',
          'Cohesion: On the other hand / Moreover / For these reasons / In conclusion.',
          'Lexical Resource: heritage, authentic, selective policy, hospitality.'
        ]
      }
    },
    speaking: {
      title: 'Al-Baqi — something that lasts', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о старом месте или вещи и разговор о том, что остаётся.',
      keywords: ['old', 'history', 'last', 'memory', 'tradition', 'preserve', 'remember', 'heritage', 'generation', 'timeless'],
      part1: [
        { q: 'Do you like old buildings?', a: 'Yes, very much. They have character and tell stories that modern buildings do not.' },
        { q: 'Do you keep old things?', a: 'A few: some photographs and letters from my grandparents. They are precious to me.' },
        { q: 'Is history interesting for you?', a: 'Very. I teach geography, but history helps to explain why places look the way they do.' },
        { q: 'What traditions does your family keep?', a: 'We gather on holidays, cook traditional dishes and tell stories about our ancestors.' }
      ],
      part2: {
        topic: 'Describe an old place that is important to you.', bullets: ['where it is', 'how old it is', 'what you do there', 'and explain why it is important to you.'],
        plan: [{ h: '1. Where', t: 'Grandparents\' house in a village.' }, { h: '2. Age', t: 'Over seventy years.' }, { h: '3. Do', t: 'Visit in summer; garden, stories.' }, { h: '4. Important', t: 'Roots, memories.' }],
        model: `I would like to describe my grandparents\' house in a village about two hours from the city. It is more than seventy years old, and it is one of the most important places in my life.

My grandfather built the house himself, together with his brothers, soon after he got married. It is a modest building with thick walls, a wooden veranda and a large garden with apple trees. Some of the furniture, such as the carved chest in the main room, is even older than the house.

I go there every summer, and I spent all my childhood holidays there. In the morning I help in the garden and in the evening we sit on the veranda, drink tea and listen to my grandmother\'s stories about the family. She remembers the names of relatives going back many generations, and she tells how the village looked when she was young.

The house matters to me for several reasons. It gives me a feeling of roots, a knowledge of where my family comes from. It is also full of memories: the smell of bread from the oven, the sound of the old clock, and the games we played with my cousins.

I know that nothing lasts for ever, and the house needs repair every year. But as long as the family cares for it, it will remain a place where several generations meet, and I hope to show it to my own children one day.`
      },
      part3: [
        { q: 'Why do people value old things?', a: 'Because they connect us to the past and to people we love. Old objects also often show a quality and craftsmanship that is rare today.' },
        { q: 'Should governments spend money on preserving historic sites?', a: 'Yes, within reason. These places educate people and attract visitors, and once they are lost they cannot be replaced.' },
        { q: 'What will future generations remember about our time?', a: 'Probably our technology and perhaps our photographs. I hope they will also remember efforts to protect nature and help others.' }
      ]
    }
  });

  /* ===== 97 · Al-Warith ===== */
  put(97, {
    listening: {
      title: 'Al-Warith — a family history workshop', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись на мастер-класс по семейной истории: имя, дата, цена, материалы.',
      context: 'Part 1. Жительница записывается на мастер-класс по составлению родословной.', genders: { Librarian: 'f', Nurzhan: 'm' },
      script: `Librarian: Good morning, City Archive and Library.
Nurzhan: Good morning. I would like to join your workshop on family history. I want to write down the story of my grandfather before it is forgotten.
Librarian: That is a lovely idea. May I have your name?
Nurzhan: Nurzhan Kassymov. K-A-S-S-Y-M-O-V.
Librarian: Thank you. The workshop takes place on two Saturdays, the second and the ninth of March, from ten until one.
Nurzhan: What will we do?
Librarian: On the first Saturday, you learn how to interview older relatives and how to record their stories. On the second, you learn how to search official records and how to draw a family tree.
Nurzhan: Do I need to bring anything?
Librarian: Yes, any old documents or photographs that you have. Also bring a notebook or a recording device.
Nurzhan: How much is it?
Librarian: It costs twenty pounds for both days, and the materials are included.
Nurzhan: Can my sister come too?
Librarian: Of course. There are still ten places left. Please pay at the desk on the first floor of the library.`,
      notesTitle: 'Family history workshop',
      notes: [
        { pre: 'Surname:', post: '', a: ['Kassymov'], e: 'Фамилия — Kassymov.' },
        { pre: 'Workshop dates: 2 and', post: 'March', a: ['9', '9th', 'ninth', 'the ninth', 'the 9th'], e: 'Второго и девятого марта.' },
        { pre: 'Time: from 10 until', post: '', a: ['1', 'one', '1:00', '1 pm', '13:00'], e: 'С десяти до часу.' },
        { pre: 'Cost for both days: £', post: '', a: ['20', 'twenty'], e: 'Двадцать фунтов.' },
        { pre: 'Places left:', post: '', a: ['10', 'ten'], e: 'Осталось десять мест.' }
      ],
      mc: [
        { q: 'What will participants learn on the first Saturday?', opts: ['how to interview relatives', 'how to draw a family tree', 'how to use a computer'], a: 'A', e: 'Как опрашивать родственников.' },
        { q: 'What should Nurzhan bring?', opts: ['old documents and photographs', 'a laptop', 'a gift'], a: 'A', e: 'Старые документы и фотографии.' },
        { q: 'Where should he pay?', opts: ['first-floor desk', 'online', 'at the archive'], a: 'A', e: 'На стойке первого этажа.' }
      ]
    },
    writing: {
      title: 'Al-Warith — what we leave behind', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: должны ли родители оставлять детям имущество.',
      task2: {
        prompt: 'Some people think that parents should leave their wealth to their children. Others believe it is better to spend it on themselves or to give it to charity. To what extent do you agree or disagree that children should inherit their parents\' wealth?',
        keywords: ['inheritance', 'wealth', 'children', 'parents', 'charity', 'independence', 'family', 'education', 'responsibility', 'legacy'],
        model: `The question of what to do with wealth at the end of life is both personal and social. I partly agree that children should inherit from their parents, but I believe that inheritance should not be the only form of legacy, and that giving to the community also matters.

There are good reasons for supporting inheritance. Parents usually work hard in order to provide for their children, and passing on a home or savings is a natural extension of that care. An inheritance can help young people to start a business, to buy a house or to survive difficult times. It also strengthens family bonds, since a property which stays within a family may carry memories and a sense of continuity. In many cultures, there are also fair rules of inheritance that protect family members, especially the vulnerable.

Nevertheless, there are risks in relying on inheritance. Children who expect to receive large sums may lose the motivation to work and to develop their own skills, and disputes over property can damage relationships. Meanwhile, charitable giving can benefit society, for example by funding education, hospitals or scholarships, and it creates a lasting contribution which many people find meaningful.

In my opinion, a sensible approach is a combination. Parents can provide the education and values that help children to be independent, leave a reasonable part of their property to their family, and also give a portion to a good cause. The most valuable legacy, in fact, is often not money but character, knowledge and example.

In conclusion, it is natural and right for children to inherit, but parents should consider the wider picture and think about what will truly benefit both their family and society.`,
        analysis: [
          'Task Response: частичное согласие, позиция — сочетание наследства и благотворительности.',
          'Аргументация: забота, помощь, преемственность vs иждивенчество, споры; нематериальное наследие.',
          'Cohesion: Nevertheless / Meanwhile / In my opinion / In conclusion.',
          'Lexical Resource: inheritance, bonds, vulnerable, legacy, continuity.'
        ]
      }
    },
    speaking: {
      title: 'Al-Warith — a family legacy', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о том, что передали предки, и разговор о наследии.',
      keywords: ['family', 'inherit', 'legacy', 'pass on', 'tradition', 'ancestor', 'value', 'memory', 'generation', 'heritage'],
      part1: [
        { q: 'Do you know much about your ancestors?', a: 'I know about my great-grandparents, thanks to my grandmother\'s stories. I would like to learn more.' },
        { q: 'Do you look like anyone in your family?', a: 'People say I look like my father, but I think I have my mother\'s character.' },
        { q: 'What traditions are passed on in your family?', a: 'We keep the habit of visiting elderly relatives on holidays and of preparing a special dish together.' },
        { q: 'Would you like to pass something on to your children?', a: 'Yes, mostly values like honesty and a love of learning, and also some family stories.' }
      ],
      part2: {
        topic: 'Describe something that you received from an older family member.', bullets: ['what it was', 'who gave it to you', 'why they gave it to you', 'and explain what it means to you.'],
        plan: [{ h: '1. What', t: 'My grandfather\'s old compass.' }, { h: '2. Who', t: 'Grandfather.' }, { h: '3. Why', t: 'I love maps and travel.' }, { h: '4. Means', t: 'Connection, encouragement.' }],
        model: `I would like to talk about an old compass that I received from my grandfather when I was sixteen.

It is a small brass compass in a worn case, with scratches on the glass and a leather strap that has been repaired several times. My grandfather worked as a surveyor for most of his life, travelling through different regions to measure land and to make maps. He used this compass in his work for many years.

He gave it to me on my birthday. He had noticed that I loved atlases and often drew my own maps, and he said that he wanted the compass to go to someone who would use it, not to leave it in a drawer. He also told me a few stories about trips with it, including one night when he and his colleagues found their way back in a snowstorm only because of the needle.

The compass means a lot to me, for several reasons. First, it connects me with a person I love and with the work that he was proud of. Second, it was an encouragement: his gift told me that he believed in my interests. And third, it reminds me that knowledge and skills are passed from one generation to another.

I do not use it every day, but I take it on field trips, and I show it to my students. One day, I hope to give it to my own child, along with the same stories.`
      },
      part3: [
        { q: 'Why is it important to pass traditions to the next generation?', a: 'They give a sense of identity and continuity. Without them, the young may feel disconnected from their roots.' },
        { q: 'Are material possessions or values more important to pass on?', a: 'Values, I think, because they guide how a person uses possessions. Property can be lost, but character stays.' },
        { q: 'How can people record their family history?', a: 'By interviewing older relatives, saving photographs and writing stories down. Digital tools make it easier to store these.' }
      ]
    }
  });

  /* ===== 98 · Ar-Rashid ===== */
  put(98, {
    listening: {
      title: 'Ar-Rashid — a student decision-making seminar', spec: 'Listening · Part 3 format · обсуждение, 8 вопросов · ~3 минуты',
      takeaway: 'Обсуждение методов принятия решений: этапы, числа, сроки.',
      context: 'Part 3. Преподаватель и двое студентов обсуждают проект о принятии решений.', genders: { Tutor: 'f', Timur: 'm', Alina: 'f' },
      script: `Tutor: Let us discuss your project on how people make important decisions. Timur, what was your first step?
Timur: We surveyed one hundred and twenty students about their last big decision, such as choosing a university.
Alina: We found that about two thirds of them asked at least two people for advice.
Tutor: That is interesting. And how many of them were satisfied with the result?
Timur: Around seventy per cent said they were happy, and most of those had spent more than a month thinking about it.
Alina: Those who decided in a hurry were more likely to regret it.
Tutor: What method do you recommend?
Timur: We suggest four steps: collect information, list the advantages and disadvantages, consult trusted people and sleep on it for a day or two.
Alina: We also add a fifth step, which is to review the decision after six months and learn from it.
Tutor: A good project. What is your main limitation?
Timur: All the participants were students, so we cannot say that the results are true for everyone.
Tutor: That is an honest comment. Please send me the final version by the twenty-first of May.`,
      notesTitle: 'Decision-making project',
      notes: [
        { pre: 'Students surveyed:', post: '', a: ['120', 'one hundred and twenty', 'a hundred and twenty'], e: 'Сто двадцать студентов.' },
        { pre: 'Asked at least', post: 'people for advice', a: ['2', 'two'], e: 'Не менее двух человек.' },
        { pre: 'Satisfied with the result:', post: 'per cent', a: ['70', 'seventy'], e: 'Около семидесяти процентов.' },
        { pre: 'Review the decision after', post: 'months', a: ['6', 'six'], e: 'Через шесть месяцев.' },
        { pre: 'Final version due on', post: 'May', a: ['21', '21st', 'twenty-first', 'the twenty-first', 'the 21st'], e: 'Двадцать первого мая.' }
      ],
      mc: [
        { q: 'Who were more likely to regret their decision?', opts: ['those who decided in a hurry', 'those who consulted many people', 'those who waited a month'], a: 'A', e: 'Те, кто решал в спешке.' },
        { q: 'What is the main limitation of the study?', opts: ['all participants were students', 'the sample was too large', 'the survey was too short'], a: 'A', e: 'Все участники были студентами.' },
        { q: 'What does the fifth step involve?', opts: ['reviewing the decision later', 'asking more friends', 'writing a report'], a: 'A', e: 'Пересмотр решения позднее.' }
      ]
    },
    writing: {
      title: 'Ar-Rashid — maturity and responsibility', spec: 'Writing · Task 2 Problem/Solution · 40 минут · минимум 250 слов',
      takeaway: 'Проблема: молодёжь поздно берёт ответственность; пути решения.',
      task2: {
        prompt: 'In many countries, young adults are taking longer to become independent and to accept adult responsibilities. What problems does this cause, and what can be done to encourage young people to mature earlier?',
        keywords: ['young adults', 'independence', 'responsibility', 'maturity', 'parents', 'employment', 'education', 'housing', 'decision', 'skills'],
        model: `In many societies, young people remain financially and emotionally dependent on their parents well into their twenties. This trend causes several difficulties, but there are practical ways to encourage earlier independence.

The first problem is the burden on families. Parents who support adult children for a long time may have less money for their retirement, and tension can arise in the household. Secondly, young people who do not practise making decisions may lack confidence and find it difficult to handle setbacks, which can affect their mental health. Thirdly, the economy suffers when talented people delay starting work or founding businesses.

Some causes are beyond the control of young people, such as high housing prices and a shortage of stable jobs. Nevertheless, several measures can help. Schools can include life skills in the curriculum, such as budgeting, cooking and filling in official forms, so that students are better prepared. Governments and employers can provide more apprenticeships and part-time work for students, which give both income and experience. Affordable housing schemes for young people would also make independence more realistic.

Families have an important role as well. Parents can give children age-appropriate responsibilities from an early age, from household tasks to managing a small allowance, and allow them to experience the consequences of their own choices. Advice is useful, but the decision should be left to the young person whenever possible.

In conclusion, delayed independence harms families, individuals and the economy, but it can be addressed by education, better opportunities and sensible parenting that encourages responsibility step by step.`,
        analysis: [
          'Task Response: обе части (проблемы и решения) раскрыты.',
          'Аргументация: нагрузка на семью, уверенность, экономика; школа, государство, семья.',
          'Cohesion: The first / Secondly / Thirdly / Nevertheless / In conclusion.',
          'Lexical Resource: apprenticeships, setbacks, age-appropriate, allowance.'
        ]
      }
    },
    speaking: {
      title: 'Ar-Rashid — a wise decision', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о мудром решении и разговор о зрелости.',
      keywords: ['decision', 'wise', 'mature', 'consider', 'consequences', 'responsible', 'advice', 'think', 'choice', 'judgement'],
      part1: [
        { q: 'Do you make decisions quickly or slowly?', a: 'It depends. Small decisions quickly, but for large ones I need time to think and to collect information.' },
        { q: 'Who helps you when you have to decide?', a: 'My parents and sometimes a colleague. I value different viewpoints.' },
        { q: 'At what age do you think people become mature?', a: 'It differs, but usually when they begin to take responsibility for their actions, not at a certain birthday.' },
        { q: 'Have you ever made a wrong decision?', a: 'Yes, several times, mostly when I acted in a hurry. I learned to wait a day before deciding.' }
      ],
      part2: {
        topic: 'Describe a wise decision you made.', bullets: ['what the decision was', 'when you made it', 'how you decided', 'and explain why you think it was wise.'],
        plan: [{ h: '1. Decision', t: 'To study a master\'s while working part-time.' }, { h: '2. When', t: 'Four years ago.' }, { h: '3. How', t: 'Lists, advice, one week of reflection.' }, { h: '4. Wise', t: 'Career growth, no debts.' }],
        model: `I would like to describe a decision that I made four years ago, to continue my studies for a master\'s degree while working part-time.

At that time I had just received a job offer for a full-time position, with a good salary. My friends told me to accept it. On the other hand, I had an opportunity to enter a master\'s programme, which I had wanted for a long time, but it would mean a lower income for two years.

I did not decide immediately. For a week I made lists of the advantages and disadvantages of each choice, and I spoke to people whose opinions I trusted: my father, a former teacher and a colleague who had done a similar course. They gave different answers, but their questions helped me to see what mattered to me. I also calculated my expenses to check that I could manage.

In the end I chose to study and found a part-time job at a school, so that I did not need to borrow money. The two years were busy but valuable.

I think the decision was wise for several reasons. The degree gave me skills and a qualification that later helped me to get a better position. I also avoided debt, because I had planned carefully. Most importantly, I made the decision after thinking about the consequences and not in a hurry, which I now try to do in all important matters.`
      },
      part3: [
        { q: 'What makes a decision wise?', a: 'Good information, consideration of consequences and consultation with others. A wise decision also fits a person\'s values.' },
        { q: 'Should young people make their own big decisions?', a: 'Yes, with advice. Taking responsibility for choices is how people grow, even if they sometimes make mistakes.' },
        { q: 'Does age always bring wisdom?', a: 'No. Experience helps only if a person reflects on it. Some young people are surprisingly sensible.' }
      ]
    }
  });

  /* ===== 99 · As-Sabur ===== */
  put(99, {
    listening: {
      title: 'As-Sabur — a marathon training plan', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'План подготовки к марафону: недели, километры, советы.',
      context: 'Part 2. Тренер рассказывает новичкам о плане подготовки к забегу.', genders: { Coach: 'm' },
      script: `Coach: Welcome to the beginners\' group for the city half-marathon. I will explain the plan for the next sixteen weeks.
Coach: In the first four weeks, you will run three times a week, and each session will last thirty minutes. Do not worry if you need to walk sometimes.
Coach: In weeks five to ten, we gradually increase the distance of the long run on Sundays, from five to twelve kilometres.
Coach: In weeks eleven to fourteen, the longest run reaches eighteen kilometres, and then we reduce the load to rest before the race.
Coach: The race takes place on the twentieth of September, and the distance is twenty-one kilometres.
Coach: The most common mistake is to do too much too soon, which often leads to injury. Progress should be slow.
Coach: Make sure you have proper running shoes, and replace them after about eight hundred kilometres.
Coach: Sleep and food are as important as training. Try to sleep at least seven hours.
Coach: There will be days when you do not feel like running. That is normal, and the lesson of this training is perseverance, which means doing a small amount regularly.
Coach: The group meets at the park gate at half past six in the morning. The fee for sixteen weeks is forty pounds.`,
      notesTitle: 'Half-marathon training',
      notes: [
        { pre: 'Plan lasts', post: 'weeks', a: ['16', 'sixteen'], e: 'Шестнадцать недель.' },
        { pre: 'First four weeks: sessions of', post: 'minutes', a: ['30', 'thirty'], e: 'Тридцать минут.' },
        { pre: 'Longest run reaches', post: 'kilometres', a: ['18', 'eighteen'], e: 'Восемнадцать километров.' },
        { pre: 'Race date:', post: 'September', a: ['20', '20th', 'twentieth', 'the twentieth', 'the 20th'], e: 'Двадцатого сентября.' },
        { pre: 'Fee: £', post: '', a: ['40', 'forty'], e: 'Сорок фунтов.' }
      ],
      mc: [
        { q: 'What is the most common mistake?', opts: ['doing too much too soon', 'running too slowly', 'sleeping too much'], a: 'A', e: 'Слишком много и слишком рано.' },
        { q: 'When should running shoes be replaced?', opts: ['after about 800 km', 'after one month', 'after 100 km'], a: 'A', e: 'Примерно через 800 км.' },
        { q: 'When does the group meet?', opts: ['6.30 a.m.', '7.30 a.m.', '6.30 p.m.'], a: 'A', e: 'В половине седьмого утра.' }
      ]
    },
    writing: {
      title: 'As-Sabur — patience in a fast world', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: теряем ли мы терпение из-за технологий.',
      task2: {
        prompt: 'Some people think that modern technology has made people less patient. To what extent do you agree or disagree?',
        keywords: ['patience', 'technology', 'instant', 'attention', 'waiting', 'social media', 'delay', 'effort', 'perseverance', 'society'],
        model: `Digital technology has changed the way we shop, communicate and learn. Many people claim that it has made us impatient. I largely agree, although I believe that patience is a skill which can still be developed.

There is evidence in everyday life for this view. Messages are delivered in seconds, films can be watched immediately, and goods are brought to the door in a day. As a result, people are used to getting what they want without waiting. A short delay in loading a web page is often enough to make a user close it. Teachers say that some students find it harder to read long texts or to work on a problem for a long time, and some researchers have suggested a link between constant notifications and shorter attention, although this is still being studied.

Moreover, social media reward quick reactions, and this may encourage people to judge situations, and each other, hastily. Skills that take years to develop, such as learning an instrument or a language, can seem too slow compared with the speed of a screen.

However, technology is not the only cause, and it can also support patient effort. Online courses allow people to study at their own pace, and applications can track long-term goals such as saving money or running a marathon. The decisive factor is how a person uses these tools. Habits such as turning off notifications, setting aside time for long reading and practising a hobby can train patience.

In conclusion, instant technology has encouraged impatience, but individuals and schools can counter it by deliberately practising activities that require time and perseverance.`,
        analysis: [
          'Task Response: градуированная позиция («в основном согласен, но терпение можно развивать»).',
          'Аргументация: мгновенность, внимание, соцсети; технологии как поддержка долгих целей.',
          'Cohesion: Moreover / However / In conclusion.',
          'Lexical Resource: perseverance, hastily, notifications, instant; осторожная формулировка о исследованиях.'
        ]
      }
    },
    speaking: {
      title: 'As-Sabur — a time you needed patience', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о ситуации, потребовавшей терпения, и разговор о выдержке.',
      keywords: ['patient', 'wait', 'persevere', 'effort', 'slowly', 'practice', 'difficult', 'goal', 'calm', 'result'],
      part1: [
        { q: 'Are you a patient person?', a: 'Generally yes, but not always when I am tired or hungry. I am working on it.' },
        { q: 'What do you do while waiting?', a: 'I usually read or listen to a podcast. It makes the time pass more pleasantly.' },
        { q: 'Do you get annoyed in traffic jams?', a: 'A little. I try to use the time to listen to something useful.' },
        { q: 'Who is the most patient person you know?', a: 'My grandmother. She can sit for hours teaching a child to knit without losing her temper.' }
      ],
      part2: {
        topic: 'Describe a time when you needed to be patient.', bullets: ['what the situation was', 'why you needed to be patient', 'what you did', 'and explain what the result was.'],
        plan: [{ h: '1. Situation', t: 'Learning to drive.' }, { h: '2. Why', t: 'Failed two tests.' }, { h: '3. Did', t: 'Practised weekly, stayed calm.' }, { h: '4. Result', t: 'Passed the third time.' }],
        model: `I would like to talk about a time when I needed a lot of patience, which was when I was learning to drive.

I started lessons at the age of twenty-two. At the beginning I was sure it would take just a couple of months, as it did for some of my friends. However, I was nervous in traffic, and I made mistakes with parking and with the rules at crossings. I failed the first test in the spring and the second one in the summer, both times because of small errors that resulted from stress.

After the second failure, I felt discouraged and thought of giving up. My instructor, however, told me that many people need three attempts and that the most important thing was to keep practising. I decided to be patient with myself. I booked a lesson every week, drove with my father at weekends on quiet roads and practised the difficult manoeuvres again and again until they became automatic. When I felt nervous, I breathed slowly and reminded myself to concentrate on one thing at a time.

I took the third test in the autumn, and this time I felt calm. I passed with only two minor mistakes.

The result was not only a driving licence. I learned that progress is often slow and invisible, and that the people who succeed are often those who continue after a setback. I now try to apply the same approach to other goals, such as learning languages.`
      },
      part3: [
        { q: 'Why is patience difficult nowadays?', a: 'Because we are used to quick results, from fast delivery to instant messages. This makes waiting feel uncomfortable.' },
        { q: 'Can children be taught to be patient?', a: 'Yes. Simple activities like growing a plant, playing board games and waiting for their turn help to build the habit.' },
        { q: 'Is patience always a virtue?', a: 'Usually, but not when it means tolerating injustice or delaying action that is urgent. Wisdom is knowing the difference.' }
      ]
    }
  });
})();

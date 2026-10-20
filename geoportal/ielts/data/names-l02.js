// Имена 11–20: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 11 · Al-Khaliq ===== */
  put(11, {
    listening: {
      title: 'Al-Khaliq — a nature reserve tour', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за маршрутом и числами в монологе-экскурсии, различать поправки.',
      context: 'Part 2. Гид рассказывает посетителям заповедника о маршруте.', genders: { Guide: 'm' },
      script: `Guide: Good morning, everyone, and welcome to Green Valley Nature Reserve. My name is Arman, and I will be your guide today.
Guide: First, a few practical points. The reserve opens at eight o'clock, but today we start the tour at nine, because the morning mist makes the birds more active. Tickets cost eight pounds for adults. Children under twelve are free.
Guide: The walk is five kilometres long, not seven, as the old brochure says, because the last section is closed for repairs. It takes about two hours at a gentle pace. Please stay on the path and do not feed the animals.
Guide: Our first stop is the lake, where you can see herons and sometimes otters. Notice how the shape of each bird's beak matches the food it eats. Nothing here is accidental; every part of the landscape has a function.
Guide: The second stop is the old pine forest. The tallest tree is about thirty metres high, and it is more than a hundred and twenty years old. Please be quiet here, because we might see deer.
Guide: At the end of the walk, there will be a bird hide, where you can sit for fifteen minutes and simply observe. I recommend that you leave your phones in your bags. Watching without a screen changes how much you notice.
Guide: Finally, please do not leave any litter. Every piece of rubbish takes years to disappear. Are there any questions before we start?`,
      notesTitle: 'Nature reserve tour',
      notes: [
        { pre: 'Tour starts at', post: 'o\'clock', a: ['9', 'nine', '9:00'], e: 'Заповедник открывается в восемь, экскурсия начинается в девять.' },
        { pre: 'Adult ticket: £', post: '', a: ['8', 'eight'], e: 'Билет для взрослых — восемь фунтов.' },
        { pre: 'Length of the walk:', post: 'km', a: ['5', 'five'], e: 'Пять километров (семь — в старой брошюре).' },
        { pre: 'Height of the tallest tree:', post: 'metres', a: ['30', 'thirty'], e: 'Около тридцати метров.' },
        { pre: 'Time in the bird hide:', post: 'minutes', a: ['15', 'fifteen'], e: 'Пятнадцать минут наблюдения.' }
      ],
      mc: [
        { q: 'Why does the tour start at nine?', opts: ['the birds are more active after the mist', 'the reserve opens late', 'the guide is not available earlier'], a: 'A', e: 'Утренний туман делает птиц активнее.' },
        { q: 'What does the guide say about the birds\' beaks?', opts: ['their shape matches their food', 'they are all the same', 'they change colour in winter'], a: 'A', e: 'Форма клюва соответствует пище.' },
        { q: 'What does the guide recommend at the bird hide?', opts: ['taking photographs', 'leaving phones in bags', 'feeding the birds'], a: 'B', e: 'Оставить телефоны в сумках.' }
      ]
    },
    writing: {
      title: 'Al-Khaliq — protecting the environment', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение ответственности государств и людей за природу.',
      task2: {
        prompt: 'Some people believe that protecting the natural environment is the responsibility of governments, while others think that individuals should take the main responsibility. Discuss both views and give your own opinion.',
        keywords: ['environment', 'governments', 'individuals', 'pollution', 'laws', 'recycling', 'responsibility', 'industry', 'education', 'climate', 'resources', 'habits'],
        model: `The question of who should bear the main responsibility for protecting the environment is frequently debated. Although governments hold the strongest tools, I believe that effective protection requires action at both levels, with governments setting the framework and individuals filling it with daily habits.

Those who emphasise government responsibility make a strong case. Environmental problems such as air pollution and climate change are collective in nature: a single person who reduces consumption cannot clean a river polluted by a factory. Only governments can pass binding laws, impose penalties on polluters, invest in public transport and renewable energy, and negotiate agreements with other countries. Without these measures, individual efforts are often overwhelmed.

On the other hand, supporters of individual responsibility point out that laws are ineffective unless people comply with them and that governments respond to what citizens demand. Everyday choices, such as saving water, avoiding waste and choosing efficient appliances, also add up. Millions of small decisions can reduce demand for harmful products and push companies to change. Moreover, people who take care of their immediate surroundings tend to support stronger policies, so personal behaviour and public pressure reinforce each other.

In my view, the two sides are complementary. Governments can make sustainable choices cheaper and easier, for instance by taxing pollution and subsidising recycling, while citizens give those policies legitimacy by practising and supporting them. Education also matters: children who learn to value nature at school bring those values into adult life.

In conclusion, governments should lead through regulation and investment, but lasting environmental protection depends on individuals who treat the natural world as a resource to be preserved rather than consumed.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты в своих абзацах; позиция («дополняют друг друга») заявлена с начала и подтверждена выводом.',
          'Аргументы: коллективный характер проблемы vs совокупность мелких решений; примеры налогов и субсидий.',
          'Cohesion: On the other hand / Moreover / In my view; ключевое понятие responsibility связывает абзацы.',
          'Lexical Resource: binding laws, comply, legitimacy, subsidising; грамматика: придаточные, пассивные, сравнения.'
        ]
      }
    },
    speaking: {
      title: 'Al-Khaliq — a place in nature', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание природного места и обсуждение отношения к окружающей среде.',
      keywords: ['nature', 'natural', 'forest', 'lake', 'mountains', 'beautiful', 'peaceful', 'environment', 'walk', 'wildlife'],
      part1: [
        { q: 'Do you enjoy spending time in nature?', a: 'Very much. Walking among trees clears my head, and I try to go out of the city at least once a month.' },
        { q: 'Are there many parks in your hometown?', a: 'Quite a few, and the city has been adding more in recent years. My favourite is a large park near the river, which is full of people on weekends.' },
        { q: 'Did you spend time outdoors as a child?', a: 'Yes, we spent every summer in the countryside with my grandparents, picking berries and swimming in the river.' },
        { q: 'Do you recycle at home?', a: 'Yes, we separate paper, plastic and glass, although it is not always easy because the containers in our area are limited.' }
      ],
      part2: {
        topic: 'Describe a natural place that you have visited and liked.', bullets: ['where it is', 'when you went there', 'what you did there', 'and explain why you liked it.'],
        plan: [{ h: '1. Where', t: 'Lake Burabay, northern Kazakhstan.' }, { h: '2. When', t: 'Last summer, three days with friends.' }, { h: '3. Activities', t: 'Hiking, boat trip, camping, stargazing.' }, { h: '4. Why', t: 'Beauty, silence, feeling of scale.' }],
        model: `The natural place I would like to describe is Burabay, a region of lakes and pine forests in the north of Kazakhstan, which I visited last summer with three friends.

We travelled by train and then took a bus, and when we arrived, the first thing that struck me was the air. It smelled of pine needles and water, and it felt completely different from the air in the city. The landscape is remarkable: granite rocks rise from the forest, and clear blue lakes lie between them like mirrors.

We stayed for three days in a small tent near the shore. During the days, we hiked to a viewpoint, rented a boat and swam in the lake, which was cold but wonderfully refreshing. In the evenings, we made a small fire and cooked simple food, and because there was almost no light pollution, we could see an enormous number of stars. I had not seen the Milky Way so clearly since I was a child.

I liked this place for several reasons. First, its beauty is on a scale that makes everyday worries seem small. Second, it was quiet: for three days I heard only wind, water and birds. And third, being there made me appreciate how carefully everything fits together. The forest, the lake and the animals form a system that works without any human involvement, and that humbles me.

I returned feeling rested and more grateful, and I have already planned another trip for next year.`
      },
      part3: [
        { q: 'Why is it important to protect natural areas?', a: 'They provide clean air and water, shelter wildlife and help to regulate the climate. Once a forest or wetland is destroyed, it is very difficult to restore, so prevention is much cheaper than repair.' },
        { q: 'Do you think people in cities are disconnected from nature?', a: 'To some extent, yes. Many children rarely see farm animals or wild plants. However, parks and school trips can restore the connection, and many people are keen to reconnect.' },
        { q: 'How can tourism harm the environment?', a: 'Large numbers of visitors can cause erosion, litter and disturbance to animals. Well-managed tourism, with limited numbers and clear rules, can however fund conservation.' }
      ]
    }
  });

  /* ===== 12 · Al-Bari' ===== */
  put(12, {
    listening: {
      title: "Al-Bari' — a woodworking class", spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных о курсе: даты, цены, время; следить за поправками.',
      context: 'Part 1. Кандидат записывается на курс столярного мастерства.', genders: { Clerk: 'f', Erlan: 'm' },
      script: `Clerk: Good afternoon, Craft Studio. How can I help you?
Erlan: Hello. I would like to join the beginners' woodworking course.
Clerk: Certainly. Could I have your name, please?
Erlan: Erlan Zhaksylykov. Z-H-A-K-S-Y-L-Y-K-O-V.
Clerk: Thank you. The next course starts on the ninth of June. Or rather the sixteenth, sorry. The ninth is a public holiday.
Erlan: The sixteenth, all right. What day of the week is that?
Clerk: A Monday. The classes are on Monday and Wednesday evenings, from six until eight.
Erlan: How long is the course?
Clerk: Six weeks, twelve sessions altogether. In the first week, you will plan and draw your project. Then you will cut the pieces, join them and finish the surface.
Erlan: What will I make?
Clerk: A small bookshelf. Most people finish it by the end of the fifth week, and the last week is for varnishing.
Erlan: And the price?
Clerk: One hundred and eighty pounds, including the wood. The tools are provided, but you will need to bring protective glasses.
Erlan: Where are you located?
Clerk: Forty-two Mill Road, next to the library.
Erlan: Thank you. I will pay online.
Clerk: Perfect. You will receive a confirmation by email.`,
      notesTitle: 'Woodworking course',
      notes: [
        { pre: 'Surname:', post: '', a: ['Zhaksylykov'], e: 'Фамилия — Zhaksylykov.' },
        { pre: 'Course starts on:', post: 'June', a: ['16', '16th', 'sixteenth', 'the 16th', 'the sixteenth'], e: '9 июня — праздничный день, поэтому курс стартует 16-го.' },
        { pre: 'Classes on Monday and', post: 'evenings', a: ['Wednesday'], e: 'Занятия по понедельникам и средам.' },
        { pre: 'Cost: £', post: '', a: ['180', 'one hundred and eighty', 'one hundred eighty'], e: 'Сто восемьдесят фунтов, включая дерево.' },
        { pre: 'Bring protective', post: '', a: ['glasses'], e: 'Принести защитные очки.' }
      ],
      mc: [
        { q: 'What will participants make?', opts: ['a small bookshelf', 'a garden chair', 'a wooden toy'], a: 'A', e: 'Небольшая книжная полка.' },
        { q: 'What happens in the first week?', opts: ['planning and drawing the project', 'cutting the wood', 'varnishing the surface'], a: 'A', e: 'Сначала планирование и чертёж.' },
        { q: 'Where is the studio?', opts: ['next to the library', 'opposite the station', 'above a cafe'], a: 'A', e: 'Рядом с библиотекой.' }
      ]
    },
    writing: {
      title: "Al-Bari' — planning versus improvising", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение подходов к работе: планирование и гибкое начало.',
      task2: {
        prompt: 'Some people believe that it is best to plan every detail of a project in advance. Others think it is better to start working and adapt as the project develops. Discuss both views and give your own opinion.',
        keywords: ['plan', 'project', 'detail', 'adapt', 'flexible', 'start', 'risk', 'deadline', 'team', 'progress', 'changes', 'results'],
        model: `People disagree about whether a project should be fully planned before it begins or developed as work proceeds. Both approaches have strengths, but I believe that the most reliable method combines a clear outline with the freedom to adapt.

Advocates of detailed planning argue that it saves time and reduces risk. When tasks, resources and deadlines are agreed in advance, teams avoid duplicated effort and unpleasant surprises. Construction offers a clear illustration: it would be unthinkable to start building a bridge without detailed drawings, because mistakes discovered late are extremely expensive to repair. Planning also forces people to think about difficulties before they appear.

By contrast, supporters of the flexible approach emphasise that no plan can predict everything. Requirements change, new information emerges, and early prototypes often reveal problems that discussion alone would not. In software and design, for example, teams that release a simple version quickly and improve it with feedback often outperform those who spend months on specifications that become outdated. Starting also generates momentum: people who postpone work while seeking a perfect plan sometimes never begin.

In my opinion, the choice depends on the cost of error. Where mistakes are irreversible or dangerous, careful planning is essential. Where changes are cheap, a brief plan is enough, followed by regular review. In both cases, the plan should be treated as a map rather than a contract: it gives direction, but it can be redrawn when the terrain turns out to be different.

In conclusion, planning and flexibility are not rivals but partners, and the most successful projects begin with a sensible outline, begin promptly, and adjust intelligently.`,
        analysis: [
          'Task Response: обе позиции раскрыты, собственная позиция условна («depends on the cost of error») и логично обоснована.',
          'Аргументация: примеры из строительства и разработки ПО; общий вывод через образ «карта, а не контракт».',
          'Cohesion: By contrast / In both cases; переход «cost of error» объединяет аргументы.',
          'Lexical Resource: duplicated effort, prototypes, momentum, irreversible; грамматика: условные, пассив, параллелизм.'
        ]
      }
    },
    speaking: {
      title: "Al-Bari' — a project I completed", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о проекте от замысла до результата и обсуждение планирования.',
      keywords: ['project', 'plan', 'start', 'finish', 'complete', 'steps', 'result', 'team', 'deadline', 'proud'],
      part1: [
        { q: 'Do you make plans for your week?', a: 'Yes, on Sunday evening I write down the main tasks for each day. It helps me avoid forgetting things, though I leave some space for surprises.' },
        { q: 'Do you like to make things with your hands?', a: 'I do. I enjoy simple things like repairing a shelf or cooking a new dish. There is a particular satisfaction in seeing something you made.' },
        { q: 'Are you usually on time?', a: 'Generally yes. I tend to leave early, because it is less stressful than rushing.' },
        { q: 'Do you finish what you start?', a: 'Most of the time. If I begin a project, I try to complete at least a basic version, and then improve it later.' }
      ],
      part2: {
        topic: 'Describe a project that you planned and completed successfully.', bullets: ['what the project was', 'how you planned it', 'what difficulties you had', 'and explain how you felt when it was finished.'],
        plan: [{ h: '1. Project', t: 'School geography exhibition.' }, { h: '2. Planning', t: 'Timeline, tasks, volunteers, budget.' }, { h: '3. Difficulties', t: 'Lost materials, a delay, changes.' }, { h: '4. Feelings', t: 'Proud, relieved; visitors enjoyed it.' }],
        model: `The project I would like to describe is a geography exhibition that I organised at my school two years ago, together with a group of students.

The idea was to create a series of displays showing the natural regions of Kazakhstan, with maps, photographs and short explanations. At the beginning it seemed enormous, so I divided it into stages. First, we agreed on a timeline of six weeks. Then, I made a list of tasks, such as collecting materials, designing posters and preparing the hall, and I assigned each task to a small group with a clear deadline. I also set a modest budget for printing and decoration.

Of course, not everything went as planned. A week before the opening, one group lost a folder with all their photographs, and another discovered that the hall would be unavailable on the original day. We had to move the exhibition by two days and quickly recreate the missing material. Fortunately, the detailed plan gave us a clear picture of what was left to do, and we could redistribute the work.

When the doors opened, around two hundred people attended, including parents and teachers from other schools. Visitors spent time at each display, and the students explained their sections with confidence.

I felt both relieved and proud. The experience taught me that planning does not remove problems, but it makes them manageable, because you can see exactly where you stand. I have used the same method for every large task since then.`
      },
      part3: [
        { q: 'Why do some people find it hard to complete projects?', a: 'Often because the task feels too large and they do not know where to start. Distractions and perfectionism also play a role. Breaking the work into small steps is usually the best remedy.' },
        { q: 'Is teamwork better than working alone?', a: 'For large projects, yes, because people bring different skills and can check each other\'s work. For tasks that require deep concentration, working alone may be more efficient. The best arrangement often combines both.' },
        { q: 'How important is it to set deadlines?', a: 'Very important, as without them tasks tend to expand indefinitely. However, deadlines should be realistic; unrealistic ones create stress and lower the quality of the result.' }
      ]
    }
  });

  /* ===== 13 · Al-Musawwir ===== */
  put(13, {
    listening: {
      title: 'Al-Musawwir — a portrait project', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Различать детали задания в обсуждении студентов и преподавателя.',
      context: 'Part 3. Студенты и преподаватель обсуждают проект «Портреты».', genders: { Tutor: 'f', Aigul: 'f', Marat: 'm' },
      script: `Tutor: Let us discuss your portrait project. Aigul, what have you decided to do?
Aigul: I want to photograph people from different generations in my family, and then compare how their faces reflect their lives.
Tutor: Interesting. Marat?
Marat: I prefer drawing. I want to make charcoal portraits of ten people in my neighbourhood, each with a short note about their story.
Tutor: Ten is a lot. In my experience, eight is realistic, given the time.
Marat: Eight, then.
Tutor: The size of each portrait should be A3. Not A2, which is too large for the exhibition wall. The deadline is the twelfth of December.
Aigul: The twelfth? I thought it was the fifteenth.
Tutor: It was, but the exhibition has been moved earlier. And remember to include a brief reflection of about two hundred words.
Marat: What should we write in the reflection?
Tutor: Think about the diversity of faces. No two people look exactly the same, even in the same family. What does this tell us about individuality?
Aigul: I would also like to talk about respect. When we draw or photograph someone, we should treat them with dignity.
Tutor: Precisely. Finally, please submit a digital copy as well as the originals. The email address is on the course page.
Marat: Understood.`,
      notesTitle: 'Portrait project',
      notes: [
        { pre: 'Number of portraits Marat will make:', post: '', a: ['8', 'eight'], e: 'Десять — слишком много, договорились на восемь.' },
        { pre: 'Size of each portrait:', post: '', a: ['A3'], e: 'А3, а не А2.' },
        { pre: 'Deadline: December', post: '', a: ['12', '12th', 'twelfth', 'the 12th'], e: 'Срок перенесён с 15-го на 12-е.' },
        { pre: 'Length of reflection:', post: 'words', a: ['200', 'two hundred'], e: 'Около двухсот слов.' },
        { pre: 'Medium Marat prefers:', post: '', a: ['charcoal', 'drawing'], e: 'Марат рисует углём.' }
      ],
      mc: [
        { q: 'What will Aigul photograph?', opts: ['people from different generations of her family', 'famous artists', 'buildings in her city'], a: 'A', e: 'Представителей разных поколений своей семьи.' },
        { q: 'What does the tutor ask them to think about in the reflection?', opts: ['the diversity of faces and individuality', 'the history of photography', 'the cost of materials'], a: 'A', e: 'Разнообразие лиц и индивидуальность.' },
        { q: 'What does Aigul want to add about?', opts: ['respect and dignity', 'competition', 'advertising'], a: 'A', e: 'Об уважении и достоинстве людей, которых рисуют или снимают.' }
      ]
    },
    writing: {
      title: 'Al-Musawwir — diversity and society', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о пользе разнообразия в обществе.',
      task2: {
        prompt: 'Some people believe that differences in appearance, culture and background make a society richer. To what extent do you agree or disagree?',
        keywords: ['diversity', 'differences', 'culture', 'society', 'richer', 'tolerance', 'innovation', 'communities', 'background', 'prejudice', 'perspectives', 'integration'],
        model: `I strongly agree that differences in appearance, culture and background enrich a society, although this benefit is realised only when people are treated with respect.

The first advantage of diversity is intellectual. People raised in different traditions approach problems in different ways, and groups with varied perspectives tend to notice more possibilities and detect more errors. Research on teams in science and business has often found that mixed groups produce more creative solutions than uniform ones. A city whose residents come from many backgrounds also benefits culturally, with a wider range of food, music, literature and festivals, which makes everyday life more interesting.

Second, diversity has social and economic benefits. Contact with people who are different from us reduces stereotypes: someone who has worked beside colleagues from another culture is less likely to accept prejudice about them. Economically, migrants and minorities often start businesses and fill skills shortages, and societies with open attitudes attract talent from around the world.

However, these benefits are not automatic. Where groups are isolated, or where minorities face discrimination, diversity may cause tension rather than creativity. Governments and communities therefore need to support integration through language teaching, equal opportunities and shared public spaces where people from different groups can interact. Respect for individual dignity must also be at the heart of this process. Schools, workplaces and local media all have a part to play in presenting differences as a normal and valuable feature of community life.

In conclusion, diversity makes societies richer in ideas, culture and prosperity, provided that it is accompanied by mutual respect and fair treatment for all.`,
        analysis: [
          'Task Response: сильная позиция («strongly agree») с условием в конце; все доводы связаны с тезисом.',
          'Тулмин: claim → grounds (исследования команд, экономика) → warrant (контакт снижает стереотипы) → rebuttal (изоляция и дискриминация) → qualifier (при условии уважения).',
          'Cohesion: First/Second заменены описательными вводными («The first advantage…»), далее However и therefore.',
          'Lexical Resource: stereotypes, integration, discrimination, prosperity; хеджирование (often, may, tend to).'
        ]
      }
    },
    speaking: {
      title: 'Al-Musawwir — a photograph or portrait', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание фотографии или портрета и обсуждение внешности и различий.',
      keywords: ['photograph', 'picture', 'portrait', 'face', 'looks', 'appearance', 'colours', 'memory', 'different', 'beautiful'],
      part1: [
        { q: 'Do you like taking photographs?', a: 'Yes, mostly on my phone. I enjoy capturing small moments, like the light on a street in the evening, more than posed pictures.' },
        { q: 'Do you keep family photos?', a: 'Yes, we have several albums, and I have also scanned old pictures. Seeing my grandparents as young people always fascinates me.' },
        { q: 'Do you think appearance is important?', a: 'It matters in first impressions, but character matters far more in the long term. I would not judge anyone by looks alone.' },
        { q: 'Do you prefer paintings or photographs?', a: 'Both have their charm. Paintings show how an artist interprets the world, whereas photographs capture a precise moment.' }
      ],
      part2: {
        topic: 'Describe a photograph or a portrait that you like.', bullets: ['what the picture shows', 'where you saw it', 'who made it', 'and explain why you like it.'],
        plan: [{ h: '1. Picture', t: 'Old black-and-white photo of my grandmother.' }, { h: '2. Where', t: 'Family album; framed in my room.' }, { h: '3. Who', t: 'A village photographer, 1970s.' }, { h: '4. Why', t: 'Her expression, memory, family connection.' }],
        model: `The picture I would like to describe is an old black-and-white photograph of my grandmother, which stands in a frame on my desk.

It was taken in the 1970s, when she was about twenty-five. She is sitting on a wooden bench in front of the house in the village where she grew up, wearing a simple dark dress and a light headscarf. Her hands are folded on her knees, and she is looking slightly to the side of the camera, as if somebody had just called her name. The edges of the photo are a little worn, and there is a small crease in the corner.

I first saw it in the family album when I was about ten years old. A photographer from the neighbouring town used to come to the village a few times a year, and my grandmother told me that everyone put on their best clothes for the occasion. I was quite surprised to see how serious she looked, because the woman I knew was always smiling.

I like this photograph for several reasons. Firstly, her face is remarkable: it shows strength and a quiet kindness at the same time. Secondly, it connects me with a past that I did not experience myself, and it reminds me that every person I love had a youth and dreams of her own. And thirdly, I notice that I have inherited her eyes, which I find touching.

For me, it is far more than an old picture; it is a bridge between generations.`
      },
      part3: [
        { q: 'Why do people like looking at old photographs?', a: 'Because they bring back memories and show how things have changed. They also provide a sense of continuity, particularly when people see relatives who lived long ago.' },
        { q: 'Do you think social media has changed how people present their appearance?', a: 'Definitely. Many people carefully edit their pictures, which can create unrealistic standards. Younger users are especially affected, so media education is important.' },
        { q: 'Should schools teach students to respect differences in appearance?', a: 'Yes, because prejudice often begins early. Discussions, group projects and examples from different cultures help children see differences as normal and interesting.' }
      ]
    }
  });

  /* ===== 14 · Al-Ghaffar ===== */
  put(14, {
    listening: {
      title: 'Al-Ghaffar — the psychology of forgiveness', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за структурой лекции о прощении и выделять шаги.',
      context: 'Part 4. Лекция психолога о прощении и извинении.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good afternoon. Today we look at forgiveness from a psychological point of view. The Arabic root gh-f-r, found in the name Al-Ghaffar, means to cover or protect. A related word, mighfar, is a helmet. In this sense, forgiveness is a covering which protects a person from the consequences of a mistake.
Lecturer: Let us begin by clarifying what forgiveness is not. It is not forgetting, it is not excusing harmful behaviour, and it does not mean that you must continue a relationship. It is a decision to let go of resentment.
Lecturer: Researchers have reported that people who hold grudges often show higher levels of stress, and that those who practise forgiveness tend to report lower anxiety. I should add that studies differ in size and quality, so the results should be treated with caution.
Lecturer: What about apologies? An effective apology has three parts. First, name the specific mistake. Second, take responsibility, without adding the word but. And third, explain how you will correct it. For example, instead of saying "Sorry if I upset you", say "I was late, which wasted your time, and from now on I will leave earlier".
Lecturer: Timing matters as well. The best moment for an apology is usually within a day, while the event is fresh. But if emotions are very strong, a few hours of calm can help.
Lecturer: To practise, I suggest a nightly review. Take two minutes before sleeping. Ask yourself whom you need to forgive, and whom you need to apologise to. Write one sentence.
Lecturer: Your homework is a short reflection of one page, due on Friday.`,
      notesTitle: 'Forgiveness and apology',
      notes: [
        { pre: 'The word mighfar means a', post: '', a: ['helmet'], e: 'Mighfar — шлем.' },
        { pre: 'Forgiveness is a decision to let go of', post: '', a: ['resentment'], e: 'Прощение — решение отпустить обиду.' },
        { pre: 'Number of things that forgiveness is NOT, listed by the lecturer:', post: '', a: ['3', 'three'], e: 'Не забвение, не оправдание вреда и не обязанность продолжать отношения — три пункта.' },
        { pre: 'An effective apology has', post: 'parts.', a: ['3', 'three'], e: 'Три части.' },
        { pre: 'Homework due on', post: '', a: ['Friday'], e: 'Домашнее задание — к пятнице.' }
      ],
      mc: [
        { q: 'What is forgiveness NOT, according to the lecturer?', opts: ['forgetting what happened', 'letting go of resentment', 'a personal decision'], a: 'A', e: 'Прощение — не забвение и не оправдание вреда.' },
        { q: 'What should an apology avoid?', opts: ['the word but', 'a specific description', 'a plan to correct'], a: 'A', e: 'Не добавлять «но».' },
        { q: 'What is the nightly review?', opts: ['two minutes asking whom to forgive or apologise to', 'a long diary entry', 'a call to a friend'], a: 'A', e: 'Две минуты перед сном и одно предложение письменно.' }
      ]
    },
    writing: {
      title: 'Al-Ghaffar — forgiveness or punishment', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение подходов к ошибкам и проступкам: прощение и наказание.',
      task2: {
        prompt: 'Some people think that those who have harmed others should be given the chance to apologise and be forgiven. Others believe that punishment is more important. Discuss both views and give your own opinion.',
        keywords: ['forgiveness', 'punishment', 'apology', 'harm', 'justice', 'responsibility', 'rehabilitation', 'victims', 'deterrence', 'society', 'consequences', 'second chance'],
        model: `Opinions differ on whether those who have harmed others should be forgiven after apologising or punished. In my view, both responses have a role, and the right balance depends on the seriousness of the harm.

Supporters of forgiveness emphasise that it can repair relationships and reduce the cycle of revenge. A sincere apology acknowledges the pain of the victim, and many victims report that hearing it brings more peace than the punishment of the offender. In schools and workplaces, giving people a chance to correct small mistakes also encourages honesty, since individuals who fear severe penalties tend to hide errors. Societies that offer second chances, for example through rehabilitation programmes for former offenders, usually see lower rates of repeat offences.

On the other hand, those who prefer punishment point out that justice requires consequences. Without penalties, victims may feel ignored, and potential offenders may calculate that wrongdoing is cheap. Serious crimes in particular cannot be resolved with an apology alone, because the harm to people and society is too great and the need for deterrence is real.

In my opinion, forgiveness and accountability are not contradictory. A person can be held responsible for what he or she has done and still be treated with humanity. Minor wrongs are best met with apology and repair, while serious harm requires proportionate punishment, ideally combined with opportunities to change. The key is that forgiveness is never imposed on victims, who should decide whether and when to forgive.

In conclusion, punishment is essential for serious harm, but a culture that values apology and rehabilitation is more constructive than one based on retribution alone.`,
        analysis: [
          'Task Response: обе стороны объяснены, собственная позиция («зависит от серьёзности вреда») ясна и согласована с выводом.',
          'Аргументы: роль извинения для жертвы, сдерживание, пропорциональность; ограничение — прощение нельзя навязывать жертве.',
          'Cohesion: On the other hand / In my opinion; повтор ключевых слов forgiveness / punishment.',
          'Lexical Resource: deterrence, rehabilitation, proportionate, retribution; грамматика: смешанные условные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Ghaffar — forgiving someone', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о прощении и обсуждение извинений и обид.',
      keywords: ['forgive', 'apology', 'sorry', 'upset', 'mistake', 'friend', 'resentment', 'relationship', 'let go'],
      part1: [
        { q: 'Do you get angry easily?', a: 'Not really. I may feel annoyed for a moment, but I usually calm down quickly, and I try not to say anything that I will regret.' },
        { q: 'How do you apologise when you make a mistake?', a: 'Directly and specifically. I tell the person what I did wrong and what I will do differently, rather than just saying sorry.' },
        { q: 'Do you hold grudges?', a: 'I try not to. Carrying anger is exhausting, and I have noticed that it harms me more than the other person.' },
        { q: 'Who taught you to say sorry?', a: 'My mother. She used to say that a quick apology saves a long argument, and she was absolutely right.' }
      ],
      part2: {
        topic: 'Describe a time when you forgave someone.', bullets: ['who the person was', 'what they did', 'why you decided to forgive them', 'and explain how you felt afterwards.'],
        plan: [{ h: '1. Who', t: 'A close friend, Dina.' }, { h: '2. What', t: 'Shared a secret I told her in confidence.' }, { h: '3. Why forgave', t: 'She apologised sincerely; years of friendship.' }, { h: '4. Feelings', t: 'Hurt first, then relief and lighter.' }],
        model: `I would like to describe a time when I forgave a close friend, Dina, who had broken my trust.

We have been friends since university. A few years ago I told her about a difficult situation in my family, and I asked her to keep it private. A few weeks later, I discovered that she had mentioned it to another friend, who had then mentioned it to others. I was hurt and angry, because it was exactly the kind of thing I had asked her not to share.

For several days I did not answer her messages. I replayed the situation in my head, and my first reaction was to end the friendship. But then Dina came to see me. She did not make excuses; she told me what she had done, said that she understood why I was upset and promised to be more careful. I could see that she was ashamed, and that her apology was sincere.

I decided to forgive her for several reasons. We had years of good memories, and this mistake, though painful, was not typical of her. I also realised that continuing to be angry was making me feel worse. So I told her that I accepted her apology, but that I needed time to trust her again.

Afterwards I felt lighter, as if I had put down a heavy bag. Our friendship is in some ways stronger today, because we both know that it can survive a serious test. The experience showed me that forgiveness is a decision rather than a feeling.`
      },
      part3: [
        { q: 'Why do some people find it very difficult to forgive?', a: 'Often they feel that forgiving would mean that the wrong did not matter. Pride and fear of being hurt again also play a part. Understanding that forgiveness does not require forgetting can make it easier.' },
        { q: 'Is it important for leaders to apologise publicly?', a: 'I think so. A public apology shows responsibility, and it helps to rebuild trust. However, it has to be sincere and followed by actions; otherwise it sounds empty.' },
        { q: 'Does forgiveness play a role in building a peaceful society?', a: 'A very important one. Without forgiveness, communities can remain trapped in cycles of revenge. Nevertheless, justice must also be done, so forgiveness and accountability should work together.' }
      ]
    }
  });

  /* ===== 15 · Al-Qahhar ===== */
  put(15, {
    listening: {
      title: 'Al-Qahhar — the power of nature', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за числами и поправками в рассказе гида музея.',
      context: 'Part 2. Гид музея знакомит посетителей с экспозицией о силах природы.', genders: { Guide: 'f' },
      script: `Guide: Welcome to the Museum of Natural Forces. I am Dinara, and I will show you the main exhibits.
Guide: The museum opens at ten and closes at five. On Fridays, it stays open until seven, but that is only in the summer. Entry is free for students.
Guide: We begin on the ground floor, in the Earthquake Hall. You will see a model showing how plates in the Earth's crust move. The largest earthquake ever recorded had a magnitude of nine point five, and it happened in Chile in nineteen sixty. Our simulator lets you feel a quake of magnitude five, which is much weaker.
Guide: Then we go upstairs to the Volcano Room. The model there is two metres tall, and every half hour it produces a small eruption with light and sound. Please do not touch the glass.
Guide: The third area is the Storm Chamber, on the second floor. Here a screen shows the formation of a tornado. The wind speed can reach more than three hundred kilometres an hour in the strongest tornadoes. Photography is permitted, but please do not use flash.
Guide: In all these areas, you will notice a common message. Natural forces are far greater than human strength, and the right response is respect and preparation, not fear. We also have a short film about how communities protect themselves, which lasts twelve minutes.
Guide: The cafe is on the first floor. The tour ends there, and I will be happy to answer your questions.`,
      notesTitle: 'Museum of Natural Forces',
      notes: [
        { pre: 'Opening time:', post: 'o\'clock', a: ['10', 'ten', '10:00'], e: 'Музей открывается в десять.' },
        { pre: 'Magnitude of the largest recorded earthquake:', post: '', a: ['9.5', 'nine point five'], e: 'Магнитуда 9,5 (Чили, 1960).' },
        { pre: 'Height of the volcano model:', post: 'metres', a: ['2', 'two'], e: 'Макет вулкана — два метра.' },
        { pre: 'The storm chamber is on the', post: 'floor', a: ['second', '2nd'], e: 'Штормовая камера на втором этаже.' },
        { pre: 'Length of the film:', post: 'minutes', a: ['12', 'twelve'], e: 'Фильм идёт двенадцать минут.' }
      ],
      mc: [
        { q: 'How often does the volcano model produce an eruption?', opts: ['every half hour', 'every hour', 'once a day'], a: 'A', e: 'Каждые полчаса.' },
        { q: 'What is not allowed in the Storm Chamber?', opts: ['flash photography', 'any photography', 'talking'], a: 'A', e: 'Фотографировать можно, но без вспышки.' },
        { q: 'What is the common message of the exhibits?', opts: ['respect and preparation', 'fear and avoidance', 'competition with nature'], a: 'A', e: 'Силы природы больше человека; нужно уважение и подготовка.' }
      ]
    },
    writing: {
      title: 'Al-Qahhar — natural disasters', spec: 'Writing · Task 2 Problems & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Проблемы и решения: подготовка стран к стихийным бедствиям.',
      task2: {
        prompt: 'Natural disasters such as earthquakes, floods and storms cause serious damage in many countries. What problems do these disasters create, and how can countries prepare for them?',
        keywords: ['disasters', 'earthquakes', 'floods', 'storms', 'damage', 'preparation', 'warning', 'buildings', 'emergency', 'aid', 'education', 'infrastructure'],
        model: `Natural disasters create severe human and economic problems, but their effects can be significantly reduced by careful preparation.

The most obvious problem is loss of life and injury. Earthquakes, floods and storms often strike with little warning, and populations in poor or crowded areas are especially vulnerable. Beyond the immediate casualties, disasters destroy homes, roads and hospitals, leaving survivors without shelter, clean water or medical help. The economic cost can be enormous: businesses close, crops are lost, and governments divert money from development to reconstruction. In addition, the psychological impact on survivors, including trauma and grief, may last for years.

Countries can prepare in several ways. Firstly, building regulations should require structures to withstand local hazards, for instance earthquake-resistant designs and flood barriers. Such measures are costly, but experience shows that they save far more than they cost. Secondly, early-warning systems, based on monitoring and rapid communication, give people time to evacuate. Even a few minutes can save thousands of lives in a tsunami. Thirdly, education is vital. Citizens who know what to do, such as where to shelter during an earthquake, panic less and help one another more effectively. Regular drills in schools and workplaces turn knowledge into habit.

International cooperation matters too. Wealthier countries can provide funding and technology, while organisations coordinate emergency aid. Finally, communities should maintain emergency supplies and plans for vulnerable members, such as the elderly.

In conclusion, disasters cause loss of life, economic damage and lasting trauma, yet strong building standards, early warnings and public education can greatly limit their consequences.`,
        analysis: [
          'Task Response: сначала проблемы (жизни, экономика, психология), затем меры (стандарты, оповещение, обучение, сотрудничество); структура зеркальна вопросу.',
          'Аргументация: каждая мера сопровождена механизмом («даёт время эвакуироваться», «знание превращается в привычку»).',
          'Cohesion: Firstly/Secondly/Thirdly дополнены пояснениями; переход «International cooperation matters too».',
          'Lexical Resource: vulnerable, casualties, reconstruction, early-warning; грамматика: пассив, придаточные уступки и следствия.'
        ]
      }
    },
    speaking: {
      title: 'Al-Qahhar — a powerful natural event', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о сильном природном явлении и обсуждение рисков и подготовки.',
      keywords: ['storm', 'weather', 'thunder', 'wind', 'rain', 'powerful', 'frightening', 'safe', 'prepare', 'nature'],
      part1: [
        { q: 'What is the weather like in your hometown?', a: 'It is a continental climate: very cold winters, hot summers, and strong winds in spring and autumn. You really experience all four seasons.' },
        { q: 'Do you enjoy rainy weather?', a: 'In moderation. I like the sound of rain when I am at home with a book, but not when I have to walk to work.' },
        { q: 'Are you afraid of thunderstorms?', a: 'A little when I was a child. Now I find them impressive, as long as I am inside and safe.' },
        { q: 'Do you check the weather forecast?', a: 'Every morning, usually on my phone. It affects what I wear and sometimes my plans for the day.' }
      ],
      part2: {
        topic: 'Describe a powerful natural event (storm, snowfall, flood) that you have experienced.', bullets: ['what happened', 'where you were', 'how it affected people', 'and explain how you felt about it.'],
        plan: [{ h: '1. Event', t: 'A snowstorm (buran) in the steppe.' }, { h: '2. Where', t: 'On the road returning from a village.' }, { h: '3. Effects', t: 'Road closed, stayed with strangers.' }, { h: '4. Feelings', t: 'Fear, respect, gratitude.' }],
        model: `The event I would like to describe is a heavy snowstorm that caught my family on the road in the steppe, a few winters ago.

We had been visiting relatives in a village and were driving home in the late afternoon. The weather forecast had mentioned snow, but nothing serious. About halfway home, the sky suddenly turned grey and then almost white. The wind rose within minutes, and the snow was blowing sideways so hard that I could hardly see the car in front of us. In the steppe there are no trees or buildings to shelter behind, so it felt as if we were in the middle of an enormous white wall.

My father decided to stop at the first village we could find. It took us nearly an hour to drive five kilometres. When we arrived, a family we had never met opened their door, gave us hot tea and soup, and let us sleep in their living room. The road was closed for two days, and we stayed until the storm passed.

The storm affected many people. Several roads were blocked, power lines were damaged, and some villages were without electricity for a night. Fortunately, everyone in the region helped each other.

I felt a mixture of fear and respect. I realised how small a car and a family look against such a force. At the same time, I was deeply grateful for the kindness of strangers. Since then, I always check the forecast carefully and keep blankets and food in the car in winter.`
      },
      part3: [
        { q: 'Are natural disasters becoming more frequent?', a: 'Many scientists say that extreme weather events are increasing because of climate change. At the same time, more people live in vulnerable areas, so the impact on people is greater.' },
        { q: 'What should individuals do to prepare for emergencies?', a: 'Keep basic supplies such as water, a torch and a first-aid kit, know the nearest shelter and have a family plan for communication. These simple steps can make a significant difference.' },
        { q: 'Should governments spend more on disaster prevention?', a: 'Yes, because prevention is much cheaper than recovery. Money invested in flood barriers or earthquake-resistant buildings protects both lives and the economy.' }
      ]
    }
  });

  /* ===== 16 · Al-Wahhab ===== */
  put(16, {
    listening: {
      title: 'Al-Wahhab — a charity enquiry', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных в диалоге с поправками: суммы, даты и адреса.',
      context: 'Part 1. Человек звонит в благотворительный фонд, чтобы сделать пожертвование.', genders: { Operator: 'f', Sanzhar: 'm' },
      script: `Operator: Hope Foundation, good morning. How can I help?
Sanzhar: Good morning. I would like to donate some books and a little money for children in rural schools.
Operator: Thank you, that is very kind. May I have your name?
Sanzhar: Sanzhar Bekov. B-E-K-O-V.
Operator: And your phone number?
Sanzhar: It is zero-seven-seven, four-four-six, two-one-eight. Sorry, two-eight-one.
Operator: Thank you. For books, we accept new or lightly used children's books in Kazakh or Russian. You may bring them to our office at fifty-five Park Avenue.
Sanzhar: Are you open on Saturday?
Operator: Yes, from nine until one. On weekdays, we close at five.
Sanzhar: Good. And for the money, how can I transfer it?
Operator: Online, through our website, or by bank transfer. The minimum for the school programme is ten pounds. There is no maximum, of course.
Sanzhar: I would like to give fifty pounds, not twenty, as I first thought.
Operator: Wonderful. You will receive a receipt by email. Would you like your name to be listed among our donors?
Sanzhar: No, I prefer to remain anonymous.
Operator: Understood. Thank you very much on behalf of the children.
Sanzhar: Thank you for the work you do.`,
      notesTitle: 'Donation enquiry',
      notes: [
        { pre: 'Surname:', post: '', a: ['Bekov'], e: 'Фамилия — Bekov.' },
        { pre: 'Telephone: 077 446', post: '', a: ['281', 'two eight one'], e: 'Сначала 218, затем поправка — 281.' },
        { pre: 'Address: 55', post: 'Avenue', a: ['Park'], e: 'Park Avenue, 55.' },
        { pre: 'Saturday opening: 9 until', post: '', a: ['1', 'one', '13:00', '1 pm', '1pm'], e: 'В субботу с девяти до часа.' },
        { pre: 'Amount of donation: £', post: '', a: ['50', 'fifty'], e: 'Пятьдесят фунтов, а не двадцать.' }
      ],
      mc: [
        { q: 'What kind of books does the foundation accept?', opts: ['new or lightly used children\'s books', 'only new textbooks', 'any books in English'], a: 'A', e: 'Новые или мало использованные детские книги на казахском или русском.' },
        { q: 'How will Sanzhar receive proof of the donation?', opts: ['a receipt by email', 'a letter by post', 'a phone call'], a: 'A', e: 'Квитанция по электронной почте.' },
        { q: 'What does Sanzhar decide about his name?', opts: ['to remain anonymous', 'to be listed as a donor', 'to be mentioned in a newsletter'], a: 'A', e: 'Он предпочитает остаться анонимным.' }
      ]
    },
    writing: {
      title: 'Al-Wahhab — gift-giving in modern life', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о смысле подарков и коммерциализации традиций.',
      task2: {
        prompt: 'Some people say that giving gifts has become too commercial and has lost its true meaning. To what extent do you agree or disagree?',
        keywords: ['gifts', 'giving', 'commercial', 'meaning', 'generosity', 'holidays', 'advertising', 'relationships', 'handmade', 'expectations', 'pressure', 'thoughtful'],
        model: `It is often argued that giving gifts has become too commercial and has lost its original meaning. I partly agree: marketing has certainly distorted the practice, but the underlying value of giving remains strong and can be recovered.

The commercial criticism has a solid basis. Advertising campaigns before holidays encourage people to believe that the value of a gift is measured by its price, and social pressure sometimes turns giving into an obligation. People may spend money they cannot afford, or buy impersonal items simply to fulfil expectations. In such cases, the gift becomes a transaction, and the giver and receiver may both feel stress rather than joy.

Nevertheless, it would be wrong to conclude that the meaning has disappeared. Most gifts are still chosen for specific individuals, and what people remember is rarely the price but the thought behind the gift: a book that matches someone\'s interests, a handwritten letter, or an afternoon spent helping with a task. Moreover, the habit of giving remains one of the most effective ways to express gratitude and affection, particularly in cultures where hospitality is highly valued.

The meaning can be protected by conscious choices. Families can agree on limits, replace some presents with shared experiences, or encourage handmade items. People can also give without any occasion, which separates the gesture from commercial calendars. Offering time, attention or skills often carries more value than an expensive object.

In conclusion, commercial pressure has weakened the tradition of giving in some respects, but its core meaning, which is generosity without expectation, can be preserved through thoughtful and personal choices.`,
        analysis: [
          'Task Response: «to what extent» — частичное согласие с обоснованием обеих частей.',
          'Аргументация: критика (давление, цена) → ответ (смысл в продуманности) → практические выводы (ограничения, время вместо вещей).',
          'Cohesion: Nevertheless / Moreover; ключевые слова giving и meaning повторяются осознанно.',
          'Lexical Resource: distorted, transaction, impersonal, thoughtful; грамматика: относительные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Wahhab — a memorable gift', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о подарке и обсуждение щедрости и традиций дарения.',
      keywords: ['gift', 'present', 'give', 'receive', 'birthday', 'surprise', 'thoughtful', 'generous', 'special', 'wrap'],
      part1: [
        { q: 'Do you like giving presents?', a: 'Yes, more than receiving them. I enjoy finding something that fits the person, and seeing their reaction is the best part.' },
        { q: 'What was the last gift you received?', a: 'A book from a colleague, about the history of maps. It was a thoughtful choice because she knows I am a geography teacher.' },
        { q: 'Do you prefer to buy gifts or make them?', a: 'I like to make small things when I have time, such as a card or a photo album, but sometimes buying is more practical.' },
        { q: 'Are gifts important in your culture?', a: 'Very. When visiting someone, it is customary to bring something, such as sweets or fruit. It shows respect and warmth.' }
      ],
      part2: {
        topic: 'Describe a gift that you gave to someone.', bullets: ['what the gift was', 'who you gave it to', 'why you chose it', 'and explain how the person reacted.'],
        plan: [{ h: '1. Gift', t: 'A hand-made photo book.' }, { h: '2. To whom', t: 'My father for his 60th birthday.' }, { h: '3. Why', t: 'He has everything; wanted something personal.' }, { h: '4. Reaction', t: 'Emotional, kept it on the table.' }],
        model: `The gift I would like to describe is a hand-made photo book that I gave to my father for his sixtieth birthday.

My father is not a person who needs many things. When I asked him what he would like, he always answered that he had everything, so I knew that buying something expensive would not be meaningful. I wanted to give him something personal instead.

I spent about two months on the project. I asked my mother and my aunts for old photographs, and I scanned about eighty pictures: from his childhood in the village, his years at university, his wedding, and our family holidays. Then I arranged them in chronological order, wrote a short caption for each page in my own words and added a few memories that relatives had shared. On the last page, I left a space and wrote a sentence about what I have learned from him.

I chose it because I believed that memories are worth more than objects, and because I wanted him to see his life from the point of view of the people who love him. I also enjoyed making it, which was a bonus.

When I gave it to him at the family dinner, he was silent for a while. He turned the pages slowly, laughed at some pictures and had tears in his eyes at others. Later he told me it was the best present he had ever received. The book still lies on the table in the living room, and guests often look at it. For me, that reaction was the greatest reward.`
      },
      part3: [
        { q: 'Why do people give gifts on special occasions?', a: 'To show affection and mark an event. A gift is a tangible way of saying that someone matters. It also strengthens social bonds, because giving creates a sense of connection.' },
        { q: 'Has gift-giving become more commercial?', a: 'In many ways, yes, because of advertising and online shopping. However, the most memorable presents are still those that show effort and attention, regardless of price.' },
        { q: 'Is it better to give money or a present?', a: 'It depends. Money offers freedom, which is useful for practical needs. A present, on the other hand, shows that you thought about the person, which is more personal.' }
      ]
    }
  });

  /* ===== 17 · Ar-Razzaq ===== */
  put(17, {
    listening: {
      title: 'Ar-Razzaq — students and part-time work', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за мнениями и цифрами в обсуждении бюджета студентов.',
      context: 'Part 3. Два студента обсуждают подработку и бюджет с консультантом.', genders: { Advisor: 'f', Nurzhan: 'm', Alina: 'f' },
      script: `Advisor: Let us look at your budgets. Nurzhan, how much do you spend each month?
Nurzhan: About three hundred pounds. Sorry, three hundred and fifty, with transport.
Advisor: And your income?
Nurzhan: Two hundred from my family, and I earn about one hundred and fifty from a part-time job in a bookshop.
Advisor: How many hours do you work?
Nurzhan: Ten hours a week. I thought of twelve, but my timetable did not allow it.
Advisor: And Alina?
Alina: I do not work at present, but I am considering it. I worry that it might affect my studies.
Advisor: That is a reasonable concern. Some studies suggest that up to about fifteen hours a week is manageable for most students. Beyond that, grades often begin to fall.
Alina: What about the benefits?
Advisor: Several. Besides income, you gain experience, you learn to manage your time and you build contacts. Employers often say that they value candidates who have worked while studying.
Nurzhan: For me, the best part is independence. I feel responsible for my money.
Advisor: Good. A tip for both of you: keep a record of what you spend for one month. Most people discover at least two or three areas where they can save.
Alina: I will start tomorrow.
Advisor: Excellent. Next week, we will talk about saving.`,
      notesTitle: 'Student budget',
      notes: [
        { pre: 'Nurzhan\'s monthly spending: £', post: '', a: ['350', 'three hundred and fifty', 'three hundred fifty'], e: 'Триста пятьдесят с учётом транспорта.' },
        { pre: 'Income from family: £', post: '', a: ['200', 'two hundred'], e: 'Двести от семьи.' },
        { pre: 'Hours worked per week:', post: '', a: ['10', 'ten'], e: 'Десять часов (двенадцать не подошло по расписанию).' },
        { pre: 'Manageable weekly hours (up to about)', post: '', a: ['15', 'fifteen'], e: 'До пятнадцати часов в неделю.' },
        { pre: 'Keep a record of spending for one', post: '', a: ['month'], e: 'Вести учёт расходов в течение месяца.' }
      ],
      mc: [
        { q: 'What does Alina worry about?', opts: ['that work might affect her studies', 'that she will earn too little', 'that employers dislike students'], a: 'A', e: 'Что работа повлияет на учёбу.' },
        { q: 'What does Nurzhan value most about working?', opts: ['independence', 'the salary', 'free books'], a: 'A', e: 'Самостоятельность и чувство ответственности за деньги.' },
        { q: 'What will the next meeting be about?', opts: ['saving', 'loans', 'career choices'], a: 'A', e: 'Следующая встреча — о накоплениях.' }
      ]
    },
    writing: {
      title: 'Ar-Razzaq — students with part-time jobs', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка явления: плюсы и минусы подработки студентов.',
      task2: {
        prompt: 'Many young people now work part-time while they are studying. Do the advantages of this development outweigh the disadvantages?',
        keywords: ['part-time', 'students', 'work', 'studies', 'income', 'experience', 'time', 'independence', 'stress', 'grades', 'skills', 'balance'],
        model: `More and more students combine their studies with part-time employment. On balance, I believe that the advantages outweigh the disadvantages, provided that the workload is moderate.

The most obvious benefit is financial. Students who earn money rely less on their families or on loans, and they learn the value of what they spend. Beyond income, working develops skills that lectures cannot teach: punctuality, communication with customers, teamwork and the ability to deal with pressure. These qualities are highly valued by employers, and graduates with work experience often find jobs more quickly. Part-time work also encourages time management, because students with a busy schedule tend to use their free hours more carefully.

Nevertheless, there are real risks. Long hours can lead to tiredness, missed classes and lower grades, and some students may feel that they have no time for friends or rest. In addition, jobs that are unrelated to the student\'s field may offer little experience and, if poorly paid, may not justify the time. When work becomes a necessity because of financial hardship, the stress can be considerable.

These problems, however, are largely avoidable. Research suggests that about fifteen hours a week is a sensible limit for most students. Universities can help by offering flexible schedules and campus jobs that fit around lessons, and students can choose work that adds to their professional development.

In conclusion, part-time work offers financial independence, valuable skills and better employment prospects, and these benefits outweigh the drawbacks when the hours are kept reasonable.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итогового решения; оно дано во введении и подтверждено выводом с условием.',
          'Баланс: преимущества развиты с примерами навыков, недостатки — с причинами и путями снижения риска.',
          'Cohesion: Nevertheless / These problems, however, are largely avoidable — ответ на возражения.',
          'Lexical Resource: punctuality, hardship, professional development, flexible; хеджирование (often, may, tend to).'
        ]
      }
    },
    speaking: {
      title: 'Ar-Razzaq — work and earning', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о работе и первом заработке; обсуждение денег и труда.',
      keywords: ['job', 'work', 'earn', 'money', 'salary', 'first', 'colleagues', 'experience', 'learn', 'responsible'],
      part1: [
        { q: 'Do you work or are you a student?', a: 'I work as a teacher, and I am also studying part-time. It is demanding, but I enjoy having both.' },
        { q: 'Why did you choose your job?', a: 'I wanted to do something useful where I can learn every day. Teaching gives me both of those things.' },
        { q: 'Do you save money?', a: 'I try to put aside about ten per cent of my income each month. It gives me a sense of security.' },
        { q: 'What did you spend your first salary on?', a: 'I bought presents for my parents. It was not a big sum, but it was very meaningful to give them something from my own earnings.' }
      ],
      part2: {
        topic: 'Describe your first job.', bullets: ['what the job was', 'how you found it', 'what you did there', 'and explain what you learned from it.'],
        plan: [{ h: '1. Job', t: 'Assistant in a small bookshop, age 19.' }, { h: '2. How found', t: 'A friend recommended; short interview.' }, { h: '3. Tasks', t: 'Shelving, customers, cash desk.' }, { h: '4. Learned', t: 'Responsibility, communication, value of money.' }],
        model: `My first job was in a small bookshop near my university, where I worked for about a year when I was nineteen.

I found the job through a friend who had worked there before me. She told me that the owner was looking for a part-time assistant for the evenings and weekends. I went for a short interview, during which he asked me about my favourite books, and I think my enthusiasm helped, because I was hired the next day.

My duties were varied. I put new books on the shelves, helped customers find what they wanted, and worked at the cash desk. At first I was nervous, especially about handling money, and I made a few mistakes, such as giving the wrong change. The owner was patient and showed me how to check a total twice. By the end of the first month, I felt much more confident.

I learned a great deal. First, I learned to talk to people from all kinds of backgrounds, which improved my communication skills. Second, I learned the value of money: when I earned it through my own effort, I became more careful about spending it. And finally, I learned responsibility. If I was late, the shop opened late, and that taught me to be punctual.

Although it was not highly paid, I remember the job with great affection. It gave me independence, a few lasting friendships and a lifelong love of bookshops.`
      },
      part3: [
        { q: 'What qualities do employers look for?', a: 'Reliability, willingness to learn and good communication are probably the most important. Technical skills can be taught, but attitude is much harder to change.' },
        { q: 'Should young people be encouraged to start working early?', a: 'In moderation, yes. Part-time work develops responsibility and gives practical experience. However, education should remain the priority, especially in the early years.' },
        { q: 'Is money the most important factor when choosing a job?', a: 'It is important, since everyone needs a stable income, but not the only one. Job satisfaction, opportunities for growth and a good working atmosphere contribute greatly to long-term happiness.' }
      ]
    }
  });

  /* ===== 18 · Al-Fattah ===== */
  put(18, {
    listening: {
      title: 'Al-Fattah — opening doors through education', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Понимание лекции об образовательных возможностях и числах-дистракторах.',
      context: 'Part 4. Лекция о доступе к образованию и «открытых дверях».', genders: { Lecturer: 'm' },
      script: `Lecturer: Good morning. Today I want to discuss the idea of opportunity. We often say that a door has opened, when a scholarship, a job or a friendship appears. The Arabic root f-t-h, which gives us the name Al-Fattah, means to open. In classical Arabic, it can also mean to decide a case, which shows that an opening removes whatever is blocked.
Lecturer: Education is one of the most powerful doors. Studies of graduates in several countries have found that, on average, each additional year of schooling is associated with roughly ten per cent higher earnings. I should note that the exact figure varies from country to country.
Lecturer: However, access is not equal. In some regions, a child must walk more than five kilometres to the nearest secondary school. Online courses have opened new possibilities, but they require a stable connection and a quiet place to study.
Lecturer: What can be done? There are three kinds of response. First, governments can fund scholarships and build schools in remote areas. Second, universities can open their lectures online, free of charge. Third, individuals can act as mentors.
Lecturer: Mentoring is simple. An older student meets a younger student once a week, answers questions and shares experience. Studies suggest that mentored students are more likely to complete their courses.
Lecturer: Finally, there is the question of attitude. A door has to be approached and pushed. People who wait passively for opportunities rarely find them. People who apply, ask questions and prepare are more likely to be ready when the chance comes.
Lecturer: For next time, read the article on page twenty-four, not thirty-four, and think about one door that you could open for someone else.`,
      notesTitle: 'Opportunity and education',
      notes: [
        { pre: 'The root f-t-h means to', post: '', a: ['open'], e: 'Корень f-t-h — «открывать».' },
        { pre: 'Each extra year of schooling raises income by about', post: 'per cent', a: ['10', 'ten'], e: 'Примерно на десять процентов.' },
        { pre: 'Distance to the nearest secondary school:', post: 'km', a: ['5', 'five', 'more than five'], e: 'Более пяти километров.' },
        { pre: 'A mentor meets a younger student once a', post: '', a: ['week'], e: 'Один раз в неделю.' },
        { pre: 'Read the article on page', post: '', a: ['24', 'twenty-four', 'twenty four'], e: 'Страница 24, а не 34.' }
      ],
      mc: [
        { q: 'What does the root also mean in classical Arabic?', opts: ['to decide a case', 'to travel', 'to build'], a: 'A', e: 'Открыть дело — значит вынести решение.' },
        { q: 'What do online courses require?', opts: ['a stable connection and a quiet place', 'expensive equipment', 'a university degree'], a: 'A', e: 'Стабильную связь и тихое место.' },
        { q: 'What does the lecturer say about passive people?', opts: ['they rarely find opportunities', 'they are more successful', 'they prefer online courses'], a: 'A', e: 'Те, кто ждёт пассивно, редко находят возможности.' }
      ]
    },
    writing: {
      title: 'Al-Fattah — access to university', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация по вопросу доступности высшего образования.',
      task2: {
        prompt: 'Some people believe that university education should be free for all students. To what extent do you agree or disagree?',
        keywords: ['university', 'education', 'free', 'tuition', 'students', 'access', 'taxes', 'opportunity', 'graduates', 'funding', 'scholarships', 'quality'],
        model: `The proposal that university education should be free for all students has strong supporters. I agree with the principle that talent should never be blocked by lack of money, but I believe that completely free education for everyone is not the only or necessarily the best way to achieve this.

The case for free education rests on opportunity and social benefit. When tuition is high, capable students from poorer families may decide not to apply, or graduate with debts that limit their choices for years. Society then loses talent that it could have used. Moreover, graduates contribute to the economy and public services through higher earnings and taxes, so it can be argued that education funded by the state pays for itself.

However, there are practical objections. Universities are expensive, and if everyone is guaranteed a place at no cost, public budgets may be stretched to the point where quality declines, as classes become larger and resources shrink. Additionally, since graduates usually earn more over their lifetime, it is not obviously fair for taxpayers who never attended university to pay for the entire cost.

An alternative would be targeted funding: generous scholarships and grants for students from low-income families, together with loans repaid only when graduates earn above a certain level. Such a system protects access while sharing the cost more fairly.

In conclusion, access to higher education must be open to all talented students, but making it entirely free for everyone is less effective than a combination of public support, scholarships and income-based repayment.`,
        analysis: [
          'Task Response: градуированная позиция («согласен с принципом, но не с универсальной бесплатностью») и альтернатива.',
          'Тулмин: claim → grounds (потеря талантов, налоги) → warrant (образование окупается) → rebuttal (качество, справедливость) → qualifier.',
          'Cohesion: However / Additionally / An alternative; связность через ключевое слово access.',
          'Lexical Resource: tuition, taxpayers, targeted funding, income-based; грамматика: условные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Fattah — an opportunity that changed my life', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о шансе, изменившем жизнь, и обсуждение образования и возможностей.',
      keywords: ['opportunity', 'chance', 'scholarship', 'opened', 'door', 'change', 'decision', 'education', 'grateful', 'future'],
      part1: [
        { q: 'Do you like trying new things?', a: 'Yes, within reason. New experiences keep life interesting, and I have found that most of my best decisions came from trying something unfamiliar.' },
        { q: 'What would you like to learn in the future?', a: 'I would love to learn to play the piano properly. I tried as a child but stopped, and I feel it is never too late.' },
        { q: 'Did your education give you good opportunities?', a: 'Yes, definitely. Studying geography opened the door to teaching and travelling, and it still shapes how I see the world.' },
        { q: 'Do you take chances easily?', a: 'I take calculated risks. I think carefully, but when the reasons are convincing, I act without waiting for perfect certainty.' }
      ],
      part2: {
        topic: 'Describe an opportunity that changed your life.', bullets: ['what the opportunity was', 'how you found out about it', 'what you decided to do', 'and explain how it changed your life.'],
        plan: [{ h: '1. Opportunity', t: 'A scholarship for a summer course abroad.' }, { h: '2. How found', t: 'A teacher told me about it.' }, { h: '3. Decision', t: 'Applied, prepared interview.' }, { h: '4. Change', t: 'Confidence, language, career path.' }],
        model: `The opportunity I would like to describe is a scholarship that allowed me to attend a summer course abroad when I was a student.

I found out about it in a rather ordinary way. One of my teachers mentioned it at the end of a lesson, almost in passing, saying that a foundation was offering a small number of places for students interested in environmental science. Most of my classmates did not pay attention, since the application seemed complicated. But I was curious, so I asked her for the details after class.

The process required a written essay, two reference letters and an interview in English. I was nervous because I had never studied abroad, and I was not certain that my English was good enough. Nevertheless, I decided to apply. I spent several weeks writing and rewriting the essay, and my teacher practised the interview with me twice. When I received the news that I had been accepted, I could hardly believe it.

The course lasted four weeks, and it changed my life in several ways. Academically, I learned to work with people from many countries and to think in a more international way. Personally, I gained a great deal of confidence, because I discovered that I could manage in a new environment. And professionally, it influenced my decision to become a teacher, since I wanted to help other students find similar opportunities.

I remain deeply grateful to that teacher and to the foundation, and I try to pass on information about scholarships to my own students.`
      },
      part3: [
        { q: 'Why do some people miss opportunities?', a: 'Often because of fear or lack of information. Some people also wait for the perfect moment, which rarely arrives. Being curious and asking questions greatly increases the chances of finding them.' },
        { q: 'Should universities offer more scholarships?', a: 'Yes, particularly for students from low-income families. Scholarships reduce financial barriers and ensure that universities benefit from the full range of talent.' },
        { q: 'How has the internet changed access to education?', a: 'It has made enormous amounts of material available for free, including lectures from top universities. However, it cannot fully replace guidance from a teacher, and it requires self-discipline.' }
      ]
    }
  });

  /* ===== 19 · Al-Alim ===== */
  put(19, {
    listening: {
      title: 'Al-Alim — an encyclopaedia exhibition', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за маршрутом выставки и числами в монологе.',
      context: 'Part 2. Куратор рассказывает о выставке «История знания».', genders: { Curator: 'f' },
      script: `Curator: Welcome to the exhibition called The Story of Knowledge. My name is Laura, and I am the curator.
Curator: The exhibition is open from Tuesday to Sunday, from ten until six. It was open until seven in the summer, but the hours have changed. Entry costs five pounds, and a guidebook costs an extra three.
Curator: In the first room, you will see ancient clay tablets, some more than four thousand years old. They were used to record trade, laws and stories. The second room is devoted to manuscripts. Copying a single book by hand could take months.
Curator: The third room, on the first floor, shows the invention of printing. A printed book that took a few days to produce could previously take a year. After that, you will find a large wall of encyclopaedias, with more than one hundred volumes. Visitors are welcome to open the books marked with a green label.
Curator: The last room is the interactive area. Here you can use computers to search a digital library and compare how people looked for information in the past and today. There is a game in which you have fifteen minutes to answer ten questions, using only the old encyclopaedias.
Curator: I would like to leave you with one idea. Knowledge grows when it is shared, and the most knowledgeable people are usually those who are ready to say, "I do not know, but I will find out".
Curator: The shop and the cafe are on the ground floor. Please keep your tickets until the end of the visit.`,
      notesTitle: 'Exhibition: The Story of Knowledge',
      notes: [
        { pre: 'Closing time:', post: 'p.m.', a: ['6', 'six'], e: 'Закрытие в шесть (семь — летом).' },
        { pre: 'Entry price: £', post: '', a: ['5', 'five'], e: 'Вход стоит пять фунтов.' },
        { pre: 'Age of the oldest tablets: more than', post: 'years', a: ['4000', '4,000', 'four thousand'], e: 'Более четырёх тысяч лет.' },
        { pre: 'The encyclopaedia wall has more than', post: 'volumes', a: ['100', 'one hundred', 'a hundred'], e: 'Больше ста томов.' },
        { pre: 'Game time:', post: 'minutes', a: ['15', 'fifteen'], e: 'Пятнадцать минут на десять вопросов.' }
      ],
      mc: [
        { q: 'What does the second room show?', opts: ['manuscripts', 'printing machines', 'computers'], a: 'A', e: 'Рукописи.' },
        { q: 'Which books can visitors open?', opts: ['those with a green label', 'those with a red label', 'all of them'], a: 'A', e: 'Книги с зелёной меткой.' },
        { q: 'What is the curator\'s final idea?', opts: ['knowledge grows when shared', 'old books are best', 'computers replace libraries'], a: 'A', e: 'Знание растёт, когда им делятся.' }
      ]
    },
    writing: {
      title: 'Al-Alim — broad or specialist knowledge', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение широкого и узкого знания, выбор позиции.',
      task2: {
        prompt: 'Some people think that it is better to have broad knowledge of many subjects, while others believe that it is better to be an expert in one subject. Discuss both views and give your own opinion.',
        keywords: ['knowledge', 'broad', 'expert', 'specialist', 'subjects', 'career', 'skills', 'depth', 'generalist', 'learning', 'problems', 'adaptable'],
        model: `People differ over whether it is better to know a little about many subjects or a great deal about one. I believe that depth matters most, but that it is strengthened by a reasonably wide base of general knowledge.

Those who favour broad knowledge stress adaptability. In a rapidly changing world, jobs and technologies appear and disappear, and people with a wide range of interests can adjust more easily. A generalist can also see connections between fields, such as applying ideas from biology to computer science, and this kind of thinking often leads to innovation. In daily life, general knowledge helps citizens to understand news, to evaluate arguments and to communicate with people from different backgrounds.

On the other hand, specialists have clear advantages. Complex problems, such as developing a medicine or designing a bridge, require years of focused study, and society depends on experts who can solve them. Specialists also tend to earn more and to enjoy greater job security, since their skills are scarce. Furthermore, deep study teaches how to learn: once a person has mastered one subject thoroughly, he or she knows what real understanding feels like and can apply the same methods elsewhere.

In my opinion, the best model is a T-shaped profile: a broad horizontal bar of general knowledge, supported by a deep vertical bar of expertise in one area. The broad base prevents narrowness, while the deep column gives value and credibility. Education can encourage this by combining a wide curriculum in the early years with increasing specialisation later.

In conclusion, expertise in one subject is more valuable than superficial knowledge of many, provided that it is combined with enough general understanding to see the wider picture.`,
        analysis: [
          'Task Response: обе стороны объяснены, позиция («T-образный профиль») чётко сформулирована и поддержана выводом.',
          'Аргументация: у каждой стороны есть утверждение, пример и объяснение связи; финальный образ синтезирует обе позиции.',
          'Cohesion: On the other hand / Furthermore / In my opinion; повтор ключевых слов knowledge / expertise.',
          'Lexical Resource: adaptability, scarce, credibility, superficial; грамматика: сложные придаточные и модальные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Alim — something interesting I learned', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о новом знании и обсуждение того, как люди учатся.',
      keywords: ['learn', 'knowledge', 'discover', 'interesting', 'curious', 'read', 'teacher', 'question', 'understand', 'remember'],
      part1: [
        { q: 'Do you like learning new things?', a: 'Very much. Curiosity is the main reason I became a teacher, and I try to learn something new every week.' },
        { q: 'How do you usually learn something new?', a: 'I read about it first, then try to explain it to someone else. If I cannot explain it simply, I know I have not understood it yet.' },
        { q: 'Do you prefer learning from books or from videos?', a: 'Books for depth and videos for quick explanations. I often combine the two, starting with a video and then checking details in a book.' },
        { q: 'Who is the most knowledgeable person you know?', a: 'My uncle, who is a retired engineer. He knows something about almost everything and, importantly, he is never embarrassed to say that he does not know.' }
      ],
      part2: {
        topic: 'Describe something interesting that you learned recently.', bullets: ['what you learned', 'how you learned it', 'why it was interesting', 'and explain how you have used this knowledge.'],
        plan: [{ h: '1. What', t: 'How memory works: active recall.' }, { h: '2. How', t: 'An article and then experiments on myself.' }, { h: '3. Why interesting', t: 'Counterintuitive: effort beats re-reading.' }, { h: '4. Use', t: 'Changed my study routine and my teaching.' }],
        model: `Something interesting that I learned recently is how memory really works, and in particular the technique known as active recall.

I discovered it through an article that a colleague shared with me, and then I read a couple of books about learning. The main idea is that the best way to remember something is not to read it again but to close the book and try to retrieve it from memory. Each successful retrieval strengthens the memory, and even unsuccessful attempts help, because they show what you have forgotten.

I found this fascinating for two reasons. First, it contradicted what I had always believed: I had spent years re-reading and highlighting, and it felt productive. Second, it showed that difficulty can be useful. The methods that feel harder often produce better results, which is quite counterintuitive.

I decided to test the idea on myself. While preparing for an exam, I used flashcards and wrote down everything I could remember from each chapter before checking my notes. After two weeks, I noticed that I remembered much more than before, and I felt more confident.

I have used this knowledge in two ways. In my own studies, I now spend less time reading and more time testing myself. And as a teacher, I include short quizzes at the beginning of each lesson, which helps students to recall the previous material.

What I appreciate most is that this knowledge is practical. It does not require special tools, only the courage to find out what you do not yet know.`
      },
      part3: [
        { q: 'Is it more important to know facts or to know how to find information?', a: 'Both matter. Basic knowledge is necessary to think critically, but the ability to find and evaluate information is essential in a world where facts change so quickly.' },
        { q: 'Do you think people learn differently at different ages?', a: 'To some extent. Children learn through play and imitation, while adults rely more on experience and motivation. Nevertheless, adults are perfectly capable of learning new skills.' },
        { q: 'What role should teachers play in the age of the internet?', a: 'They should act as guides rather than sources of facts: helping students to ask good questions, to judge sources and to connect pieces of information into a coherent understanding.' }
      ]
    }
  });

  /* ===== 20 · Al-Qabid ===== */
  put(20, {
    listening: {
      title: 'Al-Qabid — a budgeting appointment', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных консультации: даты, суммы, названия — и поправки.',
      context: 'Part 1. Клиент записывается на консультацию по личному бюджету.', genders: { Adviser: 'f', Yerlan: 'm' },
      script: `Adviser: Good morning, Family Finance Centre.
Yerlan: Good morning. I would like an appointment for budgeting advice. Things have been tight recently.
Adviser: I am sorry to hear that. We can certainly help. May I have your name, please?
Yerlan: Yerlan Sadykov. S-A-D-Y-K-O-V.
Adviser: And a phone number?
Yerlan: Zero-seven-seven, five-five-two, nine-four-six. Sorry, nine-six-four.
Adviser: Thank you. The first free appointment is on Thursday the twenty-first at half past three. Would that suit you?
Yerlan: Could I do the twentieth? I work on the twenty-first.
Adviser: Unfortunately, the twentieth is fully booked. Perhaps the twenty-second, in the morning?
Yerlan: The twenty-second at ten would be fine.
Adviser: Perfect. The session lasts forty minutes, and it is free. Please bring your last three bank statements and a list of regular payments, such as rent and bills.
Yerlan: Is it possible to bring my wife?
Adviser: Of course. In fact, we encourage it, because both partners should understand the budget. We will be at Room six, on the first floor.
Yerlan: Thank you. Will I get a plan?
Adviser: Yes, you will receive a simple written plan, including a monthly saving goal.
Yerlan: That sounds ideal.`,
      notesTitle: 'Budget appointment',
      notes: [
        { pre: 'Surname:', post: '', a: ['Sadykov'], e: 'Фамилия — Sadykov.' },
        { pre: 'Telephone: 077 552 9', post: '', a: ['64', 'six four', 'sixty-four'], e: 'Сначала 946, затем поправка — 964.' },
        { pre: 'Appointment: the 22nd at', post: '', a: ['10', '10:00', 'ten', '10 am', '10am'], e: '21-е и 20-е отпали; назначено 22-е в десять.' },
        { pre: 'Room number:', post: '', a: ['6', 'six'], e: 'Кабинет шесть.' },
        { pre: 'Length of the session:', post: 'minutes', a: ['40', 'forty'], e: 'Сорок минут.' }
      ],
      mc: [
        { q: 'What should Yerlan bring?', opts: ['bank statements and a list of regular payments', 'his employment contract', 'a loan application'], a: 'A', e: 'Три последние выписки и список регулярных платежей.' },
        { q: 'What does the adviser say about bringing his wife?', opts: ['it is encouraged', 'it is not permitted', 'it costs extra'], a: 'A', e: 'Рекомендуют, чтобы оба партнёра понимали бюджет.' },
        { q: 'What will Yerlan receive at the end?', opts: ['a written plan with a saving goal', 'a loan', 'a discount card'], a: 'A', e: 'Письменный план с месячной целью по накоплениям.' }
      ]
    },
    writing: {
      title: 'Al-Qabid — saving or spending', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение подходов к деньгам: накопление и трата, личная позиция.',
      task2: {
        prompt: 'Some people think that the best way to manage money is to save as much as possible. Others believe that it is better to enjoy money while you are young. Discuss both views and give your own opinion.',
        keywords: ['money', 'saving', 'spending', 'future', 'young', 'budget', 'security', 'enjoy', 'debt', 'income', 'emergency', 'balance'],
        model: `Attitudes to money vary widely. Some people believe that saving as much as possible is the wisest policy, while others prefer to enjoy their income while they are young. In my opinion, a balanced approach that gives priority to security but leaves room for enjoyment is the most sensible.

Supporters of saving make a strong argument. Life is unpredictable, and unexpected events such as illness, job loss or a family emergency can require substantial sums. A person with savings can face these events calmly, while someone without them may fall into debt. Saving also makes it possible to achieve important goals, such as buying a home or starting a business, and the habit of regular saving, even of small amounts, builds financial discipline and reduces anxiety.

On the other hand, those who advocate spending point out that youth is a unique period. Travel, education and experiences are often easier and more rewarding when a person is young and free of responsibilities, and some opportunities will not return. Moreover, excessive saving may lead to a life of constant restriction, in which pleasure is endlessly postponed. Spending on health, friendships and learning can also be considered an investment in well-being.

I believe the sensible solution is to follow a simple rule: first set aside a fixed percentage of income, for example ten to twenty per cent, for emergencies and future goals; then spend the rest without guilt on things that matter. This approach provides a safety net without turning life into a permanent austerity programme.

In conclusion, saving should come first, but spending thoughtfully on experiences and growth is also part of managing money well.`,
        analysis: [
          'Task Response: обе позиции раскрыты, личная позиция («баланс с приоритетом безопасности») подкреплена конкретным правилом.',
          'Аргументация: у каждой стороны есть довод, пример и пояснение; финальный абзац предлагает практический синтез.',
          'Cohesion: On the other hand / Moreover; переход через ключевое слово security → well-being.',
          'Lexical Resource: substantial sums, discipline, austerity, safety net; грамматика: условные и сложные предложения.'
        ]
      }
    },
    speaking: {
      title: 'Al-Qabid — managing with limited resources', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о периоде ограниченных средств и обсуждение бюджета и терпения.',
      keywords: ['money', 'budget', 'tight', 'save', 'spend', 'difficult', 'manage', 'patient', 'learned', 'family'],
      part1: [
        { q: 'Do you plan how you spend your money?', a: 'Yes, I use a simple monthly budget. I divide my income into essentials, savings and a small amount for enjoyment, and I review it every Sunday.' },
        { q: 'Do you like shopping?', a: 'Not particularly. I prefer to buy only what I need, after comparing options. Long shopping trips tire me.' },
        { q: 'Have you ever had to be careful with money?', a: 'Yes, as a student I lived on a small allowance. It was challenging, but it taught me to value every purchase.' },
        { q: 'Is it a good idea to borrow money?', a: 'Only when it is absolutely necessary, and from someone I trust. I think it is important to repay promptly, as debt creates stress.' }
      ],
      part2: {
        topic: 'Describe a time when you had to manage with very little money.', bullets: ['when it was', 'why you had little money', 'how you managed', 'and explain what you learned from the experience.'],
        plan: [{ h: '1. When', t: 'My first year at university.' }, { h: '2. Why', t: 'Small allowance, high rent.' }, { h: '3. How', t: 'Budget, cooking, free events, tutoring.' }, { h: '4. Learned', t: 'Value of money, patience, creativity.' }],
        model: `The time I would like to describe is my first year at university, when I had to manage with very little money.

I had moved to another city to study, and my parents could give me only a small monthly allowance. After paying for my room in a shared flat, I was left with a modest amount for food, transport and books. At the beginning, I did not keep track of my expenses, and during the second month I ran out of money ten days before the next transfer.

That shock made me change my approach. I made a simple budget, dividing the allowance into weekly amounts, and I recorded every purchase in a notebook. I learned to cook cheap but healthy meals, such as soups and rice dishes, and I shared the cost of groceries with my flatmates. I also chose free entertainment, like student concerts and walking in the park, and I began tutoring a school pupil twice a week, which added a small but useful income.

Naturally, it was not easy. There were evenings when I wanted to go out with friends but could not afford it. However, my friends understood, and we often met at my place instead.

I learned several things from this experience. First, I realised how much I had taken for granted, and I became more grateful to my parents. Second, I discovered that happiness depends very little on spending. And third, I gained confidence that I could handle difficulties on my own. Looking back, that year was hard, but it was one of the most valuable of my life.`
      },
      part3: [
        { q: 'Why do some people find it difficult to save money?', a: 'Spending is immediate and rewarding, while saving offers a distant benefit. Advertising and social pressure make it worse. Setting up automatic transfers can help, because it removes the need for willpower.' },
        { q: 'Should schools teach financial education?', a: 'Definitely. Many young people leave school without understanding budgets, interest or debt, and this causes problems later. Practical lessons could prevent many mistakes.' },
        { q: 'How can people stay positive during financial difficulties?', a: 'By focusing on what they can control, such as a budget and small improvements, and by seeking support from family and friends. Remembering that difficult periods are temporary also helps.' }
      ]
    }
  });
})();

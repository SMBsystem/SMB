// Имена 41–50: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 41 · Al-Jalil ===== */
  put(41, {
    listening: {
      title: 'Al-Jalil — booking a graduation hall', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных бронирования: дата, вместимость, цена, время.',
      context: 'Part 1. Организатор бронирует зал для церемонии выпуска.', genders: { Manager: 'f', Berik: 'm' },
      script: `Manager: Grand Hall Events, good morning.
Berik: Good morning. I would like to book a hall for a graduation ceremony.
Manager: Of course. May I have your name?
Berik: Berik Nurgaliyev. N-U-R-G-A-L-I-Y-E-V.
Manager: And the date of the ceremony?
Berik: The twenty-eighth of June.
Manager: Let me check. I am sorry, the Main Hall is already taken on the twenty-eighth. The twenty-ninth is available.
Berik: Then the twenty-ninth, please. How many people does the hall hold?
Manager: Four hundred and fifty. But the stage seats only twelve.
Berik: We expect about three hundred guests and thirty graduates.
Manager: Then it is more than enough. The ceremony would be from four until six, with a reception in the foyer afterwards.
Berik: What is the price?
Manager: Eight hundred pounds for the hall, plus one hundred and twenty for the sound system. The total is nine hundred and twenty.
Berik: That is acceptable. Is there a dress code?
Manager: For staff, we recommend formal clothes. For guests, it is up to you, though most choose smart dress.
Berik: And can we have a red carpet?
Manager: Yes, it costs an additional fifty pounds. Shall I add it?
Berik: No, thank you. The ceremony should be dignified but simple.`,
      notesTitle: 'Graduation booking',
      notes: [
        { pre: 'Surname:', post: '', a: ['Nurgaliyev'], e: 'Фамилия — Nurgaliyev.' },
        { pre: 'Booked date: June', post: '', a: ['29', '29th', 'twenty-ninth', 'the 29th'], e: '28-е занято, поэтому 29-е.' },
        { pre: 'Hall capacity:', post: '', a: ['450', 'four hundred and fifty', 'four hundred fifty'], e: 'Вместимость — 450.' },
        { pre: 'Ceremony time: 4 until', post: '', a: ['6', 'six', '6:00', '18:00'], e: 'С четырёх до шести.' },
        { pre: 'Total cost: £', post: '', a: ['920', 'nine hundred and twenty', 'nine hundred twenty'], e: '800 за зал + 120 за звук = 920.' }
      ],
      mc: [
        { q: 'How many guests does Berik expect?', opts: ['about 300', 'about 450', 'about 100'], a: 'A', e: 'Около трёхсот гостей.' },
        { q: 'What does Berik decide about the red carpet?', opts: ['not to add it', 'to add it', 'to ask later'], a: 'A', e: 'Отказывается: церемония должна быть достойной, но простой.' },
        { q: 'Where will the reception take place?', opts: ['in the foyer', 'on the stage', 'in a garden'], a: 'A', e: 'В фойе после церемонии.' }
      ]
    },
    writing: {
      title: 'Al-Jalil — are ceremonies worth the cost?', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о ценности торжественных церемоний.',
      task2: {
        prompt: 'Some people believe that formal ceremonies, such as graduations and weddings, are an unnecessary expense. To what extent do you agree or disagree?',
        keywords: ['ceremonies', 'graduations', 'weddings', 'expense', 'tradition', 'family', 'community', 'meaning', 'cost', 'memories', 'celebration', 'rituals'],
        model: `Formal ceremonies can be costly, and some people regard them as an unnecessary luxury. I disagree to a considerable extent: ceremonies serve genuine social and emotional purposes, although they should be organised with moderation.

The first reason for valuing them is that they mark important transitions. A graduation, a wedding or a naming ceremony signals publicly that a person has entered a new stage of life, and this recognition gives the event a weight that a private decision does not have. Rituals also bring families and communities together, and the memories they create often become a source of strength for years. Psychologists have observed that shared rituals can strengthen the sense of belonging and help people to cope with change.

Furthermore, ceremonies express respect. When a school organises a formal graduation, it honours the effort of students, parents and teachers; when a family arranges a wedding feast, it shows respect for the guests. Such gestures reinforce values like gratitude and solidarity.

Nevertheless, the criticism has a valid core. Expenses can become excessive, with families going into debt to meet social expectations, and competition to impress others can distract from the purpose of the event. A ceremony does not need to be lavish to be meaningful; a simple event with sincere words can be more memorable than an expensive show.

For this reason, communities should encourage ceremonies that are dignified but affordable, with the focus on meaning rather than display.

In conclusion, formal ceremonies are valuable for marking transitions and strengthening bonds, and the real problem is not their existence but excessive spending.`,
        analysis: [
          'Task Response: позиция («disagree to a considerable extent») выражена и подкреплена; признано справедливое зерно критики.',
          'Аргументация: переходные ритуалы → принадлежность → уважение; ограничение — чрезмерные траты.',
          'Cohesion: Furthermore / Nevertheless / For this reason; повторение ключевого слова ceremonies.',
          'Lexical Resource: transitions, solidarity, lavish, display; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Jalil — a ceremony I attended', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание торжественного события и обсуждение традиций и этикета.',
      keywords: ['ceremony', 'formal', 'special', 'guests', 'dress', 'speech', 'tradition', 'proud', 'celebrate', 'atmosphere'],
      part1: [
        { q: 'Do you enjoy formal events?', a: 'In moderation. I like the sense of occasion and the opportunity to meet people, but I prefer events that are not too long.' },
        { q: 'What do you usually wear to a special occasion?', a: 'Something smart but comfortable. I think that making an effort with clothes shows respect for the event.' },
        { q: 'Do you like making speeches?', a: 'I am not afraid of them any more. As a teacher, I speak in front of people daily, though a ceremony is different because the words need to be chosen carefully.' },
        { q: 'Are traditions important in your family?', a: 'Very. We celebrate holidays in the same way every year, and I think these routines give children a feeling of security.' }
      ],
      part2: {
        topic: 'Describe a formal ceremony that you attended.', bullets: ['what the ceremony was', 'who was there', 'what happened', 'and explain why it was memorable.'],
        plan: [{ h: '1. What', t: 'My sister\'s university graduation.' }, { h: '2. Who', t: 'Graduates, families, professors.' }, { h: '3. What happened', t: 'Procession, speeches, diplomas, music.' }, { h: '4. Memorable', t: 'Pride, father\'s tears, sense of occasion.' }],
        model: `The ceremony I would like to describe is my younger sister\'s university graduation, which I attended three years ago.

It took place in the large hall of the university, which was decorated with flowers and flags. Around five hundred people were present: graduates in dark gowns and caps, their parents and relatives, and professors in formal robes. I remember that everyone spoke in low voices, and there was a feeling of respectful excitement.

The ceremony began with a short procession of professors, accompanied by music. Then the rector gave a brief speech about the responsibility that comes with knowledge, and a student representative spoke on behalf of the graduates, thanking parents and teachers. After that, the names were read one by one, and each graduate walked across the stage to receive a diploma. When my sister\'s name was called, my mother grabbed my hand, and my father, who rarely shows emotion, wiped his eyes. At the end, the graduates threw their caps into the air.

It was memorable for several reasons. The formality made the day feel important, almost solemn, and I understood how much the achievement meant to my family. I was also moved by the way each person\'s effort was acknowledged publicly, which does not happen often in everyday life.

Afterwards, we took photographs in the garden and had dinner together. I still look at the pictures from that day, and I think that a ceremony like this gives a moment a dignity that it would not otherwise have.`
      },
      part3: [
        { q: 'Why do societies hold ceremonies for important events?', a: 'They give shape to big changes in life and allow communities to share them. A ceremony tells people that something significant has happened, and it helps them to remember it.' },
        { q: 'Are traditional ceremonies becoming less popular?', a: 'In some places, yes, because people prefer simpler and more personal events. But many still value traditions, especially for family occasions, so I think they will survive in adapted forms.' },
        { q: 'Should the government spend public money on national celebrations?', a: 'A moderate amount can be justified, as celebrations strengthen national unity and culture. But expenses should be reasonable and transparent, particularly when other needs are pressing.' }
      ]
    }
  });

  /* ===== 42 · Al-Karim ===== */
  put(42, {
    listening: {
      title: 'Al-Karim — hospitality customs', spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за деталями проекта о гостеприимстве и поправками.',
      context: 'Part 3. Две студентки и преподаватель обсуждают проект о традициях гостеприимства.', genders: { Tutor: 'm', Assel: 'f', Laura: 'f' },
      script: `Tutor: Let us discuss your project on hospitality traditions. Assel, what have you found?
Assel: My grandmother told me that in her village, a guest is received with tea and bread at the door, before any question is asked. The best seat is offered to the guest, and the host eats last.
Tutor: Interesting. Laura?
Laura: I interviewed a family from another region. They say that a guest should never leave without food, so they always pack something for the road.
Tutor: Have you noticed any differences between generations?
Laura: Yes. Young people say that they would like to receive guests, but they are busy and the flats are small.
Assel: And hosting is expensive, so many families now meet in cafes.
Tutor: A valid observation. How many interviews have you recorded?
Assel: Eight. At first we planned twelve, but it was difficult to arrange.
Tutor: Eight is sufficient, provided that they are varied. What about the structure of the report?
Laura: Three parts: traditions, changes and a comparison with other countries.
Tutor: Good. Add a short section on what generosity means, not only in food but in time and attention.
Assel: When is it due?
Tutor: On the seventeenth of March. It was the fourteenth, but I have extended it, as the library is closed on the weekend.
Laura: Thank you. We will send a draft next Monday.`,
      notesTitle: 'Hospitality project',
      notes: [
        { pre: 'A guest is first offered tea and', post: 'at the door.', a: ['bread'], e: 'Чай и хлеб у порога.' },
        { pre: 'The host eats', post: '.', a: ['last'], e: 'Хозяин ест последним.' },
        { pre: 'Number of interviews recorded:', post: '', a: ['8', 'eight'], e: 'Восемь, хотя планировали двенадцать.' },
        { pre: 'The report has', post: 'parts.', a: ['3', 'three'], e: 'Три части.' },
        { pre: 'Deadline: March', post: '', a: ['17', '17th', 'seventeenth', 'the 17th'], e: 'Срок продлён с 14-го на 17-е.' }
      ],
      mc: [
        { q: 'What do young people say about hosting?', opts: ['they are busy and the flats are small', 'they dislike guests', 'they prefer to cook alone'], a: 'A', e: 'Заняты и квартиры маленькие.' },
        { q: 'Why do many families meet in cafes now?', opts: ['hosting is expensive', 'cafes are older', 'guests prefer them'], a: 'A', e: 'Принимать дома дорого.' },
        { q: 'What does the tutor ask them to add?', opts: ['a section on what generosity means', 'a map', 'a glossary'], a: 'A', e: 'Раздел о том, что такое щедрость — время и внимание.' }
      ]
    },
    writing: {
      title: 'Al-Karim — hospitality today', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о ценности гостеприимства в современном мире.',
      task2: {
        prompt: 'Some people say that traditional hospitality is disappearing in modern society and that this is a loss. To what extent do you agree or disagree?',
        keywords: ['hospitality', 'guests', 'tradition', 'modern', 'society', 'generosity', 'time', 'community', 'neighbours', 'loneliness', 'changes', 'values'],
        model: `Traditional hospitality, in which guests are welcomed warmly and generously into the home, is often said to be vanishing. I agree that it has weakened in many places and that this represents a real loss, though its spirit can be preserved in new forms.

The decline has identifiable causes. Many people now live in small apartments, work long hours and spend much of their time on screens, so they have fewer chances and less energy to receive visitors. Hosting is also expensive, and social media sometimes creates pressure to offer a perfect meal and a perfect house, which discourages spontaneous invitations. As a result, meetings are moved to cafes and restaurants, where interaction is more commercial and less personal.

This change is a loss because hospitality has benefits that are difficult to replace. Sharing a table builds trust and reveals aspects of people that public places do not. It protects against loneliness, particularly for the elderly and for newcomers to a city, who may depend on invitations to feel part of a community. Hospitality also teaches children generosity and respect by example.

Nevertheless, hospitality has not disappeared; it has changed. People invite colleagues for tea, welcome visitors with simple food instead of lavish feasts and open their homes to international students. What matters is not the size of the meal but the attitude of welcome. Communities can encourage this by organising shared meals and neighbourhood events.

In conclusion, traditional hospitality has declined for practical reasons, and its loss is regrettable, but it can be renewed through simple, sincere forms of welcome.`,
        analysis: [
          'Task Response: градуированная позиция (согласен, но дух сохраняется), причины и последствия.',
          'Аргументация: причины спада → почему потеря → как обновить.',
          'Cohesion: As a result / Nevertheless; повтор ключевых слов hospitality и welcome.',
          'Lexical Resource: lavish, spontaneous, newcomers, commercial; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Karim — hosting guests', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о приёме гостей и обсуждение традиций гостеприимства.',
      keywords: ['guests', 'host', 'visit', 'dinner', 'welcome', 'generous', 'treat', 'prepare', 'family', 'tradition'],
      part1: [
        { q: 'Do you often have guests at your home?', a: 'Fairly often, maybe two or three times a month. I enjoy cooking for friends, and our flat becomes lively.' },
        { q: 'What do you usually offer guests?', a: 'Tea, sweets and a main dish. In my culture, you should not let a guest leave hungry.' },
        { q: 'Do you like visiting other people?', a: 'Yes, as long as the visit is not too long. I always bring a small gift, like fruit or cake.' },
        { q: 'Is hospitality important in your country?', a: 'Very much. Guests are considered a blessing, and refusing hospitality can even seem impolite.' }
      ],
      part2: {
        topic: 'Describe a time when you had guests at your home.', bullets: ['who the guests were', 'why they came', 'what you did for them', 'and explain how you felt about the visit.'],
        plan: [{ h: '1. Who', t: 'My former classmates from abroad.' }, { h: '2. Why', t: 'Visiting the city for a conference.' }, { h: '3. What did', t: 'Cooked national dishes, showed the city.' }, { h: '4. Feelings', t: 'Tired but happy; strong friendship.' }],
        model: `I would like to describe a time when I hosted three old classmates from university who came to visit my city last spring.

They were attending a conference and had booked a hotel, but I insisted that they should come to my home for dinner on the first evening. I was delighted, because we had not seen each other for almost seven years, and I wanted to give them a real Kazakh welcome.

I spent the day before shopping and cooking. I prepared beshbarmak, which takes a long time, as well as fresh salads, baked bread and a sweet dish. I cleaned the apartment and borrowed extra chairs from a neighbour. When they arrived, I greeted them at the door with tea and sweets, and we sat at the table until midnight, remembering our student days. The next day, I took them around the city, and we visited the museum and the river embankment.

I felt tired but very happy. One of them said that it was the best meal he had eaten in years, and another said that he felt as though he had never been away. I realised that hosting is less about the food and more about the feeling of being welcomed and cared for.

Since then, we keep in touch more regularly, and I am planning to visit them next year. The experience reminded me why hospitality is such a treasured tradition.`
      },
      part3: [
        { q: 'Why is hospitality considered important in many cultures?', a: 'It expresses respect and builds trust. In places where travel was difficult, hosts were also responsible for the safety of guests, so hospitality was a practical necessity as well as a virtue.' },
        { q: 'Has modern life changed the way people welcome guests?', a: 'Yes. People are busier and homes are smaller, so visits are shorter and more planned. However, the desire to be warm and generous is still strong.' },
        { q: 'Should tourists adapt to local customs?', a: 'To a reasonable extent, yes. Respecting customs shows consideration to hosts. Hosts, in turn, should be tolerant when visitors make honest mistakes.' }
      ]
    }
  });

  /* ===== 43 · Ar-Raqib ===== */
  put(43, {
    listening: {
      title: 'Ar-Raqib — lifeguard training', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за инструкцией тренера: времена, числа и порядок действий.',
      context: 'Part 2. Тренер объясняет задачи спасателя на бассейне.', genders: { Trainer: 'm' },
      script: `Trainer: Welcome to the lifeguard course. My name is Daniyar, and I will be your trainer. A lifeguard is, above all, a person who watches carefully.
Trainer: The course lasts five days. We begin at eight o\'clock, not nine, because we have to be in the pool before the public arrives. Each day is divided into two parts: theory in the morning and practice in the afternoon.
Trainer: The first rule of supervision is scanning. You do not stare at one point; you scan the entire pool in a repeated pattern. Research on lifeguards suggests that attention drops after about twenty minutes, so we rotate positions every twenty minutes.
Trainer: Second, you must recognise the signs of difficulty. A person in trouble does not usually shout or wave, but stays upright in the water with their head back and arms pressing down. This is quiet and can be easy to miss.
Trainer: Third, you must react quickly. The target is to reach any point of the pool within twenty seconds, and to start first aid within one minute.
Trainer: But watching is not only about rescue; it is about prevention. A good lifeguard speaks to children who run on the wet floor and explains the rules in a friendly way. Supervision should be attentive but respectful, not harsh.
Trainer: Finally, the fee is two hundred and forty pounds, and the final test is on Friday at two o\'clock. You will need a swimsuit, a towel and a bottle of water.`,
      notesTitle: 'Lifeguard course',
      notes: [
        { pre: 'Course length:', post: 'days', a: ['5', 'five'], e: 'Пять дней.' },
        { pre: 'Start time:', post: 'o\'clock', a: ['8', 'eight', '8:00'], e: 'Начало в восемь, а не в девять.' },
        { pre: 'Positions are rotated every', post: 'minutes', a: ['20', 'twenty'], e: 'Внимание падает через ~20 минут.' },
        { pre: 'Reach any point within', post: 'seconds', a: ['20', 'twenty'], e: 'Двадцать секунд.' },
        { pre: 'Course fee: £', post: '', a: ['240', 'two hundred and forty', 'two hundred forty'], e: 'Двести сорок фунтов.' }
      ],
      mc: [
        { q: 'How does a person in trouble usually behave?', opts: ['stays upright with the head back', 'shouts loudly', 'waves both arms'], a: 'A', e: 'Обычно молча, вертикально, голова назад.' },
        { q: 'How should supervision be carried out?', opts: ['attentively but respectfully', 'harshly', 'from a distance only'], a: 'A', e: 'Внимательно, но уважительно.' },
        { q: 'When is the final test?', opts: ['Friday at two', 'Thursday at ten', 'Monday at nine'], a: 'A', e: 'В пятницу в два часа.' }
      ]
    },
    writing: {
      title: 'Ar-Raqib — monitoring children online', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о родительском контроле в интернете.',
      task2: {
        prompt: 'Some people believe that parents should closely monitor what their children do online. To what extent do you agree or disagree?',
        keywords: ['parents', 'children', 'monitor', 'online', 'internet', 'privacy', 'trust', 'safety', 'risks', 'communication', 'age', 'independence'],
        model: `The internet offers children enormous opportunities, but also serious risks. I agree that parents should supervise their children\'s online activity, particularly when they are young, but I believe that supervision should be based on communication and gradually reduced, rather than on constant surveillance.

The case for monitoring is strong for younger children. They may encounter inappropriate content, strangers with harmful intentions or online bullying, and they often lack the judgement to recognise danger. By knowing what their children do, parents can intervene early, set time limits and protect them from threats. Technical tools, such as filters and age settings, can also support this protection.

However, excessive control has disadvantages. Teenagers in particular need privacy and independence, and if they discover that every message is being read, they may feel distrusted and look for ways to hide their activity. This can damage the relationship and make children less likely to ask for help when something goes wrong. Moreover, a child who is never allowed to make decisions online does not learn to evaluate information or to behave responsibly.

A balanced strategy would therefore be the most effective. Parents can begin with close supervision for young children, explaining the reasons for rules, and then extend freedom as the child shows maturity. Regular conversations about what the child enjoys and what worries him or her are more valuable than secret checking. Schools can support this process through lessons on digital safety.

In conclusion, parental monitoring is necessary for protection, but it should be age-appropriate, transparent and combined with trust and education.`,
        analysis: [
          'Task Response: градуированная позиция («агрессивный контроль не нужен») и логичное развитие.',
          'Аргументация: защита младших → риск недоверия подростков → переходная стратегия.',
          'Cohesion: However / Moreover / therefore; ключевые слова supervision и trust.',
          'Lexical Resource: surveillance, inappropriate, maturity, transparent; грамматика: сложные придаточные, условные.'
        ]
      }
    },
    speaking: {
      title: 'Ar-Raqib — someone who looks after others', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание человека, заботящегося о других, и обсуждение надзора и ответственности.',
      keywords: ['responsible', 'look after', 'watch', 'care', 'safe', 'attention', 'children', 'protect', 'alert', 'supervise'],
      part1: [
        { q: 'Have you ever looked after someone else\'s child?', a: 'Yes, my cousin\'s son for a weekend. It taught me how much attention is needed, even for a few hours.' },
        { q: 'Are you a careful person?', a: 'I think so. I check details twice, and I try to notice problems before they grow.' },
        { q: 'Do you think children need constant supervision?', a: 'Young children, yes. As they grow older, they need more freedom, but with clear limits.' },
        { q: 'Who looked after you when you were small?', a: 'Mostly my grandmother, who watched me with great attention, though she let me play freely in the yard.' }
      ],
      part2: {
        topic: 'Describe a person who looks after others as part of their work.', bullets: ['who the person is', 'what their job is', 'how they look after others', 'and explain why this job is important.'],
        plan: [{ h: '1. Who', t: 'A school nurse, Mrs Raushan.' }, { h: '2. Job', t: 'Health care for 600 students.' }, { h: '3. How', t: 'Notices small signs, calm, records.' }, { h: '4. Importance', t: 'Prevents problems, gives security.' }],
        model: `The person I would like to describe is Mrs Raushan, the nurse at the school where I work, who is responsible for the health of more than six hundred students.

Her job includes many tasks. She gives first aid for small injuries, checks students who feel unwell, keeps medical records and works with families when a child has a long-term condition. She also gives short lessons on hygiene and healthy habits.

What impresses me is the way she looks after the children. She notices small signs that others miss: a child who often asks to go to the nurse may be worried about something at home, and a student who stops eating lunch may be having trouble with friends. She keeps calm in emergencies, and she speaks to children in a quiet, friendly voice, so that they do not feel frightened. At the same time, she is very systematic: every visit is recorded, and she alerts teachers when she sees a pattern.

I think this job is important for several reasons. First, it prevents small problems from becoming serious. Second, it gives children and parents a sense of security, because they know that someone is paying attention. And third, she often becomes the first person to whom students turn with personal troubles.

I admire her because she combines vigilance with warmth. She watches carefully, but she never makes the children feel that they are being watched, and I think this is the ideal of caring supervision.`
      },
      part3: [
        { q: 'What qualities are needed in jobs that involve looking after others?', a: 'Patience, attention to detail and empathy are essential. Such workers also need to stay calm under pressure, because they sometimes face emergencies.' },
        { q: 'Are such jobs properly appreciated in society?', a: 'Not always. Carers, nurses and teachers are often paid less than their social value deserves. Better pay and recognition would attract more people to these professions.' },
        { q: 'Does technology help people to look after others?', a: 'Yes, for example through health monitors and emergency alerts. But technology cannot replace human attention and compassion; it should support them.' }
      ]
    }
  });

  /* ===== 44 · Al-Mujib ===== */
  put(44, {
    listening: {
      title: 'Al-Mujib — a customer service call', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных обращения: номер заказа, адрес, даты.',
      context: 'Part 1. Клиент звонит в службу поддержки из-за задержки заказа.', genders: { Agent: 'f', Timur: 'm' },
      script: `Agent: Customer service, good afternoon. How can I help?
Timur: Good afternoon. I ordered a laptop two weeks ago, and it has not arrived.
Agent: I am sorry about that. May I have your name?
Timur: Timur Baimukhambetov. B-A-I-M-U-K-H-A-M-B-E-T-O-V.
Agent: Thank you. And your order number?
Timur: It is 5-4-7-2-1. No, sorry, 5-4-7-1-2.
Agent: One moment. Yes, I can see the order. It was shipped on the third, but it has been delayed at our regional depot.
Timur: What is the new delivery date?
Agent: Thursday the twelfth. I apologise for the delay.
Timur: Will anyone be at the address? It is flat 18, 25 Abay Street.
Agent: The courier will call you an hour before arrival. If nobody answers, the parcel will be taken to the nearest pick-up point.
Timur: Can I get any compensation?
Agent: Yes. Because of the delay, I can offer a discount of ten per cent on your next order, or free express delivery.
Timur: I will take the discount.
Agent: Noted. You will receive an email confirmation within the hour, and if there is no email, call me back. My name is Aliya.
Timur: Thank you for answering so quickly.
Agent: Thank you for your patience.`,
      notesTitle: 'Order enquiry',
      notes: [
        { pre: 'Surname:', post: '', a: ['Baimukhambetov'], e: 'Фамилия — Baimukhambetov.' },
        { pre: 'Order number:', post: '', a: ['54712', '5 4 7 1 2'], e: 'Сначала 54721, затем поправка — 54712.' },
        { pre: 'New delivery date: Thursday the', post: '', a: ['12', '12th', 'twelfth', 'the 12th'], e: 'Четверг, 12-е.' },
        { pre: 'Address: flat', post: ', 25 Abay Street', a: ['18', 'eighteen'], e: 'Квартира 18.' },
        { pre: 'Discount offered:', post: 'per cent', a: ['10', 'ten'], e: 'Десять процентов на следующий заказ.' }
      ],
      mc: [
        { q: 'Where was the parcel delayed?', opts: ['at the regional depot', 'at customs', 'at the courier\'s home'], a: 'A', e: 'На региональном складе.' },
        { q: 'What will happen if nobody answers the courier?', opts: ['the parcel goes to a pick-up point', 'the order is cancelled', 'the parcel is returned to the sender'], a: 'A', e: 'Посылку отвезут в ближайший пункт выдачи.' },
        { q: 'What does Timur choose as compensation?', opts: ['a discount', 'free express delivery', 'a refund'], a: 'A', e: 'Скидку.' }
      ]
    },
    writing: {
      title: 'Al-Mujib — automated customer service', spec: 'Writing · Task 2 Advantages/Disadvantages · 40 минут · минимум 250 слов',
      takeaway: 'Оценка автоматизации клиентской поддержки.',
      task2: {
        prompt: 'Many companies now use automated systems instead of people to answer customer questions. Do the advantages of this development outweigh the disadvantages?',
        keywords: ['automated', 'customer service', 'companies', 'questions', 'speed', 'cost', 'human', 'complaints', 'empathy', 'availability', 'technology', 'satisfaction'],
        model: `Automated systems, such as chatbots and voice menus, have become a common way for companies to answer customers. On balance, I believe that the advantages are greater, provided that customers can easily reach a human being when they need one.

The main advantage is availability and speed. An automated system can respond at any hour and deal with thousands of enquiries simultaneously, so customers do not have to wait in a queue for simple matters such as checking the status of an order or resetting a password. This is also cheaper for companies, and the savings can be used to improve products or to reduce prices. Moreover, automated answers are consistent: they do not depend on the mood or experience of an individual employee.

However, there are real disadvantages. Systems can fail to understand unusual or complex problems, leaving customers trapped in a loop of irrelevant answers. This is particularly frustrating when the issue is urgent or emotional, such as a lost payment or a medical appointment. Elderly people and those who are unfamiliar with technology may find such systems difficult. In addition, automation reduces employment opportunities in customer service.

These problems can be reduced with sensible design. Companies should let automated tools handle routine questions but provide a clear and quick route to a person for anything unusual. Regular checks of customer satisfaction can reveal where the system is failing.

In conclusion, automated customer service offers speed, availability and lower costs, and its weaknesses can be limited if human assistance remains easy to reach.`,
        analysis: [
          'Task Response: вопрос «outweigh» требует итоговой оценки — она дана с условием (доступ к человеку).',
          'Баланс: преимущества (доступность, скорость, единообразие) и недостатки (непонимание, пожилые клиенты, рабочие места).',
          'Cohesion: Moreover / However / In addition; переход к решениям.',
          'Lexical Resource: simultaneously, consistent, trapped in a loop, routine; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Mujib — quick and helpful response', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о случае, когда на просьбу ответили быстро, и обсуждение обслуживания.',
      keywords: ['response', 'quick', 'help', 'service', 'reply', 'request', 'answer', 'helpful', 'polite', 'solved'],
      part1: [
        { q: 'Do you reply to messages quickly?', a: 'Usually within a few hours. I do not like leaving people waiting, but I also do not want to be constantly on my phone.' },
        { q: 'Have you ever complained about a product or service?', a: 'Once, about a delayed delivery. I wrote politely and explained the problem, and they solved it in two days.' },
        { q: 'Do you prefer to ask for help in person or online?', a: 'In person for complicated matters, because explaining face to face is easier. For simple questions, online is faster.' },
        { q: 'How do you feel when people ignore your messages?', a: 'A little disappointed, though I try to remember that they may be busy.' }
      ],
      part2: {
        topic: 'Describe a time when someone responded quickly and helpfully to your request.', bullets: ['who the person was', 'what you asked for', 'how they responded', 'and explain how you felt about it.'],
        plan: [{ h: '1. Who', t: 'A bank employee, Mr Askhat.' }, { h: '2. Request', t: 'Lost card while travelling.' }, { h: '3. Response', t: 'Blocked card, arranged emergency cash.' }, { h: '4. Feelings', t: 'Relieved, grateful.' }],
        model: `I would like to describe a time when a bank employee responded quickly and helpfully when I lost my card while travelling.

It happened last summer, on a trip to another city. I realised in the evening that my wallet was missing, and with it my bank card and some cash. I was in an unfamiliar place, and I felt a rush of panic because it was late and I had no way to pay for my hotel.

I called the bank\'s emergency line, and a man named Askhat answered after only two rings. He spoke calmly and asked me a few clear questions. Within five minutes, he had blocked the card to prevent any misuse. Then he explained the options and arranged for an emergency cash transfer to a nearby branch, which would open the next morning, and he sent me the address by message. He also told me how to order a new card, which would arrive within three days.

I felt enormous relief. Before the call, my situation had seemed almost hopeless, and afterwards I had a clear plan. What I appreciated most was his tone: he did not rush or sound bored, but listened and showed that he understood my worry.

The experience showed me how much a prompt and kind response can matter. Since then, I try to answer people\'s requests as quickly as I can, particularly when they seem anxious.`
      },
      part3: [
        { q: 'Why is a quick response important in customer service?', a: 'It shows respect for the customer\'s time and prevents small problems from growing. A fast and clear answer can turn an annoyed customer into a loyal one.' },
        { q: 'Do you think people expect instant answers too much nowadays?', a: 'Often, yes, because technology has made quick replies possible. But instant answers are not always better answers, and thoughtful responses sometimes need time.' },
        { q: 'How can companies train employees to respond well?', a: 'By teaching listening skills, giving them authority to solve problems and rewarding good service. Employees who feel valued usually treat customers better.' }
      ]
    }
  });

  /* ===== 45 · Al-Wasi' ===== */
  put(45, {
    listening: {
      title: "Al-Wasi' — designing an open library", spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за размерами, числами и решениями проекта.',
      context: 'Part 3. Студенты-архитекторы и преподаватель обсуждают проект просторной библиотеки.', genders: { Lecturer: 'f', Rinat: 'm', Zarina: 'f' },
      script: `Lecturer: Let us review your design for the community library. Rinat, what is your main idea?
Rinat: Space. People should feel that the library is open to everyone, so I have made the entrance very wide, about six metres.
Lecturer: Not five?
Rinat: Six, after the changes. The reading hall is about four hundred square metres, with high windows to bring in natural light.
Zarina: And my idea is to make the space flexible. The shelves have wheels, so that the hall can be cleared for events, such as lectures or exhibitions.
Lecturer: That is a practical solution. How many seats do you plan?
Zarina: Two hundred in the main hall, plus forty in the children\'s corner.
Lecturer: Have you considered accessibility?
Rinat: Yes, there is a ramp at the main entrance and a lift to the second floor. The corridors are two metres wide, so that wheelchairs can pass easily.
Lecturer: Excellent. And what about quiet areas?
Zarina: Six small rooms for study and group work, each with a glass wall.
Lecturer: Good. A spacious building should not only be large; it should make people feel welcome. Think about warm lighting and comfortable chairs.
Rinat: We will add a cafe near the entrance.
Lecturer: Fine. The final models are due on the fourth of December. Please bring both the drawings and the physical model.`,
      notesTitle: 'Library design',
      notes: [
        { pre: 'Width of the entrance:', post: 'metres', a: ['6', 'six'], e: 'Шесть метров (не пять).' },
        { pre: 'Area of the reading hall:', post: 'square metres', a: ['400', 'four hundred'], e: 'Около 400 кв. м.' },
        { pre: 'Seats in the children\'s corner:', post: '', a: ['40', 'forty'], e: 'Сорок мест в детском уголке.' },
        { pre: 'Number of study rooms:', post: '', a: ['6', 'six'], e: 'Шесть небольших комнат.' },
        { pre: 'Final models due: December', post: '', a: ['4', '4th', 'fourth', 'the 4th'], e: 'Срок — 4 декабря.' }
      ],
      mc: [
        { q: 'Why are the shelves on wheels?', opts: ['to clear the hall for events', 'to move books to storage', 'to change the colour scheme'], a: 'A', e: 'Чтобы освобождать зал для мероприятий.' },
        { q: 'What provides access to the second floor?', opts: ['a lift', 'a spiral staircase only', 'an escalator'], a: 'A', e: 'Лифт и пандус.' },
        { q: 'What does the lecturer say a spacious building should do?', opts: ['make people feel welcome', 'be as large as possible', 'be silent'], a: 'A', e: 'Просторное здание должно создавать ощущение приёма.' }
      ]
    },
    writing: {
      title: "Al-Wasi' — open-mindedness in education", spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о воспитании открытости к разным взглядам.',
      task2: {
        prompt: 'Some people think that schools should teach students to consider many different points of view, even those that they disagree with. To what extent do you agree or disagree?',
        keywords: ['schools', 'students', 'points of view', 'open-minded', 'critical thinking', 'debate', 'tolerance', 'opinions', 'discussion', 'values', 'respect', 'bias'],
        model: `Education should prepare young people to live in diverse societies, and I strongly agree that schools should teach students to consider different points of view, including those they dislike. This approach develops critical thinking and mutual respect, although it must be guided carefully.

The first reason is intellectual. A student who has only heard one side of an issue cannot judge whether it is correct. Studying opposing arguments forces students to examine evidence, to identify weak reasoning and, when necessary, to strengthen their own position. Many scientific advances have come from people willing to question accepted ideas. In this sense, openness to alternatives is a basic scholarly skill.

The second reason is social. In classrooms and workplaces, people with different backgrounds must cooperate. Students who have learned to listen to views they do not share are more likely to remain calm in disagreements and to find compromises. This lowers the risk of prejudice, since understanding the reasoning behind an opinion makes it harder to dismiss the people who hold it.

However, openness has limits. Considering a view does not mean accepting it, and schools should not give equal weight to claims that are demonstrably false or that promote hatred. Teachers must therefore guide discussions with clear rules, based on evidence and respect for persons.

A good method is structured debate, in which students sometimes defend positions they do not hold. This practice trains empathy and argument skills at the same time.

In conclusion, schools should teach students to examine diverse viewpoints, because it builds critical thinking and tolerance, provided that discussions are well organised and based on evidence.`,
        analysis: [
          'Task Response: сильная позиция («strongly agree») с оговоркой о границах; примеры форм обучения.',
          'Аргументация: интеллектуальная и социальная польза; ограничение — доказательность и уважение к людям.',
          'Cohesion: The first reason / The second reason / However; ключевое слово openness.',
          'Lexical Resource: demonstrably, prejudice, structured debate, compromise; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: "Al-Wasi' — a spacious place I like", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание просторного места и обсуждение пространства и открытости.',
      keywords: ['space', 'spacious', 'wide', 'open', 'bright', 'room', 'comfortable', 'light', 'calm', 'large'],
      part1: [
        { q: 'Do you prefer small or large rooms?', a: 'Large, bright rooms. I feel more relaxed and can think more clearly when there is space around me.' },
        { q: 'Is there much open space where you live?', a: 'Quite a lot. Our district has wide streets and a big park nearby, which is rare in the centre of the city.' },
        { q: 'Do you like having a lot of people around?', a: 'In moderation. I enjoy company, but I also need quiet time to recover.' },
        { q: 'How would you describe an open-minded person?', a: 'Someone who listens before judging and is willing to change their mind when presented with good arguments.' }
      ],
      part2: {
        topic: 'Describe a large, open place that you like.', bullets: ['where it is', 'what it looks like', 'what you do there', 'and explain why you like it.'],
        plan: [{ h: '1. Where', t: 'The steppe near my grandparents\' village.' }, { h: '2. Look', t: 'Endless horizon, grass, huge sky.' }, { h: '3. Activities', t: 'Riding, walking, watching sunsets.' }, { h: '4. Why', t: 'Freedom, quiet, perspective.' }],
        model: `The large, open place I would like to describe is the steppe near my grandparents\' village in the north of Kazakhstan, where I spent most of my summers as a child.

When you stand there, the first thing you notice is the horizon, which seems endless. The land is almost completely flat, covered with tall grass that moves in the wind like waves on a sea, and above it there is an enormous sky. In June, the steppe is dotted with wild flowers, and in the evening, the sunset colours the whole sky red and gold.

When I visit, I usually walk for hours or ride a horse that belongs to my uncle. Sometimes I simply sit on a hill and watch the clouds, or I look for small things, such as birds\' nests or interesting stones. In the evening, the family sits outside, and we drink tea and listen to the sounds of the night.

I like this place for several reasons. Firstly, there is a sense of freedom: nothing blocks my view, and my thoughts seem to expand as well. Secondly, it is extraordinarily quiet, which is a big contrast with city life. And thirdly, it gives me perspective. When you see how far the land extends, your daily problems seem less important.

Every time I return to the city, I bring with me a feeling of calm that lasts for several days. For me, the steppe is the best example of a space that nourishes the mind.`
      },
      part3: [
        { q: 'How does the environment affect people\'s mood?', a: 'Strongly. Spacious, bright surroundings tend to make people feel calm, while crowded or dark places can increase stress. This is why architects pay attention to space and light.' },
        { q: 'Why is it difficult for some people to accept different opinions?', a: 'Because opinions are often tied to identity, and disagreement feels like a personal attack. Exposure to varied views from an early age can make people more flexible.' },
        { q: 'Should cities have more open spaces?', a: 'Definitely. Parks and squares improve health, give people a place to meet and reduce pollution. Even small green areas make a difference.' }
      ]
    }
  });

  /* ===== 46 · Al-Hakim ===== */
  put(46, {
    listening: {
      title: 'Al-Hakim — wisdom and intelligence', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о мудрости: структура, числа и определения.',
      context: 'Part 4. Лекция о различии между умом и мудростью.', genders: { Lecturer: 'm' },
      script: `Lecturer: Good morning. Today we ask a classic question: is wisdom the same as intelligence? The Arabic word hikma, from the root h-k-m, the root of the name Al-Hakim, is usually translated as wisdom. A classical definition says that wisdom is putting each thing in its proper place.
Lecturer: Intelligence usually means the ability to learn and solve problems. It can be measured by tests. Wisdom is different. It involves good judgement about what matters, a sense of timing and an awareness of consequences. A very intelligent person can still make foolish decisions.
Lecturer: Researchers who study wisdom often list several components. One: knowledge of life and its uncertainties. Two: emotional balance. Three: the ability to see a situation from several perspectives. And four: a concern for the common good, not only for personal benefit.
Lecturer: Can wisdom be learned? Most scholars think so, though slowly. Experience helps, but only if a person reflects on it. Two people can have twenty years of experience, but one may have repeated the same year twenty times.
Lecturer: How do we develop it? I suggest three habits. First, before a decision, ask: what is the purpose, and what will be the consequence in five years? Second, seek the advice of older people. Third, read biographies and history, as they provide experience at second hand.
Lecturer: For next week, please interview one person whom you consider wise, and write a half-page summary. It is due on Monday, not Friday.`,
      notesTitle: 'Wisdom',
      notes: [
        { pre: 'Wisdom is putting each thing in its proper', post: '', a: ['place'], e: 'Мудрость — ставить каждую вещь на своё место.' },
        { pre: 'Number of components listed:', post: '', a: ['4', 'four'], e: 'Четыре компонента.' },
        { pre: 'Concern for the common', post: '', a: ['good'], e: 'Забота об общем благе.' },
        { pre: 'Ask what will be the consequence in', post: 'years', a: ['5', 'five'], e: 'Через пять лет.' },
        { pre: 'Interview summary due on', post: '', a: ['Monday'], e: 'К понедельнику.' }
      ],
      mc: [
        { q: 'What can be measured by tests, according to the lecturer?', opts: ['intelligence', 'wisdom', 'kindness'], a: 'A', e: 'Интеллект можно измерять тестами.' },
        { q: 'When does experience help to develop wisdom?', opts: ['when a person reflects on it', 'when it lasts twenty years', 'when it is in one job'], a: 'A', e: 'Только если человек размышляет над опытом.' },
        { q: 'Why does the lecturer recommend biographies?', opts: ['they provide experience at second hand', 'they are short', 'they are easy to find'], a: 'A', e: 'Они дают опыт «из вторых рук».' }
      ]
    },
    writing: {
      title: 'Al-Hakim — wisdom or intelligence', spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение ума и мудрости, обоснованный вывод.',
      task2: {
        prompt: 'Some people think that intelligence is the most important quality for success in life. Others believe that wisdom is more important. Discuss both views and give your own opinion.',
        keywords: ['intelligence', 'wisdom', 'success', 'judgement', 'decisions', 'experience', 'knowledge', 'character', 'problems', 'learning', 'emotions', 'consequences'],
        model: `People often assume that intelligent individuals will succeed, yet history provides many examples of brilliant people who made poor decisions. Both qualities matter, but I believe that wisdom is ultimately more important, since it determines how intelligence is used.

Supporters of intelligence stress that it gives people the ability to learn quickly, to analyse complex information and to solve difficult problems. In science, medicine and technology, high intellectual ability is essential, and in education, it usually leads to higher achievement. A person with strong reasoning skills can adapt to new situations and acquire knowledge in almost any field.

However, wisdom has advantages that intelligence alone does not provide. It involves judgement about what is worth doing, an awareness of consequences and the emotional balance to act calmly under pressure. A wise person knows when to speak and when to remain silent, how to treat others and which goals are worth pursuing. Many serious errors, in business as well as in politics, have been made by clever people who ignored long-term effects or overestimated their own certainty.

In addition, wisdom can be developed through reflection and experience, while intelligence is largely fixed. A person who regularly reviews his mistakes, listens to advice and considers other perspectives becomes wiser over time.

Nevertheless, wisdom without knowledge is limited, and the best results come from the combination of the two: intelligence supplies the tools, wisdom directs their use.

In conclusion, intelligence is valuable, but wisdom is more important for a successful and responsible life, as it gives intelligence its direction.`,
        analysis: [
          'Task Response: обе позиции раскрыты, позиция («мудрость важнее, они дополняют друг друга») ясна.',
          'Аргументация: примеры ошибок умных людей, развитие мудрости рефлексией; оговорка о знании.',
          'Cohesion: However / In addition / Nevertheless; ключевое различие «tools / direction».',
          'Lexical Resource: judgement, adapt, overestimated, reflection; грамматика: сложные придаточные.'
        ]
      }
    },
    speaking: {
      title: 'Al-Hakim — a wise person I know', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание мудрого человека и обсуждение мудрости и жизненного опыта.',
      keywords: ['wise', 'wisdom', 'advice', 'experience', 'calm', 'listen', 'decision', 'elder', 'lesson', 'thoughtful'],
      part1: [
        { q: 'Who do you go to for advice?', a: 'My father or my aunt. They have seen a lot of life and give advice that is practical and calm.' },
        { q: 'Do you think that getting older makes people wiser?', a: 'Only if they learn from their experiences. Age gives the opportunity to become wiser but does not guarantee it.' },
        { q: 'Do you like reading proverbs?', a: 'Very much. Kazakh proverbs are short but contain a lot of life experience.' },
        { q: 'Do you make decisions quickly?', a: 'Small ones, yes. For serious matters, I take time and ask myself what the consequences might be.' }
      ],
      part2: {
        topic: 'Describe a wise person you know.', bullets: ['who the person is', 'how you know them', 'what makes them wise', 'and explain what you have learned from them.'],
        plan: [{ h: '1. Who', t: 'My aunt Gulnara, a retired doctor.' }, { h: '2. How known', t: 'Relative; I lived with her as a student.' }, { h: '3. Wise because', t: 'Calm, listens, sees many sides.' }, { h: '4. Learned', t: 'Patience, think of consequences.' }],
        model: `The wise person I would like to describe is my aunt Gulnara, a retired doctor in her late sixties, who is my mother\'s older sister.

I know her very well because I lived in her flat for two years when I was a university student. During that time, I saw how she dealt with a great variety of people and problems. Neighbours often came to her for advice, and she never seemed to be in a hurry.

What makes her wise is a combination of qualities. First, she listens carefully. When someone tells her about a problem, she lets them finish, asks a few questions and only then offers an opinion. Second, she looks at situations from many sides. She once said to me that every argument has at least two true stories. Third, she is calm: even in emergencies, which she had many as a doctor, she speaks in a quiet voice and thinks about what to do first.

I have learned several lessons from her. The most important is patience. When I was angry about a conflict with a friend, she advised me to wait three days before saying anything, and I discovered that most of my anger had disappeared. I also learned to ask myself what the consequences of a decision would be, not only in a week but in several years.

I try to follow her example, and I am grateful that she is part of my life.`
      },
      part3: [
        { q: 'What is the difference between knowledge and wisdom?', a: 'Knowledge is knowing facts, while wisdom is knowing how to use them well. A wise person understands what matters, has good judgement and considers consequences.' },
        { q: 'Should young people listen to the advice of older people?', a: 'Generally yes, as older people have seen different situations. But advice should be considered critically, since circumstances change.' },
        { q: 'Can schools teach wisdom?', a: 'Not directly, but they can encourage the habits that lead to it: critical thinking, discussion of dilemmas and reflection on experience. Stories and history are valuable tools.' }
      ]
    }
  });

  /* ===== 47 · Al-Wadud ===== */
  put(47, {
    listening: {
      title: 'Al-Wadud — organising a family reunion', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных мероприятия: фамилия, дата, число гостей, меню.',
      context: 'Part 1. Организатор заказывает банкет для семейной встречи.', genders: { Caterer: 'f', Marat: 'm' },
      script: `Caterer: Good morning, Warm Table Catering.
Marat: Good morning. I would like to order food for a family reunion.
Caterer: Certainly. May I take your name?
Marat: Marat Abdrakhmanov. A-B-D-R-A-K-H-M-A-N-O-V.
Caterer: Thank you. When is the event?
Marat: On Saturday the twenty-first of September, at one o\'clock.
Caterer: And how many people?
Marat: Sixty. No, sorry, sixty-five. My uncle has just told me that three more cousins are coming.
Caterer: Sixty-five. Will there be children?
Marat: Yes, about fifteen.
Caterer: We offer a special children\'s menu. For adults, there are three options: a traditional menu, a vegetarian menu, or a mixed menu.
Marat: A mixed menu, I think, with beshbarmak as the main dish.
Caterer: Very good. The price is twelve pounds per person, with a ten per cent discount for groups of more than fifty.
Marat: So about seven hundred pounds?
Caterer: Seven hundred and... let me calculate. Sixty-five times twelve is seven hundred and eighty. With the discount, seven hundred and two.
Marat: Perfect. Where will the event be held?
Caterer: At your location, you told me? A garden at 12 Birch Lane?
Marat: Yes, my grandparents\' house. They are the reason for the reunion: it is their fiftieth wedding anniversary.
Caterer: What a lovely occasion. We will deliver at noon.`,
      notesTitle: 'Family reunion',
      notes: [
        { pre: 'Surname:', post: '', a: ['Abdrakhmanov'], e: 'Фамилия — Abdrakhmanov.' },
        { pre: 'Date: Saturday the', post: 'of September', a: ['21', '21st', 'twenty-first', 'the 21st'], e: '21 сентября.' },
        { pre: 'Number of guests:', post: '', a: ['65', 'sixty-five', 'sixty five'], e: 'Сначала 60, затем 65.' },
        { pre: 'Price per person: £', post: '', a: ['12', 'twelve'], e: 'Двенадцать фунтов.' },
        { pre: 'Delivery time:', post: '', a: ['12', 'noon', '12:00', 'twelve'], e: 'Доставка в полдень.' }
      ],
      mc: [
        { q: 'What is the reason for the reunion?', opts: ['his grandparents\' fiftieth wedding anniversary', 'a birthday party', 'a graduation'], a: 'A', e: 'Пятидесятилетие свадьбы бабушки и дедушки.' },
        { q: 'Which menu does Marat choose?', opts: ['mixed', 'vegetarian', 'traditional only'], a: 'A', e: 'Смешанное меню с бешбармаком.' },
        { q: 'How many children are expected?', opts: ['about 15', 'about 5', 'about 30'], a: 'A', e: 'Около пятнадцати детей.' }
      ]
    },
    writing: {
      title: 'Al-Wadud — friendship in the digital age', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины ослабления личных связей и способы их укрепления.',
      task2: {
        prompt: 'Many people say that technology has weakened personal relationships with family and friends. What are the causes of this, and what can be done to strengthen close relationships?',
        keywords: ['technology', 'relationships', 'family', 'friends', 'phones', 'communication', 'time', 'attention', 'face-to-face', 'social media', 'habits', 'connection'],
        model: `Digital technology allows us to communicate with almost anyone, yet many people feel that their close relationships have become shallower. The causes are connected with attention and time, and the solutions require deliberate habits.

One cause is divided attention. When people use their phones during meals or conversations, the other person feels ignored, and the quality of interaction drops. A second cause is the replacement of quality by quantity: social media encourages brief reactions to many contacts, which can leave less time for deeper talks with a few close friends. Moreover, communication through messages lacks tone of voice and facial expression, and misunderstandings occur more easily. Finally, busy schedules and online entertainment reduce the number of shared activities in families.

Several measures can help. Families can establish simple rules, such as no phones at the table or a device-free hour in the evening, so that attention is given fully. Friends can arrange regular meetings, even if only monthly, and choose activities that do not involve screens, like walking or cooking together. People can also use technology deliberately, for example by calling a distant relative instead of only sending a message, or by sending a personal note to someone who is going through difficulty.

Schools and employers could contribute by promoting healthy digital habits and by allowing time for real conversation. Even small gestures, such as asking a friend how the day went and truly listening to the answer, can rebuild the warmth that busy lives tend to erode.

In conclusion, relationships weaken when technology divides attention and replaces depth with quantity, but they can be strengthened through clear boundaries, shared activities and sincere, personal communication.`,
        analysis: [
          'Task Response: четыре причины и три группы решений; структура зеркальна вопросу.',
          'Аргументация: механизм «разделённое внимание → чувство игнорирования»; практические правила.',
          'Cohesion: One cause / A second cause / Moreover / Finally; затем Several measures.',
          'Lexical Resource: divided attention, shallower, boundaries, deliberately; грамматика: сложные предложения.'
        ]
      }
    },
    speaking: {
      title: 'Al-Wadud — a close friend', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Описание близкого друга и обсуждение дружбы и привязанности.',
      keywords: ['friend', 'friendship', 'close', 'trust', 'fun', 'support', 'loyal', 'affection', 'memories', 'together'],
      part1: [
        { q: 'Do you spend much time with your friends?', a: 'As much as I can, usually at weekends. We take walks, have dinner together or just talk.' },
        { q: 'What makes a good friend?', a: 'Honesty, loyalty and a sense of humour. A good friend also knows when to listen and when to give advice.' },
        { q: 'Is it easy for you to make new friends?', a: 'It takes time, but I enjoy getting to know people. I prefer a few deep friendships to many superficial ones.' },
        { q: 'How do you show affection to your family?', a: 'By spending time with them and by small gestures, like calling my mother every day or cooking for my family.' }
      ],
      part2: {
        topic: 'Describe a close friend.', bullets: ['who the friend is', 'how you met', 'what you do together', 'and explain why the friendship is important to you.'],
        plan: [{ h: '1. Who', t: 'Madina, my friend since school.' }, { h: '2. How met', t: 'Same desk in Grade 5.' }, { h: '3. Together', t: 'Walks, cooking, book talks, trips.' }, { h: '4. Why important', t: 'Trust, support, shared memories.' }],
        model: `The close friend I would like to describe is Madina, whom I have known for more than twenty years.

We met in the fifth grade, when our teacher placed us at the same desk. At first we did not talk much, because I was shy and she was very serious, but within a few weeks we discovered that we both loved reading and we started to exchange books. Since then we have been inseparable, even though we went to different universities and now live in different parts of the city.

When we get together, we usually go for a long walk, and then we cook something at one of our flats. We talk about everything: work, family, books and our plans. Once a year we take a short trip together, and we have visited several small towns in the region. Even when we cannot meet, we call each other at least once a week.

The friendship is important to me for several reasons. First, I trust her completely; I know that anything I tell her will remain private. Second, she supports me in difficult times, without judging, and she also tells me honestly when she thinks I am wrong. Third, we share twenty years of memories, which creates a bond that is difficult to replace.

I believe that friendships like this need care, and so I try to show my appreciation regularly. For her last birthday, I wrote her a letter listing the things I value about her, and she told me that it made her cry.`
      },
      part3: [
        { q: 'Has the way people make friends changed?', a: 'Yes, much of it is now online, so people can find others with similar interests across the world. But real, deep friendship still needs time together.' },
        { q: 'Are friendships in childhood different from those in adulthood?', a: 'Childhood friendships form easily through shared activities, while adult friendships require more effort because of work and family. They can be just as strong, but they need planning.' },
        { q: 'Why is it important to have close relationships?', a: 'They give emotional support, reduce loneliness and improve well-being. People with strong relationships usually cope better with stress.' }
      ]
    }
  });

  /* ===== 48 · Al-Majid ===== */
  put(48, {
    listening: {
      title: 'Al-Majid — a hall of heroes exhibition', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за экспозицией и числами в рассказе куратора.',
      context: 'Part 2. Куратор рассказывает об экспозиции «Зал славы» в музее.', genders: { Curator: 'f' },
      script: `Curator: Welcome to the Hall of Fame exhibition. I am Zhanar, the curator. Today I will show you how a nation remembers its great people.
Curator: The exhibition is open from Tuesday to Sunday, ten until six. Entry is six pounds, but free for students under eighteen. The guided tour lasts fifty minutes, though some groups ask for an hour.
Curator: The exhibition includes seventy portraits of scientists, poets, doctors and teachers. Notice that we did not choose only famous rulers; we also chose people whose work benefited others quietly.
Curator: In the first room, you can see manuscripts and instruments belonging to medieval scholars. Among them is a star map, more than eight hundred years old.
Curator: The second room is devoted to poets and writers. Here you can listen to recordings of poems read by their authors.
Curator: In the third room, we celebrate teachers and doctors. A touch screen allows you to search for the stories of seventeen people who served rural communities.
Curator: What is the meaning of true glory? Our visitors often write comments in the book at the exit. One recent comment said that fame is what people say about you, but glory is what you leave for others. I like this idea.
Curator: Photography is permitted, but please do not use flash. The cafe is on the first floor. If you would like a catalogue, it costs twelve pounds.`,
      notesTitle: 'Hall of Fame',
      notes: [
        { pre: 'Entry price: £', post: '', a: ['6', 'six'], e: 'Шесть фунтов, студентам до 18 лет бесплатно.' },
        { pre: 'Tour lasts', post: 'minutes', a: ['50', 'fifty'], e: 'Пятьдесят минут.' },
        { pre: 'Number of portraits:', post: '', a: ['70', 'seventy'], e: 'Семьдесят портретов.' },
        { pre: 'Age of the star map: more than', post: 'years', a: ['800', 'eight hundred'], e: 'Более восьмисот лет.' },
        { pre: 'Catalogue price: £', post: '', a: ['12', 'twelve'], e: 'Двенадцать фунтов.' }
      ],
      mc: [
        { q: 'Whom does the exhibition include?', opts: ['scientists, poets, doctors and teachers', 'only rulers', 'only athletes'], a: 'A', e: 'Учёных, поэтов, врачей и учителей — не только правителей.' },
        { q: 'What can visitors hear in the second room?', opts: ['poems read by their authors', 'music', 'lectures'], a: 'A', e: 'Записи стихов в исполнении авторов.' },
        { q: 'What does the recent comment say about glory?', opts: ['it is what you leave for others', 'it is the same as fame', 'it is impossible to achieve'], a: 'A', e: 'Слава — то, что вы оставляете другим.' }
      ]
    },
    writing: {
      title: 'Al-Majid — role models', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о роли публичных людей как образцов.',
      task2: {
        prompt: 'Some people think that famous people such as athletes and singers have a responsibility to be good role models. To what extent do you agree or disagree?',
        keywords: ['famous', 'role models', 'athletes', 'singers', 'responsibility', 'young people', 'influence', 'behaviour', 'media', 'values', 'private life', 'example'],
        model: `Celebrities attract enormous public attention, and many people argue that they have a duty to set a good example. I largely agree with this view, since fame gives influence, but I also believe that expectations should be realistic and that parents and teachers remain the main role models.

The case for responsibility is straightforward. Young people watch and imitate those they admire, and the behaviour of a famous athlete or singer can shape attitudes toward violence, drugs, honesty or education. A celebrity who donates money, speaks about hard work or encourages reading can have a positive effect on millions. Because they benefit from public admiration and often from commercial sponsorship, it is reasonable to expect that they should consider the effects of their conduct.

However, there are limits. Celebrities are human beings who make mistakes, and it is unfair to require perfection or to examine every aspect of their private lives. Some became famous for talent, not for moral qualities, and they never asked to be role models. Moreover, if children depend primarily on famous people for guidance, they may neglect the people who actually know and care for them. The media also bears responsibility, since it often magnifies scandals and ignores positive achievements.

For these reasons, the best approach is moderate: public figures should avoid harmful behaviour in public and use their platforms constructively, but society should direct young people toward a range of examples, including parents, teachers and community members.

In conclusion, celebrities have a reasonable responsibility to behave well in public, but it should not be the only source of guidance for young people.`,
        analysis: [
          'Task Response: градуированная позиция («largely agree») и оговорки о пределах ответственности.',
          'Аргументация: влияние на молодёжь, коммерческие выгоды; ограничения — человеческие ошибки, роль семьи и СМИ.',
          'Cohesion: However / Moreover / For these reasons; ключевые слова influence и responsibility.',
          'Lexical Resource: sponsorship, imitate, magnifies, constructively; грамматика: сложные придаточные, пассив.'
        ]
      }
    },
    speaking: {
      title: 'Al-Majid — a historical figure I admire', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о выдающейся исторической личности и обсуждение примеров для подражания.',
      keywords: ['admire', 'famous', 'history', 'achievement', 'inspire', 'great', 'respect', 'example', 'courage', 'legacy'],
      part1: [
        { q: 'Who is your favourite historical figure?', a: 'Al-Farabi, the philosopher and scientist. He combined many fields of knowledge and tried to use them for the benefit of society.' },
        { q: 'Do you enjoy learning about history?', a: 'Very much. I think history explains the present, and it provides examples of both wise and unwise decisions.' },
        { q: 'Have you visited any historical sites?', a: 'Several, including old mausoleums and ancient towns. Standing where important events took place makes history feel real.' },
        { q: 'Do you think people today remember great people from the past?', a: 'Some, but not as much as they should. Schools and media could do more to present such people in an interesting way.' }
      ],
      part2: {
        topic: 'Describe a great person from history that you admire.', bullets: ['who the person is', 'when they lived', 'what they achieved', 'and explain why you admire them.'],
        plan: [{ h: '1. Who', t: 'Al-Farabi, scholar.' }, { h: '2. When', t: '10th century, born in Otrar region.' }, { h: '3. Achievements', t: 'Philosophy, logic, music, science.' }, { h: '4. Why', t: 'Curiosity, breadth, service to society.' }],
        model: `The historical figure I would like to talk about is Al-Farabi, the great scholar who lived in the tenth century and was born in the region around Otrar, in present-day Kazakhstan.

Al-Farabi spent most of his life in the cities of the Middle East, including Baghdad and Damascus, where he studied and taught. He wrote on an extraordinary range of subjects: philosophy, logic, political theory, mathematics and music. He wrote commentaries on the works of Aristotle, which helped to transmit Greek ideas to later generations, and he was so highly regarded that he became known as the Second Teacher, after Aristotle.

I admire him for several reasons. Firstly, his curiosity was remarkable: he did not confine himself to one field but tried to understand how all knowledge was connected. Secondly, he believed that knowledge should serve society. In his writings on the ideal city, he argued that rulers should be educated and just, and that communities should seek the happiness of their members. And thirdly, he is said to have lived simply and devoted himself to study, which shows a modesty that is rare among people of such stature.

As a teacher from Kazakhstan, I feel a special connection with him. His example shows that a person from our land could make a lasting contribution to world culture, and it encourages my students to dream big. When I speak about him in class, I notice that they listen with particular pride.`
      },
      part3: [
        { q: 'Why do people admire historical figures?', a: 'Because they represent qualities that people value, such as courage or wisdom. They also show what a single person can achieve, which is inspiring.' },
        { q: 'Are there any disadvantages to idealising historical figures?', a: 'Yes, because real people have flaws, and portraying them as perfect can be misleading. It is better to present balanced stories that include both achievements and mistakes.' },
        { q: 'How can museums make history interesting for young people?', a: 'Through interactive displays, stories and activities, instead of only texts and objects behind glass. When visitors can participate, they remember more.' }
      ]
    }
  });

  /* ===== 49 · Al-Ba'ith ===== */
  put(49, {
    listening: {
      title: "Al-Ba'ith — restoring an old building", spec: 'Listening · Part 3 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Следить за этапами проекта реставрации и числами.',
      context: 'Part 3. Студенты и преподаватель обсуждают проект восстановления старого здания.', genders: { Tutor: 'f', Daulet: 'm', Aliya: 'f' },
      script: `Tutor: Let us talk about your restoration project. Daulet, what building have you chosen?
Daulet: An old railway station built in nineteen twelve. It has been empty for twenty years, but the structure is still sound.
Tutor: Aliya, what is your plan?
Aliya: We want to turn it into a community centre, with a cafe, a small museum and a workshop space. We think old buildings can be given a new life while keeping their character.
Tutor: Good. What will you keep?
Daulet: The brick walls, the clock tower and the large windows. The floor needs to be replaced, though.
Tutor: How do you plan to finance this?
Aliya: We have estimated the cost at about two hundred thousand pounds. A heritage fund could give half, and the rest could come from local donations.
Tutor: Realistic. What is the timetable?
Daulet: Eighteen months in total: six for structural repair, ten for interior work and two for landscaping.
Tutor: Don\'t forget to consult residents. A building revived without the community can remain empty.
Aliya: We will hold two meetings in the spring.
Tutor: Excellent. Your report should be around three thousand words, with drawings. The deadline is the thirtieth of April, not the twentieth.
Daulet: Thank you.`,
      notesTitle: 'Restoration project',
      notes: [
        { pre: 'The station was built in', post: '', a: ['1912', 'nineteen twelve'], e: 'Здание построено в 1912 году.' },
        { pre: 'Empty for', post: 'years', a: ['20', 'twenty'], e: 'Пустует двадцать лет.' },
        { pre: 'Estimated cost: £', post: '', a: ['200000', '200,000', 'two hundred thousand'], e: 'Около 200 тысяч фунтов.' },
        { pre: 'Total timetable:', post: 'months', a: ['18', 'eighteen'], e: 'Восемнадцать месяцев.' },
        { pre: 'Deadline: April', post: '', a: ['30', '30th', 'thirtieth', 'the 30th'], e: 'Срок — 30 апреля, а не 20-е.' }
      ],
      mc: [
        { q: 'What will the building become?', opts: ['a community centre', 'a hotel', 'a school'], a: 'A', e: 'Общественным центром.' },
        { q: 'What needs to be replaced?', opts: ['the floor', 'the walls', 'the clock tower'], a: 'A', e: 'Пол.' },
        { q: 'Why does the tutor recommend consulting residents?', opts: ['a revived building without community may remain empty', 'it is required by law', 'it reduces costs'], a: 'A', e: 'Здание без участия жителей может остаться пустым.' }
      ]
    },
    writing: {
      title: "Al-Ba'ith — restoration or new construction", spec: 'Writing · Task 2 Discuss Both Views · 40 минут · минимум 250 слов',
      takeaway: 'Сравнение реставрации и нового строительства.',
      task2: {
        prompt: 'Some people think that old buildings should be restored and reused. Others believe that it is better to demolish them and build new ones. Discuss both views and give your own opinion.',
        keywords: ['old buildings', 'restoration', 'demolish', 'new buildings', 'heritage', 'cost', 'history', 'cities', 'sustainability', 'identity', 'space', 'safety'],
        model: `As cities grow, there is often a conflict between preserving old buildings and replacing them with new ones. Both approaches have merits, but I believe that restoration is usually the better choice, with demolition reserved for cases where buildings are unsafe or unsuitable.

Those who favour demolition and new construction point to practical reasons. Old buildings may be structurally weak, energy-inefficient or poorly adapted to modern needs, such as accessibility and technology. In crowded cities, replacing a small building with a taller one may provide housing or offices for more people. New buildings can also be designed to meet current safety and environmental standards, which can be difficult to achieve in historic structures.

Nevertheless, restoration has strong advantages. Old buildings are part of a community\'s identity and memory, and they give streets character that is rarely reproduced by modern developments. Reusing them is also environmentally friendly, since demolition produces large amounts of waste and the construction of new buildings uses considerable energy and materials. In many cases, a restored building can be adapted to new purposes: a former factory can become a library, and an old station can serve as a community centre. Such projects often attract visitors and encourage local business.

In my view, the decision should be made case by case. Buildings of historical or cultural value should be preserved and modernised, while those that are dangerous or beyond reasonable repair may be replaced, ideally with designs that respect the surrounding area. Involving residents in the process increases the chances that the result will be valued.

In conclusion, restoring and reusing old buildings is generally preferable for cultural and environmental reasons, although demolition is justified where safety or practicality require it.`,
        analysis: [
          'Task Response: обе позиции раскрыты в отдельных абзацах; собственная позиция («case by case, restoration usually better») ясна.',
          'Аргументация: безопасность и эффективность vs идентичность и экология; примеры адаптивного повторного использования.',
          'Cohesion: Nevertheless / In my view; повтор ключевых слов buildings, restoration.',
          'Lexical Resource: energy-inefficient, adapted, identity, adaptive reuse; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: "Al-Ba'ith — something restored or renewed", spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о восстановленном месте или предмете и обсуждение новых начал.',
      keywords: ['restore', 'repair', 'old', 'new life', 'renew', 'again', 'history', 'improve', 'bring back', 'fresh'],
      part1: [
        { q: 'Do you like old buildings?', a: 'Yes, they have character. I enjoy walking through old districts and imagining the people who lived there.' },
        { q: 'Do you repair things or buy new ones?', a: 'I prefer to repair them if possible. It is cheaper and better for the environment, and I enjoy the process.' },
        { q: 'Do you like spring?', a: 'It is my favourite season. After a long winter, seeing the trees turn green feels like a new beginning.' },
        { q: 'Have you ever started something again after a break?', a: 'Yes, playing the piano. I returned after ten years, and it was surprising how much I remembered.' }
      ],
      part2: {
        topic: 'Describe a place or an object that was restored or renewed.', bullets: ['what it was', 'why it needed restoration', 'who restored it', 'and explain how you felt about the result.'],
        plan: [{ h: '1. What', t: 'Old city library building.' }, { h: '2. Why', t: 'Cracks, leaking roof, closed for years.' }, { h: '3. Who', t: 'City, volunteers, craftsmen.' }, { h: '4. Feelings', t: 'Joy; it is alive again.' }],
        model: `The place I would like to describe is the old city library in my hometown, which was restored and reopened two years ago.

The building dates from the 1950s and has beautiful high windows and a large reading hall with a decorated ceiling. By the early 2000s, however, it was in a very poor state. The roof leaked, there were cracks in the walls, and the heating did not work properly, so the library was closed to the public for nearly eight years. Many people in the city were sad to see it empty.

The restoration was a joint effort. The city administration allocated funds, and a group of craftsmen repaired the roof, the windows and the ceiling, using traditional methods. Volunteers, including students and retired teachers, helped to sort the books and to clean the reading hall. The architects added modern elements, such as an elevator, a children\'s room and free internet, while keeping the original style.

When it reopened, I attended the ceremony. I felt joy and a little emotion when I walked into the hall, which was full of light, and saw people sitting at the tables again. It seemed as if the building had come back to life.

I now go there regularly to read and prepare lessons. The experience taught me that things that look abandoned can be renewed with care and cooperation, and that the effort is almost always worth it.`
      },
      part3: [
        { q: 'Why is it important to preserve old buildings?', a: 'They connect the present with the past, and they give cities identity. Once they are demolished, they cannot be replaced, so careful decisions are essential.' },
        { q: 'Do you think people give up too easily on old things?', a: 'In a consumer society, often yes, because it is easier to replace than to repair. Learning to repair and reuse is good for both the budget and the planet.' },
        { q: 'How can a person make a fresh start in life?', a: 'By setting a small, concrete goal, ending habits that no longer help and seeking support. A fresh start is rarely sudden; it is built through regular steps.' }
      ]
    }
  });

  /* ===== 50 · Ash-Shahid ===== */
  put(50, {
    listening: {
      title: 'Ash-Shahid — the reliability of witnesses', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о показаниях свидетелей: структура и числа.',
      context: 'Part 4. Лекция о надёжности свидетельских показаний.', genders: { Lecturer: 'f' },
      script: `Lecturer: Good afternoon. Today we look at the reliability of witnesses. The Arabic root sh-h-d, in the name Ash-Shahid, means to be present and to testify. A witness is someone who both sees an event and describes it truthfully.
Lecturer: Legal systems have always depended on witnesses, but psychologists have shown that human memory is not like a video recording. It is reconstructive: each time we recall an event, we rebuild it, and details can change.
Lecturer: Three factors reduce accuracy. First, stress: in a frightening event, attention focuses on a weapon or on the threat, and other details are lost. Second, time: the longer the delay between event and testimony, the more details fade. Third, suggestion: the way a question is asked can change the answer. In one well-known type of experiment, participants who were asked how fast the cars were going when they "smashed" into each other gave higher estimates than those who were asked about cars that "hit" each other.
Lecturer: So what should a good witness do? I recommend four practices. One: write down what you saw as soon as possible. Two: separate facts from assumptions. Three: say "I do not know" when you do not know. Four: avoid discussing the event with other witnesses before giving your account.
Lecturer: These are also good habits in everyday life. Before passing on a story, ask whether you saw it yourself or heard it from somebody else.
Lecturer: Your assignment is a one-page analysis of an event that you witnessed, distinguishing facts from interpretation. Please submit it by Wednesday the sixteenth.`,
      notesTitle: 'Witnesses',
      notes: [
        { pre: 'The root sh-h-d means to be present and to', post: '', a: ['testify'], e: 'Присутствовать и свидетельствовать.' },
        { pre: 'Memory is', post: ': we rebuild events when we recall them.', a: ['reconstructive'], e: 'Память реконструктивна.' },
        { pre: 'Factors reducing accuracy: stress, time and', post: '', a: ['suggestion'], e: 'Стресс, время и внушение.' },
        { pre: 'Number of recommended practices:', post: '', a: ['4', 'four'], e: 'Четыре практики.' },
        { pre: 'Assignment due on Wednesday the', post: '', a: ['16', '16th', 'sixteenth', 'the 16th'], e: 'Срок — среда, 16-е.' }
      ],
      mc: [
        { q: 'What happens to attention in a frightening event?', opts: ['it focuses on the threat', 'it widens to all details', 'it disappears'], a: 'A', e: 'Внимание сужается на угрозе.' },
        { q: 'What does the experiment about "smashed" and "hit" show?', opts: ['wording of a question can change answers', 'cars are faster than people think', 'witnesses always lie'], a: 'A', e: 'Формулировка вопроса влияет на ответ.' },
        { q: 'What should a good witness do when unsure?', opts: ['say "I do not know"', 'guess', 'repeat what others say'], a: 'A', e: 'Сказать «я не знаю».' }
      ]
    },
    writing: {
      title: 'Ash-Shahid — truth in the media', spec: 'Writing · Task 2 Causes & Solutions · 40 минут · минимум 250 слов',
      takeaway: 'Причины недостоверности информации и способы борьбы.',
      task2: {
        prompt: 'False or misleading information spreads easily in the media and online. What are the main causes of this problem, and what can be done to deal with it?',
        keywords: ['false', 'misleading', 'information', 'media', 'online', 'sources', 'fact-checking', 'social media', 'education', 'verify', 'rumours', 'journalists'],
        model: `False and misleading information has become a serious problem in modern societies. Its causes lie in the structure of digital media and in human psychology, and it can be reduced through education, responsible platforms and personal habits.

One cause is speed. Anyone can publish instantly, and stories are often shared before they are checked. A second cause is the economic model of many platforms, which reward content that attracts attention, and sensational or emotional claims spread faster than careful reports. Human psychology plays a part as well: people tend to believe information that confirms their existing views and to share it without verification, particularly when it is surprising. Finally, deliberate disinformation campaigns, designed to influence opinion, add to the problem.

Several solutions are possible. Education is fundamental: schools should teach students to evaluate sources, to look for evidence and to recognise manipulation techniques. Platforms can contribute by labelling doubtful content, reducing the spread of proven falsehoods and making the origin of information easier to see. Independent fact-checking organisations and responsible journalism, which corrects errors openly, are also valuable.

At the individual level, people can adopt a few simple habits: pausing before sharing, checking whether other reliable sources report the same story and separating what is known from what is merely claimed. A person who has not witnessed an event himself should be cautious about presenting it as fact.

In conclusion, misinformation spreads because of speed, commercial incentives and psychological tendencies, and it can be limited by media education, responsible platforms and careful personal habits.`,
        analysis: [
          'Task Response: четыре причины и три группы решений (образование, платформы, личные привычки).',
          'Аргументация: механизмы (скорость, экономика внимания, подтверждающее мышление).',
          'Cohesion: One cause / A second cause / Finally; затем Several solutions; At the individual level.',
          'Lexical Resource: sensational, disinformation, verification, manipulation; грамматика: сложные придаточные и пассив.'
        ]
      }
    },
    speaking: {
      title: 'Ash-Shahid — an event I witnessed', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о событии, свидетелем которого вы были, и обсуждение правдивости.',
      keywords: ['witness', 'saw', 'happened', 'event', 'truth', 'describe', 'accident', 'report', 'remember', 'honest'],
      part1: [
        { q: 'Are you a good observer?', a: 'I try to be. I notice details such as expressions and small changes, which is useful in teaching.' },
        { q: 'Do you have a good memory for events?', a: 'For general events yes, but I forget exact details quickly. That is why I keep notes of important conversations.' },
        { q: 'Do you tell the truth even when it is uncomfortable?', a: 'Yes, but I try to do it kindly. Honesty without tact can hurt unnecessarily.' },
        { q: 'Do you read the news?', a: 'Every day, from several sources. I like to compare how different outlets report the same event.' }
      ],
      part2: {
        topic: 'Describe an event that you witnessed.', bullets: ['what happened', 'where and when it happened', 'what you did', 'and explain how you felt about it.'],
        plan: [{ h: '1. What', t: 'A minor road accident near school.' }, { h: '2. Where', t: 'Crossing, morning rush.' }, { h: '3. What did', t: 'Called help, gave account to police.' }, { h: '4. Feelings', t: 'Shocked, then relieved; honesty matters.' }],
        model: `The event I would like to describe is a road accident that I witnessed one morning near the school where I work.

It happened last autumn, at about eight o\'clock, at a pedestrian crossing in front of the school. There was a lot of traffic, and many children were arriving. I was standing on the pavement, waiting to cross, when a car moved forward as the lights were changing and lightly hit a boy who was on his bicycle. He fell, but fortunately he was not seriously hurt; he had a scraped knee and was frightened.

I immediately went to him, made sure that he was able to move, and called an ambulance and the police. The driver, who was very shocked, also got out of the car. Within ten minutes, an officer arrived and asked me to describe what I had seen. I tried to be very careful. I told him what I was sure about, such as the position of the car and the colour of the lights, and I clearly said that I did not see the exact moment of impact because I had turned my head for a second.

I felt shocked at first, then relieved when I saw that the boy was all right. I also understood the importance of an honest account. It would have been easy to add details to make my story sound more complete, but that could have been unfair to the driver or to the boy.

Since then, whenever I tell a story about something I saw, I try to separate what I actually observed from what I assume.`
      },
      part3: [
        { q: 'Why is it important for witnesses to tell the truth?', a: 'Because decisions about people\'s lives and freedom often depend on their accounts. False testimony can punish the innocent, so honesty is a basic duty.' },
        { q: 'How can people avoid spreading rumours?', a: 'By checking whether they saw something themselves or heard it from others, and by asking for evidence. If they are not sure, they should not pass it on.' },
        { q: 'Is it difficult to remain neutral when you describe an event?', a: 'Yes, since our feelings and expectations affect what we notice. Describing facts first and keeping opinions separate is a good discipline.' }
      ]
    }
  });
})();

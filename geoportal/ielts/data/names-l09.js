// Имена 81–90: Listening, Writing (Task 2), Speaking. Тексты на английском; пояснения на русском. Требуют проверки богословом.
(function () {
  var NM = window.IELTS.NDATA;
  function put(id, o) { var n = (NM[id] = NM[id] || {}); n.listening = o.listening; n.writing = o.writing; n.speaking = o.speaking; }

  /* ===== 81 · Al-Muntaqim ===== */
  put(81, {
    listening: {
      title: 'Al-Muntaqim — a community mediation service', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись на медиацию: имя, день, длительность, цена.',
      context: 'Part 1. Жительница записывается в службу медиации, чтобы решить спор с соседом.', genders: { Officer: 'm', Dana: 'f' },
      script: `Officer: Good afternoon, Neighbourhood Mediation Service.
Dana: Hello. I have an ongoing dispute with my neighbour about a fence, and I would like to try mediation instead of going to court.
Officer: That is often a good idea. May I take your surname?
Dana: It is Serikbayeva. S-E-R-I-K-B-A-Y-E-V-A.
Officer: Thank you. Have you spoken to your neighbour about mediation?
Dana: Yes, and he has agreed to come.
Officer: Excellent. A mediator is neutral. He does not decide who is right; he helps both sides to find a solution. The first meeting lasts ninety minutes, and we can offer Friday at two o'clock.
Dana: That suits me.
Officer: The service costs fifteen pounds for each person. For comparison, a court case can cost hundreds.
Dana: That is a relief. Is there anything I should prepare?
Officer: Please bring photographs of the fence and any letters you have exchanged. And try to think about what you really want, not only what you are angry about.
Dana: I understand.
Officer: Most disputes end with a written agreement, and in our experience, around three in four cases reach one.
Dana: Good. Where is your office?
Officer: On Mill Street, number forty.`,
      notesTitle: 'Mediation booking',
      notes: [
        { pre: 'Surname:', post: '', a: ['Serikbayeva'], e: 'Фамилия — Serikbayeva.' },
        { pre: 'Dispute about a', post: '', a: ['fence'], e: 'Спор об ограде.' },
        { pre: 'First meeting lasts', post: 'minutes', a: ['90', 'ninety'], e: 'Девяносто минут.' },
        { pre: 'Appointment: Friday at', post: '', a: ['2', 'two', '2:00', '2 pm', '2pm', '14:00'], e: 'Пятница в два часа.' },
        { pre: 'Cost per person: £', post: '', a: ['15', 'fifteen'], e: 'Пятнадцать фунтов с человека.' }
      ],
      mc: [
        { q: 'What does the mediator do?', opts: ['helps both sides find a solution', 'decides who is right', 'writes to the court'], a: 'A', e: 'Медиатор нейтрален и помогает найти решение.' },
        { q: 'What should Dana bring?', opts: ['photographs and letters', 'a lawyer', 'a payment receipt'], a: 'A', e: 'Фотографии и письма.' },
        { q: 'What is the office address?', opts: ['40 Mill Street', '14 Mill Street', '40 Hill Street'], a: 'A', e: 'Mill Street, 40.' }
      ]
    },
    writing: {
      title: 'Al-Muntaqim — punishment and rehabilitation', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение двух подходов к преступлениям: наказание или реабилитация.',
      task2: {
        prompt: 'Some people think that the main purpose of prison is to punish criminals. Others believe it should be to rehabilitate them. Discuss both views and give your own opinion.',
        keywords: ['prison', 'punish', 'criminals', 'rehabilitate', 'justice', 'victims', 'reoffend', 'education', 'society', 'sentence', 'deterrent'],
        model: `Opinions differ on whether prison should mainly punish or reform offenders. Both aims have value, but I believe that rehabilitation should be given greater weight.

Supporters of punishment argue that justice requires a response proportionate to the harm done. Victims and their families often feel that a light sentence disregards their suffering, and the knowledge that crime is followed by serious consequences may act as a deterrent. In addition, removing dangerous people from the community protects society, at least for the length of the sentence. These points show why punishment cannot be abandoned.

On the other hand, most prisoners are eventually released, and the question is what kind of people they will be when they leave. If prison offers only confinement, offenders may return to society angry, unskilled and unable to find work, which increases the chance of reoffending. Programmes that provide education, vocational training and psychological support have been associated in a number of studies with lower rates of reoffending, although results vary between countries. A successful rehabilitation also protects future victims, which is arguably the best form of justice.

In my opinion, the two views are not entirely opposed. The loss of freedom is itself a punishment, and the rest of the sentence should be used to prepare prisoners for a lawful life. A system that is fair to victims should therefore ensure proportionate sentences while investing in programmes that reduce further crime.

In conclusion, punishment answers the need for justice, but rehabilitation serves the long-term safety of society. A balanced system that gives priority to reform seems to me the most sensible approach.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты, позиция ясна («реабилитация важнее»).',
          'Аргументация: справедливость, сдерживание, защита общества vs повторные преступления, образование, будущие жертвы.',
          'Cohesion: On the other hand / In addition / therefore; осторожные формулировки («have been associated»).',
          'Lexical Resource: proportionate, deterrent, reoffend, vocational; перекликается с темой справедливого воздаяния.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muntaqim — fairness and justice', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о несправедливости и разговор о наказании и прощении.',
      keywords: ['fair', 'unfair', 'justice', 'punishment', 'forgive', 'apologise', 'consequences', 'rules', 'responsibility', 'respect'],
      part1: [
        { q: 'Do you like rules?', a: 'Yes, generally. Rules make life predictable and protect people, as long as they are applied equally to everyone.' },
        { q: 'Were you punished as a child?', a: 'Rarely. My parents usually explained what I had done wrong, and I think that worked better than shouting.' },
        { q: 'How do you react when someone treats you unfairly?', a: 'I try to stay calm and speak directly to the person. Most misunderstandings can be solved that way.' },
        { q: 'Do you find it easy to forgive?', a: 'It depends on the situation, but I try not to keep resentment. It uses a lot of energy.' }
      ],
      part2: {
        topic: 'Describe a time when you saw someone treated unfairly.', bullets: ['when and where it happened', 'who was involved', 'what happened', 'and explain how it was resolved.'],
        plan: [{ h: '1. Where', t: 'Exam at university last year.' }, { h: '2. Who', t: 'A classmate accused of copying.' }, { h: '3. What', t: 'Wrongly punished, no investigation.' }, { h: '4. Resolved', t: 'Appeal, apology, fair re-check.' }],
        model: `I would like to describe a situation at university, last year, when one of my classmates was treated unfairly.

During an important exam, a student named Aidos was accused by a supervisor of copying. In fact, the supervisor had seen him looking at the paper of the student sitting next to him, but Aidos was only trying to find the clock on the wall behind that student. Nobody asked him to explain. The result of his exam was cancelled on the spot, and he was told he would have to repeat the whole course.

I was sitting behind him, so I had seen everything. I felt very uncomfortable, because I knew that the punishment did not fit what had happened. Aidos was shocked and for several days did not come to classes.

I decided to speak up. I wrote a short, polite statement describing what I had seen, and I encouraged two other classmates to do the same. Aidos then submitted a formal appeal together with our statements.

The matter was reviewed by a committee, which questioned everyone calmly and listened to both sides. A week later, the cancellation was removed, his exam was marked, and the supervisor apologised to him in person.

For me, this was a lesson that fairness needs a procedure, not only good intentions. I also learned that when you see an injustice, giving a truthful account can make a real difference.`
      },
      part3: [
        { q: 'Why do some people want revenge?', a: 'Because being hurt creates strong emotions, and revenge seems to restore balance. In practice it usually continues the conflict.' },
        { q: 'Is it better to punish or to forgive?', a: 'Both have a place. Serious harm needs a fair response, but in personal relationships forgiveness often breaks a cycle of hostility.' },
        { q: 'How can society make sure that punishments are fair?', a: 'By having independent courts, clear laws and the right to appeal. Transparent procedures also help people to trust decisions.' }
      ]
    }
  });

  /* ===== 82 · Al-'Afuww ===== */
  put(82, {
    listening: {
      title: 'Al-\'Afuww — a lost-and-found enquiry', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись данных о потерянной вещи: описание, дата, место, контакт.',
      context: 'Part 1. Пассажир сообщает о потерянной сумке и просит не наказывать водителя.', genders: { Clerk: 'f', Marat: 'm' },
      script: `Clerk: Lost Property Office, how can I help?
Marat: Hello. I left a bag on the bus yesterday evening, and I hope you may have it.
Clerk: Let me check. Can you describe it?
Marat: It is a green backpack with a white label on the front. Inside there are a laptop and a notebook.
Clerk: And which bus was it?
Marat: Number forty-six, around half past six.
Clerk: One moment. Yes, we have a green backpack from the number forty-six. The driver handed it in this morning.
Marat: That is wonderful. Actually, I should say something about the driver. Yesterday he was rude to me because I had forgotten to pay, and I shouted at him. I would like to apologise.
Clerk: That is kind of you. I will pass on your message.
Marat: Thank you. When can I collect the bag?
Clerk: Any weekday between nine and five. Please bring some identification, such as a passport.
Marat: Is there a charge?
Clerk: No, it is free of charge, but you must sign for it. The office is at the station, on the first floor.`,
      notesTitle: 'Lost property',
      notes: [
        { pre: 'Item:', post: 'backpack', a: ['green'], e: 'Зелёный рюкзак.' },
        { pre: 'Bus number:', post: '', a: ['46', 'forty-six', 'forty six'], e: 'Автобус сорок шесть.' },
        { pre: 'Time lost: around', post: '', a: ['6.30', '6:30', 'half past six', '18:30', '6.30 pm'], e: 'Около половины седьмого.' },
        { pre: 'Collect between 9 and', post: '', a: ['5', 'five', '5 pm', '17:00'], e: 'С девяти до пяти.' },
        { pre: 'Bring identification, e.g.', post: '', a: ['passport', 'a passport'], e: 'Паспорт.' }
      ],
      mc: [
        { q: 'What does Marat want to do about the driver?', opts: ['apologise', 'complain', 'ask for a prize'], a: 'A', e: 'Он хочет извиниться.' },
        { q: 'What is the cost of collecting the bag?', opts: ['free of charge', 'five pounds', 'ten pounds'], a: 'A', e: 'Бесплатно.' },
        { q: 'Where is the office?', opts: ['first floor of the station', 'ground floor of the library', 'second floor of the bus depot'], a: 'A', e: 'Первый этаж вокзала.' }
      ]
    },
    writing: {
      title: 'Al-\'Afuww — forgiveness in society', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о роли прощения и второго шанса.',
      task2: {
        prompt: 'Some people believe that giving people a second chance after they make a serious mistake benefits society. Others think that mistakes should always have lasting consequences. To what extent do you agree or disagree with the first view?',
        keywords: ['second chance', 'mistake', 'forgiveness', 'consequences', 'society', 'employment', 'trust', 'rehabilitation', 'responsibility', 'reputation'],
        model: `It is often debated whether society should forgive serious mistakes or let them follow people permanently. I largely agree that second chances are beneficial, provided that they are accompanied by responsibility.

First, permanent punishment tends to harm everyone. A person with a past offence who is refused every job has little legitimate means of earning a living, and this can push him back towards crime. Employers, communities and taxpayers all bear the cost. Offering a chance to rebuild a life, for example by allowing old convictions to be removed from records after a number of years, helps people to become productive members of society.

Second, forgiveness encourages honesty. If a mistake destroys a person for ever, he has a strong reason to hide it or deny it. When errors are treated as something that can be admitted and repaired, people are more willing to take responsibility, and organisations can learn from failures instead of covering them up.

However, a second chance should not mean that consequences disappear. Victims deserve acknowledgement, and trust must be rebuilt through actions over time. Some roles, such as working with children, require stricter safeguards even after forgiveness. The best approach is therefore a conditional one: the person accepts responsibility, makes amends where possible, and shows change, and society then gives him a real opportunity.

A fair system must also be consistent: the same opportunity should be open to ordinary citizens, not only to those with influence or money. In conclusion, I agree that second chances benefit society, because they reduce long-term harm and encourage accountability. They are most effective when combined with clear responsibility and sensible safeguards.`,
        analysis: [
          'Task Response: градуированная позиция («в основном согласен, при условии ответственности»).',
          'Аргументация: экономическая выгода, честность, оговорки о безопасности и жертвах.',
          'Cohesion: First / Second / However / therefore.',
          'Lexical Resource: conviction, safeguards, amends, accountability.'
        ]
      }
    },
    speaking: {
      title: 'Al-\'Afuww — letting go of a grudge', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о прощении и разговор о ссорах и примирении.',
      keywords: ['forgive', 'apologise', 'argument', 'mistake', 'let go', 'grudge', 'friendship', 'reconcile', 'relationship', 'patience'],
      part1: [
        { q: 'Do you argue with your friends?', a: 'Sometimes, over small things. We usually talk it over quickly and forget about it.' },
        { q: 'How do you feel when someone apologises to you?', a: 'Relieved. A sincere apology shows respect, and it usually makes it easy for me to move on.' },
        { q: 'Do you keep a grudge?', a: 'I try not to. Holding on to anger mostly harms the person who feels it.' },
        { q: 'Is it hard for you to say sorry?', a: 'It used to be, but now I find that apologising quickly saves a lot of trouble.' }
      ],
      part2: {
        topic: 'Describe a time when you forgave someone.', bullets: ['who the person was', 'what they did', 'why you decided to forgive them', 'and explain how you felt afterwards.'],
        plan: [{ h: '1. Who', t: 'My old friend Yerlan.' }, { h: '2. What', t: 'Shared my secret, we stopped talking.' }, { h: '3. Why', t: 'He apologised sincerely; years of friendship.' }, { h: '4. Felt', t: 'Lighter, friendship stronger.' }],
        model: `I would like to talk about a time when I forgave a close friend, Yerlan, whom I have known since school.

Two years ago, I told him something personal about a family problem and asked him not to mention it to anyone. A few weeks later, I discovered that he had told it to another friend, who then spoke about it in a group. I was very hurt, because the secret was important to me, and I decided to stop speaking to him.

For almost three months we did not communicate. During that time I felt tense and sad, and I realised that I thought about the situation more than he probably did. Then one evening he came to my house, and without any excuses he apologised. He said that he had been careless, that he understood why I was upset, and that he would never do it again.

I decided to forgive him for several reasons. First, his apology was sincere and direct. Second, we had been friends for more than ten years, and one mistake did not erase all of that. Finally, I understood that I could not keep carrying the anger.

Afterwards, I felt much lighter, as if a weight had been taken off my shoulders. Our friendship is now actually stronger, because we speak honestly about trust. I have learned that forgiving does not mean forgetting what happened, but it allows people to move forward.`
      },
      part3: [
        { q: 'Why is forgiveness difficult?', a: 'Because it feels like excusing the wrong. But forgiving does not remove the need for honesty about what happened.' },
        { q: 'Should people always forgive family members?', a: 'Ideally, but not at any price. If the harm is repeated or serious, boundaries are necessary alongside forgiveness.' },
        { q: 'Do apologies in public have value?', a: 'They can, especially when many people were affected, but only if they are sincere and followed by changed behaviour.' }
      ]
    }
  });

  /* ===== 83 · Ar-Ra'uf ===== */
  put(83, {
    listening: {
      title: 'Ar-Ra\'uf — a volunteer visiting programme', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Запись в волонтёры: имя, день, число часов, обучение.',
      context: 'Part 1. Студентка записывается в программу посещения пожилых людей.', genders: { Coordinator: 'f', Amina: 'f' },
      script: `Coordinator: Good morning, Kind Neighbours Programme.
Amina: Hello. I would like to volunteer to visit elderly people who live alone.
Coordinator: Wonderful. May I take your full name?
Amina: Amina Nurlanova. N-U-R-L-A-N-O-V-A.
Coordinator: Thank you, Amina. Are you a student?
Amina: Yes, I study nursing at the medical university.
Coordinator: That will be useful. Volunteers visit once a week for one hour. Which day suits you best?
Amina: Saturday morning.
Coordinator: Good. There is a short training session first, on the fourth of March, which lasts three hours.
Amina: What does the training include?
Coordinator: Mostly how to listen well, how to notice signs that a person is unwell, and when to call for help. You do not need to give medical care.
Amina: I see. Is there any cost?
Coordinator: No, but you will need a police check, which we arrange free of charge.
Amina: That is fine.
Coordinator: Most volunteers say that the weekly visit becomes the best hour of their week.
Amina: I can imagine.`,
      notesTitle: 'Volunteer registration',
      notes: [
        { pre: 'Surname:', post: '', a: ['Nurlanova'], e: 'Фамилия — Nurlanova.' },
        { pre: 'Studying:', post: '', a: ['nursing'], e: 'Сестринское дело.' },
        { pre: 'Visit length:', post: 'hour(s)', a: ['1', 'one', 'an', 'one hour'], e: 'Один час.' },
        { pre: 'Preferred day:', post: 'morning', a: ['Saturday'], e: 'Суббота утром.' },
        { pre: 'Training session on', post: 'March', a: ['4', '4th', 'fourth', 'the fourth', 'the 4th'], e: 'Четвёртое марта.' }
      ],
      mc: [
        { q: 'How long is the training session?', opts: ['three hours', 'one hour', 'two days'], a: 'A', e: 'Три часа.' },
        { q: 'Do volunteers give medical care?', opts: ['No', 'Yes, always', 'Only on Saturdays'], a: 'A', e: 'Нет, медицинская помощь не требуется.' },
        { q: 'What is arranged free of charge?', opts: ['a police check', 'a uniform', 'a bus pass'], a: 'A', e: 'Проверка полицией.' }
      ]
    },
    writing: {
      title: 'Ar-Ra\'uf — kindness in education', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о доброте и строгости в школе.',
      task2: {
        prompt: 'Some people think that teachers should be strict to get good results from their students. Others believe that kindness and patience are more effective. To what extent do you agree or disagree that kindness is more effective?',
        keywords: ['teachers', 'strict', 'kindness', 'patience', 'students', 'motivation', 'discipline', 'results', 'classroom', 'respect', 'learning'],
        model: `The best way to motivate students is widely debated. While some argue that strictness produces results, I largely agree that kindness and patience are more effective, though they must be combined with clear standards.

Firstly, students learn better when they feel safe. A child who is afraid of humiliation tends to avoid questions and hide mistakes, and this prevents the very feedback that learning requires. A teacher who responds calmly to errors creates an atmosphere in which pupils take risks, ask for help and try again. Research in education suggests that supportive relationships are associated with higher engagement, although the exact effects depend on age and context.

Secondly, kindness builds respect, which is more lasting than fear. Students obey a strict teacher only while he is present, whereas those who respect a teacher usually continue to work when nobody is watching. Patience is also valuable for pupils who learn slowly, since repeated explanation can change a student from discouraged to confident.

Nevertheless, kindness should not be confused with permissiveness. Classrooms need rules, deadlines and expectations, and students benefit from knowing what is required. Strictness in standards is acceptable, provided that it is applied fairly and explained. The most effective teachers are, in my experience, warm and demanding at once.

Teachers who feel supported themselves, with reasonable class sizes and time to prepare, are also more able to remain patient, so schools share responsibility for creating this atmosphere. Parents can reinforce it by speaking respectfully about teachers at home and by cooperating when problems arise. In conclusion, I agree that kindness and patience produce better long-term results than harshness. Clear boundaries remain necessary, but they work best when students feel that their teacher cares about them.`,
        analysis: [
          'Task Response: градуированная позиция («доброта эффективнее, но нужны ясные стандарты»).',
          'Аргументация: безопасная среда, уважение вместо страха, оговорка о дисциплине.',
          'Cohesion: Firstly / Secondly / Nevertheless / In conclusion.',
          'Lexical Resource: engagement, permissiveness, boundaries; осторожная ссылка на исследования.'
        ]
      }
    },
    speaking: {
      title: 'Ar-Ra\'uf — a person who was kind to you', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о доброте учителя и разговор о заботе.',
      keywords: ['kind', 'gentle', 'patient', 'support', 'encourage', 'care', 'teacher', 'understanding', 'help', 'grateful'],
      part1: [
        { q: 'Do you think you are a kind person?', a: 'I hope so. I try to help when I can and to listen to people, although I am not always patient when I am tired.' },
        { q: 'Who was kind to you when you were young?', a: 'My grandmother. She always had time for me and never raised her voice.' },
        { q: 'How do you show kindness to others?', a: 'Usually in small ways: asking how someone is, helping with their bags or just being polite.' },
        { q: 'Is kindness important at work?', a: 'Very. A friendly colleague makes a hard day easier, and teams cooperate better when people respect each other.' }
      ],
      part2: {
        topic: 'Describe a teacher who was kind to you.', bullets: ['who the teacher was', 'when you studied with this teacher', 'how the teacher showed kindness', 'and explain how it affected you.'],
        plan: [{ h: '1. Who', t: 'Mrs Gulnara, my maths teacher.' }, { h: '2. When', t: 'Grade nine.' }, { h: '3. Kindness', t: 'Extra lessons, quiet encouragement.' }, { h: '4. Effect', t: 'Confidence, a love of maths.' }],
        model: `I would like to talk about my mathematics teacher in grade nine, Mrs Gulnara, who was exceptionally kind to me.

At that time I was struggling with algebra. I was afraid to ask questions because I thought other students would laugh, and my marks were falling. Mrs Gulnara noticed this before anybody else. One day after class she quietly asked me whether I would like to stay for ten minutes, and she did not mention my marks at all. She simply said that algebra is difficult for many people at first and that I could ask her anything.

After that, she regularly stayed after lessons to explain topics in a different way. She never made me feel stupid. When I made a mistake, she would say, "Good, now we know where the problem is." She also wrote small encouraging comments on my homework, like "You are improving".

It affected me in a major way. My results rose from a low pass to one of the best in the class by the end of the year, but even more important was the change in my confidence. I began to put up my hand in other lessons, too.

Today, when I help students, I try to copy her patient manner. I still think that her gentle attitude taught me more than the mathematics itself.`
      },
      part3: [
        { q: 'Why do some teachers fail to show kindness?', a: 'They may be under pressure, tired or worried about losing control of the class. Training in communication can help.' },
        { q: 'Is gentleness a sign of weakness?', a: 'Not at all. It takes self-control to stay calm and caring, and that is usually a sign of strength.' },
        { q: 'How can communities support people who are lonely?', a: 'Through visiting schemes, neighbourhood events and simple greetings. Often, regular contact matters more than large gestures.' }
      ]
    }
  });

  /* ===== 84 · Malik-ul-Mulk ===== */
  put(84, {
    listening: {
      title: 'Malik-ul-Mulk — a museum talk about empires', spec: 'Listening · Part 3 format · лекция-экскурсия, 8 вопросов · ~3 минуты',
      takeaway: 'Экскурсия: даты, длительность, количество, выводы.',
      context: 'Part 4. Экскурсовод в музее рассказывает о расцвете и упадке империй.', genders: { Guide: 'm' },
      script: `Guide: Welcome to the Gallery of Empires. In this room, we look at three states that once controlled very large territories and, in each case, lost them.
Guide: The first is the Roman Empire. At its largest, around the year one hundred and seventeen, it stretched across three continents. The western half ended in the year four hundred and seventy-six.
Guide: The second is the empire of the Mongols. It expanded very rapidly in the thirteenth century, and within about eighty years it had divided into separate states.
Guide: The third is the Ottoman state, which lasted more than six hundred years before it came to an end in nineteen twenty-two.
Guide: What do these histories have in common? Historians point to several factors, such as long wars, economic strain and internal disagreements, but there is no single explanation, and scholars still discuss the question.
Guide: The lesson that many visitors take away is that no power lasts for ever. Leaders who looked unshakable were replaced, and sometimes within a few generations.
Guide: Please note that the audio guide is available at the desk for three pounds, and the café is on the lower floor. The gallery closes at half past five.`,
      notesTitle: 'Gallery of Empires',
      notes: [
        { pre: 'Roman Empire at its largest, around the year', post: '', a: ['117'], e: 'Около 117 года.' },
        { pre: 'Western half ended in the year', post: '', a: ['476'], e: '476 год.' },
        { pre: 'Mongol empire divided within about', post: 'years', a: ['80', 'eighty'], e: 'Около восьмидесяти лет.' },
        { pre: 'Ottoman state lasted more than', post: 'years', a: ['600', 'six hundred'], e: 'Более шестисот лет.' },
        { pre: 'Audio guide costs £', post: '', a: ['3', 'three'], e: 'Три фунта.' }
      ],
      mc: [
        { q: 'What do historians say about the reasons for decline?', opts: ['there is no single explanation', 'only one war caused it', 'it is fully understood'], a: 'A', e: 'Единого объяснения нет.' },
        { q: 'What lesson do many visitors take away?', opts: ['no power lasts for ever', 'empires always grow', 'wars are rare'], a: 'A', e: 'Никакая власть не вечна.' },
        { q: 'When does the gallery close?', opts: ['5.30', '4.30', '6.30'], a: 'A', e: 'В половине шестого.' }
      ]
    },
    writing: {
      title: 'Malik-ul-Mulk — responsibility of leaders', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение: власть как привилегия или ответственность.',
      task2: {
        prompt: 'Some people believe that people in positions of power should be given special privileges. Others think that power is mainly a responsibility. Discuss both views and give your own opinion.',
        keywords: ['power', 'leaders', 'privileges', 'responsibility', 'accountability', 'public', 'decisions', 'corruption', 'trust', 'service'],
        model: `People who hold power, whether in government or in business, are often seen either as deserving privileges or as carrying a burden of duty. While some benefits are reasonable, I believe that power is above all a responsibility.

Those who favour privileges argue that leaders work long hours, face pressure and make decisions that affect many people. It seems fair that they receive a good salary, security and the resources they need to do their job. In addition, attractive conditions may encourage talented people to enter public service instead of choosing more profitable careers.

However, privileges can easily grow into abuses. When leaders are given special treatment, such as exemption from rules that apply to others, public trust declines, and corruption becomes more likely. Many historical examples show that rulers who forgot their duties to the people were eventually removed, sometimes violently. Power is also entrusted rather than owned: leaders hold their position because others allow them to, and they are expected to act in the interests of those people.

In my opinion, reasonable support for people in authority is acceptable, but it should never place them above the law. Mechanisms such as audits, elections, free media and term limits ensure that leaders remain accountable. A leader who regards his office as a service is more likely to make wise decisions and to leave a good reputation.

In conclusion, adequate compensation is justified, but power should be understood primarily as a responsibility. Societies that insist on accountability tend to be better governed.`,
        analysis: [
          'Task Response: обе позиции раскрыты, мнение — «власть прежде всего ответственность».',
          'Аргументация: нагрузка и привлечение талантов vs злоупотребления и доверие; механизмы подотчётности.',
          'Cohesion: However / In addition / In conclusion.',
          'Lexical Resource: accountability, exemption, entrusted, audits; соответствует теме «власть — аманат».'
        ]
      }
    },
    speaking: {
      title: 'Malik-ul-Mulk — leaders and responsibility', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о лидере и разговор о власти и ответственности.',
      keywords: ['leader', 'power', 'responsibility', 'decision', 'respect', 'trust', 'example', 'authority', 'serve', 'humble'],
      part1: [
        { q: 'Would you like to be a leader?', a: 'Sometimes. I enjoy organising projects, but I know that leadership brings pressure and responsibility.' },
        { q: 'Were you a leader at school?', a: 'I was the head of the geography club for a year, which taught me how difficult it is to coordinate people.' },
        { q: 'What qualities make a good leader?', a: 'Honesty, the ability to listen and the courage to take responsibility for mistakes.' },
        { q: 'Do you follow politics?', a: 'Not closely, but I read the news every day to understand decisions that affect my life.' }
      ],
      part2: {
        topic: 'Describe a leader you admire.', bullets: ['who the person is', 'what position the person has or had', 'what the person has done', 'and explain why you admire this person.'],
        plan: [{ h: '1. Who', t: 'My former school director.' }, { h: '2. Position', t: 'Head of school for twelve years.' }, { h: '3. Done', t: 'Fair, listened, led by example.' }, { h: '4. Why', t: 'Humble use of authority.' }],
        model: `I would like to talk about someone I admire as a leader: the director of my school, who led it for about twelve years.

He was an ordinary-looking man, and he never behaved as if his position made him special. Every morning he stood at the entrance and greeted the students by name. When there was a problem, such as a broken heating system in winter, he would visit the classrooms himself, ask the teachers what was needed and work with the staff to solve it. He often said that a director's job is to serve the school, not the other way round.

What impressed me most was his fairness. Once, a group of senior students, including the child of a well-known family, broke school rules. Some people expected the director to overlook it, but he applied exactly the same procedure as for everyone else. Afterwards, nobody doubted that the rules were serious.

He also admitted mistakes. At one meeting he told parents that a decision about the timetable had been wrong and that he would change it, and I remember the respect that people showed him afterwards.

I admire him because he used his authority with humility and always thought about the people who relied on him. I believe that this is what real leadership looks like: it is a trust, not a privilege.`
      },
      part3: [
        { q: 'Why do some leaders misuse power?', a: 'Often because there is little supervision, and success can create a feeling of being above the rules. Accountability is the best protection.' },
        { q: 'Should leaders be paid more than other people?', a: 'To a reasonable degree, because their responsibility is greater. But extreme differences can damage public trust.' },
        { q: 'How can young people learn leadership?', a: 'By taking responsibility in clubs, volunteering and group projects. Real practice teaches more than lectures.' }
      ]
    }
  });

  /* ===== 85 · Dhul-Jalali wal-Ikram ===== */
  put(85, {
    listening: {
      title: 'Dhul-Jalali wal-Ikram — hosting a formal dinner', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Бронирование банкета: дата, число гостей, меню, цена.',
      context: 'Part 1. Организатор бронирует зал для торжественного ужина.', genders: { Manager: 'f', Ruslan: 'm' },
      script: `Manager: Good afternoon, Grand Hall Restaurant.
Ruslan: Good afternoon. I would like to book a room for a formal dinner to honour our visiting guests.
Manager: Certainly. What date do you have in mind?
Ruslan: Saturday the twelfth of October.
Manager: And how many people?
Ruslan: Forty-five.
Manager: We have the Garden Room, which seats fifty. It would be sixty pounds per person for a three-course menu.
Ruslan: That is acceptable. Our guests come from a mountain village, and I want them to feel truly welcome. Can you offer something local?
Manager: We could start with a soup and then serve lamb with rice as the main course. For dessert, the chef recommends apple pie.
Ruslan: Perfect. Can we have a short welcome speech?
Manager: Of course. We can arrange a microphone. It would be best to arrive one hour before the guests to check the room.
Ruslan: May I give you my phone number? It is oh-seven-seven, four-one-five, nine-two-six.
Manager: Thank you. We will send a confirmation by email, and a ten per cent deposit is required.`,
      notesTitle: 'Dinner booking',
      notes: [
        { pre: 'Date: Saturday', post: 'October', a: ['12', '12th', 'twelfth', 'the twelfth', 'the 12th'], e: 'Двенадцатое октября.' },
        { pre: 'Number of guests:', post: '', a: ['45', 'forty-five', 'forty five'], e: 'Сорок пять.' },
        { pre: 'Room:', post: 'Room', a: ['Garden'], e: 'Зал Garden.' },
        { pre: 'Price per person: £', post: '', a: ['60', 'sixty'], e: 'Шестьдесят фунтов.' },
        { pre: 'Main course:', post: 'with rice', a: ['lamb'], e: 'Баранина с рисом.' }
      ],
      mc: [
        { q: 'Why does Ruslan want a local menu?', opts: ['so that guests feel welcome', 'it is cheaper', 'the chef insisted'], a: 'A', e: 'Чтобы гости почувствовали себя желанными.' },
        { q: 'What deposit is required?', opts: ['ten per cent', 'twenty per cent', 'no deposit'], a: 'A', e: 'Десять процентов.' },
        { q: 'When should Ruslan arrive?', opts: ['one hour before the guests', 'at the same time', 'the day before'], a: 'A', e: 'За час до гостей.' }
      ]
    },
    writing: {
      title: 'Dhul-Jalali wal-Ikram — respect and hospitality', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация о культуре уважения и гостеприимства.',
      task2: {
        prompt: 'In many cultures, hospitality and respect towards guests are considered very important. Some people think this tradition is disappearing in modern life. To what extent do you agree or disagree?',
        keywords: ['hospitality', 'respect', 'guests', 'tradition', 'modern life', 'culture', 'technology', 'community', 'generosity', 'values'],
        model: `Hospitality has long been a source of pride in many societies. Although modern life has changed the way people receive visitors, I only partly agree that the tradition is disappearing; in my view, it is changing its form rather than vanishing.

There is certainly evidence for the pessimistic view. Busy schedules, small apartments and the habit of meeting in cafés mean that fewer families invite guests for long meals. Technology has also reduced personal contact, since many people prefer to send a message instead of visiting. In big cities, neighbours may live next to each other for years without speaking.

However, there are strong signs that the value of hospitality remains. In many countries, a visitor is still offered tea, food and the best seat in the house, and refusing generosity can be considered rude. Moreover, new forms of welcome have appeared. Online communities host travellers, and volunteers welcome newcomers and students from abroad. Festivals and national holidays still bring relatives together, and the tradition of preparing a table for guests is passed from parents to children.

The more significant challenge is that hospitality now requires a conscious decision. People must set aside time, and this is easier when a culture teaches that honouring a guest is a virtue. Schools and families can encourage children to greet visitors politely and to share what they have.

In conclusion, the forms of hospitality are changing under the pressure of modern life, but the underlying values of respect and generosity continue to be widely appreciated and can be strengthened through education.`,
        analysis: [
          'Task Response: частичное согласие («меняется, но не исчезает»).',
          'Аргументация: занятость и технологии vs сохранение традиции, новые формы гостеприимства.',
          'Cohesion: However / Moreover / The more significant challenge.',
          'Lexical Resource: hospitality, pessimistic, generosity, conscious decision.'
        ]
      }
    },
    speaking: {
      title: 'Dhul-Jalali wal-Ikram — welcoming guests', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о приёме гостей и разговор о традициях уважения.',
      keywords: ['guests', 'welcome', 'respect', 'generous', 'tradition', 'honour', 'host', 'table', 'polite', 'warm'],
      part1: [
        { q: 'Do you often have guests at home?', a: 'Fairly often, especially at weekends. My family likes to invite relatives and friends for dinner.' },
        { q: 'What do you usually offer to guests?', a: 'Tea, sweets and something hot to eat. In our culture, no guest should leave hungry.' },
        { q: 'Do you enjoy visiting other people?', a: 'Yes, I like to see how others live, and it is a good way to keep relationships alive.' },
        { q: 'How do you show respect to older people?', a: 'By greeting them first, offering my seat and listening carefully when they speak.' }
      ],
      part2: {
        topic: 'Describe a time when you welcomed a guest to your home.', bullets: ['who the guest was', 'how you prepared', 'what you did together', 'and explain how you felt about the visit.'],
        plan: [{ h: '1. Guest', t: 'My cousin from abroad.' }, { h: '2. Prepare', t: 'Cleaned, cooked national dishes.' }, { h: '3. Did', t: 'Dinner, photographs, city walk.' }, { h: '4. Felt', t: 'Proud, close to family.' }],
        model: `I would like to describe the visit of my cousin Madina, who lives abroad and came to our city last summer for the first time in six years.

We knew about her arrival a month in advance, so the whole family prepared. My mother and I cleaned the house, and we arranged a separate room with fresh flowers. On the day, we prepared a table with traditional dishes, including beshbarmak and baursaks, and we bought fruit that she used to like when she was small.

When Madina arrived, the first thing we did was to give her tea and sit together. She told us about her life, and we told her about the changes in the neighbourhood. In the following days, we took her to the city centre and to the museum, and we visited relatives who had asked to see her. One evening we looked through old family photographs and laughed a lot.

I felt very proud that we could welcome her warmly. It was clear that the visit meant a great deal to her. When she left, she said that she had missed this kind of closeness, and she promised to return next year.

For me, the visit showed that hospitality is not about expensive things; it is about giving attention and time. It also made me feel closer to my family.`
      },
      part3: [
        { q: 'Why is hospitality important in your culture?', a: 'Because it builds trust and a sense of community. Traditionally, people depended on each other, especially in travelling and in remote areas.' },
        { q: 'Are young people as hospitable as older generations?', a: 'In my experience, mostly yes, though they may express it differently, for example by using online platforms or meeting in public places.' },
        { q: 'How can tourism benefit from hospitality?', a: 'Friendly treatment makes visitors feel safe and encourages them to return. Local families can also earn income by hosting.' }
      ]
    }
  });

  /* ===== 86 · Al-Muqsit ===== */
  put(86, {
    listening: {
      title: 'Al-Muqsit — a school sports fairness discussion', spec: 'Listening · Part 3 format · обсуждение, 8 вопросов · ~3 минуты',
      takeaway: 'Обсуждение справедливого распределения времени и оборудования.',
      context: 'Part 3. Две студентки и преподаватель обсуждают справедливое расписание спортзала.', genders: { Tutor: 'm', Laila: 'f', Zhanna: 'f' },
      script: `Tutor: Let us look at your project on sharing the school gym fairly. Laila, what did you find?
Laila: At the moment, the football team uses the gym for twelve hours a week, while the dance group has only two.
Zhanna: And the dance group has more members, which seems unfair.
Tutor: How did you collect the data?
Laila: We asked the coaches and checked the booking sheet for the last term.
Zhanna: We also interviewed forty students. Most of them said they would prefer a system based on the number of participants.
Tutor: What did you propose?
Laila: Each group would receive hours in proportion to the number of members, with a minimum of three hours a week.
Zhanna: Competitions would be treated as exceptions, so that teams could have extra time before a match.
Tutor: That seems balanced. What problem might you face?
Laila: Some coaches may resist, because they are used to the old system.
Zhanna: So we plan to present the figures at the staff meeting on the sixth of November.
Tutor: Good. Please submit your final report by the twentieth of November, and try to keep it to two thousand words.`,
      notesTitle: 'Sharing the gym',
      notes: [
        { pre: 'Football team uses the gym', post: 'hours a week', a: ['12', 'twelve'], e: 'Двенадцать часов в неделю.' },
        { pre: 'Dance group uses', post: 'hours', a: ['2', 'two'], e: 'Два часа.' },
        { pre: 'Number of students interviewed:', post: '', a: ['40', 'forty'], e: 'Сорок студентов.' },
        { pre: 'Minimum hours per group:', post: '', a: ['3', 'three'], e: 'Минимум три часа.' },
        { pre: 'Staff meeting on', post: 'November', a: ['6', '6th', 'sixth', 'the sixth', 'the 6th'], e: 'Шестого ноября.' }
      ],
      mc: [
        { q: 'On what basis do students prefer hours to be shared?', opts: ['number of participants', 'age of the coach', 'length of the season'], a: 'A', e: 'По числу участников.' },
        { q: 'How will competitions be treated?', opts: ['as exceptions with extra time', 'in the same way', 'they will be cancelled'], a: 'A', e: 'Как исключения с дополнительным временем.' },
        { q: 'What problem do the students expect?', opts: ['resistance from some coaches', 'lack of money', 'bad weather'], a: 'A', e: 'Сопротивление некоторых тренеров.' }
      ]
    },
    writing: {
      title: 'Al-Muqsit — fair distribution of resources', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение: поровну или по потребностям.',
      task2: {
        prompt: 'Some people think that resources such as school funding should be shared equally among all schools. Others believe they should be distributed according to need. Discuss both views and give your own opinion.',
        keywords: ['resources', 'funding', 'equally', 'need', 'schools', 'fairness', 'disadvantaged', 'equality', 'opportunity', 'results'],
        model: `The fair distribution of public money is a frequent subject of debate. Some favour equal funding for every school, while others want more help for those in greater need. Although both approaches claim to be fair, I believe that distribution according to need is more just.

Those who support equal shares point to the clarity of the principle. If every school receives the same amount per student, nobody can claim favouritism, and the system is simple to administer. It also prevents politicians from rewarding schools in certain regions for reasons unrelated to education. Many people feel instinctively that equal treatment is the definition of fairness.

However, equal funding does not produce equal opportunity. A school in a remote region may have higher costs for transport and heating, and a school with many children from poor families may need additional teachers, meals and language support. If these schools receive the same budget as wealthier ones, their students will, in practice, receive less. Fairness therefore requires giving more to those who start with less, so that all pupils have a reasonable chance to succeed.

In my opinion, a basic standard should be guaranteed for all schools, with additional funds allocated using transparent criteria such as local income, size and special needs. Public reports on how the money is spent would help citizens to check that the system remains impartial.

In conclusion, while equal shares are simple, a needs-based approach is more just, because it recognises that different situations require different levels of support.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты, мнение — «по потребностям справедливее».',
          'Аргументация: простота и беспристрастность vs равные возможности, разные издержки.',
          'Cohesion: However / therefore / In conclusion.',
          'Lexical Resource: impartial, allocated, transparent criteria, disadvantaged; связь с «кист» — справедливое распределение.'
        ]
      }
    },
    speaking: {
      title: 'Al-Muqsit — sharing things fairly', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о справедливом разделе и разговор о равенстве.',
      keywords: ['share', 'fair', 'equal', 'divide', 'portion', 'honest', 'family', 'decision', 'treat', 'everyone'],
      part1: [
        { q: 'Do you like sharing things?', a: 'Yes, I enjoy it, particularly food and books. Sharing makes both people feel closer.' },
        { q: 'Did you share a room as a child?', a: 'I shared a room with my sister, and we had a simple rule: each of us had her own shelf and her own days to choose the music.' },
        { q: 'What do you think is a fair way to divide chores at home?', a: 'Everyone should do a part according to age and time. Rotating tasks every week helps to keep it fair.' },
        { q: 'Do you often have to make decisions about others?', a: 'At work sometimes, for example when I divide tasks in a small team. I try to explain the reasons.' }
      ],
      part2: {
        topic: 'Describe a time when you had to divide something between people.', bullets: ['what you had to divide', 'who the people were', 'how you decided to divide it', 'and explain how people reacted.'],
        plan: [{ h: '1. What', t: 'A prize for a team project.' }, { h: '2. Who', t: 'Five classmates.' }, { h: '3. How', t: 'By contribution, openly discussed.' }, { h: '4. Reaction', t: 'Agreement; trust.' }],
        model: `I would like to describe a situation last year when I had to divide a small prize between my classmates.

Our group of five students had won a competition for a geography project, and the prize was a sum of money. We had worked together for two months, but not everyone contributed equally. One student prepared most of the maps, another wrote the presentation, and one of us joined only in the final week because of illness.

As the team leader, I was asked to decide how to share the money. At first I thought of dividing it into five equal parts, because that is the simplest method. But I realised that this might feel unfair to those who had worked hardest. On the other hand, I did not want the student who had been ill to feel punished.

In the end, I proposed a method and explained it openly. We would give equal shares to everybody as a base, and then a small extra amount to the two students with the largest contribution. I asked the group to discuss it and to change anything they disagreed with.

The reaction was very positive. Everyone agreed, and the student who had been ill thanked us for understanding. I think the process was as important as the result: when people see that a decision is open and reasonable, they accept it more easily.`
      },
      part3: [
        { q: 'Is it always fair to divide things equally?', a: 'Not always. Equal division ignores differences in effort or need. Sometimes proportional sharing is more just.' },
        { q: 'Who should decide how resources are divided in a community?', a: 'Ideally a transparent group that includes representatives of those affected, with public records of its decisions.' },
        { q: 'Why do people feel angry about unfair treatment?', a: 'Because it signals that they are not respected. The feeling is often stronger than the loss itself.' }
      ]
    }
  });

  /* ===== 87 · Al-Jami' ===== */
  put(87, {
    listening: {
      title: 'Al-Jami\' — organising a community reunion', spec: 'Listening · Part 1 format · диалог, 8 вопросов · ~3 минуты',
      takeaway: 'Организация встречи выпускников: дата, место, билеты, программа.',
      context: 'Part 1. Выпускница уточняет детали встречи одноклассников.', genders: { Organiser: 'm', Saule: 'f' },
      script: `Organiser: Hello, Alumni Association.
Saule: Hello. I saw your announcement about a reunion for the class of two thousand and ten, and I would like to attend.
Organiser: Wonderful. May I have your name?
Saule: Saule Abenova. A-B-E-N-O-V-A.
Organiser: Thank you. The reunion is on Saturday the ninth of June at the old school building.
Saule: What time does it begin?
Organiser: Registration opens at four o'clock, and the programme starts at five.
Saule: Is there a ticket price?
Organiser: Twenty pounds, which includes dinner. If you would like to bring a family member, it is ten pounds more.
Saule: I will come with my husband. What is the programme?
Organiser: First there will be a tour of the building, then a photograph of the whole group, then a dinner with short speeches.
Saule: Wonderful. I have been trying to find some of my classmates for years.
Organiser: We have already gathered the addresses of about ninety people from the class, and we are still looking for the others.
Saule: I know two of them. I will send you their contacts.`,
      notesTitle: 'Class reunion',
      notes: [
        { pre: 'Surname:', post: '', a: ['Abenova'], e: 'Фамилия — Abenova.' },
        { pre: 'Date: Saturday', post: 'June', a: ['9', '9th', 'ninth', 'the ninth', 'the 9th'], e: 'Девятое июня.' },
        { pre: 'Registration opens at', post: '', a: ['4', 'four', '4:00', '4 pm', '4pm', '16:00'], e: 'В четыре часа.' },
        { pre: 'Ticket price: £', post: '', a: ['20', 'twenty'], e: 'Двадцать фунтов.' },
        { pre: 'Extra for a family member: £', post: '', a: ['10', 'ten'], e: 'Ещё десять фунтов.' }
      ],
      mc: [
        { q: 'What happens first in the programme?', opts: ['a tour of the building', 'dinner', 'speeches'], a: 'A', e: 'Сначала экскурсия по зданию.' },
        { q: 'Who will Saule bring?', opts: ['her husband', 'her sister', 'nobody'], a: 'A', e: 'Мужа.' },
        { q: 'What will Saule send?', opts: ['contacts of two classmates', 'a photograph', 'a payment'], a: 'A', e: 'Контакты двух одноклассников.' }
      ]
    },
    writing: {
      title: 'Al-Jami\' — bringing communities together', spec: 'Writing · Task 2 Problem/Solution · 40 минут · минимум 250 слов',
      takeaway: 'Проблема разобщённости и решения для объединения людей.',
      task2: {
        prompt: 'In many cities, people do not know their neighbours and feel disconnected from their community. What problems does this cause, and what can be done to bring people together?',
        keywords: ['community', 'neighbours', 'isolation', 'loneliness', 'cities', 'events', 'public spaces', 'volunteering', 'trust', 'social'],
        model: `In large modern cities, many residents live for years without speaking to the people next door. This lack of connection leads to several problems, but there are practical ways to address it.

The first problem is loneliness. People who lack contact with others are more likely to feel isolated, and studies in public health have linked social isolation with poorer mental and physical health, particularly among the elderly. A second problem concerns safety and trust: in a neighbourhood where nobody knows each other, there is less informal supervision, and people may be reluctant to help in an emergency. Finally, communities without personal bonds find it harder to cooperate on shared issues such as cleanliness or road safety.

Several solutions are available. Local authorities can create and maintain public spaces such as parks, libraries and community centres where people naturally meet. Regular events, such as street festivals, markets and sports days, give residents a reason to talk. Housing developers can design buildings with shared courtyards, instead of isolated apartments. In addition, volunteering schemes, such as helping at a food bank or cleaning a park, bring together people from different backgrounds around a common purpose.

Individuals can also contribute. Simple actions like greeting a neighbour, offering help to an older resident or joining a local group create the small connections that larger communities are made of.

In conclusion, social disconnection harms health, safety and cooperation, but it can be reduced by providing shared spaces and events, and by individuals making an effort to reach out.`,
        analysis: [
          'Task Response: обе части (проблемы и решения) раскрыты.',
          'Аргументация: одиночество, безопасность, сотрудничество; государственные меры и личные действия.',
          'Cohesion: The first / A second / Finally / In addition / In conclusion.',
          'Lexical Resource: isolation, informal supervision, public spaces, common purpose.'
        ]
      }
    },
    speaking: {
      title: 'Al-Jami\' — bringing people together', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о событии, собравшем людей, и разговор об общности.',
      keywords: ['gather', 'together', 'event', 'community', 'organise', 'reunion', 'celebrate', 'meet', 'atmosphere', 'connection'],
      part1: [
        { q: 'Do you like large gatherings?', a: 'In moderation. I enjoy family celebrations, but I prefer small groups for conversation.' },
        { q: 'How often do you meet your relatives?', a: 'Once a month at least, and on all major holidays when the whole family gathers.' },
        { q: 'Do you know your neighbours?', a: 'Yes, quite well. We help each other with small things like keeping an eye on the flat when someone is away.' },
        { q: 'Have you ever organised an event?', a: 'I helped to organise a school geography festival, which was a good lesson in planning.' }
      ],
      part2: {
        topic: 'Describe an event that brought many people together.', bullets: ['what the event was', 'who attended', 'what happened at the event', 'and explain why it was important.'],
        plan: [{ h: '1. Event', t: 'City festival of national games.' }, { h: '2. Who', t: 'Families, schools, elderly people.' }, { h: '3. Happened', t: 'Games, food, music, exhibitions.' }, { h: '4. Important', t: 'Unity, shared tradition.' }],
        model: `I would like to describe a festival of traditional games that was held in my city last spring and brought together thousands of people.

It took place in the central park and lasted for a whole Saturday. The organisers were the city administration and several schools, and the aim was to remind residents of the old games that children used to play. Families came with children, schools sent their teams, and many elderly people attended as honoured guests who could explain the rules.

During the day there were competitions, such as the game with the knucklebones, wrestling and horse games for the more experienced. At the tents, volunteers served tea and national food, and on a stage there was music and dancing. I helped at the table where children learned to make simple toys from felt, and I was amazed by how many different ages were mixed together: a grandfather could be seen teaching a boy how to throw a knucklebone.

The event was important for several reasons. First, it showed that traditions can be enjoyable and not only formal. Second, it connected generations who normally spend little time together. And third, it gave neighbours from different parts of the city a chance to meet and talk.

I left the festival with a strong feeling of unity. It reminded me that people want to belong to something larger than themselves, and that simple shared activities can create that feeling.`
      },
      part3: [
        { q: 'Why do people enjoy being part of a group?', a: 'Because it gives them a sense of belonging and support. Shared experiences also create memories that link people.' },
        { q: 'Has technology brought people closer or separated them?', a: 'Both. It helps to keep in touch over distance, but it can also reduce face-to-face contact if used too much.' },
        { q: 'What can governments do to encourage community spirit?', a: 'Provide public spaces and fund local events and clubs. Supporting volunteering also helps.' }
      ]
    }
  });

  /* ===== 88 · Al-Ghani ===== */
  put(88, {
    listening: {
      title: 'Al-Ghani — a talk on financial independence', spec: 'Listening · Part 4 format · лекция, 8 вопросов · ~3 минуты',
      takeaway: 'Лекция о финансовой самостоятельности: проценты, сроки, советы.',
      context: 'Part 4. Лектор рассказывает студентам о том, как жить по средствам.', genders: { Lecturer: 'f' },
      script: `Lecturer: Today I will talk about financial independence, which does not simply mean having a lot of money. It means having enough to meet your needs without depending on others.
Lecturer: Let us start with a simple rule that many advisers suggest. Divide your income into three parts: fifty per cent for needs, such as rent and food; thirty per cent for wants; and twenty per cent for savings. Of course, this is a guide, not a law, and students with a low income may find it difficult to follow.
Lecturer: The second idea is the emergency fund. Try to save enough to cover three to six months of expenses. This reduces anxiety and helps you to avoid borrowing.
Lecturer: Third, avoid comparing your lifestyle with others. Surveys of consumer behaviour often show that people spend more when they see friends spending, and this can lead to debt.
Lecturer: Finally, there is the attitude of contentment. Researchers in psychology suggest that people who are grateful for what they have usually report higher satisfaction than those who constantly want more, although the amount of income also matters.
Lecturer: For your assignment, please keep a record of your spending for four weeks and submit it by the fifteenth of December.`,
      notesTitle: 'Financial independence',
      notes: [
        { pre: 'Needs should take', post: 'per cent of income', a: ['50', 'fifty'], e: 'Пятьдесят процентов на нужды.' },
        { pre: 'Wants:', post: 'per cent', a: ['30', 'thirty'], e: 'Тридцать процентов на желания.' },
        { pre: 'Savings:', post: 'per cent', a: ['20', 'twenty'], e: 'Двадцать процентов на сбережения.' },
        { pre: 'Emergency fund covers', post: 'to six months', a: ['3', 'three'], e: 'От трёх до шести месяцев.' },
        { pre: 'Record spending for', post: 'weeks', a: ['4', 'four'], e: 'Четыре недели.' }
      ],
      mc: [
        { q: 'What does financial independence mean?', opts: ['having enough without depending on others', 'having a very large income', 'avoiding all spending'], a: 'A', e: 'Достаточно средств, не завися от других.' },
        { q: 'Why does the lecturer warn against comparing lifestyles?', opts: ['it can lead to debt', 'it is impolite', 'it is illegal'], a: 'A', e: 'Это может привести к долгам.' },
        { q: 'When is the assignment due?', opts: ['15 December', '5 December', '15 January'], a: 'A', e: 'Пятнадцатого декабря.' }
      ]
    },
    writing: {
      title: 'Al-Ghani — wealth and happiness', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: приносят ли деньги счастье.',
      task2: {
        prompt: 'Some people believe that having a lot of money is the key to a happy life. Others think that contentment is more important. To what extent do you agree or disagree that money is the key to happiness?',
        keywords: ['money', 'happiness', 'wealth', 'contentment', 'relationships', 'security', 'needs', 'health', 'satisfaction', 'materialism'],
        model: `It is widely assumed that wealth brings happiness. I disagree with the view that money is the key to a happy life, although I accept that a certain level of income is necessary for well-being.

On one hand, it would be unrealistic to deny that money matters. People who cannot afford food, housing or medical treatment suffer from constant stress, and their opportunities are limited. In poorer households, an increase in income often leads to a clear improvement in quality of life. Money also provides security, choice and the ability to help family members.

On the other hand, once basic needs are met, additional wealth tends to produce less additional satisfaction. Psychologists have observed that people quickly adapt to a higher standard of living and then desire more, a pattern sometimes called the hedonic treadmill. Wealthy people can also be unhappy if they lack close relationships, good health or a sense of purpose, none of which can be bought. Moreover, constant pursuit of money can reduce the time available for family and friends, which are among the most reliable sources of happiness.

Contentment, by contrast, is an attitude that can be developed at any income. A person who is grateful for what he has, and who has realistic expectations, is less likely to feel envy. Such a person can enjoy simple pleasures such as a meal with family or a walk in a park.

In conclusion, a sufficient income is a foundation for well-being, but it is not the key to happiness. Relationships, health and contentment are more important in the long run.`,
        analysis: [
          'Task Response: ясное несогласие с оговоркой о базовых потребностях.',
          'Аргументация: потребности и безопасность vs адаптация к достатку, отношения, довольство.',
          'Cohesion: On one hand / On the other hand / Moreover / by contrast.',
          'Lexical Resource: hedonic treadmill, contentment, security, envy; осторожная формулировка исследований.'
        ]
      }
    },
    speaking: {
      title: 'Al-Ghani — having enough', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о достатке и разговор о деньгах и довольстве.',
      keywords: ['enough', 'content', 'money', 'need', 'want', 'save', 'spend', 'grateful', 'independent', 'simple'],
      part1: [
        { q: 'Do you save money?', a: 'Yes, I put aside a small part of my salary every month. It gives me a sense of security.' },
        { q: 'What do you spend most of your money on?', a: 'Books, transport and food. I do not buy many things, because I try to spend only on what I need.' },
        { q: 'Is money important to you?', a: 'It is important as a tool, but I do not think it should be the main goal of life.' },
        { q: 'Would you like to be rich?', a: 'It would be pleasant, but I would be happier with a comfortable life and the time to do what I love.' }
      ],
      part2: {
        topic: 'Describe a time when you realised that you had enough.', bullets: ['what the situation was', 'what you had', 'what you realised', 'and explain how it changed your attitude.'],
        plan: [{ h: '1. Situation', t: 'Wanted a new phone.' }, { h: '2. Had', t: 'A working phone, a good life.' }, { h: '3. Realised', t: 'I did not need it.' }, { h: '4. Changed', t: 'More grateful, spent less.' }],
        model: `I would like to describe a moment about two years ago, when I realised that I already had enough of what I needed.

At that time, a new model of smartphone had been released, and all my colleagues seemed to be talking about it. The advertising said that the camera was extraordinary and the screen was brighter than ever. I started to feel that my own phone, which was three years old, was somehow inadequate, and I began saving for the new one.

One evening, however, I was sitting with my family at dinner, and I noticed that my phone was in my hand, as I was reading reviews of the new model. My younger brother asked me a simple question: "Is your phone broken?" I answered that it was not. After that, I put it down and thought about it for some time.

I realised that my phone worked perfectly well, that I had a warm home, a job I liked and people who cared about me, and that the desire for a new gadget was created mostly by advertisements. I did not actually need anything more.

After that moment, my attitude changed. I stopped following reviews and began to spend my savings on things that gave lasting value, such as a trip with my family and a course in photography. I feel calmer and more grateful, and I have learned that contentment is a skill that can be practised every day.`
      },
      part3: [
        { q: 'Why do people always want more?', a: 'Partly because of comparison and advertising, and partly because people quickly get used to what they have.' },
        { q: 'Does having money make people more independent?', a: 'To a certain extent. It gives choices, but independence also depends on skills and self-control.' },
        { q: 'How can parents teach children about money?', a: 'By giving small allowances, discussing family budgets and explaining the difference between needs and wants.' }
      ]
    }
  });

  /* ===== 89 · Al-Mughni ===== */
  put(89, {
    listening: {
      title: 'Al-Mughni — a microloan programme', spec: 'Listening · Part 2 format · монолог, 8 вопросов · ~3 минуты',
      takeaway: 'Информация о программе микрокредитов: суммы, сроки, условия.',
      context: 'Part 2. Сотрудник фонда объясняет участникам программу поддержки малого бизнеса.', genders: { Speaker: 'm' },
      script: `Speaker: Welcome to the information evening of the Small Business Support Fund. I will explain how our programme works.
Speaker: The fund offers loans to people who want to start or expand a small business, such as a bakery, a workshop or a repair service. The loans are between five hundred and five thousand pounds.
Speaker: Applicants must complete a short training course first. It lasts two weeks and covers basic accounting, marketing and customer service.
Speaker: After the course, you submit a business plan of no more than ten pages. A committee reviews the plans every month, usually on the first Monday.
Speaker: Repayment starts three months after you receive the money, and the loan must be repaid within two years. The interest rate is low, at three per cent a year.
Speaker: We are not able to promise that every business will succeed. Some do not, and we help those owners to find a new direction. But we know that many borrowers have become self-sufficient and now employ other people.
Speaker: To apply, please visit our website or come to our office at number twelve, Station Road. The deadline for the next round is the thirtieth of September.`,
      notesTitle: 'Small Business Support Fund',
      notes: [
        { pre: 'Loans from £500 to £', post: '', a: ['5000', '5,000', 'five thousand'], e: 'До пяти тысяч фунтов.' },
        { pre: 'Training course lasts', post: 'weeks', a: ['2', 'two'], e: 'Две недели.' },
        { pre: 'Business plan: maximum', post: 'pages', a: ['10', 'ten'], e: 'Не более десяти страниц.' },
        { pre: 'Repay within', post: 'years', a: ['2', 'two'], e: 'В течение двух лет.' },
        { pre: 'Interest rate:', post: 'per cent a year', a: ['3', 'three'], e: 'Три процента годовых.' }
      ],
      mc: [
        { q: 'When does the committee review plans?', opts: ['first Monday of each month', 'every Friday', 'once a year'], a: 'A', e: 'В первый понедельник месяца.' },
        { q: 'What does the fund do for businesses that fail?', opts: ['helps owners find a new direction', 'demands immediate payment', 'ignores them'], a: 'A', e: 'Помогает найти новое направление.' },
        { q: 'What is the deadline for the next round?', opts: ['30 September', '13 September', '30 October'], a: 'A', e: 'Тридцатое сентября.' }
      ]
    },
    writing: {
      title: 'Al-Mughni — helping people become self-reliant', spec: 'Writing · Task 2 Discuss both views · 40 минут · минимум 250 слов',
      takeaway: 'Обсуждение: прямая помощь или обучение навыкам.',
      task2: {
        prompt: 'Some people think that the best way to help poorer communities is to give them money directly. Others believe it is better to provide education and training. Discuss both views and give your own opinion.',
        keywords: ['poverty', 'aid', 'money', 'education', 'training', 'self-reliance', 'communities', 'jobs', 'skills', 'long-term', 'dependence'],
        model: `How to assist low-income communities is a question that concerns governments and charities alike. Some argue for direct cash payments, while others prefer education and training. In my opinion, a combination is best, with priority given to skills.

Supporters of direct payments point out that poverty is, at its most basic, a lack of money. A family that receives cash can immediately buy food, pay for medicine or send children to school, and the recipients are generally the best judges of their own needs. Several programmes in different countries have been evaluated and found to reduce hunger and improve school attendance, although results depend on how the programme is designed. Cash also avoids the costs of delivering goods.

However, money alone may not solve problems in the long term. Once the payments stop, a family without a source of income may return to its previous situation. Education and training, by contrast, give people the means to earn a living for decades. A farmer who learns modern irrigation, or a young woman who is trained as a nurse, can improve both her own income and the economy of her community. Training also strengthens dignity and independence, which are important for people who wish to support themselves.

I believe that the two methods support each other. Cash can meet urgent needs, while training builds the ability to be self-reliant. Programmes should therefore combine short-term support with opportunities to learn skills and to start small businesses.

In conclusion, direct payments are valuable in emergencies, but education is the stronger path to lasting independence, and both should be used together.`,
        analysis: [
          'Task Response: обе точки зрения раскрыты, позиция — сочетание с приоритетом навыков.',
          'Аргументация: немедленные нужды vs долгосрочная самостоятельность, достоинство.',
          'Cohesion: However / by contrast / therefore / In conclusion.',
          'Lexical Resource: self-reliant, irrigation, low-income, short-term support; осторожные утверждения об исследованиях.'
        ]
      }
    },
    speaking: {
      title: 'Al-Mughni — helping someone stand on their own feet', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ о помощи, сделавшей человека самостоятельным.',
      keywords: ['help', 'support', 'independent', 'skill', 'job', 'teach', 'opportunity', 'confidence', 'start', 'grateful'],
      part1: [
        { q: 'Do you often help other people?', a: 'Yes, when I can. Most often I help friends with studies or advice about their work.' },
        { q: 'What kind of help is most valuable?', a: 'In my opinion, the help that teaches a person how to manage by himself, not only solves one problem.' },
        { q: 'Have you ever received help from a stranger?', a: 'Yes. Once a stranger helped me to find the right bus in a foreign city, and I will remember that kindness.' },
        { q: 'Are you good at asking for help?', a: 'I am learning. I used to hesitate, but I now understand that asking is not weakness.' }
      ],
      part2: {
        topic: 'Describe a time when you helped someone become more independent.', bullets: ['who the person was', 'what you did to help', 'what the person was able to do afterwards', 'and explain how you felt about it.'],
        plan: [{ h: '1. Who', t: 'My neighbour Mrs Raushan.' }, { h: '2. Help', t: 'Taught her to use a smartphone and online shop.' }, { h: '3. After', t: 'Sells handmade items online.' }, { h: '4. Felt', t: 'Proud and happy.' }],
        model: `I would like to talk about my neighbour, Mrs Raushan, whom I helped to become more independent a few years ago.

She is a woman in her fifties who raised three children and then lost her job when the factory closed. She was very skilled at knitting and made beautiful scarves and gloves, but she had no way to sell them except to friends. One day she told me, almost as a joke, that she wished she could "sell things on the internet like young people do".

I decided to teach her. Twice a week, in the evening, I visited her and showed her how to use a smartphone: how to take clear photographs, write a short description and create a page on a market site. At first she was nervous and made mistakes, such as sending messages to the wrong people, but we practised patiently. I did not do the work for her; I let her press the buttons herself.

After about two months, she sold her first scarf to a customer in another city. Today she has regular customers, and she earns enough to pay her bills. She also teaches other women from our neighbourhood what she has learned.

I felt very happy and proud. What touched me most was her confidence: she no longer says that she is too old to learn. I believe that teaching someone a skill is a gift that continues to give.`
      },
      part3: [
        { q: 'Is it better to give money or teach skills?', a: 'In an emergency, money is necessary, but for the long term, skills are more valuable because they cannot be taken away.' },
        { q: 'Why do some people feel uncomfortable accepting help?', a: 'They may worry about being a burden or losing their dignity. Help given respectfully makes it easier.' },
        { q: 'What responsibility do successful people have towards others?', a: 'I think they should share knowledge and opportunities, by mentoring or supporting education, for example.' }
      ]
    }
  });

  /* ===== 90 · Al-Mani' ===== */
  put(90, {
    listening: {
      title: 'Al-Mani\' — a safety briefing', spec: 'Listening · Part 4 format · инструктаж, 8 вопросов · ~3 минуты',
      takeaway: 'Инструктаж по безопасности: правила, числа, запреты.',
      context: 'Part 2. Инструктор объясняет правила безопасности перед походом в горы.', genders: { Instructor: 'f' },
      script: `Instructor: Good morning, everybody. Before we begin the mountain walk, I will explain the safety rules, which exist to protect you.
Instructor: First, you must stay with the group. Nobody should leave the path, even if there is a view that looks tempting. Last year, a walker went off the route to take a photograph and needed a rescue.
Instructor: Second, we start at eight o'clock and return before four, because it becomes dark and cold quickly in the evening.
Instructor: Third, you must carry at least two litres of water and wear walking boots. Trainers are not allowed, and I am afraid that anyone without proper footwear will not be able to join us.
Instructor: Fourth, mobile phones will not work in some areas. Therefore, I will carry a radio, and the group leader will carry a first-aid kit.
Instructor: I know that rules like these may feel restrictive, but each one has a reason. If the weather changes, I may decide to turn back, and I ask you to accept my decision.
Instructor: The walk is eleven kilometres long, with a break for lunch at the halfway point. Are there any questions?`,
      notesTitle: 'Mountain walk rules',
      notes: [
        { pre: 'Start at', post: '', a: ['8', 'eight', '8:00', '8 am', '8am'], e: 'Начало в восемь.' },
        { pre: 'Return before', post: '', a: ['4', 'four', '4:00', '4 pm', '4pm', '16:00'], e: 'Возвращение до четырёх.' },
        { pre: 'Carry at least', post: 'litres of water', a: ['2', 'two'], e: 'Минимум два литра воды.' },
        { pre: 'Not allowed:', post: '', a: ['trainers'], e: 'Кроссовки запрещены.' },
        { pre: 'Length of walk:', post: 'kilometres', a: ['11', 'eleven'], e: 'Одиннадцать километров.' }
      ],
      mc: [
        { q: 'Why will the instructor carry a radio?', opts: ['phones will not work in some areas', 'it is part of the lesson', 'to play music'], a: 'A', e: 'В некоторых местах нет связи.' },
        { q: 'What may the instructor decide if the weather changes?', opts: ['to turn back', 'to go faster', 'to change the route to a higher one'], a: 'A', e: 'Повернуть назад.' },
        { q: 'Where is the lunch break?', opts: ['at the halfway point', 'at the start', 'at the summit'], a: 'A', e: 'На середине маршрута.' }
      ]
    },
    writing: {
      title: 'Al-Mani\' — limits and freedom', spec: 'Writing · Task 2 Agree/Disagree · 40 минут · минимум 250 слов',
      takeaway: 'Аргументация: нужны ли ограничения для детей и подростков.',
      task2: {
        prompt: 'Some people believe that parents should set strict limits on how much time children spend on screens. Others think children should be free to decide for themselves. To what extent do you agree or disagree with the first view?',
        keywords: ['children', 'parents', 'limits', 'screens', 'technology', 'freedom', 'health', 'sleep', 'responsibility', 'self-control'],
        model: `Digital devices occupy an increasing part of children's lives, and parents often wonder how much freedom to allow. I largely agree that parents should set clear limits, but I believe that these limits should be explained and gradually relaxed as children grow.

There are good reasons for restrictions. Young children cannot yet judge the long-term effects of their habits. Excessive screen time may reduce sleep, physical activity and face-to-face conversation, and some studies link heavy use with difficulties in concentration, although the evidence is still developing. Many applications are also designed to hold attention for as long as possible, so that a child may find it extremely hard to stop without help. Just as parents decide on bedtime and healthy food, it is reasonable to set sensible rules on technology.

On the other hand, a ban without explanation can be counterproductive. Children who are forbidden everything may hide their behaviour or overuse devices when they are away from home. Moreover, technology also offers educational value, creativity and a way to keep in touch with friends. The aim is not to prevent children from using screens, but to teach them to use screens wisely.

For this reason, I think that limits should be set together with the child. Younger children need firm rules, such as no screens at meals or in the bedroom, while teenagers can be given more responsibility to plan their own time. Parents who also limit their own use are more convincing.

In conclusion, clear limits protect children while they are learning self-control, but they should be flexible and explained so that children eventually manage by themselves.`,
        analysis: [
          'Task Response: градуированная позиция («в основном согласен, но с объяснением и гибкостью»).',
          'Аргументация: защита здоровья и сна vs риск запретов, польза технологий; пример родителей.',
          'Cohesion: On the other hand / Moreover / For this reason / In conclusion.',
          'Lexical Resource: counterproductive, restrictions, self-control; осторожное упоминание исследований.'
        ]
      }
    },
    speaking: {
      title: 'Al-Mani\' — a rule that protected you', spec: 'Speaking · Part 1 (4) + Part 2 + Part 3 (3) · 8–10 минут',
      takeaway: 'Рассказ об отказе, который оказался защитой, и разговор о границах.',
      keywords: ['rule', 'refuse', 'limit', 'protect', 'safe', 'disappointed', 'decision', 'boundary', 'later', 'understand'],
      part1: [
        { q: 'Do you like to follow rules?', a: 'Most of the time. I think rules protect people when they are reasonable and explained.' },
        { q: 'Did your parents say no to you often?', a: 'Not very often, but when they did, they gave reasons. I did not always agree, but I understood them.' },
        { q: 'How do you feel when someone refuses your request?', a: 'I am usually disappointed for a moment, then I try to understand why.' },
        { q: 'Do you set limits for yourself?', a: 'Yes, for example I turn off notifications in the evening so that I can rest.' }
      ],
      part2: {
        topic: 'Describe a time when you were refused something, and later you were glad.', bullets: ['what you asked for', 'who refused', 'why you were upset', 'and explain why you were glad later.'],
        plan: [{ h: '1. Asked', t: 'To join a trip to the lake.' }, { h: '2. Refused', t: 'My father.' }, { h: '3. Upset', t: 'All my friends went.' }, { h: '4. Glad later', t: 'Storm; they were in danger.' }],
        model: `I would like to describe a time when I was refused permission to go on a trip, and later I was very glad.

When I was sixteen, my classmates organised a day trip to a lake about eighty kilometres from our city. They planned to go by car with an older student who had just received his licence. I really wanted to go, because the whole class was joining, and I asked my father for permission.

He said no. He did not shout; he simply said that he was not comfortable with a young driver on a long road and that he would prefer me to stay at home. I was very upset. I argued, I said that he did not trust me, and I spent that morning in my room in a bad mood while my friends were taking photographs and sending messages about how wonderful everything was.

In the afternoon, however, a strong storm began. The road was flooded, and the car in which my friends were travelling slid off the road into a ditch. Fortunately, nobody was seriously injured, but they were left waiting for several hours in the rain until help arrived.

When I heard what had happened, I felt both sorry for them and very thankful. I went to my father and thanked him. He only smiled and said that he was not able to know what would happen, but he had followed his feelings of concern.

Since then, when I am refused something, I try to remember that a closed door may sometimes be a form of protection.`
      },
      part3: [
        { q: 'Why do parents have to say no to children?', a: 'Because children do not always see risks. Limits teach them safe behaviour until they can judge for themselves.' },
        { q: 'Is it good to learn to accept refusal?', a: 'Yes. It builds patience and resilience, and it prepares people for situations in which they cannot get what they want.' },
        { q: 'When should rules be changed?', a: 'When they no longer serve their purpose or cause unfair harm. Changes should come through open discussion.' }
      ]
    }
  });
})();

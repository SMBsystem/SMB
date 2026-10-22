// English A1 — уроки 6–10 (структура — как в lessons-a1-1.js).
// Переводы на казахский подготовлены с помощью ИИ и требуют проверки преподавателем.
window.ENG = window.ENG || { LESSONS: {} };
ENG.LESSONS.a1 = (ENG.LESSONS.a1 || []).concat([

  /* 6 */
  {
    id: 6, icon: '🏙️',
    title: { en: 'Places in town', kk: 'Қаладағы орындар', ru: 'Места в городе' },
    goal: { kk: 'Қаланы сипаттау, there is / there are, орын предлогтары', ru: 'Описать город, there is / there are, предлоги места' },
    vocab: [
      ['bank', 'банк', 'банк', 'The bank is near the park.'],
      ['school', 'мектеп', 'школа', 'My school is in the centre.'],
      ['park', 'саябақ', 'парк', 'We walk in the park.'],
      ['shop', 'дүкен', 'магазин', 'There is a shop on my street.'],
      ['hospital', 'аурухана', 'больница', 'The hospital is big.'],
      ['library', 'кітапхана', 'библиотека', 'I read books in the library.'],
      ['cinema', 'кинотеатр', 'кинотеатр', 'The cinema is next to the market.'],
      ['market', 'базар', 'рынок', 'We buy fruit at the market.'],
      ['station', 'вокзал', 'вокзал', 'The station is far from here.'],
      ['street', 'көше', 'улица', 'My street is quiet.']
    ],
    grammar: {
      title: { kk: 'There is / There are және орын предлогтары', ru: 'There is / There are и предлоги места' },
      explain: {
        kk: '«Бар» деп орынды сипаттағанда: <b>There is</b> + жекеше (There is a park.), <b>There are</b> + көпше (There are two shops.).<br>Болымсыз: There <b>isn’t</b> a hospital. Сұрақ: <b>Is there</b> a bank here? — Yes, <b>there is</b>.<br>Предлогтар: <b>in</b> (ішінде), <b>on</b> (үстінде), <b>next to</b> (қасында), <b>between</b> (арасында), <b>opposite</b> (қарама-қарсы).',
        ru: 'Чтобы сказать, что где-то что-то есть: <b>There is</b> + ед. число (There is a park.), <b>There are</b> + мн. число (There are two shops.).<br>Отрицание: There <b>isn’t</b> a hospital. Вопрос: <b>Is there</b> a bank here? — Yes, <b>there is</b>.<br>Предлоги: <b>in</b> (в), <b>on</b> (на), <b>next to</b> (рядом с), <b>between</b> (между), <b>opposite</b> (напротив).'
      },
      examples: [['There is a park near my house.', 'Рядом с моим домом есть парк.'], ['There are two shops in this street.', 'На этой улице два магазина.'], ['The bank is between the school and the cinema.', 'Банк между школой и кинотеатром.']],
      quiz: [
        { q: 'There ___ a park near my house.', o: ['is', 'are', 'am'], a: 0, e: { ru: 'a park — единственное число: There is.', kk: 'a park — жекеше: There is.' } },
        { q: 'There ___ two shops in this street.', o: ['is', 'are', 'be'], a: 1, e: { ru: 'two shops — множественное: There are.', kk: 'two shops — көпше: There are.' } },
        { q: 'The bank is ___ the school and the cinema.', o: ['between', 'on', 'at'], a: 0, e: { ru: 'Между двумя объектами — between.', kk: 'Екі нысан арасында — between.' } },
        { q: 'The library is ___ to the park.', o: ['next', 'between', 'in'], a: 0, e: { ru: 'next to = рядом с.', kk: 'next to = қасында.' } },
        { q: 'Is there a hospital here? — Yes, ___ is.', o: ['there', 'it', 'they'], a: 0, e: { ru: 'Краткий ответ: Yes, there is.', kk: 'Қысқа жауап: Yes, there is.' } }
      ]
    },
    reading: {
      title: 'My town',
      text: 'I live in a small town. There is a big park in the centre. There are two schools and a library. The library is next to the park. The cinema is opposite the market. There isn\'t a hospital in our town, but there is a small clinic. I like my town because it is quiet and green.',
      q: [
        { q: 'Where is the library?', o: ['Next to the park', 'Opposite the market', 'In the clinic'], a: 0, e: '“The library is next to the park.”' },
        { q: 'What is opposite the market?', o: ['The park', 'The cinema', 'The school'], a: 1, e: '“The cinema is opposite the market.”' },
        { q: 'Is there a hospital in the town?', o: ['Yes, a big one', 'No, only a small clinic', 'Yes, two hospitals'], a: 1, e: '“There isn\'t a hospital … but there is a small clinic.”' },
        { q: 'Why does the writer like the town?', o: ['It is big and loud', 'It is quiet and green', 'It has a station'], a: 1, e: '“it is quiet and green.”' }
      ]
    },
    listening: {
      context: { kk: 'Саяхатшы жолды сұрайды.', ru: 'Турист спрашивает дорогу.' },
      genders: { Tourist: 'f', Local: 'm' },
      script: 'Tourist: Excuse me, is there a bank near here?\nLocal: Yes, there is. Go straight, then turn left. The bank is next to the post office.\nTourist: Is it far?\nLocal: No, it\'s five minutes on foot.\nTourist: Thank you very much!\nLocal: You\'re welcome.',
      q: [
        { q: 'What is the tourist looking for?', o: ['A bank', 'A hospital', 'A cinema'], a: 0, e: '“is there a bank near here?”' },
        { q: 'Where is the bank?', o: ['Opposite the park', 'Next to the post office', 'Between two shops'], a: 1, e: '“The bank is next to the post office.”' },
        { q: 'Which way does she turn?', o: ['Left', 'Right', 'She goes back'], a: 0, e: '“then turn left.”' },
        { q: 'How long is the walk?', o: ['Five minutes', 'Fifteen minutes', 'One hour'], a: 0, e: '“five minutes on foot.”' }
      ]
    },
    writing: {
      prompt: 'Describe your street or your town. Write 5 sentences with There is / There are.',
      min: 35,
      tips: { kk: 'There is / There are және next to, opposite, between қолданыңыз.', ru: 'Используйте There is / There are и next to, opposite, between.' },
      model: 'I live in a big city. There is a park near my house. There are three shops and a library in my street. The school is opposite the park. There isn\'t a cinema, but there is a market next to the station.'
    },
    speaking: {
      prompts: ['Where do you live?', 'What is near your home?', 'Is there a park in your town?', 'What is your favourite place in your town?'],
      model: 'I live in Astana. There is a big park near my home. There are two shops and a library in my street. My favourite place is the park.'
    }
  },

  /* 7 */
  {
    id: 7, icon: '📅',
    title: { en: 'Time and days', kk: 'Уақыт және күндер', ru: 'Время и дни' },
    goal: { kk: 'Сағатты айту, апта күндері, at / on / in', ru: 'Называть время, дни недели, at / on / in' },
    vocab: [
      ['Monday', 'дүйсенбі', 'понедельник', 'I have English on Monday.'],
      ['Tuesday', 'сейсенбі', 'вторник', 'On Tuesday we swim.'],
      ['Saturday', 'сенбі', 'суббота', 'I help my mother on Saturday.'],
      ['Sunday', 'жексенбі', 'воскресенье', 'We visit grandma on Sunday.'],
      ['week', 'апта', 'неделя', 'There are seven days in a week.'],
      ['weekend', 'демалыс күндері', 'выходные', 'I relax at the weekend.'],
      ['morning', 'таңертең', 'утро', 'I run in the morning.'],
      ['afternoon', 'түстен кейін', 'день (после полудня)', 'We play in the afternoon.'],
      ['evening', 'кеш', 'вечер', 'I read in the evening.'],
      ['o’clock', 'сағат (нақты)', 'ровно (о часах)', 'It is seven o’clock.']
    ],
    grammar: {
      title: { kk: 'Сағат және at / on / in', ru: 'Время и at / on / in' },
      explain: {
        kk: 'Сағат: <b>It is</b> seven o’clock. 7:15 — <b>quarter past</b> seven; 7:30 — <b>half past</b> seven; 7:45 — <b>quarter to</b> eight.<br>Предлогтар: <b>at</b> + нақты уақыт (at 5 o’clock), <b>on</b> + күн (on Monday), <b>in</b> + тәулік бөлігі (in the morning). Бірақ: <b>at</b> night, <b>at</b> the weekend.',
        ru: 'Время: <b>It is</b> seven o’clock. 7:15 — <b>quarter past</b> seven; 7:30 — <b>half past</b> seven; 7:45 — <b>quarter to</b> eight.<br>Предлоги: <b>at</b> + точное время (at 5 o’clock), <b>on</b> + день (on Monday), <b>in</b> + часть суток (in the morning). Но: <b>at</b> night, <b>at</b> the weekend.'
      },
      examples: [['The lesson starts at nine o’clock.', 'Урок начинается в девять.'], ['I have football on Saturday.', 'У меня футбол в субботу.'], ['We have breakfast in the morning.', 'Мы завтракаем утром.']],
      quiz: [
        { q: 'The lesson starts ___ nine o’clock.', o: ['at', 'on', 'in'], a: 0, e: { ru: 'Точное время — at.', kk: 'Нақты уақыт — at.' } },
        { q: 'I have football ___ Saturday.', o: ['at', 'on', 'in'], a: 1, e: { ru: 'День недели — on.', kk: 'Апта күні — on.' } },
        { q: 'We have breakfast ___ the morning.', o: ['at', 'on', 'in'], a: 2, e: { ru: 'Часть суток — in.', kk: 'Тәулік бөлігі — in.' } },
        { q: 'What time ___ it? — It’s half past two.', o: ['is', 'are', 'does'], a: 0, e: { ru: 'What time is it?', kk: 'What time is it?' } },
        { q: '10:15 is ___.', o: ['quarter past ten', 'quarter to ten', 'half past ten'], a: 0, e: { ru: '15 минут после десяти — quarter past ten.', kk: 'Оннан он бес минут өткен — quarter past ten.' } }
      ]
    },
    reading: {
      title: 'My week',
      text: 'On Monday and Wednesday I have English at ten o\'clock. On Tuesday I have a swimming lesson in the afternoon. On Friday evening I meet my friends. At the weekend I do not go to school. On Saturday morning I help my mother. On Sunday afternoon we visit my grandmother.',
      q: [
        { q: 'When does the writer have English?', o: ['Monday and Wednesday', 'Tuesday and Friday', 'Saturday and Sunday'], a: 0, e: '“On Monday and Wednesday I have English”' },
        { q: 'What does the writer do on Friday evening?', o: ['Swims', 'Meets friends', 'Helps mother'], a: 1, e: '“On Friday evening I meet my friends.”' },
        { q: 'When does the writer help his / her mother?', o: ['Saturday morning', 'Sunday afternoon', 'Monday morning'], a: 0, e: '“On Saturday morning I help my mother.”' },
        { q: 'Who do they visit on Sunday?', o: ['An aunt', 'A grandmother', 'A teacher'], a: 1, e: '“we visit my grandmother.”' }
      ]
    },
    listening: {
      context: { kk: 'Екі дос демалыс жоспарын құрады.', ru: 'Два друга планируют выходные.' },
      genders: { Kim: 'f', Dan: 'm' },
      script: 'Kim: Are you free on Saturday?\nDan: Yes, I am. What time?\nKim: Let\'s meet at half past ten.\nDan: Where?\nKim: At the library. Then we can go to the cinema.\nDan: Great! What time does the film start?\nKim: At three o\'clock.',
      q: [
        { q: 'Which day do they meet?', o: ['Friday', 'Saturday', 'Sunday'], a: 1, e: '“free on Saturday”' },
        { q: 'What time do they meet?', o: ['10:00', '10:30', '3:00'], a: 1, e: '“half past ten”' },
        { q: 'Where do they meet?', o: ['At the cinema', 'At the library', 'At school'], a: 1, e: '“At the library.”' },
        { q: 'What time does the film start?', o: ['At three', 'At ten', 'At half past ten'], a: 0, e: '“At three o\'clock.”' }
      ]
    },
    writing: {
      prompt: 'Write about your weekend. Say what you do on Saturday and Sunday. Use at, on and in.',
      min: 35,
      tips: { kk: 'On Saturday … / In the morning … / At six o’clock … қолданыңыз.', ru: 'Используйте On Saturday … / In the morning … / At six o’clock …' },
      model: 'On Saturday morning I help my mother at home. In the afternoon I play football with my friends. At six o\'clock I have dinner. On Sunday I visit my grandmother, and in the evening I do my homework.'
    },
    speaking: {
      prompts: ['What day is it today?', 'When do you have English?', 'What do you do at the weekend?', 'What time do you go to bed on Sunday?'],
      model: 'Today is Monday. I have English on Tuesday and Thursday. At the weekend I visit my grandmother. On Sunday I go to bed at ten o\'clock.'
    }
  },

  /* 8 */
  {
    id: 8, icon: '🎸',
    title: { en: 'Hobbies and free time', kk: 'Хобби және бос уақыт', ru: 'Хобби и свободное время' },
    goal: { kk: 'Хобби туралы айту, like + -ing, can / can’t', ru: 'Рассказать о хобби, like + -ing, can / can’t' },
    vocab: [
      ['hobby', 'хобби', 'хобби', 'My hobby is drawing.'],
      ['music', 'музыка', 'музыка', 'I listen to music.'],
      ['football', 'футбол', 'футбол', 'We play football after school.'],
      ['swimming', 'жүзу', 'плавание', 'I like swimming.'],
      ['reading', 'оқу', 'чтение', 'Reading is my hobby.'],
      ['drawing', 'сурет салу', 'рисование', 'She loves drawing.'],
      ['dance', 'би', 'танец / танцевать', 'Can you dance?'],
      ['game', 'ойын', 'игра', 'We play a computer game.'],
      ['guitar', 'гитара', 'гитара', 'He plays the guitar.'],
      ['chess', 'шахмат', 'шахматы', 'My grandfather plays chess.']
    ],
    grammar: {
      title: { kk: 'like / love + -ing; can / can’t', ru: 'like / love + -ing; can / can’t' },
      explain: {
        kk: 'Ұнату: <b>like / love / hate</b> + етістік<b>-ing</b>: I like <b>playing</b> chess. She loves <b>swimming</b>.<br><b>can</b> — «қолынан келеді»: I <b>can</b> swim. Болымсыз: I <b>can’t</b> dance. Сұрақ: <b>Can</b> you play the guitar? — Yes, I <b>can</b>. <i>can</i>-нан кейін етістік өзгермейді (he can play).',
        ru: 'Нравится: <b>like / love / hate</b> + глагол<b>-ing</b>: I like <b>playing</b> chess. She loves <b>swimming</b>.<br><b>can</b> — «уметь, мочь»: I <b>can</b> swim. Отрицание: I <b>can’t</b> dance. Вопрос: <b>Can</b> you play the guitar? — Yes, I <b>can</b>. После <i>can</i> глагол не меняется (he can play).'
      },
      examples: [['I like playing football.', 'Я люблю играть в футбол.'], ['She can play the guitar.', 'Она умеет играть на гитаре.'], ['He can’t swim.', 'Он не умеет плавать.']],
      quiz: [
        { q: 'I like ___ football.', o: ['play', 'playing', 'plays'], a: 1, e: { ru: 'После like — глагол с -ing.', kk: 'like-тан кейін — -ing.' } },
        { q: 'She can ___ the guitar.', o: ['plays', 'play', 'playing'], a: 1, e: { ru: 'После can — начальная форма.', kk: 'can-нан кейін — бастапқы форма.' } },
        { q: 'He ___ swim.', o: ['can’t', 'doesn’t', 'isn’t'], a: 0, e: { ru: 'Не умеет — can’t + глагол.', kk: 'Қолынан келмейді — can’t.' } },
        { q: 'Can you dance? — Yes, I ___.', o: ['can', 'do', 'am'], a: 0, e: { ru: 'Краткий ответ: Yes, I can.', kk: 'Қысқа жауап: Yes, I can.' } },
        { q: 'We love ___ pictures.', o: ['draw', 'drawing', 'draws'], a: 1, e: { ru: 'После love — -ing.', kk: 'love-тан кейін — -ing.' } }
      ]
    },
    reading: {
      title: 'Our hobbies',
      text: 'Aida loves drawing. She can draw animals and people. Bolat likes playing chess. He plays every Friday after school. Dana can play the guitar and she sings very well. I like swimming. I can swim fast, but I can\'t dance. What about you?',
      q: [
        { q: 'What does Aida love?', o: ['Drawing', 'Chess', 'Swimming'], a: 0, e: '“Aida loves drawing.”' },
        { q: 'When does Bolat play chess?', o: ['Every Friday after school', 'Every Monday', 'At the weekend'], a: 0, e: '“He plays every Friday after school.”' },
        { q: 'What can Dana do?', o: ['Swim fast', 'Play the guitar and sing', 'Draw people'], a: 1, e: '“Dana can play the guitar and she sings very well.”' },
        { q: 'Can the writer dance?', o: ['Yes', 'No', 'A little'], a: 1, e: '“I can\'t dance.”' }
      ]
    },
    listening: {
      context: { kk: 'Екі дос хобби туралы сөйлеседі.', ru: 'Двое друзей говорят о хобби.' },
      genders: { Kim: 'f', Arman: 'm' },
      script: 'Kim: Do you have a hobby, Arman?\nArman: Yes, I like playing the guitar. I can play ten songs!\nKim: Wow! Can you sing, too?\nArman: No, I can\'t. But my sister can.\nKim: What does she like?\nArman: She likes dancing and drawing.',
      q: [
        { q: 'What is Arman’s hobby?', o: ['Playing the guitar', 'Playing chess', 'Swimming'], a: 0, e: '“I like playing the guitar.”' },
        { q: 'How many songs can Arman play?', o: ['Two', 'Ten', 'Twenty'], a: 1, e: '“I can play ten songs!”' },
        { q: 'Can Arman sing?', o: ['Yes', 'No', 'A little'], a: 1, e: '“No, I can\'t.”' },
        { q: 'What does his sister like?', o: ['Dancing and drawing', 'Football', 'Reading'], a: 0, e: '“She likes dancing and drawing.”' }
      ]
    },
    writing: {
      prompt: 'Write 5 sentences about your hobbies. Say what you like doing and what you can do.',
      min: 35,
      tips: { kk: 'I like + -ing және I can / I can’t қолданыңыз.', ru: 'Используйте I like + -ing и I can / I can’t.' },
      model: 'My hobby is drawing. I like drawing animals and flowers. I can also play chess, but I can\'t play the guitar. At the weekend I like swimming with my friends. I love listening to music, too.'
    },
    speaking: {
      prompts: ['What is your hobby?', 'What do you like doing at the weekend?', 'Can you play a musical instrument?', 'Can you swim?'],
      model: 'My hobby is drawing. At the weekend I like swimming. I can\'t play the guitar, but I can play chess. Yes, I can swim.'
    }
  },

  /* 9 */
  {
    id: 9, icon: '⛅',
    title: { en: 'Weather and seasons', kk: 'Ауа райы және жыл мезгілдері', ru: 'Погода и времена года' },
    goal: { kk: 'Ауа райын сипаттау, It is …, Present Continuous', ru: 'Описать погоду, It is …, Present Continuous' },
    vocab: [
      ['weather', 'ауа райы', 'погода', 'The weather is nice today.'],
      ['sunny', 'күн ашық', 'солнечно', 'It is sunny today.'],
      ['rainy', 'жаңбырлы', 'дождливо', 'It is rainy in autumn.'],
      ['cloudy', 'бұлтты', 'облачно', 'It is cloudy in Astana.'],
      ['windy', 'желді', 'ветрено', 'It is windy in spring.'],
      ['snowy', 'қарлы', 'снежно', 'It is snowy in January.'],
      ['hot', 'ыстық', 'жарко', 'It is hot in summer.'],
      ['cold', 'суық', 'холодно', 'It is cold in winter.'],
      ['season', 'жыл мезгілі', 'время года', 'My favourite season is spring.'],
      ['temperature', 'температура', 'температура', 'The temperature is twenty degrees.']
    ],
    grammar: {
      title: { kk: 'It is + сын есім; Present Continuous', ru: 'It is + прилагательное; Present Continuous' },
      explain: {
        kk: 'Ауа райы: <b>It is</b> sunny / cold / hot. Сұрақ: <b>What’s the weather like?</b><br>Қазір болып жатқан іс: <b>am / is / are + етістік-ing</b>: It <b>is raining</b>. The children <b>are playing</b>. I <b>am reading</b>.',
        ru: 'Погода: <b>It is</b> sunny / cold / hot. Вопрос: <b>What’s the weather like?</b><br>Действие прямо сейчас: <b>am / is / are + глагол-ing</b>: It <b>is raining</b>. The children <b>are playing</b>. I <b>am reading</b>.'
      },
      examples: [['It is cold in winter.', 'Зимой холодно.'], ['Look! It is raining.', 'Смотри! Идёт дождь.'], ['The children are playing in the snow.', 'Дети играют в снегу.']],
      quiz: [
        { q: 'What’s the weather ___ today?', o: ['like', 'as', 'for'], a: 0, e: { ru: 'What’s the weather like?', kk: 'What’s the weather like?' } },
        { q: 'It ___ cold in winter.', o: ['is', 'are', 'am'], a: 0, e: { ru: 'It — is.', kk: 'It — is.' } },
        { q: 'Look! It’s ___.', o: ['rain', 'raining', 'rains'], a: 1, e: { ru: 'Сейчас: is + -ing.', kk: 'Қазір: is + -ing.' } },
        { q: 'The children ___ playing in the snow.', o: ['is', 'are', 'am'], a: 1, e: { ru: 'The children — мн. число: are.', kk: 'The children — көпше: are.' } },
        { q: 'In summer it is very ___.', o: ['snowy', 'hot', 'cold'], a: 1, e: { ru: 'Летом очень жарко.', kk: 'Жазда өте ыстық.' } }
      ]
    },
    reading: {
      title: 'Weather in Kazakhstan',
      text: 'Kazakhstan is a big country, so the weather is different in different places. In winter it is very cold in the north. The temperature can be minus thirty degrees. In summer it is hot in the south, and the temperature can be plus forty. In spring and autumn the weather is often windy. Today in Astana it is cloudy and cold.',
      q: [
        { q: 'Why is the weather different in different places?', o: ['The country is big', 'The country is small', 'There is a lot of snow'], a: 0, e: '“Kazakhstan is a big country, so the weather is different”' },
        { q: 'How cold can it be in the north in winter?', o: ['Minus ten', 'Minus thirty', 'Plus thirty'], a: 1, e: '“minus thirty degrees.”' },
        { q: 'Where is it hot in summer?', o: ['In the north', 'In the south', 'In Astana'], a: 1, e: '“In summer it is hot in the south”' },
        { q: 'What is the weather in Astana today?', o: ['Sunny and hot', 'Cloudy and cold', 'Rainy and warm'], a: 1, e: '“Today in Astana it is cloudy and cold.”' }
      ]
    },
    listening: {
      context: { kk: 'Радиодағы ауа райы болжамы.', ru: 'Прогноз погоды по радио.' },
      genders: { Reporter: 'f' },
      script: 'Reporter: Good morning. Here is the weather report.\nReporter: In the north it is snowy and the temperature is minus ten.\nReporter: In the west it is windy but sunny.\nReporter: In the south it is warm, plus twenty degrees.\nReporter: In Astana it is cloudy, and it is raining in the evening. Take an umbrella!',
      q: [
        { q: 'What is the weather in the north?', o: ['Snowy', 'Hot', 'Rainy'], a: 0, e: '“In the north it is snowy”' },
        { q: 'What is the temperature in the south?', o: ['Minus ten', 'Plus twenty', 'Plus forty'], a: 1, e: '“plus twenty degrees.”' },
        { q: 'What is the weather in the west?', o: ['Windy and sunny', 'Cloudy and cold', 'Snowy and windy'], a: 0, e: '“windy but sunny.”' },
        { q: 'What should you take in Astana?', o: ['A hat', 'An umbrella', 'A bag'], a: 1, e: '“Take an umbrella!”' }
      ]
    },
    writing: {
      prompt: 'Describe the weather in your city in each season. Write 5 sentences.',
      min: 35,
      tips: { kk: 'It is … in winter / spring / summer / autumn қолданыңыз.', ru: 'Используйте It is … in winter / spring / summer / autumn.' },
      model: 'In my city it is very cold in winter. It is snowy and windy, and the temperature is minus twenty. In spring it is rainy and cloudy. In summer it is hot and sunny. My favourite season is autumn, because it is warm and quiet.'
    },
    speaking: {
      prompts: ['What’s the weather like today?', 'What is your favourite season?', 'What do you wear in winter?', 'Is it hot in summer in your city?'],
      model: 'Today it is cloudy and cold. My favourite season is spring. In winter I wear a warm coat and a hat. Yes, it is very hot in summer.'
    }
  },

  /* 10 */
  {
    id: 10, icon: '🛍️',
    title: { en: 'Shopping and numbers', kk: 'Сауда және сандар', ru: 'Покупки и числа' },
    goal: { kk: 'Дүкенде сөйлесу, how much / how many, 11–100 сандары', ru: 'Говорить в магазине, how much / how many, числа 11–100' },
    vocab: [
      ['price', 'баға', 'цена', 'What is the price?'],
      ['money', 'ақша', 'деньги', 'I have some money.'],
      ['cheap', 'арзан', 'дешёвый', 'This bag is cheap.'],
      ['expensive', 'қымбат', 'дорогой', 'These shoes are expensive.'],
      ['buy', 'сатып алу', 'покупать', 'I want to buy a shirt.'],
      ['bag', 'сөмке', 'сумка', 'She has a red bag.'],
      ['size', 'өлшем', 'размер', 'What size are you?'],
      ['shirt', 'жейде', 'рубашка', 'He wears a white shirt.'],
      ['shoes', 'аяқ киім', 'обувь', 'My shoes are new.'],
      ['change', 'қайтарым ақша', 'сдача', 'Here is your change.']
    ],
    grammar: {
      title: { kk: 'How much / How many; this / these; сандар', ru: 'How much / How many; this / these; числа' },
      explain: {
        kk: '<b>How much</b> + бағасы / санауға болмайтын зат: How much is this bag? <b>How many</b> + санауға болатын көпше: How many apples?<br><b>this</b> (бұл, жақын, жекеше) — <b>these</b> (бұлар, көпше); <b>that</b> — <b>those</b> (алыстағы).<br>Сандар: 13 thir<b>teen</b>, 30 thir<b>ty</b>, 45 forty-five, 100 a hundred.',
        ru: '<b>How much</b> + цена / неисчисляемое: How much is this bag? <b>How many</b> + исчисляемое во мн. числе: How many apples?<br><b>this</b> (этот, близко, ед.) — <b>these</b> (эти); <b>that</b> — <b>those</b> (те, далеко).<br>Числа: 13 thir<b>teen</b>, 30 thir<b>ty</b>, 45 forty-five, 100 a hundred.'
      },
      examples: [['How much is this bag?', 'Сколько стоит эта сумка?'], ['How many apples do you want?', 'Сколько яблок вы хотите?'], ['These shoes are expensive.', 'Эти туфли дорогие.']],
      quiz: [
        { q: '___ is this bag?', o: ['How much', 'How many', 'How old'], a: 0, e: { ru: 'Цена — How much.', kk: 'Баға — How much.' } },
        { q: '___ apples do you want?', o: ['How much', 'How many', 'How'], a: 1, e: { ru: 'apples — исчисляемое: How many.', kk: 'apples — санауға болады: How many.' } },
        { q: '___ shoes are expensive.', o: ['This', 'These', 'That'], a: 1, e: { ru: 'shoes — мн. число, рядом: these.', kk: 'shoes — көпше, жақын: these.' } },
        { q: '45 is ___.', o: ['forty-five', 'fourteen', 'fifty-four'], a: 0, e: { ru: '45 = forty-five.', kk: '45 = forty-five.' } },
        { q: 'I want ___ shirt, please. (it is near me)', o: ['this', 'these', 'those'], a: 0, e: { ru: 'Один предмет рядом — this.', kk: 'Бір зат, жақын — this.' } }
      ]
    },
    reading: {
      title: 'At the shop',
      text: 'Dana wants to buy a bag. She goes to a shop. The bags are not cheap. A red bag is ten thousand tenge and a black bag is fifteen thousand tenge. Dana likes the red bag because it is nice and not expensive. She has twelve thousand tenge. She buys the red bag and the seller gives her change.',
      q: [
        { q: 'What does Dana want to buy?', o: ['A bag', 'Shoes', 'A shirt'], a: 0, e: '“Dana wants to buy a bag.”' },
        { q: 'How much is the red bag?', o: ['10,000 tenge', '12,000 tenge', '15,000 tenge'], a: 0, e: '“A red bag is ten thousand tenge”' },
        { q: 'Why does she choose the red bag?', o: ['It is nice and not expensive', 'It is big', 'It is black'], a: 0, e: '“it is nice and not expensive.”' },
        { q: 'What does the seller give her?', o: ['A present', 'Change', 'A second bag'], a: 1, e: '“the seller gives her change.”' }
      ]
    },
    listening: {
      context: { kk: 'Аяқ киім дүкенінде.', ru: 'В обувном магазине.' },
      genders: { Assistant: 'f', Customer: 'm' },
      script: 'Assistant: Can I help you?\nCustomer: Yes, how much are these shoes?\nAssistant: They are twenty-five thousand tenge.\nCustomer: That\'s expensive. Do you have a cheaper pair?\nAssistant: Yes. These are fifteen thousand. What size are you?\nCustomer: Size thirty-eight.\nAssistant: OK, here you are.',
      q: [
        { q: 'How much are the first shoes?', o: ['15,000 tenge', '25,000 tenge', '38,000 tenge'], a: 1, e: '“twenty-five thousand tenge.”' },
        { q: 'How much is the cheaper pair?', o: ['15,000 tenge', '25,000 tenge', '12,000 tenge'], a: 0, e: '“These are fifteen thousand.”' },
        { q: 'What is the customer’s size?', o: ['Thirty-five', 'Thirty-eight', 'Forty-five'], a: 1, e: '“Size thirty-eight.”' },
        { q: 'What does the customer say about the first pair?', o: ['It is cheap', 'It is expensive', 'It is small'], a: 1, e: '“That\'s expensive.”' }
      ]
    },
    writing: {
      prompt: 'Write about buying something: what you buy, how much it is and what size you are. Write 5 sentences.',
      min: 35,
      tips: { kk: 'How much … / It is … tenge / I want this … қолданыңыз.', ru: 'Используйте How much … / It is … tenge / I want this …' },
      model: 'I want to buy a new shirt. I go to a shop near my house. The white shirt is eight thousand tenge. It is not expensive. My size is medium, and I like this shirt very much. I buy it and the seller gives me my change.'
    },
    speaking: {
      prompts: ['Do you like shopping?', 'What do you buy every week?', 'How much is your bag?', 'What size are your shoes?'],
      model: 'Yes, I like shopping. Every week I buy bread, milk and fruit. My bag is not expensive. My shoes are size thirty-eight.'
    }
  }

]);

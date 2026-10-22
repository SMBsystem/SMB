// English A1 — уроки 1–5. Структура урока:
// vocab: [en, kk, ru, пример]; grammar: {title, explain (kk/ru, html), examples [[en, ru]], quiz [{q, o[3], a, e{ru,kk}}]};
// reading / listening: вопросы с вариантами, e — цитата из текста; writing: задание + образец; speaking: вопросы + образец.
// Переводы на казахский подготовлены с помощью ИИ и требуют проверки преподавателем.
window.ENG = window.ENG || { LESSONS: {} };
ENG.LESSONS.a1 = (ENG.LESSONS.a1 || []).concat([

  /* 1 */
  {
    id: 1, icon: '👋',
    title: { en: 'Hello! Greetings and “to be”', kk: 'Сәлем! Амандасу және “to be”', ru: 'Привет! Приветствия и “to be”' },
    goal: { kk: 'Амандасу, өзін таныстыру, am / is / are қолдану', ru: 'Здороваться, представляться, использовать am / is / are' },
    vocab: [
      ['hello', 'сәлем', 'привет', 'Hello! I am Dana.'],
      ['goodbye', 'сау бол', 'до свидания', 'Goodbye, see you tomorrow.'],
      ['please', 'өтінемін', 'пожалуйста', 'Sit down, please.'],
      ['thank you', 'рахмет', 'спасибо', 'Thank you for your help.'],
      ['sorry', 'кешіріңіз', 'извините', 'Sorry, I am late.'],
      ['name', 'есім', 'имя', 'My name is Aigerim.'],
      ['teacher', 'мұғалім', 'учитель', 'She is my teacher.'],
      ['student', 'оқушы', 'ученик', 'I am a student.'],
      ['friend', 'дос', 'друг', 'Tom is my friend.'],
      ['nice to meet you', 'танысқаныма қуаныштымын', 'приятно познакомиться', 'Nice to meet you, Tom.']
    ],
    grammar: {
      title: { kk: 'Етістік “to be” (болу)', ru: 'Глагол “to be” (быть)' },
      explain: {
        kk: '<b>to be</b> — «болу». Қазақ тілінде ол көбіне айтылмайды, ал ағылшынша міндетті түрде қажет.<br><b>I am</b> · <b>you are</b> · <b>he / she / it is</b> · <b>we / you / they are</b>.<br>Қысқаша түрі: I’m, you’re, he’s, she’s, it’s, we’re, they’re. Болымсыз түрі: <b>not</b> қосамыз — I am <b>not</b>, she is<b>n’t</b>. Сұрақта етістік алдыға шығады: <b>Are</b> you a student?',
        ru: '<b>to be</b> — «быть». В русском его обычно нет, а в английском он обязателен.<br><b>I am</b> · <b>you are</b> · <b>he / she / it is</b> · <b>we / you / they are</b>.<br>Краткие формы: I’m, you’re, he’s, she’s, it’s, we’re, they’re. Отрицание — добавляем <b>not</b>: I am <b>not</b>, she is<b>n’t</b>. В вопросе глагол идёт вперёд: <b>Are</b> you a student?'
      },
      examples: [['I am a student.', 'Я ученик.'], ['She is my teacher.', 'Она моя учительница.'], ['We are friends.', 'Мы друзья.']],
      quiz: [
        { q: 'I ___ a student.', o: ['am', 'is', 'are'], a: 0, e: { ru: 'С I используем am.', kk: 'I-мен am қолданамыз.' } },
        { q: 'She ___ my teacher.', o: ['am', 'is', 'are'], a: 1, e: { ru: 'С she / he / it — is.', kk: 'she / he / it-пен — is.' } },
        { q: 'They ___ friends.', o: ['am', 'is', 'are'], a: 2, e: { ru: 'С we / you / they — are.', kk: 'we / you / they-мен — are.' } },
        { q: '___ you from Astana?', o: ['Am', 'Is', 'Are'], a: 2, e: { ru: 'В вопросе are идёт перед you.', kk: 'Сұрақта are — you алдында.' } },
        { q: 'He ___ not at home.', o: ['are', 'is', 'am'], a: 1, e: { ru: 'He is not = He isn’t.', kk: 'He is not = He isn’t.' } }
      ]
    },
    reading: {
      title: 'Hello, I am Aigerim',
      text: 'Hello! My name is Aigerim. I am fourteen years old and I am a student. My teacher is Mr Brown. He is from London. He is very kind. My friend is Dana. She is twelve. We are in the same school. We are happy to be friends.',
      q: [
        { q: 'How old is Aigerim?', o: ['Twelve', 'Fourteen', 'Sixteen'], a: 1, e: '“I am fourteen years old.”' },
        { q: 'Where is Mr Brown from?', o: ['Astana', 'Canada', 'London'], a: 2, e: '“He is from London.”' },
        { q: 'Who is Dana?', o: ['Aigerim’s friend', 'Aigerim’s teacher', 'Aigerim’s sister'], a: 0, e: '“My friend is Dana.”' },
        { q: 'How old is Dana?', o: ['Fourteen', 'Twelve', 'Eleven'], a: 1, e: '“She is twelve.”' }
      ]
    },
    listening: {
      context: { kk: 'Екі адам мектепте танысады.', ru: 'Двое знакомятся в школе.' },
      genders: { Tom: 'm', Dana: 'f' },
      script: 'Tom: Hello! I\'m Tom.\nDana: Hi, Tom. I\'m Dana. Nice to meet you.\nTom: Nice to meet you too. Are you a student?\nDana: Yes, I am. Are you a student, too?\nTom: No, I\'m not. I\'m a teacher.\nDana: Oh, really? Is this your school?\nTom: Yes, it is. Goodbye, Dana!\nDana: Goodbye, Tom. See you tomorrow!',
      q: [
        { q: 'Who is a student?', o: ['Tom', 'Dana', 'Both of them'], a: 1, e: '“Yes, I am.” — Dana' },
        { q: 'What is Tom?', o: ['A student', 'A teacher', 'A friend of Dana'], a: 1, e: '“I\'m a teacher.”' },
        { q: 'Is it Tom\'s school?', o: ['Yes', 'No', 'We don\'t know'], a: 0, e: '“Is this your school?” — “Yes, it is.”' },
        { q: 'When do they meet again?', o: ['Today', 'Tomorrow', 'On Monday'], a: 1, e: '“See you tomorrow!”' }
      ]
    },
    writing: {
      prompt: 'Write 4–5 sentences about yourself. Say your name, your age, your school and one friend.',
      min: 30,
      tips: { kk: 'Әр сөйлемді бас әріппен бастап, нүктемен аяқтаңыз. am / is / are қолданыңыз.', ru: 'Начинайте каждое предложение с заглавной буквы и заканчивайте точкой. Используйте am / is / are.' },
      model: 'Hello! My name is Aruzhan. I am fifteen years old. I am a student at school number twelve. My teacher is Mrs Smith. My friend is Dias. He is fifteen, too. We are happy friends.'
    },
    speaking: {
      prompts: ['What is your name?', 'How old are you?', 'Are you a student?', 'Who is your friend?'],
      model: 'My name is Aruzhan. I am fifteen years old. Yes, I am a student. My friend is Dias.'
    }
  },

  /* 2 */
  {
    id: 2, icon: '🌍',
    title: { en: 'Countries and languages', kk: 'Елдер мен тілдер', ru: 'Страны и языки' },
    goal: { kk: 'Қайдан екеніңізді айту, ел мен тілдер туралы сұрау', ru: 'Рассказать, откуда вы, спросить о странах и языках' },
    vocab: [
      ['country', 'ел', 'страна', 'Kazakhstan is a big country.'],
      ['city', 'қала', 'город', 'Almaty is a big city.'],
      ['capital', 'астана', 'столица', 'Astana is the capital of Kazakhstan.'],
      ['language', 'тіл', 'язык', 'I speak two languages.'],
      ['Kazakhstan', 'Қазақстан', 'Казахстан', 'I am from Kazakhstan.'],
      ['Russia', 'Ресей', 'Россия', 'Moscow is in Russia.'],
      ['China', 'Қытай', 'Китай', 'Li is from China.'],
      ['the USA', 'АҚШ', 'США', 'Tom is from the USA.'],
      ['Kazakh', 'қазақ тілі', 'казахский', 'My grandmother speaks Kazakh.'],
      ['English', 'ағылшын тілі', 'английский', 'We learn English at school.']
    ],
    grammar: {
      title: { kk: 'Where are you from? Сұрақ және жауап', ru: 'Where are you from? Вопросы и ответы' },
      explain: {
        kk: '«Қайдан келдіңіз?» — <b>Where are you from?</b> Жауабы: <b>I am from</b> Kazakhstan. / <b>I’m from</b> Almaty.<br>Болымсыз түрі: I <b>am not</b> from Russia. He <b>isn’t</b> from China.<br>Қысқа жауап: Is she from the UK? — Yes, <b>she is</b>. / No, <b>she isn’t</b>.',
        ru: '«Откуда вы?» — <b>Where are you from?</b> Ответ: <b>I am from</b> Kazakhstan. / <b>I’m from</b> Almaty.<br>Отрицание: I <b>am not</b> from Russia. He <b>isn’t</b> from China.<br>Краткий ответ: Is she from the UK? — Yes, <b>she is</b>. / No, <b>she isn’t</b>.'
      },
      examples: [['Where are you from?', 'Откуда ты?'], ['I am from Kazakhstan.', 'Я из Казахстана.'], ['Is Li from Russia? — No, she isn’t.', 'Ли из России? — Нет.']],
      quiz: [
        { q: 'Where ___ you from?', o: ['is', 'are', 'am'], a: 1, e: { ru: 'С you — are.', kk: 'you-мен — are.' } },
        { q: 'She ___ from China.', o: ['is', 'are', 'am'], a: 0, e: { ru: 'С she — is.', kk: 'she-мен — is.' } },
        { q: 'I ___ from Russia. I am from Kazakhstan.', o: ['am not', 'is not', 'are not'], a: 0, e: { ru: 'С I — am not.', kk: 'I-мен — am not.' } },
        { q: 'Is he from the USA? — No, he ___.', o: ['isn’t', 'aren’t', 'not'], a: 0, e: { ru: 'Краткое отрицание: he isn’t.', kk: 'Қысқа болымсыз: he isn’t.' } },
        { q: '___ Astana the capital of Kazakhstan?', o: ['Is', 'Are', 'Am'], a: 0, e: { ru: 'Astana — единственное число: Is.', kk: 'Astana — жекеше: Is.' } }
      ]
    },
    reading: {
      title: 'Welcome to my class',
      text: 'Welcome to my class! We are from different countries. Aibek is from Kazakhstan. He speaks Kazakh and Russian. Li is from China. She speaks Chinese and a little English. Sara is from the UK. Her city is Manchester. She speaks English. Aibek, Li and Sara are good friends. They live in Astana now.',
      q: [
        { q: 'Where is Li from?', o: ['China', 'Kazakhstan', 'The UK'], a: 0, e: '“Li is from China.”' },
        { q: 'Which languages does Aibek speak?', o: ['Chinese and English', 'Kazakh and Russian', 'English only'], a: 1, e: '“He speaks Kazakh and Russian.”' },
        { q: 'What is Sara’s city?', o: ['London', 'Astana', 'Manchester'], a: 2, e: '“Her city is Manchester.”' },
        { q: 'Where do the friends live now?', o: ['In Astana', 'In Manchester', 'In China'], a: 0, e: '“They live in Astana now.”' }
      ]
    },
    listening: {
      context: { kk: 'Мұғалім жаңа оқушыдан сұрайды.', ru: 'Учитель расспрашивает нового ученика.' },
      genders: { 'Ms Green': 'f', Ali: 'm' },
      script: 'Ms Green: Good morning, Ali. Where are you from?\nAli: I\'m from Almaty, Ms Green.\nMs Green: Is Almaty the capital of Kazakhstan?\nAli: No, it isn\'t. Astana is the capital.\nMs Green: And what languages do you speak?\nAli: I speak Kazakh and a little English.\nMs Green: That\'s great! Welcome to our class.',
      q: [
        { q: 'Where is Ali from?', o: ['Astana', 'Almaty', 'London'], a: 1, e: '“I\'m from Almaty.”' },
        { q: 'Is Almaty the capital?', o: ['Yes', 'No', 'We don\'t know'], a: 1, e: '“No, it isn\'t. Astana is the capital.”' },
        { q: 'Which languages does Ali speak?', o: ['Kazakh and a little English', 'Russian and Chinese', 'Only English'], a: 0, e: '“I speak Kazakh and a little English.”' },
        { q: 'Who is Ms Green?', o: ['A student', 'A teacher', 'Ali’s mother'], a: 1, e: 'Ali says “Ms Green” and she says “Welcome to our class.”' }
      ]
    },
    writing: {
      prompt: 'Write 4–5 sentences: Where are you from? What is the capital of your country? What languages do you speak?',
      min: 30,
      tips: { kk: 'I am from … / The capital is … / I speak … құрылымдарын қолданыңыз.', ru: 'Используйте конструкции I am from … / The capital is … / I speak …' },
      model: 'I am from Kazakhstan. My city is Shymkent. The capital of my country is Astana. It is a big and modern city. I speak Kazakh, Russian and a little English.'
    },
    speaking: {
      prompts: ['Where are you from?', 'What is the capital of your country?', 'What languages do you speak?', 'Is your city big or small?'],
      model: 'I am from Kazakhstan. The capital is Astana. I speak Kazakh and Russian. My city is big.'
    }
  },

  /* 3 */
  {
    id: 3, icon: '👨‍👩‍👧',
    title: { en: 'My family', kk: 'Менің отбасым', ru: 'Моя семья' },
    goal: { kk: 'Отбасы туралы айту, have / has және меншіктік есімдіктер', ru: 'Рассказать о семье, have / has и притяжательные местоимения' },
    vocab: [
      ['mother', 'ана', 'мама', 'My mother is a doctor.'],
      ['father', 'әке', 'папа', 'My father is a teacher.'],
      ['brother', 'аға / іні', 'брат', 'I have one brother.'],
      ['sister', 'әпке / сіңлі', 'сестра', 'My sister is ten.'],
      ['grandmother', 'әже', 'бабушка', 'My grandmother lives with us.'],
      ['grandfather', 'ата', 'дедушка', 'My grandfather is seventy.'],
      ['parents', 'ата-ана', 'родители', 'My parents work in a bank.'],
      ['family', 'отбасы', 'семья', 'I have a big family.'],
      ['aunt', 'тәте', 'тётя', 'My aunt lives in Almaty.'],
      ['uncle', 'нағашы / ағай', 'дядя', 'My uncle has a car.']
    ],
    grammar: {
      title: { kk: 'have / has және my, your, his, her', ru: 'have / has и my, your, his, her' },
      explain: {
        kk: '«Бар» мағынасында: <b>I / you / we / they have</b>, <b>he / she / it has</b>.<br>Меншіктік сын есімдер: <b>my</b> (менің), <b>your</b> (сенің), <b>his</b> (оның — ер), <b>her</b> (оның — әйел), <b>our</b>, <b>their</b>.<br>Иелік: <b>Dana’s</b> mother = Дананың анасы (<b>’s</b> қосамыз).',
        ru: '«Иметь»: <b>I / you / we / they have</b>, <b>he / she / it has</b>.<br>Притяжательные: <b>my</b> (мой), <b>your</b> (твой), <b>his</b> (его), <b>her</b> (её), <b>our</b> (наш), <b>their</b> (их).<br>Принадлежность: <b>Dana’s</b> mother = мама Даны (добавляем <b>’s</b>).'
      },
      examples: [['I have a sister.', 'У меня есть сестра.'], ['She has two brothers.', 'У неё два брата.'], ['This is Tom. His father is a doctor.', 'Это Том. Его папа врач.']],
      quiz: [
        { q: 'She ___ two brothers.', o: ['have', 'has', 'haves'], a: 1, e: { ru: 'С she — has.', kk: 'she-мен — has.' } },
        { q: 'I have a sister. ___ name is Dana.', o: ['My', 'Her', 'His'], a: 1, e: { ru: 'Сестра — женский род: her.', kk: 'Қарындас — әйел: her.' } },
        { q: 'They ___ a big family.', o: ['has', 'have', 'is'], a: 1, e: { ru: 'С they — have.', kk: 'they-мен — have.' } },
        { q: 'This is Tom. ___ father is a doctor.', o: ['His', 'Her', 'My'], a: 0, e: { ru: 'Том — мужской род: his.', kk: 'Том — ер: his.' } },
        { q: 'Dana___ mother is a teacher.', o: ['’s', 's', ' is'], a: 0, e: { ru: 'Принадлежность: Dana’s.', kk: 'Иелік: Dana’s.' } }
      ]
    },
    reading: {
      title: 'My family',
      text: 'I have a big family. My father is a doctor and my mother is a teacher. I have one brother and one sister. My brother\'s name is Aidar. He is ten. My sister\'s name is Dana. She is seventeen. We also have a grandmother. Her name is Zhanar. She lives with us. We love her very much.',
      q: [
        { q: 'What is the writer’s father?', o: ['A teacher', 'A doctor', 'A driver'], a: 1, e: '“My father is a doctor.”' },
        { q: 'How many brothers does the writer have?', o: ['One', 'Two', 'None'], a: 0, e: '“I have one brother and one sister.”' },
        { q: 'How old is Dana?', o: ['Ten', 'Seventeen', 'Seventy'], a: 1, e: '“She is seventeen.”' },
        { q: 'Who lives with the family?', o: ['An aunt', 'A grandfather', 'A grandmother'], a: 2, e: '“We also have a grandmother … She lives with us.”' }
      ]
    },
    listening: {
      context: { kk: 'Аида достарына отбасылық фото көрсетеді.', ru: 'Аида показывает другу семейное фото.' },
      genders: { Ben: 'm', Aida: 'f' },
      script: 'Ben: Is this your family, Aida?\nAida: Yes, it is. This is my father, and this is my mother.\nBen: Who is the girl?\nAida: She is my sister, Madina. She has a dog.\nBen: And the old man?\nAida: He is my grandfather. He is seventy.\nBen: You have a nice family!',
      q: [
        { q: 'Who is Madina?', o: ['Aida’s sister', 'Aida’s mother', 'Aida’s friend'], a: 0, e: '“She is my sister, Madina.”' },
        { q: 'What does Madina have?', o: ['A cat', 'A dog', 'A bird'], a: 1, e: '“She has a dog.”' },
        { q: 'How old is the grandfather?', o: ['Sixty', 'Seventy', 'Eighty'], a: 1, e: '“He is seventy.”' },
        { q: 'What does Aida show Ben?', o: ['A family photo', 'A school', 'A map'], a: 0, e: '“Is this your family, Aida?”' }
      ]
    },
    writing: {
      prompt: 'Write 5 sentences about your family. Use have / has and my, his, her.',
      min: 35,
      tips: { kk: 'I have … / My mother is … / Her name is … құрылымдарын қолданыңыз.', ru: 'Используйте I have … / My mother is … / Her name is …' },
      model: 'I have a small family. My father is a driver and my mother is a nurse. I have one sister. Her name is Aya and she is eight. My grandmother has a big garden, and we visit her every Sunday.'
    },
    speaking: {
      prompts: ['Do you have a big family?', 'Who is in your family?', 'How old is your mother or father?', 'Do you have brothers or sisters?'],
      model: 'I have a small family. My mother is a nurse and my father is a driver. I have one sister. Her name is Aya.'
    }
  },

  /* 4 */
  {
    id: 4, icon: '⏰',
    title: { en: 'My daily routine', kk: 'Менің күнтәртібім', ru: 'Мой распорядок дня' },
    goal: { kk: 'Күнді сипаттау, Present Simple', ru: 'Описать свой день, Present Simple' },
    vocab: [
      ['wake up', 'ояну', 'просыпаться', 'I wake up at seven.'],
      ['breakfast', 'таңғы ас', 'завтрак', 'I have breakfast at home.'],
      ['school', 'мектеп', 'школа', 'I go to school by bus.'],
      ['lesson', 'сабақ', 'урок', 'We have six lessons.'],
      ['lunch', 'түскі ас', 'обед', 'Lunch is at one o’clock.'],
      ['homework', 'үй тапсырмасы', 'домашнее задание', 'I do my homework after school.'],
      ['dinner', 'кешкі ас', 'ужин', 'We have dinner at seven.'],
      ['sleep', 'ұйықтау', 'спать', 'I sleep eight hours.'],
      ['usually', 'әдетте', 'обычно', 'I usually walk to school.'],
      ['every day', 'күн сайын', 'каждый день', 'I read every day.']
    ],
    grammar: {
      title: { kk: 'Present Simple (әдеттегі әрекет)', ru: 'Present Simple (привычные действия)' },
      explain: {
        kk: 'Күнде қайталанатын әрекет үшін: <b>I / you / we / they</b> + етістік (get up). <b>He / she / it</b> + етістік<b>+s</b> (gets up, has, goes).<br>Болымсыз: <b>don’t</b> (I don’t), <b>doesn’t</b> (she doesn’t) + етістіктің бастапқы түрі. Сұрақ: <b>Do</b> you …? / <b>Does</b> she …?',
        ru: 'Для действий, которые повторяются: <b>I / you / we / they</b> + глагол (get up). <b>He / she / it</b> + глагол<b>+s</b> (gets up, has, goes).<br>Отрицание: <b>don’t</b> (I don’t), <b>doesn’t</b> (she doesn’t) + начальная форма глагола. Вопрос: <b>Do</b> you …? / <b>Does</b> she …?'
      },
      examples: [['I get up at seven.', 'Я встаю в семь.'], ['She has breakfast at eight.', 'Она завтракает в восемь.'], ['He doesn’t watch TV.', 'Он не смотрит телевизор.']],
      quiz: [
        { q: 'I ___ up at seven.', o: ['get', 'gets', 'getting'], a: 0, e: { ru: 'С I — без -s.', kk: 'I-мен — -s жоқ.' } },
        { q: 'She ___ breakfast at eight.', o: ['have', 'has', 'having'], a: 1, e: { ru: 'С she: have → has.', kk: 'she-мен: have → has.' } },
        { q: 'He ___ to school by bus.', o: ['go', 'goes', 'going'], a: 1, e: { ru: 'С he: go → goes.', kk: 'he-мен: go → goes.' } },
        { q: 'We ___ like homework.', o: ['don’t', 'doesn’t', 'isn’t'], a: 0, e: { ru: 'С we — don’t.', kk: 'we-мен — don’t.' } },
        { q: 'My brother ___ play football on Monday.', o: ['don’t', 'doesn’t', 'not'], a: 1, e: { ru: 'С he / my brother — doesn’t.', kk: 'he / my brother-мен — doesn’t.' } }
      ]
    },
    reading: {
      title: 'A day in Arman’s life',
      text: 'Arman gets up at seven o\'clock. He has breakfast with his family. He goes to school by bus. His lessons start at eight thirty. At one o\'clock he has lunch at school. After school he does his homework. In the evening he plays football with his friends. He has dinner at seven and goes to bed at ten.',
      q: [
        { q: 'What time does Arman get up?', o: ['At six', 'At seven', 'At eight'], a: 1, e: '“Arman gets up at seven o\'clock.”' },
        { q: 'How does he go to school?', o: ['By bus', 'On foot', 'By car'], a: 0, e: '“He goes to school by bus.”' },
        { q: 'When does he do his homework?', o: ['Before school', 'After school', 'At night'], a: 1, e: '“After school he does his homework.”' },
        { q: 'What time does he go to bed?', o: ['At nine', 'At ten', 'At eleven'], a: 1, e: '“goes to bed at ten.”' }
      ]
    },
    listening: {
      context: { kk: 'Журналист Әлиядан күні туралы сұрайды.', ru: 'Журналист спрашивает Алию о её дне.' },
      genders: { Reporter: 'm', Aliya: 'f' },
      script: 'Reporter: What time do you get up, Aliya?\nAliya: I get up at six thirty.\nReporter: What do you do after school?\nAliya: I do my homework and then I go to the pool.\nReporter: Do you watch TV?\nAliya: No, I don\'t. I read books.\nReporter: What time do you go to bed?\nAliya: At nine thirty.',
      q: [
        { q: 'What time does Aliya get up?', o: ['6:00', '6:30', '7:30'], a: 1, e: '“I get up at six thirty.”' },
        { q: 'Where does she go after homework?', o: ['To the park', 'To the library', 'To the pool'], a: 2, e: '“then I go to the pool.”' },
        { q: 'Does she watch TV?', o: ['Yes, every day', 'No', 'Sometimes'], a: 1, e: '“No, I don\'t.”' },
        { q: 'What does she do instead?', o: ['Reads books', 'Plays games', 'Draws'], a: 0, e: '“I read books.”' }
      ]
    },
    writing: {
      prompt: 'Describe your day. Write 5 sentences. Use: I get up, I have breakfast, I go to school, I do my homework.',
      min: 35,
      tips: { kk: 'Уақытты at арқылы жазыңыз: at seven, at eight thirty.', ru: 'Время пишите с at: at seven, at eight thirty.' },
      model: 'I get up at seven o\'clock. I have breakfast with my mother. I go to school at eight and I have six lessons. After school I have lunch and do my homework. In the evening I read a book and go to bed at ten.'
    },
    speaking: {
      prompts: ['What time do you get up?', 'What do you have for breakfast?', 'How do you go to school?', 'What do you do in the evening?'],
      model: 'I get up at seven. I have tea and bread for breakfast. I go to school by bus. In the evening I do my homework.'
    }
  },

  /* 5 */
  {
    id: 5, icon: '🍎',
    title: { en: 'Food and drink', kk: 'Тамақ және сусын', ru: 'Еда и напитки' },
    goal: { kk: 'Тағам туралы айту, a / an / some / any, like', ru: 'Говорить о еде, a / an / some / any, like' },
    vocab: [
      ['bread', 'нан', 'хлеб', 'I eat bread every day.'],
      ['rice', 'күріш', 'рис', 'We have rice for dinner.'],
      ['meat', 'ет', 'мясо', 'My father likes meat.'],
      ['fish', 'балық', 'рыба', 'Fish is very healthy.'],
      ['apple', 'алма', 'яблоко', 'I eat an apple at school.'],
      ['milk', 'сүт', 'молоко', 'I drink milk in the morning.'],
      ['water', 'су', 'вода', 'Drink water every day.'],
      ['tea', 'шай', 'чай', 'Tea with milk, please.'],
      ['egg', 'жұмыртқа', 'яйцо', 'I have an egg for breakfast.'],
      ['cheese', 'ірімшік', 'сыр', 'She likes cheese.']
    ],
    grammar: {
      title: { kk: 'a / an / some / any; like', ru: 'a / an / some / any; like' },
      explain: {
        kk: 'Санауға болатын зат: <b>a</b> book, <b>an</b> apple (дауысты дыбыс алдында). Санауға болмайтын зат (milk, bread, water) — <b>some</b>.<br>Болымсыз және сұрақта <b>any</b>: I don’t have <b>any</b> bread. Do you have <b>any</b> eggs?<br><b>like</b>: I like tea. She <b>likes</b> tea. (he / she + -s)',
        ru: 'Исчисляемые: <b>a</b> book, <b>an</b> apple (перед гласным звуком). Неисчисляемые (milk, bread, water) — <b>some</b>.<br>В отрицании и вопросе — <b>any</b>: I don’t have <b>any</b> bread. Do you have <b>any</b> eggs?<br><b>like</b>: I like tea. She <b>likes</b> tea. (he / she + -s)'
      },
      examples: [['I eat an apple every day.', 'Я ем яблоко каждый день.'], ['There is some milk in the fridge.', 'В холодильнике есть молоко.'], ['She likes tea.', 'Ей нравится чай.']],
      quiz: [
        { q: 'I eat ___ apple every day.', o: ['a', 'an', 'some'], a: 1, e: { ru: 'apple начинается с гласного звука — an.', kk: 'apple дауысты дыбыстан басталады — an.' } },
        { q: 'There is ___ milk in the fridge.', o: ['a', 'an', 'some'], a: 2, e: { ru: 'milk неисчисляемое — some.', kk: 'milk санауға болмайды — some.' } },
        { q: 'Do you have ___ eggs?', o: ['some', 'any', 'a'], a: 1, e: { ru: 'В вопросе — any.', kk: 'Сұрақта — any.' } },
        { q: 'I don’t have ___ bread.', o: ['some', 'any', 'an'], a: 1, e: { ru: 'В отрицании — any.', kk: 'Болымсызда — any.' } },
        { q: 'She ___ tea.', o: ['like', 'likes', 'liking'], a: 1, e: { ru: 'С she: like → likes.', kk: 'she-мен: like → likes.' } }
      ]
    },
    reading: {
      title: 'Breakfast around the world',
      text: 'In Kazakhstan, many people have tea and bread for breakfast. They also eat eggs and cheese. In England, people often have eggs, toast and tea. In Japan, many people have rice and fish for breakfast. I like eggs and milk. My sister doesn\'t like milk. She likes tea with lemon.',
      q: [
        { q: 'What do many people in Japan have for breakfast?', o: ['Rice and fish', 'Eggs and toast', 'Tea and cheese'], a: 0, e: '“many people have rice and fish for breakfast.”' },
        { q: 'What does the writer like?', o: ['Tea with lemon', 'Eggs and milk', 'Cheese and fish'], a: 1, e: '“I like eggs and milk.”' },
        { q: 'What does the writer’s sister like?', o: ['Milk', 'Eggs', 'Tea with lemon'], a: 2, e: '“She likes tea with lemon.”' },
        { q: 'What do people in England often have?', o: ['Eggs, toast and tea', 'Rice and fish', 'Meat and bread'], a: 0, e: '“people often have eggs, toast and tea.”' }
      ]
    },
    listening: {
      context: { kk: 'Кафеде тапсырыс беру.', ru: 'Заказ в кафе.' },
      genders: { Waiter: 'm', Mia: 'f' },
      script: 'Waiter: Good morning. What would you like?\nMia: A cup of tea, please.\nWaiter: Anything to eat?\nMia: Yes, I\'d like some bread and cheese.\nWaiter: Any milk in your tea?\nMia: No, thank you.\nWaiter: That\'s three pounds fifty, please.\nMia: Here you are. Thank you!',
      q: [
        { q: 'What does Mia drink?', o: ['Milk', 'Tea', 'Water'], a: 1, e: '“A cup of tea, please.”' },
        { q: 'What does she eat?', o: ['Bread and cheese', 'Eggs and fish', 'An apple'], a: 0, e: '“some bread and cheese.”' },
        { q: 'Does she want milk in her tea?', o: ['Yes', 'No', 'Only a little'], a: 1, e: '“No, thank you.”' },
        { q: 'How much is it?', o: ['£3.15', '£3.50', '£5.30'], a: 1, e: '“three pounds fifty”' }
      ]
    },
    writing: {
      prompt: 'Write 5 sentences about your favourite food and drink. Say what you like and what you don’t like.',
      min: 35,
      tips: { kk: 'I like … / I don’t like … / My favourite food is … қолданыңыз.', ru: 'Используйте I like … / I don’t like … / My favourite food is …' },
      model: 'My favourite food is rice with meat. I like fish, too. I don\'t like cheese. For breakfast I have an egg and some bread. I drink tea every morning and I drink water at school.'
    },
    speaking: {
      prompts: ['What do you have for breakfast?', 'Do you like fish?', 'What is your favourite food?', 'What do you drink every day?'],
      model: 'For breakfast I have an egg and some bread. I like fish. My favourite food is rice with meat. I drink tea and water.'
    }
  }

]);

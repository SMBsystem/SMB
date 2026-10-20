// Writing: 5 вариантов (Task 1 с диаграммой + Task 2), эталонные ответы Band 9.0 и разбор по критериям.
window.IELTS.DATA.writing = [
  /* ===== Variant 1 · Line Graph + CLIL essay ===== */
  {
    title: 'Retention Curves & Content-Based Learning',
    spec: 'Writing · Task 1 Line Graph + Task 2 Agree/Disagree · 60 минут',
    takeaway: 'Отработаете описание динамики на линейном графике и аргументированное эссе «согласен / не согласен».',
    task1: {
      prompt: 'The graph below shows the percentage of new vocabulary retained by three groups of learners over a period of 56 days, according to the study method they used. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chart: {
        type: 'line', caption: 'Vocabulary retained (%) by study method', unit: '% retained', ymax: 100,
        x: ['Day 1', 'Day 3', 'Day 7', 'Day 14', 'Day 28', 'Day 56'],
        series: [
          { name: 'Re-reading', y: [70, 52, 38, 28, 20, 15] },
          { name: 'Active recall', y: [78, 66, 58, 52, 47, 44] },
          { name: 'Spaced recall', y: [80, 72, 68, 66, 64, 63] }
        ]
      },
      keywords: ['vocabulary', 'retained', 'retention', 'method', 'recall', 'reading', 'spaced', 'learners', 'days', 'decline', 'percentage'],
      model: `The line graph compares how much new vocabulary three groups of learners retained over 56 days, depending on whether they re-read the material, practised active recall or used spaced recall.

Overall, retention fell in all three groups, but the decline was far steeper for re-reading than for either form of recall, and spaced recall produced the highest retention throughout.

At the outset the groups were close, with 70% retention for re-reading, 78% for active recall and 80% for spaced recall. The gap then widened rapidly. By day 7, re-reading had dropped to 38%, whereas the active-recall and spaced-recall groups still remembered 58% and 68% respectively.

Thereafter, the re-reading figure continued to decline, reaching just 15% on day 56, a fall of 55 percentage points. Active recall decreased more gradually to 44%, while spaced recall levelled off remarkably, slipping by only one point between day 28 and day 56. By the end of the period, the spaced-recall group retained 63% of the vocabulary, more than four times the figure for re-reading.`,
      analysis: [
        'Task Achievement: есть Overview (общая тенденция + лидер), отобраны ключевые точки — старт, день 7, финал; цифры сгруппированы и сравнены, а не перечислены подряд.',
        'Coherence & Cohesion: 4 абзаца — введение, overview, два абзаца деталей; связки по смыслу (whereas, thereafter, while) вместо механических First/Second.',
        'Lexical Resource: разнообразные глаголы динамики (dropped, fell, levelled off, slipping) и точные количественные формулы (a fall of 55 percentage points, more than four times).',
        'Grammar: сложные предложения с whereas/while, причастные обороты, Past Simple при описании прошедшего периода; нет разговорных сокращений.'
      ]
    },
    task2: {
      prompt: 'Some people believe that studying a subject such as geography in English is a more effective way to prepare for a language examination than studying English grammar directly. To what extent do you agree or disagree?',
      keywords: ['subject', 'geography', 'English', 'grammar', 'language', 'examination', 'learning', 'vocabulary', 'context', 'content', 'knowledge', 'students', 'fluency', 'automatic'],
      model: `Whether learners prepare better for a language examination by studying a subject such as geography in English than by studying grammar directly is a genuinely debated question. I largely agree with the first view, although I would qualify it in one important respect.

The strongest argument for content-based learning is that it develops language in the way the brain actually acquires it. Grammar rules are stored as declarative knowledge, which learners can recite but often cannot apply under time pressure, whereas structures met repeatedly in meaningful contexts gradually become automatic. A student who reads about monsoon patterns and then explains them in English is practising relative clauses, comparatives and the vocabulary of cause and effect without consciously thinking about any of them. This is why research on content and language integrated learning has generally found advantages in fluency and comprehension.

Moreover, academic examinations reward knowledge of topics as much as knowledge of language. A candidate who has already studied urbanisation can produce relevant examples quickly, which frees working memory for accurate sentence construction. By contrast, a candidate who knows the rules but has nothing to say is likely to produce correct but empty paragraphs.

Nevertheless, it would be unwise to abandon explicit grammar instruction altogether. Learners whose errors have fossilised rarely notice them without feedback, and a short, targeted lesson can correct a mistake that years of exposure have left untouched. The most effective preparation is therefore content-rich study supplemented by brief, diagnostic work on grammar.

In conclusion, studying a subject through English is generally the better investment for examination preparation, provided that it is accompanied by occasional explicit correction.`,
      analysis: [
        'Task Response: позиция заявлена во введении («largely agree… qualify») и сохранена до конца; все части задания раскрыты, включая оговорку.',
        'Модель Тулмина: claim → grounds (исследования CLIL, пример с муссонами) → warrant («это освобождает рабочую память») → rebuttal (фоссилизация ошибок) с ограничителем (qualifier).',
        'Coherence & Cohesion: смысловое «сшивание» — Moreover/By contrast/Nevertheless используются точечно, основная связность — повтор и развитие понятий (automatic → working memory).',
        'Lexical Resource & Grammar: хеджирование (largely, generally, likely), номинализация (acquisition, instruction), разнообразные сложные конструкции.'
      ]
    }
  },

  /* ===== Variant 2 · Process Diagram + memorised structures essay ===== */
  {
    title: 'The Vocabulary Notebook Cycle & Memorised Structures',
    spec: 'Writing · Task 1 Process Diagram + Task 2 Discuss Both Views · 60 минут',
    takeaway: 'Научитесь описывать процесс в Passive Voice с последовательными связками и вести дискуссионное эссе с собственной позицией.',
    task1: {
      prompt: 'The diagram below shows the cycle that learners follow when they use a pocket notebook to learn new vocabulary. Summarise the information by selecting and reporting the main features.',
      chart: {
        type: 'process', caption: 'The vocabulary notebook cycle',
        steps: [
          'The learner meets a new phrase in an authentic text.',
          'The phrase is copied into a pocket notebook with an example sentence.',
          'The learner covers the page and tests recall from memory on the same day.',
          'The phrase is reviewed after one day.',
          'A second review takes place after three days.',
          'A third review follows after seven days.',
          'The learner uses the phrase in a speaking or writing task.',
          'The phrase is retrieved automatically and is considered learned.'
        ]
      },
      keywords: ['phrase', 'notebook', 'learner', 'text', 'review', 'recall', 'memory', 'sentence', 'automatically', 'stage', 'process'],
      model: `The diagram illustrates how learners use a pocket notebook to acquire new vocabulary, a cycle which consists of eight stages and ends with the automatic use of a phrase.

Overall, the process is linear and falls into three phases: collecting a phrase, reviewing it at expanding intervals and, finally, using it productively.

The cycle begins when the learner encounters an unfamiliar phrase in an authentic text. The phrase is then copied into a pocket notebook together with an example sentence. On the same day, the learner covers the page and tests recall from memory, which marks the end of the collection phase.

The review phase comprises three further stages. The phrase is reviewed one day later, and a second review follows after three days. A third review takes place after a week, so that the intervals between sessions gradually lengthen.

Once these reviews have been completed, the learner uses the phrase in a speaking or writing task. In the final stage, the phrase can be retrieved automatically, at which point it is regarded as learned.`,
      analysis: [
        'Task Achievement: все 8 этапов отражены, есть Overview с делением процесса на три фазы.',
        'Coherence & Cohesion: последовательность выражена связками смысла (begins when, then, on the same day, once these reviews have been completed), а не списком First–Second–Third.',
        'Lexical Resource: перефраз шагов (encounters = meets, regarded as = considered), термины процесса (stage, interval, productively).',
        'Grammar: Passive Voice (is copied, is reviewed), придаточные времени, относительные придаточные (which marks…).'
      ]
    },
    task2: {
      prompt: 'Some people say that students should memorise ready-made structures for essays so that they can write quickly in an examination. Others believe that students should learn to develop ideas and organise them freely. Discuss both views and give your own opinion.',
      keywords: ['memorise', 'structures', 'templates', 'essay', 'examination', 'students', 'ideas', 'organise', 'writing', 'flexible', 'examiners', 'practice', 'scaffold', 'quickly'],
      model: `Opinions differ on whether examination candidates are better served by memorised essay structures or by the ability to organise their own ideas. While a prepared framework has some practical value, I believe that flexible thinking is ultimately more important.

Those who favour memorised structures usually point to speed and security. A candidate who knows exactly how the introduction, body and conclusion will be built does not waste precious minutes deciding what to do, and the visible organisation can reassure an anxious writer. For learners at an intermediate level, this reassurance is not trivial: a clear structure often means the difference between a complete essay and an unfinished one.

However, the same strategy tends to become a ceiling. Examiners are trained to recognise rehearsed material, and an essay that forces the topic into a fixed formula risks being penalised when the formula only loosely fits the question. Furthermore, fluent writers rely on procedural skills that run automatically, whereas a memorised template remains a list that must be consciously recalled, and this competes with the real task of generating ideas.

In my view, the most productive approach is to replace scripts with scaffolds. A scaffold is a set of flexible questions, such as what my position is, what evidence supports it and what objection might be raised, whose answers change with every topic. It offers the security of structure without the rigidity of a script, and it develops precisely the skill that higher bands reward.

In conclusion, although memorised frameworks may help beginners, candidates who wish to progress beyond the intermediate plateau should learn to build arguments freely.`,
      analysis: [
        'Task Response: оба мнения раскрыты в отдельных абзацах, собственная позиция заявлена во введении и повторена в заключении.',
        'Argument: аргументы «за» (скорость, спокойствие) честно признаны, затем показан контраргумент с механизмом (процедурная vs декларативная память) — это warrant по Тулмину.',
        'Cohesion: смысловое связывание — «the same strategy… ceiling», «this reassurance…», а не Firstly/Secondly.',
        'Grammar & Lexis: хеджирование (tends to, risks), параллельные конструкции (whereas), точная лексика (rehearsed, rigidity, plateau).'
      ]
    }
  },

  /* ===== Variant 3 · Comparative Bar Chart + exams essay ===== */
  {
    title: 'Reading Strategies by Band & What Exams Really Measure',
    spec: 'Writing · Task 1 Bar Chart + Task 2 Agree/Disagree · 60 минут',
    takeaway: 'Сравнение двух групп по четырём категориям: как не перечислять столбцы, а находить главный контраст.',
    task1: {
      prompt: 'The bar chart below shows the percentage of candidates in two score groups who used four different strategies in the IELTS Reading paper. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chart: {
        type: 'bar', caption: 'Candidates using each Reading strategy (%)', unit: '% of candidates', ymax: 100,
        cats: ['Map paragraphs', 'Underline keywords', 'Read every word', 'Guess Not Given'],
        series: [
          { name: 'Band 6.0 or below', v: [22, 45, 83, 54] },
          { name: 'Band 7.0 or above', v: [71, 68, 29, 12] }
        ]
      },
      keywords: ['candidates', 'strategies', 'reading', 'paragraphs', 'keywords', 'underline', 'guess', 'band', 'percentage', 'group', 'higher', 'lower'],
      model: `The bar chart compares the proportion of lower- and higher-scoring candidates who used four strategies in the Reading paper.

Overall, the two groups differed markedly. Candidates at Band 7.0 or above relied mainly on mapping paragraphs and underlining keywords, whereas those at Band 6.0 or below tended to read every word and to guess the Not Given answers.

The contrast was most striking for paragraph mapping. Only 22% of the lower group used this strategy, compared with 71% of the higher group, a difference of almost 50 percentage points. Underlining keywords was also more common among higher scorers, but the gap was much narrower, at 68% against 45%.

By contrast, the two remaining strategies were far more characteristic of the weaker group. As many as 83% of candidates at Band 6.0 or below read every word, nearly three times the figure for the higher group (29%). Similarly, 54% of lower scorers guessed Not Given answers, whereas only 12% of higher scorers did so, making this the least popular strategy among the stronger candidates.`,
      analysis: [
        'Task Achievement: Overview выделяет главный контраст «стратегии высоких vs низких баллов»; выбраны крайние значения (22/71, 83/29, 54/12).',
        'Сравнение, а не перечисление: каждое число снабжено ссылкой на соседнее (compared with, nearly three times, a difference of almost 50 points).',
        'Cohesion: абзацы построены по смыслу — сначала самый резкий контраст, затем слабый, затем противоположная пара.',
        'Lexical Resource: markedly, striking, characteristic, as many as; перефраз «Band 6.0 or below» → «lower group / weaker group».'
      ]
    },
    task2: {
      prompt: 'Some people argue that standardised examinations such as IELTS measure test-taking skills rather than real language ability. To what extent do you agree or disagree?',
      keywords: ['examinations', 'test', 'skills', 'language', 'ability', 'IELTS', 'candidates', 'real', 'communication', 'preparation', 'strategies', 'score', 'academic', 'universities'],
      model: `It is often claimed that standardised examinations such as IELTS reward familiarity with the test format more than genuine language ability. I partly agree with this view, since preparation strategies can influence scores, but I do not accept that such examinations measure nothing but technique.

There is some truth in the criticism. Candidates who know the format can manage their time more effectively, recognise question types quickly and avoid common traps, such as treating a Not Given statement as False. These advantages are real, and two candidates of identical ability may therefore obtain slightly different scores. Moreover, a learner who memorises essay templates may appear more organised than they actually are, at least until the examiner notices the repetition.

Nevertheless, the claim overlooks the way in which these examinations are designed. Reliable tests sample a wide range of tasks, and the productive sections are judged against detailed band descriptors by trained examiners. A candidate cannot disguise limited vocabulary or unstable grammar over two hours of writing and a face-to-face interview. In practice, test-taking skills may raise a score from, say, 6.0 to 6.5, but they cannot convert intermediate language into advanced language.

Furthermore, the skills that preparation develops are not irrelevant to real life. Planning an argument, reading for the main idea and listening for specific information are exactly what university study demands. Technique that is practised in this way becomes part of ability itself.

In conclusion, while test preparation can influence results at the margin, standardised examinations remain a reasonably valid measure of language ability.`,
      analysis: [
        'Task Response: «to what extent» — дана градуированная позиция (partly agree) и обоснована; обе стороны проблемы раскрыты.',
        'Тулмин: claim (частично согласен) → grounds (формат, ловушки Not Given) → warrant (критерии и экзаменаторы не позволяют скрыть слабый язык) → qualifier (6.0 → 6.5, но не 6.0 → 8.0).',
        'Cohesion: абзацы связаны смысловыми переходами (the claim overlooks…, the skills that preparation develops…), коннекторы используются экономно.',
        'Lexical Resource & Grammar: reliable, sample, disguise, unstable; конструкции с whereas/while, Passive, модальные хеджи (may, can).'
      ]
    }
  },

  /* ===== Variant 4 · Pacing Table + AI tools essay ===== */
  {
    title: 'Pacing in the Writing Paper & Translation Tools',
    spec: 'Writing · Task 1 Pacing Table + Task 2 Advantages/Disadvantages · 60 минут',
    takeaway: 'Описание таблицы с двумя группами: выбор главных различий и отказ от пересказа каждой ячейки.',
    task1: {
      prompt: 'The table below shows how long candidates at two score levels spent on each stage of the two Writing tasks, and the average number of words they wrote. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chart: {
        type: 'table', caption: 'Time spent on each stage (minutes) and average words written',
        head: ['Stage', 'Band 6 candidates', 'Band 8 candidates'],
        rows: [
          ['Task 1: planning (min)', '1', '3'],
          ['Task 1: writing (min)', '17', '14'],
          ['Task 1: checking (min)', '2', '3'],
          ['Task 2: planning (min)', '2', '5'],
          ['Task 2: writing (min)', '33', '28'],
          ['Task 2: checking (min)', '5', '7'],
          ['Average words, Task 1', '158', '171'],
          ['Average words, Task 2', '262', '291']
        ]
      },
      keywords: ['time', 'planning', 'writing', 'checking', 'minutes', 'candidates', 'task', 'band', 'words', 'average', 'stage'],
      model: `The table compares how candidates at Band 6 and Band 8 divided their time between planning, writing and checking in the two Writing tasks, and how many words they produced on average.

Overall, the higher-scoring candidates spent noticeably more time on planning and checking, and noticeably less on actual writing, yet they still wrote more words than their lower-scoring counterparts.

The difference was clearest in planning. Band 8 candidates allocated three minutes to planning Task 1 and five minutes to Task 2, compared with only one and two minutes respectively for Band 6 candidates. A similar pattern appeared in checking: the stronger group devoted three minutes to Task 1 and seven to Task 2, whereas the weaker group spent two and five.

Correspondingly, Band 6 candidates spent longer on writing itself, at 17 minutes for Task 1 and 33 for Task 2, against 14 and 28 minutes for Band 8 candidates. In spite of this, their texts were shorter. The Band 8 group averaged 171 words in Task 1 and 291 in Task 2, while the figures for Band 6 were 158 and 262. Both groups used the full 20 and 40 minutes available.`,
      analysis: [
        'Task Achievement: Overview даёт два вывода — больше планирования и проверки, но меньше времени на письмо при большем объёме.',
        'Селекция: данные сгруппированы по этапам (planning → checking → writing), а не пересказаны построчно.',
        'Cohesion: Correspondingly / In spite of this / whereas — логические переходы, отражающие связи между числами.',
        'Lexical Resource: allocated, devoted, counterparts, correspondingly; точные сравнения (respectively, compared with).'
      ]
    },
    task2: {
      prompt: 'Many language learners now rely on translation and artificial-intelligence tools to write in a foreign language. Do the advantages of this development outweigh the disadvantages?',
      keywords: ['translation', 'tools', 'artificial', 'intelligence', 'learners', 'language', 'writing', 'foreign', 'advantages', 'disadvantages', 'accuracy', 'practice', 'dependence', 'skills'],
      model: `The growing use of translation and artificial-intelligence tools has transformed the way people write in a foreign language. Although these tools offer undeniable convenience, I believe that for learners the disadvantages outweigh the advantages unless the tools are used with care.

The principal advantage is immediate access to accurate language. A learner who is unsure how to phrase a formal email can obtain a polished version in seconds, and comparing it with their own draft can reveal useful vocabulary and structures. For professionals who need correct text rather than language practice, this efficiency is valuable, and it also lowers the barrier for people who would otherwise avoid writing in a second language altogether.

Nevertheless, the disadvantages are more serious in an educational context. Language is learned by retrieving words and constructing sentences, an effortful process that strengthens memory. When a tool performs this work, the learner receives the product of the thinking without the benefit of doing it, and skills may stagnate. Furthermore, such tools can produce fluent but inaccurate or inappropriate text, which a learner without sufficient knowledge is unable to detect.

This does not mean that the tools should be rejected. Used as a source of feedback, after a learner has written an independent draft, they can be a powerful aid. The difficulty arises only when they replace the draft.

In conclusion, the convenience of translation and AI tools is genuine, but for those who are learning a language, dependence on them is likely to damage the very skills they wish to acquire.`,
      analysis: [
        'Task Response: вопрос «outweigh» требует итоговой оценки — она дана во введении и подтверждена выводом, с условием (unless used with care).',
        'Баланс: преимущества признаны и объяснены, но не перечислены; недостатки поданы с механизмом (усилие вспоминания укрепляет память).',
        'Cohesion: Nevertheless/Furthermore, а также повторение понятий «this efficiency», «this work», «the draft».',
        'Lexical Resource & Grammar: stagnate, barrier, polished, effortful; хеджирование (may, likely), Passive и сложноподчинённые.'
      ]
    }
  },

  /* ===== Variant 5 · Floor Plan 2015 vs 2026 + exam anxiety essay ===== */
  {
    title: 'A Language Centre in 2015 and 2026 & Exam Anxiety',
    spec: 'Writing · Task 1 Floor Plan + Task 2 Causes & Solutions · 60 минут',
    takeaway: 'Сравнение двух планов: язык изменений (was converted into, was replaced by) и эссе «причины и решения».',
    task1: {
      prompt: 'The plans below show the ground floor of a language centre in 2015 and how it looks in 2026. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chart: {
        type: 'plan', caption: 'Ground floor of a language centre',
        before: [
          [2, 2, 36, 36, 'Reception', '#e0e7ff'], [38, 2, 40, 36, 'Classroom 1', '#f1f5f9'], [78, 2, 40, 36, 'Classroom 2', '#f1f5f9'],
          [2, 42, 24, 36, 'Storage', '#e2e8f0'], [26, 42, 40, 36, 'Library', '#ecfdf5'], [66, 42, 26, 36, 'Cafe', '#fef3c7'], [92, 42, 26, 36, 'Office', '#fce7f3']
        ],
        after: [
          [2, 2, 36, 36, 'Reception', '#e0e7ff'], [38, 2, 80, 36, 'Simulation Arena', '#f1f5f9'],
          [2, 42, 64, 36, 'ESP Library', '#ecfdf5'], [66, 42, 26, 36, 'Cafe', '#fef3c7'], [92, 42, 26, 36, 'Shadowing Studio', '#ede9fe']
        ]
      },
      keywords: ['reception', 'classroom', 'library', 'storage', 'office', 'cafe', 'arena', 'studio', 'plan', 'room', 'floor', 'centre'],
      model: `The plans illustrate how the ground floor of a language centre changed between 2015 and 2026.

Overall, the layout was simplified, with two pairs of rooms merged into larger spaces and one room converted to a new function, while the reception area and the café remained exactly where they were.

In 2015 the floor contained seven rooms. The reception was located in the top left corner, next to two separate classrooms. Below them stood a storage room, a library, the café and an office, arranged in a row from left to right.

By 2026, the two classrooms had been combined to form a single large Simulation Arena, which occupies the entire top right section. Likewise, the storage room has been removed and its space added to the library, which is now considerably larger and has been renamed the ESP Library. The office in the bottom right corner has been replaced by a Shadowing Studio.

As a result, the number of rooms has fallen from seven to five. The reception and the café are the only areas that show no change.`,
      analysis: [
        'Task Achievement: Overview фиксирует главное — объединение комнат и сохранение двух зон; затем детали по каждому изменению.',
        'Cohesion: пространственные и временные ориентиры (in the top left corner, below them, by 2026, as a result).',
        'Lexical Resource: язык изменений — combined to form, has been removed and added to, replaced by, converted, remained.',
        'Grammar: контраст Past Simple (2015), Present Perfect Passive (результат к 2026) и Present Simple (состояние сейчас).'
      ]
    },
    task2: {
      prompt: 'Many students feel anxious before important examinations. What are the main causes of this anxiety, and what can schools and individuals do to reduce it?',
      keywords: ['anxiety', 'examinations', 'students', 'stress', 'pressure', 'schools', 'causes', 'preparation', 'sleep', 'parents', 'performance', 'breathing', 'future', 'results'],
      model: `Anxiety before important examinations is a widespread problem among students. Its causes lie mainly in the consequences attached to the results and in poor preparation habits, and it can be reduced by action at both the institutional and the individual level.

The most significant cause is the weight that examination results carry. When a single score determines access to university or a scholarship, students understandably perceive the examination as a threat to their entire future. This pressure is frequently amplified by parents and peers, who may unintentionally turn each mock test into a verdict on the student's worth. A second cause is inadequate preparation. Students who rely on last-minute revision and late nights enter the examination tired, and uncertainty about their own knowledge generates worry.

Schools can address these problems in several ways. They should offer regular low-stakes practice tests, so that the examination format becomes familiar and the cost of an individual mistake is small. Teachers can also explain how stress works: a moderate level of arousal improves performance, and only excessive arousal harms it. Students who understand this tend to interpret their nervousness as readiness instead of danger.

Individuals, for their part, can adopt a structured study plan with spaced revision and sufficient sleep. In addition, simple techniques such as slow breathing with a long exhalation can reduce physical tension immediately before and during the examination.

In conclusion, anxiety stems chiefly from high stakes and weak preparation, and it can be reduced if schools normalise practice and students manage their studies and their physical state deliberately.`,
      analysis: [
        'Task Response: оба вопроса раскрыты — причины (вес результата, подготовка) и меры (школы + личные); каждая часть имеет отдельный абзац.',
        'Argument: причина → механизм (оценка как угроза будущему) → решение; для решений указано, почему они работают (arousal-кривая).',
        'Cohesion: упорядоченность через смысл (a second cause, schools can…, individuals, for their part), а не механическое перечисление.',
        'Lexical Resource & Grammar: amplified, low-stakes, normalise; сложные предложения с who/which, хеджирование (may, tend to, frequently).'
      ]
    }
  }
];

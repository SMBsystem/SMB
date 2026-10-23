# Промпты для кадров вебтуна «Путь Шошо» (раздел 0)

Как пользоваться: к каждому кадру склей три блока: **СТИЛЬ + ГЕРОЙ + КАДР**. Для лица прикрепляй своё фото как референс
(Midjourney: `--cref` / Niji; ChatGPT и Gemini: просто загрузи фото). Одну и ту же «сид»-картинку героя используй во всех кадрах,
чтобы лицо не менялось. Текст и звуковые надписи в картинки НЕ вставляй: их добавляет страница.

После генерации положи файл в `geoportal/journey/img/` с именем кадра (`p2.jpg`, `e1-1.jpg` …) и впиши имя в список
`images` в `geoportal/journey/journey-config.js`.

## СТИЛЬ (вставляй в каждый промпт)
```
Korean manhwa webtoon style, semi-realistic, sharp clean ink line art, cel shading with soft gradients, cinematic dramatic lighting, rich saturated colors, high detail, polished official webtoon art quality, no text, no letters, no speech bubbles, no watermark
```

## ГЕРОЙ (вставляй, когда он в кадре)
```
Shosho: handsome young Central Asian (Kazakh) man about 20, keep the face from the reference photo, short black side-swept hair with fringe, thin black rectangular glasses, navy blue cardigan over white collared shirt and crimson red tie
```

## Вступление

| Файл | Формат | КАДР |
|---|---|---|
| `p1` | 4:5 | `Pure black void with a faint deep-blue glow in the center, slow floating dust particles, mysterious and quiet, no characters, empty space in the middle` |
| `p2` | 1:1 | `Extreme close-up of Shosho waking up in shock, eyes wide, tiny pupils, a sweat drop on the temple, mouth slightly open, white background with black manga speed lines radiating from the center, impact burst` |
| `p3` | 4:5 | `Shosho small in the lower-left corner standing in thick blue-grey fog on twilight hills, huge pale moon in the upper right, no road, no path, top-left area empty and calm` |
| `p4` | 4:5 | `Dark mystical space, a faint glowing blue-white light ripple floating in the center like a voice, soft rings of light, no face, large empty area in the middle` |
| `p5` | 1:1 | `Close-up of Shosho with a determined look, jaw set, eyes sharp behind the glasses, one hand clenched into a fist near the chin, white background with black speed lines, top-left area empty` |
| `p6` | 4:5 | `Shosho in the lower-right looking at nine glowing doors of different colors emerging from deep fog in a semicircle, magical light spilling from each door, upper area empty` |

## Эпизоды (на каждый по 3 кадра: сцена, реакция, символ)

Схема для кадров `eN-1` (4:5): герой по пояс слева внизу, сверху по центру пусто (там заголовок), справа посередине пусто (там подпись).
Схема для `eN-2` (1:1): крупный план героя на белом фоне с лучами скорости, сверху пусто.
Схема для `eN-3` (4:5): тёмная символическая картинка, в центре пусто (там текст).

| N | Тема | `eN-1` фон | `eN-2` эмоция | `eN-3` символ |
|---|---|---|---|---|
| 1 | 4 типа потребностей | `first glowing door opening in morning fog, golden light, four small glowing orbs hovering in the air` | `shocked, eyes wide, realizing something` | `four glowing orbs of different colors orbiting each other in dark space` |
| 2 | 34 качества | `grand hall of tall mirrors, each mirror shining a different color` | `happy surprised smile, eyes sparkling` | `a mirror reflecting a golden glowing version of Shosho, dark background` |
| 3 | 99 имён | `ancient wooden library with floating glowing golden calligraphic letters between the shelves` | `determined, thoughtful gaze` | `one glowing open book with light rising from its pages, dark background` |
| 4 | Астрология | `huge night sky full of stars and glowing constellation lines, Shosho small against the sky` | `shocked, wide eyes, looking up` | `constellation lines forming a human silhouette in the dark sky` |
| 5 | Физиогномика | `long gallery wall of many framed faces and masks in dim museum light` | `determined, skeptical narrowed eyes` | `a porcelain mask cracking and revealing a real human face, dark background` |
| 6 | Пирамида Дилтса | `giant glass pyramid with six glowing levels under an aurora sky` | `shocked, mouth open in awe` | `the pyramid seen from below, the top level shining brightest, dark space` |
| 7 | 16 личностей | `night city skyline with sixteen windows glowing in a grid on one tall building` | `smiling, curious look` | `sixteen small windows in darkness, only one glowing warm gold` |
| 8 | Хиромантия | `twilight room, Shosho looking at his open palm with faintly glowing lines like a map` | `determined, calm focus` | `a glowing hand drawing a path on an old map with a pen, dark background` |
| 9 | Нумерология | `grand hall where glowing numbers float in the air like fireflies` | `smiling, amused` | `glowing numbers forming a spiral galaxy in dark space` |

## Финал раздела

| Файл | Формат | КАДР |
|---|---|---|
| `o1` | 4:5 | `Shosho seen from behind looking into a large mirror that shows an unfinished sketch-like portrait of him, half colored and half pencil lines, warm golden glow, dark room` |
| `o2` | 1:1 | `Close-up of Shosho with a confident proud smile, white background with black speed lines and small sparkles, top-left area empty` |

## Общий финал всей истории
| Файл | Формат | КАДР |
|---|---|---|
| `end` | 1:1 | `Shosho on a snowy mountain summit at sunrise with aurora, victorious smile, arms open, wide cinematic view` |

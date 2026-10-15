/**
 * Geoecological Rationing and Expertise — Lectures Test
 *
 * Builds a self-grading Google Forms quiz (40 questions, 1 point each)
 * from the course lectures in Google Drive ("Lectures 0/15").
 *
 * How to use:
 *   1. Open https://script.google.com and click "New project".
 *   2. Delete the sample code, paste this whole file, and save.
 *   3. Select createGeoecologicalRationingQuiz in the toolbar and click Run.
 *   4. Approve the permissions prompt (Forms + Drive, your own account only).
 *   5. Open the Execution log for the edit and student links.
 */

const QUIZ_TITLE = 'Geoecological Rationing and Expertise — Test';

// The course folder "4. Geoecological rationing and expertise". The finished
// form is moved there; if that fails it simply stays in My Drive.
const TARGET_FOLDER_ID = '1kjaWXiQ9IW2VlLuHoXvVmyECaDCozS4z';

// Each question: q = question, a = correct answer, w = wrong answers,
// fb = explanation shown to students after grading.
const QUIZ = [
  {
    title: 'Lecture 1 — Environmental Standard-Setting and Environmental Assessment',
    questions: [
      {
        q: 'Which key question does environmental standard-setting answer?',
        a: 'What level of impact is acceptable?',
        w: [
          'What will this project change?',
          'Who will pay for the project?',
          'How many jobs will the project create?',
        ],
        fb: 'Standard-setting asks what is acceptable; environmental assessment asks what the project will change.',
      },
      {
        q: 'Which of the following is an example of a source-based standard?',
        a: 'A wastewater discharge limit for a factory',
        w: [
          'A pollutant concentration limit in ambient air',
          'A soil quality criterion',
          'An allowed contaminant level in a river',
        ],
        fb: 'Quality standards describe the condition of the environment; source-based standards limit the pressure from an activity.',
      },
      {
        q: 'Environmental risk can be approximated as:',
        a: 'Hazard × exposure',
        w: ['Hazard + cost', 'Emission ÷ stack height', 'Exposure − baseline'],
        fb: 'Hazard is the inherent ability to cause harm; risk also considers exposure and context.',
      },
      {
        q: 'Which is the first stage of the typical EIA workflow?',
        a: 'Screening',
        w: ['Scoping', 'Mitigation', 'Monitoring'],
        fb: 'Screening → Scoping → Baseline → Prediction → Evaluation → Mitigation → Report → Review → Monitoring.',
      },
      {
        q: 'In an EIA, "baseline conditions" describe:',
        a: 'The state of the environment before the project',
        w: [
          'The impacts predicted after construction',
          'The minimum emission legally allowed',
          'The cheapest project alternative',
        ],
        fb: 'Baseline = what exists before the project (air, water, soil, biodiversity, land use, communities).',
      },
      {
        q: 'What is the first (most preferred) step of the mitigation hierarchy?',
        a: 'Avoid',
        w: ['Minimize', 'Restore', 'Compensate'],
        fb: 'Avoid → Minimize → Restore → Compensate. Changing location, design or timing comes first.',
      },
      {
        q: 'Which principle states that serious risks should not be ignored only because scientific knowledge is incomplete?',
        a: 'Precaution',
        w: ['Polluter pays', 'Public participation', 'Sustainable development'],
        fb: 'Polluter pays = the operator bears pollution-control costs; public participation = stakeholders contribute knowledge.',
      },
      {
        q: 'Which alternative examines the consequences if a project is not implemented at all?',
        a: 'The no-project alternative',
        w: ['The location alternative', 'The technology alternative', 'The compensation alternative'],
        fb: 'Analysing alternatives (location, technology, no-project) supports the preventive approach.',
      },
    ],
  },
  {
    title: 'Lecture 2 — Atmosphere: Structure, Composition and Ecological Regulation',
    questions: [
      {
        q: 'Which gas makes up the largest proportion of dry air?',
        a: 'Nitrogen (≈ 78%)',
        w: ['Oxygen (≈ 78%)', 'Argon (≈ 21%)', 'Carbon dioxide (≈ 1%)'],
        fb: 'N₂ 78.08%, O₂ 20.95%, Ar 0.93%, CO₂ ≈ 0.03%.',
      },
      {
        q: 'In the troposphere, temperature decreases with altitude by approximately:',
        a: '0.6 °C per 100 m',
        w: ['6 °C per 100 m', '0.06 °C per 100 m', 'It increases with altitude'],
        fb: 'The average lapse rate in the troposphere is about 0.6 °C per 100 m.',
      },
      {
        q: 'Which layer of the atmosphere is also called the ozonosphere?',
        a: 'Stratosphere',
        w: ['Troposphere', 'Mesosphere', 'Thermosphere'],
        fb: 'The stratosphere differs from the troposphere mainly by the presence of ozone.',
      },
      {
        q: 'MPC in the working zone (MPCwz) is:',
        a: 'The concentration at 2 m height that a person can inhale 8 hours a day throughout their working life without health deviations',
        w: [
          'The short-term limit in residential air that prevents reflex reactions',
          'The long-term average concentration allowed in residential air',
          'The amount of a pollutant allowed from a single chimney',
        ],
        fb: 'MPCms = short-term (reflex reactions); MPCad = long-term daily average in residential air.',
      },
      {
        q: 'Several substances with an additive (summation) effect are present in the air. Air quality is within the permissible level if:',
        a: 'C₁/MPC₁ + C₂/MPC₂ + … + Cₙ/MPCₙ ≤ 1',
        w: [
          'Each concentration is below 1 mg/m³',
          'C₁ + C₂ + … + Cₙ ≤ the MPC of the most toxic substance',
          'C₁/MPC₁ + C₂/MPC₂ + … + Cₙ/MPCₙ ≥ 1',
        ],
        fb: 'If the sum of the ratios is greater than 1, the air quality is hazardous.',
      },
      {
        q: 'How are substances evaluated if no MPC has been established for them?',
        a: 'Using the ASEL — Approximate Safe Exposure Level',
        w: ['Using the MPE', 'Using the TAE', 'Using the CAPI'],
        fb: 'ASEL is a temporary, calculated hygienic standard used until an MPC is established.',
      },
      {
        q: 'An emission M equals the MPE when MPC ≥ Cₘ + C_f. What does C_f represent?',
        a: 'The background concentration',
        w: [
          'The maximum concentration created by the source',
          'The flow rate of the flue gas',
          'The fee for exceeding emissions',
        ],
        fb: 'Cₘ = maximum concentration from the source, C_f = background; both taken under unfavourable meteorological conditions.',
      },
      {
        q: 'Using Cₘ ≈ 1/H², by what factor does the maximum ground-level concentration fall if a chimney is raised from 20 m to 200 m?',
        a: '100 times',
        w: ['10 times', '20 times', '1,000 times'],
        fb: '1/20² = 1/400 and 1/200² = 1/40,000, so the concentration falls 100 times.',
      },
      {
        q: 'The width of a sanitary protection zone (SPZ) is the distance from the edge of the industrial site to the boundary where:',
        a: 'Pollutant concentration decreases to the MPC level',
        w: [
          'The first residential building begins',
          'The prevailing wind changes direction',
          'Pollutant concentration falls to zero',
        ],
        fb: 'If justified, the SPZ may be expanded, but not more than 3 times its standard size.',
      },
    ],
  },
  {
    title: 'Lecture 3 — Natural and Anthropogenic Processes in the Hydrosphere',
    questions: [
      {
        q: 'Which component of the hydrosphere has the fastest water turnover (about 9 days, ~40 times a year)?',
        a: 'Atmosphere',
        w: ['Rivers', 'Groundwater', 'Mountain glaciers'],
        fb: 'Atmosphere 9 days; rivers 16 days; groundwater 1,400 years; mountain glaciers 1,600 years.',
      },
      {
        q: 'What share of atmospheric moisture originates from evaporation over the oceans?',
        a: 'More than 86%',
        w: ['About 14%', 'About 50%', 'About 7%'],
        fb: 'Only about 14% of atmospheric moisture comes from land.',
      },
      {
        q: 'Which hydrological cycle is now the dominant cycle on the planet?',
        a: 'The atmospheric–lithosphere–biosphere–oceanic cycle',
        w: ['The geocosmic cycle', 'The atmospheric–oceanic cycle', 'The atmospheric–continental–oceanic gyre'],
        fb: 'It began with the emergence of organic life on land and includes living organisms.',
      },
      {
        q: 'Salts in ocean water are dominated by ___, while river water is dominated by ___.',
        a: 'Chlorides (88.7%); carbonates (up to 80%)',
        w: [
          'Carbonates (88.7%); chlorides (up to 80%)',
          'Sulfates; nitrates',
          'Nitrates; phosphates',
        ],
        fb: 'Ocean water is 88.7% chlorides; river water is up to 80% carbonates.',
      },
      {
        q: 'Which sea has the lowest salinity?',
        a: 'Baltic Sea (≈ 7)',
        w: ['Red Sea', 'Persian Gulf', 'The open World Ocean'],
        fb: 'Average ocean salinity is 35; the Red Sea and Persian Gulf are highest (≈ 42).',
      },
      {
        q: "Most of the Earth's fresh water reserves (about 35 million km³) are stored:",
        a: 'In solid form — glaciers and snow',
        w: ['In rivers', 'In lakes', 'In the atmosphere'],
        fb: 'River water (≈ 45,000 km³/year) is the most readily available renewable resource, but most fresh water is ice.',
      },
    ],
  },
  {
    title: 'Lecture 4 — Water Safety: MPCs and Ecological Regulation of the Hydrosphere',
    questions: [
      {
        q: 'What is the WHO maximum permissible concentration for lead in drinking water?',
        a: '10 µg/L (0.01 mg/L)',
        w: ['15 µg/L', '0.1 mg/L', '1 mg/L'],
        fb: '15 µg/L is the U.S. EPA action level, not the WHO value.',
      },
      {
        q: 'In Kazakhstan, what is the MPC for nitrates in drinking water?',
        a: '45 mg/L',
        w: ['3 mg/L', '100 mg/L', '450 mg/L'],
        fb: 'Elevated nitrates are especially dangerous for infants ("blue baby syndrome").',
      },
      {
        q: 'Adverse health effects are observed at 10 mg/L, so regulators set the MPC at 1 mg/L or even 0.1 mg/L. This reflects:',
        a: 'A tenfold to hundredfold safety margin',
        w: [
          'An error in laboratory measurement',
          'The cost of water treatment',
          'The natural background concentration',
        ],
        fb: 'Safety margins account for unknown sensitivities and long-term exposure.',
      },
      {
        q: 'Which pathogen is generally resistant to conventional chlorine disinfection?',
        a: 'Cryptosporidium parvum',
        w: ['Escherichia coli', 'Vibrio cholerae', 'Salmonella enterica'],
        fb: 'Ozone, UV and membrane filtration are effective against Cryptosporidium.',
      },
      {
        q: 'What is the main limitation of UV disinfection of drinking water?',
        a: 'It leaves no residual disinfectant in the water',
        w: [
          'It forms trihalomethanes',
          'It cannot inactivate Cryptosporidium',
          'It requires chlorine gas',
        ],
        fb: 'UV also needs pre-filtration, because suspended solids can shield pathogens.',
      },
      {
        q: 'In a CPI-10 calculation, benzene was measured at 25 µg/L and its MPC is 5 µg/L. What does benzene contribute (C/MPC)?',
        a: '5',
        w: ['0.2', '20', '125'],
        fb: 'C/MPC = 25 ÷ 5 = 5. CPI-10 is the mean of C/MPC for up to ten priority pollutants.',
      },
      {
        q: 'Fish contain 0.5 mg/kg of mercury while the water contains 0.000001 mg/L. What is the organism accumulation coefficient Kn = Co/Cw?',
        a: '500,000',
        w: ['5,000', '50,000,000', '0.000002'],
        fb: 'Kn = 0.5 ÷ 0.000001 = 500,000 — a sign of strong bioaccumulation.',
      },
      {
        q: 'Which Kazakhstan law, adopted on 9 April 2025, replaced the former 2003 code on water resources?',
        a: 'Water Code No. 178-VIII',
        w: ['Environmental Code No. 400-VI', 'Order No. ҚР ДСМ-138', 'Order No. 270'],
        fb: 'The Environmental Code (2021) sets quality standards; Order ҚР ДСМ-138 sets hygienic standards for drinking water.',
      },
      {
        q: 'What is the key principle of water protection?',
        a: 'Pollution must be prevented or controlled at the source, not left to natural dilution',
        w: [
          'Rivers can always dilute pollution to safe levels',
          'Monitoring alone is enough to protect water bodies',
          'Only drinking water sources need protection',
        ],
        fb: 'Three levels: pollution prevention → pollution limitation → environmental quality control.',
      },
    ],
  },
  {
    title: 'Lecture 5 — Sampling of Water, Soil and Air',
    questions: [
      {
        q: 'The main principle of environmental sampling is that a sample must be:',
        a: 'Representative — reflecting the condition of the studied object at a specific place and time',
        w: [
          'As large as possible',
          'Collected only with automatic equipment',
          'Analysed by any available laboratory',
        ],
        fb: 'Even the best laboratory cannot fix a sample that does not represent the object studied.',
      },
      {
        q: 'A grab (discrete) sample represents:',
        a: 'Conditions at a specific location at a specific moment in time',
        w: [
          'The average condition of a whole field',
          'A mixture of samples collected over 24 hours',
          'A portion prepared from a larger mixed sample',
        ],
        fb: 'Grab samples reveal local or short-term changes; composite samples characterise average conditions.',
      },
      {
        q: 'Which ISO series covers soil sampling?',
        a: 'ISO 18400',
        w: ['ISO 5667', 'ISO 14001', 'ISO 9001'],
        fb: 'ISO 5667 covers water sampling; ISO 14001 is for environmental management systems.',
      },
      {
        q: 'An air pump runs at 1.5 L/min for 4 hours and collects 18 µg of a pollutant. What is the concentration?',
        a: '50 µg/m³',
        w: ['5 µg/m³', '12 µg/m³', '500 µg/m³'],
        fb: 'V = 1.5 × 240 = 360 L = 0.36 m³; C = 18 ÷ 0.36 = 50 µg/m³.',
      },
      {
        q: 'What is the purpose of duplicate samples?',
        a: 'To assess the reproducibility of the field sampling procedure',
        w: [
          'To check contamination during transportation',
          'To measure background conditions upstream',
          'To replace a lost sample',
        ],
        fb: 'Field blanks and trip blanks check contamination; duplicates check reproducibility.',
      },
      {
        q: 'Which rule applies to sampling water for microbiological analysis?',
        a: 'Sterile containers are used and are not rinsed with the sampled water unless the method allows it',
        w: [
          'Containers are always rinsed three times with sampled water',
          'Acid is added to every sample to kill bacteria',
          'Any clean plastic bottle may be used',
        ],
        fb: 'Transport time and temperature are also especially important for microbiological samples.',
      },
      {
        q: 'Why should acid NOT simply be added to every water sample as a preservative?',
        a: 'Acidification may be required for one analysis but make another analysis impossible',
        w: [
          'Acid always evaporates during transport',
          'Acid is forbidden by ISO standards',
          'Acid makes samples heavier and harder to transport',
        ],
        fb: 'Preservation depends on the target substance, so the lab and field team must coordinate in advance.',
      },
      {
        q: 'When assessing the impact of a wastewater discharge on a river, what is the purpose of the upstream background point?',
        a: 'To show water quality before the suspected impact',
        w: [
          'To measure the discharge itself',
          'To show how far pollution travels downstream',
          'To replace the need for downstream sampling',
        ],
        fb: 'Downstream points show changes after the pollutant enters; the background point gives the reference.',
      },
    ],
  },
];

function createGeoecologicalRationingQuiz() {
  const form = FormApp.create(QUIZ_TITLE);
  form
    .setTitle(QUIZ_TITLE)
    .setDescription(
      'Test based on the course lectures:\n' +
        '1. Environmental Standard-Setting and Environmental Assessment\n' +
        '2. Atmosphere: Structure, Composition and Ecological Regulation\n' +
        '3. Natural and Anthropogenic Processes in the Hydrosphere\n' +
        '4. Water Safety: Maximum Permissible Concentrations (MPCs)\n' +
        '5. Sampling of Water, Soil and Air\n\n' +
        'Each question has one correct answer and is worth 1 point.'
    )
    .setIsQuiz(true)
    .setProgressBar(true)
    .setConfirmationMessage('Thank you! Your answers have been submitted.');

  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Group').setRequired(true);

  let count = 0;
  QUIZ.forEach(function (section) {
    form.addPageBreakItem().setTitle(section.title);
    section.questions.forEach(function (question) {
      const item = form.addMultipleChoiceItem();
      const options = shuffle_(
        [{ text: question.a, correct: true }].concat(
          question.w.map(function (text) {
            return { text: text, correct: false };
          })
        )
      );
      item
        .setTitle(question.q)
        .setChoices(
          options.map(function (o) {
            return item.createChoice(o.text, o.correct);
          })
        )
        .setPoints(1)
        .setRequired(true);
      if (question.fb) {
        item.setFeedbackForCorrect(FormApp.createFeedback().setText('Correct! ' + question.fb).build());
        item.setFeedbackForIncorrect(
          FormApp.createFeedback().setText('Correct answer: ' + question.a + '. ' + question.fb).build()
        );
      }
      count++;
    });
  });

  try {
    DriveApp.getFileById(form.getId()).moveTo(DriveApp.getFolderById(TARGET_FOLDER_ID));
  } catch (e) {
    Logger.log('Could not move the form into the course folder (it stays in My Drive): ' + e);
  }

  Logger.log('Created quiz with ' + count + ' questions.');
  Logger.log('Edit link (for you): ' + form.getEditUrl());
  Logger.log('Student link (share this): ' + form.getPublishedUrl());
}

// Fisher–Yates shuffle so the correct answer is not always in the same position.
function shuffle_(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  return array;
}

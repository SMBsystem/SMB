/**
 * Environmental Monitoring — Lectures 1–7 Test
 *
 * Builds a self-grading Google Forms quiz (40 questions, 1 point each)
 * from the course lectures in Google Drive.
 *
 * How to use:
 *   1. Open https://script.google.com and click "New project".
 *   2. Delete the sample code, paste this whole file, and save.
 *   3. Select createEnvironmentalMonitoringQuiz in the toolbar and click Run.
 *   4. Approve the permissions prompt (Forms + Drive, your own account only).
 *   5. Open View → Logs (or the Execution log) for the edit and student links.
 */

const QUIZ_TITLE = 'Environmental Monitoring — Test (Lectures 1–7)';

// The course "Exam" folder. The finished form is moved there; if that fails
// it simply stays in My Drive.
const EXAM_FOLDER_ID = '1hTVxBalQAO-r97QsF1PFW7aAM4KIMUIf';

// Each question: q = question, a = correct answer, w = wrong answers,
// fb = explanation shown to students after grading.
const QUIZ = [
  {
    title: 'Lecture 1 — Environmental Monitoring: Concepts & Components',
    questions: [
      {
        q: 'Which definition best describes environmental monitoring?',
        a: 'A system of regular observations, measurements, assessment and forecasting of changes in the environment',
        w: [
          'A single laboratory measurement of a pollutant at one location',
          'A set of legal penalties applied to polluting enterprises',
          'Satellite mapping of land cover carried out once every decade',
        ],
        fb: 'Monitoring is a continuous, integrated process — not a one-off measurement.',
      },
      {
        q: 'In monitoring terminology, what are the "subjects" of monitoring?',
        a: 'The institutions and actors that carry out monitoring (state bodies, laboratories, enterprises, local authorities)',
        w: [
          'The environmental media being observed, such as air, water and soil',
          'The pollutants measured in the samples',
          'The legal standards against which data are compared',
        ],
        fb: 'Objects = what is monitored (air, water, soil, biota…); subjects = who carries out monitoring.',
      },
      {
        q: 'Within an ISO 14001 Environmental Management System, monitoring is a mandatory element of which phase of the Plan-Do-Check-Act cycle?',
        a: 'Check',
        w: ['Plan', 'Do', 'Act'],
        fb: 'Monitoring lets an organisation check its environmental performance against objectives and targets.',
      },
      {
        q: 'Why is dissolved oxygen in a river considered a powerful summary indicator?',
        a: 'It reflects the combined influence of temperature, organic loading and biological activity',
        w: [
          'It is the only water parameter covered by legal standards',
          'It never changes after sampling, so it is easy to measure',
          'It directly measures the concentration of heavy metals',
        ],
        fb: 'A well-chosen indicator acts as a proxy for broader ecosystem health.',
      },
      {
        q: 'Which global monitoring programme is operated by the UN Environment Programme (UNEP)?',
        a: 'GEMS — Global Environment Monitoring System',
        w: ['Copernicus', 'Mauna Loa Observatory', 'Kazhydromet'],
        fb: 'GEMS is run by UNEP; Copernicus is the EU Earth Observation Programme.',
      },
    ],
  },
  {
    title: 'Lecture 2 — Sampling of Water, Soil and Air',
    questions: [
      {
        q: 'The main principle of environmental sampling is that a sample must be:',
        a: 'Representative — reflecting the condition of the studied object at a specific place and time',
        w: [
          'As large as possible',
          'Collected only with automatic equipment',
          'Analysed within one hour by any available laboratory',
        ],
        fb: 'Even the best laboratory cannot fix a sample that does not represent the object studied.',
      },
      {
        q: 'Which ISO series describes the general principles of water sampling?',
        a: 'ISO 5667',
        w: ['ISO 18400', 'ISO 14001', 'ISO 9001'],
        fb: 'ISO 5667 covers water sampling; ISO 18400 covers soil sampling; ISO 14001 is for environmental management systems.',
      },
      {
        q: 'Soil from ten points near an electrical substation is mixed into one composite sample. Only one point was highly contaminated. What is the main risk?',
        a: 'The hotspot concentration is diluted, so the localised contamination may be hidden',
        w: [
          'The composite sample will overestimate contamination across the whole area',
          'Composite samples cannot be analysed for metals',
          'Mixing soil always creates new chemical compounds',
        ],
        fb: 'Composite samples show average conditions but lose information about individual points.',
      },
      {
        q: 'Which water parameter should preferably be measured directly at the sampling site?',
        a: 'Dissolved oxygen',
        w: ['Total lead content', 'Pesticide residues', 'Petroleum hydrocarbons'],
        fb: 'Temperature, pH, conductivity, redox potential and dissolved oxygen can change quickly after collection.',
      },
      {
        q: 'What is the purpose of a trip blank?',
        a: 'To assess contamination that occurs during transportation and storage',
        w: [
          'To measure background water quality upstream of a discharge',
          'To check reproducibility by collecting two identical samples from the same point',
          'To calibrate the flow rate of an air pump',
        ],
        fb: 'Field blanks check contamination during sampling; trip blanks during transport; duplicates check reproducibility.',
      },
      {
        q: 'Which sampling strategy is used when areas of suspected maximum contamination are already known (e.g. near a stack, oil spill or landfill)?',
        a: 'Targeted sampling',
        w: ['Random sampling', 'Systematic sampling', 'Grid sampling'],
        fb: 'Targeted sampling focuses on known or suspected hotspots.',
      },
      {
        q: 'An air filter collected 45 µg of a pollutant from 15 m³ of air. What is the pollutant concentration?',
        a: '3 µg/m³',
        w: ['0.33 µg/m³', '30 µg/m³', '675 µg/m³'],
        fb: 'C = m / V = 45 µg ÷ 15 m³ = 3 µg/m³.',
      },
      {
        q: 'An air pump assumed to run at 2 L/min operates for 60 minutes, but its real flow rate is 1.7 L/min. What volume of air was actually sampled?',
        a: '102 L',
        w: ['120 L', '117 L', '170 L'],
        fb: 'V = Q × t = 1.7 × 60 = 102 L. This is why pump flow rates must be calibrated.',
      },
      {
        q: 'What is the key principle of a chain-of-custody (CoC) procedure?',
        a: 'Every person who handles the sample must sign the CoC form, creating an unbroken chain of accountability',
        w: [
          'Samples must be stored in a chain of linked containers',
          'Only the laboratory analyst needs to sign the form',
          'It is required only for microbiological samples',
        ],
        fb: 'Even one unsigned transfer can make results inadmissible in legal or regulatory proceedings.',
      },
      {
        q: 'A single soil sample shows 50 mg/kg of a substance. Which statement is scientifically correct?',
        a: 'The concentration of the substance in the analysed sample was 50 mg/kg',
        w: [
          'The entire industrial area is contaminated at 50 mg/kg',
          'The surrounding area must be below 50 mg/kg',
          'The result proves that the nearest factory is the source',
        ],
        fb: 'A laboratory result describes the analysed sample; extending it to an area requires a representative sampling design.',
      },
    ],
  },
  {
    title: 'Lecture 3 — Classification of Environmental Monitoring',
    questions: [
      {
        q: 'Background monitoring is carried out mainly in:',
        a: 'Relatively undisturbed territories, to establish natural baseline conditions',
        w: [
          'Factory fence lines, to check permit compliance',
          'City centres during traffic peaks',
          'Accident sites immediately after a spill',
        ],
        fb: 'Background monitoring defines what is natural; impact monitoring defines what is altered.',
      },
      {
        q: 'Which station is given as an example of background monitoring in Kazakhstan?',
        a: 'Borovoe (Akmola Region)',
        w: ['Ekibastuz coal plant', 'Balkhash copper smelter', 'Temirtau steel plant'],
        fb: 'Ekibastuz, Balkhash and Temirtau are examples of impact monitoring around industrial sources.',
      },
      {
        q: 'Monitoring conducted by enterprises to control their own emissions and discharges under permit conditions is called:',
        a: 'Industrial (operational) monitoring',
        w: ['Background monitoring', 'Sanitary-hygienic monitoring', 'Scientific research monitoring'],
        fb: 'Also known as source or compliance monitoring; results are reported to regulators.',
      },
      {
        q: 'Continuous emissions monitoring systems (CEMS) at industrial facilities are an example of which monitoring method?',
        a: 'Automatic monitoring',
        w: ['Field-based visual surveys', 'Remote sensing', 'Laboratory-based monitoring'],
        fb: 'Automatic monitoring uses unattended sensors and data loggers that transmit results in real time.',
      },
      {
        q: 'Collecting environmental data from aircraft, drones and satellites without direct contact with the object is called:',
        a: 'Remote sensing',
        w: ['In-situ monitoring', 'Laboratory-based monitoring', 'Episodic monitoring'],
        fb: 'Remote sensing gives large-area coverage (e.g. land cover, NDVI, sea surface temperature).',
      },
      {
        q: 'The Mauna Loa CO₂ record, running since 1958, illustrates the value of:',
        a: 'Long-term monitoring',
        w: ['Emergency monitoring', 'Short-term episodic monitoring', 'Local impact monitoring'],
        fb: 'Every additional year of data strengthens the statistical power to detect trends.',
      },
    ],
  },
  {
    title: 'Lectures 4–5 — Ecological Regulation of Impacts on the Atmosphere',
    questions: [
      {
        q: 'What is the averaging period of ПДКмр (maximum single-dose concentration)?',
        a: '20–30 minutes',
        w: ['24 hours', 'An 8-hour working shift', '1 year'],
        fb: 'ПДКсс is the 24-hour mean; ПДКрз is the 8-hour working-zone limit.',
      },
      {
        q: 'Ambient air contains SO₂ at 0.25 mg/m³ (ПДКмр = 0.5) and NO₂ at 0.12 mg/m³ (ПДКмр = 0.2). These substances have a summation effect. Is the air quality acceptable?',
        a: 'No — 0.25/0.5 + 0.12/0.2 = 1.1, which exceeds 1',
        w: [
          'Yes — each substance is individually below its ПДК',
          'Yes — the sum of the ratios is 0.9',
          'No — SO₂ alone exceeds its ПДК',
        ],
        fb: 'For substances with summation effect: Σ(Cᵢ / ПДКᵢ) ≤ 1. Here 0.5 + 0.6 = 1.1 > 1.',
      },
      {
        q: 'ОБУВ (provisional orientation safe exposure level) is applied when:',
        a: 'A substance has not been fully evaluated toxicologically; it is temporary and valid for two years',
        w: [
          'A substance is known to be completely harmless',
          'An enterprise cannot reach its ПДВ and needs a phased plan',
          'The city air pollution index exceeds 14',
        ],
        fb: 'ОБУВ is a precautionary estimate that must later be replaced by a ПДК.',
      },
      {
        q: 'ПДВ (maximum permissible emission) for a stationary source is set so that:',
        a: 'The source contribution plus the background concentration does not exceed ПДКмр at ground level',
        w: [
          'The enterprise emits no more than it did the previous year',
          'Only the height of the stack is regulated',
          'Emissions equal the actual current emissions of the enterprise',
        ],
        fb: 'Condition: C_source + C_background ≤ ПДКмр, calculated through dispersion modelling (OND-86).',
      },
      {
        q: 'What is ВСВ (temporarily agreed emission)?',
        a: 'A temporary, phased standard for an enterprise that cannot yet achieve ПДВ, tied to a binding environmental action plan',
        w: [
          'A permanent exemption from emission standards',
          'The maximum concentration allowed in a working zone',
          'An index of urban air pollution',
        ],
        fb: 'ВСВ is a transition instrument (plan up to 5 years), not an exemption from compliance.',
      },
      {
        q: 'A city has ИЗА₅ = 15. How is its level of air pollution classified?',
        a: 'Very High',
        w: ['Low', 'Elevated', 'High'],
        fb: 'ИЗА₅ < 5 Low; 5–6 Elevated; 7–13 High; ≥ 14 Very High.',
      },
      {
        q: 'In the ИЗА calculation, which hazard-class exponent (a) is used for Class I (most hazardous) substances?',
        a: '1.7',
        w: ['1.3', '1.0', '0.9'],
        fb: 'Class I = 1.7; Class II = 1.3; Class III = 1.0; Class IV = 0.9.',
      },
      {
        q: 'What is the minimum Sanitary Protection Zone (СЗЗ) for a Class I industrial enterprise?',
        a: '1,000 m',
        w: ['500 m', '300 m', '100 m'],
        fb: 'Class I 1,000 m; Class II 500 m; Class III 300 m; Class IV 100 m; Class V 50 m.',
      },
      {
        q: 'Under the Environmental Code of Kazakhstan (2021), which facilities require an Integrated Environmental Permit (ИЭР) based on BAT conclusions?',
        a: 'Category I',
        w: ['Category II', 'Category III', 'Category IV'],
        fb: 'Category I = highest-impact facilities such as major power plants and metallurgy.',
      },
    ],
  },
  {
    title: 'Lectures 6–7 — Physico-Chemical Monitoring',
    questions: [
      {
        q: 'A change in water pH from 7 to 6 represents approximately:',
        a: 'A tenfold increase in hydrogen-ion activity',
        w: [
          'A 1% increase in hydrogen-ion activity',
          'A tenfold decrease in hydrogen-ion activity',
          'A doubling of hydrogen-ion activity',
        ],
        fb: 'pH = −log₁₀[H⁺], so the scale is logarithmic.',
      },
      {
        q: 'Which statement about BOD₅ and COD is correct?',
        a: 'COD responds to a broader range of oxidisable substances, so usually COD > BOD₅',
        w: [
          'BOD₅ is always greater than COD',
          'COD measures oxygen consumed by microorganisms over five days',
          'BOD₅ and COD are two names for the same measurement',
        ],
        fb: 'BOD₅ = oxygen used by microbes degrading organic matter over 5 days; COD = oxygen needed for chemical oxidation.',
      },
      {
        q: 'Why can emission statistics not be used as a direct substitute for ambient air monitoring?',
        a: 'After release, pollutants are dispersed, transported, transformed and deposited — emission ≠ ambient concentration',
        w: [
          'Emission statistics are always classified',
          'Ambient air contains no industrial pollutants',
          'Emissions and concentrations are measured in the same units, so they are identical',
        ],
        fb: 'Emission statistics measure mass released; ambient monitoring measures concentration in the environment.',
      },
      {
        q: 'An environmental standard was exceeded on 40 of 365 daily measurements. What is the exceedance frequency?',
        a: '≈ 11%',
        w: ['≈ 4%', '≈ 40%', '≈ 91%'],
        fb: 'F = 40 / 365 × 100 ≈ 10.96%.',
      },
      {
        q: 'The true concentration is 10.0 mg/L. Repeated laboratory results are 12.1, 12.0, 12.1 and 12.0 mg/L. These results are:',
        a: 'Precise but not accurate',
        w: ['Accurate but not precise', 'Both accurate and precise', 'Below the detection limit'],
        fb: 'Results agree closely with each other (precision) but are far from the true value (poor accuracy) — calibration is needed.',
      },
      {
        q: 'High electrical conductivity of river water in arid regions of Kazakhstan:',
        a: 'Is not automatically evidence of anthropogenic pollution — it may reflect natural geochemical background',
        w: [
          'Always proves an industrial discharge',
          'Indicates very low mineralisation',
          'Means the water contains no dissolved ions',
        ],
        fb: 'Monitoring must separate natural background from anthropogenic change.',
      },
      {
        q: 'Why are bottom sediments especially important in monitoring?',
        a: 'They act as a sink, an archive and a potential secondary source of pollution',
        w: [
          'They permanently immobilise all pollutants',
          'They contain no metals or organic pollutants',
          'They reflect only the last 24 hours of pollution',
        ],
        fb: 'Changing redox or pH conditions can remobilise pollutants stored in sediments.',
      },
      {
        q: "Since January 2025, Kazhydromet's Unified Classification System for Water Quality uses how many quality classes?",
        a: 'Six (I–VI)',
        w: ['Three', 'Four', 'Ten'],
        fb: 'Classes I–VI run from best to worst quality and take different water uses into account.',
      },
      {
        q: 'In geoecological monitoring, which activity answers the question "Why is it happening?"',
        a: 'Diagnosis',
        w: ['Monitoring', 'Assessment', 'Sampling'],
        fb: 'Monitoring = what is happening; Assessment = how serious is it; Diagnosis = why is it happening.',
      },
      {
        q: 'Five consecutive measurements were 0.6, 0.8, 1.4, 1.8 and 0.9 times the standard (mean K = 1.1). What is the correct conclusion?',
        a: 'Conditions were not continuously unacceptable — the exceedance frequency was 40%, so both magnitude and frequency should be reported',
        w: [
          'Conditions were continuously unacceptable because the mean exceeds 1',
          'The standard was never exceeded because most values are below 1',
          'The exceedance frequency was 110%',
        ],
        fb: 'Two of five values exceed 1: F = 2/5 × 100 = 40%.',
      },
    ],
  },
];

function createEnvironmentalMonitoringQuiz() {
  const form = FormApp.create(QUIZ_TITLE);
  form
    .setTitle(QUIZ_TITLE)
    .setDescription(
      'Test based on the course lectures:\n' +
        '1. Environmental Monitoring: Concepts & Components\n' +
        '2. Sampling of Water, Soil and Air\n' +
        '3. Classification of Environmental Monitoring\n' +
        '4–5. Ecological Regulation of Impacts on the Atmosphere\n' +
        '6–7. Physico-Chemical Monitoring\n\n' +
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
    DriveApp.getFileById(form.getId()).moveTo(DriveApp.getFolderById(EXAM_FOLDER_ID));
  } catch (e) {
    Logger.log('Could not move the form into the Exam folder (it stays in My Drive): ' + e);
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

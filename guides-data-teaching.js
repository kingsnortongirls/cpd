// Public, fictional examples only. Add future guides using the same schema.
const CPD_MORE_GUIDES = [
  {
    "id": "ai-safety",
    "title": "Using AI Safely in Education",
    "subtitle": "Practical safeguards before you use an AI tool",
    "category": "AI in education",
    "level": "Beginner",
    "minutes": 9,
    "icon": "🛡️",
    "updated": "November 2026",
    "tags": [
      "AI",
      "privacy",
      "safeguarding",
      "accuracy",
      "copyright"
    ],
    "description": "Decide what is appropriate to enter into AI, check the output and keep professional judgement in charge.",
    "outcome": "Distinguish safe, fictional prompts from requests that need an approved system or specialist advice.",
    "intro": "Generative AI can help plan examples, improve wording and suggest teaching activities, but schools remain responsible for information governance, safeguarding and accuracy. A public AI tool is not automatically authorised to process school information. Tool approval and data handling must be checked against current local policy before use.",
    "steps": [
      [
        "Begin with a low-risk task",
        "Choose a task such as drafting a fictional example, a blank template or a set of generic retrieval questions. Do not assume a tool is suitable for identifiable information simply because it is widely available."
      ],
      [
        "Remove identifiable and confidential content",
        "Never paste pupil names, dates of birth, assessment records, contact details, safeguarding concerns, staff HR records, credentials or unpublished policies into an unapproved tool. Replacing a name with initials is not necessarily anonymisation."
      ],
      [
        "Check the tool and permissions",
        "Confirm the service is approved for the intended use, who can access prompts, how content may be retained and what settings apply. Where this is unclear, use a fictional scenario instead."
      ],
      [
        "Evaluate teaching quality",
        "Check subject accuracy, terminology, age appropriateness, sources, cultural fairness, accessibility and the intended objective. An AI-generated citation or confident answer may be invented."
      ],
      [
        "Keep an accountable human decision",
        "Review and edit the result yourself. Never let an unreviewed AI output decide a pupil's grade, support, safeguarding response or disciplinary outcome."
      ]
    ],
    "example": {
      "title": "Improve a risky prompt",
      "weak": "Here is a named pupil's assessment record and individual support plan. Tell me what to do next.",
      "improved": "Create a generic checklist for adapting a Year 8 explanation for a fictional mixed-attainment class. Include concise instructions, two worked examples and a short check for understanding.",
      "why": "The second request avoids personal information, states the learning purpose and produces something a teacher can review before use."
    },
    "practice": {
      "heading": "Choose the safer approach",
      "task": "Imagine you want an AI tool to help improve a worksheet tomorrow. Describe the information you would provide, what you would remove and how you would check the result.",
      "starter": "I can share the fictional topic, year group and objective, but I will not share…",
      "model": "I would give the tool a Year 8 topic and a clear objective, using invented examples. I would not paste real pupil profiles, identifiable marks or internal school documents. I would check accuracy and accessibility before using the draft."
    },
    "checklist": [
      "No names, initials combined with identifying details or identifiable pupil records",
      "No passwords, confidential documents, private links or unpublished policies",
      "The service is approved for this intended use",
      "Sources, answers and accessibility checked independently",
      "A teacher retains responsibility for final decisions"
    ],
    "resources": [
      [
        "DfE: Safe use of generative AI in education",
        "https://www.gov.uk/government/publications/safe-use-of-generative-ai-in-education-module-3",
        "Official risk and mitigation training for school staff"
      ],
      [
        "DfE: Generative AI and data protection in schools",
        "https://www.gov.uk/guidance/data-protection-in-schools/generative-artificial-intelligence-ai-and-data-protection-in-schools",
        "Review data protection considerations before using a service"
      ]
    ],
    "tool": "privacy"
  },
  {
    "id": "hinge-questions",
    "title": "Creating Effective Assessment Questions",
    "subtitle": "Misconceptions, hinge questions and exit tickets",
    "category": "Assessment and feedback",
    "level": "Beginner",
    "minutes": 10,
    "icon": "🎯",
    "updated": "November 2026",
    "tags": [
      "assessment",
      "MCQ",
      "hinge",
      "diagnostic",
      "retrieval",
      "exit ticket"
    ],
    "description": "Create questions that reveal thinking, not just whether someone guessed a correct answer.",
    "outcome": "Build a diagnostic four-option question with plausible distractors and an actionable teaching response.",
    "intro": "A hinge question is a short diagnostic check placed at a decision point in a lesson. Its purpose is to expose a particular misunderstanding so the teacher knows whether to move on, clarify or reteach. Good distractors represent likely errors rather than obviously silly choices. Exit tickets should measure the stated objective rather than unrelated facts.",
    "steps": [
      [
        "Start with one learning objective",
        "Write what pupils should be able to do in observable terms, such as ‘convert an 8-bit binary number to denary’, rather than ‘understand binary’."
      ],
      [
        "Identify two or three specific misconceptions",
        "Think about the incorrect strategies pupils may use, such as reading digits left to right as decimal or confusing place values. Avoid making assumptions about individuals."
      ],
      [
        "Write the stem and correct answer",
        "Use straightforward wording and make the correct option unambiguously right. Avoid unnecessary reading difficulty that is unrelated to the learning objective."
      ],
      [
        "Write plausible distractors",
        "Map each incorrect answer to a distinct misunderstanding. Avoid giveaways such as one option being much longer or more detailed than all others."
      ],
      [
        "Choose the teaching response",
        "Decide what to do if pupils select each wrong option. Use a brief explanation, another example, a worked demonstration or a different practice task."
      ]
    ],
    "example": {
      "title": "A question that tells you something",
      "weak": "What is an algorithm? A: computer magic. B: a set of ordered instructions. C: a potato. D: a spaceship.",
      "improved": "Which sequence best represents a valid algorithm for finding the largest of three values? A: Compare the first two, keep the larger, compare with the third. B: Add all three values and divide by three. C: Compare the first two only. D: Select the last value without checking.",
      "why": "Wrong options B, C and D correspond to incorrect strategies, so the responses are more informative."
    },
    "practice": {
      "heading": "Design a diagnostic question",
      "task": "Choose a subject and one objective. Write a question with one right answer, three plausible distractors, and a sentence explaining what each wrong answer reveals.",
      "starter": "Objective: …\nQuestion: …\nA: …\nB: …\nC: …\nD: …\nWrong answer A suggests …",
      "model": "Objective: Identify the correct order of operations. Question: What is 3 + 2 × 4? Options: A 20 (adds first), B 11 (correct), C 24 (multiplies the sum), D 9 (miscalculates multiplication). I would reteach multiplication before addition for pupils selecting A."
    },
    "checklist": [
      "One clear objective and one unambiguous correct response",
      "Three plausible errors, not joke options",
      "All options have comparable wording",
      "Reading complexity does not obscure the skill being checked",
      "An explicit next teaching step for each misconception"
    ],
    "resources": [
      [
        "EEF: Teacher Feedback to Improve Pupil Learning",
        "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback",
        "Connect diagnostic checks to responsive teaching"
      ],
      [
        "Microsoft Support: Create a form or quiz",
        "https://support.microsoft.com/en-us/forms/create-a-new-form-or-quiz",
        "Turn your checked question into a self-marking quiz"
      ]
    ],
    "tool": "mcq"
  },
  {
    "id": "adaptive-teaching",
    "title": "Adaptive Teaching and Scaffolding",
    "subtitle": "Keep the challenge while removing unnecessary barriers",
    "category": "Teaching and learning",
    "level": "Beginner",
    "minutes": 9,
    "icon": "🧠",
    "updated": "November 2026",
    "tags": [
      "SEND",
      "EAL",
      "scaffolding",
      "adaptive teaching",
      "worked examples"
    ],
    "description": "Use clear explanations, modelling, prompts and checks for understanding without lowering expectations.",
    "outcome": "Turn a broad task into a manageable sequence with a model, vocabulary and an appropriate independent response.",
    "intro": "Adaptive teaching responds to what pupils already know and the barriers they face, without assuming that all pupils with a label need the same provision. Scaffolding is temporary support that helps a learner tackle the same substantive objective. Useful supports include worked examples, clear vocabulary, task chunking and checks before independent practice.",
    "steps": [
      [
        "Identify the thinking pupils must do",
        "Separate the core knowledge and reasoning from avoidable difficulty such as ambiguous instructions or an overcrowded worksheet."
      ],
      [
        "Model one clear example",
        "Demonstrate how to start and explain why each step matters. Use an accurate subject-specific example rather than a long paragraph of directions."
      ],
      [
        "Break the task into small stages",
        "Give an ordered checklist that shows the first action, a check for understanding and when the pupil should attempt the next step."
      ],
      [
        "Offer purposeful prompts",
        "Provide a glossary, visual cue, sentence starter or worked first step as appropriate. Do not replace the entire task with copying."
      ],
      [
        "Fade the support and check independence",
        "Remove prompts gradually; ask pupils to complete a similar item without the scaffold and explain their thinking."
      ]
    ],
    "example": {
      "title": "Keep the same objective",
      "weak": "Write a paragraph explaining why a renewable energy source could be suitable for a town. Do it independently.",
      "improved": "Read the three facts about solar power. Underline its main benefit and a limitation. Complete the frame ‘Solar power may be suitable because… However…’. Then write a second explanation independently.",
      "why": "The reasoning remains a balanced evaluation, but vocabulary, sequence and first steps are clearer."
    },
    "practice": {
      "heading": "Improve one task",
      "task": "Take a fictional paragraph task and rewrite it with four chunks, one worked example, two key terms and a support that could be removed after practice.",
      "starter": "Pupils need to reason about…\n1. First…\n2. Next…\n3. Check…\n4. Independent attempt…",
      "model": "Objective: compare two methods of travel. Define ‘emissions’ and ‘journey time’. Model one comparison sentence, then ask pupils to collect one fact about each method, organise advantages and limitations, and write a final choice without the model."
    },
    "checklist": [
      "Core thinking is unchanged",
      "Instructions are chunked and explicit",
      "Vocabulary and one example are provided",
      "Support can be faded",
      "Independent understanding is checked"
    ],
    "resources": [
      [
        "EEF: Special Educational Needs in Mainstream Schools",
        "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/send",
        "Review classroom strategies and inclusive practice"
      ],
      [
        "EEF: Metacognition and Self-Regulated Learning",
        "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition",
        "Support modelling, monitoring and independent learning"
      ]
    ],
    "tool": "scaffold"
  },
  {
    "id": "feedback",
    "title": "Feedback That Moves Learning Forward",
    "subtitle": "WWW, HTI and purposeful improvement",
    "category": "Assessment and feedback",
    "level": "Beginner",
    "minutes": 8,
    "icon": "💬",
    "updated": "November 2026",
    "tags": [
      "feedback",
      "WWW",
      "HTI",
      "marking",
      "improvement",
      "assessment"
    ],
    "description": "Give specific feedback that pupils can act upon, without marking every mistake.",
    "outcome": "Write precise WWW and HTI feedback linked to a learning objective and a follow-up action.",
    "intro": "Effective feedback makes clear what went well, what needs improving and what the pupil should do next. Its value depends on whether the learner understands and responds to it. WWW (What Went Well) and HTI (How To Improve) are useful headings, but they only help if the comments are specific and the improvement is achievable.",
    "steps": [
      [
        "Choose a learning focus",
        "Identify the key knowledge or success criterion you are checking rather than trying to correct every part of a response."
      ],
      [
        "Identify one evidenced strength",
        "Reference something specific, such as a correct comparison, accurate use of a term or clear justification."
      ],
      [
        "Choose one high-value next step",
        "Make the improvement actionable: add a missing explanation, correct a misconception or practise a method."
      ],
      [
        "Give time to respond",
        "Use a short improvement question, worked correction or comparable challenge. Avoid feedback that leaves nothing for the pupil to do."
      ],
      [
        "Check the improvement",
        "Review a representative sample or use a short check question to see whether the pupil can now perform the skill independently."
      ]
    ],
    "example": {
      "title": "From vague to actionable",
      "weak": "WWW: Good work. HTI: Add more detail.",
      "improved": "WWW: You correctly distinguish RAM from permanent storage. HTI: Explain what happens to RAM data when the power is switched off, then compare this with an SSD using one example.",
      "why": "The pupil knows what knowledge is secure and exactly what to improve."
    },
    "practice": {
      "heading": "Draft WWW and HTI",
      "task": "Use a fictional answer with one correct idea and one missing explanation. Write a WWW comment, an HTI instruction and a 25-word improvement activity.",
      "starter": "WWW: You accurately…\nHTI: Improve your explanation by…\nImprovement task: …",
      "model": "WWW: You identified a router as a network device correctly. HTI: Explain how a router chooses where to forward packets. Improvement: Describe the journey of a packet through two networks and include the words router, destination and address."
    },
    "checklist": [
      "Feedback relates directly to the objective",
      "WWW identifies specific evidence",
      "HTI gives an achievable action",
      "Pupils have time to respond",
      "Improvement is checked"
    ],
    "resources": [
      [
        "EEF: Teacher Feedback to Improve Pupil Learning",
        "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback",
        "Evidence-informed principles for feedback"
      ],
      [
        "EEF: Feedback toolkit",
        "https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/feedback",
        "Consider feedback timing, content and pupil response"
      ]
    ],
    "tool": "feedback"
  },
  {
    "id": "accessibility",
    "title": "Making Teaching Resources Accessible",
    "subtitle": "Small changes that remove barriers",
    "category": "Accessibility and inclusion",
    "level": "Beginner",
    "minutes": 9,
    "icon": "♿",
    "updated": "November 2026",
    "tags": [
      "accessibility",
      "alt text",
      "contrast",
      "inclusive",
      "PowerPoint",
      "documents"
    ],
    "description": "Improve headings, text, colour contrast, images and navigation in everyday teaching materials.",
    "outcome": "Spot common accessibility problems and revise a fictional worksheet or slide.",
    "intro": "Accessible resources help pupils read, navigate and understand content regardless of how they access it. Start with simple, consistent headings, meaningful links, readable text and sufficient contrast. Images that carry information need suitable text alternatives; decorative images generally do not. Accessibility should be checked alongside subject accuracy.",
    "steps": [
      [
        "Make the structure obvious",
        "Use short headings, logical reading order and genuine heading styles rather than only bold text. Group related instructions together."
      ],
      [
        "Use readable words and layouts",
        "Prefer short instructions and adequate spacing. Do not cram a complete lesson into one slide if readability suffers."
      ],
      [
        "Check colour and emphasis",
        "Avoid pale text and do not use colour as the only way to convey an instruction or correct answer."
      ],
      [
        "Explain meaningful images",
        "Give concise alternative text that captures a diagram's teaching purpose. Decorative images should not clutter screen reader output."
      ],
      [
        "Test the resource",
        "Navigate by keyboard where possible, use the application's accessibility checker and check how the file looks on a smaller screen."
      ]
    ],
    "example": {
      "title": "Make the task easier to access",
      "weak": "Click here. Red items are wrong. The diagram has no description and every instruction sits in one block of pale grey text.",
      "improved": "Heading: 'Identify the network devices'. Link: 'Read the router explanation'. Mark wrong answers with both the word 'Incorrect' and a symbol. Add diagram alt text describing the connection between devices.",
      "why": "The revised version improves navigation, clarity and access to visual information."
    },
    "practice": {
      "heading": "Accessibility audit",
      "task": "Imagine a single-slide worksheet with tiny text, a busy photo, four instructions in one paragraph and links labelled ‘click here’. Identify five improvements and explain the effect of each.",
      "starter": "I would change … to … so that a pupil who … could …",
      "model": "I would use a descriptive heading, divide instructions into numbered steps, enlarge the body text, replace vague links with meaningful labels, and describe the diagram's relevant information."
    },
    "checklist": [
      "Clear heading hierarchy",
      "Readable text and sufficient contrast",
      "Meaningful links",
      "No information conveyed by colour alone",
      "Images and diagrams have appropriate descriptions"
    ],
    "resources": [
      [
        "W3C: Easy accessibility checks",
        "https://www.w3.org/WAI/test-evaluate/preliminary/",
        "Checklist for a first review"
      ],
      [
        "W3C: Alternative text decision tree",
        "https://www.w3.org/WAI/tutorials/images/decision-tree/",
        "Choose useful alt text for different kinds of images"
      ]
    ],
    "tool": "accessibility"
  },
  {
    "id": "retrieval",
    "title": "Retrieval Practice and Metacognition",
    "subtitle": "Do Nows, spaced practice and modelling thinking",
    "category": "Teaching and learning",
    "level": "Beginner",
    "minutes": 8,
    "icon": "🔁",
    "updated": "November 2026",
    "tags": [
      "retrieval",
      "Do Now",
      "metacognition",
      "spacing",
      "revision"
    ],
    "description": "Plan short retrieval tasks and show pupils how to plan, monitor and evaluate their learning.",
    "outcome": "Create a five-minute Do Now mixing recent and older knowledge with a clear feedback routine.",
    "intro": "Retrieval practice asks pupils to bring information to mind rather than only rereading it. Spacing retrieval over time can strengthen retention. Metacognition means thinking about and regulating how we learn, including planning, monitoring and evaluating. These techniques work best when integrated into real subject teaching and followed by corrective feedback.",
    "steps": [
      [
        "Select knowledge worth remembering",
        "Choose core ideas pupils will need later, not obscure facts solely for a quiz."
      ],
      [
        "Mix new and older material",
        "Include one recent item, one from a previous topic and one application or connection."
      ],
      [
        "Keep stakes low",
        "Give brief questions that pupils can attempt without notes and without punishment for mistakes."
      ],
      [
        "Discuss errors and strategies",
        "Reveal explanations, model a helpful reasoning process and distinguish a memory error from a misconception."
      ],
      [
        "Revisit again later",
        "Plan another retrieval opportunity after a suitable interval rather than expecting one quiz to fix learning."
      ]
    ],
    "example": {
      "title": "A deliberate Do Now",
      "weak": "Write everything you remember from yesterday's lesson.",
      "improved": "1. Define a packet (last lesson). 2. Name one difference between RAM and SSD storage (previous unit). 3. Explain why websites use servers (apply an earlier idea). 4. Correct this misconception: 'The internet is one large computer.'",
      "why": "The task is manageable, varied and linked to useful knowledge across lessons."
    },
    "practice": {
      "heading": "Plan a five-minute starter",
      "task": "Choose a topic. Write four short retrieval prompts: one from the last lesson, one from an older unit, one application and one misconception. Include a quick correction routine.",
      "starter": "Recent: …\nOlder: …\nApply: …\nCorrect the misconception: …",
      "model": "Recent: What is a variable? Older: How many bits in a byte? Apply: Give a variable name for a temperature. Misconception: 'A variable's value never changes.' Review answers with concise explanations."
    },
    "checklist": [
      "Retrieval is purposeful and manageable",
      "Some items revisit earlier knowledge",
      "Answers receive timely feedback",
      "A misconception is explicitly addressed",
      "The routine informs the next lesson"
    ],
    "resources": [
      [
        "EEF: Metacognition and Self-Regulated Learning",
        "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition",
        "Planning, monitoring and evaluating learning"
      ],
      [
        "EEF: Teacher Feedback to Improve Pupil Learning",
        "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback",
        "Use responses to guide the next teaching decision"
      ]
    ],
    "tool": "retrieval"
  }
];

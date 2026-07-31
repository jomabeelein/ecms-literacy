// ECMS 8 Literacy Mantras Complete Dataset - Curriculum Aligned Edition
// Aligned with StudySync (ELA), Inspire Science (Science), Savvas (Social Studies & Math), National Geographic (ELD)

const MANTRAS_DATA = [
  {
    id: 1,
    title: "IF THERE'S A TEXT TO READ, WE ALL WILL READ IT",
    shortTag: "Inclusive Text Access & Active Tracking",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M20 30 Q35 25 50 35 Q65 25 80 30 L80 80 Q65 75 50 85 Q35 75 20 80 Z" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 35 L50 85" stroke="#1E3A8A" stroke-width="4"/>
      <line x1="28" y1="42" x2="44" y2="44" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/>
      <line x1="28" y1="52" x2="44" y2="54" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/>
      <line x1="28" y1="62" x2="44" y2="64" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="44" x2="72" y2="42" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="54" x2="72" y2="52" stroke="#1E3A8A" stroke-width="3" stroke-linecap="round"/>
      <path d="M68 25 L68 55 L73 50 L78 55 L78 25 Z" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
    </svg>`,
    quote: "Equity begins when every student reads the text, every time. No passive observers, no skipped passages.",
    philosophy: "Text access is non-negotiable across every content area. When a lesson involves reading, every student actively engages with grade-level text using shared reading structures (Choral, Echo, or Paired Tracking) rather than passive teacher summaries.",
    
    verbatimTeacherScript: "Pencils in hand, index fingers on paragraph 2, line 4 of your text. We are tracking together. When I lower my hand, our voices join in unison. 3... 2... 1... 'In the early morning light...'",
    
    timedProtocol: [
      { time: "0:00 - 0:15", action: "Teacher states starting location (Paragraph/Line number) & projects digital text." },
      { time: "0:15 - 0:30", action: "100% of students place tracking tool (finger, pencil eraser, or cursor) on line 1." },
      { time: "0:30 - 2:30", action: "Choral Echo Reading pass: Teacher leads steady pace while students read aloud in unison." },
      { time: "2:30 - 3:00", action: "Instant Reset Check: Teacher calls out 'Freeze & Circle line 14 word X' to verify active tracking." }
    ],

    // Differentiated ELD Scaffolds with WIDA Levels (1-6)
    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Pair with Picture Vocabulary Card. Student points to visual image while teacher models initial word sound.",
      emerging: "WIDA Level 2 (Emerging): Choral echo reading in 3-word phrases; student tracks text using a physical line pointer tool.",
      developing: "WIDA Level 3 (Developing): Paired whisper reading; student reads alternating sentences with a proficient peer partner.",
      expanding: "WIDA Level 4 (Expanding): Student reads aloud during small-group rotation using StudySync Audio Sync pacing.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Student leads the choral reading cadence for their lab table or peer group."
    },

    misconceptionFix: {
      misconception: "Student fake-reads (eyes on page but mouth not moving, no physical tracking tool moving).",
      counterRoutine: "Execute the 'Tactile Tracking Pivot': Teacher announces 'Erasers down on line 3. Slide eraser under every word as we read.' Teacher walks the perimeter stamping tracking sheets."
    },

    teacherRoutines: [
      {
        name: "Choral Cadence Tracking",
        description: "Teacher sets the cadence while all students read the passage aloud together in unison, using finger or pencil tracking on digital or print text.",
        steps: ["Direct students to paragraph/line number", "Model starting pace using teacher voice or audio track", "Signal 'Ready, Read' for choral unison", "Pause at target vocabulary callouts"]
      },
      {
        name: "Paired Read-and-Point",
        description: "Partner A reads the text aloud while Partner B points to corresponding line numbers, diagram labels, or data tables.",
        steps: ["Assign Partner A (Reader) and Partner B (Tracker/Pointer)", "Partner A reads paragraph 1; Partner B traces text/diagrams", "Partner B confirms accuracy", "Switch roles for paragraph 2"]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Ensures 100% of students have open digital or print text in front of them",
        "Uses active reading structures (Choral, Partner, Echo) rather than round-robin reading or passive teacher summaries",
        "Scaffolds complex text rather than lowering reading level",
        "Monitors physical or digital tracking across the room"
      ],
      studentActions: [
        "100% of students have eyes on text, tracking with pencil or cursor",
        "Students participate aloud in choral/echo passes without hesitation",
        "Students cite specific paragraph numbers or line numbers during discussion"
      ]
    },

    coachingPrompts: [
      "How did your reading routine ensure that WIDA Level 1-2 ELD students had full access to the grade-level text?",
      "What physical tracking cue did you use during the shared reading pass?",
      "How did you prevent passive listening during text reading?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync First Read: Teacher projects text passage. Class uses Choral Reading to read the first 2 paragraphs together at a steady pace, tracking line by line with pencils.",
      Science: "Inspire Science Engage Phase: Lab partners use Paired Read-and-Point to read the background reading, pointing to diagram labels in their Science Notebook as they read.",
      SocialStudies: "Savvas Social Studies DBQ: Class echo-reads a 4-line primary source quote line by line, pausing after each line to clarify historical context.",
      Math: "Savvas EnVision Math Solve & Share: Students chorally read the word problem twice, highlighting given quantities and tracking mathematical action verbs.",
      ELD: "National Geographic ELD (WIDA Level 1-3): Teacher uses Picture Cards to pre-teach vocabulary, then leads a Choral Echo pass where WIDA Level 1-2 students track text with finger pointers."
    }
  },
  {
    id: 2,
    title: "TALK, THEN WRITE, THEN TALK AGAIN",
    shortTag: "Oral-to-Written Loop & Structured Discourse",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M15 25 C15 15 65 15 65 25 C65 35 65 45 45 45 L35 55 L35 45 C15 45 15 35 15 25 Z" fill="#38BDF8" stroke="#1E3A8A" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="30" cy="28" r="3" fill="#FFFFFF"/>
      <circle cx="40" cy="28" r="3" fill="#FFFFFF"/>
      <circle cx="50" cy="28" r="3" fill="#FFFFFF"/>
      <line x1="28" y1="36" x2="52" y2="36" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      <g transform="rotate(-30 75 55)">
        <rect x="65" y="30" width="14" height="40" fill="#F59E0B" stroke="#1E3A8A" stroke-width="3"/>
        <path d="M65 30 L72 18 L79 30 Z" fill="#38BDF8" stroke="#1E3A8A" stroke-width="3"/>
        <path d="M65 70 L72 82 L79 70 Z" fill="#FDBA74" stroke="#1E3A8A" stroke-width="3"/>
        <polygon points="70,78 72,82 74,78" fill="#1E3A8A"/>
      </g>
    </svg>`,
    quote: "Verbal rehearsing clarifies thought. If a student can say it, they can write it. If they write it, they can refine it in dialogue.",
    philosophy: "Oral rehearsal bridges the gap between thinking and academic writing. Structured verbal processing allows students to test vocabulary and refine sentence syntax with a partner before writing independently.",
    
    verbatimTeacherScript: "Partner A, you have 60 seconds to speak your claim using Stem #1 on the screen. Partner B, your eyes are on Partner A, listening to catch their key vocabulary. Switch in 3... 2... 1... Talk!",
    
    timedProtocol: [
      { time: "0:00 - 1:00", action: "Talk 1: Partner A speaks claim using assigned stem (60 sec). Partner B active listens." },
      { time: "1:00 - 2:00", action: "Talk 1 Switch: Partner B responds or offers counter-argument using Stem #2 (60 sec)." },
      { time: "2:00 - 5:00", action: "Write Phase: 3 minutes of silent, continuous pencil-to-paper writing." },
      { time: "5:00 - 6:30", action: "Talk 2: Swapping papers; partners read written work aloud & give 1 verbal Glow/Grow." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Provide visual choice cards; student points and states 1-word answer to partner.",
      emerging: "WIDA Level 2 (Emerging): Provide NatGeo Language Frame card; partner prompts with 'Start with: In my opinion...'",
      developing: "WIDA Level 3 (Developing): Student speaks response using a 2-part sentence frame containing 1 target vocabulary word.",
      expanding: "WIDA Level 4 (Expanding): Student uses 1 target Tier 2 academic vocabulary term during Talk 1 prior to writing.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Student leads peer critique during Talk 2, challenging partner to add textual line evidence."
    },

    misconceptionFix: {
      misconception: "Students sit in silence or engage in off-task social chatter during Turn & Talk.",
      counterRoutine: "Execute the 'A/B Timed Relay Protocol': Teacher stands in center with timer. 'Partner A speaks for 45 seconds nonstop. If Partner A pauses, Partner B points to the posted stem on the board.'"
    },

    teacherRoutines: [
      {
        name: "Turn & Talk -> Quick Write -> Peer Review",
        description: "A structured 3-phase routine connecting structured oral dialogue to silent writing and peer feedback.",
        steps: [
          "Phase 1 (Talk 1): Partner A states initial claim using provided Language Frame (60 sec); Partner B responds.",
          "Phase 2 (Write): 3 minutes of silent, continuous writing.",
          "Phase 3 (Talk 2): Partners swap written responses, read peer work, and give 1 verbal recommendation."
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Provides clear time limits and assigned roles (Partner A / Partner B) for oral rehearsal",
        "Circulates to listen for academic vocabulary and sentence stems",
        "Insists on silent, uninterrupted writing time immediately following partner talk"
      ],
      studentActions: [
        "Students use full academic sentences during partner rehearsal",
        "Students transition seamlessly from talking to quiet writing",
        "Post-writing talk focuses on evaluating evidence and revising written work"
      ]
    },

    coachingPrompts: [
      "How did oral rehearsal improve the depth of evidence in students' written responses?",
      "How did you scaffold the initial turn-and-talk for WIDA Level 1-2 ELD students?",
      "What feedback did students give each other during post-writing discussion?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync Short Response: Students discuss the prompt for 90 seconds with Partner A using assigned sentence stems, write silently for 3 minutes, then swap work for peer review.",
      Science: "Inspire Science CER Explanation: Lab partners verbally state their Claim and Evidence using data tables before writing out their CER explanation paragraph in their notebooks.",
      SocialStudies: "Savvas Social Studies DBQ: Students debate their stance on a Compelling Question using document evidence, write a 5-minute position paragraph, then partner-review historical accuracy.",
      Math: "Savvas EnVision Convince Me!: Students verbally explain why their problem-solving strategy works to a peer before writing out their mathematical justification.",
      ELD: "National Geographic ELD (WIDA Level 1-4): Students practice a cause-and-effect sentence frame orally with a partner using picture cards, write 2 sentences in workbooks, then read sentences aloud to partner."
    }
  },
  {
    id: 3,
    title: "THINKING LEAVES TRACKS",
    shortTag: "Visible Annotation & Metacognition",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M22 42 C15 35 22 20 35 25 C40 18 55 18 60 25 C72 20 80 32 75 45 C82 55 75 70 62 68 C55 75 40 75 32 68 C20 72 15 55 22 42 Z" fill="#EF4444" stroke="#1E3A8A" stroke-width="4" stroke-linejoin="round"/>
      <path d="M48 24 C45 35 52 45 48 68 M35 30 C30 40 38 52 32 60 M62 30 C68 40 60 52 65 60" stroke="#1E3A8A" stroke-width="3" fill="none" stroke-linecap="round"/>
      <g transform="translate(68, 55) scale(0.4)">
        <ellipse cx="20" cy="30" rx="8" ry="12" fill="#1E3A8A"/>
        <circle cx="12" cy="12" r="3" fill="#1E3A8A"/>
        <circle cx="20" cy="10" r="3" fill="#1E3A8A"/>
        <circle cx="28" cy="12" r="3" fill="#1E3A8A"/>
      </g>
      <g transform="translate(78, 35) scale(0.35)">
        <ellipse cx="20" cy="30" rx="8" ry="12" fill="#1E3A8A"/>
        <circle cx="12" cy="12" r="3" fill="#1E3A8A"/>
        <circle cx="20" cy="10" r="3" fill="#1E3A8A"/>
        <circle cx="28" cy="12" r="3" fill="#1E3A8A"/>
      </g>
    </svg>`,
    quote: "Blank margins equal silent minds. Active reading requires physical evidence of engagement on the page.",
    philosophy: "Annotation is the physical footprint of metacognition. When students mark key claims, circle vocabulary, and write marginal summary notes, they make their thinking visible and actionable.",
    
    verbatimTeacherScript: "Pencils in hand. No text highlight without a marginal note. If you circle a word, you must write a 2-word reaction or synonym in the left margin. Show me your tracks!",
    
    timedProtocol: [
      { time: "0:00 - 0:45", action: "Teacher sets annotation purpose: 'Mark 1 Central Claim (★), 2 Vocabulary Terms (◯), 1 Question (?)'." },
      { time: "0:45 - 4:00", action: "Silent Independent Track Pass: Students read and annotate text margins physically or digitally." },
      { time: "4:00 - 5:00", action: "Margin Audit: Partners swap texts and verify that every underline has a corresponding marginal note." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Provide Annotation Bookmark with icon stickers (★ Main Idea, ◯ Key Word); student sticks icon next to targeted line.",
      emerging: "WIDA Level 2 (Emerging): Student circles key vocabulary words and draws visual quick-sketches in margins.",
      developing: "WIDA Level 3 (Developing): Student writes 2-word English marginal summary notes next to paragraph subheaders.",
      expanding: "WIDA Level 4 (Expanding): Student annotates author tone shifts and marks supporting textual evidence.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Student writes marginal analytical critiques evaluating author bias or scientific validity."
    },

    misconceptionFix: {
      misconception: "Students paint the whole page in yellow highlighter without writing any words in margins.",
      counterRoutine: "Enforce the 'No Naked Highlights Rule': Any highlighted line without a written marginal explanation receives 0 credit. Teacher models converting a highlight into a 3-word margin note on doc camera."
    },

    teacherRoutines: [
      {
        name: "Standard Annotation Key (4-Mark System)",
        description: "Universal marginal symbols applied across all content areas.",
        steps: [
          "★ Central Claim / Author Thesis",
          "? Confusion / Question for Inquiry",
          "◯ Target Academic Vocabulary Term",
          "→ Evidence / Supporting Data"
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Explicitly models text annotation under document camera or on digital screen",
        "Establishes clear annotation criteria (e.g., 'At least 2 marginal notes per page')",
        "Circulates to inspect margins and digital highlight notes"
      ],
      studentActions: [
        "Pencils or digital highlighters are active during reading passes",
        "Margins contain written explanatory words/phrases, not just isolated highlights",
        "Students cite their own annotations during class discussion and writing tasks"
      ]
    },

    coachingPrompts: [
      "How did modeling text annotations help students identify key evidence?",
      "Were students writing marginal summary notes or just highlighting text passively?",
      "How did WIDA Level 1-3 ELD students use picture cues to annotate key vocabulary?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync Close Read: Students use digital annotation tools to circle figurative language terms, write marginal notes explaining tone shifts, and tag evidence for Think Questions.",
      Science: "Inspire Science Explore Phase: Students annotate an erosion passage in their notebook by circling key weathering mechanisms, starring human impacts, and drawing arrows connecting text to diagrams.",
      SocialStudies: "Savvas Social Studies DBQ: Students perform HIPP analysis on primary source documents, annotating Historical Context, Intended Audience, Purpose, and Author POV in margins.",
      Math: "Savvas EnVision Word Problem Annotation: Students circle given numerical values, box action keywords ('total', 'per'), underline the target question, and strike out distractor facts.",
      ELD: "National Geographic ELD (WIDA Level 1-4): Students highlight target High-Utility Words in yellow, write cognates in margins, and draw visual quick-sketches next to key action verbs."
    }
  },
  {
    id: 4,
    title: "GIVE THE STEM TO MOVE THE PEN",
    shortTag: "Academic Sentence Frames & Writing Scaffolds",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="25" y="20" width="50" height="60" rx="6" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="4"/>
      <line x1="33" y1="35" x2="67" y2="35" stroke="#1E3A8A" stroke-width="3" stroke-dasharray="4,4"/>
      <line x1="33" y1="48" x2="67" y2="48" stroke="#1E3A8A" stroke-width="3" stroke-dasharray="4,4"/>
      <g transform="translate(30, 20) rotate(-35)">
        <rect x="30" y="30" width="14" height="45" fill="#F59E0B" stroke="#1E3A8A" stroke-width="3"/>
        <path d="M30 30 L37 18 L44 30 Z" fill="#EF4444" stroke="#1E3A8A" stroke-width="3"/>
        <path d="M30 75 L37 90 L44 75 Z" fill="#FDBA74" stroke="#1E3A8A" stroke-width="3"/>
        <polygon points="35,85 37,90 39,85" fill="#1E3A8A"/>
      </g>
    </svg>`,
    quote: "Stems lower the cognitive load of starting, allowing students to focus their mental energy on complex critical thought.",
    philosophy: "Sentence stems and language frames democratize academic writing. By providing structured frames aligned with task complexity, teachers empower all students to articulate complex ideas.",
    
    verbatimTeacherScript: "Look at Stem #2 on the left slide. Put your finger on the starter word: 'Although'. Complete this stem orally with your partner before writing it in your notebook. 3... 2... 1... Point & Speak!",
    
    timedProtocol: [
      { time: "0:00 - 0:30", action: "Teacher reveals 3 tiered sentence stems (Recall, Analysis, Evaluation) matching task complexity." },
      { time: "0:30 - 1:30", action: "Point & Speak Warmup: Students select 1 stem and recite their complete sentence orally to a partner." },
      { time: "1:30 - 5:00", action: "Independent Pen-to-Paper: Students write full response starting directly with their selected stem." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Frame: 'The text shows ____.' with picture choice cards.",
      emerging: "WIDA Level 2 (Emerging): Frame: 'I observed ____ because ____.' with word bank.",
      developing: "WIDA Level 3 (Developing): Frame: 'According to [Source], ____, which proves that ____.'",
      expanding: "WIDA Level 4 (Expanding): Frame: 'While the data suggests ____, a closer inspection reveals ____.'",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Advanced Frame: 'Although [Perspective A] asserts ____, evidence demonstrates ____ because ____.'"
    },

    misconceptionFix: {
      misconception: "Students ignore posted stems and write informal, fragmented 3-word answers.",
      counterRoutine: "Execute the 'Mandatory Stem Highlight': Students must highlight the sentence stem in green on their paper before turning it in. Unhighlighted papers are returned for stem integration."
    },

    teacherRoutines: [
      {
        name: "Tiered Language Frame Wall",
        description: "Posting tiered sentence frames categorized by task complexity and ELD proficiency levels (WIDA Levels 1-6).",
        steps: [
          "Recall Frame (WIDA 1-2): 'The text states ____.'",
          "Analysis Frame (WIDA 3-4): 'According to [Source], ____, which proves that ____.'",
          "Evaluation Frame (WIDA 5-6): 'While the evidence in [Source A] suggests ____, a closer examination reveals ____ because ____.'"
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Sentence frames and stems are prominently displayed on slides, anchor charts, or desk strips during writing tasks",
        "Stems directly match the cognitive level of the task",
        "Differentiates stems for ELD proficiency levels (WIDA Levels 1-6)"
      ],
      studentActions: [
        "Students reference posted stems when beginning written responses",
        "Students incorporate complex academic transition words (e.g., 'Consequently', 'Furthermore', 'In contrast')",
        "ELD students complete full academic sentences orally and in writing"
      ]
    },

    coachingPrompts: [
      "How were sentence stems differentiated for WIDA Level 1-2 vs. WIDA Level 3-4 ELD students?",
      "Did sentence frames match the specific prompt structure required by the task?",
      "How did providing sentence stems increase writing rigor?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync Prompt: 'In StudySync text [Title], the author uses [device] to emphasize the central idea that ____, as demonstrated when...'",
      Science: "Inspire Science CER: 'The claim that [X] occurred is supported by data showing ____. Scientific reasoning dictates that ____.'",
      SocialStudies: "Savvas Social Studies DBQ: 'Although Document A claims ____, Document B presents a contrasting perspective by proving that...'",
      Math: "Savvas EnVision Convince Me!: 'My solution of [X] is reasonable because estimating the values yields ____, which aligns with my answer.'",
      ELD: "National Geographic ELD (WIDA Levels 1-4): 'Language Objective Frame: Both [Item 1] and [Item 2] share ____; however, [Item 1] is ____ while [Item 2] is ____.'"
    }
  },
  {
    id: 5,
    title: "READ IT. READ IT AGAIN. READ IT DIFFERENTLY.",
    shortTag: "Multi-Pass Close Reading & Layered Analysis",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M32 30 A 24 24 0 1 1 68 30" fill="none" stroke="#F59E0B" stroke-width="5" stroke-linecap="round"/>
      <polygon points="68,18 78,32 60,32" fill="#F59E0B"/>
      <path d="M25 50 Q40 45 50 52 Q60 45 75 50 L75 80 Q60 75 50 82 Q40 75 25 80 Z" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 52 L50 82" stroke="#1E3A8A" stroke-width="4"/>
    </svg>`,
    quote: "Great texts don't yield their secrets on the first glance. Depth comes from purpose-driven re-reading.",
    philosophy: "Close reading requires purposeful, multi-pass exploration. Pass 1 establishes the Gist; Pass 2 analyzes Structure, Vocabulary & Author Craft; Pass 3 synthesizes Argument, Evidence & Application.",
    
    verbatimTeacherScript: "Pass 1 is complete—we have the gist. Now we enter Pass 2: The Craft Pass. Re-read Paragraphs 3 and 4 with your partner. Your ONLY job in Pass 2 is to highlight every word that shows the author's bias. Re-read in 3... 2... 1...",
    
    timedProtocol: [
      { time: "Pass 1 (Gist) 0:00 - 3:00", action: "Full Text Read Straight Through. Goal: Write 1-sentence gist summary in top margin." },
      { time: "Pass 2 (Craft) 3:00 - 7:00", action: "Chunked Re-Read of Target Paragraph. Goal: Annotate author's word choice, structure, or scientific terms." },
      { time: "Pass 3 (Evidence) 7:00 - 10:00", action: "Targeted Line Re-Read. Goal: Extract exact line numbers to answer analytical writing prompts." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Pass 1 uses Picture Walk & audio support; Pass 2 focuses on matching 2 key terms to images.",
      emerging: "WIDA Level 2 (Emerging): Pass 2 focuses on identifying signal transition words (First, Next, Finally) with partner.",
      developing: "WIDA Level 3 (Developing): Pass 2 focuses on annotating domain vocabulary and structural subheaders.",
      expanding: "WIDA Level 4 (Expanding): Pass 3 requires student to locate and cite 2 specific line numbers supporting claim.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Pass 3 requires student to compare craft choices across 2 related texts."
    },

    misconceptionFix: {
      misconception: "Students complain 'We already read this!' and refuse to look back at the text for Pass 2.",
      counterRoutine: "Re-frame Pass 2 as a 'Detective Zoom-In': 'Pass 1 was the high-altitude map. Pass 2 is putting Paragraph 3 under the microscope to find hidden clues. You cannot answer Question 3 without line numbers from Pass 2!'"
    },

    teacherRoutines: [
      {
        name: "3-Pass Close Reading Protocol",
        description: "Purpose-driven multi-pass routine tailored to complex instructional texts.",
        steps: [
          "Pass 1 (Gist & Main Idea): Read for overall narrative or informational context; answer baseline comprehension questions.",
          "Pass 2 (Skill, Craft & Vocabulary): Re-read target excerpts to analyze text structure, domain vocabulary, or author craft.",
          "Pass 3 (Synthesis & Evidence): Re-read key paragraphs to gather evidence for analytical writing prompts."
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Articulates a clear, distinct PURPOSE for each reading pass before students read",
        "Uses shorter text chunks (complex paragraphs) for 2nd and 3rd reading passes",
        "Asks text-dependent questions that require students to point directly to specific line numbers"
      ],
      studentActions: [
        "Students readily return to the text for subsequent reading passes without complaint",
        "Annotations on 2nd and 3rd passes show deeper analytical depth (craft, evidence, structure)",
        "Student verbal and written answers cite line numbers from subsequent passes"
      ]
    },

    coachingPrompts: [
      "How did the focus shift between Pass 1 (Gist) and Pass 2 (Craft) in today's lesson?",
      "What specific paragraph chunk was selected for the 2nd pass deep-dive?",
      "How did multi-pass reading support WIDA Level 1-3 ELD students in comprehending complex text?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync 3-Pass Model: Pass 1 (First Read) for plot summary; Pass 2 (Close Read) to analyze author's word choice; Pass 3 (Focus Read) to gather quote evidence for writing.",
      Science: "Inspire Science 3-Pass Model: Pass 1 for phenomenon overview; Pass 2 to dissect domain vocabulary in paragraph 3; Pass 3 to extract evidence for lab CER explanation.",
      SocialStudies: "Savvas Social Studies DBQ: Pass 1 for historical summary; Pass 2 for HIPP analysis (Author POV & Audience); Pass 3 to extract quotes for essay thesis.",
      Math: "Savvas EnVision 3-Act Math: Pass 1 (Act 1 Video) for scenario context; Pass 2 (Act 2 Handout) to extract given dimensions; Pass 3 to calculate solution and verify reasonableness.",
      ELD: "National Geographic ELD (WIDA Levels 1-4): Pass 1 for picture walk & gist; Pass 2 for High-Utility Vocabulary focus; Pass 3 for completing writing frames with line citations."
    }
  },
  {
    id: 6,
    title: "THE WORD IS... (WHAT'S THE WORD?)",
    shortTag: "Explicit Vocabulary Chanting & Kinesthetic Memory",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M30 55 C20 55 15 45 22 35 C18 25 28 15 38 20 C45 12 60 12 68 20 C78 18 85 28 80 38 C88 48 80 60 68 58 C60 65 40 65 30 55 Z" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="28" cy="68" r="4" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="3"/>
      <circle cx="22" cy="78" r="2.5" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="2"/>
      <text x="50" y="48" font-family="'Outfit', sans-serif" font-weight="800" font-size="34" fill="#F59E0B" stroke="#1E3A8A" stroke-width="1.5" text-anchor="middle">?</text>
    </svg>`,
    quote: "Vocabulary is built through mouth-muscle memory, explicit pronunciation, and rapid choral repetition.",
    philosophy: "Academic vocabulary acquisition requires explicit auditory, kinesthetic, and choral repetition. Choral vocabulary routines build phonological memory and ensure academic terms are owned by every learner.",
    
    verbatimTeacherScript: "Eyes on the board. Word #1 is SYMBIOSIS. What's the word? (Class: SYMBIOSIS!). Soft whisper: (symbiosis!). Loud shout: (SYMBIOSIS!). Syllables: Sym-bi-o-sis! Gesture: Interlock fingers! Say definition: 'Two organisms living together for survival!'",
    
    timedProtocol: [
      { time: "0:00 - 0:15", action: "Step 1: Teacher model call: 'The word is [WORD]! What's the word?'" },
      { time: "0:15 - 0:35", action: "Step 2 & 3: Whole class choral echo (Whisper -> Loud) + Syllable clap." },
      { time: "0:35 - 1:00", action: "Step 4: Say kid-friendly definition in unison while performing physical gesture." },
      { time: "1:00 - 1:30", action: "Step 5: Turn to partner and use word in assigned sentence frame." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Pair word chant with Picture Card & bilingual cognate card (e.g., Symbiosis / Simbiosis).",
      emerging: "WIDA Level 2 (Emerging): Student performs gesture and echoes word during soft/loud repetition passes.",
      developing: "WIDA Level 3 (Developing): Student adds 1 synonym or antonym during Step 5 turn-and-talk.",
      expanding: "WIDA Level 4 (Expanding): Student creates original sentence frame using target word during Step 5.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Student explains morphology (root word, prefix, suffix) to partner."
    },

    misconceptionFix: {
      misconception: "Half the class stays silent during the choral response or mumbles behind peers.",
      counterRoutine: "Execute the 'Choral Reset Coda': Teacher stops: 'I heard 14 voices, I need 28. Row 1 & Row 2 lead us off. The word is... 3... 2... 1...'"
    },

    teacherRoutines: [
      {
        name: "5-Step Explicit Vocabulary Choral Routine",
        description: "Rapid 90-second routine for locking target academic vocabulary into memory.",
        steps: [
          "Step 1 (Teacher Cue): 'The word is... SYMBIOSIS. What's the word?'",
          "Step 2 (Choral Echo): Whole class shouts unison: 'SYMBIOSIS!' (Repeat once soft, once loud).",
          "Step 3 (Syllable Clap): 'Sym-bi-o-sis! (4 syllables).'",
          "Step 4 (Kid-Friendly Definition + Physical Gesture): 'It means two organisms living together (interlock fingers).'",
          "Step 5 (Turn & Use Frame): 'Tell your partner: An example of symbiosis is ___ because ___.'"
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Explicitly models correct pronunciation, syllabication, and word stress",
        "Uses clear cueing signals (hand drop, count of 3) so 100% of students respond chorally in unison",
        "Pairs the vocabulary term immediately with a visual cue, gesture, or sentence frame"
      ],
      studentActions: [
        "100% of students participate enthusiastically in choral responses",
        "Students use physical gestures associated with words during pair talk",
        "Students correctly incorporate new academic terms in subsequent written work"
      ]
    },

    coachingPrompts: [
      "How did the explicit choral vocabulary routine help WIDA Level 1-3 ELD students master target words?",
      "Were all students responding in unison, or did some rely on peer voice delay?",
      "How are you reinforcing target vocabulary terms across the week?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync Vocabulary: Word 'PERSPECTIVE'. Chant: 'The word is PERSPECTIVE! Syllables: Per-spec-tive! Meaning: point of view! Gesture: framing eyes with hands like binoculars!' Frame: 'The character's perspective is...'",
      Science: "Inspire Science Vocabulary: Word 'PHOTOSYNTHESIS'. Chant: 'The word is PHOTOSYNTHESIS! Syllables: Pho-to-syn-the-sis! Meaning: converting light to plant food! Gesture: reaching hands up to sun!' Frame: 'Photosynthesis requires...'",
      SocialStudies: "Savvas Social Studies Vocabulary: Word 'SOVEREIGNTY'. Chant: 'The word is SOVEREIGNTY! Syllables: Sov-er-eign-ty! Meaning: supreme power and self-rule! Gesture: placing crown on head!' Frame: 'The nation claimed sovereignty by...'",
      Math: "Savvas EnVision Math Vocabulary: Word 'DENOMINATOR'. Chant: 'The word is DENOMINATOR! Syllables: De-nom-i-na-tor! Meaning: bottom number of total equal parts! Gesture: pushing hands down!' Frame: 'The denominator represents...'",
      ELD: "National Geographic ELD (WIDA Level 1-4): Word 'ACCUMULATE'. Chant: 'The word is ACCUMULATE! Syllables: Ac-cu-mu-late! Meaning: to gather or pile up! Gesture: scooping hands together to build a pile!' Frame: 'Materials accumulate when...'"
    }
  },
  {
    id: 7,
    title: "TALK ABOUT BOOKS LIKE THEY ARE VIDEO GAMES",
    shortTag: "Gamified Literary Analysis & Worldbuilding",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M18 35 Q35 30 50 38 Q65 30 82 35 L82 75 Q65 70 50 78 Q35 70 18 75 Z" fill="#FDBA74" stroke="#1E3A8A" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 38 L50 78" stroke="#1E3A8A" stroke-width="4"/>
      <rect x="26" y="48" width="48" height="28" rx="12" fill="#0EA5E9" stroke="#1E3A8A" stroke-width="3.5"/>
      <path d="M34 56 H40 V52 H44 V56 H50 V60 H44 V64 H40 V60 H34 Z" fill="#1E3A8A"/>
      <circle cx="60" cy="62" r="2.5" fill="#EF4444"/>
      <circle cx="66" cy="56" r="2.5" fill="#F59E0B"/>
      <circle cx="54" cy="56" r="2.5" fill="#10B981"/>
      <circle cx="60" cy="50" r="2.5" fill="#3B82F6"/>
    </svg>`,
    quote: "Hook student interest by framing characters as players, plots as main quests, conflicts as boss fights, and settings as open-world lore.",
    philosophy: "Gamifying text analysis taps into students' intrinsic analytical motivation. Framing literary plots as Main Quests, character motivations as Stat Builds, historical events as Faction Wars, and settings as World Lore transforms academic discussion into high-engagement debate.",
    
    verbatimTeacherScript: "Look at Player 1 Avatar: Jonas from 'The Giver'. What is his main Stat Flaw right now in Chapter 4? What debuff did the Community Server Admin apply to his build? Talk to your Guild Partner in 3... 2... 1...",
    
    timedProtocol: [
      { time: "0:00 - 1:00", action: "Teacher introduces Quest Card: 'Current Mission: Analyze Character Stat Build or World Lore'." },
      { time: "1:00 - 3:00", action: "Guild Pair Debate: Students evaluate character choices as strategic game moves using game cards." },
      { time: "3:00 - 5:00", action: "Loot Log Entry: Students write analytical response in notebook using academic terms paired with game tags." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Provide Gaming Card with visual icons (🛡️ Defense, ⚔️ Attack, 📜 Lore, 🏰 Map); student points to icon.",
      emerging: "WIDA Level 2 (Emerging): Provide stem: 'The character's main quest was delayed because ____.'",
      developing: "WIDA Level 3 (Developing): Student evaluates character stat choices using a visual graphic organizer.",
      expanding: "WIDA Level 4 (Expanding): Student compares character builds across 2 texts using stat comparison charts.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Student analyzes how author's worldbuilding lore shapes character decision-making."
    },

    misconceptionFix: {
      misconception: "Students talk only about real video games (Fortnite, Roblox) and lose academic text focus.",
      counterRoutine: "Enforce the 'Academic Translation Rule': Every game term used MUST be followed immediately by its literary standard counterpart (e.g., 'Macbeth's Boss Fight—I mean, Climax—occurred when...')."
    },

    teacherRoutines: [
      {
        name: "Character Build & Quest Mechanics Framing",
        description: "Translating traditional literary and academic analysis concepts into video game terminology.",
        steps: [
          "Protagonist / Historical Figure = Player 1 Avatar (Attributes, Flaws, Inventory)",
          "Inciting Incident / Problem = Main Quest Unlocked",
          "Rising Action / Scientific Trial = Side Quests & XP Farming",
          "Climax / Final Exam = Boss Encounter",
          "Setting / Ecosystem = Server Environment & World Lore"
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Pairs gaming terminology with formal curriculum standards (e.g., 'Character Build / Characterization')",
        "Creates discussion prompts that encourage debate over character strategy and plot decisions",
        "Maintains high academic rigor while using engaging gaming metaphors"
      ],
      studentActions: [
        "Students become highly passionate when debating character choices and plot twists",
        "Students analyze text setting like exploring world lore and environmental cues",
        "Reluctant readers and ELD students participate eagerly because entry points feel accessible and fun"
      ]
    },

    coachingPrompts: [
      "How did framing character analysis as a 'Character Build' increase student engagement?",
      "How did you ensure gaming terminology enhanced, rather than replaced, academic standards?",
      "What gaming metaphors could you apply to math tasks or science lab inquiries?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync Unit: 'Jonas is Player 1 Avatar. The Community Server rules applied an Emotional Suppression Debuff. When Jonas receives memories, he unlocks the Wisdom Skill Tree, preparing him for the Final Escape Quest.'",
      Science: "Inspire Science: 'Apex predators are Server Admins. Deforestation is a Server Crash that wipes out the Herbivore Guild's food supply, causing an ecosystem disconnect.'",
      SocialStudies: "Savvas Social Studies: 'Athens built a High-Intellect, Naval-Heavy build. Sparta built a Max-Defense, Infantry-Heavy build. The Peloponnesian War was the ultimate Server Faction War.'",
      Math: "Savvas EnVision Math: 'Act 1 is the Quest Riddle Cutscene; Act 2 is collecting Inventory Calculation Tools; Act 3 is unlocking the Final Solution Loot Box.'",
      ELD: "National Geographic ELD (WIDA Levels 1-4): 'The main character leveled up their Courage Stat after completing the Mountain Side-Quest, unlocking confidence to talk to the Village Elder.'"
    }
  },
  {
    id: 8,
    title: "LOOK AT THE WORK. FIND THE GAPS.",
    shortTag: "Data-Driven Gap Analysis & Targeted Reteaching",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="28" y="20" width="50" height="65" rx="5" fill="#FFFFFF" stroke="#1E3A8A" stroke-width="4"/>
      <circle cx="28" cy="28" r="3" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
      <circle cx="28" cy="40" r="3" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
      <circle cx="28" cy="52" r="3" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
      <circle cx="28" cy="64" r="3" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
      <circle cx="28" cy="76" r="3" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
      <rect x="38" y="32" width="30" height="40" fill="#0EA5E9" stroke="#1E3A8A" stroke-width="2"/>
      <rect x="44" y="40" width="18" height="14" fill="#F59E0B" stroke="#1E3A8A" stroke-width="2"/>
      <line x1="42" y1="62" x2="62" y2="62" stroke="#FFFFFF" stroke-width="3"/>
    </svg>`,
    quote: "Teaching isn't complete when the lesson ends; it's complete when student work demonstrates mastery. Inspect student work to pinpoint exact misconceptions.",
    philosophy: "Instructional impact is measured by student work products. Analyzing exit tickets, lab reports, DBQ paragraphs, math item analyses, and ELD workbooks allows teachers to diagnose exact root causes and execute targeted 5-minute warm-up re-teaches.",
    
    verbatimTeacherScript: "I inspected yesterday's responses. 14 of you wrote great quotes, but stopped before explaining HOW the quote proves your claim. Today's warm-up focus is mastering the 'This demonstrates that...' connection sentence.",
    
    timedProtocol: [
      { time: "End of Lesson (10 min)", action: "Sort Exit Tickets / Workbook pages into 3 Piles: Pile 1 (Mastery), Pile 2 (Partial/Syntax Gap), Pile 3 (Misconception/Blank)." },
      { time: "PLC Data Meeting", action: "Identify exact root cause misconception across Pile 2 & 3 samples." },
      { time: "Next Day Warmup (5 min)", action: "Execute targeted mini-re-teach addressing the single root cause gap for Pile 2 & 3 students." }
    ],

    eldScaffolds: {
      entering: "WIDA Level 1 (Entering): Diagnostic check focuses on visual picture matching and single-word vocabulary completion.",
      emerging: "WIDA Level 2 (Emerging): Diagnostic check focuses on language frame completion in NatGeo Practice Book.",
      developing: "WIDA Level 3 (Developing): Diagnostic check focuses on correct use of past-tense verb endings and transition words.",
      expanding: "WIDA Level 4 (Expanding): Diagnostic check focuses on textual quote citation accuracy and line number tags.",
      bridging: "WIDA Level 5-6 (Bridging/Reaching): Diagnostic check focuses on elaboration depth connecting evidence to thesis."
    },

    misconceptionFix: {
      misconception: "Teacher grading takes hours, leading to delayed feedback that students ignore.",
      counterRoutine: "Execute the '10-Minute 3-Pile Sort': Teacher does NOT write extensive red-ink notes. Teacher quickly sorts papers into 3 piles (Got It, Almost, Not Yet), tallying the single most common error for tomorrow's 5-minute warm-up re-teach."
    },

    teacherRoutines: [
      {
        name: "3-Pile Artifact Sort (10-Minute Routine)",
        description: "Rapid diagnostic sorting of exit tickets or student work samples immediately after a lesson.",
        steps: [
          "Pile 1 (Mastery - 80-100%): Complete claim, strong evidence, correct academic vocabulary.",
          "Pile 2 (Partial - 50-79%): Understands core concept, but missing evidence elaboration or syntax stem.",
          "Pile 3 (Gap / Not Yet - <50%): Misconception of concept, blank, or major language barrier.",
          "Action: Plan a 5-minute targeted small-group re-teach for Pile 2 & 3 during tomorrow's warm-up."
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Actively inspects student writing during independent work with a clipboard or feedback stamp",
        "Brings actual student work artifacts to PLC data meetings rather than relying solely on digital scores",
        "Executes targeted small-group re-teaching based on specific exit ticket gap analysis"
      ],
      studentActions: [
        "Students inspect their own work against clear success criteria and rubrics",
        "Students make revisions willingly when gaps are highlighted",
        "Students can articulate the exact mistake they made and how they fixed it"
      ]
    },

    coachingPrompts: [
      "Looking at today's exit tickets, what specific gap caused students to land in Pile 2?",
      "How did your Math Item Analysis reveal the specific computational error?",
      "What targeted re-teach strategy will you use tomorrow for ELD students struggling with language frames?"
    ],

    exemplarsBySubject: {
      ELA: "StudySync Response Sort: Teacher sorts 28 student responses. Gap identified: 12 students cited quotes but omitted the elaboration sentence. Next-day warm-up re-teach: Modeling the 'This quote proves X because Y' sentence frame.",
      Science: "Inspire Science CER Sort: Teacher analyzes notebook CER paragraphs. Gap: 10 students wrote claims but confused Scientific Reasoning with raw data. Next-day re-teach: Color-coding Reasoning sentences in green vs. Evidence in blue.",
      SocialStudies: "Savvas DBQ Paragraph Sort: Teacher reviews Document synthesis. Gap: Students cited facts but failed to state HIPP Author Point of View. Next-day re-teach: 4-minute Author Perspective checklist warm-up.",
      Math: "Savvas EnVision Math Item Analysis: Teacher reviews Independent Practice. Gap: 11 students set up ratios correctly but made cross-multiplication errors. Next-day re-teach: Step-by-step Visual Learning Bridge review.",
      ELD: "National Geographic ELD Sort (WIDA Levels 1-4): Teacher inspects Practice Book pages. Gap: ELD students used target vocabulary but omitted past-tense '-ed' verb endings. Next-day re-teach: 60-second Choral Past-Tense Verb Chant."
    }
  }
];

// Sentence Stems Dataset
const STEMS_DATASET = [
  { category: "Analysis", dok: 3, subject: "ELA", stem: "In StudySync text '[Text Title]', the author's use of [literary device] conveys the central theme that ____." },
  { category: "Evidence", dok: 2, subject: "ELA", stem: "According to paragraph [X] of the text, the narrator states '____', which demonstrates that ____." },
  { category: "Evaluation", dok: 4, subject: "ELA", stem: "Evaluating the perspective in the Blast prompt, while the author asserts ____, a critical reading reveals ____ because ____." },

  { category: "Hypothesis", dok: 3, subject: "Science", stem: "Based on the Anchor Phenomenon, if [Independent Variable] increases, then [Dependent Variable] will ____ because ____." },
  { category: "Data Analysis", dok: 3, subject: "Science", stem: "The empirical data collected during the Explore Phase on Page [X] demonstrates a direct correlation between ____ and ____." },
  { category: "Evaluation", dok: 4, subject: "Science", stem: "Inspire Science CER Explanation: The claim that ____ is supported by evidence showing ____. Scientific reasoning dictates that ____." },

  { category: "Comparison", dok: 3, subject: "SocialStudies", stem: "In Savvas DBQ Document A, [Author] asserts ____, whereas Document B presents a contrasting view by stating ____." },
  { category: "Causation", dok: 3, subject: "SocialStudies", stem: "Analyzing the C3 Inquiry Arc, the primary historical catalyst for [Event] was ____, which resulted in ____." },
  { category: "Evaluation", dok: 4, subject: "SocialStudies", stem: "Performing HIPP Analysis on Primary Source X: The author's Intended Audience of ____ influenced their point of view because ____." },

  { category: "Justification", dok: 3, subject: "Math", stem: "Savvas EnVision Convince Me!: My mathematical solution of [X] is reasonable because estimating the values yields ____." },
  { category: "Error Analysis", dok: 3, subject: "Math", stem: "In the Solve & Share problem on Page [X], the error occurred in Step [X] because the calculation incorrectly ____." },
  { category: "Strategy", dok: 2, subject: "Math", stem: "To solve this 3-Act Math Task, I first used the Visual Learning Bridge to determine ____ by applying the formula ____." },

  { category: "Sequence & Cause", dok: 2, subject: "ELD", stem: "National Geographic ELD Frame (WIDA 1-2): First, ____ happened. Next, ____ occurred. As a result, ____." },
  { category: "Compare & Contrast", dok: 3, subject: "ELD", stem: "National Geographic ELD Frame (WIDA 3-4): Both [Item 1] and [Item 2] share ____; however, [Item 1] is ____ while [Item 2] is ____." },
  { category: "Academic Justification", dok: 4, subject: "ELD", stem: "National Geographic ELD Frame (WIDA 5-6): I hypothesize that ____ because the text explicitly notes ____." }
];

// Video Game Cards Dataset
const GAME_CARDS_DATASET = [
  {
    litTerm: "First Read & Character Arc",
    gameTerm: "Player 1 Avatar & Stat Build",
    description: "Analyze the main character's core stats (Strength, Wisdom, Flaws) and inventory in your StudySync text.",
    discussionQuestion: "What is your main character's weakest stat right now in the text, and how is it causing them to take damage?",
    badge: "StudySync ELA"
  },
  {
    litTerm: "Anchor Phenomenon Investigation",
    gameTerm: "Mystery Map Event & Environment Glitch",
    description: "An unexpected scientific anomaly in the ecosystem that requires investigation and data gathering to solve.",
    discussionQuestion: "What scientific anomaly did your group observe in the lab, and what tools are needed to patch it?",
    badge: "Inspire Science"
  },
  {
    litTerm: "Primary Source DBQ Analysis",
    gameTerm: "Historical Faction Wars & Lore Records",
    description: "Interrogating historical documents and primary sources as secret lore files left by ancient server admins.",
    discussionQuestion: "If Document A was written by Faction Admin X, what bias or buff was added to their historical narrative?",
    badge: "Savvas History"
  },
  {
    litTerm: "3-Act Math Task Journey",
    gameTerm: "Act 1 Cutscene to Act 3 Boss Defeat",
    description: "Act 1 presents the puzzle cutscene; Act 2 is gathering inventory data; Act 3 unlocks the solution loot box.",
    discussionQuestion: "What hidden inventory data did you unlock in Act 2 that allowed you to solve the Act 3 Boss Math Equation?",
    badge: "Savvas Math"
  },
  {
    litTerm: "ELD Language Workshop",
    gameTerm: "Language Skill Tree & XP Level Up",
    description: "Unlocking new High-Utility Academic Words and language frames to level up your speaking and writing abilities.",
    discussionQuestion: "Which new National Geographic sentence frame did you unlock today to increase your writing XP?",
    badge: "NatGeo ELD"
  }
];

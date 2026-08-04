// ECMS 8 Literacy Mantras Complete Dataset - Middle School Edition (Grades 6-8)
// Aligned with StudySync (ELA), Inspire Science (Science), Savvas (Social Studies & Math), National Geographic (ELD)
// Aligned with Tulsa Way Rubric for Teacher Growth (June 2025) and Tulsa Model TLE Rubric (20 Dimensions)
// Integrated with Middle School Struggling Reader Prompting Guide (400L - 1200L+), MLL/SLIFE Support, Bilingual Desk Cards, RACES/CER Framework, and Gamified Reading Systems.

const MANTRAS_DATA = [
  {
    id: 1,
    title: "IF THERE'S A TEXT TO READ, WE ALL WILL READ IT",
    shortTag: "Inclusive Text Access & Active Tracking",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M20 30 Q35 25 50 35 Q65 25 80 30 L80 80 Q65 75 50 85 Q35 75 20 80 Z" fill="#FFFFFF" stroke="#AB3633" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 35 L50 85" stroke="#AB3633" stroke-width="4"/>
      <line x1="28" y1="42" x2="44" y2="44" stroke="#AB3633" stroke-width="3" stroke-linecap="round"/>
      <line x1="28" y1="52" x2="44" y2="54" stroke="#AB3633" stroke-width="3" stroke-linecap="round"/>
      <line x1="28" y1="62" x2="44" y2="64" stroke="#AB3633" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="44" x2="72" y2="42" stroke="#AB3633" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="54" x2="72" y2="52" stroke="#AB3633" stroke-width="3" stroke-linecap="round"/>
      <path d="M68 25 L68 55 L73 50 L78 55 L78 25 Z" fill="#F59E0B" stroke="#AB3633" stroke-width="2"/>
    </svg>`,
    quote: "Equity begins when every student reads the text, every time. No passive observers, no skipped passages.",
    philosophy: "Text access is non-negotiable across every middle school content area. When a lesson involves reading, every student actively engages with grade-level text using shared reading structures (Choral, Echo, or Paired Tracking) rather than passive teacher summaries.",
    
    tulsaWay: "Essential Content (EC3) & Culture of Learning (CL1)",
    tulsaWayArea: "Essential Content",
    tleDimension: "Dimension 7: Literacy & Dimension 9: Involves All Learners",
    tleDomain: "Instructional Effectiveness (50%)",
    alignmentDetail: "Choral/echo text reading ensures 100% active student text tracking and complex grade-level text access for all middle school learners.",

    verbatimTeacherScript: "Pencils in hand, index fingers on paragraph 2, line 4 of your text. We are tracking together. When I lower my hand, our voices join in unison. 3... 2... 1... 'In the early morning light...'",
    
    timedProtocol: [
      { time: "0:00 - 0:15", action: "Teacher states starting location (Paragraph/Line number) & projects digital text." },
      { time: "0:15 - 0:30", action: "100% of students place tracking tool (finger, pencil eraser, or cursor) on line 1." },
      { time: "0:30 - 2:30", action: "Choral Echo Reading pass: Teacher leads steady pace while students read aloud in unison." },
      { time: "2:30 - 3:00", action: "Instant Reset Check: Teacher calls out 'Freeze & Circle line 14 word X' to verify active tracking." }
    ],

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
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Ensures 100% of students have open digital or print text in front of them (Tulsa Way EC3)",
        "Uses active reading structures (Choral, Partner, Echo) rather than round-robin reading (TLE Dim 7)",
        "Scaffolds complex text rather than lowering reading level",
        "Monitors physical or digital tracking across the room"
      ],
      studentActions: [
        "100% of students have eyes on text, tracking with pencil or cursor",
        "Students participate aloud in choral/echo passes without hesitation (Tulsa Way CL1)",
        "Students cite specific paragraph numbers or line numbers during discussion"
      ]
    },

    coachingPrompts: [
      "How did your reading routine align with Tulsa Way Essential Content (EC3) by providing 100% text access?",
      "Under TLE Dimension 7 (Literacy), what physical tracking cue ensured active engagement?",
      "How did you scaffold the shared reading pass for WIDA Level 1-2 ELD students?"
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
      <path d="M15 25 C15 15 65 15 65 25 C65 35 65 45 45 45 L35 55 L35 45 C15 45 15 35 15 25 Z" fill="#38BDF8" stroke="#AB3633" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="30" cy="28" r="3" fill="#FFFFFF"/>
      <circle cx="40" cy="28" r="3" fill="#FFFFFF"/>
      <circle cx="50" cy="28" r="3" fill="#FFFFFF"/>
      <g transform="rotate(-30 75 55)">
        <rect x="65" y="30" width="14" height="40" fill="#F59E0B" stroke="#AB3633" stroke-width="3"/>
        <path d="M65 30 L72 18 L79 30 Z" fill="#38BDF8" stroke="#AB3633" stroke-width="3"/>
        <path d="M65 70 L72 82 L79 70 Z" fill="#FDBA74" stroke="#AB3633" stroke-width="3"/>
      </g>
    </svg>`,
    quote: "Verbal rehearsing clarifies thought. If a student can say it, they can write it. If they write it, they can refine it in dialogue.",
    philosophy: "Oral rehearsal bridges the gap between thinking and academic writing for middle schoolers. Structured verbal processing allows students to test vocabulary and refine sentence syntax with a partner before writing independently.",
    
    tulsaWay: "Academic Ownership (AO1, AO2, AO3)",
    tulsaWayArea: "Academic Ownership",
    tleDimension: "Dimension 7: Literacy & Dimension 9: Involves All Learners",
    tleDomain: "Instructional Effectiveness (50%)",
    alignmentDetail: "Turn & Talk oral rehearsal prior to writing directly fulfills TLE Dim 7 Note One (presenting/explaining learning) and Tulsa Way Academic Ownership.",

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
        "Provides clear time limits and assigned roles (Partner A / Partner B) for oral rehearsal (TLE Dim 11)",
        "Circulates to listen for academic vocabulary and sentence stems (TLE Dim 13)",
        "Insists on silent, uninterrupted writing time immediately following partner talk"
      ],
      studentActions: [
        "Students use full academic sentences during partner rehearsal (Tulsa Way AO2)",
        "Students transition seamlessly from talking to quiet writing",
        "Post-writing talk focuses on evaluating evidence and revising written work"
      ]
    },

    coachingPrompts: [
      "How did oral rehearsal support student mastery under Tulsa Way Academic Ownership (AO1)?",
      "Under TLE Dimension 9 (Involves All Learners), how did Partner A/B roles keep both students engaged?",
      "How did you scaffold the initial turn-and-talk for WIDA Level 1-2 ELD students?"
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
      <path d="M22 42 C15 35 22 20 35 25 C40 18 55 18 60 25 C72 20 80 32 75 45 C82 55 75 70 62 68 C55 75 40 75 32 68 C20 72 15 55 22 42 Z" fill="#EF4444" stroke="#AB3633" stroke-width="4" stroke-linejoin="round"/>
      <path d="M48 24 C45 35 52 45 48 68 M35 30 C30 40 38 52 32 60 M62 30 C68 40 60 52 65 60" stroke="#AB3633" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
    quote: "Blank margins equal silent minds. Active reading requires physical evidence of engagement on the page.",
    philosophy: "Annotation is the physical footprint of metacognition. When middle school students mark key claims, circle vocabulary, and write marginal summary notes, they make their thinking visible and actionable.",
    
    tulsaWay: "Academic Ownership (AO2) & Essential Content (EC3)",
    tulsaWayArea: "Academic Ownership",
    tleDimension: "Dimension 7: Literacy & Dimension 11: Clear Instruction & Directions",
    tleDomain: "Instructional Effectiveness (50%)",
    alignmentDetail: "Text annotation and marginal note-taking fulfill TLE Dim 7 Note One (summarizing information into written notes) and Tulsa Way Academic Ownership.",

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
        "Explicitly models text annotation under document camera or on digital screen (TLE Dim 12)",
        "Establishes clear annotation criteria (e.g., 'At least 2 marginal notes per page')",
        "Circulates to inspect margins and digital highlight notes (TLE Dim 13)"
      ],
      studentActions: [
        "Pencils or digital highlighters are active during reading passes",
        "Margins contain written explanatory words/phrases, not just isolated highlights (Tulsa Way AO2)",
        "Students cite their own annotations during class discussion and writing tasks"
      ]
    },

    coachingPrompts: [
      "How did modeling text annotations align with TLE Dimension 12 (Models)?",
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
      <rect x="25" y="20" width="50" height="60" rx="6" fill="#FFFFFF" stroke="#AB3633" stroke-width="4"/>
      <line x1="33" y1="35" x2="67" y2="35" stroke="#AB3633" stroke-width="3" stroke-dasharray="4,4"/>
      <line x1="33" y1="48" x2="67" y2="48" stroke="#AB3633" stroke-width="3" stroke-dasharray="4,4"/>
    </svg>`,
    quote: "Stems lower the cognitive load of starting, allowing students to focus their mental energy on complex critical thought.",
    philosophy: "Sentence stems and language frames democratize academic writing in middle school. By providing structured frames aligned with task complexity, teachers empower all students to articulate complex ideas.",
    
    tulsaWay: "Demonstration of Learning (DL2) & Essential Content",
    tulsaWayArea: "Demonstration of Learning",
    tleDimension: "Dimension 11: Clear Instruction & Directions & Dimension 7: Literacy",
    tleDomain: "Instructional Effectiveness (50%)",
    alignmentDetail: "Providing sentence stems lowers the barrier to complex writing, ensuring clear direction under TLE Dim 11 and language scaffolding in Tulsa Way Demonstration of Learning.",

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
        "Sentence frames and stems are prominently displayed on slides, anchor charts, or desk strips during writing tasks (TLE Dim 11)",
        "Stems directly match the cognitive level of the task",
        "Differentiates stems for ELD proficiency levels (WIDA Levels 1-6)"
      ],
      studentActions: [
        "Students reference posted stems when beginning written responses (Tulsa Way DL2)",
        "Students incorporate complex academic transition words (e.g., 'Consequently', 'Furthermore', 'In contrast')",
        "ELD students complete full academic sentences orally and in writing"
      ]
    },

    coachingPrompts: [
      "How were sentence stems differentiated for WIDA Level 1-2 vs. WIDA Level 3-4 ELD students under Tulsa Way DL?",
      "Did sentence frames match the specific prompt structure required by TLE Dimension 11?",
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
      <path d="M25 50 Q40 45 50 52 Q60 45 75 50 L75 80 Q60 75 50 82 Q40 75 25 80 Z" fill="#FFFFFF" stroke="#AB3633" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 52 L50 82" stroke="#AB3633" stroke-width="4"/>
    </svg>`,
    quote: "Great texts don't yield their secrets on the first glance. Depth comes from purpose-driven re-reading.",
    philosophy: "Close reading requires purposeful, multi-pass exploration. Pass 1 establishes the Gist; Pass 2 analyzes Structure, Vocabulary & Author Craft; Pass 3 synthesizes Argument, Evidence & Application.",
    
    tulsaWay: "Essential Content (EC3) & Academic Ownership (AO1)",
    tulsaWayArea: "Essential Content",
    tleDimension: "Dimension 7: Literacy & Dimension 10: Explains Content",
    tleDomain: "Instructional Effectiveness (50%)",
    alignmentDetail: "Multi-pass close reading (Gist, Craft/Structure, Evidence Synthesis) satisfies TLE Dim 7 and Tulsa Way Essential Content.",

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
        "Articulates a clear, distinct PURPOSE for each reading pass before students read (TLE Dim 11)",
        "Uses shorter text chunks (complex paragraphs) for 2nd and 3rd reading passes",
        "Asks text-dependent questions that require students to point directly to specific line numbers (Tulsa Way EC3)"
      ],
      studentActions: [
        "Students readily return to the text for subsequent reading passes without complaint",
        "Annotations on 2nd and 3rd passes show deeper analytical depth (craft, evidence, structure)",
        "Student verbal and written answers cite line numbers from subsequent passes (TLE Dim 7)"
      ]
    },

    coachingPrompts: [
      "How did the focus shift between Pass 1 (Gist) and Pass 2 (Craft) under Tulsa Way Essential Content?",
      "What specific paragraph chunk was selected for the 2nd pass deep-dive under TLE Dim 7?",
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
      <path d="M30 55 C20 55 15 45 22 35 C18 25 28 15 38 20 C45 12 60 12 68 20 C78 18 85 28 80 38 C88 48 80 60 68 58 C60 65 40 65 30 55 Z" fill="#FFFFFF" stroke="#AB3633" stroke-width="4" stroke-linejoin="round"/>
      <text x="50" y="48" font-family="'Outfit', sans-serif" font-weight="800" font-size="34" fill="#F59E0B" stroke="#AB3633" stroke-width="1.5" text-anchor="middle">?</text>
    </svg>`,
    quote: "Vocabulary is built through mouth-muscle memory, explicit pronunciation, and rapid choral repetition.",
    philosophy: "Academic vocabulary acquisition requires explicit auditory, kinesthetic, and choral repetition. Choral vocabulary routines build phonological memory and ensure middle school academic terms are owned by every learner.",
    
    tulsaWay: "Demonstration of Learning (DL2) & Culture of Learning (CL1)",
    tulsaWayArea: "Demonstration of Learning",
    tleDimension: "Dimension 7: Literacy & Dimension 12: Models",
    tleDomain: "Instructional Effectiveness (50%)",
    alignmentDetail: "Explicit 5-step choral vocabulary routines build mouth-muscle memory and phonological recall, directly aligning with TLE Dim 7 & 12 and Tulsa Way DL2.",

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
        "Explicitly models correct pronunciation, syllabication, and word stress (TLE Dim 12)",
        "Uses clear cueing signals (hand drop, count of 3) so 100% of students respond chorally in unison (Tulsa Way CL1)",
        "Pairs the vocabulary term immediately with a visual cue, gesture, or sentence frame (TLE Dim 7)"
      ],
      studentActions: [
        "100% of students participate enthusiastically in choral responses",
        "Students use physical gestures associated with words during pair talk",
        "Students correctly incorporate new academic terms in subsequent written work (Tulsa Way DL2)"
      ]
    },

    coachingPrompts: [
      "How did explicit vocabulary modeling align with TLE Dimension 12 (Models)?",
      "Were all students responding in unison, or did some rely on peer voice delay?",
      "How are target vocabulary terms reinforced across writing tasks under Tulsa Way DL?"
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
      <path d="M18 35 Q35 30 50 38 Q65 30 82 35 L82 75 Q65 70 50 78 Q35 70 18 75 Z" fill="#FDBA74" stroke="#AB3633" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 38 L50 78" stroke="#AB3633" stroke-width="4"/>
      <rect x="26" y="48" width="48" height="28" rx="12" fill="#0EA5E9" stroke="#AB3633" stroke-width="3.5"/>
    </svg>`,
    quote: "Hook student interest by framing characters as players, plots as main quests, conflicts as boss fights, and settings as open-world lore.",
    philosophy: "Gamifying text analysis taps into middle schoolers' intrinsic analytical motivation. Framing literary plots as Main Quests, character motivations as Stat Builds, historical events as Faction Wars, and settings as World Lore transforms academic discussion into high-engagement debate.",
    
    tulsaWay: "Academic Ownership (AO3, AO4) & Culture of Learning (CL5)",
    tulsaWayArea: "Academic Ownership",
    tleDimension: "Dimension 9: Involves All Learners & Dimension 6: Student Relations",
    tleDomain: "Instructional Effectiveness (50%) & Classroom Management (30%)",
    alignmentDetail: "Gamified literary analysis engages all learners (TLE Dim 9) and builds positive student relations and enthusiasm for curriculum.",

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
        "Pairs gaming terminology with formal curriculum standards (e.g., 'Character Build / Characterization') (TLE Dim 9)",
        "Creates discussion prompts that encourage debate over character strategy and plot decisions (Tulsa Way AO3)",
        "Maintains high academic rigor while using engaging gaming metaphors"
      ],
      studentActions: [
        "Students become highly passionate when debating character choices and plot twists",
        "Students analyze text setting like exploring world lore and environmental cues",
        "Reluctant readers and ELD students participate eagerly because entry points feel accessible and fun (TLE Dim 6)"
      ]
    },

    coachingPrompts: [
      "How did framing character analysis as a 'Character Build' increase student involvement under TLE Dimension 9?",
      "How did you ensure gaming terminology enhanced, rather than replaced, Tulsa Way Essential Content?",
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
    shortTag: "Data-Driven Gap Analysis & Struggling Reader Prompting",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect x="28" y="20" width="50" height="65" rx="5" fill="#FFFFFF" stroke="#AB3633" stroke-width="4"/>
      <circle cx="28" cy="28" r="3" fill="#F59E0B" stroke="#AB3633" stroke-width="2"/>
      <circle cx="28" cy="40" r="3" fill="#F59E0B" stroke="#AB3633" stroke-width="2"/>
      <circle cx="28" cy="52" r="3" fill="#F59E0B" stroke="#AB3633" stroke-width="2"/>
    </svg>`,
    quote: "Teaching isn't complete when the lesson ends; it's complete when student work demonstrates mastery. Inspect student work and reading behavior to pinpoint exact gaps.",
    philosophy: "Instructional impact in middle school is measured by student work products and reading breakdown patterns. Analyzing exit tickets, lab reports, DBQ paragraphs, and struggling reader behaviors allows teachers to diagnose exact root causes (decoding, fluency, syntax, Lexile band) and issue targeted teacher prompts.",
    
    tulsaWay: "Demonstration of Learning (DL1, DL4)",
    tulsaWayArea: "Demonstration of Learning",
    tleDimension: "Dimension 14: Adjusts Based upon Monitoring & Dimension 13: Monitors & Dimension 5: Assessment Practices",
    tleDomain: "Classroom Management (30%) & Instructional Effectiveness (50%)",
    alignmentDetail: "10-minute student work 3-pile artifact sorting and targeted struggling reader prompting directly drive data-based instructional adjustments.",

    verbatimTeacherScript: "I inspected yesterday's responses and listened to group 2 read. 14 of you wrote great quotes, but stopped before explaining HOW the quote proves your claim. Today's warm-up focus is mastering the 'This demonstrates that...' connection sentence.",
    
    timedProtocol: [
      { time: "End of Lesson (10 min)", action: "Sort Exit Tickets / Workbook pages into 3 Piles: Pile 1 (Mastery), Pile 2 (Partial/Syntax Gap), Pile 3 (Misconception/Blank)." },
      { time: "PLC Data Meeting", action: "Identify exact root cause misconception & Lexile reading gap across student samples." },
      { time: "Next Day Warmup (5 min)", action: "Execute targeted mini-re-teach and issue Lexile-aligned struggling reader prompts." }
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
        name: "3-Pile Artifact Sort & Struggling Reader Prompting Routine",
        description: "Rapid diagnostic sorting of exit tickets or student work samples paired with Lexile-level reading prompts.",
        steps: [
          "Pile 1 (Mastery - 80-100%): Complete claim, strong evidence, correct academic vocabulary.",
          "Pile 2 (Partial - 50-79%): Understands core concept, but missing evidence elaboration or syntax stem.",
          "Pile 3 (Gap / Not Yet - <50%): Misconception of concept, blank, or decoding breakdown.",
          "Action: Issue targeted Lexile-aligned prompts (e.g., 'Cover the prefix/suffix. What is the root word?', 'What does the text tell us this word means?')."
        ]
      }
    ],

    leaderLookFors: {
      teacherActions: [
        "Actively inspects student writing during independent work with a clipboard or feedback stamp (TLE Dim 13)",
        "Uses Lexile-aligned struggling reader prompts during text passes (TLE Dim 7 & 14)",
        "Brings actual student work artifacts to PLC data meetings rather than relying solely on digital scores"
      ],
      studentActions: [
        "Students inspect their own work against clear success criteria and rubrics",
        "Students respond to teacher prompts by re-reading or correcting decoding errors (Tulsa Way DL4)",
        "Students can articulate the exact mistake they made and how they fixed it"
      ]
    },

    coachingPrompts: [
      "Under TLE Dimension 14 (Adjusts Based upon Monitoring), what data from today's exit tickets determined your warm-up re-teach?",
      "How did your struggling reader prompts align with the student's Lexile level under Tulsa Way Demonstration of Learning (DL4)?",
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

// TOPIC-BASED 3-PASS CLOSE READING GENERATOR DATASETS
const TOPIC_PRESETS_DATASET = [
  {
    topicId: "topic-giver",
    topicName: "The Giver / Dystopian Society (StudySync ELA)",
    subject: "ELA",
    writingFramework: "RACES (Restate, Answer, Cite, Explain, Sum Up)",
    read1: {
      purpose: "Establish baseline understanding of the Community's rules, setting, and Jonas's role.",
      teacherScript: "Pass 1 is our baseline map! As we read, focus on answering: What rules govern Jonas's society and how do characters react to them?",
      questions: [
        "What specific rules or social expectations govern the Community in this passage?",
        "Who are the main characters involved, and what is Jonas's primary role or observation?",
        "What key event or memory causes a shift in Jonas's understanding of his world?"
      ]
    },
    read2: {
      purpose: "Analyze author's word choice, tone shifts, and symbolic imagery (e.g. pale eyes, color, release).",
      teacherScript: "Pass 2 is our Detective Zoom-In! Re-read Paragraphs 2 and 3 to discover HOW Lois Lowry uses word choice to build tension.",
      questions: [
        "Why does the author use clinical words like 'Release' and 'Sameness' instead of direct terms? What tone does this create?",
        "How does paragraph 3 build tension compared to the calm tone in paragraph 1?",
        "What symbolic meaning does the appearance of color or memory represent in this section?"
      ]
    },
    read3: {
      purpose: "Extract line-number evidence to write a RACES response analyzing Jonas's moral growth.",
      teacherScript: "Pass 3 is Evidence Mining! Re-read key lines to gather exact quotes for your RACES response about Jonas's choice.",
      questions: [
        "Which specific line numbers provide the strongest evidence that Jonas no longer trusts the Chief Elder?",
        "How does the author's reasoning address the trade-offs between absolute safety and human freedom?",
        "Using line citations, what RACES conclusion can you draw about Jonas's moral responsibility?"
      ]
    }
  },
  {
    topicId: "topic-photosynthesis",
    topicName: "Photosynthesis & Cellular Energy (Inspire Science)",
    subject: "Science",
    writingFramework: "CER (Claim, Evidence, Reasoning)",
    read1: {
      purpose: "Establish baseline understanding of plant cell energy inputs and outputs.",
      teacherScript: "Pass 1 is our scientific overview! As we read, answer: What materials do plants take in, and what do they produce?",
      questions: [
        "What are the primary chemical inputs (reactants) and outputs (products) of photosynthesis?",
        "Where inside the plant cell does this energy conversion process take place?",
        "What is the main biological purpose of photosynthesis for the plant's survival?"
      ]
    },
    read2: {
      purpose: "Dissect domain-specific vocabulary (chloroplast, chlorophyll, photons) and diagram labels.",
      teacherScript: "Pass 2 is our Lab Microscope Pass! Re-read Section 2 to dissect domain vocabulary and chemical equations.",
      questions: [
        "Why is the term 'chlorophyll' essential in paragraph 2, and what specific role does it play in light absorption?",
        "How does the chemical equation in the diagram reinforce the text explanation in paragraph 3?",
        "What distinction does the text make between light-dependent reactions and the Calvin cycle?"
      ]
    },
    read3: {
      purpose: "Extract empirical data and text evidence to write a Science CER explanation.",
      teacherScript: "Pass 3 is Data Extraction! Re-read the lab passage to collect exact numbers and evidence for your CER claim.",
      questions: [
        "What specific lab data or line citations support the claim that light intensity increases oxygen output?",
        "What scientific reasoning connects photon absorption to the breakdown of water molecules?",
        "Construct a CER statement: What conclusion can be drawn about plant growth in low-light environments?"
      ]
    }
  },
  {
    topicId: "topic-civil-rights",
    topicName: "Civil Rights Movement & Primary Sources (Savvas Social Studies)",
    subject: "Social Studies",
    writingFramework: "RACES (Restate, Answer, Cite, Explain, Sum Up)",
    read1: {
      purpose: "Establish historical context, author background, and the primary grievance addressed in the document.",
      teacherScript: "Pass 1 is our Historical Overview! As we read, answer: What injustice is being challenged, and who is speaking?",
      questions: [
        "What historical injustice or constitutional grievance is the author addressing in this document?",
        "Who is the intended audience, and what action is the author urging them to take?",
        "What main event or protest led to the creation of this historical text?"
      ]
    },
    read2: {
      purpose: "Perform HIPP Analysis (Historical Context, Audience, Purpose, Author Perspective) and analyze persuasive rhetoric.",
      teacherScript: "Pass 2 is HIPP Interrogation! Re-read paragraph 3 to identify the author's point of view and persuasive word choices.",
      questions: [
        "What emotionally charged words or constitutional references does the author use to persuade the reader?",
        "How does the author's personal background or leadership role shape their perspective in paragraph 2?",
        "What counterargument does the author anticipate and refute in the text?"
      ]
    },
    read3: {
      purpose: "Gather direct quotes to write a RACES DBQ paragraph evaluating nonviolent resistance.",
      teacherScript: "Pass 3 is Primary Source Mining! Re-read to extract exact quotes proving the impact of nonviolent strategy.",
      questions: [
        "Which specific quotes from the document provide the strongest evidence of nonviolent philosophy?",
        "How does the author connect local civil rights struggles to broader American democratic ideals?",
        "Using your annotations, write a RACES response answering: Why was nonviolent protest strategically effective?"
      ]
    }
  },
  {
    topicId: "topic-ecosystem",
    topicName: "Ecosystem Disruptions & Food Webs (Inspire Science)",
    subject: "Science",
    writingFramework: "CER (Claim, Evidence, Reasoning)",
    read1: {
      purpose: "Identify key species, energy flow relationships, and the environmental disturbance introduced.",
      teacherScript: "Pass 1 is Ecosystem Mapping! As we read, identify: Who eats whom, and what disruption just occurred?",
      questions: [
        "What organisms make up this food web, and how does energy flow between producers and consumers?",
        "What environmental disturbance or human impact is introduced in the passage?",
        "Which population experiences the most immediate impact when the ecosystem changes?"
      ]
    },
    read2: {
      purpose: "Analyze cause-and-effect structure, domain terms (apex predator, carrying capacity), and food web diagrams.",
      teacherScript: "Pass 2 is System Analysis! Re-read paragraph 3 to analyze cause-and-effect connections across trophic levels.",
      questions: [
        "How does the term 'carrying capacity' explain the population limit described in paragraph 2?",
        "How does the food web diagram clarify the cascade effect mentioned in line 12?",
        "What cause-and-effect signal words connect the removal of a predator to herbivore overpopulation?"
      ]
    },
    read3: {
      purpose: "Gather population data and line evidence to construct a CER argument on biodiversity preservation.",
      teacherScript: "Pass 3 is CER Data Mining! Extract exact population figures to prove your claim about ecosystem balance.",
      questions: [
        "What data from the text supports the claim that removing an apex predator causes habitat degradation?",
        "What biological reasoning explains why biodiversity increases ecosystem resilience?",
        "Write a CER statement predicting the long-term impact if the ecosystem disturbance continues."
      ]
    }
  }
];

// RACES & CER ACADEMIC WRITING SCAFFOLDS DATASET
const RACES_CER_FRAMEWORK_DATASET = {
  RACES: [
    {
      letter: "R",
      name: "Restate the Question",
      description: "Give the title of the passage and restate the question prompt in your own words.",
      prompts: [
        "In the passage '[Title]', ...",
        "When considering [Question], ...",
        "According to the prompt, ..."
      ],
      exemplar: "In the passage 'The Giver' by Lois Lowry, the protagonist Jonas faces an emotional conflict when..."
    },
    {
      letter: "A",
      name: "Answer the Question",
      description: "Provide a complete, direct answer statement to all parts of the question.",
      prompts: [
        "____ (complete answer statement).",
        "The primary reason for this choice is ____.",
        "The author demonstrates this by ____."
      ],
      exemplar: "Jonas decides to flee the Community because he discovers that 'Release' is actually lethal."
    },
    {
      letter: "C",
      name: "Cite Text Evidence",
      description: "Provide exact line numbers or direct quotes from the text to support your answer.",
      prompts: [
        "In paragraph [X], the text states, '____'.",
        "The author wrote, '____'.",
        "For instance, on line [Y], the author notes, '____'.",
        "For example, in paragraph [Z], ..."
      ],
      exemplar: "For instance, on line 14 of Chapter 19, the text explicitly states, 'He watched his father inject the newborn infant.'"
    },
    {
      letter: "E",
      name: "Explain Evidence",
      description: "Explain HOW the cited text evidence supports and proves your answer.",
      prompts: [
        "This shows that ____ because ____.",
        "This tells me that ____.",
        "I can infer from this evidence that ____.",
        "Based on this, I can conclude that ____."
      ],
      exemplar: "This shows that Jonas could no longer accept the Community's deception because he realized innocent lives were being destroyed."
    },
    {
      letter: "S",
      name: "Sum It Up",
      description: "Provide a concluding sentence that restates your main answer and key evidence.",
      prompts: [
        "In conclusion, ____.",
        "To sum it up, the evidence proves that ____.",
        "Ultimately, [Restate Answer] because [Summary of Evidence]."
      ],
      exemplar: "In conclusion, Jonas's decision to escape was driven by his moral duty to save Gabriel and restore truth to the Community."
    }
  ],
  CER: [
    {
      letter: "C",
      name: "Claim (Science)",
      description: "State a direct, testable scientific statement that answers the research question.",
      prompts: [
        "The claim that [Independent Variable] causes [Dependent Variable] is supported because ____.",
        "An increase in [Variable X] directly results in ____."
      ],
      exemplar: "Increasing ambient light intensity directly increases the rate of photosynthesis in Elodea plants."
    },
    {
      letter: "E",
      name: "Evidence (Science)",
      description: "Provide specific empirical lab data, measurements, or text observations.",
      prompts: [
        "According to the data table on Page [X], when [X] increased, [Y] changed from [A] to [B].",
        "The lab experiment demonstrated that at 100W light intensity, oxygen bubble output reached ____."
      ],
      exemplar: "The lab data showed that at 100W light intensity, oxygen bubble production rose to 45 bubbles per minute, compared to only 12 bubbles at 25W."
    },
    {
      letter: "R",
      name: "Reasoning (Science)",
      description: "Explain the scientific principles and biological/physical mechanisms explaining WHY the data supports the claim.",
      prompts: [
        "Scientific reasoning dictates that [Scientific Law/Mechanism] causes this phenomenon because ____.",
        "Biologically, this occurs because photons activate chlorophyll molecules within the chloroplasts..."
      ],
      exemplar: "Scientific reasoning dictates that higher light energy excites more chlorophyll pigments inside chloroplasts, accelerating the light-dependent reactions of photosynthesis."
    }
  ]
};

// INTERACTIVE ENGAGEMENT GAPS & GAMIFIED SOLUTION GENERATOR DATASET
const ENGAGEMENT_GAPS_GAMIFICATION_DATASET = [
  {
    gapId: "gap-bored",
    gapTitle: "Kids aren't enjoying reading / They say 'Reading is boring.'",
    observedBehavior: "Students complain, sigh, or stare blankly at pages without initiating reading. They view text as static homework rather than an active experience.",
    solutionTitle: "Open-World Quest & Character Stat Build Framing",
    solutionMechanic: "Re-frame the reading passage as an Open-World Server Map. Treat main characters as Player 1 Avatars with Stat Builds (Strength, Wisdom, Flaws) and Environment Debuffs. Launch new units with cinematic trailer teasers.",
    teacherScript: "Look at Player 1 Avatar: Jonas from 'The Giver'. What is his main Stat Flaw right now in Chapter 4? What debuff did the Community Server Admin apply to his build? Talk to your Guild Partner in 3... 2... 1...",
    cardRef: {
      gameTerm: "Player 1 Avatar & Stat Build",
      litTerm: "First Read & Character Arc (StudySync ELA)",
      discussionQuestion: "What is your main character's weakest stat right now in the text, and how is it causing them to take damage?"
    },
    actionableRoutine: "Cinematic Unit Launch: Project a 60-second dramatic audio trailer before reading. Require students to list 2 'Server Admin Rules' governing the story's setting."
  },
  {
    gapId: "gap-questions",
    gapTitle: "Students show zero interest in answering comprehension questions.",
    observedBehavior: "Students write 1-word answers or leave question boxes blank because traditional Q&A feels like a tedious interrogation.",
    solutionTitle: "Boss Battle Encounters & Evidence Loot Drops",
    solutionMechanic: "Re-frame end-of-section questions as 'Boss Encounters'. Students can only inflict damage on the Boss Question by gathering and equipping textual evidence Loot Cards (exact line numbers).",
    teacherScript: "Question 4 is today's Mid-Unit Boss Battle! The Boss has 100 HP. To defeat it, your team must equip 2 textual evidence quotes from Paragraph 3. 3... 2... 1... Gear up!",
    cardRef: {
      gameTerm: "Act 1 Cutscene to Act 3 Boss Defeat",
      litTerm: "3-Act Math & Written Comprehension (Savvas / StudySync)",
      discussionQuestion: "What hidden inventory quote evidence did you unlock in Pass 2 that allowed you to defeat the Boss Question?"
    },
    actionableRoutine: "Evidence Loot Cards: Provide physical green index cards labeled 'Loot Armor'. Students write their line number quote on the card and physically place it on the Boss Question."
  },
  {
    gapId: "gap-at-home",
    gapTitle: "Students don't read at home or independently.",
    observedBehavior: "Zero home reading log completion, lack of independent reading stamina, reliance on summary sites (SparkNotes/ChatGPT).",
    solutionTitle: "Classroom Reading Guilds & XP Streak Leaderboards",
    solutionMechanic: "Organize students into 4-5 member 'Reading Guilds'. Guilds earn collective XP for consecutive independent reading streaks, line citation challenges, and book reviews.",
    teacherScript: "Guild 3 just unlocked a 5-day Reading Streak Bonus! They earned +500 Guild XP and a 'Partner Choice Pass' loot reward. Which Guild will challenge them today?",
    cardRef: {
      gameTerm: "Language Skill Tree & XP Level Up",
      litTerm: "Independent Reading & Vocabulary Workshop (NatGeo ELD)",
      discussionQuestion: "Which new sentence frame or independent reading streak did your Guild unlock today to level up your writing XP?"
    },
    actionableRoutine: "Reading Guild XP Board: Display a class wall chart tracking total pages read and quotes cited. Reward top Guilds on Fridays with 'Cardinal Scholar Loot Cards'."
  },
  {
    gapId: "gap-give-up",
    gapTitle: "Students give up immediately when encountering complex/difficult text.",
    observedBehavior: "Student shuts book or closes laptop at the first unknown word or dense paragraph, stating 'I don't get it.'",
    solutionTitle: "Easter Egg Text Hunts & Co-Op Raid Passes",
    solutionMechanic: "Hide 'Easter Egg Clues' in complex paragraphs (e.g. secret foreshadowing details, author craft tricks). Pair struggling readers in 2-person Co-Op Raid passes where partners split multisyllabic decoding.",
    teacherScript: "Paragraph 4 contains a hidden Easter Egg clue left by the author! The first Guild to discover line 14's hidden metaphor unlocks +200 Raid XP. Detective eyes on line 1!",
    cardRef: {
      gameTerm: "Mystery Map Event & Environment Glitch",
      litTerm: "Anchor Phenomenon & Complex Text Deep-Dive (Inspire Science)",
      discussionQuestion: "What scientific anomaly or hidden text clue did your Co-Op pair discover in Paragraph 4, and how did you patch it?"
    },
    actionableRoutine: "Co-Op Raid Pass: Partner A reads odd-numbered lines; Partner B reads even-numbered lines. When a tricky word appears, both partners perform the 'Cover the Prefix/Suffix' decoding routine."
  },
  {
    gapId: "gap-passive",
    gapTitle: "Students read passively without tracking or annotating.",
    observedBehavior: "Eyes wander, fingers off text, zero marginal notes written, highlights applied randomly like yellow coloring books.",
    solutionTitle: "Tactile Track Pass & Margin Audit Stamps",
    solutionMechanic: "Enforce physical pencil/eraser tracking on line 1. Require the 4-Symbol Annotation Key (★ Claim, ? Question, ◯ Vocabulary, → Evidence) paired with mandatory 2-word margin notes.",
    teacherScript: "Pencils in hand. No text highlight without a written margin note! Any naked highlight without words receives zero loot XP. Show me your tracks!",
    cardRef: {
      gameTerm: "Historical Faction Wars & Lore Records",
      litTerm: "Primary Source DBQ Annotation & HIPP Analysis (Savvas History)",
      discussionQuestion: "If Document A was written by Faction Admin X, what bias or margin note did you write to mark their historical narrative?"
    },
    actionableRoutine: "Desk-Swapping Margin Audit: 2-minute timer where partners swap papers to verify that every underline has a written marginal explanation."
  },
  {
    gapId: "gap-isolated",
    gapTitle: "Students view reading as an isolated, quiet punishment.",
    observedBehavior: "Students dread silent reading time because it feels lonely, punitive, and disconnected from peer interaction.",
    solutionTitle: "Turn-Talk-Write Loop, Friday Loot Drops & Public Celebrations",
    solutionMechanic: "Transform reading into a highly social, structured loop (Talk -> Write -> Talk Again). Celebrate student evidence wins publicly with Friday Loot Drops and Hall of Fame Badges.",
    teacherScript: "Partner A, you have 60 seconds to speak your claim using Stem #1. Partner B, your eyes are on Partner A. Swap and talk in 3... 2... 1... Talk!",
    cardRef: {
      gameTerm: "Player 1 Avatar & Stat Build",
      litTerm: "Oral Discourse & Peer Critique (Tulsa Way AO2 / TLE Dim 9)",
      discussionQuestion: "How did your partner's verbal claim help you refine your own written Loot Log entry?"
    },
    actionableRoutine: "Friday Loot Drops: Every Friday, draw 3 Cardinal Scholar Loot Cards from the mastery box. Recipients earn public badges and privilege passes."
  }
];

// MIDDLE SCHOOL STRUGGLING READER PROMPTING GUIDE (GRADES 6-8 LEXILE BANDS)
const STRUGGLING_READER_PROMPTING_DATASET = [
  {
    lexileBand: "400L – 650L",
    gradeLevel: "Middle School Intensive Intervention (Below Grade Level)",
    focusArea: "Multisyllable Decoding, Sentence Boundary Fluency & Literal Understanding",
    items: [
      {
        element: "Multisyllabic Word Breakdown",
        studentError: "Stumbles or collapses when encountering 3+ syllable academic words (e.g., photosynthesis, constitution, jurisdiction).",
        prompts: [
          "Cover the prefix and suffix. What is the root word?",
          "Break the word into chunks at the vowels. Say chunk 1... chunk 2... now put them together.",
          "Do you recognize a base word you already know inside this big word?"
        ]
      },
      {
        element: "Sentence Boundary & Punctuation Fluency",
        studentError: "Reads straight through periods, semicolons, and em-dashes without pausing, losing sentence meaning.",
        prompts: [
          "Stop at the period! What complete thought did that sentence just tell us?",
          "Try it again, but make your voice pause at the comma like you're talking to a friend.",
          "Did your voice go up at the question mark?"
        ]
      },
      {
        element: "Literal Surface-Level Recall Gap",
        studentError: "Gives up or copies verbatim fragments when asked a baseline comprehension question.",
        prompts: [
          "Re-read lines 4-6. Who is involved in this action?",
          "Point to the sentence that tells us WHERE this happened.",
          "What happened first before the character made that choice?"
        ]
      },
      {
        element: "Vocabulary Overload Shutdown",
        studentError: "Stops reading completely when encountering 2+ unknown Tier 2 words in a single sentence.",
        prompts: [
          "Skip the tricky word for a second and read to the end of the sentence. What word would make sense there?",
          "Look at the sentence right after. Does it give a definition or clue?",
          "Is there a synonym or picture context clue nearby?"
        ]
      }
    ]
  },
  {
    lexileBand: "650L – 850L",
    gradeLevel: "Grade 6 Standard / Developing Middle School Reader",
    focusArea: "Structural Text Features, Paragraph Connections & Text Evidence",
    items: [
      {
        element: "Text Feature & Graphic Bypass",
        studentError: "Skips over subheaders, bold terms, diagrams, maps, and captions, missing essential context.",
        prompts: [
          "Why did the author or publisher put this word in bold / put this diagram on the side?",
          "Read the caption under the picture. How does it add to what paragraph 2 says?",
          "Look at the section subheader. What prediction can you make about this chunk?"
        ]
      },
      {
        element: "Paragraph Connection Disconnect",
        studentError: "Reads Paragraph 1 and Paragraph 2 as isolated facts without connecting cause-and-effect or claim-to-evidence.",
        prompts: [
          "How does Paragraph 2 build on the idea introduced in Paragraph 1?",
          "What transition word connects these two paragraphs (e.g., However, Consequently, In addition)?",
          "What changed between the beginning of this section and the end?"
        ]
      },
      {
        element: "Inference vs. Literal Evidence Gap",
        studentError: "Can state WHAT happened, but cannot explain WHY the author included a specific detail or quote.",
        prompts: [
          "The text doesn't state it directly—what clues on lines 12-15 tell us why the character made that decision?",
          "What can we infer about the author's stance based on their word choice here?",
          "What evidence on line [X] directly proves your answer?"
        ]
      },
      {
        element: "Pronoun & Reference Disconnect",
        studentError: "Loses track of who 'he/she/they/this/it' refers to across complex sentences.",
        prompts: [
          "Who or what does the word 'this' refer to in line 18?",
          "Go back to the previous sentence—who is 'they' talking about?",
          "Replace the pronoun with the actual noun. Does the sentence make sense now?"
        ]
      }
    ]
  },
  {
    lexileBand: "850L – 1000L",
    gradeLevel: "Grade 7 Standard / Expanding Middle School Reader",
    focusArea: "Author Craft, Tone Shifts, Figurative Language & Complex Syntax",
    items: [
      {
        element: "Figurative Language & Sarcasm Confusion",
        studentError: "Takes idioms, metaphors, hyperbole, or author sarcasm literally.",
        prompts: [
          "Is the author speaking literally here, or using a metaphor? What two things are being compared?",
          "Does the character really mean what they said, or are they being sarcastic/ironic?",
          "Why did the author use this figure of speech instead of plain words?"
        ]
      },
      {
        element: "Author Tone & Stance Shifts",
        studentError: "Misses shifts in author stance (e.g., transitioning from neutral description to critical argument).",
        prompts: [
          "Where does the author's tone change from neutral explanation to persuasive argument?",
          "What emotionally charged words indicate the author's bias here?",
          "Is the author favoring Side A or Side B in this paragraph?"
        ]
      },
      {
        element: "Claim vs. Counterclaim Confusion",
        studentError: "Conflates the author's central claim with an opponent's counterargument being refuted.",
        prompts: [
          "Is this statement the author's belief, or are they quoting an opponent to disprove them?",
          "Look for signal words like 'Critics argue...' or 'On the other hand...'. Who holds this view?",
          "What argument is the author trying to knock down in paragraph 4?"
        ]
      },
      {
        element: "Complex Clause Syntax Overload",
        studentError: "Gets lost in long compound-complex sentences with multiple dependent clauses.",
        prompts: [
          "Find the main subject and main verb in this long sentence. What is the core action?",
          "Cross out the clause inside the commas for a second. Read the main sentence without it.",
          "What extra detail does the dependent clause add?"
        ]
      }
    ]
  },
  {
    lexileBand: "1000L – 1200L+",
    gradeLevel: "Grade 8 Standard / Advanced Stretch Reader",
    focusArea: "Cross-Text Synthesis, Rhetorical Analysis & Source Reliability",
    items: [
      {
        element: "Cross-Text Synthesis Gap",
        studentError: "Summarizes Source A and Source B separately, but struggles to synthesize conflicting points into a unified thesis.",
        prompts: [
          "How does Document A's perspective challenge or support Document B's argument?",
          "Where do the two authors agree, and where do their conclusions diverge?",
          "What underlying assumptions do both authors share?"
        ]
      },
      {
        element: "Source Reliability & Bias Blindness",
        studentError: "Accepts author claims uncritically without evaluating evidence quality or motive.",
        prompts: [
          "What bias might this author have based on their background, role, or publication date?",
          "Did the author provide empirical data to support this claim, or just personal opinion?",
          "What evidence did the author omit that might challenge their perspective?"
        ]
      },
      {
        element: "Rhetorical Device Analysis",
        studentError: "Overlooks how ethos/pathos/logos, rhetorical questions, or word choice manipulate reader emotion.",
        prompts: [
          "Why did the author choose the word [X] instead of [Y]? How does that choice shape reader emotion?",
          "Is the author appealing to logic (data), emotion (stories), or authority (ethos) here?",
          "What response is the author trying to provoke with this rhetorical question?"
        ]
      }
    ]
  }
];

// NON-ENGLISH SPEAKERS (MLL / ELD / SLIFE) STRATEGIES & PROMPTS
const MLL_SLIFE_STRATEGIES_DATASET = [
  {
    title: "Bilingual Cognate Leveraging (Spanish <-> English)",
    targetGroup: "Spanish-Speaking Multilingual Learners (WIDA Levels 1-4)",
    description: "Explicitly connect academic English Tier 2/3 terms to Spanish cognates to unlock instant comprehension.",
    examples: [
      "Constitution <-> Constitución",
      "Hypothesis <-> Hipótesis",
      "Independence <-> Independencia",
      "Ecosystem <-> Ecosistema",
      "Observation <-> Observación"
    ],
    prompts: [
      "Do you recognize a word here that looks like a word in Spanish?",
      "Say it in Spanish first. Does it mean the same thing in English?",
      "Let's check: Is this a true cognate or a false friend (e.g., Embarrassed vs. Embarazada)?"
    ]
  },
  {
    title: "Visual Anchoring & Dual-Coding",
    targetGroup: "SLIFE & WIDA Levels 1-2 (Entering / Emerging)",
    description: "Pair abstract academic concepts with high-impact visual picture cards, diagrams, and physical gestures.",
    prompts: [
      "Point to the picture that matches this paragraph.",
      "Show me with your hands what this word means (e.g., Expand / Contract).",
      "Draw a quick 10-second sketch in your margin to represent this character's action."
    ]
  },
  {
    title: "Heritage Language Oral Rehearsal & Code-Meshing",
    targetGroup: "WIDA Levels 1-3 (Entering, Emerging, Developing)",
    description: "Allow students to rehearse complex claims in their home language with a bilingual peer before translating into English frames.",
    prompts: [
      "Explain your idea to your partner in Spanish/home language first.",
      "Now, let's pick 2 English academic words to plug into our sentence frame.",
      "Use this frame: 'I observed _____ because _____.'"
    ]
  }
];

// BILINGUAL PRINTABLE STUDENT DESK CARDS (ENGLISH & SPANISH)
const BILINGUAL_DESK_CARDS_DATASET = [
  {
    title: "Claim & Evidence / Afirmación y Evidencia",
    cardId: "card-claim",
    content: [
      { en: "The author claims that ____.", es: "El autor afirma que ____." },
      { en: "My evidence is on line ____: '____'.", es: "Mi evidencia está en la línea ____: '____'." },
      { en: "This proves my claim because ____.", es: "Esto prueba mi afirmación porque ____." }
    ]
  },
  {
    title: "Vocabulary & Context / Vocabulario y Contexto",
    cardId: "card-vocab",
    content: [
      { en: "The word ____ means ____ because...", es: "La palabra ____ significa ____ porque..." },
      { en: "A cognate in Spanish is ____.", es: "Un cognado en español es ____." },
      { en: "The text clues show that...", es: "Las pistas del texto muestran que..." }
    ]
  },
  {
    title: "Author Craft & Purpose / Propósito del Autor",
    cardId: "card-craft",
    content: [
      { en: "The author wrote this text to...", es: "El autor escribió este texto para..." },
      { en: "The tone of the text is ____.", es: "El tono del texto es ____." },
      { en: "The text feature (chart/bold) shows...", es: "El recurso del texto (gráfica/negrita) muestra..." }
    ]
  },
  {
    title: "Peer Debate & Discussion / Debate y Discusión",
    cardId: "card-debate",
    content: [
      { en: "I agree with [Name] because...", es: "Estoy de acuerdo con [Nombre] porque..." },
      { en: "I respectfully disagree because...", es: "Estoy en desacuerdo respetuosamente porque..." },
      { en: "Can you explain what you mean by...", es: "¿Puedes explicar qué quieres decir con..." }
    ]
  }
];

// GAMIFIED LITERACY PRACTICES & REWARDS
const GAMIFIED_LITERACY_PRACTICES_DATASET = {
  rationale: {
    title: "Why Gamify Middle School Reading Analysis?",
    explanation: "Middle schoolers (ages 11-14) are intrinsically motivated by game mechanics: leveling up, unlocking achievements, customizing builds, and defeating boss challenges. Framing literary analysis as video game mechanics lowers affective filter, transforms passive reading into high-stakes debate, and provides accessible entry points for reluctant readers!"
  },
  principles: [
    {
      title: "1. Frame Plots as Open-World Quests",
      desc: "Treat protagonists as Player 1 Avatars with Stat Builds (Strength, Wisdom, Flaws), Inventory items, and Debuffs applied by the environment."
    },
    {
      title: "2. Organize Classroom Reading Guilds",
      desc: "Form 4-5 student Reading Guilds that earn XP together by completing daily tracking passes, citing line numbers, and mastering vocabulary."
    },
    {
      title: "3. Unit Assessments = Boss Battles",
      desc: "Frame unit DBQ essays or end-of-unit exams as 'Final Boss Encounters'. Students gear up by gathering textual evidence Loot Cards during lessons."
    },
    {
      title: "4. Easter Egg Text Hunts",
      desc: "Hide secret text clues, foreshadowing hints, or structural puzzles in margin notes that unlock bonus Guild XP or Loot Cards."
    },
    {
      title: "5. Cinematic Book Trailer Launches",
      desc: "Hook students at the start of a unit with dramatic audio soundscapes, cliffhanger reveals, and character stat unveils before reading."
    }
  ],
  routines: [
    {
      name: "The 90-Second Bell-to-Bell Ritual",
      steps: "Door Greeting -> Pencils in Hand -> 60-Second Choral Vocabulary Chant -> Instant Text Tracking Pass."
    },
    {
      name: "The Silent Track Pass (3-5 min)",
      steps: "Pencils or cursors on Line 1. 100% silent continuous eyes-on-text tracking while teacher stamps tracking sheets."
    },
    {
      name: "Desk-Swapping Margin Audit (2 min)",
      steps: "Partners swap papers to verify that every highlight has a corresponding marginal summary note or symbol."
    },
    {
      name: "10-Minute 3-Pile Exit Ticket Sort",
      steps: "Sort exit tickets into Got It, Partial, Not Yet piles to dictate tomorrow's 5-minute warm-up re-teach."
    }
  ],
  recommendations: [
    { title: "Ghost / Track Series", author: "Jason Reynolds", hook: "High-octane athletics, intense character stat builds, fast-paced conflict." },
    { title: "March (Graphic Novel Trilogy)", author: "John Lewis & Andrew Aydin", hook: "Visually stunning primary source Civil Rights history with high-impact text access." },
    { title: "Long Way Down", author: "Jason Reynolds", hook: "60-second elevator ride verse novel; masterclass in tone, suspense, and choice." },
    { title: "Miles Morales: Spider-Man", author: "Jason Reynolds", hook: "Sci-fi dystopian themes, identity, and high-interest modern hero lore." },
    { title: "The Crossover / Rebound", author: "Kwame Alexander", hook: "Basketball verse novel with rhythm, family dynamics, and explicit vocabulary energy." }
  ],
  rewardSystems: [
    { name: "Reading Guild XP Leaderboard", detail: "Class wall chart tracking total pages tracked, line citations made, and vocabulary chants completed." },
    { name: "Cardinal Scholar Loot Cards", detail: "Physical redeemable cards: 'Pass 1 Skip', 'Partner Choice Pass', 'Highlighter Upgrade', 'Teacher Assistant Pass'." },
    { name: "Friday Loot Drop Celebrations", detail: "Public recognition rituals celebrating top evidence-based writers and most improved readers." }
  ]
};

// Tulsa Way Rubric Performance Areas Dataset (June 2025)
const TULSA_WAY_DATASET = [
  {
    area: "Culture of Learning",
    badgeClass: "tulsa-badge-culture",
    essentialQuestion: "Is there an inclusive culture of learning and high expectations in this classroom?",
    type: "FOUNDATIONAL",
    descriptors: [
      "Students complete instructional tasks, volunteer responses, and ask appropriate questions.",
      "Students contribute to a positive and safe classroom culture by meeting shared behavioral expectations.",
      "Students are self-directed in managing classroom practices like transitions, routines, and procedures.",
      "Teacher uses voice and presence to maintain classroom behavioral norms and convey caring for all students."
    ],
    lookFors: [
      "Classroom charter designed & reinforced through shared agreements.",
      "Co-regulation modeled when redirecting students to behavioral matrix.",
      "Warm welcome & optimistic closure routines.",
      "Student-to-student conversations about each other's thinking."
    ]
  },
  {
    area: "Essential Content",
    badgeClass: "tulsa-badge-content",
    essentialQuestion: "Are all students engaged in culturally responsive content aligned to standards for their subject and grade?",
    type: "FOUNDATIONAL",
    descriptors: [
      "Lesson focuses on culturally responsive content advancing students toward grade-level standards.",
      "All activities students engage in are aligned to learning goals, well-sequenced, and move students toward mastery.",
      "Instructional materials (texts, problems, assessments) are culturally responsive and appropriately demanding (Lexile/complexity)."
    ],
    lookFors: [
      "Faithful sequence of aligned core curriculum (StudySync, Inspire Science, Savvas, NatGeo).",
      "Explicit, clear instruction on sound-spelling and academic language.",
      "Majority of lesson spent reading, writing, speaking high-quality complex text."
    ]
  },
  {
    area: "Academic Ownership",
    badgeClass: "tulsa-badge-ownership",
    essentialQuestion: "Are all students responsible for doing the thinking in this classroom?",
    type: "APPLIED",
    descriptors: [
      "All students complete appropriately challenging cognitive work (reading, writing, discussion, analysis).",
      "Students provide meaningful oral or written evidence to explain and justify their thinking.",
      "Students respond to and build on peers' thinking, providing constructive feedback.",
      "Students consistently persevere to complete challenging academic work."
    ],
    lookFors: [
      "Teacher poses questions/tasks so students do majority of cognitive work.",
      "Student-to-student discourse encouraged with active wait time."
    ]
  },
  {
    area: "Demonstration of Learning",
    badgeClass: "tulsa-badge-demo",
    essentialQuestion: "Do all students demonstrate that they are learning?",
    type: "APPLIED",
    descriptors: [
      "Questions, tasks, or assessments yield data allowing teacher to assess progress and pinpoint breakdown.",
      "Students have extensive opportunities to draw connections to content through academic writing/explanations.",
      "Student responses and work demonstrate all students are on track toward learning goals."
    ],
    lookFors: [
      "Teachers collect evidence of learning demonstrating student progress.",
      "Academic language related to objective is explicitly named, rehearsed, and reinforced.",
      "Students meaningfully engage in grade-level texts with language scaffolds."
    ]
  }
];

// Tulsa Model TLE Rubric (20 Dimensions) Dataset
const TLE_RUBRIC_DATASET = [
  { domain: "Classroom Management (30%)", dimNo: 1, name: "Preparation", desc: "Teacher plans for and executes a lesson relating to short-term and long-term objectives aligned to state standards." },
  { domain: "Classroom Management (30%)", dimNo: 2, name: "Discipline", desc: "Teacher clearly defines and effectively manages student behavior and maintains positive relationships." },
  { domain: "Classroom Management (30%)", dimNo: 3, name: "Building-Wide Climate Responsibilities", desc: "Teacher assures a contribution to building-wide positive climate responsibilities and health/safety rules." },
  { domain: "Classroom Management (30%)", dimNo: 4, name: "Lesson Plans", desc: "Teacher develops daily lesson plans based on data analysis and shared grade-level planning." },
  { domain: "Classroom Management (30%)", dimNo: 5, name: "Assessment Practices", desc: "Teacher acknowledges student progress, uses fair grading criteria, and provides immediate feedback." },
  { domain: "Classroom Management (30%)", dimNo: 6, name: "Student Relations", desc: "Teacher optimizes learning environment through respectful interactions, high expectations, and passion." },
  
  { domain: "Instructional Effectiveness (50%)", dimNo: 7, name: "Literacy", desc: "Teacher embeds reading, writing, vocabulary, speaking/listening, and text-based evidence into all content areas." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 8, name: "Current State Standards", desc: "Teacher understands and optimizes delivery focus of current Oklahoma Academic Standards." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 9, name: "Involves All Learners", desc: "Teacher uses active learning, Bloom's taxonomy questioning, wait time (3-5s), and guided practice." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 10, name: "Explains Content", desc: "Teacher teaches objectives through a variety of methods (modeling, hands-on, body language) and tech." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 11, name: "Clear Instruction & Directions", desc: "Teacher provides clear directions, smooth transitions, correct standard English, and rich vocabulary." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 12, name: "Models", desc: "Teacher demonstrates and models desired skills/processes with clear, precise preemptive action." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 13, name: "Monitors", desc: "Teacher moves around the room during guided practice, uses response techniques, and checks understanding." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 14, name: "Adjusts Based upon Monitoring", desc: "Teacher changes instruction, reteaches, or restructures lessons based on assessment monitoring data." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 15, name: "Establishes Closure", desc: "Teacher summarizes main points, connects learning to prior knowledge, and articulates future application." },
  { domain: "Instructional Effectiveness (50%)", dimNo: 16, name: "Student Achievement", desc: "Teacher modifies assessments/curriculum for special populations (IEP/ELAP) and ensures access to standards." },

  { domain: "Professional Growth & Continuous Improvement (10%)", dimNo: 17, name: "Professional Learning", desc: "Participates in required PD hours, updates content knowledge, and contributes through mentoring/writing." },
  { domain: "Professional Growth & Continuous Improvement (10%)", dimNo: 18, name: "Professional Accountability", desc: "Exhibits consistent reliability, punctuality, compliance with reporting, and professional ethics." },

  { domain: "Interpersonal Skills (5%)", dimNo: 19, name: "Effective Interpersonal Skills", desc: "Communicates sensitively with families/colleagues and collaborates on decision-making." },
  { domain: "Leadership (5%)", dimNo: 20, name: "Professional Involvement & Leadership", desc: "Exhibits positive leadership through school events, mentoring peers, and advocating for equity." }
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

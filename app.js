// ECMS 8 Literacy Mantras Toolkit - Master Application Logic with Robust Print Studio & Logos

document.addEventListener('DOMContentLoaded', () => {
  // Official School Logos in Vector SVG
  const LOGO_CARDINAL_HEAD = `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <path d="M15 25 C30 15 70 30 90 60 C75 62 65 78 58 80 C48 70 38 60 25 50 Z" fill="#AB3633"/>
    <path d="M45 40 C55 35 75 48 80 60 C70 65 60 75 58 80 C48 72 40 55 45 40 Z" fill="#8B2C28"/>
    <polygon points="68,52 82,60 68,66" fill="#F59E0B" stroke="#2B1F20" stroke-width="2"/>
    <path d="M52 42 C62 42 70 50 68 62 C58 64 50 55 52 42 Z" fill="#2B1F20"/>
    <ellipse cx="60" cy="50" rx="3" ry="5" fill="#FFFFFF"/>
    <circle cx="60" cy="50" r="2" fill="#2B1F20"/>
  </svg>`;

  const LOGO_EC_MASCOT = `<svg viewBox="0 0 120 120" width="100%" height="100%">
    <!-- Outer EC Outline -->
    <path d="M15 25 H45 V40 H30 V80 H45 V95 H15 Z" fill="none" stroke="#AB3633" stroke-width="6" stroke-linejoin="round"/>
    <path d="M75 25 C100 25 105 50 105 60 C105 70 100 95 75 95 C65 95 60 90 60 90" fill="none" stroke="#AB3633" stroke-width="6" stroke-linecap="round"/>
    <!-- Muscle Cardinal Body -->
    <path d="M40 35 Q60 20 70 45 Q75 60 65 85 Q50 90 40 70 Z" fill="#AB3633" stroke="#2B1F20" stroke-width="3"/>
    <ellipse cx="50" cy="55" rx="14" ry="18" fill="#8B2C28"/>
    <polygon points="62,44 74,50 62,54" fill="#F59E0B" stroke="#2B1F20" stroke-width="2"/>
    <path d="M48 38 Q58 38 56 48 Q48 50 48 38 Z" fill="#2B1F20"/>
    <circle cx="53" cy="43" r="2" fill="#FFFFFF"/>
  </svg>`;

  // Initialize Application State
  const state = {
    currentTab: 'hub',
    currentTheme: localStorage.getItem('ecms_theme') || 'light',
    searchQuery: '',
    selectedSubject: 'all',
    currentSlideIndex: 0,
    observationLogs: JSON.parse(localStorage.getItem('ecms_obs_logs') || '[]')
  };

  // DOM Element References
  const elements = {
    themeToggleBtn: document.getElementById('theme-toggle'),
    navBtns: document.querySelectorAll('.nav-btn'),
    tabViews: document.querySelectorAll('.tab-view'),
    pageTitle: document.getElementById('page-title'),
    mantrasGrid: document.getElementById('mantras-grid'),
    mantraSearchInput: document.getElementById('mantra-search'),
    filterSubjectSelect: document.getElementById('filter-subject'),
    teacherBankContainer: document.getElementById('teacher-bank-container'),
    leaderLookForsContainer: document.getElementById('leader-lookfors-container'),
    coachingQuestionsContainer: document.getElementById('coaching-questions-container'),
    mantraModal: document.getElementById('mantra-modal'),
    modalTitle: document.getElementById('modal-mantra-title'),
    modalBody: document.getElementById('modal-mantra-body'),
    modalCloseBtn: document.getElementById('modal-close'),
    slideOverlay: document.getElementById('slide-overlay'),
    slideHeading: document.getElementById('slide-heading'),
    slideBody: document.getElementById('slide-body'),
    slideCounter: document.getElementById('slide-counter'),
    slidePrevBtn: document.getElementById('slide-prev-btn'),
    slideNextBtn: document.getElementById('slide-next-btn'),
    btnCloseSlides: document.getElementById('btn-close-slides'),
    btnLaunchPd: document.getElementById('btn-launch-pd'),
    btnLaunchPdInline: document.getElementById('btn-launch-pd-inline'),
    btnQuickWalkthrough: document.getElementById('btn-quick-walkthrough'),
    obsCheckboxesContainer: document.getElementById('obs-mantras-checkboxes'),
    btnGenerateObsReport: document.getElementById('btn-generate-obs-report'),
    obsReportOutput: document.getElementById('obs-report-output'),
    stemsResultsList: document.getElementById('stems-results-list'),
    stemSubjectSelect: document.getElementById('stem-subject'),
    stemCategorySelect: document.getElementById('stem-category'),
    gameCardsContainer: document.getElementById('game-cards-container'),
    masterPosterRender: document.getElementById('master-poster-render'),
    fullPostersRender: document.getElementById('full-posters-render'),
    deskCardsRender: document.getElementById('desk-cards-render'),
    bookmarksRender: document.getElementById('bookmarks-render'),
    rubricSheetRender: document.getElementById('rubric-sheet-render')
  };

  // --- Theme Toggle ---
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.currentTheme = theme;
    localStorage.setItem('ecms_theme', theme);
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.querySelector('span').textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
    }
  }

  elements.themeToggleBtn?.addEventListener('click', () => {
    applyTheme(state.currentTheme === 'light' ? 'dark' : 'light');
  });

  applyTheme(state.currentTheme);

  // --- Navigation & Tab Switching ---
  function switchTab(tabId) {
    state.currentTab = tabId;

    elements.navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    elements.tabViews.forEach(view => {
      view.classList.toggle('active', view.id === `view-${tabId}`);
    });

    const titleMap = {
      'hub': '8 Literacy Mantras Toolkit',
      'teacher-bank': 'Teacher Strategy Bank',
      'leader-guide': 'Leader Coaching & Walkthroughs',
      'generators': 'Interactive Strategy Generators',
      'printable-studio': 'Printable Studio & Posters',
      'pd-presenter': 'Professional Development Slide Deck'
    };
    if (elements.pageTitle) {
      elements.pageTitle.textContent = titleMap[tabId] || '8 Literacy Mantras Toolkit';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  elements.navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  elements.btnQuickWalkthrough?.addEventListener('click', () => {
    switchTab('leader-guide');
    const liveFormBtn = document.querySelector('[data-subtab="live-form"]');
    liveFormBtn?.click();
  });

  // --- Sub-Tab Switching (Leaders, Generators, Printable Studio) ---
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', () => {
      const parent = link.closest('section');
      parent.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const subtab = link.dataset.subtab || link.dataset.gentab || link.dataset.printtab;
      if (link.dataset.subtab) {
        parent.querySelectorAll('.subtab-content').forEach(c => c.style.display = 'none');
        const target = document.getElementById(`subtab-${subtab}`);
        if (target) target.style.display = 'block';
      } else if (link.dataset.gentab) {
        parent.querySelectorAll('.gentab-content').forEach(c => c.style.display = 'none');
        const target = document.getElementById(`gentab-${subtab}`);
        if (target) target.style.display = 'block';
      } else if (link.dataset.printtab) {
        parent.querySelectorAll('.printtab-content').forEach(c => c.style.display = 'none');
        const target = document.getElementById(`printtab-${subtab}`);
        if (target) target.style.display = 'block';
      }
    });
  });

  // --- Render Mantra Hub Cards ---
  function renderHubGrid() {
    if (!elements.mantrasGrid) return;
    elements.mantrasGrid.innerHTML = '';

    const filtered = MANTRAS_DATA.filter(m => {
      const matchesSearch = m.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            m.philosophy.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                            m.shortTag.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchesSearch;
    });

    if (filtered.length === 0) {
      elements.mantrasGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No mantras match your search term.</p>`;
      return;
    }

    filtered.forEach(mantra => {
      const card = document.createElement('div');
      card.className = 'mantra-card';
      card.innerHTML = `
        <div>
          <div class="mantra-card-header">
            <div class="mantra-number">${mantra.id}</div>
            <div class="mantra-icon-wrapper">${mantra.iconSvg}</div>
          </div>
          <span class="mantra-tag">${mantra.shortTag}</span>
          <h3 class="mantra-card-title">${mantra.title}</h3>
          <p class="mantra-quote">"${mantra.quote}"</p>
        </div>
        <div class="mantra-card-footer">
          <button class="btn-link btn-open-modal" data-id="${mantra.id}">
            View Strategy Deep-Dive &rarr;
          </button>
        </div>
      `;
      elements.mantrasGrid.appendChild(card);
    });

    document.querySelectorAll('.btn-open-modal').forEach(btn => {
      btn.addEventListener('click', () => openMantraModal(parseInt(btn.dataset.id)));
    });
  }

  elements.mantraSearchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderHubGrid();
  });

  elements.filterSubjectSelect?.addEventListener('change', (e) => {
    state.selectedSubject = e.target.value;
    renderTeacherBank();
  });

  // --- Render Teacher Strategy Bank ---
  function renderTeacherBank() {
    if (!elements.teacherBankContainer) return;
    elements.teacherBankContainer.innerHTML = '';

    const subjectLabels = {
      all: 'All Curriculums',
      ELA: 'StudySync (McGraw-Hill ELA)',
      Science: 'Inspire Science (McGraw-Hill)',
      SocialStudies: 'Savvas Social Studies (myWorld DBQ)',
      Math: 'Savvas EnVision Math',
      ELD: 'National Geographic ELD (Reach/Edge)'
    };

    MANTRAS_DATA.forEach(mantra => {
      const subjectExemplar = state.selectedSubject !== 'all' ? 
        (mantra.exemplarsBySubject[state.selectedSubject] || mantra.exemplarsBySubject.ELA) : 
        mantra.exemplarsBySubject.ELA;

      const card = document.createElement('div');
      card.className = 'generator-card';
      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
          <div class="mantra-number" style="width: 44px; height: 44px; font-size: 1.3rem;">${mantra.id}</div>
          <div>
            <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: var(--cardinal-red);">${mantra.title}</h3>
            <span class="mantra-tag">${mantra.shortTag}</span>
          </div>
        </div>

        <div style="background-color: #2B1F20; color: #F7F5F2; padding: 16px; border-radius: var(--radius-sm); border-left: 4px solid var(--bright-accent-red); margin-bottom: 20px;">
          <strong style="color: var(--bright-accent-red); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">📢 Verbatim Teacher Launch Script:</strong>
          <p style="font-size: 1.05rem; font-style: italic; margin-top: 6px; line-height: 1.5;">"${mantra.verbatimTeacherScript}"</p>
        </div>

        <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 20px;">${mantra.philosophy}</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 20px;">
          <div style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--cardinal-red);">
            <h4 style="font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">⏱️ Timed Student Protocol</h4>
            <ul style="padding-left: 16px; font-size: 0.88rem; color: var(--text-primary);">
              ${mantra.timedProtocol.map(p => `<li style="margin-bottom: 6px;"><strong>${p.time}:</strong> ${p.action}</li>`).join('')}
            </ul>
          </div>

          <div style="background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-sm); border-left: 3px solid var(--bright-accent-red);">
            <h4 style="font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">📚 Subject Exemplar (${subjectLabels[state.selectedSubject] || 'StudySync ELA'})</h4>
            <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.5;">${subjectExemplar}</p>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10B981; padding: 14px; border-radius: var(--radius-sm);">
            <strong style="color: #10B981; font-size: 0.85rem; text-transform: uppercase;">🌐 ELD Scaffold (WIDA Levels 1-6):</strong>
            <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 4px;">${mantra.eldScaffolds.developing}</p>
          </div>
          <div style="background: rgba(171, 54, 51, 0.1); border: 1px solid var(--cardinal-red); padding: 14px; border-radius: var(--radius-sm);">
            <strong style="color: var(--cardinal-red); font-size: 0.85rem; text-transform: uppercase;">⚠️ Misconception Counter-Routine:</strong>
            <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 4px;">${mantra.misconceptionFix.counterRoutine}</p>
          </div>
        </div>
      `;
      elements.teacherBankContainer.appendChild(card);
    });
  }

  // --- Render Leader Look-Fors & Coaching Questions ---
  function renderLeaderGuide() {
    if (!elements.leaderLookForsContainer) return;
    elements.leaderLookForsContainer.innerHTML = '';
    elements.coachingQuestionsContainer.innerHTML = '';

    MANTRAS_DATA.forEach(mantra => {
      const lfCard = document.createElement('div');
      lfCard.className = 'mantra-card';
      lfCard.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div class="mantra-number">${mantra.id}</div>
          <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--cardinal-red);">${mantra.title}</h4>
        </div>

        <div style="margin-bottom: 12px;">
          <strong style="font-size: 0.85rem; color: var(--brand-primary); text-transform: uppercase;">Teacher Look-Fors:</strong>
          <ul style="font-size: 0.85rem; padding-left: 16px; color: var(--text-secondary); margin-top: 4px;">
            ${mantra.leaderLookFors.teacherActions.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>

        <div>
          <strong style="font-size: 0.85rem; color: var(--deep-cardinal); text-transform: uppercase;">Student Evidence:</strong>
          <ul style="font-size: 0.85rem; padding-left: 16px; color: var(--text-secondary); margin-top: 4px;">
            ${mantra.leaderLookFors.studentActions.map(a => `<li>${a}</li>`).join('')}
          </ul>
        </div>
      `;
      elements.leaderLookForsContainer.appendChild(lfCard);

      const cqCard = document.createElement('div');
      cqCard.className = 'generator-card';
      cqCard.style.padding = '18px';
      cqCard.innerHTML = `
        <h4 style="font-family: var(--font-heading); color: var(--cardinal-red); margin-bottom: 8px;">Mantra ${mantra.id}: ${mantra.title}</h4>
        <ul style="padding-left: 18px; font-size: 0.95rem; color: var(--text-primary);">
          ${mantra.coachingPrompts.map(q => `<li style="margin-bottom: 6px;">"${q}"</li>`).join('')}
        </ul>
      `;
      elements.coachingQuestionsContainer.appendChild(cqCard);
    });

    if (elements.obsCheckboxesContainer) {
      elements.obsCheckboxesContainer.innerHTML = '';
      MANTRAS_DATA.forEach(mantra => {
        const label = document.createElement('label');
        label.className = 'checkbox-card';
        label.innerHTML = `
          <input type="checkbox" name="obs_mantras" value="${mantra.id}">
          <span style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary);">Mantra ${mantra.id}: ${mantra.shortTag}</span>
        `;
        elements.obsCheckboxesContainer.appendChild(label);
      });
    }
  }

  // Live Observation Form Generator
  elements.btnGenerateObsReport?.addEventListener('click', () => {
    const teacher = document.getElementById('obs-teacher').value.trim();
    const subject = document.getElementById('obs-subject').value.trim();
    const observer = document.getElementById('obs-observer').value.trim();
    const glows = document.getElementById('obs-glows').value.trim();
    const grows = document.getElementById('obs-grows').value.trim();

    const checkedBoxes = Array.from(document.querySelectorAll('input[name="obs_mantras"]:checked')).map(c => parseInt(c.value));

    if (!teacher || !subject || checkedBoxes.length === 0) {
      alert('Please fill out Teacher Name, Grade/Subject/Curriculum Unit, and select at least 1 observed Mantra.');
      return;
    }

    const observedMantrasList = MANTRAS_DATA.filter(m => checkedBoxes.includes(m.id));

    const html = `
      <div style="border-bottom: 2px solid var(--cardinal-red); padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.3rem; color: var(--cardinal-red);">ECMS Classroom Walkthrough Report</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">
            <strong>Teacher:</strong> ${teacher} &nbsp;|&nbsp; 
            <strong>Subject/Unit:</strong> ${subject} &nbsp;|&nbsp; 
            <strong>Observer:</strong> ${observer || 'Instructional Leader'} &nbsp;|&nbsp; 
            <strong>Date:</strong> ${new Date().toLocaleDateString()}
          </p>
        </div>
        <div style="width: 50px; height: 50px;">${LOGO_CARDINAL_HEAD}</div>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color: var(--brand-primary);">Literacy Mantras Verified in Action (${observedMantrasList.length}/8):</strong>
        <ul style="padding-left: 18px; margin-top: 6px; font-size: 0.95rem;">
          ${observedMantrasList.map(m => `<li><strong>Mantra ${m.id}:</strong> ${m.title} (<em>${m.shortTag}</em>)</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 12px; background-color: var(--bg-card); padding: 12px; border-radius: var(--radius-sm);">
        <strong style="color: #10B981;">🌟 Classroom Glows:</strong>
        <p style="font-size: 0.95rem; margin-top: 4px;">${glows || 'Teacher executed explicit launch phrasing and active student text tracking was observed.'}</p>
      </div>

      <div style="margin-bottom: 16px; background-color: var(--bg-card); padding: 12px; border-radius: var(--radius-sm);">
        <strong style="color: var(--cardinal-red);">🎯 Actionable Coaching Recommendation (Grow):</strong>
        <p style="font-size: 0.95rem; margin-top: 4px;">${grows || 'Enforce "No Naked Highlights Rule" during Mantra 3 annotation passes to ensure margin notes.'}</p>
      </div>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary copy-btn-report">Copy Report Text</button>
        <button class="btn btn-primary" onclick="window.print()">Print Walkthrough Summary</button>
      </div>
    `;

    elements.obsReportOutput.innerHTML = html;
    elements.obsReportOutput.style.display = 'block';

    document.querySelector('.copy-btn-report')?.addEventListener('click', () => {
      const text = `ECMS WALKTHROUGH REPORT\nTeacher: ${teacher}\nSubject/Unit: ${subject}\nObserved Mantras: ${observedMantrasList.map(m => m.shortTag).join(', ')}\n\nGLOWS:\n${glows}\n\nGROWS:\n${grows}`;
      navigator.clipboard.writeText(text);
      alert('Coaching report copied to clipboard!');
    });
  });

  // --- Modal Detail Popup ---
  function openMantraModal(mantraId) {
    const mantra = MANTRAS_DATA.find(m => m.id === mantraId);
    if (!mantra) return;

    elements.modalTitle.textContent = `Mantra ${mantra.id}: ${mantra.title}`;
    elements.modalBody.innerHTML = `
      <div style="background: #2B1F20; color: #F7F5F2; padding: 18px; border-radius: var(--radius-sm); border-left: 4px solid var(--bright-accent-red); margin-bottom: 20px;">
        <span style="color: var(--bright-accent-red); font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">📢 Verbatim Teacher Launch Script:</span>
        <p style="font-size: 1.1rem; font-style: italic; margin-top: 4px;">"${mantra.verbatimTeacherScript}"</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-heading); color: var(--cardinal-red); margin-bottom: 8px;">⏱️ Minute-by-Minute Timed Student Protocol</h4>
        <ul style="padding-left: 18px; font-size: 0.95rem; line-height: 1.6;">
          ${mantra.timedProtocol.map(p => `<li><strong>${p.time}:</strong> ${p.action}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 20px; background-color: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-sm);">
        <h4 style="font-family: var(--font-heading); color: var(--text-primary); margin-bottom: 8px;">🌐 ELD Scaffolds by WIDA Proficiency Level (1-6)</h4>
        <p style="font-size: 0.88rem; margin-bottom: 6px;"><strong>Level 1 (Entering):</strong> ${mantra.eldScaffolds.entering}</p>
        <p style="font-size: 0.88rem; margin-bottom: 6px;"><strong>Level 2 (Emerging):</strong> ${mantra.eldScaffolds.emerging}</p>
        <p style="font-size: 0.88rem; margin-bottom: 6px;"><strong>Level 3 (Developing):</strong> ${mantra.eldScaffolds.developing}</p>
        <p style="font-size: 0.88rem; margin-bottom: 6px;"><strong>Level 4 (Expanding):</strong> ${mantra.eldScaffolds.expanding}</p>
        <p style="font-size: 0.88rem;"><strong>Level 5-6 (Bridging/Reaching):</strong> ${mantra.eldScaffolds.bridging}</p>
      </div>

      <div style="margin-bottom: 20px; background: rgba(171, 54, 51, 0.1); padding: 16px; border-radius: var(--radius-sm); border-left: 4px solid var(--cardinal-red);">
        <h4 style="font-family: var(--font-heading); color: var(--cardinal-red); margin-bottom: 4px;">⚠️ Common Student Misconception & Counter-Routine</h4>
        <p style="font-size: 0.92rem; color: var(--text-primary);"><strong>Misconception:</strong> ${mantra.misconceptionFix.misconception}</p>
        <p style="font-size: 0.92rem; color: var(--cardinal-red); margin-top: 4px;"><strong>Counter-Routine:</strong> ${mantra.misconceptionFix.counterRoutine}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-heading); color: var(--text-primary); margin-bottom: 8px;">Leader Coaching Prompts</h4>
        <ul style="padding-left: 18px; color: var(--text-secondary); font-size: 0.92rem;">
          ${mantra.coachingPrompts.map(p => `<li style="margin-bottom: 6px;">"${p}"</li>`).join('')}
        </ul>
      </div>
    `;

    elements.mantraModal.classList.add('active');
  }

  elements.modalCloseBtn?.addEventListener('click', () => {
    elements.mantraModal.classList.remove('active');
  });

  elements.mantraModal?.addEventListener('click', (e) => {
    if (e.target === elements.mantraModal) {
      elements.mantraModal.classList.remove('active');
    }
  });

  // --- ROBUST PRINTABLE STUDIO RENDERERS ---
  function renderMasterPoster() {
    if (!elements.masterPosterRender) return;
    elements.masterPosterRender.innerHTML = `
      <div class="print-header-banner">
        <div class="print-logo-box">
          <div style="width: 76px; height: 76px;">${LOGO_CARDINAL_HEAD}</div>
          <div>
            <h1 class="print-master-title">ECMS LITERACY MANTRAS</h1>
            <span style="font-size: 1rem; font-weight: 700; color: var(--deep-cardinal); text-transform: uppercase;">East Middle School • Schoolwide Instructional Habits</span>
          </div>
        </div>
        <div style="width: 76px; height: 76px;">${LOGO_EC_MASCOT}</div>
      </div>

      <div class="mantra-grid" style="grid-template-columns: repeat(2, 1fr); gap: 20px;">
        ${MANTRAS_DATA.map(m => `
          <div style="border: 3px solid var(--cardinal-red); border-radius: 12px; padding: 16px; background: #FFFFFF; display: flex; gap: 16px; align-items: center;">
            <div style="width: 64px; height: 64px; flex-shrink: 0;">${m.iconSvg}</div>
            <div>
              <span style="font-size: 0.75rem; font-weight: 800; color: var(--cardinal-red); text-transform: uppercase;">MANTRA #${m.id}</span>
              <h3 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; color: var(--text-primary); line-height: 1.2;">${m.title}</h3>
              <p style="font-size: 0.85rem; font-style: italic; color: var(--text-secondary); margin-top: 4px;">"${m.quote}"</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top: 24px; text-align: center; border-top: 2px solid var(--border-color); padding-top: 12px; font-size: 0.85rem; color: var(--text-muted);">
        ECMS Cardinal Pride • High-Leverage Literacy Routines across ELA, Science, Social Studies, Math, and ELD
      </div>
    `;
  }

  function renderFullClassroomPosters() {
    if (!elements.fullPostersRender) return;
    elements.fullPostersRender.innerHTML = MANTRAS_DATA.map(m => `
      <div class="print-poster-card">
        <div class="print-poster-card-header">
          <div>
            <span style="font-size: 0.9rem; font-weight: 800; color: var(--cardinal-red); text-transform: uppercase; letter-spacing: 1px;">ECMS LITERACY MANTRA #${m.id}</span>
            <h2 class="print-poster-card-title">${m.title}</h2>
          </div>
          <div style="width: 60px; height: 60px;">${LOGO_CARDINAL_HEAD}</div>
        </div>

        <div class="print-poster-artwork">${m.iconSvg}</div>

        <div class="print-poster-quote">
          "${m.quote}"
        </div>

        <div class="print-poster-script-box">
          <strong style="color: var(--bright-accent-red); font-size: 0.8rem; text-transform: uppercase;">📢 Teacher Launch Phrase:</strong>
          <p style="font-size: 1.15rem; font-style: italic; margin-top: 4px;">"${m.verbatimTeacherScript}"</p>
        </div>

        <div style="background: var(--bg-tertiary); padding: 16px; border-radius: var(--radius-sm); border-left: 4px solid var(--cardinal-red);">
          <strong style="color: var(--cardinal-red); font-size: 0.85rem; text-transform: uppercase;">🔑 Core Student Habit:</strong>
          <p style="font-size: 0.95rem; margin-top: 4px;">${m.philosophy}</p>
        </div>

        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center; border-top: 2px solid var(--border-color); padding-top: 12px; font-size: 0.8rem; color: var(--text-muted);">
          <span>ECMS Cardinals • Classroom Anchor Chart</span>
          <span>Target Routine: ${m.teacherRoutines[0].name}</span>
        </div>
      </div>
    `).join('');
  }

  function renderDeskCards() {
    if (!elements.deskCardsRender) return;
    elements.deskCardsRender.innerHTML = MANTRAS_DATA.map(m => `
      <div class="print-desk-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 0.75rem; font-weight: 800; color: var(--cardinal-red);">MANTRA #${m.id}</span>
          <div style="width: 28px; height: 28px;">${LOGO_CARDINAL_HEAD}</div>
        </div>
        <h4 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: var(--text-primary); line-height: 1.2;">${m.title}</h4>
        <p style="font-size: 0.8rem; font-style: italic; color: var(--text-secondary); margin: 6px 0;">"${m.quote}"</p>
        <div style="background: var(--bg-tertiary); padding: 8px; border-radius: 6px; font-size: 0.78rem;">
          <strong>Habit:</strong> ${m.shortTag}
        </div>
      </div>
    `).join('');
  }

  function renderBookmarks() {
    if (!elements.bookmarksRender) return;
    const bookmarkTemplate = `
      <div style="border: 4px solid var(--cardinal-red); border-radius: 10px; padding: 16px; background: #FFFFFF; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="text-align: center; border-bottom: 2px solid var(--cardinal-red); padding-bottom: 10px; margin-bottom: 12px;">
          <div style="width: 44px; height: 44px; margin: 0 auto 6px auto;">${LOGO_CARDINAL_HEAD}</div>
          <h4 style="font-family: var(--font-heading); font-size: 1rem; color: var(--cardinal-red); font-weight: 800;">ECMS ANNOTATION KEY</h4>
          <span style="font-size: 0.7rem; color: var(--text-muted);">Thinking Leaves Tracks</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.85rem;">
          <div style="background: var(--off-white); padding: 8px; border-radius: 6px; border-left: 3px solid var(--cardinal-red);">
            <strong style="color: var(--cardinal-red); font-size: 1.1rem;">★</strong> <strong>Main Idea / Thesis</strong>
          </div>
          <div style="background: var(--off-white); padding: 8px; border-radius: 6px; border-left: 3px solid var(--bright-accent-red);">
            <strong style="color: var(--bright-accent-red); font-size: 1.1rem;">?</strong> <strong>Question / Confusion</strong>
          </div>
          <div style="background: var(--off-white); padding: 8px; border-radius: 6px; border-left: 3px solid var(--charcoal);">
            <strong style="color: var(--charcoal); font-size: 1.1rem;">◯</strong> <strong>Key Vocabulary Word</strong>
          </div>
          <div style="background: var(--off-white); padding: 8px; border-radius: 6px; border-left: 3px solid #10B981;">
            <strong style="color: #10B981; font-size: 1.1rem;">→</strong> <strong>Evidence / Reasoning</strong>
          </div>
        </div>

        <div style="text-align: center; margin-top: 14px; font-size: 0.72rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 8px;">
          Rule: Underlining requires a marginal note!
        </div>
      </div>
    `;
    elements.bookmarksRender.innerHTML = bookmarkTemplate + bookmarkTemplate + bookmarkTemplate;
  }

  function renderWalkthroughRubricSheet() {
    if (!elements.rubricSheetRender) return;
    elements.rubricSheetRender.innerHTML = `
      <div class="print-header-banner">
        <div class="print-logo-box">
          <div style="width: 60px; height: 60px;">${LOGO_CARDINAL_HEAD}</div>
          <div>
            <h2 style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--cardinal-red); font-weight: 800;">ECMS CLASSROOM WALKTHROUGH RUBRIC</h2>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">Instructional Leadership Observation & Coaching Sheet</span>
          </div>
        </div>
        <div style="width: 60px; height: 60px;">${LOGO_EC_MASCOT}</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 20px; font-size: 0.9rem; background: var(--off-white); padding: 12px; border-radius: 8px;">
        <div><strong>Teacher:</strong> ______________________</div>
        <div><strong>Subject/Grade:</strong> __________________</div>
        <div><strong>Date:</strong> ________________________</div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 0.85rem;">
        <thead>
          <tr style="background: var(--cardinal-red); color: white; text-align: left;">
            <th style="padding: 8px; border: 1px solid #CCCCCC;">Mantra #</th>
            <th style="padding: 8px; border: 1px solid #CCCCCC;">Literacy Mantra</th>
            <th style="padding: 8px; border: 1px solid #CCCCCC;">Observed Teacher & Student Evidence</th>
            <th style="padding: 8px; stroke: #CCCCCC; border: 1px solid #CCCCCC; text-align: center;">Verified?</th>
          </tr>
        </thead>
        <tbody>
          ${MANTRAS_DATA.map(m => `
            <tr>
              <td style="padding: 8px; border: 1px solid #CCCCCC; font-weight: 700; color: var(--cardinal-red); text-anchor: middle;">#${m.id}</td>
              <td style="padding: 8px; border: 1px solid #CCCCCC; font-weight: 700;">${m.title}</td>
              <td style="padding: 8px; border: 1px solid #CCCCCC; color: var(--text-secondary);">${m.leaderLookFors.teacherActions[0]}</td>
              <td style="padding: 8px; border: 1px solid #CCCCCC; text-align: center;">[ &nbsp; ] Yes &nbsp; [ &nbsp; ] No</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
        <div style="border: 2px solid #10B981; border-radius: 8px; padding: 12px; min-height: 100px;">
          <strong style="color: #10B981;">🌟 Classroom Glows & Highlights:</strong>
        </div>
        <div style="border: 2px solid var(--cardinal-red); border-radius: 8px; padding: 12px; min-height: 100px;">
          <strong style="color: var(--cardinal-red);">🎯 Actionable Coaching Next Step (Grow):</strong>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding-top: 12px; border-top: 1px solid var(--border-color);">
        <div><strong>Observer Signature:</strong> _____________________________</div>
        <div><strong>Teacher Signature:</strong> _____________________________</div>
      </div>
    `;
  }

  // --- Initial Page Rendering ---
  renderHubGrid();
  renderTeacherBank();
  renderLeaderGuide();
  renderMasterPoster();
  renderFullClassroomPosters();
  renderDeskCards();
  renderBookmarks();
  renderWalkthroughRubricSheet();

  // Trigger initial Gap Diagnostic
  document.getElementById('gap-error-select')?.dispatchEvent(new Event('change'));
});

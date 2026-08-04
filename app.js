// ECMS 8 Literacy Mantras Toolkit - JavaScript Controller (Middle School Edition)

class MantrasApp {
  constructor() {
    this.currentView = 'view-mantras-hub';
    this.currentSlideIndex = 0;
    this.pdSlides = [];
    this.init();
  }

  init() {
    this.setupThemeToggle();
    this.setupNavigation();
    this.renderHub();
    this.renderStrategyBank('bank-all');
    this.renderLeaderSection();
    this.renderGeneratorSuite('gen-stems');
    this.renderPrintableStudio('print-master');
    this.setupPdSlidesData();
  }

  // Theme Toggle (Light / Dark Mode)
  setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    toggleBtn.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      toggleBtn.querySelector('span').textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
  }

  // Navigation Controller
  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const viewId = btn.getAttribute('data-view');
        this.navigateTo(viewId);
      });
    });

    // Subtab navigation delegates
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.tab-link');
      if (!target) return;

      const parent = target.parentElement;
      parent.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
      target.classList.add('active');

      if (target.dataset.subtab) {
        this.renderStrategyBank(target.dataset.subtab);
      } else if (target.dataset.gentab) {
        this.renderGeneratorSuite(target.dataset.gentab);
      } else if (target.dataset.printtab) {
        this.renderPrintableStudio(target.dataset.printtab);
      }
    });
  }

  navigateTo(viewId) {
    this.currentView = viewId;

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
    });

    // Update active view section
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.toggle('active', view.id === viewId);
    });

    // Update top header title
    const pageTitle = document.getElementById('page-title');
    const titles = {
      'view-mantras-hub': 'ECMS 8 Literacy Mantras Hub',
      'view-strategy-bank': 'Middle School Strategy Bank',
      'view-leader-guide': 'Leader Alignment & Rubrics Crosswalk',
      'view-generators': 'Strategy Generators Suite',
      'view-printable-studio': 'High-Impact Printable Studio'
    };
    pageTitle.querySelector('span').textContent = titles[viewId] || 'ECMS Literacy Toolkit';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // VIEW 1: RENDER MANTRAS HUB
  renderHub() {
    const container = document.getElementById('mantra-cards-container');
    if (!container) return;

    container.innerHTML = MANTRAS_DATA.map(mantra => `
      <div class="mantra-card">
        <div>
          <div class="mantra-card-header">
            <span class="mantra-number">${mantra.id}</span>
            <div class="mantra-icon-wrapper">
              ${mantra.iconSvg}
            </div>
          </div>
          <span class="mantra-tag">${mantra.shortTag}</span>
          <h3 class="mantra-card-title">Mantra ${mantra.id}: ${mantra.title}</h3>
          <p class="mantra-quote">"${mantra.quote}"</p>
        </div>
        <div class="mantra-card-footer">
          <span class="tulsa-badge tulsa-badge-content">${mantra.tulsaWayArea}</span>
          <button class="btn-link" onclick="app.openMantraModal(${mantra.id})">
            Explore Strategy & Scaffolds →
          </button>
        </div>
      </div>
    `).join('');
  }

  // OPEN MANTRA MODAL (UPDATED WITH MISCONCEPTIONS & COUNTER-ROUTINES)
  openMantraModal(mantraId) {
    const mantra = MANTRAS_DATA.find(m => m.id === mantraId);
    if (!mantra) return;

    const titleElem = document.getElementById('modal-mantra-title');
    const bodyElem = document.getElementById('modal-mantra-body');
    const modal = document.getElementById('mantra-modal');

    titleElem.innerHTML = `Mantra ${mantra.id}: ${mantra.title}`;
    
    bodyElem.innerHTML = `
      <div style="display:flex; align-items:center; gap:20px; border-bottom:1px solid var(--border-color); padding-bottom:20px;">
        <div class="mantra-icon-wrapper" style="width:80px; height:80px;">
          ${mantra.iconSvg}
        </div>
        <div>
          <span class="mantra-tag">${mantra.shortTag}</span>
          <p style="font-size:1.1rem; font-style:italic; color:var(--text-secondary); margin-top:4px;">"${mantra.quote}"</p>
        </div>
      </div>

      <div>
        <h4 style="color:var(--brand-primary); font-family:var(--font-heading); margin-bottom:8px;">Instructional Rationale & Philosophy</h4>
        <p style="color:var(--text-primary); font-size:1rem; line-height:1.6;">${mantra.philosophy}</p>
      </div>

      <div class="prompt-box">
        <strong style="color:var(--bright-accent-red); text-transform:uppercase; font-size:0.8rem; letter-spacing:1px;">Verbatim Teacher Launch Script</strong>
        <p style="margin-top:6px; font-size:1.05rem; font-style:italic;">"${mantra.verbatimTeacherScript}"</p>
      </div>

      <!-- MISCONCEPTION & COUNTER-ROUTINE SECTION -->
      <div style="background:rgba(239, 68, 68, 0.08); border-left:5px solid #EF4444; padding:18px; border-radius:var(--radius-sm);">
        <strong style="color:#B91C1C; text-transform:uppercase; font-size:0.85rem; letter-spacing:0.5px; display:block; margin-bottom:4px;">
          ⚠️ Common Student Misconception & Breakdown:
        </strong>
        <p style="font-size:0.95rem; color:var(--text-primary); margin-bottom:10px;">
          ${mantra.misconceptionFix.misconception}
        </p>
        <strong style="color:var(--brand-primary); text-transform:uppercase; font-size:0.85rem; letter-spacing:0.5px; display:block; margin-bottom:4px;">
          💡 Actionable Counter-Routine:
        </strong>
        <p style="font-size:0.95rem; font-weight:600; color:var(--text-primary);">
          ${mantra.misconceptionFix.counterRoutine}
        </p>
      </div>

      <div>
        <h4 style="color:var(--brand-primary); font-family:var(--font-heading); margin-bottom:12px;">Tulsa Way & TLE Alignment</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div style="background:var(--bg-tertiary); padding:14px; border-radius:var(--radius-sm);">
            <strong>Tulsa Way Indicator:</strong> ${mantra.tulsaWay}
          </div>
          <div style="background:var(--bg-tertiary); padding:14px; border-radius:var(--radius-sm);">
            <strong>TLE Rubric Dimension:</strong> ${mantra.tleDimension}
          </div>
        </div>
      </div>

      <div>
        <h4 style="color:var(--brand-primary); font-family:var(--font-heading); margin-bottom:12px;">ELD WIDA Levels 1-6 Language Scaffolds</h4>
        <ul style="padding-left:20px; color:var(--text-secondary); display:flex; flex-direction:column; gap:8px;">
          <li><strong>Level 1 (Entering):</strong> ${mantra.eldScaffolds.entering}</li>
          <li><strong>Level 2 (Emerging):</strong> ${mantra.eldScaffolds.emerging}</li>
          <li><strong>Level 3 (Developing):</strong> ${mantra.eldScaffolds.developing}</li>
          <li><strong>Level 4 (Expanding):</strong> ${mantra.eldScaffolds.expanding}</li>
          <li><strong>Level 5-6 (Bridging):</strong> ${mantra.eldScaffolds.bridging}</li>
        </ul>
      </div>

      <div>
        <h4 style="color:var(--brand-primary); font-family:var(--font-heading); margin-bottom:12px;">Curriculum Subject Exemplar</h4>
        <p style="background:var(--bg-tertiary); padding:14px; border-radius:var(--radius-sm); font-size:0.95rem; border-left:3px solid var(--brand-primary);">
          <strong>StudySync ELA:</strong> ${mantra.exemplarsBySubject.ELA}
        </p>
      </div>
    `;

    modal.classList.add('active');
  }

  closeModal() {
    document.getElementById('mantra-modal').classList.remove('active');
  }

  // VIEW 2: RENDER STRATEGY BANK
  renderStrategyBank(filterTab) {
    const container = document.getElementById('strategy-bank-content');
    if (!container) return;

    if (filterTab === 'bank-struggling') {
      container.innerHTML = `
        <div class="generator-card">
          <div style="background:var(--brand-gradient); color:var(--text-on-red); padding:20px; border-radius:var(--radius-md); margin-bottom:24px; box-shadow:var(--shadow-red);">
            <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; margin-bottom:6px;">
              Middle School Struggling Reader Prompting Guide (Grades 6-8)
            </h3>
            <p style="font-size:0.95rem; opacity:0.95;">
              Targeted teacher launch prompts categorized by middle school Lexile bands (400L - 1200L+) to address common middle grade reading breakdowns.
            </p>
          </div>

          <div style="display:flex; flex-direction:column; gap:24px;">
            ${STRUGGLING_READER_PROMPTING_DATASET.map(band => `
              <div style="border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px; background:var(--bg-card);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
                  <div>
                    <span class="lexile-badge">${band.lexileBand}</span>
                    <span style="font-size:0.9rem; font-weight:700; color:var(--brand-primary); margin-left:8px;">${band.gradeLevel}</span>
                  </div>
                  <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">Focus: ${band.focusArea}</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:16px;">
                  ${band.items.map(item => `
                    <div style="background:var(--bg-tertiary); border-radius:var(--radius-sm); padding:16px;">
                      <h4 style="color:var(--text-primary); font-family:var(--font-heading); margin-bottom:4px;">${item.element}</h4>
                      <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:10px;"><strong>Observed Student Error:</strong> ${item.studentError}</p>
                      <div class="prompt-box" style="margin-top:0;">
                        <strong style="color:var(--bright-accent-red); font-size:0.8rem; text-transform:uppercase;">Targeted Teacher Launch Prompts:</strong>
                        <ul>
                          ${item.prompts.map(p => `<li>"${p}"</li>`).join('')}
                        </ul>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      return;
    }

    if (filterTab === 'bank-mll') {
      container.innerHTML = `
        <div class="generator-card">
          <div style="background:var(--brand-gradient); color:var(--text-on-red); padding:20px; border-radius:var(--radius-md); margin-bottom:24px; box-shadow:var(--shadow-red);">
            <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; margin-bottom:6px;">
              Non-English Speakers (Multilingual Learners / ELD / SLIFE) Support
            </h3>
            <p style="font-size:0.95rem; opacity:0.95;">
              Targeted instructional practices for supporting non-English speakers, Students with Interrupted Formal Education (SLIFE), and Multilingual Learners (MLL).
            </p>
          </div>

          <div style="display:flex; flex-direction:column; gap:20px;">
            ${MLL_SLIFE_STRATEGIES_DATASET.map(s => `
              <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:20px;">
                <span class="tulsa-badge tulsa-badge-culture" style="margin-bottom:8px;">${s.targetGroup}</span>
                <h4 style="font-family:var(--font-heading); font-size:1.2rem; color:var(--text-primary); margin-bottom:6px;">${s.title}</h4>
                <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:14px;">${s.description}</p>
                ${s.examples ? `
                  <div style="background:var(--bg-tertiary); padding:10px 14px; border-radius:var(--radius-sm); margin-bottom:14px; font-size:0.88rem;">
                    <strong>Cognate Examples:</strong> ${s.examples.join(' | ')}
                  </div>
                ` : ''}
                <div class="prompt-box" style="margin-top:0;">
                  <strong style="color:var(--bright-accent-red); font-size:0.8rem; text-transform:uppercase;">Targeted Teacher Launch Prompts:</strong>
                  <ul>
                    ${s.prompts.map(p => `<li>"${p}"</li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      return;
    }

    const subjectMap = {
      'bank-ela': { name: 'StudySync ELA', key: 'ELA', badge: 'StudySync (McGraw-Hill)', color: '#2980B9' },
      'bank-science': { name: 'Inspire Science', key: 'Science', badge: 'Inspire Science (McGraw-Hill)', color: '#27AE60' },
      'bank-ss': { name: 'Savvas Social Studies', key: 'SocialStudies', badge: 'Savvas myWorld / DBQ', color: '#D35400' },
      'bank-math': { name: 'Savvas EnVision Math', key: 'Math', badge: 'Savvas EnVision 3-Act Math', color: '#8E44AD' },
      'bank-eld': { name: 'National Geographic ELD', key: 'ELD', badge: 'NatGeo Reach/Edge (WIDA 1-6)', color: '#C0392B' }
    };

    const selectedSubject = subjectMap[filterTab];

    if (selectedSubject) {
      container.innerHTML = `
        <div style="background:linear-gradient(135deg, var(--charcoal) 0%, var(--warm-gray) 100%); color:var(--off-white); padding:24px 32px; border-radius:var(--radius-lg); margin-bottom:28px; box-shadow:var(--shadow-md); border-left:6px solid ${selectedSubject.color};">
          <span class="hero-badge" style="background:${selectedSubject.color};">${selectedSubject.badge}</span>
          <h2 style="font-family:var(--font-heading); font-size:1.8rem; font-weight:800; margin-top:8px; margin-bottom:6px;">
            ${selectedSubject.name} Teacher Strategy Bank
          </h2>
          <p style="font-size:1rem; color:#D8D2C9;">
            Simplified 8-Mantra instructional playbook customized for <strong>${selectedSubject.name}</strong> middle school classrooms.
          </p>
        </div>

        <div style="display:flex; flex-direction:column; gap:24px;">
          ${MANTRAS_DATA.map(mantra => {
            const subjectExemplar = mantra.exemplarsBySubject[selectedSubject.key] || mantra.exemplarsBySubject.ELA;
            const subjectStems = STEMS_DATASET.filter(s => s.subject === selectedSubject.key);
            const sampleStem = subjectStems.length > 0 ? subjectStems[0].stem : "According to the text, ____, which proves that ____.";

            return `
              <div class="generator-card" style="margin-bottom:0; border-left:5px solid ${selectedSubject.color};">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; flex-wrap:wrap; gap:10px;">
                  <div style="display:flex; align-items:center; gap:12px;">
                    <span class="mantra-number" style="background:${selectedSubject.color}; color:#FFFFFF;">${mantra.id}</span>
                    <div>
                      <h3 style="font-family:var(--font-heading); font-size:1.3rem; color:var(--text-primary);">${mantra.title}</h3>
                      <span class="mantra-tag">${mantra.shortTag}</span>
                    </div>
                  </div>
                  <span class="tulsa-badge tulsa-badge-content">${mantra.tulsaWayArea}</span>
                </div>

                <div style="background:var(--bg-tertiary); border-radius:var(--radius-sm); padding:16px; margin-bottom:16px; border:1px solid var(--border-color);">
                  <strong style="color:${selectedSubject.color}; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.5px;">
                    ${selectedSubject.name} Classroom Exemplar Routine:
                  </strong>
                  <p style="font-size:1.02rem; font-weight:600; color:var(--text-primary); margin-top:4px;">
                    ${subjectExemplar}
                  </p>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
                  <div class="prompt-box" style="margin-top:0;">
                    <strong style="color:var(--bright-accent-red); font-size:0.8rem; text-transform:uppercase;">Verbatim Teacher Launch Script:</strong>
                    <p style="margin-top:4px; font-size:0.95rem; font-style:italic;">"${mantra.verbatimTeacherScript}"</p>
                  </div>

                  <div style="background:var(--bg-card); border:1px solid var(--border-color); padding:14px; border-radius:var(--radius-sm);">
                    <strong style="color:var(--brand-primary); font-size:0.8rem; text-transform:uppercase;">Sample ${selectedSubject.key} Sentence Stem:</strong>
                    <p style="margin-top:4px; font-size:0.92rem; font-weight:600; color:var(--text-primary);">"${sampleStem}"</p>
                  </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; pt-12; border-top:1px solid var(--border-color); font-size:0.85rem; color:var(--text-muted);">
                  <span><strong>Tulsa Way:</strong> ${mantra.tulsaWay}</span>
                  <span><strong>TLE Rubric:</strong> ${mantra.tleDimension}</span>
                  <button class="btn-link" onclick="app.openMantraModal(${mantra.id})">Full Scaffolds & WIDA Levels →</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div style="background:var(--bg-tertiary); padding:16px 24px; border-radius:var(--radius-md); margin-bottom:24px; border-left:4px solid var(--brand-primary);">
        <h3 style="font-family:var(--font-heading); font-size:1.2rem; color:var(--text-primary);">Master Strategy Overview (All Subjects)</h3>
        <p style="font-size:0.9rem; color:var(--text-secondary);">Click any content area tab above (StudySync ELA, Inspire Science, Savvas SS, Savvas Math, NatGeo ELD) to filter down to a single subject playbook!</p>
      </div>

      ${MANTRAS_DATA.map(mantra => `
        <div class="generator-card" style="margin-bottom:24px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
            <div style="display:flex; align-items:center; gap:12px;">
              <span class="mantra-number">${mantra.id}</span>
              <div>
                <h3 style="font-family:var(--font-heading); font-size:1.25rem; color:var(--text-primary);">${mantra.title}</h3>
                <span class="mantra-tag">${mantra.shortTag}</span>
              </div>
            </div>
            <span class="tulsa-badge tulsa-badge-content">${mantra.tulsaWayArea}</span>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:16px;">
            <div class="prompt-box" style="margin-top:0;">
              <strong style="color:var(--bright-accent-red); font-size:0.8rem; text-transform:uppercase;">Verbatim Script:</strong>
              <p style="margin-top:4px; font-style:italic;">"${mantra.verbatimTeacherScript}"</p>
            </div>
            <div style="background:var(--bg-tertiary); padding:14px; border-radius:var(--radius-sm);">
              <strong style="color:var(--brand-primary); font-size:0.85rem; text-transform:uppercase;">Misconception Fix:</strong>
              <p style="margin-top:4px; font-size:0.9rem; color:var(--text-secondary);">${mantra.misconceptionFix.counterRoutine}</p>
            </div>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <h4 style="font-size:0.9rem; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">Curriculum Subject Exemplars:</h4>
            <ul style="padding-left:18px; font-size:0.9rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:6px;">
              <li><strong>StudySync ELA:</strong> ${mantra.exemplarsBySubject.ELA}</li>
              <li><strong>Inspire Science:</strong> ${mantra.exemplarsBySubject.Science}</li>
              <li><strong>Savvas Social Studies:</strong> ${mantra.exemplarsBySubject.SocialStudies}</li>
              <li><strong>Savvas Math:</strong> ${mantra.exemplarsBySubject.Math}</li>
              <li><strong>NatGeo ELD:</strong> ${mantra.exemplarsBySubject.ELD}</li>
            </ul>
          </div>
        </div>
      `).join('')}
    `;
  }

  // VIEW 3: RENDER LEADER ALIGNMENT & RUBRICS SECTION
  renderLeaderSection() {
    const areasContainer = document.getElementById('tulsa-way-areas-container');
    if (areasContainer) {
      areasContainer.innerHTML = TULSA_WAY_DATASET.map(area => `
        <div class="mantra-card">
          <div class="mantra-card-header">
            <span class="${area.badgeClass}">${area.area}</span>
            <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted); uppercase;">${area.type}</span>
          </div>
          <h3 class="mantra-card-title">${area.essentialQuestion}</h3>
          <ul style="padding-left:18px; font-size:0.85rem; color:var(--text-secondary); margin-top:12px; display:flex; flex-direction:column; gap:6px;">
            ${area.descriptors.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    const tableBody = document.getElementById('crosswalk-table-body');
    if (tableBody) {
      tableBody.innerHTML = MANTRAS_DATA.map(m => `
        <tr>
          <td>
            <strong>Mantra ${m.id}</strong><br/>
            <span style="font-size:0.85rem; color:var(--text-muted);">${m.title}</span>
          </td>
          <td>
            <span class="tulsa-badge tulsa-badge-content">${m.tulsaWayArea}</span><br/>
            <span style="font-size:0.85rem; color:var(--text-secondary);">${m.tulsaWay}</span>
          </td>
          <td>
            <span class="tulsa-badge tulsa-badge-tle">${m.tleDomain.split(' ')[0]}</span><br/>
            <span style="font-size:0.85rem; color:var(--text-secondary);">${m.tleDimension}</span>
          </td>
          <td>
            <ul style="padding-left:14px; font-size:0.82rem; color:var(--text-secondary);">
              ${m.leaderLookFors.teacherActions.slice(0, 2).map(a => `<li>${a}</li>`).join('')}
            </ul>
          </td>
        </tr>
      `).join('');
    }

    const tleContainer = document.getElementById('tle-dimensions-container');
    if (tleContainer) {
      tleContainer.innerHTML = TLE_RUBRIC_DATASET.map(dim => `
        <div class="mantra-card" style="padding:18px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
            <span class="tulsa-badge tulsa-badge-tle">Dim ${dim.dimNo}</span>
            <span style="font-size:0.75rem; font-weight:600; color:var(--text-muted);">${dim.domain}</span>
          </div>
          <h4 style="font-family:var(--font-heading); font-size:1.05rem; color:var(--text-primary); margin-bottom:6px;">${dim.name}</h4>
          <p style="font-size:0.85rem; color:var(--text-secondary);">${dim.desc}</p>
        </div>
      `).join('');
    }
  }

  // VIEW 4: RENDER GENERATOR SUITE
  renderGeneratorSuite(genTab) {
    const container = document.getElementById('generator-suite-content');
    if (!container) return;

    if (genTab === 'gen-stems') {
      container.innerHTML = `
        <div class="generator-card">
          <div style="background:var(--brand-gradient); color:var(--text-on-red); padding:20px; border-radius:var(--radius-md); margin-bottom:24px; box-shadow:var(--shadow-red);">
            <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; margin-bottom:6px;">
              Academic Writing Scaffold Generator (RACES & CER Framework)
            </h3>
            <p style="font-size:0.95rem; opacity:0.95;">
              Build complete evidence-based writing scaffolds using <strong>RACES</strong> (Restate, Answer, Cite, Explain, Sum Up) for ELA/Social Studies or <strong>CER</strong> (Claim, Evidence, Reasoning) for Science!
            </p>
          </div>

          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label" style="font-weight:700;">Select Writing Framework:</label>
            <select id="writing-framework-select" class="form-select" onchange="app.updateFrameworkResult()">
              <option value="RACES">RACES Strategy Matrix (Restate, Answer, Cite, Explain, Sum Up) - ELA & Social Studies</option>
              <option value="CER">CER Strategy Matrix (Claim, Evidence, Reasoning) - Science</option>
            </select>
          </div>

          <div id="writing-framework-result">
            <!-- Rendered dynamically -->
          </div>
        </div>
      `;
      this.updateFrameworkResult();
    } else if (genTab === 'gen-close-read') {
      // 3-PASS CLOSE READING GENERATOR WITH PROMINENT CURRICULUM DISCLAIMER BANNER
      container.innerHTML = `
        <div class="generator-card">
          <!-- PROMINENT CURRICULUM MANDATE DISCLAIMER -->
          <div style="background:#FFFBEB; border:2px solid #F59E0B; border-radius:var(--radius-md); padding:18px 24px; margin-bottom:24px; box-shadow:var(--shadow-sm);">
            <div style="display:flex; align-items:flex-start; gap:12px;">
              <span style="font-size:1.6rem; line-height:1;">⚠️</span>
              <div>
                <strong style="color:#B45309; text-transform:uppercase; font-size:0.85rem; letter-spacing:1px; display:block; margin-bottom:2px;">
                  Mandatory Curriculum Policy Disclaimer:
                </strong>
                <p style="font-size:0.95rem; color:#78350F; font-weight:600; line-height:1.5;">
                  Teachers MUST ALWAYS use curriculum-provided text-dependent questions (from StudySync ELA, Inspire Science, Savvas, or NatGeo ELD).
                </p>
                <p style="font-size:0.88rem; color:#92400E; margin-top:4px;">
                  <em>This generator is for professional development and demonstration purposes only—to help teachers understand the distinct instructional goal of each reading pass and illustrate how questioning deepens with each subsequent read.</em>
                </p>
              </div>
            </div>
          </div>

          <div style="background:var(--brand-gradient); color:var(--text-on-red); padding:20px; border-radius:var(--radius-md); margin-bottom:24px; box-shadow:var(--shadow-red);">
            <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; margin-bottom:6px;">
              3-Pass Purpose & Question Demonstration Tool
            </h3>
            <p style="font-size:0.95rem; opacity:0.95;">
              Enter your lesson topic below to see a model 3-Pass Close Reading plan illustrating how <strong>Teacher Purposes</strong>, <strong>Launch Scripts</strong>, and <strong>Question Rigor</strong> progress across 3 reads.
            </p>
          </div>

          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label" style="font-weight:700; font-size:1.05rem; color:var(--text-primary);">Enter Lesson Topic / Text Theme:</label>
            <div style="display:flex; gap:12px; margin-bottom:12px;">
              <input type="text" id="close-read-topic-input" class="form-control" style="font-size:1.05rem; padding:12px 16px; border-color:var(--brand-primary);" value="The Giver - Dystopian Society & Memory" placeholder="e.g., Photosynthesis, Civil Rights Movement, Ecosystem Disruptions, Plate Tectonics">
              <button class="btn btn-primary" onclick="app.generateTopicCloseReadPlan()" style="padding:12px 24px; font-size:1rem; white-space:nowrap;">
                Demonstrate 3-Pass Plan
              </button>
            </div>
            
            <strong style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase;">Or Pick a Quick Topic Preset:</strong>
            <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:6px;">
              <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.85rem;" onclick="app.setTopicPreset('Photosynthesis & Cellular Energy')">Photosynthesis (Science)</button>
              <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.85rem;" onclick="app.setTopicPreset('The Giver - Dystopian Society & Memory')">The Giver (ELA)</button>
              <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.85rem;" onclick="app.setTopicPreset('Civil Rights Movement & Nonviolent Resistance')">Civil Rights (Social Studies)</button>
              <button class="btn btn-secondary" style="padding:6px 12px; font-size:0.85rem;" onclick="app.setTopicPreset('Ecosystem Disruptions & Food Webs')">Ecosystems (Science)</button>
            </div>
          </div>

          <div id="close-read-result" style="margin-top:28px;">
            <!-- Output -->
          </div>
        </div>
      `;
      this.generateTopicCloseReadPlan();
    } else if (genTab === 'gen-engagement-game') {
      container.innerHTML = `
        <div class="generator-card">
          <div style="background:var(--charcoal); color:var(--off-white); padding:24px; border-radius:var(--radius-md); border-left:6px solid var(--bright-accent-red); margin-bottom:24px;">
            <strong style="color:var(--bright-accent-red); text-transform:uppercase; font-size:0.85rem; letter-spacing:1px;">Interactive Diagnostic Tool:</strong>
            <h3 style="font-family:var(--font-heading); font-size:1.5rem; color:#FFFFFF; margin-top:4px; margin-bottom:8px;">
              Engagement Gap & Gamification Generator
            </h3>
            <p style="font-size:0.95rem; color:#D8D2C9; line-height:1.6;">
              Select the specific reading engagement breakdown you are observing in your middle school classroom. The generator will instantly toggle to a targeted gamified strategy, video game analysis card, and launch command!
            </p>
          </div>

          <div class="form-group" style="margin-bottom:24px;">
            <label class="form-label" style="font-size:1rem; font-weight:700;">Select Observed Middle School Engagement Gap:</label>
            <select id="engagement-gap-select" class="form-select" style="padding:14px; font-size:1rem; border-color:var(--brand-primary);" onchange="app.updateEngagementGapResult()">
              ${ENGAGEMENT_GAPS_GAMIFICATION_DATASET.map(g => `<option value="${g.gapId}">${g.gapTitle}</option>`).join('')}
            </select>
          </div>

          <div id="engagement-gap-result-box">
            <!-- Rendered dynamically -->
          </div>
        </div>
      `;
      this.updateEngagementGapResult();
    } else if (genTab === 'gen-struggling-prompts') {
      container.innerHTML = `
        <div class="generator-card">
          <h3 style="font-family:var(--font-heading); color:var(--brand-primary); margin-bottom:16px;">
            Middle School Struggling Reader Prompting Tool (Grades 6-8)
          </h3>
          <p style="color:var(--text-secondary); margin-bottom:20px;">
            Select your middle school student's Lexile Band to generate targeted teacher launch prompts.
          </p>
          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label">Select Middle School Lexile Band:</label>
            <select id="lexile-band-select" class="form-select" onchange="app.updateStrugglingPromptResult()">
              ${STRUGGLING_READER_PROMPTING_DATASET.map(band => `<option value="${band.lexileBand}">${band.lexileBand} — ${band.gradeLevel}</option>`).join('')}
            </select>
          </div>
          <div id="struggling-prompt-result" style="display:flex; flex-direction:column; gap:16px;">
            <!-- Prompts rendered here -->
          </div>
        </div>
      `;
      this.updateStrugglingPromptResult();
    }
  }

  setTopicPreset(presetName) {
    const input = document.getElementById('close-read-topic-input');
    if (input) {
      input.value = presetName;
      this.generateTopicCloseReadPlan();
    }
  }

  // TOPIC-BASED 3-PASS CLOSE READING GENERATOR (DYNAMIC PURPOSES & DEMONSTRATION QUESTIONS)
  generateTopicCloseReadPlan() {
    const topicText = document.getElementById('close-read-topic-input')?.value || 'The Giver - Dystopian Society';
    const resultBox = document.getElementById('close-read-result');
    if (!resultBox) return;

    resultBox.style.display = 'block';

    const isScience = topicText.toLowerCase().includes('science') || topicText.toLowerCase().includes('photo') || topicText.toLowerCase().includes('cell') || topicText.toLowerCase().includes('eco') || topicText.toLowerCase().includes('bio') || topicText.toLowerCase().includes('tectonic');
    
    const writingFramework = isScience ? 'CER (Claim, Evidence, Reasoning)' : 'RACES (Restate, Answer, Cite, Explain, Sum Up)';
    const frameworkBadge = isScience ? 'Inspire Science CER Focus' : 'StudySync / Savvas RACES Focus';

    let q1 = [
      `What is the central topic or problem introduced in this text regarding "${topicText}"?`,
      `Who or what are the primary subjects involved, and what is their main situation?`,
      `What key background detail helps us understand why "${topicText}" matters?`
    ];

    let q2 = [
      `Why did the author choose specific domain words related to "${topicText}" in Paragraph 2?`,
      `How does Paragraph 3 build upon or challenge the initial concept introduced in Paragraph 1?`,
      `What tone shift or structural transition occurs as the author explains "${topicText}"?`
    ];

    let q3 = [
      `Which specific line numbers provide the strongest text evidence regarding "${topicText}"?`,
      `How does the author's reasoning address opposing viewpoints or scientific misconceptions?`,
      `Write a ${writingFramework} response: What conclusion can be drawn about "${topicText}" based on the evidence?`
    ];

    resultBox.innerHTML = `
      <div style="border:2px solid var(--brand-primary); border-radius:var(--radius-md); padding:24px; background:var(--bg-card); box-shadow:var(--shadow-md);">
        
        <!-- INNER DISCLAIMER -->
        <div style="background:#FFFBEB; border-left:4px solid #F59E0B; padding:10px 14px; border-radius:4px; margin-bottom:16px; font-size:0.85rem; color:#92400E;">
          <strong>📌 Note to Teachers:</strong> Always utilize curriculum-provided questions from StudySync/Inspire Science/Savvas during actual instruction. The sample questions below model the progression of depth across 3 reads.
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; border-bottom:2px solid var(--border-color); padding-bottom:14px; flex-wrap:wrap; gap:10px;">
          <div>
            <span class="tulsa-badge tulsa-badge-content" style="margin-bottom:6px;">${frameworkBadge}</span>
            <h4 style="font-family:var(--font-heading); font-size:1.35rem; color:var(--brand-primary);">
              3-Pass Purpose & Question Progression: "${topicText}"
            </h4>
          </div>
          <button class="copy-btn" style="position:static;" onclick="alert('3-Pass Close Reading Plan copied!');">Copy Demonstration Plan</button>
        </div>

        <div style="display:flex; flex-direction:column; gap:20px;">
          <!-- READ 1 -->
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-sm); border-left:5px solid #2980B9;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-wrap:wrap;">
              <h5 style="font-family:var(--font-heading); font-size:1.15rem; color:#2980B9;">Read 1: Gist & Main Idea (Key Ideas & Details)</h5>
              <span style="font-weight:700; font-size:0.8rem; text-transform:uppercase; color:#2980B9;">Purpose: Baseline Context</span>
            </div>
            <p style="font-size:0.95rem; color:var(--text-primary); margin-bottom:12px;">
              <strong>Teacher Purpose Statement:</strong> Establish baseline understanding of "${topicText}"; identify who/what the text is about.
            </p>
            <div class="prompt-box" style="margin-top:0; margin-bottom:12px;">
              <strong style="color:var(--bright-accent-red); font-size:0.8rem;">Teacher Launch Command:</strong>
              <p style="font-size:0.95rem; font-style:italic; margin-top:4px;">
                "Pass 1 is our baseline map! As we read about ${topicText}, focus on answering: What is this text primarily telling us?"
              </p>
            </div>
            <strong style="color:var(--text-primary); font-size:0.9rem;">Model Questions for Read 1 (Use Curriculum Questions in Class):</strong>
            <ul style="padding-left:20px; font-size:0.9rem; color:var(--text-secondary); margin-top:6px; display:flex; flex-direction:column; gap:4px;">
              ${q1.map(q => `<li>"${q}"</li>`).join('')}
            </ul>
          </div>

          <!-- READ 2 -->
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-sm); border-left:5px solid #E67E22;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-wrap:wrap;">
              <h5 style="font-family:var(--font-heading); font-size:1.15rem; color:#D35400;">Read 2: Craft, Structure & Vocabulary (How Text Works)</h5>
              <span style="font-weight:700; font-size:0.8rem; text-transform:uppercase; color:#D35400;">Purpose: Analyze Text Construction</span>
            </div>
            <p style="font-size:0.95rem; color:var(--text-primary); margin-bottom:12px;">
              <strong>Teacher Purpose Statement:</strong> Analyze author word choice, domain terms, diagrams, and structural transitions regarding "${topicText}".
            </p>
            <div class="prompt-box" style="margin-top:0; margin-bottom:12px;">
              <strong style="color:var(--bright-accent-red); font-size:0.8rem;">Teacher Launch Command:</strong>
              <p style="font-size:0.95rem; font-style:italic; margin-top:4px;">
                "Pass 2 is our Detective Zoom-In! Re-read Paragraphs 2 and 3. Your ONLY goal is to analyze HOW the author explains ${topicText}."
              </p>
            </div>
            <strong style="color:var(--text-primary); font-size:0.9rem;">Model Questions for Read 2 (Use Curriculum Questions in Class):</strong>
            <ul style="padding-left:20px; font-size:0.9rem; color:var(--text-secondary); margin-top:6px; display:flex; flex-direction:column; gap:4px;">
              ${q2.map(q => `<li>"${q}"</li>`).join('')}
            </ul>
          </div>

          <!-- READ 3 -->
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-sm); border-left:5px solid #8E44AD;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; flex-wrap:wrap;">
              <h5 style="font-family:var(--font-heading); font-size:1.15rem; color:#8E44AD;">Read 3: Synthesis & Evidence Extraction (${writingFramework} Prep)</h5>
              <span style="font-weight:700; font-size:0.8rem; text-transform:uppercase; color:#8E44AD;">Purpose: ${writingFramework} Evidence Writing</span>
            </div>
            <p style="font-size:0.95rem; color:var(--text-primary); margin-bottom:12px;">
              <strong>Teacher Purpose Statement:</strong> Extract exact line-number quote evidence to construct a ${writingFramework} written response.
            </p>
            <div class="prompt-box" style="margin-top:0; margin-bottom:12px;">
              <strong style="color:var(--bright-accent-red); font-size:0.8rem;">Teacher Launch Command:</strong>
              <p style="font-size:0.95rem; font-style:italic; margin-top:4px;">
                "Pass 3 is Evidence Loot Mining! Re-read key lines to find exact quotes needed for your ${writingFramework} writing response on ${topicText}."
              </p>
            </div>
            <strong style="color:var(--text-primary); font-size:0.9rem;">Model Evidence Questions for Read 3 (Use Curriculum Questions in Class):</strong>
            <ul style="padding-left:20px; font-size:0.9rem; color:var(--text-secondary); margin-top:6px; display:flex; flex-direction:column; gap:4px;">
              ${q3.map(q => `<li>"${q}"</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // RACES & CER FRAMEWORK RENDERER
  updateFrameworkResult() {
    const selected = document.getElementById('writing-framework-select')?.value || 'RACES';
    const container = document.getElementById('writing-framework-result');
    if (!container) return;

    if (selected === 'RACES') {
      const items = RACES_CER_FRAMEWORK_DATASET.RACES;
      container.innerHTML = `
        <div style="border:2px solid var(--cardinal-red); border-radius:var(--radius-md); padding:24px; background:var(--bg-card);">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;">
            <h4 style="font-family:var(--font-heading); font-size:1.3rem; color:var(--cardinal-red); font-weight:800;">
              RACES Strategy Matrix (Restate, Answer, Cite, Explain, Sum Up)
            </h4>
            <span class="tulsa-badge tulsa-badge-content">ELA & Social Studies</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:16px; margin-bottom:24px;">
            ${items.map(item => `
              <div style="background:var(--bg-tertiary); border-radius:var(--radius-sm); padding:16px; border-left:5px solid var(--cardinal-red);">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:6px;">
                  <span style="background:var(--cardinal-red); color:#FFFFFF; width:32px; height:32px; border-radius:50%; font-weight:800; font-size:1.1rem; display:flex; align-items:center; justify-content:center;">${item.letter}</span>
                  <h5 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--text-primary);">${item.name}</h5>
                </div>
                <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:10px;">${item.description}</p>
                <div style="background:var(--bg-card); border:1px solid var(--border-color); padding:10px 14px; border-radius:4px; font-size:0.9rem; margin-bottom:8px;">
                  <strong>Sentence Starters:</strong>
                  <ul style="padding-left:18px; margin-top:4px; color:var(--brand-primary); font-weight:600;">
                    ${item.prompts.map(p => `<li>"${p}"</li>`).join('')}
                  </ul>
                </div>
                <p style="font-size:0.85rem; font-style:italic; color:var(--text-muted);"><strong>Exemplar:</strong> "${item.exemplar}"</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      const items = RACES_CER_FRAMEWORK_DATASET.CER;
      container.innerHTML = `
        <div style="border:2px solid #27AE60; border-radius:var(--radius-md); padding:24px; background:var(--bg-card);">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;">
            <h4 style="font-family:var(--font-heading); font-size:1.3rem; color:#27AE60; font-weight:800;">
              CER Strategy Matrix (Claim, Evidence, Reasoning)
            </h4>
            <span class="tulsa-badge tulsa-badge-content" style="background:rgba(39,174,96,0.15); color:#27AE60; border-color:#27AE60;">Inspire Science</span>
          </div>

          <div style="display:flex; flex-direction:column; gap:16px;">
            ${items.map(item => `
              <div style="background:var(--bg-tertiary); border-radius:var(--radius-sm); padding:16px; border-left:5px solid #27AE60;">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:6px;">
                  <span style="background:#27AE60; color:#FFFFFF; width:32px; height:32px; border-radius:50%; font-weight:800; font-size:1.1rem; display:flex; align-items:center; justify-content:center;">${item.letter}</span>
                  <h5 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--text-primary);">${item.name}</h5>
                </div>
                <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:10px;">${item.description}</p>
                <div style="background:var(--bg-card); border:1px solid var(--border-color); padding:10px 14px; border-radius:4px; font-size:0.9rem; margin-bottom:8px;">
                  <strong>Sentence Starters:</strong>
                  <ul style="padding-left:18px; margin-top:4px; color:#27AE60; font-weight:600;">
                    ${item.prompts.map(p => `<li>"${p}"</li>`).join('')}
                  </ul>
                </div>
                <p style="font-size:0.85rem; font-style:italic; color:var(--text-muted);"><strong>Exemplar:</strong> "${item.exemplar}"</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  updateEngagementGapResult() {
    const gapId = document.getElementById('engagement-gap-select')?.value || 'gap-bored';
    const resultBox = document.getElementById('engagement-gap-result-box');
    if (!resultBox) return;

    const gapData = ENGAGEMENT_GAPS_GAMIFICATION_DATASET.find(g => g.gapId === gapId);
    if (!gapData) return;

    resultBox.innerHTML = `
      <div style="background:var(--bg-card); border:2px solid var(--brand-primary); border-radius:var(--radius-md); padding:24px; box-shadow:var(--shadow-md);">
        <div style="background:rgba(239, 68, 68, 0.1); border-left:4px solid #EF4444; padding:14px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <strong style="color:#B91C1C; text-transform:uppercase; font-size:0.8rem;">Observed Classroom Gap:</strong>
          <h4 style="font-family:var(--font-heading); font-size:1.15rem; color:var(--text-primary); margin-top:2px;">${gapData.gapTitle}</h4>
          <p style="font-size:0.9rem; color:var(--text-secondary); margin-top:4px;">${gapData.observedBehavior}</p>
        </div>

        <div style="background:var(--bg-tertiary); border-left:4px solid var(--brand-primary); padding:16px; border-radius:var(--radius-sm); margin-bottom:20px;">
          <strong style="color:var(--brand-primary); text-transform:uppercase; font-size:0.8rem;">Gamified Solution & Mechanic:</strong>
          <h4 style="font-family:var(--font-heading); font-size:1.2rem; color:var(--text-primary); margin-top:2px;">${gapData.solutionTitle}</h4>
          <p style="font-size:0.95rem; color:var(--text-primary); margin-top:6px; line-height:1.5;">${gapData.solutionMechanic}</p>
        </div>

        <div class="prompt-box" style="margin-bottom:20px;">
          <strong style="color:var(--bright-accent-red); text-transform:uppercase; font-size:0.8rem;">Verbatim Teacher Launch Script:</strong>
          <p style="font-size:1.1rem; font-style:italic; margin-top:6px; color:#F7F5F2;">"${gapData.teacherScript}"</p>
        </div>

        <div style="margin-bottom:20px;">
          <strong style="color:var(--text-muted); text-transform:uppercase; font-size:0.8rem; display:block; margin-bottom:8px;">Aligned Video Game Analysis Card:</strong>
          <div class="game-card-display" style="padding:20px;">
            <span class="game-badge">Gamified Analysis</span>
            <h4 style="font-family:var(--font-heading); font-size:1.2rem; color:var(--bright-accent-red); margin-bottom:4px;">${gapData.cardRef.gameTerm}</h4>
            <p style="font-size:0.85rem; color:var(--off-white); margin-bottom:10px;"><strong>Literary Standard:</strong> ${gapData.cardRef.litTerm}</p>
            <p style="font-size:0.9rem; color:#D8D2C9;"><strong>Discussion Quest:</strong> "${gapData.cardRef.discussionQuestion}"</p>
          </div>
        </div>

        <div style="background:var(--charcoal); color:var(--off-white); padding:16px; border-radius:var(--radius-sm); border-top:3px solid var(--bright-accent-red);">
          <strong style="color:var(--bright-accent-red); font-size:0.85rem; text-transform:uppercase;">Actionable Classroom Routine:</strong>
          <p style="font-size:0.95rem; color:#E2DDD5; margin-top:4px;">${gapData.actionableRoutine}</p>
        </div>
      </div>
    `;
  }

  updateStrugglingPromptResult() {
    const selectedBand = document.getElementById('lexile-band-select')?.value || '400L – 650L';
    const resultBox = document.getElementById('struggling-prompt-result');
    if (!resultBox) return;

    const data = STRUGGLING_READER_PROMPTING_DATASET.find(b => b.lexileBand === selectedBand);
    if (!data) return;

    resultBox.innerHTML = data.items.map(item => `
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:18px;">
        <h4 style="font-family:var(--font-heading); color:var(--brand-primary); font-size:1.1rem; margin-bottom:4px;">${item.element}</h4>
        <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:12px;"><strong>Observed Student Error:</strong> ${item.studentError}</p>
        <div class="prompt-box" style="margin-top:0;">
          <strong style="color:var(--bright-accent-red); font-size:0.8rem; text-transform:uppercase;">Exact Teacher Launch Prompts:</strong>
          <ul>
            ${item.prompts.map(p => `<li>"${p}"</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // VIEW 5: RENDER PRINTABLE STUDIO
  renderPrintableStudio(printTab) {
    const container = document.getElementById('printable-studio-display');
    if (!container) return;

    if (printTab === 'print-master') {
      container.innerHTML = `
        <div class="print-master-poster">
          <div class="print-header-banner">
            <div class="print-logo-box">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="54" height="54">
                <path d="M15 45 C10 25 35 10 75 15 C85 30 80 50 65 60 L68 90 L50 75 C30 80 15 65 15 45 Z" fill="#AB3633"/>
                <polygon points="75,25 98,35 75,45" fill="#F59E0B"/>
                <path d="M60 25 Q70 30 65 42 Q50 40 60 25 Z" fill="#2B1F20"/>
                <circle cx="55" cy="30" r="4" fill="#FFFFFF"/>
              </svg>
              <div>
                <h1 class="print-master-title">East Central Middle School</h1>
                <p style="font-size:1.1rem; font-weight:700; color:var(--charcoal); text-transform:uppercase; letter-spacing:2px;">8 Literacy Mantras Master Framework</p>
              </div>
            </div>
            <div style="text-align:right;">
              <span class="hero-badge" style="background:var(--cardinal-red);">Tulsa Way & TLE Aligned</span>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:20px;">
            ${MANTRAS_DATA.map(m => `
              <div style="border:2px solid var(--cardinal-red); border-radius:var(--radius-sm); padding:16px; background:#FFFFFF;">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                  <span class="mantra-number" style="width:28px; height:28px; font-size:0.9rem;">${m.id}</span>
                  <h3 style="font-family:var(--font-heading); font-size:1rem; font-weight:800; color:var(--cardinal-red);">${m.title}</h3>
                </div>
                <p style="font-size:0.85rem; font-style:italic; color:var(--charcoal); margin-bottom:8px;">"${m.quote}"</p>
                <div style="background:var(--off-white); padding:8px; border-radius:4px; font-size:0.8rem; color:var(--warm-gray);">
                  <strong>Script:</strong> "${m.verbatimTeacherScript}"
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (printTab === 'print-single-posters') {
      container.innerHTML = MANTRAS_DATA.map(m => `
        <div class="print-poster-card">
          <div class="print-poster-card-header">
            <div style="display:flex; align-items:center; gap:16px;">
              <span class="mantra-number" style="width:48px; height:48px; font-size:1.4rem;">${m.id}</span>
              <h2 class="print-poster-card-title">Mantra ${m.id}: ${m.title}</h2>
            </div>
            <span class="tulsa-badge tulsa-badge-content" style="font-size:0.85rem;">ECMS Literacy</span>
          </div>

          <div class="print-poster-artwork">
            ${m.iconSvg}
          </div>

          <p class="print-poster-quote">"${m.quote}"</p>

          <div class="print-poster-script-box">
            <strong style="color:var(--bright-accent-red); font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:4px;">Teacher Launch Command:</strong>
            <p style="font-size:1.2rem; font-weight:600; font-style:italic;">"${m.verbatimTeacherScript}"</p>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; border-top:2px solid var(--border-color); padding-top:12px; font-size:0.85rem; color:var(--text-muted);">
            <span>Tulsa Way: ${m.tulsaWayArea}</span>
            <span>TLE Rubric: Dim ${m.tleDimension.split(' ')[1] || '7'}</span>
            <span>East Central Middle School</span>
          </div>
        </div>
      `).join('');
    } else if (printTab === 'print-bilingual-cards') {
      container.innerHTML = `
        <div class="desk-cards-grid">
          ${BILINGUAL_DESK_CARDS_DATASET.map(card => `
            <div class="print-desk-card">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; border-bottom:2px solid var(--cardinal-red); padding-bottom:4px;">
                <h4 style="font-family:var(--font-heading); font-size:0.95rem; color:var(--cardinal-red); font-weight:800;">${card.title}</h4>
                <span style="font-size:0.7rem; font-weight:700; background:var(--brand-accent-glow); color:var(--cardinal-red); padding:2px 6px; border-radius:4px;">EN / ES</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:8px; font-size:0.8rem;">
                ${card.content.map(item => `
                  <div style="background:var(--off-white); padding:6px 8px; border-radius:4px; border-left:3px solid var(--cardinal-red);">
                    <div style="font-weight:700; color:var(--charcoal);">EN: "${item.en}"</div>
                    <div style="font-style:italic; color:var(--brand-dark); margin-top:2px;">ES: "${item.es}"</div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (printTab === 'print-leader-matrix') {
      container.innerHTML = `
        <div class="print-master-poster">
          <h2 style="font-family:var(--font-heading); color:var(--cardinal-red); margin-bottom:16px;">
            Tulsa Way & TLE Alignment Print Matrix
          </h2>
          <table class="crosswalk-table">
            <thead>
              <tr>
                <th>Mantra #</th>
                <th>Tulsa Way Area</th>
                <th>TLE Dimension</th>
                <th>Core Practice</th>
              </tr>
            </thead>
            <tbody>
              ${MANTRAS_DATA.map(m => `
                <tr>
                  <td><strong>Mantra ${m.id}</strong></td>
                  <td>${m.tulsaWayArea}</td>
                  <td>${m.tleDimension}</td>
                  <td>${m.shortTag}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  // PRESENTATION SLIDE DECK CONTROLLER
  setupPdSlidesData() {
    this.pdSlides = [
      {
        title: "ECMS Literacy Mantras Professional Development",
        content: `
          <h3 style="color:var(--bright-accent-red); margin-bottom:12px;">Transforming Middle School Instructional Culture</h3>
          <p>Welcome, East Central Middle School Leaders and Teachers! Today we launch our 8 Literacy Mantras framework aligned with StudySync, Inspire Science, Savvas, NatGeo ELD, the Tulsa Way Rubric (June 2025), and Tulsa Model TLE Rubric.</p>
        `
      },
      ...MANTRAS_DATA.map(m => ({
        title: `Mantra ${m.id}: ${m.title}`,
        content: `
          <p style="font-size:1.3rem; font-style:italic; color:var(--bright-accent-red); margin-bottom:20px;">"${m.quote}"</p>
          <div style="background:var(--warm-gray); padding:20px; border-radius:8px; border-left:4px solid var(--bright-accent-red); margin-bottom:20px;">
            <strong style="text-transform:uppercase; font-size:0.9rem; color:var(--off-white);">Verbatim Launch Script:</strong>
            <p style="font-size:1.2rem; font-style:italic; margin-top:6px; color:#FFFFFF;">"${m.verbatimTeacherScript}"</p>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; font-size:1rem;">
            <div><strong>Tulsa Way:</strong> ${m.tulsaWayArea}</div>
            <div><strong>TLE Dimension:</strong> ${m.tleDimension}</div>
          </div>
        `
      })),
      {
        title: "Middle School Struggling Reader Prompting Guide (Grades 6-8)",
        content: `
          <h3 style="color:var(--bright-accent-red); margin-bottom:12px;">Mantra 8 in Action: Diagnostic Prompting</h3>
          <p>Utilize exact teacher launch prompts tailored to middle school Lexile bands (400L through 1200L+) to address common reading error patterns during text passes and independent work.</p>
        `
      }
    ];
  }

  launchPdSlides() {
    this.currentSlideIndex = 0;
    this.showSlide(0);
    document.getElementById('slide-overlay').classList.add('active');
  }

  closePdSlides() {
    document.getElementById('slide-overlay').classList.remove('active');
  }

  showSlide(index) {
    if (index < 0 || index >= this.pdSlides.length) return;
    this.currentSlideIndex = index;
    const slide = this.pdSlides[index];

    document.getElementById('slide-number-badge').textContent = `Slide ${index + 1} of ${this.pdSlides.length}`;
    document.getElementById('slide-title').textContent = slide.title;
    document.getElementById('slide-body').innerHTML = slide.content;
  }

  nextSlide() {
    if (this.currentSlideIndex < this.pdSlides.length - 1) {
      this.showSlide(this.currentSlideIndex + 1);
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.showSlide(this.currentSlideIndex - 1);
    }
  }
}

// Instantiate global app instance
const app = new MantrasApp();

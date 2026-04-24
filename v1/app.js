// ============================================================
// Naksh Tennis Development — Elite Pathway Analysis (app.js)
// ============================================================

// --- DATA ---

const elitePlayers = [
    {
        name: "Novak Djokovic",
        age: "Age 6–10",
        accent: "#a3e635",
        coach: "Jelena Genčić",
        coachDetail: "Discovered him at age 6. Coached him for 6 years with iron discipline.",
        focus: ["Discipline", "Work ethic", "Resilience under hardship"],
        lesson: "A single dedicated mentor with unwavering consistency — even in impossible conditions — is more valuable than any academy."
    },
    {
        name: "Roger Federer",
        age: "Age 8–12",
        accent: "#38bdf8",
        coach: "Peter Carter & Adolf Kacovsky",
        coachDetail: "Joined a regional group at 8, then added weekly private coaching at 10.",
        focus: ["Multi-sport base", "Technique refinement", "Delayed specialization"],
        lesson: "Federer played soccer, basketball, and badminton until age 12. His athletic diversity built the footwork that defined his career."
    },
    {
        name: "Rafael Nadal",
        age: "Age 3–10",
        accent: "#fbbf24",
        coach: "Toni Nadal (uncle)",
        coachDetail: "1:1 coaching from age 3. Never left Mallorca — stayed local, trained intensely.",
        focus: ["Footwork (box drill)", "Consistency", "Mental toughness"],
        lesson: "Toni's approach: master 1,000 forehands before learning a new shot. Repetition over variety at young ages."
    },
    {
        name: "Carlos Alcaraz",
        age: "Age 4–10",
        accent: "#a78bfa",
        coach: "Father & Kiko Navarro",
        coachDetail: "Trained at his father's academy. Known as a prodigy with 'natural tennis' at 8.",
        focus: ["Visual sharpness", "Reaction speed", "Net approach (age 8!)"],
        lesson: "Advanced tactical play was introduced early because his technical foundation was solid. Technique first, then tactics."
    },
    {
        name: "Coco Gauff",
        age: "Age 6–10",
        accent: "#f472b6",
        coach: "Corey Gauff (father) & Sly Black",
        coachDetail: "2 hrs/day by age 7. Movement specialist (Jeff Drock) added at age 8.",
        focus: ["Serve mechanics (throwing drill)", "Cone drills", "No heavy weights"],
        lesson: "Her parents deliberately limited tournament play to focus on fed-ball drills and movement training. Process over results."
    }
];

const coaches = [
    {
        id: "camilo",
        name: "Coach Camilo",
        type: "Current",
        typeClass: "type-current",
        cost: "$65/class",
        costPerHour: "$65/hr",
        schedule: "Sat 10 AM",
        format: "Private (1:1)",
        ratio: "1:1",
        reliability: { text: "Low — Missed Many Classes", class: "warn" },
        style: "Laidback / Drill-Based",
        scores: { technical: 7, tactical: 4, physical: 3, mental: 3, overall: 4.3 },
        pros: ["Strong drill methodology", "Good coaching style", "Individual attention when present"],
        cons: ["Frequently misses classes", "Laidback — lacks urgency", "No competitive pathway"],
        verdict: "Good coach, poor investment. Unreliability destroys the compounding effect of training. Djokovic's mentor Genčić never missed a session."
    },
    {
        id: "catalina",
        name: "Coach Catalin Gârd",
        type: "Current / High-Target",
        typeClass: "type-current",
        recommended: true,
        cost: "$120/hr (Private)",
        costPerHour: "$120/hr",
        schedule: "40m Commute",
        format: "Private (1:1) or Semi",
        ratio: "1:1",
        reliability: { text: "Elite Pedigree", class: "great" },
        style: "ATP Professional / Technical Mastery",
        scores: { technical: 10, tactical: 9, physical: 7, mental: 9, overall: 8.8 },
        pros: ["Former ATP #224 & NCAA #1 (Ole Miss)", "Beaten Grigor Dimitrov & Alexander Zverev", "Professional 'standard of excellence'", "College prep specialist"],
        cons: ["$120/hr is a premium investment", "40-minute commute each way (80 min total)", "Risk of burnout for 8-year-old due to logistics"],
        verdict: "With the new info that Catalin offers privates, he is the 'North Star.' His background is equivalent to a high-end European academy coach. If the commute is sustainable, this is the highest technical ceiling Naksh can access."
    },
    {
        id: "grant",
        name: "Coach Grant",
        type: "Alternative",
        typeClass: "type-alt",
        recommended: true,
        cost: "$100/1.5hr",
        costPerHour: "$67/hr",
        schedule: "Flexible",
        format: "Semi-Private (1:2)",
        ratio: "1:2",
        reliability: { text: "TBD — 1 class done", class: "great" },
        style: "Technique-Focused",
        scores: { technical: 8, tactical: 5, physical: 5, mental: 5, overall: 7.2 },
        pros: ["1:2 ratio — the gold standard for age 8", "Technique-first approach (like Toni Nadal)", "Peer motivation from matched 8-year-old", "15 min away — sustainable commute"],
        cons: ["Unknown coaching track record", "Only 1 class of data", "Need to evaluate long-term style"],
        verdict: "Highest potential. The 1:2 semi-private model mirrors how Federer, Gauff, and Alcaraz trained. Technique focus at this age is exactly what USTA recommends. Give him 8–10 sessions to evaluate."
    },
    {
        id: "desmond",
        name: "Coach Desmond",
        type: "Alternative",
        typeClass: "type-alt",
        cost: "TBD",
        costPerHour: "TBD",
        schedule: "TBD",
        format: "Team / Tournament",
        ratio: "Team-based",
        reliability: { text: "TBD", class: "great" },
        style: "Competitive / Match Play",
        scores: { technical: 4, tactical: 7, physical: 6, mental: 8, overall: 6.3 },
        pros: ["Team integration — social development", "Tournament exposure builds tennis IQ", "Exactly the 'match play' pillar Naksh is missing", "Cambridge community base"],
        cons: ["Unknown coaching quality", "Team format may dilute individual focus", "Cost unknown"],
        verdict: "The missing piece. Every elite player transitioned from drills to competitive play by age 8–9. Desmond's team format is how Nadal and Djokovic built their mental game. Use for match play, not technique."
    },
    {
        id: "alpha",
        name: "Alpha Tennis Academy",
        type: "Academy",
        typeClass: "type-academy",
        cost: "Premium",
        costPerHour: "Varies",
        schedule: "Full System",
        format: "High-Performance Academy",
        ratio: "Systemic",
        reliability: { text: "Proven Results", class: "good" },
        style: "The 'Factory' System",
        scores: { technical: 7, tactical: 8, physical: 8, mental: 8, overall: 7.8 },
        pros: ["Produced elite players like Trent Bryde & Lauren Herring", "Infrastructure: Fitness, mental, & strategy in one place", "Competitive density: Surrounded by kids slightly better", "Clear pathway to college commitments"],
        cons: ["Individual attention is lower than a private master (Gard)", "Higher risk of 'assembly line' coaching", "Cost/Logistics of full-time academy"],
        verdict: "Alpha is a 'system.' It's ranked high because it has produced regional and national champions (Trent Bryde). However, compared to a 1:1 with an ATP pro (Gard), Alpha is where you go for 'competitive volume' after the foundation is set."
    }
];

const phases = [
    {
        phase: "Phase 1 — The Technical Build",
        title: "Foundation & Pedigree",
        timeline: "Now → Age 9",
        items: [
            "<strong>Primary: Coach Grant (2x/week).</strong> Use the 1:2 ratio to hammer in technically sound grips and swing paths. This is the 'Toni Nadal' phase.",
            "<strong>Supplementary: Catalin Gârd (2x/week).</strong> Use this for 'intensity density.' Being around an ATP-level presence builds subconscious standard setting.",
            "<strong>Trial: Coach Desmond.</strong> Start tournament team exposure. Match play is the crucible that tests Grant's technical work."
        ]
    },
    {
        phase: "Phase 2 — The Competitive Pivot",
        title: "Peer Density & Pressure",
        timeline: "Age 9 → 11",
        items: [
            "<strong>The Alpha Transition:</strong> As Naksh's technique stabilizes, move toward a high-performance academy environment.",
            "<strong>Why the pivot?</strong> Individual coaches (Grant/Catalin) eventually lack the 'bench depth' of 20+ kids at Naksh's exact level. Peer-to-peer competition is the #1 driver at this age.",
            "<strong>Maintain Private Check-ins:</strong> Use Catalin or Grant for 1:1 periodic technical maintenance while in the academy system."
        ]
    }
];

const schedule = [
    { day: "Mon", activity: "<strong>Movement</strong>Cone drills at home (15 min) + other sport", rest: false },
    { day: "Tue", activity: "<strong>Catalina</strong>Group reps & rallying ($17)", rest: false },
    { day: "Wed", activity: "<strong>Grant</strong>Semi-private technique (1.5hr, $100)", rest: false },
    { day: "Thu", activity: "<strong>Catalina</strong>Group reps & rallying ($17)", rest: false },
    { day: "Fri", activity: "<strong>Rest / Play</strong>Unstructured free play", rest: true },
    { day: "Sat", activity: "<strong>Grant</strong>Semi-private technique (1.5hr, $100)", rest: false },
    { day: "Sun", activity: "<strong>Desmond</strong>Team match play (TBD cost)", rest: false }
];

const costScenarios = [
    {
        name: "Current Path",
        tag: "tag-current",
        tagText: "Status Quo",
        total: "$396",
        best: false,
        items: [
            "Camilo: 4 Saturdays × $65 = $260",
            "Catalina: 8 sessions × $17 = $136",
            "Total tennis hours: ~5 hrs/week",
            "⚠️ Effective hours lower due to Camilo misses"
        ]
    },
    {
        name: "Optimal Hybrid",
        tag: "tag-optimal",
        tagText: "★ Recommended",
        total: "$1,070",
        best: true,
        items: [
            "Grant: 8 sessions × $100 = $800",
            "Catalina: 8 sessions × $17 = $136",
            "Desmond: ~4 sessions × est. $35 = $140",
            "Total tennis hours: ~8 hrs/week",
            "✓ Matches USTA age-8 guidelines exactly"
        ]
    },
    {
        name: "Premium (with Alpha)",
        tag: "tag-premium",
        tagText: "Future Goal",
        total: "$1,400+",
        best: false,
        items: [
            "Alpha Academy: est. $800–1000/mo",
            "Grant (1x supplemental): $400/mo",
            "Tournaments: ~$50–100/weekend",
            "Total tennis hours: ~10 hrs/week",
            "Best suited for ages 9–10+"
        ]
    }
];

const actions = [
    { title: "Book 4 sessions with Coach Grant", desc: "Commit to a month of semi-private lessons. Evaluate his technique correction methodology against Camilo's drills." },
    { title: "Contact Coach Desmond for a team trial", desc: "Ask about team schedules, costs, and the next tournament. Let Naksh experience competitive match play." },
    { title: "Notify Coach Camilo of schedule change", desc: "Respectfully communicate the shift. If he can guarantee 100% attendance, consider keeping him as a 1x/month check-in." },
    { title: "Keep Catalina for group volume", desc: "Her $17/class sessions are the best value for court time. Use them for rallying reps and peer-based play." },
    { title: "Visit Alpha Tennis Academy", desc: "Schedule an observation or trial class within the next 2 months. Understand their U10 program structure and costs." },
    { title: "Start home movement drills", desc: "10–15 minutes of cone drills (split step, crossover, recovery) 3x/week. YouTube 'Coco Gauff cone drills Jeff Drock' for examples." },
    { title: "Track progress monthly", desc: "Keep a simple journal: serves in (out of 10), rally count, tournament wins/losses. Data beats intuition." }
];

// --- RENDER FUNCTIONS ---

function renderElitePlayers() {
    const grid = document.getElementById('elite-grid');
    grid.innerHTML = elitePlayers.map(p => `
        <div class="elite-card" style="--card-accent:${p.accent}">
            <div class="elite-name">${p.name}</div>
            <div class="elite-age">${p.age}</div>
            <div class="elite-coach">Coach: <strong>${p.coach}</strong></div>
            <div class="elite-focus">${p.focus.map(f => `<em>${f}</em>`).join(' · ')}</div>
            <div class="elite-lesson">${p.lesson}</div>
        </div>
    `).join('');
}

function renderCoaches() {
    const grid = document.getElementById('coach-cards-grid');
    grid.innerHTML = coaches.map(c => {
        const scoreColor = c.scores.overall >= 7 ? 'var(--green)' : c.scores.overall >= 5 ? 'var(--amber)' : 'var(--red)';
        return `
        <div class="coach-card ${c.recommended ? 'recommended' : ''}" id="coach-${c.id}">
            <div class="card-top">
                <h3>${c.name}</h3>
                <span class="card-type ${c.typeClass}">${c.type}</span>
            </div>
            <div class="coach-meta">
                <div class="meta-item"><span class="lbl">Cost</span><span class="val">${c.cost}</span></div>
                <div class="meta-item"><span class="lbl">Format</span><span class="val">${c.format}</span></div>
                <div class="meta-item"><span class="lbl">Ratio</span><span class="val ${c.ratio === '1:2' ? 'good' : ''}">${c.ratio}</span></div>
                <div class="meta-item"><span class="lbl">Reliability</span><span class="val ${c.reliability.class}">${c.reliability.text}</span></div>
            </div>
            <div class="score-row">
                <span class="score-pill" style="background:var(--green-dim);color:var(--green)">Tech ${c.scores.technical}</span>
                <span class="score-pill" style="background:var(--blue-dim);color:var(--blue)">Tact ${c.scores.tactical}</span>
                <span class="score-pill" style="background:var(--amber-dim);color:var(--amber)">Phys ${c.scores.physical}</span>
                <span class="score-pill" style="background:var(--purple-dim);color:var(--purple)">Ment ${c.scores.mental}</span>
                <span class="score-pill" style="background:${scoreColor};color:var(--bg);font-weight:800">★ ${c.scores.overall}</span>
            </div>
            <div class="pros-cons">
                <div class="pros"><strong>Strengths</strong><ul>${c.pros.map(p => `<li>${p}</li>`).join('')}</ul></div>
                <div class="cons"><strong>Gaps</strong><ul>${c.cons.map(p => `<li>${p}</li>`).join('')}</ul></div>
            </div>
            <div class="coach-verdict">${c.verdict}</div>
        </div>`;
    }).join('');
}

function renderPhases() {
    const el = document.getElementById('strategy-phases');
    el.innerHTML = phases.map(p => `
        <div class="phase-card" data-phase="${p.phase}">
            <h3>${p.title}</h3>
            <div class="phase-timeline">📅 ${p.timeline}</div>
            <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
    `).join('');
}

function renderSchedule() {
    const el = document.getElementById('schedule-grid');
    el.innerHTML = schedule.map(s => `
        <div class="sched-day ${s.rest ? 'rest' : ''}">
            <div class="day-name">${s.day}</div>
            <div class="day-activity">${s.activity}</div>
        </div>
    `).join('');
}

function renderCosts() {
    const el = document.getElementById('cost-scenarios');
    el.innerHTML = costScenarios.map(c => `
        <div class="cost-card ${c.best ? 'best' : ''}">
            <h3>${c.name}</h3>
            <div class="cost-total">${c.total}<span style="font-size:.9rem;font-weight:400;color:var(--text-dim)">/mo</span></div>
            <ul class="cost-details">${c.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <span class="cost-tag ${c.tag}">${c.tagText}</span>
        </div>
    `).join('');
}

function renderActions() {
    const el = document.getElementById('action-list');
    el.innerHTML = actions.map((a, i) => `
        <div class="action-item">
            <div class="action-num">${i + 1}</div>
            <div class="action-body">
                <h4>${a.title}</h4>
                <p>${a.desc}</p>
            </div>
        </div>
    `).join('');
}

// --- ANIMATIONS ---

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.coach-card, .elite-card, .pillar-card, .phase-card, .cost-card, .action-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
}

// --- STICKY NAV HIGHLIGHT ---
function setupNavHighlight() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
}

// --- PILLAR BAR ANIMATION ---
function animatePillarBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.pillar-fill');
                if (fill) {
                    const target = fill.style.getPropertyValue('--fill');
                    fill.style.width = '0%';
                    requestAnimationFrame(() => {
                        fill.style.width = target;
                    });
                }
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.pillar-card').forEach(c => observer.observe(c));
}

// --- INIT ---
function init() {
    renderElitePlayers();
    renderCoaches();
    renderPhases();
    renderSchedule();
    renderCosts();
    renderActions();

    requestAnimationFrame(() => {
        animateOnScroll();
        setupNavHighlight();
        animatePillarBars();
    });
}

window.addEventListener('DOMContentLoaded', init);

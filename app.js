// ===== SKILLORA app.js =====

// ============================================================
// DATA
// ============================================================

const CAREERS = [
  { id:'data-analyst', cat:'data', icon:'📊', title:'Data Analyst',
    desc:'Menganalisis data untuk menghasilkan insight bisnis yang actionable. Berperan penting dalam pengambilan keputusan berbasis data.',
    salary:'Rp 7jt – 15jt/bulan', skills:['Python','SQL','Tableau','Statistics','Excel','Power BI'],
    hardSkills:['Python (Pandas, NumPy)','SQL & Database Management','Data Visualization (Tableau/Power BI)','Statistical Analysis','Excel Advanced'],
    softSkills:['Problem Solving','Komunikasi Data','Critical Thinking','Attention to Detail'],
    education:'S1 Statistika, Matematika, Informatika, atau bidang terkait',
    experience:'0-2 tahun (entry level), 2-5 tahun (mid level)' },
  { id:'data-scientist', cat:'data', icon:'🧪', title:'Data Scientist',
    desc:'Membangun model machine learning dan mengembangkan solusi AI untuk masalah bisnis kompleks.',
    salary:'Rp 12jt – 25jt/bulan', skills:['Python','Machine Learning','Deep Learning','SQL','Statistics','TensorFlow'],
    hardSkills:['Python (ML Libraries)','Machine Learning & Deep Learning','Feature Engineering','SQL & NoSQL','Cloud (AWS/GCP)'],
    softSkills:['Analytical Thinking','Research Mindset','Storytelling','Collaboration'],
    education:'S1/S2 Computer Science, Statistika, Matematika, atau bidang terkait',
    experience:'1-3 tahun (entry level), 3-7 tahun (senior)' },
  { id:'software-engineer', cat:'tech', icon:'💻', title:'Software Engineer',
    desc:'Merancang, membangun, dan memelihara sistem software yang scalable dan reliable.',
    salary:'Rp 8jt – 20jt/bulan', skills:['Java','Python','JavaScript','Git','Docker','REST API'],
    hardSkills:['OOP & Design Patterns','Algoritma & Data Struktur','Git & Version Control','REST API Development','Testing & CI/CD'],
    softSkills:['Problem Solving','Teamwork','Agile/Scrum','Komunikasi Teknis'],
    education:'S1 Teknik Informatika, Ilmu Komputer, atau bidang terkait',
    experience:'0-2 tahun (junior), 3-5 tahun (mid), 5+ tahun (senior)' },
  { id:'product-manager', cat:'business', icon:'📋', title:'Product Manager',
    desc:'Memimpin pengembangan produk dari ideasi hingga peluncuran, menghubungkan tim bisnis dan teknis.',
    salary:'Rp 15jt – 35jt/bulan', skills:['Product Strategy','Roadmapping','User Research','Agile','SQL','Figma'],
    hardSkills:['Product Roadmapping','User Research & Testing','Data Analysis (SQL/GA)','Wireframing','Agile/Scrum'],
    softSkills:['Leadership','Komunikasi','Prioritisasi','Stakeholder Management'],
    education:'S1 berbagai bidang (Bisnis, Teknik, Desain) – pengalaman lebih penting',
    experience:'2-4 tahun (associate PM), 4+ tahun (PM)' },
  { id:'ux-designer', cat:'design', icon:'🎨', title:'UX Designer',
    desc:'Merancang pengalaman pengguna yang intuitif dan memuaskan melalui riset dan desain iteratif.',
    salary:'Rp 8jt – 18jt/bulan', skills:['Figma','User Research','Wireframing','Prototyping','Usability Testing','Design System'],
    hardSkills:['Figma / Adobe XD','User Research Methods','Prototyping','Information Architecture','Usability Testing'],
    softSkills:['Empati','Komunikasi Visual','Kolaborasi','Curiosity'],
    education:'S1 Desain Grafis, DKV, Arsitektur, atau bidang terkait',
    experience:'0-2 tahun (junior), 2-5 tahun (mid)' },
  { id:'backend-dev', cat:'tech', icon:'⚙️', title:'Backend Developer',
    desc:'Membangun logika server, database, dan API yang menjadi tulang punggung aplikasi.',
    salary:'Rp 8jt – 18jt/bulan', skills:['Node.js','Java','Python','SQL','MongoDB','Docker'],
    hardSkills:['Server-side Programming (Node/Java/Go)','Database (SQL & NoSQL)','REST/GraphQL API','Docker & Kubernetes','Security Basics'],
    softSkills:['Problem Solving','Dokumentasi','Kolaborasi'],
    education:'S1 Teknik Informatika, Ilmu Komputer, atau self-taught',
    experience:'0-2 tahun (junior), 2-4 tahun (mid)' },
  { id:'frontend-dev', cat:'tech', icon:'🖥️', title:'Frontend Developer',
    desc:'Membangun tampilan dan interaksi antarmuka pengguna yang responsif dan performan.',
    salary:'Rp 7jt – 16jt/bulan', skills:['React','JavaScript','TypeScript','CSS','HTML','Git'],
    hardSkills:['React / Vue / Angular','JavaScript & TypeScript','HTML & CSS','State Management','Performance Optimization'],
    softSkills:['Perhatian pada Detail','Kreativitas','Kolaborasi dengan Desainer'],
    education:'S1 Teknik Informatika, DKV, atau self-taught',
    experience:'0-2 tahun (junior), 2-5 tahun (mid)' },
  { id:'ml-engineer', cat:'data', icon:'🤖', title:'ML Engineer',
    desc:'Membangun dan men-deploy model machine learning ke production environment.',
    salary:'Rp 15jt – 30jt/bulan', skills:['Python','TensorFlow','PyTorch','MLOps','Docker','Kubernetes'],
    hardSkills:['ML Frameworks (TF/PyTorch)','MLOps & Model Deployment','Python Advanced','Cloud ML Services','Data Pipeline'],
    softSkills:['Problem Solving','Kolaborasi','Riset Mindset'],
    education:'S1/S2 Computer Science, Data Science, atau bidang terkait',
    experience:'1-3 tahun (junior), 3+ tahun (senior)' },
  { id:'hr-specialist', cat:'business', icon:'👥', title:'HR Specialist',
    desc:'Mengelola proses rekrutmen, pengembangan karyawan, dan budaya organisasi.',
    salary:'Rp 6jt – 14jt/bulan', skills:['Rekrutmen','HRIS','Labour Law','Training & Development','Communication'],
    hardSkills:['Rekrutmen & Selection','HRIS Tools','Labour Law','Training Design','People Analytics'],
    softSkills:['Empati','Komunikasi','Organisasi','Networking'],
    education:'S1 Psikologi, Manajemen SDM, atau bidang terkait',
    experience:'0-2 tahun (junior), 2-5 tahun (mid)' },
  { id:'cyber-security', cat:'engineering', icon:'🔒', title:'Cybersecurity Analyst',
    desc:'Melindungi sistem dan data perusahaan dari ancaman siber dan serangan keamanan.',
    salary:'Rp 10jt – 25jt/bulan', skills:['Network Security','Penetration Testing','SIEM','Linux','Python','Cryptography'],
    hardSkills:['Network Security','Penetration Testing','SIEM Tools','Incident Response','Cryptography'],
    softSkills:['Analytical Thinking','Ketelitian','Etika Profesional'],
    education:'S1 Teknik Informatika, Ilmu Komputer, atau Teknik Elektro',
    experience:'0-2 tahun (SOC analyst), 3+ tahun (senior)' },
];

const SKILL_GAP_DATA = {
  'data-analyst': {
    score: 68, found: 8, developing: 4, missing: 3,
    categories: [
      { name:'Technical Skills', icon:'⚙️', pct:72, skills:[
        { name:'Python (Pandas, NumPy)', status:'found', pct:75, reason:'Terdeteksi di CV pada proyek "Analisis Dataset E-commerce"' },
        { name:'SQL & Database', status:'developing', pct:50, reason:'Disebutkan namun belum ada proyek konkret yang menunjukkan penggunaan advanced SQL' },
        { name:'Data Visualization', status:'found', pct:80, reason:'Terdeteksi: penggunaan Matplotlib & Seaborn pada proyek tugas besar' },
        { name:'Machine Learning Basics', status:'missing', pct:15, reason:'Tidak ditemukan dalam CV. Dibutuhkan untuk role ini.' },
        { name:'Excel Advanced', status:'found', pct:85, reason:'Disebutkan dalam skills section CV' },
      ]},
      { name:'Analytical Skills', icon:'🧠', pct:70, skills:[
        { name:'Statistical Analysis', status:'developing', pct:60, reason:'Pernah mengambil matkul Statistika, namun belum ada penerapan pada proyek nyata' },
        { name:'Problem Framing', status:'found', pct:70, reason:'Terlihat dari struktur proyek yang kamu cantumkan' },
        { name:'Data Storytelling', status:'developing', pct:45, reason:'Belum ada evidence presentasi data kepada stakeholder non-teknis' },
      ]},
      { name:'Tools & Platform', icon:'🛠️', pct:60, skills:[
        { name:'Tableau / Power BI', status:'missing', pct:10, reason:'Tidak ditemukan dalam CV. Tools visualisasi enterprise penting untuk role ini.' },
        { name:'Git & Version Control', status:'found', pct:90, reason:'Disebutkan dalam skills dan proyek' },
        { name:'Cloud (GCP/AWS)', status:'missing', pct:0, reason:'Tidak ditemukan. Semakin banyak perusahaan yang menggunakan cloud analytics.' },
      ]},
    ]
  },
  'data-scientist': {
    score: 52, found: 5, developing: 5, missing: 6,
    categories: [
      { name:'Machine Learning', icon:'🤖', pct:45, skills:[
        { name:'Supervised Learning', status:'developing', pct:40, reason:'Ada 1 proyek klasifikasi namun belum mendalam' },
        { name:'Deep Learning', status:'missing', pct:5, reason:'Tidak ditemukan dalam CV' },
        { name:'Feature Engineering', status:'developing', pct:35, reason:'Disebutkan secara tidak langsung dalam proyek' },
        { name:'Model Evaluation', status:'found', pct:65, reason:'Terdeteksi dari proyek tugas' },
      ]},
      { name:'Programming', icon:'💻', pct:70, skills:[
        { name:'Python Advanced', status:'found', pct:75, reason:'Penggunaan library ML terdeteksi' },
        { name:'R Programming', status:'missing', pct:0, reason:'Tidak ditemukan dalam CV' },
        { name:'SQL', status:'developing', pct:50, reason:'Dasar SQL ada, namun perlu window functions & CTEs' },
      ]},
    ]
  },
  'software-engineer': {
    score: 74, found: 10, developing: 3, missing: 2,
    categories: [
      { name:'Programming Languages', icon:'💻', pct:80, skills:[
        { name:'Java', status:'found', pct:80, reason:'Proyek OOP terdeteksi' },
        { name:'Python', status:'found', pct:75, reason:'Multiple proyek Python' },
        { name:'JavaScript', status:'developing', pct:50, reason:'Disebutkan, namun proyek masih sederhana' },
      ]},
      { name:'Software Engineering', icon:'⚙️', pct:70, skills:[
        { name:'Data Structures & Algorithms', status:'found', pct:85, reason:'Nilai matkul & proyek' },
        { name:'Design Patterns', status:'developing', pct:45, reason:'Belum banyak terlihat dalam proyek' },
        { name:'Testing & CI/CD', status:'missing', pct:10, reason:'Tidak ditemukan dalam CV' },
      ]},
    ]
  },
  'product-manager': {
    score: 45, found: 4, developing: 5, missing: 7,
    categories: [
      { name:'Product Skills', icon:'📋', pct:40, skills:[
        { name:'Product Roadmapping', status:'missing', pct:0, reason:'Tidak ditemukan' },
        { name:'User Research', status:'developing', pct:40, reason:'Ada pengalaman wawancara pengguna untuk tugas kuliah' },
        { name:'Agile/Scrum', status:'found', pct:60, reason:'Disebutkan dalam pengalaman organisasi' },
      ]},
    ]
  },
  'ux-designer': {
    score: 60, found: 6, developing: 4, missing: 4,
    categories: [
      { name:'Design Skills', icon:'🎨', pct:65, skills:[
        { name:'Figma', status:'found', pct:70, reason:'Digunakan dalam proyek desain' },
        { name:'User Research', status:'developing', pct:50, reason:'Pernah melakukan, namun belum formal' },
        { name:'Prototyping', status:'found', pct:65, reason:'Terdeteksi dari portofolio' },
        { name:'Usability Testing', status:'missing', pct:10, reason:'Tidak ditemukan' },
      ]},
    ]
  },
};

const COURSES = [
  { id:1, title:'Python for Data Analysis: Pandas & NumPy Masterclass', platform:'udemy', platformLabel:'Udemy',
    skills:['python','dataviz'], level:'intermediate', levelLabel:'Menengah',
    price:149000, priceLabel:'Rp 149.000', duration:'18 jam', rating:'4.7 ⭐',
    budgetCat:'low', color:'#7C3AED', desc:'Kuasai Pandas dan NumPy untuk manipulasi dan analisis data seperti profesional.' },
  { id:2, title:'SQL untuk Data Analyst: Dari Dasar hingga Advanced', platform:'dicoding', platformLabel:'Dicoding',
    skills:['sql'], level:'beginner', levelLabel:'Pemula',
    price:0, priceLabel:'Gratis', duration:'12 jam', rating:'4.5 ⭐',
    budgetCat:'free', color:'#06B6D4', desc:'Belajar SQL dari dasar, JOIN, subquery, window function, dan optimisasi query.' },
  { id:3, title:'Machine Learning A-Z: Python & R in Data Science', platform:'udemy', platformLabel:'Udemy',
    skills:['ml','python'], level:'intermediate', levelLabel:'Menengah',
    price:199000, priceLabel:'Rp 199.000', duration:'44 jam', rating:'4.6 ⭐',
    budgetCat:'low', color:'#8B5CF6', desc:'Kursus komprehensif ML mencakup supervised, unsupervised, dan reinforcement learning.' },
  { id:4, title:'Data Visualization with Tableau', platform:'coursera', platformLabel:'Coursera',
    skills:['dataviz'], level:'beginner', levelLabel:'Pemula',
    price:300000, priceLabel:'Rp 300.000', duration:'16 jam', rating:'4.8 ⭐',
    budgetCat:'mid', color:'#0891B2', desc:'Buat dashboard interaktif profesional dengan Tableau dari nol.' },
  { id:5, title:'Bangkit Academy: Machine Learning Path', platform:'bangkit', platformLabel:'Bangkit',
    skills:['ml','python','statistics'], level:'intermediate', levelLabel:'Menengah',
    price:0, priceLabel:'Gratis (Beasiswa)', duration:'6 bulan', rating:'4.9 ⭐',
    budgetCat:'free', color:'#10B981', desc:'Program Google Bangkit untuk machine learning engineering. Gratis dengan seleksi.' },
  { id:6, title:'Statistics for Data Science with Python', platform:'coursera', platformLabel:'Coursera',
    skills:['statistics','python'], level:'beginner', levelLabel:'Pemula',
    price:250000, priceLabel:'Rp 250.000', duration:'10 jam', rating:'4.4 ⭐',
    budgetCat:'mid', color:'#F59E0B', desc:'Fundamentals statistika: distribusi, hypothesis testing, regresi untuk data science.' },
  { id:7, title:'Belajar Data Visualization untuk Pemula', platform:'dicoding', platformLabel:'Dicoding',
    skills:['dataviz','python'], level:'beginner', levelLabel:'Pemula',
    price:0, priceLabel:'Gratis', duration:'8 jam', rating:'4.5 ⭐',
    budgetCat:'free', color:'#06B6D4', desc:'Visualisasi data dengan Matplotlib, Seaborn, dan Plotly. Dicoding Learning Path.' },
  { id:8, title:'Practical SQL Bootcamp – PostgreSQL', platform:'udemy', platformLabel:'Udemy',
    skills:['sql'], level:'intermediate', levelLabel:'Menengah',
    price:179000, priceLabel:'Rp 179.000', duration:'22 jam', rating:'4.7 ⭐',
    budgetCat:'low', color:'#7C3AED', desc:'SQL tingkat lanjut: stored procedures, triggers, indexing, dan query optimization.' },
  { id:9, title:'Deep Learning Specialization', platform:'coursera', platformLabel:'Coursera',
    skills:['ml'], level:'advanced', levelLabel:'Lanjutan',
    price:600000, priceLabel:'Rp 600.000/bulan', duration:'5 kursus', rating:'4.9 ⭐',
    budgetCat:'high', color:'#EF4444', desc:'Andrew Ng: Neural Networks, CNN, RNN, dan penerapan deep learning.' },
  { id:10, title:'UI/UX Design Fundamentals – Figma', platform:'youtube', platformLabel:'YouTube',
    skills:['figma'], level:'beginner', levelLabel:'Pemula',
    price:0, priceLabel:'Gratis', duration:'Playlist 20 video', rating:'4.6 ⭐',
    budgetCat:'free', color:'#F97316', desc:'Tutorial Figma dari nol: wireframe, prototype, dan design system.' },
  { id:11, title:'Java Programming Masterclass', platform:'udemy', platformLabel:'Udemy',
    skills:['java'], level:'intermediate', levelLabel:'Menengah',
    price:149000, priceLabel:'Rp 149.000', duration:'80 jam', rating:'4.6 ⭐',
    budgetCat:'low', color:'#7C3AED', desc:'Java dari dasar hingga OOP, data structures, collections, dan design patterns.' },
  { id:12, title:'Pengantar Data Science – IBM', platform:'coursera', platformLabel:'Coursera',
    skills:['python','statistics','dataviz'], level:'beginner', levelLabel:'Pemula',
    price:0, priceLabel:'Gratis (Audit)', duration:'11 jam', rating:'4.6 ⭐',
    budgetCat:'free', color:'#06B6D4', desc:'Konsep dasar data science, tools, dan workflow oleh IBM. Bisa audit gratis.' },
];

const ROADMAP_SKILLS = [
  { id:'sql', name:'SQL', status:'developing', priority:'Tinggi' },
  { id:'ml', name:'Machine Learning', status:'missing', priority:'Tinggi' },
  { id:'tableau', name:'Tableau / Power BI', status:'missing', priority:'Tinggi' },
  { id:'statistics', name:'Statistics', status:'developing', priority:'Sedang' },
  { id:'storytelling', name:'Data Storytelling', status:'developing', priority:'Sedang' },
  { id:'cloud', name:'Cloud Analytics', status:'missing', priority:'Rendah' },
];

const ROADMAP_PLANS = {
  sql: { month:1, title:'Kuasai SQL Tingkat Lanjut', desc:'Pelajari JOIN kompleks, window functions, CTE, dan query optimization', tags:['Dicoding SQL','Udemy SQL Bootcamp'] },
  ml: { month:3, title:'Pengantar Machine Learning', desc:'Mulai dengan supervised learning: regresi, klasifikasi, dan evaluasi model', tags:['Coursera ML','Bangkit Academy'] },
  tableau: { month:2, title:'Data Visualization Enterprise', desc:'Buat dashboard interaktif dengan Tableau atau Power BI untuk presentasi ke stakeholder', tags:['Coursera Tableau','YouTube Tutorial'] },
  statistics: { month:1, title:'Statistika Terapan untuk Data', desc:'Hypothesis testing, distribusi, dan statistika deskriptif untuk analisis data', tags:['Coursera Statistics','Khan Academy'] },
  storytelling: { month:2, title:'Komunikasi Data & Storytelling', desc:'Latih kemampuan presentasi temuan data kepada non-technical stakeholders', tags:['Latihan Presentasi','Portfolio Projects'] },
  cloud: { month:3, title:'Cloud Analytics Basics', desc:'Kenali Google BigQuery, AWS Athena, atau Azure Synapse untuk big data', tags:['GCP Free Tier','AWS Academy'] },
};

// ============================================================
// STATE
// ============================================================
let currentPage = 'dashboard';
let addedSkills = [];
let selectedPrioritySkills = ['sql','ml','tableau'];
let careerFilterCat = 'all';
let careerSearchQ = '';

// ============================================================
// NAVIGATION
// ============================================================
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.querySelector('[data-page="' + page + '"]');
  if (navEl) navEl.classList.add('active');
  currentPage = page;
  if (page === 'career-explore') renderCareers();
  if (page === 'skill-gap') renderSkillGap();
  if (page === 'roadmap') { renderPriorityPicker(); renderRoadmap(); }
  if (page === 'courses') filterCourses();
  if (page === 'dashboard') renderDashboard();
  // close sidebar on mobile
  if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('open');
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(item.dataset.page);
  });
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const skillsHtml = [
    { name:'Python', status:'found', pct:75 },
    { name:'SQL', status:'developing', pct:50 },
    { name:'Machine Learning', status:'missing', pct:15 },
    { name:'Data Visualization', status:'found', pct:80 },
    { name:'Statistics', status:'developing', pct:60 },
  ].map(s => `
    <div class="skill-bar">
      <div class="skill-bar-header">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-status ${s.status}">${
          s.status==='found' ? '✓ Found' : s.status==='developing' ? '~ Developing' : '✗ Not Found'
        }</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill-anim" style="width:${s.pct}%;background:${
          s.status==='found' ? 'linear-gradient(90deg,#06B6D4,#7C3AED)' :
          s.status==='developing' ? 'linear-gradient(90deg,#F59E0B,#EF4444)' :
          'linear-gradient(90deg,#EF4444,#7C3AED)'
        }"></div>
      </div>
    </div>
  `).join('');
  document.getElementById('dashSkillProgress').innerHTML = skillsHtml;
}

// ============================================================
// CAREER EXPLORE
// ============================================================
function renderCareers() {
  const q = document.getElementById('careerSearch') ? document.getElementById('careerSearch').value.toLowerCase() : '';
  let filtered = CAREERS.filter(c => {
    const matchQ = q === '' || c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.skills.some(s=>s.toLowerCase().includes(q));
    const matchCat = careerFilterCat === 'all' || c.cat === careerFilterCat;
    return matchQ && matchCat;
  });
  const grid = document.getElementById('careerGrid');
  if (!grid) return;
  grid.innerHTML = filtered.map(c => `
    <div class="career-card" onclick="showCareerDetail('${c.id}')">
      <div class="cc-top">
        <div class="cc-icon" style="background:rgba(99,102,241,0.15)">${c.icon}</div>
        <span class="cc-category">${c.cat.toUpperCase()}</span>
      </div>
      <div class="cc-title">${c.title}</div>
      <div class="cc-desc">${c.desc}</div>
      <div class="cc-skills">${c.skills.slice(0,4).map(s=>`<span class="skill-tag">${s}</span>`).join('')}${c.skills.length>4?`<span class="skill-tag">+${c.skills.length-4}</span>`:''}</div>
      <div class="cc-footer">
        <span class="cc-salary">💰 ${c.salary}</span>
        <span class="cc-arrow">→</span>
      </div>
    </div>
  `).join('') || '<div class="empty-state"><div class="es-icon">🔍</div><div class="es-title">Tidak ada posisi ditemukan</div><div class="es-desc">Coba kata kunci yang berbeda</div></div>';
}

function filterCareers() {
  renderCareers();
}

function filterCategory(cat, btn) {
  careerFilterCat = cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderCareers();
}

function showCareerDetail(id) {
  const c = CAREERS.find(x => x.id === id);
  if (!c) return;
  document.getElementById('careerModalBox').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
      <div style="font-size:36px">${c.icon}</div>
      <div>
        <div style="font-size:22px;font-weight:800;color:white">${c.title}</div>
        <div style="color:#94A3B8;font-size:14px;margin-top:4px">💰 ${c.salary}</div>
      </div>
    </div>
    <p style="color:#94A3B8;font-size:14px;line-height:1.7;margin-bottom:20px">${c.desc}</p>
    <div style="margin-bottom:18px">
      <div style="font-size:13px;font-weight:700;color:#06B6D4;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.08em">Hard Skills</div>
      ${c.hardSkills.map(s=>`<div style="font-size:13px;color:#F8FAFC;padding:6px 0;border-bottom:1px solid rgba(99,102,241,0.1)">✓ ${s}</div>`).join('')}
    </div>
    <div style="margin-bottom:18px">
      <div style="font-size:13px;font-weight:700;color:#8B5CF6;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.08em">Soft Skills</div>
      ${c.softSkills.map(s=>`<div style="font-size:13px;color:#F8FAFC;padding:6px 0;border-bottom:1px solid rgba(99,102,241,0.1)">◆ ${s}</div>`).join('')}
    </div>
    <div style="background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.2);border-radius:10px;padding:14px;margin-bottom:18px">
      <div style="font-size:12px;color:#94A3B8;margin-bottom:4px">📚 Pendidikan</div>
      <div style="font-size:13px;color:white">${c.education}</div>
    </div>
    <div style="background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.2);border-radius:10px;padding:14px;margin-bottom:24px">
      <div style="font-size:12px;color:#94A3B8;margin-bottom:4px">⏰ Pengalaman</div>
      <div style="font-size:13px;color:white">${c.experience}</div>
    </div>
    <div style="display:flex;gap:12px">
      <button class="btn btn-primary" style="flex:1" onclick="document.getElementById('sgPosition').value='${c.id}';navigateTo('skill-gap')">Cek Skill Gap Saya →</button>
      <button class="btn btn-outline" onclick="closeCareerModal()">Tutup</button>
    </div>
  `;
  document.getElementById('careerModal').classList.add('show');
}

function closeCareerModal(e) {
  if (!e || e.target === document.getElementById('careerModal')) {
    document.getElementById('careerModal').classList.remove('show');
  }
}

// ============================================================
// PROFILE MATCHING
// ============================================================
function addSkill() {
  const input = document.getElementById('skillInput');
  const val = input.value.trim();
  if (!val) return;
  addedSkills.push(val);
  renderSkillTags();
  input.value = '';
}

function removeSkill(idx) {
  addedSkills.splice(idx, 1);
  renderSkillTags();
}

function renderSkillTags() {
  document.getElementById('skillTags').innerHTML = addedSkills.map((s,i) => `
    <span class="skill-tag-added">${s}<span class="tag-remove" onclick="removeSkill(${i})">✕</span></span>
  `).join('');
}

function runProfileMatch() {
  const position = document.getElementById('pm-position').value;
  const name = document.getElementById('pm-name').value || 'Kamu';
  const major = document.getElementById('pm-major').value || '-';
  if (!position) { alert('Pilih posisi karier target terlebih dahulu!'); return; }

  const data = SKILL_GAP_DATA[position] || SKILL_GAP_DATA['data-analyst'];
  const career = CAREERS.find(c => c.id === position);
  const score = data.score;
  const tier = score >= 80 ? 'Sangat Siap' : score >= 60 ? 'Cukup Siap' : score >= 40 ? 'Perlu Persiapan' : 'Masih Tahap Awal';
  const color = score >= 80 ? '#10B981' : score >= 60 ? '#06B6D4' : score >= 40 ? '#F59E0B' : '#EF4444';

  const allSkills = data.categories.flatMap(c => c.skills).slice(0, 8);

  document.getElementById('matchResult').innerHTML = `
    <div class="match-result-header">
      <div class="match-score-big" style="-webkit-text-fill-color:${color};color:${color}">${score}%</div>
      <div style="font-size:16px;font-weight:700;color:white;margin:8px 0 4px">${tier}</div>
      <div style="color:#94A3B8;font-size:13px">Kecocokan profil ${name} dengan posisi ${career?.title || position}</div>
    </div>
    <div class="match-items">
      ${allSkills.map(s => `
        <div class="match-item ${s.status === 'found' ? 'hit' : s.status === 'developing' ? 'dev' : 'miss'}">
          <div class="mi-icon">${s.status === 'found' ? '✅' : s.status === 'developing' ? '⚠️' : '❌'}</div>
          <div>
            <div class="mi-name">${s.name}</div>
            <div class="mi-note">${s.reason}</div>
          </div>
          <span class="sbadge ${s.status}" style="margin-left:auto;white-space:nowrap">${
            s.status==='found' ? 'Found' : s.status==='developing' ? 'Developing' : 'Not Found'
          }</span>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:20px;display:flex;gap:10px">
      <button class="btn btn-primary" style="flex:1" onclick="navigateTo('skill-gap')">Lihat Detail Skill Gap →</button>
    </div>
  `;
}

// ============================================================
// CV UPLOAD
// ============================================================
function handleDrop(e) {
  e.preventDefault();
  document.getElementById('dropZone').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) processFile(file);
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) processFile(file);
}

function processFile(file) {
  if (file.size > 5 * 1024 * 1024) { alert('Ukuran file maksimal 5MB!'); return; }
  const allowed = ['.pdf','.doc','.docx'];
  const ext = '.' + file.name.split('.').pop().toLowerCase();
  if (!allowed.includes(ext)) { alert('Format file tidak didukung. Gunakan PDF, DOC, atau DOCX.'); return; }

  document.getElementById('dropZone').style.display = 'none';
  document.getElementById('uploadProgress').style.display = 'block';
  document.getElementById('upFileName').textContent = file.name;
  document.getElementById('upFileSize').textContent = (file.size / 1024).toFixed(0) + ' KB';
  document.getElementById('upStatus').textContent = '⏳';
  document.getElementById('upStatusText').textContent = 'Membaca CV...';
  document.getElementById('uploadTips').style.display = 'none';

  let progress = 0;
  const bar = document.getElementById('upBar');
  const statusTexts = ['Membaca CV...','Mengekstrak informasi...','Menganalisis skill...','Membandingkan dengan benchmark...','Selesai!'];
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress >= 100) { progress = 100; clearInterval(interval); showCVResult(file.name); }
    bar.style.width = progress + '%';
    const si = Math.floor((progress / 100) * (statusTexts.length - 1));
    document.getElementById('upStatusText').textContent = statusTexts[Math.min(si, statusTexts.length-1)];
  }, 400);
}

function showCVResult(filename) {
  document.getElementById('upStatus').textContent = '✅';
  document.getElementById('upStatusText').textContent = 'CV berhasil dianalisis!';
  document.getElementById('cvInfoPanel').style.display = 'block';
  document.getElementById('cvExtracted').innerHTML = `
    <div class="cv-info-item"><span class="cvi-label">Nama File</span><span class="cvi-val">${filename}</span></div>
    <div class="cv-info-item"><span class="cvi-label">Pendidikan</span><span class="cvi-val">S1 Teknik Informatika</span></div>
    <div class="cv-info-item"><span class="cvi-label">Pengalaman</span><span class="cvi-val">2 Proyek, 1 Organisasi</span></div>
    <div class="cv-info-item"><span class="cvi-label">Skills Terdeteksi</span>
      <span class="cvi-val">
        <span class="cvi-tag">Python</span><span class="cvi-tag">SQL</span>
        <span class="cvi-tag">Git</span><span class="cvi-tag">Pandas</span>
        <span class="cvi-tag">Matplotlib</span><span class="cvi-tag">Excel</span>
      </span>
    </div>
    <div class="cv-info-item"><span class="cvi-label">Sertifikasi</span><span class="cvi-val">Google Data Analytics (in progress)</span></div>
  `;
}

// ============================================================
// SKILL GAP
// ============================================================
function renderSkillGap() {
  const pos = document.getElementById('sgPosition') ? document.getElementById('sgPosition').value : 'data-analyst';
  const data = SKILL_GAP_DATA[pos] || SKILL_GAP_DATA['data-analyst'];
  document.getElementById('sgScore').textContent = data.score + '%';
  document.getElementById('sgFound').textContent = data.found;
  document.getElementById('sgDev').textContent = data.developing;
  document.getElementById('sgMiss').textContent = data.missing;
  const tier = data.score >= 80 ? 'Sangat Siap' : data.score >= 60 ? 'Cukup Siap' : data.score >= 40 ? 'Perlu Persiapan' : 'Masih Tahap Awal';
  document.getElementById('sgInterp').textContent = `${tier} — ${data.score >= 60 ? 'Perlu pengembangan di beberapa area kunci' : 'Fokus kembangkan skill teknis inti terlebih dahulu'}`;

  document.getElementById('skillCategories').innerHTML = (data.categories || []).map((cat, ci) => `
    <div class="skill-cat">
      <div class="cat-header ${ci===0?'open':''}" onclick="toggleCat(this)">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${cat.name}</span>
        <div class="cat-progress-mini">
          <span class="cat-pct">${cat.pct}%</span>
          <div class="cat-bar-mini"><div class="cat-fill-mini" style="width:${cat.pct}%"></div></div>
        </div>
        <span class="cat-chevron">›</span>
      </div>
      <div class="cat-skills ${ci===0?'open':''}">
        ${cat.skills.map(s => `
          <div class="sg-skill-item">
            <div class="sg-status-dot ${s.status}"></div>
            <div style="flex:1">
              <div class="sg-name">${s.name}</div>
              <div class="sg-reason">${s.reason}</div>
            </div>
            <div class="sg-bar-wrap">
              <div class="sg-bar"><div class="sg-bar-fill" style="width:${s.pct}%;background:${
                s.status==='found' ? 'linear-gradient(90deg,#06B6D4,#10B981)' :
                s.status==='developing' ? 'linear-gradient(90deg,#F59E0B,#EF4444)' : '#EF4444'
              }"></div></div>
            </div>
            <span class="sg-pct ${s.status}">${s.pct}%</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function toggleCat(header) {
  header.classList.toggle('open');
  const skills = header.nextElementSibling;
  skills.classList.toggle('open');
}

// ============================================================
// ROADMAP
// ============================================================
function renderPriorityPicker() {
  document.getElementById('prioritySkills').innerHTML = ROADMAP_SKILLS.map(s => `
    <button class="pskill-btn ${selectedPrioritySkills.includes(s.id)?'selected':''} ${s.status+'-skill'}"
      onclick="togglePriority('${s.id}',this)">
      ${s.status==='missing'?'❌':s.status==='developing'?'⚠️':'✅'} ${s.name}
      <span style="font-size:10px;margin-left:4px;opacity:0.7">${s.priority}</span>
    </button>
  `).join('');
}

function togglePriority(id, btn) {
  const idx = selectedPrioritySkills.indexOf(id);
  if (idx > -1) selectedPrioritySkills.splice(idx, 1);
  else selectedPrioritySkills.push(id);
  btn.classList.toggle('selected');
  document.getElementById('rmSkillCount').textContent = selectedPrioritySkills.length + ' Skill';
}

function renderRoadmap() {
  const byMonth = {};
  selectedPrioritySkills.forEach(sid => {
    const plan = ROADMAP_PLANS[sid];
    if (!plan) return;
    const m = 'Bulan ' + plan.month;
    if (!byMonth[m]) byMonth[m] = [];
    byMonth[m].push({ ...plan, skillId: sid });
  });
  const sorted = Object.keys(byMonth).sort();
  document.getElementById('roadmapTimeline').innerHTML = sorted.length === 0 ?
    '<div class="empty-state"><div class="es-icon">🗺️</div><div class="es-title">Pilih skill di atas untuk generate roadmap</div></div>' :
    sorted.map(month => `
      <div class="rm-month">
        <div class="rm-month-label">${month}</div>
        <div class="rm-month-dot"></div>
        <div class="rm-month-content">
          ${byMonth[month].map(t => `
            <div class="rm-task">
              <div class="rm-task-title">📌 ${t.title}</div>
              <div class="rm-task-desc">${t.desc}</div>
              <div class="rm-task-tags">${t.tags.map(tag=>`<span class="rm-tag">${tag}</span>`).join('')}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  document.getElementById('rmSkillCount').textContent = selectedPrioritySkills.length + ' Skill';
}

// ============================================================
// COURSES
// ============================================================
function filterCourses() {
  const skill = document.getElementById('cfSkill')?.value || 'all';
  const budget = document.getElementById('cfBudget')?.value || 'all';
  const level = document.getElementById('cfLevel')?.value || 'all';
  const platform = document.getElementById('cfPlatform')?.value || 'all';

  let filtered = COURSES.filter(c => {
    const mSkill = skill === 'all' || c.skills.includes(skill);
    const mBudget = budget === 'all' || c.budgetCat === budget;
    const mLevel = level === 'all' || c.level === level;
    const mPlatform = platform === 'all' || c.platform === platform;
    return mSkill && mBudget && mLevel && mPlatform;
  });

  document.getElementById('courseCount').innerHTML = `Menampilkan <span>${filtered.length}</span> kursus`;
  document.getElementById('courseGrid').innerHTML = filtered.map(c => `
    <div class="course-card">
      <div class="course-platform-bar" style="background:${c.color}"></div>
      <div class="course-body">
        <div class="course-meta-top">
          <span class="course-platform">${c.platformLabel}</span>
          <span class="course-level">${c.levelLabel}</span>
        </div>
        <div class="course-title">${c.title}</div>
        <div class="course-skill-tags">${c.skills.map(s=>`<span class="course-skill-tag">${s.toUpperCase()}</span>`).join('')}</div>
        <div style="font-size:12px;color:#94A3B8;margin-bottom:14px;line-height:1.5">${c.desc}</div>
        <div class="course-footer">
          <div>
            <div class="course-price ${c.price===0?'free':''}">${c.priceLabel}</div>
            <div class="course-duration">⏱ ${c.duration}</div>
          </div>
          <div class="course-rating">${c.rating}</div>
        </div>
      </div>
    </div>
  `).join('') || '<div class="empty-state" style="grid-column:1/-1"><div class="es-icon">📚</div><div class="es-title">Tidak ada kursus ditemukan</div><div class="es-desc">Coba ubah filter</div></div>';
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  // Animate donut on load
  setTimeout(() => {
    const donut = document.getElementById('donutFill');
    if (donut) donut.style.strokeDasharray = '204 97';
  }, 300);
});

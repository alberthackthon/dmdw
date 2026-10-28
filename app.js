/**
 * Main Application Logic for Data Mining & Warehousing Master Academy
 * Renders all 10 Modules, Interactive SVG Diagrams, Math Expressions via KaTeX,
 * Search, Progress tracking, and Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderAllModules();
  renderFormulaVault();
  initProgressTracker();
  initSearch();
  initKaTeX();
  
  // Initialize embedded simulators
  renderConfusionCalculator();
  renderNormalizationCalculator();
  renderMarketBasketCalculator();
  if (typeof renderDecisionTreeExplorer === 'function') renderDecisionTreeExplorer();
  if (typeof renderOLAPSimulator === 'function') renderOLAPSimulator();
  initSimulations();
});

/**
 * Render all 10 Sequential Modules
 */
function renderAllModules() {
  DMDW_MODULES.forEach(mod => {
    const el = document.getElementById(mod.id);
    if (!el) return;

    // Build SVG Diagram specific to this module
    const svgDiagram = getModuleSVG(mod.id);

    // Build embedded simulation widget if applicable
    let simWidget = "";
    if (mod.id === 'mod3') {
      simWidget = `<div id="norm-sim-container" class="mt-8"></div>`;
    } else if (mod.id === 'mod6') {
      simWidget = `<div id="olap-sim-container" class="mt-8"></div>`;
    } else if (mod.id === 'mod7') {
      simWidget = `<div id="basket-sim-container" class="mt-8"></div>`;
    } else if (mod.id === 'mod8') {
      simWidget = `<div id="dt-sim-container" class="mt-8"></div>`;
    } else if (mod.id === 'mod9') {
      simWidget = `<div id="confusion-sim-container" class="mt-8"></div>`;
    } else if (mod.id === 'mod11') {
      simWidget = `<div id="kmeans-sim-container" class="mt-8"></div>`;
    }

    el.innerHTML = `
      <div class="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl transition-all duration-300">
        
        <!-- Module Header -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div class="flex items-center space-x-4">
            <span class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              ${mod.num}
            </span>
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-mono font-bold uppercase tracking-wider text-${mod.color}-400">Module ${mod.num}</span>
                <span class="text-slate-600">•</span>
                <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${mod.badge}</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">${mod.title}</h2>
            </div>
          </div>
          <button onclick="flipCard('${mod.id}-card')" class="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700 transition flex items-center space-x-1.5">
            <span>🔄 Quick Revision Card</span>
          </button>
        </div>

        <p class="text-xs sm:text-sm text-slate-400 mt-2 font-mono">${mod.subtitle}</p>

        <!-- Real Life Analogy Box -->
        <div class="mt-6 p-5 rounded-2xl analogy-badge">
          <div class="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1.5">
            <span>💡 Real-Life Analogy:</span>
            <span>${mod.analogy.title}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${mod.analogy.text}</p>
        </div>

        <!-- Sequential Detailed Theory Sections -->
        <div class="mt-8 space-y-6">
          ${mod.theory.map(t => `
            <div class="theory-block">
              <h3 class="text-base sm:text-lg font-bold text-slate-100 flex items-center space-x-2 mb-2">
                <span class="w-2 h-2 rounded-full bg-${mod.color}-400"></span>
                <span>${t.heading}</span>
              </h3>
              <div class="pl-4 border-l-2 border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                ${t.content}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Visual Architecture / Flowchart SVG Diagram -->
        <div class="mt-8 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
          <div class="flex items-center justify-between mb-3 text-xs">
            <span class="font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <span>📐</span> Architectural Flowchart & Visual Concept Map
            </span>
            <span class="text-slate-500 font-mono text-[11px]">Interactive SVG Diagram</span>
          </div>
          <div class="overflow-x-auto py-2 flex justify-center">
            ${svgDiagram}
          </div>
        </div>

        <!-- Key Formula Cards -->
        <div class="mt-8">
          <h4 class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>📐</span> Core Mathematical Formula Cards
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            ${mod.formulas.map(f => `
              <div class="p-4 rounded-xl math-badge">
                <div class="text-xs font-bold text-indigo-300 mb-1">${f.name}</div>
                <div class="overflow-x-auto py-1 font-mono text-xs text-white">
                  $$${f.expr}$$
                </div>
                <div class="text-[11px] text-slate-400 mt-1">${f.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Step-by-Step Solved Problem From Slides -->
        <div class="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800">
          <div class="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
            <span>📝 Step-by-Step Solved Numerical Problem</span>
          </div>
          <h4 class="text-sm font-bold text-white mb-2">${mod.solvedExample.title}</h4>
          <p class="text-xs text-slate-300 bg-slate-800/60 p-3 rounded-lg border border-slate-700/60 mb-4">${mod.solvedExample.problem}</p>
          <div class="space-y-2.5 text-xs text-slate-300">
            ${mod.solvedExample.steps.map(step => `
              <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 leading-relaxed">
                ${step}
              </div>
            `).join('')}
          </div>

          <!-- Additional Solved Problems from deep dataset -->
          ${(typeof DMDW_DEEP_PROBLEMS !== 'undefined' && DMDW_DEEP_PROBLEMS[mod.id]) ? `
            <div class="mt-6 pt-4 border-t border-slate-800 space-y-3">
              <div class="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>📚</span> More Slide-Exact Solved Exercises
              </div>
              ${DMDW_DEEP_PROBLEMS[mod.id].map((dp, idx) => `
                <details class="group bg-slate-900/90 rounded-xl border border-slate-800 p-3 transition">
                  <summary class="cursor-pointer font-bold text-xs text-slate-200 group-hover:text-cyan-300 flex justify-between items-center list-none">
                    <span>${dp.title}</span>
                    <span class="text-slate-500 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="mt-3 text-xs text-slate-300 space-y-2 border-t border-slate-800/60 pt-2 leading-relaxed">
                    <div class="text-slate-400 bg-slate-950/60 p-2.5 rounded border border-slate-800/80">${dp.problem}</div>
                    <div class="pt-1">${dp.solution}</div>
                  </div>
                </details>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Embedded Interactive Simulator (if applicable) -->
        ${simWidget}

        <!-- 3D Flip Revision Flashcard -->
        <div class="mt-8 pt-6 border-t border-slate-800/80 flex flex-col items-center">
          <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Module Revision Flashcard</div>
          <div id="${mod.id}-card" class="relative w-full max-w-lg h-44 cursor-pointer perspective-1000" onclick="flipCard('${mod.id}-card')">
            <div class="card-inner w-full h-full relative transition-transform duration-500 transform-style-preserve-3d rounded-2xl border border-slate-700 shadow-xl">
              <!-- Front -->
              <div class="card-front absolute inset-0 bg-slate-800 rounded-2xl p-5 flex flex-col justify-between backface-hidden">
                <div class="flex justify-between items-center text-xs text-indigo-400 font-mono">
                  <span>FLASHCARD #${mod.num}</span>
                  <span class="text-slate-400">Click to Flip 🔄</span>
                </div>
                <div class="text-center">
                  <h4 class="text-base font-bold text-white">${mod.revisionCard.front}</h4>
                  <p class="text-xs text-slate-400 mt-2">Test your memory before flipping!</p>
                </div>
                <div class="text-[10px] text-center text-slate-500">Tap to reveal key summary points</div>
              </div>
              <!-- Back -->
              <div class="card-back absolute inset-0 bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 rounded-2xl p-5 flex flex-col justify-between backface-hidden rotate-y-180">
                <div class="flex justify-between items-center text-xs text-emerald-400 font-mono">
                  <span>KEY REVISION TAKEAWAY</span>
                  <span class="text-slate-400">Click to Flip 🔄</span>
                </div>
                <div class="text-xs text-slate-200 leading-relaxed">
                  ${mod.revisionCard.back}
                </div>
                <div class="text-[10px] text-right text-emerald-400/80 font-mono">Exam Gold ✓</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;
  });
}

/**
 * Generates custom SVG architectural flowcharts for each module
 */
function getModuleSVG(id) {
  switch (id) {
    case 'mod2': // Skewed distributions & Boxplot Anatomy
      return `
        <svg viewBox="0 0 720 200" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Boxplot -->
          <line x1="60" y1="50" x2="160" y2="50" stroke="#6366f1" stroke-width="2" stroke-dasharray="4"/>
          <line x1="60" y1="35" x2="60" y2="65" stroke="#6366f1" stroke-width="2"/>
          <text x="60" y="25" fill="#94a3b8" text-anchor="middle" font-size="10">Lower Fence</text>
          
          <rect x="160" y="30" width="220" height="40" fill="#312e81" stroke="#6366f1" stroke-width="2" rx="4"/>
          <line x1="260" y1="30" x2="260" y2="70" stroke="#ec4899" stroke-width="3"/>
          <text x="160" y="85" fill="#818cf8" text-anchor="middle" font-size="10">Q1 (25%)</text>
          <text x="260" y="85" fill="#f472b6" text-anchor="middle" font-size="10">Median (50%)</text>
          <text x="380" y="85" fill="#818cf8" text-anchor="middle" font-size="10">Q3 (75%)</text>
          
          <line x1="380" y1="50" x2="480" y2="50" stroke="#6366f1" stroke-width="2" stroke-dasharray="4"/>
          <line x1="480" y1="35" x2="480" y2="65" stroke="#6366f1" stroke-width="2"/>
          <text x="480" y="25" fill="#94a3b8" text-anchor="middle" font-size="10">Upper Fence</text>

          <!-- Outlier point -->
          <circle cx="530" cy="50" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
          <text x="530" y="70" fill="#ef4444" text-anchor="middle" font-size="10" font-weight="bold">Outlier (*)</text>

          <!-- Skew Comparison Mini-diagrams -->
          <g transform="translate(40, 110)">
            <!-- Symmetric -->
            <path d="M 10 70 Q 70 10 130 70" fill="none" stroke="#10b981" stroke-width="2"/>
            <text x="70" y="85" fill="#10b981" text-anchor="middle" font-size="10">Symmetric</text>
            <text x="70" y="98" fill="#94a3b8" text-anchor="middle" font-size="9">Mean = Med = Mode</text>
            
            <!-- Positively Skewed -->
            <path d="M 230 70 Q 260 10 390 70" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="310" y="85" fill="#f59e0b" text-anchor="middle" font-size="10">Positive Skew (Right Tail)</text>
            <text x="310" y="98" fill="#94a3b8" text-anchor="middle" font-size="9">Mode &lt; Median &lt; Mean</text>

            <!-- Negatively Skewed -->
            <path d="M 480 70 Q 610 10 640 70" fill="none" stroke="#ec4899" stroke-width="2"/>
            <text x="560" y="85" fill="#ec4899" text-anchor="middle" font-size="10">Negative Skew (Left Tail)</text>
            <text x="560" y="98" fill="#94a3b8" text-anchor="middle" font-size="9">Mean &lt; Median &lt; Mode</text>
          </g>
        </svg>
      `;

    case 'mod3': // Data Preprocessing Pipeline
      return `
        <svg viewBox="0 0 700 130" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Flow steps -->
          <g transform="translate(10, 30)">
            <!-- Box 1 -->
            <rect x="0" y="0" width="115" height="55" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
            <text x="57" y="24" fill="#a5b4fc" font-weight="bold" text-anchor="middle">1. Cleaning</text>
            <text x="57" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Noise & Missing</text>
            
            <path d="M 115 27 L 135 27" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)"/>

            <!-- Box 2 -->
            <rect x="140" y="0" width="115" height="55" rx="8" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
            <text x="197" y="24" fill="#d8b4fe" font-weight="bold" text-anchor="middle">2. Integration</text>
            <text x="197" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Chi-Square & Corr</text>

            <path d="M 255 27 L 275 27" stroke="#a855f7" stroke-width="2"/>

            <!-- Box 3 -->
            <rect x="280" y="0" width="125" height="55" rx="8" fill="#083344" stroke="#06b6d4" stroke-width="1.5"/>
            <text x="342" y="24" fill="#67e8f9" font-weight="bold" text-anchor="middle">3. Transformation</text>
            <text x="342" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Min-Max & Z-Score</text>

            <path d="M 405 27 L 425 27" stroke="#06b6d4" stroke-width="2"/>

            <!-- Box 4 -->
            <rect x="430" y="0" width="115" height="55" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
            <text x="487" y="24" fill="#6ee7b7" font-weight="bold" text-anchor="middle">4. Reduction</text>
            <text x="487" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">PCA & Wavelets</text>

            <path d="M 545 27 L 565 27" stroke="#10b981" stroke-width="2"/>

            <!-- Box 5 -->
            <rect x="570" y="0" width="115" height="55" rx="8" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
            <text x="627" y="24" fill="#fcd34d" font-weight="bold" text-anchor="middle">5. Discretize</text>
            <text x="627" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">Concept Hierarchy</text>
          </g>
        </svg>
      `;

    case 'mod4': // Distance and Cosine Vector Space
      return `
        <svg viewBox="0 0 640 160" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Manhattan vs Euclidean -->
          <g transform="translate(20, 20)">
            <text x="0" y="10" fill="#a5b4fc" font-weight="bold">Manhattan vs. Euclidean Distance</text>
            <line x1="30" y1="120" x2="160" y2="120" stroke="#334155" stroke-width="1.5"/>
            <line x1="30" y1="120" x2="30" y2="20" stroke="#334155" stroke-width="1.5"/>

            <circle cx="50" cy="100" r="4" fill="#38bdf8"/>
            <text x="45" y="115" fill="#94a3b8">P(x1, y1)</text>

            <circle cx="140" cy="40" r="4" fill="#38bdf8"/>
            <text x="135" y="32" fill="#94a3b8">Q(x2, y2)</text>

            <!-- Euclidean straight -->
            <line x1="50" y1="100" x2="140" y2="40" stroke="#ec4899" stroke-width="2"/>
            <text x="100" y="65" fill="#ec4899" font-size="9">Euclidean (L2)</text>

            <!-- Manhattan right angle -->
            <polyline points="50,100 140,100 140,40" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3"/>
            <text x="110" y="112" fill="#f59e0b" font-size="9">Manhattan (L1)</text>
          </g>

          <!-- Cosine Angle -->
          <g transform="translate(340, 20)">
            <text x="40" y="10" fill="#a5b4fc" font-weight="bold">Cosine Similarity (Angle θ)</text>
            <line x1="60" y1="120" x2="220" y2="120" stroke="#334155" stroke-width="1"/>
            <line x1="60" y1="120" x2="60" y2="20" stroke="#334155" stroke-width="1"/>

            <!-- Vector 1 -->
            <line x1="60" y1="120" x2="200" y2="50" stroke="#06b6d4" stroke-width="2.5"/>
            <text x="205" y="52" fill="#06b6d4" font-weight="bold">Doc 1</text>

            <!-- Vector 2 -->
            <line x1="60" y1="120" x2="180" y2="85" stroke="#a855f7" stroke-width="2.5"/>
            <text x="185" y="90" fill="#a855f7" font-weight="bold">Doc 2</text>

            <!-- Arc -->
            <path d="M 120 98 A 40 40 0 0 0 115 110" fill="none" stroke="#f43f5e" stroke-width="2"/>
            <text x="130" y="105" fill="#f43f5e" font-size="10">θ</text>
            <text x="60" y="145" fill="#94a3b8" font-size="10">cos(θ) = 1 (Identical) | cos(θ) = 0 (Orthogonal)</text>
          </g>
        </svg>
      `;

    case 'mod5': // 3-Tier Data Warehouse Architecture
      return `
        <svg viewBox="0 0 680 160" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Top Tier -->
          <rect x="50" y="15" width="580" height="35" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5"/>
          <text x="340" y="37" fill="#c7d2fe" font-weight="bold" text-anchor="middle">TOP TIER: Front-End BI Tools (Query, Reporting, Data Mining, Dashboards)</text>
          
          <line x1="340" y1="50" x2="340" y2="65" stroke="#6366f1" stroke-width="2"/>

          <!-- Middle Tier -->
          <rect x="50" y="65" width="580" height="35" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.5"/>
          <text x="340" y="87" fill="#e9d5ff" font-weight="bold" text-anchor="middle">MIDDLE TIER: OLAP Engine (ROLAP / MOLAP / HOLAP Servers)</text>

          <line x1="340" y1="100" x2="340" y2="115" stroke="#a855f7" stroke-width="2"/>

          <!-- Bottom Tier -->
          <rect x="50" y="115" width="580" height="35" rx="6" fill="#083344" stroke="#06b6d4" stroke-width="1.5"/>
          <text x="340" y="137" fill="#a5f3fc" font-weight="bold" text-anchor="middle">BOTTOM TIER: Data Warehouse, Data Marts, Staging & ETL, Metadata Repository</text>
        </svg>
      `;

    case 'mod6': // Star vs Snowflake Schema
      return `
        <svg viewBox="0 0 700 170" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Star Schema -->
          <g transform="translate(20, 10)">
            <text x="140" y="15" fill="#10b981" font-weight="bold" text-anchor="middle">Star Schema (Denormalized)</text>
            <rect x="90" y="55" width="100" height="40" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="4"/>
            <text x="140" y="79" fill="#a7f3d0" font-weight="bold" text-anchor="middle">Fact Table</text>

            <rect x="5" y="25" width="60" height="28" fill="#1e293b" stroke="#64748b" rx="3"/>
            <text x="35" y="42" fill="#94a3b8" text-anchor="middle" font-size="9">Time</text>
            <line x1="65" y1="39" x2="90" y2="60" stroke="#64748b"/>

            <rect x="215" y="25" width="60" height="28" fill="#1e293b" stroke="#64748b" rx="3"/>
            <text x="245" y="42" fill="#94a3b8" text-anchor="middle" font-size="9">Item</text>
            <line x1="215" y1="39" x2="190" y2="60" stroke="#64748b"/>

            <rect x="5" y="95" width="60" height="28" fill="#1e293b" stroke="#64748b" rx="3"/>
            <text x="35" y="112" fill="#94a3b8" text-anchor="middle" font-size="9">Branch</text>
            <line x1="65" y1="109" x2="90" y2="90" stroke="#64748b"/>

            <rect x="215" y="95" width="60" height="28" fill="#1e293b" stroke="#64748b" rx="3"/>
            <text x="245" y="112" fill="#94a3b8" text-anchor="middle" font-size="9">Location</text>
            <line x1="215" y1="109" x2="190" y2="90" stroke="#64748b"/>
          </g>

          <line x1="340" y1="10" x2="340" y2="155" stroke="#334155" stroke-dasharray="4"/>

          <!-- Snowflake Schema -->
          <g transform="translate(370, 10)">
            <text x="150" y="15" fill="#38bdf8" font-weight="bold" text-anchor="middle">Snowflake Schema (Normalized Hierarchies)</text>
            <rect x="100" y="55" width="100" height="40" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2" rx="4"/>
            <text x="150" y="79" fill="#bae6fd" font-weight="bold" text-anchor="middle">Fact Table</text>

            <rect x="220" y="58" width="65" height="34" fill="#1e293b" stroke="#64748b" rx="3"/>
            <text x="252" y="77" fill="#94a3b8" text-anchor="middle" font-size="9">Location</text>
            <line x1="200" y1="75" x2="220" y2="75" stroke="#38bdf8"/>

            <rect x="300" y="58" width="50" height="34" fill="#1e293b" stroke="#0284c7" rx="3"/>
            <text x="325" y="77" fill="#7dd3fc" text-anchor="middle" font-size="9">City</text>
            <line x1="285" y1="75" x2="300" y2="75" stroke="#0284c7" stroke-dasharray="2"/>
          </g>
        </svg>
      `;

    case 'mod7': // Apriori Pruning vs FP-Growth
      return `
        <svg viewBox="0 0 680 150" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Flow of Apriori -->
          <g transform="translate(20, 20)">
            <rect x="0" y="10" width="120" height="40" fill="#4c0519" stroke="#f43f5e" rx="6"/>
            <text x="60" y="34" fill="#fecdd3" font-weight="bold" text-anchor="middle">L(k-1) Frequent</text>

            <line x1="120" y1="30" x2="160" y2="30" stroke="#f43f5e" stroke-width="2"/>

            <rect x="160" y="10" width="130" height="40" fill="#1e293b" stroke="#cbd5e1" rx="6"/>
            <text x="225" y="27" fill="#ffffff" font-weight="bold" text-anchor="middle">Join Step (⨝)</text>
            <text x="225" y="42" fill="#94a3b8" font-size="9" text-anchor="middle">Generate Ck Candidates</text>

            <line x1="290" y1="30" x2="330" y2="30" stroke="#cbd5e1" stroke-width="2"/>

            <rect x="330" y="10" width="140" height="40" fill="#78350f" stroke="#f59e0b" rx="6"/>
            <text x="400" y="27" fill="#fef3c7" font-weight="bold" text-anchor="middle">Prune Step</text>
            <text x="400" y="42" fill="#fcd34d" font-size="9" text-anchor="middle">Discard Infrequent Subsets</text>

            <line x1="470" y1="30" x2="510" y2="30" stroke="#f59e0b" stroke-width="2"/>

            <rect x="510" y="10" width="120" height="40" fill="#064e3b" stroke="#10b981" rx="6"/>
            <text x="570" y="34" fill="#a7f3d0" font-weight="bold" text-anchor="middle">Lk Frequent</text>
          </g>

          <text x="340" y="110" fill="#94a3b8" text-anchor="middle" font-size="11">
            Apriori Property: If {Beer, Bread} is infrequent, {Beer, Bread, Diaper} is pruned instantly!
          </text>
        </svg>
      `;

    case 'mod8': // Decision Tree Architecture
      return `
        <svg viewBox="0 0 660 170" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- Root Node -->
          <ellipse cx="330" cy="25" rx="55" ry="18" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
          <text x="330" y="29" fill="#c7d2fe" font-weight="bold" text-anchor="middle">Age?</text>

          <!-- Branches -->
          <line x1="300" y1="43" x2="160" y2="80" stroke="#6366f1" stroke-width="1.5"/>
          <text x="210" y="58" fill="#94a3b8" font-size="10">&le; 30 (Youth)</text>

          <line x1="330" y1="43" x2="330" y2="80" stroke="#6366f1" stroke-width="1.5"/>
          <text x="335" y="65" fill="#94a3b8" font-size="10">31..40</text>

          <line x1="360" y1="43" x2="500" y2="80" stroke="#6366f1" stroke-width="1.5"/>
          <text x="450" y="58" fill="#94a3b8" font-size="10">&gt; 40 (Senior)</text>

          <!-- Middle Level -->
          <ellipse cx="160" cy="98" rx="55" ry="18" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="160" y="102" fill="#7dd3fc" font-weight="bold" text-anchor="middle">Student?</text>

          <rect x="290" y="85" width="80" height="26" fill="#064e3b" stroke="#10b981" rx="4"/>
          <text x="330" y="102" fill="#a7f3d0" font-weight="bold" text-anchor="middle">Buys = YES</text>

          <ellipse cx="500" cy="98" rx="60" ry="18" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="500" y="102" fill="#fcd34d" font-weight="bold" text-anchor="middle">Credit_Rating?</text>

          <!-- Leaves for youth -->
          <line x1="130" y1="116" x2="100" y2="138" stroke="#38bdf8"/>
          <rect x="70" y="138" width="60" height="22" fill="#4c0519" stroke="#f43f5e" rx="3"/>
          <text x="100" y="153" fill="#fecdd3" text-anchor="middle" font-size="10">NO</text>

          <line x1="190" y1="116" x2="220" y2="138" stroke="#38bdf8"/>
          <rect x="190" y="138" width="60" height="22" fill="#064e3b" stroke="#10b981" rx="3"/>
          <text x="220" y="153" fill="#a7f3d0" text-anchor="middle" font-size="10">YES</text>
        </svg>
      `;

    case 'mod9': // SVM Hyperplane & Neural Net Feedforward
      return `
        <svg viewBox="0 0 680 160" class="w-full max-w-2xl h-auto font-sans text-xs">
          <!-- SVM Left -->
          <g transform="translate(30, 20)">
            <text x="70" y="0" fill="#a855f7" font-weight="bold" text-anchor="middle">SVM Maximum Margin</text>
            <line x1="10" y1="120" x2="130" y2="20" stroke="#ffffff" stroke-width="2"/>
            <line x1="25" y1="125" x2="145" y2="25" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3"/>
            <line x1="-5" y1="115" x2="115" y2="15" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3"/>

            <!-- Support vector points -->
            <circle cx="50" cy="85" r="5" fill="#3b82f6" stroke="#fff" stroke-width="2"/>
            <circle cx="85" cy="55" r="5" fill="#ef4444" stroke="#fff" stroke-width="2"/>
            <text x="50" y="105" fill="#93c5fd" font-size="8">SV 1</text>
            <text x="85" y="45" fill="#fca5a5" font-size="8">SV 2</text>
          </g>

          <!-- Backpropagation Neural Net Right -->
          <g transform="translate(280, 20)">
            <text x="190" y="0" fill="#6366f1" font-weight="bold" text-anchor="middle">Multilayer Perceptron Signal Flow</text>
            
            <!-- Inputs -->
            <circle cx="50" cy="30" r="12" fill="#1e1b4b" stroke="#6366f1"/>
            <text x="50" y="34" fill="#fff" text-anchor="middle">X1</text>
            <circle cx="50" cy="70" r="12" fill="#1e1b4b" stroke="#6366f1"/>
            <text x="50" y="74" fill="#fff" text-anchor="middle">X2</text>
            <circle cx="50" cy="110" r="12" fill="#1e1b4b" stroke="#6366f1"/>
            <text x="50" y="114" fill="#fff" text-anchor="middle">X3</text>

            <!-- Hidden -->
            <circle cx="180" cy="50" r="14" fill="#2e1065" stroke="#a855f7"/>
            <text x="180" y="54" fill="#fff" text-anchor="middle">H4</text>
            <circle cx="180" cy="90" r="14" fill="#2e1065" stroke="#a855f7"/>
            <text x="180" y="94" fill="#fff" text-anchor="middle">H5</text>

            <!-- Output -->
            <circle cx="310" cy="70" r="14" fill="#064e3b" stroke="#10b981"/>
            <text x="310" y="74" fill="#fff" text-anchor="middle">O6</text>

            <!-- Connections -->
            <line x1="62" y1="30" x2="166" y2="50" stroke="#475569"/>
            <line x1="62" y1="70" x2="166" y2="50" stroke="#475569"/>
            <line x1="62" y1="110" x2="166" y2="90" stroke="#475569"/>
            <line x1="194" y1="50" x2="296" y2="70" stroke="#475569"/>
            <line x1="194" y1="90" x2="296" y2="70" stroke="#475569"/>

            <!-- Feedforward & Backprop Arrows -->
            <path d="M 120 135 L 240 135" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="180" y="130" fill="#10b981" font-size="9" text-anchor="middle">Feed-Forward Signals &rarr;</text>
            <path d="M 240 148 L 120 148" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3"/>
            <text x="180" y="157" fill="#f43f5e" font-size="9" text-anchor="middle">&larr; Error Backpropagation</text>
          </g>
        </svg>
      `;

    case 'mod10': // Regression Line
      return `
        <svg viewBox="0 0 620 150" class="w-full max-w-2xl h-auto font-sans text-xs">
          <g transform="translate(40, 20)">
            <line x1="30" y1="110" x2="350" y2="110" stroke="#475569" stroke-width="1.5"/>
            <line x1="30" y1="110" x2="30" y2="10" stroke="#475569" stroke-width="1.5"/>
            <text x="340" y="125" fill="#94a3b8">Number of Agents (X)</text>
            <text x="10" y="15" fill="#94a3b8" transform="rotate(-90, 10, 15)">Sales (Y)</text>

            <!-- Line of Regression Y = a + bX -->
            <line x1="30" y1="95" x2="330" y2="25" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="260" y="35" fill="#f43f5e" font-weight="bold">Y = 8.327 + 2.147 X</text>

            <!-- Scatter points with error bars -->
            <circle cx="80" cy="80" r="3.5" fill="#38bdf8"/>
            <circle cx="140" cy="65" r="3.5" fill="#38bdf8"/>
            <line x1="140" y1="65" x2="140" y2="70" stroke="#f59e0b" stroke-dasharray="2"/>
            <circle cx="210" cy="45" r="3.5" fill="#38bdf8"/>
            <circle cx="280" cy="40" r="3.5" fill="#38bdf8"/>

            <text x="380" y="50" fill="#cbd5e1" font-weight="bold">Least Squares Method:</text>
            <text x="380" y="70" fill="#94a3b8">Minimizes sum of squared errors:</text>
            <text x="380" y="90" fill="#f59e0b" font-mono font-size="11">SSE = &Sigma; (actual - predicted)&sup2;</text>
          </g>
        </svg>
      `;

    case 'mod11': // DBSCAN Topological Clustering
      return `
        <svg viewBox="0 0 660 160" class="w-full max-w-2xl h-auto font-sans text-xs">
          <g transform="translate(50, 20)">
            <!-- Core Point with Circle -->
            <circle cx="120" cy="70" r="45" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-dasharray="3"/>
            <circle cx="120" cy="70" r="5" fill="#10b981"/>
            <text x="120" y="60" fill="#10b981" font-weight="bold" text-anchor="middle">Core Point</text>
            <text x="120" y="95" fill="#6ee7b7" font-size="9" text-anchor="middle">&ge; MinPts within &epsilon;</text>

            <!-- Inner points within epsilon -->
            <circle cx="100" cy="55" r="3.5" fill="#10b981"/>
            <circle cx="140" cy="80" r="3.5" fill="#10b981"/>
            <circle cx="115" cy="95" r="3.5" fill="#10b981"/>

            <!-- Border point -->
            <circle cx="155" cy="50" r="4.5" fill="#f59e0b"/>
            <circle cx="155" cy="50" r="35" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-dasharray="2"/>
            <text x="180" y="45" fill="#fcd34d" font-weight="bold">Border Point</text>

            <!-- Outlier Noise Point -->
            <circle cx="360" cy="80" r="5" fill="#ef4444"/>
            <circle cx="360" cy="80" r="35" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-dasharray="2"/>
            <text x="360" y="65" fill="#ef4444" font-weight="bold" text-anchor="middle">Noise / Outlier</text>
            <text x="360" y="100" fill="#94a3b8" font-size="9" text-anchor="middle">No core points in &epsilon;</text>
          </g>
        </svg>
      `;

    default:
      return '';
  }
}

/**
 * Render the Master Formula Vault Grid
 */
function renderFormulaVault() {
  const grid = document.getElementById('formulaVaultGrid');
  if (!grid) return;

  grid.innerHTML = FORMULA_VAULT.map(item => `
    <div class="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/30 transition">
      <div class="flex items-center justify-between text-[11px] mb-1">
        <span class="font-bold text-amber-400 font-mono">${item.mod}</span>
        <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">${item.tag}</span>
      </div>
      <div class="font-semibold text-xs text-white mb-1.5">${item.title}</div>
      <div class="overflow-x-auto py-1 font-mono text-xs text-indigo-300">
        $$${item.eq || item.expr}$$
      </div>
    </div>
  `).join('');
}

/**
 * Flashcard Flip Helper
 */
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  const inner = card.querySelector('.card-inner');
  if (inner) {
    inner.classList.toggle('rotate-y-180');
  }
}

/**
 * Global Search
 */
function initSearch() {
  const input = document.getElementById('globalSearch');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const blocks = document.querySelectorAll('.module-card');

    blocks.forEach(card => {
      const text = card.innerText.toLowerCase();
      if (!q || text.includes(q)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/**
 * Progress bar & TOC scroll spy
 */
function initProgressTracker() {
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    const pBar = document.getElementById('readingProgress');
    if (pBar) pBar.style.width = Math.min(100, Math.max(0, progress)) + '%';

    // Update study widget
    const cards = document.querySelectorAll('.module-card');
    let visibleCount = 0;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.5) {
        visibleCount++;
      }
    });

    const mText = document.getElementById('modulesCompletedText');
    const pText = document.getElementById('percentText');
    const mBar = document.getElementById('moduleProgressBar');
    if (mText && pText && mBar) {
      const pct = Math.round((visibleCount / DMDW_MODULES.length) * 100);
      mText.innerText = `${Math.min(DMDW_MODULES.length, Math.max(1, visibleCount))} of ${DMDW_MODULES.length} Modules`;
      pText.innerText = `${pct}%`;
      mBar.style.width = `${pct}%`;
    }
  });
}

/**
 * KaTeX Equation Auto-Rendering
 */
function initKaTeX() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  } else {
    // Retry once script loads
    setTimeout(initKaTeX, 300);
  }
}

/**
 * Navigation & Modals Toggles
 */
function toggleMobileNav() {
  const nav = document.getElementById('sidebarNav');
  if (nav) nav.classList.toggle('-translate-x-full');
}

function toggleSimulationsModal() {
  const m = document.getElementById('simulationsModal');
  if (!m) return;
  m.classList.toggle('hidden');
  if (!m.classList.contains('hidden')) {
    const modalContainer = document.getElementById('modalSimulationsContainer');
    modalContainer.innerHTML = `
      <div id="modal-kmeans"></div>
      <div id="modal-confusion"></div>
      <div id="modal-norm"></div>
      <div id="modal-basket"></div>
    `;
    // Populate simulators inside modal
    setTimeout(() => {
      document.getElementById('modal-kmeans').innerHTML = document.getElementById('kmeans-sim-container')?.innerHTML || '';
      document.getElementById('modal-confusion').innerHTML = document.getElementById('confusion-sim-container')?.innerHTML || '';
      document.getElementById('modal-norm').innerHTML = document.getElementById('norm-sim-container')?.innerHTML || '';
      document.getElementById('modal-basket').innerHTML = document.getElementById('basket-sim-container')?.innerHTML || '';
      initKaTeX();
    }, 100);
  }
}

function toggleQuizModal() {
  const m = document.getElementById('quizModal');
  if (!m) return;
  m.classList.toggle('hidden');
  if (!m.classList.contains('hidden')) {
    initQuiz();
  }
}

function toggleRevisionModal() {
  const target = document.getElementById('formula-hub');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToLab(labId) {
  if (labId === 'kmeans-sim') {
    const el = document.getElementById('kmeans-sim-container');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (labId === 'apriori-sim') {
    const el = document.getElementById('basket-sim-container');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}


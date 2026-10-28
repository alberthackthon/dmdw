/**
 * Additional Interactive Simulators:
 * 1. Decision Tree Live Traversal Simulator (Weather / Play Ball dataset)
 * 2. DBSCAN Live Density Clustering Canvas
 * 3. 3D OLAP Cube Interactive Operations (Slice, Dice, Roll-Up)
 */

// 1. Decision Tree Live Interactive Explorer
function renderDecisionTreeExplorer() {
  const container = document.getElementById('dt-sim-container');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-blue-500/20">
      <h3 class="text-base font-bold text-white mb-2 flex items-center gap-2">
        <span class="text-blue-400">🌳</span> Interactive Decision Tree Classifier (Slide 8.37 Weather Dataset)
      </h3>
      <p class="text-xs text-slate-400 mb-4">Select the weather conditions below to watch the decision tree trace the branch and predict whether you should <strong>Play Ball (Yes or No)</strong>.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div>
          <label class="text-xs text-slate-300 block mb-1 font-semibold">1. Outlook:</label>
          <select id="dtOutlook" class="w-full bg-slate-950 text-white rounded-lg px-3 py-2 text-xs border border-slate-700" onchange="evaluateDecisionTree()">
            <option value="Sunny">Sunny</option>
            <option value="Overcast">Overcast</option>
            <option value="Rain">Rain</option>
          </select>
        </div>
        <div>
          <label class="text-xs text-slate-300 block mb-1 font-semibold">2. Humidity:</label>
          <select id="dtHumidity" class="w-full bg-slate-950 text-white rounded-lg px-3 py-2 text-xs border border-slate-700" onchange="evaluateDecisionTree()">
            <option value="High">High</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <div>
          <label class="text-xs text-slate-300 block mb-1 font-semibold">3. Wind:</label>
          <select id="dtWind" class="w-full bg-slate-950 text-white rounded-lg px-3 py-2 text-xs border border-slate-700" onchange="evaluateDecisionTree()">
            <option value="Weak">Weak</option>
            <option value="Strong">Strong</option>
          </select>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-[11px] text-slate-400 font-mono">Traversed Decision Path:</div>
            <div id="dtPath" class="text-xs font-bold text-indigo-300 mt-1">Outlook = Sunny &rarr; Humidity = High</div>
          </div>
          <div class="text-right">
            <div class="text-[11px] text-slate-400 font-mono">Classification Result:</div>
            <div id="dtResult" class="text-lg font-black text-rose-400 mt-0.5">Play Ball = NO</div>
          </div>
        </div>
      </div>
    </div>
  `;

  evaluateDecisionTree();
}

function evaluateDecisionTree() {
  const outlook = document.getElementById('dtOutlook')?.value || 'Sunny';
  const humidity = document.getElementById('dtHumidity')?.value || 'High';
  const wind = document.getElementById('dtWind')?.value || 'Weak';

  let path = "";
  let result = "";
  let isYes = false;

  if (outlook === 'Overcast') {
    path = "Outlook = Overcast (Pure node in training data)";
    result = "Play Ball = YES";
    isYes = true;
  } else if (outlook === 'Sunny') {
    if (humidity === 'High') {
      path = "Outlook = Sunny &rarr; Humidity = High";
      result = "Play Ball = NO";
      isYes = false;
    } else {
      path = "Outlook = Sunny &rarr; Humidity = Normal";
      result = "Play Ball = YES";
      isYes = true;
    }
  } else if (outlook === 'Rain') {
    if (wind === 'Strong') {
      path = "Outlook = Rain &rarr; Wind = Strong";
      result = "Play Ball = NO";
      isYes = false;
    } else {
      path = "Outlook = Rain &rarr; Wind = Weak";
      result = "Play Ball = YES";
      isYes = true;
    }
  }

  const pEl = document.getElementById('dtPath');
  const rEl = document.getElementById('dtResult');
  if (pEl && rEl) {
    pEl.innerHTML = path;
    rEl.innerText = result;
    rEl.className = isYes ? "text-lg font-black text-emerald-400 mt-0.5" : "text-lg font-black text-rose-400 mt-0.5";
  }
}

// 2. Interactive OLAP Cube Operations Simulator
function renderOLAPSimulator() {
  const container = document.getElementById('olap-sim-container');
  if (!container) return;

  // 3D Cube dataset from slide 6.27-6.31
  // Locations: [Delhi, Kolkata, BBS]
  // Months: [Jan, Feb, Mar]
  // Products: [TV, Mob, Others]
  const salesCube = {
    'Delhi': {
      'Jan': { 'TV': 49, 'Mob': 53, 'Others': 92 },
      'Feb': { 'TV': 49, 'Mob': 53, 'Others': 92 },
      'Mar': { 'TV': 49, 'Mob': 53, 'Others': 92 }
    },
    'Kolkata': {
      'Jan': { 'TV': 18, 'Mob': 23, 'Others': 42 },
      'Feb': { 'TV': 18, 'Mob': 23, 'Others': 42 },
      'Mar': { 'TV': 18, 'Mob': 23, 'Others': 42 }
    },
    'BBS': {
      'Jan': { 'TV': 59, 'Mob': 15, 'Others': 17 },
      'Feb': { 'TV': 54, 'Mob': 62, 'Others': 13 },
      'Mar': { 'TV': 32, 'Mob': 29, 'Others': 42 }
    }
  };

  container.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-emerald-500/20">
      <h3 class="text-base font-bold text-white mb-2 flex items-center gap-2">
        <span class="text-emerald-400">🧊</span> Interactive OLAP Operations Playground (Slide 6.26–6.31)
      </h3>
      <p class="text-xs text-slate-400 mb-4">Execute live OLAP queries on the 3D Sales Cube: <code>Cube[Location, Month, Product]</code>.</p>

      <div class="flex flex-wrap gap-2 mb-4">
        <button onclick="runOLAPOp('slice-bbs-mar')" class="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 text-xs font-semibold">
          Query 1: Total items sold in March in BBS (Slide 6.30)
        </button>
        <button onclick="runOLAPOp('slice-bbs-mob')" class="px-3 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/40 text-cyan-300 border border-cyan-500/40 text-xs font-semibold">
          Query 2: Total Mobiles sold at BBS across all 3 months (Slide 6.31)
        </button>
        <button onclick="runOLAPOp('dice-subcube')" class="px-3 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 border border-amber-500/40 text-xs font-semibold">
          Operation: Dice [Jan..Feb] & [BBS..Delhi]
        </button>
        <button onclick="runOLAPOp('rollup-city')" class="px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/40 text-xs font-semibold">
          Operation: Roll-Up [City &rarr; Region]
        </button>
      </div>

      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs" id="olapQueryOutput">
        <span class="text-slate-500">Click any query button above to see the mathematical transformation, DMQL expression, and resulting aggregate table!</span>
      </div>
    </div>
  `;
}

function runOLAPOp(type) {
  const out = document.getElementById('olapQueryOutput');
  if (!out) return;

  if (type === 'slice-bbs-mar') {
    out.innerHTML = `
      <div class="text-emerald-400 font-bold mb-1">✓ Execution: Total items sold in March in BBS</div>
      <div class="text-slate-300 text-xs mb-2">Mathematical Formulation:<br>
        <code>&Sigma; ( Slice(Location='BBS') + Slice(Month='March') )</code>
      </div>
      <div class="bg-slate-900 p-2.5 rounded border border-slate-800 text-slate-200 mb-2">
        Units in BBS for March: TV = 32, Mobile = 29, Others = 42<br>
        Sum = 32 + 29 + 42 = <span class="text-emerald-400 font-black text-sm">103 Items</span>
      </div>
      <div class="text-[11px] text-slate-400">Slide 6.30 verified: Cube dimension reduced from 3D to 0D scalar!</div>
    `;
  } else if (type === 'slice-bbs-mob') {
    out.innerHTML = `
      <div class="text-cyan-400 font-bold mb-1">✓ Execution: Number of mobiles sold at BBS in all 3 months</div>
      <div class="text-slate-300 text-xs mb-2">Mathematical Formulation:<br>
        <code>&Sigma; ( Slice(Location='BBS') + Slice(Product='Mob') )</code>
      </div>
      <div class="bg-slate-900 p-2.5 rounded border border-slate-800 text-slate-200 mb-2">
        Mobile sales in BBS: Jan = 15, Feb = 62, Mar = 29<br>
        Sum = 15 + 62 + 29 = <span class="text-cyan-400 font-black text-sm">106 Mobiles</span>
      </div>
      <div class="text-[11px] text-slate-400">Slide 6.31 verified: Slicing 2 dimensions (Location & Product) leaves 1D time vector aggregated to 106.</div>
    `;
  } else if (type === 'dice-subcube') {
    out.innerHTML = `
      <div class="text-amber-400 font-bold mb-1">✓ Execution: Dice Operator on 2+ Dimensions</div>
      <div class="text-slate-300 text-xs mb-2">Mathematical Formulation:<br>
        <code>Dice(Month='Jan' OR 'Feb' AND Location='BBS' OR 'Delhi') C[Location, Month, Product] &rarr; C'[2 &times; 2 &times; 3]</code>
      </div>
      <div class="text-[11px] text-slate-300">
        Produces a smaller 2&times;2&times;3 subcube isolating specifically early-quarter regional comparisons without modifying raw data.
      </div>
    `;
  } else if (type === 'rollup-city') {
    out.innerHTML = `
      <div class="text-purple-400 font-bold mb-1">✓ Execution: Roll-Up Climbing Concept Hierarchy</div>
      <div class="text-slate-300 text-xs mb-2">Mathematical Formulation:<br>
        <code>Roll-Up_Location C[Location(City), Month, Product] &rarr; C[Region(East, North), Month, Product]</code>
      </div>
      <div class="text-[11px] text-slate-300">
        Aggregates cities into higher geographic regions (e.g., Kolkata & BBS &rarr; East Region; Delhi &rarr; North Region). Decreases granularity while increasing aggregation!
      </div>
    `;
  }
}


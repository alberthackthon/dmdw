/**
 * Interactive Simulations for Data Mining & Data Warehousing
 * 1. K-Means Clustering Live Canvas
 * 2. Normalization & Outlier Calculator
 * 3. Confusion Matrix Interactive Metric Suite
 * 4. Market Basket & Apriori Explorer
 * 5. 3D Data Cube OLAP Operator Playground
 */

// Global state for simulations
const SIM_STATE = {
  kmeans: {
    points: [],
    centroids: [],
    k: 3,
    colors: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
    running: false
  }
};

/**
 * Initialize all interactive labs
 */
function initSimulations() {
  initKMeansLab();
}

/**
 * 1. Interactive K-Means Canvas Simulation
 */
function initKMeansLab() {
  const container = document.getElementById('kmeans-sim-container');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-indigo-500/20">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div>
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
            K-Means Clustering Visual Simulator
          </h3>
          <p class="text-xs text-slate-400 mt-0.5">Click on canvas to add custom points, or generate clusters and step through convergence.</p>
        </div>
        <div class="flex items-center space-x-2">
          <label class="text-xs text-slate-300">Clusters (K):</label>
          <select id="kmKSelect" class="bg-slate-800 text-xs text-white rounded px-2 py-1 border border-slate-700">
            <option value="2">K = 2</option>
            <option value="3" selected>K = 3</option>
            <option value="4">K = 4</option>
          </select>
          <button onclick="randomizeKMeansPoints()" class="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded text-slate-200 border border-slate-700">Randomize</button>
          <button onclick="stepKMeans()" class="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-500 rounded text-white font-semibold shadow">Step Iteration</button>
          <button onclick="resetKMeans()" class="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 rounded text-slate-300 border border-slate-700">Reset</button>
        </div>
      </div>
      <div class="relative w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800 flex justify-center">
        <canvas id="kmCanvas" width="700" height="340" class="cursor-crosshair max-w-full h-auto"></canvas>
      </div>
      <div class="mt-3 flex items-center justify-between text-[11px] text-slate-400">
        <div id="kmStatus">Status: Ready. Points: 0 | Click on canvas to spawn data points manually.</div>
        <div class="flex items-center space-x-3">
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> C1</span>
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-blue-500"></span> C2</span>
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> C3</span>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('kmCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    SIM_STATE.kmeans.points.push({ x, y, cluster: -1 });
    renderKMeansCanvas();
  });

  document.getElementById('kmKSelect').addEventListener('change', (e) => {
    SIM_STATE.kmeans.k = parseInt(e.target.value);
    resetKMeansCentroids();
    renderKMeansCanvas();
  });

  randomizeKMeansPoints();
}

function randomizeKMeansPoints() {
  const canvas = document.getElementById('kmCanvas');
  if (!canvas) return;
  const w = canvas.width;
  const h = canvas.height;
  SIM_STATE.kmeans.points = [];
  
  // Create 3 realistic natural clusters
  const centers = [
    { x: w * 0.25, y: h * 0.4 },
    { x: w * 0.7, y: h * 0.35 },
    { x: w * 0.5, y: h * 0.75 }
  ];

  centers.forEach(c => {
    for (let i = 0; i < 20; i++) {
      const r = Math.random() * 55;
      const angle = Math.random() * Math.PI * 2;
      SIM_STATE.kmeans.points.push({
        x: Math.max(20, Math.min(w - 20, c.x + r * Math.cos(angle))),
        y: Math.max(20, Math.min(h - 20, c.y + r * Math.sin(angle))),
        cluster: -1
      });
    }
  });

  resetKMeansCentroids();
  renderKMeansCanvas();
}

function resetKMeansCentroids() {
  const canvas = document.getElementById('kmCanvas');
  if (!canvas) return;
  const k = SIM_STATE.kmeans.k;
  SIM_STATE.kmeans.centroids = [];

  for (let i = 0; i < k; i++) {
    if (SIM_STATE.kmeans.points.length > 0) {
      const p = SIM_STATE.kmeans.points[Math.floor(Math.random() * SIM_STATE.kmeans.points.length)];
      SIM_STATE.kmeans.centroids.push({ x: p.x + (Math.random() - 0.5) * 20, y: p.y + (Math.random() - 0.5) * 20 });
    } else {
      SIM_STATE.kmeans.centroids.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height });
    }
  }
}

function resetKMeans() {
  SIM_STATE.kmeans.points = [];
  SIM_STATE.kmeans.centroids = [];
  const status = document.getElementById('kmStatus');
  if (status) status.innerText = "Status: Canvas Cleared. Click anywhere to add points.";
  renderKMeansCanvas();
}

function stepKMeans() {
  const points = SIM_STATE.kmeans.points;
  const centroids = SIM_STATE.kmeans.centroids;
  const k = SIM_STATE.kmeans.k;
  if (points.length === 0) return;

  if (centroids.length === 0) {
    resetKMeansCentroids();
  }

  // 1. Assign points to nearest centroid
  let shifts = 0;
  points.forEach(p => {
    let minDist = Infinity;
    let bestC = -1;
    centroids.forEach((c, idx) => {
      const d = Math.hypot(p.x - c.x, p.y - c.y);
      if (d < minDist) {
        minDist = d;
        bestC = idx;
      }
    });
    if (p.cluster !== bestC) shifts++;
    p.cluster = bestC;
  });

  // 2. Recalculate centroids
  for (let i = 0; i < k; i++) {
    const assigned = points.filter(p => p.cluster === i);
    if (assigned.length > 0) {
      const avgX = assigned.reduce((acc, p) => acc + p.x, 0) / assigned.length;
      const avgY = assigned.reduce((acc, p) => acc + p.y, 0) / assigned.length;
      centroids[i] = { x: avgX, y: avgY };
    }
  }

  const status = document.getElementById('kmStatus');
  if (status) {
    status.innerText = shifts === 0 ? "Converged! Zero points changed cluster." : `Step executed: ${shifts} points reassigned. Centroids updated.`;
  }

  renderKMeansCanvas();
}

function renderKMeansCanvas() {
  const canvas = document.getElementById('kmCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background subtle grid
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw points
  SIM_STATE.kmeans.points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    if (p.cluster >= 0) {
      ctx.fillStyle = SIM_STATE.kmeans.colors[p.cluster];
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
    } else {
      ctx.fillStyle = '#94a3b8';
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
    }
    ctx.fill();
    ctx.stroke();
  });

  // Draw centroids
  SIM_STATE.kmeans.centroids.forEach((c, idx) => {
    ctx.save();
    ctx.translate(c.x, c.y);

    // Outer glow
    ctx.beginPath();
    ctx.arc(0, 0, 14, 0, Math.PI * 2);
    ctx.fillStyle = SIM_STATE.kmeans.colors[idx] + '40';
    ctx.fill();

    // Cross shape
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fillStyle = SIM_STATE.kmeans.colors[idx];
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C' + (idx + 1), 0, 0);

    ctx.restore();
  });
}

/**
 * 2. Interactive Confusion Matrix Live Suite
 */
function renderConfusionCalculator() {
  const container = document.getElementById('confusion-sim-container');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-violet-500/20">
      <h3 class="text-base font-bold text-white mb-2 flex items-center gap-2">
        <span class="text-violet-400">📊</span> Live Confusion Matrix & Metric Evaluator
      </h3>
      <p class="text-xs text-slate-400 mb-4">Adjust the actual counts below to instantly evaluate classifier performance formulas in real-time.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <!-- 2x2 Matrix Input Grid -->
        <div class="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div></div>
            <div class="font-bold text-slate-300">Pred + (Positive)</div>
            <div class="font-bold text-slate-300">Pred - (Negative)</div>

            <div class="font-bold text-slate-300 self-center">Actual +</div>
            <div class="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
              <span class="block text-[10px] text-emerald-400 uppercase font-bold">True Positive (TP)</span>
              <input type="number" id="matTP" value="30" min="0" max="1000" class="w-full text-center bg-slate-800 text-white rounded font-mono text-sm py-1 mt-1 border border-emerald-500/40" oninput="calculateMetrics()">
            </div>
            <div class="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/30">
              <span class="block text-[10px] text-rose-400 uppercase font-bold">False Negative (FN)</span>
              <input type="number" id="matFN" value="10" min="0" max="1000" class="w-full text-center bg-slate-800 text-white rounded font-mono text-sm py-1 mt-1 border border-rose-500/40" oninput="calculateMetrics()">
            </div>

            <div class="font-bold text-slate-300 self-center">Actual -</div>
            <div class="p-2.5 rounded-lg bg-amber-950/60 border border-amber-500/30">
              <span class="block text-[10px] text-amber-400 uppercase font-bold">False Positive (FP)</span>
              <input type="number" id="matFP" value="5" min="0" max="1000" class="w-full text-center bg-slate-800 text-white rounded font-mono text-sm py-1 mt-1 border border-amber-500/40" oninput="calculateMetrics()">
            </div>
            <div class="p-2.5 rounded-lg bg-indigo-950/60 border border-indigo-500/30">
              <span class="block text-[10px] text-indigo-400 uppercase font-bold">True Negative (TN)</span>
              <input type="number" id="matTN" value="55" min="0" max="1000" class="w-full text-center bg-slate-800 text-white rounded font-mono text-sm py-1 mt-1 border border-indigo-500/40" oninput="calculateMetrics()">
            </div>
          </div>
          <div class="text-[11px] text-center text-slate-400 mt-3">Slide 9.41 Default: 100 Patients (40 pregnant, 60 not pregnant)</div>
        </div>

        <!-- Live Computed Output Gauges -->
        <div class="space-y-3">
          <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span class="text-xs font-semibold text-slate-300 block">Overall Accuracy</span>
              <span class="text-[10px] text-slate-400 font-mono">(TP + TN) / Total</span>
            </div>
            <span id="resAccuracy" class="text-lg font-black text-indigo-400 font-mono">85.0%</span>
          </div>

          <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span class="text-xs font-semibold text-slate-300 block">Precision</span>
              <span class="text-[10px] text-slate-400 font-mono">TP / (TP + FP)</span>
            </div>
            <span id="resPrecision" class="text-lg font-black text-emerald-400 font-mono">85.7%</span>
          </div>

          <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span class="text-xs font-semibold text-slate-300 block">Recall / Sensitivity (TPR)</span>
              <span class="text-[10px] text-slate-400 font-mono">TP / (TP + FN)</span>
            </div>
            <span id="resRecall" class="text-lg font-black text-cyan-400 font-mono">75.0%</span>
          </div>

          <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span class="text-xs font-semibold text-slate-300 block">Specificity (TNR)</span>
              <span class="text-[10px] text-slate-400 font-mono">TN / (TN + FP)</span>
            </div>
            <span id="resSpecificity" class="text-lg font-black text-amber-400 font-mono">91.7%</span>
          </div>

          <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex justify-between items-center">
            <div>
              <span class="text-xs font-semibold text-slate-300 block">F1-Score (Harmonic Mean)</span>
              <span class="text-[10px] text-slate-400 font-mono">2 * P * R / (P + R)</span>
            </div>
            <span id="resF1" class="text-lg font-black text-pink-400 font-mono">80.0%</span>
          </div>
        </div>
      </div>
    </div>
  `;

  calculateMetrics();
}

function calculateMetrics() {
  const tp = parseFloat(document.getElementById('matTP')?.value) || 0;
  const fn = parseFloat(document.getElementById('matFN')?.value) || 0;
  const fp = parseFloat(document.getElementById('matFP')?.value) || 0;
  const tn = parseFloat(document.getElementById('matTN')?.value) || 0;
  const total = tp + fn + fp + tn;

  if (total === 0) return;

  const accuracy = (tp + tn) / total;
  const precision = (tp + fp) > 0 ? tp / (tp + fp) : 0;
  const recall = (tp + fn) > 0 ? tp / (tp + fn) : 0;
  const specificity = (tn + fp) > 0 ? tn / (tn + fp) : 0;
  const f1 = (precision + recall) > 0 ? (2 * precision * recall) / (precision + recall) : 0;

  document.getElementById('resAccuracy').innerText = (accuracy * 100).toFixed(1) + '%';
  document.getElementById('resPrecision').innerText = (precision * 100).toFixed(1) + '%';
  document.getElementById('resRecall').innerText = (recall * 100).toFixed(1) + '%';
  document.getElementById('resSpecificity').innerText = (specificity * 100).toFixed(1) + '%';
  document.getElementById('resF1').innerText = (f1 * 100).toFixed(1) + '%';
}

/**
 * 3. Interactive Normalization Playground
 */
function renderNormalizationCalculator() {
  const container = document.getElementById('norm-sim-container');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-purple-500/20">
      <h3 class="text-base font-bold text-white mb-2 flex items-center gap-2">
        <span class="text-purple-400">⚡</span> Live Feature Scaling Playground
      </h3>
      <p class="text-xs text-slate-400 mb-4">Input numbers separated by commas to watch Min-Max scaling, Z-Score standardization, and Decimal Scaling computed in real-time.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div class="sm:col-span-2">
          <label class="text-xs text-slate-300 block mb-1">Raw Dataset Array (Comma separated):</label>
          <input type="text" id="rawNormInput" value="8, 10, 15, 20" class="w-full bg-slate-950 text-white rounded-lg px-3 py-2 text-xs border border-slate-700 font-mono focus:border-purple-500 focus:outline-none" oninput="runNormCalc()">
        </div>
        <div>
          <label class="text-xs text-slate-300 block mb-1">Preset Slides Examples:</label>
          <select id="normPreset" class="w-full bg-slate-950 text-slate-300 rounded-lg px-3 py-2 text-xs border border-slate-700" onchange="applyNormPreset()">
            <option value="8, 10, 15, 20">Slide 3.39 Marks (8, 10, 15, 20)</option>
            <option value="15, 121, 201, 421, 561, 601, 850">Slide 3.38 Decimal Scaling (15...850)</option>
            <option value="4, 8, 9, 15, 21, 21, 24, 25, 26, 28, 29, 34">Slide 3.16 Binning Array</option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-xs text-left border border-slate-800 rounded-lg overflow-hidden">
          <thead class="bg-slate-950 text-purple-300">
            <tr>
              <th class="p-2.5">Original Value</th>
              <th class="p-2.5">Min-Max [0, 1]</th>
              <th class="p-2.5">Z-Score (Standardized)</th>
              <th class="p-2.5">Decimal Scaling</th>
            </tr>
          </thead>
          <tbody id="normTableBody" class="divide-y divide-slate-800/60 font-mono text-slate-300">
          </tbody>
        </table>
      </div>
    </div>
  `;

  runNormCalc();
}

function applyNormPreset() {
  const sel = document.getElementById('normPreset');
  document.getElementById('rawNormInput').value = sel.value;
  runNormCalc();
}

function runNormCalc() {
  const input = document.getElementById('rawNormInput')?.value || "8, 10, 15, 20";
  const arr = input.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
  const tbody = document.getElementById('normTableBody');
  if (!tbody || arr.length === 0) return;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / arr.length;
  const std = Math.sqrt(variance) || 1;

  // Decimal scaling factor j
  const maxAbs = Math.max(...arr.map(Math.abs));
  let j = 0;
  while (maxAbs / Math.pow(10, j) >= 1) {
    j++;
  }
  const decDivisor = Math.pow(10, j);

  tbody.innerHTML = arr.map(v => {
    const minMax = (max - min) === 0 ? 0 : ((v - min) / (max - min)).toFixed(3);
    const zScore = ((v - mean) / std).toFixed(3);
    const decScale = (v / decDivisor).toFixed(4);
    return `
      <tr class="hover:bg-slate-800/40 transition">
        <td class="p-2.5 font-bold text-white">${v}</td>
        <td class="p-2.5 text-emerald-400">${minMax}</td>
        <td class="p-2.5 text-cyan-400">${zScore}</td>
        <td class="p-2.5 text-amber-400">${decScale} (j=${j})</td>
      </tr>
    `;
  }).join('');
}

/**
 * 4. Interactive Market Basket Lift & Support Explorer
 */
function renderMarketBasketCalculator() {
  const container = document.getElementById('basket-sim-container');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-rose-500/20">
      <h3 class="text-base font-bold text-white mb-2 flex items-center gap-2">
        <span class="text-rose-400">🛒</span> Market Basket Association & Lift Paradox Lab
      </h3>
      <p class="text-xs text-slate-400 mb-4">Test why high confidence is deceptive using the textbook's <strong>Basketball vs. Cereal</strong> & <strong>Games vs. Videos</strong> paradoxes.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs">
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <label class="block text-slate-300 font-semibold mb-1">Total Transactions (N):</label>
          <input type="number" id="mbTotal" value="5000" class="w-full bg-slate-800 rounded px-2.5 py-1 text-white font-mono" oninput="calcBasket()">
        </div>
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <label class="block text-slate-300 font-semibold mb-1">Bought Item A (e.g. Basketball):</label>
          <input type="number" id="mbCountA" value="3000" class="w-full bg-slate-800 rounded px-2.5 py-1 text-white font-mono" oninput="calcBasket()">
        </div>
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <label class="block text-slate-300 font-semibold mb-1">Bought Item B (e.g. Cereal):</label>
          <input type="number" id="mbCountB" value="3750" class="w-full bg-slate-800 rounded px-2.5 py-1 text-white font-mono" oninput="calcBasket()">
        </div>
      </div>

      <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 mb-4">
        <label class="block text-xs text-slate-300 font-semibold mb-1">Bought Both A & B together {A, B}:</label>
        <input type="number" id="mbCountAB" value="2000" class="w-full bg-slate-800 rounded px-2.5 py-1 text-white font-mono text-xs" oninput="calcBasket()">
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
        <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
          <div class="text-[11px] text-slate-400 uppercase font-mono">Support (A & B)</div>
          <div id="mbResSupport" class="text-xl font-black text-rose-400 mt-1">40.0%</div>
          <div class="text-[10px] text-slate-500 mt-0.5">2000 / 5000</div>
        </div>
        <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
          <div class="text-[11px] text-slate-400 uppercase font-mono">Confidence (A -> B)</div>
          <div id="mbResConfidence" class="text-xl font-black text-amber-400 mt-1">66.7%</div>
          <div class="text-[10px] text-slate-500 mt-0.5">2000 / 3000</div>
        </div>
        <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
          <div class="text-[11px] text-slate-400 uppercase font-mono">Lift Metric</div>
          <div id="mbResLift" class="text-xl font-black text-cyan-400 mt-1">0.89</div>
          <div id="mbLiftVerdict" class="text-[10px] text-rose-400 font-bold mt-0.5">Negative Affinity (&lt; 1)</div>
        </div>
      </div>

      <div class="mt-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-xs text-slate-300" id="mbInsightText">
        <strong>The Paradox Explained:</strong> Even though Confidence is high ($66.7\\%$), the baseline probability of buying Cereal overall is $75\\%$. Playing basketball actually <em>decreases</em> the likelihood of eating cereal! Without Lift, an analyst would make a flawed marketing choice.
      </div>
    </div>
  `;

  calcBasket();
}

function calcBasket() {
  const n = parseFloat(document.getElementById('mbTotal')?.value) || 5000;
  const a = parseFloat(document.getElementById('mbCountA')?.value) || 3000;
  const b = parseFloat(document.getElementById('mbCountB')?.value) || 3750;
  const ab = parseFloat(document.getElementById('mbCountAB')?.value) || 2000;

  const sup = (ab / n) * 100;
  const conf = a > 0 ? (ab / a) * 100 : 0;
  const pA = a / n;
  const pB = b / n;
  const pAB = ab / n;
  const lift = (pA * pB) > 0 ? pAB / (pA * pB) : 0;

  document.getElementById('mbResSupport').innerText = sup.toFixed(1) + '%';
  document.getElementById('mbResConfidence').innerText = conf.toFixed(1) + '%';
  document.getElementById('mbResLift').innerText = lift.toFixed(2);

  const verdict = document.getElementById('mbLiftVerdict');
  if (lift === 1) {
    verdict.innerText = "Independent (Lift = 1)";
    verdict.className = "text-[10px] text-slate-300 font-bold mt-0.5";
  } else if (lift > 1) {
    verdict.innerText = "Positive Association (Lift > 1)";
    verdict.className = "text-[10px] text-emerald-400 font-bold mt-0.5";
  } else {
    verdict.innerText = "Negative Association (Lift < 1)";
    verdict.className = "text-[10px] text-rose-400 font-bold mt-0.5";
  }
}


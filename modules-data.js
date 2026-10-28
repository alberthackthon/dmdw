/**
 * Comprehensive Dataset for Data Mining & Data Warehousing (DMDW)
 * Sequential coverage of all 10 Modules (Mod 2 to Mod 11)
 * Includes: Real-Life Analogies, Detailed Theory, Formula Cards, 
 * Step-by-Step Solved Numerical Examples, SVG Diagrams, and Revision Cards.
 */

const DMDW_MODULES = [
  {
    id: "mod2",
    num: "02",
    title: "Knowing the Data",
    subtitle: "Data Objects, Attribute Types, Central Tendency, Dispersion & Visualizations",
    color: "indigo",
    badge: "Foundations",
    analogy: {
      title: "The Supermarket Inventory Analogy",
      text: "Imagine running a massive grocery store. Every individual customer or product on your shelf is a <strong>Data Object</strong> (an entity). The customer's loyalty card number, their age, the price of an apple, and customer review rating are <strong>Attributes</strong> (characteristics). If you want to know how the typical customer spends, you calculate the <strong>Mean</strong> or <strong>Median</strong> (Central Tendency). If you want to know if everyone spends roughly $50 or if people spend anything from $2 to $500, you measure the <strong>Dispersion</strong> (Variance, Standard Deviation, and IQR)."
    },
    theory: [
      {
        heading: "1. Data Objects & Attributes",
        content: `
          <ul class="list-disc list-inside space-y-2 text-slate-300">
            <li><strong>Data Object:</strong> Represents an entity in a dataset (e.g., a customer in a sales database, a patient in a medical database, a transaction in a banking system). Also called samples, records, points, tuples.</li>
            <li><strong>Attribute:</strong> A data field or property representing a characteristic of a data object (e.g., <code>Cust_ID</code>, <code>Age</code>, <code>Salary</code>, <code>Eye_Color</code>). Also termed dimensions, features, or variables.</li>
          </ul>
        `
      },
      {
        heading: "2. Characteristics of Structured Data",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 class="font-bold text-indigo-400 text-sm mb-1">Dimensionality & Curse of Dimensionality</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                The number of attributes that data objects possess. In high-dimensional data, data becomes extremely sparse, distances between pairs of points become almost identical, and model performance degrades rapidly. Hence, <em>dimensionality reduction</em> is essential.
              </p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 class="font-bold text-indigo-400 text-sm mb-1">Sparsity vs. Density</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Describes how many cells in a table are zero or empty (sparsity) versus filled with meaningful information (density). Highly sparse data offers storage advantages because only non-zero values need indexing.
              </p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 class="font-bold text-indigo-400 text-sm mb-1">Resolution</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                Data properties change depending on scale. If resolution is <em>too fine</em>, patterns get buried in noise; if <em>too coarse</em>, patterns disappear entirely (e.g., hourly atmospheric pressure reveals storm movements, while yearly averages hide them).
              </p>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <h4 class="font-bold text-indigo-400 text-sm mb-1">Distribution</h4>
              <p class="text-xs text-slate-300 leading-relaxed">
                The general spread and arrangement of data values, summarized through measures of <em>central tendency</em> (center) and <em>dispersion</em> (spread).
              </p>
            </div>
          </div>
        `
      },
      {
        heading: "3. Attribute Types & Measurement Scales",
        content: `
          <div class="overflow-x-auto mt-2">
            <table class="w-full text-xs text-left border border-slate-700 rounded-lg overflow-hidden">
              <thead class="bg-slate-800 text-indigo-300">
                <tr>
                  <th class="p-2.5 border-b border-slate-700">Type</th>
                  <th class="p-2.5 border-b border-slate-700">Description</th>
                  <th class="p-2.5 border-b border-slate-700">Slide Examples</th>
                  <th class="p-2.5 border-b border-slate-700">Valid Operations</th>
                  <th class="p-2.5 border-b border-slate-700">Permissible Transformation</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td class="p-2.5 font-bold text-white">Nominal</td>
                  <td class="p-2.5">Names, symbols, categories without meaningful order.</td>
                  <td class="p-2.5">Hair_color (black, grey, white), Marital_status, Emp_ID</td>
                  <td class="p-2.5">Mode, Entropy, $\\chi^2$ test, contingency correlation</td>
                  <td class="p-2.5">Any permutation of values (one-to-one mapping)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-white">Binary</td>
                  <td class="p-2.5">Nominal attribute with only 2 states (0 or 1).<br><span class="text-emerald-400">Symmetric:</span> both states equally important (Gender: M/F).<br><span class="text-amber-400">Asymmetric:</span> one state is rare/vital (Medical test: +/-).</td>
                  <td class="p-2.5">Smoker (1/0), Medical test outcome</td>
                  <td class="p-2.5">SMC, Jaccard coefficient, contingency table</td>
                  <td class="p-2.5">Inversion (0 to 1, 1 to 0 for symmetric)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-white">Ordinal</td>
                  <td class="p-2.5">Values have meaningful ranking/order, but difference magnitude is unknown.</td>
                  <td class="p-2.5">Height (tall, medium, short), Ranks (Asst, Assoc, Prof), Grades</td>
                  <td class="p-2.5">Median, Percentiles, Rank correlation, Run tests (Mean NOT defined)</td>
                  <td class="p-2.5">Order-preserving monotonic function: $new\\_val = f(old\\_val)$</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-white">Interval-Scaled</td>
                  <td class="p-2.5">Equal-size units, differences are meaningful, but <strong>NO true zero-point</strong>.</td>
                  <td class="p-2.5">Calendar dates, Temperature in Celsius / Fahrenheit</td>
                  <td class="p-2.5">Mean, Standard Deviation, Pearson's correlation, t & F tests</td>
                  <td class="p-2.5">Linear affine: $new\\_val = a \\cdot old\\_val + b$ ($a > 0$)</td>
                </tr>
                <tr>
                  <td class="p-2.5 font-bold text-white">Ratio-Scaled</td>
                  <td class="p-2.5">Differences AND ratios meaningful, possesses <strong>inherent true zero</strong>.</td>
                  <td class="p-2.5">Years of experience, Kelvin temperature, Word frequency, Salary</td>
                  <td class="p-2.5">Geometric mean, Harmonic mean, Percent variation, All 4 properties</td>
                  <td class="p-2.5">Scaling: $new\\_val = a \\cdot old\\_val$ ($a > 0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="mt-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700 text-xs text-slate-300">
            <strong>Discrete vs. Continuous:</strong> Discrete attributes have a finite or countably infinite set of values (often integers, zip codes, profession). Continuous attributes have an infinite number of real values (represented as floating-point, e.g., height, rainfall).
          </div>
        `
      },
      {
        heading: "4. Types of Data Sets",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-indigo-300 block mb-1">1. Record Data</span>
              Relational records, Data matrix ($m \\times n$ points in numeric space), Document term vectors, Transaction itemsets.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-purple-300 block mb-1">2. Graph Data</span>
              World Wide Web hyperlinks, social networks, molecular chemical structures (atoms as nodes, bonds as edges).
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-cyan-300 block mb-1">3. Ordered Data</span>
              Temporal data (time-series stock prices), Sequential transaction logs, Genomic DNA sequences, Video sequences.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-emerald-300 block mb-1">4. Spatial & Multimedia</span>
              Maps (GIS spatial coordinates), climate sensor maps, image data, audio & video streams.
            </div>
          </div>
        `
      },
      {
        heading: "5. Measures of Central Tendency & Distribution Shapes",
        content: `
          <ul class="list-disc list-inside space-y-2 text-xs text-slate-300 mt-2">
            <li><strong>Mean (Arithmetic Average):</strong> $\\bar{x} = \\frac{1}{N}\\sum x_i$. Weighted mean: $\\bar{x} = \\frac{\\sum w_i x_i}{\\sum w_i}$. Sensitive to extreme outliers.</li>
            <li><strong>Trimmed Mean:</strong> Truncates top & bottom $k\\%$ extreme values before averaging. Prevents salary skew from billionaire CEOs!</li>
            <li><strong>Median:</strong> Middle value of ordered sequence. Separates higher $50\\%$ from lower $50\\%$. Resistant to outliers.</li>
            <li><strong>Mode:</strong> Value with highest frequency. Can be Unimodal, Bimodal, Trimodal, or Multimodal. For unimodal skewed distribution: $\\text{Mean} - \\text{Mode} \\approx 3(\\text{Mean} - \\text{Median})$.</li>
            <li><strong>Midrange:</strong> Average of largest and smallest values: $\\frac{\\max + \\min}{2}$.</li>
          </ul>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-center">
              <div class="text-xs font-bold text-indigo-300">Symmetrical Distribution</div>
              <div class="text-[11px] text-slate-400 mt-1">Mean = Median = Mode</div>
              <div class="text-[10px] text-slate-500 mt-1">Bell-curve shape; middle cuts distribution in perfect halves.</div>
            </div>
            <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-center">
              <div class="text-xs font-bold text-amber-300">Positive (Right) Skew</div>
              <div class="text-[11px] text-slate-400 mt-1">Mode &lt; Median &lt; Mean</div>
              <div class="text-[10px] text-slate-500 mt-1">Tail extends to the right. High extreme values pull the mean upward.</div>
            </div>
            <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-center">
              <div class="text-xs font-bold text-rose-300">Negative (Left) Skew</div>
              <div class="text-[11px] text-slate-400 mt-1">Mean &lt; Median &lt; Mode</div>
              <div class="text-[10px] text-slate-500 mt-1">Tail extends to the left. Low extreme values pull the mean downward.</div>
            </div>
          </div>
        `
      },
      {
        heading: "6. Measures of Dispersion, Quartiles & Visualizations",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Range:</strong> $\\text{Max} - \\text{Min}$. (For grouped data: Upper limit of highest class - Lower limit of lowest class).</li>
            <li><strong>Variance ($\\\\sigma^2$):</strong> Degree of spread around mean. $\\sigma^2 = \\frac{1}{N}\\sum(x_i - \\bar{x})^2$.</li>
            <li><strong>Standard Deviation (\\\\sigma):</strong> $\\sqrt{\\sigma^2}$. Measures spread in original units. <strong>Bessel's Correction:</strong> Uses $n-1$ in denominator for sample standard deviation to remove downward bias in estimating population variance.</li>
            <li><strong>Quantiles & Quartiles:</strong> Points dividing sorted data into equal parts. 2-quantile is the Median. 4-quantiles are $Q_1$ (25th percentile), $Q_2$ (Median, 50th), $Q_3$ (75th percentile).</li>
            <li><strong>Interquartile Range (IQR):</strong> $\\text{IQR} = Q_3 - Q_1$. Width of the central $50\\%$ of data.</li>
            <li><strong>Tukey's Fences for Outliers:</strong>
              <div class="font-mono text-emerald-400 my-1">
                Lower Fence = Q1 - 1.5 * IQR<br>
                Upper Fence = Q3 + 1.5 * IQR
              </div>
              Any observation beyond these fences is classified as an outlier!
            </li>
            <li><strong>Five-Number Summary & Boxplot:</strong> [Minimum, $Q_1$, Median, $Q_3$, Maximum]. Whiskers extend to min/max within fences; outliers plotted individually.</li>
            <li><strong>Histogram vs. Bar Chart:</strong> In histograms, the <em>area</em> represents frequency (crucial when bin widths vary) and bars are contiguous/adjacent without gaps. In bar charts, height alone represents count.</li>
            <li><strong>Quantile Plot & Q-Q Plot:</strong> Quantile plot maps $x_i$ against $f_i = \\frac{i - 0.5}{N}$. Q-Q Plot plots quantiles of one distribution against quantiles of another to check distribution shift.</li>
          </ul>
        `
      }
    ],
    formulas: [
      { name: "Grouped Mean", expr: "\\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i}", desc: "where $x_i$ is class midpoint, $f_i$ is frequency" },
      { name: "Grouped Median", expr: "\\text{Estimated Median} = L + \\left(\\frac{\\frac{n}{2} - B}{G}\\right) \\times w", desc: "$L$ = lower boundary, $n$ = total observations, $B$ = cumulative freq before median group, $G$ = freq of median group, $w$ = width" },
      { name: "Grouped Mode", expr: "\\text{Estimated Mode} = L + \\left(\\frac{f_m - f_{m-1}}{(f_m - f_{m-1}) + (f_m - f_{m+1})}\\right) \\times w", desc: "$f_m$ = modal group freq, $f_{m-1}$ = previous group freq, $f_{m+1}$ = next group freq" },
      { name: "Tukey's Outlier Fences", expr: "\\text{Lower} = Q_1 - 1.5(IQR), \\quad \\text{Upper} = Q_3 + 1.5(IQR)", desc: "Identifies extreme anomalies in boxplots" },
      { name: "Quantile Position", expr: "f_i = \\frac{i - 0.5}{N}", desc: "Indicates approximate fraction of data below or equal to $x_i$" }
    ],
    solvedExample: {
      title: "Slide 2.20–2.25 Solved Exercise: Grouped Mean, Median & Mode",
      problem: "Given the running times of 21 athletes in seconds: 53, 55, 56, 56, 58, 58, 59, 59, 60, 61, 61, 62, 62, 62, 64, 65, 65, 67, 68, 68, 70 grouped into intervals of width 5 (51-55: 2, 56-60: 7, 61-65: 8, 66-70: 4). Compute Estimated Mean, Median, and Mode.",
      steps: [
        "<strong>Step 1: Estimate Mean using Midpoints:</strong><br>Midpoints ($x$): 53, 58, 63, 68. Frequencies ($f$): 2, 7, 8, 4.<br>$\\sum f x = (53 \\times 2) + (58 \\times 7) + (63 \\times 8) + (68 \\times 4) = 106 + 406 + 504 + 272 = 1288$.<br>$\\bar{x} = \\frac{1288}{21} = 61.333$.",
        "<strong>Step 2: Estimate Median:</strong><br>$n = 21, n/2 = 10.5$. Cumulative frequencies: [2, 9, 17, 21]. Median class is 61-65 (actual boundaries 60.5 to 65.5).<br>$L = 60.5$, $B = 9$ (frequency before), $G = 8$ (median class freq), $w = 5$.<br>$\\text{Median} = 60.5 + \\left(\\frac{10.5 - 9}{8}\\right) \\times 5 = 60.5 + \\left(\\frac{1.5}{8}\\right) \\times 5 = 60.5 + 0.9375 = \\mathbf{61.4375}$.",
        "<strong>Step 3: Estimate Mode:</strong><br>Modal class is 61-65 since it has highest frequency ($f_m = 8$).<br>$f_{m-1} = 7$, $f_{m+1} = 4$, $L = 60.5$, $w = 5$.<br>$\\text{Mode} = 60.5 + \\left(\\frac{8 - 7}{(8 - 7) + (8 - 4)}\\right) \\times 5 = 60.5 + \\left(\\frac{1}{1 + 4}\\right) \\times 5 = 60.5 + 1.0 = \\mathbf{61.5}$."
      ]
    },
    revisionCard: {
      front: "Central Tendency vs Dispersion & Skewness Rules",
      back: "• Symmetrical: Mean = Median = Mode.<br>• Right Skewed: Mode < Median < Mean (tail pulled right).<br>• Left Skewed: Mean < Median < Mode (tail pulled left).<br>• Mean is sensitive to outliers; Median and Mode are robust.<br>• Tukey's Fences: $[Q_1 - 1.5 \\cdot IQR, \\; Q_3 + 1.5 \\cdot IQR]$."
    }
  },

  {
    id: "mod3",
    num: "03",
    title: "Data Preprocessing",
    subtitle: "Data Cleaning, Integration (Chi-Square & Pearson), Normalization, Wavelets & Sampling",
    color: "purple",
    badge: "Data Preparation",
    analogy: {
      title: "The Master Chef's Kitchen Prep Analogy",
      text: "You can't cook a Michelin-star dinner with unwashed, rotten, or mislabeled vegetables. Raw data from databases is messy: missing fields (incomplete), typos like age=48 birthday=1997 (inconsistent), or negative salaries (noisy). <strong>Data Preprocessing</strong> is like washing, trimming, peeling, standardizing ingredient measurements (normalization), and discarding spoiled items before actual cooking (mining)."
    },
    theory: [
      {
        heading: "1. Why Preprocess Data? Dirty Data Types",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Incomplete Data:</strong> Lacks attribute values or contains only aggregate data (e.g., <code>occupation = \"\"</code>).</li>
            <li><strong>Inconsistent Data:</strong> Discrepancies in codes or names (e.g., <code>Age = 48</code>, but <code>DOB = 02/07/1997</code>).</li>
            <li><strong>Noisy Data:</strong> Erroneous or outlier data (e.g., <code>Salary = -100</code>).</li>
          </ul>
          <p class="text-xs text-slate-400 mt-2">Major preprocessing tasks: <strong>Cleaning</strong>, <strong>Integration</strong>, <strong>Transformation</strong>, <strong>Reduction</strong>, and <strong>Discretization</strong>.</p>
        `
      },
      {
        heading: "2. Data Cleaning: Missing Values & Mechanisms",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-purple-300 block mb-1">MCAR (Missing Completely at Random)</span>
              Missingness is completely unsystematic and independent of any attribute.<br>
              <code>P(R | X_o, X_m) = P(R)</code>.<br>
              Analysis remains unbiased.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-pink-300 block mb-1">MAR (Missing at Random)</span>
              Missingness depends on observed data (other variables).<br>
              <code>P(R | X_o, X_m) = P(R | X_o)</code>.<br>
              E.g., Women over 30 being less likely to report income.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-amber-300 block mb-1">MNAR (Missing Not at Random)</span>
              Missingness depends on the unobserved missing value itself.<br>
              E.g., High-income earners deliberately refusing to disclose high salary.
            </div>
          </div>
          <div class="mt-3 p-3 bg-slate-800/50 rounded-lg text-xs text-slate-300">
            <strong>Handling Missing Values:</strong> (1) Ignore tuple (done when class label is missing), (2) Fill manually, (3) Use global constant (e.g. \"unknown\"), (4) Use mean/median of attribute, (5) Use class-conditional mean/median, (6) Most probable value via Bayesian, Regression, or Decision Trees.
          </div>
        `
      },
      {
        heading: "3. Handling Noisy Data: Equal-Width vs. Equal-Frequency Binning",
        content: `
          <p class="text-xs text-slate-300">Binning smooths sorted data values by consulting their neighborhood. Sorted data is split into buckets, then smoothed by:</p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300 mt-1">
            <li><strong>Bin Means:</strong> Each value in bin replaced with the bin's average.</li>
            <li><strong>Bin Medians:</strong> Each value replaced with the bin's median.</li>
            <li><strong>Bin Boundaries:</strong> Min and max are set as boundaries; each intermediate value is replaced by the closest boundary.</li>
          </ul>
          <p class="text-xs text-slate-400 mt-2"><strong>Equal Width:</strong> Range of each bin $w = \\frac{\\text{Max} - \\text{Min}}{\\text{Number of Bins}}$.<br><strong>Equal Frequency (Equal Depth):</strong> Each bin gets an equal count of elements ($N / \\text{Bins}$).</p>
        `
      },
      {
        heading: "4. Data Integration: Chi-Square ($\\\\chi^2$) & Pearson Correlation ($r$)",
        content: `
          <p class="text-xs text-slate-300">Data integration merges heterogeneous sources. Redundant attributes are detected using correlation tests:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-indigo-300 block mb-1">Chi-Square Test (Nominal Data)</span>
              $\\chi^2 = \\sum_{i=1}^c \\sum_{j=1}^r \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}$, where $E_{ij} = \\frac{\\text{count}(A=a_i) \\times \\text{count}(B=b_j)}{N}$.<br>
              Degrees of freedom $df = (r-1)(c-1)$. Large $\\chi^2$ rejects independence hypothesis.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-purple-300 block mb-1">Pearson Correlation (Numeric Data)</span>
              $r_{A,B} = \\frac{\\sum(a_i - \\bar{A})(b_i - \\bar{B})}{n \\sigma_A \\sigma_B} = \\frac{\\sum a_i b_i - n\\bar{A}\\bar{B}}{n \\sigma_A \\sigma_B}$.<br>
              Ranges between $[-1, +1]$. $r > 0$ positive, $r = 0$ independent, $r < 0$ negative.
            </div>
          </div>
        `
      },
      {
        heading: "5. Data Transformation & Normalization Methods",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Min-Max Normalization:</strong> Maps $v$ into $[\\text{new\\_min}, \\text{new\\_max}]$:<br>
            $v' = \\frac{v - \\min(A)}{\\max(A) - \\min(A)}(\\text{new\\_max} - \\text{new\\_min}) + \\text{new\\_min}$. Preserves relationships exactly.</li>
            <li><strong>Z-Score Normalization (Standardization):</strong> $v' = \\frac{v - \\bar{A}}{\\sigma_A}$. Unbounded range, centers mean at 0 with standard deviation 1. Crucial when outliers exist.</li>
            <li><strong>Decimal Scaling:</strong> $v' = \\frac{v}{10^j}$, where $j$ is smallest integer such that $\\max(|v'|) < 1$.</li>
          </ul>
        `
      },
      {
        heading: "6. Data Reduction, Wavelets, PCA & Sampling",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Attribute Subset Selection:</strong> Forward Selection, Backward Elimination, Combined, Decision-Tree Induction.</li>
            <li><strong>Discrete Wavelet Transform (DWT):</strong> Decomposes signals/data into frequency subbands using Haar wavelets (averaging and differencing pairs recursively). Preserves relative distances at multiple resolutions.</li>
            <li><strong>Principal Component Analysis (PCA):</strong> Projects $n$-dimensional correlated features onto $k \\le n$ orthogonal axes with maximum variance.</li>
            <li><strong>Sampling:</strong>
              <em>Probability:</em> Simple Random, Systematic (every $k$-th item), Stratified (homogeneous strata), Cluster (area-based), Multi-Stage.<br>
              <em>Non-Probability:</em> Quota (proportional/non-proportional), Purposive/Judgmental, Convenience, Snowball/Referral.
            </li>
            <li><strong>Discretization & Concept Hierarchies:</strong> Top-down (splitting) vs. Bottom-up (merging, like ChiMerge). Schema partial ordering (street &lt; city &lt; state &lt; country) or automatic generation by distinct value counts.</li>
          </ul>
        `
      }
    ],
    formulas: [
      { name: "Min-Max Normalization", expr: "v' = \\frac{v - \\min_A}{\\max_A - \\min_A}(\\text{new\\_max} - \\text{new\\_min}) + \\text{new\\_min}", desc: "Scales feature linearly into designated target bounds" },
      { name: "Z-Score Standardization", expr: "v' = \\frac{v - \\bar{A}}{\\sigma_A}", desc: "Transforms data to zero mean and unit variance" },
      { name: "Chi-Square Test", expr: "\\chi^2 = \\sum_{i=1}^c \\sum_{j=1}^r \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}", desc: "Where $E_{ij} = \\frac{\\text{RowTotal}_i \\times \\text{ColTotal}_j}{N}$" },
      { name: "Pearson's Correlation", expr: "r = \\frac{\\sum_{i=1}^n a_i b_i - n\\bar{A}\\bar{B}}{n \\sigma_A \\sigma_B}", desc: "Quantifies linear association between two numeric attributes" }
    ],
    solvedExample: {
      title: "Slide 3.39 Solved Exercise: Min-Max & Z-Score Normalization",
      problem: "Given marks: 8, 10, 15, 20. (a) Normalize to range [0, 1] using Min-Max Normalization. (b) Normalize using Z-score Normalization (Mean=13.25, SD=4.6).",
      steps: [
        "<strong>(a) Min-Max Normalization to [0, 1]:</strong><br>$\\min = 8, \\max = 20, \\max - \\min = 12$. Formula: $v' = \\frac{v - 8}{12}(1 - 0) + 0 = \\frac{v - 8}{12}$.<br>• For 8: $(8 - 8)/12 = \\mathbf{0}$<br>• For 10: $(10 - 8)/12 = 2/12 = \\mathbf{0.16}$<br>• For 15: $(15 - 8)/12 = 7/12 = \\mathbf{0.58}$<br>• For 20: $(20 - 8)/12 = 12/12 = \\mathbf{1.00}$<br>Normalized Marks: <strong>[0, 0.16, 0.58, 1.0]</strong>.",
        "<strong>(b) Z-Score Normalization:</strong><br>$\\bar{x} = 13.25, \\sigma = 4.6$. Formula: $z = \\frac{v - 13.25}{4.6}$.<br>• For 8: $(8 - 13.25)/4.6 = -5.25 / 4.6 = \\mathbf{-1.14}$<br>• For 10: $(10 - 13.25)/4.6 = -3.25 / 4.6 = \\mathbf{-0.70}$<br>• For 15: $(15 - 13.25)/4.6 = +1.75 / 4.6 = \\mathbf{+0.30}$<br>• For 20: $(20 - 13.25)/4.6 = +6.75 / 4.6 = \\mathbf{+1.40}$<br>Standardized Marks: <strong>[-1.14, -0.70, +0.30, +1.40]</strong>."
      ]
    },
    revisionCard: {
      front: "Equal-Width vs Equal-Frequency & Chi-Square Decision",
      back: "• Equal Width: $w = (\\max - \\min) / k$. May cause empty bins if skewed.<br>• Equal Frequency: Each bin has $N/k$ samples.<br>• Bin smoothing: Replace with mean, median, or closest boundary.<br>• $\\chi^2 > \\text{Critical Value}$: Reject independence $\\implies$ Attributes ARE correlated!"
    }
  },

  {
    id: "mod4",
    num: "04",
    title: "Data Similarity & Dissimilarity",
    subtitle: "Proximity Metrics for Nominal, Binary (SMC & Jaccard), Numeric, Ordinal & Mixed Types",
    color: "cyan",
    badge: "Distance Metrics",
    analogy: {
      title: "The DNA & Medical Diagnostics Analogy",
      text: "How do doctors determine if two patients have the same rare condition? They compare medical test results! For common tests (like gender), matching 'No' or 'Yes' matters equally (<strong>Symmetric Binary</strong>). But for rare diseases, two patients both testing positive for an exotic virus is huge evidence, while both testing negative tells us almost nothing (<strong>Asymmetric Binary / Jaccard Similarity</strong>). For physical attributes (height, blood pressure), they measure geometric distance (<strong>Euclidean & Manhattan</strong>)."
    },
    theory: [
      {
        heading: "1. Data Matrix vs. Dissimilarity Matrix",
        content: `
          <ul class="list-disc list-inside space-y-2 text-xs text-slate-300 mt-2">
            <li><strong>Data Matrix (Two-mode):</strong> $n \\times p$ matrix storing $n$ data objects across $p$ attributes. Rows = Objects, Columns = Features.</li>
            <li><strong>Dissimilarity Matrix (One-mode):</strong> $n \\times n$ triangular matrix storing pairwise distances $d(i, j)$ between all pairs of objects with $d(i, i) = 0$ and $d(i, j) = d(j, i)$.</li>
          </ul>
        `
      },
      {
        heading: "2. Proximity for Nominal & Binary Attributes",
        content: `
          <div class="space-y-2 text-xs text-slate-300 mt-2">
            <p><strong>Nominal Attributes:</strong> Dissimilarity $d(i, j) = \\frac{p - m}{p}$, Similarity $\\text{sim}(i, j) = 1 - d(i, j) = \\frac{m}{p}$, where $m$ is number of matches and $p$ is total attributes.</p>
            <p><strong>Binary Attributes (2x2 Contingency Table):</strong> Let $f_{11}$ = both 1, $f_{10}$ = object $i=1, j=0$, $f_{01}$ = object $i=0, j=1$, $f_{00}$ = both 0.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <span class="font-bold text-cyan-300 block mb-1">Symmetric Binary (e.g., Gender)</span>
                $\\text{Dissimilarity} = \\frac{f_{10} + f_{01}}{f_{11} + f_{10} + f_{01} + f_{00}}$<br>
                $\\text{SMC} = \\frac{f_{11} + f_{00}}{f_{11} + f_{10} + f_{01} + f_{00}}$
              </div>
              <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <span class="font-bold text-amber-300 block mb-1">Asymmetric Binary (e.g., Medical Tests)</span>
                $\\text{Jaccard Distance} = \\frac{f_{10} + f_{01}}{f_{11} + f_{10} + f_{01}}$<br>
                $\\text{Jaccard Similarity} = \\frac{f_{11}}{f_{11} + f_{10} + f_{01}}$ (Ignores $f_{00}$ negative-matches!)
              </div>
            </div>
          </div>
        `
      },
      {
        heading: "3. Proximity for Numeric Attributes: Minkowski Family",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Euclidean Distance ($L_2$ norm, $p=2$):</strong> $d(x, y) = \\sqrt{\\sum_{i=1}^n (x_i - y_i)^2}$. Straight line distance.</li>
            <li><strong>Manhattan Distance ($L_1$ norm, $p=1$):</strong> $d(x, y) = \\sum_{i=1}^n |x_i - y_i|$. City-block grid distance.</li>
            <li><strong>Minkowski Distance ($L_p$ norm):</strong> $d(x, y) = \\left(\\sum_{i=1}^n |x_i - y_i|^p\\right)^{1/p}$.</li>
          </ul>
        `
      },
      {
        heading: "4. Ordinal, Mixed Types & Cosine Similarity",
        content: `
          <ul class="list-disc list-inside space-y-2 text-xs text-slate-300 mt-2">
            <li><strong>Ordinal Attributes:</strong> Rank each value $r_{if} \\in \\{1, \\dots, M_f\\}$, normalize rank to $z_{if} = \\frac{r_{if} - 1}{M_f - 1} \\in [0, 1]$, then compute Euclidean or Manhattan distance.</li>
            <li><strong>Mixed Types:</strong> Combine all $p$ attributes into a single generalized metric:
              $d(i, j) = \\frac{\\sum_{f=1}^p \\delta_{ij}^{(f)} d_{ij}^{(f)}}{\\sum_{f=1}^p \\delta_{ij}^{(f)}}$, where $\\delta_{ij}^{(f)} = 0$ if missing or asymmetric binary $0-0$ match, else $1$.
            </li>
            <li><strong>Cosine Similarity (Text & Document Vectors):</strong> Measures angle $\\theta$ between term frequency vectors:
              $\\cos(x, y) = \\frac{x \\cdot y}{\\|x\\| \\|y\\|}$. $\\cos=1 \\implies$ identical orientation, $\\cos=0 \\implies 90^\\circ$ orthogonal (no common words).
            </li>
          </ul>
        `
      }
    ],
    formulas: [
      { name: "Jaccard Similarity", expr: "J(A, B) = \\frac{f_{11}}{f_{11} + f_{10} + f_{01}}", desc: "Similarity ignoring negative-negative mutual absences" },
      { name: "Minkowski Metric", expr: "d(x, y) = \\left( \\sum_{i=1}^n |x_i - y_i|^p \\right)^{1/p}", desc: "$p=1$: Manhattan, $p=2$: Euclidean" },
      { name: "Ordinal Normalization", expr: "z_{if} = \\frac{r_{if} - 1}{M_f - 1}", desc: "Maps discrete rank $r_{if}$ into continuous $[0, 1]$ interval" },
      { name: "Cosine Similarity", expr: "\\cos(x, y) = \\frac{\\sum x_i y_i}{\\sqrt{\\sum x_i^2} \\cdot \\sqrt{\\sum y_i^2}}", desc: "Angle-based similarity invariant to document length" }
    ],
    solvedExample: {
      title: "Slide 4.21 Solved Exercise: Cosine Similarity of Documents",
      problem: "Given two document term vectors:<br>d1 = [3, 2, 0, 5, 0, 0, 0, 2, 0, 0]<br>d2 = [1, 0, 0, 0, 0, 0, 0, 1, 0, 2]<br>Compute their Cosine Similarity.",
      steps: [
        "<strong>Step 1: Compute Dot Product ($d1 \\cdot d2$):</strong><br>$d1 \\cdot d2 = (3 \\times 1) + (2 \\times 0) + (0 \\times 0) + (5 \\times 0) + \\dots + (2 \\times 1) + (0 \\times 2) = 3 + 0 + 0 + 0 + 2 + 0 = \\mathbf{5}$.",
        "<strong>Step 2: Compute Euclidean Norm of $d1$ ($\\Vert d1 \\Vert$):</strong><br>$\\Vert d1 \\Vert = \\sqrt{3^2 + 2^2 + 0^2 + 5^2 + 2^2} = \\sqrt{9 + 4 + 25 + 4} = \\sqrt{42} \\approx \\mathbf{6.481}$.",
        "<strong>Step 3: Compute Euclidean Norm of $d2$ ($\\Vert d2 \\Vert$):</strong><br>$\\Vert d2 \\Vert = \\sqrt{1^2 + 0^2 + 1^2 + 2^2} = \\sqrt{1 + 1 + 4} = \\sqrt{6} \\approx \\mathbf{2.245}$.",
        "<strong>Step 4: Compute Cosine Value:</strong><br>$\\cos(d1, d2) = \\frac{5}{6.481 \\times 2.245} = \\frac{5}{14.549} = \\mathbf{0.3150}$ (or $\\approx 31.5\\%$ similarity)."
      ]
    },
    revisionCard: {
      front: "SMC vs. Jaccard & Cosine Angle Interpretation",
      back: "• Use <strong>SMC</strong> when 0-0 matches matter equally (e.g. gender).<br>• Use <strong>Jaccard</strong> when 0-0 matches provide no information (e.g. both patients don't have leprosy).<br>• Cosine = 1 (parallel, high similarity), Cosine = 0 ($90^\\circ$, completely unrelated)."
    }
  },

  {
    id: "mod5",
    num: "05",
    title: "Data Warehousing",
    subtitle: "4 Core Characteristics, OLTP vs OLAP, 3-Layer & 3-Tier Architectures, ETL & Data Marts",
    color: "amber",
    badge: "Architecture",
    analogy: {
      title: "The Corner Store Cash Register vs. Corporate Headquarters Analogy",
      text: "When you buy milk at a local supermarket, the cash register needs to update inventory in milliseconds—that is <strong>OLTP (Online Transaction Processing)</strong>. But at year-end, the CEO doesn't care about your 1 carton of milk; they ask: <em>'Show me total dairy revenue by region across the last 5 years'</em>. Querying the live cash register for that would crash checkout lines! Instead, all daily transactions are cleaned, combined, and stored in a historical <strong>Data Warehouse</strong> for <strong>OLAP (Online Analytical Processing)</strong>."
    },
    theory: [
      {
        heading: "1. Definition & 4 Inmon Characteristics",
        content: `
          <p class="text-xs text-slate-300">A Data Warehouse is a <strong>subject-oriented</strong>, <strong>integrated</strong>, <strong>time-variant</strong>, and <strong>nonvolatile</strong> collection of data in support of management's decision-making process.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-amber-400 block mb-1">Subject-Oriented</span>
              Organized around major business subjects (e.g., Customer, Product, Sales) rather than daily operational transactions.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-amber-400 block mb-1">Integrated</span>
              Constructed by uniting heterogeneous data sources into consistent naming conventions, unit codes, and schema formats.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-amber-400 block mb-1">Time-Variant</span>
              Stores historical data over years (every key contains explicit or implicit time timestamps).
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-amber-400 block mb-1">Nonvolatile</span>
              Data is read-only! Never modified or deleted during operational queries; updated periodically during offline batch loads.
            </div>
          </div>
        `
      },
      {
        heading: "2. Operational Database (OLTP) vs. Data Warehouse (OLAP)",
        content: `
          <div class="overflow-x-auto mt-2">
            <table class="w-full text-xs text-left border border-slate-700 rounded-lg overflow-hidden">
              <thead class="bg-slate-800 text-amber-300">
                <tr>
                  <th class="p-2 border-b border-slate-700">Feature</th>
                  <th class="p-2 border-b border-slate-700">Operational Database (OLTP)</th>
                  <th class="p-2 border-b border-slate-700">Data Warehouse (OLAP)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-300">
                <tr><td class="p-2 font-bold text-white">Users</td><td class="p-2">Thousands (Clerks, DBAs, clients)</td><td class="p-2">Hundreds (Managers, executives, data analysts)</td></tr>
                <tr><td class="p-2 font-bold text-white">Workload</td><td class="p-2">Preset, repetitive transactions (ACID)</td><td class="p-2">Ad-hoc, complex analytical queries</td></tr>
                <tr><td class="p-2 font-bold text-white">Access</td><td class="p-2">Read and write (hundreds of records)</td><td class="p-2">Mainly Read-only (millions of records)</td></tr>
                <tr><td class="p-2 font-bold text-white">Goal</td><td class="p-2">Run day-to-day business operations</td><td class="p-2">Support strategic decision making</td></tr>
                <tr><td class="p-2 font-bold text-white">Data Granularity</td><td class="p-2">Raw, detailed, both numeric & text</td><td class="p-2">Summarized, consolidated, mainly numeric</td></tr>
                <tr><td class="p-2 font-bold text-white">Time Horizon</td><td class="p-2">Current snapshot only (real-time)</td><td class="p-2">Historical (5 to 10+ years of trends)</td></tr>
                <tr><td class="p-2 font-bold text-white">Database Design</td><td class="p-2">Highly Normalized (3NF) to eliminate redundancy</td><td class="p-2">Denormalized Star/Snowflake schemas for fast joins</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "3. Warehouse Architecture & 3-Tier Design",
        content: `
          <ul class="list-disc list-inside space-y-2 text-xs text-slate-300 mt-2">
            <li><strong>Single-Layer Architecture:</strong> Virtual multidimensional view of operational data created by middleware. Fails because analytical workloads directly degrade transactional performance.</li>
            <li><strong>Two-Layer Architecture:</strong> Separates operational sources from the central data warehouse + data marts via ETL.</li>
            <li><strong>Three-Layer Architecture:</strong> Adds a <em>Reconciled Layer</em> between staging and warehouse. Creates a common reference model for the entire enterprise, isolating extraction from warehouse loading.</li>
            <li><strong>Three-Tier Implementation:</strong>
              <br>• <em>Bottom Tier:</em> Data sources, staging, ETL routines, and central repository.
              <br>• <em>Middle Tier:</em> OLAP Server (ROLAP, MOLAP, or HOLAP engine).
              <br>• <em>Top Tier:</em> Front-end client tools (Query engines, dashboards, data mining algorithms).
            </li>
          </ul>
        `
      },
      {
        heading: "4. Data Staging & The ETL Pipeline",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 mt-2 text-xs">
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-indigo-400 block mb-1">Extraction</strong>
              Gathers raw data from heterogeneous sources. <em>Static:</em> initial full populate. <em>Incremental:</em> captures daily deltas.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-purple-400 block mb-1">Cleansing</strong>
              Detects and repairs duplicate, missing, impossible, and conflicting values.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-amber-400 block mb-1">Transformation</strong>
              Converts legacy data to uniform storage format, matches equivalent fields, normalizes units.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-emerald-400 block mb-1">Loading</strong>
              Sorts, checks integrity, builds indexes. <em>Refresh:</em> complete rewrite. <em>Update:</em> appends new deltas.
            </div>
          </div>
          <p class="text-xs text-slate-300 mt-3"><strong>Warehouse Models:</strong> <em>Enterprise Warehouse</em> (corporate-wide, large scale), <em>Data Mart</em> (department-specific, e.g. Marketing; Dependent, Independent, or Hybrid), <em>Virtual Warehouse</em> (views over operational DB).</p>
        `
      }
    ],
    formulas: [
      { name: "Inmon's 4 Pillars", expr: "\\text{DWH} = \\{ \\text{Subject-Oriented}, \\text{Integrated}, \\text{Time-Variant}, \\text{Nonvolatile} \\}", desc: "The definitive criteria distinguishing warehouses from operational DBs" },
      { name: "3-Tier OLAP Stack", expr: "\\text{Storage (Bottom)} \\longrightarrow \\text{OLAP Engine (Middle)} \\longrightarrow \\text{BI Client (Top)}", desc: "Decoupled physical architecture" }
    ],
    solvedExample: {
      title: "Slide 5.16 Solved Analysis: Dependent vs Independent vs Hybrid Data Marts",
      problem: "Explain how a company should choose between Dependent, Independent, and Hybrid Data Mart architectures.",
      steps: [
        "<strong>Dependent Data Mart:</strong> Populated directly from the enterprise data warehouse (EDW). Advantage: High consistency, shared metadata. Disadvantage: Must wait for the large EDW to be built first.",
        "<strong>Independent Data Mart:</strong> Created directly from operational sources without any central EDW. Advantage: Rapid deployment (weeks), low initial cost. Disadvantage: Creates isolated data silos with conflicting metrics.",
        "<strong>Hybrid Data Mart:</strong> Ingests consolidated corporate data from the central EDW while also directly ingesting fast operational streams. Provides best balance of speed and consistency."
      ]
    },
    revisionCard: {
      front: "OLTP vs. OLAP & Inmon 4 Properties",
      back: "• OLTP: Clerks, ACID, normalized, current, fast read/write.<br>• OLAP: Analysts, multidimensional, historical, read-only bulk query.<br>• 4 Properties: Subject-Oriented, Integrated, Time-Variant, Nonvolatile.<br>• Reconciled Layer: Cleaned enterprise-wide reference dataset."
    }
  },

  {
    id: "mod6",
    num: "06",
    title: "Data Warehouse Schema & OLAP Operations",
    subtitle: "Lattice of Cuboids, Star vs Snowflake vs Galaxy, DMQL, Distributive/Algebraic/Holistic & Cube Ops",
    color: "emerald",
    badge: "Multidimensional Modeling",
    analogy: {
      title: "The Rubik's Cube of Corporate Sales Analogy",
      text: "Think of your business data as a giant 3D Rubik's Cube. One axis is <strong>Time</strong> (Jan, Feb, Mar), another is <strong>Location</strong> (Delhi, Kolkata, Bhubaneswar), and the third is <strong>Product</strong> (TV, Mobile, Laptop). Slicing the cube is like popping off the February layer. Dicing is selecting a smaller 2x2 sub-block (e.g. TV sales in Delhi during Jan-Feb). Rolling up is zooming out from City to State, and Drilling down is zooming in to daily stores."
    },
    theory: [
      {
        heading: "1. Data Cubes & Lattice of Cuboids",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Data Cube:</strong> Models multidimensional data consisting of <strong>Dimensions</strong> (perspectives: Time, Item, Location) and <strong>Facts/Measures</strong> (numerical values: Dollars_Sold, Units_Sold).</li>
            <li><strong>Lattice of Cuboids:</strong> A data cube consists of a lattice of cuboids at varying degrees of summarization.
              <br>• <em>0-D Apex Cuboid:</em> Top-most cuboid holding highest summarization (e.g., Grand Total Sales).
              <br>• <em>n-D Base Cuboid:</em> Lowest level of abstraction holding individual entity records.
              <br>• Total cuboids for $n$ dimensions with no hierarchies $= 2^n$.
            </li>
          </ul>
        `
      },
      {
        heading: "2. Data Warehouse Schema Architectures",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-emerald-400 block mb-1">Star Schema</span>
              Central fact table connected directly to radial, highly <strong>denormalized</strong> dimension tables.<br>
              <em>Pros:</em> Fast queries, simple metadata, fewer joins.<br>
              <em>Cons:</em> High data redundancy in dimension tables.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-cyan-400 block mb-1">Snowflake Schema</span>
              A refinement of Star schema where dimension hierarchies are <strong>normalized</strong> into sub-tables (e.g., Location $\\to$ City $\\to$ Country).<br>
              <em>Pros:</em> Saves storage, zero redundancy.<br>
              <em>Cons:</em> Degraded query performance due to multiple joins.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-purple-400 block mb-1">Fact Constellation (Galaxy)</span>
              Multiple fact tables (e.g., Sales Fact and Shipping Fact) sharing common dimension tables.<br>
              <em>Pros:</em> Models complex enterprise-wide business operations.
            </div>
          </div>
        `
      },
      {
        heading: "3. Cube Measures: Distributive, Algebraic & Holistic",
        content: `
          <div class="space-y-2 text-xs text-slate-300 mt-2">
            <p><strong>Distributive:</strong> Can be computed by partitioning data into chunks, computing on each chunk, and combining results: <code>Count()</code>, <code>Sum()</code>, <code>Min()</code>, <code>Max()</code>.</p>
            <p><strong>Algebraic:</strong> Computed by an algebraic formula using $m$ distributive arguments: <code>Avg() = Sum() / Count()</code>, <code>Min_N()</code>, <code>Max_N()</code>.</p>
            <p><strong>Holistic:</strong> No constant bound on storage size needed to describe a sub-aggregate. Cannot characteristically combine sub-results: <code>Median()</code>, <code>Mode()</code>, <code>Rank()</code>.</p>
          </div>
        `
      },
      {
        heading: "4. OLAP Servers: ROLAP vs. MOLAP vs. HOLAP",
        content: `
          <div class="overflow-x-auto mt-2">
            <table class="w-full text-xs text-left border border-slate-700 rounded-lg overflow-hidden">
              <thead class="bg-slate-800 text-emerald-300">
                <tr>
                  <th class="p-2 border-b border-slate-700">Type</th>
                  <th class="p-2 border-b border-slate-700">Storage Engine</th>
                  <th class="p-2 border-b border-slate-700">Advantages</th>
                  <th class="p-2 border-b border-slate-700">Disadvantages</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-300">
                <tr><td class="p-2 font-bold text-white">ROLAP</td><td class="p-2">Relational / Extended-RDBMS</td><td class="p-2">Highly scalable, works on existing RDBMS, no pre-computation bounds</td><td class="p-2">Slow query performance on complex joins</td></tr>
                <tr><td class="p-2 font-bold text-white">MOLAP</td><td class="p-2">Array-based multidimensional storage</td><td class="p-2">Ultra-fast retrieval, optimal for slicing/dicing</td><td class="p-2">Poor storage efficiency for sparse datasets</td></tr>
                <tr><td class="p-2 font-bold text-white">HOLAP</td><td class="p-2">Hybrid (Detailed in RDBMS, Aggregates in arrays)</td><td class="p-2">Best of both worlds: fast aggregation + large capacity</td><td class="p-2">Complex architecture and potential maintenance overlaps</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        heading: "5. OLAP Operations Walkthrough",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 mt-2 text-xs">
            <div class="p-2 bg-slate-800 rounded border border-slate-700">
              <strong class="text-emerald-400 block mb-0.5">Roll-Up</strong>
              Climbs up concept hierarchy (e.g. City $\\to$ Country) or reduces dimension.
            </div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700">
              <strong class="text-cyan-400 block mb-0.5">Drill-Down</strong>
              Steps down hierarchy (e.g. Quarter $\\to$ Month) or adds dimension.
            </div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700">
              <strong class="text-amber-400 block mb-0.5">Slice</strong>
              Selects a single dimension value, reducing cube dimensionality by 1.
            </div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700">
              <strong class="text-rose-400 block mb-0.5">Dice</strong>
              Defines a subcube by selection on two or more dimensions.
            </div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700">
              <strong class="text-purple-400 block mb-0.5">Pivot</strong>
              Rotates data axes in 3D/2D space to provide alternative perspectives.
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Lattice Total Cuboids", expr: "T = 2^n", desc: "Total cuboids for $n$ orthogonal dimensions without hierarchies" },
      { name: "Algebraic Aggregate", expr: "\\text{Avg}(S) = \\frac{\\sum_{i} \\text{Sum}(S_i)}{\\sum_{i} \\text{Count}(S_i)}", desc: "Algebraic function computed from distributive primitives" },
      { name: "DMQL Cube Definition", expr: "\\textbf{define cube } sales\\_star [time, item, branch, location]: \\\\ \\quad dollars\\_sold = sum(sales\\_in\\_dollars)", desc: "Standard Data Mining Query Language syntax" }
    ],
    solvedExample: {
      title: "Slide 6.30–6.31 Solved Query: OLAP Operations on Sales Cube",
      problem: "Given a 3D sales cube with Dimensions [Location: Delhi, Kolkata, BBS], [Time: Jan, Feb, Mar], and [Product: TV, Mob, Others]. (a) Express query: 'Total items sold in March in BBS'. (b) Express query: 'Number of mobiles sold in BBS across all 3 months'.",
      steps: [
        "<strong>(a) Total items sold in March in BBS:</strong><br>1. Perform Slice on Location: $\\text{Slice}_{\\text{Location}='\\text{BBS}'}$.<br>2. Perform Slice on Month: $\\text{Slice}_{\\text{Month}='\\text{March}'}$.<br>3. Aggregate across Product: $\\text{Roll-Up}_{\\text{Product}}(\\text{Slice}_{\\text{Location}='\\text{BBS}'} + \\text{Slice}_{\\text{Month}='\\text{March}'}) = \\sum(32 + 29 + 42) = \\mathbf{103}$.",
        "<strong>(b) Number of mobiles sold in BBS in all 3 months:</strong><br>1. Slice Location: $\\text{Slice}_{\\text{Location}='\\text{BBS}'}$.<br>2. Slice Product: $\\text{Slice}_{\\text{Product}='\\text{Mob}'}$.<br>3. Sum over all months (Jan=15, Feb=62, Mar=29): $15 + 62 + 29 = \\mathbf{106}$."
      ]
    },
    revisionCard: {
      front: "Star vs Snowflake & Distributive/Algebraic/Holistic",
      back: "• Star = Denormalized, 1-join, fast.<br>• Snowflake = Normalized sub-tables, saves disk, slow joins.<br>• Distributive: Count, Sum, Min, Max.<br>• Algebraic: Avg, StdDev.<br>• Holistic: Median, Mode, Rank.<br>• Slice = 1 dimension fixed. Dice = Subcube with multi-conditions."
    }
  },

  {
    id: "mod7",
    num: "07",
    title: "Frequent Pattern Mining & Association Rules",
    subtitle: "Market Basket Analysis, Apriori Algorithm, DHP Hash, Partitioning, FP-Growth & Lift Paradox",
    color: "rose",
    badge: "Pattern Mining",
    analogy: {
      title: "The Supermarket Diaper-and-Beer Analogy",
      text: "A famous retail legend found that on Friday evenings, young fathers buying baby diapers also bought six-packs of beer! <strong>Market Basket Analysis</strong> discovers which items customers buy together. The <strong>Support</strong> is how often the bundle appears in all shopping carts. The <strong>Confidence</strong> is: <em>'If you put diapers in your cart, what is the chance you also grab beer?'</em>. But beware: if $80\\%$ of all shoppers buy milk anyway, seeing Milk with Bread might be pure coincidence—which is why we use <strong>Lift</strong> to reveal real correlation!"
    },
    theory: [
      {
        heading: "1. Terminology: Support, Confidence & Closed/Maximal Itemsets",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Support ($s$):</strong> Fraction of total transactions containing $A \\cup B$: $\\text{Support}(A \\Rightarrow B) = P(A \\cup B) = \\frac{\\text{count}(A \\cup B)}{N}$.</li>
            <li><strong>Confidence ($c$):</strong> Conditional probability of $B$ given $A$: $\\text{Confidence}(A \\Rightarrow B) = P(B|A) = \\frac{\\text{count}(A \\cup B)}{\\text{count}(A)}$.</li>
            <li><strong>Strong Rule:</strong> An association rule $A \\Rightarrow B$ satisfying both $\\text{Support} \\ge \\text{minsup}$ and $\\text{Confidence} \\ge \\text{minconf}$.</li>
            <li><strong>Closed Frequent Itemset:</strong> An itemset $X$ is closed if none of its immediate supersets has the <em>exact same support</em> as $X$. (Lossless compression).</li>
            <li><strong>Maximal Frequent Itemset:</strong> An itemset $X$ is maximal frequent if none of its immediate supersets is frequent at all.</li>
          </ul>
        `
      },
      {
        heading: "2. The Apriori Algorithm & Anti-Monotonicity",
        content: `
          <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 mt-2">
            <strong class="text-rose-400 block mb-1">Apriori Property (Anti-Monotonicity Principle):</strong>
            <em>All non-empty subsets of a frequent itemset must also be frequent!</em><br>
            Conversely: <em>If any itemset is infrequent, none of its supersets can ever be frequent</em> (Apriori Pruning Principle). E.g., if $\\{A, B\\}$ is infrequent, discard $\\{A, B, C\\}$ immediately without scanning the database!
          </div>
          <p class="text-xs text-slate-400 mt-2"><strong>Two Steps:</strong> (1) <em>Join Step:</em> $L_{k-1} \\bowtie L_{k-1}$ generates candidate itemsets $C_k$. (2) <em>Prune Step:</em> Scan database, count supports, discard candidates below minsup.</p>
        `
      },
      {
        heading: "3. Methods to Improve Apriori Efficiency",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-2 text-xs">
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-rose-300 block mb-1">1. Hash-based (DHP)</strong>
              Hashes 2-itemsets into buckets during $k=1$ scan using $h(x, y) = ((\\text{order } x) \\times 10 + \\text{order } y) \\bmod 7$. Bins below minsup prune candidates.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-amber-300 block mb-1">2. Transaction Reduction</strong>
              Transactions not containing any frequent $k$-itemsets are removed from subsequent database passes.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-emerald-300 block mb-1">3. Partitioning (2 Scans)</strong>
              Divides DB into $n$ partitions. Any globally frequent itemset MUST be locally frequent in at least one partition!
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-cyan-300 block mb-1">4. Sampling</strong>
              Mines a small random sample $S$ with lowered threshold $LS$. Validated in a second pass over remaining DB.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-purple-300 block mb-1">5. Dynamic Itemset Counting (DIC)</strong>
              Adds new candidate itemsets at intermediate checkpoints as soon as all their subsets appear frequent.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-indigo-300 block mb-1">6. Vertical Format (ECLAT)</strong>
              Transforms $[\\text{TID}: \\text{items}] \\to [\\text{item}: \\text{TID\\_set}]$. Support counted via lightning-fast set intersections!
            </div>
          </div>
        `
      },
      {
        heading: "4. FP-Growth (Frequent Pattern Growth)",
        content: `
          <p class="text-xs text-slate-300 mt-1">Apriori suffers from huge candidate generation ($O(2^m)$ search space) and repeated database scans. <strong>FP-Growth</strong> eliminates candidate generation using a divide-and-conquer strategy in just <strong>2 scans</strong>:</p>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-300 mt-1">
            <li><strong>Scan 1:</strong> Count item frequencies, discard infrequent items, sort frequent items descending.</li>
            <li><strong>Scan 2:</strong> Insert transactions as prefix paths into a compact <strong>FP-Tree</strong> and build a Header Table with node-links.</li>
            <li><strong>Recursive Mining:</strong> For each item from bottom up: build Conditional Pattern Base $\\to$ Conditional FP-Tree $\\to$ concatenate with suffix pattern.</li>
          </ul>
        `
      },
      {
        heading: "5. Why Confidence is Misleading: The Lift Measure",
        content: `
          <p class="text-xs text-slate-300">A rule can have high support and confidence but still be completely deceptive if the consequent has a very high baseline probability (e.g. Basketball $\\Rightarrow$ Cereal in slide 7.50). <strong>Lift</strong> resolves this:</p>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-300 mt-2">
            $\\text{Lift}(A \\Rightarrow B) = \\frac{P(A \\cup B)}{P(A) P(B)}$.
            <br>• $\\text{Lift} = 1$: $A$ and $B$ are completely independent!
            <br>• $\\text{Lift} > 1$: Positively correlated (buying $A$ increases chance of buying $B$).
            <br>• $\\text{Lift} < 1$: Negatively correlated (buying $A$ decreases chance of buying $B$).
          </div>
        `
      }
    ],
    formulas: [
      { name: "Support", expr: "\\text{Support}(A \\Rightarrow B) = \\frac{\\text{count}(A \\cup B)}{N}", desc: "Percentage of all transactions containing both $A$ and $B$" },
      { name: "Confidence", expr: "\\text{Confidence}(A \\Rightarrow B) = \\frac{\\text{count}(A \\cup B)}{\\text{count}(A)}", desc: "Conditional probability of purchasing $B$ given $A$" },
      { name: "Lift Metric", expr: "\\text{Lift}(A \\Rightarrow B) = \\frac{P(A \\cup B)}{P(A) \\cdot P(B)}", desc: "Ratio of observed co-occurrence to expected independent co-occurrence" }
    ],
    solvedExample: {
      title: "Slide 7.20–7.21 Solved Apriori Walkthrough",
      problem: "Dataset of 9 transactions: T100:{I1,I2,I5}, T200:{I2,I4}, T300:{I2,I3}, T400:{I1,I2,I4}, T500:{I1,I3}, T600:{I2,I3}, T700:{I1,I3}, T800:{I1,I2,I3,I5}, T900:{I1,I2,I3}. min_sup = 2 (22%), min_conf = 70%. Mine frequent itemsets.",
      steps: [
        "<strong>Pass 1 ($C_1 \\to L_1$):</strong><br>Counts: I1:6, I2:7, I3:6, I4:2, I5:2. All meet min_sup $\\ge 2$.<br>$L_1 = \\{\\{I1\\}, \\{I2\\}, \\{I3\\}, \\{I4\\}, \\{I5\\}\\}$.",
        "<strong>Pass 2 ($L_1 \\bowtie L_1 \\to C_2 \\to L_2$):</strong><br>Candidate counts: {I1,I2}:4, {I1,I3}:4, {I1,I4}:1 (pruned), {I1,I5}:2, {I2,I3}:4, {I2,I4}:2, {I2,I5}:2, {I3,I4}:0, {I3,I5}:1, {I4,I5}:0.<br>$L_2 = \\{\\{I1,I2\\}, \\{I1,I3\\}, \\{I1,I5\\}, \\{I2,I3\\}, \\{I2,I4\\}, \\{I2,I5\\}\\}$.",
        "<strong>Pass 3 ($L_2 \\bowtie L_2 \\to C_3 \\to L_3$):</strong><br>Joining gives candidates {I1,I2,I3} and {I1,I2,I5}. Checking 2-item subsets shows all are in $L_2$.<br>Counts in DB: {I1,I2,I3}: 2, {I1,I2,I5}: 2.<br>$L_3 = \\{\\{I1,I2,I3\\}, \\{I1,I2,I5\\}\\}$.",
        "<strong>Rule Generation for {I1,I2,I5}:</strong><br>Rule $I1 \\wedge I2 \\Rightarrow I5$: Support = 2/9, $\\text{Conf} = \\frac{\\text{count}(I1,I2,I5)}{\\text{count}(I1,I2)} = \\frac{2}{4} = 50\\%$ (Rejection: &lt; 70%).<br>Rule $I1 \\wedge I5 \\Rightarrow I2$: Support = 2/9, $\\text{Conf} = \\frac{2}{\\text{count}(I1,I5)} = \\frac{2}{2} = \\mathbf{100\\%}$ (STRONG RULE!)."
      ]
    },
    revisionCard: {
      front: "Apriori Property & Lift Interpretation",
      back: "• Anti-monotonicity: Every subset of a frequent itemset must be frequent.<br>• Pruning: If any subset is infrequent, do not generate the superset.<br>• Lift = 1: Independent. Lift > 1: Positive affinity. Lift < 1: Negative affinity.<br>• FP-Growth needs only 2 scans, no candidate generation!"
    }
  },

  {
    id: "mod8",
    num: "08",
    title: "Classification & Prediction",
    subtitle: "Decision Tree Induction (ID3/C4.5 Entropy & Information Gain), Naive Bayes & KNN",
    color: "blue",
    badge: "Supervised Learning",
    analogy: {
      title: "The Doctor Diagnosing Symptoms Analogy",
      text: "When you visit a clinic, the doctor doesn't just guess your illness. They use a mental <strong>Decision Tree</strong>: <em>'Do you have a fever?'</em> If Yes $\\to$ <em>'Do you have a cough?'</em> If Yes $\\to$ Flu; If No $\\to$ Common Cold. <strong>Naive Bayes</strong> is like a probability calculator weighing each independent clue. And <strong>K-Nearest Neighbors (KNN)</strong> is asking your 5 closest neighbors what sickness they had last week to see what is currently spreading!"
    },
    theory: [
      {
        heading: "1. Supervised Learning & 2-Step Process",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Classification vs. Prediction:</strong> Classification predicts discrete categorical class labels (e.g. Yes/No, Fraud/Legit). Prediction models predict continuous numerical values (e.g., house price, test score).</li>
            <li><strong>Two-Step Process:</strong> (1) <em>Model Construction (Training Phase):</em> Model is trained on $\\ge 60\\%$ labeled dataset. (2) <em>Model Usage (Testing Phase):</em> Evaluated on independent $20-40\\%$ test data to estimate predictive accuracy.</li>
          </ul>
        `
      },
      {
        heading: "2. Decision Tree Induction & Shannon Entropy",
        content: `
          <p class="text-xs text-slate-300">A flowchart-like structure: Root/Internal nodes represent tests on attributes, branches represent test outcomes, and leaf nodes represent class predictions.</p>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-300 mt-2">
            <strong class="text-blue-400 block mb-1">Attribute Selection Measure (Information Gain - ID3):</strong>
            Calculates reduction in uncertainty (entropy) when splitting on attribute $A$:
            <br>• Expected Information of dataset $D$: $\\text{Info}(D) = -\\sum_{i=1}^m p_i \\log_2(p_i)$
            <br>• Information needed after splitting on attribute $A$: $\\text{Info}_A(D) = \\sum_{j=1}^v \\frac{|D_j|}{|D|} \\times \\text{Info}(D_j)$
            <br>• Information Gain: $\\text{Gain}(A) = \\text{Info}(D) - \\text{Info}_A(D)$
            <br>The attribute with the <strong>highest Information Gain</strong> is chosen as the splitting node!
          </div>
        `
      },
      {
        heading: "3. Naive Bayesian Classification & Laplace Smoothing",
        content: `
          <p class="text-xs text-slate-300">Based on Bayes' Theorem: $P(C_i|X) = \\frac{P(X|C_i)P(C_i)}{P(X)}$. Since $P(X)$ is constant across all classes, we choose the class maximizing $P(X|C_i)P(C_i)$.</p>
          <p class="text-xs text-slate-300 mt-1"><strong>Naive Assumption (Class-Conditional Independence):</strong> Assumes attributes are mutually independent given the class: $P(X|C_i) = \\prod_{k=1}^n P(x_k|C_i)$.</p>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-300 mt-2">
            <strong class="text-amber-400 block mb-0.5">The Zero-Probability Problem & Laplacian Correction:</strong>
            If a categorical feature value has 0 occurrences in training data for a class, the entire product becomes zero! <strong>Laplace Correction</strong> fixes this by adding 1 to the numerator and $q$ (number of distinct values) to the denominator.
          </div>
        `
      },
      {
        heading: "4. Rule-Based Classification & K-Nearest Neighbors (KNN)",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Rule-Based:</strong> IF condition (antecedent) THEN conclusion (consequent).
              <br>• $\\text{Coverage}(R) = \\frac{n_{\\text{covers}}}{|D|}$, $\\text{Accuracy}(R) = \\frac{n_{\\text{correct}}}{n_{\\text{covers}}}$.
              <br>• Generated <em>indirectly</em> from decision trees or <em>directly</em> via Sequential Covering.
            </li>
            <li><strong>K-Nearest Neighbors (KNN - Lazy Learner):</strong> Does zero training upfront! Simply stores all training tuples. When a new test point arrives, calculates distance to all points, picks the $K$ closest neighbors, and assigns majority class label.
              <br>• Typically choose odd $K$ (e.g. $K=5$) to prevent voting ties.
            </li>
          </ul>
        `
      }
    ],
    formulas: [
      { name: "Shannon Entropy", expr: "\\text{Info}(D) = -\\sum_{i=1}^m p_i \\log_2(p_i)", desc: "Quantifies impurity/randomness in dataset" },
      { name: "Information Gain", expr: "\\text{Gain}(A) = \\text{Info}(D) - \\sum_{j=1}^v \\frac{|D_j|}{|D|} \\text{Info}(D_j)", desc: "Gain in information after partitioning on attribute $A$" },
      { name: "Naive Bayes Rule", expr: "P(C_i|X) \\propto P(C_i) \\prod_{k=1}^n P(x_k|C_i)", desc: "Class decision based on independent feature likelihoods" },
      { name: "Laplace Smoothing", expr: "P(x_k|C_i) = \\frac{n_k + 1}{n + q}", desc: "Prevents zero probability multiplication collapse" }
    ],
    solvedExample: {
      title: "Slide 8.28–8.29 Solved ID3 Exercise: Buys Computer Dataset",
      problem: "In 14 customer records: 9 Buy=Yes, 5 Buy=No. Find Information Gain of 'Age' (Youth: 2 Yes/3 No; Middle_Aged: 4 Yes/0 No; Senior: 3 Yes/2 No).",
      steps: [
        "<strong>Step 1: Expected Info of whole dataset $D$:</strong><br>$\\text{Info}(D) = -\\left(\\frac{9}{14}\\log_2\\frac{9}{14} + \\frac{5}{14}\\log_2\\frac{5}{14}\\right) = \\mathbf{0.940}$ bits.",
        "<strong>Step 2: Compute Conditional Entropy $\\text{Info}_{\\text{Age}}(D)$ for each branch:</strong><br>• Youth (5 items: 2 Yes, 3 No): $I(2, 3) = -[\\frac{2}{5}\\log_2\\frac{2}{5} + \\frac{3}{5}\\log_2\\frac{3}{5}] = 0.971$<br>• Middle_Aged (4 items: 4 Yes, 0 No): $I(4, 0) = -[\\frac{4}{4}\\log_2 1 + 0] = 0$ (Pure node!)<br>• Senior (5 items: 3 Yes, 2 No): $I(3, 2) = -[\\frac{3}{5}\\log_2\\frac{3}{5} + \\frac{2}{5}\\log_2\\frac{2}{5}] = 0.971$<br>$\\text{Info}_{\\text{Age}}(D) = \\frac{5}{14}(0.971) + \\frac{4}{14}(0) + \\frac{5}{14}(0.971) = \\mathbf{0.694}$.",
        "<strong>Step 3: Calculate Gain(Age):</strong><br>$\\text{Gain}(\\text{Age}) = 0.940 - 0.694 = \\mathbf{0.246}$.<br>Comparing against other attributes: Gain(Income)=0.029, Gain(Student)=0.151, Gain(Credit)=0.048.<br><strong>Conclusion:</strong> Age has highest Gain $\\implies$ Selected as ROOT NODE!"
      ]
    },
    revisionCard: {
      front: "ID3 Attribute Selection & Lazy vs Eager Learning",
      back: "• Pure subset has Entropy = 0. Maximum entropy = 1 (50-50 mix).<br>• Highest Information Gain = Best Split.<br>• Eager learners (Decision Tree, Naive Bayes) generalize upfront.<br>• Lazy learners (KNN) store everything and calculate at query time."
    }
  },

  {
    id: "mod9",
    num: "09",
    title: "SVM, Neural Networks & Classifier Evaluation",
    subtitle: "Maximum Margin Hyperplanes, Multilayer Perceptrons, Backpropagation Derivation & Confusion Matrix",
    color: "violet",
    badge: "Advanced Classifiers",
    analogy: {
      title: "The Grand Fence & Student Exam Grading Analogy",
      text: "Imagine two feuding villages separated by an open field. A <strong>Support Vector Machine (SVM)</strong> doesn't just build any fence between them—it builds the fence right down the exact center with the widest possible safety buffer (<strong>Maximum Margin</strong>) anchored by the closest border houses (<strong>Support Vectors</strong>). Meanwhile, <strong>Backpropagation</strong> is like a student learning for an exam: they answer a practice question (feed-forward), see the error grade, trace back which topics they misunderstood, and tweak their brain synapses (weights) so they score higher next time!"
    },
    theory: [
      {
        heading: "1. Support Vector Machines (SVM)",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Objective:</strong> Finds the optimal decision boundary (hyperplane in $n$-dimensional space) that separates classes with the <strong>Maximum Marginal Hyperplane (MMH)</strong>.</li>
            <li><strong>Support Vectors:</strong> The critical training data points closest to the hyperplane. Removing other non-support points changes nothing!</li>
            <li><strong>Linear vs. Non-Linear SVM:</strong> Linear SVM directly separates linearly separable data with a flat plane. For non-linear data, SVM uses the <strong>Kernel Trick</strong> to project inputs into a higher-dimensional space where linear separation is possible.</li>
          </ul>
        `
      },
      {
        heading: "2. Artificial Neural Networks (ANN) & Perceptrons",
        content: `
          <p class="text-xs text-slate-300">Inspired by biological neurons (dendrites = inputs, soma = cell body summing inputs, axon = output signal, synapses = connection weights).</p>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-300 mt-2">
            <strong class="text-violet-400 block mb-1">Perceptron Mathematical Model:</strong>
            Inputs $\\{x_1, \\dots, x_n\\}$ are multiplied by weights $w_i$, added to bias $\\theta_j$: $I_j = \\sum w_{ij} x_i + \\theta_j$.
            <br>The net sum passes through an <strong>Activation Function</strong> (Step, Sign, or continuous Sigmoid: $Y_j = \\frac{1}{1 + e^{-I_j}}$).
            <br>Perceptron learning rule weight update: $\\Delta w_{ij} = \\eta \\cdot \\text{Err}_j \\cdot Y_i$.
          </div>
        `
      },
      {
        heading: "3. Backpropagation Algorithm: 4 Sequential Steps",
        content: `
          <ol class="list-decimal list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Initialize Weights:</strong> Assign small random weights (e.g., $-0.5$ to $+0.5$) and biases.</li>
            <li><strong>Feed-Forward:</strong> Compute net input $I_j = \\sum w_{ij} x_i + \\theta_j$ and sigmoid output $Y_j = \\frac{1}{1 + e^{-I_j}}$ through hidden and output layers.</li>
            <li><strong>Backpropagate Error:</strong>
              <br>• Output layer unit: $\\text{Err}_k = Y_k (1 - Y_k)(T_k - Y_k)$
              <br>• Hidden layer unit: $\\text{Err}_j = Y_j (1 - Y_j) \\sum_k \\text{Err}_k w_{jk}$
            </li>
            <li><strong>Weight & Bias Updates:</strong> $\\Delta w_{ij} = \\eta \\cdot \\text{Err}_j \\cdot Y_i$, $\\Delta \\theta_j = \\eta \\cdot \\text{Err}_j$. Repeat over multiple epochs until convergence!</li>
          </ol>
        `
      },
      {
        heading: "4. Genetic Algorithms (GA) & 5 Evolutionary Phases",
        content: `
          <p class="text-xs text-slate-300">Based on biological evolution and 'survival of the fittest':</p>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-2 text-center text-xs">
            <div class="p-2 bg-slate-800 rounded border border-slate-700 font-medium text-slate-300">1. Initial Population (Bit strings)</div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700 font-medium text-slate-300">2. Fitness Function (Accuracy)</div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700 font-medium text-slate-300">3. Selection (Fittest parents)</div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700 font-medium text-slate-300">4. Crossover & Mutation</div>
            <div class="p-2 bg-slate-800 rounded border border-slate-700 font-medium text-slate-300">5. Termination Check</div>
          </div>
        `
      },
      {
        heading: "5. Performance Evaluation of Classifiers (Confusion Matrix)",
        content: `
          <div class="overflow-x-auto mt-2">
            <table class="w-full text-xs text-left border border-slate-700 rounded-lg overflow-hidden">
              <thead class="bg-slate-800 text-violet-300">
                <tr><th class="p-2">Metric</th><th class="p-2">Formula</th><th class="p-2">Plain English Meaning</th></tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-slate-300">
                <tr><td class="p-2 font-bold text-white">Accuracy</td><td class="p-2 font-mono">$\\frac{TP + TN}{TP + TN + FP + FN}$</td><td class="p-2">Total correct predictions over all samples</td></tr>
                <tr><td class="p-2 font-bold text-white">Precision</td><td class="p-2 font-mono">$\\frac{TP}{TP + FP}$</td><td class="p-2">Out of all predicted positives, how many are truly positive?</td></tr>
                <tr><td class="p-2 font-bold text-white">Recall (Sensitivity)</td><td class="p-2 font-mono">$\\frac{TP}{TP + FN}$</td><td class="p-2">Out of all actual positives, how many did the model catch?</td></tr>
                <tr><td class="p-2 font-bold text-white">Specificity</td><td class="p-2 font-mono">$\\frac{TN}{FP + TN}$</td><td class="p-2">Out of all actual negatives, how many were correctly rejected?</td></tr>
                <tr><td class="p-2 font-bold text-white">F1-Score</td><td class="p-2 font-mono">$\\frac{2 \\cdot Precision \\cdot Recall}{Precision + Recall}$</td><td class="p-2">Harmonic mean balancing precision and recall</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Output Layer Error", expr: "\\text{Err}_k = Y_k(1 - Y_k)(T_k - Y_k)", desc: "Derivative of sigmoid multiplied by prediction error" },
      { name: "Hidden Layer Error", expr: "\\text{Err}_j = Y_j(1 - Y_j) \\sum_k \\text{Err}_k w_{jk}", desc: "Backpropagated error from downstream layer nodes" },
      { name: "Weight Update", expr: "\\Delta w_{ij} = \\eta \\cdot \\text{Err}_j \\cdot Y_i", desc: "Gradient descent step scaled by learning rate $\\eta$" },
      { name: "F1-Score", expr: "F_1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}", desc: "Harmonic mean penalized by extreme imbalances" }
    ],
    solvedExample: {
      title: "Slide 9.41 Solved Exercise: Pregnancy Classifier Confusion Matrix",
      problem: "Evaluate a medical classifier on 100 people (40 pregnant, 60 not pregnant). Given TP=30, FN=10, FP=5, TN=55. Calculate Accuracy, Precision, Recall, Specificity, and F1-Score.",
      steps: [
        "<strong>Accuracy:</strong> $\\frac{TP + TN}{\\text{Total}} = \\frac{30 + 55}{100} = \\frac{85}{100} = \\mathbf{85\\%}$.",
        "<strong>Precision:</strong> $\\frac{TP}{TP + FP} = \\frac{30}{30 + 5} = \\frac{30}{35} = \\mathbf{85.71\\% \\approx 86\\%}$.",
        "<strong>Recall (Sensitivity):</strong> $\\frac{TP}{TP + FN} = \\frac{30}{30 + 10} = \\frac{30}{40} = \\mathbf{75\\%}$.",
        "<strong>Specificity:</strong> $\\frac{TN}{FP + TN} = \\frac{55}{5 + 55} = \\frac{55}{60} = \\mathbf{91.67\\% \\approx 92\\%}$.",
        "<strong>F1-Score:</strong> $\\frac{2 \\times 85.71 \\times 75}{85.71 + 75} = \\frac{12856.5}{160.71} = \\mathbf{80\\%}$."
      ]
    },
    revisionCard: {
      front: "Backpropagation Error vs Confusion Matrix Formulas",
      back: "• Output Error: $Y_k(1 - Y_k)(T_k - Y_k)$.<br>• Hidden Error: $Y_j(1 - Y_j)\\sum \\text{Err}_k w_{jk}$.<br>• Type I Error = False Positive ($FP$). Type II Error = False Negative ($FN$).<br>• Precision = $TP/(TP+FP)$, Recall = $TP/(TP+FN)$, Specificity = $TN/(TN+FP)$."
    }
  },

  {
    id: "mod10",
    num: "10",
    title: "Prediction & Regression",
    subtitle: "Overfitting vs Underfitting, Linear Regression Equations, Least Squares & Evaluation (MSE, RMSE, MAE, MAPE)",
    color: "fuchsia",
    badge: "Numeric Forecasting",
    analogy: {
      title: "The Tailored Suit vs. Baggy Clothes Analogy",
      text: "Imagine buying a suit. If you buy a stiff generic sack with zero shaping, it fits nobody—that is <strong>Underfitting</strong> (high bias, too simple). If you hire an obsessed tailor who measures your exact posture down to the millimeter on a Tuesday when you're bloated, the suit fits only that single minute, and if you take one deep breath it rips—that is <strong>Overfitting</strong> (high variance, memorizing noise). A great regression model is a clean tailored suit that fits comfortably in any scenario!"
    },
    theory: [
      {
        heading: "1. Overfitting vs. Underfitting (Bias-Variance Tradeoff)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-amber-300 block mb-1">Underfitting (High Bias, Low Variance)</span>
              Model is too simplistic to capture underlying trends. Poor performance on BOTH training data and test data.<br>
              <em>Fixes:</em> Increase model complexity, add features, reduce noise, train longer.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-rose-300 block mb-1">Overfitting (Low Bias, High Variance)</span>
              Model memorizes training data including noise and outliers. Near-perfect training score, but fails miserably on unseen test data.<br>
              <em>Fixes:</em> K-fold cross-validation, feature pruning, early stopping, regularization.
            </div>
          </div>
        `
      },
      {
        heading: "2. Linear Regression & Derivation of $a$ and $b$",
        content: `
          <p class="text-xs text-slate-300">Models relationship between explanatory variable $X$ and response variable $Y$ as a straight line: $Y = a + bX + e$.</p>
          <div class="p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs text-slate-300 mt-2">
            The best line minimizes the Sum of Squared Errors: $\\sum (y_i - \\hat{y}_i)^2$.
            <br>• Slope: $b = \\frac{n \\sum XY - \\sum X \\sum Y}{n \\sum X^2 - (\\sum X)^2}$
            <br>• Intercept: $a = \\frac{\\sum Y}{n} - b \\frac{\\sum X}{n} = \\bar{Y} - b\\bar{X}$
          </div>
        `
      },
      {
        heading: "3. Performance Evaluation Metrics for Regression",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 text-xs">
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-fuchsia-300 block mb-1">Mean Squared Error (MSE)</strong>
              $\\text{MSE} = \\frac{1}{n}\\sum_{i=1}^n (y_i - \\hat{y}_i)^2$. Heavily penalizes large outlier errors!
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-cyan-300 block mb-1">Root Mean Squared Error (RMSE)</strong>
              $\\text{RMSE} = \\sqrt{\\text{MSE}}$. Restores error metric back into original units of target $Y$.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-emerald-300 block mb-1">Mean Absolute Error (MAE)</strong>
              $\\text{MAE} = \\frac{1}{n}\\sum_{i=1}^n |y_i - \\hat{y}_i|$. Linear penalty, robust to outliers.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-slate-700">
              <strong class="text-amber-300 block mb-1">Mean Absolute Percentage Error (MAPE)</strong>
              $\\text{MAPE} = \\frac{100\\%}{n}\\sum_{i=1}^n \\left|\\frac{y_i - \\hat{y}_i}{y_i}\\right|$. Scale-independent relative metric.
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Regression Slope b", expr: "b = \\frac{n\\sum XY - \\sum X \\sum Y}{n\\sum X^2 - (\\sum X)^2}", desc: "Rate of change of $Y$ per unit change in $X$" },
      { name: "Regression Intercept a", expr: "a = \\bar{Y} - b\\bar{X}", desc: "Value of $Y$ when $X = 0$" },
      { name: "MSE", expr: "\\text{MSE} = \\frac{1}{n}\\sum_{i=1}^n (y_i - \\hat{y}_i)^2", desc: "Mean squared error metric" },
      { name: "MAPE", expr: "\\text{MAPE} = \\frac{100\\%}{n}\\sum_{i=1}^n \\left| \\frac{y_i - \\hat{y}_i}{y_i} \\right|", desc: "Scale-independent percentage error" }
    ],
    solvedExample: {
      title: "Slide 10.12 Solved Exercise: Insurance Sales Regression",
      problem: "Given $n=10$ companies with agent count $X$ (in 100s) and sales volume $Y$ (in $1000s): $\\sum X = 80$, $\\sum Y = 255$, $\\sum XY = 2289$, $\\sum X^2 = 756$. Find regression equation and predict sales for 1000 agents ($X=10$).",
      steps: [
        "<strong>Step 1: Compute slope $b$:</strong><br>$b = \\frac{10(2289) - (80 \\times 255)}{10(756) - 80^2} = \\frac{22890 - 20400}{7560 - 6400} = \\frac{2490}{1160} = \\mathbf{2.1466}$.",
        "<strong>Step 2: Compute intercept $a$:</strong><br>$a = \\frac{255}{10} - 2.1466\\left(\\frac{80}{10}\\right) = 25.5 - 2.1466(8) = 25.5 - 17.1728 = \\mathbf{8.3272}$.",
        "<strong>Step 3: Linear Regression Equation:</strong><br>$\\hat{Y} = 8.3272 + 2.1466 X$.",
        "<strong>Step 4: Predict for $X=10$ (1000 agents):</strong><br>$\\hat{Y} = 8.3272 + 2.1466(10) = 8.3272 + 21.466 = \\mathbf{29.7938}$ (in $1000s $\\implies \\mathbf{\\$29,794}$).",
        "<strong>Evaluation metrics on slide 10.20:</strong> Total squared error over 12 months $= 56 \\implies \\text{MSE} = 56/12 = 4.6667$, $\\text{RMSE} = \\sqrt{4.6667} = 2.16 \\approx 2.2$, $\\text{MAPE} = 3.64\\%$, $\\text{MAE} = 1.833$."
      ]
    },
    revisionCard: {
      front: "Regression Formulas & Error Metrics",
      back: "• Slope: $b = \\frac{n\\sum XY - \\sum X \\sum Y}{n\\sum X^2 - (\\sum X)^2}$.<br>• Intercept: $a = \\bar{Y} - b\\bar{X}$.<br>• MSE penalizes big mistakes quadratically.<br>• RMSE has same units as target $Y$.<br>• Underfit = High Bias (too simple). Overfit = High Variance (memorizes noise)."
    }
  },

  {
    id: "mod11",
    num: "11",
    title: "Clustering Algorithms",
    subtitle: "K-Means Iterations, K-Medoids PAM Swaps, Hierarchical Linkages, Dendrograms & DBSCAN",
    color: "pink",
    badge: "Unsupervised Discovery",
    analogy: {
      title: "The Constellation & Party Crowd Analogy",
      text: "If you walk into a crowded party where you know nobody, you naturally notice groups of people chatting together. Nobody labeled them: one group is around the buffet, another near the DJ. That is <strong>Clustering</strong>! <strong>K-Means</strong> picks 3 random center spots on the floor and asks people to group near the closest spot, then moves the spot to the average position of the crowd. <strong>DBSCAN</strong> looks for densely packed dance circles while labeling lone people standing quietly in empty hallways as <strong>Noise / Outliers</strong>."
    },
    theory: [
      {
        heading: "1. Cluster Analysis & Major Categories",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Clustering Goal:</strong> High <em>intra-cluster similarity</em> (points in same cluster are very close) and low <em>inter-cluster similarity</em> (points in different clusters are far apart).</li>
            <li><strong>Categories:</strong>
              <br>• <em>Partitioning:</em> Divides $n$ objects into $k$ distinct partitions (K-Means, K-Medoids).
              <br>• <em>Hierarchical:</em> Agglomerative (bottom-up merge) or Divisive (top-down split).
              <br>• <em>Density-Based:</em> Grows clusters based on density thresholds, discovers arbitrary shapes (DBSCAN).
              <br>• <em>Grid-Based:</em> Quantizes object space into multi-resolution cells (STING).
              <br>• <em>Model-Based:</em> Fits hypothesized statistical models.
            </li>
          </ul>
        `
      },
      {
        heading: "2. K-Means Algorithm vs. K-Medoids (PAM)",
        content: `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs">
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-pink-300 block mb-1">K-Means Algorithm</span>
              Represented by a calculated <strong>Centroid</strong> (mean of all cluster points).<br>
              <em>Pros:</em> Fast $O(tkn)$, simple.<br>
              <em>Cons:</em> Extremely sensitive to outliers (one extreme value pulls the centroid), requires preset $K$, fails on non-spherical clusters.
            </div>
            <div class="p-3 bg-slate-800 rounded-lg border border-slate-700">
              <span class="font-bold text-purple-300 block mb-1">K-Medoids (PAM)</span>
              Represented by an <strong>actual data point (Medoid)</strong> with minimum sum of distances.<br>
              <em>Pros:</em> Highly robust against outliers and noise.<br>
              <em>Cons:</em> Computationally expensive $O(k(n-k)^2)$, doesn't scale well to massive datasets.
            </div>
          </div>
        `
      },
      {
        heading: "3. Hierarchical Linkages & Dendrograms",
        content: `
          <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-300 mt-2">
            <li><strong>Single-Linkage (MIN):</strong> Distance = shortest distance between any pair of points $(p_i, p_j)$ across two clusters. Sensitive to chaining.</li>
            <li><strong>Complete-Linkage (MAX):</strong> Distance = longest distance between any pair of points. Produces compact spherical clusters.</li>
            <li><strong>Average-Linkage:</strong> Distance = average distance between all cross-cluster point pairs.</li>
            <li><strong>Dendrogram:</strong> A tree representation showing how clusters merge level by level. Slicing horizontally at any distance threshold yields the desired number of clusters!</li>
          </ul>
        `
      },
      {
        heading: "4. DBSCAN (Density-Based Spatial Clustering of Applications with Noise)",
        content: `
          <p class="text-xs text-slate-300">Discovers clusters of arbitrary shape and isolates noise without needing preset $K$. Governed by two parameters: $\\epsilon$ (Eps radius) and $MinPts$ (density threshold).</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2 text-xs">
            <div class="p-2.5 bg-slate-800 rounded border border-emerald-500/40">
              <strong class="text-emerald-400 block mb-0.5">Core Point</strong>
              Has $\\ge MinPts$ within its $\\epsilon$-neighborhood (including itself).
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-amber-500/40">
              <strong class="text-amber-400 block mb-0.5">Border Point</strong>
              Has $&lt; MinPts$ within $\\epsilon$, but falls inside the $\\epsilon$-radius of a Core Point.
            </div>
            <div class="p-2.5 bg-slate-800 rounded border border-rose-500/40">
              <strong class="text-rose-400 block mb-0.5">Noise Point</strong>
              Neither a Core Point nor density-reachable from any core point. Plotted as an outlier!
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Euclidean Centroid Distance", expr: "D = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}", desc: "Assignment metric for standard K-Means" },
      { name: "K-Medoid Total Swap Cost", expr: "\\text{Cost} = \\sum_{C_i} \\sum_{P_j \\in C_i} |P_j - C_i|", desc: "Manhattan distance cost evaluating candidate medoid swaps" },
      { name: "DBSCAN Density Condition", expr: "|N_\\epsilon(p)| \\ge MinPts", desc: "Criteria for point $p$ to be declared a core generator" }
    ],
    solvedExample: {
      title: "Slide 11.8–11.11 Solved K-Means Numerical Walkthrough",
      problem: "Cluster 8 points: (2,10), (2,5), (8,4), (5,8), (7,5), (6,4), (1,2), (4,9) into K=3 clusters. Initial seeds: C1(2,10), C2(5,8), C3(1,2). Compute 4 iterations until convergence.",
      steps: [
        "<strong>Iteration 1:</strong><br>Calculate Euclidean distances from all 8 points to C1, C2, C3.<br>• Assignments: Cluster 1 = {(2,10)}, Cluster 2 = {(8,4), (5,8), (7,5), (6,4), (4,9)}, Cluster 3 = {(2,5), (1,2)}.<br>• Recalculate Centroids:<br>C1 = (2, 10)<br>C2 = ((8+5+7+6+4)/5, (4+8+5+4+9)/5) = (30/5, 30/5) = <strong>(6, 6)</strong><br>C3 = ((2+1)/2, (5+2)/2) = <strong>(1.5, 3.5)</strong>.",
        "<strong>Iteration 2:</strong><br>Re-calculate distances to (2,10), (6,6), (1.5, 3.5).<br>Point (4,9) moves to C1 (dist=2.24 vs dist=3.60 to C2)!<br>• Assignments: Cluster 1 = {(2,10), (4,9)}, Cluster 2 = {(8,4), (5,8), (7,5), (6,4)}, Cluster 3 = {(2,5), (1,2)}.<br>• New Centroids: C1=(3, 9.5), C2=(6.5, 5.25), C3=(1.5, 3.5).",
        "<strong>Iteration 3:</strong><br>Point (5,8) moves to C1 (dist=2.5 to C1 vs 3.13 to C2)!<br>• Assignments: Cluster 1 = {(2,10), (5,8), (4,9)}, Cluster 2 = {(8,4), (7,5), (6,4)}, Cluster 3 = {(2,5), (1,2)}.<br>• New Centroids: C1=(3.67, 9), C2=(7, 4.33), C3=(1.5, 3.5).",
        "<strong>Iteration 4:</strong><br>Distances recalculated. <strong>Zero points change cluster assignments!</strong><br><strong>Convergence stopping condition met!</strong> Final clusters:<br>C1 = {(2,10), (5,8), (4,9)}<br>C2 = {(8,4), (7,5), (6,4)}<br>C3 = {(2,5), (1,2)}."
      ]
    },
    revisionCard: {
      front: "K-Means vs K-Medoids & DBSCAN Core/Border/Noise",
      back: "• K-Means uses virtual Centroid (mean). Vulnerable to outliers.<br>• K-Medoids uses actual dataset point (Medoid). Outlier-resistant.<br>• DBSCAN: Core ($\\ge MinPts$), Border ($< MinPts$ but near Core), Noise (isolated).<br>• DBSCAN finds arbitrary non-spherical shapes!"
    }
  }
];

// Quick Access Formula Vault condensed from all slides
const FORMULA_VAULT = [
  { mod: "Mod 02", title: "Grouped Median", eq: "L + \\frac{\\frac{n}{2} - B}{G} \\times w", tag: "Central Tendency" },
  { mod: "Mod 02", title: "Grouped Mode", eq: "L + \\frac{f_m - f_{m-1}}{(f_m - f_{m-1}) + (f_m - f_{m+1})} \\times w", tag: "Central Tendency" },
  { mod: "Mod 02", title: "Tukey Fences", eq: "[Q_1 - 1.5\\text{IQR}, \\; Q_3 + 1.5\\text{IQR}]", tag: "Outlier Bounds" },
  { mod: "Mod 03", title: "Chi-Square Test", eq: "\\chi^2 = \\sum \\frac{(O - E)^2}{E}", tag: "Nominal Correlation" },
  { mod: "Mod 03", title: "Min-Max Scaling", eq: "v' = \\frac{v - \\min}{\\max - \\min}(\\Delta_{\\text{new}}) + \\text{new\\_min}", tag: "Normalization" },
  { mod: "Mod 03", title: "Z-Score", eq: "v' = \\frac{v - \\bar{x}}{\\sigma}", tag: "Standardization" },
  { mod: "Mod 04", title: "Jaccard Distance", eq: "d_J = \\frac{f_{10} + f_{01}}{f_{11} + f_{10} + f_{01}}", tag: "Asymmetric Binary" },
  { mod: "Mod 04", title: "Cosine Similarity", eq: "\\text{sim}(x, y) = \\frac{x \\cdot y}{\\|x\\| \\|y\\|}", tag: "Vector Space" },
  { mod: "Mod 06", title: "Lattice of Cuboids", eq: "2^n \\text{ cuboids for } n \\text{ dimensions}", tag: "Data Cube" },
  { mod: "Mod 07", title: "Apriori Confidence", eq: "c(A \\Rightarrow B) = \\frac{\\text{Support}(A \\cup B)}{\\text{Support}(A)}", tag: "Association Rule" },
  { mod: "Mod 07", title: "Lift Correlation", eq: "\\text{Lift}(A \\Rightarrow B) = \\frac{P(A \\cup B)}{P(A)P(B)}", tag: "Correlation Metric" },
  { mod: "Mod 08", title: "Shannon Entropy", eq: "\\text{Info}(D) = -\\sum p_i \\log_2(p_i)", tag: "Decision Trees" },
  { mod: "Mod 08", title: "Information Gain", eq: "\\text{Gain}(A) = \\text{Info}(D) - \\text{Info}_A(D)", tag: "ID3 Attribute Selection" },
  { mod: "Mod 08", title: "Laplace Estimator", eq: "P(x|C) = \\frac{count + 1}{\\text{total} + q}", tag: "Bayes Smoothing" },
  { mod: "Mod 09", title: "Backprop Output Err", eq: "\\text{Err}_k = Y_k(1 - Y_k)(T_k - Y_k)", tag: "Neural Networks" },
  { mod: "Mod 09", title: "Backprop Hidden Err", eq: "\\text{Err}_j = Y_j(1 - Y_j)\\sum \\text{Err}_k w_{jk}", tag: "Neural Networks" },
  { mod: "Mod 09", title: "F1-Score", eq: "\\frac{2 \\times \\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}", tag: "Evaluation" },
  { mod: "Mod 10", title: "Regression Slope b", eq: "b = \\frac{n\\sum XY - \\sum X \\sum Y}{n\\sum X^2 - (\\sum X)^2}", tag: "Linear Regression" },
  { mod: "Mod 10", title: "MAPE Formula", eq: "\\frac{100\\%}{n}\\sum \\left| \\frac{y - \\hat{y}}{y} \\right|", tag: "Regression Accuracy" },
  { mod: "Mod 11", title: "DBSCAN Core Test", expr: "|N_\\epsilon(p)| \\ge MinPts", tag: "Density Clustering" }
];


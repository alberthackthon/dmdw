/**
 * Practice Exam & Concept Mastery Quiz System
 * Questions compiled directly from all slides & university exam trends
 */

const DMDW_QUIZ_QUESTIONS = [
  {
    module: "Mod 02: Knowing the Data",
    question: "When is the MEDIAN a better measure of central tendency than the Mean?",
    options: [
      "When the data is strictly normally distributed with zero variance",
      "When the dataset is skewed or contains extreme values / outliers",
      "When the dataset contains purely nominal names without order",
      "When all values are discrete integers"
    ],
    correct: 1,
    explanation: "Slide 2.31: The Mean is sensitive to extreme outliers because it takes their values into calculation. The Median only considers positional ranking, making it robust against extreme skews."
  },
  {
    module: "Mod 02: Knowing the Data",
    question: "In Tukey's Fence method for boxplots, how are the Upper and Lower outlier boundaries defined?",
    options: [
      "Lower = Min, Upper = Max",
      "Lower = Mean - 2*StdDev, Upper = Mean + 2*StdDev",
      "Lower = Q1 - 1.5*IQR, Upper = Q3 + 1.5*IQR",
      "Lower = Q1 - 3*IQR, Upper = Q3 + 3*IQR"
    ],
    correct: 2,
    explanation: "Slide 2.39: Outliers are values falling below Q1 - 1.5*IQR or above Q3 + 1.5*IQR. Points beyond these fences are plotted individually in boxplots."
  },
  {
    module: "Mod 03: Data Preprocessing",
    question: "What differentiates Missing Completely at Random (MCAR) from Missing at Random (MAR)?",
    options: [
      "In MCAR, missingness is completely unsystematic and unrelated to any variable; in MAR, missingness is related to other observed variables.",
      "In MCAR, only class labels are missing; in MAR, all features are missing.",
      "In MCAR, missingness cannot be handled; in MAR, it is always zero.",
      "They are identical terms with no statistical difference."
    ],
    correct: 0,
    explanation: "Slides 3.9 & 3.10: MCAR implies P(R | X_o, X_m) = P(R) (unbiased sample). In MAR, missingness depends on known observed variables X_o."
  },
  {
    module: "Mod 03: Data Preprocessing",
    question: "Given raw values [8, 10, 15, 20], what is the Min-Max normalized value of 10 mapped onto the range [0, 1]?",
    options: [
      "0.50",
      "0.16",
      "0.25",
      "0.33"
    ],
    correct: 1,
    explanation: "Slide 3.39: v' = (v - min)/(max - min) = (10 - 8)/(20 - 8) = 2/12 = 0.1667 ≈ 0.16."
  },
  {
    module: "Mod 04: Distance Metrics",
    question: "Why is the Jaccard similarity coefficient used instead of Simple Matching Coefficient (SMC) for asymmetric binary attributes?",
    options: [
      "Jaccard is faster to compute because it squares distances",
      "Jaccard ignores negative-negative matches (0-0 co-absences), which carry no informative value for rare attributes",
      "Jaccard only works on floating point continuous values",
      "Jaccard accounts for order preservation in ranking"
    ],
    correct: 1,
    explanation: "Slide 4.8 & 4.10: For asymmetric binary data (e.g. rare medical symptoms), mutual absences (f00) vastly outnumber positive cases and would artificially inflate similarity if counted."
  },
  {
    module: "Mod 05: Data Warehousing",
    question: "Which of the following is NOT one of Inmon's four foundational characteristics of a Data Warehouse?",
    options: [
      "Subject-Oriented",
      "Time-Variant",
      "Transaction-Driven Volatile",
      "Integrated"
    ],
    correct: 2,
    explanation: "Slide 5.3: A Data Warehouse is Nonvolatile (read-only historical storage), whereas operational OLTP systems are transaction-driven volatile databases."
  },
  {
    module: "Mod 06: Schemas & OLAP",
    question: "What is the primary difference between a Star Schema and a Snowflake Schema?",
    options: [
      "A Star schema has no fact table, while a Snowflake schema has multiple fact tables",
      "Dimension tables in a Star schema are denormalized; in a Snowflake schema, they are normalized into sub-tables",
      "A Star schema only handles 2 dimensions, whereas Snowflake handles 10+",
      "A Snowflake schema cannot support OLAP drill-down operations"
    ],
    correct: 1,
    explanation: "Slide 6.11: Snowflake schema normalizes dimension hierarchies into multiple lookup tables (e.g. splitting location into city and country), reducing redundancy but adding join cost."
  },
  {
    module: "Mod 07: Association Mining",
    question: "State the Apriori Property (Anti-Monotonicity Principle):",
    options: [
      "All supersets of an infrequent itemset must be frequent",
      "All non-empty subsets of a frequent itemset must also be frequent",
      "The confidence of a rule always exceeds its support",
      "Itemsets with higher support always have higher lift"
    ],
    correct: 1,
    explanation: "Slide 7.14: 'All subsets of a frequent itemset must be frequent'. Pruning corollary: If an itemset is infrequent, none of its supersets can ever be frequent."
  },
  {
    module: "Mod 07: Association Mining",
    question: "If a rule {X => Y} has a Lift value of 0.75, what does this indicate to a retail decision-maker?",
    options: [
      "Itemset X and Y are purchased completely independently",
      "Customers who buy X are less likely to buy Y than a random customer (negative correlation)",
      "75% of all shopping carts contain both X and Y",
      "The rule is extremely strong and should be promoted immediately"
    ],
    correct: 1,
    explanation: "Slide 7.49 & 7.53: Lift < 1 indicates negative correlation. Buying X actually decreases the probability of buying Y!"
  },
  {
    module: "Mod 08: Classification",
    question: "In Decision Tree Induction using ID3, which attribute is selected as the splitting node?",
    options: [
      "The attribute with the highest Entropy",
      "The attribute with the highest Information Gain",
      "The attribute with the largest number of distinct categories",
      "The first attribute in the dataset schema"
    ],
    correct: 1,
    explanation: "Slide 8.24: ID3 selects the attribute that provides the greatest reduction in entropy (uncertainty), which is the one with highest Information Gain."
  },
  {
    module: "Mod 09: Classifiers & Neural Nets",
    question: "In Backpropagation, how is the error term calculated for an OUTPUT layer unit k with target Tk and output Yk?",
    options: [
      "Err_k = (T_k - Y_k)",
      "Err_k = Y_k * (1 - Y_k) * (T_k - Y_k)",
      "Err_k = \\sum (T_k - Y_k)^2",
      "Err_k = \\eta * Y_k * (T_k - Y_k)"
    ],
    correct: 1,
    explanation: "Slide 9.23: The error includes the first derivative of the sigmoid activation function Y_k * (1 - Y_k) multiplied by the difference (T_k - Y_k)."
  },
  {
    module: "Mod 11: Clustering",
    question: "In the DBSCAN algorithm, what defines a 'Core Point'?",
    options: [
      "A point that has the lowest Euclidean distance to the origin",
      "A point that has at least MinPts number of points within distance Epsilon (ε)",
      "A point with no neighbors within radius Epsilon",
      "The calculated centroid of the entire cluster"
    ],
    correct: 1,
    explanation: "Slide 11.30: A Core Point has at least MinPts points within its ε-neighborhood (including itself). Dense regions are expanded from core points."
  }
];

let currentQuizIndex = 0;
let userScore = 0;
let answeredQuestions = {};

function initQuiz() {
  const container = document.getElementById('quizContent');
  if (!container) return;
  currentQuizIndex = 0;
  userScore = 0;
  answeredQuestions = {};
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('quizContent');
  if (!container) return;

  if (currentQuizIndex >= DMDW_QUIZ_QUESTIONS.length) {
    // Show final score celebration
    const percent = Math.round((userScore / DMDW_QUIZ_QUESTIONS.length) * 100);
    if (typeof confetti === 'function' && percent >= 70) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    container.innerHTML = `
      <div class="text-center py-8">
        <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-3xl mb-4 font-bold">
          ${percent >= 70 ? '🏆' : '📚'}
        </div>
        <h4 class="text-2xl font-black text-white">Quiz Completed!</h4>
        <p class="text-sm text-slate-400 mt-1">You scored <span class="font-bold text-white text-lg">${userScore}</span> out of <span class="font-bold text-white text-lg">${DMDW_QUIZ_QUESTIONS.length}</span> (${percent}%)</p>

        <div class="mt-6 flex justify-center gap-3">
          <button onclick="initQuiz()" class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition">
            Retake Exam
          </button>
          <button onclick="toggleQuizModal()" class="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition">
            Close
          </button>
        </div>
      </div>
    `;
    return;
  }

  const q = DMDW_QUIZ_QUESTIONS[currentQuizIndex];
  const isAnswered = answeredQuestions[currentQuizIndex] !== undefined;
  const selectedOpt = answeredQuestions[currentQuizIndex];

  container.innerHTML = `
    <div>
      <div class="flex items-center justify-between text-xs text-slate-400 mb-2">
        <span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-mono">${q.module}</span>
        <span>Question ${currentQuizIndex + 1} of ${DMDW_QUIZ_QUESTIONS.length}</span>
      </div>

      <h4 class="text-base font-bold text-white mb-4 leading-snug">${q.question}</h4>

      <div class="space-y-2.5">
        ${q.options.map((opt, idx) => {
          let btnClass = "w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start space-x-3 ";
          if (!isAnswered) {
            btnClass += "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200";
          } else {
            if (idx === q.correct) {
              btnClass += "bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold";
            } else if (idx === selectedOpt) {
              btnClass += "bg-rose-950/70 border-rose-500 text-rose-200";
            } else {
              btnClass += "bg-slate-900 border-slate-800 text-slate-500 opacity-60";
            }
          }

          return `
            <button onclick="handleAnswer(${idx})" ${isAnswered ? 'disabled' : ''} class="${btnClass}">
              <span class="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 font-mono text-[10px]">
                ${String.fromCharCode(65 + idx)}
              </span>
              <span>${opt}</span>
            </button>
          `;
        }).join('')}
      </div>

      ${isAnswered ? `
        <div class="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
          <span class="font-bold ${selectedOpt === q.correct ? 'text-emerald-400' : 'text-rose-400'} block mb-1">
            ${selectedOpt === q.correct ? '✓ Correct Answer!' : '✗ Incorrect!'}
          </span>
          <p>${q.explanation}</p>
        </div>
        <div class="mt-4 flex justify-end">
          <button onclick="nextQuestion()" class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow transition">
            Next Question →
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function handleAnswer(optIdx) {
  if (answeredQuestions[currentQuizIndex] !== undefined) return;
  answeredQuestions[currentQuizIndex] = optIdx;
  if (optIdx === DMDW_QUIZ_QUESTIONS[currentQuizIndex].correct) {
    userScore++;
  }
  renderQuestion();
}

function nextQuestion() {
  currentQuizIndex++;
  renderQuestion();
}


/**
 * Deep Curriculum Content Extension for DMDW
 * Contains all additional textbook solved numericals, tables, and exam questions
 * directly transcribed from slides 2.1 to 11.38.
 */

const DMDW_DEEP_PROBLEMS = {
  mod2: [
    {
      title: "Slide 2.17: Trimmed 20% Mean Calculation",
      problem: "Find the trimmed 20% mean for the test scores: 60, 81, 83, 91, 99.",
      solution: `
        <strong>Step 1: Determine Trim Count:</strong><br>
        Dataset size $N = 5$. 20% of 5 is $0.20 \\times 5 = 1$ value.<br>
        Trim 1 value from the bottom (60) and 1 value from the top (99).<br>
        Remaining middle 3 values: <strong>[81, 83, 91]</strong>.<br>
        <strong>Step 2: Calculate Mean of Remaining:</strong><br>
        $\\text{Trimmed Mean} = \\frac{81 + 83 + 91}{3} = \\frac{255}{3} = \\mathbf{85}$.<br>
        <em>Insight:</em> The raw arithmetic mean was $414/5 = 82.8$. The low outlier 60 pulled the regular mean down, while the trimmed mean accurately represents typical scores.
      `
    },
    {
      title: "Slide 2.19: Midrange & Multimodal Distribution",
      problem: "Given values: 30, 36, 47, 50, 52, 52, 56, 60, 63, 70, 70, 110. Compute Mean, Median, Mode, and Midrange.",
      solution: `
        • <strong>Mean:</strong> $\\frac{30 + 36 + 47 + 50 + 52 + 52 + 56 + 60 + 63 + 70 + 70 + 110}{12} = \\frac{696}{12} = \\mathbf{58}$.<br>
        • <strong>Median:</strong> Middle two values are 52 and 56. Median = $\\frac{52 + 56}{2} = \\mathbf{54}$.<br>
        • <strong>Mode:</strong> Both 52 and 70 appear twice with highest frequency $\\implies$ <strong>Bimodal (52 and 70)</strong>.<br>
        • <strong>Midrange:</strong> Average of largest and smallest values: $\\frac{110 + 30}{2} = \\frac{140}{2} = \\mathbf{70}$.
      `
    },
    {
      title: "Slide 2.38: Interquartile Range (IQR) for Even vs. Odd Sample Sizes",
      problem: "Determine Q1, Q3, and IQR for (a) Even sample size n=10: [62, 63, 64, 64, 70, 72, 76, 77, 81, 81], and (b) Odd sample size n=9 excluding lowest 62.",
      solution: `
        <strong>(a) Even Sample Size ($n=10$):</strong><br>
        Median separates lower half [62, 63, 64, 64, 70] and upper half [72, 76, 77, 81, 81]. Median = $(70+72)/2 = 71$.<br>
        • $Q_1$ = Median of lower half = <strong>64</strong>.<br>
        • $Q_3$ = Median of upper half = <strong>77</strong>.<br>
        • $\\text{IQR} = Q_3 - Q_1 = 77 - 64 = \\mathbf{13}$.<br><br>
        <strong>(b) Odd Sample Size ($n=9$, excluding 62):</strong><br>
        Sorted: [63, 64, 64, 70, 72, 76, 77, 81, 81]. Median = <strong>72</strong>.<br>
        Lower half: [63, 64, 64, 70] $\\implies Q_1 = \\frac{64+64}{2} = \\mathbf{64}$.<br>
        Upper half: [76, 77, 81, 81] $\\implies Q_3 = \\frac{77+81}{2} = \\mathbf{79}$.<br>
        • $\\text{IQR} = Q_3 - Q_1 = 79 - 64 = \\mathbf{15}$.
      `
    }
  ],

  mod3: [
    {
      title: "Slide 3.16–3.19: Complete Binning Smoothing by Means, Medians & Boundaries",
      problem: "Given ascending data: 4, 8, 9, 15, 21, 21, 24, 25, 26, 28, 29, 34. (1) Partition into 3 equal-width bins and smooth by Means, Medians, Boundaries. (2) Partition into 3 equal-frequency bins and smooth.",
      solution: `
        <strong>(1) Equal-Width Binning ($w = (34 - 4)/3 = 10$):</strong><br>
        • Bin 1 [4 to 14]: [4, 8, 9]<br>
        • Bin 2 [15 to 24]: [15, 21, 21, 24]<br>
        • Bin 3 [25 to 34]: [25, 26, 28, 29, 34]<br><br>
        <em>Smoothing by Bin Means:</em><br>
        • Bin 1 Mean = $(4+8+9)/3 = 7 \\implies$ <strong>[7, 7, 7]</strong><br>
        • Bin 2 Mean = $(15+21+21+24)/4 = 20.25 \\implies$ <strong>[20.25, 20.25, 20.25, 20.25]</strong><br>
        • Bin 3 Mean = $(25+26+28+29+34)/5 = 28.4 \\implies$ <strong>[28.4, 28.4, 28.4, 28.4, 28.4]</strong><br><br>
        <em>Smoothing by Bin Boundaries (Min and Max are boundaries; replace inner with closest):</em><br>
        • Bin 1: Min=4, Max=9. Value 8 is closer to 9 $\\implies$ <strong>[4, 9, 9]</strong><br>
        • Bin 2: Min=15, Max=24. Both 21s are closer to 24 $\\implies$ <strong>[15, 24, 24, 24]</strong><br>
        • Bin 3: Min=25, Max=34. 26, 28, 29 are closer to 25 $\\implies$ <strong>[25, 25, 25, 25, 34]</strong><br><br>
        <strong>(2) Equal-Frequency Binning ($N/3 = 12/3 = 4$ items per bin):</strong><br>
        • Bin 1: [4, 8, 9, 15] $\\to$ Boundaries: <strong>[4, 4, 4, 15]</strong><br>
        • Bin 2: [21, 21, 24, 25] $\\to$ Boundaries: <strong>[21, 21, 25, 25]</strong><br>
        • Bin 3: [26, 28, 29, 34] $\\to$ Boundaries: <strong>[26, 26, 26, 34]</strong>
      `
    },
    {
      title: "Slide 3.30–3.31: Chi-Square (χ²) Correlation Test on 1,500 Readers",
      problem: "A survey of 1,500 people recorded Gender and Preferred Reading: Male(Like Sci-Fi)=250, Male(Dislike)=50, Female(Like)=200, Female(Dislike)=1000. Test correlation at 0.001 significance (Critical value = 10.828).",
      solution: `
        <strong>Step 1: Expected Frequencies ($E_{ij} = \\frac{\\text{RowTotal} \\times \\text{ColTotal}}{N}$):</strong><br>
        • Male Total = 300, Female Total = 1200. Like Total = 450, Dislike Total = 1050. Total $N = 1500$.<br>
        • $e_{11} (\\text{Male, Like}) = \\frac{300 \\times 450}{1500} = \\mathbf{90}$<br>
        • $e_{12} (\\text{Male, Dislike}) = \\frac{300 \\times 1050}{1500} = \\mathbf{210}$<br>
        • $e_{21} (\\text{Female, Like}) = \\frac{1200 \\times 450}{1500} = \\mathbf{360}$<br>
        • $e_{22} (\\text{Female, Dislike}) = \\frac{1200 \\times 1050}{1500} = \\mathbf{840}$<br><br>
        <strong>Step 2: Calculate $\\chi^2$:</strong><br>
        $\\chi^2 = \\frac{(250-90)^2}{90} + \\frac{(50-210)^2}{210} + \\frac{(200-360)^2}{360} + \\frac{(1000-840)^2}{840}$<br>
        $= \\frac{25600}{90} + \\frac{25600}{210} + \\frac{25600}{360} + \\frac{25600}{840} = 284.44 + 121.90 + 71.11 + 30.48 = \\mathbf{507.93}$.<br><br>
        <strong>Conclusion:</strong> Since calculated $\\chi^2 (507.93) > 10.828$, we reject the independence hypothesis. <strong>Preferred reading and gender are strongly correlated!</strong>
      `
    },
    {
      title: "Slide 3.51: Discrete Wavelet Transform (Haar Wavelet Decomposition)",
      problem: "Given signal S = [2, 2, 0, 2, 3, 5, 4, 4]. Transform using 1D Haar Wavelet.",
      solution: `
        <strong>Method:</strong> Pairwise Averages & Detail Coefficients (differences divided by 2):<br>
        • <em>Resolution 8:</em> [2, 2, 0, 2, 3, 5, 4, 4]<br>
        • <em>Resolution 4:</em> Averages: [2, 1, 4, 4]. Detail coefficients: [0, -1, -1, 0]<br>
        • <em>Resolution 2:</em> Averages: [1.5, 4]. Detail coefficients: [0.5, 0]<br>
        • <em>Resolution 1:</em> Average: [2.75]. Detail coefficient: [-1.25]<br>
        <strong>Full Transformed Vector $S_1$:</strong><br>
        $[2\\frac{3}{4}, -1\\frac{1}{4}, \\frac{1}{2}, 0, 0, -1, -1, 0]$.<br>
        <em>Compression Benefit:</em> Setting small coefficients to 0 yields lossy compression with high signal fidelity!
      `
    }
  ],

  mod4: [
    {
      title: "Slide 4.9–4.10: Patient Medical Test Asymmetric Jaccard Analysis",
      problem: "Three patients (Jack, Mary, Jim) undergo 6 tests (Fever, Cough, Test-1, Test-2, Test-3, Test-4). Compute pairwise Jaccard dissimilarity and similarity.",
      solution: `
        Dataset matrix (1 = Yes/Positive, 0 = No/Negative):<br>
        • Jack: [Fever:1, Cough:0, T1:1, T2:0, T3:0, T4:0]<br>
        • Mary: [Fever:1, Cough:0, T1:1, T2:0, T3:1, T4:0]<br>
        • Jim:  [Fever:1, Cough:1, T1:0, T2:0, T3:0, T4:0]<br><br>
        <strong>Jaccard Formula:</strong> $d(i, j) = \\frac{f_{10} + f_{01}}{f_{11} + f_{10} + f_{01}}$, $\\text{sim}(i, j) = \\frac{f_{11}}{f_{11} + f_{10} + f_{01}}$.<br>
        • <strong>Jack & Mary:</strong> $f_{11} = 2$ (Fever, T1), $f_{10} = 0$, $f_{01} = 1$ (T3).<br>
        $d(\\text{Jack, Mary}) = \\frac{0+1}{2+0+1} = \\mathbf{0.33} \\implies \\text{Similarity} = \\mathbf{0.66}$.<br>
        • <strong>Jack & Jim:</strong> $f_{11} = 1$ (Fever), $f_{10} = 1$ (T1), $f_{01} = 1$ (Cough).<br>
        $d(\\text{Jack, Jim}) = \\frac{1+1}{1+1+1} = \\mathbf{0.67} \\implies \\text{Similarity} = \\mathbf{0.33}$.<br>
        • <strong>Jim & Mary:</strong> $f_{11} = 1$ (Fever), $f_{10} = 1$ (Cough), $f_{01} = 2$ (T1, T3).<br>
        $d(\\text{Jim, Mary}) = \\frac{1+2}{1+1+2} = \\mathbf{0.75} \\implies \\text{Similarity} = \\mathbf{0.25}$.<br><br>
        <strong>Clinical Diagnosis:</strong> Jack and Mary have the most similar disease profile ($d=0.33$).
      `
    },
    {
      title: "Slide 4.12: 4-Point Euclidean vs. Manhattan Distance Matrix",
      problem: "Given 2D points: x1(1,2), x2(3,5), x3(2,0), x4(4,5). Construct both Euclidean and Manhattan dissimilarity matrices.",
      solution: `
        <strong>Euclidean Distances ($d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$):</strong><br>
        • $d(x1, x2) = \\sqrt{(3-1)^2 + (5-2)^2} = \\sqrt{4 + 9} = \\sqrt{13} = \\mathbf{3.61}$<br>
        • $d(x1, x3) = \\sqrt{(2-1)^2 + (0-2)^2} = \\sqrt{1 + 4} = \\sqrt{5} = \\mathbf{2.24}$<br>
        • $d(x2, x4) = \\sqrt{(4-3)^2 + (5-5)^2} = \\sqrt{1} = \\mathbf{1.00}$<br><br>
        <strong>Manhattan Distances ($d = |x_2-x_1| + |y_2-y_1|$):</strong><br>
        • $d(x1, x2) = |3-1| + |5-2| = 2 + 3 = \\mathbf{5}$<br>
        • $d(x1, x3) = |2-1| + |0-2| = 1 + 2 = \\mathbf{3}$<br>
        • $d(x2, x4) = |4-3| + |5-5| = 1 + 0 = \\mathbf{1}$
      `
    }
  ],

  mod7: [
    {
      title: "Slide 7.26–7.28: Direct Hashing & Pruning (DHP) Hash Table",
      problem: "Explain DHP hash-based candidate pruning using hash function h(x, y) = ((order of x)*10 + order of y) mod 7 with min_sup = 2.",
      solution: `
        <strong>Concept:</strong> During the pass for 1-itemsets ($L_1$), for every transaction, generate all 2-item combinations and hash them into buckets $0..6$.<br>
        If the total count of itemsets falling into bucket $B$ is &lt; min_sup, then <em>none</em> of the itemsets hashed to bucket $B$ can possibly be frequent!<br>
        • E.g., if bucket 1 has count 1 &lt; 2, candidates like {A, E} are discarded <strong>without needing to check their true database support in pass 2</strong>.<br>
        This dramatically reduces candidate generation $|C_2|$!
      `
    },
    {
      title: "Slide 7.50–7.51: The Classic Association Mining Lift Paradoxes",
      problem: "1. 5000 students: 3000 play basketball, 3750 eat cereal, 2000 do both. 2. 10,000 transactions: 6000 Computer Games, 7500 Videos, 4000 both. Prove why confidence is misleading and evaluate Lift.",
      solution: `
        <strong>Case 1: Basketball => Cereal:</strong><br>
        • Support = $2000/5000 = 40\\%$.<br>
        • Confidence = $2000/3000 = 66.7\\%$. (Appears high!)<br>
        • BUT overall cereal baseline $P(\\text{Cereal}) = 3750/5000 = \\mathbf{75\\%}$.<br>
        • $\\text{Lift} = \\frac{0.40}{0.60 \\times 0.75} = \\frac{0.40}{0.45} = \\mathbf{0.89} < 1$.<br>
        <strong>Conclusion:</strong> Playing basketball is <em>negatively correlated</em> with eating cereal!<br><br>
        <strong>Case 2: Computer Games => Videos:</strong><br>
        • Support = $4000/10000 = 40\\%$, Confidence = $4000/6000 = 66.7\\%$.<br>
        • Baseline $P(\\text{Videos}) = 7500/10000 = 75\\%$.<br>
        • $\\text{Lift} = \\frac{0.40}{0.60 \\times 0.75} = \\mathbf{0.89} < 1$. Unwise to bundle them together based on confidence alone!
      `
    }
  ],

  mod9: [
    {
      title: "Slide 9.5–9.7: Exact Mathematical Derivation of SVM Separating Hyperplane",
      problem: "Given Positive class points: (3,1), (3,-1), (6,1), (6,-1) and Negative class points: (1,0), (0,1), (0,-1), (-1,0). Find the exact equation of the Maximum Marginal Hyperplane.",
      solution: `
        <strong>Step 1: Identify Critical Support Vectors:</strong><br>
        The closest negative point is $S_1 = (1, 0)$. Closest positive points are $S_2 = (3, 1)$ and $S_3 = (3, -1)$.<br>
        Augmenting with bias coordinate 1: $\\tilde{S_1} = (1, 0, 1)^T$, $\\tilde{S_2} = (3, 1, 1)^T$, $\\tilde{S_3} = (3, -1, 1)^T$.<br><br>
        <strong>Step 2: Setup 3 Linear Equations:</strong><br>
        • $\\alpha_1 (\\tilde{S_1} \\cdot \\tilde{S_1}) + \\alpha_2 (\\tilde{S_2} \\cdot \\tilde{S_1}) + \\alpha_3 (\\tilde{S_3} \\cdot \\tilde{S_1}) = -1 \\implies 2\\alpha_1 + 4\\alpha_2 + 4\\alpha_3 = -1$<br>
        • $\\alpha_1 (\\tilde{S_1} \\cdot \\tilde{S_2}) + \\alpha_2 (\\tilde{S_2} \\cdot \\tilde{S_2}) + \\alpha_3 (\\tilde{S_3} \\cdot \\tilde{S_2}) = +1 \\implies 4\\alpha_1 + 11\\alpha_2 + 9\\alpha_3 = +1$<br>
        • $\\alpha_1 (\\tilde{S_1} \\cdot \\tilde{S_3}) + \\alpha_2 (\\tilde{S_2} \\cdot \\tilde{S_3}) + \\alpha_3 (\\tilde{S_3} \\cdot \\tilde{S_3}) = +1 \\implies 4\\alpha_1 + 9\\alpha_2 + 11\\alpha_3 = +1$<br><br>
        <strong>Step 3: Solve for $\\alpha_i$:</strong><br>
        $\\alpha_1 = -3.5, \\quad \\alpha_2 = 0.75, \\quad \\alpha_3 = 0.75$.<br><br>
        <strong>Step 4: Compute Weight Vector & Bias:</strong><br>
        $\\tilde{w} = \\sum \\alpha_i \\tilde{S_i} = -3.5(1,0,1)^T + 0.75(3,1,1)^T + 0.75(3,-1,1)^T = \\mathbf{(1, 0, -2)^T}$.<br>
        Weight vector $w = (1, 0)^T$, offset bias $b = -2$.<br>
        <strong>Hyperplane Equation:</strong> $w \\cdot x + b = 0 \\implies 1(x) + 0(y) - 2 = 0 \\implies \\mathbf{x - 2 = 0}$ (a vertical line at $x=2$).
      `
    },
    {
      title: "Slide 9.25–9.33: Complete Backpropagation Numerical Walkthrough",
      problem: "Given neural network with inputs X=[1, 0, 1], Target T=1, learning rate η=0.9, initial weights W14=0.2, W15=-0.3, W24=0.4, W25=0.1, W34=-0.5, W35=0.2, W46=-0.3, W56=-0.2, biases θ4=-0.4, θ5=0.2, θ6=0.1. Perform forward and backward pass to update weights.",
      solution: `
        <strong>Step 1: Feed-Forward Pass:</strong><br>
        • $I_4 = (0.2 \\times 1) + (0.4 \\times 0) + (-0.5 \\times 1) + (-0.4) = -0.7 \\implies Y_4 = \\frac{1}{1 + e^{0.7}} = \\mathbf{0.332}$<br>
        • $I_5 = (-0.3 \\times 1) + (0.1 \\times 0) + (0.2 \\times 1) + 0.2 = 0.1 \\implies Y_5 = \\frac{1}{1 + e^{-0.1}} = \\mathbf{0.525}$<br>
        • $I_6 = (-0.3 \\times 0.332) + (-0.2 \\times 0.525) + 0.1 = -0.105 \\implies Y_6 = \\frac{1}{1 + e^{0.105}} = \\mathbf{0.474}$<br><br>
        <strong>Step 2: Compute Error Terms:</strong><br>
        • Output Unit 6: $\\text{Err}_6 = Y_6(1 - Y_6)(T - Y_6) = 0.474(1 - 0.474)(1 - 0.474) = \\mathbf{0.1311}$<br>
        • Hidden Unit 4: $\\text{Err}_4 = Y_4(1 - Y_4)(W_{46} \\times \\text{Err}_6) = 0.332(1 - 0.332)(-0.3 \\times 0.1311) = \\mathbf{-0.0087}$<br>
        • Hidden Unit 5: $\\text{Err}_5 = Y_5(1 - Y_5)(W_{56} \\times \\text{Err}_6) = 0.525(1 - 0.525)(-0.2 \\times 0.1311) = \\mathbf{-0.0065}$<br><br>
        <strong>Step 3: Update Weights & Biases:</strong><br>
        • $W_{46}' = W_{46} + \\eta \\cdot \\text{Err}_6 \\cdot Y_4 = -0.3 + 0.9(0.1311)(0.332) = \\mathbf{-0.261}$<br>
        • $W_{56}' = W_{56} + \\eta \\cdot \\text{Err}_6 \\cdot Y_5 = -0.2 + 0.9(0.1311)(0.525) = \\mathbf{-0.138}$<br>
        • $\\theta_6' = \\theta_6 + \\eta \\cdot \\text{Err}_6 = 0.1 + 0.9(0.1311) = \\mathbf{0.218}$<br>
        • $W_{14}' = 0.2 + 0.9(-0.0087)(1) = \\mathbf{0.192}$, $\\quad W_{34}' = -0.5 + 0.9(-0.0087)(1) = \\mathbf{-0.508}$<br>
        • $\\theta_4' = -0.4 + 0.9(-0.0087) = \\mathbf{-0.408}$, $\\quad \\theta_5' = 0.2 + 0.9(-0.0065) = \\mathbf{0.194}$
      `
    }
  ],

  mod11: [
    {
      title: "Slide 11.15–11.16: K-Medoids (PAM) Swapping Cost Verification",
      problem: "Given 5 points: (5,6), (4,5), (4,6), (6,7), (7,8) with K=2. Initial medoids C1(4,6) and C2(6,7). Test swap with point (4,5) using Manhattan cost.",
      solution: `
        <strong>Iteration 1 (Initial Cost):</strong><br>
        • Distances to C1(4,6) & C2(6,7):<br>
        Point (5,6) $\\to$ dist to C1=1, C2=2 $\\implies$ joins C1.<br>
        Point (4,5) $\\to$ dist to C1=1, C2=4 $\\implies$ joins C1.<br>
        Point (7,8) $\\to$ dist to C1=5, C2=2 $\\implies$ joins C2.<br>
        Total Initial Cost = $(1 + 1) + 2 = \\mathbf{3}$.<br><br>
        <strong>Iteration 2 (Test Swapping C1 with (4,5)):</strong><br>
        New candidate medoids: C1(4,5) and C2(6,7).<br>
        • Distances to new medoids:<br>
        Point (5,6) $\\to$ dist to C1=2, C2=2 $\\implies$ joins C1.<br>
        Point (4,6) $\\to$ dist to C1=1, C2=3 $\\implies$ joins C1.<br>
        Point (7,8) $\\to$ dist to C1=6, C2=2 $\\implies$ joins C2.<br>
        New Cost = $(2 + 1) + 2 = \\mathbf{5}$.<br><br>
        <strong>Decision:</strong> Since New Cost (5) &gt; Previous Cost (3), the swap increases error! <strong>Undo swap. Final medoids remain (4,6) and (6,7)!</strong>
      `
    },
    {
      title: "Slide 11.27–11.29: Single-Linkage Agglomerative Clustering Matrix Updates",
      problem: "Cluster 6 points A(1,1), B(1.5,1.5), C(5,5), D(3,4), E(4,4), F(3,3.5) into K=2 clusters.",
      solution: `
        • <strong>Step 1:</strong> Minimum pairwise distance is $d(D, F) = 0.50$. Merge (D, F).<br>
        Update distance matrix using Single Linkage: $d_{(D,F) \\to X} = \\min(d_{DX}, d_{FX})$.<br>
        • <strong>Step 2:</strong> Next minimum is $d(A, B) = 0.71$. Merge (A, B).<br>
        • <strong>Step 3:</strong> Next minimum is $d(E, (D, F)) = 1.00$. Merge ((D, F), E).<br>
        • <strong>Step 4:</strong> Next minimum is $d(C, ((D, F), E)) = 1.41$. Merge (((D, F), E), C).<br>
        <strong>Final 2 Clusters:</strong><br>
        Cluster 1 = <strong>{A, B}</strong><br>
        Cluster 2 = <strong>{C, D, E, F}</strong>
      `
    },
    {
      title: "Slide 11.33–11.34: DBSCAN Core, Border & Noise Identification (12 Points)",
      problem: "Given 12 points P1..P12 with Epsilon ε=1.9 and MinPts=4. Identify Core, Border, Noise points and final clusters.",
      solution: `
        <strong>Neighbors within ε = 1.9:</strong><br>
        • P1: {P2, P10} (Count 2 &lt; 4)<br>
        • P2: {P1, P3, P11} + P2 = 4 $\\implies$ <strong>CORE POINT</strong><br>
        • P3: {P2, P4} (Count 3)<br>
        • P4: {P3, P5} (Count 3)<br>
        • P5: {P4, P6, P7, P8} + P5 = 5 $\\implies$ <strong>CORE POINT</strong><br>
        • P9: {P12} (Count 2)<br>
        • P11: {P2, P10, P12} + P11 = 4 $\\implies$ <strong>CORE POINT</strong><br><br>
        <strong>Classifications:</strong><br>
        • <strong>Core Points:</strong> P2, P5, P11<br>
        • <strong>Border Points (density-reachable from core):</strong> P1, P3, P4, P6, P7, P8, P10, P12<br>
        • <strong>Noise / Outlier:</strong> P9 (no core point within ε)<br><br>
        <strong>Formed Clusters:</strong><br>
        $C_1 = \\{P1, P2, P3, P10, P11, P12\\}$<br>
        $C_2 = \\{P4, P5, P6, P7, P8\\}$
      `
    }
  ]
};


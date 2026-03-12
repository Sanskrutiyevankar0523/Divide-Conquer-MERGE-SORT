# 🌟 Merge Sort Visualizer: A Divide & Conquer Experience

An interactive, storytelling-driven visualizer dedicated to the **Merge Sort** algorithm. Designed with a sleek, futuristic "Glassmorphism" UI, this tool breaks down the complex Divide & Conquer logic into an easy-to-understand, step-by-step animated journey.

## ✨ Key Features
* **Personalized Narration:** Features a custom developer avatar that narrates the logic (Divide, Conquer, Combine) in plain English, exactly as the code executes it.
* **Modern Glassmorphism UI:** Built with a stunning dark-mode aesthetic featuring frosted glass panels, neon gradients, and glowing array bars.
* **Dynamic Step-by-Step Animation:** Uses real-time DOM manipulation and asynchronous JavaScript to visually separate, compare (in neon pink), and merge (in neon cyan) the array elements.

## 🧠 The Algorithm: Merge Sort
Merge Sort is a quintessential Divide & Conquer sorting algorithm.
1. **Divide:** The array is recursively split in half until each sub-array contains only a single element.
2. **Conquer & Combine:** The sub-arrays are repeatedly merged back together in sorted order until the full array is reconstructed.
* **Time Complexity:** O(n log n) in all cases (Best, Average, Worst).
* **Space Complexity:** O(n) auxiliary space.

## ⚙️ Implementation Details
This visualizer was built entirely from scratch using vanilla web technologies to ensure lightweight and fast execution. 
* **Animation Engine:** Relies on JavaScript `async/await` and custom `Promises` to pause execution momentarily, creating a frame-by-frame animation without freezing the browser.
* **DOM Manipulation:** Array elements are represented as `div` blocks whose CSS `height`, `background`, and `box-shadow` properties are updated in real-time during comparisons and swaps.

## 🛠️ Tech Stack
* **HTML5**
* **CSS3** (Custom Glassmorphism & Neon UI)
* **JavaScript** (Async/Await Animation Logic, DOM Manipulation)

---

## 👩‍💻 Developed By
**Sanskruti Yevankar** Reg No: RA2411026011026
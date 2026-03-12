const vizContainer = document.getElementById('viz-container');
const storyBoard = document.getElementById('story-board');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

// Interactive Element Controls
const sizeSlider = document.getElementById('size-slider');
const sizeVal = document.getElementById('size-val');
const speedSlider = document.getElementById('speed-slider');

let array = [];
let delay = parseInt(speedSlider.value);

// Update delay when speed slider moves
speedSlider.addEventListener('input', (e) => {
    delay = parseInt(e.target.value);
});

// Update array size instantly when size slider moves
sizeSlider.addEventListener('input', (e) => {
    sizeVal.innerText = e.target.value;
    resetVisualization();
});

// Dynamic Sleep function linked to the slider
const sleep = () => new Promise(resolve => setTimeout(resolve, delay));

// Narrator Function
function tellStory(text) {
    storyBoard.innerHTML = text;
}

// Generate Array
function resetVisualization() {
    vizContainer.innerHTML = '';
    array = [];
    const size = parseInt(sizeSlider.value);
    
    // Calculate width dynamically based on how many bars there are
    const barWidth = Math.max(15, Math.floor(600 / size) - 6); 

    tellStory("Let's sort these! Adjust my speed or the array size before we begin.");
    
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 250) + 30);
    }
    
    array.forEach(val => {
        const bar = document.createElement('div');
        bar.classList.add('array-bar');
        bar.style.height = `${val}px`;
        bar.style.width = `${barWidth}px`;
        // Hide numbers if there are too many bars (prevents overlapping)
        if(size < 20) { bar.innerText = val; }
        vizContainer.appendChild(bar);
    });
}

// ==========================================
// MERGE SORT LOGIC
// ==========================================
async function mergeSort(arr, l, r, bars) {
    if (l >= r) return;
    const m = l + Math.floor((r - l) / 2);
    
    tellStory(`Dividing the array exactly in half from index ${l} to ${r}...`);
    await sleep(); 
    
    await mergeSort(arr, l, m, bars);
    await mergeSort(arr, m + 1, r, bars);
    await merge(arr, l, m, r, bars);
}

async function merge(arr, l, m, r, bars) {
    tellStory(`Now conquering & combining the sorted pieces back together!`);
    await sleep();

    let n1 = m - l + 1, n2 = r - m, L = new Array(n1), R = new Array(n2);
    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    let i = 0, j = 0, k = l;
    
    while (i < n1 && j < n2) {
        // Highlight elements being compared (Orange ink)
        bars[k].style.backgroundColor = '#d35400'; 
        await sleep();
        
        if (L[i] <= R[j]) { 
            arr[k] = L[i]; 
            i++; 
        } else { 
            arr[k] = R[j]; 
            j++; 
        }
        
        bars[k].style.height = `${arr[k]}px`; 
        if(array.length < 20) bars[k].innerText = arr[k]; 
        
        // Highlight placed element (Green ink)
        bars[k].style.backgroundColor = '#2ecc71'; 
        k++;
    }
    
    while (i < n1) { 
        arr[k] = L[i]; 
        bars[k].style.height = `${arr[k]}px`; 
        if(array.length < 20) bars[k].innerText = arr[k]; 
        bars[k].style.backgroundColor = '#2ecc71'; 
        i++; k++; await sleep(); 
    }
    
    while (j < n2) { 
        arr[k] = R[j]; 
        bars[k].style.height = `${arr[k]}px`; 
        if(array.length < 20) bars[k].innerText = arr[k]; 
        bars[k].style.backgroundColor = '#2ecc71'; 
        j++; k++; await sleep(); 
    }
    
    // Reset colors to black ink
    for(let t = l; t <= r; t++) {
        bars[t].style.backgroundColor = '#1a1a1a'; 
    }
}

// ==========================================
// BUTTON EVENT LISTENERS
// ==========================================
startBtn.addEventListener('click', async () => {
    const bars = document.getElementsByClassName('array-bar');
    
    startBtn.disabled = true;
    resetBtn.disabled = true;
    sizeSlider.disabled = true; // Disable size changes during animation

    await mergeSort(array, 0, array.length - 1, bars);
    
    for(let b of bars) {
        b.style.backgroundColor = '#2ecc71'; 
    }
    tellStory("And we're finished! My Merge Sort successfully sorted the array.");

    startBtn.disabled = false;
    resetBtn.disabled = false;
    sizeSlider.disabled = false;
});

resetBtn.addEventListener('click', resetVisualization);

// Initialize
resetVisualization();
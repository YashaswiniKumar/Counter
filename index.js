let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    
    let countStr = count + " - "
    //the space is not appearing in html, because
    //the innerText only gets the human readable content and 
    //space in not . so its automatically concatenated
    //instead use textContent
    //saveEl.innerText += countStr
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}



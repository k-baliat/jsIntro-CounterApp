// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")

let totalSaved = document.getElementById("total-saved")

let saveMsg = "Previous entries: "

let lastSave = null

let count = 0

function increment() {
    count += 1
    countEl.innerText = count //can replace with textContent
}

function save() {
    // console.log(count)
    // lastSave = saveMsg+totalSaved.innerText
    // totalSaved.innerText += count+" - "
    totalSaved.textContent += count+" - "

    //sdt variable name and text name to 0
    count = 0
    countEl.textContent=0
}

//Google
// innerText alternative mdn ... to find alternative components

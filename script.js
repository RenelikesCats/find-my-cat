"use strict"

let gevonden = false
const deurenImages = document.getElementById("deuren").children
let Noor = Math.floor(Math.random() * 10) + 1

for (let deur of deurenImages) {
    deur.addEventListener("click", () => {
        if (Noor === Number(deur.alt)) {
            deur.src = "images/noor.png"
            gevonden = true
        }
        if (!gevonden) {
            deur.src = "images/deuropen.png"
        }
    })
}

document.getElementById("playAgainBtn").addEventListener("click", () => {
    for (let deur of deurenImages) {
        deur.src = "images/deurtoe.png"
        gevonden = false
        Noor = Math.floor(Math.random() * 10) + 1
    }
})


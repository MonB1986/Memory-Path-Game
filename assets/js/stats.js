const statsBody = document.querySelector("#stats-body");
const emptyStateDiv = document.querySelector("#stats-empty")
const tableWrapper = document.querySelector(".stats-table-wrapper")

const orderSelect = document.querySelector("#order-select")
const fieldSelect = document.querySelector("#field-select")


let field = "date" // or "roundReached"
let direction = "descending" // or "ascending"

function renderStats() {
    statsBody.innerHTML = "" // empty out the tbody

    const stats = getPlayerStats()
    const sortedStats = sortStats(stats, field, direction)
    // console.log({stats, sortedStats})

    if(stats.length === 0){
        tableWrapper.classList.add("hidden")
        emptyStateDiv.classList.remove("hidden")
    } else {
        tableWrapper.classList.remove("hidden")
        emptyStateDiv.classList.add("hidden")
    }

    for (let i=0; i<sortedStats.length; i++){
        const stat = sortedStats[i];
        const dateObj = new Date(stat.date)
        const month = (dateObj.getMonth()+1).toString().padStart(2, '0')
        const date = `${dateObj.getFullYear()}-${month}-${dateObj.getDate()}`
        const time = `${dateObj.getHours()}:${dateObj.getMinutes().toString().padStart(2, '0')}`
    
        statsBody.innerHTML += `
            <tr>
                <td>${date}</td>
                <td>${time}</td>
                <td>${stat.roundReached}</<td>
            </tr>
        `
    }
}

renderStats()

orderSelect.addEventListener("change", function () {
    direction = orderSelect.value
    renderStats()
})

fieldSelect.addEventListener("change", function () {
    field = fieldSelect.value
    renderStats()
})
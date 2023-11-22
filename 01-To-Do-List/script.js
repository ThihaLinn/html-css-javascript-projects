let tasks = document.getElementsByClassName("tasks")
let task = document.getElementsByClassName("task")
let check = document.getElementsByClassName("check")
let uncheck = document.getElementsByClassName("uncheck")
let deleted = document.getElementsByClassName("delete")
let box = document.getElementsByClassName("mini-box")[0]
let input = document.getElementsByClassName("input")[0]
let btn = document.getElementsByClassName("btn")[0]
let data;



btn.addEventListener("click", () => {
    if (input.value) {

        let parentDiv = document.createElement("div")
        let childDiv = document.createElement("div")
        let outsideIcon = document.createElement("i")
        let insideCheckIcon = document.createElement("i")
        let insideUncheckIcon = document.createElement("i")
        let span = document.createElement("span")

        parentDiv.classList.add("input-group", "d-flex", "justify-content-between", "align-items-center", "p-2", "task")
        childDiv.classList.add("d-flex", "justify-content-start", "align-items-center")
        outsideIcon.classList.add("fa-solid", "fa-circle-xmark", "delete")
        insideUncheckIcon.classList.add("fa-sharp", "fa-regular", "fa-circle", "uncheck")
        insideCheckIcon.classList.add("fa-solid", "fa-circle-check", "check", "hide")
        span.classList.add("ms-3", "tasks")

        span.innerHTML = input.value
        childDiv.append(insideCheckIcon, insideUncheckIcon, span)
        parentDiv.append(childDiv, outsideIcon)
        box.appendChild(parentDiv)

        input.value = ""
        localStorage.setItem("data", box.innerHTML)
    }
})


box.addEventListener("click", (event) => {
    if (event.target.className == "fa-solid fa-circle-xmark delete") {
        event.target.parentElement.remove()
        localStorage.setItem("data",box.innerHTML)
    }

    if (event.target.classList.contains("uncheck")){
        event.target.classList.toggle("hide")
        let hidden =(event.target.parentElement).children[0]
        let through = ((event.target.parentElement).children[2])
        hidden.classList.toggle("hide")
        through.classList.toggle("line")
        localStorage.setItem("data", box.innerHTML)

    }

    if (event.target.classList.contains("check")) {
        event.target.classList.toggle("hide")
        let hidden = (event.target.parentElement).children[1]
        let through = ((event.target.parentElement).children[2])
        hidden.classList.toggle("hide")
        through.classList.toggle("line")
        localStorage.setItem("data", box.innerHTML)
    }

    if (event.target.classList.contains("tasks")) {
        event.target.classList.toggle("line")
        let hidden = (event.target.parentElement).children[1]
        let upper = ((event.target.parentElement).children[0])
        hidden.classList.toggle("hide")
        upper.classList.toggle("hide")
        localStorage.setItem("data", box.innerHTML)
    }

})

box.innerHTML = localStorage.getItem("data")








window.addEventListener("load", function () {
    let anchors = Array.prototype.slice.apply(document.querySelectorAll("a"))
    let idsDiv = Array.prototype.slice.apply(document.querySelectorAll(".tab-pane"))

    document.getElementById('nav-bar').addEventListener('click', e => {
        if (e.target.tagName == 'A') {
            const i = anchors.indexOf(e.target)

            anchors.map(a => a.classList.remove("active"))
            anchors[i].classList.add("active")
            idsDiv.map(div => div.classList.remove("active"))
            idsDiv[i].classList.add("active")
        }
    })

})

document.querySelector("form").addEventListener('submit', e => {
    e.preventDefault()
    alert(`Thank you for submitting your details ${e.target.name.value}!`)
    document.getElementById("submit").disabled = true
})

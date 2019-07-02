window.addEventListener("load", function () {
    let anchors = document.querySelectorAll("a")
    let idsDiv = document.querySelectorAll(".tab-pane")
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < anchors.length; i++) {
            idsDiv[i].classList.remove("active")
        }
        let clickedTab = tabClickEvent.currentTarget
        let id = clickedTab.getAttribute("href")
        document.getElementById(id).classList.add("active")
    }
    for (i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("click", myTabClicks)
    }

})
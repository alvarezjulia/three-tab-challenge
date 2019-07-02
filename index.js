window.addEventListener("load", function () {
    // store tabs variable
    var myTabs = document.querySelectorAll("ul.nav-tabs > li");
    let tabs = document.querySelectorAll(".tab-pane")
    // console.log('myTabs: ', myTabs)
    function myTabClicks(tabClickEvent) {
        for (var i = 0; i < myTabs.length; i++) {
            // myTabs[i].classList.remove("active");
            tabs[i].classList.remove("active")
        }
        // var clickedTab = tabClickEvent.currentTarget;
        let clickedTab = tabClickEvent.currentTarget
        console.log(clickedTab)
        // clickedTab.classList.add("active");
        // tabClickEvent.preventDefault();
        // var myContentPanes = document.querySelectorAll(".tab-pane");
        // for (i = 0; i < myContentPanes.length; i++) {
        //     myContentPanes[i].classList.remove("active");
        // }
        // var anchorReference = tabClickEvent.target;
        // console.log(anchorReference)
        // var activePaneId = anchorReference.getAttribute("href");
        // var activePane = document.querySelector(activePaneId);
        // activePane.classList.add("active");
    }
    for (i = 0; i < myTabs.length; i++) {
        myTabs[i].addEventListener("click", myTabClicks)
        tabs[i].addEventListener("click", myTabClicks)
    }

})

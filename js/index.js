const firstTmp = document.getElementById('firstTmp');
const secondTmp = document.getElementById('secondTmp');

firstTmp.addEventListener('click', (e) => {
    secondTmp.style.transition = "ease all 0.8s"
    secondTmp.style.transform = "translateX(-100%)"
    firstTmp.style.transform = "translateX(100%)";
    secondTmp.style.transform = "translateX(0%)";
    setTimeout(() => {
        Promise.resolve()
            .then(() => firstTmp.style.transition = "none")
            .then(() => firstTmp.style.transform = "translateX(-100%)");
    }, 750);
});
secondTmp.addEventListener('click', (e) => {
    firstTmp.style.transition = "ease all 0.8s"
    secondTmp.style.transform = "translateX(100%)";
    firstTmp.style.transform = "translateX(0%)";
    setTimeout(() => {
        Promise.resolve()
            .then(() => secondTmp.style.transition = "none")
            .then(() => secondTmp.style.transform = "translateX(-100%)");
    }, 750);
});
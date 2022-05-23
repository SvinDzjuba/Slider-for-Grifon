const firstTmp = document.getElementById('firstTmp');
const secondTmp = document.getElementById('secondTmp');

firstTmp.addEventListener('click', (e) => {
    setTimeout(() => secondTmp.style.opacity = "1", 1);
    firstTmp.style.pointerEvents = "none";
    secondTmp.style.pointerEvents = "none";
    secondTmp.style.transition = "ease all 0.4s";
    firstTmp.style.transform = "translateX(100%)";
    setTimeout(() => firstTmp.style.opacity = "0", 1);
    secondTmp.style.transform = "translateX(0%)";
    setTimeout(() => {
        Promise.resolve()
            .then(() => firstTmp.style.transition = "none")
            .then(() => firstTmp.style.transform = "translateX(-100%)")
            .then(() => firstTmp.style.pointerEvents = "all")
            .then(() => secondTmp.style.pointerEvents = "all")
    }, 350);
});
secondTmp.addEventListener('click', (e) => {
    setTimeout(() => firstTmp.style.opacity = "1", 1);
    firstTmp.style.pointerEvents = "none";
    secondTmp.style.pointerEvents = "none";
    firstTmp.style.transition = "ease all 0.4s"
    secondTmp.style.transform = "translateX(100%)";
    setTimeout(() => secondTmp.style.opacity = "0", 1);
    firstTmp.style.transform = "translateX(0%)";
    setTimeout(() => {
        Promise.resolve()
            .then(() => secondTmp.style.transition = "none")
            .then(() => secondTmp.style.transform = "translateX(-100%)")
            .then(() => firstTmp.style.pointerEvents = "all")
            .then(() => secondTmp.style.pointerEvents = "all")
    }, 350);
});
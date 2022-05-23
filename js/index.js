const firstTmp = document.getElementById('firstTmp');
const secondTmp = document.getElementById('secondTmp');

firstTmp.addEventListener('click', (e) => {
    secondTmp.classList.remove('active');
    secondTmp.style.transition = "ease all 0.8s"
    secondTmp.style.transform = "translateX(-100%)"
    firstTmp.style.transform = "translateX(100%)"
    secondTmp.style.transform = "translateX(0%)"
    setTimeout(() => {
        Promise.resolve()
            .then(() => firstTmp.style.transform = "translateX(-100%)")
            .then(() => firstTmp.style.transition = "none");
    }, 750);
});
secondTmp.addEventListener('click', (e) => {
    secondTmp.classList.add('active');
    firstTmp.classList.add('active');     
    setTimeout(() => {
        Promise.resolve()
            .then(() => secondTmp.style.transform = "translateX(-100%)")
            .then(() => secondTmp.style.transition = "none");
    }, 750);
});
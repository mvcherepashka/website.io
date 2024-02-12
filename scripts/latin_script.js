
const latin = ["Consuetudo est altera natura", "Nota bene", "Nulla calamitas sola", "Per aspera ad astra"];
const rus = ["Привычка - вторая натура", "Заметьте хорошо!", "Беда не приходит одна", "Через тернии к звездам"]

let count = 0;

function btnClick() {
    let el = document.createElement('li');
    el.className = parity();
    counter.append(el);
    let el2 = document.createElement('ul');
    el.append( latin[0],el2);
    let el3 = document.createElement('li');
    el2.append(el3);
    el3.append(rus[0]);
    alert(rnd());
    count+=1;
}

function parity() {
    if (count%2 == 0) {return "odd"} else return "even";
}
function rnd() {
    return Math.floor(Math.random()*(latin.length - 0)) + 0;
}
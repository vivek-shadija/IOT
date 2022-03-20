function initMethod() {
    changeHeight();
}

function changeHeight() {
    var height = Math.floor(Math.random() * 27) + 'em';
    water = document.getElementById('water');
    water.style.height = height;
    console.log(height);
    setTimeout(changeHeight, 3000);
}
//max height  = 27 em;
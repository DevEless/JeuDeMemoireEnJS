let btn1 = document.querySelectorAll('.btn.btn-secondary')[0]
let btn2 = document.querySelectorAll('.btn.btn-secondary')[1]
let madiv = document.getElementById('mode')

btn1.addEventListener("click", () => {
    console.log('hey je me fous de ta gueule hihi')
    document.body.innerHTML += "<script src='./public/js/modules/_facile.js'></script>";
});



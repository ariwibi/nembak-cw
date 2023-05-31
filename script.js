// tangkap element dari button, sentence
// const btn = document.querySelector(".content"); 
const btn1 = document.querySelector(".btn-1"); 
const btn2 = document.querySelector(".btn-2"); 

// tampilkan kalimat gombalan

// ketika button1 di click maka tampilkan alert 
btn1.addEventListener('click', e => {
//    if(e.target.className = 'btn-1') {
       alert("YEYY THANK YOU😘😍😍")
    // }
});

// ketika button2 di click maka ubah posisi dari button ke temapat random
btn2.addEventListener('click', (change) => {
        const i = Math.floor(Math.random()*500)+1;
        const j = Math.floor(Math.random()*500)+1;
        btn2.style.left = i+"px";
        btn2.style.top = j+"px";
})
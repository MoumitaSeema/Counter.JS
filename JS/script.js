const counterElm =Array.from( document.querySelectorAll(".counter"));
counterElm.map((item)=>{
    let count = 0;
    let userVAlue = item.innerHTML;
    let Seema = setInterval(()=>{
       item.innerHTML = count++;
        if(count > userVAlue ) {
            clearInterval(Seema);
        }
    },item.dataset.time);
});



let hourel=document.getElementById('hours');
let minel=document.getElementById('minutes');
let secel=document.getElementById('second');
let ampmel=document.getElementById('ampm');
function update(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ap=h>12?"PM":"AM";
    if(h>12)
    { 
        h=h-12;
        
    }
    h=h<10?"0"+h:h;
    s=s<10?"0"+s:s;
    m=m<10?"0"+m:m;
    hourel.innerHTML=h;
    minel.innerHTML=m;
    secel.innerHTML=s;
    ampmel.innerHTML=ap;
    setTimeout(update, 1000);
}
update();
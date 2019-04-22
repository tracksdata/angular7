let jsClock=document.querySelector('#js-Clock');


function jsTick(){
    let time=new Date().toLocaleTimeString();

    let ui=`
    <div class="alert alert-info">
      <span class="badge badge-danger"> <h1> ${time}</h1> </span>
    </div>
    
    `
    
    jsClock.innerHTML=ui;

}

setInterval(jsTick,1000);

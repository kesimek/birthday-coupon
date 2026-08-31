const n={shop:"🛍️ Shopping Spree",craft:"🎨 Create Something Together"};
gift.onclick=()=>{confetti({particleCount:220,spread:140});giftScreen.className="hidden";choiceScreen.className="active";render();}
if(localStorage.birthdayChoice)show(localStorage.birthdayChoice);
function choose(v){localStorage.birthdayChoice=v;confetti({particleCount:300,spread:180});show(v)}
function show(v){choiceScreen.className="hidden";doneScreen.className="active";sel.innerHTML="Ellie chose:<br><strong>"+n[v]+"</strong>"}
function backView(){doneScreen.className="hidden";choiceScreen.className="active";render()}
function render(){let v=localStorage.birthdayChoice;banner.style.display=v?"block":"none";banner.textContent="Ellie has already chosen her Birthday Adventure!";
["shop","craft"].forEach(id=>{let c=document.getElementById(id),b=document.getElementById(id+"Btn"),r=document.getElementById(id+"Ribbon");c.className="card";b.disabled=false;b.textContent="Choose Adventure";r.style.display="none";
if(v){if(id===v){c.classList.add("selected");b.disabled=true;b.textContent="Your Choice";r.style.display="block"}else{c.classList.add("disabled");b.disabled=true;b.textContent="Not Selected"}}})}
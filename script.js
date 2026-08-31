
const g=giftScreen,c=choiceScreen,d=doneScreen,n={shop:"🛍️ Shopping Spree",craft:"🎨 Create Something Together"};
gift.onclick=()=>{confetti({particleCount:220,spread:140});g.className="screen";c.className="screen active";render();}
if(localStorage.getItem("birthdayChoice"))show(localStorage.getItem("birthdayChoice"));
function choose(v){localStorage.setItem("birthdayChoice",v);confetti({particleCount:300,spread:180});show(v);}
function show(v){selection.innerHTML="Ellie chose:<br><strong>"+n[v]+"</strong>";g.className="screen";c.className="screen";d.className="screen active";}
function back(){d.className="screen";c.className="screen active";render();}
function render(){
let v=localStorage.getItem("birthdayChoice");
banner.style.display=v?"block":"none";
banner.textContent="🎉 Ellie has already chosen her Birthday Adventure!";
["shop","craft"].forEach(id=>{
let card=document.getElementById(id),btn=document.getElementById(id+"Btn"),rib=document.getElementById(id+"Ribbon");
card.classList.remove("selected","disabled");rib.style.display="none";btn.disabled=false;btn.textContent="Choose Adventure";
});
if(v){
["shop","craft"].forEach(id=>{
let card=document.getElementById(id),btn=document.getElementById(id+"Btn");
if(id==v){card.classList.add("selected");document.getElementById(id+"Ribbon").style.display="block";btn.textContent="Your Choice";btn.disabled=true;}
else{card.classList.add("disabled");btn.textContent="Not Selected";btn.disabled=true;}
});
}}

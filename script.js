const gift=document.getElementById('gift');
const giftScreen=document.getElementById('giftScreen');
const choiceScreen=document.getElementById('choiceScreen');
const doneScreen=document.getElementById('doneScreen');

const saved=localStorage.getItem('birthdayChoice');
if(saved){
showDone(saved);
}

gift.addEventListener('click',()=>{
confetti({particleCount:180,spread:100});
giftScreen.classList.remove('active');
choiceScreen.classList.add('active');
});

function choose(choice){
localStorage.setItem('birthdayChoice',choice);
confetti({particleCount:250,spread:160});
showDone(choice);
}

function showDone(choice){
giftScreen.classList.remove('active');
choiceScreen.classList.remove('active');
doneScreen.classList.add('active');
document.getElementById('selection').innerHTML='You chose:<br><strong>'+choice+'</strong>';
}

gift.onclick=()=>{confetti({particleCount:180,spread:120});giftScreen.className='hidden';choiceScreen.className='active';}
function finish(sel){choice.textContent='Ellie chose: '+sel;choiceScreen.className='hidden';doneScreen.className='active';confetti({particleCount:280,spread:180});}

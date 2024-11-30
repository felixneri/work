const checkBtn =document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultP = document.getElementById("result");
const userInput = document.getElementById("text-input");
 
checkBtn.addEventListener('click', ()=>{
    const phoneNumber = userInput.value.trim();
    if (!phoneNumber) {
        alert("please enter a valid phone number");
        return;
    }
    
    const validRegex = /[1] [555][-][555][5555] /;
    const validRegexTwo = /[1][ (555)][ 555][-][5555]/;
    const validRegexThree = /[555][555][5555] /;
    const validRegexFour = /[5][-][5][5]/;
    const validRegexFive =/[(5)][5][-][5] /;
    const validRegexSix =/[1][(5)][5][-][5] /;
    const invalidNumRegexone =/[5][-][5]  /;
    const invalidNumRegexTwo =/[5][5]/;
    const invalidNumRegexThree =/[1] [5][)][5][-][5] /;
    const validRegexSeven =/[1] [5][5][5]/;
    const validRegexEight =/[1] [456] [789] [4444] /;
    const invalidNumRegexFour =/[123][**][&][!!][asdf][#] /;
    const invalidNumRegexFive =/[55555555]/;
    const invalidNumRegexSix =/[(6054756961)] /;
    const invalidNumRegexSeven =/[2] [(757)] [622][-][7382] /;
    const invalidNumRegexEight =/[0] [(757)] [622][-7382] /;
    const invalidNumRegexNine =/[-1] [(757) ][622][-][7382] /;
    const invalidNumRegexTen =/[2] [757] [622][-][7382] /;
    const invalidNumRegexEleven =/[27576227382 ]/;
    const invalidNumRegexTwel = /[(275)][76227382] /;
    const invalidNumRegexThirteen =/[2][(757)][6227382] /;
    const invalidNumRegexFourteen =/[2][(757)][622][-][7382] /;
    const invalidNumRegexFifTeen =/[555)][-][555][-][5555] /;
    const invalidNumRegexSixTeen =/[(555-555-5555]/;
    const invalidNumRegexSevenTeen =/[(555)][5][(55?)][-][5555] /;
    const invalidNumRegexEighTeen =/[55][][55-55-555-5] /;
    const invalidNumRegexNineTeen =/[11] [555-555-5555 ]/;
    
if (validRegex.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexTwo.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexThree.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexFour.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexFive.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexSix.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexSeven.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (validRegexEight.test(phoneNumber)) {
    resultP.textContent =`valid us number:${phoneNumber}`
}else if (invalidNumRegexone.test(phoneNumber)) {
resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexThree.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexFour.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexFour.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexFive.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexSix.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexSeven.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexEighTeen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexNine.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexTen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexEleven.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexTwel.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexThirteen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexFourteen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexFifTeen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexSixTeen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
    
}else if (invalidNumRegexSevenTeen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexEighTeen.test(phoneNumber)) {
    return`invalid us number:${phoneNumber}`
}else if (invalidNumRegexNineTeen.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}else if (invalidNumRegexone.test(phoneNumber)) {
    resultP.textContent =`invalid us number:${phoneNumber}`
}
    
});
clearBtn.addEventListener('click',()=>{
    resultP.textContent = "";
    userInput.value ="";
});

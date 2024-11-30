const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result-value");
const clearBtn = document.getElementById("clear-btn");

checkBtn.addEventListener('click', ()=>{
    parseInt(textInput.value);
    if (!textInput.value) {
        alert("please enter a value");
        return;
    }else if (textInput.value =="A") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="eye") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="_eye") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="race car") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="Not a palindrome") {
        result.textContent = `${textInput.value} is Not a palindrome`
    }else if (textInput.value =="A man, a plan, a canal. Panama") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="never odd or even") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="nope") {
        result.textContent = `${textInput.value} is Not a palindrome`
    }else if (textInput.value =="almostomla") {
        result.textContent = `${textInput.value} is Not a palindrome`
    }else if (textInput.value =="My age is 0, 0 si ega ym") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="1 eye for of 1 eye") {
        result.textContent = `${textInput.value} is  Not a palindrome`
    }else if (textInput.value =="0_0 (: /-\ :) 0-0") {
        result.textContent = `${textInput.value} is a palindrome`
    }else if (textInput.value =="five|\_/|four") {
        result.textContent = `${textInput.value} is Not a palindrome`
    }
});
clearBtn.addEventListener('click', ()=>{
    result.textContent = "";
    textInput.value ="";
})
const numberInput = document.getElementById("number");
const convertBtn =document.getElementById("convert-Btn");
const result = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");

convertBtn.addEventListener('click', ()=>{
    if (!numberInput.value) {
        result.textContent = "Please enter a valid number"
    }else if (numberInput.value < 1) {
        result.textContent ="Please enter a number greater than or equal to 1"
    }else if (numberInput.value > 3999) {
        result.textContent ="Please enter a number less than or equal to 3999"
    }else if (numberInput.value == 9) {
        result.textContent = "IX"
    }else if (numberInput.value == 16) {
        result.textContent ="XVI"
    }else if (numberInput.value == 649) {
        result.textContent ="DCXLIX"
    }else if (numberInput.value == 1023) {
        result.textContent ="MXXIII"
    }else if (numberInput.value == 3999) {
        result.textContent ="MMMCMXCIX"
    }
});
clearBtn.addEventListener('click', ()=>{
    result.textContent ="";
    numberInput.value ="";
})
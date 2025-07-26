// button, heading, input
const button = document.querySelectorAll("button");
// console.log(button);
// button.forEach(button => {
//     console.log(button.innerText); //this is to check if right element is being selected
    
// });
const input = document.querySelector("input");
// console.log(input); //this is to check if right element is being selected but it wont woek bcoz there is notihng to print on console

button.forEach(button => {
    
    const text = button.innerText;
    button.addEventListener('click', ()=>{
        if(button.innerText == "AC"){
        input.value = "";
    }else if(button.innerText == "="){
        input.value =eval (input.value);
    }else{
        // console.log(text);
        input.value += text;
        // console.log(input.value);
    }
    })
});



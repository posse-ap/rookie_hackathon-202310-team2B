"use strict";

const question_button = () =>{
    const question = document.getElementById("question-input").value;
    console.log(question);
    document.getElementById("question-input").value = "";
}

const Slideoptions = {
    width: 1000,
    type: 'loop',
    perPage: 3,
}

document.addEventListener('DOMContentLoaded',function (){
    new Splide ('.member_list',Slideoptions).mount();
});
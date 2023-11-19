"use strict";

const question_button = () =>{
    const question = document.getElementById("question-input").value;
    console.log(question);
    document.getElementById("question-input").value = "";
}

const slideOptions = {
    width: 1000,
    type: 'loop',
    perPage: 3,
    pagination:false,
}

document.addEventListener('DOMContentLoaded',function (){
    new Splide ('#member_list_outer',slideOptions).mount();
});

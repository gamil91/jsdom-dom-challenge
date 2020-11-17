let counter = document.getElementById('counter')
let timer = setInterval(count, 1000);
// document.addEventListener("DOMContentLoaded", timer);

function count(){
   counter.innerText = `${parseInt(counter.innerText) + 1}`
}



let minus = document.getElementById('minus')
minus.addEventListener('click', function(){
    num = `${parseInt(counter.innerText - 1)}`;
    counter.innerText = `${num}`;
    });

let plus = document.getElementById('plus')
plus.addEventListener('click', function(){
    let num = parseInt(counter.innerText) + 1;
    counter.innerText = `${num}`;
});


let likes = document.querySelector('.likes')
let likesObj = {}

let heart = document.getElementById('heart')
heart.addEventListener('click', function(){
    let counterNum = counter.innerText	
    if(likesObj[counterNum] == undefined){	
        likesObj[counterNum] = 1	
    } else {	
        likesObj[counterNum]++	
    }
    
    likes.innerHTML = ""	
    for (var key in likesObj) {	
        let number = key	
        let numOfLikes = likesObj[key]	
        let newLi = document.createElement('li')	
        newLi.innerText = `${number} has been liked ${numOfLikes}`	
        likes.append(newLi)	
    }
    
});


let form = document.getElementById('comment-form')
let submit = document.getElementById('submit')
let comments = document.querySelector('#list.comments')

form.addEventListener('submit', submitComment);

function submitComment(event){
    let comment = document.getElementById('comment-input').value
    let para = document.createElement('p')
    para.innerText = comment;
    comments.appendChild(para)
    event.preventDefault()
}



function disableBtn() {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
}

function enableBtn() {
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
}


let pause = document.getElementById('pause')
pause.addEventListener('click', function(){
    disableBtn()
    clearInterval(timer)
    
    let resume = document.createElement('button')
    resume.id = "resume"
    resume.innerText = "resume"
    pause.parentNode.replaceChild(resume, pause)
    
    let resumeBtn = document.getElementById('resume')
    resumeBtn.addEventListener('click', function(){
        resumeBtn.parentNode.replaceChild(pause, resumeBtn)
        timer = setInterval(count, 1000);
        enableBtn()
    })
})

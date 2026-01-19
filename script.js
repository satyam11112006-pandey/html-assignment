const toggle = document.getElementById
('menu-toggle')

if(toggle){
    toggle.addEventListener('change' ,
        ()=>{
            document.body.classList.toggle
            ("no-scroll" , toggle.checked);
        }
    )
}

const words = [ "Student", "Web Devloper" , "Sportsperson"];

const typingText = document.getElementById("typing-span")

let wordIndex=0 ;
let charIndex=0 ;
let isDeleting = false;
let typingDelay = 100;
let erasimgDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const CurrentWord =words[wordIndex];

    if(!isDeleting){
        typingText.textContent = CurrentWord.substring(0, charIndex + 1); charIndex++;

        if(charIndex === CurrentWord.length){
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        }else{
            setTimeout(type, typingDelay);
        }
    } else {
        typingText.textContent = CurrentWord.substring(0, CurrentWord - 1);charIndex--;

        if(charIndex === 0) {
            isDeleting= false;
            wordIndex = (worldIndex + 1) %
            words.length; any
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasimgDelay);
        }
    }
};
document.addEventListener
('DOMContentLoaded' ,()=>{
    if(words?.length) type
})
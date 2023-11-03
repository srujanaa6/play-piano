const allkeys=document.querySelectorAll(".piano-keys .key");

for(var i=0;i<allkeys.length;i++)
{
    allkeys[i].addEventListener("click",(e)=>
    {
        const textval=e.target.innerText;
      
         var audio=new Audio(textval+'.mp3');
        audio.play();
    });
    
}

const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
clickedKey.classList.add("active"); // adding active class to the clicked key element
setTimeout(() => { // removing active class after 150 ms from the clicked key element
    clickedKey.classList.remove("active");
}, 150);






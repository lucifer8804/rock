var userchoice;
var computerchoice;
const displaywinner=document.querySelector('.winner-name');
const selecteditem=document.querySelectorAll('.button');
const  resultbox=document.querySelector('.winner');
const container=document.querySelector('.container');
const userimg=document.querySelector('#user-choice');
const computerimg=document.querySelector('#computer-choice');
var winnername;
const closebtn=document.querySelector('.close');

selecteditem.forEach(selecteditem=> selecteditem.addEventListener('click',(e)=>{
    userchoice=e.target.id;
    genratedcomputerchoice();
    getresult();
    showresult();
}))

function genratedcomputerchoice()
{
    var rondom=Math.floor(Math.random()*3)+1;

    if(rondom===1)
    {
        computerchoice='rock';
        computerimg.src="./rock.png"
    }else if(rondom===2)
    {
        computerchoice='paper';
        computerimg.src="./paper.png"
    }else{
        computerchoice='scissors';
        computerimg.src="./scissors.png"
    }

    
}

function getresult()
{
    if(userchoice===computerchoice)
    {
        winnername='!! \u{1F388} Its Draw \u{1F388} !! '
    }
    else if(userchoice==='paper'&&computerchoice==='scissors')
    {
        winnername='You Lost  \u{1F625} !!'
    }
    else if(userchoice==='paper'&&computerchoice==='rock')
    {
        winnername='You Won  \u{1F60D} !!'
    }
    else if(userchoice==='rock'&&computerchoice==='paper')
    {
        winnername='You Lost  \u{1F625} !!'
    }
    else if(userchoice==='rock'&&computerchoice==='scissors')
    {
        winnername='You Won  \u{1F60D} !!'
    }
    else if(userchoice==='scissors'&&computerchoice==='rock')
    {
        winnername='You Lost  \u{1F625} !!'
    }
    else if(userchoice==='scissors'&&computerchoice==='paper')
    {
        winnername='You Won  \u{1F60D} !!'
    }
    


    displaywinner.textContent=winnername;
};


function showresult()
{



    userimg.src="./"+userchoice+".png";
    resultbox.classList.remove("hidden");
    container.classList.add('hidden');


}


closebtn.addEventListener('click',()=>{
    resultbox.classList.add("hidden");
    container.classList.remove('hidden');
})
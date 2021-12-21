let user_field = document.querySelector('#user-game');
let cpu_field = document.querySelector('#cpu-game');

const r_u = document.querySelector('#r-u');
const p_u = document.querySelector('#p-u');
const s_u = document.querySelector('#s-u');

const r_c = document.querySelector('#r-c');
const p_c = document.querySelector('#p-c');
const s_c = document.querySelector('#s-c')


window.addEventListener('keypress', function (e) {
    let user_move = addUserGamePlay(e.key)
    if(user_move==false)   //stops if wrong key is pressed
    {
        return;
    }else{
        addCpuGamePlay();
    }

    // setTimeout(function(){
    //     window.location.reload(1);
    //  }, 5000);
     

},{once:true}) //runs the event listener only once


function addUserGamePlay(keypress) {

    let element_to_append = document.createElement('i') ; 
    if(keypress != 'r' && keypress != 'p' && keypress != 's'  )
    {
        console.log("here")
        return false;
    }
    else switch(keypress)
    {
        case 'r':
            element_to_append.className=r_u.className;
            r_u.classList.add('move-animation-user');
            break;
        case 'p':
            element_to_append.className=p_u.className;
            p_u.classList.add('move-animation-user');
            break;
        case 's':
            element_to_append.className=s_u.className;
            s_u.classList.add('move-animation-user');
            break;
    }
    element_to_append.style.fontSize = "200px";
    user_field.append(element_to_append); 

    return true;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function addCpuGamePlay()
{
    let element_to_append = document.createElement('i');
    let span_to_append = document.createElement('span')
    let array  = [r_c,p_c,s_c];
    let randomMove = array[getRandomInt(3)];
    element_to_append.className = randomMove.className;
    span_to_append.className = randomMove.parentNode.className;
    span_to_append.append(element_to_append);
    cpu_field.append(span_to_append);
    
    element_to_append.style.fontSize = '200px'

}



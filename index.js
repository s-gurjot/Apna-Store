//Getting the menu items 
let items=document.getElementById('list'); //Gives Ul element



items.style.maxHeight="0px";
function fun()
{
    
        if(items.style.maxHeight=="0px")
        {
            items.style.maxHeight="200px";
        }
        else
        {
            items.style.maxHeight="0px";
        }
  
}


// Getting the menu icon

//let icon=document.getElementsByClassName('menu-img');
//icon.addEventListener('click',fun);
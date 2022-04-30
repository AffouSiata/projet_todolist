let btn = document.querySelector('.btn');
let compte = document.querySelector('span');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log(this);

    /* ajouter*/
    let input = document.querySelector(".input_btn");
    console.log(input.value);
    
    let tache = ` <div class="block">
    
        <p>
            <input type="checkbox" onclick="check(event)" class="check">
            ${input.value}
            <i class="fas fa-trash-alt" class="sup" onclick="Delete(event)"></i>
        </p>
    </div>`;
    let grandDiv =document.querySelector('.contenu') 
    grandDiv.innerHTML += tache
   input.value= "";

   compte.textContent = parseInt(compte.textContent)+1


  

    
})
 /*supprimer*/
function Delete(e){
    let grandDiv =document.querySelector('.contenu')
    grandDiv.removeChild(e.target.parentElement.parentElement) 
    compte.textContent = parseInt(compte.textContent)-1

}
function tout(e){
    let grandDiv =document.querySelector('.contenu')
    grandDiv.innerHTML =""
    compte.textContent = 0

}
function check(e){
    
    // console.log(e.target.checked);

    if(e.target.checked ==true){
        let ck = document.querySelector('p')
        ck.style.backgroundColor="#DCDCDC";
        let icon = document.querySelector('i')
        icon.style.visibility="hidden";
    }
    else{
        let ck = document.querySelector('p')
        ck.style.backgroundColor="rgb(0, 174, 255)";
        let icon = document.querySelector('i')
        icon.style.visibility="visible";
    }
}




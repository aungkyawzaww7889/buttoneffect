const atags = document.querySelector('a');
const effects = document.querySelectorAll('.effect');




function showeffects(){
    // console.log('hay');

    effects.forEach(function(effect){
        // console.log(effect);

        effect.classList.add('showanimal')

        // if(effect.classList.contains('showanimal')){
        //     effect.classList.remove("showanimal");
        // }else{
        //     effect.classList.add('showanimal');
        // }

        setTimeout(function(){
            effect.classList.remove("showanimal");
        },500);
    });
}


atags.addEventListener('click',showeffects);
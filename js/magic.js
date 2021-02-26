const refs = {
    conteiner: document.querySelector(".conteiner"),
    control:document.getElementsByName('r1'),
};
console.log(refs.control)

//refs.control.addEventListener('click', onControlClick);
refs.conteiner.addEventListener('click', onConteinerClick);
 

function wathColor(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checked) {
          return arr[i].value
      }
    }
    return false
}


    




function onConteinerClick(e) {
    const isEl = e.target.classList.contains('sota');
    
    if (!isEl) {
        return;
    }

    let carrcolored = wathColor(refs.control);
    console.log(carrcolored)



    const paintDot = e.target;

    if (e.target.classList.length<=1) {
        paintDot.classList.add(carrcolored);
    } else {
        paintDot.classList.remove('red', 'green', 'blue', 'white');
        paintDot.classList.add(carrcolored);
    }

}


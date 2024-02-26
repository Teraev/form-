let form = document.forms.signup
let inputs = form.querySelectorAll('input')
let eror_span = document.querySelector('.eror span')
let succs = document.querySelector('.success span')

form.onsubmit = (event) => {
    event.preventDefault()
    

    let error_count = 0
    let success = 12
   

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')

        if ( isRequest === true && inp.value.length === 0) {
            inp.parentNode.classList.add('error')
            error_count++
        } else {
            inp.parentNode.classList.remove('error')
            
        }

        
    });
    if(error_count > 0) {
        alert('Заполни главные критерии!')
    } else {
        submit()
    }
    eror_span.innerHTML = error_count


    

    inputs.forEach(inpu => {
        if (inpu.value.length === 0) {
            success--
        } else {
           
        }
    })

    succs.innerHTML = success
    
 
  

}

    



function submit(form) {
    let fm = new FormData(form)

    let user = {}

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


const patterns = {
name: /^[a-z ,.'-]+$/i,
surname: /^[a-z ,.'-]+$/i,
Email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
Home: /^\d{9}$/,
Moms : /^[A-Za-z]+$/,
Paps : /^[A-Za-z]+$/,
Job:  /^.{1,50}$/,
JavaScript: /^.{1,50}$/,
HTML: /^.{1,50}$/,
CSS: /^.{1,50}$/,
car: /^.{1,50}$/,
}

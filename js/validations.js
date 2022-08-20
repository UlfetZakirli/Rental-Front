//  Sidebar/menu
let checkIn = document.getElementById('checkIn')
let checkOut = document.getElementById('checkOut')
let adults = document.getElementById('adults')
let kids = document.getElementById('kids')

// Contact
let userName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let form = document.querySelector('form')

// Subscribe/Modal
let subEmail = document.getElementById('subEmail')

//Contact/Validation
function validateInput() {
    //check name 
    if (userName.value.trim() === "") {
        onError(userName, "The field is required")
    } else {
        onSuccess(userName)
    }
    
    //check email
    if (email.value.trim() === "") {
        onError(email, "The field is required")
    } else {
        if (!isValidEmail(email.value.trim())) {
            onError(email, 'Email is not valid')
        } else {
            onSuccess(email)
        }
    }

    //check message
    if (message.value.trim() === "") {
        onError(message, "The field is required")
    } else {
        onSuccess(message)
    }
}

// Sidebar/Validation
function validateInput1() {
    //checkIn validation
    if (checkIn.value.trim() === "") {
        onError(checkIn, "The field is required")
    } else {
        if (!isValidDate(checkIn.value.trim())) {
            onError(checkIn, "Date is not valid")
        } else {

            onSuccess(checkIn)
        }
    }

     //checkOut validation
    if (checkOut.value.trim() === "") {
        onError(checkOut, "The field is required")
    } else {
        if (!isValidDate2(checkOut.value.trim()) || checkIn.value.trim() >= checkOut.value.trim()) {
            onError(checkOut, "Date is not valid")
        } else {

            onSuccess(checkOut)
        }
    }

    //adults validation
    if (adults.value.trim() === "") {
        onError(adults, "The field is required")
    } else {
        onSuccess(adults)
    }

    //kids validation
    if (kids.value.trim() === "") {
        onError(kids, "The field is required")
    } else {
        onSuccess(kids)
    }
}


// Subscribe/Modal
function validateInput2() {
    //subEmail validation
    if (subEmail.value.trim()=== "") {
        onError(subEmail, "The field is required")
    } else {
        if(!isValidEmail(subEmail.value.trim())){
            onError(subEmail,"Email is not valid")
        }else{

            onSuccess(subEmail)
        }
    }
}


//Send a Message
document.getElementById('send-button').addEventListener('click', (event) => {
    event.preventDefault()
    validateInput()
})

//Search availability
document.getElementById('search-button').addEventListener('click', (event) => {
    event.preventDefault()
    validateInput1()
})

//Subscribe modal
document.getElementById('sub-button').addEventListener('click', (event) => {
    event.preventDefault()
    validateInput2()
})

//In Success case
function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector('small')
    messageEle.style.display = 'none'
    messageEle.innerText = ''
    parent.classList.remove('error')
    parent.classList.add('success')
}

//In Error case
function onError(input, message) {
    let parent = input.parentElement
    let messageEle = parent.querySelector('small')
    messageEle.style.display = 'block'
    messageEle.innerText = message
    messageEle.style.color="red"
    parent.classList.remove('success')
    parent.classList.add('error')

}

//regex for isValidDate(checkIn)
function isValidDate(checkIn) {
    return /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/.test(checkIn);
}

//regex for isValidDate(checkOut)
function isValidDate2(checkOut) {
    return /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/.test(checkOut);
    const parts = checkOut.split('/').map((p) => parseInt(p, 10));
}

//regex for isValidEmail
function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//regex for isValidEmail(subEmail)
function isValidEmail(subEmail) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(subEmail);
}



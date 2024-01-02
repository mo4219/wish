const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "wish.html"
    }else{
        alert("Use name without intial and correct password all letters small first letter capital")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "Mosika" && password === "1234567"){
        return true
    }else{
        return false
    }
}

    // form loadinng animation

const con =[...document.querySelector('.con').children];

con.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity =1;
    },i*100);
})

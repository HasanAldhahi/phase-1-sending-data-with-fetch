// Add your code here

const message = document.querySelector("#message")
const error = document.querySelector("#error")

function submitData(name, email) {

    const data = {
        name: name,
        email: email,
    }



    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json()).then(user => {
        message.innerHTML = user.id;
    })
        .catch(err => {
            error.innerHTML = err.message
            return err.message
        })





}
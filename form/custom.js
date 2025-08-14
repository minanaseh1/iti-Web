const form = document.querySelector("#form");

let users = [];

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    console.log("mina");

    const user = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
    textArea: form.textArea.value,
    };
    console.log(user);
    users.push(user); // Add the user to the users array
    form.reset();
     // Log the users array to the console
    console.log("mina");
})



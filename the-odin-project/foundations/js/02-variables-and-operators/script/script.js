let user = "";
let password = "";

if (user === "Admin") {
    if (password === "TheMaster") {
        print("Welcome!")
    } else if (password === "") {
        print("Canceled")
    } else {
        print("Wrong password")
    }
} else if (user === "") {
    print("Canceled")
} else {
    print("I don't know you")
}
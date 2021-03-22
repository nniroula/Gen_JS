let message = "I am working on web development";
function myFunc(){
    let element = document.getElementById("workHard");
    //let element = document.getElementsByClassName("workHard"); this does not work
    element.innerText = message;
    document.write("Hey!!!");
}
myFunc();
window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (e) {
      e.preventDefault();
    };
};
function getResults() {
    let form = document.getElementsByClassName("had")
    const question1 = parseInt(document.querySelector("input[name='question1']:").valueOf);
    const question2 = parseInt(document.querySelector("input[name='question2']:").valueOf);
    const question3 = parseInt(document.querySelector("input[name='question3']:").valueOf);
    const question4 = parseInt(document.querySelector("input[name='question4']:").valueOf);
    const question5 = parseInt(document.querySelector("input[name='question5']:").valueOf);
    let resultRange = ("art" || "math" + "car" || "bike" + "comic" || "novel" + "alot" || "none" + "hw" || "mb");
    };
    
function hideResults() {
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
}
    if (resultRange = 5) {
    document.getElementById("ruby")
    Element.removeAttribute("class", "hidden");
}
    else if (resultRange <=6) {
        document.getElementById("java")
        Element.removeAttribute("class", "hidden");   
}
    else (resultRange <=9) 
        document.getElementById("python")
        Element.removeAttribute("class","hidden");


    form.addEventListener("submit", function (e) {
        let form = document.getElementsByClassName("had");
        form.addEventListener("submit", resultRange);
        form.onsubmit = function(e) {
    }});
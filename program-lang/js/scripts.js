    form.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
    };
};
function getResults(event) {
    let form = document.getElementsByClassName("had")
    const question1 = parseInt(document.querySelector("input[name='question1']:").valueOf);
    const question2 = parseInt(document.querySelector("input[name='question2']:").valueOf);
    const question3 = parseInt(document.querySelector("input[name='question3']:").valueOf);
    const question4 = parseInt(document.querySelector("input[name='question4']:").valueOf);
    const question5 = parseInt(document.querySelector("input[name='question5']:").valueOf);
    const resultRange = ("question1.valueOf" + "question2.valueOf" + "question3.valueOf" + "question4.valueOf" + "question5.valueOf") = (resultRange);
}
function hideResults() {
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
}
    if (resultRange = "5") {
    document.getElementById("ruby").removeAttribute("class", "hidden");
}
    else if (resultRange <= "8") {
        document.getElementById("java").removeAttribute("class","hidden");   
}
    else (resultRange >= "9") 
        document.getElementById("python").removeAttribute("class","hidden");


    form.addEventListener("submit", resultRange), function() {
        let form = document.getElementsByClassName("had")
        reset.removeAttrtibute("class", "hidden");
    }

    window.addEventListener("submit", function (event) {
        let form = document.getElementsByClassName("had");
        form.addEventListener("submit", resultRange);
        form.onsubmit = function() {
        event.preventDefault();
    }});
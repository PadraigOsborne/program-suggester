window.onload = function(){
    let form = document.querySelector("form");
    form.onsubmit = function(event)
};
function hideResults() {
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
}

function getResults(event) {
    let form = document.getElementsByClassName("had")
    const question1 = parseInt(document.querySelector("input[name='question1']:").value);
    const question2 = parseInt(document.querySelector("input[name='question2']:").value);
    const question3 = parseInt(document.querySelector("input[name='question3']:").value);
    const question4 = parseInt(document.querySelector("input[name='question4']:").value);
    const question5 = parseInt(document.querySelector("input[name='question5']:").value);
    const resultRange = question1 + question2 + question3 + question4 + question5;
}
if (resultRange <= 5) {
    document.getElementById("ruby").removeAttribute("class");
}
    else if (resultRange <= 8) {
        document.getElementById("java").removeAttribute("class");
    
}
    else if (resultRange >= 9) {
        document.getElementById("python").removeAttribute("class");
    }

    form.addEventListener("submit, getResults"), function() {
        let form = document.getElementsByClassName("had")
        reset.removeAttrtibute("class");
    }

    window.addEventListener("submit, funtion"() {
        let form = document.getElementsByClassName("had")
        form.addEventListener("submit", getResults);
    });

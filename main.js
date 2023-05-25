// function the changed
    function getInputValue() {
        let inputValue = document.getElementById("input").value;
        document.getElementById("output").innerHTML = inputValue;
    }

//  funcion the send
    function sendInputValue() {
        let inputValue = document.getElementById("input").value;
        document.getElementById("enter").innerHTML += '<br>' + inputValue
    }

    
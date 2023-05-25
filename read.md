
<input type="text" id="textInput1" />
    <button type="button" onclick="getInputValue()">
      Get Value From Input
    </button>
    <h3>Output:</h3>
    <p id="output"></p>
    <script>
      function getInputValue() {
        let inputValue = document.getElementById("textInput1").value;
        document.getElementById("output").innerHTML = inputValue;
      }
</script>




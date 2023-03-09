
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)

    let keys = {
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowerCase: "abcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
        symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
      };

      let getKey = [
        function upperCase() {
          return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
        },
        function lowerCase() {
          return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
        },
        function number() {
          return keys.number[Math.floor(Math.random() * keys.number.length)];
        },
        function symbol() {
          return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
        }
      ];

      document.getElementById("password__result").addEventListener("pwd", pass)
      
      function pass() {
        let upper = document.getElementById("upperCase").checked;
        let lower = document.getElementById("lowerCase").checked;
        let number = document.getElementById("number").checked;
        let symbol = document.getElementById("symbol").checked;
        if (upper + lower + number + symbol === 0) {
          alert("Please check atleast one box!");
          return;
        }
        let passwordBox = document.getElementById("password__result");
        let length = document.getElementById("length");
        let password = "";
        while (length.value > password.length) {
          let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
          let isChecked = document.getElementById(keyToAdd.name).checked;
          if (isChecked) {
            password += keyToAdd();
          }
        }
        passwordBox.innerHTML = password;

        document.getElementById("password__result").value = password;
      }


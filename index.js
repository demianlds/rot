function rot13(str) {
    return str.replace(/[a-zA-Z]/gi, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
  }
  function traducir() {
    const inputText = document.getElementById('inputText').value;
    const resultado = rot13(inputText);
    document.getElementById('resultado').textContent = resultado;
  }

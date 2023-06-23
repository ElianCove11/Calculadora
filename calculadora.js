function agregar_pantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    var screenValue = document.getElementById('pantalla').value;
    var result = eval(screenValue);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiar_pantalla() {
    document.getElementById('pantalla').value = '';
  }
  
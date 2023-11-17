
// Obtém a referência para a div clicável
const formula = document.getElementById('formulas');
const infra = document.getElementById('infraestrutura');
const conceitos = document.getElementById('conceitos');

formula.addEventListener('click', function() {
    const pagFormulas = 'pages/formulas.html';
    window.location.href = pagFormulas;
});

infra.addEventListener('click', function() {
    const pagInfra = 'pages/infraestrutura.html';
    window.location.href = pagInfra;
});

conceitos.addEventListener('click', function() {
    const pagConceitos = 'pages/conceitos.html';
    window.location.href = pagConceitos;
});
  
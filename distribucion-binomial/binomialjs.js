/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function binomialSolve() {

    var nvalue = document.getElementById("n_value");
    var pvalue = document.getElementById("p_value");
    var xvalue = document.getElementById("x_value");
    var n = parseInt(nvalue.value);
    var p = parseFloat(pvalue.value);
    var x = parseInt(xvalue.value);
    var q = 1 - p;

    var probabilidad = combinatoria(n, x) * (Math.pow(p, x)) * (Math.pow(q, n - x));
    alert("La probabilidad de que sobrevivan "+ x +" pacientes es de: " + probabilidad);

    function factorial(num) {
        var factorial = 1;
        for (var i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }

    function combinatoria(num_n, num_x) {
        return factorial(num_n) / (factorial(num_x) * (factorial(n - x)));
    }
}




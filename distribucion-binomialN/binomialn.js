function calcular() {
  const por=0.05;
  const npor=0.95;
  const n1 = parseInt(document.querySelector('#n11').value);
  const n2 = parseInt(document.querySelector('#n22').value);
  const n3= n1-n2;
  var x=n1-1;
  var k=n2-1;
  var xk=x-k;
  var num = 1;
  var den1 = 1;
  var den2 = 1;
  var rt
  var r;
  while(x>0){
    num=num*x;
    x--;
  }
  while(k>0){
    den1=den1*k;
    k--;
  }
  while(xk>0){
    den2=den2*xk;
    xk--;
  }
  rt=((num/(den1*den2)))*(Math.pow(por,n2))*(Math.pow(npor,n3))*100;
  r=rt.toString()+"%";
  document.querySelector('#r2').innerHTML = r;
}

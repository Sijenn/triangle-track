function tracker(){
    var sideA=parseInt(document.getElementById("first").value); 
    var sideB=parseInt(document.getElementById("second").value); 
    var sideC=parseInt(document.getElementById("third").value); 
    
   
    var result=document.querySelector('#response')
    
    if (sideA<=0 && sideB<=0 && sideC<=0)
    {
        result.innerHTML=(' <h2>Value Cannot be less than or equals to zero </h2> <br> <img src="images/tenor.gif" alt="equilateral">');
}
    else if
    (sideA===sideB && sideA===sideC && sideB===sideC ){
    result.innerHTML=(' <h2>Equilateral triangle</h2> <br> <img src="images/equilateralTriangle.gif" alt="equilateral">');
    }else if(sideA===sideB ||sideB===sideC || sideA===sideC){
        result.innerHTML=(' <h2>Isoseles triangle</h2> <br> <img src="images/isosceles.jpg" alt="equilateral">');
    }
    else if(sideC + sideB > sideA || sideA + sideC > sideB || sideA + sideB > sideC){
        result.innerHTML=(' <h2>Scalene triangle</h2> <br> <img src="images/scaleneTriangle.gif" alt="equilateral">');
    }else if((sideA+sideB)<=sideC || (sideA+sideB)<=sideC || (sideB+sideC)<=sideA){
        result.innerHTML="These values do not make a triangle";
    }
    else
    {
        result.innerHTML=(' <h2>Thank you try again/h2> <br> <img src="images/equilateralTriangle.gif" alt="equilateral">');

    }
}
function refresh(){
    location.reload();
}
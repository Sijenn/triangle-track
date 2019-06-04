function tracker(){
    var sideA=parseInt(document.getElementById("first").value); 
    var sideB=parseInt(document.getElementById("second").value); 
    var sideC=parseInt(document.getElementById("third").value); 
    
   
    var result=document.querySelector('#response')
    if ( first <=0 || second <=0 || third <= 0) {
        result.innerHTML=('<h2>You have entered wrong values</h2> </h2> <br> <img src="images/tenor.gif" alt="emoji">');
        alert("you have entered wrong values")
    }
     else if (sideA<=0 && sideB<=0 && sideC<=0)
    {
        result.innerHTML=('<h2>Value Cannot be less than or equals to zero </h2> <br> <img src="images/tenor.gif" alt="emoji">');
        alert("values cannot make a triangle")

    }else if
    (sideA===sideB && sideB===sideC ){
    result.innerHTML=('<h2>Equilateral triangle</h2> <br> <img src="images/open.jpeg" alt="love">');
    alert("Equilateral triangle")


    }else if((sideA+sideB)<=sideC || (sideA+sideC)<=sideB || (sideB+sideC)<=sideA){
        result.innerHTML=('These values do not make a triangle');
        alert("values do not make a triangle")

    }else if(sideA===sideB ||sideB===sideC || sideA===sideC){
        result.innerHTML=(' <h2>Isoseles triangle</h2> <br> <img src="images/kiss.jpeg" alt="kiss">');
        alert("Isosceles triangle")


    }else if(sideC + sideB > sideA || sideA + sideC > sideB || sideA + sideB > sideC){
        result.innerHTML=('<h2>Scalene triangle</h2> <br> <img src="images/kiss.jpeg" alt="kiss">');
        alert("scalene triangle")
    }
    else
    {
        result.innerHTML=('<h2>Thank you try again/h2>');
    }
}
function refresh(){
    location.reload();
}
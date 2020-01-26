document.getElementById("butt").onclick = function(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let op=document.getElementById("operator").value;
    let ans='';

    if (op=='a')
        ans=n1+" + "+n2+" = "+(+n1 + +n2);
    else if (op=='s')
        ans=n1+" - "+n2+" = "+(n1 - n2);
    else if (op=='d')
        ans=n1+" / "+n2+" = "+(n1 / n2);
    else if (op=='m')
        ans=n1+" * "+n2+" = "+(n1 * n2);

    document.getElementById("ans").innerHTML=ans;
}

document.getElementById("a").onclick = function(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    document.getElementById("ans").innerHTML=n1+" + "+n2+" = "+(+n1 + +n2);
    //alert(+n1 + +n2);
}
document.getElementById("s").onclick = function(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    document.getElementById("ans").innerHTML=n1+" - "+n2+" = "+(n1 - n2);
    //alert(n1-n2);
}
document.getElementById("d").onclick = function(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    document.getElementById("ans").innerHTML=n1+" / "+n2+" = "+(n1 / n2);
    //alert(n1/n2);
}
document.getElementById("m").onclick = function(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    document.getElementById("ans").innerHTML=n1+" * "+n2+" = "+(n1 * n2);
    //alert(n1*n2);
}
test();
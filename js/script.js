var likes = 0;
var c = 0
var d = 0;
var e = 0;
var custo = 0;
var b = likes

onload = function(){
    let save1 = this.localStorage.getItem("save");
    let status = this.document.getElementById("aa");
    status.innerHTML = save1;
}
function clickme(a){
    b += a;
    let add = document.getElementById("aa");
    add.innerHTML = b;
    if(b >= 10){
        document.getElementById("upgrade1").style.opacity = "1";
    }
    localStorage.setItem("save",b);
}

//Função que determina quantos Likes por Click
function click1(){
    c = 1 + d;
    clickme(c);
}

function click2(){
    
    c = 1 * e;
    clickme(c);
}

function upgradeClick(){
    //Custo para se realizar o Upgrade
    let custoTotal = 10 + Math.floor(custo*2.5);
    if(b >= custoTotal ){
    b -= custoTotal;
    custo++;
    d ++;
    }
    //Exibe quantos Clicks por Segundo
    document.getElementById("dps").innerHTML = c + 1 + " moedas por segundo";
    //Exibe quanto custa o upgrade
    document.getElementById("bb").innerHTML = custoTotal;
    //Exibe o valor descontado do upgrade
    document.getElementById("aa").innerHTML = b ;
}

function clickIdle(){
    //Resolver Problema de Custo
    let progressão = 1;
    let custoTotal1 = 50;
    custoTotal1 += progressão;
    progressão ++;
    e+=1;
    setInterval(click2,1000);
    document.getElementById("cc").innerHTML = custoTotal1;
}

function resetar(){
    localStorage.clear("save");
    document.getElementById("aa").innerHTML = likes;
}

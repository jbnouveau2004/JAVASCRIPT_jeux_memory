var j=0;
var k=0;
var premier;
var pointeur_premier;
var deuxieme;
var pointeur_deuxieme;
var temps=180;


melange();

function melange(){
    var un=0, deux=0, trois=0, quatre=0, cinq=0, six=0, sept=0, huit=0, l=0;
    var m;
    var btn=document.getElementsByClassName('carte');

    for(i=0;i<16;i++){
        while(i==l){
        m= Math.floor(Math.random() * 9);
        console.log(i+"et"+l+"par contre"+un+deux+trois+quatre+cinq+six+sept+huit);
        switch(m){
            case 1:
                if(un<2){un +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 2:
                if(deux<2){deux +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 3:
                if(trois<2){trois +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 4:
                if(quatre<2){quatre +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 5:
                if(cinq<2){cinq +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 6:
                if(six<2){six +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 7:
                if(sept<2){sept +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
            case 8:
                if(huit<2){huit +=1; l +=1; btn[i].lastChild.src="img/" + m + ".jpg";}
                break
        }
    }
    }
}


var timer = setInterval(diminutiontemps, 1000);

function diminutiontemps(){
    temps-=1;
    document.querySelector('#temps').innerText = temps;
    if(temps==0){
        j=2;
        clearInterval(timer);
        document.querySelector('p').style.display= "block";
    }
}

var btn=document.getElementsByClassName('carte');


btn[0].addEventListener("click", retourner);
btn[1].addEventListener("click", retourner);
btn[2].addEventListener("click", retourner);
btn[3].addEventListener("click", retourner);
btn[4].addEventListener("click", retourner);
btn[5].addEventListener("click", retourner);
btn[6].addEventListener("click", retourner);
btn[7].addEventListener("click", retourner);
btn[8].addEventListener("click", retourner);
btn[9].addEventListener("click", retourner);
btn[10].addEventListener("click", retourner);
btn[11].addEventListener("click", retourner);
btn[12].addEventListener("click", retourner);
btn[13].addEventListener("click", retourner);
btn[14].addEventListener("click", retourner);
btn[15].addEventListener("click", retourner);


function retourner(){
if(j==0){
this.classList.toggle("rotation");
j+=1;
premier=this.lastChild.src;
pointeur_premier=this;
}else if(j==1){
this.classList.toggle("rotation");
j+=1;
deuxieme=this.lastChild.src;
pointeur_deuxieme=this;

if(premier!=deuxieme){
    setTimeout(remettre, 5000);
}else{
    console.log("gagné!")
    k +=1;
    if(k==8){
        clearInterval(timer);
        document.querySelector('#temps').style.display= "none";
        document.querySelector('#temps2').style.display= "none";
        document.querySelector('#temps3').style.display= "block";
        document.querySelector('#temps4').style.display= "block";
        document.querySelector('#temps4').innerText = 180-temps;
        document.querySelector('#temps5').style.display= "block";
    }
    j=0;
}

}
}

function remettre(){
    pointeur_premier.classList.toggle("rotation");
    pointeur_deuxieme.classList.toggle("rotation");
    j=0;
}
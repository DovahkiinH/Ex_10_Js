var taille = window.prompt("Veuillez entrer la taille souhaiter :");
var myTableau = [];
myTableau.length = taille;
i = 0;
alert("le tableau contient "+ taille + " éléments");

    do 
    {

    myTableau[i++] = [window.prompt("Veuillez entrer une valeur pour la case N°"+i)]

    }while(i < taille)

alert(myTableau);
        
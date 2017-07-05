//Exercice 1

function vrai (){

return true;
};

// exercice 2

function mot (a){
	return a;
};
console.log(mot("test"))

// exercice 3

function deuxMots(a,b){
	return a + b;
};
console.log(deuxMots("mot1", "mot2"))

// exercice 4

function deuxNombres(a,b){
	if (a > b) {
		return console.log("Le premier nombre est plus grand car : " + a + " > " + b);
	}
	else if (a < b){
		return console.log("Le premier nombre est plus petit car : " + a + " < " + b);
	}
	else{
	return console.log("Les deux nombres sont identique : " + a + " est égale à " + b);
	}
};
deuxNombres(4,4);

// exercice 5

function nombreMot(chiffre,mot) {
	return chiffre + mot;
};
console.log(2 + "mots")

// exercice 6

function presentation(nom,prenom,age){
	return "Bonjour " + nom +" " + prenom + " ,tu as " + age + " ans.";
}
console.log(presentation("mon nom","et mon prenom",250));

// exercice 7

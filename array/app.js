var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];

// exercice 8

array.push("Courgette");
console.log(array);

//exercice 9

array[4].push("Citron");
console.log(array);
// exercice 10 suppression

array.splice(1,1);
console.log(array);
// exercice 11 ajout

array.splice(2,0,"Poire");
console.log(array);
var menu = $(".fa-bars, .fa-times"); //dichiaro le classi alla var menu che mi servono per il click (icona burger e icona X)
var hamMenu = $(".hamburger-menu"); // dichiaro classe del menu da visualizzare alla var
menu.click( function (){ //evento click funzione anonima
  hamMenu.toggle(2000); //toggle con una durata di 2 secondi, toggle attiva e disattiva il display block
});


// chiediamo all'utente il suo nome
const userName = prompt ("inserisci il tuo nome");
// console.log(userName);

// chiediamo all'utente il suo cognome
const userSurname = prompt ("inserisci il tuo cognome");
// console.log(userSurname);

// chiediamo all'utente il suo colore preferito
const favoriteColor = prompt ("inserisci il tuo colore preferito");
// console.log(favoriteColor);

document.getElementById("user-name").innerHTML = userName;
document.getElementById("user-surname").innerHTML = userSurname;
document.getElementById("favorite-color").innerHTML = favoriteColor;

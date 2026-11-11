
/* skriv under her */

const overskrift = document.getElementById("overskrift");
const knapp = document.querySelector("#knapp");
const reset = document.querySelector("#reset");

const tekst2 = document.querySelector(".tekst2");

const knappFargeRød = document.querySelector("#knappFargeRød");
const knappFargeBlå = document.querySelector("#KnappFargeBlå");
const knappFargeGrønn = document.querySelector("#knappFargeGrønn");

const darkMode = document.querySelector("#DarkMode");

knapp.addEventListener("click", function() {
    overskrift.textContent = "Du trykket på knappen!";
});

reset.addEventListener("click", function() {
  overskrift.textContent = "Hei verden!";
});

knappFargeRød.addEventListener("click", function() {
  tekst2.style.color = "red";
});

knappFargeBlå.addEventListener("click", function() {
  tekst2.style.color = "blue";
});

knappFargeGrønn.addEventListener("click", function() {
  tekst2.style.color = "green";
});

const tilbakeStillFarge = document.querySelector("#tilbakeStillFarge")

tilbakeStillFarge.addEventListener("click", function() {
  tekst2.style.color = "black";
}); 

darkMode.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});


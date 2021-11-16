const intro = document.getElementById("intro");
const client = document.getElementById("formClient");
const transaction = document.getElementById("formTransaction");
let goClient = () => {
  intro.style.display = "none";
  client.style.display = "flex";
  transaction.style.display = "none";
};
let goTransaction = () => {
  intro.style.display = "none";
  client.style.display = "none";
  transaction.style.display = "flex";
};

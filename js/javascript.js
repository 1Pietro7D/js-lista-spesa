console.log("miao");

const theList = [
  "Sgabello",
  "Formaggio",
  "Borraccia blu",
  "Salumi",
  "eeeeeeh.. Cannuccia!",
];

let i = 0;
while (i < theList.length) {
  document.getElementById(
    "myList"
  ).innerHTML += `<li class="mb-2">${theList[i]}</li>`;
  i++;
}
/*
for (i = 0; i < theList.length; i++) {
  document.getElementById(
    "myList"
  ).innerHTML += `<li class="mb-2">${theList[i]}</li>`;
}
*/

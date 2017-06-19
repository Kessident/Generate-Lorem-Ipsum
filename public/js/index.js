const body = document.querySelector('body');
let num = 3;

function generateLorem() {
  fetch("http://localhost:3000/loremGenerate").then(function (response) {
    response.text().then(function (data) {
      let newP = document.createElement("p");
      newP.innerHTML = data;
      body.appendChild(newP);
     });
  });
}

function getLoremNum() {
  fetch("http://localhost:3000/getLoremNum").then(function (response) {
    response.text().then(function (data) {
      if (data !== ""){
        num = data;
      }
      for (let i = 0; i < num; i++) {
        generateLorem();
      }
    });
  });
}


getLoremNum();

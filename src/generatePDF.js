const pdf = require("html-pdf");
const path = "./src/files/GeneratedFile.pdf";

const name = "Wilker Bruno";
const university = "Universidade Federal do Ceará - UFC";
const course = "Ciência da Computação";

const content = `
  <h1>Gerando PDF com Template Strings</h1>
  <hr/>
  <p>Podemos gerar dessa forma, mas para coisas mais elaboradas é melhor com view engines.</p>
  <br/>
  <p>Nome: ${name}</p>
  <p>Universidade: ${university}</p>
  <p>Curso: ${course}</p>
`;

pdf.create(content, {}).toFile(path, (err, res) => {
  if (err) {
    console.log("Erro!");
  } else {
    console.log(res);
  }
});

const pdf = require("html-pdf");
const ejs = require("ejs");

const pathTemplate = "./src/templates/report.ejs";

const path = "./src/files/GeneratedFile.pdf";
const pathEJS = "./src/files/GeneratedFileEJS.pdf";

const name = "Wilker Bruno";
const university = "Universidade Federal do Ceará - UFC";
const course = "Ciência da Computação";

ejs.renderFile(
  pathTemplate,
  {
    nameInTheTemplate: name,
    universityInTheTemplate: university,
    courseInTheTemplate: course,
  },
  (err, html) => {
    if (err) {
      console.log("Erro no EJS!");
    } else {
      pdf.create(html, {}).toFile(pathEJS, (err, res) => {
        if (err) {
          console.log("Erro!");
        } else {
          console.log(res);
        }
      });
    }
  }
);

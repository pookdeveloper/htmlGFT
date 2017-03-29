/*
<p>Paragraph with an <em>emphasized</em> word and
<strong>others more emphasized </strong></p>
*/


var para = document.createElement("p");
var textoPara = document.createTextNode("Paragraph with an");
var textoPara2 = document.createTextNode("word and");

var em = document.createElement("em");
var textoEm = document.createTextNode("emphasized");


var strong = document.createElement("strong");
var textoStrong = document.createTextNode("others more emphasized");

em.appendChild(textoEm);
strong.appendChild(textoStrong);

para.appendChild(textoPara);
para.appendChild(em);
para.appendChild(textoPara2);
para.appendChild(strong);


document.body.appendChild(para);

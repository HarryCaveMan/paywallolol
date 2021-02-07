let all_paragraphs = [...document.getElementsByTagName('p')].map(elm => elm.innerText);
let pars_raw_html = all_paragraphs.map(text => `<p>${text}</p>`);
// Could do outerHTML and replace entire doc to avoide any other scripts they are running outside body
document.body.innerHTML = "";
pars_raw_html.forEach(par => document.body.innerHTML += par);

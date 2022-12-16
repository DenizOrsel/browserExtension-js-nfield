/* Create & Inject HTML */
var localTheme = localStorage.getItem("theme");

var ce_main_container = document.createElement("div");
var ce_input = document.createElement("input");
var ce_label = document.createElement("label");

ce_main_container.classList.add("ce_main_container");
ce_input.id = "ce_input";
ce_input.type = "checkbox";
ce_input.name = "theme";
ce_label.setAttribute("for", "ce_input");
ce_label.id = "ce_label";
ce_label.innerHTML = "☼";

ce_main_container.appendChild(ce_input);
ce_main_container.appendChild(ce_label);

if (!document.querySelector(".ce_main_container")) {
  document.body.appendChild(ce_main_container);
}

/* Toggle Theme */

if (localTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  ce_input.checked = true;
  insertDarkTheme();
} else {
  document.documentElement.setAttribute("data-theme", "light");
  ce_input.checked = false;
  removeDarkTheme();
}

var checkbox = document.querySelector("input[name=theme]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    /*trans()*/;
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    insertDarkTheme();
  } else {
    /*trans();*/
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    removeDarkTheme();
  }
});

var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches && localTheme === null) {
  document.documentElement.setAttribute("data-theme", "dark");
  checkbox.checked = true;
  localStorage.setItem("theme", "dark");
  insertDarkTheme();
} else if (!darkThemeMq.matches && localTheme === null) {
  document.documentElement.setAttribute("data-theme", "light");
  checkbox.checked = false;
  localStorage.setItem("theme", "light");
  removeDarkTheme();
}

var trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 350);
};

/* Insert-Remove CSS functions  */

function insertDarkTheme() {
  if (!document.querySelector("ce_cssDarkTheme")) {
    var ce_css = document.createElement("style");
    ce_css.id = "ce_cssDarkTheme";
    ce_css.innerHTML = `
    :root {
  --background-color: #181e2a; /* #181?e2a var(--background-color) */
  --primary-color: #f4742b; /* #f47?42b var(--primary-color) */
  --plane-color: #242b38; /* #242?b38 var(--plane-color) */
  --light-text-color: #c6cacf; /* #c6c?acf var(--light-text-color) */
  --bright-text-color: #ffffff; /* #fff?fff var(--bright-text-color) */
  --bar-highlight-color: #2f3b52; /* #2f3?52 var(--bar-highlight-color) */
  --warning-color: #f0610e; /* #f47?42b var(--warning-color) */
  --highlighter: #e66d11; /* #fea?867 var(--highlighter) */
}

*::-webkit-scrollbar {
  width: 4px;
  background-color: var(--background-color);
  height: 4px;
}

*::-webkit-scrollbar-track {
  background-color: var(--background-color);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
}

*::selection {
  background: var(--highlighter) !important; /* WebKit/Blink Browsers */
}
*::-moz-selection {
  background: var(--highlighter) !important; /* Gecko Browsers */
}


.help-section > table, details > table, .help-page > .clear-fix > div > table {
  background-color: var(--plane-color) !important;
  max-width: 90%;
  margin-left: 5rem !important;
  border: 2px solid var(--primary-color) !important;
}

.help-section > table > thead {
  background-color: var(--bar-highlight-color) !important;
}

.help-page-table > thead > tr > th {
  color: var(--primary-color) !important;
    letter-spacing: 1px;
  font-size: 1.2rem;
  line-height: 1.5;
  word-spacing: 1px;
  text-shadow: 2px 2px black;
}

.help-page-table > tbody > tr > td > a {
  color: var(--primary-color) !important;
  text-decoration-color: var(--primary-color);
  text-decoration-thickness: 1px;
  text-shadow: 2px 2px black;
  letter-spacing: 1px;

}

.help-page-table > tbody > tr > td > p {
  color: var(--light-text-color) !important;
  letter-spacing: 1px;
  font-size: 1.2rem;
  line-height: 1.5;
  word-spacing: 1px;
  text-shadow: 2px 2px black;
}

tr:hover td {
  background: var(--bar-highlight-color) !important;
}


html {
  background-color: var(--background-color) !important;
  color: var(--light-text-color) !important;
}

.help-page {
  background-color: var(--background-color) !important;
  color: var(--light-text-color) !important;
}

.float-left {
  display: flex !important;
  flex-direction: row !important;
}

.float-left > h1::before {
  background-image: url("https://identityeu.nfieldmr.com/img/nfield-manager.png") !important;
  background-size: 30px 30px !important;
  display: inline-block !important;
  width: 30px !important;
  height: 30px !important;
  content: "" !important;
}

.float-left > h1 {
  color: var(--warning-color) !important;
  font-weight: 800 !important;
  letter-spacing: -0.003em;
  font-size: 2.5rem !important;
  text-transform: uppercase;
  padding: 55px !important;
  text-shadow: 2px 2px black;
}

.featured > div > h2 {
  color: var(--primary-color);
  letter-spacing: 0.05em;
  padding-left: 1rem;
  text-shadow: 2px 2px black;
}

.featured > div > p {
  color: var(--light-text-color) !important;
  padding-left: 2rem;
  padding-right: 2rem;
  letter-spacing: 1px;
  font-size: 1.4rem;
  line-height: 1.5;
  word-spacing: 1px;
  text-shadow: 2px 2px black;
}

.featured > div > h3 {
  padding-left: 1rem;
  padding-top: 2rem;
}

.featured > div > h3 > a:hover {
  color: var(--primary-color) !important;
}

.featured > div > h3 > a {
  text-decoration: underline;
  text-decoration-color: var(--primary-color);
  text-decoration-thickness: 1px;
}

.help-section {
    margin-top: 2rem !important;
    margin-bottom: 5rem !important;
}

.help-section > div > .controller {
  padding-left: 3rem;
  color: var(--primary-color) !important;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px black;

}

.help-section > p {
  color: var(--light-text-color) !important;
  padding-left: 4rem;
  padding-right: 2rem;
  letter-spacing: 1px;
  font-size: 1.4rem;
  line-height: 1.5;
  word-spacing: 1px;
  text-shadow: 2px 2px black;
}

.api-survey-filter-title {
  border: 1px solid var(--primary-color) !important;
  padding: 1px 5px 1px 5px !important;
  border-radius: 12px !important;
  background-color: rgb(196, 197, 116) !important;
  font-style:normal !important;
  font-weight: bold;
  letter-spacing: 1px;
}

.api-survey-filter-types {
  background: #02a79c !important;
  font-style: normal !important;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 2px;
  border: 1px solid var(--bright-text-color) !important;
}

.obsolete {
    font-style: normal !important;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--light-text-color) !important;
}

.obsolete > p {
  font-size: 1.2rem;
  color: var(--warning-color) !important;
}

.help-page > .featured > .content-wrapper > p > a::before {
  content: '<- ' !important;
}

.anchor {
  color: var(--primary-color) !important;
  text-shadow: 2px 2px black;
  letter-spacing: 1px;
  margin-left: 2rem;
}

details {
  margin-left: 3rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

code {
  background-color: var(--background-color) !important;
  color: var(--primary-color) !important;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0.2rem;
  border-radius: 0.4rem !important;
  border-color: var(--primary-color) !important;
}

.clear-fix > h1 {
  padding: 30px !important;
  margin-left: 1rem !important;
  color: var(--primary-color) !important;
}

.clear-fix > div > p {
  padding-left: 4rem;
  padding-right: 2rem;
  letter-spacing: 1px;
  font-size: 1.4rem;
  line-height: 1.5;
  word-spacing: 1px;
  text-shadow: 2px 2px black;
  color: var(--light-text-color) !important;
}

.clear-fix > div > h2, .clear-fix > div > h3 {
  padding-left: 3rem;
  padding-top: 2rem;
  color: var(--primary-color) !important;
}

.clear-fix > div >  a {
  text-decoration: underline !important;
  text-decoration-color: var(--primary-color) !important;
  text-decoration-thickness: 1px !important;
  padding: 4rem !important;
  font-size: 20px !important;
}

.clear-fix > div >  a:hover {
  color: var(--primary-color) !important;
}

h4 {
  background: var(--plane-color) !important;
  border: none !important;
  color: var(--light-text-color) !important;
  letter-spacing: 1px;
}

.sample-content {
  background: var(--plane-color) !important;
  border: none !important;
  color: var(--light-text-color) !important;
  letter-spacing: 1px;
}

    `;
    document.head.appendChild(ce_css);
  } else return;
}

function removeDarkTheme() {
  var element = document.getElementById("ce_cssDarkTheme");
  if (element != null) {
    element.remove();
  }
}

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
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    insertDarkTheme();
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light")   
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

:root[data-theme=dark] {
  --background-color: #181e2a; /* #181?e2a var(--background-color) */
  --primary-color: #f4742b; /* #f47?42b var(--primary-color) */
  --plane-color: #242b38; /* #242?b38 var(--plane-color) */
  --light-text-color: #c6cacf; /* #c6c?acf var(--light-text-color) */
  --bright-text-color: #ffffff; /* #fff?fff var(--bright-text-color) */
  --bar-highlight-color: #2f3b52; /* #2f3?52 var(--bar-highlight-color) */
  --warning-color: #f0610e; /* #f47?42b var(--warning-color) */
  --highlighter: #fea867; /* #fea?867 var(--highlighter) */
  --midi-text-color: #ececec; /* #fff?fff var(--midi-text-color) */
  --user-domain-info-color: #f4742b; /* #f47?42b var(--user-domain-info) */
}

:root[data-theme=light] {
  --background-color: #fafafa; /* #181?e2a var(--background-color) */
  --primary-color: #02a79c; /* #f47?42b var(--primary-color) */
  --plane-color: #fff; /* #242?b38 var(--plane-color) */
  --light-text-color: #c6cacf; /* #c6c?acf var(--light-text-color) */
  --bright-text-color: #ffffff; /* #fff?fff var(--bright-text-color) */
  --bar-highlight-color: #02a79c; /* #2f3?52 var(--bar-highlight-color) */
  --warning-color: #f0610e; /* #f47?42b var(--warning-color) */
  --highlighter: #fea867; /* #fea?867 var(--highlighter) */
  --midi-text-color: #ececec; /* #fff?fff var(--midi-text-color) */
}

.user-info,
.domain-info {
  color: var(--user-domain-info-color);
  font-weight: 300;
}

.nfc-radio-button-label {
  color: var(--light-text-color) !important;
}

.account,
.changepassword {
  background: var(--background-color);
}

.nfc-container.account {
  background: var(--bar-highlight-color);
}

.bottom-text,
.legal {
  background: var(--background-color);
}

.card {
  background: var(--plane-color) !important;
  border-radius: 8px !important;
}

input {
  background: var(--background-color) !important;
  border-radius: 8px !important;
  color: var(--primary-color) !important;
  border: none;
}

input:focus {
  outline: none !important;
}

input[type="password"] {
  background: var(--background-color) !important;
  border-radius: 8px !important;
  color: var(--primary-color) !important;
  border: none !important;
}

input[type="password"]:focus {
  background: var(--background-color) !important;
}

input::placeholder {
  color: var(--primary-color) !important;
  caret-color: var(--primary-color) !important;
}

.login-divider::before {
  color: var(--light-text-color) !important;
  background: var(--plane-color) !important;
}

.logo > h1,
.login-remember {
  color: rgb(236, 234, 234) !important;
}
.aad-common {
  color: var(--bright-text-color) !important;
}
.content {
  color: var(--primary-color) !important;
  background: var(--background-color) !important;
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

.nfield-logo,
a {
  color: var(--light-text-color) !important;
}


.main-content.md-default-theme {
  color: var(--primary-color) !important;
  background-color: var(--background-color) !important;
}

.md-input {
  color: var(--primary-color) !important;
  background-color: var(--background-color) !important;
  border-radius: 4px !important;
}

.filter-content {
  color: var(--primary-color) !important;
  background-color: var(--bar-highlight-color) !important;
}

.md-power-select-options {
  color: var(--primary-color) !important;
  background-color: var(--bar-highlight-color) !important;
  border-radius: 4px !important;
}

.activity-name {
  color: var(--primary-color) !important;
}

.md-text {
  color: var(--primary-color) !important;
}

.md-select-icon {
  color: var(--primary-color) !important;
}

.actions {
  color: var(--primary-color) !important;
  background-color: var(--bar-highlight-color) !important;
  border-color: var(--background-color) !important;
  color: var(--primary-color) !important;
  background-color: var(--background-color) !important;
  opacity: 0.77 !important;
}

.actions:hover {
  opacity: 1 !important;
}

.toolbar-text {
  opacity: 0 !important;
}

.mat-label,
.mat-input,
.mat-input::placeholder,
.ember-power-select-placeholder,
.ember-basic-dropdown-content-placeholder {
  color: var(--primary-color) !important;
  background-color: var(--background-color) !important;
  border-radius: 4px !important;
  padding-left: 4px !important;
  opacity: 0.8 !important;
  caret-color: var(--primary-color) !important;
}

.ember-power-select-options {
  color: var(--primary-color) !important;
  background-color: var(--plane-color) !important;
}

.ember-power-select-option {
  color: var(--primary-color) !important;
  background-color: var(--plane-color) !important;
}

.ember-power-select-option:hover {
  color: var(--primary-color) !important;
  background-color: var(--bar-highlight-color) !important;
}

#ember6,
md-tabs-canvas,
.drawer-opener,
.drawer-content,
.sidebar {
  background-color: var(--bar-highlight-color) !important;
}

.sidebar-button:hover {
  background-color: var(--plane-color) !important;
}

.label {
  color: var(--primary-color) !important;
  font-weight: 800 !important;
}

md-ink-bar {
  background-color: var(--primary-color) !important;
}

.nfield-card-header,
.nfc-card,
.nfc-table,
.nfc-header-row,
.nfc-body-row,
.nfc-nested-row,
.option-group,
.respondent-search-button,
.nfc-cell-for-displayName,
.nfc-cell-for-interview-id,
.nfc-cell-for-InterviewId,
.nfc-cell-for-SamplingPointId {
  background-color: var(--plane-color) !important;
  color: var(--primary-color) !important;
}

.nfc-cell-for-interviewId > nfc-column-sorter {
  z-index: -1 !important;
  background-color: var(--plane-color) !important;
  color: var(--primary-color) !important;
}

.nfc-cell-for-interviewId > div > span {
  background: var(--plane-color) !important;
}

.add-sampling-point-container > div {
  background-color: var(--plane-color) !important;
}

.addresses-list > div > div > button > label,
.sampling-points-list > div > div > button > label {
  color: var(--light-text-color) !important;
}

.nfc-dialog-header {
  color: var(--light-text-color) !important;
  border-radius: 4px 4px 0 0;
  background-color: var(--plane-color) !important;
}

.nfc-dialog-content {
  color: var(--light-text-color) !important;
  background-color: var(--plane-color) !important;
}

.nfc-dialog-actions {
  color: var(--light-text-color) !important;
  border-radius: 0 0 4px 4px;
  background-color: var(--plane-color) !important;
}

.date-picker-input,
.date-picker,
.date-picker-to,
.date-picker-from {
  color: var(--primary-color) !important;
  background-color: var(--background-color) !important;
  border-radius: 4px !important;
  padding-left: 4px !important;
  opacity: 0.8 !important;
  caret-color: var(--primary-color) !important;
}

.nfc-body-row:hover {
  background-color: var(--bar-highlight-color) !important;
}

.paging-info,
.nfc-card-title,
.nfield-card-title,
.title,
.new-survey-button,
.material-icons,
.md-button {
  color: var(--light-text-color) !important;
  font-weight: 400 !important;
}


#survey-details-setup-survey-responsecode-settings {
  max-width: 100% !important;
}

.response-code-item,
.url {
  color: var(--light-text-color) !important;
  background-color: var(--plane-color) !important;
}

.response-code-row > td > div > span {
  color: var(--primary-color) !important;
}

.nfc-table, .nfc-table-header, .nfc-header-row {
  max-width: 100% !important;
}

.nfc-header-row > .nfc-cell-for-code {
  width: 10% !important;
}

.nfc-header-row > .nfc-cell-for-description {
  width: 30% !important;
}

.nfc-header-row > .nfc-cell-for-url {
  width: 60% !important;
}

.response-code-row > .nfc-cell-for-code  {
  width: 10% !important;
}

.response-code-row > .nfc-cell-for-description {
  width: 30% !important;
}

.response-code-row > .nfc-cell-for-url {
  width: 60% !important;
}

.responsecode-settings > div > div > div > div > button > label {
  color: var(--light-text-color) !important;
}


.responsecode-settings > div > div > div > button > span {
  color: var(--light-text-color) !important;
}

.responsecode-settings > div > div > button > span {
  color: var(--light-text-color) !important;
}

.responsecode-settings > div > table > thead > tr > th > div > span {
  color: var(--light-text-color) !important;
}


.translation-settings > div > div > div > button > label,
.translation-settings > div > div > button.download-languages,
.upload > div > button > label {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.translation-settings > div > div > div > button > label:hover,
.translation-settings > div > div > button.download-languages:hover,
.upload > div > button > label:hover {
  opacity: 0.8 !important;
}

.upload-interviewers > button > label {
  color: var(--light-text-color) !important;
}

.channel-cati {
  color: rgb(173, 71, 199) !important;
  background-color: #31103b !important;
  border: 1px solid #8b4379 !important;
}

.channel-online,
.online,
.small,
.light,
.medium,
.heavy {
  color: rgb(29, 118, 219) !important;
  background-color: #10233b !important;
  border: 1px solid #2f527c !important;
}
.channel-capi,
.survey-type-option.capi {
  color: #24c262 !important;
  background-color: #123428 !important;
  border: 1px solid #144f34 !important;
}

.survey-type-option.cati {
  color: rgb(173, 71, 199) !important;
  background-color: #31103b !important;
  border: 1px solid #8b4379 !important;
}

.under-construction,
.provisioning {
  color: #becc01 !important;
  background-color: #31320b !important;
  border: 1px solid #514a08 !important;
}

.started,
.status.active {
  color: #01ccc4 !important;
  background-color: #0b2b32 !important;
  border: 1px solid #084951 !important;
}

.paused {
  color: #cc5c01 !important;
  background-color: #3b210e !important;
  border: 1px solid #511d08 !important;
}

.migration {
  color: #f32525 !important;
  background-color: #3b0b0b !important;
  border: 1px solid #511d1d !important;
}

.selected {
  background: var(--bar-highlight-color) !important;
}

.mat-character-counter {
  color: var(--primary-color) !important;
}

.stepper-title {
  color: var(--primary-color) !important;
}
.stepper-circle {
  background-color: var(--primary-color) !important;
}

.collapse-button {
  color: var(--primary-color) !important;
}

.add-variable-button {
  color: var(--primary-color) !important;
  background: none !important;
}

.add-office {
  color: var(--primary-color) !important;
  background: none !important;
}

.structure-editor > div > .sortable-item > div > .container,
.structure-editor > div > .sortable-item > div > .container > button,
.structure-editor > div > .sortable-item > div > .container > button + .name,
.children > div > .sortable-item > div > .container,
.children > div > .sortable-item > div > .container > button,
.children > div > .sortable-item > div > .container > button + .name {
  background: var(--primary-color) !important;
}

text {
  fill: var(--primary-color) !important;
}

.edit-targets-button {
  color: var(--bright-text-color) !important;
  background-color: var(--primary-color) !important;
}

.edit-targets-button:hover {
  opacity: 0.8 !important;
}

.stepper-button {
  background: none !important;
  outline: none !important;
}

.stepper-button:hover {
  text-decoration: underline !important;
}

.connector-line {
  display: none !important;
}

.can-save {
  background-color: var(--plane-color) !important;
}

.nfc-cell-for-repositoryName {
  background: var(--plane-color) !important;
}

.actions {
  background-color: var(--plane-color) !important;
}

.response-code {
  color: var(--primary-color) !important;
}

.domain-response-code-item:hover {
  background-color: var(--bar-highlight-color) !important;
}

.editing {
  background-color: var(--plane-color) !important;
}

.expanded-item,
p {
  color: var(--primary-color) !important;
}

.add-header {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.add-header:hover {
  opacity: 0.8 !important;
}

.ember-view.nfc-container.nfc-row.nfc-justify-end.nfc-align-center > button {
  color: var(--bright-text-color) !important;
  background: var(--bar-highlight-color-color) !important;
}

.ember-view.nfc-container.nfc-row.nfc-justify-end.nfc-align-center
  > button:hover {
  opacity: 0.8 !important;
}

.nfc-dialog-actions > button > .nfc-link-wrapper {
  color: var(--bright-text-color) !important;
}

pre {
  color: var(--light-text-color) !important;
  background: var(--background-color) !important;
}

.deleted > .label,
.deleted > .count,
.deleted > .percentage {
  background-color: var(--plane-color) !important;
}

.nfc-table-configuration-column-list {
  background-color: var(--plane-color) !important;
}

.nfc-table-configuration > div > button,
.nfc-table-configuration > div > button > span {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.add-filter {
  margin-top: 12px !important;
  margin-bottom: 12px !important;
}

.ember-power-select-selected-item {
  color: var(--light-text-color) !important;
}



.dns-check-status > .mat-icon {
  color: var(--primary-color) !important;
}

.pass-settings,
.in-context-help-text {
  color: var(--light-text-color) !important;
}

.invitations-blocked,
.nfc-cell-for-invitationsBlocked,
.nfc-cell-for-surveyName,
.nfc-cell-for-select {
  background: var(--plane-color) !important;
}

.variable-definition,
.level-definitions,
.level-definition,
.last-level {
  background-color: var(--plane-color) !important;
}

.nfield-warning-message,
.select-version-label {
  color: var(--primary-color) !important;
}

.nfield-warning-message > .paper-icon {
  color: var(--warning-color) !important;
}

.sampling-points
  > .nfield-card-content
  > .file-drop-container
  > .saving-overlay
  > .no-sampling-points
  > .nfc-no-data-actions
  > .animated-container
  > .buttons {
  display: flex !important;
  flex-direction: column !important;
}

.report-item {
  background-color: var(--plane-color) !important;
}

.nfc-cell-for-nfieldQuestionId,
.nfc-cell-for-text,
.nfc-cell-for-label,
.nfc-cell-for-select + .nfc-cell-for-name {
  background-color: var(--plane-color) !important;
}

.cancel-button + .action-button {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.type {
  fill: var(--primary-color) !important;
}

foreignObject {
  color: var(--primary-color) !important;
}

label {
  color: var(--primary-color) !important;
}

a[nfc-button-kind="outlined"] {
  border-color: var(--primary-color) !important;
}

button[nfc-button-kind="outlined"] {
  border-color: var(--primary-color) !important;
}

a[nfc-button-kind="outlined"] > .nfc-text-wrapper {
  color: var(--midi-text-color) !important;
}


button[nfc-button-kind="outlined"] > .nfc-text-wrapper {
  color: var(--midi-text-color) !important;
}




.blacklist-management > div > div > div > button > label {
  color: var(--light-text-color) !important;
}

.report-info {
  background: var(--plane-color) !important;
}

.report-action {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.report-action:hover {
  box-shadow: none !important;
}

.nfc-cell-for-isSelected {
  background-color: var(--plane-color) !important;
}

.nfc-table-configuration-column-list > li {
  background-color: var(--bar-highlight-color) !important;
}

.sample-toolbar > div > div > div > button > label {
  color: var(--light-text-color) !important;
}

.test-and-launch > div > button {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.test-and-launch > div > button:hover {
  opacity: 0.8 !important;
}

.script-ui > div > div > button > label,
.script-ui > div > button {
  color: var(--bright-text-color) !important;
  background: var(--primary-color) !important;
}

.script-ui > div > div > button > label:hover,
.script-ui > div > button:hover {
  opacity: 0.8 !important;
}

.data-cell > div > .upload-button::after {
  color: var(--light-text-color) !important;
  content: "Upload a Map" !important;
}

.edit-sampling-point-description-dialog > div > button[nfc-color="primary"],
.nfc-unsaved-changes-dialog > div > button[nfc-color="primary"] {
  background: var(--primary-color) !important;
}

.expanded > md-list-item > div > button {
  background: var(--bar-highlight-color) !important;
  opacity: 0.92 !important;
}

.requires-migration {
  display: none !important;
}



button[disabled] {
  opacity: 0.5 !important;
}


.confirm-create-survey-button {
  background: var(--primary-color) !important;
  color: var(--bright-text-color) !important;
}

.empty-or,
.add-sampling-point-title {
  color: var(--primary-color) !important;
}

.file-picker > label {
  color: var(--light-text-color) !important;
}

.selected-method {
    background: var(--primary-color) !important;
    border: 1px solid var(--bright-text-color) !important;
}
`;
    document.head.appendChild(ce_css);
  } else
  return;
}

function removeDarkTheme() {
  var element = document.getElementById("ce_cssDarkTheme");
  if (element != null) {
    element.remove();
  }
}

import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobslist";
const userLang = navigator.language || navigator.userLanguage;

ReactDOM.render(
<IntlProvider locale={userLang} messages= {userLang.includes("es")?localeEsMessages:localeEnMessages}>
    <JobsList />
</IntlProvider>, document.getElementById("root"));

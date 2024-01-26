// import choo
import choo from "choo";
import html from "choo/html";
// import { dirname, default as path } from 'path';

// initialize choo
const app = choo({ hash: true });

import machine from "./stores/machine";

app.use(machine);

app.route("/*", notFound);

// path.resolve('index.js');

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// import a template
import main from "./views/main";

app.route("/", main);

// start app
app.mount("#choomount");



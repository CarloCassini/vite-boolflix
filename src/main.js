import { createApp } from "vue";
// importo il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importo le regole javascript di bootstap
import * as bootstrap from "bootstrap";

import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// (ccn.ADD)
// questa parte importa una icona specifica. io scelgo di importare la busta della mail
// questa operazione è da fare per ongni oggetto si FontAwesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// bisogna inserire un alias per inserire la stellina in questione
import { faStar as faStarLine } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
// ogni icona aggiunta alla libreria (ccn.ADD) va aggiunta a questa riga di codice.
library.add(faEnvelope, faPaperPlane, faStar, faStarLine);

// per usare font awerome devo agganciarmi a un componente al quale aggiungerò tutti gli elementi che mi serviranno

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

// questa era la sintassi prima di installare fontawesome
// createApp(App).mount("#app");

// questa parte si trova al minuto 1:06 della lezione 51

import { reactive } from "vue";
// da node modules prendi vue e esporta la chiave reactive
// permette di rendere reattivi degli oggetti

// qui dentro mettimao tutti i data globali
export const store = reactive({
  apiKey: "3a465dac0c2cbe37bf31eb3e12a376fd",
  apiUri: "valore di apiUri",
});

// questa parte si trova al minuto 1:06 della lezione 51

import { reactive } from "vue";
// da node modules prendi vue e esporta la chiave reactive
// permette di rendere reattivi degli oggetti

// qui dentro mettimao tutti i data globali
export const store = reactive({
  apiUri: "valore di apiUri",
});

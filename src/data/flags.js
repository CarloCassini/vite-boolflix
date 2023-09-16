import { reactive } from "vue";

export const flags = reactive({
  flagsToManage: ["hi", "ja", "el", "ko", "zh"],
  flagBase: "https://flagcdn.com/24x18/",

  flagNotFound:
    "https://cdn.icon-icons.com/icons2/230/PNG/256/PiratesJollyRoger_Flag1_26099.png",
});

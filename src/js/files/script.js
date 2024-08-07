// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import ionRangeSlider from "ion-rangeslider";

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.0/build/js/utils.js",
  initialCountry: "ie",
  containerClass: "input-phone",
  separateDialCode: "true",
});

$(".js-first-range").ionRangeSlider({
  skin: "round", // Встановлюємо скін круглий
  grid: true,
  grid_snap: true,
  extra_classes: "custom-range first-range",
  values: [
    "1 month",
    "2 month",
    "3 month",
    "4 month",
    "5 month",
    "6 month",
    "7 month",
    "8 month",
    "9 month",
    "10 month",
    "11 month",
    "12 month",
  ],
});
$(".js-second-range").ionRangeSlider({
  skin: "round", // Встановлюємо скін круглий
  grid: true,
  grid_numbers: 4,
  min: 300,
  max: 15000,
  from: 2000,
  step: 5,
  extra_classes: "custom-range second-range",
});

import "../styles/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
Aos.init();
  // MOST of your code should go.
  //
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}

import "@picocss/pico/css/pico.min.css";
import React from "react";
import ReactDOM from "react-dom";

import BeforeAfterSlider from "../slider.js";
const before =
  "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg";
const after =
  "https://uiaa-web.azureedge.net/wp-content/uploads/2021/01/Dolomites-stock-UIAA.jpg";

ReactDOM.render(
  <BeforeAfterSlider before={before} after={after} width={640} height={480} />,
  document.querySelector("#root")
);

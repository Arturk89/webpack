import photo from "../images/camp.jpeg";
import $ from "jquery";

export default tag => {
  // const img = document.createElement("img");
  // img.src = photo;
  // document.querySelector(tag).appendChild(img);
  $(tag).append(`<img src=${photo}>`);
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const paragraph = document.querySelector("#parrafo");
console.log(paragraph);
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const dominioName =
  pronoun[Math.floor(Math.random() * pronoun.length)] +
  adj[Math.floor(Math.random() * adj.length)] +
  noun[Math.floor(Math.random() * noun.length)] +
  ".com";

paragraph.textContent = dominioName;

"use strict";

import {winAnnounce} from './configHelper.js';
import {winning} from './configHelper.js';
import {winDetails} from './configHelper.js';
import {date} from './configHelper.js';
import {mon} from './configHelper.js';
import {y} from './configHelper.js';
import {id} from './configHelper.js';

import {entryFee} from './configHelper.js';

let number;
let winner;

// random number selection function
const select = function () {
  number = Number(document.querySelector(".entries").value);
  console.log(number, typeof number);

  if (number > 0) {
    winner = Math.trunc(Math.random() * number + 1);
    console.log(winner);
    const winAnnouncement = "The winning number is:";
    const winDetail = `There were ${number} entries to this MIN 100 Club draw, which took place on ${date} ${mon} ${y}. The winner will receive £${(
      number *
      entryFee *
      0.4
    ).toFixed(2)} and £${(number * entryFee * 0.5).toFixed(
      2
    )} has been raised for Mums In Need. £${(number * entryFee * 0.1).toFixed(
      2
    )} will be saved for the 100 Club Christmas round.`;
    winning.classList.remove("hidden");
    winning.textContent = winner;
    winAnnounce.classList.remove("hidden");
    winAnnounce.textContent = winAnnouncement;
    winDetails.classList.remove("hidden");
    winDetails.textContent = winDetail;
  }
};

// event handlers
document.querySelector(".button").addEventListener("click", function () {
  select();
});

document
  .querySelector(".entries")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      select();
    }
  });

// reset event handler
document.querySelector("#reset").addEventListener("click", function () {
  init()
});

const state = function () {
  return {
  entries: number,
  winner: winner,
  fee: entryFee,
}
};

// save button event handler
document.querySelector("#record").addEventListener("click", function () {
  window.localStorage.setItem(`${id}`, JSON.stringify(state()));
  console.log(state());  
});

const init  = function () {
  winning.textContent = '';
  winAnnounce.textContent = '';
  winDetails.textContent = '';
  document.querySelector(".entries").value = '';
}

init();


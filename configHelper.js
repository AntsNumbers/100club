// helpers
const d = new Date();

const m = d.getMonth()+1;

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

// selectors
export const winAnnounce = document.querySelector(".winAnnounce");
export const winning = document.querySelector(".winning");
export const winDetails = document.querySelector(".winDetails");

// variables
export const date = d.getUTCDate();
export const mon = month[d.getMonth()];
export const y = d.getFullYear();
export const entryFee = 2;
export const id = d.getFullYear() + ('0' + (d.getMonth()+1)).slice(-2) + ('0' + d.getDate()).slice(-2);









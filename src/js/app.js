'use strict';

const d3 = require('d3-selection');

const oneDay = 24*60*60*1000;

let today = new Date();
let electionDay = new Date(2018,10,6);
let diffDays = Math.round(Math.abs((today.getTime() - electionDay.getTime())/(oneDay)));
let dayText1 = diffDays == 1 ? 'is' : 'are';
let dayText2 = diffDays == 1 ? 'day' : 'days';

d3.select('.text')
	.html(`<p>There ${dayText1}</p><p class = 'days'>${diffDays} ${dayText2}</p><p>until election day 2018</p>`);

d3.select('.days')
	.style('font-size', `${249 - diffDays + 7}px`);




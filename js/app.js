'use strict';
// need an array to stroe the hours - given

// object literal for each store
// min customer each hour
// max customer each hour
// average cookie sold per customer - given
// for each hour
// make an array that holds the customers for each hour
// need a random number between the min and the max
// *** make an arry that holds the number of cookies sold each hour***
// multiply the customers by the average cookies each customers buys
// this is what we want to put on the DOM
// total cookies for the day

//////////////////////////////////////////////////
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function Store(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesPerPerson){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesPerPerson = averageCookiesPerPerson;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
}

Store.prototype.calcCustomersEachHour = function(){
  // calculate the customers each hour and populate the array
  // for loop over hours
  // make a helper function that generates a random number
  // push that random number into the customersEachHour array
  for(var i=0; i<hours.length; i++){
    var customerThisHour = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

    this.customersEachHour.push(customerThisHour);
  }
};


Store.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour(); // this will generate the customer array
  // multiply the customers by the average cookies each customers buys
  // loop through the array of random customers
  // multiply each customer entry by the average cookie sales
  // push into the cookiesSoldEachHour array
  for(var i=0; i<this.customersEachHour.length; i++){
    var totalCookies = Math.ceil(this.averageCookiesPerPerson * this.customersEachHour[i]);

    this.cookiesSoldEachHour.push(totalCookies);
  }
};

Store.prototype.calcCookiesForTheDay = function(){
  this.calcCookiesSoldEachHour();
  // loop through cookies sold each hour array
  // add them all together
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesForTheDay += this.cookiesSoldEachHour[i];
  }
};

// only for the body of the table

// get the parent Element
var parentElement = document.getElementById('table');

Store.prototype.render = function(){
  this.calcCookiesForTheDay();



  // this is for "seattle"
  // create a table row
  var tableRow = document.createElement('tr');

    // create a th
  var tableHeader = document.createElement('th');
    // fill it with content : this.name
  tableHeader.textContent = this.name;
    // append th to the table row
  tableRow.appendChild(tableHeader);

  // this is for the cookies sold each hour
    // loop over the cookies sold each hour
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    // create a td
    var tableData = document.createElement('td');
    // fill it with content: this.cookiesSoldEachHour[i]
    tableHeader.textContent = this.cookiesSoldEachHour[i];
    // append td to the table row
    tableRow.appendChild(tableData);
  }
  
  // this for the cookies for the day
    // create a td
  var tableTotal = document.createElement('td');
    // fill it with content: this.totalCookiesForTheDay
  tableTotal.textContent = this.totalCookiesForTheDay;
    // append td to the table row
  tableRow.appendChild(tableTotal);

  // append the table row to the parent
  parentElement.appendChild(tableRow);
};


// // helper function
// // got this function from MDN Math.random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}



var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

console.log('this is seattle', seattle);





// // goal: dynamical render a table to the DOM

// // select the partent element
// var parenteElement = document.getElementById('table');

// // Make the first row

// //create a tr
// var tableRow = document.createElement('tr');

// var tableHeader = document.createElement('th');
// tableHeader.textContent = this.name;
// tableRow.appendChild(tableHeader);

// for(var i=0; i<hours.length; i++){
//   var tdl.textContent = cookiesSoldEachHour[i];
//   tableRow.appendChild(tdl);
// };


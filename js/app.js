'use strict'
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
var allLocations = [];    
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm','1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

    
function Locations(name, minCustomersEachHour, maxCustomersEachHour, averageCookiesSoldPerCustomer){
  this.name = name;
  this.minCustomersEachHour = minCustomersEachHour;
  this.maxCustomersEachHour = maxCustomersEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookiesForTheDay = 0;  
  allLocations.push(this);
  this.calcCustomersEachHour();
  this.calcCookiesSoldEachHour();
  // this.render();

};

Locations.prototype.calcCustomersEachHour = function(){
  // calculate the customers each hour and populate the array
  for(var i=0; i<hours.length; i++){
    var customersThisHours = Math.floor(Math.random()*(this.maxCustomersEachHour-this.minCustomersEachHour)+this.minCustomersEachHour);
    this.customersEachHour.push(customersThisHours);
  }
  console.log('customers per hour', this.calcCustomersEachHour);
};


Locations.prototype.calcCookiesSoldEachHour = function(){
  // multiply the customers by the average cookies each customers buys
  for(var i=0; i<this.customersEachHour.length; i++){
    var perHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

    this.cookiesEachHour.push(perHour);

    this.totalCookiesForTheDay += perHour; 
  }
  console.log('cookies sold each hour',this.calcCookiesSoldEachHour);
};



// Locations.prototype.render = function(){
//   seattle.calcCustomersEachHour();
//   seattle.calcCookiesSoldEachHour();
//   var seattleElement = document.getElementById(tbl);

//   // get the parent element from the DOM
//     // 1. create an element
//     // 2. fill it with text content
//     // 3. append
//   // render the name of the store
//   var listItem = document.createElement('li');
//   listItem.textContent = this.name;
//   seattleElement.appendChild(listItem);

//   // render cookiesSoldEachHour
//   for(var i=0; i<hours.length; i++){
//     listItem = document.createElement('li');
//     listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
//     seattleElement.appendChild(listItem);
//   }

//   // this will render totalCookiesForTheDay to the DOM
//   listItem = document.createElement('li');
//   listItem.textContent = this.totalCookiesForTheDay;
//   seattleElement.appendChild(listItem);
// };

new Locations('Seattle', 23, 65, 6.3);

// seattle.calcCustomersEachHour();
// seattle.calcCookiesSoldEachHour();


// // helper function    
// // got this function from MDN Math.random
// function getRandomNumber(minCustomersEachHour, maxCustomersEachHour) {
//   return Math.floor(Math.random() * (this.minCustomersEachHour - this.maxCustomersEachHour + 1)) + this.minCustomersEachHour; //The maximum is inclusive and the minimum is inclusive 
// };

// seattle.render();




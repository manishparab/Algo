var input = {
	location: {
  	lat: 95.54444,
    lng: 43.5565,
    zipcode: 78701
  },
  user: {
  	name: 'Manish',
    isLoggedIn: true
  }
}


//after cleansing

cleansedInput1 = {
  location: {
    zipcode: 78701
  },
  user: {
  	name: 'Manish'
  }
}

//client 1
var cleanser = function(input)
{
   var data = input;
   var stripGeoCoordinates = function()
   {
       delete data.location.lat;
       delete data.location.lang;
       return this; // return this is used for chaining perpose.
   }

   var stripTranscientData = function()
   {
       delete data.user.name;
       return this;
   }

   var persist = function()
   {
      return new Promise(function(resolve,reject){
          resolve(data);
      });
    
   }
   // Reveling module pattern
   return {
    stripGeoCoordinates:stripGeoCoordinates,
    stripTranscientData : stripTranscientData,
    persist : persist
   }
}

cleanser(input) 
  .stripGeoCoordinates() //strips out lat/lng
  .stripTranscientData() //strips out isLoggedIn
  .persist()
  .then(function (response) {
  	console.log(response);
});
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

cleansedInput2 = {
  location: {
    zipcode: 78701,
    lat: 95.54444,
    lng: 43.5565
  },
  user: {
  	name: 'Manish'
  }
}

//client 1
// cleanser(input)
//   .stripGeoCoordinates() //strips out lat/lng
//   .stripTranscientData() //strips out isLoggedIn
//   .persist()
//   .then(function (response) {
//   	console.log(response);
// });

function cleanser(input)
{
  this.data = input;
}

cleanser.prototype.stripGeoCoordinates = function()
{

}

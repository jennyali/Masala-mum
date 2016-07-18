
/*
var weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var weekLength = weekDays.length;

*/

/*

// prints days of the week.

for (i = 0; i < weekLength; i++) {

    console.log(weekDays[i]);

}
    
*/

/*

//Prints days of the week in sentence, with default of sunny.

for (i = 0; i < weekLength; i++) {

    var forcast = "On " + weekDays[i] + " it will be Sunny";

    console.log(forcast);

    
}

*/

/*
//Prints a day of the week with sentence and a random weather prediction of Sunny or Cloudy.

for (i = 0; i < weekLength; i++) {

    if(Math.floor(Math.random() * 11) < 5) {
        var weather = "Sunny";
    } else {
        var weather = "Cloudy";
    };

    var forcast = "On " + weekDays[i] + " it will be " + weather;

    console.log(forcast);
   
}
*/


/*
for (i = 0; i < weekLength; i++) {

    if(Math.floor(Math.random() * 11) < 5) {
        var weather = "Sunny";
    } else {
        var weather = "Cloudy";
    };

    var forcast = "On " + weekDays[i] + " it will be " + weather;

    console.log(forcast);  

};
*/
/*
    $('.weather-button').click(function() {

    for (i = 0; i < weekLength; i++) {

    if(Math.floor(Math.random() * 11) < 5) {
        var weather = "Sunny";
    } else {
        var weather = "Cloudy";
    };

    var forcast = "On " + weekDays[i] + " it will be " + weather;

    console.log(forcast);  

     };


        $('.heading').text(forcast);

        if ( weather == "Sunny") {
            $('.weather-img').css({"background-image":"url('images/sunny.jpeg')"});

        } else {
            $('.weather-img').css('background-image',"url('images/cloudy.png')");

        };


    });
*/


     function generateWeekForecast(){
        var weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        var weekForcast = [];

        for (i = 0; i < weekDays.length; i++) {

            var weather = "Sunny";

            if(Math.floor(Math.random() * 11) < 5) {
                weather = "Cloudy";
            };

            weekForcast.push({
                day: weekDays[i],
                forecast: weather
            });
        };
        return weekForcast;
    }

    var areas = ['north', 'south', 'east', 'west'];
    var forecast = {};
    for(var j = 0; j < areas.length; j++) {
        forecast[areas[j]] = generateWeekForecast();
    }
    console.log(forecast);

});


var testingArray = [
    function(a){ return 1 + a; },
    function(){ return "bum"},
    function(a){ return "I need " + a + " poo"}
];

alert(testingArray[[2],(2)](2));



console.log( 3 += 2);

function mystery(input) {
  var secret = 4;
  input += 2;


console.log(input);  
  function mystery2(multiplier) {
    multiplier *= input;

// multiplier but be 6 before being *
console.log(input);
console.log(multiplier);

    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
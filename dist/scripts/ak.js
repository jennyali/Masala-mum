$("document").ready(function() {

    var areas = ['north', 'south', 'east', 'west'];
    var weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    function forecastGenerator() {
        return Math.random() >= 0.5 ? 'Sunny' : 'Cloudy';
    }

    var forecast = {};

    for(var i = 0; i < areas.length; i++) {

        var weeklyForecast = []

        for(var j = 0; j < weekdays.length; j++) {

            var dayForecast = {
                day: weekdays[j],
                forecast: forecastGenerator()
            }
            weeklyForecast.push(dayForecast);
        }
        forecast[areas[i]] = weeklyForecast
    }

    console.log(forecast);
    console.log('north', forecast['north']);

});
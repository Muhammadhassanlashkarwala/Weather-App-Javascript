const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" ;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bbb06df52emsh3c2c01140246fbdp19d9b2jsn22ec4d8db37c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

	const getWeather = async (city) => {
		cityname.innerHTML = city
		
		
		try {
			const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city , options);
			const result = await response.text();
			
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed
	wind_degrees.innerHTML = response.wind_degrees
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset
	
	console.log(result);
	
	
	
} catch (error) {
	console.error(error);
}

};
submit.addEventListener("click" , (e)=> {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Karachi")

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

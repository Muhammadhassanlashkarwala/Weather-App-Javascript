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
			const result = await response.json();
			
			// cloud_pct.innerHTML = result.cloud_pct
			temp.innerHTML = result.temp
			temp2.innerHTML = result.temp
			feels_like.innerHTML = result.feels_like
			humidity.innerHTML = result.humidity
			humidity2.innerHTML = result.humidity
			min_temp.innerHTML = result.min_temp
	max_temp.innerHTML = result.max_temp
	wind_speed.innerHTML = result.wind_speed
	wind_speed2.innerHTML = result.wind_speed
	wind_degrees.innerHTML = result.wind_degrees
	sunrise.innerHTML = result.sunrise
	sunset.innerHTML = result.sunset
	
	console.log(response);
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
// 	const result = await fetch(url, options);
// 	const result = await result.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

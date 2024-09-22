const searchBtn = document.querySelector('#search')
const cityname = document.querySelector('#cityname')
const flag = document.querySelector('#flag')
const temp = document.querySelector('#temp')
const tempicon = document.querySelector('#tempicon')
const tempdesc = document.querySelector('#tempdesc')
const humidity = document.querySelector('#humidity')
const windspeed = document.querySelector('#windspeed')
const pressure = document.querySelector('#pressure')
const userInput = document.querySelector('#userInput')

const API_KEY = ""

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeather(city) {
    const url = `${apiUrl}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

const fecthAndDisplay = (city)=>{
    fetchWeather(city).then(data => {
        if (data) {
            console.log(data)
            cityname.innerHTML = data.name
            flag.src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`
            temp.innerHTML = data.main.temp
            tempicon.src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png"
            tempdesc.innerHTML = data.weather[0].description
            humidity.innerHTML = data.main.humidity
            windspeed.innerHTML =Math.floor( data.wind.speed*3.6)
            pressure.innerHTML = data.main.pressure
        } else {
            console.log('Failed to fetch weather data');
        }
    });
}

searchBtn.addEventListener('click', ()=>{
    let city = userInput.value
    fecthAndDisplay(city)

})

fecthAndDisplay("Maroua")
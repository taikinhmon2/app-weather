var $ = document.querySelector.bind(document)
const apikey = '8b865de497c4cdf68960b378e44ca3f7'
const defaul = '--'
const search = $('.nhap_text')
const namecity = $('.namecity')
const description = $('.description')
const img_weather = $('.img')
const temp = $('.temp')
const sunrise = $('.sunrise')
const humiditys = $('.humidity')
const sundown = $('.sundown')
const speeds = $('.speed')
const tempMax = $('.max')
const tempMin = $('.min')
search.onchange = function(e) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${apikey}&units=metric&lang=vi`)
    .then(async res => {
        const data = await res.json()
        namecity.innerText = data.name || defaul
        temp.innerText = Math.round(data.main.temp)
        tempMax.innerText = Math.round(data.main.temp_max)
        tempMin.innerText = Math.round(data.main.temp_min)
        description.innerText = data.weather[0].description
        img_weather.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        humiditys.innerText = data.main.humidity
        speeds.innerText = (data.wind.speed * 3.6).toFixed(2)
        sunrise.innerText = moment.unix(data.sys.sunrise).format('H:mm')
        sundown.innerText = moment.unix(data.sys.sunset).format('H:mm')
    })
}
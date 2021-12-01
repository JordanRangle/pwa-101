const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
});

let currentPos = '';
let elLon = document.querySelector('.current-pos-lon');
let elLat = document.querySelector('.current-pos-lat');

navigator.geolocation.getCurrentPosition(success => {
    console.log('position', success);
    elLon.innerHTML = success.coords.longitude;
    elLat.innerHTML = success.coords.latitude;
},
err => {
    console.log(err);
})
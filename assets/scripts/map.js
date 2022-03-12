const apiKey = 'AIzaSyAOeSzqsTlvmKdirIjLzEvSUGzByWREGTc';

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.71804930779894, lng: -1.979348937327071 },
    zoom: 15,
  });
}

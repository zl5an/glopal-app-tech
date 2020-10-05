function initMap() {
    "use strict";
    var location = {lat : 30.104, lng : 31.303};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
}
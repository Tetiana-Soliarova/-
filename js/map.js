function myMap() {
    const mapCanvas = document.getElementById('map');
    const mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    const map = new google.maps.Map(mapCanvas, mapOptions);
}
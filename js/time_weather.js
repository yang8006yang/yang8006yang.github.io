let cityCode = [
    '嘉義縣', '新北市', '嘉義市', '新竹縣', '新竹市', '臺北市', '臺南市', '宜蘭縣', '苗栗縣', '雲林縣', '花蓮縣', '臺中市', '臺東縣', '桃園市', '南投縣', '高雄市', '金門縣', '屏東縣', '基隆市', '澎湖縣', '彰化縣', '連江縣'
]

let lat = '';
let lng = '';

let date = new Date();
let YMD = date.toISOString().split('T')
let currentTime = `${YMD[0]} ${date.getHours()}:${date.getMinutes()}`
console.log(currentTime);
$('#time').text(currentTime)

// 取得經緯度
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}
//透過OSM 用經緯度取得地址
function getCityFromCoordinates(lat, lng, callback) {
    $.getJSON(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`, function (data) {
        const city = data.address.town || data.address.city;
        callback(city || 'Could not find city');
    });
}
//ajax天氣data 用縣市取得天氣資訊
function getCityWeather(index) {
    $.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-13962AF3-317F-4A42-B4D2-2A47B7A420B8", function (data) {
        let parameter =data['records']['location'][index]['weatherElement'][0]['time'][0]['parameter'];
        console.log(parameter['parameterName']);
        console.log(parameter['parameterValue']);
        let wtext = `${parameter['parameterName']} . ${parameter['parameterValue']}℃`
        $('#weather').text(wtext);
    });
}

$(document).ready(function () {

    getCityFromCoordinates(lat, lng, function (city) {
        let ctext=`|${city}`
        $('#city').text(ctext);
        cityCode.forEach((e, index) => {
            if (e == city) {
                getCityWeather(index);
            }
        });
    });
    


});
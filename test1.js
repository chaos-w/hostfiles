function initialize(){
var myLatlng_seoul=new google.maps.LatLng(37.5175829,127.0416468);
var myLatlng_busan=new google.maps.LatLng(35.1374179,129.0645658);
var myLatlng_daegu=new google.maps.LatLng(35.8506953,128.5909973);
var myLatlng_daejeon=new google.maps.LatLng(36.3580975,127.3888578);
var myLatlng_gwangju=new google.maps.LatLng(35.1532268,126.9100338);
var myLatlng_iuncheon=new google.maps.LatLng(37.5262248,126.7026573);

var mapProp_seoul={
center:myLatlng_seoul,
zoom:18,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var mapProp_busan={
center:myLatlng_busan,
zoom:18,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var mapProp_daegu={
center:myLatlng_daegu,
zoom:18,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var mapProp_daejeon={
center:myLatlng_daejeon,
zoom:18,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var mapProp_gwangju={
center:myLatlng_gwangju,
zoom:18,
mapTypeId:google.maps.MapTypeId.ROADMAP
};
var mapProp_iuncheon={
center:myLatlng_iuncheon,
zoom:18,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map_seoul=new google.maps.Map(document.getElementById("seoulMap"),mapProp_seoul);
var map_busan=new google.maps.Map(document.getElementById("busanMap"),mapProp_busan);
var map_daegu=new google.maps.Map(document.getElementById("daeguMap"),mapProp_daegu);
var map_daejeon=new google.maps.Map(document.getElementById("daejeonMap"),mapProp_daejeon);
var map_gwangju=new google.maps.Map(document.getElementById("gwangjuMap"),mapProp_gwangju);
var map_iuncheon=new google.maps.Map(document.getElementById("iuncheonMap"),mapProp_iuncheon);

var marker_seoul=new google.maps.Marker({
position:myLatlng_seoul,
map:map_seoul
});
var marker_busan=new google.maps.Marker({
position:myLatlng_busan,
map:map_busan
});
var marker_daegu=new google.maps.Marker({
position:myLatlng_daegu,
map:map_daegu
});
var marker_daejeon=new google.maps.Marker({
position:myLatlng_daejeon,
map:map_daejeon
});
var marker_gwangju=new google.maps.Marker({
position:myLatlng_gwangju,
map:map_gwangju
});
var marker_iuncheon=new google.maps.Marker({
position:myLatlng_iuncheon,
map:map_iuncheon
});
}
google.maps.event.addDomListener(window, 'load', initialize);

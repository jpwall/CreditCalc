var courseNames = [];
$.ajax({
  url: "CourseNames"
}).done(function (data) {
  var courseNamesRaw = data + "";
  courseNames = courseNamesRaw.split(",");
  for (var i=0; i<courseNames.length; i++) {
    $(".selectpicker").append("<option>" + courseNames[i] + "</option>");
  };
});
/*
var courseNamesRaw = $.ajax({
  url: "CourseNames"
}).done(function (data) {
  return data;
});
//var courseNamesRaw = jQuery.get("courseNames") + "";
var courseNames = courseNamesRaw.split(",");
//console.log(courseNamesRaw);
for (var i = 0; i<courseNames.length; i++) {
  $(".selectpicker").append("<option>" + courseNames + "</option>");
};*/
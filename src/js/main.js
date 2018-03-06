function newArray(data, dataArray, finalArray) {
  var dataRaw = data + "";
  dataArray = dataRaw.split(",");
  for (var i=0; i<dataArray.length; i++) {
    finalArray.push(dataArray[i]);
  }
}

var courseNames = [];
var courseLengths = [];
var courseTypes = [];
var courseCredits = [];

var courseNamesData = [];
$.ajax({
  url: "CourseNames"
}).done(function (data) {
  var courseNamesRaw = data + "";
  courseNamesData = courseNamesRaw.split(",");
  for (var i=0; i<courseNamesData.length; i++) {
    $(".selectpicker").append("<option>" + courseNamesData[i] + "</option>");
    courseNames.push(courseNamesData[i]);
  };
});

var courseLengthsData = [];
$.ajax({
  url: "CourseLengths"
}).done(function(data) {
  newArray(data, courseLengthsData, courseLengths);
});

var courseTypesData = [];
$.ajax({
  url: "CourseTypes"
}).done(function(data) {
  newArray(data, courseTypesData, courseTypes);
});

var courseCreditsData = [];
$.ajax({
  url: "CourseCredits"
}).done(function(data) {
  newArray(data, courseCreditsData, courseCredits);
});
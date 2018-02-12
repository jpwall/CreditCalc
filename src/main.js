var courseNames = [];
$.ajax({
  url: "CourseNames"
}).done(function (data) {
  var courseNamesRaw = data + "";
  courseNames = courseNamesRaw.split(",");
  for (var i=0; i<courseNames.length; i++) {
    $(".selectpicker").append("<option>" + courseNames[i] + "</option");
  };
});
function calculateAge() {
  var today = new Date();
  var birthDate = new Date();

  // Get the input values
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  // error
  var mc = document.getElementById("mc");
  var my = document.getElementById("my");
  var md = document.getElementById("md");

  var age;
  var monthDiff;
  var dayDiff;

  if (year == "") {
    document.getElementById("err3").innerHTML = "required";
    my.classList.add("error");
  } else if (year >= today.getFullYear()) {
    document.getElementById("err3").innerHTML = "most be in the past";
    my.classList.add("error");
  } else {
    my.classList.remove("error");
  }

  if (month == "") {
    document.getElementById("err2").innerHTML = "required";
    mc.classList.add("error");
  } else if (month > 12) {
    document.getElementById("err2").innerHTML = "most be avalid month";
    mc.classList.add("error");
  } else {
    mc.classList.remove("error");
  }

  if (day == "") {
    document.getElementById("err").innerHTML = "required";
    md.classList.add("error");
  } else if (day > 31) {
    document.getElementById("err").innerHTML = "most be avalid day";
    md.classList.add("error");
  } else {
    md.classList.remove("error");
  }

  if (year !== "" && month !== "" && day != "") {
    document.getElementById("err3").innerHTML = "";
    document.getElementById("err2").innerHTML = "";
    document.getElementById("err").innerHTML = "";

    month -= 1; // month is zero-based

    // Set the birthDate to the input values
    birthDate.setFullYear(year, month, day);

    // Calculate the age
    age = today.getFullYear() - birthDate.getFullYear();
    monthDiff = today.getMonth() - birthDate.getMonth();
    dayDiff = today.getDate() - birthDate.getDate();

    // Adjust the age if the birth date is later in the year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
      monthDiff += 12;
    }

    // Adjust the day difference if negative
    if (dayDiff < 0) {
      monthDiff--;
      var tempDate = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        birthDate.getDate()
      );
      dayDiff = Math.floor((today - tempDate) / (1000 * 60 * 60 * 24));
    }
  }

  // Display the age
  document.getElementById("agey").innerHTML = parseInt(age);
  document.getElementById("agem").innerHTML = parseInt(monthDiff);
  document.getElementById("aged").innerHTML = parseInt(dayDiff);
}

var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function() {
	// get user entry
  var cents = $("cents").value;
  // data validation
  if (cents > 99 || cents < 0)
    alert("Error: Only values between 0 and 99 are accepted.");
  else
    makeChange()
};

var makeChange = function(cents) {
  var cents = $("cents").value;
  //divide change value to find highest coin usage possible
  if ($("cents").value > 24){
      var quarters = parseInt(cents/25);
      cents = cents-(quarters*25);
      $("quarters").value = quarters }
  if ($("cents").value > 9){
      var dimes = parseInt(cents/10);
      cents = cents-(dimes*10);
      $("dimes").value = dimes}
  if ($("cents").value > 4){
      var nickels = parseInt(cents/5);
      cents = cents-(nickels*5)
      $("nickels").value = nickels}
  if ($("cents").value > 0) {
      var pennies = parseInt(cents);
      $("pennies").value = pennies}

};

window.onload = function () {
    $("calculate").onclick = processEntry;
    $("cents").focus();
};

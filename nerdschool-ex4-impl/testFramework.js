var Assert = {
  that: function(actual, expected){
    var results = document.getElementById("testResults");
    if(actual === expected){
      results.innerHTML += "<span class='passingTest'>Pass</span></br>";
    }else{
      results.innerHTML += "<span class='failingTest'>Fail</span></br>";
    }
  }
};

(function () {
  var testResults = document.createElement("div");
  testResults.id = "testResults";
  document.body.appendChild(testResults);
})();


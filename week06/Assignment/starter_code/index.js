//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

 //prevent the submit button from refreshing the page
  function (){
    $("city-typeValue").css("background-image","")
  }  
    $("#submit-btn").click(function() {
        event.preventDefault();
  

 //Create a variable called city-typeValue and get the value of the #city-type input   
  var city-typeValue = $("#city-type").val();
  //console.log(moodValue);
  //correct for capitalization
  city-typeValue = city-typeValue.toLowerCase().trim();
  console.log(city-typeValue);

  if (city-typeValue == "nyc" || city-typeValue == "New York City" || city-typeValue == "New York" || city-typeValue == "the big apple") {
    $(".container div").attr("class","nyc");
    }
    if (city-typeValue == "sf" || city-typeValue == "San Francisco" || city-typeValue == "bay area" || city-typeValue == "San Fran") {
    $(".container div").attr("class","sf");
    }
    if (city-typeValue == "la" || city-typeValue == "Los Angeles" || city-typeValue == "LAX") {
    $(".container div").attr("class","la");
    }
     if (city-typeValue == "austin" || city-typeValue == "ATX") {
    $(".container div").attr("class","austin");
    }
     if (city-typeValue == "sydney" || city-typeValue == "SYD") {
    $(".container div").attr("class","sydney");
    }
  });
});



  function question2(){
    $("h2").text("Karla");
  }

  $("#button1").click(question2);

// Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button


    // Create a function that runs whenever the submit button is clicked
  
        
        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
     

        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'

  

    // Listen for user interaction on the submit button.
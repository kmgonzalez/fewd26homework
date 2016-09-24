//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

    $("#submit-btn").click(function() {
        event.preventDefault();
    
  var moodValue = $("#mood").val();
  //console.log(moodValue);
  //correct for capitalization
  moodValue = moodValue.toLowerCase().trim();
  console.log(moodValue);

  if (moodValue == "excited" || moodValue == "ecstatic" || moodValue == "fantastic") {
    $(".moodring div").attr("class","excited");
    }
    if (moodValue == "happy" || moodValue == "good" || moodValue == "great") {
    $(".moodring div").attr("class","happy");
    }
    if (moodValue == "bad" || moodValue == "sad" || moodValue == "mad") {
    $(".moodring div").attr("class","bad");
    }
  });
});
    // Create a function that runs whenever the submit button is clicked
  
        
        //prevent the submit button from refreshing the page
        

        //Create a variable called moodvalue and get the value of the #mood input
        

        //Correct for capitalization
    

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
     

        // if the user inputs happy/good/great change the CSS class to 'happy'

        // if the user inputs bad/angry change the CSS class to 'bad'

  

    // Listen for user interaction on the submit button.

    

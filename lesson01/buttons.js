$(function() {
  //Names button and click event
  $(".helloButton").click(function() {
    //Takes input value, uses string interpolation, and alerts a greeting
    alert(`Hello, ${$(this).siblings().val()}. Thank you for using these buttons.`);
  })
});

$(function() {
  //Names button and click event
  $(".pButton").click(function() {
    //Takes input value and uses includes function; alerts "true" if input contains a "p"
    alert($(this).siblings().val().includes("p"));
  })
});

$(function() {
  //Names button and click event
  $(".roundUpButton").click(function() {
    //Pinpoints the third input field in the HTML
    inputThree = $(".inputThree");
    //Sets up array of numbers ending in 0
    const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    //Takes number from third input field entered by user
    const number = inputThree.val();
    //Goes through array, uses find function to locate first number greater than input
    const next10 = array.find(function(value) {
      return value > number;
    });
    //Alerts number found
    alert(next10);
  })
});
//List of words in first sentence of the GA
var str = 'Four score and seven years ago our fathers brought forth on this continent a new nation conceived in Liberty and dedicated to the proposition that all men are created equal'
//Splits list of words into an array
var array1 = str.split(" ");

$(function() {
  //Names button and click event

  $(".addressButton").click(function() {
    //Pinpoints the fourth input field
    inputFour = $(".inputFour");
    //Takes number from fourth field entered by user
    const number = inputFour.val();
    //Goes through array, uses filter function to locate words with at least as many letters as the number entered by the user
    const result = array1.filter(word => word.length >= number);
    //Alerts words found

    alert(result);

  })
});

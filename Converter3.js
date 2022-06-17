


function checkInput() {
  //gets input number from user
  let inputnumber = document.getElementById("numberinput").value

   // checks if inputnumber is a number
  if (isNaN(inputnumber)) {


    return alert("Input should be a number")
  } else if (inputnumber === "") {

    return alert("Please input a value. ")
  }
  
  else {

    universalConverter()

}

}

function universalConverter() {

//gets input number from user
let inputnumber = document.getElementById("numberinput").value

// initialize variables for meters and feet  
let meter = 3.2808; //one meter is 3.2808 feet
let feet = 0.3048; // one feet is 0.3048 meters

// initialize variables for liters and gallons 
let lit = 0.2642 // one liter is 0.2642 gallons
let gall = 3.7854 // one gallon is 3.7854 liters

// initialize variables for kilograms and pounds
let kilpoun = 2.2046 // one kilogram is 2.2046 pounds
let pounkil = 0.4536 // one pound is 0.4536 kilograms


// variable declaration to store result as a string 
let metf = ""
let litg = ""
let kilp = ""

  
//aritmetic operation for conversion 
//assigns the result to the variables convmf and convfm
let convmf = meter * inputnumber
let convfm = inputnumber * feet

let litgal = lit * inputnumber
let galit = gall * inputnumber

let kil = kilpoun * inputnumber
let poun =  pounkil * inputnumber

//fills variable metf with a string with the results
// ${inputnumber} gets the inputnumber variable
//.toFixed() rounds input number to three decimals
metf = `${inputnumber} `+  " meters = " + convmf.toFixed(3) + " feet | " + `${inputnumber} `+ " feet = " + convfm.toFixed(3) + " meters" 

litg = `${inputnumber}` + " liters = " + litgal.toFixed(3) + " gallons | " +  `${inputnumber}` + " gallons = " + galit.toFixed(3) + " liters" 

kilp = `${inputnumber}`+ " kilograms = " + kil.toFixed(3) + " pounds | " + `${inputnumber}` + " pounds = " + poun.toFixed(3) + " kilograms" 



// change the html content with .innerHTNL
//querySelector uses the # css selector
document.querySelector("#meter").innerHTML = metf
document.querySelector("#liter").innerHTML = litg
document.querySelector("#kilogram").innerHTML = kilp


}



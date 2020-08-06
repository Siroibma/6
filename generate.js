/*
File: /~alora1/public_html/assignments/5/generate.js (91.46) COMP 4610 GUI Programming I
Assignment 5: Dynmaic Multiplication Table
Ambioris Lora, UMass Lowell Computer Science, alora1@cs.uml.edu
Copyright (c) 2020 by Ambioris Lora. All rights reserved. May be
freely
copied or excerpted for educational purposes with credit to the
author.
*/


/*
Function Name: ""
Expected Values: None

Description: this is a jquery function that validates the info being inserted

Variables: 


*/
$(document).ready(function() {
    $("#signup").validate({
      rules: {
        num1: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        },
        num2: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        },
        num3: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        },
        num4: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        }


      },
        messages: {
            num1: {
                required: "Please provide a value"
            },
            num2: {
                required: "Please provide a value"
            },
            num3: {
                required: "Please provide a value"
            },
            num4: {
                required: "Please provide a value"
            }
        }
    });

});





/*$(function() {
  $("#register-form").validate({
    rules: {
      num1: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      },
      num2: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      },
      num3: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      },
      num4: {
        required: true,
        number: true,
        max: 50,
        min: -50,
        minlength: 1,
        blank: true,
        zero: true
      }


    },
    messages: {
      num1: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value',
      },
      num2: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value'
      },
      num3: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value'
      },
      num4: {
        required: "Please input a value from -50 to 50",
        number: 'Please Enter a Valid value'
      },
    }
  });
});

/*jQuery.validator.addMethod("blank", function(value, element) {
  return this.optional(element) || value == "0";
}, jQuery.validator.format("please enter a non blank space"));

jQuery.validator.addMethod("zero", function(value, element) {
  return this.optional(element) || value == "0";
}, jQuery.validator.format("please enter a non zero space"));

*/

function test() {
  //Get the blank table and assign to variables row and cell
  if(!$("#signup").valid()){
     return;
   }
  var n1 = Math.abs(document.getElementById("num1").value);
  var n2 = Math.abs(document.getElementById("num2").value);
  var n3 = Math.abs(document.getElementById("num3").value);
  var n4 = Math.abs(document.getElementById("num4").value);
  var table = document.getElementById("myTable");
  var row, cell;


  //Super useful swap function from : https://dmitripavlutin.com/swap-variables-javascript/#:~:text=JavaScript%20offers%20a%20bunch%20of,way%20uses%20a%20temporary%20variable.
  if(n4 < n3){
    [n3,n4] = [n4,n3];
  }
  if(n2 < n1){
    [n1,n2] = [n2,n1];
  }

  //blank corner
  row = table.insertRow();
  cell = row.insertCell();

  //This is where we fill the table
  for(let i = n1; i <= n2; i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
  }

  for(let i = n3; i <= n4; i++) {
    row = table.insertRow();
    cell = row.insertCell();

    cell.innerHTML = i;
    for (let j = n1; j <= n2; j++) {
      cell = row.insertCell();
      cell.innerHTML = j*i;
    }
  }
}

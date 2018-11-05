Qualtrics.SurveyEngine.addOnload(function() {
  var random_result = sessionStorage.random_result.split(',');
    
  function fill_table(number) {
    
    var table_element = document.getElementById("conjoint_table_" + number);
    
    var label = "Rd_" + (number) + "_";
    
    // Rows
    for (var i = 0;i<random_result.length;i++) {
      var row_element = document.createElement("TR");
      
      // Row cells
      for (var j=0;j<3;j++) {
        var data_element = document.createElement("TD");
        
        var random_value = random_result[i];
        
        if (j !== 0) {
          var random_values_array = [];
          for (var x = 0; x < values_array[random_value].length; x++) {
            random_values_array.push(x);
          }
          var random_index = shuffle(random_values_array);
          var value = values_array[random_value];
          // For text values
          var text = document.createTextNode(value[random_index[0]]);
          // For image values uncomment the following lines
          // var text = document.createElement('img');
          // text.src = value[random_index[0]];
          // text.height = '150' // height of image in pixels
          // text.width = '150' // width of image in pixels
          
          // If you want to use different choice names in your embedded data, change the values below
          if (j === 1) {
            var choice = "A";
          } else {
            var choice = "B";
          }
          var new_label = label + choice + "_" + attribute_array[random_value];
          Qualtrics.SurveyEngine.setEmbeddedData(new_label, value[random_index[0]]);
        } else {
          var text = document.createElement("B");
          var bolded_text = document.createTextNode(attribute_array[random_value]);

          text.appendChild(bolded_text);
        }
        
        data_element.appendChild(text); 
        row_element.appendChild(data_element);
      }
    
      table_element.appendChild(row_element);   
    }
    
  }

  // Replace the round number with round number you are on
  fill_table(1);
});
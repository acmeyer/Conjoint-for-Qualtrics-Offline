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
          var attributeValue = value[random_index[0]];
          var text;

          // Conditional to check if value is string or url
          // Note: this is a simple check, if your data is more 
          // complex than use a regex.
          // Also, if you are doing it offline, this check will NOT work
          // you must instead write the conditional to check for a 
          // local file, likely in the file directory of device or tmp.
          // For example, instead of checking for 'http', you might check for 'file:'
          if (attributeValue.indexOf('http') !== -1) {
            text = document.createElement('img');
            text.src = attributeValue;
            text.height = '150' // height of image in pixels
            text.width = '150' // width of image in pixels
          } else {
            text = document.createTextNode(attributeValue);
          }
          
          // If you want to use different choice names in your embedded data, change the values below
          if (j === 1) {
            var choice = "A";
          } else {
            var choice = "B";
          }
          var new_label = label + choice + "_" + attribute_array[random_value];
          Qualtrics.SurveyEngine.setEmbeddedData(new_label, attributeValue);
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
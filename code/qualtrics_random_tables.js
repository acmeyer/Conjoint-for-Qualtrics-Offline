// Replace values of array with attribute names
var attribute_array = ['Religion', 'Tribe', 'Party', 'Actions-public', 'Actions-private', 'Promises'];

// Replace values of array with attribute values
var values_array = [['Christian', 'Muslim'], ['Sukuma', 'Chagga'], ['CCM', 'Opposition'], ['Gave nothing to your community', 'Gave money to your community'], ['Gave you nothing', 'Gave you money'], ['Has promises but no plan', 'Has promises and a plan']];

var random_result = sessionStorage.random_result.split(',');
  
function fill_table(number) {
  
  var table_element = document.getElementById("conjoint_table");
  
  var label = "Rd_" + (number) + "_";
  
  // Rows
  for (var i = 0;i<random_result.length;i++) {
    var row_element = document.createElement("TR");
    
    // Row cells
    for (var j=0;j<3;j++) {
      var data_element = document.createElement("TD");
      
      var random_value = random_result[i];
      
      if (j !== 0) {
        var random_index = shuffle([0, 1]);
        var value = values_array[random_value];
        var text = document.createTextNode(value[random_index[0]]);
        
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

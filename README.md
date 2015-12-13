# Conjoint for Qualtrics Offline

Produces conjoint analysis choice tasks for the Qualtrics offline application.

## How to Use

### Setup Randomization

Copy all the code in the code/qualtrics_look_and_feel.html file. Paste the copied code into the 'Look and Feel' section of your Qualtrics survey.

### Setup Tables for Questions

Copy all the code found in the code/qualtrics_tables.html file. In each Qualtrics question you want the conjoint table to appear, paste the copied code in the HTML view portion of the question's text box. After pasting the code, make sure to replace the round title text with the correct round number.

Next, copy all the code found in the code/qualtrics_random_tables.js file. Add a javascript block to the same question where you added the table html code. Within the Qualtrics.SurveyEngine.addOnload(function() {} block, paste the copied code. After pasting the code, make sure to change the attribute_array and values_array variables to use your specific attributes and values. Also, be sure to update the round number at the bottom of the code.

### Setup Capturing Conjoint Data

TODO: instructions for how to capture data using the embedded data in Qualtrics

## Known Limits/Possible Future Improvements

* Randomization is currently only done with equal weights
* Limited to only two choices
* Customize attributes, values and labels more easily

## Contributing

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution

## License

Released under the MIT License. See [LICENSE](LICENSE) or http://opensource.org/licenses/MIT for more information.

## Credits

* [Leah Rosenzweig](http://www.leahrrosenzweig.com)
* [Alex Meyer](https://twitter.com/alexcmeyer)

Page dynamics

Load the <select> options with the contents of the global oppoStatus array.
When status is changed, set the associated value of success (e.g. status 4 sets success=75)
On form submit, output the form element values as JSON string. We want to see the values, not the text. {"status":3,"success":50}


Basic styling

Right align the success value
Display the Submit button in it's own box. Add some spacing around the element.
Set a mono-space font on the output <div> so we have a better view on the generated JSON output.





function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
}


function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      var dogCount = $('#numberOfDogIndicator').val();
      console.log(dogCount);
      for(let i=0; i<dogCount; i++){
        getDogImage();
      }
    });
}


/* Initialize App */
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});

function generateImage(responseJson){
    $(".userOuputHolder").append(`<div class="dogImageContainer"><img class="dogImageStyle" src='${responseJson.message}' alt='dog'></div>`);
}


function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(
          responseJson => {
            generateImage(responseJson);
            console.log(responseJson);  
          }        
      )
      .catch(error => alert('Something went wrong. Try again later.'));
}


function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      // Remove placeholder header
      if($('.placeHolderHeader').length){
        $(".placeHolderHeader").remove();
      }
      
      if($('.dogImageContainer').length){
        $( ".dogImageContainer" ).remove();
    }
      var dogCount = $('#numberOfDogIndicator').val();
      console.log(dogCount);
      for(let i=0; i<dogCount; i++){
        getDogImage();
      }
    });
}


/* Footer */
function generateFooter() {
    const yogiFooterBase = yogiFooter();
    $('#footer').append(yogiFooterBase);
}

function yogiFooter() {
    return `<div class="footContain"><div class="footStyles"><span>&nbsp;Dogs Panel&nbsp;&nbsp;<br></span><span>Nesh &copy; ${getCopyRightYear()}</span></div></div>`;
}

function getCopyRightYear() {
    return new Date().getFullYear();
}

$(window).bind("load", function() { 
       
    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
        
    positionFooter();
    
    function positionFooter() {
    
             footerHeight = $footer.height();
             footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    
            if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                $footer.css({
                     position: "absolute"
                }).animate({
                     top: footerTop
                })
            } else {
                $footer.css({
                     position: "static"
                })
            }
            
    }

    $(window)
            .scroll(positionFooter)
            .resize(positionFooter)
            
});


/* Initialize App */
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    generateFooter();
});
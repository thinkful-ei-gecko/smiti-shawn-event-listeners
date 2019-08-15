'use strict';

function handleThumbnailClicks() {
  $('.thumbnail').click(event => {
    const imgSrc = $(this).find('img').attr('src');  
     const imgAlt = $(this).find('img').attr('alt');
    
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
 
  });
}

$(handleThumbnailClicks);
     

// Changes Hero Background when hovering over Philanthropy Btn
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeScholarshipButton');
    const section = document.getElementById('backgroundSection');
  
    button.addEventListener('mouseover', () => {
      // Change the background image when hovering over the button
      section.style.backgroundImage = "url('./images/philanthropy.avif')";
    });
  
    button.addEventListener('mouseout', () => {
      // Reset the background image when the mouse leaves the button
      section.style.backgroundImage = "url('./images/SigEpHome.avif')";
    });
});

// Changes Hero Background when hovering over Join Now Btn
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeShopButton');
    const section = document.getElementById('backgroundSection');
  
    button.addEventListener('mouseover', () => {
      // Change the background image when hovering over the button
      section.style.backgroundImage = "url('./images/horses-execs.jpg')";
    });
  
    button.addEventListener('mouseout', () => {
      // Reset the background image when the mouse leaves the button
      section.style.backgroundImage = "url('./images/SigEpHome.avif')";
    });
});

// Changes Hero Background when hovering over Events Btn
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('changeServicesButton');
  const section = document.getElementById('backgroundSection');

  button.addEventListener('mouseover', () => {
    // Change the background image when hovering over the button
    section.style.backgroundImage = "url('./images/house-party.jpg')";
  });

  button.addEventListener('mouseout', () => {
    // Reset the background image when the mouse leaves the button
    section.style.backgroundImage = "url('./images/SigEpHome.avif')";
  });
});

function showMenu() {
    const menu = document.querySelector('.dropdown');
    const hide = document.querySelector('.menu-btn');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    hide.style.display = 'none';
}

function hideMenu() {
    const menu = document.querySelector('.dropdown');
    const show = document.querySelector('.menu-btn');
    menu.style.display = 'none';
    show.style.display = 'block';
}

// NEW
// Blue hover
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
  
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
  }
  
  var isPlaying = false;
  
  function playMusic() {
    if (!isPlaying) {
      var music = new Audio('./videos/future_sound.m4a');
      music.play();
      isPlaying = true;
  
      // Reset the isPlaying variable after the audio has finished playing
      music.onended = function() {
        isPlaying = false;
      };
    }
  }
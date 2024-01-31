document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('#navigation .nav-icon');
  const navContent = document.querySelector('#nav-content');
  const closeNavButton = document.querySelector('#nav-content .close-btn');
  const navLinks = document.querySelectorAll('#nav-content nav ul li a');
  const scrollButton = document.querySelector(".scroll-top");
  const headernav = document.querySelector('.headernav');

  // Scroll TOP Button Events
  if (scrollButton) {
    window.addEventListener('scroll', () => {
      scrollButton.style.display = (pageYOffset > window.innerHeight * 1.2) ? "flex" : "none";
    });

    scrollButton.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }

  // Hamburger Menu events
  if (hamburgerMenu && closeNavButton) {
    hamburgerMenu.addEventListener('click', () => {
      navContent.classList.add('show');
      document.body.style.overflow = "hidden";
      handleAnimation(); // Add this line to handle animation on menu open
      toggleHeaderNav(); // Add this line to toggle header visibility
    });

    closeNavButton.addEventListener('click', () => {
      navContent.classList.remove('show');
      document.body.style.overflow = "initial";
      toggleHeaderNavC(); // Add this line to toggle header visibility
    });
  }

  // Close navContent when a navLink is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navContent.classList.remove('show');
      document.body.style.overflow = "initial";
      toggleHeaderNav(); // Add this line to toggle header visibility
      toggleHeaderNavC(); // Add this line to toggle header visibility
    });
  });

  // Responsive-navbar-active-animation
  function handleAnimation() {
    // Your existing handleAnimation function
  }

  // Call handleAnimation initially and on window resize
  handleAnimation();
  $(window).on('resize', function () {
    handleAnimation();
  });

  // Add 'active' class to current page link
  var path = window.location.pathname.split("/").pop();
  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  target.parent().addClass('active');
});

// Toggle header visibility
function toggleHeaderNav() {
  const headernav = document.querySelector('.headernav');
  headernav.style.display = 'none';
}
function toggleHeaderNavC() {
  const headernav = document.querySelector('.headernav');
  headernav.style.display = 'flex';
}
// Add click event to hamburger menu button
document.querySelector('.nav-icon').addEventListener('click', toggleHeaderNav);

// Add click event to close button
document.querySelector('#nav-content .close-btn').addEventListener('click', toggleHeaderNavC);

// floating action-button
document.addEventListener('DOMContentLoaded', function () {
  const fabButton = document.querySelector('.fab');

  fabButton.addEventListener('click', function () {
      // Add your desired action here
      alert('FAB Clicked!');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('animateMe');

  // Add animation class after a short delay
  setTimeout(function () {
      button.classList.add('animate');
  }, 500);
});

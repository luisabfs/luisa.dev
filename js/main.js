
function toggleDropDown() {
  const navbarToggle = document.querySelector('#navbar-toggle');

  if (navbarToggle.className === 'topnav') {
    navbarToggle.className += ' responsive';
  } else {
    navbarToggle.className = 'topnav';
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

const dropdownLink = document.querySelector('#dropdownLink');

dropdownLink.addEventListener('click', toggleDropDown, false);

window.onscroll = () => scrollFunction();

(function (doc) {
  function toggleDropDown() {
    const navbarToggle = doc.querySelector('#navbar-toggle');

    if (navbarToggle.className === 'topnav') {
      navbarToggle.className += ' responsive';
    } else {
      navbarToggle.className = 'topnav';
    }
  }

  const dropdownLink = doc.querySelector('#dropdownLink');

  dropdownLink.addEventListener('click', toggleDropDown, false);
}(document));

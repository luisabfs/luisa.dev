(function(doc) {
    let dropdownLink = doc.querySelector('#dropdownLink');
    dropdownLink.addEventListener('click', toggleDropDown, false);

    function toggleDropDown() {
        let navbarToggle = doc.querySelector('#navbar-toggle');

        if(navbarToggle.className === 'topnav') {
            navbarToggle.className += ' responsive';
        }else{
            navbarToggle.className = 'topnav';
        }
    }
})(document);
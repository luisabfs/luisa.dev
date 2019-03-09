(function(doc) {
    const dropdownLink = doc.querySelector('#dropdownLink');
    // const toggleButton = doc.querySelector('[data-toggle="popover"]');

    dropdownLink.addEventListener('click', toggleDropDown, false);
    // toggleButton.addEventListener('click', button, false);

    function toggleDropDown() {
        let navbarToggle = doc.querySelector('#navbar-toggle');

        if(navbarToggle.className === 'topnav') {
            navbarToggle.className += ' responsive';
        }else{
            navbarToggle.className = 'topnav';
        }
    }

    // function button() {
    //     toggleButton.popover();
    // };

})(document);
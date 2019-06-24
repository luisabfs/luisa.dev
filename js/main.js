/* eslint-disable no-undef */
$(document).ready(() => {
  $('#carousel').on('slide.bs.carousel', function (e) {
    const $e = $(e.relatedTarget);
    const idx = $e.index();
    const itemsPerSlide = 3;
    const totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      const it = itemsPerSlide - (totalItems - idx);
      for (let i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == 'left') {
          $('.carousel-item')
            .eq(i)
            .appendTo('.carousel-inner');
        } else {
          $('.carousel-item')
            .eq(0)
            .appendTo($(this).find('.carousel-inner'));
        }
      }
    }
  });
});

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

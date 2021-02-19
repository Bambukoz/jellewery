(() => {
  const filterForm = document.querySelector('.js-filter-form');
  const slider = document.querySelector('#slider');
  const minValueInput = document.querySelector('#min-value');
  const maxValueInput = document.querySelector('#max-value');

  if (slider) {
    noUiSlider.create(slider, {
      start: [55, 155],
      step: 1,
      connect: true,
      tooltips: [true, true],
      range: {
        'min': [0],
        'max': [200],
      },
      format: {
        to(value) {
          return `$ ${Math.round(value)}`;
        },
        from(value) {
          return value;
        },
      },
    });

    slider.noUiSlider.on('update', function (values) {
      minValueInput.value = Number(values[0].replace(/\u0024/g, ''));
      maxValueInput.value = Number(values[1].replace(/\u0024/g, ''));
    });

    filterForm.addEventListener('reset', function () {
      slider.noUiSlider.set([55, 155]);
    });
  }

})();

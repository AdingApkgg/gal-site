(function() {
  function getExif(target) {
    const template = CONFIG.exif;
    EXIF.getData(target, function() {
      const tags = EXIF.getAllTags(this);
      let result = template;
      for (let [key, value] of Object.entries(tags)) {
        if (key === 'ExposureTime' && value <= 0.25) {
          value = '1/' + parseInt(1 / value);
        }
        result = result.replace(`{${key}}`, value);
      }
      if (result !== template) {
        const box = document.createElement('div');
        target.wrap(box);
        box.classList.add('exif-container');
        box.insertAdjacentHTML('beforeend', `<div class="exif-metabar"><span>${result}</span></div>`);
      }
    });
  }

  function getAllExif() {
    [...document.querySelectorAll('.post-body img')].forEach(element => {
      if (element.complete) getExif(element);
      // `lazyload` compatible
      element.addEventListener('load', () => {
        getExif(element);
      });
    });
  }

  getAllExif();

  document.addEventListener('pjax:success', () => {
    getAllExif();
  });
})();

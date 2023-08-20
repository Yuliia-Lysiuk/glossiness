const firmContainers = [...document.querySelectorAll('.firm-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];

firmContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

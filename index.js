const imgCards = document.querySelectorAll('.img_Card');
const imgCardActiveClass = 'active';

const deactivateAllImgCards = function()
{
  imgCards.forEach(card => {
    card.classList.remove(imgCardActiveClass);
  });
};

imgCards.forEach(card =>
{
  card.addEventListener('click', () =>
  {
    deactivateAllImgCards();
    card.classList.add(imgCardActiveClass);
  });
});
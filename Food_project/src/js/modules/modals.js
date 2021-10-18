function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show', 'fade');
  modal.classList.remove('hide');

  document.body.style.overflow = 'hidden';

  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show', 'fade');

  document.body.style.overflow = '';
}

function modals(triggerSelector, modalSelector, modalTimerId) {
  //Modal

  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });

  modal.addEventListener('click', (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute('data-close') == ''
    ) {
      closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  //Модификация модального окна

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);
}

export default modals;

export { closeModal };
export { openModal };

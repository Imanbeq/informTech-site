const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const toggleDownMenu = document.querySelector('.dropdown-menu');
const header = document.querySelector('header');
const actionBtn = document.querySelector('.action-btn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

//Отключение видео на моб устройствах
function removeAutoplayOnMobile() {
  const video = document.getElementById('myVideo');
  if (window.innerWidth <= 768) {
    video.removeAttribute('autoplay');
    video.pause();
  }
}
removeAutoplayOnMobile();
window.addEventListener('resize', removeAutoplayOnMobile);

//Прокрутка по ссылкам
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    const offset = 70;

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth',
    });
  });
});

// Переключение состояния меню при клике на кнопку
toggleBtn.onclick = function () {
  toggleDownMenu.classList.toggle('open');

  const isOpen = toggleDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
  const isClickInsideMenu = toggleDownMenu.contains(event.target); // Клик внутри меню
  const isClickOnButton = toggleBtn.contains(event.target); // Клик на кнопку

  if (!isClickInsideMenu && !isClickOnButton) {
    toggleDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

actionBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Функция анимации
function animateValue(element, start, end, duration, suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const statSection = document.querySelector('.statistics-info');
const statItems = document.querySelectorAll('.stat-info-item span');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statItems.forEach((span) => {
          const endValue = parseInt(span.innerHTML.replace(/[^0-9]/g, ''), 10);
          const suffix = span.innerHTML.includes('%')
            ? '%'
            : span.innerHTML.includes('+')
            ? '+'
            : '';
          animateValue(span, 0, endValue, 2000, suffix);
        });
        observer.unobserve(statSection);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(statSection);



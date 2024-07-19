document.addEventListener('DOMContentLoaded', function() {
  const bullets = document.querySelectorAll('.hero-bullet');

  var first = true;

  function isInView(elem) {
    if (first) {
      first = false;
      return false;
    }
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function handleScroll() {
    bullets.forEach(bullet => {
      if (isInView(bullet) && !bullet.classList.contains('loaded')) {
        bullet.classList.add('loaded');
      }
    });
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);

  setTimeout(function() {
    document.querySelector('.hero-content').style.opacity = '1';
    document.querySelector('.hero-container').style.clipPath = 'polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%)';
  }, 1000);
});

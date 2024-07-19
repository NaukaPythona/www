document.addEventListener('DOMContentLoaded', function() {
  const recommenderPhotos = {
  "jaraco": "/static/img/jaraco.jpeg",
  "pawamoy": "/static/img/pawamoy.jpeg",
  "placeholder": "/static/img/placeholder.png",
  };

  // Apply photos dynamically
  document.querySelectorAll('.recommendation').forEach(recommendation => {
      const element = recommendation.querySelector('.recommender-photo');
      const handle = element.dataset.handle;
      element.style.backgroundImage = `url(${recommenderPhotos[handle]})`;
  });
});
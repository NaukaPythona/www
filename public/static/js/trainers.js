document.addEventListener('DOMContentLoaded', function() {
  const trainerPhotos = {
    bswck: "/static/img/bswck.jpeg",
  };

  function loadTrainerPhotos() {
    const trainerPhotoElements = document.querySelectorAll('.trainer-photo');
    trainerPhotoElements.forEach(element => {
      const handle = element.dataset.handle; // Extract class name
      if (handle) {
        const imgUrl = trainerPhotos[handle];
        element.innerHTML = `<img src="${imgUrl}" alt="Trainer's image">`;
      }
    });
  }

  loadTrainerPhotos();
});
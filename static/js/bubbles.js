document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('#bubbles');
  const colors = ['bubble-dark', 'bubble-light'];
  let bubbleCount = 0;
  const maxBubbles = 10;

  function createBubble() {
    if (bubbleCount >= maxBubbles) return; // Limit the number of bubbles

    const bubble = document.createElement('div');
    const size = Math.random() * (window.innerWidth / 2); // Random size up to half the screen width
    bubble.className = `bubble ${colors[Math.floor(Math.random() * colors.length)]}`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const topPosition = Math.random() * 100;
    const leftPosition = Math.random() * 100;

    bubble.style.top = `${topPosition}%`;
    bubble.style.left = `${leftPosition}%`;

    container.appendChild(bubble);

    setTimeout(() => {
      bubble.style.opacity = '1';
    }, 100);

    // Set a random timeout for fading out between 10 and 30 seconds
    const fadeOutTime = Math.random() * 20000 + 10000;

    setTimeout(() => {
      bubble.style.opacity = '0';
      setTimeout(() => {
        if (bubble.parentElement === container) {
          container.removeChild(bubble);
          bubbleCount--;
        }
      }, 3000); // Remove after fade-out transition
    }, fadeOutTime);

    bubbleCount++;
  }

  function spawnBubbles() {
    setInterval(() => {
      if (bubbleCount < maxBubbles) {
        createBubble();
      }
    }, Math.random() * 5000 + 1000); // Random interval between 1 and 6 seconds
  }

  // Initial spawn of bubbles
  spawnBubbles();
});
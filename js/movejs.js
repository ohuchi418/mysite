window.onload = function() {
  const iconImage = document.getElementById('icon-image');
  let position = 0;
  let direction = 1;
  let speed = 0.5;  // 動く速度を遅くするための値を設定

  function animateImage() {
    // 上下に少しずつ揺れる
    position += direction * speed;
    if (position > 10 || position < -10) {
      direction *= -1;
    }
    iconImage.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(animateImage);
  }

  animateImage();
};

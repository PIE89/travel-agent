function parallax() {
  let prxScene = document.querySelector(".subscribe");
  let prxItem = document.querySelector(".subscribe__img");

  prxScene.addEventListener("mousemove", function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    prxItem.style.transform =
      `translate(+` + x * 500 + `px, -` + y * 50 + `px)`;
  });
}

export default parallax;

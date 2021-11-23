function init() {
  (function countDownTimer() {
    const lauchingDateElRef = document.querySelector(".js-launching-date");
    const lauchingDate =
      new Date(lauchingDateElRef.textContent).getTime() / 1000;

    // Set up FlipDown
    const flipdown = new FlipDown(lauchingDate)

      // Start the countdown
      .start()
      .ifEnded(() => {
        // Do something immediately the timer ends
      });
  })();
}

init();

let heightZ = 1;
let widthX = 1;

class Paper {
  holdingPAper = false;

  prevMouseX = 0;
  prevMouseY = 0;

  mouseX = 0;
  mouseY = 0;

  velocityX = 0;
  velocityY = 0;

  currentPaperX = 0;
  currentPaperY = 0;

  init(paper) {
    paper.addEventListener("mousedown", (e) => {
      this.holdingPAper = true;
      paper.style.zIndex = heightZ;
      heightZ += 1;
      if (e.button === 0) {
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        console.log(this.prevMouseX);
        console.log(this.prevMouseY);
      }

      //   alert("Mouse is selected the paper element");
    });
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      this.velocityX = this.mouseX - this.prevMouseX;
      this.velocityY = this.mouseY - this.prevMouseY;

      if (this.holdingPAper) {
        this.currentPaperX += this.velocityX;
        this.currentPaperY += this.velocityY;

        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
      }

      //   console.log("mouse is moving");
    });

    window.addEventListener("mouseup", (e) => {
      this.holdingPAper = false;
      //   console.log("mouser button is release");
    });

    // Touch events
    paper.addEventListener("touchstart", (e) => {
      this.holdingPaper = true;
      paper.style.zIndex = heightZ;
      heightZ += 1;
      const touch = e.touches[0];
      this.prevMouseX = touch.clientX;
      this.prevMouseY = touch.clientY;

      console.log(this.prevMouseX);
      console.log(this.prevMouseY);
    });
    document.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      this.mouseX = touch.clientX;
      this.mouseY = touch.clientY;

      this.velocityX = this.mouseX - this.prevMouseX;
      this.velocityY = this.mouseY - this.prevMouseY;

      if (this.holdingPaper) {
        this.currentPaperX += this.velocityX;
        this.currentPaperY += this.velocityY;

        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
      }
    });
    window.addEventListener("touchend", (e) => {
      this.holdingPaper = false;
    });
  }
}
const papers = Array.from(document.querySelectorAll(".paper"));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});

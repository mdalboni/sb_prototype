function zoomOut() {
    const el = this.canvas.nativeElement;
    if (this.steps === 2) {
      this.imageSize = 1024;
      el.style.backgroundSize = '100%';
      el.style.backgroundPosition = '0px 0px';
      this.loadTags(this.renders[this.selectedIndex].qaComment);
      this.offsetX = 0;
      this.offsetY = 0;
      this.isZoom = false;
      this.steps = 1;
    } else if (this.steps > 1) {
      this.imageSize -= this.stepsDiff;
      el.style.backgroundSize = this.imageSize + 'px';
      this.offsetX = (el.width - this.imageSize) / 2;
      this.offsetY = (el.height - this.imageSize) / 2;
      el.style.backgroundPosition = this.offsetX + 'px ' + this.offsetY + 'px';
      this.steps--;
      this.finalZoom = false;
    }
  }

function zoomIn() {
    if (this.steps === 1) {
      this.getStepsDiff();
    } 
    if (this.steps > 4) {
      this.finalZoom = true;
      return;
    }
    const el = this.canvas.nativeElement;
    this.imageSize += this.stepsDiff
    el.style.backgroundSize = this.imageSize + 'px';
    this.offsetX = (el.width - this.imageSize) / 2;
    this.offsetY = (el.height - this.imageSize) / 2;
    el.style.backgroundPosition = this.offsetX + 'px ' + this.offsetY + 'px';
    this.removeAllTages();
    this.isZoom = true;
    this.steps++;
  }

function getStepsDiff() {
    this.stepsDiff = (this.imageSizeRaw.width / 4);
  }
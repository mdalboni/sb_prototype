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

  function loadHighLightImage(index) {
    this.canvas.nativeElement.style.backgroundSize = '100%';
    this.canvas.nativeElement.style.backgroundPosition = '0px 0px';
    this.canvas.nativeElement.style.backgroundImage = '';
    this.isZoom = false;
    this.canvas.nativeElement.parentElement.classList.add('dec-sysfile-bg-load');
    const downloadImage = new Image();

    downloadImage.onload = () => {
      this.canvas.nativeElement.style.backgroundImage = 'url(' + downloadImage.src + ' )';
      this.canvas.nativeElement.style.backgroundRepeat = 'no-repeat';
      this.canvas.nativeElement.style.backgroundSize = 'auto ' + this.canvasSize + 'px';
      this.canvas.nativeElement.parentElement.classList.remove('dec-sysfile-bg-load');
      this.imgExternalLink = downloadImage.src;
      this.imageSizeRaw = {
        width: downloadImage.width,
        height: downloadImage.height
      }
    };

if (this.renders.length < 1) {
    return;
  }
  downloadImage.src = this.getImageUrl(index);
}
  if (this.isZoom && mousedown) {
        const coords = getPos(e),
          x = coords[0],
          y = coords[1];

        if (((x - this.deltaX) * (-1)) + el.width < this.imageSize) {
          this.offsetX = x - this.deltaX;
        }

        if (((y - this.deltaY) * (-1)) + el.width < this.imageSize) {
          this.offsetY = y - this.deltaY;
        }

        if (this.offsetY > 0) {
          this.offsetY = 0;
        }
        if (this.offsetX > 0) {
          this.offsetX = 0;
        }

        el.style.backgroundPosition = this.offsetX + 'px ' + this.offsetY + 'px';

        return;
      }
      
function getPos(e) {
    const r = el.getBoundingClientRect(),
    x = e.clientX - r.left,
    y = e.clientY - r.top;
    return [x, y];
}
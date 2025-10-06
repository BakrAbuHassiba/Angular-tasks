import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-comp',
  standalone: true,
  imports: [],
  templateUrl: './slider-comp.html',
  styleUrl: './slider-comp.css'
})
export class SliderComponent {
  imgArr: string[] = [
    'images/download.jfif',
    'images/download.png',
    'images/images(1).jfif',
    'images/images.jfif'
  ];
  imgIdx: number = 0;
  currentImage: string = this.imgArr[0];
  playSlider: any;
  
  constructor() {
    this.autoPlay(3000);
  }

  next() {
    this.imgIdx++;
    if (this.imgIdx >= this.imgArr.length) this.imgIdx = 0;
    this.currentImage = this.imgArr[this.imgIdx];
    this.resetAutoPlay();
  }


  prev() {
    this.imgIdx--;
    if (this.imgIdx < 0) this.imgIdx = this.imgArr.length - 1;
    this.currentImage = this.imgArr[this.imgIdx];
    this.resetAutoPlay();
  }

  play() {
    this.resetAutoPlay();
  }

  stop() {
    clearInterval(this.playSlider);
  }

  changeSpeed(speed: number) {
    this.autoPlay(speed);
  }

  private autoPlay(speed: number) {
    clearInterval(this.playSlider);
    this.playSlider = setInterval(() => {
      this.next();
    }, speed);
  }

  private resetAutoPlay() {
    this.autoPlay(3000);
  }
}

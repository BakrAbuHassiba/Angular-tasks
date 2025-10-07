import{
    Directive,
    ElementRef,
    HostListener,
    Input,
}from '@angular/core';

@Directive({
  selector: '[appDir]',
})

export class Dir {
  @Input({
    alias: 'important',
  })
  dataColor!: string;
  constructor(private ele:ElementRef){}

  @HostListener("mouseover") func(){
    this.ele.nativeElement.style.width='200px'
    this.ele.nativeElement.style.backgroundColor=this.dataColor
  }
  @HostListener("mouseleave") func2(){
    this.ele.nativeElement.style.width='65.27px'
    this.ele.nativeElement.style.backgroundColor='blue'
  }
}
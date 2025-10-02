import { Component, signal } from '@angular/core';  
import { FormsModule } from '@angular/forms'; 
import {FormComp} from './components/form-comp/form-comp'
import {SliderComponent} from './components/slider-comp/slider-comp'
@Component({
  selector: 'app-root',
  imports: [ FormsModule,FormComp,SliderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}




import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  profile = {
    name: 'Sujal Rabari',
    email: 'sujalrabari2501@gmail.com',
    motto: '"How big would you dream if you knew you would never fail?"'
  };
}

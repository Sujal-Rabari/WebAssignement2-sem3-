import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigationItems: string[] = ["Page 1", "Page 2", "Page 3"];
  selectedPage: string = 'Page 1';

  selectPage(page: string) {
    this.selectedPage = page;
  }
}

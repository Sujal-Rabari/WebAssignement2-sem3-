import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/example', icon: 'twitter', size: '3x' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/example', icon: 'linkedin',  size: '3x' },
    { name: 'GitHub', url: 'https://github.com/example', icon: 'github',  size: '3x' },
    { name: 'Instgram', url: 'https://instagram.com/example', icon: 'instagram',  size: '3x' },
    { name: 'Discord', url: 'https://discordapp.com/example', icon: 'discord',  size: '3x' }, // Updated icon class name
  ];
  year = new Date().getFullYear();
}

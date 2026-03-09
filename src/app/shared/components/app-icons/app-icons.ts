import { Component, input, computed } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBuildingColumns, faCalendar, faEnvelope, faFilePdf, faLocationDot, faPhone, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icons',
  imports: [FontAwesomeModule],
  templateUrl: './app-icons.html',
  styleUrl: './app-icons.css',
})
export class AppIcons {
  iconName = input<string>('');
  size = input<any>('lg');
  
  private iconMap: Record<string, IconDefinition> = {
    faGithub,
    faLinkedin,
    faTwitter,
    faEnvelope,
    faFilePdf,
    faFacebook,
    faPhone,
    faUserTie,
    faCalendar,
    faLocationDot,
    faBuildingColumns
  };
  
  icon = computed(() => {
    const name = this.iconName();
    return this.iconMap[name] || null;
  });
}

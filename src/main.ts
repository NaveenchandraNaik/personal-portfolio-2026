import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerFontAwesomeIcons } from './app/core/icons/fontawesome-icons';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
registerFontAwesomeIcons();

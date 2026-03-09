import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

export function registerFontAwesomeIcons() {
    library.add(faGithub, faLinkedin, faTwitter, faEnvelope, faFilePdf,faEnvelope,faFacebook);
}
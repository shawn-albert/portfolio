import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  // SiX,
  // SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'contact@shawn-albert.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/shawn-albert',
      Icon: SiGithub
    },
    // {
    //   name: 'Youtube',
    //   href: 'https://youtube.com/',
    //   Icon: SiYoutube
    // },
    // {
    //   name: 'X',
    //   href: 'https://x.com/',
    //   Icon: SiX
    // },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/shawnalbert/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };

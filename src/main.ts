import './styles/main.scss';
import SideNavigation from './components/SideNavigation';
import HeaderMainSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';

const FooterContent = /*html*/ `
  <div class="wrapper">
  <p>Email: haooo.wu@gmail.com</p>
  <div class="contactlist">
    <a href="https://twitter.com/HaoooWu"
      ><span class="fa-stack fa">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i> </span
    ></a>
    <a href="https://www.linkedin.com/in/hao-wu-b70b845b/"
      ><span class="fa-stack fa">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i> </span
    ></a>
    <a href="https://github.com/haooowu">
        <span class="fa-stack fa">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i> 
        </span>
      </a>
    <a href="mailto:haooo.wu@gmail.com"
      ><span class="fa-stack fa">
        <i class="fa fa-circle-thin fa-stack-2x"></i>
        <i class="fa fa-envelope fa-stack-1x fa-inverse"></i> </span
    ></a>
  </div>
  <p>© Hao Wu 2023</p>
  </div>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div id="app">
    <header>
      ${SideNavigation}
      ${HeaderMainSection}
    </header>
    <main>
      ${AboutSection}
      ${SkillSection}
      ${WorkSection}
      ${ContactSection}
    </main>
    <footer>
      ${FooterContent}
    </footer>
  </div>
`;

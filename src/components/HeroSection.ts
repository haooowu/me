const HeaderMainSection = /*html*/ `
  <section id="main">
    <img id="logo" src="./images/logo.png" alt="" />
    <a href="#" v-scroll-to="'#work'" id="mywork">my work</a>
    <div id="godown" v-scroll-to="'#about'">
      <i class="fa fa-angle-double-down fa-2x" aria-hidden="true"></i>
    </div>
    <div class="wrapper">
      <div class="intro">
        <h1>Hello, My name is Hao Wu</h1>
        <p id="titleText">Front-End Developer</p>
        <div class="contactlist">
          <a href="https://twitter.com/HaoooWu">
            <span class="fa-stack fa">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x fa-inverse"></i> 
            </span >
          </a>
          <a href="https://www.linkedin.com/in/hao-wu-b70b845b/">
            <span class="fa-stack fa">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i> 
            </span >
          </a>
          <a href="https://github.com/haooowu">
            <span class="fa-stack fa">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
            </span >
          </a>
          <a href="mailto:haooo.wu@gmail.com">
            <span class="fa-stack fa">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-envelope fa-stack-1x fa-inverse"></i> 
              </span>
            </a>
        </div>
      </div>
    </div>
  </section>
`;

export default HeaderMainSection;

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const n=`
  <section class="sidenav" id="sidenav">
    <nav>
      <ul>
        <li>
          <a href="#" v-scroll-to="'#main'" class="dot" :class="{'actived': navFlag.main}">
            <p><span>Home</span></p>
          </a>
        </li>
        <li>
          <a href="#" v-scroll-to="'#about'" class="dot" :class="{'actived': navFlag.about}">
            <p><span>About</span></p>
          </a>
        </li>
        <li>
          <a href="#" v-scroll-to="'#skill'" class="dot" :class="{'actived': navFlag.skill}">
            <p><span>Skill</span></p>
          </a>
        </li>
        <li>
          <a href="#" v-scroll-to="'#work'" class="dot" :class="{'actived': navFlag.work}">
            <p><span>Work</span></p>
          </a>
        </li>
        <li>
          <a href="#" v-scroll-to="'#contact'" class="dot" :class="{'actived': navFlag.contact}">
            <p><span>Contact</span></p>
          </a>
        </li>
      </ul>
    </nav>
  </section>
`,r=`
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
`,d=`
  <section id="aboutsec">
    <div class="wrapper">
      <h1 id="about">ABOUT</h1>
      <div class="dash"></div>
      <p>
        &emsp;&emsp;Hi there! I'm Hao, a front-end developer based in Toronto, Canada. I'm passionate about web
        development and user experience, and I enjoy building web applications using the latest technology. When
        I'm not coding, my favourite pass times are scouting around small form-factor PC builds, playing video
        games, or hanging out with my friends.
      </p>
      <button
        onclick="window.open('https://drive.google.com/file/d/1A0LMc3-6PGHDPr3gzXRW0XY2N0aeUPHN/view?usp=sharing')"
      >
        my resume
      </button>
    </div>
  </section>
`,p=`
  <section id="skillsec">
    <div class="wrapper">
      <h1 id="skill">SKILLS & TOOLS</h1>
      <div class="dash"></div>
      <ul class="skilllist">
        <li>
          <i class="devicon-typescript-plain colored"></i>
          <p>TypeScript</p>
        </li>
        <li>
          <i class="devicon-html5-plain colored"></i>
          <p>HTML5</p>
        </li>
        <li>
          <i class="devicon-javascript-plain colored"></i>
          <p>JavaScript</p>
        </li>
        <li>
          <i class="devicon-css3-plain colored"></i>
          <p>CSS3</p>
        </li>
        <li>
          <i class="devicon-react-original colored"></i>
          <p>React</p>
        </li>
        <li>
          <i class="devicon-vuejs-plain colored"></i>
          <p>Vue</p>
        </li>
        <li>
          <i class="devicon-sass-original colored"></i>
          <p>SASS</p>
        </li>
        <li>
          <div class="alt-logo a11y"></div>
          <p>WCAG</p>
        </li>
        <li>
          <i class="devicon-graphql-plain colored"></i>
          <p>GraphQL</p>
        </li>
        <li>
          <div class="alt-logo apollo"></div>
          <p>Apollo</p>
        </li>
        <li>
          <div class="alt-logo pwa"></div>
          <p>PWA</p>
        </li>
        <li>
          <i class="devicon-jest-plain colored"></i>
          <p>Jest</p>
        </li>
        <li>
          <i class="devicon-nodejs-plain"></i>
          <p>Node</p>
        </li>
        <li>
          <i class="devicon-webpack-plain"></i>
          <p>Webpack</p>
        </li>
        <li>
          <i class="devicon-jquery-plain colored"></i>
          <p>jQuery</p>
        </li>
        <li>
          <i class="devicon-gulp-plain"></i>
          <p>Gulp</p>
        </li>
        <li>
          <i class="devicon-git-plain colored"></i>
          <p>Git</p>
        </li>
        <li>
          <i class="devicon-bash-plain colored"></i>
          <p>Bash</p>
        </li>
        <li>
          <i class="devicon-firebase-plain colored"></i>
          <p>Firebase</p>
        </li>
        <li>
          <i class="fa fa-database" aria-hidden="true"></i>
          <p>SQL</p>
        </li>
      </ul>
    </div>
  </section>
`,v=`
  <section id="worksec">
    <div class="wrapper">
      <h1 id="work">PERSONAL WORKS</h1>
      <div class="dash"></div>
      <div class="inputTabView">
        <input type="radio" name="tab1" id="tab1" aria-controls="foo" checked />
        <input type="radio" name="tab1" id="tab2" aria-controls="bar" />

        <div class="tabLabels">
          <label for="tab1"><i class="fa fa-list" aria-hidden="true"></i><span>Featured</span></label>
          <label for="tab2"><i class="fa fa-th" aria-hidden="true"></i><span>All Projects</span></label>
        </div>

        <div class="tabSections">
          <section>
            <div id="showcases">
              <div class="project">
                <div class="padholder">
                  <div class="imgholder">
                    <img src="./images/peer-transfer.png" alt="" />
                  </div>
                </div>
                <div class="description">
                  <div class="wrap">
                    <p class="title">
                      React & WebRTC Application
                      <span></span>
                    </p>
                    <span class="divide"></span>
                    <p class="apitext">built with:</p>
                    <div class="tags">
                      <i class="devicon-typescript-plain colored"></i>
                      <i title="React.js" class="devicon-react-original colored"></i>
                      <i class="devicon-firebase-plain colored"></i>
                      <i class="devicon-webpack-plain colored"></i>
                      <i title="SASS" class="devicon-sass-original colored"></i>
                    </div>
                    <p>
                      A real-time file transfer app with p2p connection through WebRTC data channel. This app uses
                      Firebase for signalling service and peer presence management, only metadata of the files are
                      temporarily used for peer connection and the content is unknown to the service. Peers will
                      automatically join the room with the same public IP address or they can join another
                      network's room by entering their room ID.
                    </p>
                    <div class="viewmore">
                      <a href="https://haooowu.github.io/PeerTransfer/">
                        <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                      </a>
                      <a href="https://github.com/haooowu/PeerTransfer">
                        <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div class="masonryGrid">
              <div class="masonryItemCard">
                <div class="cardImage"><img src="./images/peer-transfer.png" alt="" /></div>
                <div class="cardContent">
                  <div class="description">
                    <div class="wrap">
                      <p class="title">
                        React & WebRTC Application<br />
                        <span><i class="fa fa-calendar" aria-hidden="true"></i>2023</span>
                      </p>
                      <span class="divide"></span>
                      <p class="apitext">built with:</p>
                      <div class="tags">
                        <i class="devicon-typescript-plain colored"></i>
                        <i title="React.js" class="devicon-react-original colored"></i>
                        <i class="devicon-firebase-plain colored"></i>
                        <i class="devicon-webpack-plain colored"></i>
                        <i title="SASS" class="devicon-sass-original colored"></i>
                      </div>
                      <p>
                        A real-time file transfer app with p2p connection through WebRTC data channel. This app
                        uses Firebase for signalling service and peer presence management, only metadata of the
                        files are temporarily used for peer connection and the content is unknown to the service.
                        Peers will automatically join the room with the same public IP address or they can join
                        another network's room by entering their room ID.
                      </p>
                      <div class="viewmore">
                        <a href="https://haooowu.github.io/PeerTransfer/">
                          <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                        </a>
                        <a href="https://github.com/haooowu/PeerTransfer">
                          <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="masonryItemCard">
                <div class="cardImage"><img src="./images/event-chat.png" /></div>
                <div class="cardContent">
                  <div class="description">
                    <div class="wrap">
                      <p class="title">
                        React Application <br /><span><i class="fa fa-calendar" aria-hidden="true"></i>2017</span>
                      </p>
                      <span class="divide"></span>
                      <p class="apitext">built with:</p>
                      <div class="tags">
                        <i title="React.js" class="devicon-react-original colored"></i>
                        <i title="JavaScript" class="devicon-javascript-plain colored"></i>
                        <i title="HTML5" class="devicon-html5-plain colored"></i>
                        <i title="CSS3" class="devicon-css3-plain colored"></i>
                        <i class="devicon-firebase-plain colored"></i>
                        <i title="Gulp" class="devicon-gulp-plain colored"></i>
                        <i title="SASS" class="devicon-sass-original colored"></i>
                      </div>
                      <p>
                        An Eventbrite viewer built with React and firebase. Each event has its own chat room, user
                        can login from their google account and chat with other people for specific events, or
                        view their chat history and message count.
                      </p>
                      <div class="viewmore">
                        <a href="https://project-6-cb9b9.firebaseapp.com/">
                          <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                        </a>
                        <a href="https://github.com/haooowu/EventChat">
                          <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="masonryItemCard">
                <div class="cardImage"><img src="./images/topify.png" /></div>
                <div class="cardContent">
                  <div class="description">
                    <div class="wrap">
                      <p class="title">
                        Client Design Project <br /><span
                          ><i class="fa fa-calendar" aria-hidden="true"></i>2017</span
                        >
                      </p>
                      <span class="divide"></span>
                      <p class="apitext">built with:</p>
                      <div class="tags">
                        <i title="JavaScript" class="devicon-javascript-plain colored"></i>
                        <i title="jQuery" class="devicon-jquery-plain colored"></i>
                        <i title="HTML5" class="devicon-html5-plain colored"></i>
                        <i title="CSS3" class="devicon-css3-plain colored"></i>
                        <i title="Gulp" class="devicon-gulp-plain colored"></i>
                        <i title="Git" class="devicon-git-plain colored"></i>
                        <i title="SASS" class="devicon-sass-original colored"></i>
                      </div>
                      <p>
                        A viewer utilizing the Spotify API to simulated a "Netflix" style catalogue that
                        dynamically displays popular track that provides additional information about the album
                        and artists.
                      </p>
                      <div class="viewmore">
                        <a href="https://haooowu.github.io/Topify/">
                          <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                        </a>
                        <a href="https://github.com/haooowu/Topify">
                          <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="masonryItemCard">
                <div class="cardImage"><img src="./images/traslate-wiki.png" /></div>
                <div class="cardContent">
                  <div class="description">
                    <div class="wrap">
                      <p class="title">
                        JavaScript API Application <br /><span
                          ><i class="fa fa-calendar" aria-hidden="true"></i>2017</span
                        >
                      </p>
                      <span class="divide"></span>
                      <p class="apitext">built with:</p>
                      <div class="tags">
                        <i title="JavaScript" class="devicon-javascript-plain colored"></i>
                        <i title="HTML5" class="devicon-html5-plain colored"></i>
                        <i title="CSS3" class="devicon-css3-plain colored"></i>
                        <i title="Gulp" class="devicon-gulp-plain colored"></i>
                        <i title="SASS" class="devicon-sass-original colored"></i>
                      </div>
                      <p>
                        An online translator that utilizes both Yandex and Wikipedia APIs to provide users both a
                        language translation and information on the topic from wikipedia.
                      </p>
                      <div class="viewmore">
                        <a href="https://haooowu.github.io/TranslateNwiki/">
                          <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                        </a>
                        <a href="https://github.com/haooowu/TranslateNwiki">
                          <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="masonryItemCard">
                <div class="cardImage"><img src="./images/emoji-match.png" /></div>
                <div class="cardContent">
                  <div class="description">
                    <div class="wrap">
                      <p class="title">
                        jQuery Application <br /><span
                          ><i class="fa fa-calendar" aria-hidden="true"></i>2017</span
                        >
                      </p>
                      <span class="divide"></span>
                      <p class="apitext">built with:</p>
                      <div class="tags">
                        <i title="JavaScript" class="devicon-javascript-plain colored"></i>
                        <i title="jQuery" class="devicon-jquery-plain colored"></i>
                        <i title="HTML5" class="devicon-html5-plain colored"></i>
                        <i title="CSS3" class="devicon-css3-plain colored"></i>
                      </div>
                      <p>
                        A memory game composed with popular emoji faces, which incorporates the dynamic use of
                        classes.
                      </p>
                      <div class="viewmore">
                        <a href="https://haooowu.github.io/emojimatchgame/">
                          <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                        </a>
                        <a href="https://github.com/haooowu/emojimatchgame">
                          <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="masonryItemCard">
                <div class="cardImage"><img src="./images/startup-z.png" /></div>
                <div class="cardContent">
                  <div class="description">
                    <div class="wrap">
                      <p class="title">
                        PSD Conversion to Responsive Design
                        <br /><span><i class="fa fa-calendar" aria-hidden="true"></i>2017</span>
                      </p>
                      <span class="divide"></span>
                      <p class="apitext">built with:</p>
                      <div class="tags">
                        <i title="HTML5" class="devicon-html5-plain colored"></i>
                        <i title="CSS3" class="devicon-css3-plain colored"></i>
                        <i title="SASS" class="devicon-sass-original colored"></i>
                      </div>
                      <p>Converting an eye catching psd template into a fully responsive HTML page.</p>
                      <div class="viewmore">
                        <a href="https://haooowu.github.io/StartupZ/">
                          <button><i class="fa fa-globe" aria-hidden="true"></i> View Live</button>
                        </a>
                        <a href="https://github.com/haooowu/StartupZ">
                          <button><i class="fa fa-github" aria-hidden="true"></i> Github</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
`,u=`
  <section id="contactsec">
    <div class="wrapper">
      <h1 id="contact">CONTACT ME</h1>
      <div class="dash"></div>
      <p>Email: haooo.wu@gmail.com</p>
      <form action="https://formspree.io/f/haooo.wu@gmail.com" method="POST">
        <p><label for="contact_name">NAME</label><span>*</span></p>
        <input type="text" id="contact_name" name="name" required />
        <p><label for="contact_email">E-MAIL</label><span>*</span></p>
        <input name="email" type="email" id="contact_email" required />
        <p><label for="contact_subject">SUBJECT</label><span>*</span></p>
        <input name="subject" id="contact_subject" type="text" required />
        <p><label for="contact_message">MESSAGE</label><span>*</span></p>
        <textarea name="message" id="contact_message" cols="30" rows="10" required></textarea>
        <button value="Send">submit</button>
      </form>
    </div>
  </section>
`,h=`
  <div class="wrapper">
    <p>Email: haooo.wu@gmail.com</p>
    <div class="contactlist">
      <a href="https://twitter.com/HaoooWu">
        <span class="fa-stack fa">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x fa-inverse"></i> 
        </span>
      </a>
      <a href="https://www.linkedin.com/in/hao-wu-b70b845b/">
        <span class="fa-stack fa">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
        </span>
      </a>
      <a href="https://github.com/haooowu">
        <span class="fa-stack fa">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i> 
        </span>
      </a>
      <a href="mailto:haooo.wu@gmail.com">
        <span class="fa-stack fa">
          <i class="fa fa-circle-thin fa-stack-2x"></i>
          <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
        </span>
      </a>
    </div>
    <p>© Hao Wu 2023</p>
  </div>
`;document.querySelector("#app").innerHTML=`
  <header>
    ${n}
    ${r}
  </header>
  <main>
    ${d}
    ${p}
    ${v}
    ${u}
  </main>
  <footer>
    ${h}
  </footer>
`;function f(a,e){let t=!1;return function(){t||(a.apply(this,arguments),t=!0,setTimeout(()=>{t=!1},e))}}function o(a){if(!a)return!1;const e=a.getBoundingClientRect();if(a===document.getElementById("contactsec")){const t=document.documentElement.scrollTop+window.innerHeight,l=document.documentElement.offsetHeight-140;return t>=l?!0:e.bottom<955}return e.top<=-10&&e.bottom>0||e.top<=0&&e.bottom>0}function m(){this.navFlag.main=o(document.getElementById("main")),this.navFlag.about=o(document.getElementById("aboutsec")),this.navFlag.skill=o(document.getElementById("skillsec")),this.navFlag.work=o(document.getElementById("worksec")),this.navFlag.contact=o(document.getElementById("contactsec")),this.navFlag.contact&&(this.navFlag.work=!1)}new Vue({el:"#app",data:()=>({navFlag:{main:!0,about:!1,skill:!1,work:!1,contact:!1}}),created(){var a;"ontouchstart"in window||navigator.maxTouchPoints||(a=document.getElementById("sidenav"))==null||a.classList.add("no-touch")},mounted(){window.addEventListener("scroll",this.handleScroll),this.$nextTick(()=>{var a;(a=document.getElementById("titleText"))==null||a.classList.add("autoType")})},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:f(m,30)}});

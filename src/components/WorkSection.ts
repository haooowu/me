const WorkSection = /*html*/ `
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
`;

export default WorkSection;

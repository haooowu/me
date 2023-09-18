const SideNavigation = /*html*/ `
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
`;

export default SideNavigation;

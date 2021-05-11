function debounce(func, delay) {
  let flag = false;
  return function () {
    if (flag) return;
    func.apply(this, arguments);
    flag = true;
    setTimeout(() => {
      flag = false;
    }, delay);
  };
}

var test = 'test';

function isSectionInView(element) {
  const rect = element.getBoundingClientRect();
  if (element === document.getElementById('contactsec')) {
    const offset = document.documentElement.scrollTop + window.innerHeight;
    const height = document.documentElement.offsetHeight - 140; // footer height
    if (offset >= height) return true;
    return rect.bottom < 955; // contac section height
  }
  return (rect.top <= -10 && rect.bottom > 0) || (rect.top <= 0 && rect.bottom > 0);
}

function navController() {
  this.navFlag.main = isSectionInView(document.getElementById('main'));
  this.navFlag.about = isSectionInView(document.getElementById('aboutsec'));
  this.navFlag.skill = isSectionInView(document.getElementById('skillsec'));
  this.navFlag.work = isSectionInView(document.getElementById('worksec'));
  this.navFlag.contact = isSectionInView(document.getElementById('contactsec'));
  if (this.navFlag.contact) this.navFlag.work = false;
}

const app = new Vue({
  el: '#app',
  data: () => ({
    navFlag: {
      main: true,
      about: false,
      skill: false,
      work: false,
      contact: false,
    },
  }),
  created() {
    if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
      document.getElementById('sidenav').classList.add('no-touch');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: debounce(navController, 30),
  },
});

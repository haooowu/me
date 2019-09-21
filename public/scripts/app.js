(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function debounce(func, delay) {
  var flag = false;
  return function () {
    if (flag) return;
    func.apply(this, arguments);
    flag = true;
    setTimeout(function () {
      flag = false;
    }, delay);
  };
}

function isSectionInView(element) {
  var rect = element.getBoundingClientRect();

  if (element === document.getElementById('contactsec')) {
    var offset = document.documentElement.scrollTop + window.innerHeight;
    var height = document.documentElement.offsetHeight - 140; // footer height

    if (offset >= height) return true;
    return rect.bottom < 955; // contac section height
  }

  return rect.top <= -10 && rect.bottom > 0 || rect.top <= 0 && rect.bottom > 0;
}

function navController() {
  this.navFlag.main = isSectionInView(document.getElementById('main'));
  this.navFlag.about = isSectionInView(document.getElementById('aboutsec'));
  this.navFlag.skill = isSectionInView(document.getElementById('skillsec'));
  this.navFlag.work = isSectionInView(document.getElementById('worksec'));
  this.navFlag.contact = isSectionInView(document.getElementById('contactsec'));
  if (this.navFlag.contact) this.navFlag.work = false;
}

var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      navFlag: {
        main: true,
        about: false,
        skill: false,
        work: false,
        contact: false
      }
    };
  },
  created: function created() {
    if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
      document.getElementById('sidenav').classList.add('no-touch');
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: debounce(navController, 20)
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsUUFBVCxDQUFtQixJQUFuQixFQUF5QixLQUF6QixFQUFnQztBQUMvQixNQUFJLElBQUksR0FBRyxLQUFYO0FBQ0EsU0FBTyxZQUFZO0FBQ2xCLFFBQUksSUFBSixFQUFVO0FBQ1YsSUFBQSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsRUFBaUIsU0FBakI7QUFDQSxJQUFBLElBQUksR0FBRyxJQUFQO0FBQ0EsSUFBQSxVQUFVLENBQUMsWUFBTTtBQUFFLE1BQUEsSUFBSSxHQUFHLEtBQVA7QUFBYyxLQUF2QixFQUF5QixLQUF6QixDQUFWO0FBQ0EsR0FMRDtBQU1BOztBQUVELFNBQVMsZUFBVCxDQUEwQixPQUExQixFQUFtQztBQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMscUJBQVIsRUFBYjs7QUFDRyxNQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFoQixFQUF1RDtBQUN6RCxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixHQUFxQyxNQUFNLENBQUMsV0FBM0Q7QUFDQSxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF6QixHQUF3QyxHQUF2RCxDQUZ5RCxDQUVFOztBQUMzRCxRQUFJLE1BQU0sSUFBSSxNQUFkLEVBQXNCLE9BQU8sSUFBUDtBQUN0QixXQUFPLElBQUksQ0FBQyxNQUFMLEdBQWMsR0FBckIsQ0FKeUQsQ0FJaEM7QUFDekI7O0FBQ0UsU0FDSyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQUMsRUFBYixJQUFtQixJQUFJLENBQUMsTUFBTCxHQUFjLENBQWxDLElBQXlDLElBQUksQ0FBQyxHQUFMLElBQVksQ0FBWixJQUFpQixJQUFJLENBQUMsTUFBTCxHQUFjLENBRDVFO0FBR0g7O0FBRUQsU0FBUyxhQUFULEdBQTBCO0FBQ3pCLE9BQUssT0FBTCxDQUFhLElBQWIsR0FBb0IsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQUQsQ0FBbkM7QUFDQSxPQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQXFCLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixDQUFELENBQXBDO0FBQ0EsT0FBSyxPQUFMLENBQWEsS0FBYixHQUFxQixlQUFlLENBQUMsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBRCxDQUFwQztBQUNBLE9BQUssT0FBTCxDQUFhLElBQWIsR0FBb0IsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFULENBQXdCLFNBQXhCLENBQUQsQ0FBbkM7QUFDQSxPQUFLLE9BQUwsQ0FBYSxPQUFiLEdBQXVCLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFELENBQXRDO0FBQ0EsTUFBSSxLQUFLLE9BQUwsQ0FBYSxPQUFqQixFQUEwQixLQUFLLE9BQUwsQ0FBYSxJQUFiLEdBQW9CLEtBQXBCO0FBQzFCOztBQUVELElBQU0sR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2xCLEVBQUEsRUFBRSxFQUFFLE1BRGM7QUFFbkIsRUFBQSxJQUFJLEVBQUU7QUFBQSxXQUFPO0FBQ1osTUFBQSxPQUFPLEVBQUU7QUFDUixRQUFBLElBQUksRUFBRSxJQURFO0FBRVIsUUFBQSxLQUFLLEVBQUUsS0FGQztBQUdSLFFBQUEsS0FBSyxFQUFFLEtBSEM7QUFJUixRQUFBLElBQUksRUFBRSxLQUpFO0FBS1IsUUFBQSxPQUFPLEVBQUU7QUFMRDtBQURHLEtBQVA7QUFBQSxHQUZhO0FBV25CLEVBQUEsT0FYbUIscUJBV1Q7QUFDVCxRQUFJLEVBQUUsa0JBQWtCLE1BQWxCLElBQTRCLFNBQVMsQ0FBQyxjQUF4QyxDQUFKLEVBQTZEO0FBQzVELE1BQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsU0FBbkMsQ0FBNkMsR0FBN0MsQ0FBaUQsVUFBakQ7QUFDQTtBQUNELEdBZmtCO0FBZ0JsQixFQUFBLE9BaEJrQixxQkFnQlA7QUFDWCxJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLLFlBQXZDO0FBQ0EsR0FsQmtCO0FBbUJuQixFQUFBLGFBbkJtQiwyQkFtQkY7QUFDaEIsSUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxZQUExQztBQUNBLEdBckJrQjtBQXNCbkIsRUFBQSxPQUFPLEVBQUU7QUFDUixJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsYUFBRCxFQUFnQixFQUFoQjtBQURkO0FBdEJVLENBQVIsQ0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIGRlYm91bmNlIChmdW5jLCBkZWxheSkge1xuXHRsZXQgZmxhZyA9IGZhbHNlXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGZsYWcpIHJldHVyblxuXHRcdGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXHRcdGZsYWcgPSB0cnVlXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7IGZsYWcgPSBmYWxzZSB9LCBkZWxheSlcblx0fVxufVxuXG5mdW5jdGlvbiBpc1NlY3Rpb25JblZpZXcgKGVsZW1lbnQpIHtcblx0Y29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzZWMnKSkge1xuXHRcdGNvbnN0IG9mZnNldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRjb25zdCBoZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gMTQwIC8vIGZvb3RlciBoZWlnaHRcblx0XHRpZiAob2Zmc2V0ID49IGhlaWdodCkgcmV0dXJuIHRydWVcblx0XHRyZXR1cm4gcmVjdC5ib3R0b20gPCA5NTUgLy8gY29udGFjIHNlY3Rpb24gaGVpZ2h0XG5cdH1cbiAgICByZXR1cm4gKFxuICAgICAgICAocmVjdC50b3AgPD0gLTEwICYmIHJlY3QuYm90dG9tID4gMCkgfHwgKHJlY3QudG9wIDw9IDAgJiYgcmVjdC5ib3R0b20gPiAwKVxuICAgIClcbn1cblxuZnVuY3Rpb24gbmF2Q29udHJvbGxlciAoKSB7XG5cdHRoaXMubmF2RmxhZy5tYWluID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpXG5cdHRoaXMubmF2RmxhZy5hYm91dCA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRzZWMnKSlcblx0dGhpcy5uYXZGbGFnLnNraWxsID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHNlYycpKVxuXHR0aGlzLm5hdkZsYWcud29yayA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NlYycpKVxuXHR0aGlzLm5hdkZsYWcuY29udGFjdCA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdHNlYycpKVxuXHRpZiAodGhpcy5uYXZGbGFnLmNvbnRhY3QpIHRoaXMubmF2RmxhZy53b3JrID0gZmFsc2VcdFx0XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuXHRkYXRhOiAoKSA9PiAoe1xuXHRcdG5hdkZsYWc6IHtcblx0XHRcdG1haW46IHRydWUsXG5cdFx0XHRhYm91dDogZmFsc2UsXG5cdFx0XHRza2lsbDogZmFsc2UsXG5cdFx0XHR3b3JrOiBmYWxzZSxcblx0XHRcdGNvbnRhY3Q6IGZhbHNlXG5cdFx0fVxuXHR9KSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVuYXYnKS5jbGFzc0xpc3QuYWRkKCduby10b3VjaCcpXG5cdFx0fVxuXHR9LFxuICBtb3VudGVkICgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXG5cdH0sXG5cdGJlZm9yZURlc3Ryb3kgKCkge1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGhhbmRsZVNjcm9sbDogZGVib3VuY2UobmF2Q29udHJvbGxlciwgMjApXG5cdH1cbn0pXG4iXX0=

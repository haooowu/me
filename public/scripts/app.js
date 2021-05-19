(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _debounce = _interopRequireDefault(require("./debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isSectionInView(element) {
  var rect = element.getBoundingClientRect();

  if (element === document.getElementById('contactsec')) {
    var offset = document.documentElement.scrollTop + window.innerHeight;
    var height = document.documentElement.offsetHeight - 140;
    if (offset >= height) return true;
    return rect.bottom < 955;
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
    handleScroll: (0, _debounce["default"])(navController, 30)
  }
});
var _default = app;
exports["default"] = _default;

},{"./debounce":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = debounce;

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAudHMiLCJzcmMvc2NyaXB0cy9kZWJvdW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUVBLFNBQVMsZUFBVCxDQUF5QixPQUF6QixFQUE2QztBQUMzQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMscUJBQVIsRUFBYjs7QUFDQSxNQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFoQixFQUF1RDtBQUNyRCxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixHQUFxQyxNQUFNLENBQUMsV0FBM0Q7QUFDQSxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF6QixHQUF3QyxHQUF2RDtBQUNBLFFBQUksTUFBTSxJQUFJLE1BQWQsRUFBc0IsT0FBTyxJQUFQO0FBQ3RCLFdBQU8sSUFBSSxDQUFDLE1BQUwsR0FBYyxHQUFyQjtBQUNEOztBQUNELFNBQVEsSUFBSSxDQUFDLEdBQUwsSUFBWSxDQUFDLEVBQWIsSUFBbUIsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUFsQyxJQUF5QyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQVosSUFBaUIsSUFBSSxDQUFDLE1BQUwsR0FBYyxDQUEvRTtBQUNEOztBQUVELFNBQVMsYUFBVCxHQUFzQjtBQUNwQixPQUFLLE9BQUwsQ0FBYSxJQUFiLEdBQW9CLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUFELENBQW5DO0FBQ0EsT0FBSyxPQUFMLENBQWEsS0FBYixHQUFxQixlQUFlLENBQUMsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBRCxDQUFwQztBQUNBLE9BQUssT0FBTCxDQUFhLEtBQWIsR0FBcUIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLENBQUQsQ0FBcEM7QUFDQSxPQUFLLE9BQUwsQ0FBYSxJQUFiLEdBQW9CLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQUFELENBQW5DO0FBQ0EsT0FBSyxPQUFMLENBQWEsT0FBYixHQUF1QixlQUFlLENBQUMsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBRCxDQUF0QztBQUNBLE1BQUksS0FBSyxPQUFMLENBQWEsT0FBakIsRUFBMEIsS0FBSyxPQUFMLENBQWEsSUFBYixHQUFvQixLQUFwQjtBQUMzQjs7QUFHRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUosQ0FBUTtBQUNsQixFQUFBLEVBQUUsRUFBRSxNQURjO0FBRWxCLEVBQUEsSUFBSSxFQUFFLGdCQUFBO0FBQU0sV0FBQztBQUNYLE1BQUEsT0FBTyxFQUFFO0FBQ1AsUUFBQSxJQUFJLEVBQUUsSUFEQztBQUVQLFFBQUEsS0FBSyxFQUFFLEtBRkE7QUFHUCxRQUFBLEtBQUssRUFBRSxLQUhBO0FBSVAsUUFBQSxJQUFJLEVBQUUsS0FKQztBQUtQLFFBQUEsT0FBTyxFQUFFO0FBTEY7QUFERSxLQUFEO0FBUVYsR0FWZ0I7QUFXbEIsRUFBQSxPQUFPLEVBQUEsbUJBQUE7QUFDTCxRQUFJLEVBQUUsa0JBQWtCLE1BQWxCLElBQTRCLFNBQVMsQ0FBQyxjQUF4QyxDQUFKLEVBQTZEO0FBQzNELE1BQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsU0FBbkMsQ0FBNkMsR0FBN0MsQ0FBaUQsVUFBakQ7QUFDRDtBQUNGLEdBZmlCO0FBZ0JsQixFQUFBLE9BQU8sRUFBQSxtQkFBQTtBQUNMLElBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUssWUFBdkM7QUFDRCxHQWxCaUI7QUFtQmxCLEVBQUEsYUFBYSxFQUFBLHlCQUFBO0FBQ1gsSUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxZQUExQztBQUNELEdBckJpQjtBQXNCbEIsRUFBQSxPQUFPLEVBQUU7QUFDUCxJQUFBLFlBQVksRUFBRSwwQkFBUyxhQUFULEVBQXdCLEVBQXhCO0FBRFA7QUF0QlMsQ0FBUixDQUFaO2VBMkJlLEc7Ozs7Ozs7Ozs7O0FDbERELFNBQVUsUUFBVixDQUFtQixJQUFuQixFQUFtQyxLQUFuQyxFQUFnRDtBQUM1RCxNQUFJLElBQUksR0FBRyxLQUFYO0FBQ0EsU0FBTyxZQUFBO0FBQ0wsUUFBSSxJQUFKLEVBQVU7QUFDVixJQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBWCxFQUFpQixTQUFqQjtBQUNBLElBQUEsSUFBSSxHQUFHLElBQVA7QUFDQSxJQUFBLFVBQVUsQ0FBQyxZQUFBO0FBQ1QsTUFBQSxJQUFJLEdBQUcsS0FBUDtBQUNELEtBRlMsRUFFUCxLQUZPLENBQVY7QUFHRCxHQVBEO0FBUUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi9kZWJvdW5jZSc7XG5cbmZ1bmN0aW9uIGlzU2VjdGlvbkluVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0c2VjJykpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLSAxNDA7IC8vIGZvb3RlciBoZWlnaHRcbiAgICBpZiAob2Zmc2V0ID49IGhlaWdodCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHJlY3QuYm90dG9tIDwgOTU1OyAvLyBjb250YWN0IHNlY3Rpb24gaGVpZ2h0XG4gIH1cbiAgcmV0dXJuIChyZWN0LnRvcCA8PSAtMTAgJiYgcmVjdC5ib3R0b20gPiAwKSB8fCAocmVjdC50b3AgPD0gMCAmJiByZWN0LmJvdHRvbSA+IDApO1xufVxuXG5mdW5jdGlvbiBuYXZDb250cm9sbGVyKCkge1xuICB0aGlzLm5hdkZsYWcubWFpbiA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKTtcbiAgdGhpcy5uYXZGbGFnLmFib3V0ID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dHNlYycpKTtcbiAgdGhpcy5uYXZGbGFnLnNraWxsID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHNlYycpKTtcbiAgdGhpcy5uYXZGbGFnLndvcmsgPSBpc1NlY3Rpb25JblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzZWMnKSk7XG4gIHRoaXMubmF2RmxhZy5jb250YWN0ID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0c2VjJykpO1xuICBpZiAodGhpcy5uYXZGbGFnLmNvbnRhY3QpIHRoaXMubmF2RmxhZy53b3JrID0gZmFsc2U7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIG5hdkZsYWc6IHtcbiAgICAgIG1haW46IHRydWUsXG4gICAgICBhYm91dDogZmFsc2UsXG4gICAgICBza2lsbDogZmFsc2UsXG4gICAgICB3b3JrOiBmYWxzZSxcbiAgICAgIGNvbnRhY3Q6IGZhbHNlLFxuICAgIH0sXG4gIH0pLFxuICBjcmVhdGVkKCkge1xuICAgIGlmICghKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZW5hdicpLmNsYXNzTGlzdC5hZGQoJ25vLXRvdWNoJyk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVNjcm9sbDogZGVib3VuY2UobmF2Q29udHJvbGxlciwgMzApLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jOiBGdW5jdGlvbiwgZGVsYXk6IG51bWJlcikge1xuICBsZXQgZmxhZyA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmbGFnKSByZXR1cm47XG4gICAgZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGZsYWcgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmxhZyA9IGZhbHNlO1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn1cbiJdfQ==

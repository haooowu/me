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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsUUFBVCxDQUFtQixJQUFuQixFQUF5QixLQUF6QixFQUFnQztBQUMvQixNQUFJLElBQUksR0FBRyxLQUFYO0FBQ0EsU0FBTyxZQUFZO0FBQ2xCLFFBQUksSUFBSixFQUFVO0FBQ1YsSUFBQSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsRUFBaUIsU0FBakI7QUFDQSxJQUFBLElBQUksR0FBRyxJQUFQO0FBQ0EsSUFBQSxVQUFVLENBQUMsWUFBTTtBQUFFLE1BQUEsSUFBSSxHQUFHLEtBQVA7QUFBYyxLQUF2QixFQUF5QixLQUF6QixDQUFWO0FBQ0EsR0FMRDtBQU1BOztBQUVELFNBQVMsZUFBVCxDQUEwQixPQUExQixFQUFtQztBQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMscUJBQVIsRUFBYjs7QUFDRyxNQUFJLE9BQU8sS0FBSyxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFoQixFQUF1RDtBQUN6RCxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixTQUF6QixHQUFxQyxNQUFNLENBQUMsV0FBM0Q7QUFDQSxRQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF6QixHQUF3QyxHQUF2RCxDQUZ5RCxDQUVFOztBQUMzRCxRQUFJLE1BQU0sSUFBSSxNQUFkLEVBQXNCLE9BQU8sSUFBUDtBQUN0QixXQUFPLElBQUksQ0FBQyxNQUFMLEdBQWMsR0FBckIsQ0FKeUQsQ0FJaEM7QUFDekI7O0FBQ0UsU0FDSyxJQUFJLENBQUMsR0FBTCxJQUFZLENBQUMsRUFBYixJQUFtQixJQUFJLENBQUMsTUFBTCxHQUFjLENBQWxDLElBQXlDLElBQUksQ0FBQyxHQUFMLElBQVksQ0FBWixJQUFpQixJQUFJLENBQUMsTUFBTCxHQUFjLENBRDVFO0FBR0g7O0FBRUQsU0FBUyxhQUFULEdBQTBCO0FBQ3pCLE9BQUssT0FBTCxDQUFhLElBQWIsR0FBb0IsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQUQsQ0FBbkM7QUFDQSxPQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQXFCLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixDQUFELENBQXBDO0FBQ0EsT0FBSyxPQUFMLENBQWEsS0FBYixHQUFxQixlQUFlLENBQUMsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBRCxDQUFwQztBQUNBLE9BQUssT0FBTCxDQUFhLElBQWIsR0FBb0IsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFULENBQXdCLFNBQXhCLENBQUQsQ0FBbkM7QUFDQSxPQUFLLE9BQUwsQ0FBYSxPQUFiLEdBQXVCLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFELENBQXRDO0FBQ0EsTUFBSSxLQUFLLE9BQUwsQ0FBYSxPQUFqQixFQUEwQixLQUFLLE9BQUwsQ0FBYSxJQUFiLEdBQW9CLEtBQXBCO0FBQzFCOztBQUVELElBQU0sR0FBRyxHQUFHLElBQUksR0FBSixDQUFRO0FBQ2hCLEVBQUEsRUFBRSxFQUFFLE1BRFk7QUFFbkIsRUFBQSxJQUFJLEVBQUU7QUFBQSxXQUFPO0FBQ1osTUFBQSxPQUFPLEVBQUU7QUFDUixRQUFBLElBQUksRUFBRSxJQURFO0FBRVIsUUFBQSxLQUFLLEVBQUUsS0FGQztBQUdSLFFBQUEsS0FBSyxFQUFFLEtBSEM7QUFJUixRQUFBLElBQUksRUFBRSxLQUpFO0FBS1IsUUFBQSxPQUFPLEVBQUU7QUFMRDtBQURHLEtBQVA7QUFBQSxHQUZhO0FBV25CLEVBQUEsT0FYbUIscUJBV1Q7QUFDVCxRQUFJLEVBQUUsa0JBQWtCLE1BQWxCLElBQTRCLFNBQVMsQ0FBQyxjQUF4QyxDQUFKLEVBQTZEO0FBQzVELE1BQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsU0FBbkMsQ0FBNkMsR0FBN0MsQ0FBaUQsVUFBakQ7QUFDQTtBQUNELEdBZmtCO0FBZ0JoQixFQUFBLE9BaEJnQixxQkFnQkw7QUFDYixJQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLLFlBQXZDO0FBQ0EsR0FsQmtCO0FBbUJuQixFQUFBLGFBbkJtQiwyQkFtQkY7QUFDaEIsSUFBQSxNQUFNLENBQUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSyxZQUExQztBQUNBLEdBckJrQjtBQXNCaEIsRUFBQSxPQUFPLEVBQUU7QUFDTCxJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsYUFBRCxFQUFnQixFQUFoQjtBQURqQjtBQXRCTyxDQUFSLENBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBkZWJvdW5jZSAoZnVuYywgZGVsYXkpIHtcblx0bGV0IGZsYWcgPSBmYWxzZVxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmIChmbGFnKSByZXR1cm5cblx0XHRmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblx0XHRmbGFnID0gdHJ1ZVxuXHRcdHNldFRpbWVvdXQoKCkgPT4geyBmbGFnID0gZmFsc2UgfSwgZGVsYXkpXG5cdH1cbn1cblxuZnVuY3Rpb24gaXNTZWN0aW9uSW5WaWV3IChlbGVtZW50KSB7XG5cdGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0c2VjJykpIHtcblx0XHRjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0XG5cdFx0Y29uc3QgaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCAtIDE0MCAvLyBmb290ZXIgaGVpZ2h0XG5cdFx0aWYgKG9mZnNldCA+PSBoZWlnaHQpIHJldHVybiB0cnVlXG5cdFx0cmV0dXJuIHJlY3QuYm90dG9tIDwgOTU1IC8vIGNvbnRhYyBzZWN0aW9uIGhlaWdodFxuXHR9XG4gICAgcmV0dXJuIChcbiAgICAgICAgKHJlY3QudG9wIDw9IC0xMCAmJiByZWN0LmJvdHRvbSA+IDApIHx8IChyZWN0LnRvcCA8PSAwICYmIHJlY3QuYm90dG9tID4gMClcbiAgICApXG59XG5cbmZ1bmN0aW9uIG5hdkNvbnRyb2xsZXIgKCkge1xuXHR0aGlzLm5hdkZsYWcubWFpbiA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKVxuXHR0aGlzLm5hdkZsYWcuYWJvdXQgPSBpc1NlY3Rpb25JblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0c2VjJykpXG5cdHRoaXMubmF2RmxhZy5za2lsbCA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tpbGxzZWMnKSlcblx0dGhpcy5uYXZGbGFnLndvcmsgPSBpc1NlY3Rpb25JblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzZWMnKSlcblx0dGhpcy5uYXZGbGFnLmNvbnRhY3QgPSBpc1NlY3Rpb25JblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzZWMnKSlcblx0aWYgKHRoaXMubmF2RmxhZy5jb250YWN0KSB0aGlzLm5hdkZsYWcud29yayA9IGZhbHNlXHRcdFxufVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuXHRkYXRhOiAoKSA9PiAoe1xuXHRcdG5hdkZsYWc6IHtcblx0XHRcdG1haW46IHRydWUsXG5cdFx0XHRhYm91dDogZmFsc2UsXG5cdFx0XHRza2lsbDogZmFsc2UsXG5cdFx0XHR3b3JrOiBmYWxzZSxcblx0XHRcdGNvbnRhY3Q6IGZhbHNlXG5cdFx0fVxuXHR9KSxcblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoISgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzKSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGVuYXYnKS5jbGFzc0xpc3QuYWRkKCduby10b3VjaCcpXG5cdFx0fVxuXHR9LFxuICAgIG1vdW50ZWQgKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcblx0fSxcblx0YmVmb3JlRGVzdHJveSAoKSB7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuXHR9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlU2Nyb2xsOiBkZWJvdW5jZShuYXZDb250cm9sbGVyLCAyMClcbiAgICB9XG59KVxuIl19

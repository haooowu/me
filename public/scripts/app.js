(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function debounce(func, delay) {
    var flag = false;
    return function () {
        if (flag)
            return;
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
        var height = document.documentElement.offsetHeight - 140;
        if (offset >= height)
            return true;
        return rect.bottom < 955;
    }
    return (rect.top <= -10 && rect.bottom > 0) || (rect.top <= 0 && rect.bottom > 0);
}
function navController() {
    this.navFlag.main = isSectionInView(document.getElementById('main'));
    this.navFlag.about = isSectionInView(document.getElementById('aboutsec'));
    this.navFlag.skill = isSectionInView(document.getElementById('skillsec'));
    this.navFlag.work = isSectionInView(document.getElementById('worksec'));
    this.navFlag.contact = isSectionInView(document.getElementById('contactsec'));
    if (this.navFlag.contact)
        this.navFlag.work = false;
}
var app = new Vue({
    el: '#app',
    data: function () { return ({
        navFlag: {
            main: true,
            about: false,
            skill: false,
            work: false,
            contact: false,
        },
    }); },
    created: function () {
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            document.getElementById('sidenav').classList.add('no-touch');
        }
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll: debounce(navController, 30),
    },
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxTQUFTLFFBQVEsQ0FBQyxJQUFjLEVBQUUsS0FBYTtJQUM3QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7SUFDakIsT0FBTztRQUNMLElBQUksSUFBSTtZQUFFLE9BQU87UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLFVBQVUsQ0FBQztZQUNULElBQUksR0FBRyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsT0FBb0I7SUFDM0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDN0MsSUFBSSxPQUFPLEtBQUssUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNyRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZFLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUMzRCxJQUFJLE1BQU0sSUFBSSxNQUFNO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztLQUMxQjtJQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLENBQUM7QUFFRCxTQUFTLGFBQWE7SUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzlFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1FBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3RELENBQUM7QUFHRCxJQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNsQixFQUFFLEVBQUUsTUFBTTtJQUNWLElBQUksRUFBRSxjQUFNLE9BQUEsQ0FBQztRQUNYLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLEtBQUs7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLEtBQUs7U0FDZjtLQUNGLENBQUMsRUFSVSxDQVFWO0lBQ0YsT0FBTztRQUNMLElBQUksQ0FBQyxDQUFDLGNBQWMsSUFBSSxNQUFNLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzNELFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFDRCxPQUFPO1FBQ0wsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELGFBQWE7UUFDWCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsWUFBWSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO0tBQzFDO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gZGVib3VuY2UoZnVuYzogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIpIHtcbiAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmxhZykgcmV0dXJuO1xuICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBmbGFnID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU2VjdGlvbkluVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0c2VjJykpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLSAxNDA7IC8vIGZvb3RlciBoZWlnaHRcbiAgICBpZiAob2Zmc2V0ID49IGhlaWdodCkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHJlY3QuYm90dG9tIDwgOTU1OyAvLyBjb250YWN0IHNlY3Rpb24gaGVpZ2h0XG4gIH1cbiAgcmV0dXJuIChyZWN0LnRvcCA8PSAtMTAgJiYgcmVjdC5ib3R0b20gPiAwKSB8fCAocmVjdC50b3AgPD0gMCAmJiByZWN0LmJvdHRvbSA+IDApO1xufVxuXG5mdW5jdGlvbiBuYXZDb250cm9sbGVyKCkge1xuICB0aGlzLm5hdkZsYWcubWFpbiA9IGlzU2VjdGlvbkluVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpKTtcbiAgdGhpcy5uYXZGbGFnLmFib3V0ID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dHNlYycpKTtcbiAgdGhpcy5uYXZGbGFnLnNraWxsID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHNlYycpKTtcbiAgdGhpcy5uYXZGbGFnLndvcmsgPSBpc1NlY3Rpb25JblZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzZWMnKSk7XG4gIHRoaXMubmF2RmxhZy5jb250YWN0ID0gaXNTZWN0aW9uSW5WaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0c2VjJykpO1xuICBpZiAodGhpcy5uYXZGbGFnLmNvbnRhY3QpIHRoaXMubmF2RmxhZy53b3JrID0gZmFsc2U7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIG5hdkZsYWc6IHtcbiAgICAgIG1haW46IHRydWUsXG4gICAgICBhYm91dDogZmFsc2UsXG4gICAgICBza2lsbDogZmFsc2UsXG4gICAgICB3b3JrOiBmYWxzZSxcbiAgICAgIGNvbnRhY3Q6IGZhbHNlLFxuICAgIH0sXG4gIH0pLFxuICBjcmVhdGVkKCkge1xuICAgIGlmICghKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZW5hdicpLmNsYXNzTGlzdC5hZGQoJ25vLXRvdWNoJyk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVNjcm9sbDogZGVib3VuY2UobmF2Q29udHJvbGxlciwgMzApLFxuICB9LFxufSk7XG4iXX0=

export default function debounce(func: Function, delay: number) {
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

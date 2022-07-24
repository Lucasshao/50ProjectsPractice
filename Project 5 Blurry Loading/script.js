const loadText = document.querySelector(".loading-text");
// 链接div
const bg = document.querySelector(".bg");
// 链接bg

let load = 0;

let int = setInterval(blurring, 30);
// 30毫秒？

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // 数字模板从0%显示到100%，但是实际时间是三秒
  bg.style.filter = `blur(${scale(load, 0,100, 30, 0)}px)`
  // 模糊这里没懂，后来是从30模糊到完全清晰
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
// 网上的function
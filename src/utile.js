/**
 * 判断浏览器是否支持webp
 * @param fn
 */
export const isWebp = (fn)=>{
  const img = new Image(),
    src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
  img.onload = function () {
    fn && fn(1);
  };
  img.onerror = function () {
    fn && fn(0);
  };
  img.src = src;
};
/**
 * 跨域获取图片
 * @param url 链接
 * @param fn  回调方法
 * fn(status) status
 *
 */
export const anonymousImage = ({url,fn})=>{
  const img = new Image();
  img.setAttribute('crossorigin', 'anonymous');
  img.onload = function () {
    fn && fn(1);
  };
  img.onerror = function () {
    fn && fn(0);
  };
  img.src = url;
};

/**
 * 判断是否为HTMLElement节点
 * @param dom
 * @returns {boolean}
 */
export const isDomObj  = (dom) => dom instanceof HTMLElement;

/**
 * 创建cavans节点，并且返回节点对象
 * @param width
 * @param height
 * @returns {HTMLElement}
 */
export const  createCavans = ({width,height})=>{
  const cavansDom =  document.createElement('cavans');
  cavansDom.width = width;
  cavansDom.height = height;
  document.body.appendChild(cavansDom);
  return cavansDom;
}



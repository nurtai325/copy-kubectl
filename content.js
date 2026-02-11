const allCode = document.querySelectorAll('code');

const visibleCode = Array.from(allCode).filter(el => {
  const style = window.getComputedStyle(el);
  return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
});

console.log(visibleCode);

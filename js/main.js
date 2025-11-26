
// Theme switcher: set class on body and localStorage
function setTheme(theme){
  document.body.classList.remove('theme-blue','theme-red','theme-dark');
  if(theme) document.body.classList.add(theme);
  localStorage.setItem('portfolio_theme', theme || '');
}
document.addEventListener('DOMContentLoaded', ()=> {
  const saved = localStorage.getItem('portfolio_theme');
  if(saved) setTheme(saved);
  // active nav link
  const links = document.querySelectorAll('.navbar .nav-link');
  links.forEach(a=>{
    if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))){
      a.classList.add('active');
    }
  });
});

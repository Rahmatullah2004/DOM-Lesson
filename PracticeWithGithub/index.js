const toggle = ()=> {
  const main = document.querySelector('.main');
  main.classList.toggle('toggle')
}


const click = document.querySelector('.toggle-click');
click.addEventListener('click', toggle);

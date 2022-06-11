let active = false;
let sidebar = document.getElementById('sidebar-list');
let sidebarClose = document.getElementById('sidebar-close');
let line1 = document.getElementById('line-1');
let line2 = document.getElementById('line-2');
let line3 = document.getElementById('line-3');
let lastScroll = 0;

document.addEventListener('scroll', () => {
  const offset = window.scrollY;
  if (offset > lastScroll) {
    let header = document.getElementById('header');
    header.style.opacity = 0;
    header.style.pointerEvents = 'none';
  } else {
    header.style.pointerEvents = 'all';
    header.style.opacity = 1;
  }
  lastScroll = offset;
});

function handleSidebar() {
  if (active) {
    closeSidebar();
  } else {
    openSidebar();
  }
}
function openSidebar() {
  active = true;
  sidebar.classList.add('bg-open');
  sidebarClose.style.zIndex = '10';
  line1.style.transform = 'translateY(6.5px) rotate(45deg)';
  line2.style.opacity = 0;
  line3.style.transform = ' translateY(-6.5px) rotate(-45deg)';
}
function closeSidebar() {
  active = false;
  sidebar.classList.remove('bg-open');
  sidebarClose.style.zIndex = '-1';
  line1.style.transform = 'rotate(0)';
  line2.style.opacity = 1;
  line3.style.transform = 'rotate(0)';
}

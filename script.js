// Menú en celular
const btn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
btn.onclick = () => links.classList.toggle('open');
links.querySelectorAll('a').forEach(a => a.onclick = () => links.classList.remove('open'));

// Animación al hacer scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Contadores animados
document.querySelectorAll('.count').forEach(c => {
  const target = +c.dataset.target; let n = 0;
  const step = () => { n += Math.ceil(target / 60); c.textContent = n >= target ? target : n; if (n < target) requestAnimationFrame(step); };
  step();
});

// Servicios desplegables
document.querySelectorAll('.service').forEach(s => s.onclick = () => s.classList.toggle('open'));

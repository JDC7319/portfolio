const menuButton = document.querySelector('#menu-button');
const mobileNav = document.querySelector('#mobile-nav');
const menuIcon = document.querySelector('#menu-icon');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.classList.toggle('hidden', isOpen);
  menuIcon.className = isOpen ? 'bx bx-menu text-3xl' : 'bx bx-x text-3xl';
});

mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'bx bx-menu text-3xl';
  });
});

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(`Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('phone') || 'No proporcionado'}\n\n${data.get('message')}`);
  const email = contactForm.dataset.contactEmail;
  if (!email) {
    document.querySelector('#form-feedback').textContent = 'Configura tu correo en data-contact-email para habilitar el envío.';
    return;
  }
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

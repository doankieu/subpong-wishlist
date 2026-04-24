const topbar = document.getElementById('topbar');
const revealElements = document.querySelectorAll('.reveal');
const form = document.getElementById('wishlist-form');
const message = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const successState = document.getElementById('success-state');

const setTopbarState = () => {
  if (!topbar) {
    return;
  }
  topbar.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', setTopbarState, { passive: true });
setTopbarState();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 110, 380)}ms`;
  revealObserver.observe(el);
});

const setLoading = (isLoading) => {
  submitBtn.disabled = isLoading;
  submitBtn.textContent = isLoading ? 'Encrypting...' : 'Request Invitation';
};

const showSuccess = () => {
  form.hidden = true;
  successState.hidden = false;
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const action = form.getAttribute('action') || '';

  message.textContent = '';
  setLoading(true);

  if (!action) {
    setLoading(false);
    message.textContent = 'Form endpoint is missing.';
    return;
  }

  try {
    const formData = new FormData(form);
    const response = await fetch(action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Submission failed');
    }

    setLoading(false);
    showSuccess();
  } catch (error) {
    setLoading(false);
    message.textContent = 'Could not submit right now. Please retry in a minute.';
  }
});

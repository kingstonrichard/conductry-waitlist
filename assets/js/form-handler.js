// assets/js/form-handler.js

document.getElementById('waitlist-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const submitButton = document.querySelector('#waitlist-submit');

  // Add loading state
  submitButton.classList.add('loading');
  submitButton.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById('waitlist-form').classList.add('remove');
      document.getElementById('success-message').classList.remove('remove');
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      form.reset();
    } else {
      throw new Error('Form submission error');
    }
  } catch (error) {
    document.getElementById('error-message').classList.remove('remove');
  } finally {
    // Remove loading state after 2 seconds
    setTimeout(() => {
      submitButton.classList.remove('loading');
      submitButton.disabled = false;
    }, 2000);
  }
});

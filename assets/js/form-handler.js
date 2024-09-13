<script>
  document.getElementById('waiting-list-form').addEventListener('submit', async function(event) {
    event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
      const response = await fetch(form.action, {
    method: form.method,
  body: formData,
  headers: {'Accept': 'application/json' }
      });

  if (response.ok) {
    document.getElementById('success-message').style.display = 'block';
  form.reset();
      } else {
        throw new Error('Form submission error');
      }
    } catch (error) {
    document.getElementById('error-message').style.display = 'block';
    }
  });
</script>

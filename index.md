---
layout: default
title: 'Conductry waitlist'
---

<form action="https://formspree.io/f/xvgpnqoj" method="POST" class="form" aria-labelledby="form-title" aria-describedby="form-description" id="waitlist-form">

  <h1 id="form-title">Join the Conductry waitlist</h1>
  <p id="form-description">Be the first to know when we launch the ultimate toolset for project managers. Conduct your projects with precision and ease.</p>

  <!-- Name Field -->
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Your name" aria-required="true" required>

  <!-- Email Field -->
  <label for="email">Email</label>
  <input type="email" id="email" name="_replyto" placeholder="Your email address" aria-required="true" required>

  <!-- Hidden anti-spam field -->
  <input type="text" name="_gotcha" style="display:none">
  <button type="submit" id="waitlist-submit" class="button button--primary">Keep me informed</button>

</form>

<!-- Success and error messages -->
<p id="success-message" role="alert" aria-live="polite" class="remove">You're in! Thank you for joining the waitlist. We'll be in touch soon with updates.</p>
<p id="error-message" role="alert" aria-live="assertive" class="remove">There was an error. Please try again later.</p>

<p class="text-sm">We will never share your information and you can unsubscribe at any time.</p>
---
layout: default
title: 'Conductry Waitlist'
---

<!-- Waitlist Form -->
<form action="https://formspree.io/f/your-form-id" method="POST" class="waitlist-form">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Your name" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="_replyto" placeholder="Your email address" required>
  <!-- Hidden field for anti-spam -->
  <input type="text" name="_gotcha" style="display:none">
  <button type="submit" class="cta-button">Sign Up</button>
</form>

<!-- Success/Error Messages -->
<p id="success-message" style="display:none;">Thank you for joining the waiting list!</p>
<p id="error-message" style="display:none;">There was an error. Please try again.</p>

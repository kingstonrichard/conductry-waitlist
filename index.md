---
layout: default
title: 'Conductry Waitlist'
---

<!-- _includes/waiting-list.html (portion where form is located) -->

<form action="https://formspree.io/f/xvgpnqoj" method="POST" class="waitlist-form" aria-labelledby="form-title" aria-describedby="form-description" id="waitlist-form">
  <h2 id="form-title">Join the Conductry Waitlist</h2>
  <p id="form-description">Be the first to know when we launch. Manage projects like a conductor, with precision and ease.</p>

<label for="name">Name</label>
<input type="text" id="name" name="name" placeholder="Your name" aria-required="true" required>

<label for="email">Email</label>
<input type="email" id="email" name="_replyto" placeholder="Your email address" aria-required="true" required>

  <!-- Hidden anti-spam field -->
  <input type="text" name="_gotcha" style="display:none">

<button type="submit" class="cta-button">Sign Up</button>

</form>

<!-- Success and error messages -->
<p id="success-message" role="alert" aria-live="polite" class="hide">Thank you for joining the waiting list!</p>
<p id="error-message" role="alert" aria-live="assertive" class="hide">There was an error. Please try again later.</p>

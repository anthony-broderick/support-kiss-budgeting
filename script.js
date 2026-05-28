/* ==============================================
   KISS BUDGETING — Support Site Scripts
   Handles: mobile nav toggle + FAQ accordion
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------
     MOBILE NAV TOGGLE
  ----------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -----------------------------------------------
     FAQ ACCORDION
  ----------------------------------------------- */
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const answerId   = button.getAttribute('aria-controls');
      const answer     = document.getElementById(answerId);

      if (!answer) return;

      // Close all other open items first
      faqQuestions.forEach(otherBtn => {
        if (otherBtn !== button) {
          const otherId     = otherBtn.getAttribute('aria-controls');
          const otherAnswer = document.getElementById(otherId);
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAnswer) otherAnswer.hidden = true;
        }
      });

      // Toggle the clicked item
      const newState = !isExpanded;
      button.setAttribute('aria-expanded', newState);
      answer.hidden = !newState;
    });
  });

});

// components/accordion/accordion.js

function initAccordion(root = document) {
  const triggers = root.querySelectorAll('[data-accordion-trigger]');

  // hide all panels on load
  triggers.forEach(trigger => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = root.getElementById(panelId);
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  });

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = root.getElementById(panelId);

      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });  
}

// Run on this page
initAccordion();

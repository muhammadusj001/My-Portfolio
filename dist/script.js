// Add only your confirmed personal profile URL. Empty keeps the pending label honest.
const LINKEDIN_URL = '';

(() => {
  'use strict';

  const linkedin = document.querySelector('#linkedin');
  const linkedinNote = document.querySelector('#linkedin-note');
  if (linkedin && /^https:\/\/(www\.)?linkedin\.com\/in\/[\w%-]+\/?$/.test(LINKEDIN_URL)) {
    linkedin.href = LINKEDIN_URL;
    linkedin.textContent = 'Connect on LinkedIn';
    if (linkedinNote) linkedinNote.hidden = true;
  }

  const header = document.querySelector('.site-header') || document.querySelector('header');
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#navigation');
  const navLinks = nav ? Array.from(nav.querySelectorAll('a[href^="#"]')) : [];
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  function closeMenu(returnFocus = false) {
    if (!menu || !nav) return;
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation menu');
    nav.classList.remove('open');
    if (returnFocus) menu.focus();
  }

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      nav.classList.toggle('open', open);
    });
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
        // Move focus into the selected section when collapsed links disappear.
        const target = document.getElementById(link.hash.slice(1));
        if (target) {
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        event.preventDefault();
        closeMenu(true);
      }
    });
    document.addEventListener('click', event => {
      if (menu.getAttribute('aria-expanded') === 'true' &&
          !menu.contains(event.target) && !nav.contains(event.target)) closeMenu();
    });
    document.addEventListener('focusin', event => {
      if (menu.getAttribute('aria-expanded') === 'true' &&
          !menu.contains(event.target) && !nav.contains(event.target)) closeMenu();
    });
    // CSS collapses mobile navigation only after its controls are functional.
    document.documentElement.classList.add('js');
  }

  let scrollFrame = 0;
  function updateActiveSection() {
    scrollFrame = 0;
    const headerBottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 80;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= headerBottom + 72) active = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections[sections.length - 1];
    }
    navLinks.forEach(link => {
      const current = Boolean(active && link.hash === `#${active.id}`);
      link.classList.toggle('active', current);
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function queueActiveSection() {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateActiveSection);
  }
  function updateHeaderHeight() {
    if (header) document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    if (menu && window.getComputedStyle(menu).display === 'none') closeMenu();
    queueActiveSection();
  }
  window.addEventListener('scroll', queueActiveSection, { passive: true });
  window.addEventListener('resize', updateHeaderHeight, { passive: true });
  window.addEventListener('hashchange', queueActiveSection);
  window.addEventListener('load', updateHeaderHeight);
  if (header && 'ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(header);
  updateHeaderHeight();

  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  const credentialCards = Array.from(document.querySelectorAll('.credential[data-category]'));
  const filterStatus = document.querySelector('#filter-status');
  function setCredentialFilter(button) {
    if (!button) return;
      filterButtons.forEach(filter => {
        const selected = filter === button;
        filter.classList.toggle('selected', selected);
        filter.setAttribute('aria-pressed', String(selected));
      });
      let count = 0;
      credentialCards.forEach(card => {
        card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
        if (!card.hidden) count += 1;
      });
      if (filterStatus) filterStatus.textContent = `${count} document${count === 1 ? '' : 's'} shown.`;
      queueActiveSection();
  }
  filterButtons.forEach(button => {
    button.addEventListener('click', () => setCredentialFilter(button));
  });
  // A direct experience link must reveal the card even after another filter was selected.
  document.querySelectorAll('a[href="#internship-letter"]').forEach(link => {
    link.addEventListener('click', () => {
      const card = document.querySelector('#internship-letter');
      if (!card) return;
      if (card.hidden) setCredentialFilter(filterButtons.find(button => button.dataset.filter === 'experience'));
      card.focus({ preventScroll: true });
    });
  });

  const dialog = document.querySelector('#document-dialog');
  const dialogTitle = document.querySelector('#dialog-title');
  const dialogDescription = document.querySelector('#dialog-description');
  const dialogNote = document.querySelector('#dialog-note');
  const dialogStatus = document.querySelector('#dialog-status');
  const dialogDocument = document.querySelector('#dialog-document');
  const documentContent = {
    placeholder: {
      description: 'The original file is not available in this project. This card is a placeholder, not a verified certificate or a document preview.',
      note: 'When supplied, only a permanently redacted copy should be published. Unredacted originals should be shared separately through restricted, recipient-specific access.',
      status: 'Placeholder · No file attached'
    },
    internship: {
      description: 'A privacy-safe copy of the Gamage Recruiters experience letter for the completed six-month software engineering internship.',
      note: 'The signature, stamp, and footer contact details have been permanently removed from this public copy. The unredacted original is not included in this website.',
      status: 'Privacy-safe copy available'
    }
  };
  let dialogOpener = null;
  if (dialog && dialogTitle) {
    document.querySelectorAll('[data-doc]').forEach(button => {
      button.addEventListener('click', () => {
        dialogTitle.textContent = button.dataset.doc;
        const available = button.dataset.docKey === 'internship';
        const content = available ? documentContent.internship : documentContent.placeholder;
        if (dialogDescription) dialogDescription.textContent = content.description;
        if (dialogNote) dialogNote.textContent = content.note;
        if (dialogStatus) dialogStatus.textContent = content.status;
        if (dialogDocument) dialogDocument.hidden = !available;
        dialog.classList.toggle('has-document', available);
        dialogOpener = button;
        if (typeof dialog.showModal === 'function') {
          if (!dialog.open) dialog.showModal();
        } else {
          window.alert(`${button.dataset.doc}\n\n${content.description}\n\n${content.note}`);
        }
      });
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right ||
          event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (dialogOpener && dialogOpener.isConnected && !dialogOpener.closest('[hidden]')) dialogOpener.focus();
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const tiltItems = Array.from(document.querySelectorAll('[data-tilt]'));
  const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));
  let revealObserver;

  function resetTilt(item) {
    item.style.removeProperty('--tilt-x');
    item.style.removeProperty('--tilt-y');
  }
  tiltItems.forEach(item => {
    item.addEventListener('pointermove', event => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === 'touch') return;
      const rect = item.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      item.style.setProperty('--tilt-x', `${(-y * 3).toFixed(2)}deg`);
      item.style.setProperty('--tilt-y', `${(x * 3).toFixed(2)}deg`);
    }, { passive: true });
    item.addEventListener('pointerleave', () => resetTilt(item));
    item.addEventListener('pointercancel', () => resetTilt(item));
    item.addEventListener('focusin', () => resetTilt(item));
  });

  function updateMotion() {
    tiltItems.forEach(resetTilt);
    if (revealObserver) revealObserver.disconnect();
    revealItems.forEach(item => item.classList.remove('reveal-ready'));
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.remove('is-revealed'));
      return;
    }
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach(item => {
      if (!item.classList.contains('is-revealed')) {
        item.classList.add('reveal-ready');
        revealObserver.observe(item);
      }
    });
  }
  [reducedMotion, finePointer].forEach(query => {
    if (typeof query.addEventListener === 'function') query.addEventListener('change', updateMotion);
    else if (typeof query.addListener === 'function') query.addListener(updateMotion);
  });
  updateMotion();
})();

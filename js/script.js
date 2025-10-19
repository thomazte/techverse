const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.hasAttribute('hidden');
    if (isHidden) mobileMenu.removeAttribute('hidden');
    else mobileMenu.setAttribute('hidden', '');
  });
}

const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.produto');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const cat = chip.dataset.filter;
    cards.forEach(card => {
      const match = cat === 'all' || card.dataset.cat === cat;
      card.style.display = match ? '' : 'none';
    });
  });
});

function appendUTM(anchor) {
  try {
    const url = new URL(anchor.href);
    url.searchParams.set('utm_source', 'landing');
    url.searchParams.set('utm_medium', 'cta');
    url.searchParams.set('utm_campaign', 'techverse');
    anchor.href = url.toString();
  } catch (_) {}
}
document.querySelectorAll('a[href*="wa.me"]').forEach(appendUTM);

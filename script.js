// Sticky Header Scroll State
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = '0 2px 20px rgba(10, 51, 35, 0.08)';
  } else {
    header.style.boxShadow = 'none';
  }
}, { passive: true });

// Filter Collection Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

function filterCategory(category) {
  // Update button active state
  filterButtons.forEach(btn => {
    if (btn.dataset.filter === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filter products
  productCards.forEach(card => {
    const cardCat = card.dataset.category;
    if (category === 'all' || cardCat === category) {
      card.classList.remove('hidden');
      card.style.display = 'flex';
    } else {
      card.classList.add('hidden');
      card.style.display = 'none';
    }
  });

  // Smooth scroll to collection if not already visible
  const collectionSection = document.getElementById('collection');
  if (collectionSection) {
    const rect = collectionSection.getBoundingClientRect();
    if (rect.top < -50 || rect.top > window.innerHeight) {
      collectionSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Hook filter buttons click
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterCategory(filter);
  });
});

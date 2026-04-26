/**
 * home.js
 * Renders the gov.gr home page content into #main-content.
 * Call after initLayout().
 *
 * Usage:
 *   import { initHome } from './pages/home.js'
 *   initHome()
 */

export function initHome() {
  const main = document.getElementById('main-content');
  if (!main) return;

  // Remove default govuk-main-wrapper padding — banner handles its own spacing
  main.classList.remove('govuk-main-wrapper');

  main.innerHTML = `
    <section class="govgr-hero" aria-labelledby="hero-heading">
      <div class="govgr-hero__inner govuk-width-container">
        <h1 class="govgr-hero__heading" id="hero-heading">
          Βρείτε τη δημόσια υπηρεσία<br>που θέλετε εύκολα και γρήγορα.
        </h1>

        <form class="govgr-search" role="search" action="/search" method="get" id="hero-search-form">
          <label class="govuk-visually-hidden" for="hero-search-input">
            Αναζήτηση υπηρεσίας
          </label>
          <div class="govgr-search__group">
            <input
              class="govgr-search__input"
              type="search"
              id="hero-search-input"
              name="q"
              placeholder="π.χ. «δίπλωμα οδήγησης», «ΑΜΚΑ», «φορολογική δήλωση»"
              autocomplete="off"
              spellcheck="false"
            >
            <button class="govgr-search__btn" type="submit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                   aria-hidden="true" focusable="false">
                <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="2.2"/>
                <line x1="12.5" y1="12.5" x2="17.5" y2="17.5"
                      stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
              <span class="govuk-visually-hidden">Αναζήτηση</span>
            </button>
          </div>
        </form>
      </div>

      <div class="govgr-hero__backdrop" aria-hidden="true"></div>
    </section>

    <div class="govuk-width-container">
      <div class="govuk-main-wrapper" id="home-content">
        <!-- Placeholder for future home page content sections -->
      </div>
    </div>
  `;

  // Submit handler
  const form = document.getElementById('hero-search-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = form.querySelector('input[name="q"]').value.trim();
      if (q) window.location.href = '/search?q=' + encodeURIComponent(q);
    });
  }
}
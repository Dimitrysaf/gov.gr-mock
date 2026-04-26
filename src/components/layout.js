const DEFAULTS = {
    serviceName: null,
    serviceUrl: '/',
    showPhaseBanner: false,
    phase: 'beta',
    phaseText: 'Αυτή η υπηρεσία βρίσκεται υπό ανάπτυξη.',
};

function renderHeader({ serviceName, serviceUrl }) {
    const serviceBlock = serviceName
        ? `<div class="govuk-header__content">
        <a href="${serviceUrl}" class="govuk-header__link govuk-header__link--service-name">
          ${serviceName}
        </a>
      </div>`
        : '';

    return `
<header class="govuk-header" role="banner" data-module="govuk-header">
  <div class="govuk-header__container govuk-width-container">
    <div class="govuk-header__logo">
      <a href="/" class="govuk-header__link govuk-header__link--homepage">
        <img src="gov_gr.svg" alt="gov.gr" class="govuk-header__logotype-image" height="30">
      </a>
    </div>
    ${serviceBlock}
  </div>
</header>`;
}

function renderPhaseBanner({ phase, phaseText }) {
    const label = phase === 'alpha' ? 'Alpha' : 'Beta';
    return `
<div class="govuk-phase-banner">
  <div class="govuk-width-container">
    <p class="govuk-phase-banner__content">
      <strong class="govuk-tag govuk-phase-banner__content__tag">${label}</strong>
      <span class="govuk-phase-banner__text">${phaseText}</span>
    </p>
  </div>
</div>`;
}

function renderFooter() {
    const year = new Date().getFullYear();
    return `
<footer class="govuk-footer" role="contentinfo">
  <div class="govuk-width-container">
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <ul class="govuk-footer__inline-list">
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="/accessibility">Προσβασιμότητα</a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="/cookies">Cookies</a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="/privacy">Προστασία Δεδομένων</a>
          </li>
          <li class="govuk-footer__inline-list-item">
            <a class="govuk-footer__link" href="/terms">Όροι Χρήσης</a>
          </li>
        </ul>
        <span class="govuk-footer__licence-description">
          Το περιεχόμενο διατίθεται υπό την άδεια
          <a class="govuk-footer__link" href="https://creativecommons.org/licenses/by/4.0/deed.el" rel="license">
            Creative Commons Αναφορά 4.0 Διεθνής (CC BY 4.0)</a>,
          εκτός αν ορίζεται διαφορετικά
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a class="govuk-footer__link" href="https://www.data.gov.gr">
          &copy; ${year} Ελληνική Δημοκρατία
        </a>
      </div>
    </div>
  </div>
</footer>`;
}

export function initLayout(options = {}) {
    const config = { ...DEFAULTS, ...options };

    const headerEl = document.getElementById('govgr-header');
    const footerEl = document.getElementById('govgr-footer');

    if (headerEl) {
        let html = renderHeader(config);
        if (config.showPhaseBanner) html += renderPhaseBanner(config);
        headerEl.innerHTML = html;
    }

    if (footerEl) {
        footerEl.innerHTML = renderFooter();
    }
}
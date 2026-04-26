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
        <section class="govgr-trending" aria-labelledby="trending-heading">
          <h2 class="govgr-trending__heading" id="trending-heading">Επίκαιρες αναζητήσεις</h2>
          <ul class="govuk-grid-row govuk-list govgr-trending__list">
            <li class="govuk-grid-column-one-half-from-tablet govgr-trending__list-item">
              <div class="govgr-trending__entry">
                <span class="govgr-trending__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" class="govgr-trending__icon-svg" focusable="false">
                    <path d="M5 12h12" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <a class="govuk-link govgr-trending__link" href="#">
                  Προσωπικός Αριθμός / Επιβεβαίωση και διόρθωση στοιχείων στα μητρώα δημοσίου (myinfo)
                </a>
              </div>
            </li>
            <li class="govuk-grid-column-one-half-from-tablet govgr-trending__list-item">
              <div class="govgr-trending__entry">
                <span class="govgr-trending__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" class="govgr-trending__icon-svg" focusable="false">
                    <path d="M5 12h12" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <a class="govuk-link govgr-trending__link" href="#">
                  Βεβαίωση Επιλεξιμότητας στο πρόγραμμα «Σπίτι μου ΙΙ»
                </a>
              </div>
            </li>
            <li class="govuk-grid-column-one-half-from-tablet govgr-trending__list-item">
              <div class="govgr-trending__entry">
                <span class="govgr-trending__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" class="govgr-trending__icon-svg" focusable="false">
                    <path d="M5 12h12" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <a class="govuk-link govgr-trending__link" href="#">
                  Υπεύθυνη Δήλωση / Εξουσιοδότηση / Γνήσιο Υπογραφής
                </a>
              </div>
            </li>
            <li class="govuk-grid-column-one-half-from-tablet govgr-trending__list-item">
              <div class="govgr-trending__entry">
                <span class="govgr-trending__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" class="govgr-trending__icon-svg" focusable="false">
                    <path d="M5 12h12" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
                <a class="govuk-link govgr-trending__link" href="#">
                  Δημιουργία ηλεκτρονικής επισημείωσης της Χάγης (e-apostille)
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section class="govgr-categories" aria-labelledby="categories-heading">
          <h2 class="govgr-categories__heading" id="categories-heading">Κατηγορίες Υπηρεσιών</h2>
          <p class="govuk-body govgr-categories__intro">
            11 κατηγορίες με 2244 υπηρεσίες για να βρείτε ακριβώς αυτό που ψάχνετε.
          </p>

          <div class="govuk-grid-row">
            <div class="govuk-grid-column-two-thirds">
              <ul class="govuk-list govuk-list--spaced govgr-categories__list">
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Γεωργία και κτηνοτροφία</a>
                  <p class="govuk-body govgr-categories__description">
                    Διαδικασίες, επιδοτήσεις και αποζημιώσεις για την γεωργική, κτηνοτροφική ή αλιευτική σας δραστηριότητα.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Δικαιοσύνη</a>
                  <p class="govuk-body govgr-categories__description">
                    Νομοθεσία, δικαστικό σύστημα, έκδοση εγγράφων κ.ά.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Εκπαίδευση</a>
                  <p class="govuk-body govgr-categories__description">
                    Διαδικασίες για την εγγραφή και φοίτηση σε όλες τις εκπαιδευτικές βαθμίδες.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Επιχειρηματική δραστηριότητα</a>
                  <p class="govuk-body govgr-categories__description">
                    Υπηρεσίες για να ξεκινήσετε και να μεγαλώσετε την επιχείρησή σας.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Εργασία και ασφάλιση</a>
                  <p class="govuk-body govgr-categories__description">
                    Εργαλεία και υπηρεσίες για την αναζήτηση εργασίας, την ασφάλιση και τη συνταξιοδότησή σας.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Οικογένεια</a>
                  <p class="govuk-body govgr-categories__description">
                    Διαδικασίες και έκδοση εγγράφων για όλα τα γεγονότα της ζωής σας.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Περιουσία και φορολογία</a>
                  <p class="govuk-body govgr-categories__description">
                    Οδηγίες και υπηρεσίες για τη διαχείριση της περιουσίας σας και τη φορολογία.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Πολίτης και καθημερινότητα</a>
                  <p class="govuk-body govgr-categories__description">
                    Υπηρεσίες για τις επαφές σας με το δημόσιο και την παραμονή των πολιτών τρίτων χωρών.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Πολιτισμός, αθλητισμός και τουρισμός</a>
                  <p class="govuk-body govgr-categories__description">
                    Υπηρεσίες πολιτιστικού περιεχομένου, διαδικασίες για εσωτερικό και εξωτερικό τουρισμό.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Στράτευση</a>
                  <p class="govuk-body govgr-categories__description">
                    Διαδικασίες για τη θητεία και τις στρατιωτικές σχολές, υπηρεσίες για ένστολους και απόστρατους.
                  </p>
                </li>
                <li class="govgr-categories__list-item">
                  <a class="govuk-link govgr-categories__link" href="#">Υγεία και πρόνοια</a>
                  <p class="govuk-body govgr-categories__description">
                    Διαδικασίες για την ατομική και δημόσια υγεία, υπηρεσίες για φάρμακα, νοσηλεία και επιδόματα.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
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

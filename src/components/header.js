export function initHeader(containerId, serviceName = "Όνομα Υπηρεσίας") {
  const headerHTML = `
  <header class="govuk-header" data-module="govuk-header">
    <div class="govuk-header__container govuk-width-container">
      <div class="govuk-header__logo">
        <a href="/" class="govuk-header__link govuk-header__link--homepage">
          <span class="govuk-header__logotype">
            <img src="gov_gr.svg" alt="gov.gr logo" class="govuk-header__logotype-image">
            <span class="govuk-header__logotype-text">
              gov.gr
            </span>
          </span>
        </a>
      </div>
      <div class="govuk-header__content">
        <a href="/" class="govuk-header__link govuk-header__link--service-name">
          ${serviceName}
        </a>
      </div>
    </div>
  </header>
  `;

  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = headerHTML;
  }
}
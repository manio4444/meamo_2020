{block name='header_top'}
  <div class="header-navigation meamo-wrapper">
    <div class="header-navigation__desktop">

        <div class="header-logo">
          {include file='_partials/logo.tpl' page_name=$page.page_name urls=$urls shop=$shop}
        </div>

        {hook h='displayNav1'}

    </div>

    <div class="header-navigation__mobile">

      <div class="header-logo">
        {include file='_partials/logo.tpl' page_name=$page.page_name urls=$urls shop=$shop}
      </div>

      <div class="header-navigation__hamburger">
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </div>

      <div class="mobile-overlay">
        {hook h='displayMobile1'}
        <i class="material-icons mobile-overlay__close header-navigation__hamburger">close</i>
      </div>

    </div>
  </div>
{/block}

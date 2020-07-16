<div class="header-search header-navigation__right-item" data-search-controller-url="{$search_controller_url}">

	<a href="#" data-search-overlay>
		<i class="material-icons search header-search__icon">&#xE8B6;</i>
		<span class="for-mobile-overlay">{l s='Search' d='Shop.Theme.Catalog'}</span>
	</a>
	<form method="get" action="{$search_controller_url}" class="search-overlay">
		<i class="material-icons search-overlay__close" data-search-overlay>close</i>

		<input type="hidden" name="controller" value="search">
		<input
			type="text"
			name="s"
			value="{$search_string}"
			class="search-overlay__input"
			placeholder="{l s='Search our catalog' d='Shop.Theme.Catalog'}"
			aria-label="{l s='Search' d='Shop.Theme.Catalog'}"
		>

		<button type="submit" class="search-overlay__submit meamo-button">
      <span>{l s='Search' d='Shop.Theme.Catalog'}</span>
		</button>
	</form>
</div>
<!-- /Block search module TOP -->

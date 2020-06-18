{extends file='layouts/layout-categories-top.tpl'}

{block name='breadcrumb'}{/block}
{block name="categories_top"}{/block}

{block name="content_wrapper"}
  {if $cms.id == 4} {* about us *}
  about
  {else}
  {/if}
{/block}

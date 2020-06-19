{extends file='layouts/layout-categories-top.tpl'}

{block name='breadcrumb'}{/block}
{block name="categories_top"}{/block}

{block name="content_wrapper"}
  {if $cms.id == 4} {* about us *}
    {include file='cms/custom/aboutus.tpl'}
  {else}
  {block name="content"}
    <p>Hello world! This is HTML5 Boilerplate.</p>
  {/block}
  {/if}
{/block}

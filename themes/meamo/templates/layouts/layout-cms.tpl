{extends file='layouts/layout-categories-top.tpl'}

{block name='breadcrumb'}{/block}
{block name="categories_top"}{/block}

{block name="content_wrapper"}
  {if $cms.id == 4} {* about us *}
    {include file='cms/custom/aboutus.tpl'}
  {else if $cms.id == 7} {* contact *}
    {include file='cms/custom/contact.tpl'}
  {else if $cms.id == 6} {* lookbook *}
    {include file='cms/custom/lookbook.tpl'}
  {else if $cms.id == 8} {* wishlist *}
    {include file='cms/custom/wishlist.tpl'}
  {else}
  {block name="content"}
    <p>Hello world! This is HTML5 Boilerplate.</p>
  {/block}
  {/if}
{/block}

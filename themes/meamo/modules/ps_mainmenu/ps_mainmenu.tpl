{function name="menu" nodes=[] depth=0 parent=null}
    {if $nodes|count}
      <ul>
        {foreach from=$nodes item=node}
            <li class="header-mainmenu__element {$node.type}{if $node.current} current {/if}" id="{$node.page_identifier}">
              <a
                class=""
                href="{$node.url}"
                {if $node.open_in_new_window} target="_blank" {/if}
              >
                {$node.label}
              </a>
            </li>
        {/foreach}
      </ul>
    {/if}
{/function}

<nav class="header-mainmenu">
  {menu nodes=$menu.children}
</nav>

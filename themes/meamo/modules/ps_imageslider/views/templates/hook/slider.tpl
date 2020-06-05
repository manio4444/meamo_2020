{if $homeslider.slides}
  <section class="home_slider">
    <ul
      class="home_slider_list home_slider--init desktop"
      role="listbox"
      data-interval="{$homeslider.speed}"
      data-wrap="{(string)$homeslider.wrap}"
      data-pause="{$homeslider.pause}"
    >
      {foreach from=$homeslider.slides item=slide name='homeslider'}
        <li
        class="element"
        role="option"
        aria-hidden="{if $smarty.foreach.homeslider.first}false{else}true{/if}"
        style="background-image: url({$slide.image_url});"
        >
          <a href="{$slide.url}">
            <figure>
              {if $slide.title || $slide.description}
                <figcaption class="caption">
                  <h2 class="home_slider__title">{$slide.title}</h2>
                  <div class="home_slider__sub">{$slide.legend}</div>
                  {* <div class="home_slider__txt">{$slide.description nofilter}</div> *}

                </figcaption>
              {/if}
            </figure>
          </a>
        </li>
      {/foreach}
    </ul>
  </div>
{/if}

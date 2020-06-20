<style media="screen">
.meamo-contact__contact-section::before {
  content: '{l s='contact' d='Shop.Theme.Contact_page'}';
}
</style>

<section class="meamo-contact">

  <div class="meamo-contact__contact-section"> {* same code as on homepage *}
    <h1 class="meamo-contact__title meamo-title-normal">{l s='Stay in touch' d='Shop.Theme.Contact_page'}</h1>
    <p class="meamo-contact__txt">{{l s='Contact text' d='Shop.Theme.Contact_page'}|nl2br nofilter}</p>
    <p class="meamo-contact__email">{l s='Email' d='Shop.Theme.Contact_page'}</p>
    <p class="meamo-contact__phone">{l s='Phone' d='Shop.Theme.Contact_page'}</p>
    <p class="meamo-contact__adress">{{l s='Adress' d='Shop.Theme.Contact_page'}|nl2br nofilter}</p>
  </div>

{widget name="contactform"}

</section>

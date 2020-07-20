<div class="tabs available-mailalert">
    <form>
        <div class="js-mailalert available-mailalert__content" data-url="{url entity='module' name='ps_emailalerts' controller='actions' params=['process' => 'add']}">
            {if isset($email) AND $email}
                <input class="form-control" type="email" placeholder="{l s='your@email.com' d='Modules.Mailalerts.Shop'}"/><br />
            {/if}
            {if isset($id_module)}
                {hook h='displayGDPRConsent' id_module=$id_module}
            {/if}
            <input type="hidden" value="{$id_product}"/>
            <input type="hidden" value="{$id_product_attribute}"/>
            <button class="btn btn-primary available-mailalert__btn" type="submit" rel="nofollow" onclick="return addNotification();">{l s='Notify me when available' d='Modules.Mailalerts.Shop'}</button>
            <span style="display:none;padding:5px"></span>
        </div>
    </form>
</div>


// require a number for shipping address field 1
function requireHousenumber() {
    $('[data-step="contact_information"] form').on('submit', function() {
        const addressElement = $(this).find('#checkout_shipping_address_address1');
        const addressValue =  addressElement.val();
        const match = addressValue.match(/\d+/g);

        if (match != null) {
            return true;
        } else {
            const fieldElement = addressElement.closest('.field');
            fieldElement.addClass('field--error')
            if ( fieldElement.find('p.field__message-custom').length == 0) {
                fieldElement.append('<p class="field__message field__message-custom field__message--error">Please add a house number</p>');
            };
        return false;
        }
    });
}

// Replace any HTML on the Shipping costs by 'Free'
function updateShippingCostsLabel() {
  if($(window).width() > 500){
     $('.section--shipping-method #main-header').html("<span style='font-size: 14px; font-weight: 600;'>Please be aware that shipping times might be affected because of the volume of sales. "+
              "</span><br><br>Shipping"+
              " method");

  } else {
  $('.section--shipping-method #main-header').html("Shipping method"+
              "<br><span style='font-size: 12px;'>Please be aware that shipping times might be"+
              "  affected because of the volume of sales</span>");
    /* $('.section.section--reductions.hidden-on-desktop').remove(); */
  }
}
/*
 * On page init and change event
 */
(function($) {
$(document).on('page:load page:change', function() {
    
    requireHousenumber();
    updateShippingCostsLabel();
    switch (Shopify.Checkout.step) {
        case 'contact_information':
            
            break;
    
        case 'shipping_method':
            break;
    
        case 'payment_method':
            break;
    
        default:
            break;
      }
});
})(Checkout.$);
// Skip the shipping method step
// if ( $('[data-step="shipping_method"] form').length > 0 ) {
//     setTimeout(function() {
//         $('[data-step="shipping_method"] form').submit();
//     }, 300);
// }

// JavaScript Document

jQuery(document).ready(function () {

 jQuery('#form').validate({
         rules: {
                      name: {
						  required:true
						},
                      tel: {
                          required: true
                      }
                  },
                  messages: {
                      name: {
					     required: "Введите Ваше имя"
					  },
                      tel: {
					     required: "Введите Ваш номер телефона"
					 }
                  },
         submitHandler: function(form){			
  
  var name = jQuery('#form').find('input[name="name"]').val();
  var phone = jQuery('#form').find('input[name="phone"]').val();
  var email = jQuery('#form').find('input[name="email"]').val();
  var textarea = jQuery('#form').find('input[name="textarea"]').val();
  
  jQuery.post(
  "/contact.php",
  {
  name: name,
  tel: tel,
  email: email,
  textarea: textarea
  }),
        jQuery('#modal_window').animate({opacity: 'show'}, 400);
		setTimeout(function(){
  			jQuery('#modal_window').animate({opacity: 'hide'}, 400);
		},3000);
	jQuery('#form input[type="text"]').val('');
	jQuery('#form input[type="phone"]').val('');
	jQuery('#form input[type="email"]').val('');
	jQuery('#form input[type="textarea"]').val('');
         } 
      });
	  
	  
	  
	  
	  
	  
	 
});	



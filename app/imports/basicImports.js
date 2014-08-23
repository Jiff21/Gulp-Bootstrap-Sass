/**********************************************************************
* Include for the header using AJAX.  Hold till you know enough BE.
***********************************************************************/

$.ajax({
  url: '/imports/nav.html',
  // data: data,
  error: function(error) {
  	 console.log('ERROR No Nav Data', error);
  },

  success: function(fileData) {
	$('.navPlaceholder').html(fileData);
  },

  dataType: 'html'

});

/**********************************************************************
* Include for the footer using AJAX. 
***********************************************************************/

$.ajax({
  url: '/imports/footer.html',
  // data: data,
  error: function(error) {
  	 console.log('ERROR No Footer Data:::: ', error);
  },

  success: function(fileData) {
	$('.footerPlaceholder').html(fileData);
  },

  dataType: 'html'

});

/**********************************************************************
* Include for base Google Analtics
***********************************************************************/

$.ajax({
  url: '/imports/GA.html',
  // data: data,
  error: function(error) {
  	 console.log('ERROR No Footer Data:::: ', error);
  },

  success: function(fileData) {
	$('.GoogleAnalytics').html(fileData);
  },

  dataType: 'html'

});



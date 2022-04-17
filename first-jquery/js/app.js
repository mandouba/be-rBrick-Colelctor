$(document).ready(function() {
    // all of your app's js goes within this function
     
    const newHomes = [
        {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
        {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
        {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
        {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
      ];

  
  $('#add-home').removeClass('btn-danger').addClass('btn-success')
  $('h1').addClass('text-center')

  const isStyled = $('h1').hasClass('jumbotron')

  //returns a jQuery set of a new DOM element
  const $newLink = $( '<br><br><a id="zillow-link" href="http://www.zillow.com">Visit Zillow.com</a>' );

// $('body').append($newLink);
$newLink.appendTo('body'); 

$('#zillow-link').attr("target", "_blank"); // new tab when open link

// $('#add-home').on('click', function(evt) {
//     console.log(evt)
// } same as below

// 

// $('#add-home').click(function(evt) {
//     console.log(evt)
//         console.log(evt, this)
// }) //add event listenr to an element on the page  


$('body').on('click', 'button.btn-danger', function() {
    console.log('danger button clicked')
}) // same way to add event listner but with dif syntax 


// $('#homes tbody').on('click', 'button', function() {
//     $(this).closest('tr').remove();
//   }); // makes remove button work 

  $('#homes tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000, function() {
      // now that the tr is hidden, let's completely remove it from the DOM
      $(this).remove();


    });
  });
});


  $('button#add-home').click('button', function() {
      const newHome = newHome.pop()
    console.log(newHome, newHomes)
    })



import $ from 'jquery';
window.$ = $;
window.jQuery = $;

const token = 'your access token'; // learn how to obtain it below
const userName = 'rudrastyh'; // rudrastyh - my username :)
const num_photos = 4; // how much photos do you want to get

$.ajax({
  url: 'https://api.instagram.com/v1/users/search',
	dataType: 'jsonp',
	type: 'GET',
  data: {access_token: token, q: userName}, // actually it is just the search by username
	success: data => {
 		console.log(data);
		// for( x in data.data ){
		// 	$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
		// 	// data.data[x].images.thumbnail.url - URL of image 150х150
		// 	// data.data[x].images.standard_resolution.url - URL of image 612х612
		// 	// data.data[x].link - Instagram post URL
		// }
	},
	error: data => {
		console.log(data); // send the error notifications to console
	}
});

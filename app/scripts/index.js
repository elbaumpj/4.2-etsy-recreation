var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');
var url = "https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=chunky+yarn&includes=Images,Shop&sort_on=score";


var source = $('#photo-tiles').html();
var template = handlebars.compile(source);



function run(data) {
    var products = data.results;
    console.log(products);
  _.each(products, function(productTile){
      $('#products-container').append(template(productTile));
 });
}


fetchJSONP(url, run);






















//JSON request

function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

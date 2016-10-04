var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');

var source = $('#photo-album').html();
var template = handlebars.compile(source);

console.log(template);

var context = {
  'title': 'Cat Album',
  'albumNumber': '11'
};

$('#album-container').append(template(context));
$('#album-container').append('testing');

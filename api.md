---
layout: page
title: API
---

<div id="msg"></div>

You can try the search system in your own project right now!

The OSMNames open-source project provides raw place data in an easy to index form.
Klokan Technologies GmbH team has developed a basic search system providing responses for queries in a form of structured JSON data.

## Autocomplete REST API

### Search for autocomplete

 `/q/<query>.js`

This endpoint returns 20 results matching the `<query>`.

### Country specific search for autocomplete

`/<country_code>/q/<query>.js`

This endpoint returns 20 results matching the `<query>` within a specific country, identified by the `<country_code>` (lowercase ISO 3166 Alpha-2 code).

The JavaScript Autocomplete components submitting AJAX queries to the server is open-source as well.

## Nominatim compatible API

The open-source OSMNames SphinxSearch system comes with an (incomplete implementation) of the API compatible with Nominatim, to simplify migration of the existing web and mobile clients.

## Get your free key

This free map place search service is available only for a non-commercial use and demonstration purposes.

Get your free access key:

<form method="post" action="https://maps.klokantech.com/?next=http://osmnames.org/api" class="padt-1">
  <input type="email" name="email" class="input-text inline" placeholder="Your email">
  <input type="hidden" name="product" value="OSMNames">
  <input type="text" name="url" class="hidden" placeholder="Leave this empty">
  <input type="submit" value="Send" class="btn-gray-dark">
</form>

<script>
  var msg = getParam('msg');
  if(msg != null){
    var msgEl = document.getElementById('msg');
    msgEl.className = 'message success';
    msgEl.innerHTML = msg;
  }

  function getParam(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
</script>

## Autocomplete JavaScript component

You can easily create OSMNames autocomplete using prepared JavaScript component:

{% highlight html %}
<html>
  <head>
    <script src="https://osmnames.org/api/v1/autocomplete.js"></script>
    <link href="https://osmnames.org/api/v1/autocomplete.css" rel="stylesheet" />
  </head>
  <body>
    <input autocomplete="off" id="search" type="text" />
    <script>
      var autocomplete = new kt.OsmNamesAutocomplete(
          'search', 'https://search.osmnames.org/', '{API_KEY}');
      // Replace {API_KEY} with your own key from https://osmnames.org/api

      autocomplete.registerCallback(function(item) {
        alert(JSON.stringify(item, ' ', 2));
      });
    </script>
  </body>
</html>
{% endhighlight %}

## Install the API server on your own computer

Please follow the tutorial in the [Documentation](http://osmnames.org/docs/) section.

Contact us if you are interested in a production deployment of the open source stack on your own hardware infrastructure.

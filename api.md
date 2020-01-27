---
layout: page
title: API
---

You can try the search system in your own project right now!

The OSMNames open-source project provides raw place data in an easy-to-index form.
Klokan Technologies GmbH team has developed a basic search system providing responses for queries in a form of structured JSON data.

## Autocomplete REST API

### Search for autocomplete

 `/q/<query>.js?key=<key>`

This endpoint returns 20 results matching the `<query>`.

### Country specific search for autocomplete

`/<country_code>/q/<query>.js?key=<key>`

This endpoint returns 20 results matching the `<query>` within a specific country, identified by the `<country_code>` (lowercase ISO 3166 Alpha-2 code).

The JavaScript Autocomplete components submitting AJAX queries to the server is open-source as well.

## Nominatim compatible API

The open-source OSMNames SphinxSearch system comes with an (incomplete implementation) of the API compatible with Nominatim, to simplify migration of the existing web and mobile clients.

## Autocomplete JavaScript component

You can easily create OSMNames autocomplete using the prepared JavaScript component:

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
          'search', 'https://api.yourdomain.com/');

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

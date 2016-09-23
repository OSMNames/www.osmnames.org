---
layout: page
title: API
---

You can try the search system in your own project right now!

The OSMNames open-source project provides raw place data in an easy to index form.
Klokan Technologies GmbH team has developed a basic search system providing responses for queries in a form of structured JSON data.

## Autocomplete REST API

### Search for autocomplete

 `/q/<query>.js`

This endpoint returns 20 results matching the `<query>`.

### Country specific search for autocomplete 

`/<country_code>/q/<query>.js`

This endpoint returns 20 results matching the `<query>` within a specific country, identified by the `<country_code` (lowercase ISO 3166 Alpha-2 code).

The JavaScript Autocomplete components submitting AJAX queries to the server is open-source as well.

## Nominatim compatible API

The open-source OSMNames SphinxSearch system comes with an (incomplete implementation) of the API compatible with Nominatim, to simplify migration of the existing web and mobile clients.

<!---
## Get your free key

This free map place search service is available only for a non-commercial use and demonstration purposes.

Get your free access key:

<form method="post" action="" class="padt-1">
  <input type="email" name="email" class="input-text inline" placeholder="Your email">
  <input type="submit" value="Send" class="btn-gray-dark">
</form>
-->

## Install the API server on your own computer

Please follow the tutorial in the [Documentation](http://osmnames.org/docs/) section.

Contact us if you are interested in a production deployment of the open source stack on your own hardware infrastructure.

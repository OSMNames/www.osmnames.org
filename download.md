---
layout: page
title: Download
---

## Data

Here you can download the pre-generated data with over 21 million place names for the whole planet.
Feel free to use it in your next project, your website, company product or just for your private research.

The file is available under the [Open Database License](https://tldrlegal.com/license/odc-open-database-license-(odbl)), the same license as the original [OpenStreetMap](https://www.openstreetmap.org/copyright) data.

<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.10/clipboard.min.js" charset="utf-8"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.2.1/hint.min.css" />
<div id="planet-list" class="mary-3 row">
	<div class="col12 border-primary">
		<div class="col4" onclick="location.href='https://github.com/OSMNames/OSMNames/releases/download/v2.0.3/planet-latest_geonames.tsv.gz'">
			<b class="big">Full Planet</b>
		</div>
		<div class="col2" onclick="location.href='https://github.com/OSMNames/OSMNames/releases/download/v2.0.3/planet-latest_geonames.tsv.gz'">
			1.33 GB
		</div>
		<div class="col6 clipboard center">
			<input id="world" class="clipboard-input" value="https://github.com/OSMNames/OSMNames/releases/download/v2.0.3/planet-latest_geonames.tsv.gz">
			<button class="btn clipboard-button" data-clipboard-target="#world" onclick="setHint(this, 'Copied!')" onmouseout="setHint(this, 'Copy to clipboard')">
			    Copy
			</button>
		</div>
	</div>
</div>
<script>
  // instantiate download clipboard
  new Clipboard('.clipboard-button');
</script>

## Data extract for one country

It is pretty easy to filter the records for a country of your choice from the downloaded planet dump. Use a command like:

```
$ zcat planet-latest.tsv.gz | awk -F '\t' -v OFS='\t' 'NR == 1 || $16 == "ch"' > switzerland.tsv
```

Where "ch" is the 2 letter country code according to ISO-3166, in this case for Switzerland.
Similarly, it is possible to extract only records of certain types or classes, as well as setting a filter on another column.


## Data extract by bounding box

Because the data contains lon/lat columns as well as bounding boxes (west, south, east, north), you can also extract all records by geographical filters.

To create an extract of all place names in the area of Zurich in Switzerland you can run a command like:

```
zcat planet-latest.tsv.gz | awk -F '\t' -v OFS='\t' 'NR == 1 || ($8 > 47.225 && $8 < 47.533 && $7 > 8.275 && $7 < 8.800)' > zurich_switzerland.tsv
```

To find the relevant bounds check the [Bounding box tool](http://boundingbox.klokantech.com/) or list with [city](https://github.com/osm2vectortiles/osm2vectortiles/blob/master/src/create-extracts/city_extracts.tsv) and [country](https://github.com/osm2vectortiles/osm2vectortiles/blob/master/src/create-extracts/country_extracts.tsv) boundaries.

## Data format details

The data is generated in the TSV format, which is a tab separated spreadsheet file with one record per row. The first row contains the name of the columns. All characters are utf-8 encoded. The files distributed with a release are compressed using gzip. We suggest you to use gunzip or zcat to extract the raw text.

The columns have a fixed order:

```
name 				the name of the feature (default language is en, others available(de,es,fr,ru,zh))
alternative_names	all other available and distinct names separated by commas
osm_type			the osm type of this feature (node, way, relation)
osm_id				
class				
type
lon
lat
place_rank			rank from 1-30 ascending depending on the type and class
importance			importance [0.0-1.0] depending on wikipedia if available otherwise just the ranking
street 				
city
county
state	
country	
country_code		ISO-3166 2 letter country code
display_name		the display name representing the hierarchy
west				bbox
south				bbox
east				bbox
north				bbox
wikidata			the wikidata associated with this feature
wikipedia 			the wikipedia URL associated with this feature
```

# Software

The open-source code for generating the data is available in the repository <a href="https://github.com/osmnames/osmnames">https://github.com/osmnames/osmnames</a>

The Place Search API used in this website is implemented with the open-source project available at <a href="https://github.com/klokantech/osmnames-sphinxsearch">https://github.com/klokantech/osmnames-sphinxsearch</a>.

---
layout: page
title: Download
---

# Downloads

Here you can download the pre-generated data with over 21 million place names for the whole planet.
Feel free to use it in your next project, your website, company product or just for your private research.

The file is available under the [Open Database License](https://tldrlegal.com/license/odc-open-database-license-(odbl)), the same license as the original [OpenStreetMap](https://www.openstreetmap.org/copyright) data.

<div id="planet-list">
	<div class="col12 download-item">
		<div class="col4 download-title" onclick="location.href='https://github.com/OSMNames/OSMNames/releases/download/v1.1/planet-latest.tsv.gz'">
			Full Planet
		</div>
		<div class="col2" onclick="location.href='https://github.com/OSMNames/OSMNames/releases/download/v1.1/planet-latest.tsv.gz'">
			1.46 GB
		</div>
		<div class="col6 clipboard">
			<input id="world" class="clipboard-input" value="https://github.com/OSMNames/OSMNames/releases/download/v1.1/planet-latest.tsv.gz">
			<button class="clipboard-button hint--bottom hint--rounded" data-clipboard-target="#world" onclick="setHint(this, 'Copied!')" onmouseout="setHint(this, 'Copy to clipboard')">
			    <img src="/img/clipboard-black.svg" class="clipboard-img" alt="Copy to clipboard">
			</button>
		</div>
	</div>
</div>

## Create your own country extract

It is pretty easy to filter from the downloaded planet dump the records for a country of your choice. Use a command like:

```
$ zcat planet-latest.tsv.gz | awk -F '\t' 'NR == 1 || $16 == "ch"' > extract.tsv
```

Where "ch" is 2 letter country code according ISO-3166, in this case for Switzerland.
Similarly, it is possible to extract only records of certain type or class, of set a filter on another column.

## Data format details

The data are generated in the TSV format - a tab separated spreadsheet file with one record per row. First row contains the name of columns. All characters are utf-8 encoded. The files distributed with a release are compressed with gzip. Use gunzip or zcat to extract the raw text.

The columns has a fixed order:

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
country_code		ISO-3166 2-letter country code
display_name		the display name representing the hierarchy
west				bbox
south				bbox
east				bbox
north				bbox
wikidata			the wikidata associated with this feature
wikipedia 			the wikipedia URL associated with this feature
```

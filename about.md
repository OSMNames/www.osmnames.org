---
layout: page
title: About the project
description: OSMNames is a free & open-source geocoding project. It consists of a database of place names and software for finding places with ranking, bbox, and hierarchy.
---

OSMNames project offers a downloadable list of place names derived from the OpenStreetMap database with easy installation, transparent licensing, and clean code.

## A database with a simple format

Every gazetteer record comes with the coverage area (bounding box), administrative hierarchy, several identifiers, alternative names, and precalculated rank derived from related Wikipedia page popularity.

The TSV (tab-separated value) data format simplifies the handling of the community-curated data with over 21 million streets, towns, cities, and administrative units from every country all over the world. A complete compressed dump has only about 1.5 gigabytes.

## Nominatim geocoding alternative

The dataset is optimized for indexing by fulltext search engines (such as SphinxSearch or ElasticSearch). It can power a geocoding service similar to the open-source Nominatim that served as a reference implementation, especially regarding the hierarchy of places, bbox, and ranking.

## Place Search API

The OSMNames data set was optimized and tested to feed the place search system of MapTiler AG, Switzerland, which allows to search for a geographic location name and zoom a map to the proper position. The search system is available under an open-source license and can be easily installed on a custom server completely free of charge.

## Existing limits and future development

This initial release of the OSMNames project provides only place names for a basic search of street names, towns, cities, and other administrative units. It can be extended in the future with other place types like lakes, mountain names, and even POIs.

An enhancement with complete postal addresses (house numbers and zip codes) is also possible but will need further research.

Right now, the data is always pre-generated to simplify deployment and scalability. You could also use the same fulltext search indexing system and ranking against a PostgreSQL database with nearly live updates.

## Community

The original OSMNames open-source project generating the dataset from OpenStreetMap is a result of the work of a semester thesis (Andreas Egloff) from the University of Applied Sciences Rapperswil, Switzerland, and was done in cooperation with MapTiler AG. The company team has developed the open-source search system with autocomplete (instant search) functionality.

Anybody can reuse the open-source software, customize the data and adapt our workflows. We hope the community will contribute back and help us improve this database.

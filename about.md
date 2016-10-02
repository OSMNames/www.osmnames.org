---
layout: page
title: About the project
---

OSMNames project offers downloadable list of place names derived from OpenStreetMap database with a easy  installation, clear licensing and clear code.

## A database with a simple format

Every gazetteer record comes with the coverage area (bounding box), administrative hierarchy, several identifiers, alternative names and precalculated rank derived from related Wikipedia page popularity.

The TSV (tab separated value) data format simplifies handling of the community curated data with over 21 million streets, towns, cities and administrative units from every country all over the world. Complete compressed dump has only about 1.5 gigabytes.

The dataset is optimized for indexing by fulltext search engines (such as SphinxSearch or ElasticSearch) and can power a geocoding service similar to the open-source Nominatim, which served as a reference implementation, especially regarding hierarchy of places, bbox and ranking.

## Place Search API

The OSMNames data set was optimized and tested to feed the place search system of Klokan Technologies GmbH, Switzerland, which allows to search for a geographic location name and zoom a map to the right position. The search system is available under an open-source license and can be easily installed on a custom server completely free of charge.

## Existing limits and future development

This initial release of OSMNames project provides only place names for a basic search of street names, towns, cities and other administrative units. It can be extended in future with other place types like lake or mountain names and even with POIs. 

An enhancement with complete postal addresses (house numbers and zip codes) is also possible but will need futher research.

Right now, the data is always pre-generated to simplify deployment and scalability. The same fulltext search indexing system and ranking could alsoe be used against a PostgreSQL with nearly live updates.

## Community

The original OSMNames open-source project generating the dataset from OpenStreetMap is a result of the work of a semester thesis (Andreas Egloff) from the University of Applied Sciences Rapperswil, Switzerland, and was done in cooperation with Klokan Technologies GmbH. The company team has developed the open-source search system with autocomplete (instant search) functionality.

Anybody can reuse the open-source software, customize the data and adapt our workflows. We hope the community will contribute back and help us improve this database.

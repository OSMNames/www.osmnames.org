---
layout: page
title: About
---

# About the project

OSMNames project offers downloadable list of placenames derived from OpenStreetMap database.

## A simple data format

The TSV (tab separated value) data format simplifies handling of the community curated data with over 21 million streets, towns, cities and administrative units from every country all over the world. Complete compressed dump has only about 1.5 gigabytes.

Every gazetteer record comes with the coverage area (bounding box), administrative hierarchy, several identifiers, alternative names and precalculated rank derived from related Wikipedia page popularity.

## The fulltext indexing

The dataset is optimized for indexing by fulltext search engines (such as SphinxSearch or ElasticSearch) and can power a geocoding service similar to the open-source Nominatim, which served as a reference implementation for our geocoder, especially on hierarchy and ranking.

## Place Search API

These data were originally designed to feed the place search system of Klokan Technologies GmbH, Switzerland - which allows to search for a geographic location name and zoom a map to the right position. The system is available under an open-source license and can be easily installed on a custom server completely free of charge.

## Existing limits and future development

The first version of OSMNames project provides only place names for a basic search.
Search in POIs (points of interest), house numbers and complete addresses, with zip or postcodes may be implemented later on.
Right now data are always pre-generated to simplify deployment and scalability, but the same fulltext search indexing system and ranking can be used against a PostgreSQL with nearly live updates.

## Community

The original OSMNames open-source project generating the dataset from OpenStreetMap is a result of the work of students (especially of Andreas Egloff) from the University of Applied Sciences Rapperswil, Switzerland and was done in cooperation with Klokan Technologies GmbH. The company team has developed the open-source search system with autocomplete functionality.

Anybody can reuse the open-source software, customize the data and adapt our workflows. We hope the community will contribute back and help us improve the geocoding database.

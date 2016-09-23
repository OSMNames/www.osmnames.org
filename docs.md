---
layout: page
title: Documentation
---

The following tutorials explain how you can use the OSMNames project. Feel free to submit [an issue](https://github.com/osmnames/osmnames/issues), if you think something is missing.

# Install the Place Search API on your server

We have prepared a docker image OSMNames Search API, SphinxSearch and nginx.

Whole service can be run from the command-line with a single command:

Run with demo data (10 records only) only

```
docker run -d -p 80:80 klokantech/osmnames-sphinxsearch
```

You can attach your file `data.tsv`, which has to be located in the internal path `/data/input/data.tsv`:

```
docker run -d \
    -v /path/to/folder/data.tsv:/data/input/ \
    -p 80:80 \
    klokantech/osmnames-sphinxsearch
```

This file will be indexed on the first run or if index files are missing.

You can specify path for index folder as well:

```
docker run -d \
    -v /path/to/index/folder/:/data/index/ \
    -v /path/to/data/folder/:/data/input/ \
    -p 80:80 \
    klokantech/osmnames-sphinxsearch
```

Or attach a path with the following folder structure:

```
/path/to/folder/
    - input/
        - data.tsv
    - index/
```

directly with simple command:

```
docker run -d -v /path/to/folder/:/data/ -p 80:80 klokantech/osmnames-sphinxsearch
```

# Generate the data from raw OSM Planet

### Get Started

You need a complete OSM PBF data dump either from a [country extract](http://download.geofabrik.de/index.html) or of the [entire world](http://planet.osm.org/).
Download the data and put it into the `data` directory.

```bash
wget --directory-prefix=./data http://download.geofabrik.de/europe/switzerland-latest.osm.pbf
```

Alternatively there is a docker-compose, just edit FILE_URL in download-pbf.sh accordingly

```bash
docker-compose run download-pbf
```

Now we need to set up the database and import the data using the `import-osm` Docker container.

```bash
# This will automatically initialize the database
docker-compose up -d postgres
```

```bash
# Import additional wikipedia data to the ./data folder
docker-compose run import-wikipedia
```

Create the database schema

```bash
docker-compose run schema
```

Import the pbf file from the data folder

```bash
# Import the OSM data dump from the ./data folder
docker-compose run import-osm
```


We can now export the ranked geonames and their geometries.

```bash
docker-compose run export-osmnames
```

### Components

The different components that attach to the `postgres` container are all located in the `src` directory of OSMNames.

| Component         | Description
|-------------------|--------------------------------------------------------------
| postgres          | PostGIS data store for OSM data and to perform noise analysis
| download-pbf      | automatically downloads the pbf file 
| import-wikipedia  | Imports wikipedia data for more accurate importance calculation
| import-osm        | Imposm3 based import tool with custom mapping to import selective OSM into the database and reconstruct it as GIS geometries, handles indexing and hierarchy reconstruction
| export-osmnames   | Export names and their bounding boxes to TSV datasets
| schema            | Contains views, tables, functions for the schema


For more details please read the complete documentation of the OSMNames project at http://osmnames.readthedocs.io/

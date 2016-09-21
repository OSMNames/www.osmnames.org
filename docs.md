---
layout: page
title: Docs
---

# Documentation

The following tutorials explain how you can use the OSMNames project. Feel free to submit [an issue](https://github.com/osmnames/osmnames/issues), if you think something is missing.

# Install the Place Search API on your server

We have prepared a docker image OSMNames Search API, SphinxSearch and nginx.

Whole service can be run from the command-line with a single command:

Run with demo data (10 records only) only

```
docker run -d -p 80:80 klokantech/osmsphinx
```

You can attach your file `data.tsv`, which has to be located in the internal path `/data/input/data.tsv`:

```
docker run -d \
    -v /path/to/folder/data.tsv:/data/input/ \
    -p 80:80 \
    klokantech/osmsphinx
```

This file will be indexed on the first run or if index files are missing.

You can specify path for index folder as well:

```
docker run -d \
    -v /path/to/index/folder/:/data/index/ \
    -v /path/to/data/folder/:/data/input/ \
    -p 80:80 \
    klokantech/osmsphinx
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
docker run -d -v /path/to/folder/:/data/ -p 80:80 klokantech/osmsphinx
```

# Generate the data from raw OSM Planet

Please read the complete documentation for OSMNames at http://osmnames.readthedocs.io/


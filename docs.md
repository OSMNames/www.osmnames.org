---
layout: page
title: Documentation
---

The following tutorials explain how you can use the OSMNames project. Feel free to submit [an issue](https://github.com/osmnames/osmnames/issues) if you think something is missing or does not run as it should.

# Install the OSMNames Search on your computer

The fastest way how to run the OSMNames geocoding service on your computer is to use Docker, which provides a container with all the software components installed in Debian and already configured.

To start on your laptop/desktop with a graphical user interface, get the [Kitematic](https://kitematic.com/) and search for "osmnames-sphinxsearch". This downloads and starts the container OSMNames software along with sample data (top 100k places worldwide). The web service will run directly on your localhost.

To start the system from command-line (for example on a server) use this command instead:

```
docker run -d -p 80:80 klokantech/osmnames-sphinxsearch
```

In both cases - you can easily replace the sample data with your own file `data.tsv`, which has to be located in the container internal path `/data/input/data.tsv`:

```
docker run -d \
    -v /path/to/folder/data.tsv:/data/input/data.tsv \
    -p 80:80 \
    klokantech/osmnames-sphinxsearch
```

This file will be indexed on the first run or if index files are missing.
The generated indexes for the whole world are large (over 30GBytes) and time-consuming (about 45minutes) to create. But the process is done only once.

You can specify a path for the index folder on your computer as well:

```
docker run -d \
    -v /path/to/index/folder/:/data/index/ \
    -v /path/to/data/folder/:/data/input/ \
    -p 80:80 \
    klokantech/osmnames-sphinxsearch
```

An even easier alternative is to create a data folder on your computer with the following structure:

```
/path/to/folder/
/path/to/folder/input/
/path/to/folder/input/data.tsv
/path/to/folder/index/
```

and then directly use it with a simple command:
```
docker run -d -v /path/to/folder/:/data/ -p 80:80 klokantech/osmnames-sphinxsearch
```
or from Kitematic.

If you are not familiar with the docker and you want to directly install the project on Linux, then you can do that too of course.
The main search system is written in python (Flask) and requires the search engine (SphinxSearch). A step-by-step setup for Debian can be found here [here](https://github.com/klokantech/osmnames-sphinxsearch/blob/master/Dockerfile).

# Generate the data from raw OSM data

You can always [download](http://osmnames.org/download/) the prepared world data and filter it for your needs.

In case you want to improve, modify, regenerate or extend the data by yourself, you are welcome to do that.

The whole process is described in the manual available at [http://osmnames.readthedocs.io/](http://osmnames.readthedocs.io/) and in the [Getting started](https://github.com/OSMNames/OSMNames#get-started) section in the README.md.

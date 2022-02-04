## T-BAS v2.3 (January 2022)
*  Complete rewrite of T-BAS viewer code using a d3 Tree of Life example with ECMAScript 6 and d3 v.6
*  New viewer loads trees several times faster and can load trees with up to 30K tips
*  Changed click to select to all circles to give more precise clade selection
*  Changed T-BAS mailer from NCSU internal mailer to a gmail account


## T-BAS v2.2 (July 2020)

*  Updated multilocus placement to place unlimited number of loci
*  Converted file select boxes to upload files to drag and drop
*  Labeled partitions to select for placement with name of query files
*  Added FUNGuild report - a tool to assign ecological guilds
*  Added RDP classfier report
*  Moved T-BAS user login database to AWS for added security and accessibility

## T-BAS v2.1.1 (August 2019)
*  Convert all Python scripts from Python 2 to Python 3. There may be occasional bugs, but we will try to get any fixed as soon as possible.
*  Change all html templates to Bootstrap 4.3 which gives a slightly bolder look and a better responsive design
*  Add logout/login and register buttons to the navigation bar. Move login form html from index.php to login.php

## T-BAS v2.1 (2019)
*   Multilocus placement of unknown taxa sequences with user-customizable metadata on eleven included reference trees
*   Multilocus placement on user-uploaded reference tree, multilocus sequence alignments and metadata
*   Standardization of phylogenetic placement and metadata output using the extended PhyloXML format
*   Perform cumulative placement of unknown taxa sequences on reference tree
*   Pre-filtering and/or classification of unknown nrITS or 16S rDNA barcode sequences using the UNITE fungal nrITS database or SILVA bacterial database
*   Option to select from three phylogeny-based placement options: EPA, backbone constraint tree, and de novo phylogenetic reconstruction using RAxML
*   Option to select specific clades and perform phylogenetic inference across single or multiple alignments with RAxML or network inference using TCS and NetworkX
*   Color editor for synchronizing color-coded attributes across subtrees and networks
*   Display metadata as colorized outer rings in phylogenies
*   Display network graphs with node attributes
*   Save trees, networks and color legends as SVG, PNG or PDF files

## T-BAS v1 (2017)

*	Single-locus placement of unknown taxa sequences and user-customizable metadata on two included trees: fungi (Ascomycota) and bacteria
*	Single-locus placement on a user-provided reference tree, multilocus sequence alignments and metadata
*	Option to select from two phylogeny-based placement options: EPA and backbone constraint tree
*	Classification of unknown nrITS barcode sequences using the UNITE fungal nrITS database
*	Metadata displayed as colorized outer rings in phylogenies
*	Save trees and color legends as SVG, PNG or PDF files




* 2020-01-16
Create Placement Report from MEP file upload if no placement selected.

* 2020-01-02
Add button to TBAS called Save colors that writes edited colors to .mep file that will display edited colors when reused. Save edited .mep files to xml_archives as RUNID_edit.mep.gz.

* 2020-01-02
Hide links to vsearch and otus report until after submit button is clicked.

* 2019-12-10
Change name of XML with TBAS reults to .mep file (Metadata Enhanced PhyloXML). Create schema to validate .mep files and update the .mep XML so it will pass validation of schema.

* 2019-12-04
Change mouse wheel behaviour for rectangular layout from zoom to scroll. Zoom must be done with the +/- magnifier icon.

* 2019-12-04
Add CIPRES Status message to RAxML wall time info box.

* 2019-11-19
Update progam to create OTUs from QIIME pick_otus.py to use VSEARCH, an open source alternative to USEARCH. The motivation was to upgrade all scripts to Python 3 which does not work with pick_otus.py, however testing found that the results for VSEARCH were also more accurate.

* 2019-10-30
Add outgroup box for cifr phyloXML (.mep) upload.

* 2019-10-04
Switched PostgreSQL login database server from NCSU hosting to AWS.

* 2019-09-24
Add option to select wall time for RAxML.

* 2019-09-04
Add ability to calculate F-scores of placement accuracy for Order, Family, Genus and Species in addition to original default of Class.

* 2019-07-15
Add MSAViewer for viewing alignemts.

* 2019-06-28
Update Phylogeny(RAxML) to use results from Partition Finder.

* 2019-06-27
Add button PartitionFinder to run Partition Finder tool on selected clade.

* 2019-06-13
Create new Documentation and tutorials.

* 2019-06-06
Fix problem with some users getting user not logged in error by setting php session cookie parameters.

* 2019-05-09
Update BLAST UNITE filters to filter at taxon level one above for each tree.

* 2019-05-07
New Xylariales tree data.

* 2019-05-01
Re-write Update Attributes page to allow user to download csv of current attributes, edit, and upload for changes.

* 2019-04-29
Allow user to select tree download as phylip or nexus

* 2019-04-26
Add bands to rectangular display up to 12 bands

* 2019-04-16
Add small number to branch lengths to display trees submitted with zero branch length.

* 2019-03-22
Add report to show difference in metadata and tree names.

* 2019-03-16
Add Laboulbeniomycetes tree

* 2019-03-14
Add functionality to place on user submitted trees.

* 2019-03-13
Add option on Upload Tree page for user to customize the BLAST UNITE filter.

* 2019-03-05
Add link and page to submit a placement as a submitted tree.

* 2019-02-19
Add code to upload page to check user has permisison to place on selected tree and also update  table on the server to associate run number with placement tree. This data is checked when viewing a tree to ensure only users with permisison can view restricted trees.

* 2019-02-15
Update data for Rhizoctonia

* 2019-02-06
Add, update controls for font size and bootstrap font size

* 2019-02-04
Add toggle view bands 4-12

* 2019-01-29
Change Mafft version from MAFFT_TG to MAFFT_XSEDE

* 2019-01-29
Add zoom icon to rectangular layout

* 2019-01-14
Add 7th box for custom placement

* 2019-01-01
Update html on Upload Tree page

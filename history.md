* 2021-02-12
Fix IQ-TREE to work for proteins.

* 2021-02-10
Add MeShClust as an option for clustering.

* 2021-02-02
Add COVID-19 tree and a reports page with locus regular expressions to locate genes with the MSA viewer.

* 2021-01-20
Fix bug that caused partition finder page not to load.

* 2021-01-18
Fix 2 bugs in script used to submit trees. One the link was incorrect and the other removed characters from the name.

* 2021-01-15
Update outdated Guilds script from github that was not working for Funguild.

* 2021-01-14
Change scripts on the servers to not delete runs after 30 days.

* 2021-01-07
Fix but in Pruned Tree feature that was not working if the option separate was selected under Sequence.

* 2020-12-16
Change default setting for similarity test to skip.

* 2020-12-09
Create database that saves all placement reports and query fasta files.

* 2020-12-09
Add results of RDP classifier to placement reports.

* 2020-11-19
Add new multilocus ribosomal protein reference tree.

* 2020-11-18
Add 2 columns to assignments report (Trophic Mode and Guild) from the program FUNGuild.

* 2020-11-10
Install Let's Encrypt server certificates on servers that automatically update.

* 2020-11-10
Update all servers to make sure they are getting automatic software updates.

* 2020-10-27
Add check when uploading files to start that the upload was a success.

* 2020-09-14
Update 2 names in lecanoromycetes v1 tree

* 2020-09-08
Add check for cluster on one locus that all strains from other loci are included

* 2020-09-08
Fix bug in multi locus clustering in v. 2.2

* 2020-08-28
Add a link on the results page to view large tree with the telescope tree viewer tool.

* 2020-08-21
Update file upload to process data on the server before attempting to open the following page.

* 2020-08-19
Add reset buttons to all drag and drop boxes to clear box.

* 2020-08-14
Add checkbox under colorize leaves to enable display of all metadata values in OTU.

* 2020-08-12
Fix Send to new tree function to work with v2.2

* 2020-07-27
Fix bug in prune tree function that was causing it not to work some times.

* 2020-07-26
Add tool tip to some buttons.

* 2020-07-11
Change menu on all T-BAS pages.

* 2020-07-02
Update trees section peltigera and lecanoromycetes.

* 2020-07-01
Add option to run raxml multistate analysis.

* 2020-06-17
Add option on tree to add label to a collapsed node.

* 2020-06-10
Change link names to placement directory according to the program used.

* 2020-06-10
Fix raxml subtree to report counts of empty loci in selections and remove taxa with no data in view alignments.

* 2020-06-02
Bug fix. Fix reading NEXUS files with quoted names with trailing space did not remove space.

* 020-05-28
Add new button and click option called send to new tree. This sends selections to a page that allows user to select a tree that has more resolution for that clade. Selecting the tree causes the selections to be placed on the new tree.

* 2020-05-20
Update all queries within OTUs selection to work better. Opens multiple windows according to sequence selection.

* 2020-05-07
Add columns to BLAST UNITE  complete report and remove one other similar redundant report.

* 2020-05-07
Add Multifurcating reference trees for all reference trees.

* 2020-05-06
Add options to run de novo or constraint tree with bootstraps using iqtree.

* 2020-05-05
Change the View Tree Data button on the guide tree to create a new tree from mep file instead of run stored on server.

* 2020-05-01
Fix bug in TCS report where values were put in wrong columns

* 2020-04-30
Add Keep reference metadata checkbox to update metadata to allow update of unknowns metadata without losing reference metadata.

* 2020-04-29
Sort attributes in select options alphabetically in T-BAS and TCS Graph.

* 2020-04-29
Fix 2 bugs in F-score report. First, allow taxon rank column names to work if capitalized. Second, fix report for queries that have same name as strain in reference tree.

* 2020-04-28
Set colors for attributes in TCS to be the same as in T-BAS.

* 2020-04-24
Update TCS to allow view alignments with select by list and fix order in alignments to be the same is in T-BAS.

* 2020-04-23
Add option for multi-locus placement to cluster on one locus instead of the concatenated queries.

* 2020-04-21
Add option to do placement with EPA with likelihood weights with EPA-ng program.

* 2020-04-15
Change TCS to show correct attributes after updating metadata.

* 2020-04-15
Change TCS view alignments to NEXUS file with partition block

* 2020-04-01
For Peltigera tree add custom BLAST option.

* 2020-03-25
Create new UNITE report based on bitscore and report bitscore.

* 2020-03-05
Added fix for newick files fix support values like [0.0] that break raxml.

* 2020-03-04
Add second version of Laboulbeniomycetes reference tree.

* 2020-03-03
Added Prune Tree button to create newick file using more than one selected clade.

* 2020-02-26
Add pop up page when submitting one locus ITS query with ITSx report on first 10 sequences  to see if 2 or 3 locus placement would be preferable.

* 2020-02-20
Add bootstrap numbers and count loci columns to reports.

* 2020-02-19
Bug fix - fix printing with multi page pdf.

* 2020-02-18
Bug fix - fix reading of partition file with phylip file read incorrect partition length by 1.

* 2020-02-17
Bug fix - fix reading of tree file in Nexus format with translate block with spaces in the name.

* 2020-01-26
Add reference trees for section Chloropeltigera and section Peltigera.

* 2020-01-24
Add text input box for annotation for a short run description the be sent in email to try to keep track of different runs.

* 2020-01-23
Add sequence data to assignments report no duplicates

* 2020-01-16
Create Placement Report from MEP file upload if no placement selected.

* 2020-01-02
Add button to TBAS called Save colors that writes edited colors to .mep file that will display edited colors when reused. Save edited .mep files to xml_archives as RUNID_edit.mep.gz.

* 2020-01-02
Hide links to vsearch and otus report until after submit button is clicked.

* 2019-12-20
Add reference tree for section Peltidea.

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

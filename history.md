
* 2025-02-14
Move BLAST from CIPRES to decifr Celery server.

* 2025-02-11
Update job status link to show output from command on Celery instead of xml from CIPRES.

* 2025-02-11
Move RAxML from CIPRES to decifr Celery server.

* 2025-01-24
Move EPA-ng from CIPRES to decifr Celery server.

* 2025-01-14
Move MAFFT from CIPRES to decifr Celery server.

* 2025-01-10
Update selection operation for displaying bootstrap values on tree.

* 2024-11-25
Update NCBIWWW BLAST code to try to improve speed.

* 2024-11-21
Allow one retry for fail NCBIWWW BLAST.

* 2024-11-13
Fix link on login page to https://cifr.ncsu.edu/index.php/mission/

* 2024-11-07
Fix bug in print pdf multipage.

* 2024-11-04
Update download name list option to match selections.

* 2024-11-04
Update taxon json files used for BLAST filter to use UNITE_public_10.05.2021.

* 2024-10-22
Add option to select blast kingdom for NCBIWWW.

* 2024-10-16
Add tooltip for Newick button.

* 2024-09-27
Update taxon counts reports to include all taxon levels.

* 2024-09-27
Bug fix that prevent people from registering.

* 2024-09-27
Increase random int size for labelling sequences that caused wrong sequence to view in msa viewer.

* 2024-09-18
Update T-BAS tree viewer more Node labels options for display support vals.

* 2024-09-13
Update blast xml parser for small change in xml from ncbi.

* 2024-08-21
Set EPANG to CIPRES for send to new tree.

* 2024-09-06
Update tbas url in tutorial.

* 2024-08-01
Add to script to remove some extra html returned by ncbi blast that cause error reading xml.

* 2024-07-29
Update CIPRES status script reading page https://operations.access-ci.org/infrastructure_news.

* 2024-08-13
Revert to old 2021 blast unite database due to some bad results for 2023 database.

* 2024-07-25
Change www blast entrez_query.

* 2024-07-01
Migrate T-BAS from Centos 7 to RHEL 9 server.

* 2024-06-20
Add taxon reports to show counts for tbas, blast, blast www and rdp.

* 2024-06-20
Add RDP classifier results to other reports.

* 2024-06-19
Add NCBI WWW BLAST.

* 2024-06-05
Add more memory option for EPA-NG.

* 2024-05-28
Set TrimAl to default on.

* 2024-05-22
Update create geojson file.

* 2024-05-20
Add Phylum to Kingdoms lookup json file for Claatu.

* 2024-05-18
Set BLAST database from display options.

* 2024-05-15
Add MAFFT wall time option.

* 2024-05-14
Add captcha for get quote link.

* 2024-05-13
Keep metadata columns in order for displaying. Add css for view metadata.

* 2024-05-08
Check and fix all click menu selections are working.

* 2024-05-06
For multi locus placement allow MAFFT fail and continue, but recording any that fail.

* 2024-05-03
For MAFFT fail show both MAFFT directories.

* 2024-04-23
Bug fix in EPA-ng not placing all queries due to incorrect sorting of queries from references.

* 2024-04-23
Add please wait popup when loading placement page.

* 2024-04-16
Disable some metadata for sequence over 2000 bp length when viewing alignments.

* 2024-04-10
Add to upload unknowns fastas one at time instead of all in one request to prevent timeout when uploading many.

* 2024-04-04
Add upload microsats to submit tree for microsats tree.

*  2024-03-12
Convert support values to 0-100.

* 2024-03-11
Add display option for alternate scale bar units (ie coalescent units).

* 2024-03-07
Update processing script newick_user2.py to read inputs from a file instead of command line.

* 2024-03-06
Update locus auto select to remove unselected options to improve page loading when placing many loci.

* 2024-03-04
For fasta download remove leading and trailing ?.

* 2024-03-04
Bug fix update colors.

* 2024-02-29
Add clean_sequences function to pad sequence ends with '?' replacing '-'

* 2024-02-22
Use a default model for epang cipres (Blosum62 or GTR+G)

* 2024-02-16
Read likelihood weights from jplace file.

* 2024-02-14
Add option for placement with full untrimmed sequence (no trimAl)

* 2024-02-08
Bug fix. Change counting for trimal post process script that caused trimal columns to be incorrect by one position.

* 2024-02-02
Add bkgd_attr val to go to subtree.

* 2024-01-23
Add font options for map tip labels.

* 2024-01-23
Update site variable calculation to ignore gaps

* 2024-01-18
Add map data for provinces in Canada and  China.

* 2023-12-05
Update UNITE database to sh_general_release_dynamic_all_25.07.2023.fasta version 9.0 all eukaryotes.

* 2023-12-05
Add filter levels kingdom and phylum for UNITE filter.

* 2023-10-26
Add plot with 95% ellipse for NMDS UniFrac.

* 2023-10-19
Add BLAST filter kingdom.

* 2023-10-16
Add send to PopPhy-CNN button.

* 2023-10-05
Create report that combines BLAST  and placement results.

* 2023-09-12
Add option to rename duplicates with trailing q or do not place.

* 2023-09-11
Add outgroup for send to new tree

* 2023-09-07
Add save MEP and colors for subtree.

* 2023-08-28
Have FUNGuild backup file if cannot get from internet.

* 2023-08-29
Add checkboxes for hide names and hide terminal circles.

* 2023-08-23
Allow to search tree for any attribute in metadata.

* 2023-08-16
Fix bug causing exset values to be off by a one for placements.

* 2023-08-03
Fix bug that was freezing T-BAS when running claatu or unifrac.

* 2023-07-31
Update select by list box to allow TaxID searching for use with viewing metablolites placements.

* 2023-07-21
Update map zoom to easily scroll from map to tree.

* 2023-07-21
Update map legend into 6 categories of sample size.

* 2023-07-10
Add IQ-TREE option to select merit optimality criterion for testing.

* 2023-06-13
Update OTU size legend into categories.

* 2023-06-02
Update Claatu to fix erroneous reports.

* 2023-05-30
Add Likelihood Score attribute to show as band.

* 2023-05-12
Add message about memory saver causing problems running T-BAS  in tabs.

* 2023-05-01
Change input of cluster value from dropdown to text.

* 2023-04-25
Add Phylum assignments and Class assignments reports for BLAST, TBAS, and RDP.

* 2023-04-12
Copy files when placing on submitted trees before opening new page to prevent showing blank page for a long time.

* 2023-04-07
Add new way for send to new tree to select trees by reading the guide tree descendants of current tree.

* 2023-03-23
Use cached funguild database if cannot connect to the web resource.

* 2023-03-23
Fix display of radial tree if arc is greater than 180 degrees.

* 2023-03-09
Add info to info box that to show not just leaf count selected but also count of all hidden in the OTUs.

* 2023-02-16
Add Trimal to the create phylogeny option.

* 2023-02-13
Refactor one of the python scripts that creates T-BAS files.

* 2023-02-07
Add new download option name list to download list of selected names.

* 2023-02-02
Add options to Unifrac and Claatu to upload files from url, optionally as gz.

* 2023-02-01
Add checkbox to submit page to indicate submission is a virus.

* 2023-01-19
Set BLAST option to use SILVA if placing on submitted  trees that are Archaea or Bacteria.

* 2023-01-11
Fix bug default attribute sometimes not displaying.

* 2022-12-24
Change input files page layout to add blue bar to separate sections.

* 2022-12-16
Require sequence and metadata to submit for T-BAS accesson.

* 2022-12-15
Set leaf size to zero default for large trees to impove radial tree viewer performance.

* 2022-12-05
Links update after move to new datacenter and new server urls.

* 2022-12-02
Create new submit page.

* 2022-11-28
Change default wall time for CIPRES RAXML to 48  hours.

* 2022-11-21
Update login page styling.

* 2022-10-23
Add map to T-BAS that shows countries where species are located.

* 2022-10-11
Add new TBAS option for ClaaTU analysis.

* 2022-10-10
Update results page and email with link to REST resource for permanent MEP file.

* 2022-10-04
Update colors and layout for TBAS page and signin pages. Add new button to submit tree.

* 2022-10-03
Add submit tree options for update, replace, and version.

* 2022-09-19
Add captcha to register and contact us page.

* 2022-08-11
Add genus Chloroplast and Mitochondria as blast miss for SILVA BLAST.

* 2022-08-10
Add user country name to database.

* 2022-07-28
Rewrite script for updating metadata.

* 2022-07-12
Create cron script to save Digital Ocean login database archive to server.

*  2022-06-22
Add color bands width control.

* 2022-06-17
On register page add dropdown for country selection and entry into user database.

* 2022-05-22
Update how colors are read to allow edit of colors to apply to branch lines as well as color bands.

* 2022-05-05
Add control to place scale bar in best position for radial display and display names as italics.

* 2022-05-04
Fix bootstap display thick lines.

* 2022-04-25
Add display options for submitted trees for default bootstrap value and default display attribute.

* 2022-04-22
For submit tree add selection for 70 or 95 percent for collapsed tree.

* 2022-04-21
Add option to display bands 4, 5 and 6 on tree.

*  2022-04-08
Debug errors pointed out by collaborator in TBAS rooting and update scripts for fix.

* 2022-04-06
Add collapse clade to click menu that opens a new tree with selected clade collapsed.

* 2022-03-27
Add button to download complete color tables as a csv that can be used to update similar trees. Add button to use this file to update colors in tree.

* 2022-03-09
Add oauth2 to tbas mailer.

* 2022-02-23
Add fasta file and metadata from url as inputs.

* 2022-02-18
Add sort legend alphabetically.

* 2022-02-14
Use command dos2unix for uploaded files to fix hidden characters and utf16 encodings.

* 2022-02-08
Display view csv and view sequence with better formatting.

* 2022-02-08
Add keywork =HYPERLINK to csv reports to open link in spreadsheet.

* 2022-02-03
Fix scale bar printing with PNG files.

* 2022-02-02
Fix viewer so it will scroll to position of link in placements report.

* 2022-02-01
Update font size controls for leaf text and bootstrap.

* 2022-01-31
Fix check boxes to display bootstraps or edge numbers as appropriate.

* 2022-01-28
Adjust print positions with tree and legends.

* 2022-01-27
Fix viewer code that made circles difficult to click due to bootstrap values written over them.

* 2022-01-27
Add script to convert any files input with UTF16 encoding to ASCII.

* 2022-01-14
Fix bug in writing newick files that caused branch lengths to be read incorrcetly.

* 2021-12-17
Add RAxML-NG options for placements on place on reference tree pages.

* 2021-12-09
Increased area to view names in MSAViewer to show longer names.

* 2021-11-17
Add 3 new trees Phytophthora.

* 2021-11-01
Add option for submitted trees to select default bootstrap value and default band attribute.

* 2021-11-01
Change tree reroot function from BioPython to ete3 due to bug in rerooting unrooted trees.

* 2021-10-28
Show job annotation on tree viewer title bar.

* 2021-10-15
Update TBAS emails to change from address to icarbon@ncsu.edu

* 2021-09-02
Update example files on UniFrac page to use the tutorial on scikit-bio docs.

* 2021-08-16
Fix several bugs in new Python3 TCS script.

* 2021-08-16
New metadata examples file for Pezizomycotina.

* 2021-08-10
Update database to 138.1 SSU Ref NR 99.

* 2021-08-02
Find and fix bug in MSA viewer script.

* 2021-07-28
Find and fix bug for alignments that were read as reverse complements 2 times causing extra R_ in name.

* 2021-07-12
Add button on tree viewer to select all loci for viewing.

* 2021-07-06
Add IQtree options to clade structure.

* 2021-06-25
Allow IQ-TREE protein placement to use either a select list or free text to select a model.

* 2021-06-24
Add step for Raxml and  IQ-TREE to prune reference tree to remove leafs that don't have any alignment data, which would cause tree creation to fail.

* 2021-06-03
Add Nonmetric multidimensional scaling for statistics.

* 2021-05-12
Create custom script to read and parse FUNGuild database at http://www.stbates.org/funguild_db_2.php for FUNGuild reports.

* 2021-05-07
Add ability to view SH-aLRT and UFboot values on tree when using IQTREE.

* 2021-04-30
Add button to calculate statistics with UniFrac.

* 2021-04-29
Update Peltigera database.

* 2021-04-19
Switched PostgreSQL login database server from AWS to DigitalOcean.

* 2021-04-19
Add checkbox for IQTREE to not use partition file to run with many partitons which without might cause run to not finish.

* 2021-04-12
Fix bug that sequence metadata was not being displayed when MSA viewer is selected.

* 2021-04-07
Clean up reference tree start pages by hiding unused options and information.

* 2021-03-30
Auto select loci for input files with base name that matches the locus name.

* 2021-03-29
Add a warning for selecting more than 7 sequences for view or download.

* 2021-03-29
Add option to create or skip the creation of OTU fasta files that show how sequences were clustered.

* 2021-03-29
Update iqtree to new version 2.1.2 and allow constraint option.

* 2021-03-18
Remove individual loci from covid selections.

* 2021-03-17
Allow covid tree to cluster on selected partition with vsearch. Remove MeShClust as an option for clustering.

* 2021-03-16
Add new multi locus Fungi tree.

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
Fix in Pruned Tree feature that was not working if the option separate was selected under Sequence.

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

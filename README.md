# Image gallery
## Using Google Sheets as a simple backend

Uses __Tabletop.js__ to load in configuration data from a Google Sheet table, and then uses it to build a lightbox image gallery with __Lity__

`Globals.publicSpreadsheetUrl` in `scripts.js` holds the public sharing URL of the Google Sheet.

#### Expects at least the following setup in the Google Sheet:
|title|source|caption|
|---|---|---|
|Displayed below the thumbnails|Path to hosted image|Displayed below image on the popup|

Title of the columns need to be `title`,  `source`, and `caption` in lowercase.

#### Google Sheet URL
The Google sheet needs to be published to the web to make it accessible to Tabletop. 
From the sheet, do `File -> Publish to Web` and make sure it is showing as 'Entire Document' and 'Web Page'.
Then click on __Share__ in the top right, and __Get Shareable Link__ to access the public URL.



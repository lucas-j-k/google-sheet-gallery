# Image gallery
## Using Google Sheets as a simple backend

Uses __Tabletop.js__ to load in configuration data from a Google Sheet table, and then uses it to build a lightbox image gallery with __Lity__

`Globals.publicSpreadsheetUrl` in `scripts.js` holds the public sharing URL of the Google Sheet.

#### Expects at least the following setup in the Google Sheet:
|title|source|caption|
|---|---|---|
|Displayed below the thumbnails|Path to hosted image|Displayed below image on the popup|

Title of the columns need to be `title`,  `source`, and `caption` in lowercase.



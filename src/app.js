import page from "./lib/page.js";
import catalogView from "./views/catalogView.js";
import homeview from "./views/homeview.js";

homeview();

//Set up routes
page('/', homeview);
page('/catalog', catalogView);

//Start routing
page();
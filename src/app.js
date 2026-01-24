import page from "./lib/page.js";
import renderMiddleware from "./middlewares/renderMiddleware.js";
import catalogView from "./views/catalogView.js";
import homeview from "./views/homeview.js";

//Set middleWare function
page(renderMiddleware);

//Set up routes
page('/', homeview);
page('/catalog', catalogView);

//Start routing
page();
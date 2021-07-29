## React - Widgets

### Description

You are going to be building a widget application that Searches Wikipedia for topics and displays top new releases from Apple Music.

### Set Up

- Inside the project directory create a simple Express.js server and endpoint on local host that serves the Apple music api for the Top Albums sections to handle CORS restrictions.
- Add a .gitignore preventing the node modules folder from being pushed to Github.

### Tasks

-  Implement your design using **React Components**, these can be function or class based, and style them using **CSS**
-  Follow the mockups provided in the directory
-  Implement a routing solution to navigate between components
-  You may use any state management library of your choice as well as common routing libraries
-  Application should be responsive and have a smooth experience on mobile sized screens


#### Search Wiki

-  Connect this component to the wiki api https://en.wikipedia.org/w/api.php 
-  Configure the params of your request in the following manner:
   { action: 'query', list: 'search', format: 'json', srsearch: 'SOME_SEARCH_TERM', origin: '*' }
-  Parse the API response and display the results in a list as cards using the 'title' and 'snippet' properties on the response object according to the design          included in the directory.  
-  Remove any html tags that may be in the snippet property on the response object before displaying it on screen
-  The search bar should work and query the api on a user typing.
-  Implement a solution to prevent a request from happening on every key stroke. Use your judgement on a reasonable throttling mechanism.


#### Top Albums

-  Connect this component to the Apple music api https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/25/non-explicit.json
-  Parse the API response from the "results" array in the "feed" object and display the results according to the mock up.
-  Implement a detail view according the mock ups.
-  Make sure that linking to detail pages works as expected
-  The "More Info" button on the detail page should link to the "artistUrl" property on the response object


### Evaluation Criteria

-   Design implemented according to attached files using React Components
-   Routing implemented (list, detail)
-   Connect to API - data retrieved and parsed
-   Connecting to API Search, search functionality is working
-   Responsive design
-   Bonus: Use the album backdrop image creatively

### Code Sumbit

-  Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch.
-  Last commit and push accepted is Thursday June 17, 2021 at 4pm EST.

Thanks and happy coding
# react-router-express-test
# react-router-express-test
# react-router-express-test

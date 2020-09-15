# ACME Search

<br />
<hr />
<br />

## Running the project

There are two ways in which this project can be viewed. The first is simply to click this link [https://neeva-acme-search.herokuapp.com](https://neeva-acme-search.herokuapp.com) which takes you to the deployed version of this project (Please keep in mind that you may experience a lag before the app loads since it is running on a heroku free dyno). The second way is to run it locally.

### Running it locally

**Steps**

1. If you are not in the directory that contains this project's `package.json` file please, from your terminal, `cd` into it.

    * `cd /path/to/acme_search`

2. From this project's directory install all of the dependencies decleared in the `package.json` file by running `npm install`.

3. After the installation is complete you can simply run `npm start` which will launch the ACME Search app on your default browser.

    * NOTE: Please be sure that you are not running any other programs on port **3000** prior to running `npm start`.

4. If you'd like to run the tests written for this app you may open up a new terminal tab or terminate our running app and from the same terminal tab run `npm test`.

<br/>
<hr/>
<br/>

## Project Design

### Directory structure

* `./src` contains all `.js` files developed for this project.

* `./src/assets` contains all the icons used.

* `./src/components` contains all react components.

    * NOTE: Each component has its own directory which contains all relevant files for that component including `*.test.js` files and `__snapshots__` if applicable.

* `./src/constants` contains all constant values used.

* `./src/data` contains the `.json` files provided.

* `./src/services` contains the services which are in charge of handeling the business logic.

    * NOTE: Data is currently read from static `.json` files but the services can be easily modified to read the data from a database or some external microservice.

* `./src/utils` contains utility functionality (eg. analytics utility) which is shared across various parts of this project.

### Design decisions

Below I'll talk about some of the design decision I made pertaining to both software and UI/UX.


#### Software

I had to make few technological decision when developing this project. The main one was choosing the frontend library that this project was built on. I chose React not only because it is heavily used at Neeva but also because it makes componentizing our view/presentation logic incredibly simple which translates into greater reusability of our code and faster development time.

For prop validation, I chose to go with the popular `prop-types` package. This package enforces strict prop type validation and throws errors when these prop requirements aren't met which allows us to catch bugs early on and fix them immediately.

The testing frameworks chosen were, `jest` for unit testing and `enzyme` for end-to-end testing. Both are very popular testing frameworks with a vibrant community behind them, clear documentation. Both frameworks make it incredibly simple to test our applications in a similar way that a user might interact with our app.

Finally, when it comes to decisions regarding software design, I chose to implement the separation of concerns design pattern. I separated the presentation layer from the business logic layer. This separation can be seen by looking at the directory structure where I have the `services` handling the business logic while the `components` handles presentation logic. As stated before, the `data` directory holds our static `.json` files which currently serve as our resourse access layer that our `services` interact. However, the resource access layer can be easily swapped within our `services` by making a few modifications to the parent service constructor.

#### UI/UX

Keeping ease of use in mind I decided to avoid creating routes within this application and just displayed all of the information that is relevant to the user in one place. I took into account the fact that there could be many search results after a query so I implemented some navigational assistance, such as buttons that take the user to the results seciont of their interest and a button to take them back to the search bar. The information is displayed in cards. These cards contain a title, a body with all of the relevant information, and a footer which displays chronological information. Icons are used along with subtitles within the body to help visual user better understand the contents of what they're looking at. These informational cards have a consistent UI so as to not confused users.


Below I've included some of my original card designs for each search category. Designs were created with the AdobeXD software.

![Calendar card design](./design/calendar-asset.png)

![Contact card design](./design/contact-asset.png)

![Dropbox card design](./design/dropbox-asset.png)

![Slack card design](./design/slack-asset.png)

![Tweet card design](./design/tweet-asset.png)

<br/>
<hr/>
<br/>

## Additional Features

There were a few additional features that I implemented to improve user experience.

#### Scroll to top button

The first was the addition of a button to allow the user to scroll to the top of a page. This is useful because there could be many search results after a given query is executed. If the user has reached the bottom of a page, having to scroll to the top could be tedious and may result in user dissatisfaction.

#### Scroll to search result category

The second was the addition of search result catagory links that a user can click and be taken directly to where that catagory lives on the page (eg. "calendar" category links user to the calendar results).

#### Analytics utility

Finally, the last feature implemented was the analytics utility which was an advanced feature option in the requirements. This utility is used across the app to track user behaviour, such as time spent on the app, the type of querys submitted, and the links that a user interacts with. The analytics utility is also used to track app performance, such as external file load time and app startup time.

<br/>
<hr/>
<br/>

## Future improvements

Assuming that this fictional app continues to grow and become more complex, an improvement that I would implement is creating a global store to maintain app state. Currently our app does not use any state management system, such as Redux. This is fine because the app is small and there aren't any deeply nested components requiring access app state. But, as the app grows, prop drilling could become an issue and a state management system like redux would be perfect to solve this issue.
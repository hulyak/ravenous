
# Create Project & Components

Welcome to the first installment of the Ravenous project! Over the next couple of weeks, you’ll build a website called “Ravenous”, a Yelp-like clone.

In total, there will be four parts to this project:

- Creating Static Components
- Passing Information to Components
- Setting the State of Ravenous Components
- Interacting with the Yelp API

Today, you will start by building the first part of Ravenous: Creating Static Components.

Here’s a quick overview of how Ravenous should function:

As a user, I should be able to search for restaurants
As a user, I should be able to view a list of restaurants returned by the Yelp API
As a user, I should be able to sort through restaurants using a filter
The four projects will test your knowledge of JavaScript and React, all with the goal of building a Yelp-like clone. If you want to get a feel for what Ravenous can be, visit the Yelp website and search for restuarants in your area.

Ravenous will be composed of four different components interacting with each other:

```
<Business />
<BusinessList />
<SearchBar />
<App /> (created by default with create-react-app)
```


### How to solve CORS policy problem?

fetch() don't function correctly due to CORS restrictions. [cors-anywhere](https://cors-anywhere.herokuapp.com/)

We can bypass this restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

Prepend the URL path passed to the first argument in fetch() with the following:

`https://cors-anywhere.herokuapp.com/`


### Yelp Authorization header

When we make requests to the Yelp API, we have to present a form of identification for the browser. This is because the Yelp API wants to know that we are authorized to access the API.

This identification is presented using our API key as a browser header.
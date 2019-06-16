# Vue js front end using backend in laravel. 

This is a software for self-employed professionals

- You have to create a project vue cli before cloning this project

## Create a vue cli project
```
vue create 'any-name'
```

When you are creating a project, you have to select some option manually like: 
Babel, CSS-Pre Processors, Router, Vuex and Linter / Formatter

### You have to add vue apollo for the communication with Laravel backend using GraphQl API
```
vue add apollo
```

After adding apollo, you have to change some things inside *vue-apollo.js*:
```
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://graphql.me/graphql' 
```
- Here you have to put the link where your backend application is located, in my case, it`s http://graphql.me/graphql this is the same thing as localhost:8080/graphql
- /graphql is the route pointing out *schema.graphql* inside Laravel 

- Ok, after you do this, you have to change this:
```
wsEndpoint: null, 
```
And this:
```
fetchPolicy: 'no-cache',
```

### You have to install axios for the communication with Laravel backend using REST API

```
npm install axios
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

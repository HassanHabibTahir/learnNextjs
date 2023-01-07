# Next

## introduction

Working on a modern JavaScript application powered by React is
awesome until you realize that there are a couple problems related to
rendering all the content on the client-side.
First, the page takes longer to become visible to the user, because
before the content loads, all the JavaScript must load, and your
application needs to run to determine what to show on the page.

Next.js is one React framework to do all of this in a very simple way,
but it's not limited to this. It's advertised by its creators as a zeroconfiguration, single-command toolchain for React apps.

It provides a common structure that allows you to easily build a
frontend React application, and transparently handles server-side
rendering for you.
What is Next.js
First, let's talk about React. I like to think of React as a view library. Alone, you couldn't quickly build a modern app with React. You need routing, a build system, a way to style things, performance, etc 😰.

---

Next.js is a complete full-stack framework for modern apps that was created by the brilliant team at Vercel. React is used as the view library of choice. So if you know React, then Next.js will be very familiar. When building an app from scratch with React, you have so many decisions to make and so many choices. Next.js has well thought out conventions baked in that make these decisions for you. So in that way, it's very opinionated. It's the conventions that are the secret sauce, though. These opinions come from years of experience building production-ready React apps.

Here are some of the highlights that you get for free:

- Dev build system
- Production build system
- Prerendering
- SSR
- Build time
- Static
- Routing
- API routes (wow, really?)

## So here's what we'll be covering:

- What is Next.js
- How does Next.js compare to React.js
- When would you use Next.js
- Getting started
- Creating pages and components
- SEO
- Static and dynamic routing
- Navigating
- Styling
- API routes
- Fetching data
- Prerendering
- Deployment
- JAMstack

## The main features provided by Next.js

- Hot Code Reloading
- Automatic Routing
- Ecosystem Compatibility (JavaScript, Node, and React)
- Single File Components
- Server Rendering
- Prefetching
- Dynamic Components
- Static Exports
- TypeScript Support

## why would you use SSR?.

- Improved SEO
- Faster Load Times

## Next.js vs Gatsby vs create-react-app

Next.js, Gatsby, and create-react-app are amazing tools we can use to power our applications.
They all have React under the hood, powering the entire development experience. They also abstract webpack and all those low level things that we used to configure manually in the good old days.
create-react-app does not help you generate a server-side-rendered app easily. Anything that comes with it (SEO, speed…) is only provided by tools like Next.js and Gatsby.

## When is Next.js better than Gatsby?

They can both help with server-side rendering, but in 2 different ways.

The end result using Gatsby is a static site generator, without a server. You build the site, and then you deploy the result of the build process statically on Netlify or another static hosting site.

Next.js provides a backend that can server side render a response to request, allowing you to create a dynamic website, which means you will deploy it on a platform that can run Node.js.

Next.js can generate a static site too, but I would not say it’s its main use case.

If my goal was to build a static site, I’d have a hard time choosing and perhaps Gatsby has a better ecosystem of plugins, including many for blogging in particular.

Gatsby is also heavily based on GraphQL, something you might really like or dislike depending on your opinions and needs.

## Install prettier globally

- Prettier is great to use with Visual Studio Code. Just download this extension. Pro tip: set it to only run Prettier when it detects a Prettier config file. Makes it so you never have to turn it off. In order to do that, set prettier.requireConfig to true and editor.formatOnSave to true.

```bash
npm install --global prettier

```

```javascript
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\"
},
```

## Do you only need a single page app?

Use Create React App

## Do you need a static site, like a blog, that's also a SPA?

Use Next.js or Gatsby.

## Need SSR, an API, and all the above?

Use Next.js

# Getting Started

First, run the development server:

## How to install Next.js

- Make sure that you have the latest version of Node 16 etc
  [Node.js](https://nodejs.org/)
- After you install Node.js, you will have the ** npm ** command available into your command line.

## npm/Yarn scripts

So it can be painful to try to remember the various CLI commands to run on your project. You can put CLI commands into it and then run the name of the tag and it'll run that script. Let's go see how that works. Put the following into your package.json.

```bash
yarn create next-app --typescript;
npm install -D prettier@2.7.1 -D
```

```bash
npm run dev
# or
yarn dev
```

The still pretty easy way

```bash
yarn add next react react-dom

```

Next, we need to add some helpful scripts to our package.json

```js
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

### So what do these commands do?

- next Will start Next.js in dev mode with hot reloading.

- next build Will build your project and ready it for production.

- next start Will start your built app, used in production.

Next.js is a full-stack framework, by default, it needs to be hosted on a platform that supports Node.js

# Routing with Pages

You don't need to interact with a router directly to create pages. Next.js has built on conventions to make creating routes as easy as creating a file

To get started, create a directory on your called **/pages**. Next.js will associate any file in this directory as a route. The file names determine the route name or pattern, and whatever component is exported is the actual page.

Now let's create an index route by creating a file: **/pages/index.jsx.**

Next, let's create a component and export it:

## Folders and routes

To create a path like /project/settings we can use folders in our /pages directory. For our note taking app, we need the following routes for now:

```js
index => /
all notes => /notes
one note => /notes/:id
```

## Dynamic routes

Next.js makes it easy to create dynamic routes. Depending on if and how you want those pages to be prerendered will determine how you set them up. We're going to focus on creating dynamic routes that will not be built at build time but instead at run time on the server.

So to create a dynamic route, we can create a file that looks like this:

`````js
[id].jsx;

Where id is the name of the parameter. You can name it whatever you want. Those brackets are not a typo or a placeholder; that's the syntax to create a dynamic route using file name conventions in the pages directory. So let's create our note route:```

```js
pages
  notes
    index.jsx
    [id].jsx
```

- We can access the id param inside our page component using the useRouter hook from the next/route module. This comes for free with Next.js.


```js
import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Note: {id} </h1>
  )
}
```

// ## Adding Second page in the site.

// I want to add a second page to this website, a blog. It’s going to be served into /blog, and for the time being it will just contain a simple static page, just like our first index.js component:

// Now the fact that the URL is **/blog** depends on just the filename, and its position under the pages folder.

// You can create a **pages/hey/ho page**, and that page will show up on the URL http://localhost:3000/hey/ho.

// What does not matter, for the URL purposes, is the component name inside the file.

// Try going and viewing the source of the page, when loaded from the server it will list **/\_next/static/development/pages/blog.js** as one of the bundles loaded, and not **/\_next/static/development/pages/index.js** like in the home page. This is because thanks to automatic code splitting we don’t need the bundle that serves the home page. Just the bundle that serves the blog page.

// ## Linking the two pages

// ```js
// <a href="/blog">Blog</a>
// ````

// Why? We technically can, of course, because this is the Web and on the Web things never break (that’s why we can still use the <marquee> tag. But one of the main benefits of using Next is that once a page is loaded, transitions to other page are very fast thanks to client-side rendering.

// If you use a plain a link:

// ```javascript
// const Index = () => (
//   <div>
//     <h1>Home page</h1>
//     <a href="/blog">Blog</a>
//   </div>
// );

// export default Index;
// ```

// The first time we load http://localhost:3000/ we get all the page bundles loaded:
// Now if you click the “Preserve log” button (to avoid clearing the Network panel), and click the “Blog” link, this is what happens:
// We got all that JavaScript from the server, again! But.. we don’t need all that JavaScript if we already got it. We’d just need the blog.js page bundle, the only one that’s new to the page.

// To fix this problem, we use a component provided by Next, called Link.

// We import it:

// ```javascript
// import Link from "next/link";
// ```

// and then we use it to wrap our link, like this:

// ```javascript
// import Link from "next/link";

// const Index = () => (
//   <div>
//     <h1>Home page</h1>
//     <Link href="/blog">
//       <a>Blog</a>
//     </Link>
//   </div>
// );

// export default Index;
// ```

// ## Dynamic content with the router

// In the previous chapter we saw how to link the home to the blog page.

// A blog is a great use case for Next.js, one we’ll continue to explore in this chapter by adding blog posts.

// Blog posts have a dynamic URL. For example a post titled “Hello World” might have the URL **/blog/hello-world**. A post titled “My second post” might have the URL **/blog/my-second-post**.

// This content is dynamic, and might be taken from a database, markdown files or more.

// Next.js can serve dynamic content based on a dynamic URL.

// We create a dynamic URL by creating a dynamic page with the **[]** syntax.
`````

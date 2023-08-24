![Event Ticket Website](logo.png)

## Overview
A game review publishing site built using a custom CMS

### Features
- Hygraph content management
- GraphQL API querying
- Each review route is built statically to improve site speed
- Fully responsive for mobile and tablet

### Libraries/Frameworks Used
1. [React](https://react.dev/)
2. [NextJS](https://nextjs.org/)
3. [TailwindCSS](https://tailwindcss.com/)
4. [GraphQL](https://graphql.org/)
5. [Hygraph](https://hygraph.com/)

### How To Run
Visit the deployed website on [Vercel](https://game-review-site-eight.vercel.app/)

# My Development Experience
## The Problem
I wanted to create a project that would allow me to experiment with using GraphQL as a querying language, while also exploring ways that a content management system might be created for ease of use by an end-user instad of using WordPress. Of course, this was amenable to any sort of informational site - creating a blog for this project would've also sufficed - however I decided to go with a game reviewing site for the simple fact that I felt there would be more creative liberty in the visual design of the website; this was useful as my front-end development skills involving TailwindCSS were also something that I was keen to improve throughout the course of this project.

## Reflections
### Things Learned
Primarily, this project was intended to serve the purpose of allowing me to learn a new technology and it succeeded in doing so. What I found to be the main advantage of GraphQL over other API querying languages was the specifity of its queries which eliminated the problem of having a query return too much data and abstracting it on the front-end after the fact. Hygraph was also an amazingly capable content management solution; facilitating sourcing content from any backend system using their GraphQL API. Although its efficiency for more complex applications may be limited (once you start building applications that begin requiring relational data), for buliding a simple CMS I believe that using Hygraph with GraphQL is an amazingly capable backend stack for getting an efficient solution up and running with little to no hassle.

### Improvements
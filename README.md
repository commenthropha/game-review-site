![Event Ticket Website](logo.png)

## Overview
A game review publishing site built using a custom headless Content Management System

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

### Installation & Usage
Visit the deployed website on [Vercel](https://game-review-site-eight.vercel.app/)

# My Development Experience
## The Problem
I wanted to create a project that would allow me to experiment with using GraphQL as a querying language, while also exploring ways that a content management system might be created for ease of use by an end-user instad of using WordPress. Of course, this was amenable to any sort of informational site - creating a blog for this project would've also sufficed - however I decided to go with a game reviewing site for the simple fact that I felt there would be more creative liberty in the visual design of the website; this was useful as my front-end development skills involving TailwindCSS were also something that I was keen to improve throughout the course of this project.

## Reflections
### Things Learned
Primarily, this project was intended to serve the purpose of allowing me to learn a new technology and it succeeded in doing so. What I found to be the main advantage of GraphQL over other API querying languages was the specifity of its queries which eliminated the problem of having a query return too much data and abstracting it on the front-end after the fact. Hygraph was also an amazingly capable content management solution; facilitating sourcing content from any backend system using their GraphQL API. Although its efficiency for more complex applications may be limited (once you start building applications that begin requiring relational data), for buliding a simple CMS I believe that using Hygraph with GraphQL is an amazingly capable backend stack for getting an efficient solution up and running with little to no hassle.

In terms of my second main goal for the project, which was to become better at using TailwindCSS, use of custom properties in the `tailwind.config.ts` file such as defining a customs and fonts provided an extra boost to my workflow as instead of defining one off custom colors `bg-[#FFEEC4]` and then attempting to decipher what colour that corresponded with when looking over the code, I could assign a name to the colour and re-use it throughout my application `bg-honey`. Although I still need to look at the documentation at times to double check that I'm writing a utility class' name correctly, I've become familiar enough with them - as well as CSS - to the point where I can build a website design in minutes; this is provided, of course, that I don't spend so much time being indecisive over the design itself! haha

### Improvements
Despite that fact that, relative to my other projects, I was able to build the front-end for this one fairly quickly I think that there is still some room for improvment. One way that I could improve my workflow to be even more efficient is to perhaps create a colour palette for the website before even touching any CSS and then copy those colors into my `tailwind.config.ts` file so that they're ready for use throughout my project.

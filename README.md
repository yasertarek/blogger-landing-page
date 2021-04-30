# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot-desktop.jpg)
![](./screenshot-mobile.jpg)
### Links

- Solution URL: [Frontend Mentor Solution](https://your-solution-url.com)
- Live Site URL: [Github Pages](https://yasertarek.github.io/blogger-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Flexbox
- Desktop-first workflow
### What I learned

```html
<nav class="nav">
  <div class="dropdown">
      <a class="dropbtn">Product</a>
      <div class="dropdown-content">
          <a href="#" class="dropdown-link">Overview</a>
          <a href="#" class="dropdown-link">Pricing</a>
          <a href="#" class="dropdown-link">Marketplace</a>
          <a href="#" class="dropdown-link">Features</a>
          <a href="#" class="dropdown-link">Integrations</a>
      </div>
  </div>
  <div class="dropdown">
      <a class="dropbtn">Company</a>
      <div class="dropdown-content">
          <a href="#" class="dropdown-link">About</a>
          <a href="#" class="dropdown-link">Team</a>
          <a href="#" class="dropdown-link">Blog</a>
          <a href="#" class="dropdown-link">Careers</a>
      </div>
  </div>
  <div class="dropdown">
      <a class="dropbtn">Connect</a>
      <div class="dropdown-content">
          <a href="#" class="dropdown-link">Contact</a>
          <a href="#" class="dropdown-link">Newsletter</a>
          <a href="#" class="dropdown-link">LinkedIn</a>
      </div>
  </div>
  <div class="navigation-btns navigation-btns--active">
      <a href="#" class="btn">Login</a>
      <a href="#" class="btn btn--solid btn--solidSpec">Sign Up</a>
  </div>
</nav>
```
```js
event.target.matches()

```
## Author

- Website - [Yasser Tarek](https://www.your-site.com)
- Frontend Mentor - [@yasertarek]https://www.frontendmentor.io/profile/yasertarek)
- Twitter - [@yasertarek420](https://www.twitter.com/yasertarek420)
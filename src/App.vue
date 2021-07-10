<template>
  <div class="navbar navbar-expand-sm navbar-light bg-c-primary shadow">
    <div class="container py-1">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        MovieDb
      </router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <router-link class="nav-item nav-link" :to="{ name: 'Home' }">
            Home
          </router-link>
        </ul>
      </div>
    </div>
  </div>
  <div class="container my-5">
    <router-view />
  </div>
  <div class="footer">
    <div class="container my-4">
      <div class="text-center text-muted">
        <small> © All rights reserved. </small>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --primary: #0ff2b2;
  --primary-dark: #0bbf8c;
  --secondary: #107369;
  --secondary-dark: #115259;
  --dark: #081826;
  --light: #dbdbdb;
}

/* Scroll bar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--light);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}
/* /Scroll bar */

body {
  font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;
}

.text-c-light {
  color: var(--light);
}

.bg-c-primary {
  background-color: var(--primary);
}

.bg-c-dark {
  background-color: var(--dark);
}

.title-decoration {
  color: var(--light);
  border-left: 6px var(--primary) solid;
  padding-left: 8px;
}

.title-link {
  color: var(--light);
  text-decoration: none;
}

.title-link:hover {
  color: var(--primary);
}

.cover {
  object-fit: cover;
}

.movie-scroller {
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 4px;
  white-space: nowrap;
  height: 400px;
}

.movie-scroller:hover {
  overflow-x: auto;
}

@media only screen and (max-width: 1023px) {
  .movie-scroller {
    overflow-x: auto;
  }
}
</style>

<template>
  <div class="navbar navbar-expand-sm navbar-light bg-c-primary shadow">
    <div class="container py-1">
      <a class="navbar-brand" href="/">
        <img
          class="d-none d-md-inline"
          height="32"
          src="./assets/img/logo-dark.svg"
          alt="MovieDb"
        />
        MovieDb
      </a>
      <ul class="navbar-nav ms-auto">
        <div class="d-flex">
          <a class="nav-item nav-link me-2" href="/movies"> Movies </a>
          <a class="nav-item nav-link me-2" href="/tv"> TV Shows </a>
          <a class="nav-item nav-link" href="/persons"> Actors </a>
        </div>
      </ul>
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
  overflow-x: auto;
  overflow-y: hidden;
  padding-top: 4px;
  white-space: nowrap;
  height: 100%;
}
</style>

<template>
  <div class="navbar navbar-expand-md navbar-dark bg-c-secondary-dark shadow">
    <div class="container py-1">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        MovieDb
      </router-link>
      <ul class="navbar-nav ms-auto">
        <router-link class="nav-item nav-link" :to="{ name: 'Home' }">
          Home
        </router-link>
      </ul>
    </div>
  </div>
  <router-view />
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

.text-c-light {
  color: var(--light);
}

.bg-c-dark {
  background-color: var(--dark);
}

.bg-c-secondary-dark {
  background-color: #274259;
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

.movie-scroller {
  display: flex;
  overflow-x: hidden;
  padding-top: 4px;
  white-space: nowrap;
  height: 420px;
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

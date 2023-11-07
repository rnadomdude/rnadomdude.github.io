<script setup lang="ts">
import '@fontsource/dotgothic16';
import './app.css';
import { useWindows } from '~/stores/window_states';
import Footer from './components/Footer.vue';

const windows = useWindows();
</script>

<template>
  <div>
    <video autoplay muted loop class="bgVideo">
      <source src="/femcel.mp4">
    </video>

    <div class="main">
      <ClientOnly>
        <MainWindow />
        <BaseWindow visibility="windows.about" :initial_x="32" :initial_y="32">
          Lorem ipsum dolor sit amet, 
          <div>
            consectetur adipiscing elit,
          </div>
          <div>
            sed do eiusmod tempor incididunt
          </div>
          <div>
            ut labore et dolore magna aliqua.
          </div>
        </BaseWindow>
      </ClientOnly>
      <Footer></Footer>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
  max-width: 100vw;
}

.bgVideo {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  z-index: -1;
}

.link {
  color: var(--purple);
}

.link:hover {
  color: var(--offwhite);
  background-color: var(--purple);
  padding: 0 4px;
  margin: 0 -4px;

}

.local-link {
  color: var(--purple);
}

.local-link:hover {
  color: var(--offwhite);
  background-color: var(--purple);
  padding: 0 4px;
  margin: 0 -4px;
  cursor: pointer;
}

.local-link:after {
  color: var(--offwhite);
  background-color: var(--purple);
  padding: 0 4px;
  margin: 0 -4px;
  cursor: pointer;
}

#about-window {
  display: none;
}

/* #about-checkbox:checked+#about-window {
  display: block;
} */

.main {
  height: 100vh;
  width: 100vw;
  overflow: visible;
  display: flex;
  justify-content: center;
  font-family: 'DotGothic16';
  font-size: 2rem;
  --purple: #4D23CD;
  --aqua: #90F3E1;
  --pink: #EFCFEF;
  --darkerpink: #EAA0E7;
  --offwhite: #FDF7FD;
}

#about-window {
  margin-left: 50px;
}
</style>
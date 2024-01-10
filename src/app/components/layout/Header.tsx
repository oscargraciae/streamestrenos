---
import LogoApp from "../icons/LogoApp.astro";


---

<header class="flex items-center justify-center bg-transparent py-4">
  <div class="flex w-full container flex-col md:flex-row">
    
    <div class="justify-center items-center pr-0 md:pr-8 flex">
      <a href="/" aria-label="streamestrenos">
        <!-- <div class="font-semibold text-white text-3xl">stream<span class="text-orange-500">estrenos</span></div> -->
        <LogoApp />
      </a>
    </div>

    <!-- <nav class="flex flex-row space-x-8 text-sm justify-center items-center text-white pt-2">
      <div class={`border-b-2 ${Astro.url.pathname === '/' ? 'border-b-orange-500' : ''}`}>Peliculas</div>
      <div>Series</div>
      <div>Anime</div>
    </nav> -->
  </div>
</header>
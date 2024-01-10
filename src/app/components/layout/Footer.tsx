---
import { STREAM_POVIDERS } from "../../config/constants";

---

<footer class="text-white flex items-center justify-center py-14">
  <section class="container text-center flex justify-between flex-col md:flex-row items-center">
    <span class="hidden md:block">Hecho con ❤️</span>

    <div class="flex flex-col md:flex-row space-x-4">
      <div class="mb-4 md:mb-0">Descubre los últimos lanzamientos en: </div>
      { STREAM_POVIDERS.map((provider: any) => (
        <a href={`/provider/${provider.key}`} class="underline hover:text-orange-500 px-6 md:px-2 py-4 md:py-0">
          <span>{provider.name}</span>
        </a>
      )) }
    </div>
  </section>
</footer>
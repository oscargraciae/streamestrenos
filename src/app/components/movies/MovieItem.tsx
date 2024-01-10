---
import { STATIC_API_URL } from "../../config/constants";
interface Props {
  movie: any
}
const { movie } = Astro.props;

function formatDate(date: any) {
  return new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

---

<a href={`/${movie.slug}`}>
  <div id='movie-item' class="w-[120px] inline-block md:w-[170px] md:h-[241px] group">
    <div class="relative">
      <span class="group-hover:block absolute right-2 top-2 text-xs hidden backdrop-blur-xs bg-orange-500 px-2 py-1 rounded-full">{(movie.date !== 'Hoy' && movie.date !== 'Ayer') ? formatDate(movie?.date) : movie.date}</span>
      <picture class="">
        <source srcset={`${STATIC_API_URL}/posters/${movie.image}`} media="(min-width: 768px)" />
      </picture>
      <picture>
        <source srcset={`${STATIC_API_URL}/posters/${movie.image}`} media="(max-width: 768px)" />
      </picture>

      <img src={`${STATIC_API_URL}posters/${movie.image}`} width="170" height="241" class="w-full h-full object-cover" alt={movie.title}  onerror="this.onerror = null; this.parentNode.parentNode.parentNode.remove()" loading="lazy" decoding="async" />
      <div class="absolute bottom-0 bg-black/30 w-full hidden hover:block group-hover:block backdrop-blur-sm">
        <div class="text-white whitespace-pre-wrap text-sm py-4 px-2">{movie.title}</div>
      </div>
    </div>
  </div>
</a>
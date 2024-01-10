---
import { STREAM_POVIDERS } from "../config/constants";
---

<div class="space-x-1 md:space-x-8 flex flex-row">
  { STREAM_POVIDERS.map((item) => (
    <a href={`/provider/${item.key}`}>
      <div>
        <img src={`/providers/${item.icon}`} alt={item.name} width="72" height="72" class="rounded-md hover:scale-150 transition ease-in-out"/>  
      </div>
    </a>
  ))}
</div>

import Image from "next/image";
import { STREAM_POVIDERS } from "@/config/constants";

export const StreamProviders = () => (
  <div className="space-x-1 md:space-x-8 flex flex-row">
    {STREAM_POVIDERS.map((item, index) => (
      <a key={index} href={`/provider/${item.key}`}>
        <div>
          <Image
            src={`/providers/${item.icon}`}
            alt={item.name}
            width="72"
            height="72"
            className="rounded-md hover:scale-150 transition ease-in-out"
          />
        </div>
      </a>
    ))}
  </div>
);

import Image from "next/image"
import { STREAM_POVIDERS } from "@/config/constants"
import { NetflixIcon } from "./icons/providers/NetflixIcon"
import { AmazonPrimeIcon } from "./icons/providers/AmazonPrimeIcon"

const providers: { [key: string]: JSX.Element } = {
  "netflix": <NetflixIcon />,
  "amazonprimevideo": <AmazonPrimeIcon />,
  // "claro": <AmazonPrimeIcon />,
  "disney": <NetflixIcon />,
  "hbo": <NetflixIcon />,
  "appletv": <NetflixIcon />,
  "paramount": <NetflixIcon />,
  "star": <NetflixIcon />,
}

// export const StreamProviders = () => (
//   <div className="space-x-1 md:space-x-8 flex flex-row">
//     {STREAM_POVIDERS.map((item, index) => {
//       console.log(item)
//       return <div key={index} className="text-xl">
//         {providers[item.key]}
//       </div>
//     } )}
//   </div>
// )

export const StreamProviders = () => (
  <div className="space-x-1 md:space-x-4 flex flex-row">
    {STREAM_POVIDERS.map((item, index) => (
      <a key={index} href={`/provider/${item.key}`}>
        <div>
          <Image
            src={`/providers/${item.icon}`}
            alt={item.name}
            width="42"
            height="42"
            className="rounded-md hover:scale-125 transition ease-in-out duration-300"
          />
        </div>
      </a>
    ))}
  </div>
)

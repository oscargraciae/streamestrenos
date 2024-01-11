// export const API_URL = 'https://streamestrenos-production.streamestrenos.workers.dev/';

// export const STATIC_API_URL = 'https://streamestrenos-production.streamestrenos.workers.dev/static/';

export const API_URL = 'https://streamestrenos-scraper.streamestrenos.workers.dev/'
export const STATIC_API_URL = `${API_URL}static/`

export const STREAM_POVIDERS = [
  {
    name: 'Netflix',
    url: 'https://www.netflix.com/browse',
    icon: 'netflix.webp',
    key: 'netflix',
    backgorundColor: '#e50914',
  },
  {
    name: 'Amazon Prime Video',
    url: 'https://www.primevideo.com/',
    icon: 'prime.webp',
    key: 'amazonprimevideo',
    backgorundColor: '#ff9900',
  },
  {
    name: 'Disney+',
    url: 'https://www.disneyplus.com/',
    icon: 'disney.webp',
    key: 'disneyplus',
    backgorundColor: '#000000',
  },
  {
    name: 'HBO Max',
    url: 'https://www.hbomax.com/',
    icon: 'hbo.webp',
    key: 'hbomax',
    backgorundColor: '#000000',
  },
  // {
  //   name: 'Claro Video',
  //   url: 'https://www.clarovideo.com/',
  //   icon: 'claro.webp',
  //   key: 'clarovideo'
  // },
  {
    name: 'Star Plus',
    url: 'https://www.starplus.com/',
    icon: 'star.webp',
    key: 'starplus',
    backgorundColor: '#000000',
  },
  {
    name: 'Paramount+',
    url: 'https://www.paramountplus.com/',
    icon: 'paramount.webp',
    key: 'paramountplus'
  },
  {
    name: 'Apple TV+',
    url: 'https://tv.apple.com/',
    icon: 'appletv.webp',
    key: 'appletvplus'
  }
]
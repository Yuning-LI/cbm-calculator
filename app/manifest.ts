import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CBM Calculator - Freight Volume Tool',
    short_name: 'CBM Calc',
    description: 'Calculate CBM, Kg, and container loading for sea and air freight.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#10b981', // brand-green (emerald-500)
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
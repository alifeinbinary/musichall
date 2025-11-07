import { faBandcamp, faSpotify, faApple, faYoutube, faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const name = String.fromCharCode(109, 117, 115, 105, 99, 104, 97, 108, 108, 98, 97, 110, 100) // musichallband
const domain = String.fromCharCode(103, 109, 97, 105, 108) + '.' + String.fromCharCode(99, 111, 109) // gmail.com
const email = `${name}@${domain}`

export const links = [
    {
        name: 'Bandcamp',
        href: 'https://musichallband.bandcamp.com/',
        icon: faBandcamp
    },
    {
        name: 'Spotify',
        href: 'https://open.spotify.com/artist/0awumhwRVHMdvFZL2pZxOx?si=cxN6APKzQ-SFqPu-WQrS6w',
        icon: faSpotify
    },
    {
        name: 'Apple Music',
        href: 'https://music.apple.com/us/artist/music-hall/1652906897',
        icon: faApple
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UCZhiDBOQ2Pu-3YDmdbfGd8g',
        icon: faYoutube
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/musichallband/',
        icon: faInstagram
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@musichall.band',
        icon: faTiktok
    },
    {
        name: 'Email',
        href: `mailto:${email}`,
        icon: faEnvelope
    }
]
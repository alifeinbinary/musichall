import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faApple, faBandcamp, faYoutube, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4">
        <div className="flex flex-col justify-center items-center">
          <img className='h-auto rounded-lg drop-shadow-lg' src="../vertical_bird-screaming-800x1000.webp" alt="bird screaming cover" width={"800px"} height={"1000px"} />
        </div>
        <div className="flex flex-col justify-end text-center md:text-left md:mb-8 mt-8 pl-0 md:pl-8">

          <h1 className="text-5xl font-extrabold">New album <br />'Bird Screaming' <br />
            <small className="ml-2 font-semibold text-gray-500">out 28 July 2023</small>
          </h1>
          <div className="social-icons">
            <a aria-label='Listen to Music Hall on Spotify' href="https://open.spotify.com/artist/0awumhwRVHMdvFZL2pZxOx?si=cxN6APKzQ-SFqPu-WQrS6w">
              <button aria-label='Spotify' className="btn btn-primary"><FontAwesomeIcon icon={faSpotify} /></button>
            </a>
            <a aria-label='Listen to Music Hall on Apple Music' href="https://music.apple.com/us/artist/music-hall/1652906897">
              <button aria-label='Apple Music' className="btn btn-primary"><FontAwesomeIcon icon={faApple} /></button>
            </a>
            <a aria-label='Buy music from Music Hall on Bandcamp' href="https://alifeinbinary.bandcamp.com/album/let-the-night-disappear">
              <button aria-label='Bandcamp' className="btn btn-primary"><FontAwesomeIcon icon={faBandcamp} /></button>
            </a>
            <a aria-label='Listen to Music Hall on Youtube' href="https://www.youtube.com/channel/UCZhiDBOQ2Pu-3YDmdbfGd8g">
              <button aria-label='Youtube' className="btn btn-primary"><FontAwesomeIcon icon={faYoutube} /></button>
            </a>
            <a aria-label='Follow Music Hall on TikTok' href="https://www.tiktok.com/@musichall.band">
              <button aria-label="TikTok" className="btn btn-primary"><FontAwesomeIcon icon={faTiktok} /></button>
            </a>
            <a aria-label='Follow Music Hall on Instagram' href="https://www.instagram.com/musichallband/">
              <button aria-label='Instagram' className="btn btn-primary"><FontAwesomeIcon icon={faInstagram} /></button>
            </a>
          </div>
          <div className="mt-4 contact">
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#117;&#115;&#105;&#99;&#104;&#97;&#108;&#108;&#98;&#97;&#110;&#100;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
              <button aria-label='Email Music Hall' data-tooltip-target="tooltip-default" type="button" className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md py-2.5 text-center"><FontAwesomeIcon icon={faEnvelope} className='mail-icon' /> &#109;&#117;&#115;&#105;&#99;&#104;&#97;&#108;&#108;&#98;&#97;&#110;&#100;&#32;&#91;&#97;&#116;&#93;&#32;&#103;&#109;&#97;&#105;&#108;</button>
            </a>
            <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

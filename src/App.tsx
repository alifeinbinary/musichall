import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faApple, faBandcamp, faYoutube, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'

function App() {


  return (
    <>
      <div className="grid grid-cols-2 p-4">
        <div className="flex flex-col justify-center items-center">
          <img className='h-auto max-w-xl rounded-lg drop-shadow' src="../public/vertical_bird-screaming.webp" alt="bird screaming cover" />
        </div>
        <div className="flex flex-col justify-end mb-8">

          <h1 className="text-5xl font-extrabold">New album <br />'Bird Screaming' <br />
            <small className="ml-2 font-semibold text-gray-500">out 28 July 2023</small>
          </h1>
          <div className="social-icons">
            <a href="https://open.spotify.com/artist/0awumhwRVHMdvFZL2pZxOx?si=cxN6APKzQ-SFqPu-WQrS6w">
              <button className="btn btn-primary"><FontAwesomeIcon icon={faSpotify} /></button>
            </a>
            <a href="https://music.apple.com/us/artist/music-hall/1652906897">
              <button className="btn btn-primary"><FontAwesomeIcon icon={faApple} /></button>
            </a>
            <a href="https://alifeinbinary.bandcamp.com/album/let-the-night-disappear">
              <button className="btn btn-primary"><FontAwesomeIcon icon={faBandcamp} /></button>
            </a>
            <a href="https://www.youtube.com/channel/UCZhiDBOQ2Pu-3YDmdbfGd8g">
              <button className="btn btn-primary"><FontAwesomeIcon icon={faYoutube} /></button>
            </a>
            <a href="https://www.tiktok.com/@musichall.band">
              <button className="btn btn-primary"><FontAwesomeIcon icon={faTiktok} /></button>
            </a>
            <a href="https://www.instagram.com/musichallband/">
              <button className="btn btn-primary"><FontAwesomeIcon icon={faInstagram} /></button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Albums from './components/Albums'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Albums />
      </main>
      <Footer />
    </div>
  )
}

export default App

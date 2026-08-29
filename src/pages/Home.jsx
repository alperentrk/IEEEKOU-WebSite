import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Board from '../components/sections/Board'
import Committees from '../components/sections/Committees'
import Events from '../components/sections/Events'
import Blog from '../components/sections/Blog'
import Achievements from '../components/sections/Achievements'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Board />
      <Committees />
      <Events />
      <Blog limit={4} />
      <Achievements />
      <Contact />
    </>
  )
}

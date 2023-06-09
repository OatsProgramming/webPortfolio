import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Profile from "./components/Profile/Profile"
import Projects from "./components/ProjectList/ProjectList"

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    }}>
      <Profile />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
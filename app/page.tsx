import Icon from "./components/Icons/Icon";
import Profile from "./components/Profile/Profile";
import Projects from "./components/ProjectList/ProjectList";


export default function Home() {

  return (
    <>
    {/* <Profile />
    <Projects />
    <Profile />
    <Profile /> */}
    <Icon iconName={"html"} size={200}/>
    <Icon iconName={"css"} size={200}/>
    <Icon iconName={"js"} size={200}/>
    <Icon iconName={"react"} size={200}/>
    <Icon iconName={"nextjs"} size={200}/>
    <Icon iconName={"zustand"} size={200}/>
    <Icon iconName={"framer"} size={200}/>
    <Icon iconName={"swr"} size={500}/>
    <Icon iconName={"vite"} size={200}/>
    <Icon iconName={'ts'}/>
    </>
  )
}
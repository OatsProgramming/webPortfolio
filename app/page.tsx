import IconFn from "./components/Icons/chooseIcon";
import Profile from "./components/Profile/Profile";
import Projects from "./components/ProjectList/ProjectList";


export default function Home() {

  return (
    <>
    {/* <Profile />
    <Projects />
    <Profile />
    <Profile /> */}
    <IconFn iconName={"html"} size={200}/>
    <IconFn iconName={"css"} size={200}/>
    <IconFn iconName={"js"} size={200}/>
    <IconFn iconName={"react"} size={200}/>
    <IconFn iconName={"nextjs"} size={200}/>
    <IconFn iconName={"zustand"} size={200}/>
    <IconFn iconName={"framer"} size={200}/>
    </>
  )
}
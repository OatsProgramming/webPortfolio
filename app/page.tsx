import Icon from "./components/Icons/Icon";
import iconNames from "./components/Icons/iconNames";
import FGProfile from "./components/Profile/FGProfile";
import Profile from "./components/Profile/Profile";
import Projects from "./components/ProjectList/ProjectList";


export default function Home() {

  return (
    <>
      <Profile />
      {/* <FGProfile /> */}
      <Projects />
      {/* <Profile /> */}
      {/* <FloatingIcons /> */}
      {/* {iconNames.map(icon => (
          <Icon key={icon} iconName={icon} />
      ))} */}
    </>
  )
}
import FamiliarSpirit from "./FamiliarSpirit";
import ToggleRive from "./ ToggleRive";
import ContinuousRive from "./ContinuousRive";

// Given the title of the Application, render appropriate icon
export default function AppIcon(props) {
  switch (props.title) {
    // Articles
    case "Familiar Spirit":
      return <FamiliarSpirit />
    case "Astrology":
      return <ContinuousRive title={"datascience"} />
    case "Sumerian":
      return <ToggleRive title={"sumerian"} />
    case "LSystems":
      return <ContinuousRive title={"lsystems"} />
    case "Mandelbrot":
      return <img src="../images/mandelbrot.gif"/>
    case "Eden":
      return <img src="../images/eden.gif"/>
    case "Astrology Math":
      return <ContinuousRive title={"astromath"} />
    case "About Me":
      return <ToggleRive title={"aboutme"} />
    case "Cryptography":
      return <ToggleRive title={"cryptography"} />
      
    // Links
    case "GitHub":
      return <ContinuousRive title={"github"} />
    case "Twitter":
      return <ContinuousRive title={"twitter"} />
    case "LinkedIn":
      return <ContinuousRive title={"linkedin"} />
    default:
      return <ContinuousRive title={"poison-loader"} />
  }
}
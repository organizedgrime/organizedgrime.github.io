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
      return <ToggleRive title={"datascience"} />
    case "Sumerian":
      return <ToggleRive title={"sumerian"} />
    case "LSystems":
      return <ToggleRive title={"lsystems"} />
    case "Mandelbrot":
      return <img src="../images/mandelbrot.gif"/>
    case "Eden":
      return <img src="../images/eden.gif"/>
    case "Astrology Math":
      return <ToggleRive title={"astromath"} />
    case "About Me":
      return <ToggleRive title={"aboutme"} />
    case "Cryptography":
      return <ToggleRive title={"cryptography"} />
      
    // Links
    case "GitHub":
      return <ToggleRive title={"github"} />
    case "Twitter":
      return <ToggleRive title={"twitter"} />
    case "LinkedIn":
      return <ToggleRive title={"linkedin"} />
    default:
      return <ContinuousRive title={"poison-loader"} />
  }
}
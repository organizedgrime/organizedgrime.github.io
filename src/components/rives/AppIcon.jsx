import ExampleRive from "./ExampleRive";
import FamiliarSpirit from "./FamiliarSpirit";
import GenericRive from "./GenericRive";

// Given the title of the Application, render appropriate icon
export default function AppIcon(props) {
  switch (props.title) {
    // Articles
    case "Familiar Spirit":
      return <FamiliarSpirit />
    case "Astrology":
      return <GenericRive title={"datascience"} />
    case "Sumerian":
      return <GenericRive title={"sumerian"} />
    case "LSystems":
      return <GenericRive title={"lsystems"} />
    case "Mandelbrot":
      return <img src="../images/mandelbrot.gif"/>
        
    // Links
    case "GitHub":
      return <GenericRive title={"github"} />
    case "Twitter":
      return <GenericRive title={"twitter"} />
    case "LinkedIn":
      return <GenericRive title={"linkedin"} />
    default:
      return <ExampleRive />
  }
}
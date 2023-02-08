import ExampleRive from "./ExampleRive";
import FamiliarSpirit from "./FamiliarSpirit";
import GenericRive from "./GenericRive";

// Given the title of the Application, render appropriate icon
export default function AppIcon(props) {
  switch (props.title) {
    case "LSystems":
      return <FamiliarSpirit />
    case "Algorithms":
      return <GenericRive title={"github"} />
    case "Mandelbrot":
      return <GenericRive title={"twitter"} />
    default:
      return <ExampleRive />
  }
}
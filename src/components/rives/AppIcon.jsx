import ExampleRive from "./ExampleRive";
import FamiliarSpirit from "./FamiliarSpirit";

// Given the title of the Application, render appropriate icon
export default function AppIcon(props) {
  switch (props.title) {
    case "LSystems":
      return <FamiliarSpirit />
    default:
      return <ExampleRive />
  }
}
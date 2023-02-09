import ExampleRive from "./ExampleRive";
import FamiliarSpirit from "./FamiliarSpirit";
import GenericRive from "./GenericRive";

// Given the title of the Application, render appropriate icon
export default function AppIcon(props) {
  switch (props.title) {
    case "LSystems":
      return <FamiliarSpirit />
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
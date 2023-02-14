import { 
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment
} from '@rive-app/react-canvas';

export default function ToggleRive(props) {
  const { rive, RiveComponent } = useRive({
    src: '/rives/' + props.title + '.riv',
    autoplay: true,
    stateMachines: "M1",
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.TopCenter,
    }),
  });

  const hoverInput = useStateMachineInput(rive, "M1", "hover");
  const unhoverInput = useStateMachineInput(rive, "M1", "unhover");
  
  return (
    <RiveComponent 
      onMouseEnter={() => {hoverInput.fire()}}
      onMouseLeave={() => {unhoverInput.fire()}}
    />
  );
}
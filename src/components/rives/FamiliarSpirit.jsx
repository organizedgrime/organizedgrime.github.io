import { 
  useRive, 
  useStateMachineInput,
  Layout, 
  Fit, 
  Alignment 
} from '@rive-app/react-canvas';

export default function FamiliarSpirit() {
  const { rive, RiveComponent } = useRive({
    src: '/rives/familiar-spirit.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.TopCenter,
    }),
  });

  return <RiveComponent />;
}
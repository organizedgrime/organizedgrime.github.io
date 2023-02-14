import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function ContinuousRive(props) {
  const { rive, RiveComponent } = useRive({
    src: '/rives/' + props.title + '.riv',
    autoplay: true,
    stateMachines: "M1",
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.TopCenter,
    }),
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}
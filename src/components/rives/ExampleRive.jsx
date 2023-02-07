import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export default function ExampleRive() {
  const { rive, RiveComponent } = useRive({
    src: '/rives/poison-loader.riv',
    autoplay: false,
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
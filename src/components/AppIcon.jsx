import { useRive } from '@rive-app/react-canvas';

export default function AppIcon() {
  const { rive, RiveComponent } = useRive({
    src: '/rives/poison-loader.riv',
    autoplay: true,
  });

  return (
    <div>
      <h1>this is a rive component</h1>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
}
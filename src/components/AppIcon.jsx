import { useRive } from '@rive-app/react-canvas';

export default function AppIcon(props) {
  const { rive, RiveComponent } = useRive({
    src: '/rives/' + props.filename + '.riv',
    autoplay: false,
  });

  return (
    <div>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
}
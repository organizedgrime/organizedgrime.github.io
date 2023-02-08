import { useEffect, useState } from 'react';
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
    autoplay: true,
    stateMachines: "LookAround",
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.TopCenter,
    }),
  });

  const [maxWidth, setMaxWidth] = useState();
  const [maxHeight, setMaxHeight] = useState();

  const xAxisInput = useStateMachineInput(rive, "LookAround", "xAxis", 0);
  const yAxisInput = useStateMachineInput(rive, "LookAround", "yAxis", 0);

  useEffect(() => {
    const body = document.querySelector("main");
    if (body) {
      const bodyRect = body.getBoundingClientRect();
      setMaxWidth(bodyRect.right);
      setMaxHeight(bodyRect.bottom);
    }
  }, []);

  useEffect(() => {
    const update = (e) => {
      if (maxWidth && maxHeight && yAxisInput && xAxisInput) {
        xAxisInput.value = (e.x / maxWidth) * 100;
        yAxisInput.value = (e.y / maxHeight) * 100;
      }
    };
    window.addEventListener("mousemove", update);
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, [xAxisInput, yAxisInput, maxHeight, maxWidth]);

  return <RiveComponent />;
}
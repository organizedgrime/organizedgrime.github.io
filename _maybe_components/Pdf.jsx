// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Create new plugin instance

function Pdf(props) {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return <Viewer
		fileUrl={props.url}
		plugins={[defaultLayoutPluginInstance]}
	/>;
}
export default Pdf;

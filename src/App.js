import "./App.css";
import Slider from "./Slider";
import Header from "./Header";
import PageBody from "./PageBody";
import image2 from "../src/icons/Frame772541079.png";
import image3 from "../src/icons/Frame772541080.png";
import image4 from "../src/icons/Frame772541081.png";
import image1 from "../src/icons/Frame772541082.png";

const ImageData = [
	{
		image: image1,
	},
	{
		image: image2,
	},
	{
		image: image3,
	},
	{
		image: image4,
	},
	{
		image: image3,
	},
];

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<PageBody />
				<Slider slides={ImageData} />
			</div>
		</div>
	);
}

export default App;

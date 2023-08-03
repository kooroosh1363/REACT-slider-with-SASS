import { imageProduct } from ".";
import "./App.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ImageSliderPro from "./component/image-slider/ProImageSlider";



function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '600px',
        backgroundColor: '#fff',
        padding: '20px'
      }}>
          <ImageSliderPro images={imageProduct}/>
      </div>
    </div>
  );
}

export default App;

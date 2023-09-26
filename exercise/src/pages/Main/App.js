import './App.css';
import Rtx_3050 from '../../assets/products/image_rtx_3050.jpg'
import Monitor from '../../assets/products/monitor_lg_ultrawide_image.jpeg'; 
import Teclado from '../../assets/products/image_teclado_mecanico_amer_Aigo_A108.jpg';
import SomSony from '../../assets/products/image_speaker_sony_ht_ax7.jpg';
import PlacaMae from '../../assets/products/image_optane_memory.jpg';
import Mouse from '../../assets/products/image_mouse_dareu_a950.jpeg'
import MiniComputer from '../../assets/products/image_mini_pc_divoom.png';
import intelI9 from '../../assets/products/image_i9_10900.jpg';
import Flipper from '../../assets/products/image_flipper_zero.jpeg';

import Footer from '../../components/footer';


function App() {
  return (
    <div className="container">
      <div className='header_main'>
        <h1>Computer Store</h1>
        <h3>The better price is here</h3>
      </div>
      <div className='section_main'>
        <div className='card_product'>
          <img src={Rtx_3050} alt='Placa de video RTX 3050'/>
          <h3>Placa de video RTX 3050</h3>
          <button>BUY ITEM</button>

        </div>
        <div className='card_product'>
          <img src={Monitor} alt='Monitor UltraWide LG'/>
          <h3>UltraWide LG</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={Teclado} alt='Teclado Mecanico'/>
          <h3>Mecanic keyboard</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={SomSony} alt='Caixa de som Sony'/>
          <h3>Theater Speaker Sony</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={PlacaMae} alt='Placa de video RTX 3050'/>
          <h3>Optane Intel Memory</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={Mouse} alt='Placa de video RTX 3050'/>
          <h3>Mouse Darau A950</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={MiniComputer} alt='Placa de video RTX 3050'/>
          <h3>Mini Computer Divoom</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={intelI9} alt='Placa de video RTX 3050'/>
          <h3>CPU Intel i9 10th</h3>
          <button>BUY ITEM</button>
        </div>
        <div className='card_product'>
          <img src={Flipper} alt='Placa de video RTX 3050'/>  
          <h3>Flipper Zero</h3>
          <button>BUY ITEM</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

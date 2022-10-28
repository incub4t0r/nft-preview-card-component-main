import './App.css';
import iconclock from './images/icon-clock.svg';
import iconeth from './images/icon-ethereum.svg';
import nft from './images/image-equilibrium.jpg';
import avatar from './images/image-avatar.png';

export default function App() {
  return (
    <div className="App">
        <card>
          <cardImage>
            <img src={nft} alt="nft" />
          </cardImage>
          <cardContent>
            <cardTitle>
              <h1>Equilibrium #3429</h1>
            </cardTitle>
            <cardDescription>
              <p>Our Equilibrium collection promotes balance and calm.</p>
            </cardDescription>
            <cardStats>
              <cardPrice>
                <img src={iconeth} alt="eth icon"></img>
                <p>0.041 ETH</p>
              </cardPrice>
              <cardTime>
                <img src={iconclock} alt="clock icon"></img>
                <p>3 days left</p>
              </cardTime>
            </cardStats>
            <hr />
            <cardCreator>
              <img src={avatar} alt="creator"></img>
              <p>Creation of <span className='author'>Jules Wyvern</span></p>
            </cardCreator>
          </cardContent>
        </card>
    </div>
  );
}

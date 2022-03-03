
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown} from '@fortawesome/free-solid-svg-icons'
import { faShare} from '@fortawesome/free-solid-svg-icons'
import { faScissors} from '@fortawesome/free-solid-svg-icons'
import { faMusic} from '@fortawesome/free-solid-svg-icons'
import { faList} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <div className="bigbox">
        <div className="box1">
              <div className="video"> 
              <iframe className='Vp'  src="https://www.youtube.com/embed/y6120QOlsfU?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="comment">
                <div className='titre'>
                <p>Darude - Sandstorm</p>
                <p>223 561 625 vues</p>
                </div>
                <div className='infotitre'>
                  <div className='ift'> <FontAwesomeIcon icon={ faThumbsUp} />f2.5M</div>
                  <div className='ift'>  <FontAwesomeIcon icon={ faThumbsDown} />JE N AIME PAS</div>
                  <div className='ift'> <FontAwesomeIcon icon={ faShare} />PARTAGER</div>
                  <div className='ift' ><FontAwesomeIcon icon={faScissors} /> EXTRAIT</div>
                  <div className='ift'><FontAwesomeIcon icon={ faList} /> ENREGISTRER</div>
              </div>
              </div> 
        </div>
          <div className="box2">
           <div className="list-group-item">
                  <div className='item'>
                      <iframe src="https://www.youtube.com/embed/XmE5qkNDPIE?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

                      <div className="iteminf">
                         <p><strong>Angele-Demon feat Damso(Clip Officiel)</strong>
                        <br/>Angele <FontAwesomeIcon icon={faMusic} /> <br/>12M</p>
                    </div>
                  </div>
                    
                  </div>

                  <div className="list-group-item">
                  <div className='item'>
                  <iframe  src="https://www.youtube.com/embed/5qm8PH4xAss?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                 
                    <div className="iteminf">
                         <p><strong>50 cent(Clip Officiel)</strong>
                        <br/>50 cent <FontAwesomeIcon icon={faMusic} /> <br/>1Md</p>
                    </div>
                  </div> </div>

                  <div className="list-group-item">
                  <div className='item'>
                  <iframe  src="https://www.youtube.com/embed/xpVfcZ0ZcFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                 
                    <div className="iteminf">
                         <p><strong>Drake God's Plan(Clip Officiel)</strong>
                        <br/>Drake <FontAwesomeIcon icon={faMusic} /> <br/>1Md</p>
                    </div>
                  </div> </div>

                  <div className="list-group-item">
                  <div className='item'>
                  <iframe  src="https://www.youtube.com/embed/tvTRZJ-4EyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  
                 
                    <div className="iteminf">
                         <p><strong>Kendrick Lamar-Humble(Clip Officiel)</strong>
                        <br/>Kendrick Lamar <FontAwesomeIcon icon={faMusic} /> <br/>835M</p>
                    </div>
                  </div> </div>
                  

               
          
              
          </div>
</div>
    </div>
  );
}

export default App;


/* 

             

 

 

 

  <div className="list-group-item">
  <div className='item1'>
  <iframe width="150" height="75" src="https://www.youtube.com/embed/tvTRZJ-4EyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div className='item2'>
  <h6>Kendrick Lamar-Humble(Clip Officiel)</h6>
  <h7>Kendrick Lamar <FontAwesomeIcon icon={faMusic}  /> <br/>835M</h7>
  </div>
  </div>
 */
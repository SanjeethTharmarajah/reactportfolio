import Avatar from '../assets/me.jpg';
import uft from '../assets/uft.png';
import everest from '../assets/everest.png';
import uottawa from '../assets/uottawa.png';
import '../styles/style.css';
export default function Home() {
  return (
    <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    Hi !, I am Sanjeeth Tharmarajah; I am a Full Stack Web Developer.<br></br>
                                    I love to tell others about the word of God.  I love to read Bible everyday and I love God.<br></br>
                                    I am also Web Designing and Developing hobbist and enthusiast.  In my free time, I design web pages, watch gospel preachings & news; and I also love to listening to gospel musics and other musics online.<br></br>

                                    This is my react portfolio page.  Please, take a look at my portfolio...<br></br>

                                    Have a Wonderfull and a Blessed Day !
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of Toronto, Toronto</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.utoronto.ca/' target='_blank'><img className='university-logo' src={uft} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Everest College, Brampton</div>
                                        <div className='title-concentration'>Network Administrator</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://en.wikipedia.org/wiki/Everest_College' target='_blank'><img className='university-logo' src={everest} /></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Ottawa University, Ottawa</div>
                                        <div className='title-concentration'>Bachelor of Computer Science</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://www.uottawa.ca/en' target='_blank'><img className='university-logo' src={uottawa} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}

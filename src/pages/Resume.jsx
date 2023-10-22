import resume_pdf from '../assets/resume.pdf';
import Logo from '../assets/images/logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import MernLogo from '../assets/images/mern-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.png';
import MongoLogo from '../assets/images/mongodb-logo.png';
import PhpLogo from '../assets/images/php.png';
import '../styles/portfolio.css';
import uft from '../assets/uft.png';
import everest from '../assets/everest.png';
import uottawa from '../assets/uottawa.png';
import '../styles/style.css';
export default function Resume() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <div className='card'>
                <div className="header">
                    <h3>Download Resume: <a href={resume_pdf} target="_blank">Sanjeeth.T</a>
                    </h3>
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
                <div className="modal-footer"/>

                <div className="header">
                    <h3>Skills</h3>
                </div>
                <div className="modal-footer"/>

                <div className='card-body'>
                    <div className="row">
                        <div className='code'>Computer Science Fundamentals</div>
                    </div>
                    <div className='grid-container-skills'>
                        <div className='grid-item-skills'>
                            <p className='p-about'>Databases</p>
                        </div>

                        <div className='grid-item-skills'>
                            <p className='p-about'>Algorithm</p>
                        </div>

                        <div className='grid-item-skills'>
                            <p className='p-about'>Design Patterns</p>
                        </div>
                    </div>
                </div>

                <div className="modal-footer" />
                          
                <div className='card-body'>
                    <div className="row">
                        <div className='code'>Technologies</div>
                    </div>

                    <div className='grid-container-skills'>
                        <div className='grid-item-skills'>
                            <img src={Logo} className='img-skills' />
                        </div>

                        <div className='grid-item-skills'>
                            <img src={MernLogo} className='img-skills' />
                        </div>


                        <div className='grid-item-skills'>
                            <img src={JqueryLogo} className='img-skills' />
                        </div>


                        <div className='grid-item-skills'>
                            <img src={BootstrapLogo} className='img-skills' />
                        </div>


                        <div className='grid-item-skills'>
                            <img src={HandlebarsLogo} className='img-skills' />
                        </div>

                        <div className='grid-item-skills'>
                            <img src={SqlLogo} className='img-skills' />
                        </div>

                        <div className='grid-item-skills'>
                            <img src={MongoLogo} className='img-skills' />
                        </div>

                        <div className='grid-item-skills'>
                            <img src={PhpLogo} className='img-skills' />
                        </div>

                    </div>
                </div>

                <div className="modal-footer" />

                <div className='card-body'>
                    <div className="row">
                        <div className='code'>Quality Assurance</div>
                    </div>

                    <div className='grid-container-skills'>
                        <div className='grid-item-skills'>
                            <p className='p-about'>Jest (Unit Testing)</p>
                        </div>
                    </div>
                </div>

                <div className="modal-footer" />

                <div className='card-body'>
                    <div className="row">
                        <div className='code'>Programming Skills</div>
                    </div>

                    <div className='grid-container-skills'>
                        <div className='grid-item-skills'>
                            <p className='p-about'>NODE.JS</p>
                        </div>

                        <div className='grid-item-skills'>
                            <p className='p-about'>REACT.JS</p>
                        </div>

                        <div className='grid-item-skills'>
                            <p className='p-about'>SQL & NOSQL</p>
                        </div>

                        <div className='grid-item-skills'>
                            <p className='p-about'>PHP</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  );
}

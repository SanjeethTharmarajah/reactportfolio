import React from 'react';
import '../styles/style.css';
import '../styles/portfolio.css';

function ProjectCards(props) {
    return (
        <div className={`grid-item gallery__item--${props.id}`}>
            <div className="project">
                <img src={props.image} alt={props.name} className="gallery__img" />
                <div className="desc">
                    <h5>{props.name}</h5>
                </div>
            </div>

            <div className='dep-links'>
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon" />
                </a>
                <a href={props.deploy} target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon" />
                </a>
            </div>
        </div>
    );
}

export default ProjectCards;

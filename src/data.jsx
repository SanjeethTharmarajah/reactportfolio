import React from 'react';
import MovieBookings from './assets/images/MovieBookings.png';
import FinWise from './assets/images/finwise.png';
import cmsBlogs from './assets/images/cmsblog.png';
import NotesTaker from './assets/images/notestaker.png';
import TimerQuiz from './assets/images/timerquiz.png';
import WeatherDashboard from './assets/images/weatherdashboard.png';

const projects = [
    {
        id: 1,
        name: 'MovieBookings',
        image: MovieBookings,
        github: 'https://github.com/SanjeethTharmarajah/movie-bookings',
        deploy: 'https://sanjeeththarmarajah.github.io/movie-bookings/'
    },
    {
        id: 2,
        name: 'FinWise',
        image: FinWise,
        github: 'https://github.com/SanjeethTharmarajah/finwise',
        deploy: 'https://finwise2-92f0efdf4e68.herokuapp.com/'
    },
    {
        id: 3,
        name: 'CMS Blogs',
        image: cmsBlogs,
        github: 'https://github.com/SanjeethTharmarajah/cmsblogs',
        deploy: 'https://blogs2-891bb8c15292.herokuapp.com/'
    },
    {
        id: 4,
        name: 'Notes Taker',
        image: NotesTaker,
        github: 'https://github.com/SanjeethTharmarajah/notestaker',
        deploy: 'https://arcane-waters-74656-adb9b93bcced.herokuapp.com/'
    },
    {
        id: 5,
        name: 'Timer Quiz',
        image: TimerQuiz,
        github: 'https://github.com/SanjeethTharmarajah/timerquiz',
        deploy: 'https://sanjeeththarmarajah.github.io/timerquiz/'
    },
    {
        id: 6,
        name: 'Weather Dashboard',
        image: WeatherDashboard,
        github: 'https://github.com/SanjeethTharmarajah/weatherdashboard',
        deploy: 'https://sanjeeththarmarajah.github.io/weatherdashboard/'
    }
];

export default projects;

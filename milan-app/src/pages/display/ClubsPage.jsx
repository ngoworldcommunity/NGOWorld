import React from 'react';
import SingleClub from '../../components/SingleClub';
import data from './CLUB_DATA.js'
import './ClubsPage.css'


const ClubsPage = () => {



    return <div className='cards'>
        {
            data.map((club) => {
                return <SingleClub
                    key={club.id}
                    club_name={club.club_name}
                    club_logo={club.club_logo}
                    club_des={club.club_des}
                />
            })
        }

    </div>;
};

export default ClubsPage;

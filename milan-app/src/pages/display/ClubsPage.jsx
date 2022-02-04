import React from 'react';
import SingleClub from '../../components/SingleClub';
import data from './CLUB_DATA.js'
import '../../styles/ClubsPage.css'
import Navbar from '../../components/Navbar';

const ClubsPage = () => {



    return <>

        <Navbar />

        <div className='cards'>
            {
                data.map((club) => {
                    return <SingleClub
                        key={club.id}
                        club={club}
                    />
                })
            }

        </div>
    </>;
};

export default ClubsPage;

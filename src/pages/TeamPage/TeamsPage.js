import React from 'react';
import './TeamsPage.css';
import StyledButton from '../../components/StyledButton/StyledButton.component';
import { Link } from 'react-router-dom';

const TeamsPage = () => {
    return(
        <div className='teams-page'>
            <div >
                <h1 className='team-main-text' >TEAM 2021</h1>
                <div className='teams-part-1' >
                <p className='team-p1-left'>
                    Team Captain<br/>
                    Team Director<br/>
                    Team Manager<br/>
                    Team Mentor<br/>
                    Team Vice Captain<br/>
                </p>
                <p className='team-p1-right'>
                    SAM SHERIN RAJ S<br/>
                    PRANAVARAM A<br/>
                    SANJAY M<br/>
                    KARTHIK R<br/>
                    BIJU RM<br/>
                </p>
                </div>
            </div>
            <div className='teams-part-2'>
                <div className='team-p2'>
                    <h1>CHASIS</h1>
                    <p className='team-general'>
                        VENKATESH S<br/>
                        SANJAY M<br/>
                        SRIHARI M<br/>
                        VENGADESH V<br/>
                        ARUN RAJ SK<br/>
                        ADIYANTH MANJU<br/>
                        AKSHAJ VARMA<br/>
                        NITISH M<br/>
                        SURYAN I<br/>
                    </p>
                </div>
                <div className='vertical-rule' />
                <div className='team-p2'>
                    <h1>VEHICLE DYNAMICS</h1>
                    <p className='team-general'>
                        PRANAVARAM A<br/>
                        BIJU RM<br/>
                        RAGUL D<br/>
                        ASHWIN KUMARAN<br/>
                        BHAVISH ATHREYA K<br/>
                        CHANDRAESH M<br/>
                        DEV CHAURASIA<br/>
                        ASHWIN PRABHU<br/>
                        DAMMALA SHANMUKHA<br/>
                        AKSHAJ J<br/>
                        ANAND M<br/>
                        NITHISH C<br/>                        
                    </p>
                </div>
                <div className='vertical-rule' />
                <div className='team-p2'>
                    <h1>AERODYNAMICS</h1>
                    <p className='team-general'>
                        SHIRIRAM SURESH KUMAR<br/>
                        TARUM P<br/>
                        DHIANESSRATIN V<br/>
                        SRICHARAN SUNDERBABU<br/>
                        GOKHUL V S<br/>
                        DOMINIC DEVASAGAYAM<br/>
                        SHREYAS MURALI<br/>
                        VISHNU B<br/>
                    </p>
                </div>
            </div>
            <div className='teams-part-3'>
                <div className='team-p2'>
                    <h1>POWER TRAIN 1</h1>
                    <p className='team-general'>
                        SAM SHERIN RAJ S<br/>
                        PRASAD P V<br/>
                        NANDITA A<br/>
                        VARUNGA G R<br/>
                        GAUTHAM KRISHNAN U S<br/>
                        MALARMATHI E<br/>
                        VIVEK SRIDHAR<br/>
                        ADITHYA HARI<br/>                       
                    </p>
                </div>
                <div className='team-p2'>
                    <h1>POWER TRAIN 2</h1>
                    <p className='team-general'>
                        SHREYA MARY THOMAS<br/>
                        SHIVANI SATHYANARAYAN<br/>
                        SANTHOSH KUMAR V<br/>
                        YUVA SHANKER M<br/>
                        SAISENTHUR B<br/>
                        VALLIKANNAN M<br/>
                        ROHIT D<br/>
                        RISHAB RAJESH<br/>                       
                    </p>
                </div>
            </div>
            <Link to='/teams/prevteams'>
                <StyledButton text='Previous Teams' />
            </Link>
        </div>
    )
}

export default TeamsPage
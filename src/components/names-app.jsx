/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './names-app.scss';
import DesctriptonPage from './pages/description-page';
import ProgramPage from './pages/program-page';

class MainPage extends React.Component {
  render() {
    return (
      <div className='names'>
        <Bounce top>
          <div className='names__page'>
            <DesctriptonPage />
          </div>
        </Bounce>
        <Bounce bottom>
          <div className='names__page'>
            <ProgramPage />
          </div>
        </Bounce>
      </div>
    );
  }
}

export default MainPage;

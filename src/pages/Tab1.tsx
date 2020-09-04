import React from 'react';
import { IonPage, IonContent, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="App">
          <header className="App-header">
            <IonIcon icon={camera} className="App-logo-icon" />
            <p>Photo Gallery App by</p>
            <a
              className="App-link"
              href="https://www.edwinaquino.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edwin Aquino
        </a>
          </header>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
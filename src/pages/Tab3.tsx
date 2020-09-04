import React from 'react';
import { IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { informationCircleSharp } from 'ionicons/icons';
import cardImg from '../assets/golden-gate-park.jpg';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonImg src={cardImg} alt="Card Image" />
          {/* <img src={cardImg}alt={cardImg} style={{color: "green", padding:"10px"}}/> */}
          <IonCardHeader>
            <IonCardSubtitle>Photo App</IonCardSubtitle>
            <IonCardTitle>About</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            This is a very simple photo gallery app created using Ionic and React. Have fun taking pictures and storing them in your device.
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonItem>
            <IonIcon icon={informationCircleSharp} slot="start" />
            <IonLabel>By: Edwin Aquino</IonLabel>
            <IonButton fill="outline" slot="end" href="https://github.com/edwinaquino"
              target="_blank"
              rel="noopener noreferrer">Download</IonButton>
          </IonItem>
          <IonCardContent>
            Version 1.0 - September 2, 2020
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

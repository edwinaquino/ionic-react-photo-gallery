import React, { useState } from 'react';


import './Tab2.css';

import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';


import { usePhotoGallery, Photo } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {

 const { photos, takePhoto, deletePhoto } = usePhotoGallery();
//function takePhoto(){}
const [photoToDelete, setPhotoToDelete] = useState<Photo>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      

      <IonActionSheet
  isOpen={!!photoToDelete}
  buttons={[{
    text: 'Delete',
    role: 'destructive',
    icon: trash,
    handler: () => {
      if (photoToDelete) {
        deletePhoto(photoToDelete);
        setPhotoToDelete(undefined);
      }
    }
  }, {
    text: 'Cancel',
    icon: close,
    role: 'cancel'
  }]}
  onDidDismiss={() => setPhotoToDelete(undefined)}
/>







      <IonContent>
  <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg onClick={() => setPhotoToDelete(photo)} 
        src={photo.base64 ?? photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
</IonContent>

    </IonPage>
  );
};

export default Tab2;

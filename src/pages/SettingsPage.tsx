import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        This is the settings page.
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;

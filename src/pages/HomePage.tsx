import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        This is the home page.
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

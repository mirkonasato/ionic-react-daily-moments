import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Add some content here…
      </IonContent>
    </IonApp>
  );
};

export default App;

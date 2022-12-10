import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
          <Redirect exact path="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>        
    </IonApp>
  );
};

export default App;

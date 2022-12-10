import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`rendering App with loggedIn=${loggedIn}`);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login">
            <LoginPage loggedIn={loggedIn}
              onLogin={() => setLoggedIn(true)}
            />
          </Route>
          <Route path="/my">
            <AppTabs loggedIn={loggedIn} />
          </Route>
          <Redirect exact path="/" to="/my/entries" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

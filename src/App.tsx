import { IonApp } from '@ionic/react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <BrowserRouter>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Redirect exact path="/" to="/home" />
      </BrowserRouter>
    </IonApp>
  );
};

export default App;

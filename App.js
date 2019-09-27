import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import Allround from './Allround';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EintragBearbeiten from './EintragBearbeiten';
import Generaladd from './Generaladd';
import doKategorien from './doKategorien'


const Startseite = () =>
  <div>
    <h2>mysecretdiary</h2>
    <p>Endlich die Seite auf der du alle deine Gedanken einfach mit deiner Community teilen kannst.
<br></br>
      Egal, was!
    <br></br>
      Lass es raus!
    <br></br>
      <div>
        <p>Tob dich in unseren verschiedenen Kategorien aus</p>
        <ul className="kategorieübersicht">
          <button >
            <Link className="üSchwarz" to="/Allround/1" >
              <li> Schwarzmaler Sarkasmus</li>
            </Link>
          </button>
          <button>
            <Link className="ügeta" to="/Allround/2" >
              <li>Get a Mate</li>
            </Link>
          </button>
          <button>
            <Link className="üchaos" to="/Allround/3" >
              <li>Dr. Chaos- bei Herzschmerz und Verwirrungssyptomen</li>
            </Link>
          </button>
        </ul>
      </div>

    </p>

    <img src='https://images.universal-music.de/img/assets/391/391531/4/720/let-it-out-lyric-video.jpg' />

    <div className="generaladddiv">

      <h3>Oder willst du sofort was loswerden?</h3>
      <Generaladd></Generaladd>
    </div>

  </div>

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Startseite} />
            <Route path="/impressum" component={Impressum} />
            <Route path="/Kontakt" component={Kontakt} />
            <Route exact path="/Allround/:kid" component={Allround} />
            <Route path="/update/:id" component={EintragBearbeiten} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

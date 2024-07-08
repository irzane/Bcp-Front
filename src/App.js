import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Login from './components/login'; // Assurez-vous que le chemin d'importation est correct
import Entreprise from './components/Entreprise'; // Assurez-vous que le chemin d'importation est correct
import Particulier from './components/Particulier'; // Assurez-vous que le chemin d'importation est correct
import MonCompte from './components/MonCompte'; // Assurez-vous que le chemin d'importation est correct
import Home from './components/Home'; // Assurez-vous que le chemin d'importation est correct
import Annexe from './components/Annexe'; 
import Utilisateur from './components/Utilisateur'; 
import Demande from './components/Demande'; 
import DemandeParticulier from './components/DemandeParticulier'; 
import DemandeEntreprise from './components/DemandeEntreprise'; 




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/entreprise" element={<Entreprise />} />
          <Route path="/particulier" element={<Particulier />} />
          <Route path="/moncompte" element={<MonCompte />} />
          <Route path="/" element={<Home />} />
          <Route path="/annexe" element={<Annexe />} />
          <Route path="/utilisateur" element={<Utilisateur />} />
          <Route path="/demande" element={<Demande />} />
          <Route path="/demandeParticulier" element={<DemandeParticulier />} />
          <Route path="/demandeEntreprise" element={<DemandeEntreprise />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

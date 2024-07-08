import React from 'react';
import Navbar from './Navbar';

const Demande = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden">
        <Navbar />
        <div className="container mx-auto mt-20 p-4 text-center">
          <h2 className="text-2xl font-bold mb-10">Home / Demandes de crédits</h2>
          <div className="flex justify-center space-x-4">
            <a href="/demandeParticulier" className="px-4 py-2 bg-white text-black rounded hover:text-red-800 w-4/5">Pour Particulier</a>
            <a href="/demandeEntreprise" className="px-4 py-2 bg-white text-black rounded hover:text-red-800 w-4/5">Pour Entreprise</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demande;

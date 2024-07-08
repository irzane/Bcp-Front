
  import React, { useState } from 'react';
  import Navbar from './Navbar';  
  
  const DemandeParticulier = () => {
  
    // contrôler l'ouverture et la fermeture des modales
    const [modalIsOpen, setModalIsOpen] = useState({
      annulationTAM: false,
      changementDebiteur: false,
      etatEvenementsAC: false,
      listeDemandesBenifice: false,
      etatDeblocageP: false,
      suiviActionRecouvrtP: false,
      demandeIndemnisationP: false,
      demandeGarantieEnseignantPlus: false,
      demandeGarantieFOG: false,
      demandeMEJGarantie: false,
      etatImpayes: false,
      etatRembourssementPartiel: false,
      etatReglementPrime: false,
      etatDenouementCreditP : false,
      

    });
  
    const [annulationTAMData, setAnnulationTAMData] = useState({
      numCIN: '',
      numCredit: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
     
    });
  
    const [changementDebiteurData, setChangementDebiteurData] = useState({
      numCredit: '',
      numCIN: '',
      debiteurInit: '',
      nouveauDebit: '',
      dateEffetTransfert: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
    });
  
    const [etatEvenementsACData, setEtatEvenementsACData] = useState({
      numCIN: '',
      numCredit: '',
      codeEvenement: '',
      dateEffet: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
    });
  
    const [listeDemandesBenificeData, setListeDemandesBenificeData] = useState({
      nom: '',
      prenom: '',
      numCIN: '',
      genre: '',
      montant: '',
      duree: '',
      quotiteFinancement: '',
      objetCredit: '',
      tauxInteret: '',
      coutGlobal: '',
      prix: '',
      superficie: '',
      codeVille: '',
      numTF: '',
      venderLogement: '',
      acquisitionIndivision: '', 
      typeCredit: '',
      natureTF: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
      numCredit: '',
      dateDepot: '',
      dateNaissance: '',
      adresseBenificiere: '',
      codeVilleBenificiere: '',
      codeFilliere: '',
      dureeEtude: '',
      codeVilleEcole: '',
      diplomeRecherche: '',
      cumulFraisInscription: '',
      cumulAutresFrais: '',
      montantCredit: '',
      dureeCredit: '',
      differe: '',
      tauxInteretRetard: '',
      periodicite: '',
      nomPrenomCautionTuteur: '',
      cinCautionTuteur: '',
      contractantDebiteur: ''
    });
  
    const [etatDeblocagePData, setEtatDeblocagePData] = useState({
      numCIN: '',
      numDebl: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
    });
  
    const [suiviActionRecouvrtPData, setSuiviActionRecouvrtPData] = useState({
      numCIN: '',
      dateDestination: '',
      codeAssignationPay: '',
      refAssignationPay: '',
      codeRealisationHyp: '',
      refRealisationHyp: '',
      consolidation: '',
      dateRecouvrement: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
  
    });
  
    const [demandeIndemnisationPData, setDemandeIndemnisationPData] = useState({
      numCIN: '',
      numCredit: '',
      dateEcheance: '',
      montantDemande: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
    
    });

    const [demandeGarantieEnseignantPlusData, setDemandeGarantieEnseignantPlusData] = useState({
      numCredit: '',
      numCIN: '',
      dateDepot: '',
      nom: '',
      prenom: '',
      dateNaissance: '',
      genre: '',
      adresseBenificiere: '',
      codeVilleBenificiere: '',
      codeFilliere: '',
      dureeEtude: '',
      codeVilleEcole: '',
      diplomeRecherche: '',
      cumulFraisInscription: '',
      cumulAutresFrais: '',
      montantCredit: '',
      dureeCredit: '',
      differe: '',
      tauxInteret: '',
      tauxInteretRetard: '',
      periodicite: '',
      nomPrenomCautionTuteur: '',
      cinCautionTuteur: '',
      contractantDebiteur: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
    });

    const [demandeGarantieFOGData, setDemandeGarantieFOGData] = useState({
      nom: '',
      prenom: '',
      numCIN: '',
      sexe: '',  
      dateNaissance: '',
      profession: '',
      numCreditBq: '',
      montant: '',
      duree: '',
      quotiteFinancement: '',
      objetCredit: '',
      tauxInteret: '',
      tauxInteretRetard: '',
      coutGlobal: '',
      prix: '',
      superficie: '',
      codeVille: '',
      numTitreFoncier: '',
      fraisCapitale: '',
      typeLogement: '',
      revenuMensuel: '',
      marie: '',
      revenuConjoint: '',
      nbrPrsnCharge: '',
      ancienneteBancaire: '',
      adresseLogmeent: '',
      vendeurLogemet: '',
      differe: '',
      aquisitionIndivision: '',
      typePrime: '',  
      prixTerrain: '',
      natureTF: '', 
      paysAccueil: '',
      codeBq: '',
      nbreLigne: '',
      numeroAnnexe: '',
      
    });

    const [demandeMEJGarantieData, setDemandeMEJGarantieData] = useState({
      numCIN: '',
      numCredit: '',
      montant:'',
      dateEcheance: '',
      datePremEchImpaye: '',
      montantRestant: '',
      montantReclame: '',

    });

    const [etatImpayesData, setEtatImpayesData] = useState({
      numCIN: '',
      numCredit: '',
      DateImpaye: '',
      PrincipalImpaye: '',
    });
    
    const [etatRembourssementPartielData, setEtatRembourssementPartielData] = useState({
      numCIN: '',
      numCredit: '',
      montantRembourse: '',
      dateReglement: '',
      capitalRestant: '',
      nbreEcheancesRestantes: '',
      // produitParticulier: [], // Décommente et ajuste si nécessaire
    });
  
    const [etatReglementPrimeData, setEtatReglementPrimeData] = useState({
      numCin: '',
      numCredit: '',
      DateEcheance: '',
      MontantRegle: '',
      RefReglement: '',
      DateReglement: '',
    });

    const [etatDenouementCreditPData, setEtatDenouementCreditPData] = useState({
      numCIN: '',
      idCredit: '',
      dateEffet: '',
      codeMotif: '',
    });
    

    const handleChange = (event, setData) => {
      const { name, value } = event.target;
      setData(prevState => ({
        ...prevState,
        [name]: name === 'acquisitionIndivision' ? value === 'true' : value,
      }));
    };
  
    const openModal = (modalName) => {
        setModalIsOpen({ ...modalIsOpen, [modalName]: true });
      };
    
      const closeModal = (modalName) => {
        setModalIsOpen({ ...modalIsOpen, [modalName]: false });
      };
  
    const handleSubmit = async (event, data, endpoint, setData, closeModal, modalName) => {
      event.preventDefault();
      try {
        const response = await fetch(`http://localhost:8084/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log(`Formulaire ${modalName} soumis avec succès`);
          setData({  // Réinitialisation des données du formulaire
            numCIN: '',
            numCredit: '',
            debiteurInit: '',
            nouveauDebit: '',
            dateEffetTransfert: '',
            codeEvenement: '',
            dateEffet: '',
            nom: '',
            prenom: '',
            genre: '',
            montant: '',
            duree: '',
            quotiteFinancement: '',
            objetCredit: '',
            tauxInteret: '',
            coutGlobal: '',
            prix: '',
            superficie: '',
            codeVille: '',
            numTF: '',
            venderLogement: '',
            acquisitionIndivision: '',
            typeCredit: '',
            natureTF: '',
            dateEcheance: '',
            montantDemande: '',
            dateDepot: '',
            dateNaissance: '',
            adresseBenificiere: '',
            codeVilleBenificiere: '',
            codeFilliere: '',
            dureeEtude: '',
            codeVilleEcole: '',
            diplomeRecherche: '',
            cumulFraisInscription: '',
            cumulAutresFrais: '',
            montantCredit: '',
            dureeCredit: '',
            differe: '',
            tauxInteretRetard: '',
            periodicite: '',
            nomPrenomCautionTuteur: '',
            cinCautionTuteur: '',
            contractantDebiteur: '',
            sexe: '',      
            profession: '',
            numCreditBq: '',
            numTitreFoncier: '',
            fraisCapitale: '',
            typeLogement: '',
            revenuMensuel: '',
            marie: '',
            revenuConjoint: '',
            nbrPrsnCharge: '',
            ancienneteBancaire: '',
            adresseLogmeent: '',
            vendeurLogemet: '',
            aquisitionIndivision: '',
            typePrime: '',  
            prixTerrain: '',
            paysAccueil: '',
            datePremEchImpaye: '',
            montantRestant: '',
            montantReclame: '',
            DateImpaye: '',
            PrincipalImpaye: '',
            montantRembourse: '',
            dateReglement: '',
            capitalRestant: '',
            nbreEcheancesRestantes: '',
            codeBq: '',
            nbreLigne: '',
            numeroAnnexe: '',   
            idCredit: '',
            codeMotif: '',
          });
          closeModal(modalName); 
        } else {
          console.error(`Erreur lors de la soumission du formulaire ${modalName}`);
        }
      } catch (error) {
        console.error(`Erreur: ${error}`);
      }
    };
    
  
    const handleClick = (e) => {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      window.history.back(); };
  
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden">
      <Navbar />

      <a href="/Demande"
        onClick={handleClick}
        className="text-black px-4 py-2 rounded flex items-center transition-colors duration-300 hover:text-blue-700"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg> 
         retour </a>

      <div className="container mx-auto mt-16 p-4 text-center overflow-y-auto h-screen">
        <h2 className="text-2xl font-bold mb-10">Demande / Pour Particulier</h2>
  
        <section className="flex items-center justify-center ">
      <div className="w-full max-w-2xl overflow-y-auto bg-white rounded-lg shadow-md p-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li> <button onClick={() => openModal('annulationTAM')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Annulation TAM
          </button> </li>
        <li> <button onClick={() => openModal('changementDebiteur')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Changement de Débiteur
          </button> </li>
        <li>  <button onClick={() => openModal('etatEvenementsAC')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            État Événements Avant Crédits
          </button> </li>
        <li>  <button onClick={() => openModal('listeDemandesBenifice')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Liste de Demandes de Bénéfice
          </button> </li>
        <li>  <button onClick={() => openModal('etatDeblocageP')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            État de déblocage de Crédits
          </button> </li>
         <li>  <button onClick={() => openModal('suiviActionRecouvrtP')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Suivi Action Recouvrement
          </button> </li>
        <li>  <button onClick={() => openModal('demandeIndemnisationP')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Demande d'Indemnisation
          </button>  </li>
          <li> <button  onClick={() => openModal('demandeGarantieEnseignantPlus')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Demande Garantie Enseignant Plus
      </button> </li>
      <li> <button  onClick={() => openModal('demandeGarantieFOG')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Demande Garantie FOG
      </button> </li>
      <li> <button  onClick={() => openModal('demandeMEJGarantie')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Demande MEJ Garantie
      </button> </li>
      <li> <button  onClick={() => openModal('etatImpayes')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Etat Impayés
      </button> </li>
      <li> <button  onClick={() => openModal('etatRembourssementPartiel')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Etat Rembourssement Partiel
      </button> </li>
      <li> <button  onClick={() => openModal('etatReglementPrime')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
      EtatcReglementcPrime
      </button> </li>
      <li>  <button onClick={() => openModal('etatDenouementCreditP')}    className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
      Etat Denouement CreditP    </button> </li>
      </ul>
      </div>
  
  
      {modalIsOpen.annulationTAM && (
           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
           <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
             <div className="flex justify-between items-center p-4 border-b">
             <h4 className="text-lg font-semibold mb-4">Annulation TAM </h4>
             <button
                 type="button"
                 className="text-gray-400 hover:text-gray-600"
                 onClick={() => closeModal('annulationTAM')}  >
                 &times; </button>
             </div>
         
             <div className="p-4">
        <form onSubmit={(event) => handleSubmit(event, annulationTAMData, '/annexes/addAnnulationTAM', setAnnulationTAMData, 'annulationTAM')}>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="number"
                name="numCIN"
                placeholder="00"
                value={annulationTAMData.numCIN}
                onChange={(event) => handleChange(event, setAnnulationTAMData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="number"
                name="numCredit"
                placeholder="00"
                value={annulationTAMData.numCredit}
                onChange={(event) => handleChange(event, setAnnulationTAMData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <hr className="py-2" />
          
          <div className="flex justify-end space-x-4">
          <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('annulationTAM')}
            > Annuler </button>
            <button type="submit"
              className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            > Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}
  
  {modalIsOpen.changementDebiteur && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold"> Changement de Débiteur </h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('changementDebiteur')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, changementDebiteurData, '/annexes/addChangementDebiteur', setChangementDebiteurData, 'changementDebiteur')}
          className="space-y-4"  >
         
              <div className="mb-4">
                <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
                <input
                  type="number"
                  name="numCredit"
                  placeholder="00"
                  value={changementDebiteurData.numCredit}
                  onChange={(event) => handleChange(event, setChangementDebiteurData)}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
          <div className="mb-4">
            <div className="flex flex-wrap -mx-4">
              <div className="px-4 mb-4">
                <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
                <input
                  type="number"
                  name="numCIN"
                  placeholder="00"
                  value={changementDebiteurData.numCIN}
                  onChange={(event) => handleChange(event, setChangementDebiteurData)}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className=" px-4 mb-4">
                <label htmlFor="debiteurInit" className="block text-gray-700">Débiteur Initial :</label>
                <input
                  type="text"
                  name="debiteurInit"
                  placeholder=""
                  value={changementDebiteurData.debiteurInit}
                  onChange={(event) => handleChange(event, setChangementDebiteurData)}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap -mx-4">
              <div className="px-4 mb-4">
                <label htmlFor="nouveauDebit" className="block text-gray-700">Nouveau Débiteur :</label>
                <input
                  type="text"
                  name="nouveauDebit"
                  placeholder=""
                  value={changementDebiteurData.nouveauDebit}
                  onChange={(event) => handleChange(event, setChangementDebiteurData)}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="px-4 mb-4">
                <label htmlFor="dateEffetTransfert" className="block text-gray-700">Date Effet Transfert :</label>
                <input
                  type="date"
                  name="dateEffetTransfert"
                  placeholder=""
                  value={changementDebiteurData.dateEffetTransfert}
                  onChange={(event) => handleChange(event, setChangementDebiteurData)}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
            </div>
          </div>

          <hr className="py-2" />
          <div className="flex justify-end space-x-4">
            <button type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('changementDebiteur')}
            > Annuler </button>
            <button  type="submit"
              className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            > Soumettre </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}


{modalIsOpen.etatEvenementsAC && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">État Événements AC</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('etatEvenementsAC')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, etatEvenementsACData, '/annexes/addEtatEvenementsAC', setEtatEvenementsACData, 'etatEvenementsAC')}
        >
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="number"
                name="numCIN"
                placeholder="00"
                value={etatEvenementsACData.numCIN}
                onChange={(event) => handleChange(event, setEtatEvenementsACData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="number"
                name="numCredit"
                placeholder="00"
                value={etatEvenementsACData.numCredit}
                onChange={(event) => handleChange(event, setEtatEvenementsACData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="codeEvenement" className="block text-gray-700">Code Événement :</label>
              <select
                name="codeEvenement"
                value={etatEvenementsACData.codeEvenement}
                onChange={(event) => handleChange(event, setEtatEvenementsACData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Veuillez Sélectionner --</option>
                <option value="1">Remboursement Total Anticipation</option>
                <option value="2">Décès Bénéficiaire</option>
                <option value="3">Cession Logement</option>
                <option value="4">Désistement</option>
                <option value="5">Déchéance Terme</option>
                <option value="6">Remboursement Partiel Anticipation</option>
                <option value="7">Rééchelonnement</option>
                <option value="8">Annulation Échéancier</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="dateEffet" className="block text-gray-700">Date Effet :</label>
              <input
                type="date"
                name="dateEffet"
                placeholder=""
                value={etatEvenementsACData.dateEffet}
                onChange={(event) => handleChange(event, setEtatEvenementsACData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>

          <hr className="py-2" />
              <div className="flex justify-end space-x-4">
              <button  type="button"
                  className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
                  onClick={() => closeModal('etatEvenementsAC')}
                > Annuler </button>
                <button type="submit"
                  className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
                > Soumettre
                </button>
                </div> 
        </form>
      </div>
    </div>
  </div>
)}

{modalIsOpen.listeDemandesBenifice && (
  <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-screen-md w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">Liste de Demandes de Bénéfice</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('listeDemandesBenifice')}
        >
          &times;
        </button>
      </div>
      <div className="p-4 max-h-[50vh] overflow-y-scroll">
        <form onSubmit={(event) => handleSubmit(event, listeDemandesBenificeData, '/annexes/addListeDemandesBenifice', setListeDemandesBenificeData, 'listeDemandesBenifice')}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="nom" className="text-sm font-medium text-gray-700">Nom</label>
              <input type="text" name="nom" value={listeDemandesBenificeData.nom} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="prenom" className="text-sm font-medium text-gray-700">Prénom</label>
              <input type="text" name="prenom" value={listeDemandesBenificeData.prenom} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="numCIN" className="text-sm font-medium text-gray-700">Numéro CIN</label>
              <input type="number" name="numCIN" value={listeDemandesBenificeData.numCIN} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700">Genre</h4>
            <div className="flex space-x-4">
              <label className={`flex items-center text-gray-700 rounded-md px-3 py-2 my-3 cursor-pointer ${listeDemandesBenificeData.genre === 'H' ? '' : ' hover:bg-gray-200'}`}>
                <input type="radio" name="genre" value="H" checked={listeDemandesBenificeData.genre === 'H'} onChange={(event) => handleChange(event, setListeDemandesBenificeData)} className="hidden" />
                <span className={`inline-block w-3 h-3 mr-2 rounded-full border border-gray-400 ${listeDemandesBenificeData.genre === 'H' ? 'bg-indigo-600' : 'bg-white'}`}></span>
                Homme
              </label>
              <label className={`flex items-center text-gray-700 rounded-md px-3 py-2 my-3 cursor-pointer ${listeDemandesBenificeData.genre === 'F' ? '' : ' hover:bg-gray-200'}`}>
                <input type="radio" name="genre" value="F" checked={listeDemandesBenificeData.genre === 'F'} onChange={(event) => handleChange(event, setListeDemandesBenificeData)} className="hidden" />
                <span className={`inline-block w-3 h-3 mr-2 rounded-full border border-gray-400 ${listeDemandesBenificeData.genre === 'F' ? 'bg-indigo-600' : 'bg-white'}`}></span>
                Femme
              </label>
            </div>
          </div>

          <hr className={"py-3 my-1 "}/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="montant" className="text-sm font-medium text-gray-700">Montant</label>
              <input type="number" name="montant" value={listeDemandesBenificeData.montant} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="duree" className="text-sm font-medium text-gray-700">Durée</label>
              <input type="number" name="duree" value={listeDemandesBenificeData.duree} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="quotiteFinancement" className="text-sm font-medium text-gray-700">Quotité Financement</label>
              <input type="text" name="quotiteFinancement" value={listeDemandesBenificeData.quotiteFinancement} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="objetCredit" className="text-sm font-medium text-gray-700">Objet Crédit</label>
              <input type="text" name="objetCredit" value={listeDemandesBenificeData.objetCredit} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="tauxInteret" className="text-sm font-medium text-gray-700">Taux d'Intérêt</label>
              <input type="number" name="tauxInteret" value={listeDemandesBenificeData.tauxInteret} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="coutGlobal" className="text-sm font-medium text-gray-700">Cout Global</label>
              <input type="number" name="coutGlobal" value={listeDemandesBenificeData.coutGlobal} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="prix" className="text-sm font-medium text-gray-700">Prix</label>
              <input type="number" name="prix" value={listeDemandesBenificeData.prix} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="superficie" className="text-sm font-medium text-gray-700">Superficie</label>
              <input type="text" name="superficie" value={listeDemandesBenificeData.superficie} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="codeVille" className="text-sm font-medium text-gray-700">Code Ville</label>
              <input type="text" name="codeVille" value={listeDemandesBenificeData.codeVille} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="numTF" className="text-sm font-medium text-gray-700">Numéro TF</label>
              <input type="number" name="numTF" value={listeDemandesBenificeData.numTF} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="vendeurLogement" className="text-sm font-medium text-gray-700">Vendeur de Logement</label>
              <input type="text" name="vendeurLogement" value={listeDemandesBenificeData.vendeurLogement} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700">Acquisition en Indivision</h4>
            <div className="flex space-x-4">
              <label className={`flex items-center text-gray-700 rounded-md px-3 py-2 my-3 cursor-pointer ${listeDemandesBenificeData.acquisitionIndivision === true ? '' : ' hover:bg-gray-200'}`}>
                <input type="radio" name="acquisitionIndivision" value="true" checked={listeDemandesBenificeData.acquisitionIndivision === true} onChange={(event) => handleChange(event, setListeDemandesBenificeData)} className="hidden" />
                <span className={`inline-block w-3 h-3 mr-2 rounded-full border border-gray-400 ${listeDemandesBenificeData.acquisitionIndivision === true ? 'bg-indigo-600' : 'bg-white'}`}></span>
                Oui
              </label>
              <label className={`flex items-center text-gray-700 rounded-md px-3 py-2 my-3 cursor-pointer ${listeDemandesBenificeData.acquisitionIndivision === false ? '' : ' hover:bg-gray-200'}`}>
                <input type="radio" name="acquisitionIndivision" value="false" checked={listeDemandesBenificeData.acquisitionIndivision === false } onChange={(event) => handleChange(event, setListeDemandesBenificeData)} className="hidden" />
                <span className={`inline-block w-3 h-3 mr-2 rounded-full border border-gray-400 ${listeDemandesBenificeData.acquisitionIndivision === false ? 'bg-indigo-600' : 'bg-white'}`}></span>
                Non
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="typeCredit" className="text-sm font-medium text-gray-700">Type de Crédit</label>
              <input type="text" name="typeCredit" value={listeDemandesBenificeData.typeCredit} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="natureTF" className="text-sm font-medium text-gray-700">Nature TF</label>
              <input type="text" name="natureTF" value={listeDemandesBenificeData.natureTF} onChange={(event) => handleChange(event, listeDemandesBenificeData)} required className="w-full px-3 py-2 border rounded-lg" />
            </div>
          </div>

          <hr className="py-2" />
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out" onClick={() => closeModal('listeDemandesBenifice')}>
              Annuler
            </button>
            <button type="submit" className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out">
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}


  {modalIsOpen.etatDeblocageP && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold"> État de Déblocage de crédits</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('etatDeblocageP')}
        >
          &times;
        </button>
      </div>

      <div className="p-4">
            <form onSubmit={(event) => handleSubmit(event, etatDeblocagePData, '/annexes/addDeblParticulier', setEtatDeblocagePData, 'etatDeblocageP')}>
            <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">  
                <label htmlFor="numCIN"> Numéro CIN :</label>
                <input type="number" name="numCIN" placeholder="00" value={etatDeblocagePData.numCIN} onChange={(event) => handleChange(event, setEtatDeblocagePData)} required className="w-full px-3 py-2 border rounded-lg"/>
               </div>
                <div className="w-full md:w-1/2 px-4 mb-4">  
                <label htmlFor="numDebl"> Numéro Deblocage :</label>
                <input type="number" name="numDebl" placeholder=" 00" value={etatDeblocagePData.numDebl} onChange={(event) => handleChange(event, setEtatDeblocagePData)} required className="w-full px-3 py-2 border rounded-lg"/>     
              </div>
              </div>

              <hr className="py-2" />
              <div className="flex justify-end space-x-4">
              <button  type="button"
                  className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
                  onClick={() => closeModal('etatDeblocageP')}
                > Annuler </button>
                <button type="submit"
                  className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
                > Soumettre
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>

  )}
  
  {modalIsOpen.suiviActionRecouvrtP && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
    <div className="flex justify-between items-center p-4 border-b">
    <h4 className="text-lg font-semibold mb-4">Suivi Action Recouvrement</h4>
    <button
        type="button"
        className="text-gray-400 hover:text-gray-600"
        onClick={() => closeModal('suiviActionRecouvrtP')}
      >
        &times;
      </button>
    </div>

    <div className="p-4">
          <form onSubmit={(event) => handleSubmit(event, suiviActionRecouvrtPData, '/annexes/addSuiviActionRecouvrtP', setSuiviActionRecouvrtPData, 'suiviActionRecouvrtP')}>
          
            <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="numCIN" className="block text-sm font-medium text-gray-700">Numéro CIN :</label>
            <input type="number" name="numCIN" value={suiviActionRecouvrtPData.numCIN} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="dateSituation" className="block text-sm font-medium text-gray-700">Date Situation :</label>
            <input type="date" name="dateSituation" value={suiviActionRecouvrtPData.dateSituation} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
             </div>

             <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="codeAssignationPay" className="block text-sm font-medium text-gray-700">Code Assignation Paiement :</label>
            <select name="codeAssignationPay" value={suiviActionRecouvrtPData.codeAssignationPay} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg">
              <option value="">-- Veuillez Sélectionner --</option>
              <option value="19">Dépôt de requête</option>
              <option value="21">Jugement</option>
              <option value="24">Exécutions</option>
            </select>
          </div>
          
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="refAssignationPay" className="block text-sm font-medium text-gray-700">Référence Assignation Paiement :</label>
            <input type="text" name="refAssignationPay" value={suiviActionRecouvrtPData.refAssignationPay} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="codeRealisationHyp" className="block text-sm font-medium text-gray-700">Code Réalisation Hypothèque :</label>
            <input type="text" name="codeRealisationHyp" value={suiviActionRecouvrtPData.codeRealisationHyp} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="refRealisationHyp" className="block text-sm font-medium text-gray-700">Référence Réalisation Hypothèque :</label>
            <input type="text" name="refRealisationHyp" value={suiviActionRecouvrtPData.refRealisationHyp} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="consolidation" className="block text-sm font-medium text-gray-700">Consolidation :</label>
            <input type="text" name="consolidation" value={suiviActionRecouvrtPData.consolidation} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
          <label htmlFor="dateRecouvrement" className="block text-sm font-medium text-gray-700">Date de Recouvrement :</label>
            <input type="date" name="dateRecouvrement" value={suiviActionRecouvrtPData.dateRecouvrement} onChange={(event) => handleChange(event, setSuiviActionRecouvrtPData)} className="w-full px-3 py-2 border rounded-lg" required />
          </div>

          <hr className="py-2" />
          <div className="flex justify-end space-x-4">
          <button  type="button"
           className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
            onClick={() => closeModal('suiviActionRecouvrtP')}
          > Annuler </button>
          <button type="submit"
          className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
          > Soumettre  </button>
           </div>
      </form>
    </div>
    </div>
  </div>
)}


  {modalIsOpen.demandeIndemnisationP && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold mb-4">Demande d'Indemnisation </h4>
        <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => closeModal('demandeIndemnisationP')}
          >
            &times;
          </button>
        </div>
    
        <div className="p-4">
            <form onSubmit={(event) => handleSubmit(event, demandeIndemnisationPData, '/annexes/addDemandeIndemnisationP', setDemandeIndemnisationPData, 'demandeIndemnisationP')}>
            <div className="w-full md:w-1/2 px-4 mb-4">
            <label htmlFor="numCIN" className="block text-sm font-medium text-gray-700"> Numéro CIN :</label>
                <input type="number" name="numCIN" placeholder="00 " value={demandeIndemnisationPData.numCIN} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg"/>
               
                <label htmlFor="codeIndemnisation" className="block text-sm font-medium text-gray-700"> Code d'Indemnisation :</label>
                <select name="codeIndemnisation" value={demandeIndemnisationPData.codeIndemnisation} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg">
                  <option value="">-- Veuillez Sélectionner --</option>
                  <option value="19">Indemnisation partielle</option>
                  <option value="21">Indemnisation totale</option>
                </select>
               
                <label htmlFor="dateRecouvrement" className="block text-sm font-medium text-gray-700"> Date Recouvrement :</label>
                <input type="date" name="dateRecouvrement" placeholder=" " value={demandeIndemnisationPData.dateRecouvrement} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg"/>
             
                <label htmlFor="montantDemande" className="block text-sm font-medium text-gray-700"> Montant de la Demande :</label>
                <input type="number" name="montantDemande" placeholder=" 00.00 " value={demandeIndemnisationPData.montantDemande} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg"/>
              
                <label htmlFor="codeModeReg" className="block text-sm font-medium text-gray-700"> Code Mode Régularisation :</label>
                <input type="number" name="codeModeReg" placeholder=" " value={demandeIndemnisationPData.codeModeReg} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg"/>
              
                <label htmlFor="montantAjuste" className="block text-sm font-medium text-gray-700"> Montant Ajusté :</label>
                <input type="number" name="montantAjuste" placeholder=" 00.00 " value={demandeIndemnisationPData.montantAjuste} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg"/>
              
                <label htmlFor="numDebl" className="block text-sm font-medium text-gray-700"> Numéro Deblocage :</label>
                <input type="number" name="numDebl" placeholder=" 00" value={demandeIndemnisationPData.numDebl} onChange={(event) => handleChange(event, setDemandeIndemnisationPData)} required  className="w-full px-3 py-2 border rounded-lg"/>
              </div>

              <hr className="py-2" />
              <div className="flex justify-end space-x-4">
              <button  type="button"
                  className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
                  onClick={() => closeModal('demandeIndemnisationP')}
                > Annuler </button>
                <button type="submit"
                  className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
                > Soumettre
                </button>
                </div>
            </form>
          </div>
        </div>
      </div>
  )}

{modalIsOpen.demandeGarantieEnseignantPlus && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">Demande Garantie Enseignant Plus</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('demandeGarantieEnseignantPlus')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, demandeGarantieEnseignantPlusData, '/annexes/addDemandeGarantieEnseignantPlus', setDemandeGarantieEnseignantPlusData, 'demandeGarantieEnseignantPlus')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Numéro Crédit */}
            <div className="mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="text"
                name="numCredit"
                placeholder="Numéro Crédit"
                value={demandeGarantieEnseignantPlusData.numCredit}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro CIN */}
            <div className="mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="text"
                name="numCIN"
                placeholder="Numéro CIN"
                value={demandeGarantieEnseignantPlusData.numCIN}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date Dépôt */}
            <div className="mb-4">
              <label htmlFor="dateDepot" className="block text-gray-700">Date Dépôt :</label>
              <input
                type="date"
                name="dateDepot"
                value={demandeGarantieEnseignantPlusData.dateDepot}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Nom */}
            <div className="mb-4">
              <label htmlFor="nom" className="block text-gray-700">Nom :</label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={demandeGarantieEnseignantPlusData.nom}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Prénom */}
            <div className="mb-4">
              <label htmlFor="prenom" className="block text-gray-700">Prénom :</label>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={demandeGarantieEnseignantPlusData.prenom}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date Naissance */}
            <div className="mb-4">
              <label htmlFor="dateNaissance" className="block text-gray-700">Date Naissance :</label>
              <input
                type="date"
                name="dateNaissance"
                value={demandeGarantieEnseignantPlusData.dateNaissance}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Genre */}
            <div className="mb-4">
              <label htmlFor="genre" className="block text-gray-700">Genre :</label>
              <select
                name="genre"
                value={demandeGarantieEnseignantPlusData.genre}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Genre --</option>
                <option value="F">Féminin</option>
                <option value="M">Masculin</option>
              </select>
            </div>
            {/* Adresse Bénéficiaire */}
            <div className="mb-4">
              <label htmlFor="adresseBenificiere" className="block text-gray-700">Adresse Bénéficiaire :</label>
              <input
                type="text"
                name="adresseBenificiere"
                placeholder="Adresse Bénéficiaire"
                value={demandeGarantieEnseignantPlusData.adresseBenificiere}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Code Ville Bénéficiaire */}
            <div className="mb-4">
              <label htmlFor="codeVilleBenificiere" className="block text-gray-700">Code Ville Bénéficiaire :</label>
              <input
                type="number"
                name="codeVilleBenificiere"
                placeholder="Code Ville Bénéficiaire"
                value={demandeGarantieEnseignantPlusData.codeVilleBenificiere}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Code Filière */}
            <div className="mb-4">
              <label htmlFor="codeFilliere" className="block text-gray-700">Code Filière :</label>
              <select
                name="codeFilliere"
                value={demandeGarantieEnseignantPlusData.codeFilliere}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Filière --</option>
                <option value="GESTION_DES_ENTREPRISES">Gestion des Entreprises</option>
                <option value="ECONOMIE_ET_FINANCE">Économie et Finance</option>
                <option value="EXPERTISE_COMPTABLE">Expertise Comptable</option>
                <option value="COMMUNICATION_ET_MARKETING">Communication et Marketing</option>
                <option value="FILIERES_D_INGENIERIE">Filieres d'Ingénierie</option>
                <option value="ARCHITECTURE">Architecture</option>
                <option value="FILIERE_DE_SANTE">Filière de Santé</option>
                <option value="FILIERES_UNIVERSITAIRES_SCIENTIFIQUES">Filieres Universitaires Scientifiques</option>
                <option value="CLASSES_PREPARATOIRES">Classes Préparatoires</option>
                <option value="FILIERES_JURIDIQUES_UNIVERSITAIRES">Filieres Juridiques Universitaires</option>
              </select>
            </div>
            {/* Durée Étude */}
            <div className="mb-4">
              <label htmlFor="dureeEtude" className="block text-gray-700">Durée Étude :</label>
              <input
                type="text"
                name="dureeEtude"
                placeholder="Durée Étude"
                value={demandeGarantieEnseignantPlusData.dureeEtude}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Code Ville École */}
            <div className="mb-4">
              <label htmlFor="codeVilleEcole" className="block text-gray-700">Code Ville École :</label>
              <input
                type="number"
                name="codeVilleEcole"
                placeholder="Code Ville École"
                value={demandeGarantieEnseignantPlusData.codeVilleEcole}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Diplôme Recherche */}
            <div className="mb-4">
              <label htmlFor="diplomeRecherche" className="block text-gray-700">Diplôme Recherche :</label>
              <select
                name="diplomeRecherche"
                value={demandeGarantieEnseignantPlusData.diplomeRecherche}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Diplôme --</option>
                <option value="LICENCE">Licence</option>
                <option value="MASTER">Master</option>
                <option value="DOCTORAT">Doctorat</option>
              </select>
            </div>
            {/* Cumul Frais Inscription */}
            <div className="mb-4">
              <label htmlFor="cumulFraisInscription" className="block text-gray-700">Cumul Frais Inscription :</label>
              <input
                type="number"
                name="cumulFraisInscription"
                placeholder="Cumul Frais Inscription"
                value={demandeGarantieEnseignantPlusData.cumulFraisInscription}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Cumul Autres Frais */}
            <div className="mb-4">
              <label htmlFor="cumulAutresFrais" className="block text-gray-700">Cumul Autres Frais :</label>
              <input
                type="number"
                name="cumulAutresFrais"
                placeholder="Cumul Autres Frais"
                value={demandeGarantieEnseignantPlusData.cumulAutresFrais}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant Crédit */}
            <div className="mb-4">
              <label htmlFor="montantCredit" className="block text-gray-700">Montant Crédit :</label>
              <input
                type="number"
                name="montantCredit"
                placeholder="Montant Crédit"
                value={demandeGarantieEnseignantPlusData.montantCredit}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Durée Crédit */}
            <div className="mb-4">
              <label htmlFor="dureeCredit" className="block text-gray-700">Durée Crédit :</label>
              <input
                type="text"
                name="dureeCredit"
                placeholder="Durée Crédit"
                value={demandeGarantieEnseignantPlusData.dureeCredit}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Différé */}
            <div className="mb-4">
              <label htmlFor="differe" className="block text-gray-700">Différé :</label>
              <input
                type="number"
                name="differe"
                placeholder="Différé"
                value={demandeGarantieEnseignantPlusData.differe}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Taux d'Intérêt */}
            <div className="mb-4">
              <label htmlFor="tauxInteret" className="block text-gray-700">Taux d'Intérêt :</label>
              <input
                type="number"
                name="tauxInteret"
                placeholder="Taux d'Intérêt"
                value={demandeGarantieEnseignantPlusData.tauxInteret}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Taux d'Intérêt Retard */}
            <div className="mb-4">
              <label htmlFor="tauxInteretRetard" className="block text-gray-700">Taux d'Intérêt Retard :</label>
              <input
                type="number"
                name="tauxInteretRetard"
                placeholder="Taux d'Intérêt Retard"
                value={demandeGarantieEnseignantPlusData.tauxInteretRetard}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Périodicité */}
            <div className="mb-4">
              <label htmlFor="periodicite" className="block text-gray-700">Périodicité :</label>
              <select
                name="periodicite"
                value={demandeGarantieEnseignantPlusData.periodicite}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Périodicité --</option>
                <option value="Mensuelle">Mensuelle</option>
                <option value="Trimestrielle">Trimestrielle</option>
                <option value="Annuelle">Annuelle</option>
              </select>
            </div>
            {/* Contractant Débiteur */}
            <div className="mb-4">
              <label htmlFor="contractantDebiteur" className="block text-gray-700">Contractant Débiteur :</label>
              <select
                name="contractantDebiteur"
                value={demandeGarantieEnseignantPlusData.contractantDebiteur}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Contractant Débiteur --</option>
                <option value="EtudiantBeneficiaire">Étudiant bénéficiaire</option>
                <option value="Tuteur">Tuteur</option>
                <option value="EtudiantEtTuteur">Étudiant et Tuteur</option>
              </select>
            </div>
            {/* Nom et Prénom Caution/Tuteur */}
            <div className="mb-4">
              <label htmlFor="nomPrenomCautionTuteur" className="block text-gray-700">Nom et Prénom Caution/Tuteur :</label>
              <input
                type="text"
                name="nomPrenomCautionTuteur"
                placeholder="Nom et Prénom Caution/Tuteur"
                value={demandeGarantieEnseignantPlusData.nomPrenomCautionTuteur}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* CIN Caution/Tuteur */}
            <div className="mb-4">
              <label htmlFor="cinCautionTuteur" className="block text-gray-700">CIN Caution/Tuteur :</label>
              <input
                type="text"
                name="cinCautionTuteur"
                placeholder="CIN Caution/Tuteur"
                value={demandeGarantieEnseignantPlusData.cinCautionTuteur}
                onChange={(event) => handleChange(event, setDemandeGarantieEnseignantPlusData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('demandeGarantieEnseignantPlus')}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{modalIsOpen.demandeGarantieFOG && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">Demande Garantie FOG</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('demandeGarantieFOG')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, demandeGarantieFOGData, '/annexes/addDemandeGarantieFOG', setDemandeGarantieFOGData, 'demandeGarantieFOG')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nom */}
            <div className="mb-4">
              <label htmlFor="nom" className="block text-gray-700">Nom :</label>
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={demandeGarantieFOGData.nom}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Prénom */}
            <div className="mb-4">
              <label htmlFor="prenom" className="block text-gray-700">Prénom :</label>
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={demandeGarantieFOGData.prenom}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro CIN */}
            <div className="mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="text"
                name="numCIN"
                placeholder="Numéro CIN"
                value={demandeGarantieFOGData.numCIN}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date Naissance */}
            <div className="mb-4">
              <label htmlFor="dateNaissance" className="block text-gray-700">Date Naissance :</label>
              <input
                type="date"
                name="dateNaissance"
                value={demandeGarantieFOGData.dateNaissance}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Sexe */}
            <div className="mb-4">
              <label htmlFor="sexe" className="block text-gray-700">Sexe :</label>
              <select
                name="sexe"
                value={demandeGarantieFOGData.sexe}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Sexe --</option>
                <option value="Féminin">Féminin</option>
                <option value="Masculin">Masculin</option>
              </select>
            </div>
            {/* Profession */}
            <div className="mb-4">
              <label htmlFor="profession" className="block text-gray-700">Profession :</label>
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={demandeGarantieFOGData.profession}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro Crédit Bq */}
            <div className="mb-4">
              <label htmlFor="numCreditBq" className="block text-gray-700">Numéro Crédit Bq :</label>
              <input
                type="text"
                name="numCreditBq"
                placeholder="Numéro Crédit Bq"
                value={demandeGarantieFOGData.numCreditBq}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant */}
            <div className="mb-4">
              <label htmlFor="montant" className="block text-gray-700">Montant :</label>
              <input
                type="number"
                name="montant"
                placeholder="Montant"
                value={demandeGarantieFOGData.montant}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Durée */}
            <div className="mb-4">
              <label htmlFor="duree" className="block text-gray-700">Durée :</label>
              <input
                type="text"
                name="duree"
                placeholder="Durée"
                value={demandeGarantieFOGData.duree}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Quotité Financement */}
            <div className="mb-4">
              <label htmlFor="quotiteFinancement" className="block text-gray-700">Quotité Financement :</label>
              <input
                type="number"
                name="quotiteFinancement"
                placeholder="Quotité Financement"
                value={demandeGarantieFOGData.quotiteFinancement}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Objet Crédit */}
            <div className="mb-4">
              <label htmlFor="objetCredit" className="block text-gray-700">Objet Crédit :</label>
              <select
                name="objetCredit"
                value={demandeGarantieFOGData.objetCredit}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Objet Crédit --</option>
                <option value="Achat de logement">Achat de logement</option>
                <option value="Construction de logement">Construction de logement</option>
                <option value="Achat de terrain et sa construction">Achat de terrain et sa construction</option>
              </select>
            </div>
            {/* Taux d'Intérêt */}
            <div className="mb-4">
              <label htmlFor="tauxInteret" className="block text-gray-700">Taux d'Intérêt :</label>
              <input
                type="number"
                name="tauxInteret"
                placeholder="Taux d'Intérêt"
                value={demandeGarantieFOGData.tauxInteret}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Taux d'Intérêt Retard */}
            <div className="mb-4">
              <label htmlFor="tauxInteretRetard" className="block text-gray-700">Taux d'Intérêt Retard :</label>
              <input
                type="number"
                name="tauxInteretRetard"
                placeholder="Taux d'Intérêt Retard"
                value={demandeGarantieFOGData.tauxInteretRetard}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Cout Global */}
            <div className="mb-4">
              <label htmlFor="coutGlobal" className="block text-gray-700">Cout Global :</label>
              <input
                type="number"
                name="coutGlobal"
                placeholder="Cout Global"
                value={demandeGarantieFOGData.coutGlobal}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Prix */}
            <div className="mb-4">
              <label htmlFor="prix" className="block text-gray-700">Prix :</label>
              <input
                type="number"
                name="prix"
                placeholder="Prix"
                value={demandeGarantieFOGData.prix}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Superficie */}
            <div className="mb-4">
              <label htmlFor="superficie" className="block text-gray-700">Superficie :</label>
              <input
                type="number"
                name="superficie"
                placeholder="Superficie"
                value={demandeGarantieFOGData.superficie}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Code Ville */}
            <div className="mb-4">
              <label htmlFor="codeVille" className="block text-gray-700">Code Ville :</label>
              <input
                type="number"
                name="codeVille"
                placeholder="Code Ville"
                value={demandeGarantieFOGData.codeVille}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro Titre Foncier */}
            <div className="mb-4">
              <label htmlFor="numTitreFoncier" className="block text-gray-700">Numéro Titre Foncier :</label>
              <input
                type="text"
                name="numTitreFoncier"
                placeholder="Numéro Titre Foncier"
                value={demandeGarantieFOGData.numTitreFoncier}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Frais Capitale */}
            <div className="mb-4">
              <label htmlFor="fraisCapitale" className="block text-gray-700">Frais Capitale :</label>
              <input
                type="number"
                name="fraisCapitale"
                placeholder="Frais Capitale"
                value={demandeGarantieFOGData.fraisCapitale}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Type Logement */}
            <div className="mb-4">
              <label htmlFor="typeLogement" className="block text-gray-700">Type Logement :</label>
              <select
                name="typeLogement"
                value={demandeGarantieFOGData.typeLogement}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Type Logement --</option>
                <option value="Locataire">Locataire</option>
                <option value="Bidonvillois">Bidonvillois</option>
                <option value="MRE">MRE</option>
                <option value="Bénéficiaire VSB Descendant">Bénéficiaire VSB Descendant</option>
              </select>
            </div>
            {/* Revenu Mensuel */}
            <div className="mb-4">
              <label htmlFor="revenuMensuel" className="block text-gray-700">Revenu Mensuel :</label>
              <select
                name="revenuMensuel"
                value={demandeGarantieFOGData.revenuMensuel}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Revenu Mensuel --</option>
                <option value="Ménage">Ménage</option>
                <option value="Individuel">Individuel</option>
              </select>
            </div>
            {/* Marié */}
            <div className="mb-4">
              <label htmlFor="marie" className="block text-gray-700">Marié :</label>
              <input
                type="checkbox"
                name="marie"
                checked={demandeGarantieFOGData.marie}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-5 h-5"
              />
            </div>
            {/* Revenu Conjoint */}
            <div className="mb-4">
              <label htmlFor="revenuConjoint" className="block text-gray-700">Revenu Conjoint :</label>
              <input
                type="number"
                name="revenuConjoint"
                placeholder="Revenu Conjoint"
                value={demandeGarantieFOGData.revenuConjoint}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Nombre de Personnes à Charge */}
            <div className="mb-4">
              <label htmlFor="nbrPrsnCharge" className="block text-gray-700">Nombre de Personnes à Charge :</label>
              <input
                type="text"
                name="nbrPrsnCharge"
                placeholder="Nombre de Personnes à Charge"
                value={demandeGarantieFOGData.nbrPrsnCharge}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Ancienneté Bancaire */}
            <div className="mb-4">
              <label htmlFor="ancienneteBancaire" className="block text-gray-700">Ancienneté Bancaire :</label>
              <input
                type="number"
                name="ancienneteBancaire"
                placeholder="Ancienneté Bancaire"
                value={demandeGarantieFOGData.ancienneteBancaire}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Adresse Logement */}
            <div className="mb-4">
              <label htmlFor="adresseLogmeent" className="block text-gray-700">Adresse Logement :</label>
              <input
                type="text"
                name="adresseLogmeent"
                placeholder="Adresse Logement"
                value={demandeGarantieFOGData.adresseLogmeent}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Vendeur Logement */}
            <div className="mb-4">
              <label htmlFor="vendeurLogemet" className="block text-gray-700">Vendeur Logement :</label>
              <input
                type="number"
                name="vendeurLogemet"
                placeholder="Vendeur Logement"
                value={demandeGarantieFOGData.vendeurLogemet}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Différé */}
            <div className="mb-4">
              <label htmlFor="differe" className="block text-gray-700">Différé :</label>
              <input
                type="number"
                name="differe"
                placeholder="Différé"
                value={demandeGarantieFOGData.differe}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Acquisition Indivision */}
            <div className="mb-4">
              <label htmlFor="aquisitionIndivision" className="block text-gray-700">Acquisition Indivision :</label>
              <select
                name="aquisitionIndivision"
                value={demandeGarantieFOGData.aquisitionIndivision}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Acquisition Indivision --</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>
            {/* Type Prime */}
            <div className="mb-4">
              <label htmlFor="typePrime" className="block text-gray-700">Type Prime :</label>
              <select
                name="typePrime"
                value={demandeGarantieFOGData.typePrime}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Type Prime --</option>
                <option value="Flat linéaire">Flat linéaire</option>
                <option value="Périodique linéaire">Périodique linéaire</option>
                <option value="Périodique dégressive">Périodique dégressive</option>
                <option value="Flat dégressive">Flat dégressive</option>
              </select>
            </div>
            {/* Prix Terrain */}
            <div className="mb-4">
              <label htmlFor="prixTerrain" className="block text-gray-700">Prix Terrain :</label>
              <input
                type="number"
                name="prixTerrain"
                placeholder="Prix Terrain"
                value={demandeGarantieFOGData.prixTerrain}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Nature TF */}
            <div className="mb-4">
              <label htmlFor="natureTF" className="block text-gray-700">Nature TF :</label>
              <select
                name="natureTF"
                value={demandeGarantieFOGData.natureTF}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-- Sélectionner Nature TF --</option>
                <option value="Mère">Mère</option>
                <option value="Parcellaire">Parcellaire</option>
              </select>
            </div>
            {/* Pays Accueil */}
            <div className="mb-4">
              <label htmlFor="paysAccueil" className="block text-gray-700">Pays Accueil :</label>
              <input
                type="text"
                name="paysAccueil"
                placeholder="Pays Accueil"
                value={demandeGarantieFOGData.paysAccueil}
                onChange={(event) => handleChange(event, setDemandeGarantieFOGData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <hr className="py-2" />

<div className="flex justify-end space-x-4">
          <button
                    type="button"
                    className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
                    onClick={() => closeModal('demandeGarantieFOG')}
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )} 

{modalIsOpen.demandeMEJGarantie && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">Demande MEJ Garantie</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('demandeMEJGarantie')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, demandeMEJGarantieData, '/annexes/addDemandeMEJGarantie', setDemandeMEJGarantieData, 'demandeMEJGarantie')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Numéro CIN */}
            <div className="mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="text"
                name="numCIN"
                placeholder="Numéro CIN"
                value={demandeMEJGarantieData.numCIN}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro Crédit */}
            <div className="mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="text"
                name="numCredit"
                placeholder="Numéro Crédit"
                value={demandeMEJGarantieData.numCredit}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant */}
            <div className="mb-4">
              <label htmlFor="montant" className="block text-gray-700">Montant :</label>
              <input
                type="number"
                name="montant"
                placeholder="Montant"
                value={demandeMEJGarantieData.montant}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date Échéance */}
            <div className="mb-4">
              <label htmlFor="dateEcheance" className="block text-gray-700">Date Échéance :</label>
              <input
                type="date"
                name="dateEcheance"
                value={demandeMEJGarantieData.dateEcheance}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date Première Échéance Impayée */}
            <div className="mb-4">
              <label htmlFor="datePremEchImpaye" className="block text-gray-700">Date Première Échéance Impayée :</label>
              <input
                type="date"
                name="datePremEchImpaye"
                value={demandeMEJGarantieData.datePremEchImpaye}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant Restant */}
            <div className="mb-4">
              <label htmlFor="montantRestant" className="block text-gray-700">Montant Restant :</label>
              <input
                type="number"
                name="montantRestant"
                placeholder="Montant Restant"
                value={demandeMEJGarantieData.montantRestant}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant Réclamé */}
            <div className="mb-4">
              <label htmlFor="montantReclame" className="block text-gray-700">Montant Réclamé :</label>
              <input
                type="number"
                name="montantReclame"
                placeholder="Montant Réclamé"
                value={demandeMEJGarantieData.montantReclame}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Produit Particulier */}
            {/* Décommente et ajuste si nécessaire */}
            {/* <div className="mb-4">
              <label htmlFor="produitParticulier" className="block text-gray-700">Produit Particulier :</label>
              <input
                type="text"
                name="produitParticulier"
                placeholder="Produit Particulier"
                value={demandeMEJGarantieData.produitParticulier}
                onChange={(event) => handleChange(event, setDemandeMEJGarantieData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div> */}
          </div>
          <div className="flex justify-end space-x-4">
          <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('demandeMEJGarantie')}
            > Annuler </button>
            <button type="submit"
              className="px-6 py-1 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            > Soumettre
            </button>
            </div> 
          </form>
         </div>
       </div>
     </div>
     )}

{modalIsOpen.etatImpayes && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">État des Impayés</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('EtatImpayes')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, etatImpayesData, '/annexes/addEtatImpayes', setEtatImpayesData, 'EtatImpayes')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="text"
                name="numCIN"
                placeholder="Numéro CIN"
                value={etatImpayesData.numCIN}
                onChange={(event) => handleChange(event, setEtatImpayesData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="text"
                name="numCredit"
                placeholder="Numéro Crédit"
                value={etatImpayesData.numCredit}
                onChange={(event) => handleChange(event, setEtatImpayesData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="DateImpaye" className="block text-gray-700">Date Impayé :</label>
              <input
                type="date"
                name="DateImpaye"
                value={etatImpayesData.DateImpaye}
                onChange={(event) => handleChange(event, setEtatImpayesData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="PrincipalImpaye" className="block text-gray-700">Principal Impayé :</label>
              <input
                type="number"
                name="PrincipalImpaye"
                placeholder="Principal Impayé"
                value={etatImpayesData.PrincipalImpaye}
                onChange={(event) => handleChange(event, setEtatImpayesData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="produitParticulier" className="block text-gray-700">Produit Particulier :</label>
              <input
                type="text"
                name="produitParticulier"
                placeholder="Produit Particulier"
                value={etatImpayesData.produitParticulier}
                onChange={(event) => handleChange(event, setEtatImpayesData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div> */}
          </div>
          <hr className="my-4" />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('etatImpayes')}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{modalIsOpen.etatRembourssementPartiel && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">État de Remboursement Partiel</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('etatRembourssementPartiel')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, etatRembourssementPartielData, '/annexes/addEtatRembourssementPartiel', setEtatRembourssementPartielData, 'etatRembourssementPartiel')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Numéro CIN */}
            <div className="mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="text"
                name="numCIN"
                placeholder="Numéro CIN"
                value={etatRembourssementPartielData.numCIN}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro Crédit */}
            <div className="mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="text"
                name="numCredit"
                placeholder="Numéro Crédit"
                value={etatRembourssementPartielData.numCredit}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant Remboursé */}
            <div className="mb-4">
              <label htmlFor="montantRembourse" className="block text-gray-700">Montant Remboursé :</label>
              <input
                type="number"
                name="montantRembourse"
                placeholder="Montant Remboursé"
                value={etatRembourssementPartielData.montantRembourse}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date de Règlement */}
            <div className="mb-4">
              <label htmlFor="dateReglement" className="block text-gray-700">Date de Règlement :</label>
              <input
                type="date"
                name="dateReglement"
                value={etatRembourssementPartielData.dateReglement}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Capital Restant */}
            <div className="mb-4">
              <label htmlFor="capitalRestant" className="block text-gray-700">Capital Restant :</label>
              <input
                type="number"
                name="capitalRestant"
                placeholder="Capital Restant"
                value={etatRembourssementPartielData.capitalRestant}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Nombre d'Échéances Restantes */}
            <div className="mb-4">
              <label htmlFor="nbreEcheancesRestantes" className="block text-gray-700">Nombre d'Échéances Restantes :</label>
              <input
                type="number"
                name="nbreEcheancesRestantes"
                placeholder="Nombre d'Échéances Restantes"
                value={etatRembourssementPartielData.nbreEcheancesRestantes}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Liste des Produits Particuliers */}
            {/* <div className="mb-4">
              <label htmlFor="produitParticulier" className="block text-gray-700">Produit Particulier :</label>
              <input
                type="text"
                name="produitParticulier"
                placeholder="Produit Particulier"
                value={etatRembourssementPartielData.produitParticulier}
                onChange={(event) => handleChange(event, setEtatRembourssementPartielData)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div> */}
          </div>
          <hr className="my-4" />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('etatRembourssementPartiel')}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{modalIsOpen.etatReglementPrime && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">État de Règlement de Prime</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('EtatReglementPrime')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, etatReglementPrimeData, '/annexes/addEtatReglementPrime', setEtatReglementPrimeData, 'EtatReglementPrime')}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Numéro CIN */}
            <div className="mb-4">
              <label htmlFor="numCin" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="text"
                name="numCin"
                placeholder="Numéro CIN"
                value={etatReglementPrimeData.numCin}
                onChange={(event) => handleChange(event, setEtatReglementPrimeData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Numéro Crédit */}
            <div className="mb-4">
              <label htmlFor="numCredit" className="block text-gray-700">Numéro Crédit :</label>
              <input
                type="text"
                name="numCredit"
                placeholder="Numéro Crédit"
                value={etatReglementPrimeData.numCredit}
                onChange={(event) => handleChange(event, setEtatReglementPrimeData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date d'Échéance */}
            <div className="mb-4">
              <label htmlFor="DateEcheance" className="block text-gray-700">Date d'Échéance :</label>
              <input
                type="date"
                name="DateEcheance"
                value={etatReglementPrimeData.DateEcheance}
                onChange={(event) => handleChange(event, setEtatReglementPrimeData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Montant Réglé */}
            <div className="mb-4">
              <label htmlFor="MontantRegle" className="block text-gray-700">Montant Réglé :</label>
              <input
                type="number"
                name="MontantRegle"
                placeholder="Montant Réglé"
                value={etatReglementPrimeData.MontantRegle}
                onChange={(event) => handleChange(event, setEtatReglementPrimeData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Référence de Règlement */}
            <div className="mb-4">
              <label htmlFor="RefReglement" className="block text-gray-700">Référence de Règlement :</label>
              <input
                type="text"
                name="RefReglement"
                placeholder="Référence de Règlement"
                value={etatReglementPrimeData.RefReglement}
                onChange={(event) => handleChange(event, setEtatReglementPrimeData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date de Règlement */}
            <div className="mb-4">
              <label htmlFor="DateReglement" className="block text-gray-700">Date de Règlement :</label>
              <input
                type="date"
                name="DateReglement"
                value={etatReglementPrimeData.DateReglement}
                onChange={(event) => handleChange(event, setEtatReglementPrimeData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('etatReglementPrime')}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

{modalIsOpen.etatDenouementCreditP && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">État de Dénouement de Crédit</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('etatDenouementCreditP')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, etatDenouementCreditPData, '/annexes/addEtatDenouementCreditP', setEtatDenouementCreditPData, 'etatDenouementCreditP')}
        >
          
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label htmlFor="numCIN" className="block text-gray-700">Numéro CIN :</label>
              <input
                type="number"
                name="numCIN"
                placeholder="00"
                value={etatDenouementCreditPData.numCIN}
                onChange={(event) => handleChange(event, setEtatDenouementCreditPData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* ID Crédit */}
            <div className="mb-4">
              <label htmlFor="idCredit" className="block text-gray-700">ID Crédit :</label>
              <input
                type="text"
                name="idCredit"
                placeholder="ID Crédit"
                value={etatDenouementCreditPData.idCredit}
                onChange={(event) => handleChange(event, setEtatDenouementCreditPData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Date d'Effet */}
            <div className="mb-4">
              <label htmlFor="dateEffet" className="block text-gray-700">Date d'Effet :</label>
              <input
                type="date"
                name="dateEffet"
                value={etatDenouementCreditPData.dateEffet}
                onChange={(event) => handleChange(event, setEtatDenouementCreditPData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Code Motif */}
            <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="codeMotif" className="text-sm font-medium text-gray-700">Code Motif :</label>
                  <select
                    name="codeMotif"
                    value={etatDenouementCreditPData.codeMotif}
                    onChange={(event) => handleChange(event, setEtatDenouementCreditPData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                    >
                    <option value="">-- Veuillez Sélectionner --</option>
                    <option value="1">Apurement</option>
                    <option value="2">Rééchelonnement / Consolidation</option>
                  </select>
                  </div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('etatDenouementCreditP')}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition duration-150 ease-in-out"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}


      </section>
      </div>
      </div>
  
    );
  };
  
  export default DemandeParticulier;
  
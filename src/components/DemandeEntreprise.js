
import React, { useState } from 'react';
import Navbar from './Navbar';  


const DemandeEntreprise = () => {
  // contrôler l'ouverture et la fermeture des modales
  const [modalIsOpen, setModalIsOpen] = useState({
    tam: false,
    etatDeblocageE: false,
    detailReglementRistourne: false,
    suiviActionRecouvrtE: false,
    etatAnnulationMej: false,
    demandeIndemnisationE: false,
    reglementMej: false,
    etatRecouvrementRealise: false,
    restitutionMej: false,
    etatDenouementCreditE: false,

    

  });

  const [tamData, setTamData] = useState({
    numCIN: '',
    numCredit: '',
    dateEcheance: '',
    principal: '',
    encours: '',
    interetsHT: '',
    tva: '',
    interetTTC: '',
    totalEcheanceTTC: '',
    ristourneTTC: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [etatDeblocageEData, setEtatDeblocageEData] = useState({
    numCredit: '',
    dateDebl: '',
    montantDebl: '',
    dernierDebl: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [detailReglementRistourneData, setDetailReglementRistourneData] = useState({
    idCredit: '',
    dateEcheance: '',
    montantRistoune: '',
    dateReglement: '',
    refReglement: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [suiviActionRecouvrtEData, setSuiviActionRecouvrtEData] = useState({
    numCIN: '',
    montantFrais: '',
    montantRecouvRealise: '',
    typeAction: '',
    codeTypeSurete: '',
    idSurete: '',
    etatAvancement: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [etatAnnulationMejData, setEtatAnnulationMejData] = useState({
    idCredit: '',
    codeMotif: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [demandeIndemnisationEData, setDemandeIndemnisationEData] = useState({
    numCredit: '',
    dateEcheance: '',
    montantDemande: '',
    capitalRestant: '',
    motifDemande: '',
    datePremImpaye: '',
    dateDeclarationContentieux: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [reglementMejData, setReglementMejData] = useState({
    idCredit: '',
    montantMEJ: '',
    dateReglement: '',
    refReglement: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [etatRecouvrementRealiseData, setEtatRecouvrementRealiseData] = useState({
    idCredit: '',
    recouvrementRealise: '',
    montantFrais: '',
    partTamwil: '',
    dateRecouvrementBq: '',
    dateVirementTamwil: '',
    refReglement: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',
  });

  const [restitutionMejData, setRestitutionMejData] = useState({
    idCredit: '',
    montantRest: '',
    dateRestitution: '',
    refRestitution: '',
    codeBq: '',
    nbreLigne: '',
    numeroAnnexe: '',

  });

  const [etatDenouementCreditEData, setEtatDenouementCreditEData] = useState({
    idCredit: '',
    dateEffet: '',
    codeMotif: '',
  });

  const openModal = (modalName) => {
    setModalIsOpen({ ...modalIsOpen, [modalName]: true });
  };

  const closeModal = (modalName) => {
    setModalIsOpen({ ...modalIsOpen, [modalName]: false });
  };

  //  gérer les changements de valeurs dans les champs de formulaire
  const handleChange = (event, setData) => {
    const { name, value } = event.target;
    setData(prevState => ({
      ...prevState,
      [name]: name === 'acquisitionIndivision' ? value === 'true' : value,
    }));
  };

  //  soumettre formulaire et sauvegarder les données dans la base de données
  const handleSubmit = async (event, data, setData, modalName, endpoint) => {
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
        const result = await response.json();
        console.log('Formulaire soumis avec succès:', result);
        setData({
            numCIN: '',
            numCredit: '',
            dateEcheance: '',
            principal: '',
            encours: '',
            interetsHT: '',
            tva: '',
            interetTTC: '',
            totalEcheanceTTC: '',
            ristourneTTC:'',
            dateDebl: '',
            montantDebl: '',
            dernierDebl: '',
            idCredit: '',
            montantRistoune: '',
            dateReglement: '',
            refReglement: '',
            montantFrais: '',
            montantRecouvRealise: '',
            typeAction: '',
            codeTypeSurete: '',
            idSurete: '',
            etatAvancement: '',
            codeMotif: '',
            montantDemande: '',
            capitalRestant: '',
            motifDemande: '',
            datePremImpaye: '',
            dateDeclarationContentieux: '',
            montantMEJ: '',
            codeBq: '',
            nbreLigne: '',
            numeroAnnexe: '',
            recouvrementRealise: '',
            partTamwil: '',
            dateRecouvrementBq: '',
            dateVirementTamwil: '',
            montantRest: '', // Added from restitutionMejData
            dateRestitution: '', // Added from restitutionMejData
            refRestitution: '' ,// Added from restitutionMejData           
            dateEffet: '',
          
        });
    
        closeModal(modalName);
      } else {
        console.error('Erreur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
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
      <h2 className="text-2xl font-bold mb-10">Demande / Pour Entreprise</h2>

      <section className="flex items-center justify-center ">
      <div className="w-full max-w-2xl overflow-y-auto bg-white rounded-lg shadow-md p-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li> <button onClick={() => openModal('tam')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Tableau d'Amortissement 
          </button> </li>
        <li> <button onClick={() => openModal('etatDeblocageE')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Etat de déblocage de crédits          </button> </li>
        <li>  <button onClick={() => openModal('detailReglementRistourne')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Détail de reglement ristourne          </button> </li>
        <li>  <button onClick={() => openModal('suiviActionRecouvrtE')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Suivi Action Recouvrement           </button> </li>
        <li>  <button onClick={() => openModal('etatAnnulationMej')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Etat Annulation Mise En Jeu          </button> </li>
         <li>  <button onClick={() => openModal('demandeIndemnisationE')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
         Demande d'Indemnisation          </button> </li>
        <li>  <button onClick={() => openModal('reglementMej')} className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        Reglement Mise En Jeu          </button>  </li>
        <li>  <button onClick={() => openModal('etatRecouvrementRealise')}  className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
        État Recouvrement Réalisé      </button> </li>
        <li>  <button onClick={() => openModal('restitutionMej')}    className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Restitution Mise En Jeu     </button> </li>
            <li>  <button onClick={() => openModal('etatDenouementCreditE')}    className="w-full py-3 px-4 text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out rounded border border-gray-300 shadow-sm">
            Etat Denouement CreditE    </button> </li>
      </ul>
      </div>
      
     
       {modalIsOpen.tam && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
      <div className="flex justify-between items-center p-4 border-b">
      <h4 className="text-lg font-semibold"> Tableau d'Amortissement</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('tam')}
          > &times; </button>
          </div>

            <div className="p-4">
            <form onSubmit={(event) => handleSubmit(event, tamData, '/annexes/addTAM', setTamData, 'tam')}>
            <div className="flex flex-wrap -mx-4 mb-4">
                        <hr className="py-2" />
                        <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="numCIN" className="text-sm font-medium text-gray-700">Numéro CIN :</label>
                  <input type="number" id="numCIN" name="numCIN" placeholder="00" value={tamData.numCIN} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="numCredit" className="text-sm font-medium text-gray-700">Numéro Crédit :</label>
                  <input type="number" name="numCredit" placeholder="00 " value={tamData.numCredit} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                       </div>
                       <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="dateEcheance" className="text-sm font-medium text-gray-700">Date Echeance :</label>
                  <input type="date" name="dateEcheance" placeholder="  " value={tamData.dateEcheance} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg"/>
                 </div>
                 <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="principal" className="text-sm font-medium text-gray-700">Principal :</label>
                  <input type="text" name="principal" placeholder=" " value={tamData.principal} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                </div>
                   <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="encours" className="text-sm font-medium text-gray-700">Encours :</label>
                  <input type="text" name="encours" placeholder=" " value={tamData.encours} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                   </div>
                   <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="interetsHT" className="text-sm font-medium text-gray-700">Interets HT :</label>
                  <input type="number" name="interetsHT" placeholder="00.0 " value={tamData.interetsHT} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                   </div>  
                    <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="tva" className="text-sm font-medium text-gray-700">TVA :</label>
                  <input type="number" name="tva" placeholder="00.0 " value={tamData.tva} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                   </div>
                   <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="interetTTC" className="text-sm font-medium text-gray-700">Interets TTC :</label>
                  <input type="number" name="interetTTC" placeholder=" 00.0 " value={tamData.interetTTC} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                   <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="totalEcheanceTTC" className="text-sm font-medium text-gray-700">Total Echance TTC :</label>
                  <input type="number" name="totalEcheanceTTC" placeholder="00.0 " value={tamData.totalEcheanceTTC} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">

                  <label htmlFor="ristourneTTC" className="text-sm font-medium text-gray-700">Ristourne TTC :</label>
                  <input type="number" name="ristourneTTC" placeholder=" 00.0" value={tamData.ristourneTTC} onChange={(event) => handleChange(event, setTamData)} required   className="w-full px-3 py-2 border rounded-lg" />
                </div>
                </div>
                <hr className="py-2" />

             
          <div className="flex justify-end space-x-4">
          <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('tam')}
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

{modalIsOpen.etatDeblocageE && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center p-4 border-b">
            <h4 className="modal-title">État de Déblocage de crédits</h4>
            <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => closeModal('etatDeblocageE')}
            >
            &times;
          </button>
          </div>
          <div className="p-4">
          <form onSubmit={(event) =>  handleSubmit( event,
                    etatDeblocageEData,  '/annexes/addDeblEntreprise', setEtatDeblocageEData, 'etatDeblocageE' )}
              >

                  <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="numCIN"  className="text-sm font-medium text-gray-700"> Numéro CIN :</label>
                  <input
                    type="number"
                    name="numCIN"
                    placeholder="00"
                    value={etatDeblocageEData.numCIN}
                    onChange={(event) => handleChange(event, setEtatDeblocageEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="numDebl" className="text-sm font-medium text-gray-700"> Numéro Deblocage :</label>
                  <input
                    type="number"
                    name="numDebl"
                    placeholder=" 00"
                    value={etatDeblocageEData.numDebl}
                    onChange={(event) => handleChange(event, setEtatDeblocageEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  </div>
                
                <div className="flex justify-end space-x-4">
          <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('etatDeblocageE')}
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

    {modalIsOpen.detailReglementRistourne && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">Détail de Réglement Ristourne  </h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('detailReglementRistourne')}        >
          &times;
        </button>
      </div>

            <div className="p-4">
            <form onSubmit={(event) => handleSubmit(event, detailReglementRistourneData, '/annexes/addDReglementRistourne', setDetailReglementRistourneData, 'DetailReglementRistourne')}>
            <div className="w-full md:w-1/2 px-4 mb-4">
 
                <label htmlFor="idCredit" className="text-sm font-medium text-gray-700">Id Crédit :</label>
                  <input
                    type="number"
                    name="idCredit"
                    placeholder="00 "
                    value={detailReglementRistourneData.idCredit}
                    onChange={(event) => handleChange(event, setDetailReglementRistourneData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="dateEcheance" className="text-sm font-medium text-gray-700"> Date Echeance :</label>
                  <input
                    type="date"
                    name="dateEcheance"
                    placeholder=" "
                    value={detailReglementRistourneData.dateEcheance}
                    onChange={(event) => handleChange(event, setDetailReglementRistourneData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="montantRistoune" className="text-sm font-medium text-gray-700">Montant Ristoune :</label>
                 <input
                    type="number"
                    name="montantRistoune"
                    placeholder="00.00 "
                    value={detailReglementRistourneData.montantRistoune}
                    onChange={(event) => handleChange(event, setDetailReglementRistourneData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="dateReglement" className="text-sm font-medium text-gray-700"> Date de Reglement :</label>
                  <input
                    type="date"
                    name="dateReglement"
                    placeholder=""
                    value={detailReglementRistourneData.dateReglement}
                    onChange={(event) => handleChange(event, setDetailReglementRistourneData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="refReglement" className="text-sm font-medium text-gray-700">Ref de Reglement :</label>
                   <input
                    type="text"
                    name="refReglement"
                    placeholder=""
                    value={detailReglementRistourneData.refReglement}
                    onChange={(event) => handleChange(event, setDetailReglementRistourneData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
           <div className="flex justify-end space-x-4">
          <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('detailReglementRistourne')}
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

{modalIsOpen.suiviActionRecouvrtE && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <h4 className="text-sm font-medium text-gray-700"> Suivi d'Action de Recouvrement</h4>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => closeModal('etatEvenementsAC')}
                  >
                    &times;
                  </button>
                </div>

                <div className="p-4">
                <form onSubmit={(event) => handleSubmit(event, suiviActionRecouvrtEData, '/annexes/addSuiviActionRecouvrtE', setSuiviActionRecouvrtEData, 'suiviActionRecouvrtE')}>
               
                <div className="px-4 mb-4">
                <label htmlFor="numCIN" className="text-sm font-medium text-gray-700">Numéro CIN :</label>
                  <input
                    type="number"
                    name="numCIN"
                    placeholder="00"
                    value={suiviActionRecouvrtEData.numCIN}
                    onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>

                 <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="montantFrais" className="text-sm font-medium text-gray-700">Montant Frais :</label>
                 <input
                    type="number"
                    name="montantFrais"
                    placeholder="00.00"
                    value={suiviActionRecouvrtEData.montantFrais}
                    onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="montantRecouvRealise" className="text-sm font-medium text-gray-700">Montant Recouvrement Réalisé :</label>
                 <input
                    type="number"
                    name="montantRecouvRealise"
                    placeholder="00.00"
                    value={suiviActionRecouvrtEData.montantRecouvRealise}
                    onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  </div>

                <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="typeAction" className="text-sm font-medium text-gray-700">Type Action :</label>
                <select
                  name="typeAction"
                  value={suiviActionRecouvrtEData.typeAction}
                  onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="">-- Veuillez Sélectionner --</option>
                  <option value="A">Assignation en paiement</option>
                  <option value="R">Réalisation de sûreté</option>
                </select>
                </div>

                <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="codeTypeSurete" className="text-sm font-medium text-gray-700">Code Type Sureté :</label>
                   <input
                    type="text"
                    name="codeTypeSurete"
                    placeholder="code type sureté"
                    value={suiviActionRecouvrtEData.idCredit}
                    onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                    required
                  />
                  </div>
                  </div>

                 <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="idSurete" className="text-sm font-medium text-gray-700">Id Sureté :</label>
                  <input
                    type="text"
                    name="idSurete"
                    placeholder="00 "
                    value={suiviActionRecouvrtEData.idSurete}
                    onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                <label htmlFor="etatAvancement" className="text-sm font-medium text-gray-700">État d'Avancement :</label>
                 <input
                    type="text"
                    name="etatAvancement"
                    placeholder=""
                    value={suiviActionRecouvrtEData.etatAvancement}
                    onChange={(event) => handleChange(event, setSuiviActionRecouvrtEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  </div>

                <div className="flex justify-end space-x-4">
             <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('suiviActionRecouvrtE')}
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

 {/* Modal pour État d'Annulation Mise En Jeu */}
      {modalIsOpen.etatAnnulationMej && (
       <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
         <div className="flex justify-between items-center p-4 border-b">
           <h4 className="text-sm font-medium text-gray-700"> État d'Annulation Mise En Jeu  </h4>
           <button
             type="button"
             className="text-gray-400 hover:text-gray-600"
             onClick={() => closeModal('etatAnnulationMej')} >
             &times;
           </button>
         </div>
         <div className="p-4">
                <form onSubmit={(event) => handleSubmit(event, demandeIndemnisationEData, '/annexes/addDemandeIndemnisationE', setDemandeIndemnisationEData, 'demandeIndemnisationE')}>
                <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full md:w-1/2 px-4 mb-4">    
                 <label htmlFor="idCredit" className="text-sm font-medium text-gray-700">Id Crédit :</label>
                      <input
                    type="number"
                    name="idCredit"
                    placeholder="00"
                    value={etatAnnulationMejData.idCredit}
                    onChange={(event) => handleChange(event, setEtatAnnulationMejData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="codeMotif" className="text-sm font-medium text-gray-700">Code Motif :</label>
                  <select
                    name="codeMotif"
                    value={etatAnnulationMejData.codeMotif}
                    onChange={(event) => handleChange(event, setEtatAnnulationMejData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                    >
                    <option value="">-- Veuillez Sélectionner --</option>
                    <option value="1">Apurement</option>
                    <option value="2">Rééchelonnement / Consolidation</option>
                  </select>
                  </div>
                  </div>

                  <div className="flex justify-end space-x-4">
             <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('etatAnnulationMej')}
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

      {/* Modal pour Demande d'Indemnisation */}
      {modalIsOpen.demandeIndemnisationE && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
    <div className="flex justify-between items-center p-4 border-b">
    <h4 className="text-lg font-semibold"> Demande d'Indemnisation </h4>
    <button
        type="button"
        className="text-gray-400 hover:text-gray-600"
        onClick={() => closeModal('etatAnnulationMej')} >
        &times;
      </button>
    </div>
    <div className="p-4">
                   <form onSubmit={(event) => handleSubmit(event, demandeIndemnisationEData, '/annexes/addDemandeIndemnisationE', setDemandeIndemnisationEData, 'demandeIndemnisationE')}>           
                 
                   <div className="mb-4">
                   <label htmlFor="numCredit"  className="text-sm font-medium text-gray-700">Numéro Crédit :</label>
                    <input
                    type="number"
                    name="numCredit"
                    placeholder="00.00"
                    value={demandeIndemnisationEData.numCredit}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 px-4 mb-4">
                 <label htmlFor="dateEcheance"  className="text-sm font-medium text-gray-700">Date Échéance :</label>
                   <input
                    type="date"
                    name="dateEcheance"
                    placeholder=""
                    value={demandeIndemnisationEData.dateEcheance}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg" />
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-4">
                 <label htmlFor="montantDemande"  className="text-sm font-medium text-gray-700">Montant Demande :</label>
                   <input
                    type="text"
                    name="montantDemande"
                    placeholder="00.00"
                    value={demandeIndemnisationEData.montantDemande}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  </div>

                  <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 px-4 mb-4">
                 <label htmlFor="capitalRestant"  className="text-sm font-medium text-gray-700">Capital Restant :</label>
                     <input
                    type="text"
                    name="capitalRestant"
                    placeholder="00.00"
                    value={demandeIndemnisationEData.capitalRestant}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-4">
                   <label htmlFor="motifDemande"  className="text-sm font-medium text-gray-700">Motif Demande :</label>
                   <input
                    type="text"
                    name="motifDemande"
                    placeholder=""
                    value={demandeIndemnisationEData.motifDemande}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  </div>

                  <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 px-4 mb-4">  
                    <label htmlFor="datePremImpaye"  className="text-sm font-medium text-gray-700">Date Premier Impayé :</label>
                   <input
                    type="date"
                    name="datePremImpaye"
                    placeholder=""
                    value={demandeIndemnisationEData.datePremImpaye}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="w-full md:w-1/2 px-4 mb-4">   
                   <label htmlFor="dateDeclarationContentieux"  className="text-sm font-medium text-gray-700">
                    Date Déclaration Contentieux : </label>
                   <input
                    type="date"
                    name="dateDeclarationContentieux"
                    placeholder=""
                    value={demandeIndemnisationEData.dateDeclarationContentieux}
                    onChange={(event) => handleChange(event, setDemandeIndemnisationEData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  </div>

                <div className="flex justify-end space-x-4">
          <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('demandeIndemnisationE')}
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

{modalIsOpen.reglementMej && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4">
        <div className="flex justify-between items-center p-4 border-b">
          <h4 className="text-lg font-semibold"> Règlement Mise En Jeu </h4>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => closeModal('reglementMej')}   >
            &times;
          </button>
        </div>

        <div className="p-4">
             <form onSubmit={(event) => handleSubmit(event, reglementMejData, '/annexes/addReglementMej', setReglementMejData, 'reglementMej')}>
               <div className=" px-4 mb-4">
                  <label htmlFor="idCredit" className="block text-gray-700">Id Crédit :</label>
                  <input
                    type="number"
                    name="idCredit"
                    placeholder="00"
                    value={reglementMejData.idCredit}
                    onChange={(event) => handleChange(event, setReglementMejData)}
                    required
                     className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>
                  <div className=" px-4 mb-4">
                  <label htmlFor="montantMEJ" className="block text-gray-700">Montant Mise En Jeu :</label>
                  <input
                    type="number"
                    name="montantMEJ"
                    placeholder="00.00"
                    value={reglementMejData.montantMEJ}
                    onChange={(event) => handleChange(event, setReglementMejData)}
                    required
                     className=" px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="px-4 mb-4">
                  <label htmlFor="dateReglement" className="block text-gray-700">Date de Règlement :</label>
                  <input
                    type="date"
                    name="dateReglement"
                    placeholder=""
                    value={reglementMejData.dateReglement}
                    onChange={(event) => handleChange(event, setReglementMejData)}
                    required
                     className="w-full px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="px-4 mb-4">
                  <label htmlFor="refReglement" className="block text-gray-700">Réf de Règlement :</label>
                  <input
                    type="text"
                    name="refReglement"
                    placeholder=""
                    value={reglementMejData.refReglement}
                    onChange={(event) => handleChange(event, setReglementMejData)}
                    required
                     className=" px-3 py-2 border rounded-lg"
                  />
                  </div>

                  <div className="flex justify-end space-x-4">
              <button  type="button"
              className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
              onClick={() => closeModal('reglementMej')}
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

{modalIsOpen.etatRecouvrementRealise && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-3/4">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="text-lg font-semibold">État Recouvrement Réalisé</h4>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => closeModal('etatRecouvrementRealise')}
              >
                &times;
              </button>
            </div>

            <div className="p-4">
              <form onSubmit={(event) => handleSubmit(event, etatRecouvrementRealiseData, '/annexes/addEtatRecouvrementRealise', setEtatRecouvrementRealiseData, 'etatRecouvrementRealise')}>
                <div className="px-4 mb-4">
                  <label htmlFor="idCredit" className="block text-gray-700">Id Crédit :</label>
                  <input
                    type="text"
                    name="idCredit"
                    placeholder="00"
                    value={etatRecouvrementRealiseData.idCredit}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="px-4 mb-4">
                  <label htmlFor="recouvrementRealise" className="block text-gray-700">Recouvrement Réalisé :</label>
                  <input
                    type="number"
                    name="recouvrementRealise"
                    placeholder="00.00"
                    value={etatRecouvrementRealiseData.recouvrementRealise}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="px-4 mb-4">
                  <label htmlFor="montantFrais" className="block text-gray-700">Montant Frais :</label>
                  <input
                    type="number"
                    name="montantFrais"
                    placeholder="00.00"
                    value={etatRecouvrementRealiseData.montantFrais}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="px-4 mb-4">
                  <label htmlFor="partTamwil" className="block text-gray-700">Part Tamwil :</label>
                  <input
                    type="number"
                    name="partTamwil"
                    placeholder="00.00"
                    value={etatRecouvrementRealiseData.partTamwil}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="px-4 mb-4">
                  <label htmlFor="dateRecouvrementBq" className="block text-gray-700">Date de Recouvrement Bq :</label>
                  <input
                    type="date"
                    name="dateRecouvrementBq"
                    placeholder=""
                    value={etatRecouvrementRealiseData.dateRecouvrementBq}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="px-4 mb-4">
                  <label htmlFor="dateVirementTamwil" className="block text-gray-700">Date de Virement Tamwil :</label>
                  <input
                    type="date"
                    name="dateVirementTamwil"
                    placeholder=""
                    value={etatRecouvrementRealiseData.dateVirementTamwil}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="px-4 mb-4">
                  <label htmlFor="refReglement" className="block text-gray-700">Réf de Règlement :</label>
                  <input
                    type="text"
                    name="refReglement"
                    placeholder=""
                    value={etatRecouvrementRealiseData.refReglement}
                    onChange={(event) => handleChange(event, setEtatRecouvrementRealiseData)}
                    required
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-150 ease-in-out"
                    onClick={() => closeModal('etatRecouvrementRealise')}
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

        {modalIsOpen.restitutionMej && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="text-lg font-semibold">Restitution Mise En Jeu</h4>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => closeModal('restitutionMej')}
              >
                &times;
              </button>
            </div>

            <div className="p-4">
              <form onSubmit={(event) => handleSubmit(event, restitutionMejData, '/annexes/addRestitutionMej', setRestitutionMejData, 'restitutionMej')}>
                <div className="flex flex-wrap -mx-4 mb-4">
                  <hr className="py-2" />
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label htmlFor="idCredit" className="text-sm font-medium text-gray-700">ID Crédit :</label>
                    <input
                      type="text"
                      id="idCredit"
                      name="idCredit"
                      placeholder="ID Crédit"
                      value={restitutionMejData.idCredit}
                      onChange={(event) => handleChange(event, setRestitutionMejData)}
                      required
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label htmlFor="montantRest" className="text-sm font-medium text-gray-700">Montant Restitué :</label>
                    <input
                      type="number"
                      name="montantRest"
                      placeholder="Montant Restitué"
                      value={restitutionMejData.montantRest}
                      onChange={(event) => handleChange(event, setRestitutionMejData)}
                      required
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label htmlFor="dateRestitution" className="text-sm font-medium text-gray-700">Date de Restitution :</label>
                    <input
                      type="date"
                      name="dateRestitution"
                      placeholder="Date de Restitution"
                      value={restitutionMejData.dateRestitution}
                      onChange={(event) => handleChange(event, setRestitutionMejData)}
                      required
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-4 mb-4">
                    <label htmlFor="refRestitution" className="text-sm font-medium text-gray-700">Référence Restitution :</label>
                    <input
                      type="text"
                      name="refRestitution"
                      placeholder="Référence Restitution"
                      value={restitutionMejData.refRestitution}
                      onChange={(event) => handleChange(event, setRestitutionMejData)}
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
                    onClick={() => closeModal('restitutionMej')}
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

{modalIsOpen.etatDenouementCreditE && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-xl w-full h-auto max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold">État de Dénouement de Crédit</h4>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={() => closeModal('etatDenouementCreditE')}
        >
          &times;
        </button>
      </div>
      <div className="p-4">
        <form
          onSubmit={(event) => handleSubmit(event, etatDenouementCreditEData, '/annexes/addEtatDenouementCreditE', setEtatDenouementCreditEData, 'etatDenouementCreditE')}
        >
          <div className="grid grid-cols-1 gap-4">
            {/* ID Crédit */}
            <div className="mb-4">
              <label htmlFor="idCredit" className="block text-gray-700">ID Crédit :</label>
              <input
                type="text"
                name="idCredit"
                placeholder="ID Crédit"
                value={etatDenouementCreditEData.idCredit}
                onChange={(event) => handleChange(event, setEtatDenouementCreditEData)}
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
                value={etatDenouementCreditEData.dateEffet}
                onChange={(event) => handleChange(event, setEtatDenouementCreditEData)}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            {/* Code Motif */}
            <div className="w-full md:w-1/2 px-4 mb-4">
                  <label htmlFor="codeMotif" className="text-sm font-medium text-gray-700">Code Motif :</label>
                  <select
                    name="codeMotif"
                    value={etatAnnulationMejData.codeMotif}
                    onChange={(event) => handleChange(event, setEtatAnnulationMejData)}
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
              onClick={() => closeModal('etatDenouementCreditE')}
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

export default DemandeEntreprise;

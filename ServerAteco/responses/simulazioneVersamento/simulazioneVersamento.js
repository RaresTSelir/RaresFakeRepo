simulazioneVersamentoResponseMainTerzi = {
    codiceSuccursale: "TG",
    tipologiaMutuo: "Mutuo Chirografario SELLA-GENERALI",
    mesiDurataDelFinanziamento: 55,
    descPianoDiAmmortamento: "Francese a conguaglio",
    codicePianoDiAmmortamento: "01",
    periodicitaRata: "Mensile",
    numeroDiRate: 55,
    importoAccordatoRata: 100000,
    importoRichiesto: null,
    divisa: "EUR",
    numeroContoDiAddebito: "12321321",
    isContoCart: true,
    isContoFondiTerzi: true,
    //isFlussoConPolizze - true renders Conferma versamento button
    isFlussoConPolizze: false, // false will trigger the direct execution of /contabilizzazione
    isBersani: true,
    isPropostaTremontiValida: true,
   isAttivoMsgNoPolizze: true,
    descrizioneContoCart: "descrizione conto cart bla bla bla",
    datiPushAssicurativo: {
      capitaleResiduo: 2345678,
      dataScadenzaUltimaRata: null,
      dataStipula: null,
      durataResidua: null,
      esStato:"ESTPARCCAP",
      importoStipula:null
    },
    datiTipoRisviluppo:  [ 
       {
          codice: "VECCHIA_RELEASE",
          descrizione: "Risviluppo con diminuzione importo rata (vecchia release contrattuale)"
       },
       {
          codice: "NUOVA_RELEASE",
          descrizione: "Risviluppo con importo rata costante (nuova release contrattuale)"
       },
     ] ,
    datiTipoRiduzioneFT:  [ 
       {
          codice: "PROQ",
          descrizione: "Riduzione di capitale pro quota su piano Banca e piano Ente"
       },
       {
          codice: "ETOT",
          descrizione: "Riduzione di capitale su piano Ente"
       },
     ], 
    datiTipoFinalita:  [ 
       {
          codice: "MUTUO_ACQUISTO",
          descrizione: "Mutuo acquisto/ristrutt. immobili adibiti ad abitazione o attivitagrave; econ./prof. persone fisiche"
       },
       {
          codice: "ALTRO",
          descrizione: "Altro"
       },
     ] 
  }

simulazioneVersamentoResponseMainNonTerzi = {
   codiceSuccursale: "TG",
   tipologiaMutuo: "Mutuo Chirografario SELLA-GENERALI",
   mesiDurataDelFinanziamento: 55,
   descPianoDiAmmortamento: "Francese a conguaglio",
   codicePianoDiAmmortamento: "06",
   periodicitaRata: "Mensile",
   numeroDiRate: 55,
   importoAccordatoRata: 100000,
   importoRichiesto: null,
   divisa: "EUR",
   numeroContoDiAddebito: "12321321",
   isContoCart: true,
   isContoFondiTerzi: false,
   isFlussoConPolizze: false,
   isBersani: false,
   isPropostaTremontiValida: false,
   isAttivoMsgNoPolizze: false,
   descrizioneContoCart: "descrizione conto cart bla bla bla",
   datiTipoRisviluppo:  [ 
      {
         codice: "VECCHIA_RELEASE",
         descrizione: "Risviluppo con diminuzione importo rata (vecchia release contrattuale)"
      },
      {
         codice: "NUOVA_RELEASE",
         descrizione: "Risviluppo con importo rata costante (nuova release contrattuale)"
      },
    ] ,
   datiTipoRiduzioneFT:  [ 
      {
         codice: "PROQ",
         descrizione: "Riduzione di capitale pro quota su piano Banca e piano Ente"
      },
      {
         codice: "ETOT",
         descrizione: "Riduzione di capitale su piano Ente"
      },
    ], 
   datiTipoFinalita:  [ 
      {
         codice: "MUTUO_ACQUISTO",
         descrizione: "Mutuo acquisto/ristrutt. immobili adibiti ad abitazione o attivitagrave; econ./prof. persone fisiche"
      },
      {
         codice: "ALTRO",
         descrizione: "Altro"
      },
    ] 
 }

 const tableDataForFirstPageVersamento = {
   columnDef: null,
   data: [
     {
       numeroRata: {
         type: "integer",
         value: 139,
         cellStyle: {
           color: "Red"
         }
       },
       dataScadenza: {
         type: "date",
         value: "2023-08-04",
         cellStyle: {
           color: "Red"
         }
       },
       quotaCapitale: {
         type: "money",
         value: 499.14,
         cellStyle: {
           color: "Red"
         }
       },
       quotaInteressi: {
         type: "money",
         value: 291.65,
         cellStyle: {
           color: "Red"
         }
       },
       importoRata: {
         type: "money",
         value: 790.79,
         cellStyle: {
           color: "Red"
         }
       },
       debitoResiduo: {
         type: "money",
         value: 103674.26,
         cellStyle: {
           color: "Red"
         }
       },
       debitoEstinto: {
         type: "money",
         value: 3466.65,
         cellStyle: {
           color: "Red"
         }
       },
       statusRata: {
         type: "string",
         value: "In mora",
         cellStyle: {
           color: "Red"
         }
       }
     },
     {
       numeroRata: {
         type: "integer",
         value: 140,
         cellStyle: {
           color: "Red"
         }
       },
       dataScadenza: {
         type: "date",
         value: "2023-09-04",
         cellStyle: {
           color: "Red"
         }
       },
       quotaCapitale: {
         type: "money",
         value: 500.45,
         cellStyle: {
           color: "Red"
         }
       },
       quotaInteressi: {
         type: "money",
         value: 290.34,
         cellStyle: {
           color: "Red"
         }
       },
       importoRata: {
         type: "money",
         value: 790.79,
         cellStyle: {
           color: "Red"
         }
       },
       debitoResiduo: {
         type: "money",
         value: 103175.12,
         cellStyle: {
           color: "Red"
         }
       },
       debitoEstinto: {
         type: "money",
         value: 3967.1,
         cellStyle: {
           color: "Red"
         }
       },
       statusRata: {
         type: "string",
         value: "In mora",
         cellStyle: {
           color: "Red"
         }
       }
     }
   ]
 }

 
 module.exports = {simulazioneVersamentoResponseMainTerzi, simulazioneVersamentoResponseMainNonTerzi, tableDataForFirstPageVersamento}
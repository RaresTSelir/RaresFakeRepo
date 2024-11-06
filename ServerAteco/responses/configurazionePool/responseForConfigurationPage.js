const randomiseResponse = () => {
    const opTypes = [ "CAPOFILA", "PARTECIPANTE_IN_POOL" ]
    const opNames = [ "Operazione da Capofila", "Operazione da Partecipante in POOL"]
    const isPartecipante = ["Si", "No"]

    const index = Math.round(Math.random());
    return {
        idContoMutuo: 27495429,
        descrizioneTipoOperazione: opNames[index],
        codiceTipoOperazione: opTypes[index],
      //   codiceTipoOperazione: "CAPOFILA",
        partecipantePrincipale: {
         idAnacredit: "ID_ANACREDITSTF2",
         codiceServicer:index === 1 ? "PRINCIPALE_OWNER": null,
         percentualeDiPartecipazione: index === 0 ? 77.0 : null
         },
        listPartecipantiAggiunti: [
         {
            codicePartecipante: {type: "string",value: "SERVICER_STF"},
            partecipanteAdAnacredit: "No",
            percentualeDiPartecipazione: 11.0
         },
         {
            codicePartecipante: {type: "string",value: "CodServizio02"},
            partecipanteAdAnacredit: "Si",
            percentualeDiPartecipazione: 0
         },
         {
            codicePartecipante: {type: "string",value: "CodServizio03"},
            partecipanteAdAnacredit: "No",
            percentualeDiPartecipazione: 12.5
         }, 
      ]
    }
}

module.exports = randomiseResponse;
const datiCliente = {
    numeroConto: "59B1616754153",
    cliente: "LDRWFWXUSBAGSUCYYDLJJAGCT",
    indirizzo: "GBZYUQRWHLCYMJAUWZHZBVOW",
    idSoggetto: 6335656
}

const datiMutuo = {
    codiceSuccursale: "59",
    tipologiaMutuo: "Mutuo chirografario - Imprese standard",
    mesiDurataDelFinanziamento: 48,
    descPianoDiAmmortamento: "Francese a conguaglio",
    periodicitaRata: "mensile",
    numeroDiRate: 48,
    importoAccordatoRata: 232.57,
    divisa: "EUR",
    numeroRateConsolidate:1,
    numeroRateDaPagare: "45",
    numeroRateInsolute:0,
    isContoCart: false,
    descrizioneContoCart: null,
    ultimaRataPagata: 3,
    isPropostaTremontiValida: false,
    isAttivoMsgNoPolizze: false,
    isFlussoConPolizze: false, //trigger contabilizzazione directly if set on false
    statusMutuiPolizze: "OK",
    messageMutuiPolizze: null,
    datiPushAssicurativo: {
        importoStipula: 20360.0,
        capitaleResiduo: 11408.89,
        debitoResiduo: null,
        dataScadenzaUltimaRata: "2031-08-16",
        durataResidua: 0,
        dataStipula: "2016-07-29",
        esStato: "ESTPARRATA"
    }
}

const prossimaRata = {
    numeroRata: 4,
    dataScadenza: "2023-11-13",
    quotaCapitale: 189.32,
    quotaInteressi: 43.25,
    conguaglioInteressi: 0,
    importo: 232.57
}

const rate = {
    columnNames: null,
    data: [
        {
            numeroRata: {
                type: "integer",
                value: 4
            },
            dataDecorrenza: {
                type: "date",
                value: "2023-10-14"
            },
            dataScadenza: {
                type: "date",
                value: "2023-11-13"
            },
            quotaCapitale: {
                type: "money",
                value: 189.32
            },
            quotaInteressi: {
                type: "money",
                value: 43.25
            },
            importoRata: {
                type: "money",
                value: 232.57
            },
            debitoResiduo: {
                type: "money",
                value: 9437.2
            },
            debitoEstinto: {
                type: "money",
                value: 752.12
            },
            status: {
                type: "string",
                value: "Erogata"
            }
        },
        {
            numeroRata: {
                type: "integer",
                value: 5
            },
            dataDecorrenza: {
                type: "date",
                value: "2023-11-14"
            },
            dataScadenza: {
                type: "date",
                value: "2023-12-13"
            },
            quotaCapitale: {
                type: "money",
                value: 190.19
            },
            quotaInteressi: {
                type: "money",
                value: 42.38
            },
            importoRata: {
                type: "money",
                value: 232.57
            },
            debitoResiduo: {
                type: "money",
                value: 9247.88
            },
            debitoEstinto: {
                type: "money",
                value: 942.31
            },
            status: {
                type: "string",
                value: "Erogata"
            }
        },
        {
            numeroRata: {
                type: "integer",
                value: 6
            },
            dataDecorrenza: {
                type: "date",
                value: "2023-12-14"
            },
            dataScadenza: {
                type: "date",
                value: "2024-01-13"
            },
            quotaCapitale: {
                type: "money",
                value: 191.06
            },
            quotaInteressi: {
                type: "money",
                value: 41.51
            },
            importoRata: {
                type: "money",
                value: 232.57
            },
            debitoResiduo: {
                type: "money",
                value: 9057.69
            },
            debitoEstinto: {
                type: "money",
                value: 1133.37
            },
            status: {
                type: "string",
                value: "Erogata"
            }
        },
        {
            numeroRata: {
                type: "integer",
                value: 7
            },
            dataDecorrenza: {
                type: "date",
                value: "2024-01-14"
            },
            dataScadenza: {
                type: "date",
                value: "2024-02-13"
            },
            quotaCapitale: {
                type: "money",
                value: 191.94
            },
            quotaInteressi: {
                type: "money",
                value: 40.63
            },
            importoRata: {
                type: "money",
                value: 232.57
            },
            debitoResiduo: {
                type: "money",
                value: 8866.63
            },
            debitoEstinto: {
                type: "money",
                value: 1325.31
            },
            status: {
                type: "string",
                value: "Erogata"
            }
        }
    ]
}

const confermaResponse = {
    totaleRata: 396.06,
    rateoInteressi: 0.24,
    interessiPiano: 3.78,
    conguaglio: 11.34,
    interessiSospensione: 0,
    interessiRinegoziazione: 0,
    debitoResiduo: 50372.48,
    totalePagato: 380.26,
    table: {
        columnNames: null,
        data: [
            {
                numeroRata: {
                    type: "integer",
                    value: 4
                },
                dataScadenza: {
                    type: "date",
                    value: "2023-11-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 189.32
                },
                quotaInteressi: {
                    type: "money",
                    value: 43.25
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 9437.2
                },
                debitoEstinto: {
                    type: "money",
                    value: 752.12
                },
                status: {
                    type: "string",
                    value: "Pagata anticipatamente"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 21
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-02-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 204.63
                },
                quotaInteressi: {
                    type: "money",
                    value: 27.94
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 6097.96
                },
                debitoEstinto: {
                    type: "money",
                    value: 4106.67
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 22
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-03-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 205.56
                },
                quotaInteressi: {
                    type: "money",
                    value: 27.01
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 5893.33
                },
                debitoEstinto: {
                    type: "money",
                    value: 4312.23
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 23
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-04-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 206.51
                },
                quotaInteressi: {
                    type: "money",
                    value: 26.06
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 5687.77
                },
                debitoEstinto: {
                    type: "money",
                    value: 4518.74
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 24
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-05-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 207.45
                },
                quotaInteressi: {
                    type: "money",
                    value: 25.12
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 5481.26
                },
                debitoEstinto: {
                    type: "money",
                    value: 4726.19
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 25
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-06-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 208.4
                },
                quotaInteressi: {
                    type: "money",
                    value: 24.17
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 5273.81
                },
                debitoEstinto: {
                    type: "money",
                    value: 4934.59
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 26
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-07-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 209.36
                },
                quotaInteressi: {
                    type: "money",
                    value: 23.21
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 5065.41
                },
                debitoEstinto: {
                    type: "money",
                    value: 5143.95
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 27
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-08-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 210.32
                },
                quotaInteressi: {
                    type: "money",
                    value: 22.25
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 4856.05
                },
                debitoEstinto: {
                    type: "money",
                    value: 5354.27
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 28
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-09-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 211.28
                },
                quotaInteressi: {
                    type: "money",
                    value: 21.29
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 4645.73
                },
                debitoEstinto: {
                    type: "money",
                    value: 5565.55
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 29
                },
                dataScadenza: {
                    type: "date",
                    value: "2025-10-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 212.25
                },
                quotaInteressi: {
                    type: "money",
                    value: 20.32
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 4434.45
                },
                debitoEstinto: {
                    type: "money",
                    value: 5777.8
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 45
                },
                dataScadenza: {
                    type: "date",
                    value: "2027-02-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 228.36
                },
                quotaInteressi: {
                    type: "money",
                    value: 4.21
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 919.19
                },
                debitoEstinto: {
                    type: "money",
                    value: 9309.17
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
            {
                numeroRata: {
                    type: "integer",
                    value: 46
                },
                dataScadenza: {
                    type: "date",
                    value: "2027-03-13"
                },
                quotaCapitale: {
                    type: "money",
                    value: 229.41
                },
                quotaInteressi: {
                    type: "money",
                    value: 3.16
                },
                importoRata: {
                    type: "money",
                    value: 232.57
                },
                debitoResiduo: {
                    type: "money",
                    value: 690.83
                },
                debitoEstinto: {
                    type: "money",
                    value: 9538.58
                },
                status: {
                    type: "string",
                    value: "Erogata"
                }
            },
        ]
    },
    isAssicurativa: true,
    isFinanziamentoPU: true,
    isPropostaTremonti: false,
    isConfermaOperazioneAttivo: true
}


module.exports = {simPAdatiCliente: datiCliente, simPAdatiMutuo: datiMutuo, simPAprossimaRata: prossimaRata, simPArate: rate, simPAconfermaResponse: confermaResponse}
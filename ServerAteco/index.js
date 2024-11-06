const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const {simulazioneVersamentoResponseMainTerzi} = require('./responses/simulazioneVersamento/simulazioneVersamento');
const {simulazioneVersamentoResponseMainNonTerzi} = require('./responses/simulazioneVersamento/simulazioneVersamento');
const {tableDataForFirstPageVersamento} = require('./responses/simulazioneVersamento/simulazioneVersamento');
const simulazioneVersamentoClientData = require('./responses/simulazioneVersamento/simulazioneVersamentoClientData');
const responseForSimulationPage = require('./responses/simulazioneVersamento/responseForSimulationPage');
const responseForPoolConfigurationPage = require('./responses/configurazionePool/responseForConfigurationPage');
const { pdfToByteArray } = require('./pdfConverter');
const {simPAdatiCliente, simPAdatiMutuo, simPAprossimaRata, simPArate, simPAconfermaResponse} = require("./responses/simulazionePagamentoAnticipato/simPagamentoAnt");
const { initialData } = require('./responses/portabilitaAbi');


const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Configurazione Servizio
app.get("/servizioOperativo/config/MU_O_0038/CFG_12", (req, res)=> {
    res.send({codiceConfig: "CFG_12",
            descrizioneConfig: "List di destinazione finanziamento",
            codiceServizio: "MU_O_0038",
            descrizioneServizio: "Mutuo chirografario - Imprese standard", 
            pageType: "SINGLE_INPUT_LIST_OF_STRINGS_1",
            maxlevels: 0, 
            dataSource:[{id: "LIST_DEST_FINZ",
                    name: "LIST_DEST_FINZ",
                    values: ["DESTINAZIONE 1", "DESTINAZIONE 2", "DESTINAZIONE 3", "DESTINAZIONE 4" ] 
                }]
            })
})

app.put("/servizioOperativo/config/MU_O_0038/CFG_12", (req, res)=> {
    res.send({
        message: "Data received",
        data: req.body
    })
})

// Simulazione Versamento Mutuo
// form Fondo Terzi accounts
app.get("/versamentoMutuo/v1/form-ui-data/mutuo/8192134", (req, res)=> {
    res.send (simulazioneVersamentoResponseMainTerzi);
})

app.get("/versamentoMutuo/v1/form-ui-data/cliente/8192134", (req, res)=> {
    res.send(simulazioneVersamentoClientData);
})

// Simulazione Versamento Mutuo
// form Fondo NonTerzi accounts
app.get("/versamentoMutuo/v1/form-ui-data/mutuo/!8192134", (req, res)=> {
    res.send (simulazioneVersamentoResponseMainNonTerzi);
})
app.get("/versamentoMutuo/v1/form-ui-data/cliente/!8192134", (req, res)=> {
    res.send(simulazioneVersamentoClientData);
})

//Simulazione Versamento Mutuo
// initial controlli
app.get("/versamentoMutuo/v1/controlli/8192134", (req, res)=> {
    res.sendStatus(200);
})
app.get("/versamentoMutuo/v1/controlli/!8192134", (req, res)=> {
    res.sendStatus(200);
})

//Versamento Mutuo
// get data for table on the first page
app.get("/versamentoMutuo/v1/form-ui-data/mutuo/8192134/rate", (req, res)=> {
    res.send(tableDataForFirstPageVersamento)
})


//Simulazione Versamento Mutuo
// obtain data for Simulazione Page (Second one in flow)
app.post("/versamentoMutuo/v1/simulazione/conferma", (req, res)=> {
    res.send(responseForSimulationPage);
    // res.sendStatus(500);
})

//Mock for contabilizzazioneVersamento
app.post("/versamentoMutuo/v1/contabilizzazione", (req, res)=> {
    setTimeout(()=> {res.send("CONTABILIZZAZIONE async opp OK!")}, 1000)
})



//Mutui Pool Configuration
app.get("/contoMutuo/dati-pool/search", (req, res)=> {
    res.send(responseForPoolConfigurationPage());
})

app.post("/contoMutuo/dati-pool", (req,res)=> {
    res.send(req.body);
})

//Document Manager - just sends a file, the pdf of the contract of the client
app.get("/document/v1/reprint/contratto-cliente-firmato", async (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'pdfs', 'fake.pdf'))
    // res.status(500).send({message: "Failed"})
})

// Simulazione Pagamento Anticipato
app.get("/pagamentoRate/v1/rate-anticipate/form-ui-data/cliente/27591571",(req, res)=> {
    res.send(simPAdatiCliente)
})
app.get("/pagamentoRate/v1/rate-anticipate/form-ui-data/mutuo/27591571",(req, res)=> {
    res.send(simPAdatiMutuo)
})
app.get("/pagamentoRate/v1/rate-anticipate/form-ui-data/mutuo/27591571/prossima-rata",(req, res)=> {
    res.send(simPAprossimaRata)
})
app.get("/pagamentoRate/v1/rate-anticipate/form-ui-data/mutuo/27591571/rate",(req, res)=> {
    res.send(simPArate)
})
app.post("/pagamentoRate/v1/rate-anticipate/27591571/simulazione/conferma",(req, res)=> {
    res.send(simPAconfermaResponse)
})
app.post("/pagamentoRate/v1/rate-anticipate/contabilizzazione",(req, res)=> {
    setTimeout(()=> {res.send("CONTABILIZZAZIONE PA async opp OK!")}, 1000)
})

// Portabilita ABI
app.get("/portabilita/v1/form-ui-data", (req, res)=> {
    res.send(initialData)
})
app.post("/portabilita/richiesta", (req, res)=> {
    res.send({message: "Portabilita Abi executed", body: req.body});
})


app.listen(PORT, ()=>{console.log("Server works on port 4000!")})
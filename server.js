 

 const express = require('express');    // Server erstellen 

 const bodyParser = require('body-parser');

 const app = express();

 app.use(bodyParser.json());

 const PORT = 2500 ;

 app.listen(PORT , () => {
     console.log(`Server läuft auf PORT ${PORT}...`);
 });

 app.get('/', (req, res) => {
    res.json("Server läuft!");
});

 let accounts = [                      // Konten im Bank 
    { id: 1, name: 'FREEMAN' , balance : 1000},
    { id: 2, name: 'TONY' , balance : 5},
    { id: 3, name: 'STONES' , balance : 236},
   ];

   app.get('/Accounts' , (req,res) => {  // Konto anzeigen  Get request 
     res.json(accounts);
   });

   app.get('/Accounts/:id' , (req,res) => {  // einziges Konto anzeigen 
     const accountId = parseInt(req.params.id);
     const account  =  accounts.find(acc => acc.id === accountId ) ;
     if(!account) {
       return  res.status(400).json({message : 'Konto nicht gefunden'});
     }
     res.json(account);
   });

   app.post('/transfer' , (req ,res) => {
      const {fromId , toId , amount } = req.body;

   // 1. konten finden 
    const sender =  accounts.find(acc => acc.id === fromId) ;
    const empfaenger = accounts.find(acc => acc.id === toId) ;

    if (!sender || !empfaenger ){
       return res.status(400).json({message : 'sender oder empfaenger existiert nicht  '});  
    }
    if ( sender.balance < amount ) {
        return res.status(400).json({message : 'Der Sender hat nicht genug Geld auf dem Konto !'});
    }
       
      sender.balance -= amount ;
      empfaenger.balance += amount ;  

       res.json({message : `Transaktion erfolgreich!`,
                            senderBalance : sender.balance,
                            empfaengerBalance : empfaenger.balance,
     });

     });
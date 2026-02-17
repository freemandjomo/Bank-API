# 🏦 Bank API

Eine einfache RESTful Bank-API, entwickelt mit Node.js und Express, die grundlegende Banking-Operationen wie Kontoverwaltung und Geldtransfers ermöglicht.

## 📋 Funktionen

- ✅ Alle Konten anzeigen
- ✅ Einzelnes Konto nach ID abrufen
- ✅ Geldtransfer zwischen Konten durchführen
- ✅ Automatische Validierung von Transaktionen.
- ✅ Fehlerbehandlung für ungültige Anfragen.

## 🚀 Installation

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 14 oder höher)
- npm (wird mit Node.js installiert)

### Setup

1. Repository klonen:
```bash
git clone https://github.com/freemandjomo/Bank-API.git
cd Bank-API
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Server starten:
```bash
node server.js
```

Der Server läuft standardmäßig auf `http://localhost:2500`

## 📚 API Endpunkte

### 1. Server Status prüfen
```http
GET /
```
**Response:**
```json
"Server läuft!"
```
![](https://github.com/freemandjomo/Bank-API/blob/main/Get%20request%20pic.png)

### 2. Alle Konten abrufen
```http
GET /Accounts
```
**Response:**
```json
[
  { "id": 1, "name": "FREEMAN", "balance": 1000 },
  { "id": 2, "name": "TONY", "balance": 5 },
  { "id": 3, "name": "STONES", "balance": 236 }
]
```

### 3. Einzelnes Konto abrufen
```http
GET /Accounts/:id
```
**Parameter:**
- `id` (number) - Die ID des Kontos

**Response:**
```json
{ "id": 1, "name": "FREEMAN", "balance": 1000 }
```

### 4. Geldtransfer durchführen
```http
POST /transfer
```
**Request Body:**
```json
{
  "fromId": 1,
  "toId": 2,
  "amount": 100
}
```
![](https://github.com/freemandjomo/Bank-API/blob/main/Post_request%20pic.png)

**Response (Erfolg):**
```json
{
  "message": "Transaktion erfolgreich!",
  "senderBalance": 900,
  "empfaengerBalance": 105
}
```

**Response (Fehler):**
```json
{
  "message": "Der Sender hat nicht genug Geld auf dem Konto!"
}
```

## 🧪 Beispiel-Anfragen

### Mit cURL:

```bash
# Alle Konten abrufen
curl http://localhost:2500/Accounts

# Geldtransfer durchführen
curl -X POST http://localhost:2500/transfer \
  -H "Content-Type: application/json" \
  -d '{"fromId":1,"toId":2,"amount":100}'
```

### Mit JavaScript (fetch):

```javascript
// Geldtransfer
fetch('http://localhost:2500/transfer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    fromId: 1,
    toId: 2,
    amount: 100
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## 🛠️ Technologien

- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **Body-Parser** - Request Body Parsing

## 📝 Fehlerbehandlung

Die API gibt folgende Fehlermeldungen zurück:

| Fehler | Status Code | Beschreibung |
|--------|-------------|--------------|
| Konto nicht gefunden | 400 | Das angeforderte Konto existiert nicht |
| Sender/Empfänger existiert nicht | 400 | Ungültige Konto-IDs beim Transfer |
| Unzureichendes Guthaben | 400 | Sender hat nicht genug Geld für die Transaktion |

## 🔮 Zukünftige Erweiterungen

- [ ] Datenbankintegration (MongoDB/PostgreSQL)
- [ ] Benutzer-Authentifizierung und -Autorisierung
- [ ] Transaktionshistorie
- [ ] Konto erstellen/löschen Endpunkte
- [ ] Input-Validierung mit Joi oder express-validator
- [ ] Unit Tests

## 👤 Autor

**Freeman Djomo**

## 📄 Lizenz

ISC

---

⭐ Wenn dir dieses Projekt gefällt, gib ihm einen Star auf GitHub!

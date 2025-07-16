# DinerApp - Installatiehandleiding

Deze Frontend Development Applicatie **DinerApp** is gebouwd met **HTML & CSS**, **JavaScript** en **React**. 
De code is geprogrammeerd in WebStorm. 

**DinerApp** helpt mensen met het maken van receptkeuzes.
Zodra de gebruiker is ingelogd kan de gebruiker de applicatie gebruiken. 
Na het beantwoorden van vragen over o.a. kooktijd en dieetwensen stelt de applicatie passende recepten voor. 

De belangrijkste kernfunctionaliteiten van deze applicatie zijn: 

1. Registreren en inloggen met authenticatie; 
2. De applicatie stelt (op basis van antwoorden op vragen) passende recepten voor;
3. Met behulp van een geavanceerde zoekfunctie kan de gebruiker door alle beschikbare recepten browsen en op zoek gaan naar specifieke recepten; 
4. De gebruiker kan favoriete recepten selecteren en opslaan. Zodat de gebruiker kan terugkeren bij 'Mijn recepten' om de favoriete recepten te zien.

![Screenshot van de applicatie](./src/assets/screenshot.png)


---

## Hoofdstuk 1: Benodigdheden

Om de applicatie succesvol te draaien, zijn de volgende benodigdheden noodzakelijk:

### Software vereisten:
- **Node.js**: Versie 16.x of hoger (geïnstalleerd op je systeem). Je kunt dit downloaden van de officiële website: [Node.js](https://nodejs.org/).
- **npm**: De package manager die automatisch wordt geïnstalleerd met Node.js.

### API en andere externe afhankelijkheden:
- ## 🔑 API keys (.env)

Om deze applicatie correct te laten draaien, zijn er API keys nodig voor:

- De Spoonacular API (voor recepten)
- De NOVI Backend API (voor authenticatie en gebruikersdata)

Je hoeft deze keys **niet zelf aan te maken**. In de ZIP die je hebt ontvangen, zit een `.env` bestand met de benodigde sleutels. Zet dit bestand in de hoofdmap van het project, naast `package.json`.

### Registeren en inloggen:
- Om de applicatie te gebruiken opent u de applicatie in uw browser. 
- Vervolgens gaat u naar de button 'registreren' om een account aan te maken. 
- Klik op de button 'registreren' onderaan het formulier. 
- U kunt vervolgens inloggen met uw account.
- Als backup kunt u altijd gebruik maken van mijn testaccount:
- Gebruikersnaam: djguser
- E-mailadres: djguser@test.nl
- Wachtwoord: BanaanEnAppel123!

---

## Hoofdstuk 2: Stappenplan

Volg de onderstaande stappen om de applicatie te installeren en lokaal te draaien:

1. **Clone de repository** naar je lokale machine:
   ```bash
   git clone git@github.com:DJGrootendorst/DinerApp-React-Project.git

2. **Installeer de vereiste dependencies in de terminal in WebStorm**:
   ```bash
   npm install
   
3. **Start de applicatie lokaal**: Om de server te starten, voer je het volgende commando in: 
   ```bash
   npm run dev
   
4. **Bekijk de applicatie**: De applicatie zal draaien op http://localhost:5173/. 
Klik op de link die in de terminal verschijnt om de applicatie in de browser te openen. 

## Hoofdstuk 3: Inloggen

In deze eerste versie van de applicatie is er **geen echte authenticatie** geïmplementeerd.
Gebruikers kunnen eenvoudig inloggen door in de applicatie op de button **inloggen** te klikken. 
Zodra dit systeem in de toekomst wordt uitgebreid, zal er een werkelijke API voor authenticatie beschikbaar zijn. 

## Hoofdstuk 4: Npm commando's

Hier zijn enkele npm commando's die beschikbaar zijn binnen dit project en waarvoor ze dienen: 

1. Het installeren van alle benodigde node-modules dependencies:
   ```bash
   npm install

2. Het openen van de applicatie in de browser en het starten van de ontwikkelserver:
   ```bash
   npm run dev


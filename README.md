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
4. De gebruiker kan favoriete recepten selecteren en opslaan. Zodat de gebruiker kan terugkeren bij 'Mijn recepten' om de favoriete recepten te gebruiken.

![Screenshot van de applicatie](./src/assets/screenshot.png)


# Installatiehandleiding

Deze Frontend Development Applicatie **DinerApp** is gebouwd met **HTML & CSS**, **JavaScript**, en **React**. De code is geprogrammeerd in **WebStorm**.

**DinerApp** helpt mensen met het maken van receptkeuzes. Zodra de gebruiker is ingelogd, kan de gebruiker de applicatie gebruiken. Na het beantwoorden van vragen over onder andere kooktijd en dieetwensen stelt de applicatie passende recepten voor.

De belangrijkste kernfunctionaliteiten van deze applicatie zijn:

1. Registreren en inloggen met authenticatie;
2. De applicatie stelt (op basis van antwoorden op vragen) passende recepten voor;
3. Met behulp van een geavanceerde zoekfunctie kan de gebruiker door alle beschikbare recepten browsen en op zoek gaan naar specifieke recepten;
4. De gebruiker kan favoriete recepten selecteren en opslaan, zodat de gebruiker kan terugkeren bij 'Mijn recepten' om de favoriete recepten te gebruiken.

---

## Hoofdstuk 1: Inleiding van de functionaliteit van de applicatie

DinerApp is een recept-aanbevelingsapplicatie die gebruikers helpt bij het vinden van geschikte recepten op basis van hun voorkeuren en dieetwensen. Na inloggen kan de gebruiker verschillende vragen beantwoorden over kooktijd, dieetwensen, en voorkeuren. Op basis van deze antwoorden stelt de applicatie een lijst met recepten voor. Gebruikers kunnen ook favoriete recepten opslaan en later raadplegen in hun persoonlijke overzicht.

---

## Hoofdstuk 2: Benodigdheden

Om de applicatie succesvol te draaien, zijn de volgende benodigdheden noodzakelijk:

### Software vereisten:
- **Node.js**: Versie 16.x of hoger (geïnstalleerd op je systeem). Je kunt dit downloaden van de officiële website: [Node.js](https://nodejs.org/).
- **npm**: De package manager die automatisch wordt geïnstalleerd met Node.js.

### API en andere externe afhankelijkheden:
- **Geen API vereist in de eerste versie**: Voor nu gebruikt de applicatie alleen lokale state via `useState` voor het inloggen. Later wordt er een API toegevoegd voor authenticatie en data-analyse.

### Externe services:
- Geen externe backend of API-sleutels vereist in deze eerste versie van de applicatie.

---

## Hoofdstuk 3: Stappenplan

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

## Hoofdstuk 4: Inloggen

In deze eerste versie van de applicatie is er **geen echte authenticatie** geïmplementeerd.
Gebruikers kunnen eenvoudig inloggen door in de applicatie op de button **inloggen** te klikken. 
Zodra dit systeem in de toekomst wordt uitgebreid, zal er een werkelijke API voor authenticatie beschikbaar zijn. 

## Hoofdstuk 5: Npm commando's

Hier zijn enkele npm commando's die beschikbaar zijn binnen dit project en waarvoor ze dienen: 

1. Het installeren van alle benodigde node-modules dependencies:
   ```bash
   npm install

2. Het openen van de applicatie in de browser en het starten van de ontwikkelserver:
   ```bash
   npm run dev


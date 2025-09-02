# 🎶 Indivuduell Examination - Where It's @

## 📖 Beskrivning  
Where It’s @ är en React-applikation där lokala musikevent står i rampljuset.  
Användare kan bläddra bland evenemang, boka biljetter och få unika biljetter genererade med sektion och plats.  
Projektet byggdes som en individuell examination med fokus på **React, statehantering och API-integration**.  

---

## ✨ Funktioner  
- 🎤 Lista av musikevent (hämtas från API)  
- 📄 Detaljsida för evenemang  
- 🎟️ Boka biljetter med genererat **BiljettID**, sektion och sittplatser  
- ➡️ Routing mellan sidor  
- 🗂️ Avancerad statehantering med **Zustand**  
- 📱 Responsiv design för mobil och desktop  
- ♿ Tillgänglighetsanpassad  

---

## 🛠️ Tekniker  
- **React** (Components, Props, useState, useEffect)  
- **React Router** för navigering  
- **Zustand** för statehantering  
- **API-integration** (fetch av musikevent)  
- **CSS/Responsiv design**  
- Externa bibliotek (för VG): _t.ex. Framer Motion, Swiper, Material UI_  

---


## Externa bibliotek jag har använt i min app

### Framer Motion
Framer motion – ett bibliotek för animationer som kan användas med JavaScript, React eller Vue. Jag har inte jobbat mycket med animationer och det verkade som ett ganska lätt bibliotek att börja med och min tanke var att använda det först och främst till att skapa en gradient bakgrund med animation på min OrdersPage. Så när man klickar sig in blir det en snygg övergång med animation och det skapar en mjuk övergång när sidan laddas. Jag har även använt det för att animera övergångar mellan sidor.


### Font Awesome  
Jag har använt Font Awesome för ikoner. Font Awesome är ett externt bibliotek med tusentals av ikoner som är lätt att använda och implementera i sitt projekt. Man skapar en användare och har sitt egna kit som man kan använda genom att installera ett paket i React (i detta tillfället) och sen är det bara att lägga till de ikoner man vill använda. Det är väldigt smidigt och enkelt. 

### UUID
Jag har använt UUID för att generera unika ordernummer för varje biljettköp. Alla biljetter har ett unikt ordernummer. UUID (Universal Unique Identifier) är en trygg metod som används för att skapa unika id-nummer som är svåra att duplicera. Jag använder v4-varianten av UUID, som bygger på slumpmässiga värden. Det passar bra i min app då jag vill ha ett kort, unikt id/ordernummer för varje biljett. Jag förkortar UUID till fem tecken med .slice(), gör dem till versaler och lägger till # i början. Genom att använda detta känner jag mig trygg på att varje order får ett unikt nummer. 

### React-barcode
Jag använder biblioteket react-barcode för att generera en streckkod för varje biljett på OrderPage. Det ger biljetterna en mer profesionell och autentisk känsla. Biblioteket är lätt att använda och jag kan välja vilket värde jag vill som streckkod – i detta fall mitt genererade ordernummer (t.ex. #A4G96). Jag har valt format=”CODE128” eftersom det är ett standardformat som stöder både bokstäver och siffror.  

### React-swipeable
Jag använder också react-swipeable. Detta är ett bibliotek som gör det enkelt att implementera swipe i React-appar. Det använder sig av en custom hook, useSwipeable, för att hantera swipe-gester på mobila enheter. Med denna hook kan man definiera funktioner för att reagera på olika swipe-gester, som att swipa till höger eller vänster. Jag valde att använda detta för att skapa en modern, mobilvänlig navigering där användaren kan swipa mellan innehåll.

### React-slick
I min applikation använder jag biblioteket react-slick för att skapa en smidig och användarvänlig slider på ordersidan, där varje biljett presenteras som ett "kort" man kan swipa mellan. react-slick bygger på det populära jQuery-biblioteket Slick Carousel, men är anpassat för React-komponenter. react-slick är ett komponentbaserat bibliotek som låter mig skapa karuseller genom att wrappa innehållet i en Slider-komponent och definiera inställningar via ett objekt, t.ex. antal slides, pilar, animation, m.m. Eftersom varje biljett i min app är ett eget element (med information som plats, sektion, och ordernummer) ville jag presentera dem på ett sätt som är interaktivt, visuellt tydligt och roligt för användaren. 









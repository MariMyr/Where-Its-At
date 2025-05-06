# Indivuduell Examination - Where It's @


## Externa bibliotek jag har använt

### Framer Motion
Framer motion – ett bibliotek för animationer som kan användas med JavaScript, React eller Vue. Jag har inte jobbat mycket med animationer och det verkade som ett ganska lätt bibliotek att börja med och min tanke var att använda det först och främst till att skapa en gradient bakgrund med animation på min OrdersPage. Så när man klickar sig in blir det en snygg övergång med animation och det skapar en mjuk övergång när sidan laddas.  


### Font Awesome  
Jag har använt Font Awesome för ikoner. Font Awesome är ett externt bibliotek med tusenvis av ikoner som är lätt att använda och implementera i sitt projekt. Man skapar en användare och har sitt egna kit som man kan använda vid att installera paket i React, i detta tillfället, och sen är det bara att lägga till de ikoner man vill använda. Det är väldigt smidigt och enkelt. 

### UUID: 

Jag har använt UUID för att generera unika ordernummer för varje biljettköp. Alla biljetter har ett unikt ordernummer. UUID (Universal Unique Identifier) är en trygg metod som används för att skapa unika id-nummer som är svåra att duplicera. Jag använder v4-varianten av UUID, som bygger på slumpmässiga värden. Det passar bra i min app då jag vill ha ett kort, unikt id/ordernummer för varje biljett. Jag har kortat ner UUID till fem tecken, gör dem till versaler och lägger till # i början. Genom att använda detta känner jag mig trygg på att varje order får ett unikt nummer. 

### React-barcode: 

Jag använder biblioteket react-barcode för att generera en streckkod för varje biljett på OrderPage. Det gör biljetterna med autentiska. Biblioteket är lätt att använda och jag kan välja vilket värde jag vill som streckkod – i detta fall mitt genererade ordernummer (t.ex. #A4G96). Jag har valt format=”CODE128” eftersom det är dett standardformat som stöder både bokstäver och siffror.  

### React-swipeable: 

Jag använder också react-swipeable. Detta är ett bibliotek som gör det enkelt att implementera swipe i React-appar. Det använder sig av en custom hook, useSwipeable, för att hantera swipe-gester på mobila enheter. Med denna hook kan man definiera funktioner för att reagera på olika swipe-gester, som att swipa till höger eller vänster. Jag valde att använda detta för att ge användaren en smidig och modern navigering av applikationen, och det gör den mer intuitiv och användarvänlig.

### React-slick: 

I min applikation använder jag biblioteket react-slick för att skapa en smidig och användarvänlig slider på ordersidan, där varje biljett presenteras som ett "kort" man kan swipa mellan. react-slick bygger på det populära jQuery-biblioteket Slick Carousel, men är anpassat för React-komponenter. react-slick är ett komponentbaserat bibliotek som låter mig skapa karuseller genom att wrappa innehållet i en <Slider>-komponent och definiera inställningar via ett objekt, t.ex. antal slides, pilar, animation, m.m. Eftersom varje biljett i min app är ett eget element (med information som plats, sektion, och ordernummer) ville jag presentera dem på ett sätt som är interaktivt, visuellt tydligt och roligt för användaren. 









## Uppgiften:

Dags att rocka koden! Din mission är att bygga frontenden till Where it’s @ – en app där lokala musikevent får stå i rampljuset.
Med React som ditt instrument ska du komponera en upplevelse som får användarna att klicka vidare till nästa spelning med ett leende.
Komponenter, props och state – tänk modulärt, tänk snyggt, tänk “det här skulle jag själv vilja använda”.
Du bygger alltså inte bara ett gränssnitt – du bygger pulsen i stadens musikscen.

## Uppdrag

Ditt uppdrag är att koda ihop en frontend till biljettjänsten _Where its @_. Den ska se ut enligt nedan mockup. Du har också tillgång till [Figma-länk](https://www.figma.com/file/vcgWPPy2q44oZZ2eORL1wB/Where-its-light?node-id=0%3A1) för exportering av assets, färger, kika fonter etc.

![image](https://github.com/user-attachments/assets/de858683-8f5d-4b2b-bd73-1662bcaca8c8)






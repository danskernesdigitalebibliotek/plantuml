# Cover Service Upload

## Formål

Formålet med Cover Service Upload er at etablere et REST API interface til upload af et eller flere materialeforsider til DDB Cover servicen samt en brugergrænseflade bibliotekernes medabrejdere kan benytte til at uploade materialeforsiderne.

### REST API interface

- Upload interfacet indgår som et endpoint i DDB Cover servicen.
- Upload af materialeforsider sker grundlæggende under de samme forudsætninger som allerede er etableret for import fra kilder af materialeforsider.

TANKE: Kan man lave en lavpraktisk upload løsning med CSV-fil eller lignende med [pid, fil-reference]?

### Upload brugergrænseflade

MANGLER AFKLARING: Etableres som selvstændig brugergrænseflade eller modul til DDB CMS.

1. Upload af materialeforsider forudsætter autentifikation af bruger
1. Fremsøg et materiale for at identificere en PID for fællespost eller lokaltkatalogiseret materiale.
1. Vis eventuelt eksisterende materialeforsider i DDB Cover servicen der matcher det pågældende PID.
1. Tag et billede af det fysiske materiale i god kvalitet.
1. Vis materialeforsiden sammen med titel, forfatter, udgivelsesår samt oplysninger om printudgave/oplag.
1. Tilføj billedet via "hent fra computer", link eller drag'n'drop.
1. Tjek automatisk om billedet lever op til gældende kvalitetskrav.
1. Accepter betingelser for upload af materialeforside.
1. Upload PID og materialeforside til DDB Cover servicen.

### Forudsætninger

- Uploadede materialeforsider gøres tilgængelige for alle agencies.
- Uploadede materialeforsider gennemgår IKKE central screening proces.
- Flere materialeforsider kan uploades til det samme PID, men kun det billede med højest opløsning bliver vist.

### Upload materialeforside use cases

![Usecase](http://www.plantuml.com/plantuml/proxycache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/list-services/master/docs/material-cover/upload-cover.puml)

### Optioner til overvejelse

- Upload materialeforside til visning for et bestemt agency?
- Juridisk afklaring omkring rettighedsklarering, hvem har ansvaret?
- Behov for generiske forsider?

## Epic

### ID [EE]	| Titel: 

#### Epic
<!-- Som [rolle], ønsker jeg at [behov], for at [mål] -->

Som 
_medarbejder_, 
ønsker jeg at 
**kunne overføre et nyt forsidebillede til et materiale**,
for at 
**supplere de eksisterende forsider**


#### Beskrivelse

<!-- Kontekst for behovet (kort brødtekst).
Eksempelvis en uddybning af ovenstående med <Rolle> har brug for <hvad>, i forbindelse med <…>, fordi <…>
Kom gerne omkring hele bredden af epic’en.  
-->
En stor del af bibliotekernes samlinger har ikke forsider fra de eksisterende kilder.

- Ældre materialer
- Ikke-boglige materialer
 - CD'er
 - Brætspil
 - Film
 - Lydbøger
 - Spil
- Lokale varianter
 - Lokale titler
 - Lokalhistoriske bøger
 - Lokalkatalogiserede materialer
 - Legeteket
- Udenlandske materialer
 - Engelske, tyske og franske børnebøger
 - Engelske voksenbøger
- Kilder uden individuelle forsider
- Kilder hvor koblingen er mangelfuld (Manglende unik ID eller andre referencer)
- E-ressourcer / Digitale materailer -> Generiske forsider


#### Afhængigheder

#### Afklaringer
<!-- Kendte manglende afklaringer på angivelsestidspunktet -->
Rettigheder til evt. lokale værker skal evt. afklares


---

## User Stories

### ID [EE.UU]	Titel: Ny forside / PID "{agency}-basis:{faust}" <!-- Eksempelvis: Angivelse af adresse] -->

#### User story
<!-- Som [rolle], ønsker jeg at [behov], for at [mål] -->

Som 
__medarbejder__, 
ønsker jeg at 
**kunne overføre et nyt forsidebillede til et materiale**
 identificeret med:
- PID

<!--
- ISBN
- Faustnr.
- ISSN (+ Vol., Nr.)
-->

#### Beskrivelse
<!-- Her kan angives en kontekst for behovet (kort brødtekst). Formlen ”<Rolle> har brug for <hvad>, i forbindelse med <…>, fordi <…>”, kan være god at holde sig til for at sikre at basis informationer er med, men den kan med fordel også anvendes som en tjekliste, mens et mere naturligt sprog benyttes.

>Hyppighed: 

_[rolle]_
har brug for 
**[hvad]**,
i forbindelse med 
**[…]**,
fordi
**[…]**
-->

Medarbejderen skal kunne overføre billedet ved at finde en post i brønden, som billedet skal relateres til.

Billedet vedhæftes som fil (evt drop på felt) og overføres til CoverService.

#### Accept Kriterier
<!-- Følgende formel kan være god at bruge: ”Given-When-Then”. 
>Dvs.: Givet at <kontekst> når <X handling er ført ud i livet>, så <præcis konsekvens der skal ske> 
-->
Billedet kan umiddelbart overføres og knyttes til en post via PID + vol/nr/serienummer

#### Afklaringer
<!--  Kendte manglende afklaringer på angivelsestidspunktet. -->

---


### ID [EE.UU]	Titel: Ny forside til tidsskrift / ISSN-YYYY-Vol-nr <!-- Eksempelvis: Angivelse af adresse] -->

#### User story
<!-- Som [rolle], ønsker jeg at [behov], for at [mål] -->

Som 
_medarbejder_, 
ønsker jeg at 
**kunne overføre et nyt forsidebillede til en serie eller tidsskrift**
 identificeret med:
- PID
- (+ Vol., Nr.)

<!--
- ISBN
- Faustnr.
- ISSN (+ Vol., Nr.)
-->

#### Beskrivelse
<!-- Her kan angives en kontekst for behovet (kort brødtekst). Formlen ”<Rolle> har brug for <hvad>, i forbindelse med <…>, fordi <…>”, kan være god at holde sig til for at sikre at basis informationer er med, men den kan med fordel også anvendes som en tjekliste, mens et mere naturligt sprog benyttes.

>Hyppighed: 

_[rolle]_
har brug for 
**[hvad]**,
i forbindelse med 
**[…]**,
fordi
**[…]**
-->
Medarbejderen skal kunne overføre billedet ved at finde en post i brønden, som billedet skal relateres til.

Der skal kunne vælges eller indsættes data, som binder billedet til et specifikt vol./nr eller nr. i serie.

Billedet vedhæftes som fil (evt drop på felt) og overføres til CoverService.

#### Accept Kriterier
<!-- Følgende formel kan være god at bruge: ”Given-When-Then”. 
>Dvs.: Givet at <kontekst> når <X handling er ført ud i livet>, så <præcis konsekvens der skal ske> 
-->
Billedet kan umiddelbart overføres og knyttes til en post via PID / ISBN / ISSN+

#### Afklaringer
<!--  Kendte manglende afklaringer på angivelsestidspunktet. -->

---
### ID [EE.UU]	Titel: Lokal variant af forside  "{agency}-katalog:{faust}" <!-- Eksempelvis: Angivelse af adresse]-->

#### User story
<!-- Som [rolle], ønsker jeg at [behov], for at [mål] -->
Som 
_medarbejder_, 
ønsker jeg at 
**knytte en lokal variant af en forside til en post i lokalsystemet**, 
for at 
**kunne få vist en særlig lokal variant af forsiden**

#### Beskrivelse
<!--
Her kan angives en kontekst for behovet (kort brødtekst). 
Formlen ”<Rolle> har brug for <hvad>, i forbindelse med <…>, fordi <…>”, kan være god at holde sig til for at sikre at basis informationer er med, men den kan med fordel også anvendes som en tjekliste, mens et mere naturligt sprog benyttes.

Hyppighed: 
-->

_[rolle]_
har brug for 
**[hvad]**,
i forbindelse med 
**[…]**,
fordi
**[…]**

#### Accept Kriterier
<!-- Følgende formel kan være god at bruge: ”Given-When-Then”. -->

#### Afklaringer
<!-- Kendte manglende afklaringer på angivelsestidspunktet -->

---

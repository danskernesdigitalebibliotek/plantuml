# Wayfinder


## Sekvens

![Sekvensdiagram](http://www.plantuml.com/plantuml/proxy?src=https://danskernesdigitalebibliotek.github.io/plantuml/wayfinder/wayfinder.txt)

Bemærk!
<fieldset class="legend1">
  <legend class="legend1">Bemærk!</legend>
   <p>Hyldemærke (Shelfmark) udleveres IKKE af Cicero og sandsyneligvis heller ikke af IMS. Det er derfor nødvendigt at hente hyldemærket i Libby - eller via en REACT-komponent (Se beskrivelse af <a href="../react/localisation/">[hyldemærke]</a>)</p>
  </fieldset>


## Arkitekturkomponenter / opmærksomhedspunkter
-	Shelfmark til ikke-IMS biblioteker. I Redias gamle oplæg lægger de op til at hente shelfmark fra FBS, hvilket ikke kan lade sig gøre.
-	Client authentication imellem klienten (DDB CMS eller APP’en), og Redias Maps platform.
-	Udstilling, men ikke drift og hosting af Redia Maps platformen i Open Platform.

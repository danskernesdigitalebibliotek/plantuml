# Wayfinder


## Sekvens

![Sekvensdiagram](http://www.plantuml.com/plantuml/proxy?src=https://danskernesdigitalebibliotek.github.io/plantuml/wayfinder/wayfinder.txt)


## Arkitekturkomponenter
-	Shelfmark til ikke-IMS biblioteker. I Redias gamle oplæg lægge de op til at hente shelfmark fra FBS, hvilket ikke kan lade sig gøre.
-	Client authentication imellem klienten (DDB CMS eller APP’en), og Redias Maps platform.
-	Udstilling, men ikke drift og hosting af Redia Maps platformen i Open Platform.

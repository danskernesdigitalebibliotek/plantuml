# Liste service

- Migrering af eksisterende lister
- Udstilling Open Platform

## Hvilke data har vi?

## Hvilke services?

- VoxB
- Open List
- BPI

### CMS

#### Kalenderstyret
- Nyheder
- Arrangementer

#### Konfiguration
- Konfiguration (Variables). Ikoner, farver
- Abonnementer (Consent)
- Søgelister. Forsidekarusseller (Søgeudtryk)

#### Lånerrettet
- Materialelister (til lånere). PID liste
- Anmeldelser (Biblioteker/brugere)

#### Statistik genererede lister
- Trend - Vurderinger/Popularitet (Biblioteker/brugere). Kan det beregnes udfra udlån / antal bestillinger - beholdning.

### Udstilling af data

- DDB CMS - Ding_mobilesearch modulet -> Open Platform /CMS eller https://cmscontent.dbc.dk/.
- DDB CMS - Services modulet:
  - [URL]/services/news_list
  - [URL]/services/event_list
- APP feeds
  - Arrangementer: [URL]/ding-redia-rss/event
  - Nyheder: [URL]/ding-redia-rss/news
  - Materialekarruseller: [URL]/ding/variables

## Material List Flow
![Class](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://danskernesdigitalebibliotek.github.io/plantuml/listServices/materialListFlow.puml)

## Subscribtion service Class
![Class](http://www.plantuml.com/plantuml/proxy?src=https://danskernesdigitalebibliotek.github.io/plantuml/listServices/subscription.class.puml)



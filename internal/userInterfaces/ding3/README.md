# Ding3

Formålet med dette repositorie er, på nuværende tidspunkt, at eksperimentere med forskellige metoder til at udarbejde en kravspecifikation for næste generation af DDB CMS.


## Indholdsfortegnelse

- [Ding3](#ding3)
  * [Metode](#metode)
  * [DDB CMS Roadmap](#ddb-cms-roadmap)
  * [Global navigation](#global-navigation)
    + [Header](#header)
    + [Opret ny låner](#opret-ny-l-ner)
    + [Log ind](#log-ind)
      - [Ikon og biblioteksnavn](#ikon-og-biblioteksnavn)
    + [Hovedmenu](#hovedmenu)
  * [Front page](#front-page)
  * [Sections](#sections)
  * [News](#news)
  * [Events](#events)
    + [Billetsystem - Place2book](#billetsystem---place2book)
  * [Library brances](#library-brances)
    + [Opening hours](#opening-hours)
  * [E-ressourcer / E-resurser (https://upgrade-fbs.ddbcms.dk/admin/config/ding/eresource)](#e-ressourcer---e-resurser--https---upgrade-fbsddbcmsdk-admin-config-ding-eresource-)
  * [Personalisering](#personalisering)
  * [Search](#search)
    + [User story diagrams (PlantUML)](#user-story-diagrams--plantuml-)
    + [konfiguration](#konfiguration)
      - [Ding search service settings (https://upgrade-fbs.ddbcms.dk/admin/config/ding/provider/opensearch)](#ding-search-service-settings--https---upgrade-fbsddbcmsdk-admin-config-ding-provider-opensearch-)
      - [Rankering og boost](#rankering-og-boost)
      - [Search field and autocomplete](#search-field-and-autocomplete)
        * [Red route - Udfør søgning: Søgefelt, autocomplete og søgeprofil](#red-route---udf-r-s-gning--s-gefelt--autocomplete-og-s-geprofil)
      - [Search result](#search-result)
    + [User story functional specification](#user-story-functional-specification)
    + [Søgeresultat - filtrér, sortér eller paginér](#s-geresultat---filtr-r--sort-r-eller-pagin-r)
      - [Information](#information)
      - [Work collections](#work-collections)
      - [Manifestation](#manifestation)
        * [Periodicals](#periodicals)
      - [Bibliotek.dk alternative search](#bibliotekdk-alternative-search)
      - [Universal alternative Search](#universal-alternative-search)
      - [Pagination](#pagination)
  * [Lånerstatus](#l-nerstatus)
    + [Lån](#l-n)
      - [Red rout - Forny lån](#red-rout---forny-l-n)
      - [Red rout - Se afleveringsdato](#red-rout---se-afleveringsdato)
    + [Red rout - Reserveringer](#red-rout---reserveringer)
    + [Red rout - Mellemværender (Betaling via DIBS)](#red-rout---mellemv-render--betaling-via-dibs-)
  * [User profile](#user-profile)
    + [Red rout - Opret låner](#red-rout---opret-l-ner)
    + [Red rout - Skift afhentningsfilial](#red-rout---skift-afhentningsfilial)
    + [Red rout - Skift fraværsperiode](#red-rout---skift-frav-rsperiode)
  * [Globale funktioner](#globale-funktioner)
    + [Youtube nocookie](#youtube-nocookie)
    + [Webtrekk - Statistik](#webtrekk---statistik)
    + [BPI](#bpi)
    + [Adgangsplatformen (https://upgrade-fbs.ddbcms.dk/admin/config/ding/auth)](#adgangsplatformen--https---upgrade-fbsddbcmsdk-admin-config-ding-auth-)
  * [Integrationslag (API'er og abstraktionslag)](#integrationslag--api-er-og-abstraktionslag-)
  * [Campaign PLUS (https://upgrade-fbs.ddbcms.dk/admin/config/ding/campaigns_plus)](#campaign-plus--https---upgrade-fbsddbcmsdk-admin-config-ding-campaigns-plus-)
  * [Ding DDBasic opening hours (https://upgrade-fbs.ddbcms.dk/admin/config/ding/ddbasic-opening-hours)](#ding-ddbasic-opening-hours--https---upgrade-fbsddbcmsdk-admin-config-ding-ddbasic-opening-hours-)
  * [Ding mobile search - eksport til CMS Content service (https://upgrade-fbs.ddbcms.dk/admin/config/ding/mobilesearch/content-export)](#ding-mobile-search---eksport-til-cms-content-service--https---upgrade-fbsddbcmsdk-admin-config-ding-mobilesearch-content-export-)
  * [Oversættelser](#overs-ttelser)
  * [DDB Architecture](#ddb-architecture)
  * [Ding consent (https://upgrade-fbs.ddbcms.dk/admin/config/ding/consent)](#ding-consent--https---upgrade-fbsddbcmsdk-admin-config-ding-consent-)
  * [Statistik - udelad (/user)](#statistik---udelad---user-)
  * [Search engine indexing (robots.txt) - udelad /user samt /search/ting/](#search-engine-indexing--robotstxt----udelad--user-samt--search-ting-)
  * [Forslag til eksterne services](#forslag-til-eksterne-services)
  * [Forslag til nedprioritering af funktionalitet](#forslag-til-nedprioritering-af-funktionalitet)
  * [Baggrundsinformation](#baggrundsinformation)
  * [Databrønd relationer](#databr-nd-relationer)
  * [References](#references)


## Metode

Usecase (PlantUML usecase diagram)
Red route  (PlantUML activity diagram)
Systeminteraktioner (PlantUML Sekvensdiagrammer)
Acceptkriterier (Behat Gherkin syntax)

Marcxchange mapping specification (PlantUML activity diagram)
Arkitekturmodeller (PlantUML archimate diagram)

- GDPR
- Tilgængelighed

## DDB CMS Roadmap

![DDB CMS Roadmap](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/gantt-diagrams/ddb_roadmap_gantt.puml)

NB. PlantUML Gantt diagram

## Global navigation

### Header

### Opret ny låner

![Opret ny låner](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/user-story-diagrams/user/1_opret_laaner.puml)

### Log ind

![Log ind](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/user-story-diagrams/user/2_log_ind.puml)

![Log ind](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/brugerprofil/2_log_ind.puml)

#### Ikon og biblioteksnavn

### Hovedmenu

## Front page

- Promote content types to frontpage (https://upgrade-fbs.ddbcms.dk/admin/config/ding/fe-promote)
    - Promote types to frontpage
        - Nyhed [boolean]
        - Begivenhed [boolean]

## Sections
Mangler afklaring: Skal Paragraphs modulet benyttes i stedet for Sectionsmodulet (Editorial base).

Panelser (https://upgrade-fbs.ddbcms.dk/admin/config/user-interface/ipe-filter)
- Available panel panes
    - Campaign [boolean]
    - all_opening_hours [boolean]
    - Popular [boolean]
    - Interaction_pane [boolean]
    - ding_nodelist [boolean]
    - Serendipity_ting_object [boolean]
    - ding_tabroll-ding_frontpage_tabroll [boolean]
    - ding_event-ding_event_list_frontpage [boolean]
    - ding_event-ding_event_simple_list [boolean]
    - ding_groups-ding_group_overview_simple [boolean]
    - carousel [boolean]
    - ding_news-ding_news_frontpage_list [boolean]

Ding nodelist (https://upgrade-fbs.ddbcms.dk/admin/config/ding/ding_nodelist)
- Tilgængelige indholdstyper
    - Liste over indholdstyper
        - Begivenhed [boolean]
        - E-resurse [boolean]
        - Nyhed [boolean]
        - Side [boolean]
    - Standard mellemlagringstid [0s|15s|30s|1m|2m|3m|4m|5m|10m|15m|30m|1t|2t|4t|8t|12t|1d|2d|3d|4d|1u]
    - Standard autoscroll forsinkelse for karusel [ms]

## News

- Ding news settings (https://upgrade-fbs.ddbcms.dk/admin/config/ding/news)
    - Number of news [10|12|14|16|20]

## Events

- Ding event settings (https://upgrade-fbs.ddbcms.dk/admin/config/ding_event/settings)
    - Valuta radio:[kr.|€]
    - Frontpage
        Events in frontpage list [3-6|6-12|9-18]
        Only promoted events [boolean]
    - Arrangementer
        - Number of events [10|12|14|16|20]
        Group events by date [boolean]

### Billetsystem - Place2book

- Place2book indstillinger (https://upgrade-fbs.ddbcms.dk/admin/config/ding/place2book/defaults)
    - Default event maker radio:[list_of_branches]
    - Vedligehold kopi [boolean]
    - Kultunaut eksport [boolean]
    - Passivt arrangement [boolean]
    - Kapacitet [integer]
    - Ticket type [string]
- Place2book indstillinger - service (https://upgrade-fbs.ddbcms.dk/admin/config/ding/place2book)
    - Place2book service base URL [URL]
    - Place2book autorisation token [string]
    - Insert Place2book event makers path without leading slash [string]
    - Insert Place2book edit event path without leading slash [string]
    - Insert Place2book get event path without leading slash [string]
    - Insert Place2book update event path without leading slash [string]
    - Insert Place2book delete event path without leading slash [string]
    - Insert Place2book create event path without leading slash [string]
    - Insert Place2book create price path without leading slash [string]
    - Insert Place2book get prices path without leading slash [string]
    - Insert Place2book get price path without leading slash [string]
    - Insert Place2book update price  path without leading slash [string]
    - Insert Place2book delete price path without leading slash [string]
- Place2book indstillinger - mappings (https://upgrade-fbs.ddbcms.dk/admin/config/ding/place2book/mappings)
    - Event makers
        Event maker [Liste_af_branches]
    - Kultunaut age group
        - For alle [børn|unge|voksn|ældre]
        - For børn [børn|unge|voksn|ældre]
        - For studerende [børn|unge|voksn|ældre]
        - For unge [børn|unge|voksn|ældre]
        - For voksne [børn|unge|voksn|ældre]
        - For ældre [børn|unge|voksn|ældre]
    - Kultunaut export category
        - Børn list:[Kultunaut_export_categories]
        - Foredrag & debat list:[Kultunaut_export_categories]
        - Internet & undervisning list:[Kultunaut_export_categories]
        - Litteratur list:[Kultunaut_export_categories]
        - Musik list:[Kultunaut_export_categories]
        - Udstilling list:[Kultunaut_export_categories]


## Library brances

### Opening hours

## E-ressourcer / E-resurser (https://upgrade-fbs.ddbcms.dk/admin/config/ding/eresource)

- Overwrite the default e-resource category text

- https://upgrade-fbs.ddbcms.dk/node/add/ding-eresource
- https://upgrade-fbs.ddbcms.dk/admin/structure/types/manage/ding_eresource
- https://upgrade-fbs.ddbcms.dk/admin/structure/taxonomy/e_resource_availability
- https://upgrade-fbs.ddbcms.dk/admin/structure/taxonomy/e_resource_category

Mangler afklaring - Kan et overblik over e-ressourcer genereres bedre?

## Personalisering

- Ding serendipity (https://upgrade-fbs.ddbcms.dk/admin/config/ding/serendipity)
    - Aktivér caching [boolean]
    - Cache udløb [integer]
    - Grænse for hvornår serendipitetsopslag markeres som for langsomme [integer]
    - Serendipitets CQL fallback søgestrenge [string]
    - Serendipitet sidste fallback beskrivelse [string]

## Search

### User story diagrams (PlantUML)

### konfiguration

#### Ding search service settings (https://upgrade-fbs.ddbcms.dk/admin/config/ding/provider/opensearch)
- bliotekskode [integer]
- Search service URL [URL]
- Authentication
    - Use authentication [boolean]
    - Navn [string]
    - Adgangskode [string]
    - Gruppe [string]
- Recommendation service URL [URL]
- Search profile [string]
- Infomedia web service URL [URL]
- Akrivér logging [boolean]
- Cache udløb [1m|5m|15m|30m|1t|3t|12t|1d|3d|1u]

#### Rankering og boost

Omhandler rankering og boost af søgeresultatet.

- Search result ranking (https://upgrade-fbs.ddbcms.dk/admin/config/opensearch/ranking)
    - Enable custom ranking [boolean]
    - Custom ranking fields (0.*)
        - Type [phrase|word]
        - Feltnavn [kilde|titel|forfatter|emne|year_of_publish|material_type]
        - Vægt [1|2|3|4|5|6|7|8|9|10]
    default sort method (Best_matched)
        Type [best_match|general_rank|no_rank]
- Search result boost (https://upgrade-fbs.ddbcms.dk/admin/config/opensearch/boost)
    - Custom field boost values
        - Feltnavn [kilde|forfatter|emne|year_of_publish|material_type|sprog|isbn_number|klassemærke]
        - Værdi [string]
        - Vægt [integer]

#### Search field and autocomplete

!(Screenshot of search result page)[]

- Opensearch search autocomplete settings (https://upgrade-fbs.ddbcms.dk/admin/config/opensearch/autocomplete)
-   Autocomplete service URL [URL]
-   Autocomplete settings
    - Max suggestions [integer]
    - Minimum string [integer]

![Search field](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/user-story-diagrams/search/search_field_autocomplete.puml)

![Search field](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/user-story-diagrams/search/search_result.puml)

##### Red route - Udfør søgning: Søgefelt, autocomplete og søgeprofil

![Udfør søgning: Søgefelt, autocomplete og søgeprofil](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/soegning/1_udfoer_soegning-soegefelt_autocomplete_soegeprofil.puml)

#### Search result

![Search result](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=1&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/user-story-diagrams/search/search_result.puml)

### User story functional specification

| Story ID 	| As a... 	| I can ...                                                      	| So that ...                                                               	|
|----------	|---------	|----------------------------------------------------------------	|---------------------------------------------------------------------------	|
| S001     	| Patron  	| Perform a search query                                         	| I can see the search result.                                              	|
|----------	|----------	|----------------------------------------------------------------   |---------------------------------------------------------------------------	|
| Flow     	| Step    	| When ...  [Syntax: actor|action|element]                          | Then ... [Syntax: element|reaction]                                           |
| Main     	| 1       	| the patron clicks in the search field                          	| the searchfield becomes active                                            	|
|          	| 2       	| the patron inputs text in the seach field                      	| the autocomplete function displays suggestions from the Ortograf service. 	|
|          	| 3a      	| the patron clicks on the search profile dropdown menu.         	| the search profile drop down menu opens                                   	|
|          	| 3a1     	| the patron selects a value in the search profile dropdown menu 	| the search profile dropdown menu displays the selected value              	|

![Search result](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/sequence-diagrams/search/search-field-and-autocomplete.puml)

### Søgeresultat - filtrér, sortér eller paginér

![Søgeresultat - filtrér, sortér eller paginér](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/soegning/2-filtrer_sorter_paginer_soegeresultat.puml)

#### Konfiguration

https://upgrade-fbs.ddbcms.dk/admin/config/ting/facets

#### Information

#### Work collections

#### Manifestation

![Shelfmark](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/marcxchange_mapping_specifications/shelfmark.puml)

##### Periodicals

UX oplæg - https://projects.invisionapp.com/share/2XND9K1EVY6#/screens/319278647

[volumeYear]
Bind/vol. [volume], nr. [VolumeNumber]

Svarende til:

2018
Bind/vol. 2018, nr. 01

Behanldet i https://platform.dandigbib.org/issues/3146

#### Bibliotek.dk alternative search

#### Universal alternative Search

#### Pagination


## Lånerstatus

- FSB service settinss (https://upgrade-fbs.ddbcms.dk/admin/config/ding/provider/fbs)
    - FBS endpoint URL [URL]
    - ISIL [string]
    - Brugernavn [string]
    - Adgangskode [string]
    - Vælg interesseperiode [1m|2m|3m|6m|12m]
    - Enable reservation deletion [boolean]
    - Disable insterest period [boolean]
    - Search branches blacklist list:[brances]
    - User branches blacklist list:[brances]
    - Holdings branches blacklist list:[brances]
- Ding provider (https://upgrade-fbs.ddbcms.dk/admin/config/ding/provider)
    - Delete provider users that are inactive for [none|1y|2y|3y|4y|5y]

### Lån

#### Red rout - Forny lån

![Forny lån](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/laan/forny_laan.puml)

#### Red rout - Se afleveringsdato

![Se afleveringsdato](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/laan/se_afleveringsdato.puml)

### Red rout - Reserveringer

![Slet reservering](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/reserveringer/slet_reservering.puml)

### Red rout - Mellemværender (Betaling via DIBS)

![Betal mellemværende](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/mellemvaerender/betal_mellemvaerende.puml)

- Indstillinger (https://upgrade-fbs.ddbcms.dk/admin/config/payment/ding_dibs)
    - Terms of sale [string]
    - Kreditkort typer checklist[supported_card_types]
    - Slet transaktioner ældre end: [none|30d|90d|1y]

- Notifikation til webmaster (https://upgrade-fbs.ddbcms.dk/admin/config/payment/ding_dibs/emails)
    - Cron daglig afvikling på dato [date-hh:mm]
    - e-mail-adresser der skal adviseres ved problemer [string]

- Rapporter (https://upgrade-fbs.ddbcms.dk/admin/config/payment/ding_dibs/reports)
    - table:|Order ID|Transaction ID|Dato|Bruger|Tekst|Beløb|Cleared true/false|Paid true/false|Captured true/false|

## User profile

### Red rout - Opret låner
![Opret låner](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/brugerprofil/1_opret_laaner.puml)

### Red rout - Skift afhentningsfilial
![Skift afhentningsfilial](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/brugerprofil/skift_afhentningsfilial.puml)

### Red rout - Skift fraværsperiode
![Skift fraværsperiode](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/activity_diagrams/red-routes/brugerprofil/skift_fravaersperiode.puml)


## Globale funktioner

### Youtube nocookie
- Youtube URL'er til https://www.youtube-nocookie.com

### Webtrekk - Statistik

Opmærkning af elementer der skal trackes af Webtrekk.

- Webtrekk (https://upgrade-fbs.ddbcms.dk/admin/config/ding/webtrekk)
    - TagIntegration Domain [string]
    - TagIntegration ID [integer]

### Opmærkning af sprog med lang-attribute

Opsætning af lang-attribut, ved sprog valg på de enkel dokumenttyper.

### BPI
- Serviceindstillinger (https://upgrade-fbs.ddbcms.dk/admin/config/bpi/settings)
    - Biblioteksnummer [integer]
    - WS URL [URL]
    - Key (Secret) [string]
    - Public key [string]
- Indholdstilknytning (https://upgrade-fbs.ddbcms.dk/admin/config/bpi/content_mapping)
    - Indholdstype [Nyhed|Bibliotek|Campaign|Campaing_PLUS|E-resurse|Grupper|Nyhed|Panel|Rolltab|Side|Webform]
    - Titel Default[titel]
    - Resumé [Body|Fax|Lead|Phone|Slug]
    - Brødtekst [Body|Fax|Lead|Phone|Slug]
    - BPI tags [Body|Fax|Lead|Phone|Slug]
    - BPI materials [Body|Fax|Lead|Phone|Slug]
    - Syndication settings
        - Syndicate tags [boolean]

### Adgangsplatformen (https://upgrade-fbs.ddbcms.dk/admin/config/ding/auth)
- Client ID [string]
- Client secret [string]
- Omdirigér til URL [URL]
- Authorization service [URL]
- Access token service [URL]
- Resource end-point [URL]
- Log ud [URL]

## Integrationslag (API'er og abstraktionslag)
- Databrønd
- Bibliotekssysmtem
- Billetsystem
- Betaling (Mellemværender)
- BPI (CMS Content service / BPI service)

## Campaign PLUS (https://upgrade-fbs.ddbcms.dk/admin/config/ding/campaigns_plus)

- Vægt
    - list:[facets]
- Facets
    - list:[facets]
- Auto generated campaigns
    - Grundlæggende radio:[ingen|bibliotek|ord_i_ordforråd|gruppe|search_term_match]
    - Facets
        radio:[facets]
    - Object view
        Aktivér [boolean]
    - Søg
        Aktivér [boolean]
    - Notification scan interval [0s|1t|3t|6t|9t|12t|1d|2d|4d|1u|2u|4u]
    - Campaign cache expire [integer]


## Ding DDBasic opening hours (https://upgrade-fbs.ddbcms.dk/admin/config/ding/ddbasic-opening-hours)

- Extended title [boolean]
- Expand settings [dont_expand|expand_on_first_library|expand_all_libraries]

Mangler afklaring: Hvad benyttes denne funktion til?

## Ding mobile search - eksport til CMS Content service (https://upgrade-fbs.ddbcms.dk/admin/config/ding/mobilesearch/content-export)

- Eksportér
    Indholdstype checkboks:[begivenhed|bibliotek|nyhed]

## Oversættelser

Mangler afklaring:
- Localization server
- Context på alle oversættelser (Skal tilføjes til Code guidelines)

## DDB Architecture

![Search result](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://raw.githubusercontent.com/danskernesdigitalebibliotek/ding3/master/PlantUML/archimate-diagrams/ddb_arkitektur_niveau_1.puml)


## Ding consent (https://upgrade-fbs.ddbcms.dk/admin/config/ding/consent)

Mangler afklaring

## Statistik - udelad (/user)

Undgå at statistik opsamles for lånerstatus og brugerprofil (/user)

## Search engine indexing (robots.txt) - udelad /user samt /search/ting/

Undgå at søgemaskiner indekserer:
- lånerstatus og brugerprofil (/user).
- søgeresultat-, værkvisnings- samt materialevisningssider (/search/ting/)

## Forslag til eksterne services

- Terms of use texts service
    - Samtykke (https://upgrade-fbs.ddbcms.dk/admin/config/ding/consent)
    - Cookies (?)
    - GDPR (?)


## Forslag til nedprioritering af funktionalitet

Mangler afklaring:

- Dynamic backgrounds (https://upgrade-fbs.ddbcms.dk/admin/config/user-interface/backgrounds/)
- Ding interaction (https://upgrade-fbs.ddbcms.dk/admin/config/ding/interaction)
- Place2book migration to new api (https://upgrade-fbs.ddbcms.dk/admin/config/ding/place2book/migrate)

## Baggrundsinformation

## Databrønd relationer

| Relation 	| Kilde 	| Eksempel 	|
|-----------------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| dbcaddi:isSoundtrackOfGame 	| - Udenlandske biblioteker (til bibliotek.dk) - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) 	|  	|
| dbcaddi:isSoundtrackOfMovie 	| - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Udenlandske biblioteker (til bibliotek.dk) 	| - Kærlighed ved første hik : soundtrack fra Kærlighed ved første hik: 870970-basis%3A2 2675109 - Oh happy day : original motion picture soundtrack: 870970-basis%3A2 5481941 	|
| dbcaddi:hasSoundtrack 	| - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Udenlandske biblioteker (til bibliotek.dk) 	| - Kærlighed ved første hik: 870970-basis%3A5 1736370 	|
| dbcaddi:isManuscriptOf 	| - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Udenlandske biblioteker (til bibliotek.dk) 	| - Manuskript: Lars Von Trier: Riget: 870970-basis%3A2 1117013 	|
| dbcaddi:hasManuscript 	| - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Udenlandske biblioteker (til bibliotek.dk) 	| - Tv-serien Riget: 870970-basis%3A2 9054487 	|
| dbcaddi:hasAdaptation 	| - Filmstriben i lænestolen - Filmstriben på biblioteket - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Udenlandske biblioteker (til bibliotek.dk) 	|  	|
| dbcaddi:isAdaptationOf 	| - Filmstriben i lænestolen - Filmstriben på biblioteket - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Udenlandske biblioteker (til bibliotek.dk) 	| - Filmen Gøgereden:870970- basis%3A51216857 - Tv-serien Riget: 870970-basis%3A2 9054487 	|
| dbcaddi:isReviewOf 	| - Anmeldelser (musik) - Artikelbasens Anmeldelser - eReolen - Filmcentralen alle - Filmcentralen grundskolen - Filmcentralen gymnasiet - Folkebiblioteker og Nationalbibliografi (alle 870970-poster, til FBS) - Forskningsbibliote ker (til bibliotek.dk) - Litteratursiden (anmeldelser) - Materialevurderinger - Retrobasen artikler i bøger - Retrobasens anmeldelser - Retrobasens avisartikler - Retrobasens tidsskriftsartikler - Udenlandske biblioteker (til bibliotek.dk) 	| - Lektørudtalelse (om Hvide Mellemrum): 870976-anmeld%3 A31177316 	|
| dbcaddi:isAnalysisOf 	| - Litteratursiden (analyser) 	| - Christian Jungersens: Undtagelsen: 150005-analyse%3 A58934. - Analyse af: Einar Már Guðmundsson - Universets engle: 150005-analyse%3 A100077 	|
| dbcaddi:hasAnalysis 	| - Litteratursiden (analyser) 	| - Christian Jungersen: Undtagelsen: 870970-basis%3A2 5419766 - Bog. Einar Már Guðmundsson: Universets engle: 870970-basis%3A2 0848871 	|
| dbcaddi:continues 	| - Artikelbasens avisartikler - Artikelbasens tidsskriftsartikler - Retrobasens tidsskriftsartikler 	| - Artikelserie: Abemanden: Titel: FortsættelseDragen fra Hedehusene: 870971-avis%3A86 954605 	|
| dbcaddi:continuedIn 	| - Artikelbasens avisartikler - Artikelbasens tidsskriftsartikler - Retrobasens avisartikler - Retrobasens tidsskriftsartikler 	|  	|
| dbcaddi:discusses 	| - Artikelbasens avisartikler - Artikelbasens tidsskriftsartikler - Retrobasens avisartikler - Retrobasens tidsskriftsartikler 	|  	|
| dbcaddi:discussedIn 	| - Artikelbasens avisartikler - Artikelbasens tidsskriftsartikler - Retrobasens avisartikler - Retrobasens tidsskriftsartikler 	|  	|

## References

- PlantUML Sequence diagram - http://plantuml.com/sequence-diagram
- Gherkin syntax - https://cucumber.io/docs/gherkin/reference/
- Table to markdown generato - https://www.tablesgenerator.com/markdown_tables#
- User story functional specification - http://www.its-all-design.com/an-agile-functional-specification/
- PlantUML reference guide - http://plantuml.com/guide
- Plantuml Archimate sprites - http://plantuml.com/archimate-diagram
- PlantUML editor - https://www.planttext.com/
- PlantUML source code - https://github.com/plantuml/plantuml/tree/master/src/sprites/archimate
- PlantUML Arhcimate Macros - https://raw.githubusercontent.com/ebbypeter/Archimate-PlantUML/master/Archimate.puml
- Markdown to Table Of Content (TOC) generator - https://ecotrust-canada.github.io/markdown-toc/

# Lånehistorik


## Scenarie 0: Aktuelt dataflow

### Lånehistorik fra FBS til FAKTOR (Uden CPR eller andet Persistent ID)

1. Overførsel af anonymiserede FBS statistikdata via Service platformen til FAKTOR.
1. Overførsel af FBS udlånsdata via Service platformen til Danmarks Statistik hvor data anonymiseres og sendes til FAKTOR.

![Diagram over todelt flow af data fra FBS til FAKTOR](https://github.com/danskernesdigitalebibliotek/diagrams/blob/master/docs/fbsLoanDataToFaktor.svg)


## Scenarie 1: Fremtidigt dataflow til FAKTOR

### Lånehistorik fra FBS til FAKTOR (Med Persistent ID (PID)

1. Overførsel af anonymiserede FBS statistikdata med tilføjet Persistent ID via Service platformen til FAKTOR.
1. Overførsel af FBS udlånsdata med CPR-nu. via Service platformen til Danmarks Statistik hvor data anonymiseres og sendes til FAKTOR.

![Diagram over todelt flow af data fra FBS til FAKTOR med Persistent ID](https://github.com/danskernesdigitalebibliotek/diagrams/blob/master/docs/fbsLoansWithPidToFactor.svg)

## Scenarie 2: Fremtidigt dataflow til FAKTOR og DDB CMS

### Lånehistorik fra FBS til DDB CMS Lånehistorik liste
Lånehistorik med CPR-nr. udstilles på Service platformen. DDB kan hente data på lånere med abonnement på lånehistorik hos Service platformen.

![Diagram over dataflow hvor Kombit har ansvaret for at udlevere data på baggrund af brugeraccept.](https://github.com/danskernesdigitalebibliotek/diagrams/blob/master/docs/fbsLoansToFactorAndDdbCmsViaDatawash.svg)


## Scenarie 3: Alternativt fremtidigt dataflow

### Lånehistorik fra FBS til FAKTOR via datavask

Kopi af leverance til DST.

Alle udlåns og afleveringstranaktioner for alle lånere udleveres via Serviceplatformen til DDB. DDB står med ansvaret for datavask.

![Diagram over dataflow hvor Kombit har ansvaret for at udlevere data på baggrund af brugeraccept.](https://github.com/danskernesdigitalebibliotek/diagrams/blob/master/docs/fbsLoansToFactorAndDdbCmsViaDatawashAlternative.svg)

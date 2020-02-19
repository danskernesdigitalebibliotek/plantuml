## Follow Searches service
### Data specification

#### Date format

Date is in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDThh:mm:ssZ`
and UTC time zone (argument `Z`)

Time is rounded down to `00:00:00`

#### Enhanced query
Enhanced query has the format:
```
{Query} 
and facet.acsource=bibliotekskatalog 
and holdingsitem.accessiondate>{lastDateSeen}
```
where `lastDateSeen` is in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: "`YYYY-MM-DDT00:00:00Z`"

### Add query

## Add query

![add-query.puml](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://danskernesdigitalebibliotek.github.io/plantuml/services/follow-searches/add-query.puml)

### Get query list

![add-query.puml](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://danskernesdigitalebibliotek.github.io/plantuml/services/follow-searches/get-query-list.puml)

### Get query result
![add-query.puml](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://danskernesdigitalebibliotek.github.io/plantuml/services/follow-searches/get-query-result.puml)

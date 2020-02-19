# Data to loan history

## FBS transaction list

Property name 		| Property type | Example 	|	Description
---|---|---:|---
Action 				| nvarchar (20) | CHECKOUT 	| Type of action the entry represents. <br>Possible values: <ul><li>CHECKOUT<li>CHECKIN<li>RENEW</ul>
AgencyId 			| nvarchar (16) | 7**265**00| 
BranchId 			| nvarchar (16) | 762503 	|
CiceroId 			| bigint 		| ?? 		| ??
FaustNumber 		| nvarchar (50) | 			| Reference to bibliographic record 
LatestUpdateTime 	| datetime 		|1568792529 | 
LoanId 				| bigint 		|2147483647 | 
LoanerCPR       	| nvarchar (10)	| 0102701234| Should be replaced by patron ID **patronId**
MunicipalityCode	| int 			| 265		| Patrons recidential MunicipalityCode
TransactionTime		| datetime 		|1568792598 | Time of transaction 

## Mappings

FBS                         | Loan history | note
---|---|---
patronId                    | GUID          |
AgencyID <br>+ FaustNumber  | PID           | Separate mapping table 

## FaustToPid

Mapping Faust@Agendy to matching PID.

<fieldset class='legend1'>
    <legend class='legend1'>Note!</legend>
   <p>FaustNumber and Agency MUST be mapped to a uniq PID for reference</p>
  </fieldset>

Field   | Content           | Example               | Description
---		|---|---|---
PID 	| PID from Datawell | 870970-basis:52411076 |
Agency 	| Agency from FBS   | 726500                |
Faust 	| Faust from FBS    | 52411076              |

## PidToMeta

Field           | Content                           | Example               | Description
---|---|---|---
PID			    | Meta data ID		                | 870970-basis:52411076 |
shortTitle 		| Title of item 	                | "Store stygge varulv" | "dcTitle" / "dcTitleFull"
shortCreator	| Creator 				            | "Erling Bugge" 	    | "creatorSort" / "creatorAut"  
Meta 			| Meta data blob from Open Platform | {MetaBlob}	        | JSON (See below)


### MetaBlob
```
{
  "statusCode": 200,
  "data": [
    {
      "acIdentifier": [
        "52411076|870970"
      ],
      "identifierISBN": [
        "9788793371323"
      ],
      "acSource": [
        "Bibliotekskatalog"
      ],
      "dcTitle": [
        "Store stygge varulv"
      ],
      "dcTitleFull": [
        "Store stygge varulv"
      ],
      "titleSeries": [
        "Mini gys ; 38"
      ],
      "creatorAut": [
        "Erling Bugge"
      ],
      "creatorSort": [
        "Bugge, Erling"
      ],
      "subjectDK5Text": [
        "Skønlitteratur"
      ],
      "subjectDBCN": [
        "for 7 år",
        "for 8 år",
        "for 9 år",
        "for begynderlæsere",
        "let at læse"
      ],
      "subjectDBCS": [
        "gys",
        "nisser",
        "varulve"
      ],
      "subjectGenre": [
        "gys"
      ],
      "subjectDK5": [
        "sk"
      ],
      "abstract": [
        "Nanna driller sin lillebror Simon. Han gemmer sig bag et træ i udkanten af skoven og møder en nisse. Nissen vil have Simon til at kæmpe mod en varulv for at redde alle nisserne fra at blive dræbt"
      ],
      "audienceAge": [
        "fra 7 år"
      ],
      "audience": [
        "børnematerialer"
      ],
      "version": [
        "1. oplag (2016)"
      ],
      "publisher": [
        "Cadeau"
      ],
      "contributorIll": [
        "Christian Guldager"
      ],
      "date": [
        "2016"
      ],
      "typeBibDKType": [
        "Bog"
      ],
      "format": [
        "illustreret i farver"
      ],
      "extent": [
        "43 sider"
      ],
      "languageISO6392": [
        "dan"
      ],
      "dcLanguage": [
        "Dansk"
      ],
      "accessType": [
        "physical"
      ],
      "creator": [
        "Erling Bugge"
      ],
      "fedoraPid": [
        "870970-basis:52411076"
      ],
      "pid": [
        "870970-basis:52411076"
      ],
      "language": [
        "Dansk"
      ],
      "title": [
        "Store stygge varulv"
      ],
      "titleFull": [
        "Store stygge varulv"
      ],
      "type": [
        "Bog"
      ],
      "workType": [
        "book"
      ],
      "hasReview": [
        "870976-anmeld:31280540"
      ]
    }
  ]
}
```

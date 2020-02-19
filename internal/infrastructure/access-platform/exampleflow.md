# Client flow in using the Access Platform (Adgangsplatformen)

Date | 2019-02-01 13:12
---|---
Contact | Erik Bachmann, DDB <ebp@slks.dk>


<!--
Klienter kan nu logge brugere ind på den nationale infrastruktur og give brugere adgang til fx. lånerstatus og reserveringer UDEN at få udleveret brugerens CPR eller pin-kode.
Indloging sker via *Adgangsplatformen* og udlevering af lånerstatus mv. sker via **Open Platform**.
-->

Clients can now log users into the national infrastructure and give users access to eg. Borrower status and reservations WITHOUT getting the user's CPR or pin code.
Logging in via the *Access Platform* and handing out the loan status etc. is done via **Open Platform**.

<!--
<fieldset class='legend1'>
    <legend class='legend1'>
        Databeskyttelse
    </legend>
        Der er IKKE brug for at opsamle CPR eller kalde direkte til lokalsystemet (FBS).
        <br></br>
        Og de nedenfor nævnte ID'er er eksempler
  </fieldset>
-->

<fieldset class = 'legend1'>
     <legend class = 'legend1'>
         Data protection
     </Legend>
         There is NO need to collect CPR or call directly to the local system (FBS).
         <br>
         And the IDs listed below are generic examples
   </Fieldset>

<!--
## Autentificer bruger imod Adgangsplatformen

### Autentificer bruger

Brugerautentifikation kan ske via formularen på https://oauth.login.bib.dk/example/ 

med dataene:
- Responce type:  code
- Return url:     https://oauth.login.bib.dk/example
- CLIENT ID:      486142a9-f759-58c9-142983cb12755355a

eller med et direkte link:
-->

## Authenticate user against the Access Platform

### Authenticate user

User authentication can be done through the form at https://oauth.login.bib.dk/example/

with the data:
- Response type: code
- Return url: https://oauth.login.bib.dk/example
- CLIENT ID: 486142a9-f759-58c9-142983cb12755355a

or with a direct link:

https://oauth.login.bib.dk/oauth/authorize?response_type=code&client_id=486142a9-f759-58c9-142983cb12755355a&redirect_uri=https://oauth.login.bib.dk/example

<!--
som skal give svaret:
-->
with the reply:

```
Login was successful, and following data was returned:

CODE: a1dbb74a25c218da5809adf79cc0437fedb68d31

STATE: 
```

<!--
### Hent brugertoken vha koden

Hent token med kaldet:
-->

### Get the user token using the code

Get the token with the command:

```
curl -X POST https://oauth.login.bib.dk/oauth/token -d "grant_type=authorization_code&code=a1dbb74a25c218da5809adf79cc0437fedb68d31&client_id=486142a9-f759-58c9-142983cb12755355a&client_secret=secret&redirect_uri=https://oauth.login.bib.dk/example"
```
<!--
som igen giver svaret:
-->
with the reply:

```json
{
  "access_token": "8b3c0ca784ed6ae9a1f70264050224d0ca5b42be",
  "token_type": "Bearer",
  "expires_in": 2591999
}
```

<!--
### Brugerdata fra Adgangsplatformen

Adgangsplatformen kan på baggrund af brugertoken udlevere specifikke bruger data via:
-->
### User data from the access platform

On the basis of the user token, the access platform can provide specific user data via:

```
https://oauth.login.bib.dk/example/?code=a1dbb74a25c218da5809adf79cc0437fedb68d31#userinfo
```

<!--
Som fx.
-->
Like:
```json
{
  "attributes": {
    "uniqueId": "8c8b05f2-882d-c92d-39ad-e5fc67160030",
    "municipality": "265"
  }
}
```

<!--
Det konfigureres centralt hvilke data som klienten kan få udleveret. Som standard returneres GUID (i "uniqueId") og brugerens bopælskomunnenummer (i "municipality")
-->


It centrally configured which data that can be provided to the client. By default, the GUID (in "uniqueId") and the user's resident community number (in "municipality") are returned.

<!--
## Data fra Open Platform

### Lånerstatus

Lånerstatus kan nu hentes direkte fra Open Platform (se: https://openplatform.dbc.dk/v3/ ) 
med et kald som:
-->

## Data from Open Platform

### Loan status

Loan status can now be retrieved directly from Open Platform (see: https://openplatform.dbc.dk/v3/)
with a call as:

```
https://openplatform.dbc.dk/v3/user?access_token=
8b3c0ca784ed6ae9a1f70264050224d0ca5b42be&pretty=true
```

```json
{
  "statusCode": 200,
  "data": {
    "id": "ddYFAJNOJB2hkDrYofNb0QuXvj9g3xwK",
    "name": "En Bruger",
    "address": "Bopælen 2",
    "postalCode": "4000",
    "mail": "someone@somewhere.com",
    "loans": [
      {
        "loanId": "4331167969",
        "dueDate": "2019-02-04T00:00:00+01:00",
        "title": "Lunch: [Bind] #1: K-o-m-i-n-u-k-a-t-i-o-n",
        "creator": "Lund, Børge",
        "materialId": "9788793564138",
        "titleId": "53499082"
      }
    ],
    "orders": [
      {
        "orderId": "17851488",
        "orderType": "normal",
        "status": "Active",
        "pickUpAgency": "DK-726500",
        "holdQueuePosition": "1",
        "creator": "Deadmau5",
        "title": "W:/2016album/",
        "orderDate": "2017-11-19T22:27:24+01:00",
        "titleId": "53036694"
      },
      {
        "orderId": "31073107",
        "orderType": "normal",
        "status": "Active",
        "pickUpAgency": "DK-726500",
        "holdQueuePosition": "2",
        "creator": "The Beatles",
        "title": "The Beatles",
        "orderDate": "2019-01-03T14:46:10+01:00",
        "titleId": "54976534"
      }
    ],
    "debt": [],
    "ddbcmsapi": "https://cmscontent.dbc.dk/",
    "agency": "726500"
  }
}
```

<!--
### Bestilling
-->

### Ordering title

https://openplatform.dbc.dk/v3/order?access_token=8b3c0ca784ed6ae9a1f70264050224d0ca5b42be&pretty=true&pids=["870970-basis%3A50936155"]&pickUpBranch="726503"


```json
{
  "statusCode": 200,
  "data": {
    "status": "ok",
    "orsId": "1032632565"
  }
}
```

<!--
<fieldset class='legend1'>
    <legend class='legend1'>
        OBS
    </legend>
        PID skal angives som en "liste af strenge":
        <pre>["pid1","pid2"]</pre>
        Og pickUpBrance skal angives som streng i anførselstegn:
        <pre>"726503"</pre>
  </fieldset>

-->
<fieldset class = 'legend1'>
     <legend class = 'legend1'>
         ATTENTION
     </Legend>
         PID must be listed as a "list of strings":
         <pre>[ "PID1", "PID2"]</pre>
         And pickUpBrance (filial) must be set as a string in quotes:
         <Pre>"726503"</pre>
   </fieldset>

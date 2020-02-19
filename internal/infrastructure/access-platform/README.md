<a href="/"><img src="/DDB_logo_green.300.png" alt="DDB" title="DDB" align="right"></a>

# AccessPlatform
[in danish: Adgangsplatformen]

A cross site user access system, that enables user to use Single Sign-on - 
even if their user credentials may vary between library solutions.

## Back-end

User IDs are collected from various local danish library systems and matched to a national ID. 
This enables the user to use Single Sign-on (if implemented on the site or app)

## Front-end

A service can validate a library user using the credentials from any given library of the users own choice. The AccessPlatform will on success return a session token and addtional information about the user.

<fieldset>
<legend>NOTE</legend>
    ONLY services that are a part of the danish library community - and authorised by public libraries or DDB can be granted access
</fieldset>

### Description of oAuth2 login flow

![Single Sign-on](http://www.plantuml.com/plantuml/proxy?src=https://danskernesdigitalebibliotek.github.io/plantuml/sso/singlesignon.puml)
A more detailed description of the flow is available at: [DBCDK/hejmdal/oAuth2](https://github.com/DBCDK/hejmdal/blob/oAuth2/src/oAuth2/README.md)


### Registration

To access the API you will need to:
1 Register your client for a Oauth2 clientID 
1 Configurate your client in the AccessPlatform (This is done in a dialogue with the provider DBC)
1 Implement the calling of the AccessPlatform in you client
1 Handling the session in your client - to ensure correct idenfitication and Single Sign-on capability

Only preauthentificated library services can access the front-end. Please contact [DDB](/OpenPlatform/#prerequisites) for Oauth2 validated access via OpenPlatform.

The configuration of your client in the AccessPlatform is made by DBC. Please contact DBC service desc AFTER you have recieved you client_id for OpenPlatform.

### Example

An example is available (in danish) at https://login.bib.dk/example

#### Get Oauth2 token
You need only the client_id and client_secret to get a token, since the library user is authenticated by the AccessPlatform:

```
curl --user "${CLIENT_ID}:${CLIENT_SECRET}" -X POST https://auth.dbc.dk/oauth/token -d "grant_type=password&username=@&password=@"grant_type=password&username=@&password=@
```
On success the service will return an access token:
```
{
  "token_type": "bearer",
  "access_token": "b9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  "expires_in": 2592000
}
```

#### Get session token

Calling login with the token from OpenPlatform:
```
https://login.bib.dk/login?token=b9aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab
```
will provide you with a token and ID for the AccessPlatform

Get user attributes using:

```
https://login.bib.dk/getTicket/${TOKEN}/${ID}
```
will return a reply like:

```
{"id":12345,
"token":"a3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa42",
"attributes":{"cpr":"0102341234",
"gender":"f",
"wayfId":null,
"agencies":[{"userId":"C0000000047",
"agencyId":"725300",
"userIdType":"LOCAL"},
{"userId":"ddddddddd",
"agencyId":"725300",
"userIdType":"UNILOGIN"},
{"userId":"noone@nowhere.com",
"agencyId":"190110",
"userIdType":"LOCAL"}],
"birthDate":"0102",
"birthYear":"1934",
"uniloginId":null,
"municipality":"265"}}
```

## Example flow 

[Client flow](exampleflow.md) in using the Access Platform (Adgangsplatformen)

## Further information

Please contact the vendor DBC only after consulting your library partner!

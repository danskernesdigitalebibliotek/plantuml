# Material List - Test report

2019-11-13T11:03:26 / ebp

Tested functions

Function | Status | Comment
---|:---:|--
[check List Material HEAD](#check-List-Material-HEAD)      |**OK**
[add List Material PUT](#add-List-Material-PUT)    |**OK** | Any materialId can be added. There is no check for existence
[delete List Material DEL](#delete-List-Material-del)    |**OK**
[get List GET](#get-List-GET)    |**GET**
[migrate List PUT](#migrate-List-PUT)    |*??* | Awaiting status reply from Reload


## Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e51eee7b8c98d25c0c94)

### Authorization

access_token retrieved from https://login.bib.dk/example


### Postman config


### variables
MaterialList

#### Local

VARIABLE		|INITIAL VALUE		|CURRENT VALUE
---|---|---
baseUrl		|https://test.materiallist.dandigbib.org/		|https://test.materiallist.dandigbib.org/
listName		|default		|default
page		|1		|1
size		|10		|10
searchId		|7		|7
AP_access_token		|1f8290a4622833d6f77183ad9dbcbe9d16091651		|1f8290a4622833d6f77183ad9dbcbe9d16091651
uniqueId		|9ad98ce7-de63-4588-bcde-585ab0215e02		|9ad98ce7-de63-4588-bcde-585ab0215e02

#### Globals

VARIABLE		|INITIAL VALUE		|CURRENT VALUE
---|---|---
agencyIdX		|726501		|726501
maxResponseTime		|900		|900		|



### Tests

```javascript
//*** Init ***
tests["Correct environment ("+pm.environment.name+")"] = "FollowSearches" === pm.environment.name;

var jsonObject = xml2Json(responseBody);    // XML -> JSON
//var jsonData = JSON.parse(responseBody);
//var maxResponseTime = postman.getEnvironmentVariable("test_responsetime");
//postman.setEnvironmentVariable("access_token", jsonData.access_token);

//*** Global tests ***
//tests["statusCode=OK (200)"] = jsonData.statusCode === 200;
pm.test("Valid POST request ["+pm.response.code+"]", function () {
    pm.expect(pm.response.code).to.be.oneOf([200,201,202,204]);
});


let maxResponseTime = pm.globals.get("maxResponseTime");
//tests["Response time is acceptable ["+responseTime+"]"] = _.inRange(responseTime, 100, 500); 
tests["Response is acceptable (< "+ maxResponseTime +"ms): "+responseTime+ "ms"] = responseTime < maxResponseTime;

//*** Local tests ****

// Authentification
// Storing access token
//postman.setEnvironmentVariable("access_token", jsonData.access_token);
// Test
//tests["Body has access_token ["+jsonData.access_token+"]"] = responseBody.has("access_token");
//tests["Token type OK ["+postman.getEnvironmentVariable("test_access_token_type")+"]"] = jsonData.token_type === postman.getEnvironmentVariable("test_access_token_type");
//tests["Expire date exists ["+jsonData.expires_in+"]"] = responseBody.has("expires_in");

tests["Service down? [503]"] = !(responseBody.has("503 Service Unavailable"));
tests["Account found"] = !(responseBody.has("ACCOUNT_DOES_NOT_EXIST"));
```

### Auhtorisation

Paramter    | Value
Type    | Bearer token
Token   | {{AP_access_token}}


---



## check List Material HEAD

Paramter    | Value
---|--
listId      | default

```bash
curl -X POST \
  https://test.materiallist.dandigbib.org/list/default/ \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 1f8290a4622833d6f77183ad9dbcbe9d16091651' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'Host: test.materiallist.dandigbib.org' \
  -H 'Postman-Token: da61b084-2dfb-4c21-91db-c4967eeebf7d,264bf095-9580-4ead-a148-97221e9e9f0a' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```

Answer: `201 Created`



## add List Material PUT

Paramter    | Value
---|--
materialId  | 870970-basis:50936155
listId      | default

```console
curl -X PUT \
  https://test.materiallist.dandigbib.org/list/default/870970-basis:2707329X \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 1f8290a4622833d6f77183ad9dbcbe9d16091651' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'Host: test.materiallist.dandigbib.org' \
  -H 'Postman-Token: 639b4359-d060-4781-ad2c-d2979f3d0561,403d0f0f-2a93-4730-b101-39640e4a4d79' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```


Paramter    | Value
---|--
Status  |200OK
Time    |1092ms
Size    |380 B

Reply body: Empty
```json
```

Paramter    | Value                 | Result
---|---|---
materialId  | 870970-basis:50936155 | Valid
materialId  | 870970-basis:2707329X | Accepted - non-existent
materialId  | Blåbærgrød            | Error 500

```json
{
    "id": "default",
    "materials": [
        "870970-basis:2707329X",
        "870970-basis:27073298",
        "870970-basis:50936155"
    ]
}
```


## delete List Material DEL

Paramter    | Value
---|--
materialId  | 870970-basis:50936155
listId      | default


```console
curl -X DELETE \
  https://test.materiallist.dandigbib.org/list/default/870970-basis:50936155 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 1f8290a4622833d6f77183ad9dbcbe9d16091651' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'Host: test.materiallist.dandigbib.org' \
  -H 'Postman-Token: 7e047f01-55a0-46ae-a069-60f5977843bc,9d8b08a0-4925-46b6-a8f8-ba7858b15204' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```

Paramter    | Value
---|--
Status  |204No Content
Time    |788ms
Size    |349 B

Reply body empty:
```json
```


## get List GET

Paramter    | Value
---|--
listId    | default

```console
curl -X GET \
  https://test.materiallist.dandigbib.org/list/default \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 1f8290a4622833d6f77183ad9dbcbe9d16091651' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: test.materiallist.dandigbib.org' \
  -H 'Postman-Token: 2ff56f5b-b0a0-4232-949a-b60e066f5e67,42aaedca-862e-48b7-a062-e975c6fea727' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```

Paramter    | Value
---|--
Status  |200OK
Time    |856ms
Size    |486 B

Reply body empty
```
{
    "id": "default",
    "materials": [
        "870970-basis:27073298",
        "870970-basis:50936155"
    ]
}
```

## migrate List PUT

> Apperently no connection from Migrate to OpenList().

Paramter    | Value
---|--
legacyUserId    | {{uniqueId}}  | GUID

```console
curl -X PUT \
  https://test.materiallist.dandigbib.org/migrate/9ad98ce7-de63-4588-bcde-585ab0215e02 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 1f8290a4622833d6f77183ad9dbcbe9d16091651' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 0' \
  -H 'Host: test.materiallist.dandigbib.org' \
  -H 'Postman-Token: 694c22bf-2cc6-4ef4-85e9-be5e7c6406aa,296e0b34-6a07-4aa6-9ded-2af6fc484e66' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```

Paramter    | Value
---|--
Status  |204No Content
Time    |883ms
Size    |349 B

Reply body empty
```
```


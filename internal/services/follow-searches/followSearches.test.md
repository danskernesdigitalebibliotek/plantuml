# Follow Searches - Test report

2019-11-12T11:29:41 / EBP

Tested functions

Function | Status | Comment
---|:---:|--
[add Search POST](#add-Search-POST)      |**OK**
[get Searches GET](#get-Searches-GET)    |**OK**
[get Results For Search GET](#get-Results-For-Search-GET) |**OK**
[delete Search DEL](#delete-Search-DEL)  |**OK**
[migrate List PUT](#migrate-List-PUT)    |*not performed* | Awaiting status reply from Reload


## Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/3d1d2a41122fbcfbe62b)

### Authorization

access_token retrieved from https://login.bib.dk/example


### Postman config

#### Variables

##### Local

VARIABLE		|INITIAL VALUE		|CURRENT VALUE
---|---|---
baseUrl		|https://stage.followsearches.dandigbib.org/		|https://stage.followsearches.dandigbib.org/
AP_access_token		|0e22319ddc2ae4b4b9377b5739961ba297147052		|0e22319ddc2ae4b4b9377b5739961ba297147052
listName		|default		|default
page		|1		|1
size		|10		|10
searchId		|7		|10

##### Globals

VARIABLE		|INITIAL VALUE		|CURRENT VALUE
---|---|---
agencyIdX		|726501		|726501
maxResponseTime		|900		|900


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



## add Search POST

Paramter    | Value
---|--
title       | Hele baduljen
Query       | ti="Otto møder en nisse"
listName    | default

```bash
curl -X POST \
  'https://stage.followsearches.dandigbib.org/list/default/add?title=Hele%20baduljen&query=ti=%22Otto%20m%C3%B8der%20en%20nisse%22' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 0e22319ddc2ae4b4b9377b5739961ba297147052' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 52' \
  -H 'Content-Type: application/json' \
  -H 'Host: stage.followsearches.dandigbib.org' \
  -H 'Postman-Token: 3dab8c8c-f7ba-4014-948a-f56276c530da,eb718d9a-b307-4dd5-a742-3dba481049a9' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache' \
  -d '{
    "title": "<string>",
    "query": "<string>"
}'
```

Answer: `201 Created`


## get Searches GET

Paramter    | Value
---|--
page        | 1
size        | 10
listName    | default

```console
curl -X GET \
  'https://stage.followsearches.dandigbib.org/list/default?page=1&size=10' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 0e22319ddc2ae4b4b9377b5739961ba297147052' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: stage.followsearches.dandigbib.org' \
  -H 'Postman-Token: 3d7d96b7-671f-4c69-be5d-fb6edf44f78b,5749ac02-2d0e-41d1-9307-991a396cf46a' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```


Paramter    | Value
---|--
Status  |200 OK
Time    |979ms
Size    | 492 B

Reply body:
```json
[
    {
        "id": 10,
        "title": "Hele baduljen",
        "query": "ti=\"Otto møder en nisse\"",
        "last_seen": "2019-11-12 10:21:42",
        "hit_count": 0
    },
    {
        "id": 9,
        "title": "Hele baduljen",
        "query": "ti=*",
        "last_seen": "2019-11-05 12:48:39",
        "hit_count": 112576
    }
]
```


## get Results For Search GET

Paramter    | Value
---|--
searchId    | 9
listName    | default


```console
curl -X GET \
  https://stage.followsearches.dandigbib.org/list/default/9 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer 0e22319ddc2ae4b4b9377b5739961ba297147052' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: stage.followsearches.dandigbib.org' \
  -H 'Postman-Token: ed263640-5fe0-4ac3-be3d-1485e460599f,ad908177-78eb-431f-8dff-3a9c9e8f3acf' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache'
```

Reply body:
```json
{
    "materials": [
        {
            "pid": [
                "870970-basis:25346866"
            ]
        },
        {
            "pid": [
                "870970-basis:22064207"
            ]
        },
        {
            "pid": [
                "870970-basis:07237243"
            ]
        },
        {
            "pid": [
                "870970-basis:06758576"
            ]
        },
        {
            "pid": [
                "870970-basis:52655765"
            ]
        },
        {
            "pid": [
                "870970-basis:07025866"
            ]
        },
        {
            "pid": [
                "870970-basis:06264220"
            ]
        },
        {
            "pid": [
                "870970-basis:03211746"
            ]
        },
        {
            "pid": [
                "870970-basis:05016401"
            ]
        },
        {
            "pid": [
                "870970-basis:05556309"
            ]
        }
    ]
}
```


## delete Search DEL

Paramter    | Value
---|--
searchId    | 10
listName    | default

```console
curl -X DELETE \
  https://stage.followsearches.dandigbib.org/list/default/10 \
  -H 'Postman-Token: 4b753b04-2233-4679-bda1-7bc4117c0384' \
  -H 'cache-control: no-cache'
```

Paramter    | Value
---|--
Status  |204 No Content
Time    |987ms
Size    | 214 B

Reply body empty
```
```

## migrate List PUT

Paramter    | Value
---|--
searchId    | 
listName    | 

```console
```

Paramter    | Value
---|--
Status  |
Time    |
Size    |

Reply body empty
```
```

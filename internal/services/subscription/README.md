# Subscription service

## Scope

Storing and display information on which services individual users have requested and accepted terms for.

The service must be accessable for other services and is a secondary service (i.e. should not be accessed directly for uddate)

The service must not contain any personal information or related ID's - except a pseudonymized global user ID (GUID) as defined in [Adgangsplatformen]().

By example a user must be able to:
- request services (like storing extended loan history > 28 days )
- list all options related to user
- revoke grants
- delete data (partly or fully)


|As a|Wants to|So that|
|---|---|---|
| Service   | create data storing simple data ( Boolean, time stamp, strings), identified by key and source system ID | simple cross platform subscriptions has only one authoritative source | 
| Service   | may delete any data identified as owned by the service | the service can clean out outdated subscriptions |
| Service   | may revoke grants and subscriptions on demand by user |


DDB CMS -> Material List: Create list
Material List -> Subscription: Create/modify subscription: Accept


### Authentication

Services are authorised using Oauth2 tokens from [DBC's Oauth2](https://Danskernesdigitalebibliotek.github.io/AccessPlatform/#registration) service,

Users are authenticated using the [AccessPlatform](https://danskernesdigitalebibliotek.github.io/AccessPlatform)


### GUID Lookup

Get full description: `getUserSubscription ($ GUID);`

Example data:

```json
[
    "saveLoanHistory"               => TRUE,
    "getNotificationViaNemSMS"      => TRUE,
    "getNotificationViaNemEmail"    => FALSE,
]
```

| Field                 | Example               | Description                   | Default |
|---|---|---|---|
| Key                   | saveLoanHistory       | Key tag                       ||
| Value/Text            | TRUE                  |                               ||
| ServiceId             | LoanHistory           | ID of creating/owning service ||
| Agency                | NULL                  | Limited to a specific agency  | (default null) |
| Create/modify date    | 2020-01-15T14:09:24   | ISO time stamp                | NOW |






Hent specifik oplysning: `getUserSubscription( $GUID, "saveLoanHistory" );`

Eksempel på data
```
[
    "saveLoanHistory"               => TRUE,
]
```


### To do

Skal der: 
- gemmes logning af ændringer?
- sættes en fortrydelsesfrist på fx. sletning af historik?
- kan fx. historikdata have en forældelsesfrist (fx. 30 dage)




## Loan history
- PID not unique
- checkin/out date


|As a|Wants to|So that|
|---|---|---|
|User   | store loan history (>28 days)| I can see previous loans |
|User   | revoke my accept for loan history | my data are irreversibly delete after x day (waiting periode)
|Service| list services used by a given user | can retrieve data on accepted / rejected services
|Service| retrive status for a given users status on a given function | provide / dicard the given functionality |

## Material List

|As a|Wants to|So that|
|---|---|---|
|User   | store a given title to Material List| to be retrieved later |
|User   | remove a given title from Material List|  |
|User   | retrieve my entire Material List|  |
|User   | delete my entire Material List (and accept) |  |




Updating subscriptions are activated by other list services as an indirect function when calling creating, updating or deleting functions

## Subscription flow
![Class](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&idx=0&src=https://danskernesdigitalebibliotek.github.io/list-services/subscription-service/subscription.puml)

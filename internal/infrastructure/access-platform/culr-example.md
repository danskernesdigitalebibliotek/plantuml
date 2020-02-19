# CULR data

Patron data from CULR lists any known patron profile in the public libraries - clustered by the patrons CPR number.

The data returned from CULR is configured individually for each application. In general the only available data are:
- GUID (Global User ID)
- MunicipalityNo
- List of FBS patronId's

These bits of information enables an application to identify the patron (GUID), the patrons home municipality and the available profiles in public libraries.



## Example from CULR (Full profile)

```xml
<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getAccountsByGlobalIdResponse xmlns:ns2="http://ws.culrservice.dbc.dk/">
            <result>
                <Account>
                    <provider>726500</provider>
                    <userIdType>LOCAL</userIdType>
                    <userIdValue>2650999999</userIdValue>
                </Account>
                <Account>
                    <provider>725300</provider>
                    <userIdType>LOCAL</userIdType>
                    <userIdValue>C0018999999</userIdValue>
                </Account>
                <Account>
                    <provider>725300</provider>
                    <userIdType>UNILOGIN</userIdType>
                    <userIdValue>unilogin</userIdValue>
                </Account>
                <Account>
                    <provider>775100</provider>
                    <userIdType>CPR</userIdType>
                    <userIdValue>0123456789</userIdValue>
                </Account>
                <Account>
                    <provider>775100</provider>
                    <userIdType>LOCAL</userIdType>
                    <userIdValue>C0018999999</userIdValue>
                </Account>
                <Account>
                    <provider>710100</provider>
                    <userIdType>CPR</userIdType>
                    <userIdValue>0123456789</userIdValue>
                </Account>
                <Account>
                    <provider>710100</provider>
                    <userIdType>LOCAL</userIdType>
                    <userIdValue>39999999</userIdValue>
                </Account>
                <Account>
                    <provider>726500</provider>
                    <userIdType>CPR</userIdType>
                    <userIdValue>0123456789</userIdValue>
                </Account>
                <Account>
                    <provider>726500</provider>
                    <userIdType>LOCAL</userIdType>
                    <userIdValue>49999999</userIdValue>
                </Account>
                <Account>
                    <provider>190110</provider>
                    <userIdType>LOCAL</userIdType>
                    <userIdValue>noone@nowhere.com</userIdValue>
                </Account>
                <MunicipalityNo>265</MunicipalityNo>
                <Guid>9guid999-guid-guid-guid-9guid99guid9</Guid>
                <responseStatus>
                    <responseCode>OK200</responseCode>
                </responseStatus>
            </result>
        </ns2:getAccountsByGlobalIdResponse>
    </S:Body>
</S:Envelope>
```

### GUID, MunicipalityNo and status

- <span style="color:red;font-weight:bold">GUID</span> is the global user id
- <span style="color:blue;font-weight:bold">MunicipalityNo</span> the number of users home 
- <span style="color:purple;font-weight:bold">Status</span> MUST be `OK200`

The MunicipalityNo is currently limiting user to access digital ressources via this municipality only

```xml
                <MunicipalityNo>265</MunicipalityNo>
                <Guid>9guid999-guid-guid-guid-9guid99guid9</Guid>
                <responseStatus>
                    <responseCode>OK200</responseCode>
```


### CPR and health card no

- **Provider** is the agency where patron exists
- **CPR** (Civil Registration Number) is the national unique identifier for a citizen of Denmark and the only key to cluster identities nationally.
- Health Card (**Sundhedskort**) holds the CPR, but is ONLY used for accessing unmaned libraries. It is a local number in FBS


```xml
                <Account>
                    <provider>775100</provider>
                    <userIdType>CPR</userIdType>
                    <userIdValue>0123456789</userIdValue>
                </Account>
:
                <Account>
                    <provider>710100</provider>
                    <userIdType>CPR</userIdType>
                    <userIdValue>0123456789</userIdValue>
                </Account>
:
               <Account>
                    <provider>726500</span></provider>
                    <userIdType>CPR</userIdType>
                    <userIdValue>0123456789</userIdValue>
                </Account>
```


### Local values

#### Patron card

Usually an ID used by children the does not hold a UNILOGN.

```xml
    <Account>
        <provider>726500</provider>
        <userIdType>LOCAL</userIdType>
        <userIdValue>2650999999</userIdValue>
    </Account>
```


#### FBS patronId

An ID used for identifying and authorising patrons in the FBS API

(Currently not available)


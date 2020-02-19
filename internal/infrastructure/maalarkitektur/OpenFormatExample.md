# Open Format

## ISBD display

```
    Orwell, George
    1984. - 10. udgave. - [Kbh.] : [Gyldendal], 2016. - 343 sider
        Anmeldelse i Litteratursiden.dk [online]. - 2016-06-17
        Anmeldt af Maria Guldager Rasmussen - Adgang via internet
```

## Data mapping

| Input | Output |
|---|---|        
| 100 00 *0*aOrwell*hGeorge*4aut  | Orwell, George |
| 245 00 *a1984  | \n1984 |
| 241 00 *aNineteen eighty-four  |  ( Nineteen eighty-four ) |
| 250 00 *a10. udgave  | . - 10. udgave |
| 260 00 *a[Kbh.]*b[Gyldendal]*c2016  | . - [Kbh] : [Gyldendal], 2016 |
| 300 00 *a343 sider  | . - 343 sider |
| 520 00 *aOriginaludgave: 1949  | . - [Originaludgave: 1949] |
| 041 00 *adan*ceng  | Sprog [dan] - oversat fra [eng] |
| 504 00 *aFremtidsroman om tilværelsen under det fuldstændige diktatur, hvor det enkelte menneske er forvandlet til en viljeløs robot  | \n\nFremtidsroman om tilv?relsen under det fuldst?ndige diktatur, hvor det enkelte menneske er forvandlet til en viljel?s robot  |

## Mapping rule

```php
$displayFormats = [
    'F1' => [
        'DM2' => [
            '245' => [
    /*
    Felt 245	Titel og ophavsangivelse
    245 00 *a1984 
    */
                'prefix'    =>  '<br>',
                'suffix'    =>  "",
                'delimit'   =>  ' ; ',
                'subfields'   =>  [
                    'a' => [
                        'prefix'    =>  '<b>',
                        'suffix'    =>  "</b>",
                        'delimit'   =>  '] ; [',
                    ],
                ],
            ],
        ],
    ],
];
```

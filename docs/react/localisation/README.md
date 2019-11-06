# Lokalisering

<!--
Kilde:
Fra: Rolf Madsen <@slks.dk> 
Sendt: 29. maj 2019 09:34
Til: Erik Bachmann Pedersen <@slks.dk>
Emne: SV: Openplatform - shelfmark
-->

Koden ligger under https://github.com/ding2/ding2/blob/master/modules/fbs/includes/fbs.availability.inc

Vi har følgende liggende i ”DDB CMS Manual – Konfiguration”

## Beholdningsoplysninger - Opstilling

Under Indstillinger > Materialer > Provider availability holdings (Sti: `/admin/config/ting/holdings`) kan man tilpasse opstillingssignaturen.

Beholdningsvisningen kan bestå af forskellige niveauer for opstilling der kan konfigureres så det afspejler lokal praksis.

Følgende fire niveauer vises altid:
```Branch > Department > Location > Sublocation```

Derudover kan man vælge at få vist en af følgende kombinationer:

Type| Content | Example
---|---|---
Material group description | Materialegruppe | `Greve Bibliotek > Børn > Bog > Enestående`
Simple | DK5 Klassemærke + Inverteret forfatternavn | `Greve Bibliotek > Børn > Bog > 77.693 > Revenson, Judy`
Shelfmark | Hyldemærke [<sup>1</sup>](#1) | `Greve Bibliotek > Børn > Enestående`
Simple + Material group description | | `Greve Bibliotek > Børn > Bog > 77.693 > Revenson, Judy`
Shelf mark + Material group description | | `Greve Bibliotek > Børn > Bog > Enestående`

 <a class="anchor" id="1"><sup>1)</sup></a> Simulerer DDELibras opstilling med differentieret visning for f. eks. skøn- og faglitteratur

## Shelfmark

### Sekvensbeskrivelse af shelfmark

> [Advarsel]
> Logikken er forældet i shelfmark.txt. Brug shelfmark.puml

<!--
![Kombination til shelfmark](http://www.plantuml.com/plantuml/proxy?src=https://danskernesdigitalebibliotek.github.io/plantuml/react/
localisation/shelfmark.txt)
1. Hvis felt `652` delfelt `m` = `sk`
   1. Hvis felt `100` og felt `110` mangler vises 1. ord (efter evt. soltegn) i `245` delfelt `a`
   1. Hvis felt `100` mangler vises 1. ord (efter evt. soltegn) i `110` delfelt `a`
   1. Ellers vises 1. ord (efter evt. soltegn) i felt `100` delfelt `a`

<!--
Original rækkefølge
1. Hvis felt 652 delfelt m = sk
  1. Vises 1. ord (efter evt. soltegn) i felt 100 delfelt a
  1. Hvis felt 100 mangler vises 1. ord (efter evt. soltegn) i 110 delfelt a
  1. Hvis felt 100 og felt 110 mangler vises 1. ord (efter evt. soltegn) i 245 delfelt a
-- >

1. Hvis felt `652` delfelt `m` ikke = `sk` og posten indeholder felt `039`
   1. Vises indholdet i felt `039` delfelterne `a` + `b` (bogstavskoderne oversættes, se herunder) 
   1. Efterfulgt af 
      1. Hvis felt `100`, felt `110` og felt `239` mangler, vises 1. ord (efter evt. soltegn) i `245` delfelt `a`
      1. Ellers hvis felt `100` og felt `110` mangler, vises 1. ord (efter evt. soltegn) i `239` delfelt `a`
      1. Ellers hvis felt `100` mangler, vises 1. ord (efter evt. soltegn) i `110` delfelt `a`
      1. Ellers hvis felt `100` vises 1. ord (efter evt. soltegn) i `100` delfelt `a`

<!--
Original rækkefølge

1. Hvis felt 652 delfelt m ikke = sk og posten indeholder felt 039 
  1. Vises indholdet i felt 039 delfelterne a + b (bogstavskoderne oversættes, se herunder) 
  1. efterfulgt af 
    1. Hvis felt 100 vises 1. ord (efter evt. soltegn) i 100 delfelt a
    1. Hvis felt 100 mangler, vises 1. ord (efter evt. soltegn) i 110 delfelt a
    1. Hvis felt 100 og felt 110 mangler, vises 1. ord (efter evt. soltegn) i 239 delfelt a
    1. Hvis felt 100, felt 110 og felt 239 mangler, vises 1. ord (efter evt. soltegn) i 245 delfelt a

-- >

1. Hvis felt `652` delfelt `m` ikke = `sk` og der ikke er et felt `039`
   1. Hvis delfelt `b` findes, vises indhold af felt `652` delfelt `m` (DK5-koden) + indhold i delfelt `b`
   1. Ellers hvis felt `652` delfelt `b` ikke findes - vises indhold i delfelt `a` + delfelt `h` (kommasepareret) (Forklarende tekst til 652 m vises ikke)
   1. efterfulgt af (ligesom ovenfor)
      1. Hvis felt `100` og felt `110` mangler, vises 1. ord (efter evt. soltegn) i `245` delfelt `a`
      1. Ellers hvis felt `100` mangler, vises 1. ord (efter evt. soltegn) i `110` delfelt `a`
      1. Ellers hvis felt `100` vises 1. ord (efter evt. soltegn) i `100` delfelt `a`

<!--
1. Hvis felt 652 delfelt m ikke = sk og der ikke er et felt 039
Vises indhold af felt 652 delfelt m (DK5-koden) + indhold i delfelt b
Hvis felt 652 delfelt b ikke findes - vises indhold i delfelt a + delfelt h (kommasepareret)
(Forklarende tekst til 652 m vises ikke)
efterfulgt af (ligesom ovenfor)
Hvis felt 100 vises 1. ord (efter evt. soltegn) i 100 delfelt a
Hvis felt 100 mangler, vises 1. ord (efter evt. soltegn) i 110 delfelt a
Hvis felt 100 og felt 110 mangler, vises 1. ord (efter evt. soltegn) i 245 delfelt a
-- >
-->


## Eksempler

> Roskilde > Børneafdeling > Udlånet > Den første læsning gul > Fleischer

```
001	00	*a 50936155 *b 870970 *c 20160520162335 *d 20140130 *f a
:---	✂ --- 	✂ ---
100	00	*a Fleischer *h Rune *4 aut *4 ill
245	00	*a Otto møder en nisse
260	00	*a Kbh. *b Så til Hest *c 2014
:---	✂ --- 	✂ ---
652	00	*n 86 *z 096
652	00	*o sk
666	00	*0 *s nisser
:---	✂ --- 	✂ ---
```

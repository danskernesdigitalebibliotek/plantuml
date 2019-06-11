// Parse arguments https://davidwalsh.name/query-string-javascript
var urlParams = new URLSearchParams(window.location.search);
var hdc;

function setMarker( name ) {
    if ( aPositions[name]  ) {
        setMarkerPos('marker', aPositions[name]['x']+'px', aPositions[name]['y']+'px');
    }
}


function init() {
    setMarkerPos('marker', urlParams.get('x')+'px', urlParams.get('y')+'px');
    var name    = urlParams.get('name');
    //console.log( "name["+name+"]"+aPositions[name]['x']+Array.isArray( aPositions[name] )+aPositions[name]['x']);
    console.log( "name["+name+"]" );
    if ( aPositions[name]  ) {
        setMarkerPos('marker', aPositions[name]['x']+'px', aPositions[name]['y']+'px');
        console.log( "position: ["+aPositions[name]['x']+'px'+"]x["+aPositions[name]['y']+'px'+"]");
    }
    
    /*    
    switch ( name ) {
        case "ebp":     setMarkerPos('marker', '85px', '460px'); break;
        case "steff":     setMarkerPos('marker', '50px', '500px'); break;
        case "rom":     setMarkerPos('marker', '50px', '500px'); break;
        case "coffee":  setMarkerPos('marker', '150px', '480px'); break;
        default: 
           console.log('Default case');
    }
    */
    //drawCircle();
    
}   // init()

function byId(e) {
  return document.getElementById(e);
}

function drawPoly(coordStr) {
  var mCoords = coordStr.split(',');
  var i, n;
  n = mCoords.length;

  hdc.beginPath();
  hdc.moveTo(mCoords[0], mCoords[1]);
  for (i = 2; i < n; i += 2) {
    hdc.lineTo(mCoords[i], mCoords[i + 1]);
  }
  hdc.lineTo(mCoords[0], mCoords[1]);
  hdc.stroke();
}

function setMarkerPos(id, x, y) {
    console.log("id=["+id+"] pos=["+x+"]x["+y+"]");

    var marker  = document.getElementById( id );

    if ( x == "0px" && y == "0px") {
        marker.style.display  = 'none';
        console.log( "Null pos: hide");
    } else {
        marker.style.display  = 'initial';
        marker.style.marginTop  = y;
        marker.style.marginLeft = x;
        console.log( "Alt pos: initial");
    }
    
}   // setMarkerPos()

function myHover(element) {
    console.log("myHover:["+element.title+"]["+element.shape+"]");
    var hoveredElement = element;
    var coordStr = element.getAttribute('coords');


    switch ( element.shape ) {
        case "poly":
            drawPoly(coordStr);
            break;
        case "coffee":
            setMarkerPos('marker', '150px', '480px');//497,136
            break;
        default: 
           console.log('Shape not recognized ['+element.shape+']');
    }

}

function myLeave() {
    console.log("myLeave:[]");
}



function drawCircle() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

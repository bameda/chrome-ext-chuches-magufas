replacements = [
  {'find': /\bHomeopatía\b/g, 'replace': "Gominola [Homeopatía]"},
  {'find': /\bhomeopatía\b/g, 'replace': "gominola [homeopatía]"},

  {'find': /\bHomeópata\b/g, 'replace': "Vendedor de chuches [Homeópata]"},
  {'find': /\bhomeópata\b/g, 'replace': "vendedor de chuches [homeópata]"},
  {'find': /\bHomeópatas\b/g, 'replace': "Vendedores de chuches [Homeópatas]"},
  {'find': /\bhomeópatas\b/g, 'replace': "Vendedores de chuches [homeópatas]"},

  {'find': /\bDetox\b/g, 'replace': "Timo [Detox]"},
  {'find': /\bdetox\b/g, 'replace': "timo [detox]"},

  {'find': /\bJosep Pàmies\b/g, 'replace': "el Hierbas [Josep Pamiès]"},
  {'find': /\bJosep Pamies\b/g, 'replace': "el Hierbas [Josep Pamiès]"},
  {'find': /\bjosep pamies\b/g, 'replace': "el Hierbas [Josep Pamiès]"},

  {'find': /\bMovimiento antivacunas\b/g, 'replace': "Movimiento anticientífico promedieval [Movimiento antivacunas]"},
  {'find': /\bmovimiento antivacunas\b/g, 'replace': "Movimiento anticientífico promedieval [movimiento antivacunas]"},

  {'find': /\bAstrología\b/g, 'replace': "Absurda convicción de que nuestro destino depende de la posición de las estrellas al nacer [Astrología]"},
  {'find': /\bastrología\b/g, 'replace': "absurda convicción de que nuestro destino depende de la posición de las estrellas al nacer [astrología]"},

  {'find': /\bMedicina alternativa\b/g, 'replace': "\"Medicina\" de mentirijillas  [Medicina alternativa]"},
  {'find': /\bmedicina alternativa\b/g, 'replace': "\"medicina\" de mentirijillas  [medicina alternativa]"},

  {'find': /\bterapia alternativa\b/g, 'replace': "\"medicina\" de mentirijillas  [Terapia alternativa]"},
  {'find': /\bTerapia alternativa\b/g, 'replace': "\"Medicina\" de mentirijillas  [terapia alternativa]"},

  {'find': /\bTerapia complementaria\b/g, 'replace': "\"Medicina\" de mentirijillas  [Terapia complementaria]"},
  {'find': /\bterapia complementaria\b/g, 'replace': "\"medicina\" de mentirijillas  [terapia complementaria]"},

  {'find': /\bMedicinas alternativas\b/g, 'replace': "\"Medicina\" de mentirijillas  [Medicinas alternativas]"},
  {'find': /\bmedicinas alternativas\b/g, 'replace': "\"medicina\" de mentirijillas  [medicinas alternativas]"},

  {'find': /\bterapias alternativas\b/g, 'replace': "\"medicina\" de mentirijillas  [Terapias alternativas]"},
  {'find': /\bTerapias alternativas\b/g, 'replace': "\"Medicina\" de mentirijillas  [terapias alternativas]"},

  {'find': /\bTerapias complementarias\b/g, 'replace': "\"Medicina\" de mentirijillas  [Terapias complementarias]"},
  {'find': /\bterapias complementarias\b/g, 'replace': "\"medicina\" de mentirijillas  [terapias complementarias]"},

  {'find': /\bTerapias complementarias\b/g, 'replace': "\"Medicina\" de mentirijillas  [Terapias complementarias]"},
  {'find': /\bterapias complementarias\b/g, 'replace': "\"medicina\" de mentirijillas  [terapias complementarias]"},

  {'find': /\bReiki\b/g, 'replace': "\"Curar\" acercando las manos [Reiki]"},
  {'find': /\breiki\b/g, 'replace': "\"curar\" acercando las manos [reiki]"},

  {'find': /\bAstrólogo\b/g, 'replace': "Iluminado de las estrellas [Astrólogo]"},
  {'find': /\bastrólogo\b/g, 'replace': "iluminado de las estrellas [astrólogo]"},

  {'find': /\bTarot\b/g, 'replace': "El absurdo convencimiento de que nuestro destino depende de lo que diga una baraja de cartas [Tarot]"},
  {'find': /\btarot\b/g, 'replace': "el abusrdo convencimiento de que nuestro destino depende de lo que diga una baraja de cartas [Tarot]"},

  {'find': /\bTarotista\b/g, 'replace': "Charlatán de las cartas [Tarotista]"},
  {'find': /\btarotista\b/g, 'replace': "charlatán de las cartas [tarotista]"},

  {'find': /\bHoróscopo\b/g, 'replace': "El absurdo convencimiento de que nuestro destino depende de la posición de las estrellas al nacer [Horóscopo]"},
  {'find': /\bhoróscopo\b/g, 'replace': "el absurdo convencimiento de que nuestro destino depende de la posición de las estrellas al nacer [horóscopo]"}
];


var observeDOM = (function() {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
      eventListenerSupported = window.addEventListener;

  return function(obj, callback) {
    if(MutationObserver) {
      var obs = new MutationObserver(function(mutations, observer) {
        mutations[0].addedNodes.forEach(function(node, idx) {
          callback(node);
        })
      });
      obs.observe(obj, {childList:true, subtree:true});
    }
    else if(eventListenerSupported) {
      obj.addEventListener('DOMNodeInserted', callback, false);
    }
  }
})();

// replace after the page is load
replacements.forEach(function(elem, idx) {
  findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});

// replace at every change
observeDOM(document.body ,function(node){
  replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(node, {'find': elem.find, 'replace': elem.replace});
  });
});


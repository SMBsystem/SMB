/* GeoTany: adds a "back to initial view" button (⌂) to every Leaflet map on the page.
   Home view = the view the map had just before the user's first interaction.
   Page code may listen to map.on('homereset') and set map.__homeHandled = true to do its own reset. */
(function () {
  if (window.__maphomeLoaded) return; window.__maphomeLoaded = true;
  function lang() { try { return currentLang === 'ru' ? 'ru' : 'kz'; } catch (e) { return (document.documentElement.lang === 'ru') ? 'ru' : 'kz'; } }
  var TXT = { kz: 'Бастапқы көрініс', ru: 'Исходный вид' };

  function css() {
    if (document.getElementById('maphome-css')) return;
    var s = document.createElement('style'); s.id = 'maphome-css';
    s.textContent = '.lmap-home a{display:block;width:30px;height:30px;line-height:30px;text-align:center;font-size:18px;font-weight:900;text-decoration:none;cursor:pointer;background:#0f172a;color:#22d3ee;border-color:#334155}.lmap-home a:hover{background:#1e293b;color:#fff}';
    (document.head || document.documentElement).appendChild(s);
  }

  function install(L) {
    if (!L || !L.Map || !L.Control || L.__homeInstalled) return;
    L.__homeInstalled = true; css();
    var HomeCtl = L.Control.extend({
      options: { position: 'topleft' },
      onAdd: function (map) {
        var box = L.DomUtil.create('div', 'leaflet-bar leaflet-control lmap-home');
        var a = L.DomUtil.create('a', '', box); a.href = '#'; a.setAttribute('role', 'button'); a.innerHTML = '&#8962;';
        var upd = function () { a.title = TXT[lang()]; a.setAttribute('aria-label', TXT[lang()]); };
        upd(); setInterval(upd, 700);
        L.DomEvent.disableClickPropagation(box);
        L.DomEvent.on(a, 'click', function (e) { L.DomEvent.preventDefault(e); map.__goHome(); });
        return box;
      }
    });
    L.Map.addInitHook(function () {
      var map = this, home = null, timer = null, locked = false;
      function snap() { if (locked) return; try { home = { c: map.getCenter(), z: map.getZoom() }; } catch (e) {} }
      map.on('moveend', function () { if (locked) return; clearTimeout(timer); timer = setTimeout(snap, 700); });
      map.whenReady(function () { setTimeout(snap, 900); });
      function lock() { if (locked) return; snap(); locked = true; clearTimeout(timer); }
      var box = map.getContainer();
      ['pointerdown', 'mousedown', 'touchstart', 'wheel', 'dblclick', 'keydown'].forEach(function (ev) { box.addEventListener(ev, lock, true); });
      map.__goHome = function () {
        map.__homeHandled = false;
        map.fire('homereset');
        if (map.__homeHandled) return;
        if (!home) return;
        try { map.flyTo(home.c, home.z, { duration: 0.6 }); } catch (e) { map.setView(home.c, home.z); }
      };
      new HomeCtl().addTo(map);
    });
  }

  if (window.L && window.L.Map) install(window.L);
  else {
    var val;
    try {
      Object.defineProperty(window, 'L', { configurable: true, enumerable: true, get: function () { return val; }, set: function (v) { val = v; install(v); } });
    } catch (e) {
      var t = setInterval(function () { if (window.L && window.L.Map) { clearInterval(t); install(window.L); } }, 50);
    }
  }
})();

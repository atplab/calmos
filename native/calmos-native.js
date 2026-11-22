/* Pont natif Calmos (Capacitor) : marque l'app "en magasin" et expose CalmosAds (AdMob),
   CalmosAuth (connexion Google native) et CalmosBilling (Google Play Billing). */
(function () {
  try { sessionStorage.setItem('twa', '1'); } catch (e) {}
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var PL = C.Plugins || {};

  /* ---- À REMPLACER avant la publication (voir PUBLICATION-PLAY.md) ---- */
  var REWARDED_ID = 'ca-app-pub-3940256099942544/5224354917'; // ID de TEST AdMob
  var WEB_CLIENT_ID = 'REMPLACER.apps.googleusercontent.com'; // client OAuth "Web" du projet Firebase

  /* ---- Pubs récompensées (AdMob) ---- */
  var A = PL.AdMob;
  if (A) {
    var privacy = { adsEnabled: true, minor: false }, ready = null;
    var init = function () {
      return ready || (ready = (async function () {
        try {
          var info = await A.requestConsentInfo();
          if (info && info.isConsentFormAvailable && info.status === 'REQUIRED') await A.showConsentForm();
        } catch (e) {}
        await A.initialize({ initializeForTesting: false, tagForChildDirectedTreatment: !!privacy.minor,
          tagForUnderAgeOfConsent: !!privacy.minor, maxAdContentRating: privacy.minor ? 'G' : 'MA' });
      })());
    };
    window.CalmosAds = {
      setPrivacyMode: function (p) { privacy = Object.assign(privacy, p || {}); },
      showRewarded: async function () {
        if (privacy.adsEnabled === false) return false;
        await init();
        var rewarded = false, h = await A.addListener('onRewardedVideoAdReward', function () { rewarded = true; });
        try { await A.prepareRewardVideoAd({ adId: REWARDED_ID, isTesting: false }); await A.showRewardVideoAd(); }
        finally { try { h.remove(); } catch (e) {} }
        return rewarded;
      }
    };
  }

  /* ---- Connexion Google native (la fenêtre popup ne marche pas dans l'app) ---- */
  var S = PL.SocialLogin;
  if (S && WEB_CLIENT_ID.indexOf('REMPLACER') < 0) {
    window.CalmosAuth = {
      google: async function () {
        await S.initialize({ google: { webClientId: WEB_CLIENT_ID } });
        var r = await S.login({ provider: 'google', options: {} }), x = r && r.result;
        if (!x || !x.idToken) throw new Error('no token');
        return x.idToken;
      }
    };
  }

  /* ---- Achats de bulles (Google Play Billing, produits consommables bulles_p1 … bulles_p5) ---- */
  var packs = ['p1', 'p2', 'p3', 'p4', 'p5'], storeP = null;
  function getStore() {
    if (storeP) return storeP;
    storeP = new Promise(function (resolve, reject) {
      var tries = 0;
      (function go() {
        var P = window.CdvPurchase;
        if (!P) { if (++tries > 40) return reject(new Error('plugin')); return setTimeout(go, 250); }
        var store = P.store, GP = P.Platform.GOOGLE_PLAY;
        store.register(packs.map(function (k) { return { id: 'bulles_' + k, type: P.ProductType.CONSUMABLE, platform: GP }; }));
        store.when().approved(async function (tr) {
          var id = (tr.products && tr.products[0] && tr.products[0].id) || '';
          var token = (tr.nativePurchase && tr.nativePurchase.purchaseToken) || tr.purchaseToken;
          if (!token || !window.fbShop || !window.fbShop.playVerify) return;
          var r = await window.fbShop.playVerify(id.replace('bulles_', ''), token);
          if (r && !r.err) tr.finish(); // consomme l'achat ; sinon il sera relivré au prochain lancement
        });
        store.initialize([GP]).then(function () { resolve({ store: store, GP: GP }); }, reject);
      })();
    });
    return storeP;
  }
  window.CalmosBilling = {
    buy: async function (pack) {
      try {
        if (!window.fbShop || !(await window.fbShop.playReady())) return { err: 'login' };
        var o = await getStore(), offer = (o.store.get('bulles_' + pack, o.GP) || {}).getOffer && o.store.get('bulles_' + pack, o.GP).getOffer();
        if (!offer) return { err: 'x' };
        var r = await o.store.order(offer);
        return r && r.isError ? { err: 'x' } : {};
      } catch (e) { return { err: 'x' }; }
    }
  };
  getStore().catch(function () {}); // démarre tôt pour relivrer les achats en attente
})();

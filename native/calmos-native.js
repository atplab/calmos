/* Pont natif Calmos (Capacitor) : marque l'app comme "en magasin" et expose CalmosAds (AdMob). */
(function () {
  try { sessionStorage.setItem('twa', '1'); } catch (e) {}
  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;
  var A = C.Plugins && C.Plugins.AdMob;
  if (!A) return;
  // IDs de TEST Google : remplacer par les vrais avant la publication (voir PUBLICATION-PLAY.md)
  var REWARDED_ID = 'ca-app-pub-3940256099942544/5224354917';
  var privacy = { adsEnabled: true, minor: false };
  var ready = null;
  function init() {
    if (ready) return ready;
    ready = (async function () {
      try {
        var info = await A.requestConsentInfo();
        if (info && info.isConsentFormAvailable && info.status === 'REQUIRED') await A.showConsentForm();
      } catch (e) {}
      await A.initialize({
        initializeForTesting: false,
        tagForChildDirectedTreatment: !!privacy.minor,
        tagForUnderAgeOfConsent: !!privacy.minor,
        maxAdContentRating: privacy.minor ? 'G' : 'MA'
      });
    })();
    return ready;
  }
  window.CalmosAds = {
    setPrivacyMode: function (p) { privacy = Object.assign(privacy, p || {}); },
    showRewarded: async function () {
      if (privacy.adsEnabled === false) return false;
      await init();
      var rewarded = false;
      var h = await A.addListener('onRewardedVideoAdReward', function () { rewarded = true; });
      try {
        await A.prepareRewardVideoAd({ adId: REWARDED_ID, isTesting: false });
        await A.showRewardVideoAd();
      } finally { try { h.remove(); } catch (e) {} }
      return rewarded;
    }
  };
})();

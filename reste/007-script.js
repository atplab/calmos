["gesturestart", "gesturechange", "gestureend"].forEach(function (t) {
  document.addEventListener(
    t,
    function (e) {
      e.preventDefault();
    },
    { passive: false },
  );
});
document.addEventListener(
  "touchmove",
  function (e) {
    if (e.touches.length > 1) e.preventDefault();
  },
  { passive: false },
);
document.addEventListener(
  "wheel",
  function (e) {
    if (e.ctrlKey) e.preventDefault();
  },
  { passive: false },
);
document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && ["+", "-", "=", "0"].indexOf(e.key) > -1) e.preventDefault();
});

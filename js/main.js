(function () {
  if (isFirefox()) {
    showElem(".button--firefox");
  } else if (isBrave()) {
    showElem(".button--brave");
  } else if (isGoogleChrome()) {
    showElem(".button--chrome");
  } else {
    showElem(".button--other");
  }

  //Display the icons
  feather.replace();
})();

function isFirefox() {
  if (typeof InstallTrigger !== "undefined") {
    return true;
  }
  return false;
}

function isGoogleChrome() {
  if (window.chrome !== null && typeof window.chrome !== "undefined") {
    return true;
  }
  return false;
}

async function isBrave() {
  if (await navigator.brave.isBrave()) {
    return true;
  } else {
    return false;
  }
}

function showElem(selector) {
  const items = document.querySelectorAll(selector);
  items.forEach(function (item) {
    item.classList.remove("d-none");
    item.classList.add("d-block");
  });
}

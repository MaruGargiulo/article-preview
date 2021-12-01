window.addEventListener("load", () => {
  const VISIBLE_CLASS = "__visible";

  const shareButton = document.querySelector("#shareButton");
  const shareLinksContainer = document.querySelector("#shareLinks");
  const socialNetworks = shareLinksContainer.querySelectorAll("img");

  const removeVisibleClass = (elem) =>
    elem.classList.remove(`${VISIBLE_CLASS}`);

  shareButton.addEventListener("click", (e) => {
    e.stopPropagation();
    shareLinksContainer.classList.toggle(`${VISIBLE_CLASS}`);
  });

  socialNetworks.forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const socialNetwork = e.currentTarget.getAttribute("alt");
      alert(`Shared in ${socialNetwork}`);
      removeVisibleClass(shareLinksContainer);
    })
  );

  document.addEventListener("click", () => {
    shareLinksContainer.classList.contains(`${VISIBLE_CLASS}`) &&
      removeVisibleClass(shareLinksContainer);
  });
});

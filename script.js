document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("shareButton");
    const shareMenu = document.getElementById("shareMenu");

    shareButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent this click from triggering the document click listener
        shareMenu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!shareButton.contains(event.target) && !shareMenu.contains(event.target)) {
        shareMenu.classList.remove("active");
      }
    });
  });

  function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    let shareUrl = "";

    switch (platform) {
      case "snapchat":
        shareUrl = `https://www.snapchat.com/share?url=${url}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case "instagram":
        alert("Instagram does not support direct web-based sharing.");
        return;
    }

    window.open(shareUrl, "_blank");
  }
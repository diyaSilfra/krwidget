let x = document.getElementById("buttonForIframe");
x.addEventListener("click", (event) => toggleIframe(event));
let iframeContainer = document.getElementById("krWikiIframeContainer");

const toggleIframe = (event) => {
  event.preventDefault();
  const imgButton = x.getElementsByTagName("img")[0];
  if (iframeContainer.style.display === "none") {
    if (x.style) {
      iframeContainer.style.display = "block";
      imgButton.src =
        "https://mcallisterkr.camptratech.com/kr/wp-content/uploads/2024/06/downArrowIcon.png";
    }
  } else {
    iframeContainer.style.display = "none";
    imgButton.src =
      "https://mcallisterkr.camptratech.com/kr/wp-content/uploads/2024/06/chat.png";
  }
};
const handleMessage = (event) => {
  const conditionalElement = document.getElementById("buttonForIframe");
  console.log("conditionalElement ", conditionalElement);
  if (conditionalElement) {
    console.log("entered if ");
    if (event.data.display == false || event.data.userNameAuth == false) {
      conditionalElement.style.opacity = 0;
      iframeContainer.style.opacity = 0;
    } else {
      conditionalElement.style.opacity = 1;
      iframeContainer.style.opacity = 1;
    }
  }
  if (event.data.operation === "expand") {
    iframeContainer.style.width = "50%";
  } else if (event.data.operation === "shrink") {
    iframeContainer.style.width = "393px";
  }
};

window.addEventListener("message", handleMessage);
const iframec = document.getElementById("iframec");
console.log(window.location.href);
const message = {
  username: "#{securityContext.userName}",
  url: window.location.href,
};

console.log("outside message", message);

iframec.addEventListener("load", function () {
  console.log("this: ", this);
  console.log("this.contentWindow : ", this.contentWindow);

  this.contentWindow.postMessage(message, "*");
});

const images = [
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "spike35",
        description: "Energy VIP ",
    },
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "Опис зображення 2",
        description: "BinGo",
    },
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "Опис зображення 3",
        description: "Cloudy",
    },
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "Опис зображення 4",
        description: "+Ak-47+",
    },
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "Опис зображення 5",
        description: "F[a]N[a]T",
    },
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "Опис зображення 6",
        description: "MiXeR",
    },
    {
        src: "media/533-5334783_counter-strike-terrorist-hd-png-download.png",
        alt: "Опис зображення 7",
        description: "NeOn _DONI_ _ Mr.Dag_Marihuan4ik",
    },
    
];

const imageContainer = document.getElementById("image-container");

const modalAd = document.getElementById('modal-ad');
const closeButton = document.getElementById('close-button');

const subscriptionPopup = document.getElementById('subscription-popup');
const subscribeButton = document.getElementById('subscribe-button');
const declineButton = document.getElementById('decline-button');

function createImageElement(image) {
    const imageElement = document.createElement("div");
    imageElement.classList.add("image-card");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.classList.add("image");

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = image.description;

    const expandButton = document.createElement("button");
    expandButton.textContent = "Розгорнути";
    expandButton.classList.add("expand-button");
    expandButton.addEventListener("click", () => {
        descriptionElement.classList.toggle("hidden");
        expandButton.textContent = descriptionElement.classList.contains("hidden") ? "Розгорнути" : "Згорнути";
    });

    imageElement.appendChild(img);
    imageElement.appendChild(descriptionElement);
    imageElement.appendChild(expandButton);

    return imageElement;
}

window.addEventListener("load", () => {
    images.forEach((image) => {
        const imageElement = createImageElement(image);
        imageContainer.appendChild(imageElement);
    });
});





function showSubscriptionPopup() {
  setTimeout(() => {
    subscriptionPopup.style.display = 'block';
  }, 2000);
}

function hideSubscriptionPopup() {
  subscriptionPopup.style.display = 'none';
}


function storeSubscriptionStatus(isSubscribed) {
  localStorage.setItem('isSubscribed', isSubscribed);
}


function isSubscribed() {
  return localStorage.getItem('isSubscribed') === 'true';
}


subscribeButton.addEventListener('click', () => {
  storeSubscriptionStatus(true);
  hideSubscriptionPopup();
});


declineButton.addEventListener('click', () => {
  storeSubscriptionStatus(false);
  hideSubscriptionPopup();
});


if (!isSubscribed()) {
  showSubscriptionPopup();
}


function showModalAd() {
  modalAd.style.display = 'block';
}


function hideModalAd() {
  modalAd.style.display = 'none';
}


closeButton.addEventListener('click', hideModalAd);


setTimeout(() => {
  showModalAd();

  let remainingTime = 10; 

  const timerFunction = () => {
    remainingTime--;

    closeButton.textContent = `Закрити (${remainingTime})`;

    closeButton.disabled = true;
    if (remainingTime === 0) {
      closeButton.disabled = false;
      return;
    }

    setTimeout(timerFunction, 1000);
  };

  timerFunction();
}, 5000);


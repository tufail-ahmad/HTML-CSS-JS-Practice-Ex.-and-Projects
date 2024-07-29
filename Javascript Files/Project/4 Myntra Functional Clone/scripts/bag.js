let bagItemObjects;
onload();

function onload() {
  displayBagObjects();
}

function displayBagObjects() {
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < bagItems.length; i++) {
      if (itemId === item[i]) {
        return item[i];
      }
    }
  });
}

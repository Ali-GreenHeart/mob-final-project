export function chooseColor(opened, secret) {
    let color = "white";
    if (opened) {
      if (secret) {
        color = "pink";
      } else {
        color = "white";
      }
    }
    return color;
  }
  
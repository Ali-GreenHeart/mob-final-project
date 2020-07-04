export function chooseColor(opened, secret) {
    let color = "#fff";
    if (opened) {
      if (secret) {
        color = "pink";
      } else {
        color = "#eee";
      }
    }
    return color;
  }
  
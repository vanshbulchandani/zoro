const truncate = (e, charLength, showDots = true) => {
  if (e.length <= charLength) {
    return e;
  } else {
    const truncatedString = e.slice(0, charLength);
    if (showDots) {
      return `${truncatedString} ...`;
    }
    return `${truncatedString} `;
  }
};

export default truncate;

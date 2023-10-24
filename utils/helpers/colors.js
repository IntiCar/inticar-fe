 

export const addAlphaToHex = (color, opacity) => {
  const op = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + op.toString(16).toUpperCase();
};

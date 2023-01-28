let notes = new Array<number>(15).fill(1).map((_, i) => ({
  id: Date.now() + i,
  title: `Note ${i}`,
}));
export { notes };

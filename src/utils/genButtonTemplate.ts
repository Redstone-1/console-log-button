export default (contents: string[]) => {
  return contents.reduce((pre, cur) => {
    return (pre + `%c${cur}`);
  }, '') || '';
};

export function getGraphemeLength(string) {
  if (typeof string !== 'string') return 0;
  return [...new Intl.Segmenter().segment(string)].length;
}

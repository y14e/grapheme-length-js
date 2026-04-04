export function getGraphemeLength(string: string): number {
  if (typeof string !== 'string') return 0;
  return [...new Intl.Segmenter().segment(string)].length;
}

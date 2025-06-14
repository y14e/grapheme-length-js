export function getGraphemeLength(string: unknown): number {
  if (typeof string !== 'string') {
    return 0;
  }
  return [...new Intl.Segmenter(document.documentElement.lang || 'en').segment(string)].length;
}

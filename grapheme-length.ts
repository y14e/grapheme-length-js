export function getGraphemeLength(string: string): number {
  return [...new Intl.Segmenter(document.documentElement.lang || 'en').segment(string)].length;
}

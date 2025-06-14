export function getGraphemeLength(string) {
  return [...new Intl.Segmenter(document.documentElement.lang || 'en').segment(string)].length;
}

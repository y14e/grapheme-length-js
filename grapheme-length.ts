function getGraphemeLength(string: string): number {
  return [...new Intl.Segmenter(document.documentElement.getAttribute('lang') || 'en').segment(string)].length;
}

export { getGraphemeLength };

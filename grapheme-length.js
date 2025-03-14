function getGraphemeLength(string) {
  return [...new Intl.Segmenter(document.documentElement.getAttribute('lang') || 'en').segment(string)].length;
}

export { getGraphemeLength };

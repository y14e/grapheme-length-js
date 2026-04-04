const segmenter = new Intl.Segmenter();

export function getGraphemeLength(string) {
  if (typeof string !== 'string') return 0;
  let i = 0;
  for (const _ of segmenter.segment(string)) {
    i++;
  }
  return i;
}

const segmenter = new Intl.Segmenter();

export function getGraphemeLength(string: string): number {
  if (typeof string !== 'string') return 0;
  let count = 0;
  for (const _ of segmenter.segment(string)) {
    count++;
  }
  return count;
}

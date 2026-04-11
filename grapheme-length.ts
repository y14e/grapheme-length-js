const segmenter = new Intl.Segmenter();

export function getGraphemeLength(string: string): number {
  let count = 0;
  for (const _ of segmenter.segment(string)) {
    count++;
  }
  return count;
}

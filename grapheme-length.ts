const segmenter = new Intl.Segmenter();

export function getGraphemeLength(string: string): number {
  if (typeof string !== 'string') return 0;
  return [...segmenter.segment(string)].length;
}

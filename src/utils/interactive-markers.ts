const INTERACTIVE_MARKER_PATTERN = /^\s*<!--\s*interactive:([a-z0-9]+(?:-[a-z0-9]+)*)\s*-->\s*$/;
const FENCE_PATTERN = /^\s*(`{3,}|~{3,})/;

export function extractInteractiveMarkers(body?: string): string[] {
  if (!body) return [];

  const markers: string[] = [];
  let fence: string | null = null;

  for (const line of body.split(/\r?\n/)) {
    const fenceMatch = line.match(FENCE_PATTERN);
    if (fenceMatch) {
      const delimiter = fenceMatch[1];
      if (!fence) fence = delimiter;
      else if (delimiter[0] === fence[0] && delimiter.length >= fence.length) fence = null;
      continue;
    }
    if (fence) continue;

    const markerMatch = line.match(INTERACTIVE_MARKER_PATTERN);
    if (markerMatch) markers.push(markerMatch[1]);
  }

  return markers;
}

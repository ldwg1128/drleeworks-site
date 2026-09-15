const MARKER_PATTERN = /^<!--\s*interactive:([a-z0-9]+(?:-[a-z0-9]+)*)\s*-->$/;

// Keep authoring syntax as an unobtrusive Markdown comment, then turn only an
// exact marker comment into a stable mount point during Markdown compilation.
export default function remarkInteractiveMarkers() {
  return tree => {
    const visit = node => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'html' && typeof node.value === 'string') {
        const match = node.value.trim().match(MARKER_PATTERN);
        if (match) {
          node.value = `<div class="interactive-marker" data-interactive-marker="${match[1]}"></div>`;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

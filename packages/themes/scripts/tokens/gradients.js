// Gradient token processor
// Accepts gradient design tokens (already simplified)
// Recursively converts gradient definition objects to CSS-compatible strings
// while preserving the token structure so components can access
// e.g. vars.gradients.semantic.structure.background['header-dark']

const gradients = (tokens) => {
  // Helper to determine whether a value is a gradient definition
  const isGradientObject = (obj) => obj && typeof obj === 'object' && 'gradientType' in obj && 'stops' in obj;

  // Convert gradient definition to CSS string
  const toCssGradient = (gradient) => {
    if (!isGradientObject(gradient)) return gradient;

    const stops = gradient.stops
      // .sort((a, b) => a.position - b.position)
      .map((s) => `${s.color} ${(s.position * 100).toFixed(2)}%`)
      .join(', ');

    if (gradient.gradientType === 'linear') {
      const angle = +(gradient.rotation ?? 0).toFixed(2); // round to 2 dp
      return `linear-gradient(${angle}deg, ${stops})`;
    }
    if (gradient.gradientType === 'radial') {
      return `radial-gradient(circle, ${stops})`;
    }
    return gradient; // fallback
  };

  // Recursive walk to process gradients
  const walk = (node) => {
    if (isGradientObject(node)) {
      return toCssGradient(node);
    }
    if (Array.isArray(node)) {
      return node.map(walk);
    }
    if (node && typeof node === 'object') {
      return Object.keys(node).reduce((acc, key) => {
        if (key === 'description') {
          return acc;
        }
        acc[key] = walk(node[key]);
        return acc;
      }, {});
    }
    return node; // primitive
  };

  // Return empty object if tokens is falsy or not an object
  if (!tokens || typeof tokens !== 'object') {
    return {};
  }

  // convert entire tree first
  const converted = walk(tokens);

  // Ensure converted is object
  if (!converted || typeof converted !== 'object') {
    return {};
  }

  // Re-shape keys to nicer structure (align with colors)
  return Object.keys(converted).reduce((acc, key) => {
    if (key === 'light-mode') {
      acc.semantic = converted[key];
    } else if (key === 'archive' || key === 'description') {
      // skip archive
      return acc;
    } else if (key === 'gradient') {
      // Group standalone gradients into 'plain' and 'mesh'
      const standalone = converted[key];
      if (standalone && typeof standalone === 'object') {
        const { mesh, ...plain } = standalone;
        if (mesh) {
          acc.mesh = mesh;
        }
        if (Object.keys(plain).length > 0) {
          acc.plain = plain;
        }
      }
    } else {
      acc[key] = converted[key];
    }
    return acc;
  }, {});
};

export default gradients;

import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const img = block.querySelector('img');
  if (img) {
    const optimizedPicture = createOptimizedPicture(img.src, img.alt || '', false);
    block.textContent = '';
    block.append(optimizedPicture);
  }
}

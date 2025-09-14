/**
 * Calculates reading time for markdown content with intelligent adjustments
 * for different content types (code, images, lists, etc.)
 */

export const calculateReadingTime = (markdownContent: string): string => {
  // Remove code blocks and markdown syntax to get clean text
  const cleanContent = markdownContent
    .replace(/```[\s\S]*?```/g, '')        // Remove code blocks
    .replace(/`[^`]*`/g, '')               // Remove inline code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Convert links to text
    .replace(/[#*_~`]/g, '')               // Remove markdown symbols
    .replace(/\n\s*\n/g, ' ')              // Replace multiple newlines with space
    .trim();

  // Count words (split by whitespace)
  const words = cleanContent.split(/\s+/);
  const wordCount = words.length;

  // Detect content complexity to adjust reading speed
  const hasCode = markdownContent.includes('```');
  const hasImages = markdownContent.includes('![');
  const hasLists = markdownContent.includes('- ') || markdownContent.includes('1. ');
  const hasTables = markdownContent.includes('|');
  const hasHeaders = markdownContent.includes('#');

  // Base reading speed (words per minute)
  let wordsPerMinute = 200;

  // Adjust reading speed based on content complexity
  if (hasCode) wordsPerMinute -= 50;      // Code takes longer to read
  if (hasImages) wordsPerMinute -= 25;    // Images take time to process
  if (hasLists) wordsPerMinute += 25;     // Lists are faster to read
  if (hasTables) wordsPerMinute -= 30;    // Tables take longer to process
  if (hasHeaders) wordsPerMinute += 10;   // Headers provide structure

  // Calculate reading time
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

  // Return formatted reading time
  if (readTimeMinutes < 1) return 'Less than 1 min read';
  if (readTimeMinutes === 1) return '1 min read';
  return `${readTimeMinutes} min read`;
};

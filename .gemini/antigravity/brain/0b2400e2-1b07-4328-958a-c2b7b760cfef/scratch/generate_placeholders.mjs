import fs from 'fs';
import path from 'path';

// This is a condensed version of the sitemap for extraction
const sitemap = [
    { slug: 'articles/suffix-rule-gender', title: 'The Suffix Rule: Predicting Gender', category: 'articles' },
    { slug: 'articles/feminine-suffixes', title: 'Feminine Groups: -ung, -heit, -keit, -schaft, -ion, -tät', category: 'articles' },
    // ... I'll just use a regex on the actual file
];

const filePath = '/home/rifat/rifat/learn/das-system/data/grammar-sitemap.ts';
const content = fs.readFileSync(filePath, 'utf8');

// Regex to find slug and title
const slugRegex = /slug:\s*'([^']+)'/g;
const titleRegex = /title:\s*'([^']+)'/g;

let slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
}

let titles = [];
while ((match = titleRegex.exec(content)) !== null) {
    titles.push(match[1]);
}

const baseDir = '/home/rifat/rifat/learn/das-system/data/grammar';

slugs.forEach((slug, index) => {
    const fullPath = path.join(baseDir, `${slug}.mdx`);
    const dir = path.dirname(fullPath);
    const title = titles[index] || slug;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (!fs.existsSync(fullPath)) {
        const mdxContent = `# ${title}

This is a placeholder for the **${title}** lesson. 
The logic for this section is currently being updated to match the new 15-category DAS system architecture.

### Key Concepts
- Concept 1
- Concept 2
- Concept 3

> [!NOTE]
> Detailed content for this lesson will be available soon. Please check back later.
`;
        fs.writeFileSync(fullPath, mdxContent);
        console.log(`Created: ${fullPath}`);
    } else {
        console.log(`Exists: ${fullPath}`);
    }
});

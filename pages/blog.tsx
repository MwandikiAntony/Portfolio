const posts = [
  {
    title: 'How I Built My Portfolio with Next.js + Tailwind',
    date: '2025-10-01',
    summary: 'A walkthrough of building my developer portfolio from scratch...',
    slug: 'building-portfolio',
  },
  {
    title: 'My Favorite VS Code Extensions for Full Stack Devs',
    date: '2025-09-20',
    summary: 'Boost your dev workflow with these extensions...',
    slug: 'vscode-extensions',
  },
];

const Blog = () => (
  <section className="space-y-6">
    <h2 className="text-3xl font-bold mb-4">Blog</h2>
    {posts.map((post, i) => (
      <div key={i} className="border-b pb-4">
        <h3 className="text-xl font-semibold">
          <a href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">{post.title}</a>
        </h3>
        <p className="text-sm text-gray-500">{post.date}</p>
        <p className="text-gray-700 dark:text-gray-300">{post.summary}</p>
      </div>
    ))}
  </section>
);

export default Blog;

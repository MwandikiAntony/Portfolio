const posts = [
  {
    title: 'How I Built My Portfolio with Next.js and Tailwind CSS',
    date: '2025-10-01',
    summary:
      'A step-by-step look at how I designed, developed, and deployed my personal portfolio using Next.js, Tailwind CSS, and modern web development best practices.',
    slug: 'building-portfolio',
  },
  {
    title: 'Top VS Code Extensions Every Full Stack Developer Should Know',
    date: '2025-09-20',
    summary:
      'Discover the most powerful VS Code extensions that can significantly enhance your productivity, code quality, and overall full stack development workflow.',
    slug: 'vscode-extensions',
  },
  {
    title: 'Scaling MERN Applications for Production',
    date: '2025-08-10',
    summary:
      'Key strategies and techniques for optimizing and scaling MERN stack applications — from API performance tuning to cloud deployment best practices.',
    slug: 'scaling-mern-apps',
  },
  {
    title: 'Lessons Learned from Building Afya Diary Kenya',
    date: '2025-07-05',
    summary:
      'An inside look at developing a healthcare platform that bridges digital health access — the challenges, solutions, and lessons learned along the way.',
    slug: 'afya-diary-lessons',
  },
];

const Blog = () => (
  <section className="space-y-6 pt-24 px-6">
    <h2 className="text-3xl font-bold mb-4">My Blog</h2>
    <p className="text-gray-700 dark:text-gray-600 mb-6">
      I share insights, tutorials, and personal experiences from my journey as a full stack
      web developer. My blog focuses on modern web technologies, performance optimization,
      software engineering practices, and lessons from real-world projects.
    </p>
    {posts.map((post, i) => (
      <div key={i} className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-xl font-semibold">
          <a
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:underline"
          >
            {post.title}
          </a>
        </h3>
        <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
        <p className="text-gray-700 dark:text-gray-600 mt-1">{post.summary}</p>
      </div>
    ))}
  </section>
);


export default Blog;

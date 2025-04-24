import posts from '../../data/blogPosts';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>Contenido no encontrado</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={post.image} alt={post.title} className="w-full rounded-xl mb-6" />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-lg">
            {post.content}
      </p>
    </div>
  );
}
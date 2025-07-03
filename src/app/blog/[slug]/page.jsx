import Header from '../../Components/Header';
import posts from '../../data/blogPosts';

import { Facebook, Twitter, Instagram } from 'lucide-react';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div className="p-6 text-center">Contenido no encontrado</div>;

  return (
    <div className="min-h-screen ">
      <Header />

      <div className="max-w-4xl mx-auto mt-24 py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-xl">
        {/* Imagen destacada */}
        <img src={post.image1} alt={post.title} className="w-full rounded-lg mb-8 shadow-md" />

        {/* Título */}
        <h1 className="text-4xl font-extrabold text-primary mb-4">{post.title}</h1>

        {/* Contenido formateado */}
        <article className="prose prose-lg text-gray-800 prose-img:rounded-lg prose-img:mx-auto">
          {post.content
            .split('\n')
            .filter((p) => p.trim() !== '')
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </article>

        {/* Redes sociales */}
        <div className="mt-10 border-t pt-6 flex gap-6 items-center">
          <span className="text-lg text-gray-600">Compartir:</span>
          <a href="#" className="hover:text-blue-600">
            <Facebook />
          </a>
          <a href="#" className="hover:text-sky-400">
            <Twitter />
          </a>
          <a href="#" className="hover:text-pink-500">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
}

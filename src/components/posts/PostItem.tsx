import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post, User } from '../../types';
import { useStore } from '../../store';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

interface PostItemProps {
  post: Post;
  author: User;
}

const PostItem = ({ post, author }: PostItemProps) => {
  const [showComments, setShowComments] = useState(false);
  const { currentUser, likePost } = useStore();

  const isLiked = post.likes.includes(currentUser?.id || '');
  const hasComments = post.comments.length > 0;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4 transition-all hover:shadow-md">
      {/* Encabezado del post */}
      <div className="flex items-center p-4">
        <Link to={`/profile/${author.id}`} className="flex-shrink-0">
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        </Link>
        <div className="ml-3 flex-1">
          <Link
            to={`/profile/${author.id}`}
            className="font-medium text-gray-900 hover:underline"
          >
            {author.name}
          </Link>
          <p className="text-xs text-gray-500">
            @{author.username} • {formatDate(post.createdAt)}
          </p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Contenido */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 whitespace-pre-line">{post.content}</p>
      </div>

      {/* Imagen (si existe) */}
      {post.imageUrl && (
        <div className="mb-3">
          <img
            src={post.imageUrl}
            alt="Imagen del post"
            className="w-full max-h-96 object-cover"
          />
        </div>
      )}

      {/* Acciones */}
      <div className="px-4 py-2 border-t border-gray-100 flex items-center space-x-6">
        <button
          onClick={() => likePost(post.id)}
          className={`flex items-center space-x-1 ${
            isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          <span className="text-sm">{post.likes.length || ''}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">{hasComments ? post.comments.length : ''}</span>
        </button>

        <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600">
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      {/* Comentarios */}
      {showComments && (
        <div className="border-t border-gray-100 p-4 bg-gray-50">
          {hasComments && <CommentList postId={post.id} comments={post.comments} />}
          <CommentForm postId={post.id} />
        </div>
      )}
    </article>
  );
};

export default PostItem;

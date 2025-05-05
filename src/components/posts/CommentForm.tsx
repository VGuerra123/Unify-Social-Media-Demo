import { useState } from 'react';
import { Send } from 'lucide-react';
import { useStore } from '../../store';

interface CommentFormProps {
  postId: string;
}

const CommentForm = ({ postId }: CommentFormProps) => {
  const [comment, setComment] = useState('');
  const { addComment, currentUser } = useStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(postId, comment);
      setComment('');
    }
  };
  
  if (!currentUser) return null;

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <img 
        src={currentUser.avatar} 
        alt={currentUser.name} 
        className="h-8 w-8 rounded-full object-cover flex-shrink-0"
      />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button 
        type="submit" 
        disabled={!comment.trim()}
        className={`p-2 rounded-full ${
          comment.trim() 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
};

export default CommentForm;
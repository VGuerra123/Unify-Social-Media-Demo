import { Comment } from '../../types';
import { useStore } from '../../store';

interface CommentListProps {
  postId: string;
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  const { users } = useStore();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-3 mb-4">
      {comments.map(comment => {
        const author = users.find(user => user.id === comment.userId);
        if (!author) return null;
        
        return (
          <div key={comment.id} className="flex space-x-2">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="h-8 w-8 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <div className="flex items-baseline">
                  <span className="font-medium text-gray-900 text-sm">{author.name}</span>
                  <span className="ml-2 text-xs text-gray-500">@{author.username}</span>
                </div>
                <p className="text-gray-800 text-sm">{comment.content}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{formatDate(comment.createdAt)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
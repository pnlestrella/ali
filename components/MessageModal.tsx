'use client';

import Modal from './Modal';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MessageModal({ isOpen, onClose }: MessageModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="message-modal">
        <h2 className="message-heading">A Message for You</h2>
        <div className="message-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro 
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga.
          </p>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum 
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
      </div>
      <style jsx>{`
        .message-modal {
          padding: var(--space-md) 0;
        }
        
        .message-heading {
          font-family: var(--pixel-font);
          font-size: clamp(16px, 4vw, 20px);
          color: var(--pixel-coral);
          margin-bottom: var(--space-lg);
          text-align: center;
          line-height: 1.6;
        }
        
        .message-content {
          max-height: 50vh;
          overflow-y: auto;
          padding-right: var(--space-sm);
        }
        
        .message-content p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--pixel-text);
          margin-bottom: var(--space-md);
        }
        
        .message-content p:last-child {
          margin-bottom: 0;
        }
        
        /* Custom scrollbar for message content */
        .message-content::-webkit-scrollbar {
          width: 8px;
        }
        
        .message-content::-webkit-scrollbar-track {
          background: var(--pixel-cream);
          border-radius: 4px;
        }
        
        .message-content::-webkit-scrollbar-thumb {
          background: var(--pixel-pink);
          border-radius: 4px;
        }
        
        .message-content::-webkit-scrollbar-thumb:hover {
          background: var(--pixel-coral);
        }
      `}</style>
    </Modal>
  );
}

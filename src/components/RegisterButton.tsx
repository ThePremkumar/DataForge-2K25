import React from 'react';
interface RegisterButtonProps {
  onClick: () => void;
}
export function RegisterButton({
  onClick
}: RegisterButtonProps) {
  return <button onClick={onClick} className="fixed top-20 right-4 z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 animate-pulse">
      Register Now
    </button>;
}
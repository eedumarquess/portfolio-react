import { useEffect } from 'react';
import './ScrolldownIcon.css'

function handleScroll() {
  let scroll = window.scrollY;
  let arrowElement = document.querySelector('.arrow');
  if (arrowElement) {
    if (scroll >= 1) {
      arrowElement.classList.add('fade');
    } else {
      arrowElement.classList.remove('fade');
    }
  }
}

function Arrow() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="arrow animated bounce"></div>
  );
}

export default Arrow;
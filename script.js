document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const score = formData.get('score');
      console.log(score);
      localStorage.setItem('score', score);
      window.location.href = "./thank.html"
    });
  });
  
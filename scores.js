document.addEventListener('DOMContentLoaded', () => {
    const progress = localStorage.getItem('progress') || 0;
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
 
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.floor(progress)}% to the goal`;
  });

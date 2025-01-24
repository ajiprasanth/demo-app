function celebrate() {
    const message = document.getElementById('dynamic-message');
    const confetti = document.getElementById('confetti');

    // Display congratulatory message
    message.textContent = 'Congratulations Abhilash Gopal!';
    
    // Show confetti animation
    confetti.classList.remove('hidden');
    confetti.innerHTML = '🎉🎊✨🌟🎆🎇✨🎊🎉';

    // Clear confetti after 3 seconds
    setTimeout(() => {
        confetti.classList.add('hidden');
        confetti.innerHTML = '';
    }, 3000);
}

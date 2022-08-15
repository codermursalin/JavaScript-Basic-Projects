const questions = document.querySelectorAll('.question');

for (let question of questions) {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {
        for (let item of questions) {
            if (item != question) {
                item.classList.remove('show-text');
            }
        }
        question.classList.toggle('show-text');
    })
}
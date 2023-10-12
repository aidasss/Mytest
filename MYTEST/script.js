// Add JavaScript functionality
document.getElementById('test-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    // Check if both name and surname are filled
    if (name.trim() === '' || surname.trim() === '') {
        alert('Please fill out both Name and Surname fields.');
        return;
    }

    const selectedAnswers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked'),
        q6: document.querySelector('input[name="q6"]:checked'),
        q7: document.querySelector('input[name="q7"]:checked'),
        q8: document.querySelector('input[name="q8"]:checked'),
        q9: document.querySelector('input[name="q9"]:checked'),
        q10: document.querySelector('input[name="q10"]:checked'),
    };

    const feedback = document.getElementById('feedback');
    const result = document.getElementById('result');

    let correctAnswers = 0;
    const totalQuestions = Object.keys(selectedAnswers).length;

    const correctAnswersText = [];

    for (let i = 1; i <= totalQuestions; i++) {
        const questionKey = `q${i}`;
        if (selectedAnswers[questionKey]) {
            const correctAnswer = `q${i}`;
            if (selectedAnswers[questionKey].value === correctAnswer) {
                correctAnswers++;
                correctAnswersText.push(`Question ${i}: Correct`);
            } else {
                correctAnswersText.push(`Question ${i}: Incorrect`);
            }
        } else {
            correctAnswersText.push(`Question ${i}: Not answered`);
        }
    }

    // Calculate the score
    const score = (correctAnswers / totalQuestions) * 100;

    feedback.textContent = `Name: ${name} Surname: ${surname}\nScore: ${score}%`;
    result.innerHTML = `<h2>Result:</h2>${correctAnswersText.join("<br>")}`;
});

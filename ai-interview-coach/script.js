const questions = {
    developer: [
        "Tell me about yourself.",
        "What programming languages do you know?",
        "Describe a difficult project."
    ],

    network: [
        "What is DNS?",
        "What is the difference between TCP and UDP?",
        "How would you troubleshoot a network issue?"
    ]
};

function generateQuestion() {

    const role =
        document.getElementById("jobRole").value;

    let selectedQuestions;

    if (role === "Software Developer") {
        selectedQuestions = questions.developer;
    } else {
        selectedQuestions = questions.network;
    }

    const randomQuestion =
        selectedQuestions[
            Math.floor(Math.random() *
            selectedQuestions.length)
        ];

    document.getElementById("question").innerText =
        randomQuestion;
}

function evaluateAnswer() {

    const answer =
        document.getElementById("answer").value;

    let feedback = "";

    if (answer.length < 50) {
        feedback =
            "Try providing more detail.";
    } else {
        feedback =
            "Good answer. Consider adding an example.";
    }

    document.getElementById("feedback").innerText =
        feedback;
}

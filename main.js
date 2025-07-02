const answers = document.querySelectorAll(".questions-list__question-answer");
const iconsPlus = document.querySelectorAll(".questions-list__question-icon-plus");
const iconsMinus = document.querySelectorAll(".questions-list__question-icon-minus");
const headersList = document.querySelectorAll(".questions-list__question-header");

const handleQuestionClick = (i) => {
    answers[i].classList.toggle("questions-list__question-answer--active");
    iconsPlus[i].classList.toggle("questions-list__question-icon-plus--disactive");
    iconsMinus[i].classList.toggle("questions-list__question-icon-minus--active");
};

headersList.forEach((header, i) => {
    header.addEventListener("click", () => handleQuestionClick(i));
});

let currentIndex = 0;

const changeQuestion = (e) => {
    if (e.keyCode === 38 && currentIndex > 0) {
        currentIndex--;
    } else if (e.keyCode === 40 && currentIndex < headersList.length - 1) {
        currentIndex++;
    }

    headersList.forEach((header, i) => {
        answers[i].classList.remove("questions-list__question-answer--active");
        iconsPlus[i].classList.remove("questions-list__question-icon-plus--disactive");
        iconsMinus[i].classList.remove("questions-list__question-icon-minus--active");
    });

    answers[currentIndex].classList.add("questions-list__question-answer--active");
    iconsPlus[currentIndex].classList.add("questions-list__question-icon-plus--disactive");
    iconsMinus[currentIndex].classList.add("questions-list__question-icon-minus--active");
};

window.addEventListener("keydown", changeQuestion);

var languageContent = {
    greek: {
      languageBtn: "EL",
      mainTitle: "Ανανέωση άδειας οδήγησης (κάθε κατηγορίας)",
      pageTitle: "Ανανέωση άδειας οδήγησης (κάθε κατηγορίας)",
      infoTitle: "Πληροφορίες για την ανανέωση άδειας οδήγησης (κάθε κατηγορίας)",
      subTitle1: "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να μάθετε αν έχετε δικαίωμα ανανέωσης της άδειας οδήγησης σας (κάθε κατηγορίας).",
      subTitle2: "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 5 λεπτά.",
      subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
      backButton: "Πίσω",
      nextQuestion: "Επόμενη ερώτηση",
      biggerCursor: "Μεγαλύτερος Δρομέας",
      bigFontSize: "Μεγάλο Κείμενο",
      readAloud: "Ανάγνωση",
      changeContrast: "Αντίθεση",
      readingMask: "Μάσκα Ανάγνωσης",
      footerText: "Αυτό το έργο δημιουργήθηκε για τις ανάγκες του μαθήματος Ηλεκτρονική Διακυβέρνηση κατά τη διάρκεια των προπτυχιακών σπουδών στο Πανεπιστήμιο Μακεδονίας. Η ομάδας μας αποτελείται από τους:",
      and: "και",
      student1: "Σταμούλη Φανή",
      student2: "Μαλουσούδη Παναγιώτη",
      startBtn:"Ας ξεκινήσουμε",
      chooseAnswer: "Επιλέξτε την απάντησή σας",
      oneAnswer: "Μπορείτε να επιλέξετε μόνο μία επιλογή.",
      errorAn: "Λάθος:",
      choose: "Πρέπει να επιλέξετε μια απάντηση",
    },
    english: {
      languageBtn: "EN",
      mainTitle: "Renewal of Driving License (all categories)",
      pageTitle: "Renewal of Driving License (all categories)",
      infoTitle: "Information about the Renewal of Driving License (all categories)",
      subTitle1: "This questionnaire can help you determine if you are eligible to renew your driving license (all categories).",
      subTitle2: "Completing the questionnaire should not take more than 5 minutes.",
      subTitle3: "We will neither store nor share your answers.",
      backButton: "Βack",
      nextQuestion: "Next Question",
      biggerCursor: "Bigger Cursor",
      bigFontSize:" Big Font Size",
      readAloud: "Read Aloud",
      changeContrast:" Change Contrast",
      readingMask:" Reading Mask",
      footerText: "This project was created for the needs of the course Electronic Governance during undergraduate studies at the University of Macedonia. Our team consists of:",
      and: "and",
      student1: "Stamouli Fani",
      student2: "Malousoudis Panagiotis",
      startBtn:"Let's start",
      chooseAnswer: "Choose your answer",
      oneAnswer: "You can choose only one option.",
      errorAn: "Error:",
      choose: "You must choose one option",
    }
};
  
// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
    currentLanguage = currentLanguage === "greek" ? "english" : "greek";
    localStorage.setItem("preferredLanguage", currentLanguage);
    updateContent();
}

function updateContent() {
    var components = document.querySelectorAll(".language-component");
     
    components.forEach(function (component) {
        var componentName = component.dataset.component;
        component.textContent = languageContent[currentLanguage][componentName];
    });
}

// Initialize the content based on the selected language
updateContent();
dashboard.js
function runMatchTest() {

    let workerSkills = [
        "writing",
        "marketing",
        "social media"
    ];

    let opportunitySkills = [
        "social media",
        "marketing"
    ];

    let matches = 0;

    workerSkills.forEach(skill => {

        if (opportunitySkills.includes(skill)) {
            matches++;
        }

    });

    let score = Math.round(
        (matches / opportunitySkills.length) * 100
    );

    document.getElementById("match-result").innerHTML =
        "HumanityOS Match Score: " + score + "%";

}
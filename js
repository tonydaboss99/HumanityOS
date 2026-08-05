dashboard.html
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

    workerSkills.forEach(function(skill) {

        if (opportunitySkills.includes(skill)) {
            matches++;
        }

    });

    let score = Math.round(
        (matches / opportunitySkills.length) * 100
    );

    let result = document.getElementById("match-result");

    if (result) {
        result.innerHTML =
            "HumanityOS™ Match Score: " + score + "%";
    } else {
        alert(
            "HumanityOS™ Match Score: " + score + "%"
        );
    }

}
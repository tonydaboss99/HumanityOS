jobs.js
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
fetch("data/opportunities.json")
.then(response => response.json())
.then(opportunities => {

    let jobsList = document.getElementById("jobs-list");

    jobsList.innerHTML = "";

    opportunities.forEach(job => {

        let jobCard = document.createElement("div");

        jobCard.innerHTML = `
            <h2>${job.title}</h2>

            <p>Type: ${job.type}</p>

            <p>
            Skills: ${job.skills.join(", ")}
            </p>

            <p>${job.description}</p>

            <hr>
        `;

        jobsList.appendChild(jobCard);

    });

})
.catch(error => {

    document.getElementById("jobs-list").innerHTML =
    "Unable to load opportunities.";

    console.log(error);

});
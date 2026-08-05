fetch("./data/opportunities.json")
.then(response => {

    if (!response.ok) {
        throw new Error("load opportunities");
    }

    return response.json();

})
.then(opportunities => {

    let jobsList = document.getElementById("jobs-list");

    jobsList.innerHTML = "";

    opportunities.forEach(job => {

        jobsList.innerHTML += `

        <div class="job-card">

            <h2>${job.title}</h2>

            <p>
            <strong>Type:</strong>$job.type}
            </p>

            <p>
            <strong>Skills:</strong>
            ${job.skills.join(", ")}
            </p>

            <p>
            ${job.description}
            </p>

        </div>

        <hr>

        `;

    });

})
.catch(error => {

    document.getElementById("jobs-list").innerHTML =
    "load opportunities.";

    console.log(error);

});
worker-profile.js
function createWorkerProfile() {

    const worker = {
        id: Date.now(),

        name: document.getElementById("worker-name").value,

        email: document.getElementById("worker-email").value,

        skills: document.getElementById("worker-skills").value,

        interests: document.getElementById("worker-interests").value,

        experience: document.getElementById("worker-experience").value,

        availability: document.getElementById("worker-hours").value
    };


    console.log(worker);

    alert(
        "HumanityOS™ profile created for " + worker.name
    );

}
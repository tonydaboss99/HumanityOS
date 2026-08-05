fetch("./data/opportunities.json")
.then(response => {

    if (!response.ok) {
        throw new Error("Unable to load opportunities");
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
    "Unable to load opportunities.";

    console.log(error);

});
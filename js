fetch("./data/opportunities.json")
.then(response => {
    if (!response.ok) {
        throw new Error("File not found: " + response.status);
    }
    return response.json();
})
.then(opportunities => {

    const jobsList = document.getElementById("jobs-list");

    jobsList.innerHTML = "";

    opportunities.forEach(job => {

        jobsList.innerHTML += `
            <h2>${job.title}</h2>
            <p>Type: ${job.type}</p>
            <p>Skills: ${job.skills.join(", ")}</p>
            <p>${job.description}</p>
            <hr>
        `;

    });

})
.catch(error => {

    document.getElementById("jobs-list").innerHTML =
    error.message;

});
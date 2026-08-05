# HumanityOS Data Architecture

## Worker Data
Stores:
- Skills
- Interests
- Experience
- Availability

## Business Data
Stores:
- Company information
- Problems
- Required skills

## Opportunity Data
Stores:
- Job details
- Requirements
- Budget

## Future Automation

The system will:
1. Collect user information
2. Store data
3. Analyze skills
4. Recommend matches
matching-engine.js
function matchWorker(workerSkills, opportunitySkills) {

    let matches = 0;

    workerSkills.forEach(skill => {

        if (opportunitySkills.includes(skill)) {
            matches++;
        }

    });

    let score = (matches / opportunitySkills.length) * 100;

    return Math.round(score);

}


let worker = [
    "writing",
    "marketing",
    "social media"
];


let opportunity = [
    "social media",
    "marketing"
];


let result = matchWorker(worker, opportunity);


console.log("HumanityOS Match Score: " + result + "%");
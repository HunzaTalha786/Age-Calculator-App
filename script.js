function calculateAge() {
    let currentYear = new Date().getFullYear(); 
    let birthYear = parseInt(document.getElementById("birthYear").value); 
    let age1 = currentYear - birthYear; 
    let age2 = age1 - 1; 

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <strong>They are either ${age2} or ${age1} years old.</strong>
    `;
}
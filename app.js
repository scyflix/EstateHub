let getproperty = JSON.parse(localStorage.getItem("properties")) || [];
localStorage.setItem("properties", JSON.stringify(getproperty));

function renderTable() {
    const tbody = document.getElementById("property-table-body");
    tbody.innerHTML = "";
    getproperty.forEach((property, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${property.type}</td>
         <td>${property.owner}</td>
          <td>${property.status}</td>
           <td>${property.rent}</td>
            <td><button onclick="viewProperty(${index})">View</button></td>
        `;
        tbody.appendChild(row);
    });
}

function viewProperty(index) {
    const selectedProperty = getproperty[index];
    localStorage.setItem("viewProperty", JSON.stringify(selectedProperty)); // fixed key
    window.location.href = "view-property.html";
}


const propertyForm = document.getElementById("propertyForm");
propertyForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const type = document.getElementById("type").value;
    const owner = document.getElementById("owner").value;
    const status = document.getElementById("status").value;
    const rent = document.getElementById("rent").value;
    const expiry = document.getElementById("expiry").value;
    const tenants = document.getElementById("tenants").value;
    const description = document.getElementById("description").value;
    
    const newProperty = {
        type: type,
        owner: owner,
        status: status,
        rent: rent,
        leaseExpiry: expiry,
        tenants: tenants,
        description: description
    };
    getproperty.push(newProperty);
    localStorage.setItem("properties", JSON.stringify(getproperty));
    window.location.href = "home.html"; 
});
document.addEventListener("DOMContentLoaded", renderTable);
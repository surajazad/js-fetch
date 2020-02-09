// ## GET Requests

// ### Easy: Get JSON from a URL


fetch('https://flipkart-configuration-table.now.sh/api')
.then(response => response.json())
.then(data => {
    debugger;
  console.log(data) // Prints result from `response.json()` in getRequest
  data.config.forEach(element => {
    newRow(element);
  });
})
.catch(error => console.error(error));

// create Input (el)

function createInput (el) {

    var item = document.createElement('input');
    item.type = el.type;
    item.id = "";
    item.value = el.defaultValue;
    switch (el.type) {
        
        case "text" : 
        break;
        case "checkbox":
            item.checked = el.defaultValue;
        break;

        default:
            break;
    }
    return item.outerHTML;
}

// create divs

function getInnerHTML (item) {
    var iHtml = 
        `<div class="mSelect">${createInput({type: "checkbox", defaultValue: item.selected})}</div>
            <div class="mLabel">${item.label}</div>
                <div class="mInput">${createInput({type: item.field.type, defaultValue: item.field.defaultValue })}</div>
                    <div class="mdescription">${item.description}</div>`;
    return iHtml;
}

// createTable
function newRow (record) {
    var newDiv = document.createElement("div");
    debugger;
    newDiv.innerHTML = getInnerHTML(record);
    var el = document.getElementById("flip-table");
    el.appendChild(newDiv);
}
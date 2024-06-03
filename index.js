
let userInput = ""
let userArray = []
let newValue;
let elementClicked = false;
const errorDiv = document.createElement("div")


// WHEN PAGE RELOADS SUBMITED ELEMENTS RELOAD FROM localStorage
document.addEventListener("DOMContentLoaded", () => {
    let savedItem = localStorage.getItem("item")
    if(savedItem){
        let newSaved = savedItem.split(",", 50)
        console.log("SAVED")
        console.log(savedItem)
        console.log(newSaved)
        var ss = newSaved.map((element) => {
            return (`<div class="list-item">
                        <p class="item-p">${element}</p>
                        <div class="icons-div">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
                                class="bi bi-pencil-square" viewBox="0 0 16 16" id="edit-icon">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
                                class="bi bi-trash3" viewBox="0 0 16 16" id="delete-icon" class="delete-icon">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5
                                1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0
                                0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1
                                .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                        </div>
                    </div>`)
        })
        ss = ss.join("")
        document.getElementById("section-items").innerHTML = ss
    } else {
        console.log("No saved data in local storage yet")
    }   
    var itemToBeDeleted = document.querySelectorAll(".list-item")
    for(let k = 0; k < itemToBeDeleted.length; k++){
        var iconToDeleteDiv = document.querySelectorAll(".bi-trash3")
        
        if(itemToBeDeleted[k] && iconToDeleteDiv[k]){
            console.log("HEY 1")
            iconToDeleteDiv[k].addEventListener("click", () => {
                console.log("HEY 2")
                localStorage.removeItem(itemToBeDeleted[k])
                itemToBeDeleted[k].remove()
                
            })
        }
    }
})


// WHEN CLICK ON THE SUBMIT BUTTON
document.getElementById("submit-item").addEventListener("click", () => {
    userInput = document.getElementById("add-item").value;
    asyncCall()
    //document.getElementById("add-item").value = "";
})

function createItemsDynamically() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("YEAH")
            if(userInput == ""){
                userArray == []
                const errorContent = document.createTextNode("Please insert a value!")
                errorDiv.appendChild(errorContent)
                errorDiv.style.color = "red"
                const sectionItems = document.getElementById("section-items")
                document.body.insertBefore(errorDiv, sectionItems)
                setTimeout(() => {
                    errorContent.textContent = ""
                }, 1000)
                // when clicked again without placing a value should not create another error

                throw Error("No value given, expected a string")
            } else {
                userArray.push(userInput)
                var items = userArray.map((item) => {
                    return (`<div class="list-item">
                    <p class="item-p">${item}</p>
                    <div class="icons-div">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
                            class="bi bi-pencil-square" viewBox="0 0 16 16" id="edit-icon">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" 
                            class="bi bi-trash3" viewBox="0 0 16 16" id="delete-icon" class="delete-icon">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5
                            1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0
                            0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1
                            .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                    </div>
                </div>`)
                })
                items = items.join("");
                document.getElementById("section-items").innerHTML = items; 
                errorDiv.remove()
                setTimeout(() => {
                    localStorage.setItem("item", userArray)
                }, 1000)
                console.log(userArray)
            }
        }, 100)
    })
    
}

// DELETE ITEMS USING THE DELETE ICON
async function asyncCall() {

    const result = await createItemsDynamically()
    console.log(result)
    asyncDelete()
    asyncEdit()
}

async function asyncDelete() {

    var itemToBeDeleted = document.querySelectorAll(".list-item")
    for(let k = 0; k < itemToBeDeleted.length; k++){
        var iconToDeleteDiv = document.querySelectorAll(".bi-trash3")
        if(itemToBeDeleted[k] && iconToDeleteDiv[k]){
            console.log("HEY 1")
            iconToDeleteDiv[k].addEventListener("click", () => {
                //localStorage.removeItem(item[k]) remove from localStorage any item that gets deleted
                itemToBeDeleted[k].remove()
            })
            
        } else {
            console.log("NONE EXISTANT")
        }
     // here add code to check if all items are deleted one by one, then when a new item is added should be the first and not keep the previous too
    } 
}

// EDIT ITEMS USING THE EDIT ICON

async function asyncEdit() {

    

    var iconToEditDiv = document.querySelectorAll(".bi-pencil-square");
    var itemToBeEdited = document.querySelectorAll(".item-p");
    
    for(let i = 0; i < itemToBeEdited.length; i++){
        if(itemToBeEdited[i] && iconToEditDiv[i]){
            iconToEditDiv[i].addEventListener("click", () => {
                elementClicked = true;

                if(elementClicked === true){

                    document.getElementById("submit-item").value = "Edit"; // change to submit again
                    console.log("HEY 2")
                    document.getElementById("add-item").value = itemToBeEdited[i].textContent;

                    console.log("HEY 4")

                    document.getElementById("submit-item").addEventListener("click", () => {
                        
                        itemToBeEdited[i].remove()
                        let newPItem = document.getElementById("add-item").value;
                        itemToBeEdited[i].innerHTML = newPItem;
                        document.getElementById("submit-item").value = "Submit";
                    })
                    elementClicked = false;
                }

            })  
        } 
    }
}







// DELETE ALL ITEMS USING Clear Items
document.getElementById("clear-items").addEventListener("click", () => {
    
    let allItems = document.querySelectorAll(".list-item");
    allItems.forEach((item) => {
        item.remove()
    })
    userArray = [];
    document.getElementById("add-item").value = "";
    localStorage.clear("item")
})
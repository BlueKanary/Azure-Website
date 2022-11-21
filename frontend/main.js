// Website by Kaiden Gwynne

Window.addEventListiner('DOMContentLoaded', (event) =>{
    getVisitorCount();
})

const functionApi = '';

const getVisitorCount = () => {
    let count = -11;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Function API was called");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}
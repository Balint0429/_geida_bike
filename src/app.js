const doc={
    g_tbody: document.querySelector('#gep_tbody')
};
const state={
    host:  'http://localhost:8000/',
    bikes: []
};
window.addEventListener('load', ()=>{
    init();
});

function init(){
    getBikes();
}
function getBikes(){
    let endpoint ='bikes';
    let url = state.host + endpoint;
    console.log('ll')
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        state.bikes=result;
        render();
    });
}
function render(){
    var row ='';
    state.bikes.forEach(bike => {
        var row = `
        <tr>
            <td>${bike.id}</td>
            <td>${bike.name}</td>
            <td>${bike.wheel}</td>
            <td>${bike.usage}</td>
            <td>${bike.price}</td>
        </tr>
        `;
        row += row;
        console.log(bike.name)
    })
    doc.g_tbody.innerHTML=row;
}



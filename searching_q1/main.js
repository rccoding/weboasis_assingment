const search=document.getElementById('search');
const matchL=document.getElementById('matchL');  

const searchState=async searchText=>{
    const res=await fetch('data.json');
    const states=await res.json();
    
    let matches=states.filter(state=>{
        const regex= new RegExp(`${searchText}`,'gi');
        if(searchText.length > 0){
            return state.name.match(regex) || state.description.match(regex);
        }
        else{
            return matchL.innerHtml=" ";
        }
    });
    
    out(matches);
};
const out=matches=>{
    if(matches.length>0){
        const ans=matches.map(match=> `
        <div><h1>${match.name}</h4>
            <h2>${match.description}</h3>
            <h3>${match.price}</h2>
        </div>
        `).join('');
        matchL.innerHTML=ans;
    }
}

search.addEventListener('input',()=>searchState(search.value))
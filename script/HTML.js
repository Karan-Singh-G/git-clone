const fetchdata = async () => {
    let res = await fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:html`
    );
    let data = await res.json();
    
   
    showResult(data.items)
  };
  fetchdata();

  function showResult(data){
    let container=document.getElementById("container");
    console.log(data)
    data.map((r)=>{
        
        container.innerHTML+=`
        <div id="card">
        <div id="image_div">
            <img src="${r.owner.avatar_url}" alt="">
        </div>
        <div id="repository_name">${r.name}</div>
        <div id="language_name">${r.language}</div>
        <div id="start_fork">
            <div id="star">
                <div id="star_img"><i class="fa-solid fa-star"></i></div>
                <div id="star_written">${r.stargazers_count} stars</div>
            </div>
            <div id="fork">
                <div id="fork_img"><i class="fa-solid fa-code-fork"></i></div>
                <div id="fork_written">${r.forks} forks</div>
            </div>
        </div>
        `
    })
  }
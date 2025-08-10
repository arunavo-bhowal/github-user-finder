let searchBtn = document.querySelector(".searchBtn");
let userinp = document.querySelector(".userinp");
let card = document.querySelector(".card");


function getProfile(username){
    return fetch(`https://api.github.com/users/${username}`).then((raw)=>{
        if(!raw.ok) throw new error ("User not found.")
        return raw.json();
        
    })
}

function getRepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((raw)=>{
        if(!raw.ok) throw new error("Failed to fetch repos...")
        return raw.json();
    })
}

function decorateProfileData(deatils){
    //console.log(deatils)
    let  data = `<img src="${deatils.avatar_url}" alt="GitHub Avatar" 
                 class="flex-shrink-0 w-48 h-48 rounded-full border-4 border-[#ff6f91] object-cover" />

            <div class="text-left w-full">
                <!-- Name & Username -->
                <h2 class="text-3xl font-bold text-white mb-2">${deatils.name}</h2>
                <p class="text-gray-400 text-lg mb-4">@${deatils.login}</p>

                <!-- Stats -->
                <div class="flex gap-8 mb-6">
                    <span class="text-[#ff6f91] font-semibold">Repos: <span class="text-white">${deatils.public_repos}</span></span>
                    <span class="text-[#ff6f91] font-semibold">Followers: <span class="text-white">${deatils.followers}</span></span>
                    <span class="text-[#ff6f91] font-semibold">Following: <span class="text-white">${deatils.following}</span></span>
                </div>

                <!-- Bio -->
                <p class="text-gray-300 mb-6"><span class="text-[#ff6f91] font-semibold">Bio: <span class="text-white">${deatils.bio ? deatils.bio : "N/A"}</p>

                <!-- Location & Blog -->
                <div class="text-gray-400 space-y-2 flex gap-8">
                    <span class="text-[#ff6f91] font-semibold">Location: <span class="text-white">${deatils.location ? deatils.location : "N/A"}</span></span>
                    <span class="text-[#ff6f91] font-semibold">Blog: <span class="text-white"><a href="${deatils.blog ? deatils.blog : "#"}" target="_blank" class=hover:underline>${deatils.blog ? deatils.blog : "N/A"}</a></span></span>
        
                </div>
            </div>
        </div>`
        card.innerHTML = data;
}





searchBtn.addEventListener("click", function(){
    let username = userinp.value.trim();
    if(username.length > 0 ){
        getProfile(username).then((data)=>{
            decorateProfileData(data);
        })
    }
    else{
        alert("Enter a correct username.");
    }
})
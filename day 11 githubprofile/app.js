const apiBaseURL =`https://api.github.com/users`;

const errorMessage = (status) => {
  const messageDiv = document.querySelector('#message');

  let errmsg =``
  if(status === 404) {
    errmsg = `<div class =" alert  alert-danger  text -center">Profile does'nt exist.</div>`;
  }
  messageDiv.innerHTML = errmsg;
  setTimeout(() =>(messageDiv.innerHTML =``), 6000);
};
const getGitHubProfile = async (login) => {
    try{
    const response = await fetch(`${apiBaseURL}/${login}`);
       if(response.status !== 200) {
        if(response.status === 404){
            errorMessage(response.status);
        }
        new Error(`somenthing went wrong !  status code ${response.status}`);
       }

       const data =  await response.json();
       return data;
    }
    catch(error){
        console.log(error);
    }
};

// get gitrepos
const getGitRepos = async(login)=>{
  try{
    const response = await fetch(`${apiBaseURL}/${login}/repos`);
       if(response.status !== 200) {
  
        new Error(`somenthing went wrong !  status code ${response.status}`);
       }

       const data =  await response.json();
       return data;
    }
    catch(error){
        console.log(error);
    }
};



const renderProfile =(data) =>{
  let profilesnippet =``;
  profilesnippet +=  `<div class="profile-userpic">
                        <img src="${data.avatar_url}" class="d-block">
                         </div>
                         <div class="profile-usertitle">`
         if(data.name!==null){          
  profilesnippet += `<div class="profile-usertitle-name">${data.name}</div>`;
         }                     
  profilesnippet += `<div class="profile-usertitle-job">
                            ${data.login}
                            </div>
                        </div>   
                    <div class="portlet light bordered">
                        <!-- START -->
                        <div class="row list-separated profile-stat">
                       <div class="col-md-6 col-sm-6 col-xs-6">
                          <div class="uppercase profile-stat-title">${data.followers}</div>
                          <div class="uppercase profile-stat-text">Followers</div>
                          </div>

                          <div class="col-md-6 col-sm-6 col-xs-6">
                          <div class="uppercase profile-stat-title">${data.following}</div>
                          <div class="uppercase profile-stat-text">Following</div>

                      </div>
                    </div></div>`;
         if(data.bio !==null) {       
                 

    profilesnippet += `<div><h4 class="profile-desc-title">${data.name}</h4>
                      <span class="profile-desc-text">${data.bio}</span></div>`;
         }              
                    profilesnippet += `</div><div class="margin-top-20 profile-desc-link">
        }
                    
        profilesnippet += `<div>
                    

  document.querySelector('#profile').innerHTML = profilesnippet;
};

      // list git repos
      const listRepos = (repos) => {
        let reposList =``;
        
        if(repos.length>0){
          repos.foreach(repos=>{
            reposlist =` </li><li class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6">
            <div class="card" style="width: 22.5rem;">
                <div class="card-body">
                <h5 class="card-title"><a href="${repo.html_url}"></h5>
                <h5 class="card-title"><a href="">${repos.name}/a></h5>
                <p class="card-text"></p>
                <p><i class="fas fa-circle javascript"></i>${repos.language} <i class="far fa-star"></i> 1</p>
                

                </div>
                </li>`;

          });
        }
        document.querySelector('#repos').innerHTML = reposlist;
      };
     
document.addEventListener("DOMContentLoaded", () =>{

 const  searchForm = document.querySelector("#searchForm");
 searchForm.addEventListener('submit' , async (e) =>{
    e.preventDefault();
    const searchInput  = document.querySelector ("#searchInput");
    const gitHubLogin = searchInput.value.trim();
if(gitHubLogin.length > 0) {
     const userProfile = await getGitHubProfile(gitHubLogin);
     if(userProfile.login){
      const gitRepos = await getGitRepos(gitHubLogin);
     renderProfile(userProfile);
     listRepos(gitRepos);
        document.querySelector("searchblock").getElementsByClassName.display ="none";
       document.querySelector("profile").getElementsByClassName.display ="block";
     }
}

 });

})
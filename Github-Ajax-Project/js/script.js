document.getElementById("btnSearch").onclick = function(){
    console.log("Fetching...");
    
    var userName = document.getElementById("txtUser").value;

    if(!userName || userName == ""){
        userName = "mindyBarrs"
    }

    var xttp = new XMLHttpRequest();

    xttp.onreadystatechange = function(){
        if(xttp.readyState == 4 && xttp.status == 200){
            var user = JSON.parse(xttp.responseText);
            document.getElementById("profile").innerHTML = `<div class="card">
            <div class="card-header">
                <h2 class="card-title">
                    ${user.name}
                </h2>
            </div>
            
            <div class="card-body">
              <div class="row">
                <div class="col-3">
                    <img class="card-img" src="${user.avatar_url}" alt="Card image cap">
                </div>

                <div class="col-9">
                    <div class="btn btn-success">
                        <span class="font-weight-bold">Public Repos</span>
                        <span class="badge badge-light">${user.public_repos}</span>
                    </div>

                    <div class="btn btn-warning">
                        <span class="font-weight-bold">Public Gists</span>
                        <span class="badge badge-light">${user.public_gists}</span>
                    </div>

                    <ul class="list-group mt-3">
                        <li class="list-group-item">
                            <i class="fas fa-globe pr-2"></i> <a href="${user.blog}">${user.blog}</a>
                        </li>

                        <li class="list-group-item">
                            <i class="fas fa-envelope pr-2"></i> ${user.email}
                        </li>
                    </ul>

                    <a href="${user.html_url}" target="blank" class="btn btn-primary mt-3">Go to profile</a>
                </div>
              </div>
            </div>
          </div>`;
        }
    }

    xttp.open("GET", "https://api.github.com/users/"+userName, true);
    xttp.send();
};
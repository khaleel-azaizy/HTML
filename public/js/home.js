const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.username){
        location.href = '/login';
    } else{
        greeting.innerHTML = ` ${sessionStorage.username} Welcome to Travel Diary`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}


function openSidebar() {
    document.getElementById("mySidebar").style.left = "0";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.left = "-250px";
}
function searchTrips(){}

document.getElementById('openSidebarBtn').addEventListener('click', openSidebar);
document.getElementById('searchButton').addEventListener('click', searchTrips);



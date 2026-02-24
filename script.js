
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");



const allCards = document.getElementById("allCards");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById("filtered-section");


function countCalculator(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countCalculator();


// Category toggling
    const allCategory = document.getElementById("allCategory");
    const interviewCategory = document.getElementById("interviewCategory");
    const rejectedCategory = document.getElementById("rejectedCategory");
// step 1;
function toggleStyle(id) {
    // adding gray bg for all
    allCategory.classList.add('bg-white', 'text-black');
    interviewCategory.classList.add('bg-white', 'text-black');
    rejectedCategory.classList.add('bg-white', 'text-black');

    // if any button has black then remove
    allCategory.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewCategory.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedCategory.classList.remove('bg-[#3B82F6]', 'text-white');

    // console.log(id);
    const selected = document.getElementById(id);//this is the button that clicked for filter

    currentStatus = id;
    console.log(currentStatus);
    // // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-[#ffffff]');
    // step 1 finish

    if(id == 'interviewCategory'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview ()
    } else if (id == 'allCategory'){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }else if (id == 'rejectedCategory'){
         allCards.classList.add('hidden');
         filterSection.classList.remove('hidden');
         renderReject ()
    }

}


mainContainer.addEventListener('click', function(event){

   if(event.target.classList.contains('btn-interview')){

    const parentNode = event.target.closest('.flex');

    const companyName = parentNode.querySelector('.companyName').innerText;
    const postName = parentNode.querySelector('.postName').innerText;
    const jobDetails = parentNode.querySelector('.jobDetails').innerText;
    const jobExperience = parentNode.querySelector('.jobExperience').innerText;

    parentNode.querySelector('.status').innerText = 'Interviewed';

    const cardInfo = {
        companyName,
        postName,
        jobDetails,
        status: 'Interviewed',
        jobExperience
    }

    const interviewExist = interviewList.find(item => item.companyName === companyName);

    if(!interviewExist){
        interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    if(currentStatus === "interviewCategory"){
        renderInterview();
    }

    if(currentStatus === "rejectedCategory"){
        renderReject();
    }

    countCalculator();

    // renderInterview ()

    } else if(event.target.classList.contains('btn-rejected')){

    const parentNode = event.target.closest('.flex');

    const companyName = parentNode.querySelector('.companyName').innerText;
    const postName = parentNode.querySelector('.postName').innerText;
    const jobDetails = parentNode.querySelector('.jobDetails').innerText;
    const jobExperience = parentNode.querySelector('.jobExperience').innerText;

    parentNode.querySelector('.status').innerText = 'Rejected';

    const cardInfo = {
        companyName,
        postName,
        jobDetails,
        status: 'Rejected',
        jobExperience
    }

    const rejectedExist = rejectedList.find(item => item.companyName === companyName);

    if(!rejectedExist){
        rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.companyName !== companyName);

    if(currentStatus === "rejectedCategory"){
        renderReject();
    }

    if(currentStatus === "interviewCategory"){
        renderInterview();
    }

    countCalculator();

    // renderReject ();
    } else if(event.target.closest('.delete-btn')){

    const parentNode = event.target.closest('.flex');
    const companyName = parentNode.querySelector('.companyName').innerText;

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    parentNode.remove();

    countCalculator();

    if(currentStatus === "interviewCategory"){
        renderInterview();
    }

    if(currentStatus === "rejectedCategory"){
        renderReject();
    }
}

    
})


function renderInterview (){
    filterSection.innerHTML = '';
    
    for (let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white p-6 rounded-lg'
        div.innerHTML = `
        <div class="card">
                <h2 class="companyName font-semibold text-[18px] leading-[26px] mb-1"> ${interview.companyName}</h2>
                <p class="postName text-[#64748B] leading-6 mb-5">${interview.postName}</p>
                <p class="jobDetails text-[#64748B] leading-5 mb-5">${interview.jobDetails}</p>
                <button class="status bg-[#EEF4FF] text-[#002C5C] py-2 px-3 mb-2 rounded-b-lg">${interview.status}</button>
                <p class="jobExperience text-[#323B49] mb-5 leading-5">${interview.jobExperience}</p>
                <button class="btn-interview text-[#10B981] border-[#10B981] border py-2 px-3 mr-2 font-semibold text-[14px]">INTERVIEW</button>
                <button class="btn-rejected text-[#EF4444] border-[#EF4444] border py-2 px-3 mr-2 font-semibold text-[14px]">REJECTED</button>
            </div>
            <div class="delete-btn"><i class="fa-solid fa-trash-can"></i></div>`
        
        filterSection.appendChild(div);
    }
}


function renderReject (){
    filterSection.innerHTML = '';
    
    for (let reject of rejectedList){
        console.log(reject);
        let div = document.createElement('div');
        div.className = 'flex justify-between bg-white p-6 rounded-lg'
        div.innerHTML = `
        <div class="card">
                <h2 class="companyName font-semibold text-[18px] leading-[26px] mb-1"> ${reject.companyName}</h2>
                <p class="postName text-[#64748B] leading-6 mb-5">${reject.postName}</p>
                <p class="jobDetails text-[#64748B] leading-5 mb-5">${reject.jobDetails}</p>
                <button class="status bg-[#EEF4FF] text-[#002C5C] py-2 px-3 mb-2 rounded-b-lg">${reject.status}</button>
                <p class="jobExperience text-[#323B49] mb-5 leading-5">${reject.jobExperience}</p>
                <button class="btn-interview text-[#10B981] border-[#10B981] border py-2 px-3 mr-2 font-semibold text-[14px]">INTERVIEW</button>
                <button class="btn-rejected text-[#EF4444] border-[#EF4444] border py-2 px-3 mr-2 font-semibold text-[14px]">REJECTED</button>
            </div>
            <div class="delete-btn"><i class="fa-solid fa-trash-can"></i></div>`
        
        filterSection.appendChild(div);
    }
}
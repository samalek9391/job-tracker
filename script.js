
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");



const allCards = document.getElementById("allCards");


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
    allCategory.classList.remove('bg-[#3B82F6]');
    interviewCategory.classList.remove('bg-[#3B82F6]');
    rejectedCategory.classList.remove('bg-[#3B82F6]');

    // console.log(id);
    const selected = document.getElementById(id);//this is the button that clicked for filter

    currentStatus = id;
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-white');
    selected.classList.add('bg-[#3B82F6]');
    // step 1 finish

}
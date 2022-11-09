const createKidForm = document.querySelector("#createKid");
createKidForm.addEventListener("submit", e=>{
    e.preventDefault();
    console.log('kid create!');
    console.log('prevented default!');
    const kidObj = {
        name:document.querySelector("#kidName").value,
        picture:document.querySelector("#picture-preview").src,
        star_goal_num:document.querySelector("#kidGoalStar").value,
        goal_award:document.querySelector("#kidAward").value,
    }
    console.log(kidObj);
    fetch("/kids/",{
        method:"POST",
        body:JSON.stringify(kidObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})
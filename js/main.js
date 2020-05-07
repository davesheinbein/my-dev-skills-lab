const skills = []; 


$('#addSkill').on('click', function(e) {
    const newSkill = $('#skills').val();
    skills.push(newSkill)
    render()
});


function render() {
    $('ul').empty()
    skills.forEach((skill, idx) => {
        $('ul').append(`<li><button id=${idx} class="listButton">X</button> ${skill} </li>`)
    });
    $('.listButton').on('click', function(e) {
        // console.log(e.target.id)
        const idx = e.target.id
        skills.splice(idx, 1)
        render()
    });
    
}





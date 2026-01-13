document.getElementById('navbar').style.display = "none"
document.getElementById('questionsSection').style.display = "none"
document.getElementById('learnSection').style.display = "none"

document.getElementById('getStart-btn').addEventListener("click", function (event) {
    event.preventDefault()

    const enterName = document.getElementById('enterName').value;

    const enterPassword = document.getElementById('enterPass').value;
    const convertPassword = parseInt(enterPassword);

    if(enterName !== "" ){
        if (convertPassword === 123456) {

            document.getElementById('headerSection').style.display = "none"
    
            document.getElementById('navbar').style.display = "block"
    
            document.getElementById('questionsSection').style.display = "block"
    
            document.getElementById('footerSection').style.display = "block"
    
            document.getElementById('learnSection').style.display = "block"
    
             Swal.fire({
                title: "অভিনন্দন",
                text: "চলুন আজ নতুন কিছু শেখা যাক",
                icon: "success"
              });
        }
        else {
            alert("Invalid Password");
        }

    }

    else{
        alert("Fill Name Box")
    }
    

})

document.getElementById('logout-btn').addEventListener("click", function (e) {
    e.preventDefault()

    document.getElementById('headerSection').style.display = "flex";

    document.getElementById('navbar').style.display = "none"

    document.getElementById('questionsSection').style.display = "none"
    
    document.getElementById('learnSection').style.display = "none"


})
document.getElementById('logout-btn2').addEventListener("click", function (e) {
    e.preventDefault()

    document.getElementById('headerSection').style.display = "flex";

    document.getElementById('navbar').style.display = "none"

    document.getElementById('questionsSection').style.display = "none"
    
    document.getElementById('learnSection').style.display = "none"


})
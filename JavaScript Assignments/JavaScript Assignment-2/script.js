let n = 0;
const cols = ["s.no", "name", "phone", "email"];
const reset = document.getElementById("reset");
console.log(reset);


const emailInCorrectFormat = (email) => {
    const regex = new RegExp("^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$");
    let el = document.querySelector(".email-error");
    if(!regex.test(email)){
        el.innerHTML = "Please enter a valid email address!!";
        el.hidden = false;
        el.style.color = "#ff0104";
        el.style.fontWeight = "bolder";
        return false;
    }
    el.hidden = true;
    return true;

}


const phoneInCorrectFormat = (phone) => {
    const regex = new RegExp("([1-9][0-9]{9})");
    let el = document.querySelector(".phone-error");
    if(!regex.test(phone)){
        el.innerHTML = "Please enter a valid phone number";
        el.hidden = false;
        el.style.color = "red";
        el.style.fontWeight = "bolder";
        return false;
    }
    el.hidden = true;
    return true;
    
}


const saveData = (data) => {
    n = n+1;
    localStorage.setItem(n, JSON.stringify(data));

    let table = document.querySelector("table")
    let row = document.createElement("tr");
    cols.forEach((colName)=>{
        let cell = document.createElement("td");
        if(colName==="s.no")
            var textNode = document.createTextNode(n);
        else
            var textNode = document.createTextNode(data[colName]);
        cell.appendChild(textNode);
        row.appendChild(cell);
    });

    table.appendChild(row);
    reset.click();
}


const validate = (event)=>{
    // console.log(this);
    event.preventDefault();
    const [name, email, phone] = document.forms[0];
    if(name.value === ""){
        alert("Please enter the name!!");
    }else if(email.value === ""){
        alert("Please enter the email!!");
    }
    else{
        if(!emailInCorrectFormat(email.value)) return false;
        if(phone.value != "") 
            if(!phoneInCorrectFormat(phone.value)) return false;

        const data = {
            "name":name.value,
            "email":email.value,
            "phone":phone.value
        };
        console.log(data);
        saveData(data);
        return true;
    }

}

function addCarto(thu) {
    let trNote = thu.parentElement.parentElement;

    let trNoteClone = trNote.cloneNode(true);
    let thuAdd = trNoteClone.getElementsByTagName("button");
    thuAdd[0].innerText = "Xóa";
    thuAdd[0].setAttribute("onclick", "removeCartItem(this)");
    let carBody = document.getElementById("CartBody");

    carBody.appendChild(trNoteClone);

    let cartTable = document.getElementById("CartItem");
    cartTable.style.display = "table";
    let emtycar = document.getElementById("emtyCar");
    emtycar.style.display = "none";
    let gantotal = document.getElementById("grandTotal");
    gantotal.style.display = "block";

    caculatetotal();

}

function removeCartItem(thu) {
    let trNote = thu.parentElement.parentElement;

    let tbodyNote = trNote.parentElement;
    tbodyNote.removeChild(trNote);

    if (tbodyNote.children.length <= 0){
        let carTable = document.getElementById("CartItem");
        carTable.style.display = "none";
        let emTycar = document.getElementById("emtyCar");
        emTycar.style.display = "block";
        let  granTotal = document.getElementById("grandTotal");
        granTotal.style.display = "none";
        granTotal.childNodes[1].innerText ="0";

    }
    caculatetotal();
}
function caculatetotal() {
    let carItemTable = document.getElementById("CartItem");
    let amountSpan = carItemTable.getElementsByClassName("amount");
    let total = 0;
    for (let element of amountSpan){
        total += Number(element.innerText)
    }
    let totalSpan = document.getElementById("Total");
    totalSpan.innerText = total;
    return total;

}
function showTotal(){
    alert(`Số tiền của bạn cần thanh toán là  :${caculatetotal()}`)
}

function highlight() {
    //Write your code here
var item = document.getElementsByTagName(strong);
	for(let i=0;i<item.length;i++){
		item[i].style.color = "green";
	}

}


function return_normal() {
    //Write your code here
var item = document.getElementsByTagName(strong);
	for(let i=0;i<item.length;i++){
		item[i].style.color = "black";
	}
    
}

// GLOBAL VARIABLES
// make the pages objects
// so we can snatch them later
pages=new Array()
pages[7]="index0.html"
pages[1]="index1.html"
pages[2]="index2.html"
pages[3]="index3.html"
pages[4]="index4.html"
pages[5]="index5.html"
pages[6]="index6.html"
//
// Just define this in case things change.
// We just have to change this and add
// the page to the array above.
maxPages=7
//
// make a function that chooses a random number
//
newPage= function (){return Math.floor(Math.random()*maxPages)+1}
// 
// make a function that redirects the page
//
function switchEm()
{
// seed the first attempt
// with a random page
//
	var strTemp=pages[newPage()];
//
// check for the page in the url of 
// the current page.
//
	while (window.location.href.indexOf(strTemp)!=-1){
//
//  If it's there, pick a new page and loop
//
	strTemp=pages[newPage()]
	}
	window.location.href=strTemp
}
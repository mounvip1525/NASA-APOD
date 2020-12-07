const count=10;
const apiKEY='DEMO_KEY';
const apiURL=`https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`;

let resultsArray=[];

async function getNASAPictures(){
    try{
    const response=await fetch(apiURL);
    const resultsArray=await response.json();
    console.log(resultsArray);
    } catch (error){
        alert("Ummm.Theres some issue with the API probably, load again!");
    }
}
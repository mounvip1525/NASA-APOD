const resultsNav=document.getElementById('results-nav');
const favoritesNav=document.getElementById('favorites-nav');
const imagesContainer=document.querySelector('.images-container');
const savedConfirmation=document.querySelector('.saved-confirmation');
const loader=document.querySelector('.loader');

const count=10;
const apiKEY='NepkK6RcKE95zvlcwzFCq1peCDjaxbEG7Y2NNT9P';
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKEY}&count=${count}`;

let resultsArray=[];

function updateDOM(arr){
    console.log(arr);
    arr.forEach((result)=>{
        const card=document.createElement('div');
        card.classList.add('card');

        const link=document.createElement('a');
        link.href=result.hdurl;
        link.title='View Full Image';
        link.target='_blank';

        const image=document.createElement('img');
        image.src=result.url;
        image.alt='NASA picture of the Day';
        image.loading='lazy';
        image.classList.add('card-img-top');

        const cardBody=document.createElement('div');
        cardBody.classList.add('card-body');
        
        const cardTitle=document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent=result.title;

        const saveText=document.createElement('p');
        saveText.classList.add('clickable');
        saveText.textContent='Add To Favorites';

        const cardText=document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent=result.explanation;

        const footer=document.createElement('small');
        footer.classList.add('text-muted');

        const date=document.createElement('strong');
        date.textContent=result.date;

        const copyrightResult=result.copyright===undefined ? ' ': result.copyright;
        const copyright=document.createElement('span');
        copyright.textContent=` ${copyrightResult}`;

        footer.append(date,copyright);
        cardBody.append(cardTitle,saveText,cardText,footer);
        link.appendChild(image);
        card.append(link,cardBody);
        // console.log(card);
        imagesContainer.appendChild(card);
    });
}
async function getNASAPictures(){
    try{
    const response=await fetch(apiURL);
    const resultsArray=await response.json();
    // console.log(resultsArray);
    updateDOM(resultsArray);
    } catch (error){
        alert("Ummm.There's some issue with the API probably, load again!");
    }
}

getNASAPictures();
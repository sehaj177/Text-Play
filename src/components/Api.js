import React from 'react'


export default function Api(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7602777b8bmshd5fae124a5f2a53p166bc4jsnd9fb5f0c5f63',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    fetch('https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        

      

        
    
}


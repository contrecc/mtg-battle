# MTG BATTLE

This is a personal project I built to work with an API to find Magic: The Gathering cards and create a fun game where users guess which creature is more powerful.

I originally wanted the app to fetch the card data from an API as the user played the game. That way, I could build the project with just a frontend using React. I encountered a few problems here.

# Initial Problems

1) Not all MTG APIs have card data linked to card images. I needed each card fetched to have the card's name, power, toughness, type, and artwork. I needed both at the same time. After searching several APIs, I finally found Scryfall, which contained both.

2) There was no easy way to fetch a random card that was also a creature. Their "/random" API endpoint couldn't add filters. It would be too slow to search for a random card, then check if it's a creature, then either fetch another card or send the card to the frontend. Likewise, I couldn't use their "/search" endpoint to just search for a creature because I couldn't make it a random creature. I would have to specify some parameters (such as creature color, power, or toughness) that would sacrifice the random aspect of it.

# Initial Solution

I created a MongoDB database. I fetched several pages of cards from their "/cards" endpoint. I filtered the results to only accept "creature" types and removed any duplicates. (Magic does frequent reprints of cards, and I don't want a creature to fight itself.)

So now the app will require a backend to deal with requests to the database.

# Backend

I built the backend using Express. I struggled with finding a way to fetch a random entry from the database. I needed a way to fetch two different random cards, as there is a chance of fetching the same card randomly twice. I settled on the helpful NPM package "mongoose-simple-random".

Onto the frontend!

# Frontend

I used Create-React-App to scaffold the frontend. I found a package called "reactstrap", which contains React components outfitted with  Boostrap classes. This should save time on styling.

I created the app as a SPA. I built custom logic to determine which card defeated the other (or if it's a tie). I separated the setState functions into their own files. I also added winStreak to the App component's state to keep track of and display how many wins a user has accumulated.

# Lessons Learned

1) Not all APIs are created equal. Finding the right one that serves your app's needs is half the battle. 

2) Dealing with random database pulls can mean dealing with unexpected image sizes. Many cards had the exact same dimensions, whereas others were unpredictable. It took me awhile to figure out the best approach to format their display for the user, regardless of their size.

3) Abstracting away functionality to stateless components in React makes your code so much cleaner. 

4) It's fun to work on a project when the content is a passion of yours. I got into Magic: The Gathering as a kid, and it was fun to finally build something with it.

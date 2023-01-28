
# Where is waldo project (photo tagging)

# Make project using React to build components

########################################################################

########################################################################

# Structure of project

# App serving as index

# Static Header
Header will contain Logo, shortcuts for "Home", "Leader board", "User score"
<!-- Position : fixed so that the user can check the remaining characters to find. -->

# Landing Page
Set to introduce player to the game and prompt him for new game
Button (onClick) => Game Page

# Game Page
Where the action is.
Need to Implement a Timer container.
Need to implement the characters check-box.

# Leader Board Page
Simple list.

# User scores Page
User times over his rounds.

########################################################################

# The data 
A big picture.
A couple of smaller pictures.
The user that logs in, his time.
Leader-board. As an array surely.
Timer. Depends on the start game. Depends on end game.

########################################################################

# Logic and functionalities

# Navigation
Handled by React.

# User data
Will happen at the end of the round BUT needs a way to keep track of the user score when he reconnects.
Does it have to be by auth?

# Game loop
When user clicks, the backend must check the click, not the frontend.
Timer and a condition to check if all pictures have been clicked.
Timer will be set on the FrontEnd.
When player wins, prompt him to
    Enter a name, connect via Google auth or others
Implement in the container "Game" right-click to display the box characters and let the 
player visualize the characters // make a hint message somewhere

# Make back-end functionalities using Firebase

# large photo with several elements the user must find in order to win
Need a big big picture.
Not sure this is playable on mobile.
User makes selection for each character and gets feedback

# make elements (characters in photo) clickable and get them in a database
When user clicks, a box listing choices must appear

# this should be checked in the back-end
If user clicks on the right character or not

# keep track of how long for the player to identify all characters
On the front-side (check how to keep hackers out of this?)

# once the round is complete, prompt the user to input his name and record the time


########################################################################

########################################################################
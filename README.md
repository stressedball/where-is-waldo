
# Where is waldo project (photo tagging)

# Make project using React to build components

########################################################################

########################################################################

# Structure of project
# Index 
Usage for setting routes
# Static Header
Header will contain Logo, shortcuts for "Home", "Leader board", "User space"
# Landing Page
Set to introduce player to the game and prompt him for new game
# Game Page
Where the action is.
# Leader Board Page
Simple list with a descending order.
# User scores Page
User times.

########################################################################

# The data 
I took out all of the data in the front-end beside the timer!
Firebase will be used to store the areas and pass them to the front-end.
It will also create player session to keep track of his score and all of his other scores.
It will also keep track of the leader-board.

########################################################################

# Logic and functionalities

# Navigation
Handled by React.

# GameLoop
Once the player clicks on start game, the GameBoard component is called from LandingPage.
It requests the data stored in Firebase (areas of the characters to be found) and uploads the image.
The game loop then checks an array of characters and its status (character found or not)
It calls the GameBoard component once the image is loaded to start the timer.

# Make use of Firebase to create sessions and track times


########################################################################

########################################################################
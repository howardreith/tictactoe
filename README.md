Tic Tac Toe game for General Assembly

Technologies used:
HTML, CSS, SCSS, Javascript, AJAX, JQuery

I would also like to note that the three varieties of buttons used on this project employed CSS drawn from this website:
https://freshdesignweb.com/css3-buttons/

Planning:
My initial planning involved breaking down the entire project into as many reasonable small steps as I could imagine. My original steps were as follows:

1. Get a basic board up and running.
2. Divide the board into regions.
3. Prepare listeners for those regions.
4. Make an X appear in the clicked region.
5. Make it so the board alternates between Xs and Os appearing with each click.
6. Make it so the same space cannot be clicked twice (no overlapping letters).
7. Prepare tests that run after every turn that detects if there is a winner.
8. If there is a winner, announce the winner.
9. If there is not a winner and all squares are occupied, announce a draw.
8. If there is a winner or a draw, do not allow additional moves to be made.
9. Create user interface that asks for the names of the players.
10. Track the number of wins by each player.
11. Display the number of wins of each player.
12. Display the number of draws.
13. Add message notifying who's turn it is.
14. Add message for when user clicks an invalid space.
15. Set up the API stuff (username, password, sign out).
16. Beautify.

I more or less followed this procedure, though there were several components I did not realize would be necessary until I came upon them, and certain elements for which I misunderstood the requirements (the API requiring interaction on every move, for example).

I generally did my best to break every problem into as many small, simple problems as I could. For example, when attempting to develop the API for each turn (the most challenging part of the project for me), I started by making a curl script, and after figuring that out, I made a button that would communicate with the API with a static set of variables in the exact same way the curl script did. Once I got that working, I could apply that successful procedure to the code I'd already written for click detection.

The code is generally extremely un-dry. As I continued this project my coding skills improved dramatically and I found myself regretting some of the decisions I made toward the beginning. The entire click detection system is ridiculously bloated with the same code repeated several times. Essentially the same function for communicating the status of each square is repeated twice, once for populating the game on-screen, and once for populating the API. This should be consolidated, but with such limited time remaining I am hesitant to make these changes now.

Aside from being extremely bloated the code seems to be pretty solid and I am not presently aware of any errors that need addressing. It has passed my tests and QA I've done with several colleagues.

Wireframes

Original preliminary wireframe:
https://imgur.com/a/zB0Vi3W

Revised wireframe of initial page:
https://imgur.com/a/Uys1STc

Revise wireframe of main game page:
https://imgur.com/a/mgDByVT

User stories used in design of game:

1. I want the game to respond readily to my clicks.
2. I want the game to keep score.
3. I want the game to keep track of my win/loss record online.
4. I want the game to be aesthertically appealing.
5. I want the game to notify me who's turn it is.
6. I want the game's notifications to not interfere with my playing the game (ie. no popups)

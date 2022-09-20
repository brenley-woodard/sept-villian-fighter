## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

![](./assets/wire-frame.png)

## HTML

-   section for scoreboard message
-   section for fighter & damage info messages (results)
-   section for fairy card
    -   p for fairy hp
    -   image for fairy
-   section for villians
    -   form for adding villian
    -   ul for villians
    -   button to remove dead villians

## JS...

## message section

    -   state: message #1 'No villians have been defeated' (scoreboard)
        Display Changes...
        -   function that displays # of villians killed
    -   state: message #2 'Click on a villian to attack with fairy dust' ) (results)
        Display Changes...
        -   function that displays player damage & villian HP

## fairy card

    -   state: max HP / alive fairy image
        Display Changes...
        -   function that...
        1. displays player HP by doing math
        2. uses logic to determine if player is alive/dead
        3. displays correct image based on HP

## villian section

    -   state: empty 'add villian' input
    -   state: 3 default villians with given HP
    -   state: remove dead villian button
        State Changes...
        -   event listener that adds randomly generated data to villian list
        -   adds a new message to results section
        -   redisplay villian / redisplay result
        -   event listener that removes dead villians
        Display Changes...
        - function that...
        1. renders a new villian / appends to list
        2. contains event listener so when dead goblin clicked it returns a message of inability
        3. uses random utils to compute player & goblin damage
        4. results display that determines outcome of attacks and sends messages to results
    *** CALL DISPLAY FUNCTIONS

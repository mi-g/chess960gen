chess960gen
===========

Generates Chess960 starting positions.

       chess960Gen([seed])

where *seed* is an optional integer between 0 and 959.
returns an array of 8 letters (N,B,R,Q,K) corresponding to the starting position.

Use *.join("")* to turn the array into a 8-characters string:

    chess960Gen().join("");

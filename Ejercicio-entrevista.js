/*

The night sky can be modeled as an infinite 2d plane. there are N stars at distinc position on this plane, the ith of which is at coordinates(x, y).

A boomerang constellation is pair of distinct equal-lenght line segments which share a single endpoint, such that both endpoints of each segment coincide with a start's location.

Two boomerang constellations are distinct if they're not made up of the same unordered pair of line segments. How many distinct boomerang constellations con you spot?

Input

Input begins with an integer T, the number of nights on which you look out at the sky. For each night, there is first a line containing the integer N. Then, N lines follow, the ith of which contains the space-separated integers X and Y.

Output

For the ith night, print a line containing "Case#i: "followed by the numbers of boomerang constellations in the night sky.

Constraints 

1 < T < 50
1 < N < 2,000
-10.000 < X,  Y  < 10,000

Explanations of sample 

On the first night, every pair of stars is a unique distance apart, so there are no boomerang constellations. On  the second night, there are 4 boomerang contellations. One of them consists of the line segments (0,0)-(0,2) and (0,2)-(0,4) 


*/
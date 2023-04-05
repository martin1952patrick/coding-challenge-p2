// There are a number of tiles on the floor, each numbered with a different 
// non-negative  integer. Treat this set of tiles as an array.  You are 
// initially standing on the first tile. Each tile in the set represent your 
// maximum jumping distance at that position. Find out if you can reach the last tile


function canReachLastTile(tiles) {
    // Initialize the maximum reachable distance to the first tile
    let maxReachableDistance = tiles[0];
  
    // Iterate through the tiles
    for (let i = 1; i < tiles.length; i++) {
      // Update the maximum reachable distance if necessary
      if (i + tiles[i] > maxReachableDistance) {
        maxReachableDistance = i + tiles[i];
      }
  
      // Return true if the maximum reachable distance exceeds the last tile
      if (maxReachableDistance >= tiles.length - 1) {
        return true;
      }
    }
  
    // Return false if we reach the end of the iteration
    return false;
  }

  
// To solve this problem, you can use a simple iterative approach. Starting 
// from the first tile, you can keep track of the maximum distance you can reach
// at each step by iterating through the tiles and updating the maximum distance 
// as you go. If at any point the maximum distance exceeds the last tile, you can 
// return true to indicate that you can reach the last tile. If you reach the end 
// of the iteration and the maximum distance has not exceeded the last tile, you can 
// return false to indicate that you cannot reach the last tile.



// This function takes an array of tiles as input and returns a boolean value indicating whether you can reach the last tile. It works by iterating through the tiles, updating the maximum reachable distance at each step, and returning true if the maximum distance exceeds the last tile.

// For example, if you call canReachLastTile([2, 3, 1, 1, 4]), the function will return true, because you can reach the last tile by jumping from the first tile to the third tile and then to the fifth tile.
function add(x, y, z) { 
  // TODO implement me
  if (!z) {
    return x + y; 
  }
  else {
    return x + y + z;
  }
}

add(2, 4); // 6
add(1, 5, 1); // 7
add(1, 1, 1, 1000, 4400); // 3


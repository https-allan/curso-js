function recursiva(max) {
  console.log(max);

  if (max >= 11297) return;
  max++;

  recursiva(max);
}

recursiva(0);

function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"]; // add fragment into sentece
    return sentence;
  }
  console.log(spreadOut());
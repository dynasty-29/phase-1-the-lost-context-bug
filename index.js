const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};
//origin of error
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   this.signatories.forEach(function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

// printCard.call(messageConfig);

//Solution 1: Use a thisArg to avoid the lost context bug
const printnCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

    this.signatories.forEach(function (signatory) {
      const message = `${this.closing[signatory]}, ${signatory}`;
      console.log(message);
      }, this);
};

printnCard.call(messageConfig);

//Solution 1: Use the `bind` method to Preserve the Lost Context
const printtCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  const contextBoundForEachExpr = function (signatory) {
    const message = `${this.closing[signatory]}, ${signatory}`;
    console.log(message);
  }.bind(this);

  this.signatories.forEach(contextBoundForEachExpr);
};

printtCard.call(messageConfig);

//Solution 2: Use a Closure to Regain Access to the Lost Context
const printcCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  const outerContext = this;

  this.signatories.forEach(function (signatory) {
    const message = `${outerContext.closing[signatory]}, ${signatory}`;
    console.log(message);
  });
};

printcCard.call(messageConfig);

//solution 3: using arrow functions
const printdCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);
  // Wow! Elegant! And notice the arrow function's `this` is the same `this`
  // that printCard has; specifically, the `thisArg` that was passed to it
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printdCard.call(messageConfig);

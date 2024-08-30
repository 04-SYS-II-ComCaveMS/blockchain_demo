// Import
const Blockchain = require("./blockchain");
const Block = require("./block");

// /***  Test der Block-Funktionalität  */
// const block = new Block("aktuelle zeit","hash1","hash2","Blockdaten");
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten");
// console.log(testBlock.toString());

const chain = new Blockchain();
chain.addBlock("1034,98€ von Sven");
console.log(chain);

chain.addBlock("890,01€ von Saba");
console.log(chain);

chain.addBlock("20,00€ von Saba, 75,00€ von Soraya");
console.log(chain);
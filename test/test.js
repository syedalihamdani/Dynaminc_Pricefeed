const { expect } = require("chai");
const { ethers,waffle } = require("hardhat");
const provider=waffle.provider;

describe("DynamicPricefeed", function () {
  beforeEach("DynamicPricefeed contract for unit testing",async function(){
    [this.account1,this.account2,this.account3,this.account4,this.account5,this.account6,this.account7,this.account8,
      this.account9,this.account10,this.account11,this.account12,this.account13,this.account14,this.account15,this.account16,
      this.account17,this.account18,this.account19,this.account20]=await ethers.getSigners();
      const DynamicPricefeed = await ethers.getContractFactory("DynamicPricefeed");
    this.deploedDynamicPricefeed = await DynamicPricefeed.deploy();
    await this.deploedDynamicPricefeed.deployed();
  })
  it("DynamicPricefeed:getPrice", async function () {
    let getPrice=await this.deploedDynamicPricefeed.getPrice("ss");
    // console.log(getPrice);
    // expect(DynamicPricefeed).to.equal("Hello, world!");
  });

  // it("Should return the greeting", async function () {
  //   await expect(this.deploedGreeter.setGreeting("no")).to.be.revertedWith("Greeter: 10 minutes has not been passed")
  // });

  // it("Should return the greeting", async function () {
  //   await network.provider.send("evm_increaseTime", [600]);
  //   await this.deploedGreeter.setGreeting("no");
  //   let greet=await this.deploedGreeter.greet();
  //   expect(greet).to.equal("no");
  // });
});

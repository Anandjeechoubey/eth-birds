// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Birds is ERC721 {
    constructor() ERC721("Bird", "BIRD") {}

    // struct for a bird
    struct Bird {
        string name;
        uint256 age;
        string color;
        uint256 power;
        uint256 health;
    }

    // array of birds
    Bird[] public birds;

    // mapping of bird id to owner address
    mapping(uint256 => address) public birdToOwner;

    // mapping of owner address to number of birds
    mapping(address => uint256) public ownerBirdCount;

    // event for when a bird is created
    event BirdCreated(
        uint256 id,
        string name,
        uint256 age,
        string color,
        uint256 power,
        uint256 health
    );

    // onlyOwner modifier
    modifier onlyOwner(uint256 _id) {
        require(msg.sender == birdToOwner[_id]);
        _;
    }

    // function to create a bird
    function createBird(
        string memory _name,
        uint256 _age,
        string memory _color,
        uint256 _power,
        uint256 _health
    ) internal {
        // create a bird
        Bird memory _bird = Bird(_name, _age, _color, _power, _health);

        // push the bird to the birds array
        birds.push(_bird);

        // get the id of the bird
        uint256 _id = birds.length - 1;

        // set the owner of the bird to the sender
        birdToOwner[_id] = msg.sender;

        // increment the number of birds the owner has
        ownerBirdCount[msg.sender]++;

        // emit the event
        emit BirdCreated(_id, _name, _age, _color, _power, _health);
    }

    // function to mint a bird
    function mintBird(
        string memory _name,
        uint256 _age,
        string memory _color,
        uint256 _power,
        uint256 _health
    ) public {
        // create a bird
        Bird memory _bird = Bird(_name, _age, _color, _power, _health);

        // push the bird to the birds array
        birds.push(_bird);

        // get the id of the bird
        uint256 _id = birds.length - 1;

        // mint the bird
        _mint(msg.sender, _id);

        // emit the event
        emit BirdCreated(_id, _name, _age, _color, _power, _health);
    }

    function feedBird(uint256 _id) public onlyOwner(_id) {
        // get the bird
        Bird memory _bird = birds[_id];

        // increase the health of the bird
        _bird.health += 1;

        // update the bird in the array
        birds[_id] = _bird;
    }

    // function to transfer a bird
    function transferBird(address _to, uint256 _id) public onlyOwner(_id) {
        // transfer the bird
        safeTransferFrom(msg.sender, _to, _id);

        // update the owner of the bird
        birdToOwner[_id] = _to;

        // decrement the number of birds the sender has
        ownerBirdCount[msg.sender]--;

        // increment the number of birds the receiver has
        ownerBirdCount[_to]++;
    }
}

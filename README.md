# Social Media Back-end

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The purpose in creating this application was to allow for users to be able to create/edit/delete thoughts, create/delete friends, and create/delete reactions to other people's thoughts.
This project uses mongoDB and the npm packages mongoose/express to run and keep track of users and their friends/thoughts/reactions.

If a user is to be deleted, all of the thoughts they have posted get deleted along with it!

To see the api in action, please check out my video guide [here]().

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Questions](#questions)
4. [License](#license)

## Installation

In order to use this application after cloning it down, you would need to run the following code block,

```
npm i
```

By doing so, you will be installing the following npm packages.

1. date-and-time
2. express
3. mongoose

There aren't any seeds for this api. So you can start playing around with the server once you run the following code block:

```
npm run start
```

## Usage

Please check out the video I had linked before. I have linked it once more below for your convenience.

Using this api, you are able to create / read / update/ delete users, create / read / update/ delete thoughts, create/delete reactions, create/delete friends!

You will have to use specific end points to target each and every one of them.

```
/api/users end point is used to READ and CREATE users

/api/users/:userId end point is used to READ, UPDATE, and DELETE one user.

/api/users/:userId/friends end point is used to CREATE a friend for a specific user.

/api/users/:userId/friends/:friendId end point is used to DELETE a specific friend from a specific user.

/api/thoughts end point is used to READ and CREATE thoughts

/api/thoughts/:thoughtId end point is used to READ, UPDATE, DELETE one thought

/api/thoughts/:thoughtId/reactions end point is used to CREATE reactions for a specific thought.

/api/thoughts/:thoughtId/reactions/:reactionId end point is used to DELETE a specific reaction from a specific thought.
```

### [Click here]() to see the video.

## Questions

If you have any questions, please feel free to reach out to me via:

1. Email: dhong0925@gmail.com
2. GitHub: Lunirs

## License

Licensed under the MIT license.

## Credits

Copyright © Daniel Hong All rights reserved.

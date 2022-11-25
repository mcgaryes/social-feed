import {v1} from "uuid";
import {Comment, Post} from "../entities/post";
import {Chance} from "chance";
import {AvatarGenerator} from "random-avatar-generator";

const chance = new Chance()
const avatarGenerator = new AvatarGenerator()

export function randomPostFactory(): Post {

    let id = v1();
    let date = chance.date({min: new Date(new Date().getTime() - chance.integer({min: 9000000, max: 90000000})), max: new Date()}) as Date

    return {
        avatar: avatarGenerator.generateRandomAvatar(id),
        comments: [
            randomCommentFactory(id, date),
            randomCommentFactory(id, date),
            randomCommentFactory(id, date)
        ].sort((a, b) => {

            let dateA = new Date(a.createdAt).getTime();
            let dateB = new Date(b.createdAt).getTime();

            if (dateA < dateB) {
                return 1
            } else if (dateA > dateB) {
                return -1
            } else {
                return 0
            }

        }),
        content: chance.paragraph(),
        createdAt: date.toISOString(),
        hypeCount: chance.integer({min: 80, max: 100}),
        id,
        shareCount: chance.integer({min: 80, max: 100}),
        username: chance.name().toLowerCase().replaceAll(" ", ""),
        viewCount: chance.integer({min: 80, max: 100})

    }

}

function randomCommentFactory(postId: string, postDate: Date): Comment {

    let id = v1();
    let date = chance.date({min: new Date(postDate.getTime() - chance.integer({min: 2000000, max: 9000000})), max: postDate}) as Date

    return {
        avatar: avatarGenerator.generateRandomAvatar(id),
        content: chance.paragraph(),
        createdAt: date.toISOString(),
        hypeCount: chance.integer({min: 1, max: 500}),
        id: id,
        pid: postId,
        replyCount: chance.integer({min: 1, max: 500}),
        shareCount: chance.integer({min: 1, max: 500}),
        username: chance.name().toLowerCase().replaceAll(" ", ""),
    }
}

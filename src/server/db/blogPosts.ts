import { Query } from './index';

const getBlogPosts = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '1' LIMIT 3`
);

const getFeatPosts = async () => Query(
    `SELECT * FROM blogPosts WHERE userid = '2' LIMIT 4`
);

export default {
    getBlogPosts,
    getFeatPosts
}
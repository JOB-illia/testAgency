import type { FC } from 'react';
import styled from './Posts.module.scss';
import { T } from "../Pages/MainPage";

interface IPost {
    posts: Array<T>;
    loading: boolean
}

const Posts: FC<IPost> = ({posts, loading}) => {
    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
        <div className={styled.posts}>
            {posts.map((post: T) => (
                <div key={post.id} className={styled.post}>
                    <span className={styled.post__id}>{post.id}</span>
                    <span className={`${styled.post__id} ${styled.post__id_album}`}>{post.albumId}</span>
                    <div className={styled.post__image}>
                        <img src={post.thumbnailUrl} alt={post.title} className={styled.post__img} />
                    </div>
                    <p className={styled.post__title}>
                        {post.title}
                    </p>
                </div>
            ))}
        </div>
    )
};

export default Posts;
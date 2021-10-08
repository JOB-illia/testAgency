import React, { FC, useState, useRef } from 'react';
import styled from './Posts.module.scss';
import { T } from "../Pages/MainPage";
import Modal from "../Modal";

interface IPost {
    posts: Array<T>;
    loading: boolean
}

const Posts: FC<IPost> = ({posts, loading}) => {
    const ref = useRef(null);
    const [url, setUrl] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleOpenModal = (e: any) => {
        const target = e.target;
        setUrl(target.dataset.image);
        setName(target.dataset.name);
        setShow(true);
    }

    if (loading) {
        return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
        <>
            <div className={styled.posts}>
                {posts.map((post: T) => (
                    <div
                        ref={ref}
                        key={post.id}
                        className={styled.post}

                    >
                        <span className={styled.post__id}>{post.id}</span>
                        <span className={`${styled.post__id} ${styled.post__id_album}`}>{post.albumId}</span>
                        <div
                            className={styled.post__image}
                            onClick={handleOpenModal}
                        >
                            <img
                                src={post.thumbnailUrl}
                                alt={post.title}
                                className={styled.post__img}
                                data-name={post.title}
                                data-image={post.url}
                            />
                        </div>
                        <p className={styled.post__title}>
                            {post.title}
                        </p>
                    </div>
                ))}
            </div>
            {show && (
                <Modal url={url} onClick={handleClose} nameImage={name} />
            )}
        </>
    )
};

export default Posts;
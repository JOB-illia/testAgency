import { FC, useState, useEffect } from 'react';
import axios from "axios";
import _ from 'lodash';

import Posts from "../Posts";
import Pagination from "../Pagination";

export interface T {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

const MainPage: FC = () => {
    const [initPhotos, setInitPhotos] = useState<Array<T>>([]);
    const [photos, setPhotos] = useState<Array<T>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [photosOnePage] = useState<number>(20)
    const [albumId, setAlbumId] = useState(0);

    const handleAlbumIdChange = (e: string) => {
        setAlbumId(parseInt(e));

        let newYear = _.filter(initPhotos, function (o) {
            return o.albumId === parseInt(e);
        });

        setCurrentPage(1);
        setPhotos(newYear);

    }

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            try {
                const { data }: any = await axios.get('http://jsonplaceholder.typicode.com/photos?limit=100');
                setInitPhotos(data.slice(1, 300));

                if (photos.length === 0) {
                    setPhotos(data.slice(1, 300));
                }


                setLoading(false);
            } catch (e) {
                setLoading(false)
                console.log(`error ${e}`)
            }
        }

        fetchPhotos();
    }, [photos]);

    const indexOfLastPost = currentPage * photosOnePage;
    const indexOfFirstPost = indexOfLastPost - photosOnePage;
    const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <div style={{ paddingBottom: '2rem' }}>
            <h1 style={{ textAlign: 'center', margin: '4rem' }}>Test</h1>
            <select
                value={albumId}
                style={{ width: '10rem', display: 'block', margin: '0 auto 5rem' }}
                onChange={(e) => handleAlbumIdChange(e.target.value)}
            >
                <option disabled value={0}>Sort by albumId</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={photosOnePage}
                totalPosts={photos.length}
                paginate={paginate}
            />
        </div>
    )
};

export default MainPage;
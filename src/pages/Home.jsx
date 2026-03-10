import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteBanner from '../components/QuoteBanner';
import Spotlight from '../components/Spotlight';
import SongList from '../components/SongList';
import { useSongs } from '../context/SongsContext';
import SkeletonLoader from '../components/SkeletonLoader';

const Home = () => {
    const { todaySong, loading } = useSongs();

    // SEO Optimization
    useEffect(() => {
        document.title = "Tunexa Vibes · Daily Music Mood";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', "Calm, emotional, late-night music vibes updated daily.");
        }
    }, []);

    if (loading) {
        return (
            <div className="fade-in">
                <div style={{ height: '40px' }}></div>
                <SkeletonLoader height="80px" style={{ margin: '30px 20px' }} />
                <SkeletonLoader type="card" />
                <SkeletonLoader type="list-item" />
                <SkeletonLoader type="list-item" />
                <SkeletonLoader type="list-item" />
            </div>
        );
    }

    return (
        <div className="fade-in">
            <div style={{ height: '40px' }}></div> {/* Hero breathing space */}
            <QuoteBanner />
            <Spotlight song={todaySong} />
            <SongList />
        </div>
    );
};

export default Home;

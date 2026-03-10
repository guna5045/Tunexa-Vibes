import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSongs } from '../context/SongsContext';
import SkeletonLoader from '../components/SkeletonLoader';

const SongDetail = () => {
    const { id } = useParams();
    const { songs, loading } = useSongs();
    const song = songs.find(s => s.id === id);

    // SEO Optimization
    useEffect(() => {
        if (song) {
            document.title = `${song.title} · Tunexa Vibes`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                // Use first line of lyrics or default
                const snippet = song.lyrics ? song.lyrics.split('\n')[0] : "Listen to this vibe.";
                metaDesc.setAttribute('content', snippet);
            }
        }
    }, [song]);

    if (loading) {
        return (
            <div style={{ padding: '80px 20px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <SkeletonLoader width="150px" height="20px" style={{ margin: '0 auto 60px' }} />
                <SkeletonLoader width="80%" height="60px" style={{ margin: '0 auto 20px' }} />
                <SkeletonLoader width="100px" height="20px" style={{ margin: '0 auto 60px' }} />
                <SkeletonLoader width="100%" height="200px" />
            </div>
        );
    }

    if (!song) {
        return <div style={{ padding: '80px', textAlign: 'center', color: 'var(--text-secondary)' }}>Vibe not found. <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>Return to Center</Link></div>;
    }

    return (
        <div className="fade-in" style={{
            paddingBottom: '100px',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '40px'
        }}>
            <div style={{ width: '100%', maxWidth: '700px', padding: '0 20px', textAlign: 'center' }}>

                <Link to="/" style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    marginBottom: '60px',
                    display: 'inline-block',
                    opacity: 0.6,
                    transition: 'opacity 0.3s',
                    textDecoration: 'none',
                    letterSpacing: '1px'
                }}
                    onMouseEnter={e => e.target.style.opacity = 1}
                    onMouseLeave={e => e.target.style.opacity = 0.6}
                >
                    &larr; Return to Vibes
                </Link>

                <h1 style={{
                    fontSize: '3.5rem',
                    marginBottom: '10px',
                    marginTop: '0',
                    background: 'linear-gradient(to right, #fff, #a0a0a0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: '300',
                    letterSpacing: '-1px',
                    lineHeight: '1.2'
                }}>
                    {song.title}
                </h1>

                <p style={{
                    color: 'var(--accent-glow)',
                    fontSize: '1rem',
                    marginBottom: '60px',
                    fontFamily: 'monospace',
                    letterSpacing: '2px',
                    opacity: 0.8
                }}>
                    {song.date}
                </p>

                <div style={{
                    whiteSpace: 'pre-wrap',
                    lineHeight: '2',
                    fontSize: '1.25rem',
                    color: '#eaeaea',
                    marginBottom: '80px',
                    textAlign: 'center',
                    fontWeight: '300',
                    opacity: 0.95
                }}>
                    {song.lyrics}
                </div>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {song.youtube_url && (
                        <a href={song.youtube_url} target="_blank" rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '16px 32px', borderRadius: '50px',
                                background: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)',
                                color: '#fff', fontWeight: '500', letterSpacing: '0.5px',
                                boxShadow: '0 10px 30px rgba(255, 0, 0, 0.2)',
                                transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s',
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 0, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 0, 0, 0.2)';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
                            Listen on YouTube
                        </a>
                    )}

                    {song.instagram_url && (
                        <a href={song.instagram_url} target="_blank" rel="noopener noreferrer"
                            style={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                padding: '16px 32px', borderRadius: '50px',
                                background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                color: '#fff', fontWeight: '500', letterSpacing: '0.5px',
                                boxShadow: '0 10px 30px rgba(220, 39, 67, 0.3)',
                                transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s',
                                textDecoration: 'none',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(220, 39, 67, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 39, 67, 0.3)';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                            Listen on Instagram
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SongDetail;

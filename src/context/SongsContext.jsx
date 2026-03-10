import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';

const SongsContext = createContext();

export const useSongs = () => useContext(SongsContext);

export const SongsProvider = ({ children }) => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [todaySong, setTodaySong] = useState(null);

    const fetchSongs = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('*')
                .order('date', { ascending: false });

            if (error) throw error;
            setSongs(data || []);
        } catch (error) {
            console.error("Error fetching songs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    // Derived state for "Today's Vibe"
    useEffect(() => {
        if (songs.length > 0) {
            // Logic: Find song matching today's date (local time)
            const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
            const match = songs.find(s => s.date === todayStr);
            // If no match, maybe fallback to most recent? 
            // User requirement: "If no song exists for today, show a graceful placeholder message." -> So null is fine.
            setTodaySong(match || null);
        } else {
            setTodaySong(null);
        }
    }, [songs]);

    const addSong = async (songData) => {
        try {
            // interactions with Supabase are async
            const { data, error } = await supabase
                .from('songs')
                .insert([{
                    title: songData.title,
                    date: songData.date || new Date().toISOString().split('T')[0],
                    lyrics: songData.lyrics,
                    youtube_url: songData.youtubeLink,
                    instagram_url: songData.instagramLink
                }])
                .select();

            if (error) throw error;

            // Refresh local state or append
            if (data) {
                setSongs(prev => [data[0], ...prev].sort((a, b) => new Date(b.date) - new Date(a.date)));
            }
        } catch (error) {
            console.error("Error adding song:", error);
            alert("Failed to add song: " + error.message);
        }
    };

    const deleteSong = async (id) => {
        try {
            const { error } = await supabase
                .from('songs')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setSongs(prev => prev.filter(s => s.id !== id));
        } catch (error) {
            console.error("Error deleting song:", error);
            alert("Failed to delete song: " + error.message);
        }
    };

    // "Set Today" is now implicit by Date in the DB, but Admin UI had a manual override.
    // User logic: "Fetch today’s song where date = current date."
    // So separate "setToday" manual override might conflict with "date" logic unless we update the date of the song to today.
    // Admin Dashboard Logic: "Add Song: Date field determines 'today’s song'".
    // So "Set as Today" button in admin probably should update the song's date to today.

    const setToday = async (id) => {
        try {
            const todayStr = new Date().toLocaleDateString('en-CA');
            const { error } = await supabase
                .from('songs')
                .update({ date: todayStr })
                .eq('id', id);

            if (error) throw error;

            // Refetch to ensure sort order and todaySong update
            fetchSongs();
        } catch (error) {
            console.error("Error updating song date:", error);
        }
    };

    return (
        <SongsContext.Provider value={{ songs, loading, todaySong, addSong, deleteSong, setToday }}>
            {children}
        </SongsContext.Provider>
    );
};

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const QuoteBanner = () => {
    const [quote, setQuote] = useState('');
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const fetchDailyQuote = async () => {
            setFade(false);

            // Calculate day of year (1-366)
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 0);
            const diff = now - start;
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);

            try {
                // Fetch quote for this day index. 
                // We use modulo if we have fewer quotes than days, but for now let's try direct match.
                // Assuming 'quotes' table has 'day_index' column.
                const { data, error } = await supabase
                    .from('quotes')
                    .select('quote_text')
                    .eq('day_index', dayOfYear) // or dayOfYear % totalQuotes if we knew total
                    .single();

                let todayQuote = "Feel the music, heal the soul"; // Default

                if (data) {
                    todayQuote = data.quote_text;
                } else {
                    // If specific day missing, maybe get a random one or ID 1?
                    // Let's try getting ID 1 as fallback if real data is sparse
                    const { data: fallback } = await supabase
                        .from('quotes')
                        .select('quote_text')
                        .limit(1)
                        .single();
                    if (fallback) todayQuote = fallback.quote_text;
                }

                setTimeout(() => {
                    setQuote(todayQuote);
                    setFade(true);
                }, 100);

            } catch (err) {
                console.error("Error fetching quote:", err);
                // Fallback default
                setQuote("Feel the music, heal the soul");
                setFade(true);
            }
        };

        fetchDailyQuote();
    }, []);

    return (
        <div style={{
            textAlign: 'center',
            padding: '30px 20px',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.5px'
        }}>
            <p>{quote.replace(/\.$/, '')}</p>
        </div>
    );
};

export default QuoteBanner;

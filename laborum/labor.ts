// Example definition of RecentlyPlayedTracksResponse
interface RecentlyPlayedTrack {
    id: string;
    name: string;
    artist: string;
    album: string;
    duration_ms: number;
}

interface RecentlyPlayedTracksResponse {
    tracks: RecentlyPlayedTrack[];
    total: number;
}

// Example implementation of getRecentlyPlayedTracksContent
const getRecentlyPlayedTracksContent: () => Promise<RecentlyPlayedTracksResponse> = async () => {
    try {
        // Simulate fetching data from an API
        const response = await fetch('https://api.example.com/recently-played-tracks');
        if (!response.ok) {
            throw new Error('Failed to fetch recently played tracks');
        }
        
        // Assuming response is JSON data
        const data = await response.json();
        
        // Return parsed data conforming to RecentlyPlayedTracksResponse
        return {
            tracks: data.tracks,
            total: data.total
        };
    } catch (error) {
        // Handle errors
        console.error('Error fetching recently played tracks:', error.message);
        throw error;
    }
};

// Example usage:
getRecentlyPlayedTracksContent()
    .then(response => {
        console.log('Recently played tracks:', response.tracks);
        console.log('Total tracks:', response.total);
    })
    .catch(error => {
        console.error('Error in getRecentlyPlayedTracksContent:', error);
    });

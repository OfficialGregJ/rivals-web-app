export interface PlayerData {
    player_name: string;
    player_uid: string;
    last_updated: number;
    player_icon_id: string;
    is_profile_private: boolean;
    region: string;
    achievements_completed: string;
    team: {
        id: string;
        name: string;
        type: string;
    };
    stats: {
        level: string;
        rank: {
            level: number;
            rank: string;
            score: number;
            win_count: number;
        };
        total_matches: number;
        total_wins: number;
        total_losses: number;
        total_playtime: {
            hours: number;
            minutes: number;
            seconds: number;
            raw: number;
        };
        ranked: {
            total_matches: number;
            total_wins: number;
            total_losses: number;
            total_kills: number;
            total_assists: number;
            total_deaths: number;
            total_playtime: {
                hours: number;
                minutes: number;
                seconds: number;
                raw: number;
            };
            kdr: string;
        };
        unranked: {
            total_matches: number;
            total_wins: number;
            total_losses: number;
            total_kills: number;
            total_assists: number;
            total_deaths: number;
            total_playtime: {
                minutes: number;
                seconds: number;
                raw: number;
            };
            kdr: string;
        };
    };
    hero_stats: {
        [key: string]: {
            hero_name: string | null;
            ranked?: {
                matches: number;
                wins: number;
                mvp: number;
                svp: number;
                kills: number;
                deaths: number;
                assists: number;
                kdr: string;
                kda: string;
                damage_given: number;
                damage_received: number;
                heal: number;
                playtime: {
                    minutes: number;
                    seconds: number;
                    raw: number;
                };
            };
            unranked?: {
                matches: number;
                wins: number;
                mvp: number;
                svp: number;
                kills: number;
                deaths: number;
                assists: number;
                kdr: string;
                kda: string;
                damage_given: number;
                damage_received: number;
                heal: number;
                playtime: {
                    minutes: number;
                    seconds: number;
                    raw: number;
                };
            };
            matchup?: {
                matches: number;
                wins: number;
                winrate: string;
            };
        };
    };
    maps: {
        [key: string]: {
            name: string;
            matches: number;
            wins: number;
            winrate: string;
            kills: number;
            deaths: number;
            assists: number;
            play_time: {
                minutes: number;
                seconds: number;
                raw: number;
            };
        };
    };
    rank_history: Array<{
        timestamp: number;
        rank: {
            old_score: number;
            old_rank: string;
            old_level: number;
            new_score: number;
            new_rank: string;
            new_level: number;
        };
    }>;
    teammates: Array<{
        name: string;
        player_uid: number;
        stats: {
            wins: number;
            matches: number;
        };
    }>;
    match_history: Array<{
        match_timestamp: number;
        match_duration: {
            minutes: number;
            seconds: number;
            raw: number;
        };
        season: string;
        match_uid: string;
        match_map: {
            id: number;
            name: string;
            gamemode: string;
        };
        score: {
            ally: number;
            enemy: number;
        };
        winner_side: number;
        mvp_uid: number;
        svp_uid: number;
        gamemode: {
            id: number;
            name: string;
        };
        stats: {
            kills: number;
            deaths: number;
            assists: number;
            is_win: boolean;
            has_escaped: boolean;
            hero: {
                id: number;
            };
        };
    }>;
}
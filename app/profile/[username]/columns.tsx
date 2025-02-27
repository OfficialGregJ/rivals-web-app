"use client"

import { Match } from "@/utils/interfaces";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Match>[] = [
    // Since its nested property, use accessorFn instead of accessorKey
    // When using accessorFn instead of accessorKey, need to assign id
    
    // Styling can be done in the divs
    {   
        id: "stats.is_win",

        accessorFn: (row) => row.stats.is_win,
        header: () => <div>Result</div>,
        cell: ({ row }) => {
            const res: string = Boolean(row.getValue("stats.is_win")) ? "Victory" : "Defeat";
            return <div>{res}</div>
        }
    },
    {
        id: "match_duration.raw",

        accessorFn: (row) => row.match_duration.raw,
        header: () => <div>Duration</div>,
        cell: ({ row }) => {
            const secs: number = parseInt(row.getValue("match_duration.raw")) % 60;
            const mins: number = Math.floor(parseInt(row.getValue("match_duration.raw")) / 60)
            return <div>{mins}:{String(secs).padStart(2, '0')}</div>;
        }
    },
    {
        accessorKey:"stats",

        header: () => <div>K/D/A</div>,
        cell: ({ row }) => {
            type statsSubset = {kills: string, deaths: string, assists: string}
            const stats: statsSubset = row.getValue("stats");
            const kills = stats.kills;
            const deaths = stats.deaths;
            const assists = stats.assists;
            return <div>{kills}/{deaths}/{assists}</div>
        }
    },
]